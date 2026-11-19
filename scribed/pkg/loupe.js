// A 40 mm uncoated biconvex singlet. Lengths below are in clear-aperture radii.
// The pupil looks through the rim plane at a sheet just inside the focal length.
const frontRadius = 2.5, backRadius = 12, thickness = 0.3155;
const eyeZ = 24, paperZ = -thickness - 3.1566;
const frontRimZ = Math.sqrt(frontRadius * frontRadius - 1) - frontRadius;
const sourceZoom = 3.25;
const samples = 512;

// SCHOTT N-BK7 Sellmeier coefficients, with wavelength in micrometres.
// https://media.schott.com/api/public/content/41e799d0bf874807a0bb8e702fbb75b5
const bands = [0.65, 0.60, 0.55, 0.50, 0.46].map(wavelength => {
  const l2 = wavelength * wavelength;
  const index = Math.sqrt(1 + 1.03961212 * l2 / (l2 - 0.00600069867)
    + 0.231792344 * l2 / (l2 - 0.0200179144) + 1.01046945 * l2 / (l2 - 103.560653));
  return {index, transmission10mm:wavelength < 0.50 ? 0.997 : 0.998};
});

const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
function unit(x, z) {
  const length = Math.hypot(x, z);
  return [x / length, z / length];
}

// Rotational symmetry puts each ray and both normals in one radial section.
function surface(point, ray, centerZ, radius, root) {
  const z = point[1] - centerZ;
  const b = point[0] * ray[0] + z * ray[1];
  const t = -b + root * Math.sqrt(b*b - point[0]*point[0] - z*z + radius*radius);
  return [point[0] + t * ray[0], point[1] + t * ray[1]];
}

// Snell's law gives the direction; the two Fresnel polarizations share the light equally.
function boundary(ray, normal, from, to) {
  const ci = -dot(ray, normal), eta = from / to;
  const ct2 = 1 - eta * eta * (1 - ci * ci);
  if (ct2 <= 0) return {ray:null, reflection:1};
  const ct = Math.sqrt(ct2), bend = eta * ci - ct;
  const rs = (from * ci - to * ct) / (from * ci + to * ct);
  const rp = (to * ci - from * ct) / (to * ci + from * ct);
  return {ray:[eta * ray[0] + bend * normal[0], eta * ray[1] + bend * normal[1]],
    reflection:(rs * rs + rp * rp) / 2};
}
function reflect(ray, normal) {
  const twice = 2 * dot(ray, normal);
  return [ray[0] - twice * normal[0], ray[1] - twice * normal[1]];
}
function path(a, b) { return Math.hypot(a[0]-b[0], a[1]-b[1]); }

function trace(front, normal, incident, band, reflections) {
  const entry = boundary(incident, normal, 1, band.index);
  const back = surface(front, entry.ray, backRadius-thickness, backRadius, 1);
  const insideNormal = [-back[0] / backRadius, (backRadius-thickness-back[1]) / backRadius];
  const exit = boundary(entry.ray, insideNormal, band.index, 1);
  // Beer–Lambert attenuation over the actual path in a glass of 20 mm radius.
  const transmit = (1 - entry.reflection) * band.transmission10mm ** (2 * path(front, back));
  const hit = exit.ray ? back[0] + (paperZ - back[1]) * exit.ray[0] / exit.ray[1] : 0;
  const result = {radius:hit * sourceZoom, energy:transmit * (1 - exit.reflection)};
  if (reflections) {
    result.front = reflect(incident, normal);
    result.frontEnergy = entry.reflection;
    // The rear-surface reflection crosses the glass a second time to reach the room.
    const bounce = reflect(entry.ray, insideNormal);
    const top = surface(back, bounce, -frontRadius, frontRadius, 1);
    const inward = [-top[0] / frontRadius, -(top[1]+frontRadius) / frontRadius];
    const escape = boundary(bounce, inward, band.index, 1);
    result.back = escape.ray || [0, 1];
    result.backEnergy = Math.abs(top[0]) <= 1 ? transmit * exit.reflection
      * band.transmission10mm ** (2 * path(back,top)) * (1 - escape.reflection) : 0;
  }
  return result;
}

function radialProfile() {
  const table = new Float32Array(samples * 4 * 4);
  for (let i = 0; i < samples; i++) {
    const incident = unit(i / (samples - 1), frontRimZ - eyeZ);
    const front = surface([0, eyeZ], incident, -frontRadius, frontRadius, -1);
    const normal = [front[0] / frontRadius, (front[1]+frontRadius) / frontRadius];
    const rays = bands.map((band, j) => trace(front, normal, incident, band, j === 2));
    const green = rays[2];
    table.set(rays.slice(0,4).map(ray => ray.radius), 4*i);
    table.set([rays[4].radius, ...green.front, green.frontEnergy], 4*(samples+i));
    table.set(rays.slice(0,4).map(ray => ray.energy), 4*(2*samples+i));
    table.set([rays[4].energy, ...green.back, green.backEnergy], 4*(3*samples+i));
  }
  return table;
}

const vertex = `#version 300 es
void main() {
  vec2 corner = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(2.0 * corner - 1.0, 0.0, 1.0);
}`;

