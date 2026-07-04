(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="160",ns={ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qp=0,nu=1,Yp=2,kf=1,$p=2,ti=3,Hn=0,qe=1,vn=2,Si=0,Gs=1,iu=2,su=3,ru=4,Zp=5,zi=100,jp=101,Kp=102,ou=103,au=104,Jp=200,Qp=201,tm=202,em=203,Qc=204,tl=205,nm=206,im=207,sm=208,rm=209,om=210,am=211,cm=212,lm=213,um=214,hm=0,fm=1,dm=2,oa=3,pm=4,mm=5,gm=6,_m=7,Hf=0,xm=1,vm=2,bi=0,ym=1,Mm=2,Sm=3,Ll=4,bm=5,Em=6,Gf=300,qs=301,Ys=302,el=303,nl=304,Sa=306,aa=1e3,Nn=1001,il=1002,Ke=1003,cu=1004,za=1005,xn=1006,wm=1007,Ir=1008,Ei=1009,Tm=1010,Am=1011,Dl=1012,Vf=1013,xi=1014,vi=1015,Ur=1016,Wf=1017,Xf=1018,Vi=1020,Rm=1021,Fn=1023,Cm=1024,Pm=1025,Wi=1026,$s=1027,Lm=1028,qf=1029,Dm=1030,Yf=1031,$f=1033,ka=33776,Ha=33777,Ga=33778,Va=33779,lu=35840,uu=35841,hu=35842,fu=35843,Zf=36196,du=37492,pu=37496,mu=37808,gu=37809,_u=37810,xu=37811,vu=37812,yu=37813,Mu=37814,Su=37815,bu=37816,Eu=37817,wu=37818,Tu=37819,Au=37820,Ru=37821,Wa=36492,Cu=36494,Pu=36495,Im=36283,Lu=36284,Du=36285,Iu=36286,jf=3e3,Xi=3001,Um=3200,Nm=3201,Kf=0,Fm=1,yn="",De="srgb",ri="srgb-linear",Il="display-p3",ba="display-p3-linear",ca="linear",me="srgb",la="rec709",ua="p3",ss=7680,Uu=519,Om=512,Bm=513,zm=514,Jf=515,km=516,Hm=517,Gm=518,Vm=519,Nu=35044,Fu="300 es",sl=1035,ii=2e3,ha=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,rl=180/Math.PI;function Ks(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function Wm(i,t){return(i%t+t)%t}function Xa(i,t,e){return(1-e)*i+e*t}function Ou(i){return(i&i-1)===0&&i!==0}function ol(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xm={DEG2RAD:Jo};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,r,a,o,c,l){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],_=s[4],y=s[7],b=s[2],w=s[5],S=s[8];return r[0]=a*x+o*v+c*b,r[3]=a*m+o*_+c*w,r[6]=a*p+o*y+c*S,r[1]=l*x+u*v+h*b,r[4]=l*m+u*_+h*w,r[7]=l*p+u*y+h*S,r[2]=f*x+d*v+g*b,r[5]=f*m+d*_+g*w,r[8]=f*p+d*y+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new ee;function Qf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qm(){const i=fa("canvas");return i.style.display="block",i}const Bu={};function br(i){i in Bu||(Bu[i]=!0,console.warn(i))}const zu=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ku=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[ri]:{transfer:ca,primaries:la,toReference:i=>i,fromReference:i=>i},[De]:{transfer:me,primaries:la,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ba]:{transfer:ca,primaries:ua,toReference:i=>i.applyMatrix3(ku),fromReference:i=>i.applyMatrix3(zu)},[Il]:{transfer:me,primaries:ua,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ku),fromReference:i=>i.applyMatrix3(zu).convertLinearToSRGB()}},Ym=new Set([ri,ba]),fe={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ym.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Xr[t].toReference,s=Xr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Xr[i].primaries},getTransfer:function(i){return i===yn?ca:Xr[i].transfer}};function Vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rs;class td{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=fa("canvas")),rs.width=t.width,rs.height=t.height;const n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vs(e[n]/255)*255):e[n]=Vs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $m=0;class ed{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Ks(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($a(s[a].image)):r.push($a(s[a]))}else r=$a(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zm=0;class sn extends Ji{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=Nn,s=Nn,r=xn,a=Ir,o=Fn,c=Ei,l=sn.DEFAULT_ANISOTROPY,u=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Ks(),this.name="",this.source=new ed(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Xi?De:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case aa:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case aa:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?Xi:jf}set encoding(t){br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Xi?De:yn}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Gf;sn.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(d+1)/2,b=(p+1)/2,w=(u+f)/4,S=(h+x)/4,L=(g+m)/4;return _>y&&_>b?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=w/n,r=S/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=S/r,s=L/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jm extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xi?De:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ed(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends jm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nd extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Km extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const b=Math.sqrt(_),w=Math.atan2(b,p*v);m=Math.sin(m*w)/b,o=Math.sin(o*w)/b}const y=o*v;if(c=c*m+f*y,l=l*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-o*d,t[e+2]=l*g+u*d+o*f-c*h,t[e+3]=u*g-o*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new A,Hu=new $i;class ue{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Yr.subVectors(this.max,sr),os.subVectors(t.a,sr),as.subVectors(t.b,sr),cs.subVectors(t.c,sr),ci.subVectors(as,os),li.subVectors(cs,as),Ci.subVectors(os,cs);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ci.z,Ci.y,ci.z,0,-ci.x,li.z,0,-li.x,Ci.z,0,-Ci.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ci.y,Ci.x,0];return!ja(e,os,as,cs,Yr)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,os,as,cs,Yr))?!1:($r.crossVectors(ci,li),e=[$r.x,$r.y,$r.z],ja(e,os,as,cs,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new A,new A,new A,new A,new A,new A,new A,new A],Cn=new A,qr=new ue,os=new A,as=new A,cs=new A,ci=new A,li=new A,Ci=new A,sr=new A,Yr=new A,$r=new A,Pi=new A;function ja(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);const o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Jm=new ue,rr=new A,Ka=new A;class Qi{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);const e=rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(Ka)),this.expandByPoint(rr.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new A,Ja=new A,Zr=new A,ui=new A,Qa=new A,jr=new A,tc=new A;class Js{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Ja);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Zr),o=ui.dot(this.direction),c=-ui.dot(Zr),l=ui.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ja).addScaledVector(Zr,f),d}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){Qa.subVectors(e,t),jr.subVectors(n,t),tc.crossVectors(Qa,jr);let a=this.direction.dot(tc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);const c=o*this.direction.dot(jr.crossVectors(ui,jr));if(c<0)return null;const l=o*this.direction.dot(Qa.cross(ui));if(l<0||c+l>a)return null;const u=-o*ui.dot(tc);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,x=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,x=l*h;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,x=l*h;e[0]=f-x*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,x=o*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qm,t,tg)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(n,cn),hi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(n,cn)),hi.normalize(),Kr.crossVectors(cn,hi),s[0]=hi.x,s[4]=Kr.x,s[8]=cn.x,s[1]=hi.y,s[5]=Kr.y,s[9]=cn.y,s[2]=hi.z,s[6]=Kr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],b=n[15],w=s[0],S=s[4],L=s[8],M=s[12],E=s[1],N=s[5],O=s[9],I=s[13],C=s[2],D=s[6],k=s[10],Y=s[14],X=s[3],H=s[7],K=s[11],tt=s[15];return r[0]=a*w+o*E+c*C+l*X,r[4]=a*S+o*N+c*D+l*H,r[8]=a*L+o*O+c*k+l*K,r[12]=a*M+o*I+c*Y+l*tt,r[1]=u*w+h*E+f*C+d*X,r[5]=u*S+h*N+f*D+d*H,r[9]=u*L+h*O+f*k+d*K,r[13]=u*M+h*I+f*Y+d*tt,r[2]=g*w+x*E+m*C+p*X,r[6]=g*S+x*N+m*D+p*H,r[10]=g*L+x*O+m*k+p*K,r[14]=g*M+x*I+m*Y+p*tt,r[3]=v*w+_*E+y*C+b*X,r[7]=v*S+_*N+y*D+b*H,r[11]=v*L+_*O+y*k+b*K,r[15]=v*M+_*I+y*Y+b*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*d-n*c*d)+x*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*u-r*c*u)+m*(+e*l*h-e*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+p*(-s*o*u-e*c*h+e*o*f+s*a*h-n*a*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=h*m*l-x*f*l+x*c*d-o*m*d-h*c*p+o*f*p,_=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,y=u*x*l-g*h*l+g*o*d-a*x*d-u*o*p+a*h*p,b=g*h*c-u*x*c-g*o*f+a*x*f+u*o*m-a*h*m,w=e*v+n*_+s*y+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=v*S,t[1]=(x*f*r-h*m*r-x*s*d+n*m*d+h*s*p-n*f*p)*S,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*S,t[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*d-n*c*d)*S,t[4]=_*S,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*S,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*S,t[7]=(a*f*r-u*c*r+u*s*l-e*f*l-a*s*d+e*c*d)*S,t[8]=y*S,t[9]=(g*h*r-u*x*r-g*n*d+e*x*d+u*n*p-e*h*p)*S,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*p+e*o*p)*S,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*d-e*o*d)*S,t[12]=b*S,t[13]=(u*x*s-g*h*s+g*n*f-e*x*f-u*n*m+e*h*m)*S,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*S,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*f+e*o*f)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,x=a*u,m=a*h,p=o*h,v=c*l,_=c*u,y=c*h,b=n.x,w=n.y,S=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+y)*b,s[2]=(g-_)*b,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(f+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+_)*S,s[9]=(m-v)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ls.set(s[0],s[1],s[2]).length();const a=ls.set(s[4],s[5],s[6]).length(),o=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const l=1/r,u=1/a,h=1/o;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,e.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ii){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===ii)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ha)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ii){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*l,d=(n+s)*u;let g,x;if(o===ii)g=(a+r)*h,x=-2*h;else if(o===ha)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new A,Pn=new ae,Qm=new A(0,0,0),tg=new A(1,1,1),hi=new A,Kr=new A,cn=new A,Gu=new ae,Vu=new $i;class Ea{constructor(t=0,e=0,n=0,s=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eg=0;const Wu=new A,us=new $i,$n=new ae,Jr=new A,or=new A,ng=new A,ig=new $i,Xu=new A(1,0,0),qu=new A(0,1,0),Yu=new A(0,0,1),sg={type:"added"},rg={type:"removed"};class ke extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new A,e=new Ea,n=new $i,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new ee}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Xu,t)}rotateY(t){return this.rotateOnAxis(qu,t)}rotateZ(t){return this.rotateOnAxis(Yu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xu,t)}translateY(t){return this.translateOnAxis(qu,t)}translateZ(t){return this.translateOnAxis(Yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(or,Jr,this.up):$n.lookAt(Jr,or,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),us.setFromRotationMatrix($n),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(sg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rg)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ke.DEFAULT_UP=new A(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new A,Zn=new A,ec=new A,jn=new A,hs=new A,fs=new A,$u=new A,nc=new A,ic=new A,sc=new A;let Qr=!1;class ve{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ln.subVectors(s,e),Zn.subVectors(n,e),ec.subVectors(t,e);const a=Ln.dot(Ln),o=Ln.dot(Zn),c=Ln.dot(ec),l=Zn.dot(Zn),u=Zn.dot(ec),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static isFrontFacing(t,e,n,s){return Ln.subVectors(n,e),Zn.subVectors(t,e),Ln.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Ln.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),ve.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return ve.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;hs.subVectors(s,n),fs.subVectors(r,n),nc.subVectors(t,n);const c=hs.dot(nc),l=fs.dot(nc);if(c<=0&&l<=0)return e.copy(n);ic.subVectors(t,s);const u=hs.dot(ic),h=fs.dot(ic);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(hs,a);sc.subVectors(t,r);const d=hs.dot(sc),g=fs.dot(sc);if(g>=0&&d<=g)return e.copy(r);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(fs,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return $u.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector($u,o);const p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(hs,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},to={h:0,s:0,l:0};function rc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Wm(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=rc(a,r,t+1/3),this.g=rc(a,r,t),this.b=rc(a,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}copyLinearToSRGB(t){return this.r=Ya(t.r),this.g=Ya(t.g),this.b=Ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return fe.fromWorkingColorSpace(We.copy(this),t),Math.round(Be(We.r*255,0,255))*65536+Math.round(Be(We.g*255,0,255))*256+Math.round(Be(We.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=De){fe.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(to);const n=Xa(fi.h,to.h,e),s=Xa(fi.s,to.s,e),r=Xa(fi.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new re;re.NAMES=id;let og=0;class Qs extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Gs,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=tl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qc&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wa extends Qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new A,eo=new pt;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nu&&(t.usage=this.usage),t}}class sd extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rd extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ag=0;const pn=new ae,oc=new ke,ds=new A,ln=new ue,ar=new ue,Oe=new A;class Je extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qf(t)?rd:sd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new we(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ue);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(ln.min,ar.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,ar.max),ln.expandByPoint(Oe)):(ln.expandByPoint(ar.min),ln.expandByPoint(ar.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Oe.fromBufferAttribute(o,l),c&&(ds.fromBufferAttribute(t,l),Oe.add(ds)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<o;E++)l[E]=new A,u[E]=new A;const h=new A,f=new A,d=new A,g=new pt,x=new pt,m=new pt,p=new A,v=new A;function _(E,N,O){h.fromArray(s,E*3),f.fromArray(s,N*3),d.fromArray(s,O*3),g.fromArray(a,E*2),x.fromArray(a,N*2),m.fromArray(a,O*2),f.sub(h),d.sub(h),x.sub(g),m.sub(g);const I=1/(x.x*m.y-m.x*x.y);isFinite(I)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(I),v.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(I),l[E].add(p),l[N].add(p),l[O].add(p),u[E].add(v),u[N].add(v),u[O].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,N=y.length;E<N;++E){const O=y[E],I=O.start,C=O.count;for(let D=I,k=I+C;D<k;D+=3)_(n[D+0],n[D+1],n[D+2])}const b=new A,w=new A,S=new A,L=new A;function M(E){S.fromArray(r,E*3),L.copy(S);const N=l[E];b.copy(N),b.sub(S.multiplyScalar(S.dot(N))).normalize(),w.crossVectors(L,N);const I=w.dot(u[E])<0?-1:1;c[E*4]=b.x,c[E*4+1]=b.y,c[E*4+2]=b.z,c[E*4+3]=I}for(let E=0,N=y.length;E<N;++E){const O=y[E],I=O.start,C=O.count;for(let D=I,k=I+C;D<k;D+=3)M(n[D+0]),M(n[D+1]),M(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,u=new A,h=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Ie(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zu=new ae,Li=new Js,no=new Qi,ju=new A,ps=new A,ms=new A,gs=new A,ac=new A,io=new A,so=new pt,ro=new pt,oo=new pt,Ku=new A,Ju=new A,Qu=new A,ao=new A,co=new A;class oe extends ke{constructor(t=new Je,e=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(ac.fromBufferAttribute(h,t),a?io.addScaledVector(ac,u):io.addScaledVector(ac.sub(e),u))}e.add(io)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(no.containsPoint(Li.origin)===!1&&(Li.intersectSphere(no,ju)===null||Li.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&(Zu.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=_;y<b;y+=3){const w=o.getX(y),S=o.getX(y+1),L=o.getX(y+2);s=lo(this,p,t,n,l,u,h,w,S,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=lo(this,a,t,n,l,u,h,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=_;y<b;y+=3){const w=y,S=y+1,L=y+2;s=lo(this,p,t,n,l,u,h,w,S,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=m,_=m+1,y=m+2;s=lo(this,a,t,n,l,u,h,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cg(i,t,e,n,s,r,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Hn,o),c===null)return null;co.copy(o),co.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(co);return l<e.near||l>e.far?null:{distance:l,point:co.clone(),object:i}}function lo(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ps),i.getVertexPosition(c,ms),i.getVertexPosition(l,gs);const u=cg(i,t,e,n,ps,ms,gs,ao);if(u){s&&(so.fromBufferAttribute(s,o),ro.fromBufferAttribute(s,c),oo.fromBufferAttribute(s,l),u.uv=ve.getInterpolation(ao,ps,ms,gs,so,ro,oo,new pt)),r&&(so.fromBufferAttribute(r,o),ro.fromBufferAttribute(r,c),oo.fromBufferAttribute(r,l),u.uv1=ve.getInterpolation(ao,ps,ms,gs,so,ro,oo,new pt),u.uv2=u.uv1),a&&(Ku.fromBufferAttribute(a,o),Ju.fromBufferAttribute(a,c),Qu.fromBufferAttribute(a,l),u.normal=ve.getInterpolation(ao,ps,ms,gs,Ku,Ju,Qu,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new A,materialIndex:0};ve.getNormal(ps,ms,gs,h.normal),u.face=h}return u}class fn extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(h,2));function g(x,m,p,v,_,y,b,w,S,L,M){const E=y/S,N=b/L,O=y/2,I=b/2,C=w/2,D=S+1,k=L+1;let Y=0,X=0;const H=new A;for(let K=0;K<k;K++){const tt=K*N-I;for(let it=0;it<D;it++){const $=it*E-O;H[x]=$*v,H[m]=tt*_,H[p]=C,l.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[p]=w>0?1:-1,u.push(H.x,H.y,H.z),h.push(it/S),h.push(1-K/L),Y+=1}}for(let K=0;K<L;K++)for(let tt=0;tt<S;tt++){const it=f+tt+D*K,$=f+tt+D*(K+1),nt=f+(tt+1)+D*(K+1),lt=f+(tt+1)+D*K;c.push(it,$,lt),c.push($,nt,lt),X+=6}o.addGroup(d,X,M),d+=X,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Zs(i[e]);for(const s in n)t[s]=n[s]}return t}function lg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function od(i){return i.getRenderTarget()===null?i.outputColorSpace:fe.workingColorSpace}const ug={clone:Zs,merge:Ze};var hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=lg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ad extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends ad{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _s=-90,xs=1;class dg extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(_s,xs,t,e);s.layers=this.layers,this.add(s);const r=new en(_s,xs,t,e);r.layers=this.layers,this.add(r);const a=new en(_s,xs,t,e);a.layers=this.layers,this.add(a);const o=new en(_s,xs,t,e);o.layers=this.layers,this.add(o);const c=new en(_s,xs,t,e);c.layers=this.layers,this.add(c);const l=new en(_s,xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cd extends sn{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pg extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Xi?De:yn),this.texture=new cd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fn(5,5,5),r=new Zi({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Si});r.uniforms.tEquirect.value=e;const a=new oe(s,r),o=e.minFilter;return e.minFilter===Ir&&(e.minFilter=xn),new dg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const cc=new A,mg=new A,gg=new ee;class In{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=cc.subVectors(n,e).cross(mg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(cc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gg.getNormalMatrix(t),s=this.coplanarPoint(cc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Qi,uo=new A;class Nl{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-d,y-p).normalize(),n[1].setComponents(c+r,f+l,m+d,y+p).normalize(),n[2].setComponents(c+a,f+u,m+g,y+v).normalize(),n[3].setComponents(c-a,f-u,m-g,y-v).normalize(),n[4].setComponents(c-o,f-h,m-x,y-_).normalize(),e===ii)n[5].setComponents(c+o,f+h,m+x,y+_).normalize();else if(e===ha)n[5].setComponents(o,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(uo.x=s.normal.x>0?t.max.x:t.min.x,uo.y=s.normal.y>0?t.max.y:t.min.y,uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _g(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,f=l.usage,d=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),l.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),d.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){const p=g[x];e?i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class Ta extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*f-a;for(let _=0;_<l;_++){const y=_*h-r;g.push(y,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const _=v+l*p,y=v+l*(p+1),b=v+1+l*(p+1),w=v+1+l*p;d.push(_,y,w),d.push(y,b,w)}this.setIndex(d),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.width,t.height,t.widthSegments,t.heightSegments)}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,I0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const __=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,w_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:xg,alphahash_pars_fragment:vg,alphamap_fragment:yg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:bg,aomap_fragment:Eg,aomap_pars_fragment:wg,batching_pars_vertex:Tg,batching_vertex:Ag,begin_vertex:Rg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Fg,color_fragment:Og,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:kg,common:Hg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Vg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:$g,colorspace_pars_fragment:Zg,envmap_fragment:jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:c0,lights_lambert_pars_fragment:l0,lights_pars_begin:u0,lights_toon_fragment:f0,lights_toon_pars_fragment:d0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:_0,lights_fragment_begin:x0,lights_fragment_maps:v0,lights_fragment_end:y0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:E0,map_fragment:w0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:P0,morphcolor_vertex:L0,morphnormal_vertex:D0,morphtarget_pars_vertex:I0,morphtarget_vertex:U0,normal_fragment_begin:N0,normal_fragment_maps:F0,normal_pars_fragment:O0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:W0,opaque_fragment:X0,packing:q0,premultiplied_alpha_fragment:Y0,project_vertex:$0,dithering_fragment:Z0,dithering_pars_fragment:j0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:t_,shadowmap_vertex:e_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:o_,specularmap_fragment:a_,specularmap_pars_fragment:c_,tonemapping_fragment:l_,tonemapping_pars_fragment:u_,transmission_fragment:h_,transmission_pars_fragment:f_,uv_pars_fragment:d_,uv_pars_vertex:p_,uv_vertex:m_,worldpos_vertex:g_,background_vert:__,background_frag:x_,backgroundCube_vert:v_,backgroundCube_frag:y_,cube_vert:M_,cube_frag:S_,depth_vert:b_,depth_frag:E_,distanceRGBA_vert:w_,distanceRGBA_frag:T_,equirect_vert:A_,equirect_frag:R_,linedashed_vert:C_,linedashed_frag:P_,meshbasic_vert:L_,meshbasic_frag:D_,meshlambert_vert:I_,meshlambert_frag:U_,meshmatcap_vert:N_,meshmatcap_frag:F_,meshnormal_vert:O_,meshnormal_frag:B_,meshphong_vert:z_,meshphong_frag:k_,meshphysical_vert:H_,meshphysical_frag:G_,meshtoon_vert:V_,meshtoon_frag:W_,points_vert:X_,points_frag:q_,shadow_vert:Y_,shadow_frag:$_,sprite_vert:Z_,sprite_frag:j_},yt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},zn={basic:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new re(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ze([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ze([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new re(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ze([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ze([yt.points,yt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ze([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ze([yt.common,yt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ze([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ze([yt.sprite,yt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Ze([yt.common,yt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Ze([yt.lights,yt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};zn.physical={uniforms:Ze([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const ho={r:0,b:0,g:0};function K_(i,t,e,n,s,r,a){const o=new re(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),v=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Sa)?(u===void 0&&(u=new oe(new fn(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Zs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=fe.getTransfer(_.colorSpace)!==me,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new oe(new Ta(2,2),new Zi({name:"BackgroundMaterial",uniforms:Zs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=fe.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(ho,od(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:g}}function J_(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function h(C,D,k,Y,X){let H=!1;if(a){const K=x(Y,k,D);l!==K&&(l=K,d(l.object)),H=p(C,Y,k,X),H&&v(C,Y,k,X)}else{const K=D.wireframe===!0;(l.geometry!==Y.id||l.program!==k.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=k.id,l.wireframe=K,H=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,L(C,D,k,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function x(C,D,k){const Y=k.wireframe===!0;let X=o[C.id];X===void 0&&(X={},o[C.id]=X);let H=X[D.id];H===void 0&&(H={},X[D.id]=H);let K=H[Y];return K===void 0&&(K=m(f()),H[Y]=K),K}function m(C){const D=[],k=[],Y=[];for(let X=0;X<s;X++)D[X]=0,k[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:Y,object:C,attributes:{},index:null}}function p(C,D,k,Y){const X=l.attributes,H=D.attributes;let K=0;const tt=k.getAttributes();for(const it in tt)if(tt[it].location>=0){const nt=X[it];let lt=H[it];if(lt===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),nt===void 0||nt.attribute!==lt||lt&&nt.data!==lt.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function v(C,D,k,Y){const X={},H=D.attributes;let K=0;const tt=k.getAttributes();for(const it in tt)if(tt[it].location>=0){let nt=H[it];nt===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor));const lt={};lt.attribute=nt,nt&&nt.data&&(lt.data=nt.data),X[it]=lt,K++}l.attributes=X,l.attributesNum=K,l.index=Y}function _(){const C=l.newAttributes;for(let D=0,k=C.length;D<k;D++)C[D]=0}function y(C){b(C,0)}function b(C,D){const k=l.newAttributes,Y=l.enabledAttributes,X=l.attributeDivisors;k[C]=1,Y[C]===0&&(i.enableVertexAttribArray(C),Y[C]=1),X[C]!==D&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,D),X[C]=D)}function w(){const C=l.newAttributes,D=l.enabledAttributes;for(let k=0,Y=D.length;k<Y;k++)D[k]!==C[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function S(C,D,k,Y,X,H,K){K===!0?i.vertexAttribIPointer(C,D,k,X,H):i.vertexAttribPointer(C,D,k,Y,X,H)}function L(C,D,k,Y){if(n.isWebGL2===!1&&(C.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const X=Y.attributes,H=k.getAttributes(),K=D.defaultAttributeValues;for(const tt in H){const it=H[tt];if(it.location>=0){let $=X[tt];if($===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),$!==void 0){const nt=$.normalized,lt=$.itemSize,vt=e.get($);if(vt===void 0)continue;const dt=vt.buffer,Tt=vt.type,Lt=vt.bytesPerElement,Rt=n.isWebGL2===!0&&(Tt===i.INT||Tt===i.UNSIGNED_INT||$.gpuType===Vf);if($.isInterleavedBufferAttribute){const Ut=$.data,B=Ut.stride,xt=$.offset;if(Ut.isInstancedInterleavedBuffer){for(let rt=0;rt<it.locationSize;rt++)b(it.location+rt,Ut.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let rt=0;rt<it.locationSize;rt++)y(it.location+rt);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let rt=0;rt<it.locationSize;rt++)S(it.location+rt,lt/it.locationSize,Tt,nt,B*Lt,(xt+lt/it.locationSize*rt)*Lt,Rt)}else{if($.isInstancedBufferAttribute){for(let Ut=0;Ut<it.locationSize;Ut++)b(it.location+Ut,$.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ut=0;Ut<it.locationSize;Ut++)y(it.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Ut=0;Ut<it.locationSize;Ut++)S(it.location+Ut,lt/it.locationSize,Tt,nt,lt*Lt,lt/it.locationSize*Ut*Lt,Rt)}}else if(K!==void 0){const nt=K[tt];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(it.location,nt);break;case 3:i.vertexAttrib3fv(it.location,nt);break;case 4:i.vertexAttrib4fv(it.location,nt);break;default:i.vertexAttrib1fv(it.location,nt)}}}}w()}function M(){O();for(const C in o){const D=o[C];for(const k in D){const Y=D[k];for(const X in Y)g(Y[X].object),delete Y[X];delete D[k]}delete o[C]}}function E(C){if(o[C.id]===void 0)return;const D=o[C.id];for(const k in D){const Y=D[k];for(const X in Y)g(Y[X].object),delete Y[X];delete D[k]}delete o[C.id]}function N(C){for(const D in o){const k=o[D];if(k[C.id]===void 0)continue;const Y=k[C.id];for(const X in Y)g(Y[X].object),delete Y[X];delete k[C.id]}}function O(){I(),u=!0,l!==c&&(l=c,d(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:O,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:y,disableUnusedAttributes:w}}function Q_(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),e.update(h,r,f)}function l(u,h,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function tx(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=a||t.has("OES_texture_float"),b=_&&y,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:w}}function ex(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new In,o=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,_=v*4;let y=p.clippingState||null;c.value=y,y=u(g,f,_,d);for(let b=0;b!==_;++b)y[b]=e[b];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)a.copy(h[_]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function nx(i){let t=new WeakMap;function e(a,o){return o===el?a.mapping=qs:o===nl&&(a.mapping=Ys),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===el||o===nl)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new pg(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ud extends ad{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,th=[.125,.215,.35,.446,.526,.582],ki=20,lc=new ud,eh=new re;let uc=null,hc=0,fc=0;const Oi=(1+Math.sqrt(5))/2,vs=1/Oi,nh=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Oi,vs),new A(0,Oi,-vs),new A(vs,0,Oi),new A(-vs,0,Oi),new A(Oi,vs,0),new A(-Oi,vs,0)];class da{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,hc,fc),t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ur,format:Fn,colorSpace:ri,depthBuffer:!1},s=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=sx(r,t,e)}return s}_compileMaterial(t){const e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,lc)}_sceneToCubeUV(t,e,n,s){const o=new en(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(eh),u.toneMapping=bi,u.autoClear=!1;const d=new wa({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new oe(new fn,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(eh),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;fo(s,v*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;fo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,lc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nh[(s-1)%nh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new oe(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ki-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let v=0;for(let S=0;S<ki;++S){const L=S/x,M=Math.exp(-L*L/2);p.push(M),S===0?v+=M:S<m&&(v+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[s],b=3*y*(s>_-Os?s-_+Os:0),w=4*(this._cubeSize-y);fo(e,b,w,3*y,2*y),c.setRenderTarget(e),c.render(h,lc)}}function ix(i){const t=[],e=[],n=[];let s=i;const r=i-Os+1+th.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Os?c=th[a-i+Os-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),_=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let w=0;w<d;w++){const S=w%3*2/3-1,L=w>2?0:-1,M=[S,L,0,S+2/3,L,0,S+2/3,L+1,0,S,L,0,S+2/3,L+1,0,S,L+1,0];v.set(M,x*g*w),_.set(f,m*g*w);const E=[w,w,w,w,w,w];y.set(E,p*g*w)}const b=new Je;b.setAttribute("position",new Ie(v,x)),b.setAttribute("uv",new Ie(_,m)),b.setAttribute("faceIndex",new Ie(y,p)),t.push(b),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ih(i,t,e){const n=new Yi(i,t,e);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sx(i,t,e){const n=new Float32Array(ki),s=new A(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function sh(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function rh(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rx(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===el||c===nl,u=c===qs||c===Ys;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new da(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new da(i));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ox(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ax(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let _=0,y=v.length;_<y;_+=3){const b=v[_+0],w=v[_+1],S=v[_+2];f.push(b,w,w,S,S,b)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const b=_+0,w=_+1,S=_+2;f.push(b,w,w,S,S,b)}}else return;const m=new(Qf(f)?rd:sd)(f,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function cx(i,t,e,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,g){i.drawElements(r,g,o,d*c),e.update(g,r,1)}function h(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let v=0;v<x;v++)p+=g[v];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function lx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ux(i,t){return i[0]-t[0]}function hx(i,t){return Math.abs(t[1])-Math.abs(i[1])}function fx(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new he,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let x=r.get(u);if(x===void 0||x.count!==g){let C=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let L=0;v===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let M=u.attributes.position.count*L,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const N=new Float32Array(M*E*4*g),O=new nd(N,M,E,g);O.type=vi,O.needsUpdate=!0;const I=L*4;for(let D=0;D<g;D++){const k=b[D],Y=w[D],X=S[D],H=M*E*4*D;for(let K=0;K<k.count;K++){const tt=K*I;v===!0&&(a.fromBufferAttribute(k,K),N[H+tt+0]=a.x,N[H+tt+1]=a.y,N[H+tt+2]=a.z,N[H+tt+3]=0),_===!0&&(a.fromBufferAttribute(Y,K),N[H+tt+4]=a.x,N[H+tt+5]=a.y,N[H+tt+6]=a.z,N[H+tt+7]=0),y===!0&&(a.fromBufferAttribute(X,K),N[H+tt+8]=a.x,N[H+tt+9]=a.y,N[H+tt+10]=a.z,N[H+tt+11]=X.itemSize===4?a.w:1)}}x={count:g,texture:O,size:new pt(M,E)},r.set(u,x),u.addEventListener("dispose",C)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const d=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<d;_++){const y=g[_];y[0]=_,y[1]=f[_]}g.sort(hx);for(let _=0;_<8;_++)_<d&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(ux);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const y=o[_],b=y[0],w=y[1];b!==Number.MAX_SAFE_INTEGER&&w?(x&&u.getAttribute("morphTarget"+_)!==x[b]&&u.setAttribute("morphTarget"+_,x[b]),m&&u.getAttribute("morphNormal"+_)!==m[b]&&u.setAttribute("morphNormal"+_,m[b]),s[_]=w,p+=w):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function dx(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class hd extends sn{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:Wi,u!==Wi&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wi&&(n=xi),n===void 0&&u===$s&&(n=Vi),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fd=new sn,dd=new hd(1,1);dd.compareFunction=Jf;const pd=new nd,md=new Km,gd=new cd,oh=[],ah=[],ch=new Float32Array(16),lh=new Float32Array(9),uh=new Float32Array(4);function tr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=oh[s];if(r===void 0&&(r=new Float32Array(s),oh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Aa(i,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function px(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function gx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function _x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function xx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;uh.set(n),i.uniformMatrix2fv(this.addr,!1,uh),Ne(e,n)}}function vx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),Ne(e,n)}}function yx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;ch.set(n),i.uniformMatrix4fv(this.addr,!1,ch),Ne(e,n)}}function Mx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function wx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Cx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?dd:fd;e.setTexture2D(t||r,s)}function Px(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||md,s)}function Lx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gd,s)}function Dx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pd,s)}function Ix(i){switch(i){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return xx;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return bx;case 35669:case 35673:return Ex;case 5125:return wx;case 36294:return Tx;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}function Ux(i,t){i.uniform1fv(this.addr,t)}function Nx(i,t){const e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Fx(i,t){const e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Ox(i,t){const e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Bx(i,t){const e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zx(i,t){const e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kx(i,t){const e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Hx(i,t){i.uniform1iv(this.addr,t)}function Gx(i,t){i.uniform2iv(this.addr,t)}function Vx(i,t){i.uniform3iv(this.addr,t)}function Wx(i,t){i.uniform4iv(this.addr,t)}function Xx(i,t){i.uniform1uiv(this.addr,t)}function qx(i,t){i.uniform2uiv(this.addr,t)}function Yx(i,t){i.uniform3uiv(this.addr,t)}function $x(i,t){i.uniform4uiv(this.addr,t)}function Zx(i,t,e){const n=this.cache,s=t.length,r=Aa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fd,r[a])}function jx(i,t,e){const n=this.cache,s=t.length,r=Aa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||md,r[a])}function Kx(i,t,e){const n=this.cache,s=t.length,r=Aa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gd,r[a])}function Jx(i,t,e){const n=this.cache,s=t.length,r=Aa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pd,r[a])}function Qx(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return kx;case 5124:case 35670:return Hx;case 35667:case 35671:return Gx;case 35668:case 35672:return Vx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Jx}}class tv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ix(e.type)}}class ev{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qx(e.type)}}class nv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function hh(i,t){i.seq.push(t),i.map[t.id]=t}function iv(i,t,e){const n=i.name,s=n.length;for(dc.lastIndex=0;;){const r=dc.exec(n),a=dc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hh(e,l===void 0?new tv(o,i,t):new ev(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new nv(o),hh(e,h)),e=h}}}class Qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);iv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function fh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const sv=37297;let rv=0;function ov(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function av(i){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(i);let n;switch(t===e?n="":t===ua&&e===la?n="LinearDisplayP3ToLinearSRGB":t===la&&e===ua&&(n="LinearSRGBToLinearDisplayP3"),i){case ri:case ba:return[n,"LinearTransferOETF"];case De:case Il:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function dh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ov(i.getShaderSource(t),a)}else return s}function cv(i,t){const e=av(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function lv(i,t){let e;switch(t){case ym:e="Linear";break;case Mm:e="Reinhard";break;case Sm:e="OptimizedCineon";break;case Ll:e="ACESFilmic";break;case Em:e="AgX";break;case bm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function uv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function hv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bs).join(`
`)}function fv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Bs(i){return i!==""}function ph(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(pv,gv)}const mv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gv(i,t){let e=Qt[t];if(e===void 0){const n=mv.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return al(e)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(i){return i.replace(_v,xv)}function xv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _h(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$p?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function yv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:t="ENVMAP_TYPE_CUBE";break;case Sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Sv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hf:t="ENVMAP_BLENDING_MULTIPLY";break;case xm:t="ENVMAP_BLENDING_MIX";break;case vm:t="ENVMAP_BLENDING_ADD";break}return t}function bv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ev(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=vv(e),l=yv(e),u=Mv(e),h=Sv(e),f=bv(e),d=e.isWebGL2?"":uv(e),g=hv(e),x=fv(r),m=s.createProgram();let p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bs).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Bs).join(`
`),v.length>0&&(v+=`
`)):(p=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),v=[d,_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==bi?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,cv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),a=al(a),a=ph(a,e),a=mh(a,e),o=al(o),o=ph(o,e),o=mh(o,e),a=gh(a),o=gh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=_+p+a,b=_+v+o,w=fh(s,s.VERTEX_SHADER,y),S=fh(s,s.FRAGMENT_SHADER,b);s.attachShader(m,w),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function L(O){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(m).trim(),C=s.getShaderInfoLog(w).trim(),D=s.getShaderInfoLog(S).trim();let k=!0,Y=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,S);else{const X=dh(s,w,"vertex"),H=dh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+I+`
`+X+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(C===""||D==="")&&(Y=!1);Y&&(O.diagnostics={runnable:k,programLog:I,vertexShader:{log:C,prefix:p},fragmentShader:{log:D,prefix:v}})}s.deleteShader(w),s.deleteShader(S),M=new Qo(s,m),E=dv(s,m)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,sv)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rv++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}let wv=0;class Tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Av(t),e.set(t,n)),n}}class Av{constructor(t){this.id=wv++,this.code=t,this.usedTimes=0}}function Rv(i,t,e,n,s,r,a){const o=new Ul,c=new Tv,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,N,O,I){const C=O.fog,D=I.geometry,k=M.isMeshStandardMaterial?O.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),X=Y&&Y.mapping===Sa?Y.image.height:null,H=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,tt=K!==void 0?K.length:0;let it=0;D.morphAttributes.position!==void 0&&(it=1),D.morphAttributes.normal!==void 0&&(it=2),D.morphAttributes.color!==void 0&&(it=3);let $,nt,lt,vt;if(H){const de=zn[H];$=de.vertexShader,nt=de.fragmentShader}else $=M.vertexShader,nt=M.fragmentShader,c.update(M),lt=c.getVertexShaderID(M),vt=c.getFragmentShaderID(M);const dt=i.getRenderTarget(),Tt=I.isInstancedMesh===!0,Lt=I.isBatchedMesh===!0,Rt=!!M.map,Ut=!!M.matcap,B=!!Y,xt=!!M.aoMap,rt=!!M.lightMap,mt=!!M.bumpMap,st=!!M.normalMap,Dt=!!M.displacementMap,wt=!!M.emissiveMap,R=!!M.metalnessMap,T=!!M.roughnessMap,q=M.anisotropy>0,ht=M.clearcoat>0,ut=M.iridescence>0,at=M.sheen>0,Pt=M.transmission>0,Mt=q&&!!M.anisotropyMap,Et=ht&&!!M.clearcoatMap,Nt=ht&&!!M.clearcoatNormalMap,zt=ht&&!!M.clearcoatRoughnessMap,ct=ut&&!!M.iridescenceMap,Xt=ut&&!!M.iridescenceThicknessMap,Yt=at&&!!M.sheenColorMap,Vt=at&&!!M.sheenRoughnessMap,Ft=!!M.specularMap,bt=!!M.specularColorMap,F=!!M.specularIntensityMap,gt=Pt&&!!M.transmissionMap,It=Pt&&!!M.thicknessMap,At=!!M.gradientMap,ft=!!M.alphaMap,G=M.alphaTest>0,_t=!!M.alphaHash,St=!!M.extensions,Ht=!!D.attributes.uv1,Ot=!!D.attributes.uv2,ne=!!D.attributes.uv3;let Jt=bi;return M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=i.toneMapping),{isWebGL2:u,shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:nt,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:vt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Lt,instancing:Tt,instancingColor:Tt&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ri,map:Rt,matcap:Ut,envMap:B,envMapMode:B&&Y.mapping,envMapCubeUVHeight:X,aoMap:xt,lightMap:rt,bumpMap:mt,normalMap:st,displacementMap:f&&Dt,emissiveMap:wt,normalMapObjectSpace:st&&M.normalMapType===Fm,normalMapTangentSpace:st&&M.normalMapType===Kf,metalnessMap:R,roughnessMap:T,anisotropy:q,anisotropyMap:Mt,clearcoat:ht,clearcoatMap:Et,clearcoatNormalMap:Nt,clearcoatRoughnessMap:zt,iridescence:ut,iridescenceMap:ct,iridescenceThicknessMap:Xt,sheen:at,sheenColorMap:Yt,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:bt,specularIntensityMap:F,transmission:Pt,transmissionMap:gt,thicknessMap:It,gradientMap:At,opaque:M.transparent===!1&&M.blending===Gs,alphaMap:ft,alphaTest:G,alphaHash:_t,combine:M.combine,mapUv:Rt&&x(M.map.channel),aoMapUv:xt&&x(M.aoMap.channel),lightMapUv:rt&&x(M.lightMap.channel),bumpMapUv:mt&&x(M.bumpMap.channel),normalMapUv:st&&x(M.normalMap.channel),displacementMapUv:Dt&&x(M.displacementMap.channel),emissiveMapUv:wt&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:T&&x(M.roughnessMap.channel),anisotropyMapUv:Mt&&x(M.anisotropyMap.channel),clearcoatMapUv:Et&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&x(M.sheenRoughnessMap.channel),specularMapUv:Ft&&x(M.specularMap.channel),specularColorMapUv:bt&&x(M.specularColorMap.channel),specularIntensityMapUv:F&&x(M.specularIntensityMap.channel),transmissionMapUv:gt&&x(M.transmissionMap.channel),thicknessMapUv:It&&x(M.thicknessMap.channel),alphaMapUv:ft&&x(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(st||q),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Ht,vertexUv2s:Ot,vertexUv3s:ne,pointsUvs:I.isPoints===!0&&!!D.attributes.uv&&(Rt||ft),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:it,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Rt&&M.map.isVideoTexture===!0&&fe.getTransfer(M.map.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vn,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:St&&M.extensions.derivatives===!0,extensionFragDepth:St&&M.extensions.fragDepth===!0,extensionDrawBuffers:St&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)E.push(N),E.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(E,M),_(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const E=g[M.type];let N;if(E){const O=zn[E];N=ug.clone(O.uniforms)}else N=M.uniforms;return N}function b(M,E){let N;for(let O=0,I=l.length;O<I;O++){const C=l[O];if(C.cacheKey===E){N=C,++N.usedTimes;break}}return N===void 0&&(N=new Ev(i,E,M,r),l.push(N)),N}function w(M){if(--M.usedTimes===0){const E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function S(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:S,programs:l,dispose:L}}function Cv(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Pv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function o(h,f,d,g,x,m){const p=a(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,x,m){const p=a(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||Pv),n.length>1&&n.sort(f||xh),s.length>1&&s.sort(f||xh)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Lv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new vh,i.set(n,[a])):s>=r.length?(a=new vh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Dv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new re};break;case"SpotLight":e={position:new A,direction:new A,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Iv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Uv=0;function Nv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fv(i,t){const e=new Dv,n=Iv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new A);const r=new A,a=new ae,o=new ae;function c(u,h){let f=0,d=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let x=0,m=0,p=0,v=0,_=0,y=0,b=0,w=0,S=0,L=0,M=0;u.sort(Nv);const E=h===!0?Math.PI:1;for(let O=0,I=u.length;O<I;O++){const C=u[O],D=C.color,k=C.intensity,Y=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=D.r*k*E,d+=D.g*k*E,g+=D.b*k*E;else if(C.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(C.sh.coefficients[H],k);M++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const K=C.shadow,tt=n.get(C);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,s.directionalShadow[x]=tt,s.directionalShadowMap[x]=X,s.directionalShadowMatrix[x]=C.shadow.matrix,y++}s.directional[x]=H,x++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(D).multiplyScalar(k*E),H.distance=Y,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,s.spot[p]=H;const K=C.shadow;if(C.map&&(s.spotLightMap[S]=C.map,S++,K.updateMatrices(C),C.castShadow&&L++),s.spotLightMatrix[p]=K.matrix,C.castShadow){const tt=n.get(C);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,s.spotShadow[p]=tt,s.spotShadowMap[p]=X,w++}p++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(D).multiplyScalar(k),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),s.rectArea[v]=H,v++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*E),H.distance=C.distance,H.decay=C.decay,C.castShadow){const K=C.shadow,tt=n.get(C);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=C.shadow.matrix,b++}s.point[m]=H,m++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(k*E),H.groundColor.copy(C.groundColor).multiplyScalar(k*E),s.hemi[_]=H,_++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==v||N.hemiLength!==_||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==w||N.numSpotMaps!==S||N.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=v,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=w+S-L,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=v,N.hemiLength=_,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=w,N.numSpotMaps=S,N.numLightProbes=M,s.version=Uv++)}function l(u,h){let f=0,d=0,g=0,x=0,m=0;const p=h.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const y=u[v];if(y.isDirectionalLight){const b=s.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(y.isSpotLight){const b=s.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const b=s.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const b=s.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const b=s.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function yh(i,t){const e=new Fv(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ov(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new yh(i,t),e.set(r,[c])):a>=o.length?(c=new yh(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bv extends Qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zv extends Qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gv(i,t,e){let n=new Nl;const s=new pt,r=new pt,a=new he,o=new Bv({depthPacking:Nm}),c=new zv,l={},u=e.maxTextureSize,h={[Hn]:qe,[qe]:Hn,[vn]:vn},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:kv,fragmentShader:Hv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kf;let p=this.type;this.render=function(w,S,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Si),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const I=p!==ti&&this.type===ti,C=p===ti&&this.type!==ti;for(let D=0,k=w.length;D<k;D++){const Y=w[D],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const H=X.getFrameExtents();if(s.multiply(H),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,X.mapSize.y=r.y)),X.map===null||I===!0||C===!0){const tt=this.type!==ti?{minFilter:Ke,magFilter:Ke}:{};X.map!==null&&X.map.dispose(),X.map=new Yi(s.x,s.y,tt),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const K=X.getViewportCount();for(let tt=0;tt<K;tt++){const it=X.getViewport(tt);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),O.viewport(a),X.updateMatrices(Y,tt),n=X.getFrustum(),y(S,L,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===ti&&v(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,N)};function v(w,S){const L=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(S,null,L,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(S,null,L,d,x,null)}function _(w,S,L,M){let E=null;const N=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const O=E.uuid,I=S.uuid;let C=l[O];C===void 0&&(C={},l[O]=C);let D=C[I];D===void 0&&(D=E.clone(),C[I]=D,S.addEventListener("dispose",b)),E=D}if(E.visible=S.visible,E.wireframe=S.wireframe,M===ti?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:h[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=i.properties.get(E);O.light=L}return E}function y(w,S,L,M,E){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const I=t.update(w),C=w.material;if(Array.isArray(C)){const D=I.groups;for(let k=0,Y=D.length;k<Y;k++){const X=D[k],H=C[X.materialIndex];if(H&&H.visible){const K=_(w,H,M,E);w.onBeforeShadow(i,w,S,L,I,K,X),i.renderBufferDirect(L,null,I,K,w,X),w.onAfterShadow(i,w,S,L,I,K,X)}}}else if(C.visible){const D=_(w,C,M,E);w.onBeforeShadow(i,w,S,L,I,D,null),i.renderBufferDirect(L,null,I,D,w,null),w.onAfterShadow(i,w,S,L,I,D,null)}}const O=w.children;for(let I=0,C=O.length;I<C;I++)y(O[I],S,L,M,E)}function b(w){w.target.removeEventListener("dispose",b);for(const L in l){const M=l[L],E=w.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Vv(i,t,e){const n=e.isWebGL2;function s(){let G=!1;const _t=new he;let St=null;const Ht=new he(0,0,0,0);return{setMask:function(Ot){St!==Ot&&!G&&(i.colorMask(Ot,Ot,Ot,Ot),St=Ot)},setLocked:function(Ot){G=Ot},setClear:function(Ot,ne,Jt,pe,de){de===!0&&(Ot*=pe,ne*=pe,Jt*=pe),_t.set(Ot,ne,Jt,pe),Ht.equals(_t)===!1&&(i.clearColor(Ot,ne,Jt,pe),Ht.copy(_t))},reset:function(){G=!1,St=null,Ht.set(-1,0,0,0)}}}function r(){let G=!1,_t=null,St=null,Ht=null;return{setTest:function(Ot){Ot?Lt(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Ot){_t!==Ot&&!G&&(i.depthMask(Ot),_t=Ot)},setFunc:function(Ot){if(St!==Ot){switch(Ot){case hm:i.depthFunc(i.NEVER);break;case fm:i.depthFunc(i.ALWAYS);break;case dm:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case pm:i.depthFunc(i.EQUAL);break;case mm:i.depthFunc(i.GEQUAL);break;case gm:i.depthFunc(i.GREATER);break;case _m:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=Ot}},setLocked:function(Ot){G=Ot},setClear:function(Ot){Ht!==Ot&&(i.clearDepth(Ot),Ht=Ot)},reset:function(){G=!1,_t=null,St=null,Ht=null}}}function a(){let G=!1,_t=null,St=null,Ht=null,Ot=null,ne=null,Jt=null,pe=null,de=null;return{setTest:function(ce){G||(ce?Lt(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(ce){_t!==ce&&!G&&(i.stencilMask(ce),_t=ce)},setFunc:function(ce,ye,z){(St!==ce||Ht!==ye||Ot!==z)&&(i.stencilFunc(ce,ye,z),St=ce,Ht=ye,Ot=z)},setOp:function(ce,ye,z){(ne!==ce||Jt!==ye||pe!==z)&&(i.stencilOp(ce,ye,z),ne=ce,Jt=ye,pe=z)},setLocked:function(ce){G=ce},setClear:function(ce){de!==ce&&(i.clearStencil(ce),de=ce)},reset:function(){G=!1,_t=null,St=null,Ht=null,Ot=null,ne=null,Jt=null,pe=null,de=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,b=null,w=null,S=null,L=null,M=new re(0,0,0),E=0,N=!1,O=null,I=null,C=null,D=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=H>=2);let tt=null,it={};const $=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),lt=new he().fromArray($),vt=new he().fromArray(nt);function dt(G,_t,St,Ht){const Ot=new Uint8Array(4),ne=i.createTexture();i.bindTexture(G,ne),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<St;Jt++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(_t,0,i.RGBA,1,1,Ht,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(_t+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return ne}const Tt={};Tt[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Tt[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Lt(i.DEPTH_TEST),c.setFunc(oa),wt(!1),R(nu),Lt(i.CULL_FACE),st(Si);function Lt(G){f[G]!==!0&&(i.enable(G),f[G]=!0)}function Rt(G){f[G]!==!1&&(i.disable(G),f[G]=!1)}function Ut(G,_t){return d[G]!==_t?(i.bindFramebuffer(G,_t),d[G]=_t,n&&(G===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=_t),G===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=_t)),!0):!1}function B(G,_t){let St=x,Ht=!1;if(G)if(St=g.get(_t),St===void 0&&(St=[],g.set(_t,St)),G.isWebGLMultipleRenderTargets){const Ot=G.texture;if(St.length!==Ot.length||St[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Jt=Ot.length;ne<Jt;ne++)St[ne]=i.COLOR_ATTACHMENT0+ne;St.length=Ot.length,Ht=!0}}else St[0]!==i.COLOR_ATTACHMENT0&&(St[0]=i.COLOR_ATTACHMENT0,Ht=!0);else St[0]!==i.BACK&&(St[0]=i.BACK,Ht=!0);Ht&&(e.isWebGL2?i.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function xt(G){return m!==G?(i.useProgram(G),m=G,!0):!1}const rt={[zi]:i.FUNC_ADD,[jp]:i.FUNC_SUBTRACT,[Kp]:i.FUNC_REVERSE_SUBTRACT};if(n)rt[ou]=i.MIN,rt[au]=i.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(rt[ou]=G.MIN_EXT,rt[au]=G.MAX_EXT)}const mt={[Jp]:i.ZERO,[Qp]:i.ONE,[tm]:i.SRC_COLOR,[Qc]:i.SRC_ALPHA,[om]:i.SRC_ALPHA_SATURATE,[sm]:i.DST_COLOR,[nm]:i.DST_ALPHA,[em]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[rm]:i.ONE_MINUS_DST_COLOR,[im]:i.ONE_MINUS_DST_ALPHA,[am]:i.CONSTANT_COLOR,[cm]:i.ONE_MINUS_CONSTANT_COLOR,[lm]:i.CONSTANT_ALPHA,[um]:i.ONE_MINUS_CONSTANT_ALPHA};function st(G,_t,St,Ht,Ot,ne,Jt,pe,de,ce){if(G===Si){p===!0&&(Rt(i.BLEND),p=!1);return}if(p===!1&&(Lt(i.BLEND),p=!0),G!==Zp){if(G!==v||ce!==N){if((_!==zi||w!==zi)&&(i.blendEquation(i.FUNC_ADD),_=zi,w=zi),ce)switch(G){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case iu:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case iu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,b=null,S=null,L=null,M.set(0,0,0),E=0,v=G,N=ce}return}Ot=Ot||_t,ne=ne||St,Jt=Jt||Ht,(_t!==_||Ot!==w)&&(i.blendEquationSeparate(rt[_t],rt[Ot]),_=_t,w=Ot),(St!==y||Ht!==b||ne!==S||Jt!==L)&&(i.blendFuncSeparate(mt[St],mt[Ht],mt[ne],mt[Jt]),y=St,b=Ht,S=ne,L=Jt),(pe.equals(M)===!1||de!==E)&&(i.blendColor(pe.r,pe.g,pe.b,de),M.copy(pe),E=de),v=G,N=!1}function Dt(G,_t){G.side===vn?Rt(i.CULL_FACE):Lt(i.CULL_FACE);let St=G.side===qe;_t&&(St=!St),wt(St),G.blending===Gs&&G.transparent===!1?st(Si):st(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const Ht=G.stencilWrite;l.setTest(Ht),Ht&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),q(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Lt(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(G){O!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),O=G)}function R(G){G!==qp?(Lt(i.CULL_FACE),G!==I&&(G===nu?i.cullFace(i.BACK):G===Yp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),I=G}function T(G){G!==C&&(X&&i.lineWidth(G),C=G)}function q(G,_t,St){G?(Lt(i.POLYGON_OFFSET_FILL),(D!==_t||k!==St)&&(i.polygonOffset(_t,St),D=_t,k=St)):Rt(i.POLYGON_OFFSET_FILL)}function ht(G){G?Lt(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function ut(G){G===void 0&&(G=i.TEXTURE0+Y-1),tt!==G&&(i.activeTexture(G),tt=G)}function at(G,_t,St){St===void 0&&(tt===null?St=i.TEXTURE0+Y-1:St=tt);let Ht=it[St];Ht===void 0&&(Ht={type:void 0,texture:void 0},it[St]=Ht),(Ht.type!==G||Ht.texture!==_t)&&(tt!==St&&(i.activeTexture(St),tt=St),i.bindTexture(G,_t||Tt[G]),Ht.type=G,Ht.texture=_t)}function Pt(){const G=it[tt];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Mt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function F(G){lt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),lt.copy(G))}function gt(G){vt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),vt.copy(G))}function It(G,_t){let St=h.get(_t);St===void 0&&(St=new WeakMap,h.set(_t,St));let Ht=St.get(G);Ht===void 0&&(Ht=i.getUniformBlockIndex(_t,G.name),St.set(G,Ht))}function At(G,_t){const Ht=h.get(_t).get(G);u.get(_t)!==Ht&&(i.uniformBlockBinding(_t,Ht,G.__bindingPointIndex),u.set(_t,Ht))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},tt=null,it={},d={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,b=null,w=null,S=null,L=null,M=new re(0,0,0),E=0,N=!1,O=null,I=null,C=null,D=null,k=null,lt.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Lt,disable:Rt,bindFramebuffer:Ut,drawBuffers:B,useProgram:xt,setBlending:st,setMaterial:Dt,setFlipSided:wt,setCullFace:R,setLineWidth:T,setPolygonOffset:q,setScissorTest:ht,activeTexture:ut,bindTexture:at,unbindTexture:Pt,compressedTexImage2D:Mt,compressedTexImage3D:Et,texImage2D:Ft,texImage3D:bt,updateUBOMapping:It,uniformBlockBinding:At,texStorage2D:Yt,texStorage3D:Vt,texSubImage2D:Nt,texSubImage3D:zt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Xt,scissor:F,viewport:gt,reset:ft}}function Wv(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return d?new OffscreenCanvas(R,T):fa("canvas")}function x(R,T,q,ht){let ut=1;if((R.width>ht||R.height>ht)&&(ut=ht/Math.max(R.width,R.height)),ut<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const at=T?ol:Math.floor,Pt=at(ut*R.width),Mt=at(ut*R.height);h===void 0&&(h=g(Pt,Mt));const Et=q?g(Pt,Mt):h;return Et.width=Pt,Et.height=Mt,Et.getContext("2d").drawImage(R,0,0,Pt,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Pt+"x"+Mt+")."),Et}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Ou(R.width)&&Ou(R.height)}function p(R){return o?!1:R.wrapS!==Nn||R.wrapT!==Nn||R.minFilter!==Ke&&R.minFilter!==xn}function v(R,T){return R.generateMipmaps&&T&&R.minFilter!==Ke&&R.minFilter!==xn}function _(R){i.generateMipmap(R)}function y(R,T,q,ht,ut=!1){if(o===!1)return T;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=T;if(T===i.RED&&(q===i.FLOAT&&(at=i.R32F),q===i.HALF_FLOAT&&(at=i.R16F),q===i.UNSIGNED_BYTE&&(at=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.R8UI),q===i.UNSIGNED_SHORT&&(at=i.R16UI),q===i.UNSIGNED_INT&&(at=i.R32UI),q===i.BYTE&&(at=i.R8I),q===i.SHORT&&(at=i.R16I),q===i.INT&&(at=i.R32I)),T===i.RG&&(q===i.FLOAT&&(at=i.RG32F),q===i.HALF_FLOAT&&(at=i.RG16F),q===i.UNSIGNED_BYTE&&(at=i.RG8)),T===i.RGBA){const Pt=ut?ca:fe.getTransfer(ht);q===i.FLOAT&&(at=i.RGBA32F),q===i.HALF_FLOAT&&(at=i.RGBA16F),q===i.UNSIGNED_BYTE&&(at=Pt===me?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function b(R,T,q){return v(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==Ke&&R.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){return R===Ke||R===cu||R===za?i.NEAREST:i.LINEAR}function S(R){const T=R.target;T.removeEventListener("dispose",S),M(T),T.isVideoTexture&&u.delete(T)}function L(R){const T=R.target;T.removeEventListener("dispose",L),N(T)}function M(R){const T=n.get(R);if(T.__webglInit===void 0)return;const q=R.source,ht=f.get(q);if(ht){const ut=ht[T.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&E(R),Object.keys(ht).length===0&&f.delete(q)}n.remove(R)}function E(R){const T=n.get(R);i.deleteTexture(T.__webglTexture);const q=R.source,ht=f.get(q);delete ht[T.__cacheKey],a.memory.textures--}function N(R){const T=R.texture,q=n.get(R),ht=n.get(T);if(ht.__webglTexture!==void 0&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(q.__webglFramebuffer[ut]))for(let at=0;at<q.__webglFramebuffer[ut].length;at++)i.deleteFramebuffer(q.__webglFramebuffer[ut][at]);else i.deleteFramebuffer(q.__webglFramebuffer[ut]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[ut])}else{if(Array.isArray(q.__webglFramebuffer))for(let ut=0;ut<q.__webglFramebuffer.length;ut++)i.deleteFramebuffer(q.__webglFramebuffer[ut]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ut=0;ut<q.__webglColorRenderbuffer.length;ut++)q.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[ut]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ut=0,at=T.length;ut<at;ut++){const Pt=n.get(T[ut]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),a.memory.textures--),n.remove(T[ut])}n.remove(T),n.remove(R)}let O=0;function I(){O=0}function C(){const R=O;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function D(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function k(R,T){const q=n.get(R);if(R.isVideoTexture&&Dt(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const ht=R.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(q,R,T);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function Y(R,T){const q=n.get(R);if(R.version>0&&q.__version!==R.version){lt(q,R,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function X(R,T){const q=n.get(R);if(R.version>0&&q.__version!==R.version){lt(q,R,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function H(R,T){const q=n.get(R);if(R.version>0&&q.__version!==R.version){vt(q,R,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}const K={[aa]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[il]:i.MIRRORED_REPEAT},tt={[Ke]:i.NEAREST,[cu]:i.NEAREST_MIPMAP_NEAREST,[za]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[wm]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},it={[Om]:i.NEVER,[Vm]:i.ALWAYS,[Bm]:i.LESS,[Jf]:i.LEQUAL,[zm]:i.EQUAL,[Gm]:i.GEQUAL,[km]:i.GREATER,[Hm]:i.NOTEQUAL};function $(R,T,q){if(q?(i.texParameteri(R,i.TEXTURE_WRAP_S,K[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,K[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,K[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[T.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==Nn||T.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,w(T.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==Ke&&T.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ke||T.minFilter!==za&&T.minFilter!==Ir||T.type===vi&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===Ur&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(R,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function nt(R,T){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",S));const ht=T.source;let ut=f.get(ht);ut===void 0&&(ut={},f.set(ht,ut));const at=D(T);if(at!==R.__cacheKey){ut[at]===void 0&&(ut[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ut[at].usedTimes++;const Pt=ut[R.__cacheKey];Pt!==void 0&&(ut[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&E(T)),R.__cacheKey=at,R.__webglTexture=ut[at].texture}return q}function lt(R,T,q){let ht=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=i.TEXTURE_3D);const ut=nt(R,T),at=T.source;e.bindTexture(ht,R.__webglTexture,i.TEXTURE0+q);const Pt=n.get(at);if(at.version!==Pt.__version||ut===!0){e.activeTexture(i.TEXTURE0+q);const Mt=fe.getPrimaries(fe.workingColorSpace),Et=T.colorSpace===yn?null:fe.getPrimaries(T.colorSpace),Nt=T.colorSpace===yn||Mt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const zt=p(T)&&m(T.image)===!1;let ct=x(T.image,zt,!1,s.maxTextureSize);ct=wt(T,ct);const Xt=m(ct)||o,Yt=r.convert(T.format,T.colorSpace);let Vt=r.convert(T.type),Ft=y(T.internalFormat,Yt,Vt,T.colorSpace,T.isVideoTexture);$(ht,T,Xt);let bt;const F=T.mipmaps,gt=o&&T.isVideoTexture!==!0&&Ft!==Zf,It=Pt.__version===void 0||ut===!0,At=b(T,ct,Xt);if(T.isDepthTexture)Ft=i.DEPTH_COMPONENT,o?T.type===vi?Ft=i.DEPTH_COMPONENT32F:T.type===xi?Ft=i.DEPTH_COMPONENT24:T.type===Vi?Ft=i.DEPTH24_STENCIL8:Ft=i.DEPTH_COMPONENT16:T.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Wi&&Ft===i.DEPTH_COMPONENT&&T.type!==Dl&&T.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=xi,Vt=r.convert(T.type)),T.format===$s&&Ft===i.DEPTH_COMPONENT&&(Ft=i.DEPTH_STENCIL,T.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Vi,Vt=r.convert(T.type))),It&&(gt?e.texStorage2D(i.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,Yt,Vt,null));else if(T.isDataTexture)if(F.length>0&&Xt){gt&&It&&e.texStorage2D(i.TEXTURE_2D,At,Ft,F[0].width,F[0].height);for(let ft=0,G=F.length;ft<G;ft++)bt=F[ft],gt?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,bt.width,bt.height,Yt,Vt,bt.data):e.texImage2D(i.TEXTURE_2D,ft,Ft,bt.width,bt.height,0,Yt,Vt,bt.data);T.generateMipmaps=!1}else gt?(It&&e.texStorage2D(i.TEXTURE_2D,At,Ft,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Yt,Vt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,Yt,Vt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){gt&&It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Ft,F[0].width,F[0].height,ct.depth);for(let ft=0,G=F.length;ft<G;ft++)bt=F[ft],T.format!==Fn?Yt!==null?gt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,bt.width,bt.height,ct.depth,Yt,bt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Ft,bt.width,bt.height,ct.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,bt.width,bt.height,ct.depth,Yt,Vt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Ft,bt.width,bt.height,ct.depth,0,Yt,Vt,bt.data)}else{gt&&It&&e.texStorage2D(i.TEXTURE_2D,At,Ft,F[0].width,F[0].height);for(let ft=0,G=F.length;ft<G;ft++)bt=F[ft],T.format!==Fn?Yt!==null?gt?e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,bt.width,bt.height,Yt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Ft,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,bt.width,bt.height,Yt,Vt,bt.data):e.texImage2D(i.TEXTURE_2D,ft,Ft,bt.width,bt.height,0,Yt,Vt,bt.data)}else if(T.isDataArrayTexture)gt?(It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Ft,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Yt,Vt,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,Yt,Vt,ct.data);else if(T.isData3DTexture)gt?(It&&e.texStorage3D(i.TEXTURE_3D,At,Ft,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Yt,Vt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,Yt,Vt,ct.data);else if(T.isFramebufferTexture){if(It)if(gt)e.texStorage2D(i.TEXTURE_2D,At,Ft,ct.width,ct.height);else{let ft=ct.width,G=ct.height;for(let _t=0;_t<At;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ft,ft,G,0,Yt,Vt,null),ft>>=1,G>>=1}}else if(F.length>0&&Xt){gt&&It&&e.texStorage2D(i.TEXTURE_2D,At,Ft,F[0].width,F[0].height);for(let ft=0,G=F.length;ft<G;ft++)bt=F[ft],gt?e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Yt,Vt,bt):e.texImage2D(i.TEXTURE_2D,ft,Ft,Yt,Vt,bt);T.generateMipmaps=!1}else gt?(It&&e.texStorage2D(i.TEXTURE_2D,At,Ft,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Yt,Vt,ct)):e.texImage2D(i.TEXTURE_2D,0,Ft,Yt,Vt,ct);v(T,Xt)&&_(ht),Pt.__version=at.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function vt(R,T,q){if(T.image.length!==6)return;const ht=nt(R,T),ut=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);const at=n.get(ut);if(ut.version!==at.__version||ht===!0){e.activeTexture(i.TEXTURE0+q);const Pt=fe.getPrimaries(fe.workingColorSpace),Mt=T.colorSpace===yn?null:fe.getPrimaries(T.colorSpace),Et=T.colorSpace===yn||Pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Nt=T.isCompressedTexture||T.image[0].isCompressedTexture,zt=T.image[0]&&T.image[0].isDataTexture,ct=[];for(let ft=0;ft<6;ft++)!Nt&&!zt?ct[ft]=x(T.image[ft],!1,!0,s.maxCubemapSize):ct[ft]=zt?T.image[ft].image:T.image[ft],ct[ft]=wt(T,ct[ft]);const Xt=ct[0],Yt=m(Xt)||o,Vt=r.convert(T.format,T.colorSpace),Ft=r.convert(T.type),bt=y(T.internalFormat,Vt,Ft,T.colorSpace),F=o&&T.isVideoTexture!==!0,gt=at.__version===void 0||ht===!0;let It=b(T,Xt,Yt);$(i.TEXTURE_CUBE_MAP,T,Yt);let At;if(Nt){F&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,bt,Xt.width,Xt.height);for(let ft=0;ft<6;ft++){At=ct[ft].mipmaps;for(let G=0;G<At.length;G++){const _t=At[G];T.format!==Fn?Vt!==null?F?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,0,0,_t.width,_t.height,Vt,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,bt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,0,0,_t.width,_t.height,Vt,Ft,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G,bt,_t.width,_t.height,0,Vt,Ft,_t.data)}}}else{At=T.mipmaps,F&&gt&&(At.length>0&&It++,e.texStorage2D(i.TEXTURE_CUBE_MAP,It,bt,ct[0].width,ct[0].height));for(let ft=0;ft<6;ft++)if(zt){F?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,ct[ft].width,ct[ft].height,Vt,Ft,ct[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,bt,ct[ft].width,ct[ft].height,0,Vt,Ft,ct[ft].data);for(let G=0;G<At.length;G++){const St=At[G].image[ft].image;F?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,0,0,St.width,St.height,Vt,Ft,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,bt,St.width,St.height,0,Vt,Ft,St.data)}}else{F?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Vt,Ft,ct[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,bt,Vt,Ft,ct[ft]);for(let G=0;G<At.length;G++){const _t=At[G];F?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,0,0,Vt,Ft,_t.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,G+1,bt,Vt,Ft,_t.image[ft])}}}v(T,Yt)&&_(i.TEXTURE_CUBE_MAP),at.__version=ut.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function dt(R,T,q,ht,ut,at){const Pt=r.convert(q.format,q.colorSpace),Mt=r.convert(q.type),Et=y(q.internalFormat,Pt,Mt,q.colorSpace);if(!n.get(T).__hasExternalTextures){const zt=Math.max(1,T.width>>at),ct=Math.max(1,T.height>>at);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,at,Et,zt,ct,T.depth,0,Pt,Mt,null):e.texImage2D(ut,at,Et,zt,ct,0,Pt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),st(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ut,n.get(q).__webglTexture,0,mt(T)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,ut,n.get(q).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(R,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ht=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||st(T)){const ut=T.depthTexture;ut&&ut.isDepthTexture&&(ut.type===vi?ht=i.DEPTH_COMPONENT32F:ut.type===xi&&(ht=i.DEPTH_COMPONENT24));const at=mt(T);st(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,ht,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ht,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ht,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ht=mt(T);q&&st(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,T.width,T.height):st(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ht=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ut=0;ut<ht.length;ut++){const at=ht[ut],Pt=r.convert(at.format,at.colorSpace),Mt=r.convert(at.type),Et=y(at.internalFormat,Pt,Mt,at.colorSpace),Nt=mt(T);q&&st(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Et,T.width,T.height):st(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Et,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Et,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const ht=n.get(T.depthTexture).__webglTexture,ut=mt(T);if(T.depthTexture.format===Wi)st(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(T.depthTexture.format===$s)st(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Rt(R){const T=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Lt(T.__webglFramebuffer,R)}else if(q){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]=i.createRenderbuffer(),Tt(T.__webglDepthbuffer[ht],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),Tt(T.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(R,T,q){const ht=n.get(R);T!==void 0&&dt(ht.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Rt(R)}function B(R){const T=R.texture,q=n.get(R),ht=n.get(T);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=T.version,a.memory.textures++);const ut=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,Pt=m(R)||o;if(ut){q.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(o&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[Mt]=[];for(let Et=0;Et<T.mipmaps.length;Et++)q.__webglFramebuffer[Mt][Et]=i.createFramebuffer()}else q.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)q.__webglFramebuffer[Mt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){const Mt=R.texture;for(let Et=0,Nt=Mt.length;Et<Nt;Et++){const zt=n.get(Mt[Et]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&st(R)===!1){const Mt=at?T:[T];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Et=0;Et<Mt.length;Et++){const Nt=Mt[Et];q.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Et]);const zt=r.convert(Nt.format,Nt.colorSpace),ct=r.convert(Nt.type),Xt=y(Nt.internalFormat,zt,ct,Nt.colorSpace,R.isXRRenderTarget===!0),Yt=mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Xt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,q.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),$(i.TEXTURE_CUBE_MAP,T,Pt);for(let Mt=0;Mt<6;Mt++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)dt(q.__webglFramebuffer[Mt][Et],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Et);else dt(q.__webglFramebuffer[Mt],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);v(T,Pt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const Mt=R.texture;for(let Et=0,Nt=Mt.length;Et<Nt;Et++){const zt=Mt[Et],ct=n.get(zt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),$(i.TEXTURE_2D,zt,Pt),dt(q.__webglFramebuffer,R,zt,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),v(zt,Pt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Mt,ht.__webglTexture),$(Mt,T,Pt),o&&T.mipmaps&&T.mipmaps.length>0)for(let Et=0;Et<T.mipmaps.length;Et++)dt(q.__webglFramebuffer[Et],R,T,i.COLOR_ATTACHMENT0,Mt,Et);else dt(q.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,Mt,0);v(T,Pt)&&_(Mt),e.unbindTexture()}R.depthBuffer&&Rt(R)}function xt(R){const T=m(R)||o,q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ht=0,ut=q.length;ht<ut;ht++){const at=q[ht];if(v(at,T)){const Pt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(at).__webglTexture;e.bindTexture(Pt,Mt),_(Pt),e.unbindTexture()}}}function rt(R){if(o&&R.samples>0&&st(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],q=R.width,ht=R.height;let ut=i.COLOR_BUFFER_BIT;const at=[],Pt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(R),Et=R.isWebGLMultipleRenderTargets===!0;if(Et)for(let Nt=0;Nt<T.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Nt=0;Nt<T.length;Nt++){at.push(i.COLOR_ATTACHMENT0+Nt),R.depthBuffer&&at.push(Pt);const zt=Mt.__ignoreDepthValues!==void 0?Mt.__ignoreDepthValues:!1;if(zt===!1&&(R.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),Et&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Nt]),zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pt])),Et){const ct=n.get(T[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,q,ht,0,0,q,ht,ut,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Nt=0;Nt<T.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Nt]);const zt=n.get(T[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}}function mt(R){return Math.min(s.maxSamples,R.samples)}function st(R){const T=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Dt(R){const T=a.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function wt(R,T){const q=R.colorSpace,ht=R.format,ut=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===sl||q!==ri&&q!==yn&&(fe.getTransfer(q)===me?o===!1?t.has("EXT_sRGB")===!0&&ht===Fn?(R.format=sl,R.minFilter=xn,R.generateMipmaps=!1):T=td.sRGBToLinear(T):(ht!==Fn||ut!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=C,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=B,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=st}function Xv(i,t,e){const n=e.isWebGL2;function s(r,a=yn){let o;const c=fe.getTransfer(a);if(r===Ei)return i.UNSIGNED_BYTE;if(r===Wf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Xf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Tm)return i.BYTE;if(r===Am)return i.SHORT;if(r===Dl)return i.UNSIGNED_SHORT;if(r===Vf)return i.INT;if(r===xi)return i.UNSIGNED_INT;if(r===vi)return i.FLOAT;if(r===Ur)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Rm)return i.ALPHA;if(r===Fn)return i.RGBA;if(r===Cm)return i.LUMINANCE;if(r===Pm)return i.LUMINANCE_ALPHA;if(r===Wi)return i.DEPTH_COMPONENT;if(r===$s)return i.DEPTH_STENCIL;if(r===sl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Lm)return i.RED;if(r===qf)return i.RED_INTEGER;if(r===Dm)return i.RG;if(r===Yf)return i.RG_INTEGER;if(r===$f)return i.RGBA_INTEGER;if(r===ka||r===Ha||r===Ga||r===Va)if(c===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lu||r===uu||r===hu||r===fu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===du||r===pu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===du)return c===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===pu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mu||r===gu||r===_u||r===xu||r===vu||r===yu||r===Mu||r===Su||r===bu||r===Eu||r===wu||r===Tu||r===Au||r===Ru)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===mu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_u)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Su)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tu)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Au)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ru)return c===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wa||r===Cu||r===Pu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Wa)return c===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Im||r===Lu||r===Du||r===Iu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Du)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Iu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class qv extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class le extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yv={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $v extends Ji{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const x=e.getContextAttributes();let m=null,p=null;const v=[],_=[],y=new pt;let b=null;const w=new en;w.layers.enable(1),w.viewport=new he;const S=new en;S.layers.enable(2),S.viewport=new he;const L=[w,S],M=new qv;M.layers.enable(1),M.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=v[$];return nt===void 0&&(nt=new pc,v[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=v[$];return nt===void 0&&(nt=new pc,v[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=v[$];return nt===void 0&&(nt=new pc,v[$]=nt),nt.getHandSpace()};function O($){const nt=_.indexOf($.inputSource);if(nt===-1)return;const lt=v[nt];lt!==void 0&&(lt.update($.inputSource,$.frame,l||a),lt.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",C);for(let $=0;$<v.length;$++){const nt=_[$];nt!==null&&(_[$]=null,v[$].disconnect(nt))}E=null,N=null,t.setRenderTarget(m),d=null,f=null,h=null,s=null,p=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",I),s.addEventListener("inputsourceschange",C),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Yi(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let nt=null,lt=null,vt=null;x.depth&&(vt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?$s:Wi,lt=x.stencil?Vi:xi);const dt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(dt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Yi(f.textureWidth,f.textureHeight,{format:Fn,type:Ei,depthTexture:new hd(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Tt=t.properties.get(p);Tt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C($){for(let nt=0;nt<$.removed.length;nt++){const lt=$.removed[nt],vt=_.indexOf(lt);vt>=0&&(_[vt]=null,v[vt].disconnect(lt))}for(let nt=0;nt<$.added.length;nt++){const lt=$.added[nt];let vt=_.indexOf(lt);if(vt===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=_.length){_.push(lt),vt=Tt;break}else if(_[Tt]===null){_[Tt]=lt,vt=Tt;break}if(vt===-1)break}const dt=v[vt];dt&&dt.connect(lt)}}const D=new A,k=new A;function Y($,nt,lt){D.setFromMatrixPosition(nt.matrixWorld),k.setFromMatrixPosition(lt.matrixWorld);const vt=D.distanceTo(k),dt=nt.projectionMatrix.elements,Tt=lt.projectionMatrix.elements,Lt=dt[14]/(dt[10]-1),Rt=dt[14]/(dt[10]+1),Ut=(dt[9]+1)/dt[5],B=(dt[9]-1)/dt[5],xt=(dt[8]-1)/dt[0],rt=(Tt[8]+1)/Tt[0],mt=Lt*xt,st=Lt*rt,Dt=vt/(-xt+rt),wt=Dt*-xt;nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(wt),$.translateZ(Dt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Lt+Dt,T=Rt+Dt,q=mt-wt,ht=st+(vt-wt),ut=Ut*Rt/T*R,at=B*Rt/T*R;$.projectionMatrix.makePerspective(q,ht,ut,at,R,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function X($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;M.near=S.near=w.near=$.near,M.far=S.far=w.far=$.far,(E!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,N=M.far);const nt=$.parent,lt=M.cameras;X(M,nt);for(let vt=0;vt<lt.length;vt++)X(lt[vt],nt);lt.length===2?Y(M,w,S):M.projectionMatrix.copy(w.projectionMatrix),H($,M,nt)};function H($,nt,lt){lt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(lt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)};let K=null;function tt($,nt){if(u=nt.getViewerPose(l||a),g=nt,u!==null){const lt=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let vt=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,vt=!0);for(let dt=0;dt<lt.length;dt++){const Tt=lt[dt];let Lt=null;if(d!==null)Lt=d.getViewport(Tt);else{const Ut=h.getViewSubImage(f,Tt);Lt=Ut.viewport,dt===0&&(t.setRenderTargetTextures(p,Ut.colorTexture,f.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(p))}let Rt=L[dt];Rt===void 0&&(Rt=new en,Rt.layers.enable(dt),Rt.viewport=new he,L[dt]=Rt),Rt.matrix.fromArray(Tt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Tt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),dt===0&&(M.matrix.copy(Rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),vt===!0&&M.cameras.push(Rt)}}for(let lt=0;lt<v.length;lt++){const vt=_[lt],dt=v[lt];vt!==null&&dt!==void 0&&dt.update(vt,nt,l||a)}K&&K($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const it=new ld;it.setAnimationLoop(tt),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}}function Zv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,od(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jv(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));const b=_.program;n.updateUBOMapping(v,b);const w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function u(v){const _=h();v.__bindingPointIndex=_;const y=i.createBuffer(),b=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=s[v.id],y=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,S=y.length;w<S;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,E=L.length;M<E;M++){const N=L[M];if(d(N,w,M,b)===!0){const O=N.__offset,I=Array.isArray(N.value)?N.value:[N.value];let C=0;for(let D=0;D<I.length;D++){const k=I[D],Y=x(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+C,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,C),C+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,_,y,b){const w=v.value,S=_+"_"+y;if(b[S]===void 0)return typeof w=="number"||typeof w=="boolean"?b[S]=w:b[S]=w.clone(),!0;{const L=b[S];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return b[S]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(v){const _=v.uniforms;let y=0;const b=16;for(let S=0,L=_.length;S<L;S++){const M=Array.isArray(_[S])?_[S]:[_[S]];for(let E=0,N=M.length;E<N;E++){const O=M[E],I=Array.isArray(O.value)?O.value:[O.value];for(let C=0,D=I.length;C<D;C++){const k=I[C],Y=x(k),X=y%b;X!==0&&b-X<Y.boundary&&(y+=b-X),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=Y.storage}}}const w=y%b;return w>0&&(y+=b-w),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Ol{constructor(t={}){const{canvas:e=qm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let y=!1,b=0,w=0,S=null,L=-1,M=null;const E=new he,N=new he;let O=null;const I=new re(0);let C=0,D=e.width,k=e.height,Y=1,X=null,H=null;const K=new he(0,0,D,k),tt=new he(0,0,D,k);let it=!1;const $=new Nl;let nt=!1,lt=!1,vt=null;const dt=new ae,Tt=new pt,Lt=new A,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return S===null?Y:1}let B=n;function xt(P,Z){for(let Q=0;Q<P.length;Q++){const et=P[Q],J=e.getContext(et,Z);if(J!==null)return J}return null}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pl}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",_t,!1),B===null){const Z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Z.shift(),B=xt(Z,P),B===null)throw xt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let rt,mt,st,Dt,wt,R,T,q,ht,ut,at,Pt,Mt,Et,Nt,zt,ct,Xt,Yt,Vt,Ft,bt,F,gt;function It(){rt=new ox(B),mt=new tx(B,rt,t),rt.init(mt),bt=new Xv(B,rt,mt),st=new Vv(B,rt,mt),Dt=new lx(B),wt=new Cv,R=new Wv(B,rt,st,wt,mt,bt,Dt),T=new nx(_),q=new rx(_),ht=new _g(B,mt),F=new J_(B,rt,ht,mt),ut=new ax(B,ht,Dt,F),at=new dx(B,ut,ht,Dt),Yt=new fx(B,mt,R),zt=new ex(wt),Pt=new Rv(_,T,q,rt,mt,F,zt),Mt=new Zv(_,wt),Et=new Lv,Nt=new Ov(rt,mt),Xt=new K_(_,T,q,st,at,f,c),ct=new Gv(_,at,mt),gt=new jv(B,Dt,mt,st),Vt=new Q_(B,rt,Dt,mt),Ft=new cx(B,rt,Dt,mt),Dt.programs=Pt.programs,_.capabilities=mt,_.extensions=rt,_.properties=wt,_.renderLists=Et,_.shadowMap=ct,_.state=st,_.info=Dt}It();const At=new $v(_,B);this.xr=At,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const P=rt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=rt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(D,k,!1))},this.getSize=function(P){return P.set(D,k)},this.setSize=function(P,Z,Q=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=P,k=Z,e.width=Math.floor(P*Y),e.height=Math.floor(Z*Y),Q===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(D*Y,k*Y).floor()},this.setDrawingBufferSize=function(P,Z,Q){D=P,k=Z,Y=Q,e.width=Math.floor(P*Q),e.height=Math.floor(Z*Q),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(K)},this.setViewport=function(P,Z,Q,et){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,Z,Q,et),st.viewport(E.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(P){return P.copy(tt)},this.setScissor=function(P,Z,Q,et){P.isVector4?tt.set(P.x,P.y,P.z,P.w):tt.set(P,Z,Q,et),st.scissor(N.copy(tt).multiplyScalar(Y).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(P){st.setScissorTest(it=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){H=P},this.getClearColor=function(P){return P.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(P=!0,Z=!0,Q=!0){let et=0;if(P){let J=!1;if(S!==null){const Ct=S.texture.format;J=Ct===$f||Ct===Yf||Ct===qf}if(J){const Ct=S.texture.type,Bt=Ct===Ei||Ct===xi||Ct===Dl||Ct===Vi||Ct===Wf||Ct===Xf,Wt=Xt.getClearColor(),qt=Xt.getClearAlpha(),te=Wt.r,Zt=Wt.g,jt=Wt.b;Bt?(d[0]=te,d[1]=Zt,d[2]=jt,d[3]=qt,B.clearBufferuiv(B.COLOR,0,d)):(g[0]=te,g[1]=Zt,g[2]=jt,g[3]=qt,B.clearBufferiv(B.COLOR,0,g))}else et|=B.COLOR_BUFFER_BIT}Z&&(et|=B.DEPTH_BUFFER_BIT),Q&&(et|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Et.dispose(),Nt.dispose(),wt.dispose(),T.dispose(),q.dispose(),at.dispose(),F.dispose(),gt.dispose(),Pt.dispose(),At.dispose(),At.removeEventListener("sessionstart",de),At.removeEventListener("sessionend",ce),vt&&(vt.dispose(),vt=null),ye.stop()};function ft(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=Dt.autoReset,Z=ct.enabled,Q=ct.autoUpdate,et=ct.needsUpdate,J=ct.type;It(),Dt.autoReset=P,ct.enabled=Z,ct.autoUpdate=Q,ct.needsUpdate=et,ct.type=J}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function St(P){const Z=P.target;Z.removeEventListener("dispose",St),Ht(Z)}function Ht(P){Ot(P),wt.remove(P)}function Ot(P){const Z=wt.get(P).programs;Z!==void 0&&(Z.forEach(function(Q){Pt.releaseProgram(Q)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,Q,et,J,Ct){Z===null&&(Z=Rt);const Bt=J.isMesh&&J.matrixWorld.determinant()<0,Wt=es(P,Z,Q,et,J);st.setMaterial(et,Bt);let qt=Q.index,te=1;if(et.wireframe===!0){if(qt=ut.getWireframeAttribute(Q),qt===void 0)return;te=2}const Zt=Q.drawRange,jt=Q.attributes.position;let Ae=Zt.start*te,an=(Zt.start+Zt.count)*te;Ct!==null&&(Ae=Math.max(Ae,Ct.start*te),an=Math.min(an,(Ct.start+Ct.count)*te)),qt!==null?(Ae=Math.max(Ae,0),an=Math.min(an,qt.count)):jt!=null&&(Ae=Math.max(Ae,0),an=Math.min(an,jt.count));const Fe=an-Ae;if(Fe<0||Fe===1/0)return;F.setup(J,et,Wt,Q,qt);let Xn,Me=Vt;if(qt!==null&&(Xn=ht.get(qt),Me=Ft,Me.setIndex(Xn)),J.isMesh)et.wireframe===!0?(st.setLineWidth(et.wireframeLinewidth*Ut()),Me.setMode(B.LINES)):Me.setMode(B.TRIANGLES);else if(J.isLine){let ie=et.linewidth;ie===void 0&&(ie=1),st.setLineWidth(ie*Ut()),J.isLineSegments?Me.setMode(B.LINES):J.isLineLoop?Me.setMode(B.LINE_LOOP):Me.setMode(B.LINE_STRIP)}else J.isPoints?Me.setMode(B.POINTS):J.isSprite&&Me.setMode(B.TRIANGLES);if(J.isBatchedMesh)Me.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Me.renderInstances(Ae,Fe,J.count);else if(Q.isInstancedBufferGeometry){const ie=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Na=Math.min(Q.instanceCount,ie);Me.renderInstances(Ae,Fe,Na)}else Me.render(Ae,Fe)};function ne(P,Z,Q){P.transparent===!0&&P.side===vn&&P.forceSinglePass===!1?(P.side=qe,P.needsUpdate=!0,Te(P,Z,Q),P.side=Hn,P.needsUpdate=!0,Te(P,Z,Q),P.side=vn):Te(P,Z,Q)}this.compile=function(P,Z,Q=null){Q===null&&(Q=P),m=Nt.get(Q),m.init(),v.push(m),Q.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),P!==Q&&P.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(_._useLegacyLights);const et=new Set;return P.traverse(function(J){const Ct=J.material;if(Ct)if(Array.isArray(Ct))for(let Bt=0;Bt<Ct.length;Bt++){const Wt=Ct[Bt];ne(Wt,Q,J),et.add(Wt)}else ne(Ct,Q,J),et.add(Ct)}),v.pop(),m=null,et},this.compileAsync=function(P,Z,Q=null){const et=this.compile(P,Z,Q);return new Promise(J=>{function Ct(){if(et.forEach(function(Bt){wt.get(Bt).currentProgram.isReady()&&et.delete(Bt)}),et.size===0){J(P);return}setTimeout(Ct,10)}rt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Jt=null;function pe(P){Jt&&Jt(P)}function de(){ye.stop()}function ce(){ye.start()}const ye=new ld;ye.setAnimationLoop(pe),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(P){Jt=P,At.setAnimationLoop(P),P===null?ye.stop():ye.start()},At.addEventListener("sessionstart",de),At.addEventListener("sessionend",ce),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Z),Z=At.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,Z,S),m=Nt.get(P,v.length),m.init(),v.push(m),dt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$.setFromProjectionMatrix(dt),lt=this.localClippingEnabled,nt=zt.init(this.clippingPlanes,lt),x=Et.get(P,p.length),x.init(),p.push(x),z(P,Z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(X,H),this.info.render.frame++,nt===!0&&zt.beginShadows();const Q=m.state.shadowsArray;if(ct.render(Q,P,Z),nt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(x,P),m.setupLights(_._useLegacyLights),Z.isArrayCamera){const et=Z.cameras;for(let J=0,Ct=et.length;J<Ct;J++){const Bt=et[J];V(x,P,Bt,Bt.viewport)}}else V(x,P,Z);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(_,P,Z),F.resetDefaultState(),L=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function z(P,Z,Q,et){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||$.intersectsSprite(P)){et&&Lt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(dt);const Bt=at.update(P),Wt=P.material;Wt.visible&&x.push(P,Bt,Wt,Q,Lt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||$.intersectsObject(P))){const Bt=at.update(P),Wt=P.material;if(et&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Lt.copy(P.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Lt.copy(Bt.boundingSphere.center)),Lt.applyMatrix4(P.matrixWorld).applyMatrix4(dt)),Array.isArray(Wt)){const qt=Bt.groups;for(let te=0,Zt=qt.length;te<Zt;te++){const jt=qt[te],Ae=Wt[jt.materialIndex];Ae&&Ae.visible&&x.push(P,Bt,Ae,Q,Lt.z,jt)}}else Wt.visible&&x.push(P,Bt,Wt,Q,Lt.z,null)}}const Ct=P.children;for(let Bt=0,Wt=Ct.length;Bt<Wt;Bt++)z(Ct[Bt],Z,Q,et)}function V(P,Z,Q,et){const J=P.opaque,Ct=P.transmissive,Bt=P.transparent;m.setupLightsView(Q),nt===!0&&zt.setGlobalState(_.clippingPlanes,Q),Ct.length>0&&ot(J,Ct,Z,Q),et&&st.viewport(E.copy(et)),J.length>0&&Gt(J,Z,Q),Ct.length>0&&Gt(Ct,Z,Q),Bt.length>0&&Gt(Bt,Z,Q),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function ot(P,Z,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Ct=mt.isWebGL2;vt===null&&(vt=new Yi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")?Ur:Ei,minFilter:Ir,samples:Ct?4:0})),_.getDrawingBufferSize(Tt),Ct?vt.setSize(Tt.x,Tt.y):vt.setSize(ol(Tt.x),ol(Tt.y));const Bt=_.getRenderTarget();_.setRenderTarget(vt),_.getClearColor(I),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();const Wt=_.toneMapping;_.toneMapping=bi,Gt(P,Q,et),R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt);let qt=!1;for(let te=0,Zt=Z.length;te<Zt;te++){const jt=Z[te],Ae=jt.object,an=jt.geometry,Fe=jt.material,Xn=jt.group;if(Fe.side===vn&&Ae.layers.test(et.layers)){const Me=Fe.side;Fe.side=qe,Fe.needsUpdate=!0,$t(Ae,Q,et,an,Fe,Xn),Fe.side=Me,Fe.needsUpdate=!0,qt=!0}}qt===!0&&(R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt)),_.setRenderTarget(Bt),_.setClearColor(I,C),_.toneMapping=Wt}function Gt(P,Z,Q){const et=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Ct=P.length;J<Ct;J++){const Bt=P[J],Wt=Bt.object,qt=Bt.geometry,te=et===null?Bt.material:et,Zt=Bt.group;Wt.layers.test(Q.layers)&&$t(Wt,Z,Q,qt,te,Zt)}}function $t(P,Z,Q,et,J,Ct){P.onBeforeRender(_,Z,Q,et,J,Ct),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(_,Z,Q,et,P,Ct),J.transparent===!0&&J.side===vn&&J.forceSinglePass===!1?(J.side=qe,J.needsUpdate=!0,_.renderBufferDirect(Q,Z,et,J,P,Ct),J.side=Hn,J.needsUpdate=!0,_.renderBufferDirect(Q,Z,et,J,P,Ct),J.side=vn):_.renderBufferDirect(Q,Z,et,J,P,Ct),P.onAfterRender(_,Z,Q,et,J,Ct)}function Te(P,Z,Q){Z.isScene!==!0&&(Z=Rt);const et=wt.get(P),J=m.state.lights,Ct=m.state.shadowsArray,Bt=J.state.version,Wt=Pt.getParameters(P,J.state,Ct,Z,Q),qt=Pt.getProgramCacheKey(Wt);let te=et.programs;et.environment=P.isMeshStandardMaterial?Z.environment:null,et.fog=Z.fog,et.envMap=(P.isMeshStandardMaterial?q:T).get(P.envMap||et.environment),te===void 0&&(P.addEventListener("dispose",St),te=new Map,et.programs=te);let Zt=te.get(qt);if(Zt!==void 0){if(et.currentProgram===Zt&&et.lightsStateVersion===Bt)return on(P,Wt),Zt}else Wt.uniforms=Pt.getUniforms(P),P.onBuild(Q,Wt,_),P.onBeforeCompile(Wt,_),Zt=Pt.acquireProgram(Wt,qt),te.set(qt,Zt),et.uniforms=Wt.uniforms;const jt=et.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(jt.clippingPlanes=zt.uniform),on(P,Wt),et.needsLights=Wp(P),et.lightsStateVersion=Bt,et.needsLights&&(jt.ambientLightColor.value=J.state.ambient,jt.lightProbe.value=J.state.probe,jt.directionalLights.value=J.state.directional,jt.directionalLightShadows.value=J.state.directionalShadow,jt.spotLights.value=J.state.spot,jt.spotLightShadows.value=J.state.spotShadow,jt.rectAreaLights.value=J.state.rectArea,jt.ltc_1.value=J.state.rectAreaLTC1,jt.ltc_2.value=J.state.rectAreaLTC2,jt.pointLights.value=J.state.point,jt.pointLightShadows.value=J.state.pointShadow,jt.hemisphereLights.value=J.state.hemi,jt.directionalShadowMap.value=J.state.directionalShadowMap,jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,jt.spotShadowMap.value=J.state.spotShadowMap,jt.spotLightMatrix.value=J.state.spotLightMatrix,jt.spotLightMap.value=J.state.spotLightMap,jt.pointShadowMap.value=J.state.pointShadowMap,jt.pointShadowMatrix.value=J.state.pointShadowMatrix),et.currentProgram=Zt,et.uniformsList=null,Zt}function He(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=Qo.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function on(P,Z){const Q=wt.get(P);Q.outputColorSpace=Z.outputColorSpace,Q.batching=Z.batching,Q.instancing=Z.instancing,Q.instancingColor=Z.instancingColor,Q.skinning=Z.skinning,Q.morphTargets=Z.morphTargets,Q.morphNormals=Z.morphNormals,Q.morphColors=Z.morphColors,Q.morphTargetsCount=Z.morphTargetsCount,Q.numClippingPlanes=Z.numClippingPlanes,Q.numIntersection=Z.numClipIntersection,Q.vertexAlphas=Z.vertexAlphas,Q.vertexTangents=Z.vertexTangents,Q.toneMapping=Z.toneMapping}function es(P,Z,Q,et,J){Z.isScene!==!0&&(Z=Rt),R.resetTextureUnits();const Ct=Z.fog,Bt=et.isMeshStandardMaterial?Z.environment:null,Wt=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ri,qt=(et.isMeshStandardMaterial?q:T).get(et.envMap||Bt),te=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Zt=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),jt=!!Q.morphAttributes.position,Ae=!!Q.morphAttributes.normal,an=!!Q.morphAttributes.color;let Fe=bi;et.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Fe=_.toneMapping);const Xn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Me=Xn!==void 0?Xn.length:0,ie=wt.get(et),Na=m.state.lights;if(nt===!0&&(lt===!0||P!==M)){const dn=P===M&&et.id===L;zt.setState(et,P,dn)}let be=!1;et.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Na.state.version||ie.outputColorSpace!==Wt||J.isBatchedMesh&&ie.batching===!1||!J.isBatchedMesh&&ie.batching===!0||J.isInstancedMesh&&ie.instancing===!1||!J.isInstancedMesh&&ie.instancing===!0||J.isSkinnedMesh&&ie.skinning===!1||!J.isSkinnedMesh&&ie.skinning===!0||J.isInstancedMesh&&ie.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ie.instancingColor===!1&&J.instanceColor!==null||ie.envMap!==qt||et.fog===!0&&ie.fog!==Ct||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==zt.numPlanes||ie.numIntersection!==zt.numIntersection)||ie.vertexAlphas!==te||ie.vertexTangents!==Zt||ie.morphTargets!==jt||ie.morphNormals!==Ae||ie.morphColors!==an||ie.toneMapping!==Fe||mt.isWebGL2===!0&&ie.morphTargetsCount!==Me)&&(be=!0):(be=!0,ie.__version=et.version);let Ai=ie.currentProgram;be===!0&&(Ai=Te(et,Z,J));let tu=!1,nr=!1,Fa=!1;const Ge=Ai.getUniforms(),Ri=ie.uniforms;if(st.useProgram(Ai.program)&&(tu=!0,nr=!0,Fa=!0),et.id!==L&&(L=et.id,nr=!0),tu||M!==P){Ge.setValue(B,"projectionMatrix",P.projectionMatrix),Ge.setValue(B,"viewMatrix",P.matrixWorldInverse);const dn=Ge.map.cameraPosition;dn!==void 0&&dn.setValue(B,Lt.setFromMatrixPosition(P.matrixWorld)),mt.logarithmicDepthBuffer&&Ge.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ge.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,nr=!0,Fa=!0)}if(J.isSkinnedMesh){Ge.setOptional(B,J,"bindMatrix"),Ge.setOptional(B,J,"bindMatrixInverse");const dn=J.skeleton;dn&&(mt.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Ge.setValue(B,"boneTexture",dn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Ge.setOptional(B,J,"batchingTexture"),Ge.setValue(B,"batchingTexture",J._matricesTexture,R));const Oa=Q.morphAttributes;if((Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0&&mt.isWebGL2===!0)&&Yt.update(J,Q,Ai),(nr||ie.receiveShadow!==J.receiveShadow)&&(ie.receiveShadow=J.receiveShadow,Ge.setValue(B,"receiveShadow",J.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Ri.envMap.value=qt,Ri.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),nr&&(Ge.setValue(B,"toneMappingExposure",_.toneMappingExposure),ie.needsLights&&Wr(Ri,Fa),Ct&&et.fog===!0&&Mt.refreshFogUniforms(Ri,Ct),Mt.refreshMaterialUniforms(Ri,et,Y,k,vt),Qo.upload(B,He(ie),Ri,R)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Qo.upload(B,He(ie),Ri,R),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ge.setValue(B,"center",J.center),Ge.setValue(B,"modelViewMatrix",J.modelViewMatrix),Ge.setValue(B,"normalMatrix",J.normalMatrix),Ge.setValue(B,"modelMatrix",J.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const dn=et.uniformsGroups;for(let Ba=0,Xp=dn.length;Ba<Xp;Ba++)if(mt.isWebGL2){const eu=dn[Ba];gt.update(eu,Ai),gt.bind(eu,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function Wr(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Wp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,Z,Q){wt.get(P.texture).__webglTexture=Z,wt.get(P.depthTexture).__webglTexture=Q;const et=wt.get(P);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=Q===void 0,et.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Z){const Q=wt.get(P);Q.__webglFramebuffer=Z,Q.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,Q=0){S=P,b=Z,w=Q;let et=!0,J=null,Ct=!1,Bt=!1;if(P){const qt=wt.get(P);qt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(B.FRAMEBUFFER,null),et=!1):qt.__webglFramebuffer===void 0?R.setupRenderTarget(P):qt.__hasExternalTextures&&R.rebindTextures(P,wt.get(P.texture).__webglTexture,wt.get(P.depthTexture).__webglTexture);const te=P.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Bt=!0);const Zt=wt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Zt[Z])?J=Zt[Z][Q]:J=Zt[Z],Ct=!0):mt.isWebGL2&&P.samples>0&&R.useMultisampledRTT(P)===!1?J=wt.get(P).__webglMultisampledFramebuffer:Array.isArray(Zt)?J=Zt[Q]:J=Zt,E.copy(P.viewport),N.copy(P.scissor),O=P.scissorTest}else E.copy(K).multiplyScalar(Y).floor(),N.copy(tt).multiplyScalar(Y).floor(),O=it;if(st.bindFramebuffer(B.FRAMEBUFFER,J)&&mt.drawBuffers&&et&&st.drawBuffers(P,J),st.viewport(E),st.scissor(N),st.setScissorTest(O),Ct){const qt=wt.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,qt.__webglTexture,Q)}else if(Bt){const qt=wt.get(P.texture),te=Z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.__webglTexture,Q||0,te)}L=-1},this.readRenderTargetPixels=function(P,Z,Q,et,J,Ct,Bt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=wt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt){st.bindFramebuffer(B.FRAMEBUFFER,Wt);try{const qt=P.texture,te=qt.format,Zt=qt.type;if(te!==Fn&&bt.convert(te)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const jt=Zt===Ur&&(rt.has("EXT_color_buffer_half_float")||mt.isWebGL2&&rt.has("EXT_color_buffer_float"));if(Zt!==Ei&&bt.convert(Zt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Zt===vi&&(mt.isWebGL2||rt.has("OES_texture_float")||rt.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-et&&Q>=0&&Q<=P.height-J&&B.readPixels(Z,Q,et,J,bt.convert(te),bt.convert(Zt),Ct)}finally{const qt=S!==null?wt.get(S).__webglFramebuffer:null;st.bindFramebuffer(B.FRAMEBUFFER,qt)}}},this.copyFramebufferToTexture=function(P,Z,Q=0){const et=Math.pow(2,-Q),J=Math.floor(Z.image.width*et),Ct=Math.floor(Z.image.height*et);R.setTexture2D(Z,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,P.x,P.y,J,Ct),st.unbindTexture()},this.copyTextureToTexture=function(P,Z,Q,et=0){const J=Z.image.width,Ct=Z.image.height,Bt=bt.convert(Q.format),Wt=bt.convert(Q.type);R.setTexture2D(Q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment),Z.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,et,P.x,P.y,J,Ct,Bt,Wt,Z.image.data):Z.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,et,P.x,P.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Bt,Z.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,et,P.x,P.y,Bt,Wt,Z.image),et===0&&Q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,Q,et,J=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=P.max.x-P.min.x+1,Bt=P.max.y-P.min.y+1,Wt=P.max.z-P.min.z+1,qt=bt.convert(et.format),te=bt.convert(et.type);let Zt;if(et.isData3DTexture)R.setTexture3D(et,0),Zt=B.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)R.setTexture2DArray(et,0),Zt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,et.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,et.unpackAlignment);const jt=B.getParameter(B.UNPACK_ROW_LENGTH),Ae=B.getParameter(B.UNPACK_IMAGE_HEIGHT),an=B.getParameter(B.UNPACK_SKIP_PIXELS),Fe=B.getParameter(B.UNPACK_SKIP_ROWS),Xn=B.getParameter(B.UNPACK_SKIP_IMAGES),Me=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Me.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,P.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,P.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,P.min.z),Q.isDataTexture||Q.isData3DTexture?B.texSubImage3D(Zt,J,Z.x,Z.y,Z.z,Ct,Bt,Wt,qt,te,Me.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Zt,J,Z.x,Z.y,Z.z,Ct,Bt,Wt,qt,Me.data)):B.texSubImage3D(Zt,J,Z.x,Z.y,Z.z,Ct,Bt,Wt,qt,te,Me),B.pixelStorei(B.UNPACK_ROW_LENGTH,jt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ae),B.pixelStorei(B.UNPACK_SKIP_PIXELS,an),B.pixelStorei(B.UNPACK_SKIP_ROWS,Fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xn),J===0&&et.generateMipmaps&&B.generateMipmap(Zt),st.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),st.unbindTexture()},this.resetState=function(){b=0,w=0,S=null,st.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Il?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===ba?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?Xi:jf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Xi?De:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Kv extends Ol{}Kv.prototype.isWebGL1Renderer=!0;class Bl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=n}clone(){return new Bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zl extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Mh extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ys=new ae,Sh=new ae,po=[],bh=new ue,Jv=new ae,cr=new oe,lr=new Qi;class Qv extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),bh.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(bh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),lr.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),Sh.multiplyMatrices(n,ys),cr.matrixWorld=Sh,cr.raycast(t,po);for(let a=0,o=po.length;a<o;a++){const c=po[a];c.instanceId=r,c.object=this,e.push(c)}po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class kl extends Qs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Eh=new A,wh=new A,Th=new ae,mc=new Js,mo=new Qi;class ty extends ke{constructor(t=new Je,e=new kl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Eh.fromBufferAttribute(e,s-1),wh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Eh.distanceTo(wh);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;Th.copy(s).invert(),mc.copy(t.ray).applyMatrix4(Th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new A,u=new A,h=new A,f=new A,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let _=p,y=v-1;_<y;_+=d){const b=g.getX(_),w=g.getX(_+1);if(l.fromBufferAttribute(m,b),u.fromBufferAttribute(m,w),mc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(f);L<t.near||L>t.far||e.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=p,y=v-1;_<y;_+=d){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),mc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ah=new A,Rh=new A;class _d extends ty{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ah.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ah.distanceTo(Rh);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ey extends sn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new pt:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],a=[],o=new A,c=new ae;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hl extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new pt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ny extends Hl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const go=new A,gc=new Gl,_c=new Gl,xc=new Gl;class xd extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),l=go);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),gc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,x,m),_c.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,x,m),xc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),_c.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),xc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(gc.calc(c),_c.calc(c),xc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ch(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function iy(i,t){const e=1-i;return e*e*t}function sy(i,t){return 2*(1-i)*i*t}function ry(i,t){return i*i*t}function Er(i,t,e,n){return iy(i,t)+sy(i,e)+ry(i,n)}function oy(i,t){const e=1-i;return e*e*e*t}function ay(i,t){const e=1-i;return 3*e*e*i*t}function cy(i,t){return 3*(1-i)*i*i*t}function ly(i,t){return i*i*i*t}function wr(i,t,e,n,s){return oy(i,t)+ay(i,e)+cy(i,n)+ly(i,s)}class vd extends Vn{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(t,s.x,r.x,a.x,o.x),wr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uy extends Vn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(t,s.x,r.x,a.x,o.x),wr(t,s.y,r.y,a.y,o.y),wr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yd extends Vn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hy extends Vn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Md extends Vn{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Er(t,s.x,r.x,a.x),Er(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sd extends Vn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Er(t,s.x,r.x,a.x),Er(t,s.y,r.y,a.y),Er(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bd extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Ch(o,c.x,l.x,u.x,h.x),Ch(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var pa=Object.freeze({__proto__:null,ArcCurve:ny,CatmullRomCurve3:xd,CubicBezierCurve:vd,CubicBezierCurve3:uy,EllipseCurve:Hl,LineCurve:yd,LineCurve3:hy,QuadraticBezierCurve:Md,QuadraticBezierCurve3:Sd,SplineCurve:bd});class fy extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new pa[s.type]().fromJSON(s))}return this}}class cl extends fy{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new yd(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Md(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new vd(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new bd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Hl(t,e,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class kr extends Je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(f,3)),this.setAttribute("uv",new we(d,2));function v(){const y=new A,b=new A;let w=0;const S=(e-t)/n;for(let L=0;L<=r;L++){const M=[],E=L/r,N=E*(e-t)+t;for(let O=0;O<=s;O++){const I=O/s,C=I*c+o,D=Math.sin(C),k=Math.cos(C);b.x=N*D,b.y=-E*n+m,b.z=N*k,h.push(b.x,b.y,b.z),y.set(D,S,k).normalize(),f.push(y.x,y.y,y.z),d.push(I,1-E),M.push(g++)}x.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const E=x[M][L],N=x[M+1][L],O=x[M+1][L+1],I=x[M][L+1];u.push(E,N,I),u.push(N,O,I),w+=6}l.addGroup(p,w,0),p+=w}function _(y){const b=g,w=new pt,S=new A;let L=0;const M=y===!0?t:e,E=y===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;const N=g;for(let O=0;O<=s;O++){const C=O/s*c+o,D=Math.cos(C),k=Math.sin(C);S.x=M*k,S.y=m*E,S.z=M*D,h.push(S.x,S.y,S.z),f.push(0,E,0),w.x=D*.5+.5,w.y=k*.5*E+.5,d.push(w.x,w.y),g++}for(let O=0;O<s;O++){const I=b+O,C=N+O;y===!0?u.push(C,C+1,I):u.push(C+1,C,I),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ed extends cl{constructor(t){super(t),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new cl().fromJSON(s))}return this}}const dy={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=wd(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,f,d;if(n&&(r=xy(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return Nr(r,a,e,o,c,d,0),a}};function wd(i,t,e,n,s){let r,a;if(s===Cy(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Ph(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Ph(r,i[r],i[r+1],a);return a&&Ra(a,a.next)&&(Or(a),a=a.next),a}function ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ra(e,e.next)||Se(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Nr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&by(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?my(i,n,s,r):py(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Or(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=gy(ji(i),t,e),Nr(i,t,e,n,s,r,2)):a===2&&_y(i,t,e,n,s,r):Nr(ji(i),t,e,n,s,r,1);break}}}function py(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&zs(s,o,r,c,a,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function my(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,x=o>c?o>l?o:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=ll(d,g,t,e,n),v=ll(x,m,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&zs(o,u,c,h,l,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&zs(o,u,c,h,l,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&zs(o,u,c,h,l,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&zs(o,u,c,h,l,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function gy(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Ra(s,r)&&Td(s,n,n.next,r)&&Fr(s,r)&&Fr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Or(n),Or(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function _y(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ty(a,o)){let c=Ad(a,o);a=ji(a,a.next),c=ji(c,c.next),Nr(a,t,e,n,s,r,0),Nr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xy(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=wd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(wy(l));for(s.sort(vy),r=0;r<s.length;r++)e=yy(s[r],e);return e}function vy(i,t){return i.x-t.x}function yy(i,t){const e=My(i,t);if(!e)return t;const n=Ad(e,i);return ji(n,n.next),ji(e,e.next)}function My(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&zs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Fr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Sy(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function Sy(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function by(i,t,e,n){let s=i;do s.z===0&&(s.z=ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ey(s)}function Ey(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ty(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ay(i,t)&&(Fr(i,t)&&Fr(t,i)&&Ry(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Ra(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ra(i,t){return i.x===t.x&&i.y===t.y}function Td(i,t,e,n){const s=xo(Se(i,t,e)),r=xo(Se(i,t,n)),a=xo(Se(e,n,i)),o=xo(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&_o(i,e,t)||r===0&&_o(i,n,t)||a===0&&_o(e,i,n)||o===0&&_o(e,t,n))}function _o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xo(i){return i>0?1:i<0?-1:0}function Ay(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Td(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function Ry(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ad(i,t){const e=new ul(i.i,i.x,i.y),n=new ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ph(i,t,e,n){const s=new ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ul(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cy(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Tr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Tr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Lh(t),Dh(n,t);let a=t.length;e.forEach(Lh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Dh(n,e[c]);const o=dy.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Lh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vl extends Je{constructor(t=new Ed([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new we(s,3)),this.setAttribute("uv",new we(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Py;let _,y=!1,b,w,S,L;p&&(_=p.getSpacedPoints(u),y=!0,f=!1,b=p.computeFrenetFrames(u,!1),w=new A,S=new A,L=new A),f||(m=0,d=0,g=0,x=0);const M=o.extractPoints(l);let E=M.shape;const N=M.holes;if(!Tr.isClockWise(E)){E=E.reverse();for(let B=0,xt=N.length;B<xt;B++){const rt=N[B];Tr.isClockWise(rt)&&(N[B]=rt.reverse())}}const I=Tr.triangulateShape(E,N),C=E;for(let B=0,xt=N.length;B<xt;B++){const rt=N[B];E=E.concat(rt)}function D(B,xt,rt){return xt||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(xt,rt)}const k=E.length,Y=I.length;function X(B,xt,rt){let mt,st,Dt;const wt=B.x-xt.x,R=B.y-xt.y,T=rt.x-B.x,q=rt.y-B.y,ht=wt*wt+R*R,ut=wt*q-R*T;if(Math.abs(ut)>Number.EPSILON){const at=Math.sqrt(ht),Pt=Math.sqrt(T*T+q*q),Mt=xt.x-R/at,Et=xt.y+wt/at,Nt=rt.x-q/Pt,zt=rt.y+T/Pt,ct=((Nt-Mt)*q-(zt-Et)*T)/(wt*q-R*T);mt=Mt+wt*ct-B.x,st=Et+R*ct-B.y;const Xt=mt*mt+st*st;if(Xt<=2)return new pt(mt,st);Dt=Math.sqrt(Xt/2)}else{let at=!1;wt>Number.EPSILON?T>Number.EPSILON&&(at=!0):wt<-Number.EPSILON?T<-Number.EPSILON&&(at=!0):Math.sign(R)===Math.sign(q)&&(at=!0),at?(mt=-R,st=wt,Dt=Math.sqrt(ht)):(mt=wt,st=R,Dt=Math.sqrt(ht/2))}return new pt(mt/Dt,st/Dt)}const H=[];for(let B=0,xt=C.length,rt=xt-1,mt=B+1;B<xt;B++,rt++,mt++)rt===xt&&(rt=0),mt===xt&&(mt=0),H[B]=X(C[B],C[rt],C[mt]);const K=[];let tt,it=H.concat();for(let B=0,xt=N.length;B<xt;B++){const rt=N[B];tt=[];for(let mt=0,st=rt.length,Dt=st-1,wt=mt+1;mt<st;mt++,Dt++,wt++)Dt===st&&(Dt=0),wt===st&&(wt=0),tt[mt]=X(rt[mt],rt[Dt],rt[wt]);K.push(tt),it=it.concat(tt)}for(let B=0;B<m;B++){const xt=B/m,rt=d*Math.cos(xt*Math.PI/2),mt=g*Math.sin(xt*Math.PI/2)+x;for(let st=0,Dt=C.length;st<Dt;st++){const wt=D(C[st],H[st],mt);dt(wt.x,wt.y,-rt)}for(let st=0,Dt=N.length;st<Dt;st++){const wt=N[st];tt=K[st];for(let R=0,T=wt.length;R<T;R++){const q=D(wt[R],tt[R],mt);dt(q.x,q.y,-rt)}}}const $=g+x;for(let B=0;B<k;B++){const xt=f?D(E[B],it[B],$):E[B];y?(S.copy(b.normals[0]).multiplyScalar(xt.x),w.copy(b.binormals[0]).multiplyScalar(xt.y),L.copy(_[0]).add(S).add(w),dt(L.x,L.y,L.z)):dt(xt.x,xt.y,0)}for(let B=1;B<=u;B++)for(let xt=0;xt<k;xt++){const rt=f?D(E[xt],it[xt],$):E[xt];y?(S.copy(b.normals[B]).multiplyScalar(rt.x),w.copy(b.binormals[B]).multiplyScalar(rt.y),L.copy(_[B]).add(S).add(w),dt(L.x,L.y,L.z)):dt(rt.x,rt.y,h/u*B)}for(let B=m-1;B>=0;B--){const xt=B/m,rt=d*Math.cos(xt*Math.PI/2),mt=g*Math.sin(xt*Math.PI/2)+x;for(let st=0,Dt=C.length;st<Dt;st++){const wt=D(C[st],H[st],mt);dt(wt.x,wt.y,h+rt)}for(let st=0,Dt=N.length;st<Dt;st++){const wt=N[st];tt=K[st];for(let R=0,T=wt.length;R<T;R++){const q=D(wt[R],tt[R],mt);y?dt(q.x,q.y+_[u-1].y,_[u-1].x+rt):dt(q.x,q.y,h+rt)}}}nt(),lt();function nt(){const B=s.length/3;if(f){let xt=0,rt=k*xt;for(let mt=0;mt<Y;mt++){const st=I[mt];Tt(st[2]+rt,st[1]+rt,st[0]+rt)}xt=u+m*2,rt=k*xt;for(let mt=0;mt<Y;mt++){const st=I[mt];Tt(st[0]+rt,st[1]+rt,st[2]+rt)}}else{for(let xt=0;xt<Y;xt++){const rt=I[xt];Tt(rt[2],rt[1],rt[0])}for(let xt=0;xt<Y;xt++){const rt=I[xt];Tt(rt[0]+k*u,rt[1]+k*u,rt[2]+k*u)}}n.addGroup(B,s.length/3-B,0)}function lt(){const B=s.length/3;let xt=0;vt(C,xt),xt+=C.length;for(let rt=0,mt=N.length;rt<mt;rt++){const st=N[rt];vt(st,xt),xt+=st.length}n.addGroup(B,s.length/3-B,1)}function vt(B,xt){let rt=B.length;for(;--rt>=0;){const mt=rt;let st=rt-1;st<0&&(st=B.length-1);for(let Dt=0,wt=u+m*2;Dt<wt;Dt++){const R=k*Dt,T=k*(Dt+1),q=xt+mt+R,ht=xt+st+R,ut=xt+st+T,at=xt+mt+T;Lt(q,ht,ut,at)}}}function dt(B,xt,rt){c.push(B),c.push(xt),c.push(rt)}function Tt(B,xt,rt){Rt(B),Rt(xt),Rt(rt);const mt=s.length/3,st=v.generateTopUV(n,s,mt-3,mt-2,mt-1);Ut(st[0]),Ut(st[1]),Ut(st[2])}function Lt(B,xt,rt,mt){Rt(B),Rt(xt),Rt(mt),Rt(xt),Rt(rt),Rt(mt);const st=s.length/3,Dt=v.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);Ut(Dt[0]),Ut(Dt[1]),Ut(Dt[3]),Ut(Dt[1]),Ut(Dt[2]),Ut(Dt[3])}function Rt(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function Ut(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ly(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new pa[s.type]().fromJSON(s)),new Vl(n,t.options)}}const Py={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new pt(r,a),new pt(o,c),new pt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new pt(a,1-c),new pt(l,1-h),new pt(f,1-g),new pt(x,1-p)]:[new pt(o,1-c),new pt(u,1-h),new pt(d,1-g),new pt(m,1-p)]}};function Ly(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ca extends Je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new A,h=new A,f=new A;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;a.push(x,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wl extends Je{constructor(t=new Sd(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,c=new A,l=new pt;let u=new A;const h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new we(h,3)),this.setAttribute("normal",new we(f,3)),this.setAttribute("uv",new we(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),v(),p()}function m(_){u=t.getPointAt(_/e,u);const y=a.normals[_],b=a.binormals[_];for(let w=0;w<=s;w++){const S=w/s*Math.PI*2,L=Math.sin(S),M=-Math.cos(S);c.x=M*y.x+L*b.x,c.y=M*y.y+L*b.y,c.z=M*y.z+L*b.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){const b=(s+1)*(_-1)+(y-1),w=(s+1)*_+(y-1),S=(s+1)*_+y,L=(s+1)*(_-1)+y;g.push(b,w,L),g.push(w,S,L)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)l.x=_/e,l.y=y/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Wl(new pa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ma extends Qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xl extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Rd extends Xl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vc=new ae,Ih=new A,Uh=new A;class Cd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ih),Uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uh),e.updateMatrixWorld(),vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nh=new ae,ur=new A,yc=new A;class Dy extends Cd{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),yc.copy(n.position),yc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(yc),n.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),Nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh)}}class Iy extends Xl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Uy extends Cd{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hr extends Xl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Uy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ny{constructor(t,e,n=0,s=1/0){this.ray=new Js(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return hl(t,this,n,e),n.sort(Fh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)hl(t[s],this,n,e);return n.sort(Fh),n}}function Fh(i,t){return i.distance-t.distance}function hl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)hl(s[r],t,e,!0)}}class Oh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bh=new A,vo=new A;class Tn{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Bh.subVectors(t,this.start),vo.subVectors(this.end,this.start);const n=vo.dot(vo);let r=vo.dot(Bh)/n;return e&&(r=Be(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class zh extends _d{constructor(t=10,e=10,n=4473924,s=8947848){n=new re(n),s=new re(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let f=0,d=0,g=-o;f<=e;f++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const x=f===r?n:s;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}const u=new Je;u.setAttribute("position",new we(c,3)),u.setAttribute("color",new we(l,3));const h=new kl({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const yo=new ue;class Fy extends _d{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Je;r.setIndex(new Ie(n,1)),r.setAttribute("position",new Ie(s,3)),super(r,new kl({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&yo.setFromObject(this.object),yo.isEmpty())return;const e=yo.min,n=yo.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);const kh={type:"change"},Mc={type:"start"},Hh={type:"end"},Mo=new Js,Gh=new In,Oy=Math.cos(70*Xm.DEG2RAD);class Pd extends Ji{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",Nt),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Nt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(kh),n.update(),r=s.NONE},this.update=function(){const F=new A,gt=new $i().setFromUnitVectors(t.up,new A(0,1,0)),It=gt.clone().invert(),At=new A,ft=new $i,G=new A,_t=2*Math.PI;return function(Ht=null){const Ot=n.object.position;F.copy(Ot).sub(n.target),F.applyQuaternion(gt),o.setFromVector3(F),n.autoRotate&&r===s.NONE&&O(E(Ht)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ne=n.minAzimuthAngle,Jt=n.maxAzimuthAngle;isFinite(ne)&&isFinite(Jt)&&(ne<-Math.PI?ne+=_t:ne>Math.PI&&(ne-=_t),Jt<-Math.PI?Jt+=_t:Jt>Math.PI&&(Jt-=_t),ne<=Jt?o.theta=Math.max(ne,Math.min(Jt,o.theta)):o.theta=o.theta>(ne+Jt)/2?Math.max(ne,o.theta):Math.min(Jt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*l),F.setFromSpherical(o),F.applyQuaternion(It),Ot.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let pe=!1;if(n.zoomToCursor&&w){let de=null;if(n.object.isPerspectiveCamera){const ce=F.length();de=K(ce*l);const ye=ce-de;n.object.position.addScaledVector(y,ye),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ce=new A(b.x,b.y,0);ce.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),pe=!0;const ye=new A(b.x,b.y,0);ye.unproject(n.object),n.object.position.sub(ye).add(ce),n.object.updateMatrixWorld(),de=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;de!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(de).add(n.object.position):(Mo.origin.copy(n.object.position),Mo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Mo.direction))<Oy?t.lookAt(n.target):(Gh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Mo.intersectPlane(Gh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),pe=!0);return l=1,w=!1,pe||At.distanceToSquared(n.object.position)>a||8*(1-ft.dot(n.object.quaternion))>a||G.distanceToSquared(n.target)>0?(n.dispatchEvent(kh),At.copy(n.object.position),ft.copy(n.object.quaternion),G.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Xt),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",at),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",q),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Nt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Oh,c=new Oh;let l=1;const u=new A,h=new pt,f=new pt,d=new pt,g=new pt,x=new pt,m=new pt,p=new pt,v=new pt,_=new pt,y=new A,b=new pt;let w=!1;const S=[],L={};let M=!1;function E(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function N(F){const gt=Math.abs(F*.01);return Math.pow(.95,n.zoomSpeed*gt)}function O(F){c.theta-=F}function I(F){c.phi-=F}const C=function(){const F=new A;return function(It,At){F.setFromMatrixColumn(At,0),F.multiplyScalar(-It),u.add(F)}}(),D=function(){const F=new A;return function(It,At){n.screenSpacePanning===!0?F.setFromMatrixColumn(At,1):(F.setFromMatrixColumn(At,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(It),u.add(F)}}(),k=function(){const F=new A;return function(It,At){const ft=n.domElement;if(n.object.isPerspectiveCamera){const G=n.object.position;F.copy(G).sub(n.target);let _t=F.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),C(2*It*_t/ft.clientHeight,n.object.matrix),D(2*At*_t/ft.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(It*(n.object.right-n.object.left)/n.object.zoom/ft.clientWidth,n.object.matrix),D(At*(n.object.top-n.object.bottom)/n.object.zoom/ft.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(F,gt){if(!n.zoomToCursor)return;w=!0;const It=n.domElement.getBoundingClientRect(),At=F-It.left,ft=gt-It.top,G=It.width,_t=It.height;b.x=At/G*2-1,b.y=-(ft/_t)*2+1,y.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function tt(F){h.set(F.clientX,F.clientY)}function it(F){H(F.clientX,F.clientX),p.set(F.clientX,F.clientY)}function $(F){g.set(F.clientX,F.clientY)}function nt(F){f.set(F.clientX,F.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const gt=n.domElement;O(2*Math.PI*d.x/gt.clientHeight),I(2*Math.PI*d.y/gt.clientHeight),h.copy(f),n.update()}function lt(F){v.set(F.clientX,F.clientY),_.subVectors(v,p),_.y>0?Y(N(_.y)):_.y<0&&X(N(_.y)),p.copy(v),n.update()}function vt(F){x.set(F.clientX,F.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(x),n.update()}function dt(F){H(F.clientX,F.clientY),F.deltaY<0?X(N(F.deltaY)):F.deltaY>0&&Y(N(F.deltaY)),n.update()}function Tt(F){let gt=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),gt=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),gt=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),gt=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),gt=!0;break}gt&&(F.preventDefault(),n.update())}function Lt(F){if(S.length===1)h.set(F.pageX,F.pageY);else{const gt=bt(F),It=.5*(F.pageX+gt.x),At=.5*(F.pageY+gt.y);h.set(It,At)}}function Rt(F){if(S.length===1)g.set(F.pageX,F.pageY);else{const gt=bt(F),It=.5*(F.pageX+gt.x),At=.5*(F.pageY+gt.y);g.set(It,At)}}function Ut(F){const gt=bt(F),It=F.pageX-gt.x,At=F.pageY-gt.y,ft=Math.sqrt(It*It+At*At);p.set(0,ft)}function B(F){n.enableZoom&&Ut(F),n.enablePan&&Rt(F)}function xt(F){n.enableZoom&&Ut(F),n.enableRotate&&Lt(F)}function rt(F){if(S.length==1)f.set(F.pageX,F.pageY);else{const It=bt(F),At=.5*(F.pageX+It.x),ft=.5*(F.pageY+It.y);f.set(At,ft)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const gt=n.domElement;O(2*Math.PI*d.x/gt.clientHeight),I(2*Math.PI*d.y/gt.clientHeight),h.copy(f)}function mt(F){if(S.length===1)x.set(F.pageX,F.pageY);else{const gt=bt(F),It=.5*(F.pageX+gt.x),At=.5*(F.pageY+gt.y);x.set(It,At)}m.subVectors(x,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(x)}function st(F){const gt=bt(F),It=F.pageX-gt.x,At=F.pageY-gt.y,ft=Math.sqrt(It*It+At*At);v.set(0,ft),_.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),Y(_.y),p.copy(v);const G=(F.pageX+gt.x)*.5,_t=(F.pageY+gt.y)*.5;H(G,_t)}function Dt(F){n.enableZoom&&st(F),n.enablePan&&mt(F)}function wt(F){n.enableZoom&&st(F),n.enableRotate&&rt(F)}function R(F){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",q)),Yt(F),F.pointerType==="touch"?zt(F):ht(F))}function T(F){n.enabled!==!1&&(F.pointerType==="touch"?ct(F):ut(F))}function q(F){Vt(F),S.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",q)),n.dispatchEvent(Hh),r=s.NONE}function ht(F){let gt;switch(F.button){case 0:gt=n.mouseButtons.LEFT;break;case 1:gt=n.mouseButtons.MIDDLE;break;case 2:gt=n.mouseButtons.RIGHT;break;default:gt=-1}switch(gt){case ns.DOLLY:if(n.enableZoom===!1)return;it(F),r=s.DOLLY;break;case ns.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;$(F),r=s.PAN}else{if(n.enableRotate===!1)return;tt(F),r=s.ROTATE}break;case ns.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;tt(F),r=s.ROTATE}else{if(n.enablePan===!1)return;$(F),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mc)}function ut(F){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;nt(F);break;case s.DOLLY:if(n.enableZoom===!1)return;lt(F);break;case s.PAN:if(n.enablePan===!1)return;vt(F);break}}function at(F){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(F.preventDefault(),n.dispatchEvent(Mc),dt(Pt(F)),n.dispatchEvent(Hh))}function Pt(F){const gt=F.deltaMode,It={clientX:F.clientX,clientY:F.clientY,deltaY:F.deltaY};switch(gt){case 1:It.deltaY*=16;break;case 2:It.deltaY*=100;break}return F.ctrlKey&&!M&&(It.deltaY*=10),It}function Mt(F){F.key==="Control"&&(M=!0,document.addEventListener("keyup",Et,{passive:!0,capture:!0}))}function Et(F){F.key==="Control"&&(M=!1,document.removeEventListener("keyup",Et,{passive:!0,capture:!0}))}function Nt(F){n.enabled===!1||n.enablePan===!1||Tt(F)}function zt(F){switch(Ft(F),S.length){case 1:switch(n.touches.ONE){case is.ROTATE:if(n.enableRotate===!1)return;Lt(F),r=s.TOUCH_ROTATE;break;case is.PAN:if(n.enablePan===!1)return;Rt(F),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case is.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(F),r=s.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(F),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mc)}function ct(F){switch(Ft(F),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;rt(F),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;mt(F),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(F),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;wt(F),n.update();break;default:r=s.NONE}}function Xt(F){n.enabled!==!1&&F.preventDefault()}function Yt(F){S.push(F.pointerId)}function Vt(F){delete L[F.pointerId];for(let gt=0;gt<S.length;gt++)if(S[gt]==F.pointerId){S.splice(gt,1);return}}function Ft(F){let gt=L[F.pointerId];gt===void 0&&(gt=new pt,L[F.pointerId]=gt),gt.set(F.pageX,F.pageY)}function bt(F){const gt=F.pointerId===S[0]?S[1]:S[0];return L[gt]}n.domElement.addEventListener("contextmenu",Xt),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",q),n.domElement.addEventListener("wheel",at,{passive:!1}),document.addEventListener("keydown",Mt,{passive:!0,capture:!0}),this.update()}}class Ld extends zl{constructor(t=null){super();const e=new fn;e.deleteAttribute("uv");const n=new ma({side:qe}),s=new ma;let r=5;t!==null&&t._useLegacyLights===!1&&(r=900);const a=new Iy(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new oe(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const c=new oe(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const l=new oe(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const u=new oe(e,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new oe(e,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const f=new oe(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const d=new oe(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const g=new oe(e,Ms(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const x=new oe(e,Ms(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const m=new oe(e,Ms(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new oe(e,Ms(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const v=new oe(e,Ms(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const _=new oe(e,Ms(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ms(i){const t=new wa;return t.color.setScalar(i),t}const Kt=i=>new ma(i),U={post:Kt({color:2368554,metalness:.75,roughness:.42}),rail:Kt({color:3355452,metalness:.72,roughness:.4}),shelf:Kt({color:4342348,metalness:.45,roughness:.62}),caster:Kt({color:1315864,metalness:.35,roughness:.6}),foot:Kt({color:1842210,metalness:.6,roughness:.45}),cardShroud:Kt({color:2039590,metalness:.58,roughness:.32}),cardBack:Kt({color:1644832,metalness:.45,roughness:.5}),shroud:Kt({color:3881798,metalness:.62,roughness:.4}),shroudTop:Kt({color:4868694,metalness:.55,roughness:.46}),vent:Kt({color:1381658,metalness:.3,roughness:.82}),fanHub:Kt({color:2302761,metalness:.4,roughness:.55}),fanBlade:Kt({color:1842210,metalness:.3,roughness:.6}),bracket:Kt({color:9869988,metalness:.72,roughness:.38}),nvGreen:Kt({color:7780608,metalness:.3,roughness:.4,emissive:1914368,emissiveIntensity:.6}),pcb:Kt({color:1014345,metalness:.22,roughness:.68}),pcbDark:Kt({color:740656,metalness:.22,roughness:.72}),pcbBlack:Kt({color:2105383,metalness:.3,roughness:.62}),armor:Kt({color:11186360,metalness:.8,roughness:.34}),debugRed:Kt({color:16722474,emissive:10031377,emissiveIntensity:1.1,metalness:.2,roughness:.5}),slot:Kt({color:1447452,metalness:.35,roughness:.7}),gold:Kt({color:13214283,metalness:.85,roughness:.35}),connector:Kt({color:4540495,metalness:.74,roughness:.38}),chip:Kt({color:2565934,metalness:.5,roughness:.45}),cap:Kt({color:3421244,metalness:.5,roughness:.5}),heatsink:Kt({color:3947589,metalness:.78,roughness:.32}),extrusion:Kt({color:10133674,metalness:.78,roughness:.28}),extGroove:Kt({color:6053992,metalness:.6,roughness:.45}),cable:Kt({color:2368556,metalness:.18,roughness:.86}),power:Kt({color:2499618,metalness:.22,roughness:.78}),aux:Kt({color:3358797,metalness:.3,roughness:.7}),cablePlug:Kt({color:1776417,metalness:.4,roughness:.55}),eth:Kt({color:3232122,metalness:.14,roughness:.8}),udmFace:Kt({color:15132650,metalness:.12,roughness:.45}),screen:Kt({color:924716,metalness:.1,roughness:.2}),perf:Kt({color:2829107,metalness:.65,roughness:.45}),filter:Kt({color:3882562,metalness:.05,roughness:.96}),psuBody:Kt({color:2434349,metalness:.62,roughness:.4}),psuGrille:Kt({color:1513245,metalness:.4,roughness:.6}),noctua:Kt({color:9067068,metalness:.18,roughness:.72}),noctuaRim:Kt({color:5913128,metalness:.18,roughness:.72}),label:Kt({color:14211294,metalness:.1,roughness:.8})};function j(i,t,e,n){const s=new oe(new fn(i,t,e),n);return s.castShadow=s.receiveShadow=!0,s}function W(i,t,e=0,n=0,s=0){return t.position.set(e,n,s),i.add(t),t}function kt(i,t,e,n=28){const s=new oe(new kr(i,i,t,n),e);return s.castShadow=s.receiveShadow=!0,s}function wi(i,t=11){const e=new le;W(e,kt(i*1.04,7,U.vent,40),0,-3.5,0);const n=new oe(new Ca(i*.97,i*.05,10,44),U.fanHub);n.rotation.x=Math.PI/2,n.castShadow=!0,e.add(n),W(e,kt(i*.26,6,U.fanHub,24),0,1,0),W(e,kt(i*.19,1.4,U.chip,20),0,4,0);for(let s=0;s<t;s++){const r=j(i*.7,.7,i*.38,U.fanBlade);r.position.x=i*.5,r.rotation.x=.62;const a=new le;a.add(r),a.position.y=.5,a.rotation.y=s/t*Math.PI*2,e.add(a)}return e}function un(i){const t=[[-10,10],[-3,10],[-3,8.2],[-5.5,8.2],[-5.5,6],[5.5,6],[5.5,8.2],[3,8.2],[3,10]],e=[];for(let c=0;c<4;c++){const l=Math.cos(-c*Math.PI/2),u=Math.sin(-c*Math.PI/2);for(const[h,f]of t)e.push([h*l-f*u,h*u+f*l])}const n=new Ed;e.forEach(([c,l],u)=>u?n.lineTo(c,l):n.moveTo(c,l)),n.closePath();const s=new cl;s.absarc(0,0,2.1,0,Math.PI*2,!0),n.holes.push(s);const r=new Vl(n,{depth:i,bevelEnabled:!1,curveSegments:10});r.rotateY(Math.PI/2),r.translate(-i/2,0,0);const a=new oe(r,U.extrusion);a.castShadow=a.receiveShadow=!0;const o=new le;return o.add(a),o}const ga={mcio:{mat:U.cable,r:3.4,plug:[13,6,17]},power12v:{mat:U.power,r:5.4,plug:[18,9,12]},aux6:{mat:U.aux,r:2.5,plug:[12,6,10]},atx:{mat:U.power,r:7,plug:[26,10,12]},cat6a:{mat:U.eth,r:3.6,plug:[12,8,16]}},By=i=>(ga[i]||ga.mcio).r;function So(i){const t=Math.abs(i.x),e=Math.abs(i.y),n=Math.abs(i.z);return t>=e&&t>=n?new A(Math.sign(i.x)||1,0,0):e>=n?new A(0,Math.sign(i.y)||1,0):new A(0,0,Math.sign(i.z)||1)}function Dd(i,t,e={}){const{type:n="mcio",sag:s=45,route:r="drape"}=e,a=ga[n]||ga.mcio,o=new le;o.userData.part=n;const c=new A(...i),l=new A(...t);let u;if(e.vias)u=[c,...e.vias.map(m=>new A(m[0],m[1],m[2])),l];else if(r==="riser"){const m=e.backZ??-230,p=e.laneX??c.x;u=[c,new A(p,c.y+15,m),new A(p,(c.y+l.y)/2,m),new A(p,l.y-15,m),l]}else{const m=new A((c.x+l.x)/2,Math.min(c.y,l.y)-s,(c.z+l.z)/2-4),p=new A(c.x,c.y-Math.min(32,(c.y-m.y)*.6),c.z-1),v=new A(l.x,l.y-Math.min(32,(l.y-m.y)*.6),l.z-1);u=[c,p,m,v,l]}const h=e.na?So(new A(...e.na)):So(u[1].clone().sub(c)),f=e.nb?So(new A(...e.nb)):So(u[u.length-2].clone().sub(l));u.splice(1,0,c.clone().addScaledVector(h,Math.min(14,c.distanceTo(u[1])*.6))),u.splice(u.length-1,0,l.clone().addScaledVector(f,Math.min(14,l.distanceTo(u[u.length-2])*.6)));const d=new xd(u,!1,"centripetal"),g=Math.max(64,Math.min(220,Math.round(d.getLength()/5))),x=new oe(new Wl(d,g,a.r,9,!1),a.mat);x.castShadow=!0,o.add(x),o.userData.samples=d.getPoints(56),o.userData.lengthMm=Math.round(d.getLength());for(const[m,p,v]of[[c,h,e.ta],[l,f,e.tb]]){const _=j(...a.plug,U.cablePlug);_.position.copy(m),_.lookAt(m.clone().add(p));const y=v||[0,0,1];p.y&&Math.abs(y[2])>=Math.abs(y[0])&&_.rotateZ(Math.PI/2),o.add(_)}return o}function hr(i){return Dd([-70,6,0],[70,6,0],{type:i,sag:24})}const Id=44.45,Ud=25,ni=Ud*Id,ql=465.1,Sc=600,_a=711.2,Ws={W:445,D:700,LIP:40,EARS:482.6},Fs={L:266.7,H:111.8,T:40.6},Ss=8,bc=56,Nd={W:150,H:86,L:210},Fd={W:20,PCB:1.6,L:125},zy={udmShelfTop:133,switchShelfTop:510,gpuShelfTop:775},Ar=[],Od=659222,Vh=55,Wh=55,Ec=2;function Bd(){const i=new le,t=ql/2,e=_a/2,n=t+21,s=n+Vh/2-Ec/2;for(const r of[-1,1])for(const a of[-1,1]){W(i,j(Vh,ni+40,Ec,U.post),r*n,ni/2-10,a*e),W(i,j(Ec,ni+40,Wh,U.post),r*s,ni/2-10,a*(e-Wh/2));for(let o=0;o<Ud;o++)for(const c of[6.35,22.225,38.1])W(i,j(9.5,9.5,1.4,U.caster),r*t,o*Id+c,a*(e+.7))}for(const r of[-1,1])for(const a of[-22,ni-22]){W(i,j(30,32,_a-340,U.post),r*n,a,0);for(const o of[-1,1])W(i,j(38,40,250,U.post),r*n,a,o*(e-125))}for(const r of[-1,1]){W(i,j(Sc,5,80,U.post),0,ni+2.5,r*(e-40));for(const a of[-1,1])for(let o=0;o<4;o++)W(i,j(34,1.4,8,U.caster),a*(170+o*32),ni+5.2,r*(e-40))}for(const r of[-1,1])W(i,j(Sc,95,55,U.post),0,-48,r*(e-28));for(const r of[-1,1])for(const a of[-1,1]){const o=r*(Sc/2-45),c=a*(e-28);W(i,j(70,8,70,U.foot),o,-100,c),W(i,kt(9,14,U.foot,14),o,-110,c);for(const l of[-1,1]){const u=kt(28,10,U.caster,22);u.rotation.z=Math.PI/2,W(i,u,o+l*11,-145,c+8)}}for(const r of[-1,1])for(let a=0;a<6;a++){const o=130+a*160,c=r*(n-6),l=-345.6;W(i,j(6,44,2.5,U.rail),c,o,l),W(i,j(6,2.5,24,U.rail),c,o-22,l-12),W(i,j(6,14,2.5,U.rail),c,o-16,l-24)}return i}const zd=0,ky=1,Hy=2,Xh=2,wc=1.25,qh=1,Rr=6*4+4+4,Pa=65535,Gy=Math.pow(2,-24),Tc=Symbol("SKIP_GENERATION");function Vy(i){return i.index?i.index.count:i.attributes.position.count}function er(i){return Vy(i)/3}function Wy(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Xy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Wy(e,n);i.setIndex(new Ie(s,1));for(let r=0;r<e;r++)s[r]=r}}function kd(i,t){const e=er(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(e,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function Hd(i,t){if(!i.groups||!i.groups.length)return kd(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const c of i.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(a,u))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],u=o[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function qy(i,t){const e=er(i),n=Hd(i,t).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),e!==r}function Ac(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,x=-1/0,m=-1/0;for(let p=t*6,v=(t+e)*6;p<v;p+=6){const _=i[p+0],y=i[p+1],b=_-y,w=_+y;b<r&&(r=b),w>c&&(c=w),_<h&&(h=_),_>g&&(g=_);const S=i[p+2],L=i[p+3],M=S-L,E=S+L;M<a&&(a=M),E>l&&(l=E),S<f&&(f=S),S>x&&(x=S);const N=i[p+4],O=i[p+5],I=N-O,C=N+O;I<o&&(o=I),C>u&&(u=C),N<d&&(d=N),N>m&&(m=N)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,s[0]=h,s[1]=f,s[2]=d,s[3]=g,s[4]=x,s[5]=m}function Yy(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=er(i),o=s.normalized;let c;t===null?(c=new Float32Array(a*6*4),e=0,n=a):(c=t,e=e||0,n=n||a);const l=s.array,u=s.offset||0;let h=3;s.isInterleavedBufferAttribute&&(h=s.data.stride);const f=["getX","getY","getZ"];for(let d=e;d<e+n;d++){const g=d*3,x=d*6;let m=g+0,p=g+1,v=g+2;r&&(m=r[m],p=r[p],v=r[v]),o||(m=m*h+u,p=p*h+u,v=v*h+u);for(let _=0;_<3;_++){let y,b,w;o?(y=s[f[_]](m),b=s[f[_]](p),w=s[f[_]](v)):(y=l[m+_],b=l[p+_],w=l[v+_]);let S=y;b<S&&(S=b),w<S&&(S=w);let L=y;b>L&&(L=b),w>L&&(L=w);const M=(L-S)/2,E=_*2;c[x+E+0]=S+M,c[x+E+1]=M+(Math.abs(S)+M)*Gy}}return c}function Ee(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Yh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function $h(i,t){t.set(i)}function Zh(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function bo(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function fr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const ei=32,$y=(i,t)=>i.candidate-t.candidate,di=new Array(ei).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Eo=new Float32Array(6);function Zy(i,t,e,n,s,r){let a=-1,o=0;if(r===zd)a=Yh(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===ky)a=Yh(i),a!==-1&&(o=jy(e,n,s,a));else if(r===Hy){const c=fr(i);let l=wc*s;const u=n*6,h=(n+s)*6;for(let f=0;f<3;f++){const d=t[f],m=(t[f+3]-d)/ei;if(s<ei/4){const p=[...di];p.length=s;let v=0;for(let y=u;y<h;y+=6,v++){const b=p[v];b.candidate=e[y+2*f],b.count=0;const{bounds:w,leftCacheBounds:S,rightCacheBounds:L}=b;for(let M=0;M<3;M++)L[M]=1/0,L[M+3]=-1/0,S[M]=1/0,S[M+3]=-1/0,w[M]=1/0,w[M+3]=-1/0;bo(y,e,w)}p.sort($y);let _=s;for(let y=0;y<_;y++){const b=p[y];for(;y+1<_&&p[y+1].candidate===b.candidate;)p.splice(y+1,1),_--}for(let y=u;y<h;y+=6){const b=e[y+2*f];for(let w=0;w<_;w++){const S=p[w];b>=S.candidate?bo(y,e,S.rightCacheBounds):(bo(y,e,S.leftCacheBounds),S.count++)}}for(let y=0;y<_;y++){const b=p[y],w=b.count,S=s-b.count,L=b.leftCacheBounds,M=b.rightCacheBounds;let E=0;w!==0&&(E=fr(L)/c);let N=0;S!==0&&(N=fr(M)/c);const O=qh+wc*(E*w+N*S);O<l&&(a=f,l=O,o=b.candidate)}}else{for(let _=0;_<ei;_++){const y=di[_];y.count=0,y.candidate=d+m+_*m;const b=y.bounds;for(let w=0;w<3;w++)b[w]=1/0,b[w+3]=-1/0}for(let _=u;_<h;_+=6){let w=~~((e[_+2*f]-d)/m);w>=ei&&(w=ei-1);const S=di[w];S.count++,bo(_,e,S.bounds)}const p=di[ei-1];$h(p.bounds,p.rightCacheBounds);for(let _=ei-2;_>=0;_--){const y=di[_],b=di[_+1];Zh(y.bounds,b.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let _=0;_<ei-1;_++){const y=di[_],b=y.count,w=y.bounds,L=di[_+1].rightCacheBounds;b!==0&&(v===0?$h(w,Eo):Zh(w,Eo,Eo)),v+=b;let M=0,E=0;v!==0&&(M=fr(Eo)/c);const N=s-v;N!==0&&(E=fr(L)/c);const O=qh+wc*(M*v+E*N);O<l&&(a=f,l=O,o=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function jy(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}class Rc{constructor(){this.boundingData=new Float32Array(6)}}function Ky(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let h=t[a*3+u];t[a*3+u]=t[o*3+u],t[o*3+u]=h}for(let u=0;u<6;u++){let h=e[a*6+u];e[a*6+u]=e[o*6+u],e[o*6+u]=h}a++,o--}else return a}}function Jy(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){let u=i[a];i[a]=i[o],i[o]=u;for(let h=0;h<6;h++){let f=e[a*6+h];e[a*6+h]=e[o*6+h],e[o*6+h]=f}a++,o--}else return a}}function nn(i,t){return t[i+15]===65535}function hn(i,t){return t[i+6]}function Mn(i,t){return t[i+14]}function Sn(i){return i+8}function bn(i,t){return t[i+6]}function Gd(i,t){return t[i+7]}let Vd,Mr,ta,Wd;const Qy=Math.pow(2,32);function fl(i){return"count"in i?1:1+fl(i.left)+fl(i.right)}function tM(i,t,e){return Vd=new Float32Array(e),Mr=new Uint32Array(e),ta=new Uint16Array(e),Wd=new Uint8Array(e),dl(i,t)}function dl(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)Vd[e+a]=r[a];if(s)if(t.buffer){const a=t.buffer;Wd.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=Rr){const l=o/2;nn(l,ta)||(Mr[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return Mr[e+6]=a,ta[n+14]=o,ta[n+15]=Pa,i+Rr}else{const a=t.left,o=t.right,c=t.splitAxis;let l;if(l=dl(i+Rr,a),l/4>Qy)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Mr[e+6]=l/4,l=dl(l,o),Mr[e+7]=c,l}}function eM(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function nM(i,t,e,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=s,h=i._indirectBuffer,f=i.geometry,d=f.index?f.index.array:null,g=u?Jy:Ky,x=er(f),m=new Float32Array(6);let p=!1;const v=new Rc;return Ac(t,e,n,v.boundingData,m),y(v,e,n,m),v;function _(b){l&&l(b/x)}function y(b,w,S,L=null,M=0){if(!p&&M>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),S<=o||M>=r)return _(w+S),b.offset=w,b.count=S,b;const E=Zy(b.boundingData,L,t,w,S,c);if(E.axis===-1)return _(w+S),b.offset=w,b.count=S,b;const N=g(h,d,t,w,S,E);if(N===w||N===w+S)_(w+S),b.offset=w,b.count=S;else{b.splitAxis=E.axis;const O=new Rc,I=w,C=N-w;b.left=O,Ac(t,I,C,O.boundingData,m),y(O,I,C,m,M+1);const D=new Rc,k=N,Y=S-C;b.right=D,Ac(t,k,Y,D.boundingData,m),y(D,k,Y,m,M+1)}return b}}function iM(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=eM(e,t.useSharedArrayBuffer),qy(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Xy(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Yy(e),r=t.indirect?kd(e,t.range):Hd(e,t.range);i._roots=r.map(a=>{const o=nM(i,s,a.offset,a.count,t),c=fl(o),l=new n(Rr*c);return tM(0,o,l),l})}class oi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],c=t.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}oi.prototype.setFromBox=function(){const i=new A;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);const h=e.dot(i);a=Math.min(h,a),o=Math.max(h,o)}this.min=a,this.max=o}}();const sM=function(){const i=new A,t=new A,e=new A;return function(s,r,a){const o=s.start,c=i,l=r.start,u=t;e.subVectors(o,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(u),f=u.dot(c),d=u.dot(u),g=e.dot(c),m=c.dot(c)*d-f*f;let p,v;m!==0?p=(h*f-g*d)/m:p=0,v=(h+p*f)/d,a.x=p,a.y=v}}(),Yl=function(){const i=new pt,t=new A,e=new A;return function(s,r,a,o){sM(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=s.start:u=s.end;let h;l<0?h=r.start:h=r.end;const f=t,d=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){a.copy(f),o.copy(h);return}else{a.copy(u),o.copy(d);return}}}}(),rM=function(){const i=new A,t=new A,e=new In,n=new Tn;return function(r,a){const{radius:o,center:c}=r,{a:l,b:u,c:h}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const x=a.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=o){const p=x.projectPoint(c,t);if(a.containsPoint(p))return!0}return!1}}(),oM=1e-15;function Cc(i){return Math.abs(i)<oM}class Rn extends ve{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new A),this.satBounds=new Array(4).fill().map(()=>new oi),this.points=[this.a,this.b,this.c],this.sphere=new Qi,this.plane=new In,this.needsUpdate=!0}intersectsSphere(t){return rM(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);const l=r[1],u=a[1];l.subVectors(t,e),u.setFromPoints(l,s);const h=r[2],f=a[2];h.subVectors(e,n),f.setFromPoints(h,s);const d=r[3],g=a[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}Rn.prototype.closestPointToSegment=function(){const i=new A,t=new A,e=new Tn;return function(s,r=null,a=null){const{start:o,end:c}=s,l=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[d]),Yl(e,s,i,t),u=i.distanceToSquared(t),u<h&&(h=u,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(h)}}();Rn.prototype.intersectsTriangle=function(){const i=new Rn,t=new Array(3),e=new Array(3),n=new oi,s=new oi,r=new A,a=new A,o=new A,c=new A,l=new A,u=new Tn,h=new Tn,f=new Tn,d=new A;function g(x,m,p){const v=x.points;let _=0,y=-1;for(let b=0;b<3;b++){const{start:w,end:S}=u;w.copy(v[b]),S.copy(v[(b+1)%3]),u.delta(a);const L=Cc(m.distanceToPoint(w));if(Cc(m.normal.dot(a))&&L){p.copy(u),_=2;break}const M=m.intersectLine(u,d);if(!M&&L&&d.copy(w),(M||L)&&!Cc(d.distanceTo(S))){if(_<=1)(_===1?p.start:p.end).copy(d),L&&(y=_);else if(_>=2){(y===1?p.start:p.end).copy(d),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(m,p=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const _=this.plane,y=m.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){const b=this.satBounds,w=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let M=0;M<4;M++){const E=b[M],N=w[M];if(n.setFromPoints(N,e),E.isSeparated(n))return!1}const S=m.satBounds,L=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){const E=S[M],N=L[M];if(n.setFromPoints(N,t),E.isSeparated(n))return!1}for(let M=0;M<4;M++){const E=w[M];for(let N=0;N<4;N++){const O=L[N];if(r.crossVectors(E,O),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const b=g(this,y,h);if(b===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(b!==2)return!1;const w=g(m,_,f);if(w===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(w!==2)return!1;if(h.delta(o),f.delta(c),o.dot(c)<0){let I=f.start;f.start=f.end,f.end=I}const S=h.start.dot(o),L=h.end.dot(o),M=f.start.dot(o),E=f.end.dot(o),N=L<M,O=S<E;return S!==E&&M!==L&&N===O?!1:(p&&(l.subVectors(h.start,f.start),l.dot(o)>0?p.start.copy(h.start):p.start.copy(f.start),l.subVectors(h.end,f.end),l.dot(o)<0?p.end.copy(h.end):p.end.copy(f.end)),!0)}}}();Rn.prototype.distanceToPoint=function(){const i=new A;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Rn.prototype.distanceToTriangle=function(){const i=new A,t=new A,e=["a","b","c"],n=new Tn,s=new Tn;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=e[h],g=a[d];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<u&&(u=f,o&&o.copy(i),c&&c.copy(g));const x=this[d];a.closestPointToPoint(x,i),f=x.distanceToSquared(i),f<u&&(u=f,o&&o.copy(x),c&&c.copy(i))}for(let h=0;h<3;h++){const f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){const x=e[g],m=e[(g+1)%3];s.set(a[x],a[m]),Yl(n,s,i,t);const p=i.distanceToSquared(t);p<u&&(u=p,o&&o.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();class Qe{constructor(t,e,n){this.isOrientedBox=!0,this.min=new A,this.max=new A,this.matrix=new ae,this.invMatrix=new ae,this.points=new Array(8).fill().map(()=>new A),this.satAxes=new Array(3).fill().map(()=>new A),this.satBounds=new Array(3).fill().map(()=>new oi),this.alignedSatBounds=new Array(3).fill().map(()=>new oi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Qe.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*l|2*u|4*h,d=s[f];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){const u=a[l],h=r[l],f=1<<l,d=s[f];u.subVectors(o,d),h.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Qe.prototype.intersectsBox=function(){const i=new oi;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();Qe.prototype.intersectsTriangle=function(){const i=new Rn,t=new Array(3),e=new oi,n=new oi,s=new A;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let f=0;f<3;f++){const d=o[f],g=c[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const l=a.satBounds,u=a.satAxes,h=this.points;for(let f=0;f<3;f++){const d=l[f],g=u[f];if(e.setFromPoints(g,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){const d=c[f];for(let g=0;g<4;g++){const x=u[g];if(s.crossVectors(d,x),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}}();Qe.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Qe.prototype.distanceToPoint=function(){const i=new A;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Qe.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Tn),e=new Array(12).fill().map(()=>new Tn),n=new A,s=new A;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const u=o*o,h=a.min,f=a.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];s.copy(p).clamp(h,f);const v=p.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(p),l&&l.copy(s),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const _=(m+1)%3,y=(m+2)%3,b=p<<_|v<<y,w=1<<m|p<<_|v<<y,S=d[b],L=d[w];t[x].set(S,L);const E=i[m],N=i[_],O=i[y],I=e[x],C=I.start,D=I.end;C[E]=h[E],C[N]=p?h[N]:f[N],C[O]=v?h[O]:f[N],D[E]=f[E],D[N]=p?h[N]:f[N],D[O]=v?h[O]:f[N],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){s.x=m?f.x:h.x,s.y=p?f.y:h.y,s.z=v?f.z:h.z,this.closestPointToPoint(s,n);const _=s.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(s),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=t[m];for(let v=0;v<12;v++){const _=e[v];Yl(p,_,n,s);const y=n.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(s),y<u))return Math.sqrt(y)}}return Math.sqrt(g)}}();class $l{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class aM extends $l{constructor(){super(()=>new Rn)}}const En=new aM;class cM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ge=new cM;let yi,ks;const bs=[],wo=new $l(()=>new ue);function lM(i,t,e,n,s,r){yi=wo.getPrimitive(),ks=wo.getPrimitive(),bs.push(yi,ks),ge.setBuffer(i._roots[t]);const a=pl(0,i.geometry,e,n,s,r);ge.clearBuffer(),wo.releasePrimitive(yi),wo.releasePrimitive(ks),bs.pop(),bs.pop();const o=bs.length;return o>0&&(ks=bs[o-1],yi=bs[o-2]),a}function pl(i,t,e,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=ge;let u=i*2;if(nn(u,c)){const f=hn(i,l),d=Mn(u,c);return Ee(i,o,yi),n(f,d,!1,a,r+i,yi)}else{let E=function(O){const{uint16Array:I,uint32Array:C}=ge;let D=O*2;for(;!nn(D,I);)O=Sn(O),D=O*2;return hn(O,C)},N=function(O){const{uint16Array:I,uint32Array:C}=ge;let D=O*2;for(;!nn(D,I);)O=bn(O,C),D=O*2;return hn(O,C)+Mn(D,I)};const f=Sn(i),d=bn(i,l);let g=f,x=d,m,p,v,_;if(s&&(v=yi,_=ks,Ee(g,o,v),Ee(x,o,_),m=s(v),p=s(_),p<m)){g=d,x=f;const O=m;m=p,p=O,v=_}v||(v=yi,Ee(g,o,v));const y=nn(g*2,c),b=e(v,y,m,a+1,r+g);let w;if(b===Xh){const O=E(g),C=N(g)-O;w=n(O,C,!0,a+1,r+g,v)}else w=b&&pl(g,t,e,n,s,r,a+1);if(w)return!0;_=ks,Ee(x,o,_);const S=nn(x*2,c),L=e(_,S,p,a+1,r+x);let M;if(L===Xh){const O=E(x),C=N(x)-O;M=n(O,C,!0,a+1,r+x,_)}else M=L&&pl(x,t,e,n,s,r,a+1);return!!M}}const dr=new A,Pc=new A;function uM(i,t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(dr.copy(t).clamp(u.min,u.max),dr.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<o&&f<a,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,dr);const f=t.distanceToSquared(dr);return f<o&&(Pc.copy(dr),o=f,c=h),f<r}}),o===1/0)return null;const l=Math.sqrt(o);return e.point?e.point.copy(Pc):e.point=Pc.clone(),e.distance=l,e.faceIndex=c,e}const Es=new A,ws=new A,Ts=new A,To=new pt,Ao=new pt,Ro=new pt,jh=new A,Kh=new A,Jh=new A,Co=new A;function hM(i,t,e,n,s,r,a,o){let c;if(r===qe?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==vn,s),c===null)return null;const l=i.origin.distanceTo(s);return l<a||l>o?null:{distance:l,point:s.clone()}}function fM(i,t,e,n,s,r,a,o,c,l,u){Es.fromBufferAttribute(t,r),ws.fromBufferAttribute(t,a),Ts.fromBufferAttribute(t,o);const h=hM(i,Es,ws,Ts,Co,c,l,u);if(h){n&&(To.fromBufferAttribute(n,r),Ao.fromBufferAttribute(n,a),Ro.fromBufferAttribute(n,o),h.uv=ve.getInterpolation(Co,Es,ws,Ts,To,Ao,Ro,new pt)),s&&(To.fromBufferAttribute(s,r),Ao.fromBufferAttribute(s,a),Ro.fromBufferAttribute(s,o),h.uv1=ve.getInterpolation(Co,Es,ws,Ts,To,Ao,Ro,new pt)),e&&(jh.fromBufferAttribute(e,r),Kh.fromBufferAttribute(e,a),Jh.fromBufferAttribute(e,o),h.normal=ve.getInterpolation(Co,Es,ws,Ts,jh,Kh,Jh,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:a,c:o,normal:new A,materialIndex:0};ve.getNormal(Es,ws,Ts,f.normal),h.face=f,h.faceIndex=r}return h}function La(i,t,e,n,s,r,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const h=i.index;i.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:f,normal:d,uv:g,uv1:x}=i.attributes,m=fM(e,f,d,g,x,c,l,u,t,r,a);return m?(m.faceIndex=n,s&&s.push(m),m):null}function Le(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,c=t+1,l=t+2;e&&(o=e.getX(o),c=e.getX(c),l=e.getX(l)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function dM(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,h=n+s;u<h;u++)La(c,t,e,u,r,a,o)}function pM(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let h=n,f=n+s;h<f;h++){let d;d=La(o,t,e,h,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function mM(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=u,Le(a,f*3,c,l),a.needsUpdate=!0,n(a,f,s,r))return!0}return!1}function gM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const x=f*2;if(o[x+15]===Pa){const p=a[f+6],v=o[x+14];let _=1/0,y=1/0,b=1/0,w=-1/0,S=-1/0,L=-1/0;for(let M=3*p,E=3*(p+v);M<E;M++){let N=n[M];const O=s.getX(N),I=s.getY(N),C=s.getZ(N);O<_&&(_=O),O>w&&(w=O),I<y&&(y=I),I>S&&(S=I),C<b&&(b=C),C>L&&(L=C)}return c[f+0]!==_||c[f+1]!==y||c[f+2]!==b||c[f+3]!==w||c[f+4]!==S||c[f+5]!==L?(c[f+0]=_,c[f+1]=y,c[f+2]=b,c[f+3]=w,c[f+4]=S,c[f+5]=L,!0):!1}else{const p=f+8,v=a[f+6],_=p+d,y=v+d;let b=g,w=!1,S=!1;t?b||(w=t.has(_),S=t.has(y),b=!w&&!S):(w=!0,S=!0);const L=b||w,M=b||S;let E=!1;L&&(E=h(p,d,b));let N=!1;M&&(N=h(v,d,b));const O=E||N;if(O)for(let I=0;I<3;I++){const C=p+I,D=v+I,k=c[C],Y=c[C+3],X=c[D],H=c[D+3];c[f+I]=k<X?k:X,c[f+I+3]=Y>H?Y:H}return O}}}function Ti(i,t,e,n,s){let r,a,o,c,l,u;const h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,x=e.origin.y,m=e.origin.z;let p=t[i],v=t[i+3],_=t[i+1],y=t[i+3+1],b=t[i+2],w=t[i+3+2];return h>=0?(r=(p-g)*h,a=(v-g)*h):(r=(v-g)*h,a=(p-g)*h),f>=0?(o=(_-x)*f,c=(y-x)*f):(o=(y-x)*f,c=(_-x)*f),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),d>=0?(l=(b-m)*d,u=(w-m)*d):(l=(w-m)*d,u=(b-m)*d),r>u||l>a)?!1:((l>r||r!==r)&&(r=l),(u<a||a!==a)&&(a=u),r<=s&&a>=n)}function _M(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,h=n+s;u<h;u++){let f=l?l[u]:u;La(c,t,e,f,r,a,o)}}function xM(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let h=n,f=n+s;h<f;h++){let d;d=La(o,t,e,c?c[h]:h,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function vM(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),Le(a,f*3,c,l),a.needsUpdate=!0,n(a,f,s,r))return!0}return!1}function yM(i,t,e,n,s,r,a){ge.setBuffer(i._roots[t]),ml(0,i,e,n,s,r,a),ge.clearBuffer()}function ml(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=ge,u=i*2;if(nn(u,c)){const f=hn(i,l),d=Mn(u,c);dM(t,e,n,f,d,s,r,a)}else{const f=Sn(i);Ti(f,o,n,r,a)&&ml(f,t,e,n,s,r,a);const d=bn(i,l);Ti(d,o,n,r,a)&&ml(d,t,e,n,s,r,a)}}const MM=["x","y","z"];function SM(i,t,e,n,s,r){ge.setBuffer(i._roots[t]);const a=gl(0,i,e,n,s,r);return ge.clearBuffer(),a}function gl(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=ge;let l=i*2;if(nn(l,o)){const h=hn(i,c),f=Mn(l,o);return pM(t,e,n,h,f,s,r)}else{const h=Gd(i,c),f=MM[h],g=n.direction[f]>=0;let x,m;g?(x=Sn(i),m=bn(i,c)):(x=bn(i,c),m=Sn(i));const v=Ti(x,a,n,s,r)?gl(x,t,e,n,s,r):null;if(v){const b=v.point[f];if(g?b<=a[m+h]:b>=a[m+h+3])return v}const y=Ti(m,a,n,s,r)?gl(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const Po=new ue,As=new Rn,Rs=new Rn,pr=new ae,Qh=new Qe,Lo=new Qe;function bM(i,t,e,n){ge.setBuffer(i._roots[t]);const s=_l(0,i,e,n);return ge.clearBuffer(),s}function _l(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=ge;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Qh.set(e.boundingBox.min,e.boundingBox.max,n),s=Qh),nn(c,a)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,x=hn(i,o),m=Mn(c,a);if(pr.copy(n).invert(),e.boundsTree)return Ee(i,r,Lo),Lo.matrix.copy(pr),Lo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Lo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x*3,y=(m+x)*3;_<y;_+=3)if(Le(Rs,_,h,f),Rs.needsUpdate=!0,v.intersectsTriangle(Rs))return!0;return!1}});for(let p=x*3,v=(m+x)*3;p<v;p+=3){Le(As,p,h,f),As.a.applyMatrix4(pr),As.b.applyMatrix4(pr),As.c.applyMatrix4(pr),As.needsUpdate=!0;for(let _=0,y=d.count;_<y;_+=3)if(Le(Rs,_,d,g),Rs.needsUpdate=!0,As.intersectsTriangle(Rs))return!0}}else{const u=i+8,h=o[i+6];return Ee(u,r,Po),!!(s.intersectsBox(Po)&&_l(u,t,e,n,s)||(Ee(h,r,Po),s.intersectsBox(Po)&&_l(h,t,e,n,s)))}}const Do=new ae,Lc=new Qe,mr=new Qe,EM=new A,wM=new A,TM=new A,AM=new A;function RM(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Lc.set(t.boundingBox.min,t.boundingBox.max,e),Lc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,h=t.index,f=En.getPrimitive(),d=En.getPrimitive();let g=EM,x=wM,m=null,p=null;s&&(m=TM,p=AM);let v=1/0,_=null,y=null;return Do.copy(e).invert(),mr.matrix.copy(Do),i.shapecast({boundsTraverseOrder:b=>Lc.distanceToBox(b),intersectsBounds:(b,w,S)=>S<v&&S<a?(w&&(mr.min.copy(b.min),mr.max.copy(b.max),mr.needsUpdate=!0),!0):!1,intersectsRange:(b,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:L=>mr.distanceToBox(L),intersectsBounds:(L,M,E)=>E<v&&E<a,intersectsRange:(L,M)=>{for(let E=L,N=L+M;E<N;E++){Le(d,3*E,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let O=b,I=b+w;O<I;O++){Le(f,3*O,l,c),f.needsUpdate=!0;const C=f.distanceToTriangle(d,g,m);if(C<v&&(x.copy(g),p&&p.copy(m),v=C,_=O,y=E),C<r)return!0}}}});{const S=er(t);for(let L=0,M=S;L<M;L++){Le(d,3*L,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let E=b,N=b+w;E<N;E++){Le(f,3*E,l,c),f.needsUpdate=!0;const O=f.distanceToTriangle(d,g,m);if(O<v&&(x.copy(g),p&&p.copy(m),v=O,_=E,y=L),O<r)return!0}}}}}),En.releasePrimitive(f),En.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Do),x.applyMatrix4(Do),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function CM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const x=f*2;if(o[x+15]===Pa){const p=a[f+6],v=o[x+14];let _=1/0,y=1/0,b=1/0,w=-1/0,S=-1/0,L=-1/0;for(let M=p,E=p+v;M<E;M++){const N=3*i.resolveTriangleIndex(M);for(let O=0;O<3;O++){let I=N+O;I=n?n[I]:I;const C=s.getX(I),D=s.getY(I),k=s.getZ(I);C<_&&(_=C),C>w&&(w=C),D<y&&(y=D),D>S&&(S=D),k<b&&(b=k),k>L&&(L=k)}}return c[f+0]!==_||c[f+1]!==y||c[f+2]!==b||c[f+3]!==w||c[f+4]!==S||c[f+5]!==L?(c[f+0]=_,c[f+1]=y,c[f+2]=b,c[f+3]=w,c[f+4]=S,c[f+5]=L,!0):!1}else{const p=f+8,v=a[f+6],_=p+d,y=v+d;let b=g,w=!1,S=!1;t?b||(w=t.has(_),S=t.has(y),b=!w&&!S):(w=!0,S=!0);const L=b||w,M=b||S;let E=!1;L&&(E=h(p,d,b));let N=!1;M&&(N=h(v,d,b));const O=E||N;if(O)for(let I=0;I<3;I++){const C=p+I,D=v+I,k=c[C],Y=c[C+3],X=c[D],H=c[D+3];c[f+I]=k<X?k:X,c[f+I+3]=Y>H?Y:H}return O}}}function PM(i,t,e,n,s,r,a){ge.setBuffer(i._roots[t]),xl(0,i,e,n,s,r,a),ge.clearBuffer()}function xl(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=ge,u=i*2;if(nn(u,c)){const f=hn(i,l),d=Mn(u,c);_M(t,e,n,f,d,s,r,a)}else{const f=Sn(i);Ti(f,o,n,r,a)&&xl(f,t,e,n,s,r,a);const d=bn(i,l);Ti(d,o,n,r,a)&&xl(d,t,e,n,s,r,a)}}const LM=["x","y","z"];function DM(i,t,e,n,s,r){ge.setBuffer(i._roots[t]);const a=vl(0,i,e,n,s,r);return ge.clearBuffer(),a}function vl(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=ge;let l=i*2;if(nn(l,o)){const h=hn(i,c),f=Mn(l,o);return xM(t,e,n,h,f,s,r)}else{const h=Gd(i,c),f=LM[h],g=n.direction[f]>=0;let x,m;g?(x=Sn(i),m=bn(i,c)):(x=bn(i,c),m=Sn(i));const v=Ti(x,a,n,s,r)?vl(x,t,e,n,s,r):null;if(v){const b=v.point[f];if(g?b<=a[m+h]:b>=a[m+h+3])return v}const y=Ti(m,a,n,s,r)?vl(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const Io=new ue,Cs=new Rn,Ps=new Rn,gr=new ae,tf=new Qe,Uo=new Qe;function IM(i,t,e,n){ge.setBuffer(i._roots[t]);const s=yl(0,i,e,n);return ge.clearBuffer(),s}function yl(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=ge;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),tf.set(e.boundingBox.min,e.boundingBox.max,n),s=tf),nn(c,a)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,x=hn(i,o),m=Mn(c,a);if(gr.copy(n).invert(),e.boundsTree)return Ee(i,r,Uo),Uo.matrix.copy(gr),Uo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Uo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x,y=m+x;_<y;_++)if(Le(Ps,3*t.resolveTriangleIndex(_),h,f),Ps.needsUpdate=!0,v.intersectsTriangle(Ps))return!0;return!1}});for(let p=x,v=m+x;p<v;p++){const _=t.resolveTriangleIndex(p);Le(Cs,3*_,h,f),Cs.a.applyMatrix4(gr),Cs.b.applyMatrix4(gr),Cs.c.applyMatrix4(gr),Cs.needsUpdate=!0;for(let y=0,b=d.count;y<b;y+=3)if(Le(Ps,y,d,g),Ps.needsUpdate=!0,Cs.intersectsTriangle(Ps))return!0}}else{const u=i+8,h=o[i+6];return Ee(u,r,Io),!!(s.intersectsBox(Io)&&yl(u,t,e,n,s)||(Ee(h,r,Io),s.intersectsBox(Io)&&yl(h,t,e,n,s)))}}const No=new ae,Dc=new Qe,_r=new Qe,UM=new A,NM=new A,FM=new A,OM=new A;function BM(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Dc.set(t.boundingBox.min,t.boundingBox.max,e),Dc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,h=t.index,f=En.getPrimitive(),d=En.getPrimitive();let g=UM,x=NM,m=null,p=null;s&&(m=FM,p=OM);let v=1/0,_=null,y=null;return No.copy(e).invert(),_r.matrix.copy(No),i.shapecast({boundsTraverseOrder:b=>Dc.distanceToBox(b),intersectsBounds:(b,w,S)=>S<v&&S<a?(w&&(_r.min.copy(b.min),_r.max.copy(b.max),_r.needsUpdate=!0),!0):!1,intersectsRange:(b,w)=>{if(t.boundsTree){const S=t.boundsTree;return S.shapecast({boundsTraverseOrder:L=>_r.distanceToBox(L),intersectsBounds:(L,M,E)=>E<v&&E<a,intersectsRange:(L,M)=>{for(let E=L,N=L+M;E<N;E++){const O=S.resolveTriangleIndex(E);Le(d,3*O,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let I=b,C=b+w;I<C;I++){const D=i.resolveTriangleIndex(I);Le(f,3*D,l,c),f.needsUpdate=!0;const k=f.distanceToTriangle(d,g,m);if(k<v&&(x.copy(g),p&&p.copy(m),v=k,_=I,y=E),k<r)return!0}}}})}else{const S=er(t);for(let L=0,M=S;L<M;L++){Le(d,3*L,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let E=b,N=b+w;E<N;E++){const O=i.resolveTriangleIndex(E);Le(f,3*O,l,c),f.needsUpdate=!0;const I=f.distanceToTriangle(d,g,m);if(I<v&&(x.copy(g),p&&p.copy(m),v=I,_=E,y=L),I<r)return!0}}}}}),En.releasePrimitive(f),En.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(No),x.applyMatrix4(No),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function zM(){return typeof SharedArrayBuffer<"u"}const Cr=new ge.constructor,xa=new ge.constructor,mi=new $l(()=>new ue),Ls=new ue,Ds=new ue,Ic=new ue,Uc=new ue;let Nc=!1;function kM(i,t,e,n){if(Nc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Nc=!0;const s=i._roots,r=t._roots;let a,o=0,c=0;const l=new ae().copy(e).invert();for(let u=0,h=s.length;u<h;u++){Cr.setBuffer(s[u]),c=0;const f=mi.getPrimitive();Ee(0,Cr.float32Array,f),f.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(xa.setBuffer(r[d]),a=Dn(0,0,e,l,n,o,c,0,0,f),xa.clearBuffer(),c+=r[d].length,!a);d++);if(mi.releasePrimitive(f),Cr.clearBuffer(),o+=s[u].length,a)break}return Nc=!1,a}function Dn(i,t,e,n,s,r=0,a=0,o=0,c=0,l=null,u=!1){let h,f;u?(h=xa,f=Cr):(h=Cr,f=xa);const d=h.float32Array,g=h.uint32Array,x=h.uint16Array,m=f.float32Array,p=f.uint32Array,v=f.uint16Array,_=i*2,y=t*2,b=nn(_,x),w=nn(y,v);let S=!1;if(w&&b)u?S=s(hn(t,p),Mn(t*2,v),hn(i,g),Mn(i*2,x),c,a+t,o,r+i):S=s(hn(i,g),Mn(i*2,x),hn(t,p),Mn(t*2,v),o,r+i,c,a+t);else if(w){const L=mi.getPrimitive();Ee(t,m,L),L.applyMatrix4(e);const M=Sn(i),E=bn(i,g);Ee(M,d,Ls),Ee(E,d,Ds);const N=L.intersectsBox(Ls),O=L.intersectsBox(Ds);S=N&&Dn(t,M,n,e,s,a,r,c,o+1,L,!u)||O&&Dn(t,E,n,e,s,a,r,c,o+1,L,!u),mi.releasePrimitive(L)}else{const L=Sn(t),M=bn(t,p);Ee(L,m,Ic),Ee(M,m,Uc);const E=l.intersectsBox(Ic),N=l.intersectsBox(Uc);if(E&&N)S=Dn(i,L,e,n,s,r,a,o,c+1,l,u)||Dn(i,M,e,n,s,r,a,o,c+1,l,u);else if(E)if(b)S=Dn(i,L,e,n,s,r,a,o,c+1,l,u);else{const O=mi.getPrimitive();O.copy(Ic).applyMatrix4(e);const I=Sn(i),C=bn(i,g);Ee(I,d,Ls),Ee(C,d,Ds);const D=O.intersectsBox(Ls),k=O.intersectsBox(Ds);S=D&&Dn(L,I,n,e,s,a,r,c,o+1,O,!u)||k&&Dn(L,C,n,e,s,a,r,c,o+1,O,!u),mi.releasePrimitive(O)}else if(N)if(b)S=Dn(i,M,e,n,s,r,a,o,c+1,l,u);else{const O=mi.getPrimitive();O.copy(Uc).applyMatrix4(e);const I=Sn(i),C=bn(i,g);Ee(I,d,Ls),Ee(C,d,Ds);const D=O.intersectsBox(Ls),k=O.intersectsBox(Ds);S=D&&Dn(M,I,n,e,s,a,r,c,o+1,O,!u)||k&&Dn(M,C,n,e,s,a,r,c,o+1,O,!u),mi.releasePrimitive(O)}}return S}const Fo=new Qe,ef=new ue,HM={strategy:zd,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Zl{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:s.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=t,o=new Zl(e,{...n,[Tc]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=e.getIndex();if(c===null){const l=new Ie(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...HM,[Tc]:!1},e),e.useSharedArrayBuffer&&!zM())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Tc]||(iM(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ue))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?CM:gM)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=r[l+15]===Pa;if(u){const h=s[o+6],f=r[l+14];t(c,u,new Float32Array(n,o*4,6),h,f)}else{const h=o+Rr/4,f=s[o+6],d=s[o+7];t(c,u,new Float32Array(n,o*4,6),d)||(a(h,c+1),a(f,c+1))}}}raycast(t,e=Hn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],c=e.isMaterial,l=Array.isArray(e),u=a.groups,h=c?e.side:e,f=this.indirect?PM:yM;for(let d=0,g=r.length;d<g;d++){const x=l?e[u[d].materialIndex].side:h,m=o.length;if(f(this,d,x,t,o,n,s),l){const p=u[d].materialIndex;for(let v=m,_=o.length;v<_;v++)o[v].face.materialIndex=p}}return o}raycastFirst(t,e=Hn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=e.isMaterial,c=Array.isArray(e);let l=null;const u=a.groups,h=o?e.side:e,f=this.indirect?DM:SM;for(let d=0,g=r.length;d<g;d++){const x=c?e[u[d].materialIndex].side:h,m=f(this,d,x,t,n,s);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[d].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?IM:bM;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){const e=En.getPrimitive(),n=this.indirect?vM:mM;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const h=a;a=(f,d,g,x,m)=>h(f,d,g,x,m)?!0:n(f,d,this,o,g,x,e)}else a||(o?a=(h,f,d,g)=>n(h,f,this,o,d,g,e):a=(h,f,d)=>d);let c=!1,l=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(c=lM(this,h,r,a,s,l),c)break;l+=d.byteLength}return En.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=En.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Le(a,x*3,o,c)}:g=>{Le(a,g*3,o,c)},u=En.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{const x=t.resolveTriangleIndex(g);Le(u,x*3,h,f)}:g=>{Le(u,g*3,h,f)};if(r){const g=(x,m,p,v,_,y,b,w)=>{for(let S=p,L=p+v;S<L;S++){d(S),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=x,E=x+m;M<E;M++)if(l(M),a.needsUpdate=!0,r(a,u,M,S,_,y,b,w))return!0}return!1};if(s){const x=s;s=function(m,p,v,_,y,b,w,S){return x(m,p,v,_,y,b,w,S)?!0:g(m,p,v,_,y,b,w,S)}}else s=g}return kM(this,t,e,s)}intersectsBox(t,e){return Fo.set(t.min,t.max,e),Fo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Fo.intersectsBox(n),intersectsTriangle:n=>Fo.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?BM:RM)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return uM(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Ee(0,new Float32Array(n),ef),t.union(ef)}),t}}const Xd=1e-6,GM=Xd*.5,qd=Math.pow(10,-Math.log10(Xd)),VM=GM*qd;function kn(i){return~~(i*qd+VM)}function WM(i){return`${kn(i.x)},${kn(i.y)}`}function nf(i){return`${kn(i.x)},${kn(i.y)},${kn(i.z)}`}function XM(i){return`${kn(i.x)},${kn(i.y)},${kn(i.z)},${kn(i.w)}`}function qM(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Yd(){return typeof SharedArrayBuffer<"u"}function YM(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(n).set(s,0),new t(n)}function $M(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function ZM(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=$M(e,n);i.setIndex(new Ie(s,1));for(let r=0;r<e;r++)s[r]=r}}function jM(i){return i.index?i.index.count:i.attributes.position.count}function jl(i){return jM(i)/3}const KM=1e-8,JM=new A;function QM(i){return~~(i/3)}function t1(i){return i%3}function sf(i,t){return i.start-t.start}function rf(i,t){return JM.subVectors(t,i.origin).dot(i.direction)}function e1(i,t,e,n=KM){i.sort(sf),t.sort(sf);for(let o=0;o<i.length;o++){const c=i[o];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||i.splice(o+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const h=c.end;c.end=u.start,u.start=h}else if(c.start>=u.start&&c.end>=u.end){const h=u.end;u.end=c.start,c.start=h}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),a(u)&&(t.splice(l,1),l--),a(c)){i.splice(o,1),o--;break}}}s(i),s(t);function s(o){for(let c=0;c<o.length;c++)a(o[c])&&(o.splice(c,1),c--)}function r(o,c){return Math.abs(c-o)<n}function a(o){return Math.abs(o.end-o.start)<n}}const of=1e-5,af=1e-4;class n1{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(a(u,t)&&a(u,n))continue;const h=o(u,t),f=o(u,n),d=Math.min(h,f);d<s&&(s=d,r=u)}return r;function a(c,l){const u=c.origin.distanceTo(l.origin)>of;return c.direction.angleTo(l.direction)>af||u}function o(c,l){const u=c.origin.distanceTo(l.origin),h=c.direction.angleTo(l.direction);return u/of+h/af}}}const Fc=new A,Oc=new A,Oo=new Js;function i1(i,t,e){const n=i.attributes,s=i.index,r=n.position,a=new Map,o=new Map,c=Array.from(t),l=new n1;for(let u=0,h=c.length;u<h;u++){const f=c[u],d=QM(f),g=t1(f);let x=3*d+g,m=3*d+(g+1)%3;s&&(x=s.getX(x),m=s.getX(m)),Fc.fromBufferAttribute(r,x),Oc.fromBufferAttribute(r,m),qM(Fc,Oc,Oo);let p,v=l.findClosestRay(Oo);v===null&&(v=Oo.clone(),l.addRay(v)),o.has(v)||o.set(v,{forward:[],reverse:[],ray:v}),p=o.get(v);let _=rf(v,Fc),y=rf(v,Oc);_>y&&([_,y]=[y,_]),Oo.direction.dot(v.direction)<0?p.reverse.push({start:_,end:y,index:f}):p.forward.push({start:_,end:y,index:f})}return o.forEach(({forward:u,reverse:h},f)=>{e1(u,h,a,e),u.length===0&&h.length===0&&o.delete(f)}),{disjointConnectivityMap:a,fragmentMap:o}}const s1=new pt,Bc=new A,r1=new he,zc=["","",""];class o1{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:s,degenerateEpsilon:r}=this,a=e?_:v,o=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,h=c.position;let f=jl(t);const d=f;let g=0;n&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(f=~~(t.drawRange.count/3)));let x=this.data;(!x||x.length<3*d)&&(x=new Int32Array(3*d)),x.fill(-1);let m=0,p=new Set;for(let y=g,b=f*3+g;y<b;y+=3){const w=y;for(let S=0;S<3;S++){let L=w+S;u&&(L=u.getX(L)),zc[S]=a(L)}for(let S=0;S<3;S++){const L=(S+1)%3,M=zc[S],E=zc[L],N=`${E}_${M}`;if(o.has(N)){const O=w+S,I=o.get(N);x[O]=I,x[I]=O,o.delete(N),m+=2,p.delete(I)}else{const O=`${M}_${E}`,I=w+S;o.set(O,I),p.add(I)}}}if(s){const{fragmentMap:y,disjointConnectivityMap:b}=i1(t,p,r);p.clear(),y.forEach(({forward:w,reverse:S})=>{w.forEach(({index:L})=>p.add(L)),S.forEach(({index:L})=>p.add(L))}),this.unmatchedDisjointEdges=y,this.disjointConnections=b,m=f*3-p.size}this.matchedEdges=m,this.unmatchedEdges=p.size,this.data=x;function v(y){return Bc.fromBufferAttribute(h,y),nf(Bc)}function _(y){let b="";for(let w=0,S=l.length;w<S;w++){const L=c[l[w]];let M;switch(L.itemSize){case 1:M=kn(L.getX(y));break;case 2:M=WM(s1.fromBufferAttribute(L,y));break;case 3:M=nf(Bc.fromBufferAttribute(L,y));break;case 4:M=XM(r1.fromBufferAttribute(L,y));break}b!==""&&(b+="|"),b+=M}return b}}}class ai extends oe{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new ae,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,s=e.elements;for(let r=0;r<16;r++)if(n[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Yd();if(n)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=YM(r.array)}if(t.boundsTree||(ZM(t,{useSharedArrayBuffer:n}),t.boundsTree=new Zl(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new o1(t)),!t.groupIndices){const s=jl(t),r=new Uint16Array(s),a=t.groups;for(let o=0,c=a.length;o<c;o++){const{start:l,count:u}=a[o];for(let h=l/3,f=(l+u)/3;h<f;h++)r[h]=o}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const a1=1e-14,kc=new A,cf=new A,lf=new A;function gi(i,t=a1){kc.subVectors(i.b,i.a),cf.subVectors(i.c,i.a),lf.subVectors(i.b,i.c);const e=kc.angleTo(cf),n=kc.angleTo(lf),s=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(s)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const Hc=1e-10,xr=1e-10,c1=1e-10,Kn=new Tn,Re=new Tn,Jn=new A,Gc=new A,uf=new A,Bo=new In,Vc=new Rn;class l1{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new ve),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class u1{constructor(){this.trianglePool=new l1,this.triangles=[],this.normal=new A,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:s}=this;if(Array.isArray(t))for(let r=0,a=t.length;r<a;r++){const o=t[r];if(r===0)o.getNormal(s);else if(Math.abs(1-o.getNormal(Jn).dot(s))>Hc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=n.getTriangle();c.copy(o),e.push(c)}else{t.getNormal(s);const r=n.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(Gc).normalize(),Math.abs(1-Math.abs(Gc.dot(e)))<c1){this.coplanarTriangleUsed=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const a=(r+1)%3,o=s[r],c=s[a];Jn.subVectors(c,o).normalize(),uf.crossVectors(Gc,Jn),Bo.setFromNormalAndCoplanarPoint(uf,o),this.splitByPlane(Bo,t)}}else t.getPlane(Bo),this.splitByPlane(Bo,t)}splitByPlane(t,e){const{triangles:n,trianglePool:s}=this;Vc.copy(e),Vc.needsUpdate=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];if(!Vc.intersectsTriangle(o,Kn,!0))continue;const{a:c,b:l,c:u}=o;let h=0,f=-1,d=!1,g=[],x=[];const m=[c,l,u];for(let p=0;p<3;p++){const v=(p+1)%3;Kn.start.copy(m[p]),Kn.end.copy(m[v]);const _=t.distanceToPoint(Kn.start),y=t.distanceToPoint(Kn.end);if(Math.abs(_)<xr&&Math.abs(y)<xr){d=!0;break}if(_>0?g.push(p):x.push(p),Math.abs(_)<xr)continue;let b=!!t.intersectLine(Kn,Jn);!b&&Math.abs(y)<xr&&(Jn.copy(Kn.end),b=!0),b&&!(Jn.distanceTo(Kn.start)<Hc)&&(Jn.distanceTo(Kn.end)<Hc&&(f=p),h===0?Re.start.copy(Jn):Re.end.copy(Jn),h++)}if(!d&&h===2&&Re.distance()>xr)if(f!==-1){f=(f+1)%3;let p=0;p===f&&(p=(p+1)%3);let v=p+1;v===f&&(v=(v+1)%3);const _=s.getTriangle();_.a.copy(m[v]),_.b.copy(Re.end),_.c.copy(Re.start),gi(_)||n.push(_),o.a.copy(m[p]),o.b.copy(Re.start),o.c.copy(Re.end),gi(o)&&(n.splice(r,1),r--,a--)}else{const p=g.length>=2?x[0]:g[0];if(p===0){let w=Re.start;Re.start=Re.end,Re.end=w}const v=(p+1)%3,_=(p+2)%3,y=s.getTriangle(),b=s.getTriangle();m[v].distanceToSquared(Re.start)<m[_].distanceToSquared(Re.end)?(y.a.copy(m[v]),y.b.copy(Re.start),y.c.copy(Re.end),b.a.copy(m[v]),b.b.copy(m[_]),b.c.copy(Re.start)):(y.a.copy(m[_]),y.b.copy(Re.start),y.c.copy(Re.end),b.a.copy(m[v]),b.b.copy(m[_]),b.c.copy(Re.end)),o.a.copy(m[p]),o.b.copy(Re.end),o.c.copy(Re.start),gi(y)||n.push(y),gi(b)||n.push(b),gi(o)&&(n.splice(r,1),r--,a--)}else h===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function h1(i){return i=~~i,i+4-i%4}class hf{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Yd()?SharedArrayBuffer:ArrayBuffer,s=new e(new n(h1(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[n+s]=t[s];this.length+=t.length}clear(){this.length=0}}class f1{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let s=0;for(let r=0;r<e;r++){const a=n[r];s+=a[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in n){const a=n[r],o=new hf(a.type);o.itemSize=a.itemSize,o.normalized=a.normalized,s[r]=o}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,s){const{groupAttributes:r}=this,o=r[0][t];if(o){if(o.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=n,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new hf(e);u.itemSize=n,u.normalized=s,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class ff{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:s}=this;n[t]||(n[t]=[],s.push(t)),n[t].push(e)}}const $d=0,Gr=1,d1=2,p1=3,m1=4,Zd=5,jd=6,gn=new Js,df=new ae,$e=new ve,Qn=new A,pf=new he,mf=new he,gf=new he,Wc=new he,zo=new he,ko=new he,_f=new Tn,Xc=new A,qc=1e-8,g1=1e-15,Hi=-1,Gi=1,ea=-2,na=2,Pr=0,Ii=1,Kl=2,_1=1e-14;let ia=null;function xf(i){ia=i}function Kd(i,t){i.getMidpoint(gn.origin),i.getNormal(gn.direction);const e=t.raycastFirst(gn,vn);return!!(e&&gn.direction.dot(e.face.normal)>0)?Hi:Gi}function x1(i,t){function e(){return Math.random()-.5}i.getNormal(Xc),gn.direction.copy(Xc),i.getMidpoint(gn.origin);const n=3;let s=0,r=1/0;for(let a=0;a<n;a++){gn.direction.x+=e()*qc,gn.direction.y+=e()*qc,gn.direction.z+=e()*qc,gn.direction.multiplyScalar(-1);const o=t.raycastFirst(gn,vn);if(!!(o&&gn.direction.dot(o.face.normal)>0)&&s++,o!==null&&(r=Math.min(r,o.distance)),r<=g1)return o.face.normal.dot(Xc)>0?na:ea;if(s/n>.5||(a-s+1)/n>.5)break}return s/n>.5?Hi:Gi}function v1(i,t){const e=new ff,n=new ff;return df.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,df,{intersectsTriangles(s,r,a,o){if(!gi(s)&&!gi(r)){let c=s.intersectsTriangle(r,_f,!0);if(!c){const l=s.plane,u=r.plane,h=l.normal,f=u.normal;h.dot(f)===1&&Math.abs(l.constant-u.constant)<_1&&(c=!0)}if(c){let l=i.geometry.boundsTree.resolveTriangleIndex(a),u=t.geometry.boundsTree.resolveTriangleIndex(o);e.add(l,u),n.add(u,l),ia&&(ia.addEdge(_f),ia.addIntersectingTriangles(a,s,o,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function y1(i,t,e,n,s,r,a=!1){const o=e.attributes,c=e.index,l=i*3,u=c.getX(l+0),h=c.getX(l+1),f=c.getX(l+2);for(const d in r){const g=o[d],x=r[d];if(!(d in o))throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);const m=g.itemSize;d==="position"?($e.a.fromBufferAttribute(g,u).applyMatrix4(n),$e.b.fromBufferAttribute(g,h).applyMatrix4(n),$e.c.fromBufferAttribute(g,f).applyMatrix4(n),Yc($e.a,$e.b,$e.c,t,3,x,a)):d==="normal"?($e.a.fromBufferAttribute(g,u).applyNormalMatrix(s),$e.b.fromBufferAttribute(g,h).applyNormalMatrix(s),$e.c.fromBufferAttribute(g,f).applyNormalMatrix(s),a&&($e.a.multiplyScalar(-1),$e.b.multiplyScalar(-1),$e.c.multiplyScalar(-1)),Yc($e.a,$e.b,$e.c,t,3,x,a,!0)):(pf.fromBufferAttribute(g,u),mf.fromBufferAttribute(g,h),gf.fromBufferAttribute(g,f),Yc(pf,mf,gf,t,m,x,a))}}function M1(i,t,e,n,s,r,a,o=!1){$c(i,n,s,r,a,o),$c(o?e:t,n,s,r,a,o),$c(o?t:e,n,s,r,a,o)}function Jd(i,t,e=!1){switch(i){case $d:if(t===Gi||t===na&&!e)return Ii;break;case Gr:if(e){if(t===Hi)return Pr}else if(t===Gi||t===ea)return Ii;break;case d1:if(e){if(t===Gi||t===ea)return Ii}else if(t===Hi)return Pr;break;case m1:if(t===Hi)return Pr;if(t===Gi)return Ii;break;case p1:if(t===Hi||t===na&&!e)return Ii;break;case Zd:if(!e&&(t===Gi||t===ea))return Ii;break;case jd:if(!e&&(t===Hi||t===na))return Ii;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Kl}function Yc(i,t,e,n,s,r,a=!1,o=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};Wc.set(0,0,0,0).addScaledVector(i,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),zo.set(0,0,0,0).addScaledVector(i,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),ko.set(0,0,0,0).addScaledVector(i,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),o&&(Wc.normalize(),zo.normalize(),ko.normalize()),c(Wc),a?(c(ko),c(zo)):(c(zo),c(ko))}function $c(i,t,e,n,s,r=!1){for(const a in s){const o=t[a],c=s[a];if(!(a in t))throw new Error(`CSG Operations: Attribute ${a} no available on geometry.`);const l=o.itemSize;a==="position"?(Qn.fromBufferAttribute(o,i).applyMatrix4(e),c.push(Qn.x,Qn.y,Qn.z)):a==="normal"?(Qn.fromBufferAttribute(o,i).applyNormalMatrix(n),r&&Qn.multiplyScalar(-1),c.push(Qn.x,Qn.y,Qn.z)):(c.push(o.getX(i)),l>1&&c.push(o.getY(i)),l>2&&c.push(o.getZ(i)),l>3&&c.push(o.getW(i)))}}class S1{constructor(t){this.triangle=new ve().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ve().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class vf{constructor(){this.data={}}addTriangleIntersection(t,e,n,s){const{data:r}=this;r[t]||(r[t]=new S1(e)),r[t].addTriangle(n,s)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const s in e)n.push(e[s].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,s=new Set,r=[],a=o=>{if(n[o])if(e!==null)n[o].intersects[e]&&r.push(n[o].intersects[e]);else{const c=n[o].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(t!==null)a(t);else for(const o in n)a(o);return r}reset(){this.data={}}}class b1{constructor(){this.enabled=!1,this.triangleIntersectsA=new vf,this.triangleIntersectsB=new vf,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,s){const{triangleIntersectsA:r,triangleIntersectsB:a}=this;r.addTriangleIntersection(t,e,n,s),a.addTriangleIntersection(n,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),xf(this))}complete(){this.enabled&&xf(null)}}const Mi=new ae,va=new ee,Ui=new ve,Ho=new ve,pi=new ve,Go=new ve,On=[],qi=[];function E1(i){for(const t of i)return t}function w1(i,t,e,n,s,r={}){const{useGroups:a=!0}=r,{aIntersections:o,bIntersections:c}=v1(i,t),l=[];let u=null,h;return h=a?0:-1,yf(i,t,o,e,!1,n,s,h),Mf(i,t,o,e,!1,s,h),e.findIndex(d=>d!==jd&&d!==Zd)!==-1&&(h=a?i.geometry.groups.length||1:-1,yf(t,i,c,e,!0,n,s,h),Mf(t,i,c,e,!0,s,h)),On.length=0,qi.length=0,{groups:l,materials:u}}function yf(i,t,e,n,s,r,a,o=0){const c=i.matrixWorld.determinant()<0;Mi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),va.getNormalMatrix(i.matrixWorld).multiplyScalar(c?-1:1);const l=i.geometry.groupIndices,u=i.geometry.index,h=i.geometry.attributes.position,f=t.geometry.boundsTree,d=t.geometry.index,g=t.geometry.attributes.position,x=e.ids,m=e.intersectionSet;for(let p=0,v=x.length;p<v;p++){const _=x[p],y=o===-1?0:l[_]+o,b=3*_,w=u.getX(b+0),S=u.getX(b+1),L=u.getX(b+2);Ui.a.fromBufferAttribute(h,w).applyMatrix4(Mi),Ui.b.fromBufferAttribute(h,S).applyMatrix4(Mi),Ui.c.fromBufferAttribute(h,L).applyMatrix4(Mi),r.reset(),r.initialize(Ui);const M=m[_];for(let N=0,O=M.length;N<O;N++){const I=3*M[N],C=d.getX(I+0),D=d.getX(I+1),k=d.getX(I+2);Ho.a.fromBufferAttribute(g,C),Ho.b.fromBufferAttribute(g,D),Ho.c.fromBufferAttribute(g,k),r.splitByTriangle(Ho)}const E=r.triangles;for(let N=0,O=E.length;N<O;N++){const I=E[N],C=r.coplanarTriangleUsed?x1(I,f):Kd(I,f);On.length=0,qi.length=0;for(let D=0,k=n.length;D<k;D++){const Y=Jd(n[D],C,s);Y!==Kl&&(qi.push(Y),On.push(a[D].getGroupAttrSet(y)))}if(On.length!==0){Ui.getBarycoord(I.a,Go.a),Ui.getBarycoord(I.b,Go.b),Ui.getBarycoord(I.c,Go.c);for(let D=0,k=On.length;D<k;D++){const Y=On[D],H=qi[D]===Pr;y1(_,Go,i.geometry,i.matrixWorld,va,Y,c!==H)}}}}return x.length}function Mf(i,t,e,n,s,r,a=0){const o=i.matrixWorld.determinant()<0;Mi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),va.getNormalMatrix(i.matrixWorld).multiplyScalar(o?-1:1);const c=t.geometry.boundsTree,l=i.geometry.groupIndices,u=i.geometry.index,h=i.geometry.attributes,f=h.position,d=[],g=i.geometry.halfEdges,x=new Set,m=jl(i.geometry);for(let p=0,v=m;p<v;p++)p in e.intersectionSet||x.add(p);for(;x.size>0;){const p=E1(x);x.delete(p),d.push(p);const v=3*p,_=u.getX(v+0),y=u.getX(v+1),b=u.getX(v+2);pi.a.fromBufferAttribute(f,_).applyMatrix4(Mi),pi.b.fromBufferAttribute(f,y).applyMatrix4(Mi),pi.c.fromBufferAttribute(f,b).applyMatrix4(Mi);const w=Kd(pi,c);qi.length=0,On.length=0;for(let S=0,L=n.length;S<L;S++){const M=Jd(n[S],w,s);M!==Kl&&(qi.push(M),On.push(r[S]))}for(;d.length>0;){const S=d.pop();for(let L=0;L<3;L++){const M=g.getSiblingTriangleIndex(S,L);M!==-1&&x.has(M)&&(d.push(M),x.delete(M))}if(On.length!==0){const L=3*S,M=u.getX(L+0),E=u.getX(L+1),N=u.getX(L+2),O=a===-1?0:l[S]+a;if(pi.a.fromBufferAttribute(f,M),pi.b.fromBufferAttribute(f,E),pi.c.fromBufferAttribute(f,N),!gi(pi))for(let I=0,C=On.length;I<C;I++){const D=qi[I],k=On[I].getGroupAttrSet(O),Y=D===Pr;M1(M,E,N,h,i.matrixWorld,va,k,Y!==o)}}}}}function T1(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const s=e.start,r=n.start+n.count;n.start=s,n.count=r-s,i.splice(t,1),t--}}}function A1(i,t,e,n){e.clear();const s=i.attributes;for(let r=0,a=n.length;r<a;r++){const o=n[r],c=s[o];e.initializeArray(o,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)n.includes(r)||e.delete(r);for(const r in t.attributes)n.includes(r)||(t.deleteAttribute(r),t.dispose())}function R1(i,t,e){let n=!1,s=-1;const r=i.attributes,a=t.groupAttributes[0];for(const c in a){const l=t.getTotalLength(c),u=t.getType(c),h=t.getItemSize(c),f=t.getNormalized(c);let d=r[c];(!d||d.array.length<l)&&(d=new Ie(new u(l),h,f),i.setAttribute(c,d),n=!0);let g=0;for(let x=0,m=Math.min(e.length,t.groupCount);x<m;x++){const p=e[x].index,{array:v,type:_,length:y}=t.groupAttributes[p][c],b=new _(v.buffer,0,y);d.array.set(b,g),g+=b.length}d.needsUpdate=!0,s=l/d.itemSize}if(i.index){const c=i.index.array;if(c.length<s)i.index=null,n=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let o=0;i.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:h}=e[c],f=t.getCount(u);f!==0&&(i.addGroup(o,f,h),o+=f)}i.setDrawRange(0,s),i.boundsTree=null,n&&i.dispose()}function Sf(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class C1{constructor(){this.triangleSplitter=new u1,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new b1}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,s=new ai){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s],r=!1),s.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:a,attributeData:o,attributes:c,useGroups:l,consolidateGroups:u,debug:h}=this;for(;o.length<s.length;)o.push(new f1);s.forEach((p,v)=>{A1(t.geometry,p.geometry,o[v],c)}),h.init(),w1(t,e,n,a,o,{useGroups:l}),h.complete();const f=this.getGroupRanges(t.geometry),d=Sf(f,t.material),g=this.getGroupRanges(e.geometry),x=Sf(g,e.material);g.forEach(p=>p.materialIndex+=d.length);let m=[...f,...g].map((p,v)=>({...p,index:v}));if(l){const p=[...d,...x];u&&(m=m.map(_=>{const y=p[_.materialIndex];return _.materialIndex=p.indexOf(y),_}).sort((_,y)=>_.materialIndex-y.materialIndex));const v=[];for(let _=0,y=p.length;_<y;_++){let b=!1;for(let w=0,S=m.length;w<S;w++){const L=m[w];L.materialIndex===_&&(b=!0,L.materialIndex=v.length)}b&&v.push(p[_])}s.forEach(_=>{_.material=v})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(p=>{p.material=d[0]});return s.forEach((p,v)=>{const _=p.geometry;R1(_,o[v],m),u&&T1(_.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new ai){t.updateMatrixWorld(!0);const n=(r,a)=>{const o=r.children;for(let c=0,l=o.length;c<l;c++){const u=o[c];u.isOperationGroup?n(u,a):a(u)}},s=r=>{const a=r.children;let o=!1;for(let l=0,u=a.length;l<u;l++){const h=a[l];o=s(h)||o}const c=r.isDirty();if(c&&r.markUpdated(),o&&!r.isOperationGroup){let l;return n(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return o||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const Qd=160,Vr=new C1;let Vo=null,Wo=null,Xo=null;function Jl(i,t,e){let n=new ai(new fn(i,e,t));n.updateMatrixWorld();for(const s of[-1,1]){const r=new ai(new kr(t/2,t/2,e,20));r.position.x=s*i/2,r.updateMatrixWorld(),n=Vr.evaluate(n,r,$d)}return n}function P1(){if(Vo)return Vo;const{W:i}=Ws,t=Ws.D-Qd,e=Ws.D/2-t/2;let n=new ai(new fn(i,3,t));n.position.z=e,n.updateMatrixWorld();for(const s of[-1,1])for(let r=0;r<9;r++)for(let a=0;a<3;a++){const o=e+(r-4)*46,c=s*(58+a*50+(r%2?25:0));if(Math.abs(c)>i/2-30)continue;const l=Jl(40,8,9);l.position.set(c,0,o),l.updateMatrixWorld(),n=Vr.evaluate(n,l,Gr)}return Vo=n.geometry,Vo}function L1(){if(Wo)return Wo;const{W:i,LIP:t}=Ws;let e=new ai(new fn(i,t,3));e.updateMatrixWorld();for(const n of[-1,1])for(let s=0;s<4;s++){const r=Jl(40,8,9);r.rotation.x=Math.PI/2,r.position.set(n*(35+s*52),2,0),r.updateMatrixWorld(),e=Vr.evaluate(e,r,Gr)}return Wo=e.geometry,Wo}function bf(i){if(Xo)return Xo;let t=new ai(new fn(i,40,3));t.updateMatrixWorld();for(const e of[-15.875,0,15.875]){const n=new ai(new kr(3.5,3.5,9,16));n.rotation.x=Math.PI/2,n.position.set(0,e,0),n.updateMatrixWorld(),t=Vr.evaluate(t,n,Gr)}return Xo=t.geometry,Xo}function D1(i,t){const{W:e,D:n}=Ws,s=i.children.find(o=>o.userData.floor),r=[];for(const[o,c]of t)c<-n/2+Qd||c>n/2-6||Math.abs(o)>e/2-6||r.some(([l,u])=>Math.abs(o-l)<20&&Math.abs(c-u)<12)||r.push([o,c]);if(!r.length)return;let a=new ai(s.geometry);a.updateMatrixWorld();for(const[o,c]of r){const l=Jl(28,16,9);l.position.set(o,0,c),l.updateMatrixWorld(),a=Vr.evaluate(a,l,Gr)}s.geometry=a.geometry,s.userData.holes=(s.userData.holes||[]).concat(r)}function tp(){const i=new le,{W:t,D:e,LIP:n,EARS:s}=Ws,r=1.5-n/2,a=new oe(P1(),U.shelf);a.userData.floor=!0,a.castShadow=a.receiveShadow=!0,i.add(a);for(const u of[-1,1])W(i,j(3,n,e,U.shelf),u*(t/2-1.5),r,0);const o=new oe(L1(),U.shelf);o.castShadow=o.receiveShadow=!0,W(i,o,0,r,e/2-1.5),W(i,j(t-6,n,3,U.shelf),0,r,-e/2+1.5);const c=(s-t)/2+6,l=t/2+(s-t)/4;for(const u of[-1,1]){const h=new oe(bf(c),U.rail);h.castShadow=h.receiveShadow=!0,W(i,h,u*l,r,e/2+1.5);const f=new oe(bf(c),U.rail);f.castShadow=f.receiveShadow=!0,W(i,f,u*l,r,-351.5),W(i,j(3,n-4,200,U.rail),u*(t/2+2.5),r,-245);for(const d of[1.5-2,1.5-n+2])W(i,j(14,4,200,U.rail),u*(t/2+8),d,-245);for(const d of[-40,40]){const g=kt(3.2,2,U.caster,14);g.rotation.z=Math.PI/2,W(i,g,u*(t/2+4.5),r,-245+d)}}return i}const I1={pcb:U.pcbBlack,slot:U.slot,connector:U.connector,chip:U.chip,heatsink:U.heatsink,bracket:U.bracket,parts:U.cap,shroud:U.cardShroud,back:U.cardBack,gold:U.gold,fan:U.fanBlade},Ml=new Map,U1=["device-vertical","host-retimer","switch-pm50100","gpu-maxq"];function Ef(i){const e=new DataView(i).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,4,e))),s=new le;s.userData.solidBoxes=[];let r=4+e;for(const{n:a,v:o,i:c,b:l}of n){const u=new Float32Array(i.slice(r,r+o*12));r+=o*12;const h=new Uint32Array(i.slice(r,r+c*4));r+=c*4;const f=new Je;f.setAttribute("position",new Ie(u,3)),f.setIndex(new Ie(h,1)),f.computeVertexNormals();const d=new oe(f,I1[a]||U.cap);d.castShadow=d.receiveShadow=!0,d.userData.noCollide=!0,s.add(d);for(const g of l||[])s.userData.solidBoxes.push(g)}return s}async function N1(i="./",t){let e=0,n=0;await Promise.all(U1.map(async s=>{try{const r=await fetch(`${i}cad/${s}.bin`);if(!r.ok)throw new Error(r.status);const a=+r.headers.get("content-length")||0;if(n+=a,t?.(e,n),!r.body){const f=await r.arrayBuffer();e+=a,t?.(e,n),Ml.set(s,Ef(f));return}const o=r.body.getReader(),c=[];let l=0;for(;;){const{value:f,done:d}=await o.read();if(d)break;c.push(f),l+=f.length,e+=f.length,t?.(e,n)}const u=new Uint8Array(l);let h=0;for(const f of c)u.set(f,h),h+=f.length;Ml.set(s,Ef(u.buffer))}catch(r){console.warn(`CAD mesh ${s} unavailable (${r.message}) — using parametric fallback`)}}))}function Da(i){const t=Ml.get(i);return t?t.clone():null}const ep=49.1,wf=-41.6,np=[-12.8,7.5];function ip(){const i=new le,t=Da("gpu-maxq");if(t)return i.add(t),i;const{L:e,H:n,T:s}=Fs,r=g=>e/2-g,a=n-11,o=(n-a)/2;W(i,j(s,a,e,U.cardShroud),0,o,0),W(i,j(3,11,89,U.gold),0,-n/2+5.5,r(47)-44.5),W(i,j(s-6,3,20,U.slot),0,-n/2+12,r(155));const c=r(215),l=o,u=kt(37,1.6,U.gold,40);u.rotation.z=Math.PI/2,W(i,u,s/2+.3,l,c);const h=kt(34,3,U.vent,40);h.rotation.z=Math.PI/2,W(i,h,s/2-.5,l,c);const f=kt(17,2.5,U.bracket,28);f.rotation.z=Math.PI/2,W(i,f,s/2+.6,l,c);for(let g=0;g<18;g++){const x=g/18*Math.PI*2,m=25,p=j(1.6,1.2,13,U.fanBlade);p.rotation.x=x+.5,W(i,p,s/2+.4,l+Math.sin(x)*m,c+Math.cos(x)*m)}W(i,j(s-4,2,33,U.cardBack),0,n/2+.6,r(17.5)),W(i,j(s-12,1.2,20,U.gold),0,n/2+1.8,r(17.5)),W(i,j(s-8,2.6,160,U.gold),0,n/2+.8,r(115));for(let g=0;g<39;g++)W(i,j(s-10,1.4,1.1,U.vent),0,n/2+2.1,r(37+g*4.1));W(i,j(s-14,1.2,26,U.gold),0,n/2+.9,r(238)),W(i,j(s-10,14,15,U.vent),0,n/2-8,-e/2+8),W(i,j(18,9,9,U.connector),0,n/2-8,-e/2+6),W(i,j(14,6.5,2,U.slot),0,n/2-8,-e/2+1),W(i,j(s+2,n-4,2,U.bracket),0,2,e/2+1);for(let g=0;g<4;g++)W(i,j(3,6,16,U.slot),-s/4,26-g*15,e/2+1.4).rotation.y=Math.PI/2;for(let g=0;g<12;g++){const x=j(14,2.4,1.6,U.slot);x.rotation.z=.45,W(i,x,s/4-2,34-g*6.4,e/2+2.2)}W(i,j(8,8,1.6,U.slot),-s/4,42,e/2+2.2);const d=ep;W(i,j(s+2,1.4,11.43,U.bracket),0,d+.7,e/2+2+11.43/2);for(const g of np)W(i,j(3,.5,4.3,U.slot),g,d+1.5,e/2+11.25);return i}const xe={slotX:4,slotZ:7.5,mcioX:-5.2,mcioZ:[-2.5,31.5],auxX:-4.3,auxZ:-30,holesZ:[-57,57],holesX:4.5};function sp(){const i=new le,t=Da("device-vertical");if(t)return i.add(t),W(i,j(19.8,1.5,124.8,U.pcbBlack),0,0,0),i;const{W:e,PCB:n,L:s}=Fd;W(i,j(e,n,s,U.pcbBlack),0,0,0),W(i,j(9.2,12,91,U.slot),xe.slotX,n/2+6,xe.slotZ),W(i,j(2.2,2,89,U.cablePlug),xe.slotX,n/2+11,xe.slotZ);for(const r of xe.mcioZ)W(i,j(7.8,11,25.8,U.connector),xe.mcioX,-n/2-5.5,r),W(i,j(3.5,2,23,U.slot),xe.mcioX,-n/2-11.5,r);W(i,j(11,13,14.5,U.chip),xe.auxX,-n/2-6.5,xe.auxZ),W(i,j(8,2.6,10,U.chip),3,n/2+1.3,-54);for(const r of xe.holesZ)for(const a of[-1,1])W(i,kt(2.2,n+1.2,U.gold,10),a*xe.holesX,0,r);return i}const Un=(i,t)=>[i-75,55-t],rp=[[-31,-50.8],[-31,50.8],[0,-50.8],[0,50.8],[31,-50.8],[31,50.8]],Bi={CN6:Un(23.2,85.8),CN7:Un(23.2,54.4),CN8:Un(23.2,22.4),CN2:Un(125.6,85.3),CN1:Un(125.6,54.9),CN12:Un(125.6,22.4)},qo=Un(139.9,39.3),Lr=[146.5-75,12,55-17.3],Ni=([i,t])=>[i,16,t],Is={device:[...rp.map(Ni),Ni(Bi.CN6),Ni(Bi.CN8)],host:[Ni(Bi.CN2),Ni(Bi.CN1),Ni(Bi.CN12),Ni(Bi.CN7)]},mn=[0,1,0],Yo={device:[mn,mn,mn,mn,mn,mn,mn,mn],host:[mn,mn,mn,mn]},Us=[1,0,0],Ns=[0,0,1],$o={device:[Us,Us,Us,Us,Us,Us,Ns,Ns],host:[Ns,Ns,Ns,Ns]},op=8;function Tf(i){W(i,j(86,2.5,87,U.chip),0,-2,0);for(const t of[-40,40])for(const e of[-40.5,40.5])W(i,kt(3,1.6,U.caster,12),t,-3.5,e);for(const t of[25,125])for(const e of[5,105]){const[n,s]=Un(t,e);W(i,kt(2.6,op-.6,U.gold,12),n,-8.6/2,s)}}function ap(){const i=new le,t=Da("switch-pm50100");if(t){i.add(t),W(i,j(149.8,1.5,109.8,U.pcbBlack),0,.2,0);const n=wi(40);return n.position.set(0,21.5,0),i.add(n),Tf(i),i}Tf(i),W(i,j(150,2,110,U.pcbBlack),0,0,0);for(const n of[25,125])for(const s of[5,105]){const[r,a]=Un(n,s);W(i,kt(3.6,.6,U.gold,16),r,1.2,a),W(i,kt(1.8,1,U.slot,12),r,1.4,a)}W(i,j(40,3,40,U.chip),0,2.5,0);for(const n of[-40,40])for(const s of[-40,40])W(i,kt(2.4,7,U.gold,10),n,4.5,s);W(i,j(90,5,91,U.heatsink),0,9.5,0);for(let n=-10;n<=10;n++)W(i,j(3,18,89,U.heatsink),n*4.3,21,0);const e=wi(40);e.position.set(0,33,0),i.add(e);for(const[n,s]of rp)W(i,j(27.5,13,7,U.connector),n,7.5,s),W(i,j(23,2,3.5,U.slot),n,14.2,s);for(const[n,s]of Object.values(Bi))W(i,j(7,13,27.5,U.connector),n,7.5,s),W(i,j(3.5,2,23,U.slot),n,14.2,s);W(i,j(7,13,16,U.connector),qo[0],7.5,qo[1]),W(i,j(3.5,2,12,U.slot),qo[0],14.2,qo[1]),W(i,j(13,11,12,U.chip),Lr[0],6.5,Lr[2]),W(i,j(6,5,8,U.slot),Un(4.7,7.1)[0],3.5,Un(4.7,7.1)[1]);for(let n=0;n<3;n++)W(i,j(10,4,3,U.slot),-66,3,-40+n*6);return W(i,j(17,6,33,U.pcb),-63,4,8),W(i,j(17,6,33,U.pcb),60,4,-38),W(i,j(11,.4,17,U.label),-63,1.2,-22),i}const je={mb10:[-51.5,20],mb18:[-16,20],cpu8:[[18,20],[37.5,20],[56.5,20],[18,0],[37.5,0],[56.5,0],[18,-18],[37.5,-18],[56.5,-18]],hpwr:[[-3,0],[-3,-18]],peri:[[-51.5,0],[-37.5,0],[-23.5,0],[-51.5,-18],[-37.5,-18],[-23.5,-18]]};function cp(i=!1){const t=new le,{W:e,H:n,L:s}=Nd,r=8;if(W(t,j(e,n,s,U.psuBody),0,0,0),i){W(t,kt(62,2.2,U.noctuaRim,36),0,n/2+.6,r),W(t,kt(57,1.6,U.vent,36),0,n/2+1.2,r);const o=wi(52,9);o.traverse(c=>{c.material===U.fanBlade&&(c.material=U.noctua)}),o.position.set(0,n/2+.8,r),t.add(o);for(let c=0;c<5;c++){const l=j(2.4,1.2,112,U.noctuaRim);l.rotation.y=c/5*Math.PI,W(t,l,0,n/2+2.4,r)}}else{W(t,kt(66,1.8,U.psuGrille,40),0,n/2+.5,r);const o=wi(58,7);o.position.set(0,n/2+1,r),t.add(o);for(const[c,l]of[[-s/2+26,.35],[s/2-26,.35]]){const u=j(e-4,.8,22,U.armor);u.rotation.y=l,W(t,u,0,n/2+.9,c)}W(t,j(26,.8,11,U.armor),0,n/2+2,r)}const a=([o,c],l,u=9)=>{W(t,j(l,u,3,U.slot),o,c,-s/2-1.2),W(t,j(l-3,u-3,1.6,U.cablePlug),o,c,-s/2-2.4)};a(je.mb10,21),a(je.mb18,38);for(const o of je.cpu8)a(o,17);for(const o of je.peri)a(o,13);for(const o of je.hpwr)a(o,19,8),W(t,j(9,2.2,2.5,U.slot),o[0],o[1]+5.4,-s/2-1);W(t,j(e-10,n-10,1.6,U.psuGrille),0,0,s/2+.4),W(t,j(30,26,4,U.slot),-42,0,s/2+1.6),W(t,j(20,24,4,U.chip),-13,0,s/2+1.6),W(t,j(11,11,3.4,U.connector),8,-4,s/2+1.4),W(t,j(16,3,1,U.label),8,6,s/2+1.4);for(const o of[-1,1]){const c=j(1.4,22,62,U.armor);c.rotation.x=.12,W(t,c,o*(e/2+.4),4,-18),W(t,j(1,8,34,U.label),o*(e/2+.3),-28,62)}return W(t,j(e*.72,1,s*.6,U.label),0,-n/2-.4,0),t}const _e=(i,t)=>[i-152.5,t-165],lp=[141.3,121,100.6,80.3,60,39.7,19.4].map(i=>i-152.5),Sl=79.5-165,F1=[0,2,4,6].map(i=>lp[i]),Zc={atx24:_e(224,326),eps:[_e(297,46),_e(297,262)]},O1=_e(224,170),jc=[22-152.5,8.25,-166];function up(){const i=new le;W(i,j(305,2.5,330,U.pcbBlack),0,0,0);const t=1.25,[e,n]=O1;W(i,j(74,3,80,U.bracket),e,t+1.5,n),W(i,j(60,3.6,68,U.chip),e,t+2,n),W(i,j(52,2.4,60,U.bracket),e,t+4.6,n),W(i,j(58,8,66,U.heatsink),e,t+10,n);for(let u=0;u<6;u++)W(i,kt(3,42,U.heatsink,12),e+(u-2.5)*9,t+32,n);for(let u=48;u<=118;u+=3)W(i,j(128,1.3,96,U.heatsink),e,u,n);const s=wi(34);s.rotation.x=Math.PI/2,s.position.set(e,83,n-52),i.add(s);for(const u of[151.5,160.1,168.6,177.2,271.7,280.3,288.9,297.4]){const[h]=_e(u,0);W(i,j(7.5,4.5,140,U.slot),h,t+2.2,n),W(i,j(4.6,30,133.4,U.chip),h,t+16,n)}for(const u of lp)W(i,j(9,10,94,U.bracket),u,t+5,Sl),W(i,j(5.5,1.8,89,U.slot),u,t+10.2,Sl);const r=[[13.5,11,11,U.chip],[22,14,14,U.connector],[38,14,14,U.connector],[51.5,14,14,U.connector],[60,14,12,U.connector],[79,14,12,U.connector],[100,18,15,U.connector],[115.5,16,7,U.slot]];for(const[u,h,f,d]of r)W(i,j(h,f,14,d),_e(u,0)[0],t+f/2,-157);W(i,j(12,11,18,U.chip),144.5,t+5.5,_e(0,46)[1]),W(i,j(12,11,14,U.chip),144.5,t+5.5,_e(0,61)[1]),W(i,j(12,11,14,U.chip),144.5,t+5.5,_e(0,242)[1]),W(i,j(12,11,18,U.chip),144.5,t+5.5,_e(0,262)[1]);for(const u of[299,306])W(i,kt(3.2,5,U.cap,14),146,t+2.5,_e(0,u)[1]);W(i,j(5,2.6,12,U.debugRed),147,t+1.3,_e(0,316)[1]);const a=[[224,52,13,U.slot],[199,19,9,U.connector],[181,19,9,U.connector],[162,10,7,U.chip],[107,13,8,U.connector],[91,13,8,U.connector],[72,16,9,U.slot],[51,16,9,U.slot],[41,12,11,U.chip],[28,12,11,U.chip]];for(const[u,h,f,d]of a)W(i,j(h,f,11,d),_e(u,0)[0],t+f/2,157);for(const u of[45,110,142,181,197,251,276,296])W(i,j(6,7,12,U.slot),-146,t+3.5,_e(0,u)[1]);W(i,j(14,2,14,U.chip),_e(69,0)[0],t+1,_e(0,18)[1]);const o=(u,h,f,d,g)=>{const[x]=_e(u,0),[m]=_e(h,0),p=_e(0,f)[1],v=_e(0,d)[1],_=(x+m)/2,y=(p+v)/2,b=m-x,w=v-p;W(i,j(b,4,w,U.heatsink),_,t+2,y);for(let L=x+2;L<=m-2;L+=4.5)W(i,j(1.5,24,w-4,U.heatsink),L,t+16,y);const S=kt(3,b-6,U.heatsink,12);S.rotation.z=Math.PI/2,W(i,S,_,t+24,y);for(let L=0;L<g;L++){const M=wi(15);M.position.set(_+(L-(g-1)/2)*(b/g),t+30,y),i.add(M)}};o(185,280,40,100,2),o(170,285,250,310,3);const[c,l]=[_e(80,0)[0],_e(0,265.5)[1]];return W(i,j(100,6,91,U.armor),c,t+3,l),W(i,j(78,2.2,66,U.chip),c-4,t+7,l+4),W(i,j(100,1.8,30,U.armor),c,t+7.5,l-24),W(i,j(115,8,14,U.armor),_e(92.5,0)[0],t+4,_e(0,29)[1]),i}const Hs={W:442.4,H:43.7,D:285.6},Af=[75,-2,Hs.D/2+2];function hp(){const i=new le,{W:t,H:e,D:n}=Hs,s=n/2;W(i,j(t,e,n-4,U.rail),0,0,-2),W(i,j(t,e,4,U.udmFace),0,0,s-2),W(i,j(96,26,1.2,U.slot),-158,0,s+.2),W(i,j(80,3,1.4,U.udmFace),-158,-6,s+.6),W(i,j(15,13,2,U.slot),-92,-2,s+.4);for(let o=0;o<4;o++)for(const c of[7,-8])W(i,j(15,13,2,U.slot),-58+o*19,c+.5,s+.4);for(const o of[47,75])W(i,j(16,10,2,U.slot),o,-2,s+.4);const r=kt(19,1.6,U.slot,32);r.rotation.x=Math.PI/2,W(i,r,165,0,s+.6);const a=kt(15.5,1.6,U.screen,32);a.rotation.x=Math.PI/2,W(i,a,165,0,s+1.2);for(const o of[-1,1])W(i,j(22,e,3,U.rail),o*(t/2+11),0,s-1.5);return i}function fp(){const i=new le;return W(i,j(13.5,12.5,32,U.caster),0,0,0),W(i,j(11.5,9,2,U.slot),0,0,16),W(i,j(6,2,6,U.gold),0,-4,12),i}const dp={W:438,H:44,D:114};function pp(){const i=new le,{W:t,H:e,D:n}=dp,s=n/2;W(i,j(t,e,n-3,U.rail),0,0,-1.5),W(i,j(t,e,3,U.psuBody),0,0,s-1.5);for(const a of[-1,1])for(let o=0;o<6;o++){const c=a*(38+o*27);W(i,j(19,24,1.6,U.slot),c,0,s+.3),W(i,j(4,9,1.8,U.vent),c,3,s+.6),W(i,kt(2.6,1.8,U.vent,10),c,-7,s+.6)}W(i,j(34,18,1.8,U.screen),0,2,s+.4),W(i,j(26,9,.8,U.debugRed),0,3,s+1.2),W(i,kt(4.5,2.2,U.caster,14),0,-12,s+.6);const r=kt(4.5,26,U.cable,12);r.rotation.x=Math.PI/2,W(i,r,-t/2+24,0,-s-12);for(const a of[-1,1])W(i,j(22,e,3,U.rail),a*(t/2+11),0,s-1.5);return i}const Xs=1,An=1.5,Rf=14.7,mp=-95,Ia=1120,Cf=572,B1=Ia-mp,z1=(mp+Ia)/2,Pf=712,k1=Ia,H1=Ia/2,gp=ql/2+21+27.5,Br=_a/2+2.8,G1=gp+7+An/2,V1=ni+6+7+An/2,Lf=[{y:600},{y:260}].map(i=>({...i,z:Xs*(Br+An/2)})),vr={y:900,z:Xs*(Br+An/2)},Zo={y:610,w:540,h:1e3,z:-Xs*(Br+An/2)};let jo;function W1(){if(jo!==void 0)return jo;if(typeof document>"u")return jo=null;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,64,64),t.fillStyle="#000";for(const[e,n]of[[16,16],[48,48]])t.beginPath(),t.arc(e,n,20.75,0,Math.PI*2),t.fill();return jo=i}function sa(i,t,e=!1){const n=new le,s=e?U.perf:U.perf.clone(),r=e?null:W1();if(r){const o=new ey(r);o.wrapS=o.wrapT=aa,o.repeat.set(i/Rf,t/Rf),s.alphaMap=o,s.alphaTest=.5}const a=new oe(new fn(i,t,An),s);a.castShadow=a.receiveShadow=!0,n.add(a);for(const o of[-1,1])W(n,j(i+3,7,An+4.5,U.vent),0,o*(t/2-2),0),W(n,j(7,t-11,An+4.5,U.vent),o*(i/2-2),0,0);return n}function _p(i,t,e,n,s){const r=kt(6.5,1.2,U.caster,16);r.rotation.x=Math.PI/2,W(i,r,t,e,n+s*.6);const a=kt(4.4,2.4,U.bracket,16);return a.rotation.x=Math.PI/2,W(i,a,t,e,n+s*2.2),a}function bl(i,t,e,n,s){const r=kt(10,7,U.vent,20),a=kt(4.2,3,U.bracket,6);s==="x"&&(r.rotation.z=Math.PI/2,a.rotation.z=Math.PI/2),s==="z"&&(r.rotation.x=Math.PI/2,a.rotation.x=Math.PI/2),W(i,r,t,e,n);const o=3.5+An+1.5;W(i,a,t+(s==="x"?Math.sign(t)*o:0),e+(s==="y"?o:0),n+(s==="z"?Math.sign(n)*o:0))}function X1(){const i=new le,t=ql/2,e=[1,7,13,19,24].map(s=>s*44.45+22.225);for(const s of[-1,1]){const r=sa(Cf,B1);r.position.set(0,z1,s*Br),i.add(r);for(const a of[-1,1])for(const o of e)_p(i,a*t,o,s*(Br+An/2),s)}for(const s of[-1,1]){const r=sa(Pf,k1,!0);r.rotation.y=Math.PI/2,r.position.set(s*G1,H1,0),i.add(r);for(const a of[-1,1])for(const o of[150,560,1e3])bl(i,s*(gp+3.5),o,a*328,"x")}const n=sa(Cf,Pf+4,!0);n.rotation.x=-Math.PI/2,n.position.set(0,V1,0),i.add(n);for(const s of[-1,1])for(const r of[-1,1])bl(i,s*253.55,ni+6+3.5,r*(_a/2-40),"y");return i}function q1(){const i=new le;W(i,j(132,132,6,U.post),0,0,-18);const t=kt(60,38,U.vent,36);t.rotation.x=Math.PI/2,W(i,t,0,0,1);const e=wi(56,7);e.rotation.x=Math.PI/2,W(i,e,0,0,14);for(let n=0;n<4;n++){const s=new oe(new Ca(14+n*14,1.3,8,36),U.bracket);W(i,s,0,0,21+n*.4)}for(const n of[.4,1.97,3.54,5.11]){const s=j(2.6,62,2.6,U.bracket);s.rotation.z=n,W(i,s,Math.sin(n)*-31,Math.cos(n)*31,20)}for(const n of[-1,1])for(const s of[-1,1])W(i,kt(3,2.5,U.gold,12),n*52.5,s*52.5,-14).rotation.x=Math.PI/2;return i}function xp(){const i=new le;for(const n of[-1,1])W(i,q1(),n*75,0,0);const t=j(85,75,13,U.caster);W(i,t,195,-20,-11),W(i,j(60,40,1.2,U.screen),195,-12,-3.8);for(const n of[-18,0,18])W(i,kt(4,2,U.chip,12),195+n,-44,-4).rotation.x=Math.PI/2;const e=j(4,3,3,U.cable);return W(i,e,152,-20,-11),i}function vp(){const i=new le,t=(s,r,a,o,c=36)=>{const l=kt(s,r,a,c);return l.rotation.x=Math.PI/2,W(i,l,0,0,o),l};t(131,8,U.caster,4),t(127,70,U.caster,43),t(140,42,U.post,99),t(158,190,U.post,215),W(i,j(96,30,3,U.label),0,-120,215),t(140,42,U.post,331),t(127,60,U.caster,382);const e=kt(127,440,U.caster,32);W(i,e,0,220,408);const n=kt(131,10,U.caster,32);W(i,n,0,445,408),W(i,j(74,104,16,U.caster),215,10,12),W(i,j(56,56,1.5,U.screen),215,30,21);for(const s of[-20,0,20])W(i,kt(4,2,U.chip,12),215+s,-32,21).rotation.x=Math.PI/2;return i}function yp(i=540,t=1170){const e=new le;W(e,j(i-8,t-8,10,U.filter),0,0,8);for(const n of[-1,1])W(e,j(i,25,14,U.rail),0,n*(t/2-12.5),8),W(e,j(25,t-50,14,U.rail),n*(i/2-12.5),0,8);for(const n of[-1,1])for(const s of[-1,1])W(e,j(16,30,22,U.caster),n*(i/2-30),s*(t/2-3),4);return e}function Y1(){const i=new le;return i.add(sa(340,340)),_p(i,-120,-120,An/2,1),bl(i,120,-120,-3.5-An/2,"z"),i}const Ko=168,yr=68.5,El=-.6,Mp=[[3.8,4,-39.5],[3.8,4,-69.5]];function Sp(){const i=new le,t=Da("host-retimer");if(t)return i.add(t),W(i,j(1.5,yr-.2,Ko-.2,U.pcbBlack),0,0,0),W(i,j(1.8,11,89,U.gold),0,-yr/2-5.5,El),i;W(i,j(1.8,yr,Ko,U.pcbBlack),0,0,0),W(i,j(1.8,11,89,U.gold),0,-yr/2-5.5,El),W(i,j(2.5,100,2,U.bracket),0,11,Ko/2+6),W(i,j(2.5,3,10,U.bracket),0,62,Ko/2+10);for(const[,,n]of Mp)W(i,j(9,11.6,25.8,U.connector),4,-8.5,n),W(i,j(7,2.5,21,U.slot),4,-2,n);W(i,j(11.5,50,50,U.heatsink),8.5,.7,1);const e=wi(15);e.rotation.z=-Math.PI/2,e.position.set(15,.7,1),i.add(e);for(const n of[26,-24]){const s=kt(2,7,U.gold,10);s.rotation.z=Math.PI/2,W(i,s,3,-22,n)}W(i,j(4,5.5,7,U.chip),3.5,2,62),W(i,j(4,5.5,7,U.chip),3.5,2,52);for(const n of[50,38])W(i,j(2.8,3,13,U.slot),2.6,yr/2-3.5,n);return i}class $1{constructor(){this.ids=[],this.pr=[]}get size(){return this.ids.length}push(t,e){this.ids.push(t),this.pr.push(e);let n=this.ids.length-1;for(;n>0;){const s=n-1>>1;if(this.pr[s]<=this.pr[n])break;this._sw(n,s),n=s}}pop(){const t=this.ids[0],e=this.ids.length-1;this.ids[0]=this.ids[e],this.pr[0]=this.pr[e],this.ids.pop(),this.pr.pop();let n=0;for(;;){let s=2*n+1,r=2*n+2,a=n;if(s<this.ids.length&&this.pr[s]<this.pr[a]&&(a=s),r<this.ids.length&&this.pr[r]<this.pr[a]&&(a=r),a===n)break;this._sw(n,a),n=a}return t}_sw(t,e){const n=this.ids[t];this.ids[t]=this.ids[e],this.ids[e]=n;const s=this.pr[t];this.pr[t]=this.pr[e],this.pr[e]=s}}const wl=[];for(let i=-1;i<=1;i++)for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++){if(!i&&!t&&!e)continue;const n=new Set,s=[];for(const[r,a,o]of[[i,0,0],[0,t,0],[0,0,e],[i,t,0],[i,0,e],[0,t,e]]){if(!r&&!a&&!o||r===i&&a===t&&o===e)continue;const c=r*9+a*3+o;n.has(c)||(n.add(c),s.push([r,a,o]))}wl.push([i,t,e,Math.hypot(i,t,e),s])}class bp{constructor(t,e={}){const{cell:n=5,bias:s=[],biasRadius:r=140,biasWeight:a=.6,normalBoxes:o=null,padThin:c=6.5,padFat:l=10}=e;this.cell=n;const u=new ue;t.forEach(f=>u.union(f)),u.expandByScalar(75),this.min=u.min.clone(),this.nx=Math.ceil((u.max.x-u.min.x)/n)+1,this.ny=Math.ceil((u.max.y-u.min.y)/n)+1,this.nz=Math.ceil((u.max.z-u.min.z)/n)+1;const h=this.nx*this.ny*this.nz;this.blocked=new Uint8Array(h),this.blockedFat=new Uint8Array(h);for(const f of t)this._block(f.clone().expandByScalar(c),this.blocked),this._block(f.clone().expandByScalar(l),this.blockedFat);for(const[f,d,g,x]of e.holes||[]){const m=this._cell({x:f-x,y:d-14,z:g-x}),p=this._cell({x:f+x,y:d+14,z:g+x});for(let v=Math.max(0,m[0]);v<=Math.min(this.nx-1,p[0]);v++)for(let _=Math.max(0,m[1]);_<=Math.min(this.ny-1,p[1]);_++)for(let y=Math.max(0,m[2]);y<=Math.min(this.nz-1,p[2]);y++){const b=this._i(v,_,y);this.blocked[b]=0,this.blockedFat[b]=0}}this._blk=this.blocked,this.solid=new Uint8Array(h);for(const f of e.supportBoxes||t)this._block(f,this.solid);this.support=new Uint8Array(h);{const f=Math.ceil(20/n),d=Math.ceil(15/n),g=Math.ceil(10/n);for(let x=0;x<this.nx;x++)for(let m=0;m<this.ny;m++)for(let p=0;p<this.nz;p++)if(this.solid[this._i(x,m,p)]){for(let v=1;v<=f;v++)m+v<this.ny&&(this.support[this._i(x,m+v,p)]=1);for(let v=1;v<=g;v++)m-v>=0&&(this.support[this._i(x,m-v,p)]=1);for(let v=1;v<=d;v++)x+v<this.nx&&(this.support[this._i(x+v,m,p)]=1),x-v>=0&&(this.support[this._i(x-v,m,p)]=1),p+v<this.nz&&(this.support[this._i(x,m,p+v)]=1),p-v>=0&&(this.support[this._i(x,m,p-v)]=1)}}this._bias(s,r,a),this.trail=new Float32Array(h),this._trailCells=[],this._trailLoom=-1,this._bit=0,this.use=new Uint8Array(h),this.mask=new Int32Array(h),this.history=new Float32Array(h),this.presFac=0,this._g=new Float32Array(h),this._came=new Int32Array(h),this._closed=new Uint8Array(h),this._gen=new Int32Array(h),this._genId=0,this._boxes=o||t,this.fails=0,this.overuse=0}debugVoxels(){this._blk=this.blocked;const t=[];for(let a=0;a<this.nx;a++)for(let o=0;o<this.ny;o++)for(let c=0;c<this.nz;c++)this.blocked[this._i(a,o,c)]&&(this._free(a+1,o,c)||this._free(a-1,o,c)||this._free(a,o+1,c)||this._free(a,o-1,c)||this._free(a,o,c+1)||this._free(a,o,c-1))&&t.push([a,o,c]);const e=new fn(this.cell*.92,this.cell*.92,this.cell*.92),n=new wa({color:3718648,transparent:!0,opacity:.4,depthWrite:!1}),s=new Qv(e,n,t.length),r=new ae;return t.forEach(([a,o,c],l)=>{const u=this._world(a,o,c);s.setMatrixAt(l,r.makeTranslation(u.x,u.y,u.z))}),s.instanceMatrix.needsUpdate=!0,s.frustumCulled=!1,s}_normalAt(t){const e=this._cell(t),n=Math.ceil(64/this.cell),s=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];let r=[0,1,0],a=-1;for(const[o,c,l]of s){let u=0;for(let h=1;h<=n;h++)this._free(e[0]+o*h,e[1]+c*h,e[2]+l*h)&&(u+=n+1-h);u>a&&(a=u,r=[o,c,l])}return new A(...r)}_i(t,e,n){return(t*this.ny+e)*this.nz+n}_dec(t){const e=t%this.nz,n=(t-e)/this.nz%this.ny;return[(t-e-n*this.nz)/(this.ny*this.nz),n,e]}_cell(t){return[Math.round((t.x-this.min.x)/this.cell),Math.round((t.y-this.min.y)/this.cell),Math.round((t.z-this.min.z)/this.cell)]}_world(t,e,n){return new A(this.min.x+t*this.cell,this.min.y+e*this.cell,this.min.z+n*this.cell)}_in(t,e,n){return t>=0&&e>=0&&n>=0&&t<this.nx&&e<this.ny&&n<this.nz}_free(t,e,n){return this._in(t,e,n)&&this._blk[this._i(t,e,n)]===0}_block(t,e){const n=this._cell(t.min),s=this._cell(t.max);for(let r=Math.max(0,n[0]);r<=Math.min(this.nx-1,s[0]);r++)for(let a=Math.max(0,n[1]);a<=Math.min(this.ny-1,s[1]);a++)for(let o=Math.max(0,n[2]);o<=Math.min(this.nz-1,s[2]);o++)e[this._i(r,a,o)]=1}_bias(t,e,n){if(this.attr=null,!t||!t.length)return;this.attr=new Float32Array(this.nx*this.ny*this.nz);const s=Math.ceil(e/this.cell);for(const r of t){const a=new A(r[0],r[1],r[2]),o=this._cell(a);for(let c=o[0]-s;c<=o[0]+s;c++)for(let l=o[1]-s;l<=o[1]+s;l++)for(let u=o[2]-s;u<=o[2]+s;u++){if(!this._in(c,l,u))continue;const h=this._world(c,l,u).distanceTo(a);if(h<e){const f=n*(1-h/e),d=this._i(c,l,u);f>this.attr[d]&&(this.attr[d]=f)}}}}_nearestFree(t){if(this._free(...t))return t;const e=Math.ceil(96/this.cell);for(let n=1;n<e;n++)for(const[s,r,a]of wl){const o=[t[0]+s*n,t[1]+r*n,t[2]+a*n];if(this._free(...o))return o}return null}_los(t,e){const n=Math.max(Math.abs(e[0]-t[0]),Math.abs(e[1]-t[1]),Math.abs(e[2]-t[2])),s=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.abs(s[1])>=.85*Math.hypot(s[0],s[1],s[2]),a=n*2;for(let o=1;o<a;o++){const c=o/a,l=Math.round(t[0]+(e[0]-t[0])*c),u=Math.round(t[1]+(e[1]-t[1])*c),h=Math.round(t[2]+(e[2]-t[2])*c);if(!this._free(l,u,h))return!1;const f=this._i(l,u,h);if(this.use[f]||this.mask[f]&~this._bit||!r&&!this.support[f])return!1}return!0}_smooth(t){if(t.length<=2)return t;const e=[t[0]];let n=0;for(;n<t.length-1;){let s=n+1;for(;s+1<t.length&&this._los(t[n],t[s+1]);)s++;e.push(t[s]),n=s}return e}_stamp(t){const e=Math.max(1,Math.round(8/this.cell));for(const[n,s,r]of t)for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++)for(let c=-e;c<=e;c++){if(!this._in(n+a,s+o,r+c))continue;const l=this._i(n+a,s+o,r+c),u=.95-.14/e*(Math.abs(a)+Math.abs(o)+Math.abs(c));u<=this.trail[l]||(this.trail[l]||this._trailCells.push(l),this.trail[l]=u)}}_setTrail(t,e){if(this._trailLoom!==e){for(const n of this._trailCells)this.trail[n]=0;this._trailCells.length=0,this._trailLoom=e;for(const n of t)n.loom===e&&n.path&&this._stamp(n.path)}}_stampMask(t,e,n){for(const[s,r,a]of t)for(let o=-e;o<=e;o++)for(let c=-e;c<=e;c++)for(let l=-e;l<=e;l++)this._in(s+o,r+c,a+l)&&(this.mask[this._i(s+o,r+c,a+l)]|=n)}_stampUse(t,e,n=1){const s=new Set;for(let r=0;r<t.length;r++){const[a,o,c]=t[r];for(let l=-e;l<=e;l++)for(let u=-e;u<=e;u++)for(let h=-e;h<=e;h++)this._in(a+l,o+u,c+h)&&s.add(this._i(a+l,o+u,c+h))}for(const r of s)this.use[r]+=n}_legBox(t,e){const n=Math.ceil(220/this.cell);return[[Math.max(0,Math.min(t[0],e[0])-n),Math.max(0,Math.min(t[1],e[1])-n),Math.max(0,Math.min(t[2],e[2])-n)],[Math.min(this.nx-1,Math.max(t[0],e[0])+n),Math.min(this.ny-1,Math.max(t[1],e[1])+n),Math.min(this.nz-1,Math.max(t[2],e[2])+n)]]}_astar(t,e,n){const s=this._g,r=this._came,a=this._closed,o=this._gen,c=++this._genId,l=m=>{o[m]!==c&&(o[m]=c,s[m]=1/0,r[m]=-1,a[m]=0)},u=this._i(...t),h=this._i(...e),f=this._world(...e);l(u),s[u]=0;const d=new $1;for(d.push(u,this._world(...t).distanceTo(f));d.size;){const m=d.pop();if(m===h)break;if(a[m])continue;a[m]=1;const[p,v,_]=this._dec(m);let y=0,b=0,w=0;if(r[m]>=0){const[S,L,M]=this._dec(r[m]);y=p-S,b=v-L,w=_-M}for(const[S,L,M,E,N]of wl){const O=p+S,I=v+L,C=_+M;if(n&&(O<n[0][0]||I<n[0][1]||C<n[0][2]||O>n[1][0]||I>n[1][1]||C>n[1][2])||!this._free(O,I,C))continue;let D=!0;for(const[$,nt,lt]of N)if(!this._free(p+$,v+nt,_+lt)){D=!1;break}if(!D)continue;const k=this._i(O,I,C);if(l(k),a[k])continue;const Y=Math.max(this.attr?this.attr[k]:0,this._trailLoom>=0?this.trail[k]:0),X=this.use[k]+(this.mask[k]&~this._bit?1:0),H=r[m]>=0&&(S!==y||L!==b||M!==w)?1.5*this.cell:0;let K=1;(S||M)&&(this.support[k]?L&&(K+=.45):K+=L?1.1:.8);const tt=E*this.cell*(1-.9*Y)*(1+this.presFac*X)*(1+this.history[k])*K+H,it=s[m]+tt;it<s[k]&&(s[k]=it,r[k]=m,d.push(k,it+1.2*this._world(O,I,C).distanceTo(f)))}}if(l(h),r[h]===-1&&u!==h)return null;const g=[];let x=h;for(;x!==-1;)g.push(this._dec(x)),x=r[x];return g.reverse()}_standoff(t,e){let n=null,s=!1;for(let r=6;r<=30;r+=4){const a=t.clone().addScaledVector(e,r);if(this._free(...this._cell(a)))s=!0,n=a;else if(s)break}return n||t.clone().addScaledVector(e,6)}solve(t,e){const n=[],s=t.map(({a:l,b:u,type:h=null,r:f=0,opts:d={}},g)=>{const x=new A(...l),m=new A(...u);this._blk=f>=5?this.blockedFat:this.blocked;const p=d.na?new A(...d.na).normalize():this._normalAt(x),v=d.nb?new A(...d.nb).normalize():this._normalAt(m),_=this._standoff(x,p),y=this._standoff(m,v),b=this._nearestFree(this._cell(_)),w=this._nearestFree(this._cell(y));(!b||!w)&&this.fails++;let S=d.loom!=null?n.findIndex(N=>N.key===d.loom):n.findIndex(N=>N.key==null&&N.type===h&&N.A.distanceTo(x)<130&&N.B.distanceTo(m)<130);S<0&&(n.push({type:h,A:x.clone(),B:m.clone(),key:d.loom??null}),S=n.length-1);const L=Math.max(0,Math.ceil(2*f/this.cell)-1),M=Math.max(L,Math.ceil((2*f+4)/this.cell)-1),E=(d.wps||[]).map(N=>this._nearestFree(this._cell(new A(...N)))).filter(Boolean);return{i:g,type:h,r:f,Ao:_,Bo:y,na:p.toArray(),nb:v.toArray(),start:b,end:w,wps:E,loom:S,bit:1<<Math.min(S,31),shTight:L,shMargin:M,path:null}});this.looms=n.length;const r=Math.ceil(16/this.cell);let a=s.filter(l=>l.start&&l.end),o=1/0,c=0;for(this.rounds=0;this.rounds<8&&a.length;this.rounds++){this.presFac=2+3*this.rounds,a.sort((h,f)=>h.loom-f.loom);const l=new Set(a);this.mask.fill(0);for(const h of s)h.path&&!l.has(h)&&this._stampMask(h.path,h.shMargin,h.bit);for(const h of a)h.path&&this._stampUse(h.path,h.shTight,-1),this._blk=h.r>=5?this.blockedFat:this.blocked,this._bit=h.bit,this._setTrail(s,h.loom),h.path=this._chain(h),h.path&&(this._stamp(h.path),this._stampUse(h.path,h.shTight),this._stampMask(h.path,h.shMargin,h.bit),e&&e(h));this.overuse=0,a=[];const u=Math.ceil(90/this.cell);for(const h of s){if(!h.path)continue;let f=0;for(let d=r;d<h.path.length-r;d++){const g=h.path[d],x=h.wps.length&&h.wps.some(v=>Math.max(Math.abs(g[0]-v[0]),Math.abs(g[1]-v[1]),Math.abs(g[2]-v[2]))<=u),m=this._i(...g);(x?this.mask[m]&~h.bit:this.use[m]>1||this.mask[m]&~h.bit)&&(f++,this.history[m]+=.6)}f&&(this.overuse+=f,a.push(h))}if(this.overuse<=8)break;if(this.overuse>=o){if(++c>=2)break}else c=0;o=this.overuse}return this.fails+=s.filter(l=>l.start&&l.end&&!l.path).length,s.map(l=>this._extract(l))}_chain(t){const e=[t.start,...t.wps||[],t.end];let n=null;for(let s=1;s<e.length;s++){const r=this._astar(e[s-1],e[s],this._legBox(e[s-1],e[s]))||this._astar(e[s-1],e[s]);if(!r)return null;n=n?n.concat(r.slice(1)):r}return n}_extract(t){if(!t.path)return{vias:[t.Ao.toArray(),t.Bo.toArray()],na:t.na,nb:t.nb};this._blk=t.r>=5?this.blockedFat:this.blocked,this._bit=t.bit,this._stampUse(t.path,t.shTight,-1);const e=this._smooth(t.path).map(([s,r,a])=>this._world(s,r,a));for(this._stampUse(t.path,t.shTight,1);e.length&&e[0].distanceTo(t.Ao)<this.cell*1.5;)e.shift();for(;e.length&&e[e.length-1].distanceTo(t.Bo)<this.cell*1.5;)e.pop();const n=[];for(let s=0;s<e.length;s++){if(s){const r=e[s].clone().sub(e[s-1]),a=r.length(),o=Math.floor(a/36);for(let c=1;c<=o;c++)n.push(e[s-1].clone().addScaledVector(r,c/(o+1)))}n.push(e[s])}return{vias:[t.Ao.toArray(),...n.map(s=>s.toArray()),t.Bo.toArray()],na:t.na,nb:t.nb}}}function Z1({boxes:i,normalBoxes:t,supportBoxes:e,bias:n,jobs:s},r){const a=performance.now(),o=I=>new ue(new A(I[0],I[1],I[2]),new A(I[3],I[4],I[5])),c=new bp(i.map(o),{bias:n,normalBoxes:t.map(o),supportBoxes:e&&e.map(o)}),l=performance.now(),u=c.solve(s,r),h=performance.now(),f=(I,C)=>{const D=C>=5?c.blockedFat:c.blocked,k=X=>{const H=c._cell({x:X[0],y:X[1],z:X[2]});return c._in(...H)&&D[c._i(...H)]===0},Y=X=>{const H=c._cell({x:X[0],y:X[1],z:X[2]});return c._in(...H)&&c.support[c._i(...H)]===1};for(let X=0;X<30;X++)for(let H=1;H<I.length-1;H++){const K=I[H-1],tt=I[H+1],it=I[H],$=[0,1,2].map(nt=>it[nt]+((K[nt]+tt[nt])/2-it[nt])*.5);Y(it)&&!Y($)||k($)&&k([0,1,2].map(nt=>(K[nt]+$[nt])/2))&&k([0,1,2].map(nt=>($[nt]+tt[nt])/2))&&(I[H]=$)}for(let X=I.length-2;X>=1;X--){const H=I[X-1],K=I[X],tt=I[X+1],it=(tt[0]-H[0])**2+(tt[1]-H[1])**2+(tt[2]-H[2])**2;if(!it)continue;const $=Math.max(0,Math.min(1,((K[0]-H[0])*(tt[0]-H[0])+(K[1]-H[1])*(tt[1]-H[1])+(K[2]-H[2])*(tt[2]-H[2]))/it));Math.hypot(K[0]-(H[0]+(tt[0]-H[0])*$),K[1]-(H[1]+(tt[1]-H[1])*$),K[2]-(H[2]+(tt[2]-H[2])*$))<1.6&&I.splice(X,1)}};u.forEach((I,C)=>f(I.vias,s[C].r));const d={step:95,reach:34,endSkip:55},g=[];s.forEach((I,C)=>{const D=new A(...I.a),k=new A(...I.b),Y=I.opts&&I.opts.loom!=null?I.opts.loom:null;let X=Y!=null?g.find(H=>H.key===Y):g.find(H=>H.key==null&&H.type===I.type&&H.A.distanceTo(D)<130&&H.B.distanceTo(k)<130);X||(X={type:I.type,A:D,B:k,key:Y,members:[]},g.push(X)),X.members.push(C)});const x=I=>{let C=0;for(let D=1;D<I.length;D++)C+=Math.hypot(I[D][0]-I[D-1][0],I[D][1]-I[D-1][1],I[D][2]-I[D-1][2]);return C},m=(I,C)=>{for(let D=1,k=0;D<I.length;D++){const Y=Math.hypot(I[D][0]-I[D-1][0],I[D][1]-I[D-1][1],I[D][2]-I[D-1][2]);if(k+Y>=C){const X=(C-k)/(Y||1);return[0,1,2].map(H=>I[D-1][H]+(I[D][H]-I[D-1][H])*X)}k+=Y}return I[I.length-1].slice()},p=I=>c._cell({x:I[0],y:I[1],z:I[2]}),v=[[[0,-1,0],24],[[1,0,0],18],[[-1,0,0],18],[[0,0,1],18],[[0,0,-1],18],[[0,1,0],14]],_=I=>{let C=null;const D=p(I);for(const[k,Y]of v)for(let X=1;X<=Math.ceil(Y/c.cell);X++){const H=[D[0]+k[0]*X,D[1]+k[1]*X,D[2]+k[2]*X];if(!c._in(...H))break;if(c.solid[c._i(...H)]){const K=X*c.cell;(!C||K<C.dist)&&(C={dist:K,dir:k});break}}return C},y=(I,C,D)=>{const k=m(I,C),Y=m(I,Math.min(C+8,D)),X=m(I,Math.max(C-8,0)),H=[Y[0]-X[0],Y[1]-X[1],Y[2]-X[2]],K=Math.hypot(H[0],H[1],H[2])||1;return Math.abs(H[1])/K>.8?!0:!!_(k)};u.forEach((I,C)=>{const D=I.vias,k=x(D),Y=s[C].r>=5?c.blockedFat:c.blocked,X=it=>{const $=p(it);return c._in(...$)&&Y[c._i(...$)]===0},H=[0];for(let it=1;it<D.length;it++)H[it]=H[it-1]+Math.hypot(D[it][0]-D[it-1][0],D[it][1]-D[it-1][1],D[it][2]-D[it-1][2]);const K=[];let tt=null;for(let it=20;it<=k-20;it+=10)y(D,it,k)?tt!==null&&(K.push([tt,it]),tt=null):tt===null&&(tt=it);tt!==null&&K.push([tt,k-20]);for(const[it,$]of K){const nt=$-it;if(nt<120)continue;const lt=Math.min(9,.05*nt);let vt=[];for(let dt=1;dt<D.length-1;dt++)H[dt]>it&&H[dt]<$&&vt.push(dt);if(!vt.length){const dt=m(D,(it+$)/2);let Tt=1;for(;Tt<D.length&&H[Tt]<(it+$)/2;)Tt++;D.splice(Tt,0,dt),H.splice(Tt,0,(it+$)/2),vt=[Tt]}for(const dt of vt){const Tt=Math.sin(Math.PI*(H[dt]-it)/nt),Lt=[D[dt][0],D[dt][1]-lt*Tt,D[dt][2]];X(Lt)&&(D[dt]=Lt)}}});const b=[],w=[],S=[],L=I=>{const C=_(I);return C?(w.push(I),b.some(D=>Math.hypot(D.at[0]-I[0],D.at[1]-I[1],D.at[2]-I[2])<14)||b.push({at:I,p:[0,1,2].map(D=>I[D]+C.dir[D]*(C.dist-1.9)),n:C.dir.map(D=>-D)}),!0):!1},M=[];for(const I of g){if(I.members.length<2)continue;const C=I.members.reduce((k,Y)=>x(u[k].vias)>x(u[Y].vias)?k:Y),D=x(u[C].vias);for(let k=d.endSkip;k<D-d.endSkip;k+=d.step){const Y=m(u[C].vias,k),X=[];for(const lt of I.members){const vt=u[lt].vias;let dt=-1,Tt=1/0;for(let Lt=1;Lt<vt.length-1;Lt++){const Rt=Math.hypot(vt[Lt][0]-Y[0],vt[Lt][1]-Y[1],vt[Lt][2]-Y[2]);Rt<Tt&&(Tt=Rt,dt=Lt)}Tt>d.reach||X.push({m:lt,k:dt})}if(X.length<2)continue;const H=X.reduce((lt,vt)=>{const dt=u[vt.m].vias[vt.k];return[lt[0]+dt[0],lt[1]+dt[1],lt[2]+dt[2]]},[0,0,0]).map(lt=>lt/X.length);let K=0;for(const lt of X){const vt=u[lt.m].vias[lt.k],dt=s[lt.m].r,Tt=X.length<=2?dt+1.2:dt/Math.sin(Math.PI/X.length)+.6,Lt=Math.hypot(vt[0]-H[0],vt[1]-H[1],vt[2]-H[2]),Rt=Math.min(Lt,Tt),Ut=Lt>0?Rt/Lt:0,B=[H[0]+(vt[0]-H[0])*Ut,H[1]+(vt[1]-H[1])*Ut,H[2]+(vt[2]-H[2])*Ut];c._free(...c._cell({x:B[0],y:B[1],z:B[2]}))&&(u[lt.m].vias[lt.k]=B),K=Math.max(K,Math.hypot(u[lt.m].vias[lt.k][0]-H[0],u[lt.m].vias[lt.k][1]-H[1],u[lt.m].vias[lt.k][2]-H[2])+dt)}const tt=Math.max(...X.map(lt=>s[lt.m].r)),it=X.length<=2?tt+1.2:tt/Math.sin(Math.PI/X.length)+.6;if(K>it+tt+3)continue;const $=m(u[C].vias,Math.min(k+12,D)),nt=new A($[0]-Y[0],$[1]-Y[1],$[2]-Y[2]).normalize();M.push({c:H,r:K+.5,tang:nt.toArray()}),L(H),X.length>=3&&S.push(H)}}for(const I of g){if(I.members.length!==1)continue;const C=I.members[0],D=u[C].vias,k=x(D);for(let Y=d.endSkip;Y<k-d.endSkip;Y+=140){const X=m(D,Y);if(!L(X))continue;const H=m(D,Math.min(Y+12,k)),K=new A(H[0]-X[0],H[1]-X[1],H[2]-X[2]).normalize();M.push({c:X,r:s[C].r+1.1,tang:K.toArray()})}}let E=0,N=0;u.forEach(I=>{const C=I.vias,D=x(C);let k=0,Y=0;for(let X=20;X<=D-20;X+=10){const H=m(C,X),K=(it,$)=>it.some(nt=>Math.hypot(H[0]-nt[0],H[1]-nt[1],H[2]-nt[2])<$);Y=y(C,X,D)||K(w,50)||K(S,55)?0:Y+10,k=Math.max(k,Y)}E=Math.max(E,k),k>200&&N++});const O={fails:c.fails,overuse:c.overuse,rounds:c.rounds,looms:c.looms,floating:N,maxFreeSpanMm:Math.round(E),ties:M.length,mounts:b.length,ms:Math.round(performance.now()-a),grid:[c.nx,c.ny,c.nz],boxes:i.length,msVox:Math.round(l-a),msSolve:Math.round(h-l),msPost:Math.round(performance.now()-h)};return{routed:u,bands:M,mounts:b,stats:O,router:c}}const j1=()=>{const i=new le,t=kt(2.85,1.8,U.gold,16);t.position.y=13.7,i.add(t);const e=kt(3.5,.7,U.rail,20);e.position.y=12.45,i.add(e);const n=kt(1.5,8,U.gold,12);n.position.y=8,i.add(n);const s=j(10,4,5.9,U.rail);return s.position.y=2,i.add(s),i},K1=()=>{const i=new le,t=j(18,2.5,17,U.rail);t.position.set(9,19.75,0),i.add(t);const e=j(2.5,18,17,U.rail);return e.position.set(1.25,9.5,0),i.add(e),i},J1=()=>{const i=new le,t=j(10,4,5.9,U.rail);t.position.y=2,i.add(t);const e=kt(2.9,6,U.gold,6);e.position.y=7,i.add(e);const n=kt(2.9,25,U.gold,6);return n.position.y=22.5,i.add(n),i},Q1=()=>kt(9.1,15.2,U.caster,24),Xe={gpu:{name:"RTX PRO 6000 Blackwell Max-Q",qty:8,dims:"266.7 × 111.8 mm · dual-slot (40.6 mm)",build:ip,link:"https://www.exxactcorp.com/NVIDIA-900-5G153-2200-000-E8815317",desc:"NVIDIA workstation GPU — 96 GB GDDR7, 300 W, PCIe 5.0 x16. Single enclosed radial blower: intake through the side fan + gold top louvres, exhaust out the bracket only, which is what makes it safe to pack eight in a row. 12V-2×6 sits in a recessed pocket on the far edge. Reaches the host over MCIO cable through a device adapter, not a motherboard slot."},board:{name:"ASRock WRX90 WS EVO",qty:1,dims:"305 × 330 mm · SSI-EEB",build:up,link:"https://www.asrock.com/mb/AMD/WRX90%20WS%20EVO/index.asp",desc:"SSI-EEB motherboard for the Threadripper PRO 9985WX (128 PCIe 5.0 lanes). Four of its x16 slots carry the host adapters that feed the switch fabric."},host:{name:"C-Payne Host Adapter x16 — RETIMER (Astera)",qty:4,dims:"≈175 × 68 mm · half-height x16 card",build:Sp,link:"https://c-payne.com/products/mcio-pcie-gen5-host-adapter-x16-retimer",price:240,desc:"Plugs into a board x16 slot and breaks it into 2× MCIO 8i at the far end of the bottom edge, with an actively-cooled Astera Aries retimer to hold clean Gen5 across the cable. Slot-powered, no aux. Four total = two uplinks per switch (the 2-VS-per-chip layout)."},switch:{name:"C-Payne PM50100 switch (CP-0551)",qty:2,dims:"150 × 110 mm · 100 × 100 mm hole pitch",build:ap,link:"https://c-payne.com/products/pcie-gen5-mcio-switch-100-lane-microchip-switchtec-pm50100",price:2e3,owned:2,desc:"Microchip Switchtec PM50100 — a 100-lane PCIe Gen5 switch. 12× MCIO 8i + 1× 4i ring the chip under a 90 mm heatsink + 92 mm Arctic fan; PCIe 6-pin power. Each takes two host uplinks and fans out to four GPUs. You already own both."},adapter:{name:"C-Payne Device Adapter x8/x16 (VERTICAL)",qty:8,dims:"≈128 × 41 mm · photo-scaled ±3 mm",build:sp,link:"https://c-payne.com/products/mcio-pcie-gen5-device-adapter-x8-x16",price:50,desc:'Turns 2× MCIO 8i into a PCIe x16 slot the GPU plugs into — a "portable slot". Vertical MCIO + 6-pin point straight down, which is what allows single-slot-width spacing. The 6-pin 12 V feed is mandatory (and must NOT be an EPS/ATX plug). One per GPU; the piece the mount has to anchor.'},psu:{name:"Seasonic TX-1600 Noctua Edition",qty:2,dims:"210 × 150 × 86 mm · ATX",build:()=>cp(!0),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",desc:"1600 W Titanium, ATX 3.1, 2× native 12V-2×6. Two units — both Noctua Edition — on two separate 120V circuits, synced by an ADD2PSU."},rack:{name:"StarTech 4POSTRACK25U",qty:1,dims:'25U (1111 mm) · 19" · 22–40" deep',build:Bd,link:"https://www.startech.com/en-us/server-management/4postrack25u",desc:'Open 4-post 25U rack — 22–40" adjustable depth, square-hole rails, casters. Ships flat-packed.'},shelf:{name:"StarTech ADJSHELF vented shelf",qty:3,dims:"445 × 700 mm tray · 1U · 80 kg cap.",build:()=>tp(),link:"https://www.startech.com/en-us/server-management/adjshelf",desc:"Three total. Bottom: the UDM-SE gateway, port face over the rear channel. Middle: fan-down PSUs breathing through the vents, with the WRX90 on a 2020 mezzanine above them. Upper: the card row up front and both switches on the rear strip. No data cable ever crosses a shelf floor — zero drilling."},mount:{name:"2020 T-slot extrusion — Misumi HFS5-2020, cut to length",qty:23,dims:"20 × 20 mm profile · cut: 4× 435 + 3× 360 + 2× 330 + 2× 285 + 2× 143 + 4× 86 + 2× 80 + 2× 56.5 + 2× 50.5 mm",build:()=>un(435),link:"https://us.misumi-ec.com/vona2/detail/110302683830/",links:[{label:"M5×10 button-heads, 50 pk (Amazon B01H6PKBZA)",url:"https://www.amazon.com/dp/B01H6PKBZA"},{label:"M5 drop-in T-nuts, 100 pk (Amazon B0F1BX43T9)",url:"https://www.amazon.com/dp/B0F1BX43T9"}],note:"order HFS5-2020-‹len›, all plain (no end taps needed) ≈ $110–125 the set of 23 (from verified 448 mm @ $7.39) — every piece ≥ Misumi's 50 mm minimum, no hand-cutting, ZERO drilled holes · standoff stacks for adapters/board/switches: see the M3 riser row",desc:"Aluminium frame, all 20 × 20, all extrusion-to-extrusion — no member bolts point-to-tray (a leg's end never lines up with the vent grid), so nothing is drilled. GPU shelf: two 435 mm rails under the adapters, the 435 mm ear rail on 143 mm uprights, the 435 mm rear support rail on 50.5 mm legs, and 80 + 56.5 mm side ties that lace the legs to the rails (split around the outer adapters' MCIO plugs, spliced by a flat plate) — the chassis clamps to the tray with two M5s through existing vents into the front rail's slot. Mezzanine: 285 mm floor runners ride the vent columns at x ±190 (four M5 vent clamps), carrying 86 mm legs, 330 beams and three 360 cross-rails flush at deck height. Board standoff stack: M3 spring T-nut → 8 mm brass standoff → M3 button-head + washer. Horizontals are cut 435 to fit the 439 mm clear width between the ADJSHELF side lips."},earRail:{name:"GPU ear rail — 2020 across the bracket ears",qty:1,dims:"435 mm · 20 × 20 mm · top slot = the screw row",build:()=>un(435),link:"https://us.misumi-ec.com/vona2/detail/110302683830/",links:[{label:"M3×8 button-heads, 100 pk (Amazon B07H14B2XM)",url:"https://www.amazon.com/dp/B07H14B2XM"},{label:"M3 washers + T-nuts — see the M3 screw card",url:"https://www.amazon.com/dp/B09B3GXTL1"}],note:"HFS5-2020-435, $7.39 (part of the extrusion set) — no cutting or drilling beyond the Misumi order",desc:"Open-frame (mining-rig) retention: the row of ear folds rests directly on the rail's top face and each card screws down through both of its fold slots — M3 button-heads into drop-in T-nuts in the rail's top slot, two per card. Card pitch is continuously adjustable along the slot (no drilled hole pattern), and this one stock piece replaces the cut-and-drilled aluminium angle entirely. Front face sits 3.2 mm behind the bracket plane so the T-slot centreline lands in the fold slots' open band."},screw:{name:"M3 × 8 button-heads + washers + T-nuts (GPU ears)",qty:16,dims:"M3 × 0.5 · ISO 7380 + DIN 125 (7 mm OD) + drop-in",build:j1,link:"https://www.amazon.com/dp/B07H14B2XM",links:[{label:"M3 washers, 100 pk (Amazon B0844LJZ3J)",url:"https://www.amazon.com/dp/B0844LJZ3J"},{label:"M3 spring-loaded drop-in T-nuts, 100 pk (Amazon B09B3GXTL1)",url:"https://www.amazon.com/dp/B09B3GXTL1"}],note:"screws $8.89/100 + washers $8.84/100 + spring T-nuts $9.99/100 (verified 2026-07-03) · plain 30 pk alt: BINZZO B085BN2NMF $6.99",desc:"TWO per card: the ear fold carries two open slots on the standard 20.32 mm slot pitch (one over each slot position of the dual-slot bracket), and the factory CAD measures them at 3.0 mm clear — M3 clearance, NOT the 4.4 mm case-screw slot of a consumer bracket, so M3 is the only size that passes. The 7 mm washer spreads the 5.7 mm button head across the open slot; spring-loaded drop-in T-nuts hold their position in the rail while you start the screws blind under the ears."},bracket:{name:"2020 corner brackets (frame joints)",qty:26,dims:"20-series L-brace · M5 bolts + slide nuts included",build:K1,link:"https://www.amazon.com/dp/B0BMLY9MZX",note:"FORRCKY 10-set pack $21.66 ×3 (verified 2026-07-03) — ear rail 2, rear support 2, side-tie legs 4, tie↔rail laps 4, mezzanine leg↔runner 4, leg↔beam 4, deck-rail ends 6 · plus 2 flat splint plates ~110 mm (any 2020 straight/mending plate pack — unverified, ~$8)",desc:"Joins two members where end-taps can't reach: T-nut in each slot, one bracket per joint (the pack ships with its own M5 hardware). Vertical corners at the ear-rail uprights, rear-support legs, side-tie ends and mezzanine legs (top AND bottom, onto the floor runners); lap brackets where the side ties ride the adapter rails; flat corners where the three deck rails butt into the side beams flush at the top face."},riser:{name:"M3 brass standoffs — adapter / board / switch risers",qty:49,dims:"32× 25+6 mm stacks · 17× 8 mm · M3 × 0.5 M-F",build:J1,link:"https://www.amazon.com/dp/B0FB2SKS9T",links:[{label:"M3×6 M-F, 50 pk (HELIFOUNER B0BDQSSHG8)",url:"https://www.amazon.com/dp/B0BDQSSHG8"},{label:"M3×8 M-F, 50 pk (Amazon B01H7MMI4E)",url:"https://www.amazon.com/dp/B01H7MMI4E"},{label:"M3 hex nuts, 100 pk (Amazon B0BLC26S9J)",url:"https://www.amazon.com/dp/B0BLC26S9J"}],note:"25 mm $14.09/50 (PATIKIL B0FB2SKS9T — low stock; SS alt B0GPX4T584) + 6 mm $6.69/50 + 8 mm $6.99/50 + nuts $5.99/100 (verified 2026-07-03)",desc:"One M3 system lifts everything. Adapters: 31 mm stacks (6 mm M-F into a rail T-nut, 25 mm M-F on top, M3×8 + washer through the board into its deeper female) at the 4 plated ø3.4 holes — verified from vendor CAD at x ±4.5, ~5 mm in from each end. Board deck: 9× 8 mm from cross-rail T-nuts. Switches: 4× 8 mm each, stud down through a shelf vent with a hex nut beneath (the 100 × 100 pattern is M3-class per the vendor drawing). Screws, washers and spring T-nuts come from the ear-fastener packs — 65 screws and 57 T-nuts used, one pack of each covers all."},feet:{name:"PSU feet — adhesive PU bumpers",qty:8,dims:"ø18.2 × 15.2 mm · 60–70 Shore A",build:Q1,link:"https://www.amazon.com/dp/B0949K8PDQ",note:"$11.00/14 (Bumper Specialties BS28, verified 2026-07-03) · clear alt B0949DJ6LD",desc:"Under the fan-down PSUs: the inverted fan hub pokes 7.3 mm below the chassis, so 15 mm feet float it 7.7 mm clear of the vented tray and let it breathe. Four per PSU, ~11 N each — loafing for a 3M-Bumpon-class polyurethane pad."},bolt:{name:"M5 × 10 mm button-head screws (ISO 7380)",qty:12,dims:"M5 × 0.8 · 10 mm · pack of 50",link:"https://www.amazon.com/dp/B01H6PKBZA",note:"$7.99/50 (Amazon B01H6PKBZA) · McMaster alt 92095A208 $17.80/100",desc:"The six tray clamps: up through EXISTING vent slots into drop-in T-nuts in the bottom slots of the mezzanine runners (4) and the GPU front rail (2) — the T-nut slides along the member to meet whatever vent is nearby, so nothing needs to line up and nothing gets drilled. 10 mm suits 1.2 mm tray + nut; the corner brackets bring their own bolts."},tnut:{name:"M5 drop-in T-nuts, 2020 slot",qty:8,dims:"6 mm slot · hammer-head, nickel-plated · pack of 100",link:"https://www.amazon.com/dp/B0F1BX43T9",note:"$8.99/100 (Amazon B0F1BX43T9) — drop-in style retrofits an assembled frame",desc:"For every joint that isn't an end-tap: clamping the rails to the shelf and the corner-bracket sides of the rail joints. Hammer-head style quarter-turns into the 6 mm slot after assembly, so joints can be added to the standing frame."},pdu:{name:"Tripp Lite PDUMH20 metered PDU",qty:2,dims:"1U · 120 V/20 A · 5-20P or L5-20P in · 12× 5-15/20R",build:pp,link:"https://assets.tripplite.com/product-pdfs/en/pdumh20.pdf",note:"street ~$200–250 each — ships with both L5-20P and 5-20P plugs; verify at order time",desc:"One per circuit — the PORTABILITY plan: the rig runs anywhere the house offers two dedicated 120 V/20 A circuits (chapel first, basement when finished), no per-location 240 V work. Each leg carries one TX-1600 + its host share ≈ 13.6 A peak, inside a 20 A branch's 16 A continuous limit; a shared 15 A room circuit (12 A cap) is NOT enough. The old range cable remains the upgrade path: an electrician can land it as two 120 V legs (MWBC) or one 240 V/30 A circuit + a single CyberPower PDU41008 for a permanent basement install."},udm:{name:"Ubiquiti UniFi Dream Machine SE",qty:1,dims:"442 × 286 × 44 mm · 1U",build:hp,owned:1,link:"https://store.ui.com/us/en/products/udm-se",price:499,desc:"The existing home gateway, reverse-mounted low in the rack so its port face meets the rear cable channel. Exposes 10G only as SFP+ — bridged to the board's onboard 10GBASE-T for fast model staging (~2 min per 149 GB), not a serving requirement."},xcvr:{name:"Ubiquiti UACC-CM-RJ45-MG transceiver",qty:1,dims:"SFP+ → 10GBASE-T · 100 m on Cat6a",build:fp,link:"https://store.ui.com/us/en/products/uacc-cm-rj45-mg",price:65,desc:`SFP+ to 10GBASE-T RJ45 module in the UDM-SE's spare LAN SFP+ port. Must be the 100 m -MG, not the 30 m -10G — and bought from store.ui.com; several third-party "-MG" listings are 30 m clones reusing the model string.`},cat6a:{name:"Shielded Cat6a S/FTP patch",qty:1,dims:"10 ft (3 m) · S/FTP",build:()=>hr("cat6a"),link:"https://www.fs.com/products/73065.html",price:7,stockMm:[3048],desc:"The 10G staging link: board 10GBASE-T port down the rear cable channel into the -MG transceiver. Shielded S/FTP for 10GBASE-T alien-crosstalk headroom."},mcio:{name:"MCIO 8i Gen5 cable",qty:24,dims:"45/75 cm · 8i (SFF-TA-1016), 85 Ω",build:()=>hr("mcio"),link:"https://c-payne.com/products/mcio-sff-ta-1016-8i-cable-pcie-gen5",price:40,stockMm:[450,750],desc:"PCIe Gen5 data. 8 host→switch + 16 switch→GPU = 24. Every x16 link is two of these."},power12v:{name:"12V-2×6 GPU power",qty:8,dims:"600 W-rated · 16-pin · stock 75 cm (EPS 70 cm)",build:()=>hr("power12v"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSUs (2 native + 3 via 8-pin per unit) · the flagged EPS run takes a 20 cm EPS extension",stockMm:[700,750,900],desc:"One 600 W-rated feed per GPU from a PSU (4 native + 4 via 2×8-pin adapters). One cable per card — never split."},aux6:{name:"PCIe 6-pin aux feed",qty:10,dims:"6-pin · ≤ 75 W · stock 69 cm (+30/50 cm ext where flagged)",build:()=>hr("aux6"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSUs (peripheral leads) · runs beyond 69 cm take cheap 30/50 cm 6-pin extensions — fine at ≤75 W (or use Seasonic's 3-drop daisy leads)",stockMm:[690,990,1190],desc:"≤75 W feeds for the 2 switch boards + 8 device adapters. Low-current, fine to split off spare PSU leads."},atx:{name:"ATX 24-pin + EPS",qty:1,dims:"24-pin · stock 61 cm (+30 cm ext if flagged)",build:()=>hr("atx"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSU · a 30 cm 24-pin extension covers the flagged run",stockMm:[610,910],desc:"Mainboard and CPU power from the host-side PSU."},tie:{name:"Nylon cable ties",qty:1,dims:"2.5 × 100 mm · 100-pack",build:()=>{const i=new le,t=kt(8,3.6,U.cablePlug,18);t.rotation.z=Math.PI/2,i.add(t);for(const e of[3.8,-3.8]){const n=kt(3.4,60,U.cable,12);n.rotation.z=Math.PI/2,n.position.y=e,i.add(n)}return i},note:"any brand — qty is LIVE from the routed loom: one band per tie point (~10 cm spacing on bundles, ~14 cm on solo runs)",desc:"Cinch points for the loom: every multi-cable run is tied every ~10 cm so bundles ride together instead of splaying, and solo runs are tied wherever they pass an anchor mount. The viz pinches the routed cables at each tie."},tiemount:{name:"Adhesive zip-tie mounts (tie-down anchors)",qty:40,dims:"~19 × 19 mm nylon base · fits 2.5 mm ties · 100-pack",build:()=>{const i=new le,t=j(19,3,19,U.cablePlug);t.position.y=1.5,i.add(t);const e=j(8,3.5,19,U.cablePlug);e.position.y=4.5,i.add(e);const n=kt(7,2.2,U.cable,18);return n.rotation.z=Math.PI/2,n.position.y=8,i.add(n),i},link:"https://www.mcmaster.com/products/cable-tie-mounts/",note:"~$10 per 100-pack — qty is LIVE from the routed loom: one wherever a tie lands within reach of a shelf floor, tray lip, rail or panel face; degrease the face first or the foam pad lets go in a warm rack",desc:"What the ties tie TO — the gravity half of cable dressing. Foam-adhesive nylon base, zip tie threads under the saddle. The router places one at every tie station that sits within ~2 cm of structure: the MCIO runs lying on the GPU shelf floor, the power harness riding the shelf's rear lip, the aux feeds along the mezzanine rails. Runs with no mount in reach either hang vertically (gravity keeps them straight) or cross short bridged spans, which the BOM audits."},wall:{name:"Enclosure panels — perforated doors + solid flanks, cut to the frame",qty:5,dims:"2× 572 × 1215 perf 66% (front/rear) + 2× 712 × 1120 solid (sides) + 572 × 716 solid (top) · 16 ga",build:Y1,link:"https://www.mcmaster.com/products/perforated-steel-sheets/",links:[{label:'McNichols round-hole carbon steel (3/8" on 7/16" staggered = 66% open — the chosen pattern)',url:"https://www.mcnichols.com/perforated-metal/round-hole"},{label:"Industrial Metal Supply 16 ga 24×48 sheets (perf price class ~$30–40/sheet)",url:"https://www.industrialmetalsupply.com/perforated-steel-sheet/pss164824750"},{label:"BICSI ≥63% open-area guidance (why open area is the whole game)",url:"https://electronmetal.ca/blogs/series-4000-server-cabinets/server-cabinet-door-types-airflow-security-access-guide"}],note:'PERFORATED: 2× 24"×48" sheets, 3/8" holes on 7/16" staggered = 66% open (ø9.5 mm — big enough for a toddler fingertip, so the solid flanks + interior standoff carry the safety case) · SOLID: 3× 36"×48" plain 16 ga (~$20–30/sheet, cheaper than perf) · set ≈ $130–250. Never window-screen mesh (costs 4–30 °C)',desc:`Cabinet-class architecture — the product class the BICSI numbers describe: perforated front/rear DOORS at 66% open (thermally transparent; measured, a 63%-open door ≈ no door), SOLID sides + roof. The solid flanks are load-bearing for the filter: air only crosses the boundary where it's open, so sealing the sides forces every intake CFM through the filtered door instead of around it — and they're the stronger toddler/cat barrier. Cut to the frame faces: flange-to-flange front/rear from base to top, sides over the post legs (the 600 mm steel base closes the perimeter below), roof over the top brackets. Attachment: front/rear screw into the posts' square-hole columns with the rack's included M6 cage-nut hardware; sides and roof float on rubber-coated stud magnets and lift straight off; every cut edge wears rubber U-channel trim. Toggleable via the "walls" layer.`},wallmount:{name:"Rubber-coated neodymium stud magnets (side/top panels)",qty:16,dims:"ø20–43 mm puck · 1/4-20 stud + nut · ~24 lb pull each",link:"https://www.amazon.com/MUTUACTOR-Neodymium-Magnets-Strong-Hanging/dp/B0DT9BHP4S",links:[{label:"30 lb 4-pack alt (B0DWXFFKRK)",url:"https://www.amazon.com/Strong-Rubber-Coated-Magnets-Threaded/dp/B0DWXFFKRK"}],note:"~$25 per 4-pack × 4 ≈ $100 — 6 per side panel + 4 on the roof; a ~5.5 kg side panel hangs on 6× 24 lb pucks with an order-of-magnitude margin. Front/rear panels need NO purchase: the rack ships with 32 M6 cage nuts + screws + cup washers",desc:'The real "clip-on": the rubber-coated puck grips the steel frame, the stud bolts through the panel, and the whole panel lifts off by hand for service — no tools, no scratched powder coat, and the rubber jacket keeps toddler-pull shear from sliding. Bolted M6 cage-nut columns hold the front/rear panels rigid where the fan kits and filter hang.'},edgetrim:{name:"Rubber U-channel edge trim (panel edges)",qty:1,dims:'1/16" channel · EPDM push-on/adhesive · ~56 ft needed',link:"https://www.amazon.com/Rubber-Self-Adhesive-Protector-Material-Channel/dp/B0BK85WM6S",links:[{label:'Trim-Lok neoprene push-on, 1/16" edge (B00NL4C97E)',url:"https://www.amazon.com/Trim-Lok-Rubber-Edge-Trim-Push/dp/B00NL4C97E"}],note:"~$20–30 for a 100 ft roll (perimeters total ≈ 56 ft) — sheared perforated-sheet edges are SHARP; this is a toddler-adjacent build",desc:"Push-on EPDM channel over every cut panel edge. Cut sheet edges from the perforation pattern are razor-jagged; the trim caps them, quiets panel rattle against the frame, and finishes the DIY panels to look shop-made."},ductfan:{name:'AC Infinity CLOUDLINE T10 — 10" ducted exhaust, the primary mover',qty:1,dims:'10" duct · 1,201 CFM · EC mixed-flow · ≤48 dBA · 249 × 386 × 287 mm body',build:vp,link:"https://acinfinity.com/cloudline-t10-quiet-inline-fan-10-with-temperature-humidity-vpd-controller/",links:[{label:"Amazon listing (B07X7KKDJ9)",url:"https://www.amazon.com/AC-Infinity-CLOUDLINE-T10-Temperature/dp/B07X7KKDJ9"},{label:'10" ducting + clamps (add ~$40–60)',url:"https://acinfinity.com/ducting-accessories/"}],note:"~$250–300 street · promoted from the notes' escalation tier to DAY-ONE by the closed-wall re-spec: rated CFM is free-air, and 120 mm axials deliver roughly half their rating against a filtered door — a mixed-flow EC inline fan holds its curve under static pressure. T10 over T8 (807 CFM, $199) so it loafs: more margin at lower RPM = quieter",desc:"The bulk mover, ducted through the exhaust door at the GPU plume height. CONTROLLER 69 PRO drives speed dynamically off intake temp — it idles near-silent and ramps only when the box warms. The duct run doubles as a muffler and carries the ~3 kW plume away from the rack (far corner, or outside in summer) so the basement near-field stays cooler and quieter. With the two RRF7 zone kits, installed (not rated) exhaust lands ≈ 700–900 CFM — a +8–12 °C rise at full 3 kW, comfortable margin over the ~350 CFM the load strictly needs."},fanwall:{name:"AC Infinity AC-RRF7 rack fan kit — dual 120 mm zone pull",qty:2,dims:"per kit: 2× 132 × 132 × 42 mm · 200 CFM · 26 dBA · 105 mm hole pitch",build:xp,link:"https://acinfinity.com/rack-roof-fan-kit-dual-cooling-fans-with-speed-controller/",links:[{label:"Amazon listing (B07FQLHCXL)",url:"https://www.amazon.com/AC-Infinity-Dual-Fans-Controller-cooling/dp/B07FQLHCXL"}],note:"$69.99 each (acinfinity.com, verified 2026-07-03) · demoted from primary to ZONE PULL by the closed-wall re-spec — the T10 moves the bulk air; these keep the PSU/board bay and the lower gateway bay from pocketing heat · 26 dBA each, controllers link to share one program",desc:"Two dual-120 kits on the exhaust door: one at the PSU/board zone, one at the lower gateway bay — local pull where the T10's draw is weakest, so no stagnant pockets behind the solid flanks. All boundary movers sit on the FRONT door now, the same face the Max-Q blowers and PSU AC ends exhaust through (EXHAUST_FACE flipped 2026-07-04) — hot air leaves in one direction and the rear door is pure filtered intake. Never the roof: cats sleep on warm rack tops."},filter:{name:"Washable coarse intake filter media (cat hair)",qty:1,dims:"540 × 1000 × 12 mm — the rear intake door above the PDU strip · framed, thumb-clipped",build:()=>yp(340,340),link:"https://www.amazon.com/Northwest-Enterprises-Roll-Business-Electrostatic/dp/B08NTB55VP",links:[{label:"LifeSupplyUSA cut-to-fit electrostatic kit (alt)",url:"https://www.amazon.com/LifeSupplyUSA-Vent-Electrostatic-Filtration-size/dp/B08TRWSTZF"}],note:`~$20–30 — Northwest Enterprises washable electrostatic media roll (25 ft × 12 in × 1/8 in, B08NTB55VP); four 12" strips cover the 540 × 1000 frame with roll to spare · the door's bottom 2U stays bare perf so the PDU outlets and cords stay reachable`,desc:"Coarse washable media on the OUTSIDE of the REAR intake door (the fans all moved to the front with the card exhaust), covering the door's perforated area above the PDU strip — partial coverage self-defeats, since air bypasses through bare perf around the pad; with the sides solid this door is the only way in. Cat hair mats where a vacuum reaches in thirty seconds instead of inside the Max-Q blower heatsinks (a teardown). Monthly vacuum; a slow intake-temp creep at constant load on the SensorPush is the filter-fouling alarm."}},ya=[{key:"walls",label:"Enclosure",parts:["wall","filter"]},{key:"fans",label:"Boundary fans",parts:["fanwall","ductfan"]},{key:"rack",label:"Rack frame",parts:["rack"]},{key:"shelves",label:"Shelves",parts:["shelf"]},{key:"gpus",label:"GPUs",parts:["gpu"]},{key:"adapters",label:"Device adapters",parts:["adapter"]},{key:"switches",label:"PCIe switches",parts:["switch"]},{key:"psus",label:"Power supplies",parts:["psu"]},{key:"board",label:"Board + hosts",parts:["board","host"]},{key:"frame",label:"Mount frame",parts:["mount","earRail","screw","bracket","riser","feet"]},{key:"network",label:"Network + power",parts:["udm","xcvr","pdu"]},{key:"cables",label:"Cables + ties",parts:["mcio","power12v","aux6","atx","cat6a","tie","tiemount"]}],tS={gpu:"#76b900",adapter:"#0f9a5c",host:"#0f7a49",switch:"#1c6a44",psu:"#8a5a3c",board:"#202027",rack:"#24242a",shelf:"#42424c",mount:"#9aa0aa",earRail:"#9aa0aa",screw:"#c9a24b",bracket:"#9aa0aa",riser:"#c9a24b",feet:"#141418",udm:"#e6e7ea",xcvr:"#c9a24b",pdu:"#1c1c22",cat6a:"#31517a",mcio:"#131316",power12v:"#262422",aux6:"#33404d",atx:"#262422",tie:"#1b1b21",tiemount:"#1b1b21",wall:"#2b2b33",fanwall:"#969aa4",ductfan:"#24242a",filter:"#3b3e42"},Ep={};for(const i of ya)for(const t of i.parts)Ep[t]=i.key;const Bn=Object.fromEntries(ya.map(i=>[i.key,!0])),Df=typeof location<"u"&&new URLSearchParams(location.search).get("hide");if(Df)for(const i of Df.split(","))i in Bn&&(Bn[i]=!1);function js(i){i.traverse(t=>{const e=Ep[t.userData.part];e&&(t.visible=Bn[e])})}const If=`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="M1.5 8s2.4-4.2 6.5-4.2S14.5 8 14.5 8 12.1 12.2 8 12.2 1.5 8 1.5 8Z"/><circle cx="8" cy="8" r="2.1"/></svg>`,Uf=`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="M1.5 8s2.4-4.2 6.5-4.2S14.5 8 14.5 8 12.1 12.2 8 12.2 1.5 8 1.5 8Z" opacity=".35"/>
  <line x1="2.5" y1="13.5" x2="13.5" y2="2.5"/></svg>`,eS='<svg class="caret" viewBox="0 0 8 8" fill="currentColor"><path d="M1.5 0.5 6.5 4 1.5 7.5Z"/></svg>';function nS(i){const t=document.getElementById("tree"),e=a=>a.parts.filter(o=>Xe[o]&&Xe[o].name),n=ya.map(a=>`
    <section class="grp${Bn[a.key]?"":" off"}" data-grp="${a.key}">
      <div class="grp-row">
        <button class="grp-toggle" aria-expanded="false">${eS}<span class="grp-label">${a.label}</span></button>
        <button class="eye" title="Show or hide ${a.label.toLowerCase()}" aria-pressed="${Bn[a.key]}">${Bn[a.key]?If:Uf}</button>
      </div>
      <div class="leaves">${e(a).map(o=>`
        <button class="leaf" data-part="${o}">
          <i class="sw" style="background:${tS[o]||"#444"}"></i>
          <span class="nm">${Xe[o].name}</span>
          <span class="qty">×${Xe[o].qty}</span>
        </button>`).join("")}
      </div>
    </section>`).join("");t.innerHTML=`
    <div class="tree-head"><span class="lbl">Index</span>
      <div class="tree-presets">
        <button id="layers-all">show all</button>
        <button id="layers-none">look inside</button>
      </div>
    </div>
    <div class="tree-body">${n}</div>
    <p class="tree-note">Left switch feeds cards 1–4, right feeds 5–8 · single GPU row across the 19″</p>`;const s=()=>{for(const a of t.querySelectorAll(".grp")){const o=Bn[a.dataset.grp];a.classList.toggle("off",!o);const c=a.querySelector(".eye");c.innerHTML=o?If:Uf,c.setAttribute("aria-pressed",o)}};t.addEventListener("click",a=>{const o=a.target.closest(".grp-toggle");if(o){const h=o.closest(".grp").classList.toggle("open");o.setAttribute("aria-expanded",h);return}const c=a.target.closest(".eye");if(c){const u=c.closest(".grp").dataset.grp;Bn[u]=!Bn[u],s(),js(i());return}const l=a.target.closest(".leaf");l&&dispatchEvent(new CustomEvent("rig:inspect",{detail:l.dataset.part}))});const r=a=>{for(const o of ya)Bn[o.key]=a(o.key);s(),js(i())};document.getElementById("layers-all").onclick=()=>r(()=>!0),document.getElementById("layers-none").onclick=()=>r(a=>!["walls","fans"].includes(a)),addEventListener("rig:selected",a=>{for(const o of t.querySelectorAll(".leaf")){const c=o.dataset.part===a.detail;o.classList.toggle("sel",c),c&&o.closest(".grp").classList.add("open")}}),addEventListener("rig:closed",()=>{for(const a of t.querySelectorAll(".leaf.sel"))a.classList.remove("sel")})}const se=(i,t)=>(i.userData.part=t,i);function wp(){const i=new le;i.add(se(Bd(),"rack")),i.add(se(X1(),"wall"));for(const z of Lf){const V=se(xp(),"fanwall");V.position.set(0,z.y,z.z+Xs*21),i.add(V)}const t=se(vp(),"ductfan");t.position.set(0,vr.y,vr.z),i.add(t);const e=se(yp(Zo.w,Zo.h),"filter");e.rotation.y=Math.PI,e.position.set(0,Zo.y,Zo.z),i.add(e);const{udmShelfTop:n,switchShelfTop:s,gpuShelfTop:r}=zy,a=[];for(const z of[n,s,r]){const V=se(tp(),"shelf");V.position.y=z,i.add(V),a.push([z,V])}const o={gpuPwr:[],gpuMcio:[],adAux:[],swAux:[],hostMcio:[],boardPwr:[]},c=[-120,120],l=r+op,u=s+58,h=[-90,90],f=-88;h.forEach(z=>{const V=se(cp(!0),"psu");V.position.set(z,u,f),V.rotation.z=Math.PI,i.add(V);for(const ot of[-60,60])for(const Gt of[-85,85]){const $t=se(kt(9,15,U.caster,16),"feet");$t.position.set(z+ot,s+7.5,f+Gt),i.add($t)}});const d=(z,V)=>[h[z]-V[0],u-V[1],f-Nd.L/2-3],g=-130,x=z=>z>0?-1:1;c.forEach(z=>{const V=se(ap(),"switch");V.position.set(z,l,g),z>0&&(V.rotation.y=Math.PI),i.add(V);const ot=x(z);o.swAux.push([z+ot*Lr[0],l+Lr[1],g+ot*Lr[2]])});const m=s+1.5,p=m+20,v=p+86,_=v+20,y=[-158,0,124],b=190,w=[-150,115],S=(z,V,ot,Gt,$t,Te)=>{const He=se(kt(z,V,U.gold,14),"mount");Te==="z"&&(He.rotation.x=Math.PI/2),Te==="x"&&(He.rotation.z=Math.PI/2),He.position.set(ot,Gt,$t),i.add(He)},L=(z,V,ot,Gt,$t,Te)=>{const He=se(j(z,V,ot,U.rail),"mount");He.position.set(Gt,$t,Te),i.add(He)};for(const z of[-1,1]){const V=se(un(285),"mount");V.rotation.y=Math.PI/2,V.position.set(z*b,m+10,-17.5),i.add(V);for(const ot of[-58,34])S(4.7,2.2,z*b,s-2.6,ot,"y")}for(const z of[-1,1])for(const V of w){const ot=se(un(86),"mount");ot.rotation.z=Math.PI/2,ot.position.set(z*b,p+43,V),i.add(ot);const Gt=V<0?1:-1,$t=V+Gt*10;L(17,2.5,18,z*b,p+1.25,$t+Gt*9),L(17,18,2.5,z*b,p+11.5,$t+Gt*1.25),S(4,2,z*b,p+3.5,$t+Gt*12,"y"),S(4,2,z*b,p+15,$t+Gt*4.6,"z"),L(17,2.5,18,z*b,v-1.25,$t+Gt*9),L(17,18,2.5,z*b,v-9,$t+Gt*1.25),S(4,2,z*b,v-3.5,$t+Gt*12,"y"),S(4,2,z*b,v-12,$t+Gt*4.6,"z")}for(const z of[-1,1]){const V=se(un(330),"mount");V.rotation.y=Math.PI/2,V.position.set(z*b,v+10,-17),i.add(V)}for(const z of y){const V=se(un(360),"mount");V.position.set(0,v+10,z),i.add(V);for(const ot of[-1,1])L(2.5,17,18,ot*(180-1.25),v+10,z-19),L(18,17,2.5,ot*171,v+10,z-11.25),S(4,2,ot*(180-3.6),v+10,z-19,"x"),S(4,2,ot*171,v+10,z-13.6,"z")}for(const z of y)for(const V of[-145,0,145]){const ot=se(kt(2.6,8,U.gold,6),"riser");ot.position.set(V,_+4,z),i.add(ot),S(2.9,1.8,V,_+11.2,z,"y")}const M=se(up(),"board");M.position.set(0,_+9,0),i.add(M);const E=_+18;o.boardPwr.push([Zc.atx24[0],E,Zc.atx24[1]],...Zc.eps.map(z=>[z[0],E,z[1]]));const N=_+48,O=Sl+El;F1.forEach(z=>{const V=se(Sp(),"host");V.position.set(z,N,O),V.rotation.y=Math.PI,i.add(V),o.hostMcio.push(...Mp.map(ot=>[z-ot[0],N+ot[1],O-ot[2]]))});const I=n+Hs.H/2,C=-195+Hs.D/2,D=se(hp(),"udm");D.position.set(0,I,C),D.rotation.y=Math.PI,i.add(D);const k=se(fp(),"xcvr");k.position.set(-75,I+Af[1],C-Hs.D/2-12),k.rotation.y=Math.PI,i.add(k);const Y=[jc[0],_+9+jc[1],jc[2]],X=[-75,I+Af[1],C-Hs.D/2-30];for(const z of[22,22+44.45]){const V=se(pp(),"pdu");V.position.set(0,z,-355.6+dp.D/2),V.rotation.y=Math.PI,i.add(V)}const H=bc*Ss,K=H-13,tt=100,it=r+52,$=it+62,nt=tt+41.85-xe.slotZ,lt=r+20;for(const z of xe.holesZ){const V=se(un(K),"mount");V.position.set(0,r+10,nt+z),i.add(V)}const vt=it-Fd.PCB/2-lt;for(let z=0;z<Ss;z++){const V=(z-(Ss-1)/2)*bc,ot=V-xe.slotX,Gt=se(sp(),"adapter");Gt.position.set(ot,it,nt),i.add(Gt);for(const Te of xe.holesZ)for(const He of[-1,1]){const on=se(kt(2.6,vt,U.gold,12),"riser");on.position.set(ot+He*xe.holesX,lt+vt/2,nt+Te),i.add(on)}o.adAux.push([ot+xe.auxX,it-16,nt+xe.auxZ]);const $t=se(ip(),"gpu");$t.position.set(V,$,tt),i.add($t),o.gpuPwr.push([V,$+Fs.H/2-8,tt-(Fs.L/2+6)]),o.gpuMcio.push([ot+xe.mcioX,it-14,nt+xe.mcioZ[0]],[ot+xe.mcioX,it-14,nt+xe.mcioZ[1]])}const dt=$+ep,Tt=tt+Fs.L/2+13.2,Lt=se(un(K),"earRail");Lt.position.set(0,dt-10,Tt),i.add(Lt);for(let z=0;z<Ss;z++){const V=(z-(Ss-1)/2)*bc;for(const ot of np){const Gt=se(kt(2.75,2,U.gold,16),"screw");Gt.position.set(V+ot,dt+1.4+1,Tt),i.add(Gt)}}const Rt=(z,V,ot,Gt)=>{const $t=se(j(18,2.5,17,U.rail),"bracket");$t.position.set(z+Gt*19,V-1.25,ot),i.add($t);const Te=se(j(2.5,18,17,U.rail),"bracket");Te.position.set(z+Gt*11.25,V-11.5,ot),i.add(Te)};for(const z of[-1,1]){const V=dt-20-r,ot=se(un(V),"mount");ot.rotation.z=Math.PI/2,ot.position.set(z*(K/2-10),r+V/2,Tt),i.add(ot),Rt(z*(K/2-10),dt-20,Tt,-z)}const Ut=tt-100,B=$+wf-2-10,xt=se(un(K),"mount");xt.position.set(0,B,Ut),i.add(xt);const rt=se(j(K-2,2,12,U.vent),"mount");rt.position.set(0,$+wf-1,Ut),i.add(rt);for(const z of[-1,1]){const V=B-10-r,ot=se(un(V),"mount");ot.rotation.z=Math.PI/2,ot.position.set(z*(K/2-10),r+V/2,Ut),i.add(ot),Rt(z*(K/2-10),B-10,Ut,-z)}const mt=(z,V,ot)=>{L(18,2.5,17,z+ot*9,r+21.25,V),L(2.5,18,17,z+ot*1.25,r+29,V),S(4,2,z+ot*12,r+23.5,V,"y"),S(4,2,z+ot*4.6,r+32,V,"x")},st=(z,V,ot)=>{L(17,2.5,18,z,r+18.75,V+ot*9),L(17,18,2.5,z,r+11,V+ot*1.25),S(4,2,z,r+16.5,V+ot*12,"y"),S(4,2,z,r+8,V+ot*4.6,"z")},Dt=nt+xe.holesZ[0],wt=nt+xe.holesZ[1];for(const z of[-1,1]){const V=z*(K/2-10),ot=se(un(80),"mount");ot.rotation.y=Math.PI/2,ot.position.set(V,r+30,Ut+50),i.add(ot),st(V,Ut+10,1),mt(V-z*10,Dt,-z);const Gt=se(un(56.5),"mount");Gt.rotation.y=Math.PI/2,Gt.position.set(V,r+30,Tt-38.25),i.add(Gt),st(V,Tt-10,-1),mt(V-z*10,wt,-z);const $t=se(j(2.5,17,110,U.rail),"bracket");$t.position.set(z*(K/2-21.25),r+26,135),i.add($t),S(4,2,z*(K/2-23.35),r+30,85,"x"),S(4,2,z*(K/2-23.35),r+30,185,"x")}for(const z of[-108,108])S(4.7,2.2,z,r-2.6,Dt,"y");i.updateMatrixWorld(!0);const R=[],T=[],q=new Set(["wall","filter","fanwall"]),ht=z=>{for(let V=z;V;V=V.parent)if(V.userData.part!==void 0)return V.userData.part;return null},ut=(z,V)=>{R.push(V),q.has(ht(z))||T.push(V)};i.traverse(z=>{if(z.userData.solidBoxes)for(const V of z.userData.solidBoxes)ut(z,new ue(new A(V[0],V[1],V[2]),new A(V[3],V[4],V[5])).applyMatrix4(z.matrixWorld));if(z.isMesh&&!z.userData.noCollide){const V=new ue().setFromObject(z);V.isEmpty()||ut(z,V)}});const at=new Set(["gpu","switch","psu","board","host","adapter","mount","earRail","screw","bracket","riser","feet"]),Pt=[];i.traverse(z=>{at.has(z.userData.part)&&Pt.push(new ue().setFromObject(z))}),R.push(new ue(new A(-H/2-10,$+Fs.H/2+2,tt-65),new A(H/2+10,$+Fs.H/2+62,tt+100)));for(const z of c)R.push(new ue(new A(z-52,l+26,g-52),new A(z+52,l+81,g+52)));for(const z of h)R.push(new ue(new A(z-76,s-62,f-106),new A(z+76,s-4,f+106)));{const z=(V,ot,Gt)=>{const $t=vr.z-Xs*2,Te=vr.z-Xs*Gt;R.push(new ue(new A(-170,V-ot,Math.min($t,Te)),new A(170,V+ot,Math.max($t,Te))))};for(const V of Lf)z(V.y,90,62);z(vr.y,140,82)}let Mt=null;i.userData.router={fails:0,overuse:0,rounds:0,looms:0,floating:0,maxFreeSpanMm:0,ties:0,mounts:0,debugVoxels:()=>(Mt??=new bp(R,{bias:Ar,normalBoxes:Pt})).debugVoxels()};const Et=[0,1,0],Nt=[0,-1,0],zt=[0,0,-1],ct=[],Xt=(z,V,ot,Gt)=>ct.push({a:z,b:V,type:ot,r:By(ot),opts:Gt}),Yt=(z,V)=>[z+x(z)*Is.device[V][0],l+Is.device[V][1],g+x(z)*Is.device[V][2]],Vt=(z,V)=>[z+x(z)*Is.host[V][0],l+Is.host[V][1],g+x(z)*Is.host[V][2]],Ft=(z,V)=>[x(z)*V[0],V[1],x(z)*V[2]],bt=(z,V)=>z>0&&V===3,F=(z,V)=>bt(z,V)?Yt(z,3):Vt(z,V),gt=(z,V)=>Ft(z,bt(z,V)?Yo.device[3]:Yo.host[V]),It=(z,V)=>bt(z,V)?Vt(z,3):Yt(z,V),At=(z,V)=>Ft(z,bt(z,V)?Yo.host[3]:Yo.device[V]),ft=(z,V)=>bt(z,V)?$o.device[3]:$o.host[V],G=(z,V)=>bt(z,V)?$o.host[3]:$o.device[V];for(let z=0;z<Ss;z++){const V=z<4?c[0]:c[1],ot=z%4;Xt(o.gpuMcio[z*2],It(V,ot*2),"mcio",{na:Nt,nb:At(V,ot*2),tb:G(V,ot*2)}),Xt(o.gpuMcio[z*2+1],It(V,ot*2+1),"mcio",{na:Nt,nb:At(V,ot*2+1),tb:G(V,ot*2+1)})}[0,1,2,3].sort((z,V)=>o.hostMcio[z*2][0]-o.hostMcio[V*2][0]).forEach((z,V)=>{const ot=V<2?c[0]:c[1],Gt=V%2,$t={loom:`hostup-${V<2?0:1}`};Xt(o.hostMcio[z*2],F(ot,Gt*2),"mcio",{na:Et,nb:gt(ot,Gt*2),tb:ft(ot,Gt*2),...$t}),Xt(o.hostMcio[z*2+1],F(ot,Gt*2+1),"mcio",{na:Et,nb:gt(ot,Gt*2+1),tb:ft(ot,Gt*2+1),...$t})});const St=[je.hpwr[0],je.hpwr[1],je.cpu8[3],je.cpu8[4],je.cpu8[5]],Ht=-203,Ot=757,ne=[St.slice(0,5).reduce((z,V)=>z+(h[0]-V[0]),0)/5,St.slice(0,3).reduce((z,V)=>z+(h[1]-V[0]),0)/3];o.gpuPwr.forEach((z,V)=>{const ot=V<5?0:1;Xt(d(ot,St[V<5?V:V-5]),z,"power12v",{na:zt,nb:zt,loom:`gpupwr-${ot}`,wps:[[ne[ot],Ot,Ht],[z[0],Ot,Ht]]})}),o.swAux.forEach((z,V)=>Xt(d(V,je.peri[4]),z,"aux6",{na:zt,nb:Et})),o.adAux.forEach((z,V)=>{const ot=V<4?0:1;Xt(d(ot,je.peri[V%4]),z,"aux6",{na:zt,nb:Nt,loom:`auxfeed-${ot}`,wps:[[h[ot],700,Ht]]})}),Xt(d(1,je.mb18),o.boardPwr[0],"atx",{na:zt,nb:Et,tb:[1,0,0]}),Xt(d(1,je.cpu8[0]),o.boardPwr[1],"power12v",{na:zt,nb:Et}),Xt(d(1,je.cpu8[1]),o.boardPwr[2],"power12v",{na:zt,nb:Et}),Xt(Y,X,"cat6a",{na:zt,nb:zt});const Jt=z=>[z.min.x,z.min.y,z.min.z,z.max.x,z.max.y,z.max.z],pe={boxes:R.map(Jt),normalBoxes:Pt.map(Jt),supportBoxes:T.map(Jt),bias:Ar.slice(),jobs:ct.map(z=>({a:z.a,b:z.b,type:z.type,r:z.r,opts:{na:z.opts.na,nb:z.opts.nb,loom:z.opts.loom,wps:z.opts.wps}}))},de=new Array(ct.length).fill(null),ce=(z,{vias:V,na:ot,nb:Gt})=>{de[z]&&i.remove(de[z]);const $t=ct[z];de[z]=Dd($t.a,$t.b,{type:$t.type,vias:V,na:ot,nb:Gt,ta:$t.opts.ta,tb:$t.opts.tb}),js(de[z]),i.add(de[z])},ye=z=>{z.routed.forEach((V,ot)=>ce(ot,V));for(const V of z.bands){const ot=se(kt(V.r,2.4,U.cablePlug,18),"tie");ot.position.set(...V.c),ot.quaternion.setFromUnitVectors(new A(0,1,0),new A(...V.tang)),ot.userData.noCollide=!0,i.add(ot)}for(const V of z.mounts||[]){const ot=se(j(16,3.4,16,U.cablePlug),"tiemount");ot.position.set(...V.p),ot.quaternion.setFromUnitVectors(new A(0,1,0),new A(...V.n)),ot.userData.noCollide=!0,i.add(ot)}Object.assign(i.userData.router,z.stats),js(i);for(const[V,ot]of a){const Gt=[];i.traverse($t=>{if(!$t.userData.samples)return;const Te=$t.userData.samples;for(let He=1;He<Te.length;He++){const on=Te[He-1],es=Te[He];if((on.y-V)*(es.y-V)>0)continue;const Wr=(V-on.y)/(es.y-on.y||1e-9);Gt.push([on.x+(es.x-on.x)*Wr,on.z+(es.z-on.z)*Wr])}}),D1(ot,Gt)}};if(typeof Worker>"u"){const z=Z1(pe),V=i.userData.router;i.userData.router=z.router,i.userData.router.debugVoxels||=V.debugVoxels,ye(z)}else{const z=new Worker(new URL(""+new URL("route.worker-mrw1uEf2.js",import.meta.url).href,import.meta.url),{type:"module"});z.postMessage(pe),i.userData.stopRouting=()=>z.terminate(),z.onmessage=V=>{const ot=V.data;if(ot.kind==="net"){ce(ot.i,ot);return}ot.kind==="done"&&(console.info("[route]",ot.stats),ye(ot),z.terminate())}}return i}const Tp=document.getElementById("info"),Ma=document.getElementById("info-canvas"),iS=document.getElementById("info-title"),sS=document.getElementById("info-dims"),rS=document.getElementById("info-qty"),oS=document.getElementById("info-desc"),aS=document.getElementById("info-link"),ts=new Ol({canvas:Ma,antialias:!0,alpha:!0});ts.setPixelRatio(Math.min(devicePixelRatio,2));ts.toneMapping=Ll;ts.toneMappingExposure=1.42;ts.outputColorSpace=De;const Ki=new zl;Ki.environment=new da(ts).fromScene(new Ld,.04).texture;Ki.add(new Rd(13490677,3026488,1.6));const Ap=new Hr(16777215,1.9);Ap.position.set(60,120,90);Ki.add(Ap);const Rp=new Hr(10467583,1);Rp.position.set(-80,30,-50);Ki.add(Rp);const zr=new en(40,1,.5,8e3),si=new Pd(zr,Ma);si.enableDamping=!0;si.enablePan=!1;si.autoRotate=!0;si.autoRotateSpeed=1.6;let Fi=null,Dr=null;function cS(){const i=Ma.clientWidth||320,t=Ma.clientHeight||240;ts.setSize(i,t,!1),zr.aspect=i/t,zr.updateProjectionMatrix()}function Cp(i,t){const e=Xe[i];if(!e)return;iS.textContent=e.name;const n=t&&t.userData.lengthMm;sS.textContent=(e.dims||"")+(n?` · this run ≈ ${(n/10).toFixed(1)} cm`:""),rS.textContent=e.qty?`×${e.qty} in this build`:"",oS.textContent=e.desc||"";const s=[e.link&&{label:"product page",url:e.link},...e.links||[]].filter(Boolean);if(aS.innerHTML=s.map(r=>`<div class="link-row"><a href="${r.url}" target="_blank" rel="noopener">${r.label} ↗</a><span class="src">${new URL(r.url).hostname.replace(/^www\./,"")}</span></div>`).join(""),Tp.classList.add("open"),cS(),Fi&&Ki.remove(Fi),Fi=e.build?e.build():null,Fi){Ki.add(Fi);const r=new ue().setFromObject(Fi),a=r.getCenter(new A),o=r.getSize(new A);Fi.position.sub(a);const c=Math.max(o.x,o.y,o.z,40)*1.6+30;zr.position.set(c*.7,c*.5,c),si.target.set(0,0,0),si.minDistance=c*.3,si.maxDistance=c*5,si.update()}Dr||Pp()}function Pp(){Dr=requestAnimationFrame(Pp),si.update(),ts.render(Ki,zr)}function Lp(){Tp.classList.remove("open"),Dr&&(cancelAnimationFrame(Dr),Dr=null),dispatchEvent(new CustomEvent("rig:closed"))}document.getElementById("info-close").onclick=Lp;const Kc=["mcio","power12v","aux6","atx","cat6a"];function Nf(i){for(let t=i;t;t=t.parent)if(t.userData&&t.userData.part!==void 0)return t.userData.part;return null}function Ql(i,{margin:t=1.5,skipEnds:e=4}={}){i.updateMatrixWorld(!0);const n=[];i.traverse(r=>{if(r.userData.solidBoxes){const l=Nf(r);if(l!==null&&!Kc.includes(l))for(const u of r.userData.solidBoxes){const h=new ue(new A(u[0],u[1],u[2]),new A(u[3],u[4],u[5])).applyMatrix4(r.matrixWorld).expandByScalar(-t);h.isEmpty()||n.push({part:l,box:h})}}if(!r.isMesh||r.isInstancedMesh||r.userData.noCollide)return;const a=Nf(r);if(a===null||Kc.includes(a))return;const o=new ue().setFromObject(r).expandByScalar(-t),c=r.userData.floor&&r.userData.holes?r.userData.holes.map(([l,u])=>[l,r.getWorldPosition(new A).z+u]):null;o.isEmpty()||n.push({part:a,box:o,holes:c})});const s={};return i.traverse(r=>{if(!Kc.includes(r.userData.part)||!r.userData.samples)return;const a=r.userData.samples,o=a[0],c=a[a.length-1],l=new Set;for(let u=e;u<a.length-e;u++)if(!(a[u].distanceTo(o)<35||a[u].distanceTo(c)<35)){for(const h of n)if(!l.has(h.part)&&h.box.containsPoint(a[u])){const f=a[u];if(h.holes&&h.holes.some(([g,x])=>Math.abs(f.x-g)<=15&&Math.abs(f.z-x)<=9))continue;const d=`${r.userData.part} → ${h.part}`;s[d]=(s[d]||0)+1,l.add(h.part)}}}),s}const lS=["mcio","power12v","aux6","atx"],Dp=1.12;function Ip(i){const t={};return i.traverse(e=>{lS.includes(e.userData.part)&&e.userData.lengthMm&&(t[e.userData.part]||=[]).push(e.userData.lengthMm)}),t}function Up(i,t){const e=i*Dp;for(const n of t)if(e<=n)return n;return null}function uS(i,t){const e=t[i];if(!e||!e.length)return"";const n=Math.min(...e),s=Math.max(...e);let r="";if(Xe[i].stockMm){const a={};let o=0;for(const l of e){const u=Up(l,Xe[i].stockMm);u===null?o++:a[u]=(a[u]||0)+1}const c=Object.entries(a).map(([l,u])=>`${u}× ${l/10} cm`).join(" + ");r=o?` · <span class="bom-bad">⚠ ${o} run${o>1?"s":""} too long for stock</span>`:` · ${Xe[i].price!=null?`buy ${c}`:`stock fits (${c})`} <span class="bom-ok">✓</span>`}return`runs ${(n/10).toFixed(1)}–${(s/10).toFixed(1)} cm${r}`}function hS(i,t){const e=[],n=i.userData.router?i.userData.router.fails:0;e.push(n?`<span class="bom-bad">⚠ ${n} cable route${n>1?"s":""} found no collision-free path</span>`:'<span class="bom-ok">✓</span> all cable routes found a collision-free path');const s=Ql(i),r=Object.keys(s).length;e.push(r?`<span class="bom-bad">⚠ wires passing through parts: ${Object.entries(s).map(([l,u])=>`${l} (${u})`).join(", ")}</span>`:'<span class="bom-ok">✓</span> no wire passes through a component');const a=t.mcio||[],o=a.filter(l=>Up(l,Xe.mcio.stockMm)===null).length;if(a.length){const l=Math.max(...a);e.push(o?`<span class="bom-bad">⚠ ${o} MCIO run(s) exceed the 75 cm stock cable (longest ${(l/10).toFixed(1)} cm + slack)</span>`:`<span class="bom-ok">✓</span> every MCIO run fits stock cable (longest ${(l/10).toFixed(1)} cm routed, ×${Dp} slack ≤ 75 cm)`)}const c=i.userData.router||{};if(c.ties){const l=((c.maxFreeSpanMm||0)/10).toFixed(1);e.push(c.floating?`<span class="bom-bad">⚠ ${c.floating} cable${c.floating>1?"s":""} float${c.floating>1?"":"s"} unsupported for over 20 cm (longest free span ${l} cm)</span>`:`<span class="bom-ok">✓</span> no floating cables: every run rests, hangs, or is tied down (${c.ties} ties, ${c.mounts} mounts; longest free span ${l} cm)`)}return e}const Jc=i=>`€${i.toLocaleString("en-US")}`;function Np(i){const t={tie:0,tiemount:0};return i.traverse(e=>{e.userData.part in t&&t[e.userData.part]++}),t}function fS(i){const t=Ip(i),e=Np(i);let n=0,s=0;const r=Object.entries(Xe).map(([a,o])=>{const c=e[a]||o.qty,l=o.owned||0,u=c-l,h=o.price!=null?o.price*u:null;h!=null?n+=h:!o.note&&u>0&&s++;const f=o.link?`<a href="${o.link}" target="_blank" rel="noopener">${o.name} ↗</a>`:o.name,d=[l?`${l} owned`:"",o.note||"",uS(a,t)].filter(Boolean).join(" · ");return`<tr>
      <td class="n">${c}×</td>
      <td>${f}</td>
      <td class="n">${o.price!=null?Jc(o.price):"—"}</td>
      <td class="n">${h!=null?h?Jc(h):'<span class="bom-ok">owned</span>':"—"}</td>
      <td class="notes">${d}</td>
    </tr>`}).join("");document.getElementById("bom-body").innerHTML=`
    <table>
      <thead><tr><th class="n">Qty</th><th>Part</th><th class="n">Unit</th><th class="n">To buy</th><th>Notes — live from this layout</th></tr></thead>
      <tbody>${r}</tbody>
    </table>
    <div id="bom-checks"><h3>Verification</h3>${hS(i,t).map(a=>`<div>${a}</div>`).join("")}</div>`,document.getElementById("bom-total").textContent=`priced items: ${Jc(n)}${s?` · +${s} unpriced (see links)`:""}`}function dS(i){const t=Ip(i),e=Np(i),n=a=>`"${String(a).replaceAll('"','""')}"`,s=[["qty","part","unit_eur","owned","to_buy_eur","link","notes"].join(",")];for(const[a,o]of Object.entries(Xe)){const c=e[a]||o.qty,l=o.owned||0,u=c-l,h=t[a],f=[o.note||"",h?`routed runs cm: ${h.map(d=>(d/10).toFixed(1)).join(" ")}`:""].filter(Boolean).join(" | ");s.push([c,n(o.name),o.price??"",l,o.price!=null?o.price*u:"",o.link||"",n(f)].join(","))}const r=document.createElement("a");r.href=URL.createObjectURL(new Blob([s.join(`
`)],{type:"text/csv"})),r.download="rig-bom.csv",r.click(),URL.revokeObjectURL(r.href)}function pS(i){const t=document.getElementById("bom");document.getElementById("bom-btn").onclick=()=>{fS(i()),t.classList.add("open")},document.getElementById("bom-close").onclick=()=>t.classList.remove("open"),t.addEventListener("pointerdown",e=>{e.target===t&&t.classList.remove("open")}),document.getElementById("bom-csv").onclick=()=>dS(i())}const Fp=document.getElementById("loader"),mS=document.getElementById("loader-label"),Op=document.getElementById("loader-fill"),Bp=document.getElementById("loader-pct");await N1(void 0,(i,t)=>{const e=t?Math.min(100,Math.round(i/t*100)):0;Op.style.width=`${e}%`,Bp.textContent=`${e}%`});mS.textContent="ASSEMBLING RIG";Op.style.width="100%";Bp.textContent="100%";await new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(i)));const ra=new URLSearchParams(location.search).get("part"),Wn=!!(ra&&Xe[ra]&&Xe[ra].build),gS=document.getElementById("app"),Ye=new zl;Ye.background=new re(Wn?1120294:Od);Wn||(Ye.fog=new Bl(Od,2800,5600));const wn=new en(42,innerWidth/innerHeight,5,12e3),rn=new Ol({antialias:!0});rn.setSize(innerWidth,innerHeight);rn.setPixelRatio(Math.min(devicePixelRatio,2));rn.toneMapping=Ll;rn.toneMappingExposure=1.42;rn.outputColorSpace=De;gS.appendChild(rn.domElement);const _S=new da(rn);Ye.environment=_S.fromScene(new Ld,.04).texture;Ye.add(new Rd(13490677,3026488,Wn?1.7:1.5));const zp=new Hr(16777215,Wn?2.6:2);zp.position.set(900,1600,1100);Ye.add(zp);const kp=new Hr(10467583,Wn?1.5:1.1);kp.position.set(-1e3,500,-700);Ye.add(kp);const Hp=new Hr(16770752,.75);Hp.position.set(200,400,-1200);Ye.add(Hp);let ze=Wn?Xe[ra].build():wp();Wn||js(ze);Ye.add(ze);const Ff=6072575,Ce=new Pd(wn,rn.domElement);Ce.enableDamping=!0;Ce.autoRotateSpeed=1;let Gn;if(Wn){const i=new ue().setFromObject(ze),t=i.getCenter(new A),e=i.getSize(new A),n=Math.max(e.x,e.y,e.z)*1.9+60;Gn={pos:[t.x+n*.85,t.y+n*.5,t.z+n],target:t.toArray()},Ce.autoRotate=!0,Ce.minDistance=30,Ce.maxDistance=4e3;const s=new zh(Math.max(e.x,e.z)*5,20,2240838,1318187);s.position.set(t.x,i.min.y-6,t.z),Ye.add(s)}else{Gn={pos:[720,900,1240],target:[0,470,0]},Ce.autoRotate=!1,Ce.minDistance=380,Ce.maxDistance=5200,Ce.maxPolarAngle=Math.PI*.54;const i=new oe(new Ta(6e3,6e3),new ma({color:527636,metalness:.1,roughness:.95}));i.rotation.x=-Math.PI/2,i.position.y=-173,Ye.add(i);const t=new zh(4400,44,2240838,1186600);t.position.y=-172,Ye.add(t)}const Tl=new URLSearchParams(location.search).get("cam");if(Tl){const[i,t,e,n,s,r]=Tl.split(",").map(Number);Gn={pos:[i,t,e],target:[n,s,r]},Ce.autoRotate=!1,Ce.minDistance=10}wn.position.set(...Gn.pos);Ce.target.set(...Gn.target);Ce.update();window.__viz={camera:wn,controls:Ce,HOME:Gn,object:ze};window.__collisions=()=>Ql(ze);const Of=new Ny,Bf=new pt;let _n=null,Sr=null,_i=null;const Al=[];function Ua(){_n&&(Ye.remove(_n),_n.geometry&&_n.geometry.dispose(),_n.material&&_n.material.dispose(),_n=null);for(const[i,t]of Al)i.material.dispose(),i.material=t;Al.length=0}function Gp(i){if(!i.userData.samples){_n=new Fy(i,Ff),Ye.add(_n);return}i.traverse(t=>{if(!t.isMesh)return;const e=t.material.clone();e.emissive=new re(Ff),e.emissiveIntensity=.55,Al.push([t,t.material]),t.material=e})}rn.domElement.addEventListener("pointerdown",i=>{Sr=[i.clientX,i.clientY]});rn.domElement.addEventListener("pointerup",i=>{if(!Sr)return;const t=Math.hypot(i.clientX-Sr[0],i.clientY-Sr[1]);if(Sr=null,t>5||i.button!==0)return;const e=rn.domElement.getBoundingClientRect();Bf.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),Of.setFromCamera(Bf,wn);const n=Of.intersectObject(ze,!0).find(r=>{for(let a=r.object;a;a=a.parent)if(!a.visible)return!1;return!0});let s=n&&n.object;for(;s&&s.userData.part===void 0;)s=s.parent;s&&s.userData.part&&Xe[s.userData.part]&&(Cp(s.userData.part,s),Ua(),Gp(s),dispatchEvent(new CustomEvent("rig:selected",{detail:s.userData.part})))});addEventListener("rig:inspect",i=>{const t=i.detail;if(!Xe[t])return;let e=null;ze.traverse(n=>{!e&&n.userData.part===t&&(e=n)}),Cp(t,e),Ua(),e&&Gp(e),dispatchEvent(new CustomEvent("rig:selected",{detail:t}))});addEventListener("rig:closed",Ua);addEventListener("keydown",i=>{i.key==="Escape"&&(document.getElementById("bom").classList.remove("open"),Lp())});function Vp(){_i&&(_i.removeFromParent(),_i.geometry.dispose(),_i.material.dispose(),_i=null)}function zf(){Ye.remove(ze),ze=wp(),js(ze),Ye.add(ze),window.__viz.object=ze,window.__collisions=()=>Ql(ze),Ua(),Vp()}Wn?(document.getElementById("bom-btn").style.display="none",document.getElementById("titleblock").style.display="none",document.getElementById("tree").style.display="none"):(pS(()=>ze),nS(()=>ze));Wn||(window.__addBias=i=>(Ar.push(i),zf(),Ar.slice()),window.__clearBias=()=>{Ar.length=0,zf()},addEventListener("keydown",i=>{i.key.toLowerCase()==="v"&&(_i?Vp():ze.userData.router&&(_i=ze.userData.router.debugVoxels(),ze.add(_i)))}));const Rl=document.getElementById("spin");Rl.textContent=Ce.autoRotate?"Pause spin":"Start spin";Rl.onclick=()=>{Ce.autoRotate=!Ce.autoRotate,Rl.textContent=Ce.autoRotate?"Pause spin":"Start spin"};document.getElementById("fit").onclick=()=>{wn.position.set(...Gn.pos),Ce.target.set(...Gn.target),Ce.update()};addEventListener("resize",()=>{wn.aspect=innerWidth/innerHeight,wn.updateProjectionMatrix(),rn.setSize(innerWidth,innerHeight)});let Cl=!1;rn.setAnimationLoop(()=>{Cl||Ce.update(),_n&&_n.isBoxHelper&&_n.update(),rn.render(Ye,wn)});Fp.classList.add("done");setTimeout(()=>Fp.remove(),700);const xS=!!Tl||matchMedia("(prefers-reduced-motion: reduce)").matches;if(!xS){const i=new A(...Gn.pos),t=new A(...Gn.target),e=i.clone().sub(t).applyAxisAngle(new A(0,1,0),-.62).multiplyScalar(1.9).add(t).add(new A(0,300,0)),n=performance.now(),s=2600;Cl=!0,wn.position.copy(e),wn.lookAt(t);const r=()=>{const a=Math.min(1,(performance.now()-n)/s),o=1-Math.pow(1-a,3),c=new A().lerpVectors(e,i,o);c.sub(t).applyAxisAngle(new A(0,1,0),-.1*(1-o)).add(t),wn.position.copy(c),wn.lookAt(t),a<1?requestAnimationFrame(r):Cl=!1};requestAnimationFrame(r)}