const fragment = `#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D manuscript, profile;
uniform vec2 lamp, cropOffset;
out vec4 color;

vec4 profileRow(int row, int i, float f) {
  return mix(texelFetch(profile, ivec2(i,row), 0), texelFetch(profile, ivec2(i+1,row), 0), f);
}
vec3 linearInk(vec2 axis, float radius) {
  vec3 ink = texture(manuscript, 0.5 + cropOffset + 0.5 * axis * radius).rgb;
  return mix(ink / 12.92, pow((ink + 0.055) / 1.055, vec3(2.4)), step(0.04045, ink));
}
vec3 room(vec2 axis, vec2 reflected) {
  vec3 dir = vec3(axis * reflected.x, reflected.y);
  float alignment = dot(dir, normalize(vec3(lamp, 1.0)));
  float shade = smoothstep(0.943, 0.992, alignment);
  float light = smoothstep(0.982, 0.999, alignment);
  return mix(vec3(0.06,0.045,0.031), vec3(0.19,0.17,0.14), max(dir.z,0.0))
    + vec3(1.0,0.88,0.68) * (0.50 * shade + 3.5 * light);
}
void main() {
  vec2 p = 2.0 * gl_FragCoord.xy / float(textureSize(manuscript,0).x) - 1.0;
  float r = length(p);
  if (r > 1.0) { color = vec4(0.54,0.44,0.29,1.0); return; }
  vec2 axis = p / max(r, 0.00001);
  int last = textureSize(profile,0).x - 1;
  float position = r * float(last);
  int i = min(int(position), last-1);
  float f = position - float(i);
  vec4 radii = profileRow(0,i,f), front = profileRow(1,i,f);
  vec4 energy = profileRow(2,i,f), back = profileRow(3,i,f);
  // Integrate overlapping RGB bands in linear light. A dark pen stroke gets
  // a smooth fringe where wavelengths separate, and stays neutral on axis.
  vec3 light = linearInk(axis,radii.x) * vec3(.38,0.,0.) * energy.x
    + linearInk(axis,radii.y) * vec3(.53,.09,0.) * energy.y
    + linearInk(axis,radii.z) * vec3(.09,.68,.015) * energy.z
    + linearInk(axis,radii.w) * vec3(0.,.23,.245) * energy.w
    + linearInk(axis,front.x) * vec3(0.,0.,.74) * back.x;
  light += front.w * room(axis, front.yz) + back.w * room(axis, back.yz);
  vec3 srgb = mix(12.92 * light, 1.055 * pow(light, vec3(1.0/2.4)) - .055, step(.0031308, light));
  color = vec4(srgb, 1.0);
}`;

function prepare(gl) {
  const program = gl.createProgram();
  if (!program) return null;
  for (const [kind, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment]]) {
    const shader = gl.createShader(kind);
    if (!shader) { gl.deleteProgram(program); return null; }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    gl.attachShader(program, shader);
    gl.deleteShader(shader);
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl.deleteProgram(program); return null; }
  gl.useProgram(program);
  gl.uniform1i(gl.getUniformLocation(program, "manuscript"), 0);
  gl.uniform1i(gl.getUniformLocation(program, "profile"), 1);
  const profile = gl.createTexture();
  if (!profile) { gl.deleteProgram(program); return null; }
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, profile);
  gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA32F, samples, 4);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, samples, 4, gl.RGBA, gl.FLOAT, radialProfile());
  return {gl, program, profile, lamp:gl.getUniformLocation(program,"lamp"),
    cropOffset:gl.getUniformLocation(program,"cropOffset"), paper:null, size:0};
}

export function createLoupe() {
  let state, failed = false;
  function release() {
    failed = false;
    if (state?.paper) {
      state.gl.deleteTexture(state.paper);
      state.paper = null;
      state.size = 0;
    }
  }
  function draw(gl, side, lampX, lampY, cropX = 0, cropY = 0) {
    // The sheet pass has bound the default framebuffer and set a square viewport.
    // Keep its magnified image if this device cannot allocate the optical pass.
    if (failed || gl.isContextLost()) return;
    state ||= prepare(gl);
    if (!state) { failed = true; return; }
    gl.activeTexture(gl.TEXTURE0);
    if (side !== state.size) {
      release();
      state.paper = gl.createTexture();
      if (!state.paper) { failed = true; return; }
      gl.bindTexture(gl.TEXTURE_2D, state.paper);
      gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA8, side, side);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      state.size = side;
    } else {
      gl.bindTexture(gl.TEXTURE_2D, state.paper);
    }
    const left = Math.floor(cropX), bottom = Math.floor(cropY);
    gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, 0, 0, left, bottom, side, side);
    if (gl.getError() !== gl.NO_ERROR) { release(); failed = true; return; }
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, state.profile);
    gl.useProgram(state.program);
    gl.uniform2f(state.lamp, lampX, lampY);
    gl.uniform2f(state.cropOffset, (cropX-left)/side, (cropY-bottom)/side);
    gl.viewport(0, 0, side, side);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    return true;
  }
  return {sourceZoom, draw, release};
}
