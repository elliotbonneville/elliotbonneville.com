(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="160",qi={ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vd=0,Al=1,yd=2,tf=1,Md=2,Wn=3,In=0,Ve=1,cn=2,ui=0,Rs=1,wl=2,Rl=3,Pl=4,Sd=5,Ri=100,Ed=101,bd=102,Cl=103,Ll=104,Td=200,Ad=201,wd=202,Rd=203,Ac=204,wc=205,Pd=206,Cd=207,Ld=208,Dd=209,Id=210,Ud=211,Nd=212,Od=213,Fd=214,Bd=0,zd=1,kd=2,ko=3,Hd=4,Gd=5,Vd=6,Wd=7,ef=0,Xd=1,qd=2,hi=0,Yd=1,Zd=2,jd=3,$d=4,Kd=5,Jd=6,nf=300,Ls=301,Ds=302,Rc=303,Pc=304,Qo=306,Cc=1e3,En=1001,Lc=1002,qe=1003,Dl=1004,ga=1005,on=1006,Qd=1007,xr=1008,fi=1009,tp=1010,ep=1011,tl=1012,sf=1013,oi=1014,ai=1015,vr=1016,rf=1017,of=1018,Ii=1020,np=1021,bn=1023,ip=1024,sp=1025,Ui=1026,Is=1027,rp=1028,af=1029,op=1030,cf=1031,lf=1033,_a=33776,xa=33777,va=33778,ya=33779,Il=35840,Ul=35841,Nl=35842,Ol=35843,uf=36196,Fl=37492,Bl=37496,zl=37808,kl=37809,Hl=37810,Gl=37811,Vl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,jl=37818,$l=37819,Kl=37820,Jl=37821,Ma=36492,Ql=36494,tu=36495,ap=36283,eu=36284,nu=36285,iu=36286,hf=3e3,Ni=3001,cp=3200,lp=3201,ff=0,up=1,ln="",Be="srgb",Zn="srgb-linear",el="display-p3",ta="display-p3-linear",Ho="linear",he="srgb",Go="rec709",Vo="p3",Zi=7680,su=519,hp=512,fp=513,dp=514,df=515,pp=516,mp=517,gp=518,_p=519,ru=35044,ou="300 es",Dc=1035,qn=2e3,Wo=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=Math.PI/180,Ic=180/Math.PI;function Os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function xp(i,t){return(i%t+t)%t}function Sa(i,t,e){return(1-e)*i+e*t}function au(i){return(i&i-1)===0&&i!==0}function Uc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vp={DEG2RAD:Io};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,a,o,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],b=s[2],E=s[5],S=s[8];return r[0]=a*x+o*y+c*b,r[3]=a*m+o*_+c*E,r[6]=a*p+o*v+c*S,r[1]=l*x+u*y+f*b,r[4]=l*m+u*_+f*E,r[7]=l*p+u*v+f*S,r[2]=h*x+d*y+g*b,r[5]=h*m+d*_+g*E,r[8]=h*p+d*v+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new Zt;function pf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){const i=Xo("canvas");return i.style.display="block",i}const cu={};function lr(i){i in cu||(cu[i]=!0,console.warn(i))}const lu=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uu=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[Zn]:{transfer:Ho,primaries:Go,toReference:i=>i,fromReference:i=>i},[Be]:{transfer:he,primaries:Go,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ta]:{transfer:Ho,primaries:Vo,toReference:i=>i.applyMatrix3(uu),fromReference:i=>i.applyMatrix3(lu)},[el]:{transfer:he,primaries:Vo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uu),fromReference:i=>i.applyMatrix3(lu).convertLinearToSRGB()}},Mp=new Set([Zn,ta]),ce={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Cr[t].toReference,s=Cr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Cr[i].primaries},getTransfer:function(i){return i===ln?Ho:Cr[i].transfer}};function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ba(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class mf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=Xo("canvas")),ji.width=t.width,ji.height=t.height;const n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ps(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ps(e[n]/255)*255):e[n]=Ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sp=0;class gf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Os(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ta(s[a].image)):r.push(Ta(s[a]))}else r=Ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ep=0;class en extends Vi{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=En,s=En,r=on,a=xr,o=bn,c=fi,l=en.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Os(),this.name="",this.source=new gf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ni?Be:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cc:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cc:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Be?Ni:hf}set encoding(t){lr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ni?Be:ln}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=nf;en.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(d+1)/2,b=(p+1)/2,E=(u+h)/4,S=(f+x)/4,C=(g+m)/4;return _>v&&_>b?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=S/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=C/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=S/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-x)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bp extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(lr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?Be:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends bp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _f extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tp extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const h=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==h||l!==d||u!==g){let m=1-o;const p=c*h+l*d+u*g+f*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const b=Math.sqrt(_),E=Math.atan2(b,p*y);m=Math.sin(m*E)/b,o=Math.sin(o*E)/b}const v=o*y;if(c=c*m+h*v,l=l*m+d*v,u=u*m+g*v,f=f*m+x*v,m===1-o){const b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-o*d,t[e+2]=l*g+u*d+o*h-c*f,t[e+3]=u*g-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new w,hu=new zi;class Pe{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Dr.subVectors(this.max,Vs),$i.subVectors(t.a,Vs),Ki.subVectors(t.b,Vs),Ji.subVectors(t.c,Vs),Kn.subVectors(Ki,$i),Jn.subVectors(Ji,Ki),vi.subVectors($i,Ji);let e=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-vi.z,vi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,vi.z,0,-vi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-vi.y,vi.x,0];return!wa(e,$i,Ki,Ji,Dr)||(e=[1,0,0,0,1,0,0,0,1],!wa(e,$i,Ki,Ji,Dr))?!1:(Ir.crossVectors(Kn,Jn),e=[Ir.x,Ir.y,Ir.z],wa(e,$i,Ki,Ji,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new w,new w,new w,new w,new w,new w,new w,new w],_n=new w,Lr=new Pe,$i=new w,Ki=new w,Ji=new w,Kn=new w,Jn=new w,vi=new w,Vs=new w,Dr=new w,Ir=new w,yi=new w;function wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);const o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),c=t.dot(yi),l=e.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ap=new Pe,Ws=new w,Ra=new w;class Wi{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Ra)),this.expandByPoint(Ws.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new w,Pa=new w,Ur=new w,Qn=new w,Ca=new w,Nr=new w,La=new w;class Fs{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pa.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Pa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=Qn.dot(this.direction),c=-Qn.dot(Ur),l=Qn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*c-o,h=a*o-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pa).addScaledVector(Ur,h),d}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){Ca.subVectors(e,t),Nr.subVectors(n,t),La.crossVectors(Ca,Nr);let a=this.direction.dot(La),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const c=o*this.direction.dot(Nr.crossVectors(Qn,Nr));if(c<0)return null;const l=o*this.direction.dot(Ca.cross(Qn));if(l<0||c+l>a)return null;const u=-o*Qn.dot(La);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,c,l,u,f,h,d,g,x,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,f,h,d,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,f,h,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,d=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h+x*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,x=l*f;e[0]=h-x*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,d=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){const h=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=a*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wp,t,Rp)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ti.crossVectors(n,Je),ti.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ti.crossVectors(n,Je)),ti.normalize(),Or.crossVectors(Je,ti),s[0]=ti.x,s[4]=Or.x,s[8]=Je.x,s[1]=ti.y,s[5]=Or.y,s[9]=Je.y,s[2]=ti.z,s[6]=Or.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],b=n[15],E=s[0],S=s[4],C=s[8],M=s[12],T=s[1],I=s[5],U=s[9],z=s[13],L=s[2],N=s[6],k=s[10],Z=s[14],$=s[3],Y=s[7],tt=s[11],et=s[15];return r[0]=a*E+o*T+c*L+l*$,r[4]=a*S+o*I+c*N+l*Y,r[8]=a*C+o*U+c*k+l*tt,r[12]=a*M+o*z+c*Z+l*et,r[1]=u*E+f*T+h*L+d*$,r[5]=u*S+f*I+h*N+d*Y,r[9]=u*C+f*U+h*k+d*tt,r[13]=u*M+f*z+h*Z+d*et,r[2]=g*E+x*T+m*L+p*$,r[6]=g*S+x*I+m*N+p*Y,r[10]=g*C+x*U+m*k+p*tt,r[14]=g*M+x*z+m*Z+p*et,r[3]=y*E+_*T+v*L+b*$,r[7]=y*S+_*I+v*N+b*Y,r[11]=y*C+_*U+v*k+b*tt,r[15]=y*M+_*z+v*Z+b*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*o*h+n*l*h+s*o*d-n*c*d)+x*(+e*c*d-e*l*h+r*a*h-s*a*d+s*l*u-r*c*u)+m*(+e*l*f-e*o*d-r*a*f+n*a*d+r*o*u-n*l*u)+p*(-s*o*u-e*c*f+e*o*h+s*a*f-n*a*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=f*m*l-x*h*l+x*c*d-o*m*d-f*c*p+o*h*p,_=g*h*l-u*m*l-g*c*d+a*m*d+u*c*p-a*h*p,v=u*x*l-g*f*l+g*o*d-a*x*d-u*o*p+a*f*p,b=g*f*c-u*x*c-g*o*h+a*x*h+u*o*m-a*f*m,E=e*y+n*_+s*v+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=y*S,t[1]=(x*h*r-f*m*r-x*s*d+n*m*d+f*s*p-n*h*p)*S,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*S,t[3]=(f*c*r-o*h*r-f*s*l+n*h*l+o*s*d-n*c*d)*S,t[4]=_*S,t[5]=(u*m*r-g*h*r+g*s*d-e*m*d-u*s*p+e*h*p)*S,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*S,t[7]=(a*h*r-u*c*r+u*s*l-e*h*l-a*s*d+e*c*d)*S,t[8]=v*S,t[9]=(g*f*r-u*x*r-g*n*d+e*x*d+u*n*p-e*f*p)*S,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*p+e*o*p)*S,t[11]=(u*o*r-a*f*r-u*n*l+e*f*l+a*n*d-e*o*d)*S,t[12]=b*S,t[13]=(u*x*s-g*f*s+g*n*h-e*x*h-u*n*m+e*f*m)*S,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*S,t[15]=(a*f*s-u*o*s+u*n*c-e*f*c-a*n*h+e*o*h)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,g=r*f,x=a*u,m=a*f,p=o*f,y=c*l,_=c*u,v=c*f,b=n.x,E=n.y,S=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+v)*b,s[2]=(g-_)*b,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(h+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+_)*S,s[9]=(m-y)*S,s[10]=(1-(h+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const a=Qi.set(s[4],s[5],s[6]).length(),o=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/r,u=1/a,f=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=qn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let d,g;if(o===qn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Wo)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qn){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(a-r),h=(e+t)*l,d=(n+s)*u;let g,x;if(o===qn)g=(a+r)*f,x=-2*f;else if(o===Wo)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new w,xn=new te,wp=new w(0,0,0),Rp=new w(1,1,1),ti=new w,Or=new w,Je=new w,fu=new te,du=new zi;class ea{constructor(t=0,e=0,n=0,s=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pp=0;const pu=new w,ts=new zi,Bn=new te,Fr=new w,Xs=new w,Cp=new w,Lp=new zi,mu=new w(1,0,0),gu=new w(0,1,0),_u=new w(0,0,1),Dp={type:"added"},Ip={type:"removed"};class Ce extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new w,e=new ea,n=new zi,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Zt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(mu,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(_u,t)}translateOnAxis(t,e){return pu.copy(t).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mu,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(_u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Xs,Fr,this.up):Bn.lookAt(Fr,Xs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Bn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Dp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ip)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new w(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new w,zn=new w,Da=new w,kn=new w,es=new w,ns=new w,xu=new w,Ia=new w,Ua=new w,Na=new w;let Br=!1;class pe{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),zn.subVectors(n,e),Da.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(zn),c=vn.dot(Da),l=zn.dot(zn),u=zn.dot(Da),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(a,kn.y),c.addScaledVector(o,kn.z),c)}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),zn.subVectors(t,e),vn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),pe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return pe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;es.subVectors(s,n),ns.subVectors(r,n),Ia.subVectors(t,n);const c=es.dot(Ia),l=ns.dot(Ia);if(c<=0&&l<=0)return e.copy(n);Ua.subVectors(t,s);const u=es.dot(Ua),f=ns.dot(Ua);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(es,a);Na.subVectors(t,r);const d=es.dot(Na),g=ns.dot(Na);if(g>=0&&d<=g)return e.copy(r);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ns,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return xu.subVectors(r,s),o=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(xu,o);const p=1/(m+x+h);return a=x*p,o=h*p,e.copy(n).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=xp(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Oa(a,r,t+1/3),this.g=Oa(a,r,t),this.b=Oa(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ce.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Oe(Ge.r*255,0,255))*65536+Math.round(Oe(Ge.g*255,0,255))*256+Math.round(Oe(Ge.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Be){ce.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(zr);const n=Sa(ei.h,zr.h,e),s=Sa(ei.s,zr.s,e),r=Sa(ei.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Qt;Qt.NAMES=xf;let Up=0;class Bs extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Rs,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=wc,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==wc&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class na extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new w,kr=new ct;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ru,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ru&&(t.usage=this.usage),t}}class vf extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yf extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xe extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Np=0;const sn=new te,Fa=new Ce,is=new w,Qe=new Pe,qs=new Pe,Ne=new w;class ze extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pf(t)?yf:vf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Qe.min,qs.min),Qe.expandByPoint(Ne),Ne.addVectors(Qe.max,qs.max),Qe.expandByPoint(Ne)):(Qe.expandByPoint(qs.min),Qe.expandByPoint(qs.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ne.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(t,l),Ne.add(is)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<o;T++)l[T]=new w,u[T]=new w;const f=new w,h=new w,d=new w,g=new ct,x=new ct,m=new ct,p=new w,y=new w;function _(T,I,U){f.fromArray(s,T*3),h.fromArray(s,I*3),d.fromArray(s,U*3),g.fromArray(a,T*2),x.fromArray(a,I*2),m.fromArray(a,U*2),h.sub(f),d.sub(f),x.sub(g),m.sub(g);const z=1/(x.x*m.y-m.x*x.y);isFinite(z)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(z),y.copy(d).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(z),l[T].add(p),l[I].add(p),l[U].add(p),u[T].add(y),u[I].add(y),u[U].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,I=v.length;T<I;++T){const U=v[T],z=U.start,L=U.count;for(let N=z,k=z+L;N<k;N+=3)_(n[N+0],n[N+1],n[N+2])}const b=new w,E=new w,S=new w,C=new w;function M(T){S.fromArray(r,T*3),C.copy(S);const I=l[T];b.copy(I),b.sub(S.multiplyScalar(S.dot(I))).normalize(),E.crossVectors(C,I);const z=E.dot(u[T])<0?-1:1;c[T*4]=b.x,c[T*4+1]=b.y,c[T*4+2]=b.z,c[T*4+3]=z}for(let T=0,I=v.length;T<I;++T){const U=v[T],z=U.start,L=U.count;for(let N=z,k=z+L;N<k;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new w,r=new w,a=new w,o=new w,c=new w,l=new w,u=new w,f=new w;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[d++]}return new Le(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vu=new te,Mi=new Fs,Hr=new Wi,yu=new w,ss=new w,rs=new w,os=new w,Ba=new w,Gr=new w,Vr=new ct,Wr=new ct,Xr=new ct,Mu=new w,Su=new w,Eu=new w,qr=new w,Yr=new w;class $t extends Ce{constructor(t=new ze,e=new na){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(Ba.fromBufferAttribute(f,t),a?Gr.addScaledVector(Ba,u):Gr.addScaledVector(Ba.sub(e),u))}e.add(Gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Hr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Hr,yu)===null||Mi.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(vu.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(vu),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=_;v<b;v+=3){const E=o.getX(v),S=o.getX(v+1),C=o.getX(v+2);s=Zr(this,p,t,n,l,u,f,E,S,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const y=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Zr(this,a,t,n,l,u,f,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=_;v<b;v+=3){const E=v,S=v+1,C=v+2;s=Zr(this,p,t,n,l,u,f,E,S,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const y=m,_=m+1,v=m+2;s=Zr(this,a,t,n,l,u,f,y,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Op(i,t,e,n,s,r,a,o){let c;if(t.side===Ve?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===In,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Yr);return l<e.near||l>e.far?null:{distance:l,point:Yr.clone(),object:i}}function Zr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ss),i.getVertexPosition(c,rs),i.getVertexPosition(l,os);const u=Op(i,t,e,n,ss,rs,os,qr);if(u){s&&(Vr.fromBufferAttribute(s,o),Wr.fromBufferAttribute(s,c),Xr.fromBufferAttribute(s,l),u.uv=pe.getInterpolation(qr,ss,rs,os,Vr,Wr,Xr,new ct)),r&&(Vr.fromBufferAttribute(r,o),Wr.fromBufferAttribute(r,c),Xr.fromBufferAttribute(r,l),u.uv1=pe.getInterpolation(qr,ss,rs,os,Vr,Wr,Xr,new ct),u.uv2=u.uv1),a&&(Mu.fromBufferAttribute(a,o),Su.fromBufferAttribute(a,c),Eu.fromBufferAttribute(a,l),u.normal=pe.getInterpolation(qr,ss,rs,os,Mu,Su,Eu,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new w,materialIndex:0};pe.getNormal(ss,rs,os,f.normal),u.face=f}return u}class Xi extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(f,2));function g(x,m,p,y,_,v,b,E,S,C,M){const T=v/S,I=b/C,U=v/2,z=b/2,L=E/2,N=S+1,k=C+1;let Z=0,$=0;const Y=new w;for(let tt=0;tt<k;tt++){const et=tt*I-z;for(let gt=0;gt<N;gt++){const j=gt*T-U;Y[x]=j*y,Y[m]=et*_,Y[p]=L,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(gt/S),f.push(1-tt/C),Z+=1}}for(let tt=0;tt<C;tt++)for(let et=0;et<S;et++){const gt=h+et+N*tt,j=h+et+N*(tt+1),it=h+(et+1)+N*(tt+1),_t=h+(et+1)+N*tt;c.push(gt,j,_t),c.push(j,it,_t),$+=6}o.addGroup(d,$,M),d+=$,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function Fp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mf(i){return i.getRenderTarget()===null?i.outputColorSpace:ce.workingColorSpace}const Bp={clone:Us,merge:Xe};var zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sf extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class an extends Sf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,cs=1;class Hp extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(as,cs,t,e);s.layers=this.layers,this.add(s);const r=new an(as,cs,t,e);r.layers=this.layers,this.add(r);const a=new an(as,cs,t,e);a.layers=this.layers,this.add(a);const o=new an(as,cs,t,e);o.layers=this.layers,this.add(o);const c=new an(as,cs,t,e);c.layers=this.layers,this.add(c);const l=new an(as,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ef extends en{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gp extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(lr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ni?Be:ln),this.texture=new Ef(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xi(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ui});r.uniforms.tEquirect.value=e;const a=new $t(s,r),o=e.minFilter;return e.minFilter===xr&&(e.minFilter=on),new Hp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const za=new w,Vp=new w,Wp=new Zt;class Sn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=za.subVectors(n,e).cross(Vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wp.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Wi,jr=new w;class il{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(c-r,h-l,m-d,v-p).normalize(),n[1].setComponents(c+r,h+l,m+d,v+p).normalize(),n[2].setComponents(c+a,h+u,m+g,v+y).normalize(),n[3].setComponents(c-a,h-u,m-g,v-y).normalize(),n[4].setComponents(c-o,h-f,m-x,v-_).normalize(),e===qn)n[5].setComponents(c+o,h+f,m+x,v+_).normalize();else if(e===Wo)n[5].setComponents(o,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(jr.x=s.normal.x>0?t.max.x:t.min.x,jr.y=s.normal.y>0?t.max.y:t.min.y,jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xp(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,u){const f=l.array,h=l.usage,d=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,l),d.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let x=0,m=g.length;x<m;x++){const p=g[x];e?i.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):i.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,s(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:a,remove:o,update:c}}class ia extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const y=p*h-a;for(let _=0;_<l;_++){const v=_*f-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const _=y+l*p,v=y+l*(p+1),b=y+1+l*(p+1),E=y+1+l*p;d.push(_,v,E),d.push(v,b,E)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.width,t.height,t.widthSegments,t.heightSegments)}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`
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
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#endif`,Xm=`struct PhysicalMaterial {
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
}`,qm=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
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
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,Qg=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,x0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,E0=`uniform float rotation;
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
}`,b0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:jp,alphatest_fragment:$p,alphatest_pars_fragment:Kp,aomap_fragment:Jp,aomap_pars_fragment:Qp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:om,clipping_planes_fragment:am,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:lm,clipping_planes_vertex:um,color_fragment:hm,color_pars_fragment:fm,color_pars_vertex:dm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:_m,displacementmap_pars_vertex:xm,displacementmap_vertex:vm,emissivemap_fragment:ym,emissivemap_pars_fragment:Mm,colorspace_fragment:Sm,colorspace_pars_fragment:Em,envmap_fragment:bm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Am,envmap_pars_vertex:wm,envmap_physical_pars_fragment:zm,envmap_vertex:Rm,fog_vertex:Pm,fog_pars_vertex:Cm,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Im,lightmap_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Fm,lights_pars_begin:Bm,lights_toon_fragment:km,lights_toon_pars_fragment:Hm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:Zm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Jm,map_fragment:Qm,map_pars_fragment:tg,map_particle_fragment:eg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphcolor_vertex:rg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:cg,normal_fragment_begin:lg,normal_fragment_maps:ug,normal_pars_fragment:hg,normal_pars_vertex:fg,normal_vertex:dg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:xg,opaque_fragment:vg,packing:yg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:Eg,dithering_pars_fragment:bg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Cg,skinbase_vertex:Lg,skinning_pars_vertex:Dg,skinning_vertex:Ig,skinnormal_vertex:Ug,specularmap_fragment:Ng,specularmap_pars_fragment:Og,tonemapping_fragment:Fg,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:kg,uv_pars_fragment:Hg,uv_pars_vertex:Gg,uv_vertex:Vg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:jg,cube_frag:$g,depth_vert:Kg,depth_frag:Jg,distanceRGBA_vert:Qg,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:c0,meshmatcap_vert:l0,meshmatcap_frag:u0,meshnormal_vert:h0,meshnormal_frag:f0,meshphong_vert:d0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:x0,points_vert:v0,points_frag:y0,shadow_vert:M0,shadow_frag:S0,sprite_vert:E0,sprite_frag:b0},dt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Pn={basic:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Xe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Xe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Xe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Xe([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Xe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Xe([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Xe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Xe([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Xe([dt.common,dt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Xe([dt.lights,dt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Pn.physical={uniforms:Xe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const $r={r:0,b:0,g:0};function T0(i,t,e,n,s,r,a){const o=new Qt(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),y=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Qo)?(u===void 0&&(u=new $t(new Xi(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Us(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ce.getTransfer(_.colorSpace)!==he,(f!==_||h!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new $t(new ia(2,2),new ki({name:"BackgroundMaterial",uniforms:Us(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ce.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB($r,Mf(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:g}}function A0(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function f(L,N,k,Z,$){let Y=!1;if(a){const tt=x(Z,k,N);l!==tt&&(l=tt,d(l.object)),Y=p(L,Z,k,$),Y&&y(L,Z,k,$)}else{const tt=N.wireframe===!0;(l.geometry!==Z.id||l.program!==k.id||l.wireframe!==tt)&&(l.geometry=Z.id,l.program=k.id,l.wireframe=tt,Y=!0)}$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,C(L,N,k,Z),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,N,k){const Z=k.wireframe===!0;let $=o[L.id];$===void 0&&($={},o[L.id]=$);let Y=$[N.id];Y===void 0&&(Y={},$[N.id]=Y);let tt=Y[Z];return tt===void 0&&(tt=m(h()),Y[Z]=tt),tt}function m(L){const N=[],k=[],Z=[];for(let $=0;$<s;$++)N[$]=0,k[$]=0,Z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:Z,object:L,attributes:{},index:null}}function p(L,N,k,Z){const $=l.attributes,Y=N.attributes;let tt=0;const et=k.getAttributes();for(const gt in et)if(et[gt].location>=0){const it=$[gt];let _t=Y[gt];if(_t===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor)),it===void 0||it.attribute!==_t||_t&&it.data!==_t.data)return!0;tt++}return l.attributesNum!==tt||l.index!==Z}function y(L,N,k,Z){const $={},Y=N.attributes;let tt=0;const et=k.getAttributes();for(const gt in et)if(et[gt].location>=0){let it=Y[gt];it===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const _t={};_t.attribute=it,it&&it.data&&(_t.data=it.data),$[gt]=_t,tt++}l.attributes=$,l.attributesNum=tt,l.index=Z}function _(){const L=l.newAttributes;for(let N=0,k=L.length;N<k;N++)L[N]=0}function v(L){b(L,0)}function b(L,N){const k=l.newAttributes,Z=l.enabledAttributes,$=l.attributeDivisors;k[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),$[L]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),$[L]=N)}function E(){const L=l.newAttributes,N=l.enabledAttributes;for(let k=0,Z=N.length;k<Z;k++)N[k]!==L[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function S(L,N,k,Z,$,Y,tt){tt===!0?i.vertexAttribIPointer(L,N,k,$,Y):i.vertexAttribPointer(L,N,k,Z,$,Y)}function C(L,N,k,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const $=Z.attributes,Y=k.getAttributes(),tt=N.defaultAttributeValues;for(const et in Y){const gt=Y[et];if(gt.location>=0){let j=$[et];if(j===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const it=j.normalized,_t=j.itemSize,At=e.get(j);if(At===void 0)continue;const St=At.buffer,It=At.type,Ft=At.bytesPerElement,Tt=n.isWebGL2===!0&&(It===i.INT||It===i.UNSIGNED_INT||j.gpuType===sf);if(j.isInterleavedBufferAttribute){const Ot=j.data,O=Ot.stride,ft=j.offset;if(Ot.isInstancedInterleavedBuffer){for(let Q=0;Q<gt.locationSize;Q++)b(gt.location+Q,Ot.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let Q=0;Q<gt.locationSize;Q++)v(gt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Q=0;Q<gt.locationSize;Q++)S(gt.location+Q,_t/gt.locationSize,It,it,O*Ft,(ft+_t/gt.locationSize*Q)*Ft,Tt)}else{if(j.isInstancedBufferAttribute){for(let Ot=0;Ot<gt.locationSize;Ot++)b(gt.location+Ot,j.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ot=0;Ot<gt.locationSize;Ot++)v(gt.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Ot=0;Ot<gt.locationSize;Ot++)S(gt.location+Ot,_t/gt.locationSize,It,it,_t*Ft,_t/gt.locationSize*Ot*Ft,Tt)}}else if(tt!==void 0){const it=tt[et];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(gt.location,it);break;case 3:i.vertexAttrib3fv(gt.location,it);break;case 4:i.vertexAttrib4fv(gt.location,it);break;default:i.vertexAttrib1fv(gt.location,it)}}}}E()}function M(){U();for(const L in o){const N=o[L];for(const k in N){const Z=N[k];for(const $ in Z)g(Z[$].object),delete Z[$];delete N[k]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const k in N){const Z=N[k];for(const $ in Z)g(Z[$].object),delete Z[$];delete N[k]}delete o[L.id]}function I(L){for(const N in o){const k=o[N];if(k[L.id]===void 0)continue;const Z=k[L.id];for(const $ in Z)g(Z[$].object),delete Z[$];delete k[L.id]}}function U(){z(),u=!0,l!==c&&(l=c,d(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:U,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:v,disableUnusedAttributes:E}}function w0(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),e.update(f,r,1)}function c(u,f,h){if(h===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,f,h),e.update(f,r,h)}function l(u,f,h){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=f[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function R0(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,v=a||t.has("OES_texture_float"),b=_&&v,E=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:E}}function P0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Sn,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,_=y*4;let v=p.clippingState||null;c.value=v,v=u(g,h,_,d);for(let b=0;b!==_;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)a.copy(f[_]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function C0(i){let t=new WeakMap;function e(a,o){return o===Rc?a.mapping=Ls:o===Pc&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rc||o===Pc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gp(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Tf extends Sf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=4,bu=[.125,.215,.35,.446,.526,.582],Pi=20,ka=new Tf,Tu=new Qt;let Ha=null,Ga=0,Va=0;const Ai=(1+Math.sqrt(5))/2,ls=1/Ai,Au=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Ai,ls),new w(0,Ai,-ls),new w(ls,0,Ai),new w(-ls,0,Ai),new w(Ai,ls,0),new w(-Ai,ls,0)];class wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ga,Va),t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:vr,format:bn,colorSpace:Zn,depthBuffer:!1},s=Ru(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(r)),this._blurMaterial=D0(r,t,e)}return s}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s){const o=new an(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Tu),u.toneMapping=hi,u.autoClear=!1;const d=new na({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new $t(new Xi,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Tu),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;Kr(s,y*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ls||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Au[(s-1)%Au.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const p=[];let y=0;for(let S=0;S<Pi;++S){const C=S/x,M=Math.exp(-C*C/2);p.push(M),S===0?y+=M:S<m&&(y+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const v=this._sizeLods[s],b=3*v*(s>_-Es?s-_+Es:0),E=4*(this._cubeSize-v);Kr(e,b,E,3*v,2*v),c.setRenderTarget(e),c.render(f,ka)}}function L0(i){const t=[],e=[],n=[];let s=i;const r=i-Es+1+bu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Es?c=bu[a-i+Es-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){const S=E%3*2/3-1,C=E>2?0:-1,M=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];y.set(M,x*g*E),_.set(h,m*g*E);const T=[E,E,E,E,E,E];v.set(T,p*g*E)}const b=new ze;b.setAttribute("position",new Le(y,x)),b.setAttribute("uv",new Le(_,m)),b.setAttribute("faceIndex",new Le(v,p)),t.push(b),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ru(i,t,e){const n=new Bi(i,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function D0(i,t,e){const n=new Float32Array(Pi),s=new w(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Pu(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Cu(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function I0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Rc||c===Pc,u=c===Ls||c===Ds;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new wu(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&s(f)){e===null&&(e=new wu(i));const h=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function U0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function N0(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(f){const h=[],d=f.index,g=f.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let _=0,v=y.length;_<v;_+=3){const b=y[_+0],E=y[_+1],S=y[_+2];h.push(b,E,E,S,S,b)}}else if(g!==void 0){const y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){const b=_+0,E=_+1,S=_+2;h.push(b,E,E,S,S,b)}}else return;const m=new(pf(h)?yf:vf)(h,1);m.version=x;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function O0(i,t,e,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,g){i.drawElements(r,g,o,d*c),e.update(g,r,1)}function f(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,x),e.update(g,r,x)}function h(d,g,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function F0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function B0(i,t){return i[0]-t[0]}function z0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function k0(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new se,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let x=r.get(u);if(x===void 0||x.count!==g){let L=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let C=0;y===!0&&(C=1),_===!0&&(C=2),v===!0&&(C=3);let M=u.attributes.position.count*C,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const I=new Float32Array(M*T*4*g),U=new _f(I,M,T,g);U.type=ai,U.needsUpdate=!0;const z=C*4;for(let N=0;N<g;N++){const k=b[N],Z=E[N],$=S[N],Y=M*T*4*N;for(let tt=0;tt<k.count;tt++){const et=tt*z;y===!0&&(a.fromBufferAttribute(k,tt),I[Y+et+0]=a.x,I[Y+et+1]=a.y,I[Y+et+2]=a.z,I[Y+et+3]=0),_===!0&&(a.fromBufferAttribute(Z,tt),I[Y+et+4]=a.x,I[Y+et+5]=a.y,I[Y+et+6]=a.z,I[Y+et+7]=0),v===!0&&(a.fromBufferAttribute($,tt),I[Y+et+8]=a.x,I[Y+et+9]=a.y,I[Y+et+10]=a.z,I[Y+et+11]=$.itemSize===4?a.w:1)}}x={count:g,texture:U,size:new ct(M,T)},r.set(u,x),u.addEventListener("dispose",L)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const d=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<d;_++){const v=g[_];v[0]=_,v[1]=h[_]}g.sort(z0);for(let _=0;_<8;_++)_<d&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(B0);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const v=o[_],b=v[0],E=v[1];b!==Number.MAX_SAFE_INTEGER&&E?(x&&u.getAttribute("morphTarget"+_)!==x[b]&&u.setAttribute("morphTarget"+_,x[b]),m&&u.getAttribute("morphNormal"+_)!==m[b]&&u.setAttribute("morphNormal"+_,m[b]),s[_]=E,p+=E):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const y=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function H0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Af extends en{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=oi),n===void 0&&u===Is&&(n=Ii),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wf=new en,Rf=new Af(1,1);Rf.compareFunction=df;const Pf=new _f,Cf=new Tp,Lf=new Ef,Lu=[],Du=[],Iu=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sa(i,t){let e=Du[t];e===void 0&&(e=new Int32Array(t),Du[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),Ie(e,n)}}function Y0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Uu.set(n),i.uniformMatrix3fv(this.addr,!1,Uu),Ie(e,n)}}function Z0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Iu.set(n),i.uniformMatrix4fv(this.addr,!1,Iu),Ie(e,n)}}function j0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function t_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function i_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Rf:wf;e.setTexture2D(t||r,s)}function s_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cf,s)}function r_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lf,s)}function o_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pf,s)}function a_(i){switch(i){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return j0;case 35667:case 35671:return $0;case 35668:case 35672:return K0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(i,t){i.uniform1fv(this.addr,t)}function l_(i,t){const e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function u_(i,t){const e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function h_(i,t){const e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function f_(i,t){const e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function d_(i,t){const e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function p_(i,t){const e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function m_(i,t){i.uniform1iv(this.addr,t)}function g_(i,t){i.uniform2iv(this.addr,t)}function __(i,t){i.uniform3iv(this.addr,t)}function x_(i,t){i.uniform4iv(this.addr,t)}function v_(i,t){i.uniform1uiv(this.addr,t)}function y_(i,t){i.uniform2uiv(this.addr,t)}function M_(i,t){i.uniform3uiv(this.addr,t)}function S_(i,t){i.uniform4uiv(this.addr,t)}function E_(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||wf,r[a])}function b_(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cf,r[a])}function T_(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Lf,r[a])}function A_(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Pf,r[a])}function w_(i){switch(i){case 5126:return c_;case 35664:return l_;case 35665:return u_;case 35666:return h_;case 35674:return f_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return v_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}class R_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=a_(e.type)}}class P_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w_(e.type)}}class C_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Ou(i,t){i.seq.push(t),i.map[t.id]=t}function L_(i,t,e){const n=i.name,s=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),a=Wa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ou(e,l===void 0?new R_(o,i,t):new P_(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new C_(o),Ou(e,f)),e=f}}}class Uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);L_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Fu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const D_=37297;let I_=0;function U_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function N_(i){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(i);let n;switch(t===e?n="":t===Vo&&e===Go?n="LinearDisplayP3ToLinearSRGB":t===Go&&e===Vo&&(n="LinearSRGBToLinearDisplayP3"),i){case Zn:case ta:return[n,"LinearTransferOETF"];case Be:case el:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Bu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+U_(i.getShaderSource(t),a)}else return s}function O_(i,t){const e=N_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function F_(i,t){let e;switch(t){case Yd:e="Linear";break;case Zd:e="Reinhard";break;case jd:e="OptimizedCineon";break;case $d:e="ACESFilmic";break;case Jd:e="AgX";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function B_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bs).join(`
`)}function z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bs).join(`
`)}function k_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function bs(i){return i!==""}function zu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ku(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(G_,W_)}const V_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function W_(i,t){let e=Wt[t];if(e===void 0){const n=V_.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}const X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(i){return i.replace(X_,q_)}function q_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Z_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case Qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function $_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ef:t="ENVMAP_BLENDING_MULTIPLY";break;case Xd:t="ENVMAP_BLENDING_MIX";break;case qd:t="ENVMAP_BLENDING_ADD";break}return t}function K_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function J_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Y_(e),l=Z_(e),u=j_(e),f=$_(e),h=K_(e),d=e.isWebGL2?"":B_(e),g=z_(e),x=k_(r),m=s.createProgram();let p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),y.length>0&&(y+=`
`)):(p=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),y=[d,Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==hi?F_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,O_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),a=Nc(a),a=zu(a,e),a=ku(a,e),o=Nc(o),o=zu(o,e),o=ku(o,e),a=Hu(a),o=Hu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const v=_+p+a,b=_+y+o,E=Fu(s,s.VERTEX_SHADER,v),S=Fu(s,s.FRAGMENT_SHADER,b);s.attachShader(m,E),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function C(U){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(E).trim(),N=s.getShaderInfoLog(S).trim();let k=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,S);else{const $=Bu(s,E,"vertex"),Y=Bu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+$+`
`+Y)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||N==="")&&(Z=!1);Z&&(U.diagnostics={runnable:k,programLog:z,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:y}})}s.deleteShader(E),s.deleteShader(S),M=new Uo(s,m),T=H_(s,m)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,D_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=S,this}let Q_=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ex(t),e.set(t,n)),n}}class ex{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}}function nx(i,t,e,n,s,r,a){const o=new nl,c=new tx,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,T,I,U,z){const L=U.fog,N=z.geometry,k=M.isMeshStandardMaterial?U.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),$=Z&&Z.mapping===Qo?Z.image.height:null,Y=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=tt!==void 0?tt.length:0;let gt=0;N.morphAttributes.position!==void 0&&(gt=1),N.morphAttributes.normal!==void 0&&(gt=2),N.morphAttributes.color!==void 0&&(gt=3);let j,it,_t,At;if(Y){const Ee=Pn[Y];j=Ee.vertexShader,it=Ee.fragmentShader}else j=M.vertexShader,it=M.fragmentShader,c.update(M),_t=c.getVertexShaderID(M),At=c.getFragmentShaderID(M);const St=i.getRenderTarget(),It=z.isInstancedMesh===!0,Ft=z.isBatchedMesh===!0,Tt=!!M.map,Ot=!!M.matcap,O=!!Z,ft=!!M.aoMap,Q=!!M.lightMap,lt=!!M.bumpMap,J=!!M.normalMap,wt=!!M.displacementMap,xt=!!M.emissiveMap,R=!!M.metalnessMap,A=!!M.roughnessMap,G=M.anisotropy>0,ot=M.clearcoat>0,st=M.iridescence>0,nt=M.sheen>0,bt=M.transmission>0,pt=G&&!!M.anisotropyMap,yt=ot&&!!M.clearcoatMap,Lt=ot&&!!M.clearcoatNormalMap,kt=ot&&!!M.clearcoatRoughnessMap,rt=st&&!!M.iridescenceMap,ee=st&&!!M.iridescenceThicknessMap,qt=nt&&!!M.sheenColorMap,Bt=nt&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,vt=!!M.specularColorMap,D=!!M.specularIntensityMap,ut=bt&&!!M.transmissionMap,Rt=bt&&!!M.thicknessMap,Et=!!M.gradientMap,at=!!M.alphaMap,B=M.alphaTest>0,ht=!!M.alphaHash,mt=!!M.extensions,Ut=!!N.attributes.uv1,Dt=!!N.attributes.uv2,Kt=!!N.attributes.uv3;let Jt=hi;return M.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Jt=i.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:it,defines:M.defines,customVertexShaderID:_t,customFragmentShaderID:At,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ft,instancing:It,instancingColor:It&&z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Zn,map:Tt,matcap:Ot,envMap:O,envMapMode:O&&Z.mapping,envMapCubeUVHeight:$,aoMap:ft,lightMap:Q,bumpMap:lt,normalMap:J,displacementMap:h&&wt,emissiveMap:xt,normalMapObjectSpace:J&&M.normalMapType===up,normalMapTangentSpace:J&&M.normalMapType===ff,metalnessMap:R,roughnessMap:A,anisotropy:G,anisotropyMap:pt,clearcoat:ot,clearcoatMap:yt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:kt,iridescence:st,iridescenceMap:rt,iridescenceThicknessMap:ee,sheen:nt,sheenColorMap:qt,sheenRoughnessMap:Bt,specularMap:Ct,specularColorMap:vt,specularIntensityMap:D,transmission:bt,transmissionMap:ut,thicknessMap:Rt,gradientMap:Et,opaque:M.transparent===!1&&M.blending===Rs,alphaMap:at,alphaTest:B,alphaHash:ht,combine:M.combine,mapUv:Tt&&x(M.map.channel),aoMapUv:ft&&x(M.aoMap.channel),lightMapUv:Q&&x(M.lightMap.channel),bumpMapUv:lt&&x(M.bumpMap.channel),normalMapUv:J&&x(M.normalMap.channel),displacementMapUv:wt&&x(M.displacementMap.channel),emissiveMapUv:xt&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:pt&&x(M.anisotropyMap.channel),clearcoatMapUv:yt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&x(M.sheenRoughnessMap.channel),specularMapUv:Ct&&x(M.specularMap.channel),specularColorMapUv:vt&&x(M.specularColorMap.channel),specularIntensityMapUv:D&&x(M.specularIntensityMap.channel),transmissionMapUv:ut&&x(M.transmissionMap.channel),thicknessMapUv:Rt&&x(M.thicknessMap.channel),alphaMapUv:at&&x(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(J||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Dt,vertexUv3s:Kt,pointsUvs:z.isPoints===!0&&!!N.attributes.uv&&(Tt||at),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:gt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:mt&&M.extensions.derivatives===!0,extensionFragDepth:mt&&M.extensions.fragDepth===!0,extensionDrawBuffers:mt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)T.push(I),T.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(y(T,M),_(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function y(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function v(M){const T=g[M.type];let I;if(T){const U=Pn[T];I=Bp.clone(U.uniforms)}else I=M.uniforms;return I}function b(M,T){let I;for(let U=0,z=l.length;U<z;U++){const L=l[U];if(L.cacheKey===T){I=L,++I.usedTimes;break}}return I===void 0&&(I=new J_(i,T,M,r),l.push(I)),I}function E(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function S(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:S,programs:l,dispose:C}}function ix(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,h,d,g,x,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function o(f,h,d,g,x,m){const p=a(f,h,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,h,d,g,x,m){const p=a(f,h,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,h){e.length>1&&e.sort(f||sx),n.length>1&&n.sort(h||Vu),s.length>1&&s.sort(h||Vu)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function rx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Wu,i.set(n,[a])):s>=r.length?(a=new Wu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ox(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Qt};break;case"SpotLight":e={position:new w,direction:new w,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function ax(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cx=0;function lx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ux(i,t){const e=new ox,n=ax(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new w);const r=new w,a=new te,o=new te;function c(u,f){let h=0,d=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,v=0,b=0,E=0,S=0,C=0,M=0;u.sort(lx);const T=f===!0?Math.PI:1;for(let U=0,z=u.length;U<z;U++){const L=u[U],N=L.color,k=L.intensity,Z=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*k*T,d+=N.g*k*T,g+=N.b*k*T;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],k);M++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const tt=L.shadow,et=n.get(L);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,s.directionalShadow[x]=et,s.directionalShadowMap[x]=$,s.directionalShadowMatrix[x]=L.shadow.matrix,v++}s.directional[x]=Y,x++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(N).multiplyScalar(k*T),Y.distance=Z,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[p]=Y;const tt=L.shadow;if(L.map&&(s.spotLightMap[S]=L.map,S++,tt.updateMatrices(L),L.castShadow&&C++),s.spotLightMatrix[p]=tt.matrix,L.castShadow){const et=n.get(L);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,s.spotShadow[p]=et,s.spotShadowMap[p]=$,E++}p++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(N).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=Y,y++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*T),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const tt=L.shadow,et=n.get(L);et.shadowBias=tt.bias,et.shadowNormalBias=tt.normalBias,et.shadowRadius=tt.radius,et.shadowMapSize=tt.mapSize,et.shadowCameraNear=tt.camera.near,et.shadowCameraFar=tt.camera.far,s.pointShadow[m]=et,s.pointShadowMap[m]=$,s.pointShadowMatrix[m]=L.shadow.matrix,b++}s.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(k*T),Y.groundColor.copy(L.groundColor).multiplyScalar(k*T),s.hemi[_]=Y,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=d,s.ambient[2]=g;const I=s.hash;(I.directionalLength!==x||I.pointLength!==m||I.spotLength!==p||I.rectAreaLength!==y||I.hemiLength!==_||I.numDirectionalShadows!==v||I.numPointShadows!==b||I.numSpotShadows!==E||I.numSpotMaps!==S||I.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=E+S-C,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=C,s.numLightProbes=M,I.directionalLength=x,I.pointLength=m,I.spotLength=p,I.rectAreaLength=y,I.hemiLength=_,I.numDirectionalShadows=v,I.numPointShadows=b,I.numSpotShadows=E,I.numSpotMaps=S,I.numLightProbes=M,s.version=cx++)}function l(u,f){let h=0,d=0,g=0,x=0,m=0;const p=f.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){const v=u[y];if(v.isDirectionalLight){const b=s.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),h++}else if(v.isSpotLight){const b=s.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const b=s.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const b=s.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const b=s.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Xu(i,t){const e=new ux(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function hx(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Xu(i,t),e.set(r,[c])):a>=o.length?(c=new Xu(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class fx extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dx extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`;function gx(i,t,e){let n=new il;const s=new ct,r=new ct,a=new se,o=new fx({depthPacking:lp}),c=new dx,l={},u=e.maxTextureSize,f={[In]:Ve,[Ve]:In,[cn]:cn},h=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:px,fragmentShader:mx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let p=this.type;this.render=function(E,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),T=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ui),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==Wn&&this.type===Wn,L=p===Wn&&this.type!==Wn;for(let N=0,k=E.length;N<k;N++){const Z=E[N],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const Y=$.getFrameExtents();if(s.multiply(Y),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,$.mapSize.y=r.y)),$.map===null||z===!0||L===!0){const et=this.type!==Wn?{minFilter:qe,magFilter:qe}:{};$.map!==null&&$.map.dispose(),$.map=new Bi(s.x,s.y,et),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const tt=$.getViewportCount();for(let et=0;et<tt;et++){const gt=$.getViewport(et);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),U.viewport(a),$.updateMatrices(Z,et),n=$.getFrustum(),v(S,C,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Wn&&y($,C),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,T,I)};function y(E,S){const C=t.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bi(s.x,s.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(S,null,C,h,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(S,null,C,d,x,null)}function _(E,S,C,M){let T=null;const I=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)T=I;else if(T=C.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=T.uuid,z=S.uuid;let L=l[U];L===void 0&&(L={},l[U]=L);let N=L[z];N===void 0&&(N=T.clone(),L[z]=N,S.addEventListener("dispose",b)),T=N}if(T.visible=S.visible,T.wireframe=S.wireframe,M===Wn?T.side=S.shadowSide!==null?S.shadowSide:S.side:T.side=S.shadowSide!==null?S.shadowSide:f[S.side],T.alphaMap=S.alphaMap,T.alphaTest=S.alphaTest,T.map=S.map,T.clipShadows=S.clipShadows,T.clippingPlanes=S.clippingPlanes,T.clipIntersection=S.clipIntersection,T.displacementMap=S.displacementMap,T.displacementScale=S.displacementScale,T.displacementBias=S.displacementBias,T.wireframeLinewidth=S.wireframeLinewidth,T.linewidth=S.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const U=i.properties.get(T);U.light=C}return T}function v(E,S,C,M,T){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Wn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const z=t.update(E),L=E.material;if(Array.isArray(L)){const N=z.groups;for(let k=0,Z=N.length;k<Z;k++){const $=N[k],Y=L[$.materialIndex];if(Y&&Y.visible){const tt=_(E,Y,M,T);E.onBeforeShadow(i,E,S,C,z,tt,$),i.renderBufferDirect(C,null,z,tt,E,$),E.onAfterShadow(i,E,S,C,z,tt,$)}}}else if(L.visible){const N=_(E,L,M,T);E.onBeforeShadow(i,E,S,C,z,N,null),i.renderBufferDirect(C,null,z,N,E,null),E.onAfterShadow(i,E,S,C,z,N,null)}}const U=E.children;for(let z=0,L=U.length;z<L;z++)v(U[z],S,C,M,T)}function b(E){E.target.removeEventListener("dispose",b);for(const C in l){const M=l[C],T=E.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function _x(i,t,e){const n=e.isWebGL2;function s(){let B=!1;const ht=new se;let mt=null;const Ut=new se(0,0,0,0);return{setMask:function(Dt){mt!==Dt&&!B&&(i.colorMask(Dt,Dt,Dt,Dt),mt=Dt)},setLocked:function(Dt){B=Dt},setClear:function(Dt,Kt,Jt,ve,Ee){Ee===!0&&(Dt*=ve,Kt*=ve,Jt*=ve),ht.set(Dt,Kt,Jt,ve),Ut.equals(ht)===!1&&(i.clearColor(Dt,Kt,Jt,ve),Ut.copy(ht))},reset:function(){B=!1,mt=null,Ut.set(-1,0,0,0)}}}function r(){let B=!1,ht=null,mt=null,Ut=null;return{setTest:function(Dt){Dt?Ft(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(Dt){ht!==Dt&&!B&&(i.depthMask(Dt),ht=Dt)},setFunc:function(Dt){if(mt!==Dt){switch(Dt){case Bd:i.depthFunc(i.NEVER);break;case zd:i.depthFunc(i.ALWAYS);break;case kd:i.depthFunc(i.LESS);break;case ko:i.depthFunc(i.LEQUAL);break;case Hd:i.depthFunc(i.EQUAL);break;case Gd:i.depthFunc(i.GEQUAL);break;case Vd:i.depthFunc(i.GREATER);break;case Wd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Dt}},setLocked:function(Dt){B=Dt},setClear:function(Dt){Ut!==Dt&&(i.clearDepth(Dt),Ut=Dt)},reset:function(){B=!1,ht=null,mt=null,Ut=null}}}function a(){let B=!1,ht=null,mt=null,Ut=null,Dt=null,Kt=null,Jt=null,ve=null,Ee=null;return{setTest:function(ie){B||(ie?Ft(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(ie){ht!==ie&&!B&&(i.stencilMask(ie),ht=ie)},setFunc:function(ie,Ae,An){(mt!==ie||Ut!==Ae||Dt!==An)&&(i.stencilFunc(ie,Ae,An),mt=ie,Ut=Ae,Dt=An)},setOp:function(ie,Ae,An){(Kt!==ie||Jt!==Ae||ve!==An)&&(i.stencilOp(ie,Ae,An),Kt=ie,Jt=Ae,ve=An)},setLocked:function(ie){B=ie},setClear:function(ie){Ee!==ie&&(i.clearStencil(ie),Ee=ie)},reset:function(){B=!1,ht=null,mt=null,Ut=null,Dt=null,Kt=null,Jt=null,ve=null,Ee=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,v=null,b=null,E=null,S=null,C=null,M=new Qt(0,0,0),T=0,I=!1,U=null,z=null,L=null,N=null,k=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Y=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(tt)[1]),$=Y>=1):tt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),$=Y>=2);let et=null,gt={};const j=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),_t=new se().fromArray(j),At=new se().fromArray(it);function St(B,ht,mt,Ut){const Dt=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(B,Kt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<mt;Jt++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(ht+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Kt}const It={};It[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ft(i.DEPTH_TEST),c.setFunc(ko),xt(!1),R(Al),Ft(i.CULL_FACE),J(ui);function Ft(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Tt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Ot(B,ht){return d[B]!==ht?(i.bindFramebuffer(B,ht),d[B]=ht,n&&(B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function O(B,ht){let mt=x,Ut=!1;if(B)if(mt=g.get(ht),mt===void 0&&(mt=[],g.set(ht,mt)),B.isWebGLMultipleRenderTargets){const Dt=B.texture;if(mt.length!==Dt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,Jt=Dt.length;Kt<Jt;Kt++)mt[Kt]=i.COLOR_ATTACHMENT0+Kt;mt.length=Dt.length,Ut=!0}}else mt[0]!==i.COLOR_ATTACHMENT0&&(mt[0]=i.COLOR_ATTACHMENT0,Ut=!0);else mt[0]!==i.BACK&&(mt[0]=i.BACK,Ut=!0);Ut&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function ft(B){return m!==B?(i.useProgram(B),m=B,!0):!1}const Q={[Ri]:i.FUNC_ADD,[Ed]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[Cl]=i.MIN,Q[Ll]=i.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(Q[Cl]=B.MIN_EXT,Q[Ll]=B.MAX_EXT)}const lt={[Td]:i.ZERO,[Ad]:i.ONE,[wd]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[Id]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Rd]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[Od]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function J(B,ht,mt,Ut,Dt,Kt,Jt,ve,Ee,ie){if(B===ui){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(Ft(i.BLEND),p=!0),B!==Sd){if(B!==y||ie!==I){if((_!==Ri||E!==Ri)&&(i.blendEquation(i.FUNC_ADD),_=Ri,E=Ri),ie)switch(B){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,b=null,S=null,C=null,M.set(0,0,0),T=0,y=B,I=ie}return}Dt=Dt||ht,Kt=Kt||mt,Jt=Jt||Ut,(ht!==_||Dt!==E)&&(i.blendEquationSeparate(Q[ht],Q[Dt]),_=ht,E=Dt),(mt!==v||Ut!==b||Kt!==S||Jt!==C)&&(i.blendFuncSeparate(lt[mt],lt[Ut],lt[Kt],lt[Jt]),v=mt,b=Ut,S=Kt,C=Jt),(ve.equals(M)===!1||Ee!==T)&&(i.blendColor(ve.r,ve.g,ve.b,Ee),M.copy(ve),T=Ee),y=B,I=!1}function wt(B,ht){B.side===cn?Tt(i.CULL_FACE):Ft(i.CULL_FACE);let mt=B.side===Ve;ht&&(mt=!mt),xt(mt),B.blending===Rs&&B.transparent===!1?J(ui):J(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);const Ut=B.stencilWrite;l.setTest(Ut),Ut&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),G(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ft(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(B){U!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),U=B)}function R(B){B!==vd?(Ft(i.CULL_FACE),B!==z&&(B===Al?i.cullFace(i.BACK):B===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),z=B}function A(B){B!==L&&($&&i.lineWidth(B),L=B)}function G(B,ht,mt){B?(Ft(i.POLYGON_OFFSET_FILL),(N!==ht||k!==mt)&&(i.polygonOffset(ht,mt),N=ht,k=mt)):Tt(i.POLYGON_OFFSET_FILL)}function ot(B){B?Ft(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function st(B){B===void 0&&(B=i.TEXTURE0+Z-1),et!==B&&(i.activeTexture(B),et=B)}function nt(B,ht,mt){mt===void 0&&(et===null?mt=i.TEXTURE0+Z-1:mt=et);let Ut=gt[mt];Ut===void 0&&(Ut={type:void 0,texture:void 0},gt[mt]=Ut),(Ut.type!==B||Ut.texture!==ht)&&(et!==mt&&(i.activeTexture(mt),et=mt),i.bindTexture(B,ht||It[B]),Ut.type=B,Ut.texture=ht)}function bt(){const B=gt[et];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function pt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function yt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function kt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function D(B){_t.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),_t.copy(B))}function ut(B){At.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),At.copy(B))}function Rt(B,ht){let mt=f.get(ht);mt===void 0&&(mt=new WeakMap,f.set(ht,mt));let Ut=mt.get(B);Ut===void 0&&(Ut=i.getUniformBlockIndex(ht,B.name),mt.set(B,Ut))}function Et(B,ht){const Ut=f.get(ht).get(B);u.get(ht)!==Ut&&(i.uniformBlockBinding(ht,Ut,B.__bindingPointIndex),u.set(ht,Ut))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,gt={},d={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,v=null,b=null,E=null,S=null,C=null,M=new Qt(0,0,0),T=0,I=!1,U=null,z=null,L=null,N=null,k=null,_t.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ft,disable:Tt,bindFramebuffer:Ot,drawBuffers:O,useProgram:ft,setBlending:J,setMaterial:wt,setFlipSided:xt,setCullFace:R,setLineWidth:A,setPolygonOffset:G,setScissorTest:ot,activeTexture:st,bindTexture:nt,unbindTexture:bt,compressedTexImage2D:pt,compressedTexImage3D:yt,texImage2D:Ct,texImage3D:vt,updateUBOMapping:Rt,uniformBlockBinding:Et,texStorage2D:qt,texStorage3D:Bt,texSubImage2D:Lt,texSubImage3D:kt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ee,scissor:D,viewport:ut,reset:at}}function xx(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,A){return d?new OffscreenCanvas(R,A):Xo("canvas")}function x(R,A,G,ot){let st=1;if((R.width>ot||R.height>ot)&&(st=ot/Math.max(R.width,R.height)),st<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const nt=A?Uc:Math.floor,bt=nt(st*R.width),pt=nt(st*R.height);f===void 0&&(f=g(bt,pt));const yt=G?g(bt,pt):f;return yt.width=bt,yt.height=pt,yt.getContext("2d").drawImage(R,0,0,bt,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+bt+"x"+pt+")."),yt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return au(R.width)&&au(R.height)}function p(R){return o?!1:R.wrapS!==En||R.wrapT!==En||R.minFilter!==qe&&R.minFilter!==on}function y(R,A){return R.generateMipmaps&&A&&R.minFilter!==qe&&R.minFilter!==on}function _(R){i.generateMipmap(R)}function v(R,A,G,ot,st=!1){if(o===!1)return A;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=A;if(A===i.RED&&(G===i.FLOAT&&(nt=i.R32F),G===i.HALF_FLOAT&&(nt=i.R16F),G===i.UNSIGNED_BYTE&&(nt=i.R8)),A===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.R8UI),G===i.UNSIGNED_SHORT&&(nt=i.R16UI),G===i.UNSIGNED_INT&&(nt=i.R32UI),G===i.BYTE&&(nt=i.R8I),G===i.SHORT&&(nt=i.R16I),G===i.INT&&(nt=i.R32I)),A===i.RG&&(G===i.FLOAT&&(nt=i.RG32F),G===i.HALF_FLOAT&&(nt=i.RG16F),G===i.UNSIGNED_BYTE&&(nt=i.RG8)),A===i.RGBA){const bt=st?Ho:ce.getTransfer(ot);G===i.FLOAT&&(nt=i.RGBA32F),G===i.HALF_FLOAT&&(nt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(nt=bt===he?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(R,A,G){return y(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==qe&&R.minFilter!==on?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function E(R){return R===qe||R===Dl||R===ga?i.NEAREST:i.LINEAR}function S(R){const A=R.target;A.removeEventListener("dispose",S),M(A),A.isVideoTexture&&u.delete(A)}function C(R){const A=R.target;A.removeEventListener("dispose",C),I(A)}function M(R){const A=n.get(R);if(A.__webglInit===void 0)return;const G=R.source,ot=h.get(G);if(ot){const st=ot[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&T(R),Object.keys(ot).length===0&&h.delete(G)}n.remove(R)}function T(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const G=R.source,ot=h.get(G);delete ot[A.__cacheKey],a.memory.textures--}function I(R){const A=R.texture,G=n.get(R),ot=n.get(A);if(ot.__webglTexture!==void 0&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(G.__webglFramebuffer[st]))for(let nt=0;nt<G.__webglFramebuffer[st].length;nt++)i.deleteFramebuffer(G.__webglFramebuffer[st][nt]);else i.deleteFramebuffer(G.__webglFramebuffer[st]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[st])}else{if(Array.isArray(G.__webglFramebuffer))for(let st=0;st<G.__webglFramebuffer.length;st++)i.deleteFramebuffer(G.__webglFramebuffer[st]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let st=0;st<G.__webglColorRenderbuffer.length;st++)G.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[st]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let st=0,nt=A.length;st<nt;st++){const bt=n.get(A[st]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(A[st])}n.remove(A),n.remove(R)}let U=0;function z(){U=0}function L(){const R=U;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function N(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function k(R,A){const G=n.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const ot=R.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(G,R,A);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+A)}function Z(R,A){const G=n.get(R);if(R.version>0&&G.__version!==R.version){_t(G,R,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+A)}function $(R,A){const G=n.get(R);if(R.version>0&&G.__version!==R.version){_t(G,R,A);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+A)}function Y(R,A){const G=n.get(R);if(R.version>0&&G.__version!==R.version){At(G,R,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+A)}const tt={[Cc]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Lc]:i.MIRRORED_REPEAT},et={[qe]:i.NEAREST,[Dl]:i.NEAREST_MIPMAP_NEAREST,[ga]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Qd]:i.LINEAR_MIPMAP_NEAREST,[xr]:i.LINEAR_MIPMAP_LINEAR},gt={[hp]:i.NEVER,[_p]:i.ALWAYS,[fp]:i.LESS,[df]:i.LEQUAL,[dp]:i.EQUAL,[gp]:i.GEQUAL,[pp]:i.GREATER,[mp]:i.NOTEQUAL};function j(R,A,G){if(G?(i.texParameteri(R,i.TEXTURE_WRAP_S,tt[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,tt[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,tt[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,et[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,et[A.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==En||A.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,E(A.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,E(A.minFilter)),A.minFilter!==qe&&A.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,gt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===qe||A.minFilter!==ga&&A.minFilter!==xr||A.type===ai&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===vr&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(R,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function it(R,A){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",S));const ot=A.source;let st=h.get(ot);st===void 0&&(st={},h.set(ot,st));const nt=N(A);if(nt!==R.__cacheKey){st[nt]===void 0&&(st[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),st[nt].usedTimes++;const bt=st[R.__cacheKey];bt!==void 0&&(st[R.__cacheKey].usedTimes--,bt.usedTimes===0&&T(A)),R.__cacheKey=nt,R.__webglTexture=st[nt].texture}return G}function _t(R,A,G){let ot=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ot=i.TEXTURE_3D);const st=it(R,A),nt=A.source;e.bindTexture(ot,R.__webglTexture,i.TEXTURE0+G);const bt=n.get(nt);if(nt.version!==bt.__version||st===!0){e.activeTexture(i.TEXTURE0+G);const pt=ce.getPrimaries(ce.workingColorSpace),yt=A.colorSpace===ln?null:ce.getPrimaries(A.colorSpace),Lt=A.colorSpace===ln||pt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const kt=p(A)&&m(A.image)===!1;let rt=x(A.image,kt,!1,s.maxTextureSize);rt=xt(A,rt);const ee=m(rt)||o,qt=r.convert(A.format,A.colorSpace);let Bt=r.convert(A.type),Ct=v(A.internalFormat,qt,Bt,A.colorSpace,A.isVideoTexture);j(ot,A,ee);let vt;const D=A.mipmaps,ut=o&&A.isVideoTexture!==!0&&Ct!==uf,Rt=bt.__version===void 0||st===!0,Et=b(A,rt,ee);if(A.isDepthTexture)Ct=i.DEPTH_COMPONENT,o?A.type===ai?Ct=i.DEPTH_COMPONENT32F:A.type===oi?Ct=i.DEPTH_COMPONENT24:A.type===Ii?Ct=i.DEPTH24_STENCIL8:Ct=i.DEPTH_COMPONENT16:A.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ui&&Ct===i.DEPTH_COMPONENT&&A.type!==tl&&A.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=oi,Bt=r.convert(A.type)),A.format===Is&&Ct===i.DEPTH_COMPONENT&&(Ct=i.DEPTH_STENCIL,A.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ii,Bt=r.convert(A.type))),Rt&&(ut?e.texStorage2D(i.TEXTURE_2D,1,Ct,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,rt.width,rt.height,0,qt,Bt,null));else if(A.isDataTexture)if(D.length>0&&ee){ut&&Rt&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,D[0].width,D[0].height);for(let at=0,B=D.length;at<B;at++)vt=D[at],ut?e.texSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,qt,Bt,vt.data):e.texImage2D(i.TEXTURE_2D,at,Ct,vt.width,vt.height,0,qt,Bt,vt.data);A.generateMipmaps=!1}else ut?(Rt&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,qt,Bt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,rt.width,rt.height,0,qt,Bt,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ct,D[0].width,D[0].height,rt.depth);for(let at=0,B=D.length;at<B;at++)vt=D[at],A.format!==bn?qt!==null?ut?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,qt,vt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Ct,vt.width,vt.height,rt.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,qt,Bt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Ct,vt.width,vt.height,rt.depth,0,qt,Bt,vt.data)}else{ut&&Rt&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,D[0].width,D[0].height);for(let at=0,B=D.length;at<B;at++)vt=D[at],A.format!==bn?qt!==null?ut?e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,qt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Ct,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?e.texSubImage2D(i.TEXTURE_2D,at,0,0,vt.width,vt.height,qt,Bt,vt.data):e.texImage2D(i.TEXTURE_2D,at,Ct,vt.width,vt.height,0,qt,Bt,vt.data)}else if(A.isDataArrayTexture)ut?(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ct,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,qt,Bt,rt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,rt.width,rt.height,rt.depth,0,qt,Bt,rt.data);else if(A.isData3DTexture)ut?(Rt&&e.texStorage3D(i.TEXTURE_3D,Et,Ct,rt.width,rt.height,rt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,qt,Bt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,rt.width,rt.height,rt.depth,0,qt,Bt,rt.data);else if(A.isFramebufferTexture){if(Rt)if(ut)e.texStorage2D(i.TEXTURE_2D,Et,Ct,rt.width,rt.height);else{let at=rt.width,B=rt.height;for(let ht=0;ht<Et;ht++)e.texImage2D(i.TEXTURE_2D,ht,Ct,at,B,0,qt,Bt,null),at>>=1,B>>=1}}else if(D.length>0&&ee){ut&&Rt&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,D[0].width,D[0].height);for(let at=0,B=D.length;at<B;at++)vt=D[at],ut?e.texSubImage2D(i.TEXTURE_2D,at,0,0,qt,Bt,vt):e.texImage2D(i.TEXTURE_2D,at,Ct,qt,Bt,vt);A.generateMipmaps=!1}else ut?(Rt&&e.texStorage2D(i.TEXTURE_2D,Et,Ct,rt.width,rt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,Bt,rt)):e.texImage2D(i.TEXTURE_2D,0,Ct,qt,Bt,rt);y(A,ee)&&_(ot),bt.__version=nt.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function At(R,A,G){if(A.image.length!==6)return;const ot=it(R,A),st=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const nt=n.get(st);if(st.version!==nt.__version||ot===!0){e.activeTexture(i.TEXTURE0+G);const bt=ce.getPrimaries(ce.workingColorSpace),pt=A.colorSpace===ln?null:ce.getPrimaries(A.colorSpace),yt=A.colorSpace===ln||bt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Lt=A.isCompressedTexture||A.image[0].isCompressedTexture,kt=A.image[0]&&A.image[0].isDataTexture,rt=[];for(let at=0;at<6;at++)!Lt&&!kt?rt[at]=x(A.image[at],!1,!0,s.maxCubemapSize):rt[at]=kt?A.image[at].image:A.image[at],rt[at]=xt(A,rt[at]);const ee=rt[0],qt=m(ee)||o,Bt=r.convert(A.format,A.colorSpace),Ct=r.convert(A.type),vt=v(A.internalFormat,Bt,Ct,A.colorSpace),D=o&&A.isVideoTexture!==!0,ut=nt.__version===void 0||ot===!0;let Rt=b(A,ee,qt);j(i.TEXTURE_CUBE_MAP,A,qt);let Et;if(Lt){D&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,vt,ee.width,ee.height);for(let at=0;at<6;at++){Et=rt[at].mipmaps;for(let B=0;B<Et.length;B++){const ht=Et[B];A.format!==bn?Bt!==null?D?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,B,0,0,ht.width,ht.height,Bt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,B,vt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,B,0,0,ht.width,ht.height,Bt,Ct,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,B,vt,ht.width,ht.height,0,Bt,Ct,ht.data)}}}else{Et=A.mipmaps,D&&ut&&(Et.length>0&&Rt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,vt,rt[0].width,rt[0].height));for(let at=0;at<6;at++)if(kt){D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,rt[at].width,rt[at].height,Bt,Ct,rt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,rt[at].width,rt[at].height,0,Bt,Ct,rt[at].data);for(let B=0;B<Et.length;B++){const mt=Et[B].image[at].image;D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,B+1,0,0,mt.width,mt.height,Bt,Ct,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,B+1,vt,mt.width,mt.height,0,Bt,Ct,mt.data)}}else{D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,Ct,rt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,vt,Bt,Ct,rt[at]);for(let B=0;B<Et.length;B++){const ht=Et[B];D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,B+1,0,0,Bt,Ct,ht.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,B+1,vt,Bt,Ct,ht.image[at])}}}y(A,qt)&&_(i.TEXTURE_CUBE_MAP),nt.__version=st.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function St(R,A,G,ot,st,nt){const bt=r.convert(G.format,G.colorSpace),pt=r.convert(G.type),yt=v(G.internalFormat,bt,pt,G.colorSpace);if(!n.get(A).__hasExternalTextures){const kt=Math.max(1,A.width>>nt),rt=Math.max(1,A.height>>nt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,nt,yt,kt,rt,A.depth,0,bt,pt,null):e.texImage2D(st,nt,yt,kt,rt,0,bt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),J(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,n.get(G).__webglTexture,0,lt(A)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,n.get(G).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(R,A,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ot=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||J(A)){const st=A.depthTexture;st&&st.isDepthTexture&&(st.type===ai?ot=i.DEPTH_COMPONENT32F:st.type===oi&&(ot=i.DEPTH_COMPONENT24));const nt=lt(A);J(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,ot,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,ot,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ot,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ot=lt(A);G&&J(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,i.DEPTH24_STENCIL8,A.width,A.height):J(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ot=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let st=0;st<ot.length;st++){const nt=ot[st],bt=r.convert(nt.format,nt.colorSpace),pt=r.convert(nt.type),yt=v(nt.internalFormat,bt,pt,nt.colorSpace),Lt=lt(A);G&&J(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,yt,A.width,A.height):J(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,yt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,yt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const ot=n.get(A.depthTexture).__webglTexture,st=lt(A);if(A.depthTexture.format===Ui)J(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(A.depthTexture.format===Is)J(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Tt(R){const A=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ft(A.__webglFramebuffer,R)}else if(G){A.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ot]),A.__webglDepthbuffer[ot]=i.createRenderbuffer(),It(A.__webglDepthbuffer[ot],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),It(A.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(R,A,G){const ot=n.get(R);A!==void 0&&St(ot.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Tt(R)}function O(R){const A=R.texture,G=n.get(R),ot=n.get(A);R.addEventListener("dispose",C),R.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=A.version,a.memory.textures++);const st=R.isWebGLCubeRenderTarget===!0,nt=R.isWebGLMultipleRenderTargets===!0,bt=m(R)||o;if(st){G.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(o&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[pt]=[];for(let yt=0;yt<A.mipmaps.length;yt++)G.__webglFramebuffer[pt][yt]=i.createFramebuffer()}else G.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let pt=0;pt<A.mipmaps.length;pt++)G.__webglFramebuffer[pt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(nt)if(s.drawBuffers){const pt=R.texture;for(let yt=0,Lt=pt.length;yt<Lt;yt++){const kt=n.get(pt[yt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&J(R)===!1){const pt=nt?A:[A];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let yt=0;yt<pt.length;yt++){const Lt=pt[yt];G.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[yt]);const kt=r.convert(Lt.format,Lt.colorSpace),rt=r.convert(Lt.type),ee=v(Lt.internalFormat,kt,rt,Lt.colorSpace,R.isXRRenderTarget===!0),qt=lt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,ee,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,G.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),It(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),j(i.TEXTURE_CUBE_MAP,A,bt);for(let pt=0;pt<6;pt++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)St(G.__webglFramebuffer[pt][yt],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else St(G.__webglFramebuffer[pt],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);y(A,bt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const pt=R.texture;for(let yt=0,Lt=pt.length;yt<Lt;yt++){const kt=pt[yt],rt=n.get(kt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),j(i.TEXTURE_2D,kt,bt),St(G.__webglFramebuffer,R,kt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),y(kt,bt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,ot.__webglTexture),j(pt,A,bt),o&&A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)St(G.__webglFramebuffer[yt],R,A,i.COLOR_ATTACHMENT0,pt,yt);else St(G.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,pt,0);y(A,bt)&&_(pt),e.unbindTexture()}R.depthBuffer&&Tt(R)}function ft(R){const A=m(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ot=0,st=G.length;ot<st;ot++){const nt=G[ot];if(y(nt,A)){const bt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pt=n.get(nt).__webglTexture;e.bindTexture(bt,pt),_(bt),e.unbindTexture()}}}function Q(R){if(o&&R.samples>0&&J(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ot=R.height;let st=i.COLOR_BUFFER_BIT;const nt=[],bt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(R),yt=R.isWebGLMultipleRenderTargets===!0;if(yt)for(let Lt=0;Lt<A.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Lt=0;Lt<A.length;Lt++){nt.push(i.COLOR_ATTACHMENT0+Lt),R.depthBuffer&&nt.push(bt);const kt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(kt===!1&&(R.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),yt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Lt]),kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),yt){const rt=n.get(A[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,G,ot,0,0,G,ot,st,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Lt=0;Lt<A.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Lt]);const kt=n.get(A[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}}function lt(R){return Math.min(s.maxSamples,R.samples)}function J(R){const A=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function wt(R){const A=a.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function xt(R,A){const G=R.colorSpace,ot=R.format,st=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Dc||G!==Zn&&G!==ln&&(ce.getTransfer(G)===he?o===!1?t.has("EXT_sRGB")===!0&&ot===bn?(R.format=Dc,R.minFilter=on,R.generateMipmaps=!1):A=mf.sRGBToLinear(A):(ot!==bn||st!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=Ot,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=J}function vx(i,t,e){const n=e.isWebGL2;function s(r,a=ln){let o;const c=ce.getTransfer(a);if(r===fi)return i.UNSIGNED_BYTE;if(r===rf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===of)return i.UNSIGNED_SHORT_5_5_5_1;if(r===tp)return i.BYTE;if(r===ep)return i.SHORT;if(r===tl)return i.UNSIGNED_SHORT;if(r===sf)return i.INT;if(r===oi)return i.UNSIGNED_INT;if(r===ai)return i.FLOAT;if(r===vr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===np)return i.ALPHA;if(r===bn)return i.RGBA;if(r===ip)return i.LUMINANCE;if(r===sp)return i.LUMINANCE_ALPHA;if(r===Ui)return i.DEPTH_COMPONENT;if(r===Is)return i.DEPTH_STENCIL;if(r===Dc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===rp)return i.RED;if(r===af)return i.RED_INTEGER;if(r===op)return i.RG;if(r===cf)return i.RG_INTEGER;if(r===lf)return i.RGBA_INTEGER;if(r===_a||r===xa||r===va||r===ya)if(c===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===_a)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===_a)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===va)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ya)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Il||r===Ul||r===Nl||r===Ol)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fl||r===Bl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fl)return c===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zl||r===kl||r===Hl||r===Gl||r===Vl||r===Wl||r===Xl||r===ql||r===Yl||r===Zl||r===jl||r===$l||r===Kl||r===Jl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===zl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ql)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$l)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jl)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ma||r===Ql||r===tu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ma)return c===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ql)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ap||r===eu||r===nu||r===iu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ma)return o.COMPRESSED_RED_RGTC1_EXT;if(r===eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===iu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ii?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class yx extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sx extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const x=e.getContextAttributes();let m=null,p=null;const y=[],_=[],v=new ct;let b=null;const E=new an;E.layers.enable(1),E.viewport=new se;const S=new an;S.layers.enable(2),S.viewport=new se;const C=[E,S],M=new yx;M.layers.enable(1),M.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=y[j];return it===void 0&&(it=new Xa,y[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=y[j];return it===void 0&&(it=new Xa,y[j]=it),it.getGripSpace()},this.getHand=function(j){let it=y[j];return it===void 0&&(it=new Xa,y[j]=it),it.getHandSpace()};function U(j){const it=_.indexOf(j.inputSource);if(it===-1)return;const _t=y[it];_t!==void 0&&(_t.update(j.inputSource,j.frame,l||a),_t.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",L);for(let j=0;j<y.length;j++){const it=_[j];it!==null&&(_[j]=null,y[j].disconnect(it))}T=null,I=null,t.setRenderTarget(m),d=null,h=null,f=null,s=null,p=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const it={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Bi(d.framebufferWidth,d.framebufferHeight,{format:bn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let it=null,_t=null,At=null;x.depth&&(At=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=x.stencil?Is:Ui,_t=x.stencil?Ii:oi);const St={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(St),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),p=new Bi(h.textureWidth,h.textureHeight,{format:bn,type:fi,depthTexture:new Af(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const It=t.properties.get(p);It.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(j){for(let it=0;it<j.removed.length;it++){const _t=j.removed[it],At=_.indexOf(_t);At>=0&&(_[At]=null,y[At].disconnect(_t))}for(let it=0;it<j.added.length;it++){const _t=j.added[it];let At=_.indexOf(_t);if(At===-1){for(let It=0;It<y.length;It++)if(It>=_.length){_.push(_t),At=It;break}else if(_[It]===null){_[It]=_t,At=It;break}if(At===-1)break}const St=y[At];St&&St.connect(_t)}}const N=new w,k=new w;function Z(j,it,_t){N.setFromMatrixPosition(it.matrixWorld),k.setFromMatrixPosition(_t.matrixWorld);const At=N.distanceTo(k),St=it.projectionMatrix.elements,It=_t.projectionMatrix.elements,Ft=St[14]/(St[10]-1),Tt=St[14]/(St[10]+1),Ot=(St[9]+1)/St[5],O=(St[9]-1)/St[5],ft=(St[8]-1)/St[0],Q=(It[8]+1)/It[0],lt=Ft*ft,J=Ft*Q,wt=At/(-ft+Q),xt=wt*-ft;it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(xt),j.translateZ(wt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=Ft+wt,A=Tt+wt,G=lt-xt,ot=J+(At-xt),st=Ot*Tt/A*R,nt=O*Tt/A*R;j.projectionMatrix.makePerspective(G,ot,st,nt,R,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function $(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;M.near=S.near=E.near=j.near,M.far=S.far=E.far=j.far,(T!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,I=M.far);const it=j.parent,_t=M.cameras;$(M,it);for(let At=0;At<_t.length;At++)$(_t[At],it);_t.length===2?Z(M,E,S):M.projectionMatrix.copy(E.projectionMatrix),Y(j,M,it)};function Y(j,it,_t){_t===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(_t.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ic*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)};let tt=null;function et(j,it){if(u=it.getViewerPose(l||a),g=it,u!==null){const _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let At=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,At=!0);for(let St=0;St<_t.length;St++){const It=_t[St];let Ft=null;if(d!==null)Ft=d.getViewport(It);else{const Ot=f.getViewSubImage(h,It);Ft=Ot.viewport,St===0&&(t.setRenderTargetTextures(p,Ot.colorTexture,h.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(p))}let Tt=C[St];Tt===void 0&&(Tt=new an,Tt.layers.enable(St),Tt.viewport=new se,C[St]=Tt),Tt.matrix.fromArray(It.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(It.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),St===0&&(M.matrix.copy(Tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),At===!0&&M.cameras.push(Tt)}}for(let _t=0;_t<y.length;_t++){const At=_[_t],St=y[_t];At!==null&&St!==void 0&&St.update(At,it,l||a)}tt&&tt(j,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const gt=new bf;gt.setAnimationLoop(et),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}}function Ex(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ve&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ve&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bx(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const v=_.program;n.uniformBlockBinding(y,v)}function l(y,_){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));const b=_.program;n.updateUBOMapping(y,b);const E=t.render.frame;r[y.id]!==E&&(h(y),r[y.id]=E)}function u(y){const _=f();y.__bindingPointIndex=_;const v=i.createBuffer(),b=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const _=s[y.id],v=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,S=v.length;E<S;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,T=C.length;M<T;M++){const I=C[M];if(d(I,E,M,b)===!0){const U=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let N=0;N<z.length;N++){const k=z[N],Z=x(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+L,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,v,b){const E=y.value,S=_+"_"+v;if(b[S]===void 0)return typeof E=="number"||typeof E=="boolean"?b[S]=E:b[S]=E.clone(),!0;{const C=b[S];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return b[S]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){const _=y.uniforms;let v=0;const b=16;for(let S=0,C=_.length;S<C;S++){const M=Array.isArray(_[S])?_[S]:[_[S]];for(let T=0,I=M.length;T<I;T++){const U=M[T],z=Array.isArray(U.value)?U.value:[U.value];for(let L=0,N=z.length;L<N;L++){const k=z[L],Z=x(k),$=v%b;$!==0&&b-$<Z.boundary&&(v+=b-$),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Z.storage}}}const E=v%b;return E>0&&(v+=b-E),y.__size=v,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Tx{constructor(t={}){const{canvas:e=yp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const _=this;let v=!1,b=0,E=0,S=null,C=-1,M=null;const T=new se,I=new se;let U=null;const z=new Qt(0);let L=0,N=e.width,k=e.height,Z=1,$=null,Y=null;const tt=new se(0,0,N,k),et=new se(0,0,N,k);let gt=!1;const j=new il;let it=!1,_t=!1,At=null;const St=new te,It=new ct,Ft=new w,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return S===null?Z:1}let O=n;function ft(P,V){for(let X=0;X<P.length;X++){const q=P[X],W=e.getContext(q,V);if(W!==null)return W}return null}try{const P={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){const V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),O=ft(V,P),O===null)throw ft(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,lt,J,wt,xt,R,A,G,ot,st,nt,bt,pt,yt,Lt,kt,rt,ee,qt,Bt,Ct,vt,D,ut;function Rt(){Q=new U0(O),lt=new R0(O,Q,t),Q.init(lt),vt=new vx(O,Q,lt),J=new _x(O,Q,lt),wt=new F0(O),xt=new ix,R=new xx(O,Q,J,xt,lt,vt,wt),A=new C0(_),G=new I0(_),ot=new Xp(O,lt),D=new A0(O,Q,ot,lt),st=new N0(O,ot,wt,D),nt=new H0(O,st,ot,wt),qt=new k0(O,lt,R),kt=new P0(xt),bt=new nx(_,A,G,Q,lt,D,kt),pt=new Ex(_,xt),yt=new rx,Lt=new hx(Q,lt),ee=new T0(_,A,G,J,nt,h,c),rt=new gx(_,nt,lt),ut=new bx(O,wt,lt,J),Bt=new w0(O,Q,wt,lt),Ct=new O0(O,Q,wt,lt),wt.programs=bt.programs,_.capabilities=lt,_.extensions=Q,_.properties=xt,_.renderLists=yt,_.shadowMap=rt,_.state=J,_.info=wt}Rt();const Et=new Sx(_,O);this.xr=Et,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(N,k,!1))},this.getSize=function(P){return P.set(N,k)},this.setSize=function(P,V,X=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,k=V,e.width=Math.floor(P*Z),e.height=Math.floor(V*Z),X===!0&&(e.style.width=P+"px",e.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(N*Z,k*Z).floor()},this.setDrawingBufferSize=function(P,V,X){N=P,k=V,Z=X,e.width=Math.floor(P*X),e.height=Math.floor(V*X),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(tt)},this.setViewport=function(P,V,X,q){P.isVector4?tt.set(P.x,P.y,P.z,P.w):tt.set(P,V,X,q),J.viewport(T.copy(tt).multiplyScalar(Z).floor())},this.getScissor=function(P){return P.copy(et)},this.setScissor=function(P,V,X,q){P.isVector4?et.set(P.x,P.y,P.z,P.w):et.set(P,V,X,q),J.scissor(I.copy(et).multiplyScalar(Z).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(P){J.setScissorTest(gt=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(P=!0,V=!0,X=!0){let q=0;if(P){let W=!1;if(S!==null){const Mt=S.texture.format;W=Mt===lf||Mt===cf||Mt===af}if(W){const Mt=S.texture.type,Pt=Mt===fi||Mt===oi||Mt===tl||Mt===Ii||Mt===rf||Mt===of,Nt=ee.getClearColor(),zt=ee.getClearAlpha(),Yt=Nt.r,Ht=Nt.g,Gt=Nt.b;Pt?(d[0]=Yt,d[1]=Ht,d[2]=Gt,d[3]=zt,O.clearBufferuiv(O.COLOR,0,d)):(g[0]=Yt,g[1]=Ht,g[2]=Gt,g[3]=zt,O.clearBufferiv(O.COLOR,0,g))}else q|=O.COLOR_BUFFER_BIT}V&&(q|=O.DEPTH_BUFFER_BIT),X&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),yt.dispose(),Lt.dispose(),xt.dispose(),A.dispose(),G.dispose(),nt.dispose(),D.dispose(),ut.dispose(),bt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",Ee),Et.removeEventListener("sessionend",ie),At&&(At.dispose(),At=null),Ae.stop()};function at(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=wt.autoReset,V=rt.enabled,X=rt.autoUpdate,q=rt.needsUpdate,W=rt.type;Rt(),wt.autoReset=P,rt.enabled=V,rt.autoUpdate=X,rt.needsUpdate=q,rt.type=W}function ht(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function mt(P){const V=P.target;V.removeEventListener("dispose",mt),Ut(V)}function Ut(P){Dt(P),xt.remove(P)}function Dt(P){const V=xt.get(P).programs;V!==void 0&&(V.forEach(function(X){bt.releaseProgram(X)}),P.isShaderMaterial&&bt.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,X,q,W,Mt){V===null&&(V=Tt);const Pt=W.isMesh&&W.matrixWorld.determinant()<0,Nt=md(P,V,X,q,W);J.setMaterial(q,Pt);let zt=X.index,Yt=1;if(q.wireframe===!0){if(zt=st.getWireframeAttribute(X),zt===void 0)return;Yt=2}const Ht=X.drawRange,Gt=X.attributes.position;let be=Ht.start*Yt,Ke=(Ht.start+Ht.count)*Yt;Mt!==null&&(be=Math.max(be,Mt.start*Yt),Ke=Math.min(Ke,(Mt.start+Mt.count)*Yt)),zt!==null?(be=Math.max(be,0),Ke=Math.min(Ke,zt.count)):Gt!=null&&(be=Math.max(be,0),Ke=Math.min(Ke,Gt.count));const Ue=Ke-be;if(Ue<0||Ue===1/0)return;D.setup(W,q,Nt,X,zt);let Nn,me=Bt;if(zt!==null&&(Nn=ot.get(zt),me=Ct,me.setIndex(Nn)),W.isMesh)q.wireframe===!0?(J.setLineWidth(q.wireframeLinewidth*Ot()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(W.isLine){let jt=q.linewidth;jt===void 0&&(jt=1),J.setLineWidth(jt*Ot()),W.isLineSegments?me.setMode(O.LINES):W.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else W.isPoints?me.setMode(O.POINTS):W.isSprite&&me.setMode(O.TRIANGLES);if(W.isBatchedMesh)me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)me.renderInstances(be,Ue,W.count);else if(X.isInstancedBufferGeometry){const jt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,fa=Math.min(X.instanceCount,jt);me.renderInstances(be,Ue,fa)}else me.render(be,Ue)};function Kt(P,V,X){P.transparent===!0&&P.side===cn&&P.forceSinglePass===!1?(P.side=Ve,P.needsUpdate=!0,Pr(P,V,X),P.side=In,P.needsUpdate=!0,Pr(P,V,X),P.side=cn):Pr(P,V,X)}this.compile=function(P,V,X=null){X===null&&(X=P),m=Lt.get(X),m.init(),y.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),P!==X&&P.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(_._useLegacyLights);const q=new Set;return P.traverse(function(W){const Mt=W.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){const Nt=Mt[Pt];Kt(Nt,X,W),q.add(Nt)}else Kt(Mt,X,W),q.add(Mt)}),y.pop(),m=null,q},this.compileAsync=function(P,V,X=null){const q=this.compile(P,V,X);return new Promise(W=>{function Mt(){if(q.forEach(function(Pt){xt.get(Pt).currentProgram.isReady()&&q.delete(Pt)}),q.size===0){W(P);return}setTimeout(Mt,10)}Q.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Jt=null;function ve(P){Jt&&Jt(P)}function Ee(){Ae.stop()}function ie(){Ae.start()}const Ae=new bf;Ae.setAnimationLoop(ve),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(P){Jt=P,Et.setAnimationLoop(P),P===null?Ae.stop():Ae.start()},Et.addEventListener("sessionstart",Ee),Et.addEventListener("sessionend",ie),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(V),V=Et.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,V,S),m=Lt.get(P,y.length),m.init(),y.push(m),St.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),j.setFromProjectionMatrix(St),_t=this.localClippingEnabled,it=kt.init(this.clippingPlanes,_t),x=yt.get(P,p.length),x.init(),p.push(x),An(P,V,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort($,Y),this.info.render.frame++,it===!0&&kt.beginShadows();const X=m.state.shadowsArray;if(rt.render(X,P,V),it===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(x,P),m.setupLights(_._useLegacyLights),V.isArrayCamera){const q=V.cameras;for(let W=0,Mt=q.length;W<Mt;W++){const Pt=q[W];yl(x,P,Pt,Pt.viewport)}}else yl(x,P,V);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(_,P,V),D.resetDefaultState(),C=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function An(P,V,X,q){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)X=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||j.intersectsSprite(P)){q&&Ft.setFromMatrixPosition(P.matrixWorld).applyMatrix4(St);const Pt=nt.update(P),Nt=P.material;Nt.visible&&x.push(P,Pt,Nt,X,Ft.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||j.intersectsObject(P))){const Pt=nt.update(P),Nt=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ft.copy(P.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ft.copy(Pt.boundingSphere.center)),Ft.applyMatrix4(P.matrixWorld).applyMatrix4(St)),Array.isArray(Nt)){const zt=Pt.groups;for(let Yt=0,Ht=zt.length;Yt<Ht;Yt++){const Gt=zt[Yt],be=Nt[Gt.materialIndex];be&&be.visible&&x.push(P,Pt,be,X,Ft.z,Gt)}}else Nt.visible&&x.push(P,Pt,Nt,X,Ft.z,null)}}const Mt=P.children;for(let Pt=0,Nt=Mt.length;Pt<Nt;Pt++)An(Mt[Pt],V,X,q)}function yl(P,V,X,q){const W=P.opaque,Mt=P.transmissive,Pt=P.transparent;m.setupLightsView(X),it===!0&&kt.setGlobalState(_.clippingPlanes,X),Mt.length>0&&pd(W,Mt,V,X),q&&J.viewport(T.copy(q)),W.length>0&&Rr(W,V,X),Mt.length>0&&Rr(Mt,V,X),Pt.length>0&&Rr(Pt,V,X),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function pd(P,V,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Mt=lt.isWebGL2;At===null&&(At=new Bi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?vr:fi,minFilter:xr,samples:Mt?4:0})),_.getDrawingBufferSize(It),Mt?At.setSize(It.x,It.y):At.setSize(Uc(It.x),Uc(It.y));const Pt=_.getRenderTarget();_.setRenderTarget(At),_.getClearColor(z),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Nt=_.toneMapping;_.toneMapping=hi,Rr(P,X,q),R.updateMultisampleRenderTarget(At),R.updateRenderTargetMipmap(At);let zt=!1;for(let Yt=0,Ht=V.length;Yt<Ht;Yt++){const Gt=V[Yt],be=Gt.object,Ke=Gt.geometry,Ue=Gt.material,Nn=Gt.group;if(Ue.side===cn&&be.layers.test(q.layers)){const me=Ue.side;Ue.side=Ve,Ue.needsUpdate=!0,Ml(be,X,q,Ke,Ue,Nn),Ue.side=me,Ue.needsUpdate=!0,zt=!0}}zt===!0&&(R.updateMultisampleRenderTarget(At),R.updateRenderTargetMipmap(At)),_.setRenderTarget(Pt),_.setClearColor(z,L),_.toneMapping=Nt}function Rr(P,V,X){const q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,Mt=P.length;W<Mt;W++){const Pt=P[W],Nt=Pt.object,zt=Pt.geometry,Yt=q===null?Pt.material:q,Ht=Pt.group;Nt.layers.test(X.layers)&&Ml(Nt,V,X,zt,Yt,Ht)}}function Ml(P,V,X,q,W,Mt){P.onBeforeRender(_,V,X,q,W,Mt),P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(_,V,X,q,P,Mt),W.transparent===!0&&W.side===cn&&W.forceSinglePass===!1?(W.side=Ve,W.needsUpdate=!0,_.renderBufferDirect(X,V,q,W,P,Mt),W.side=In,W.needsUpdate=!0,_.renderBufferDirect(X,V,q,W,P,Mt),W.side=cn):_.renderBufferDirect(X,V,q,W,P,Mt),P.onAfterRender(_,V,X,q,W,Mt)}function Pr(P,V,X){V.isScene!==!0&&(V=Tt);const q=xt.get(P),W=m.state.lights,Mt=m.state.shadowsArray,Pt=W.state.version,Nt=bt.getParameters(P,W.state,Mt,V,X),zt=bt.getProgramCacheKey(Nt);let Yt=q.programs;q.environment=P.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(P.isMeshStandardMaterial?G:A).get(P.envMap||q.environment),Yt===void 0&&(P.addEventListener("dispose",mt),Yt=new Map,q.programs=Yt);let Ht=Yt.get(zt);if(Ht!==void 0){if(q.currentProgram===Ht&&q.lightsStateVersion===Pt)return El(P,Nt),Ht}else Nt.uniforms=bt.getUniforms(P),P.onBuild(X,Nt,_),P.onBeforeCompile(Nt,_),Ht=bt.acquireProgram(Nt,zt),Yt.set(zt,Ht),q.uniforms=Nt.uniforms;const Gt=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Gt.clippingPlanes=kt.uniform),El(P,Nt),q.needsLights=_d(P),q.lightsStateVersion=Pt,q.needsLights&&(Gt.ambientLightColor.value=W.state.ambient,Gt.lightProbe.value=W.state.probe,Gt.directionalLights.value=W.state.directional,Gt.directionalLightShadows.value=W.state.directionalShadow,Gt.spotLights.value=W.state.spot,Gt.spotLightShadows.value=W.state.spotShadow,Gt.rectAreaLights.value=W.state.rectArea,Gt.ltc_1.value=W.state.rectAreaLTC1,Gt.ltc_2.value=W.state.rectAreaLTC2,Gt.pointLights.value=W.state.point,Gt.pointLightShadows.value=W.state.pointShadow,Gt.hemisphereLights.value=W.state.hemi,Gt.directionalShadowMap.value=W.state.directionalShadowMap,Gt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Gt.spotShadowMap.value=W.state.spotShadowMap,Gt.spotLightMatrix.value=W.state.spotLightMatrix,Gt.spotLightMap.value=W.state.spotLightMap,Gt.pointShadowMap.value=W.state.pointShadowMap,Gt.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Ht,q.uniformsList=null,Ht}function Sl(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Uo.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function El(P,V){const X=xt.get(P);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function md(P,V,X,q,W){V.isScene!==!0&&(V=Tt),R.resetTextureUnits();const Mt=V.fog,Pt=q.isMeshStandardMaterial?V.environment:null,Nt=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Zn,zt=(q.isMeshStandardMaterial?G:A).get(q.envMap||Pt),Yt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ht=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Gt=!!X.morphAttributes.position,be=!!X.morphAttributes.normal,Ke=!!X.morphAttributes.color;let Ue=hi;q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ue=_.toneMapping);const Nn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,me=Nn!==void 0?Nn.length:0,jt=xt.get(q),fa=m.state.lights;if(it===!0&&(_t===!0||P!==M)){const nn=P===M&&q.id===C;kt.setState(q,P,nn)}let ye=!1;q.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==fa.state.version||jt.outputColorSpace!==Nt||W.isBatchedMesh&&jt.batching===!1||!W.isBatchedMesh&&jt.batching===!0||W.isInstancedMesh&&jt.instancing===!1||!W.isInstancedMesh&&jt.instancing===!0||W.isSkinnedMesh&&jt.skinning===!1||!W.isSkinnedMesh&&jt.skinning===!0||W.isInstancedMesh&&jt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&jt.instancingColor===!1&&W.instanceColor!==null||jt.envMap!==zt||q.fog===!0&&jt.fog!==Mt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==kt.numPlanes||jt.numIntersection!==kt.numIntersection)||jt.vertexAlphas!==Yt||jt.vertexTangents!==Ht||jt.morphTargets!==Gt||jt.morphNormals!==be||jt.morphColors!==Ke||jt.toneMapping!==Ue||lt.isWebGL2===!0&&jt.morphTargetsCount!==me)&&(ye=!0):(ye=!0,jt.__version=q.version);let _i=jt.currentProgram;ye===!0&&(_i=Pr(q,V,W));let bl=!1,Hs=!1,da=!1;const ke=_i.getUniforms(),xi=jt.uniforms;if(J.useProgram(_i.program)&&(bl=!0,Hs=!0,da=!0),q.id!==C&&(C=q.id,Hs=!0),bl||M!==P){ke.setValue(O,"projectionMatrix",P.projectionMatrix),ke.setValue(O,"viewMatrix",P.matrixWorldInverse);const nn=ke.map.cameraPosition;nn!==void 0&&nn.setValue(O,Ft.setFromMatrixPosition(P.matrixWorld)),lt.logarithmicDepthBuffer&&ke.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ke.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Hs=!0,da=!0)}if(W.isSkinnedMesh){ke.setOptional(O,W,"bindMatrix"),ke.setOptional(O,W,"bindMatrixInverse");const nn=W.skeleton;nn&&(lt.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),ke.setValue(O,"boneTexture",nn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(ke.setOptional(O,W,"batchingTexture"),ke.setValue(O,"batchingTexture",W._matricesTexture,R));const pa=X.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&lt.isWebGL2===!0)&&qt.update(W,X,_i),(Hs||jt.receiveShadow!==W.receiveShadow)&&(jt.receiveShadow=W.receiveShadow,ke.setValue(O,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(xi.envMap.value=zt,xi.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Hs&&(ke.setValue(O,"toneMappingExposure",_.toneMappingExposure),jt.needsLights&&gd(xi,da),Mt&&q.fog===!0&&pt.refreshFogUniforms(xi,Mt),pt.refreshMaterialUniforms(xi,q,Z,k,At),Uo.upload(O,Sl(jt),xi,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Uo.upload(O,Sl(jt),xi,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ke.setValue(O,"center",W.center),ke.setValue(O,"modelViewMatrix",W.modelViewMatrix),ke.setValue(O,"normalMatrix",W.normalMatrix),ke.setValue(O,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const nn=q.uniformsGroups;for(let ma=0,xd=nn.length;ma<xd;ma++)if(lt.isWebGL2){const Tl=nn[ma];ut.update(Tl,_i),ut.bind(Tl,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function gd(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function _d(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,V,X){xt.get(P.texture).__webglTexture=V,xt.get(P.depthTexture).__webglTexture=X;const q=xt.get(P);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,V){const X=xt.get(P);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,X=0){S=P,b=V,E=X;let q=!0,W=null,Mt=!1,Pt=!1;if(P){const zt=xt.get(P);zt.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(O.FRAMEBUFFER,null),q=!1):zt.__webglFramebuffer===void 0?R.setupRenderTarget(P):zt.__hasExternalTextures&&R.rebindTextures(P,xt.get(P.texture).__webglTexture,xt.get(P.depthTexture).__webglTexture);const Yt=P.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Pt=!0);const Ht=xt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?W=Ht[V][X]:W=Ht[V],Mt=!0):lt.isWebGL2&&P.samples>0&&R.useMultisampledRTT(P)===!1?W=xt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?W=Ht[X]:W=Ht,T.copy(P.viewport),I.copy(P.scissor),U=P.scissorTest}else T.copy(tt).multiplyScalar(Z).floor(),I.copy(et).multiplyScalar(Z).floor(),U=gt;if(J.bindFramebuffer(O.FRAMEBUFFER,W)&&lt.drawBuffers&&q&&J.drawBuffers(P,W),J.viewport(T),J.scissor(I),J.setScissorTest(U),Mt){const zt=xt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,zt.__webglTexture,X)}else if(Pt){const zt=xt.get(P.texture),Yt=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.__webglTexture,X||0,Yt)}C=-1},this.readRenderTargetPixels=function(P,V,X,q,W,Mt,Pt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=xt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){J.bindFramebuffer(O.FRAMEBUFFER,Nt);try{const zt=P.texture,Yt=zt.format,Ht=zt.type;if(Yt!==bn&&vt.convert(Yt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ht===vr&&(Q.has("EXT_color_buffer_half_float")||lt.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ht!==fi&&vt.convert(Ht)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===ai&&(lt.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-q&&X>=0&&X<=P.height-W&&O.readPixels(V,X,q,W,vt.convert(Yt),vt.convert(Ht),Mt)}finally{const zt=S!==null?xt.get(S).__webglFramebuffer:null;J.bindFramebuffer(O.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(P,V,X=0){const q=Math.pow(2,-X),W=Math.floor(V.image.width*q),Mt=Math.floor(V.image.height*q);R.setTexture2D(V,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,P.x,P.y,W,Mt),J.unbindTexture()},this.copyTextureToTexture=function(P,V,X,q=0){const W=V.image.width,Mt=V.image.height,Pt=vt.convert(X.format),Nt=vt.convert(X.type);R.setTexture2D(X,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment),V.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,q,P.x,P.y,W,Mt,Pt,Nt,V.image.data):V.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,q,P.x,P.y,V.mipmaps[0].width,V.mipmaps[0].height,Pt,V.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,q,P.x,P.y,Pt,Nt,V.image),q===0&&X.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(P,V,X,q,W=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=P.max.x-P.min.x+1,Pt=P.max.y-P.min.y+1,Nt=P.max.z-P.min.z+1,zt=vt.convert(q.format),Yt=vt.convert(q.type);let Ht;if(q.isData3DTexture)R.setTexture3D(q,0),Ht=O.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)R.setTexture2DArray(q,0),Ht=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment);const Gt=O.getParameter(O.UNPACK_ROW_LENGTH),be=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ke=O.getParameter(O.UNPACK_SKIP_PIXELS),Ue=O.getParameter(O.UNPACK_SKIP_ROWS),Nn=O.getParameter(O.UNPACK_SKIP_IMAGES),me=X.isCompressedTexture?X.mipmaps[W]:X.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,me.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,me.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,P.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,P.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,P.min.z),X.isDataTexture||X.isData3DTexture?O.texSubImage3D(Ht,W,V.x,V.y,V.z,Mt,Pt,Nt,zt,Yt,me.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ht,W,V.x,V.y,V.z,Mt,Pt,Nt,zt,me.data)):O.texSubImage3D(Ht,W,V.x,V.y,V.z,Mt,Pt,Nt,zt,Yt,me),O.pixelStorei(O.UNPACK_ROW_LENGTH,Gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ke),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ue),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Nn),W===0&&q.generateMipmaps&&O.generateMipmap(Ht),J.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),J.unbindTexture()},this.resetState=function(){b=0,E=0,S=null,J.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===el?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===ta?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Be?Ni:hf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ni?Be:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ax extends Tx{}Ax.prototype.isWebGL1Renderer=!0;class Df{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new Df(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wx extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class qu extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const us=new te,Yu=new te,Jr=[],Zu=new Pe,Rx=new te,Ys=new $t,Zs=new Wi;class z1 extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Zu.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Zu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Zs.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Yu.multiplyMatrices(n,us),Ys.matrixWorld=Yu,Ys.raycast(t,Jr);for(let a=0,o=Jr.length;a<o;a++){const c=Jr[a];c.instanceId=r,c.object=this,e.push(c)}Jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qu(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends Bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ju=new w,$u=new w,Ku=new te,qa=new Fs,Qr=new Wi;class rl extends Ce{constructor(t=new ze,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ju.fromBufferAttribute(e,s-1),$u.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ju.distanceTo($u);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;Ku.copy(s).invert(),qa.copy(t.ray).applyMatrix4(Ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new w,u=new w,f=new w,h=new w,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=p,v=y-1;_<v;_+=d){const b=g.getX(_),E=g.getX(_+1);if(l.fromBufferAttribute(m,b),u.fromBufferAttribute(m,E),qa.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(h);C<t.near||C>t.far||e.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let _=p,v=y-1;_<v;_+=d){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),qa.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(h);E<t.near||E>t.far||e.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ju=new w,Qu=new w;class If extends rl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ju.fromBufferAttribute(e,s),Qu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ju.distanceTo(Qu);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ct:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],r=[],a=[],o=new w,c=new te;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ol extends Un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new ct,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Px extends ol{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function al(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const to=new w,Ya=new al,Za=new al,ja=new al;class Uf extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(to.subVectors(s[0],s[1]).add(s[0]),l=to);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(to.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=to),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ya.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),Za.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),ja.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Za.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),ja.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Ya.calc(c),Za.calc(c),ja.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function th(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Cx(i,t){const e=1-i;return e*e*t}function Lx(i,t){return 2*(1-i)*i*t}function Dx(i,t){return i*i*t}function ur(i,t,e,n){return Cx(i,t)+Lx(i,e)+Dx(i,n)}function Ix(i,t){const e=1-i;return e*e*e*t}function Ux(i,t){const e=1-i;return 3*e*e*i*t}function Nx(i,t){return 3*(1-i)*i*i*t}function Ox(i,t){return i*i*i*t}function hr(i,t,e,n,s){return Ix(i,t)+Ux(i,e)+Nx(i,n)+Ox(i,s)}class Nf extends Un{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fx extends Un{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y),hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Of extends Un{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bx extends Un{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ff extends Un{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ur(t,s.x,r.x,a.x),ur(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bf extends Un{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ur(t,s.x,r.x,a.x),ur(t,s.y,r.y,a.y),ur(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zf extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(th(o,c.x,l.x,u.x,f.x),th(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var qo=Object.freeze({__proto__:null,ArcCurve:Px,CatmullRomCurve3:Uf,CubicBezierCurve:Nf,CubicBezierCurve3:Fx,EllipseCurve:ol,LineCurve:Of,LineCurve3:Bx,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:Bf,SplineCurve:zf});class zx extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new qo[s.type]().fromJSON(s))}return this}}class di extends zx{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Of(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ff(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Nf(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new ol(t,e,n,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class wr extends ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const x=[],m=n/2;let p=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function y(){const v=new w,b=new w;let E=0;const S=(e-t)/n;for(let C=0;C<=r;C++){const M=[],T=C/r,I=T*(e-t)+t;for(let U=0;U<=s;U++){const z=U/s,L=z*c+o,N=Math.sin(L),k=Math.cos(L);b.x=I*N,b.y=-T*n+m,b.z=I*k,f.push(b.x,b.y,b.z),v.set(N,S,k).normalize(),h.push(v.x,v.y,v.z),d.push(z,1-T),M.push(g++)}x.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const T=x[M][C],I=x[M+1][C],U=x[M+1][C+1],z=x[M][C+1];u.push(T,I,z),u.push(I,U,z),E+=6}l.addGroup(p,E,0),p+=E}function _(v){const b=g,E=new ct,S=new w;let C=0;const M=v===!0?t:e,T=v===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*T,0),h.push(0,T,0),d.push(.5,.5),g++;const I=g;for(let U=0;U<=s;U++){const L=U/s*c+o,N=Math.cos(L),k=Math.sin(L);S.x=M*k,S.y=m*T,S.z=M*N,f.push(S.x,S.y,S.z),h.push(0,T,0),E.x=N*.5+.5,E.y=k*.5*T+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){const z=b+U,L=I+U;v===!0?u.push(L,L+1,z):u.push(L+1,L,z),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mi extends di{constructor(t){super(t),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new di().fromJSON(s))}return this}}const kx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=kf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,f,h,d;if(n&&(r=Xx(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)f=i[g],h=i[g+1],f<o&&(o=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return yr(r,a,e,o,c,d,0),a}};function kf(i,t,e,n,s){let r,a;if(s===nv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=eh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=eh(r,i[r],i[r+1],a);return a&&ra(a,a.next)&&(Sr(a),a=a.next),a}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ra(e,e.next)||_e(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&$x(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Gx(i,n,s,r):Hx(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Sr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Vx(Hi(i),t,e),yr(i,t,e,n,s,r,2)):a===2&&Wx(i,t,e,n,s,r):yr(Hi(i),t,e,n,s,r,1);break}}}function Hx(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<c?o<l?o:l:c<l?c:l,h=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Ts(s,o,r,c,a,l,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,f=r.y,h=a.y,d=o<c?o<l?o:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,x=o>c?o>l?o:l:c>l?c:l,m=u>f?u>h?u:h:f>h?f:h,p=Oc(d,g,t,e,n),y=Oc(x,m,t,e,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Ts(o,u,c,f,l,h,_.x,_.y)&&_e(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ts(o,u,c,f,l,h,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Ts(o,u,c,f,l,h,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Ts(o,u,c,f,l,h,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Vx(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ra(s,r)&&Hf(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Sr(n),Sr(n.next),n=i=r),n=n.next}while(n!==i);return Hi(n)}function Wx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qx(a,o)){let c=Gf(a,o);a=Hi(a,a.next),c=Hi(c,c.next),yr(a,t,e,n,s,r,0),yr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xx(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=kf(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Jx(l));for(s.sort(qx),r=0;r<s.length;r++)e=Yx(s[r],e);return e}function qx(i,t){return i.x-t.x}function Yx(i,t){const e=Zx(i,t);if(!e)return t;const n=Gf(e,i);return Hi(n,n.next),Hi(e,e.next)}function Zx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ts(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Mr(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&jx(s,e)))&&(s=e,u=f)),e=e.next;while(e!==o);return s}function jx(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function $x(i,t,e,n){let s=i;do s.z===0&&(s.z=Oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kx(s)}function Kx(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ts(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Qx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tv(i,t)&&(Mr(i,t)&&Mr(t,i)&&ev(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||ra(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ra(i,t){return i.x===t.x&&i.y===t.y}function Hf(i,t,e,n){const s=no(_e(i,t,e)),r=no(_e(i,t,n)),a=no(_e(e,n,i)),o=no(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&eo(i,e,t)||r===0&&eo(i,n,t)||a===0&&eo(e,i,n)||o===0&&eo(e,t,n))}function eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function no(i){return i>0?1:i<0?-1:0}function tv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Mr(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function ev(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gf(i,t){const e=new Fc(i.i,i.x,i.y),n=new Fc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function eh(i,t,e,n){const s=new Fc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class fr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return fr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];nh(t),ih(n,t);let a=t.length;e.forEach(nh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,ih(n,e[c]);const o=kx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function nh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $n extends ze{constructor(t=new mi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new xe(s,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:iv;let _,v=!1,b,E,S,C;p&&(_=p.getSpacedPoints(u),v=!0,h=!1,b=p.computeFrenetFrames(u,!1),E=new w,S=new w,C=new w),h||(m=0,d=0,g=0,x=0);const M=o.extractPoints(l);let T=M.shape;const I=M.holes;if(!fr.isClockWise(T)){T=T.reverse();for(let O=0,ft=I.length;O<ft;O++){const Q=I[O];fr.isClockWise(Q)&&(I[O]=Q.reverse())}}const z=fr.triangulateShape(T,I),L=T;for(let O=0,ft=I.length;O<ft;O++){const Q=I[O];T=T.concat(Q)}function N(O,ft,Q){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(ft,Q)}const k=T.length,Z=z.length;function $(O,ft,Q){let lt,J,wt;const xt=O.x-ft.x,R=O.y-ft.y,A=Q.x-O.x,G=Q.y-O.y,ot=xt*xt+R*R,st=xt*G-R*A;if(Math.abs(st)>Number.EPSILON){const nt=Math.sqrt(ot),bt=Math.sqrt(A*A+G*G),pt=ft.x-R/nt,yt=ft.y+xt/nt,Lt=Q.x-G/bt,kt=Q.y+A/bt,rt=((Lt-pt)*G-(kt-yt)*A)/(xt*G-R*A);lt=pt+xt*rt-O.x,J=yt+R*rt-O.y;const ee=lt*lt+J*J;if(ee<=2)return new ct(lt,J);wt=Math.sqrt(ee/2)}else{let nt=!1;xt>Number.EPSILON?A>Number.EPSILON&&(nt=!0):xt<-Number.EPSILON?A<-Number.EPSILON&&(nt=!0):Math.sign(R)===Math.sign(G)&&(nt=!0),nt?(lt=-R,J=xt,wt=Math.sqrt(ot)):(lt=xt,J=R,wt=Math.sqrt(ot/2))}return new ct(lt/wt,J/wt)}const Y=[];for(let O=0,ft=L.length,Q=ft-1,lt=O+1;O<ft;O++,Q++,lt++)Q===ft&&(Q=0),lt===ft&&(lt=0),Y[O]=$(L[O],L[Q],L[lt]);const tt=[];let et,gt=Y.concat();for(let O=0,ft=I.length;O<ft;O++){const Q=I[O];et=[];for(let lt=0,J=Q.length,wt=J-1,xt=lt+1;lt<J;lt++,wt++,xt++)wt===J&&(wt=0),xt===J&&(xt=0),et[lt]=$(Q[lt],Q[wt],Q[xt]);tt.push(et),gt=gt.concat(et)}for(let O=0;O<m;O++){const ft=O/m,Q=d*Math.cos(ft*Math.PI/2),lt=g*Math.sin(ft*Math.PI/2)+x;for(let J=0,wt=L.length;J<wt;J++){const xt=N(L[J],Y[J],lt);St(xt.x,xt.y,-Q)}for(let J=0,wt=I.length;J<wt;J++){const xt=I[J];et=tt[J];for(let R=0,A=xt.length;R<A;R++){const G=N(xt[R],et[R],lt);St(G.x,G.y,-Q)}}}const j=g+x;for(let O=0;O<k;O++){const ft=h?N(T[O],gt[O],j):T[O];v?(S.copy(b.normals[0]).multiplyScalar(ft.x),E.copy(b.binormals[0]).multiplyScalar(ft.y),C.copy(_[0]).add(S).add(E),St(C.x,C.y,C.z)):St(ft.x,ft.y,0)}for(let O=1;O<=u;O++)for(let ft=0;ft<k;ft++){const Q=h?N(T[ft],gt[ft],j):T[ft];v?(S.copy(b.normals[O]).multiplyScalar(Q.x),E.copy(b.binormals[O]).multiplyScalar(Q.y),C.copy(_[O]).add(S).add(E),St(C.x,C.y,C.z)):St(Q.x,Q.y,f/u*O)}for(let O=m-1;O>=0;O--){const ft=O/m,Q=d*Math.cos(ft*Math.PI/2),lt=g*Math.sin(ft*Math.PI/2)+x;for(let J=0,wt=L.length;J<wt;J++){const xt=N(L[J],Y[J],lt);St(xt.x,xt.y,f+Q)}for(let J=0,wt=I.length;J<wt;J++){const xt=I[J];et=tt[J];for(let R=0,A=xt.length;R<A;R++){const G=N(xt[R],et[R],lt);v?St(G.x,G.y+_[u-1].y,_[u-1].x+Q):St(G.x,G.y,f+Q)}}}it(),_t();function it(){const O=s.length/3;if(h){let ft=0,Q=k*ft;for(let lt=0;lt<Z;lt++){const J=z[lt];It(J[2]+Q,J[1]+Q,J[0]+Q)}ft=u+m*2,Q=k*ft;for(let lt=0;lt<Z;lt++){const J=z[lt];It(J[0]+Q,J[1]+Q,J[2]+Q)}}else{for(let ft=0;ft<Z;ft++){const Q=z[ft];It(Q[2],Q[1],Q[0])}for(let ft=0;ft<Z;ft++){const Q=z[ft];It(Q[0]+k*u,Q[1]+k*u,Q[2]+k*u)}}n.addGroup(O,s.length/3-O,0)}function _t(){const O=s.length/3;let ft=0;At(L,ft),ft+=L.length;for(let Q=0,lt=I.length;Q<lt;Q++){const J=I[Q];At(J,ft),ft+=J.length}n.addGroup(O,s.length/3-O,1)}function At(O,ft){let Q=O.length;for(;--Q>=0;){const lt=Q;let J=Q-1;J<0&&(J=O.length-1);for(let wt=0,xt=u+m*2;wt<xt;wt++){const R=k*wt,A=k*(wt+1),G=ft+lt+R,ot=ft+J+R,st=ft+J+A,nt=ft+lt+A;Ft(G,ot,st,nt)}}}function St(O,ft,Q){c.push(O),c.push(ft),c.push(Q)}function It(O,ft,Q){Tt(O),Tt(ft),Tt(Q);const lt=s.length/3,J=y.generateTopUV(n,s,lt-3,lt-2,lt-1);Ot(J[0]),Ot(J[1]),Ot(J[2])}function Ft(O,ft,Q,lt){Tt(O),Tt(ft),Tt(lt),Tt(ft),Tt(Q),Tt(lt);const J=s.length/3,wt=y.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);Ot(wt[0]),Ot(wt[1]),Ot(wt[3]),Ot(wt[1]),Ot(wt[2]),Ot(wt[3])}function Tt(O){s.push(c[O*3+0]),s.push(c[O*3+1]),s.push(c[O*3+2])}function Ot(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qo[s.type]().fromJSON(s)),new $n(n,t.options)}}const iv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ct(r,a),new ct(o,c),new ct(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ct(a,1-c),new ct(l,1-f),new ct(h,1-g),new ct(x,1-p)]:[new ct(o,1-c),new ct(u,1-f),new ct(d,1-g),new ct(m,1-p)]}};function sv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class cl extends ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new w,f=new w,h=new w;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,y=(s+1)*d+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ll extends ze{constructor(t=new Bf(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,c=new w,l=new ct;let u=new w;const f=[],h=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),y(),p()}function m(_){u=t.getPointAt(_/e,u);const v=a.normals[_],b=a.binormals[_];for(let E=0;E<=s;E++){const S=E/s*Math.PI*2,C=Math.sin(S),M=-Math.cos(S);c.x=M*v.x+C*b.x,c.y=M*v.y+C*b.y,c.z=M*v.z+C*b.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){const b=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),S=(s+1)*_+v,C=(s+1)*(_-1)+v;g.push(b,E,C),g.push(E,S,C)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)l.x=_/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ll(new qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Er extends Bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ff,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rv extends Ar{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class ul extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class k1 extends ul{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $a=new te,sh=new w,rh=new w;class Vf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oh=new te,js=new w,Ka=new w;class ov extends Vf{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(t.matrixWorld),n.position.copy(js),Ka.copy(n.position),Ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ka),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}}class av extends ul{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ov}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class cv extends Vf{constructor(){super(new Tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class H1 extends ul{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new cv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class G1{constructor(t,e,n=0,s=1/0){this.ray=new Fs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Bc(t,this,n,e),n.sort(ah),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bc(t[s],this,n,e);return n.sort(ah),n}}function ah(i,t){return i.distance-t.distance}function Bc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Bc(s[r],t,e,!0)}}class ch{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lh=new w,io=new w;class pn{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){lh.subVectors(t,this.start),io.subVectors(this.end,this.start);const n=io.dot(io);let r=io.dot(lh)/n;return e&&(r=Oe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class lv extends If{constructor(t=10,e=10,n=4473924,s=8947848){n=new Qt(n),s=new Qt(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let h=0,d=0,g=-o;h<=e;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const x=h===r?n:s;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}const u=new ze;u.setAttribute("position",new xe(c,3)),u.setAttribute("color",new xe(l,3));const f=new Ar({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const so=new Pe;class V1 extends If{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new ze;r.setIndex(new Le(n,1)),r.setAttribute("position",new Le(s,3)),super(r,new Ar({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&so.setFromObject(this.object),so.isEmpty())return;const e=so.min,n=so.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const uh=new w;let ro,Ja;class uv extends Ce{constructor(t=new w(0,0,1),e=new w(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ro===void 0&&(ro=new ze,ro.setAttribute("position",new xe([0,0,0,0,1,0],3)),Ja=new wr(0,.5,1,5,1),Ja.translate(0,-.5,0)),this.position.copy(e),this.line=new rl(ro,new Ar({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $t(Ja,new na({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{uh.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(uh,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const hh={type:"change"},Qa={type:"start"},fh={type:"end"},oo=new Fs,dh=new Sn,hv=Math.cos(70*vp.DEG2RAD);class W1 extends Vi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Lt),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Lt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hh),n.update(),r=s.NONE},this.update=function(){const D=new w,ut=new zi().setFromUnitVectors(t.up,new w(0,1,0)),Rt=ut.clone().invert(),Et=new w,at=new zi,B=new w,ht=2*Math.PI;return function(Ut=null){const Dt=n.object.position;D.copy(Dt).sub(n.target),D.applyQuaternion(ut),o.setFromVector3(D),n.autoRotate&&r===s.NONE&&U(T(Ut)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Kt=n.minAzimuthAngle,Jt=n.maxAzimuthAngle;isFinite(Kt)&&isFinite(Jt)&&(Kt<-Math.PI?Kt+=ht:Kt>Math.PI&&(Kt-=ht),Jt<-Math.PI?Jt+=ht:Jt>Math.PI&&(Jt-=ht),Kt<=Jt?o.theta=Math.max(Kt,Math.min(Jt,o.theta)):o.theta=o.theta>(Kt+Jt)/2?Math.max(Kt,o.theta):Math.min(Jt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=tt(o.radius):o.radius=tt(o.radius*l),D.setFromSpherical(o),D.applyQuaternion(Rt),Dt.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ve=!1;if(n.zoomToCursor&&E){let Ee=null;if(n.object.isPerspectiveCamera){const ie=D.length();Ee=tt(ie*l);const Ae=ie-Ee;n.object.position.addScaledVector(v,Ae),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ie=new w(b.x,b.y,0);ie.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ve=!0;const Ae=new w(b.x,b.y,0);Ae.unproject(n.object),n.object.position.sub(Ae).add(ie),n.object.updateMatrixWorld(),Ee=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ee!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ee).add(n.object.position):(oo.origin.copy(n.object.position),oo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(oo.direction))<hv?t.lookAt(n.target):(dh.setFromNormalAndCoplanarPoint(n.object.up,n.target),oo.intersectPlane(dh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ve=!0);return l=1,E=!1,ve||Et.distanceToSquared(n.object.position)>a||8*(1-at.dot(n.object.quaternion))>a||B.distanceToSquared(n.target)>0?(n.dispatchEvent(hh),Et.copy(n.object.position),at.copy(n.object.quaternion),B.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",nt),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Lt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new ch,c=new ch;let l=1;const u=new w,f=new ct,h=new ct,d=new ct,g=new ct,x=new ct,m=new ct,p=new ct,y=new ct,_=new ct,v=new w,b=new ct;let E=!1;const S=[],C={};let M=!1;function T(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function I(D){const ut=Math.abs(D*.01);return Math.pow(.95,n.zoomSpeed*ut)}function U(D){c.theta-=D}function z(D){c.phi-=D}const L=function(){const D=new w;return function(Rt,Et){D.setFromMatrixColumn(Et,0),D.multiplyScalar(-Rt),u.add(D)}}(),N=function(){const D=new w;return function(Rt,Et){n.screenSpacePanning===!0?D.setFromMatrixColumn(Et,1):(D.setFromMatrixColumn(Et,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Rt),u.add(D)}}(),k=function(){const D=new w;return function(Rt,Et){const at=n.domElement;if(n.object.isPerspectiveCamera){const B=n.object.position;D.copy(B).sub(n.target);let ht=D.length();ht*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Rt*ht/at.clientHeight,n.object.matrix),N(2*Et*ht/at.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Rt*(n.object.right-n.object.left)/n.object.zoom/at.clientWidth,n.object.matrix),N(Et*(n.object.top-n.object.bottom)/n.object.zoom/at.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(D,ut){if(!n.zoomToCursor)return;E=!0;const Rt=n.domElement.getBoundingClientRect(),Et=D-Rt.left,at=ut-Rt.top,B=Rt.width,ht=Rt.height;b.x=Et/B*2-1,b.y=-(at/ht)*2+1,v.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function tt(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function et(D){f.set(D.clientX,D.clientY)}function gt(D){Y(D.clientX,D.clientX),p.set(D.clientX,D.clientY)}function j(D){g.set(D.clientX,D.clientY)}function it(D){h.set(D.clientX,D.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ut=n.domElement;U(2*Math.PI*d.x/ut.clientHeight),z(2*Math.PI*d.y/ut.clientHeight),f.copy(h),n.update()}function _t(D){y.set(D.clientX,D.clientY),_.subVectors(y,p),_.y>0?Z(I(_.y)):_.y<0&&$(I(_.y)),p.copy(y),n.update()}function At(D){x.set(D.clientX,D.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(x),n.update()}function St(D){Y(D.clientX,D.clientY),D.deltaY<0?$(I(D.deltaY)):D.deltaY>0&&Z(I(D.deltaY)),n.update()}function It(D){let ut=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),ut=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),ut=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),ut=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),ut=!0;break}ut&&(D.preventDefault(),n.update())}function Ft(D){if(S.length===1)f.set(D.pageX,D.pageY);else{const ut=vt(D),Rt=.5*(D.pageX+ut.x),Et=.5*(D.pageY+ut.y);f.set(Rt,Et)}}function Tt(D){if(S.length===1)g.set(D.pageX,D.pageY);else{const ut=vt(D),Rt=.5*(D.pageX+ut.x),Et=.5*(D.pageY+ut.y);g.set(Rt,Et)}}function Ot(D){const ut=vt(D),Rt=D.pageX-ut.x,Et=D.pageY-ut.y,at=Math.sqrt(Rt*Rt+Et*Et);p.set(0,at)}function O(D){n.enableZoom&&Ot(D),n.enablePan&&Tt(D)}function ft(D){n.enableZoom&&Ot(D),n.enableRotate&&Ft(D)}function Q(D){if(S.length==1)h.set(D.pageX,D.pageY);else{const Rt=vt(D),Et=.5*(D.pageX+Rt.x),at=.5*(D.pageY+Rt.y);h.set(Et,at)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ut=n.domElement;U(2*Math.PI*d.x/ut.clientHeight),z(2*Math.PI*d.y/ut.clientHeight),f.copy(h)}function lt(D){if(S.length===1)x.set(D.pageX,D.pageY);else{const ut=vt(D),Rt=.5*(D.pageX+ut.x),Et=.5*(D.pageY+ut.y);x.set(Rt,Et)}m.subVectors(x,g).multiplyScalar(n.panSpeed),k(m.x,m.y),g.copy(x)}function J(D){const ut=vt(D),Rt=D.pageX-ut.x,Et=D.pageY-ut.y,at=Math.sqrt(Rt*Rt+Et*Et);y.set(0,at),_.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),Z(_.y),p.copy(y);const B=(D.pageX+ut.x)*.5,ht=(D.pageY+ut.y)*.5;Y(B,ht)}function wt(D){n.enableZoom&&J(D),n.enablePan&&lt(D)}function xt(D){n.enableZoom&&J(D),n.enableRotate&&Q(D)}function R(D){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",G)),qt(D),D.pointerType==="touch"?kt(D):ot(D))}function A(D){n.enabled!==!1&&(D.pointerType==="touch"?rt(D):st(D))}function G(D){Bt(D),S.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",G)),n.dispatchEvent(fh),r=s.NONE}function ot(D){let ut;switch(D.button){case 0:ut=n.mouseButtons.LEFT;break;case 1:ut=n.mouseButtons.MIDDLE;break;case 2:ut=n.mouseButtons.RIGHT;break;default:ut=-1}switch(ut){case qi.DOLLY:if(n.enableZoom===!1)return;gt(D),r=s.DOLLY;break;case qi.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;j(D),r=s.PAN}else{if(n.enableRotate===!1)return;et(D),r=s.ROTATE}break;case qi.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;et(D),r=s.ROTATE}else{if(n.enablePan===!1)return;j(D),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qa)}function st(D){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;it(D);break;case s.DOLLY:if(n.enableZoom===!1)return;_t(D);break;case s.PAN:if(n.enablePan===!1)return;At(D);break}}function nt(D){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(D.preventDefault(),n.dispatchEvent(Qa),St(bt(D)),n.dispatchEvent(fh))}function bt(D){const ut=D.deltaMode,Rt={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(ut){case 1:Rt.deltaY*=16;break;case 2:Rt.deltaY*=100;break}return D.ctrlKey&&!M&&(Rt.deltaY*=10),Rt}function pt(D){D.key==="Control"&&(M=!0,document.addEventListener("keyup",yt,{passive:!0,capture:!0}))}function yt(D){D.key==="Control"&&(M=!1,document.removeEventListener("keyup",yt,{passive:!0,capture:!0}))}function Lt(D){n.enabled===!1||n.enablePan===!1||It(D)}function kt(D){switch(Ct(D),S.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;Ft(D),r=s.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;Tt(D),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(D),r=s.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(D),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Qa)}function rt(D){switch(Ct(D),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(D),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;lt(D),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;wt(D),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(D),n.update();break;default:r=s.NONE}}function ee(D){n.enabled!==!1&&D.preventDefault()}function qt(D){S.push(D.pointerId)}function Bt(D){delete C[D.pointerId];for(let ut=0;ut<S.length;ut++)if(S[ut]==D.pointerId){S.splice(ut,1);return}}function Ct(D){let ut=C[D.pointerId];ut===void 0&&(ut=new ct,C[D.pointerId]=ut),ut.set(D.pageX,D.pageY)}function vt(D){const ut=D.pointerId===S[0]?S[1]:S[0];return C[ut]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",nt,{passive:!1}),document.addEventListener("keydown",pt,{passive:!0,capture:!0}),this.update()}}class X1 extends wx{constructor(t=null){super();const e=new Xi;e.deleteAttribute("uv");const n=new Er({side:Ve}),s=new Er;let r=5;t!==null&&t._useLegacyLights===!1&&(r=900);const a=new av(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new $t(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const c=new $t(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const l=new $t(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const u=new $t(e,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const f=new $t(e,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new $t(e,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new $t(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const g=new $t(e,hs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const x=new $t(e,hs(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const m=new $t(e,hs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new $t(e,hs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const y=new $t(e,hs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);const _=new $t(e,hs(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function hs(i){const t=new na;return t.color.setScalar(i),t}const fv=[[7.060427,6.000352],[3.999919,2.939232],[4.000225,.29989],[3.699881,398e-6],[4.000225,-.300131],[4.000225,-2.939306],[7.060427,-5.999815],[7.999695,-5.999815],[8.000177,-3.000597],[9.699897,-2.999727],[9.760698,-3.005912],[9.816977,-3.023435],[9.867895,-3.051154],[9.912249,-3.087853],[9.948838,-3.132318],[9.97646,-3.183332],[9.993915,-3.239679],[10,-3.300145],[10,-9.000069],[9.97916,-9.201546],[9.920954,-9.389233],[9.828845,-9.559087],[9.706843,-9.707084],[9.558959,-9.829198],[9.389203,-9.921405],[9.201585,-9.97968],[9.000116,-10],[3.300139,-10],[3.239338,-9.993249],[3.183059,-9.975795],[3.132141,-9.948174],[3.087787,-9.911586],[3.051198,-9.867234],[3.023576,-9.816318],[3.006121,-9.76004],[3.000036,-9.6996],[3.000036,-7.999454],[6.000048,-7.999639],[6.000048,-7.060425],[2.939541,-3.999917],[.299886,-3.999991],[88e-6,-3.699647],[-.29983,-3.999991],[-2.938999,-3.999991],[-6.000354,-7.060425],[-6.000354,-7.999694],[-2.99992,-7.999639],[-2.999735,-9.6996],[-3.006211,-9.760122],[-3.023726,-9.816469],[-3.051424,-9.867483],[-3.088081,-9.911948],[-3.132474,-9.948647],[-3.183381,-9.976366],[-3.239578,-9.993889],[-3.299842,-10],[-8.999514,-10],[-9.201551,-9.97944],[-9.389238,-9.921164],[-9.559091,-9.828957],[-9.707086,-9.706843],[-9.829199,-9.558847],[-9.921406,-9.388993],[-9.979681,-9.201306],[-10,-8.99981],[-10,-3.300145],[-9.993828,-3.239435],[-9.976305,-3.183008],[-9.948584,-3.131983],[-9.911883,-3.087557],[-9.867418,-3.050924],[-9.816403,-3.023277],[-9.760056,-3.005814],[-9.699591,-2.999727],[-7.999445,-2.999727],[-7.999876,-5.999815],[-7.060612,-5.999815],[-3.999619,-2.939306],[-3.999924,-.299279],[-3.700182,213e-6],[-3.999924,.300131],[-3.999924,2.939306],[-7.060121,6.000352],[-7.999876,6.000352],[-7.999876,3.000523],[-9.699591,3.000282],[-9.76029,3.006497],[-9.816719,3.02395],[-9.867744,3.051572],[-9.912171,3.088159],[-9.948804,3.132511],[-9.97645,3.183427],[-9.993913,3.239705],[-10,3.300145],[-10,9.000366],[-9.979164,9.202131],[-9.920949,9.389749],[-9.828817,9.559505],[-9.706772,9.707389],[-9.558816,9.829391],[-9.388952,9.9215],[-9.201184,9.979707],[-8.999514,10],[-3.299602,10],[-3.239212,9.994074],[-3.183015,9.976551],[-3.132109,9.948832],[-3.087715,9.912133],[-3.051058,9.867668],[-3.023361,9.816654],[-3.005845,9.760307],[-2.999735,9.699841],[-2.999735,7.999694],[-6.000354,7.99988],[-6.000354,7.06061],[-2.939851,4.000157],[-.299589,3.999917],[514e-6,3.700184],[.29983,3.999917],[2.9393,3.999917],[6.000048,7.060666],[6.000048,7.99988],[3.000221,7.99988],[3.000036,9.699841],[3.006482,9.760292],[3.023938,9.816719],[3.051562,9.867743],[3.088152,9.91217],[3.132506,9.948803],[3.183424,9.976449],[3.239702,9.993913],[3.300139,10],[9.000662,10],[9.202132,9.97941],[9.389749,9.921204],[9.559505,9.829095],[9.707389,9.707093],[9.829391,9.559209],[9.9215,9.389453],[9.979707,9.201835],[10,9.000366],[10,3.299238],[9.993553,3.239581],[9.976098,3.183305],[9.948474,3.13239],[9.911884,3.088036],[9.867529,3.051447],[9.816612,3.023823],[9.760334,3.006368],[9.699897,3.000282],[7.999751,3.000282],[8.000177,6.000352]],dv={outline:fv},Vt=i=>new Er(i),F={post:Vt({color:2368554,metalness:.75,roughness:.42}),rail:Vt({color:3355452,metalness:.72,roughness:.4}),shelf:Vt({color:4342348,metalness:.45,roughness:.62}),caster:Vt({color:1315864,metalness:.35,roughness:.6}),foot:Vt({color:1842210,metalness:.6,roughness:.45}),cardShroud:Vt({color:2039590,metalness:.58,roughness:.32}),cardBack:Vt({color:1644832,metalness:.45,roughness:.5}),shroud:Vt({color:3881798,metalness:.62,roughness:.4}),shroudTop:Vt({color:4868694,metalness:.55,roughness:.46}),vent:Vt({color:1381658,metalness:.3,roughness:.82}),fanHub:Vt({color:2302761,metalness:.4,roughness:.55}),fanBlade:Vt({color:1842210,metalness:.3,roughness:.6}),bracket:Vt({color:9869988,metalness:.72,roughness:.38}),nvGreen:Vt({color:7780608,metalness:.3,roughness:.4,emissive:1914368,emissiveIntensity:.6}),pcb:Vt({color:1014345,metalness:.22,roughness:.68}),pcbDark:Vt({color:740656,metalness:.22,roughness:.72}),pcbBlack:Vt({color:2105383,metalness:.3,roughness:.62}),armor:Vt({color:11186360,metalness:.8,roughness:.34}),debugRed:Vt({color:16722474,emissive:10031377,emissiveIntensity:1.1,metalness:.2,roughness:.5}),slot:Vt({color:1447452,metalness:.35,roughness:.7}),gold:Vt({color:13214283,metalness:.85,roughness:.35}),connector:Vt({color:4540495,metalness:.74,roughness:.38}),chip:Vt({color:2565934,metalness:.5,roughness:.45}),cap:Vt({color:3421244,metalness:.5,roughness:.5}),heatsink:Vt({color:3947589,metalness:.78,roughness:.32}),extrusion:Vt({color:10133674,metalness:.78,roughness:.28}),extGroove:Vt({color:6053992,metalness:.6,roughness:.45}),cable:Vt({color:2368556,metalness:.18,roughness:.86}),power:Vt({color:2499618,metalness:.22,roughness:.78}),aux:Vt({color:3358797,metalness:.3,roughness:.7}),cablePlug:Vt({color:1776417,metalness:.4,roughness:.55}),eth:Vt({color:3232122,metalness:.14,roughness:.8}),udmFace:Vt({color:15132650,metalness:.12,roughness:.45}),screen:Vt({color:924716,metalness:.1,roughness:.2}),perf:Vt({color:2829107,metalness:.65,roughness:.45}),filter:Vt({color:3882562,metalness:.05,roughness:.96}),psuBody:Vt({color:2434349,metalness:.62,roughness:.4}),psuGrille:Vt({color:1513245,metalness:.4,roughness:.6}),noctua:Vt({color:9067068,metalness:.18,roughness:.72}),noctuaRim:Vt({color:5913128,metalness:.18,roughness:.72}),label:Vt({color:14211294,metalness:.1,roughness:.8})};function K(i,t,e,n){const s=new $t(new Xi(i,t,e),n);return s.castShadow=s.receiveShadow=!0,s}function H(i,t,e=0,n=0,s=0){return t.position.set(e,n,s),i.add(t),t}function ue(i,t,e,n=28){const s=new $t(new wr(i,i,t,n),e);return s.castShadow=s.receiveShadow=!0,s}function Gi(i,t=11){const e=new Xt;H(e,ue(i*1.04,7,F.vent,40),0,-3.5,0);const n=new $t(new cl(i*.97,i*.05,10,44),F.fanHub);n.rotation.x=Math.PI/2,n.castShadow=!0,e.add(n),H(e,ue(i*.26,6,F.fanHub,24),0,1,0),H(e,ue(i*.19,1.4,F.chip,20),0,4,0);for(let s=0;s<t;s++){const r=K(i*.7,.7,i*.38,F.fanBlade);r.position.x=i*.5,r.rotation.x=.62;const a=new Xt;a.add(r),a.position.y=.5,a.rotation.y=s/t*Math.PI*2,e.add(a)}return e}function Di(i){const t=dv.outline,e=new mi;t.forEach(([o,c],l)=>l?e.lineTo(o,c):e.moveTo(o,c)),e.closePath();const n=new di;n.absarc(0,0,2.1,0,Math.PI*2,!0),e.holes.push(n);const s=new $n(e,{depth:i,bevelEnabled:!1,curveSegments:10});s.rotateY(Math.PI/2),s.translate(-i/2,0,0);const r=new $t(s,F.extrusion);r.castShadow=r.receiveShadow=!0;const a=new Xt;return a.add(r),a}const Yo={mcio:{mat:F.cable,r:3.4,plug:[13,6,17]},power12v:{mat:F.power,r:5.4,plug:[18,9,12]},aux6:{mat:F.aux,r:2.5,plug:[12,6,10]},atx:{mat:F.power,r:7,plug:[26,10,12]},cat6a:{mat:F.eth,r:3.6,plug:[12,8,16]}},q1=i=>(Yo[i]||Yo.mcio).r;function ao(i){const t=Math.abs(i.x),e=Math.abs(i.y),n=Math.abs(i.z);return t>=e&&t>=n?new w(Math.sign(i.x)||1,0,0):e>=n?new w(0,Math.sign(i.y)||1,0):new w(0,0,Math.sign(i.z)||1)}function pv(i,t,e={}){const{type:n="mcio",sag:s=45,route:r="drape"}=e,a=Yo[n]||Yo.mcio,o=new Xt;o.userData.part=n;const c=new w(...i),l=new w(...t);let u;if(e.vias)u=[c,...e.vias.map(m=>new w(m[0],m[1],m[2])),l];else if(r==="riser"){const m=e.backZ??-230,p=e.laneX??c.x;u=[c,new w(p,c.y+15,m),new w(p,(c.y+l.y)/2,m),new w(p,l.y-15,m),l]}else{const m=new w((c.x+l.x)/2,Math.min(c.y,l.y)-s,(c.z+l.z)/2-4),p=new w(c.x,c.y-Math.min(32,(c.y-m.y)*.6),c.z-1),y=new w(l.x,l.y-Math.min(32,(l.y-m.y)*.6),l.z-1);u=[c,p,m,y,l]}const f=e.na?ao(new w(...e.na)):ao(u[1].clone().sub(c)),h=e.nb?ao(new w(...e.nb)):ao(u[u.length-2].clone().sub(l));u.splice(1,0,c.clone().addScaledVector(f,Math.min(14,c.distanceTo(u[1])*.6))),u.splice(u.length-1,0,l.clone().addScaledVector(h,Math.min(14,l.distanceTo(u[u.length-2])*.6)));const d=new Uf(u,!1,"centripetal"),g=Math.max(64,Math.min(220,Math.round(d.getLength()/5))),x=new $t(new ll(d,g,a.r,9,!1),a.mat);x.castShadow=!0,o.add(x),o.userData.samples=d.getPoints(56),o.userData.lengthMm=Math.round(d.getLength());for(const[m,p,y]of[[c,f,e.ta],[l,h,e.tb]]){const _=K(...a.plug,F.cablePlug);_.position.copy(m),_.lookAt(m.clone().add(p));const v=y||[0,0,1];p.y&&Math.abs(v[2])>=Math.abs(v[0])&&_.rotateZ(Math.PI/2),o.add(_)}return o}function Y1(i){return pv([-70,6,0],[70,6,0],{type:i,sag:24})}const mv=-.622,gv=.955,_v=1.875,xv=7,vv=6,yv=.8,Mv=9,Sv=3.2,Ev=2.4,bv=5.5,Tv=6,Av=.5,oe={boardBottom:mv,boardTop:gv,holeRadius:_v,bodyLength:xv,studLength:vv,baseWasherThickness:yv,baseWasherOuter:Mv,baseWasherBore:Sv,nutHeight:Ev,nutAcrossFlats:bv,topScrewLength:Tv,topWasherThickness:Av},wv=11,Rv=150,Pv=400,Cv=350,Lv=185,Dv=190,Iv=125,Uv=20,Nv=1,Ov=-3.6,Fv="ASRock installation diagram; adjustable setup targets, not measured coordinates",Bv=[{x:142.5,z:[-135,69,155]},{x:-15,z:[-157,0,155]},{x:-60,z:[-157]},{x:-140,z:[-157,0,69,155]}],zv={x:17.1,z:95.3,bottomY:33.722,thickness:1},kv=[{length:350,quantity:4},{length:400,quantity:2},{length:125,quantity:2},{length:150,quantity:4}],ne={shelfU:wv,leg:Rv,endBeam:Pv,rail:Cv,endZ:Lv,legX:Dv,post:Iv,standoff:Uv,baseWashers:Nv,boardZ:Ov,holeEvidence:Fv,rows:Bv,retainer:zv,cuts:kv},Ns=44.45,Wf=25,ph=Wf*Ns,Hv=465.1,Yn=30*25.4,Fe={model:"StarTech 4POSTRACK25U",setting:[4,4],W:600,D:662+(Yn-558.8),frameH:1215.35,casterRise:73,H:1215.35+73},Zo=-125.04999999999995,le={openingWidth:450.9,flangeWidth:55,flangeThickness:2,holeSize:9.5,returnDepth:(Fe.D-Yn)/2,railBottom:-104.09999999999991/2,railTop:ph+(Fe.frameH-ph)/2},hl={W:446,D:700,LIP:44,EARS:482.6,T:1.2,mountHoleSpan:465,mountHolePitch:31.75},br={L:266.7,H:111.8,T:40.6},Gv=4,Vv=100,oa={W:150,H:86,L:210},Wv={W:20,PCB:1.6,L:125},Oi=i=>i*Ns-(Ns-hl.LIP)/2,Cs={udmShelfTop:Oi(4),switchShelfTop:Oi(ne.shelfU),gpuShelfTop:Oi(18),gpuTierSpacing:220},Z1=[],j1=659222;function Xv(i){const t=le.flangeWidth,e=le.flangeThickness,n=le.openingWidth/2+t/2,s=new mi,r=[[-t/2,le.railBottom],[t/2,le.railBottom],[t/2,le.railTop],[-t/2,le.railTop]];s.moveTo(...r[0]);for(const u of r.slice(1))s.lineTo(...u);s.closePath();const a=i*(Hv/2-n),o=[];for(let u=0;u<Wf;u++)for(const f of[6.35,22.225,38.1]){const h=u*Ns+f,d=le.holeSize/2,g=new di;g.moveTo(a-d,h-d),g.lineTo(a-d,h+d),g.lineTo(a+d,h+d),g.lineTo(a+d,h-d),g.closePath(),s.holes.push(g),o.push([a,h,le.holeSize,le.holeSize])}const c=new $n(s,{depth:e,bevelEnabled:!1}),l=new $t(c,F.rail);return l.castShadow=l.receiveShadow=!0,l.userData.cadPrimitive={kind:"polygonPrism",points:r,depth:e,holes:[],rectangularHoles:o},c.translate(0,0,-e/2),l.userData.role="rack-mounting-face",l.userData.holeCenters=o.map(u=>[u[0],u[1],0]),l}function qv(){const i=new Xt,t=le.openingWidth/2+le.flangeWidth,e=(n,s,r,a,o,c,l)=>{const u=K(n,s,r,F.post);return u.userData.role=l,H(i,u,a,o,c),u};for(const n of[-1,1])for(const s of[-1,1]){H(i,Xv(n),n*(le.openingWidth/2+le.flangeWidth/2),0,s*(Yn/2-le.flangeThickness/2)),e(le.flangeThickness,Fe.frameH,le.returnDepth+le.flangeThickness,n*(t-le.flangeThickness/2),(le.railTop+le.railBottom)/2,s*(Yn/2+(le.returnDepth-le.flangeThickness)/2),"rack-rail-return");const r=ue(30,25,F.caster,24);r.rotation.z=Math.PI/2,r.userData.role="caster",H(i,r,n*(Fe.W/2-35),Zo+30,s*(Fe.D/2-35)),e(30,Fe.casterRise-40,30,n*(Fe.W/2-35),Zo+(40+Fe.casterRise)/2,s*(Fe.D/2-35),"caster-fork")}for(const n of[le.railBottom+22,le.railTop-22]){for(const s of[-1,1]){const r=s*(Fe.W/2-12.5);e(22,40,400,r,n,0,"rack-centre-beam");for(const a of[-1,1])e(25,44,340,r,n,a*(Fe.D/2-170),"rack-corner-beam")}for(const s of[-1,1])e(Fe.W,40,le.returnDepth,0,n,s*(Yn/2+le.returnDepth/2),n<0?"rack-base-bracket":"rack-top-bracket")}return i.userData={referenceOnly:!0,model:Fe.model,depthSetting:Fe.setting,dimensions:{width:Fe.W,depth:Fe.D,height:Fe.H,mountDepth:Yn},mountingDepthConfirmed:!0,outerDepthEstimated:!0,unverified:["outer depth inferred from minimum envelope","rail sections and beam overlaps","hole-column end margins","fastenings","caster geometry and installed feet choice"]},i}function mn(i,t,e,n,s=F.rail){const r=new mi;r.moveTo(-i/2,-e/2),r.lineTo(i/2,-e/2),r.lineTo(i/2,e/2),r.lineTo(-i/2,e/2),r.closePath();for(const[c,l,u]of n){const f=new di;f.absarc(c,-l,u,0,2*Math.PI,!0),r.holes.push(f)}const a=new $n(r,{depth:t,bevelEnabled:!1,curveSegments:20});a.rotateX(-Math.PI/2),a.translate(0,-t/2,0);const o=new $t(a,s);return o.userData.cadPrimitive={kind:"boredPlate",size:[i,t,e],holes:n},o}function Ye(i,t=5.2,e=3){const n=new mi;n.absarc(0,0,t/2,0,2*Math.PI,!1);const s=new di;s.absarc(0,0,e/2,0,2*Math.PI,!0),n.holes.push(s);const r=new $n(n,{depth:i,bevelEnabled:!1,curveSegments:20});r.rotateX(-Math.PI/2),r.translate(0,-i/2,0);const a=new $t(r,F.gold);return a.userData.cadPrimitive={kind:"tube",outer:t/2,inner:e/2,length:i},a}function gi(i=5,t=10,e=2,n=4,{grip:s=2.5,nut:r=!0,washerThickness:a=.7}={}){const o=new Xt;if(H(o,ue(n,e,F.gold,20),0,0,0),H(o,ue(i/2,t,F.gold,20),0,-e/2-t/2,0),a>0&&H(o,Ye(a,i===3?7:10,i+.2),0,-e/2-a/2,0),r){const c=mn(i===3?8:10,2.5,5.8,[[0,0,i/2]],F.rail);H(o,c,0,-e/2-a-s-3.5,0)}return o.userData.joint={diameter:i,length:t,grip:s,nut:r,washerThickness:a,threadModel:"envelope",nutFitVerified:!1},o}function fl(i=30,t=6){const e=new Xt;return H(e,Ye(i,5.8,3),0,0,0),H(e,ue(1.5,t,F.gold,20),0,-i/2-t/2,0),e.userData.threadModel="envelope",e}function Yv(){const i=new Xt,{W:t,D:e,T:n,LIP:s,EARS:r,mountHoleSpan:a,mountHolePitch:o}=hl,c=K(t,n,e,F.shelf);c.position.y=-n/2,c.userData={floor:!0,referenceOnly:!0},i.add(c);for(const l of[-1,1])H(i,K(n,s,e,F.shelf),l*(t-n)/2,-s/2,0);for(const l of[-1,1])H(i,K(t-2*n,s,n,F.shelf),0,-s/2,l*(e-n)/2);for(const l of[-1,1])for(const u of[-1,1]){const f=(r-t)/2,h=l*(t/2+f/2),d=l*a/2-h,g=mn(f,n,s,[[d,-o/2,3.25],[d,o/2,3.25]],F.rail);g.rotation.x=Math.PI/2,g.userData.role="shelf-mounting-ear",H(i,g,h,-s/2,u*(Yn/2+n/2));const x=u>0?100:290,m=K(n,s,x,F.rail);m.userData.role="shelf-connecting-arm",H(i,m,l*(t/2+n/2),-s/2,u*(Yn/2-x/2))}return i.userData={referenceOnly:!0,unverified:["vent positions","installed revision","arm sections/adjustment and fastening details"]},i}const Zv={pcb:F.pcbBlack,slot:F.slot,connector:F.connector,chip:F.chip,heatsink:F.heatsink,bracket:F.bracket,parts:F.cap,shroud:F.cardShroud,back:F.cardBack,gold:F.gold,fan:F.fanBlade},zc=new Map,jv=["device-vertical","host-retimer","switch-pm50100","gpu-maxq"];function mh(i){const e=new DataView(i).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,4,e))),s=new Xt;s.userData.solidBoxes=[];let r=4+e;for(const{n:a,v:o,i:c,b:l}of n){const u=new Float32Array(i.slice(r,r+o*12));r+=o*12;const f=new Uint32Array(i.slice(r,r+c*4));r+=c*4;const h=new ze;h.setAttribute("position",new Le(u,3)),h.setIndex(new Le(f,1)),h.computeVertexNormals();const d=new $t(h,Zv[a]||F.cap);d.castShadow=d.receiveShadow=!0,d.userData.noCollide=!0,s.add(d);for(const g of l||[])s.userData.solidBoxes.push(g)}return s}async function $1(i="/rig/",t){let e=0,n=0;await Promise.all(jv.map(async s=>{try{const r=await fetch(`${i}cad/${s}.bin`);if(!r.ok)throw new Error(r.status);const a=+r.headers.get("content-length")||0;if(n+=a,t?.(e,n),!r.body){const h=await r.arrayBuffer();e+=a,t?.(e,n),zc.set(s,mh(h));return}const o=r.body.getReader(),c=[];let l=0;for(;;){const{value:h,done:d}=await o.read();if(d)break;c.push(h),l+=h.length,e+=h.length,t?.(e,n)}const u=new Uint8Array(l);let f=0;for(const h of c)u.set(h,f),f+=h.length;zc.set(s,mh(u.buffer))}catch(r){console.warn(`CAD mesh ${s} unavailable (${r.message}) — using parametric fallback`)}}))}function aa(i){const t=zc.get(i);return t?t.clone():null}function ca(i,t,e=[]){const n=new mi;n.moveTo(...i[0]);for(const a of i.slice(1))n.lineTo(...a);n.closePath();for(const[a,o,c]of e){const l=new di;l.absarc(a,o,c,0,2*Math.PI,!0),n.holes.push(l)}const s=new $n(n,{depth:t,bevelEnabled:!1,curveSegments:20});s.translate(0,0,-t/2);const r=new $t(s,F.rail);return r.userData.cadPrimitive={kind:"polygonPrism",points:i,depth:t,holes:e},r}function Tr(i,t,e,n){const s=new w(...e),r=new w(...n),a=s.clone().cross(r);return i.quaternion.setFromRotationMatrix(new te().makeBasis(s,r,a)),i.position.set(...t),i}function dl({shelfFoot:i=!1}={}){const t=new Xt,e=mn(20,3,14,[[5,0,2.75]]);e.position.set(10,1.5,0),t.add(e);const n=mn(17,3,14,[[1.5,0,2.75]]);n.rotation.z=-Math.PI/2,n.position.set(1.5,11.5,0),t.add(n);const s=()=>gi(5,8,5,4.25,{grip:3,washerThickness:0}),r=s();if(r.rotation.z=-Math.PI/2,r.position.set(5.5,10,0),t.add(r),!i){const a=s();a.position.set(15,5.5,0),t.add(a)}return t.userData={part:"bracket",sku:"HBLSS5-SET",role:i?"shelf-foot":"frame-joint",holesLocal:[[15,0,0],[0,10,0]],fastenersSelected:!0,shelfHoleMeasured:!i,threadModel:"envelope"},t}function pl(){const i=new Xt,t=Math.PI/12,e=3/Math.cos(t),n=5*Math.tan(t),s=ca([[-e-n,-5],[e-n,-5],[e+n,5],[-e+n,5]],3.3,[[0,0,1.5]]);s.rotation.x=Math.PI/2,s.position.y=-3.65,i.add(s);const r=mn(6/Math.cos(t),.8,5.8,[[0,0,1.5]]);return r.position.y=-1.6,i.add(r),i.userData={sku:"HNTF5-3",threadModel:"envelope",nominalTopDepth:1.2,nominalBottomDepth:5.3},i}const $v=oe.bodyLength+oe.baseWasherThickness-oe.boardBottom;function Kv(){const i=new Xt,t=oe.boardBottom-oe.bodyLength,e=fl(oe.bodyLength,oe.studLength);H(i,e,0,oe.boardBottom-oe.bodyLength/2,0);const n=()=>Ye(oe.baseWasherThickness,oe.baseWasherOuter,oe.baseWasherBore);H(i,n(),0,t-oe.baseWasherThickness/2,0);const s=t-oe.baseWasherThickness-hl.T;H(i,n(),0,s-oe.baseWasherThickness/2,0);const r=oe.nutAcrossFlats/Math.sqrt(3),a=Array.from({length:6},(l,u)=>[r*Math.cos(u*Math.PI/3),r*Math.sin(u*Math.PI/3)]),o=ca(a,oe.nutHeight,[[0,0,1.5]]);o.rotation.x=-Math.PI/2,H(i,o,0,s-oe.baseWasherThickness-oe.nutHeight/2,0);const c=gi(3,oe.topScrewLength,2,2.75,{nut:!1,washerThickness:oe.topWasherThickness});return H(i,c,0,oe.boardTop+oe.topWasherThickness+1,0),i.userData={role:"switch-shelf-mount",mountingUnresolved:!0,shelfHoleMeasured:!1,physicalFitVerified:!1,looseningResistanceVerified:!1},i}const Cn=(i,t)=>[i-75,55-t],ar=[[-31,-50.8],[-31,50.8],[0,-50.8],[0,50.8],[31,-50.8],[31,50.8]],wi={CN6:Cn(23.2,85.8),CN7:Cn(23.2,54.4),CN8:Cn(23.2,22.4),CN2:Cn(125.6,85.3),CN1:Cn(125.6,54.9),CN12:Cn(125.6,22.4)},co=Cn(139.9,39.3),dr=[146.5-75,12,55-17.3],wn=([i,t])=>[i,16,t],gh={device:[wn(wi.CN1),wn(wi.CN2),wn(ar[4]),wn(ar[2]),wn(ar[0]),wn(wi.CN6),wn(wi.CN7),wn(wi.CN8)],host:[wn(ar[5]),wn(wi.CN12)]},lo=[1,0,0],fs=[0,0,1],K1={device:[fs,fs,lo,lo,lo,fs,fs,fs],host:[lo,fs]},Xf=$v;function _h(i){H(i,K(86,2.5,87,F.chip),0,-2,0);for(const t of[-40,40])for(const e of[-40.5,40.5])H(i,ue(3,1.6,F.caster,12),t,-3.5,e);for(const t of[25,125])for(const e of[5,105]){const[n,s]=Cn(t,e);H(i,Kv(),n,0,s)}}function qf(){const i=new Xt;i.userData={mountingUnresolved:!0,physicalFitVerified:!1,shelfHoleMeasured:!1};const t=[-50,50].flatMap(s=>[-50,50].map(r=>[s,r,oe.holeRadius])),e=aa("switch-pm50100");if(e){i.add(e);const s=Gi(40);return s.position.set(0,21.5,0),i.add(s),_h(i),i}_h(i),H(i,mn(150,oe.boardTop-oe.boardBottom,110,t,F.pcbBlack),0,(oe.boardBottom+oe.boardTop)/2,0),H(i,K(40,3,40,F.chip),0,2.5,0);for(const s of[-40,40])for(const r of[-40,40])H(i,ue(2.4,7,F.gold,10),s,4.5,r);H(i,K(90,5,91,F.heatsink),0,9.5,0);for(let s=-10;s<=10;s++)H(i,K(3,18,89,F.heatsink),s*4.3,21,0);const n=Gi(40);n.position.set(0,33,0),i.add(n);for(const[s,r]of ar)H(i,K(27.5,13,7,F.connector),s,7.5,r),H(i,K(23,2,3.5,F.slot),s,14.2,r);for(const[s,r]of Object.values(wi))H(i,K(7,13,27.5,F.connector),s,7.5,r),H(i,K(3.5,2,23,F.slot),s,14.2,r);H(i,K(7,13,16,F.connector),co[0],7.5,co[1]),H(i,K(3.5,2,12,F.slot),co[0],14.2,co[1]),H(i,K(13,11,12,F.chip),dr[0],6.5,dr[2]),H(i,K(6,5,8,F.slot),Cn(4.7,7.1)[0],3.5,Cn(4.7,7.1)[1]);for(let s=0;s<3;s++)H(i,K(10,4,3,F.slot),-66,3,-40+s*6);return H(i,K(17,6,33,F.pcb),-63,4,8),H(i,K(17,6,33,F.pcb),60,4,-38),H(i,K(11,.4,17,F.label),-63,1.2,-22),i}const $s={mb10:[-51.5,20],mb18:[-16,20],cpu8:[[18,20],[37.5,20],[56.5,20],[18,0],[37.5,0],[56.5,0],[18,-18],[37.5,-18],[56.5,-18]],hpwr:[[-3,0],[-3,-18]],peri:[[-51.5,0],[-37.5,0],[-23.5,0],[-51.5,-18],[-37.5,-18],[-23.5,-18]]};function Jv(i,t,e){const{W:n,H:s,L:r}=oa;H(i,K(n,1,r,F.psuBody),0,-s/2+.5,0);for(const o of[-1,1])H(i,K(1,s,r,F.psuBody),o*(n/2-.5),0,0),H(i,K(n,s,1,F.psuBody),0,0,o*(r/2-.5));const a=mn(n,1,r,[[0,e,t]],F.psuBody);a.position.y=s/2-.5,a.name="psu-cover",i.add(a)}function xh(i,t,e,n){const s=Ye(2.2,i*2,t*2);return s.material=n,s.position.set(0,oa.H/2-1.1,e),s}function Yf(i=!1){const t=new Xt,{W:e,H:n,L:s}=oa,r=8;if(Jv(t,i?62:66,r),i){t.add(xh(62,57,r,F.noctuaRim));const o=Gi(52,9);o.traverse(c=>{c.material===F.fanBlade&&(c.material=F.noctua)}),o.name="psu-fan",o.position.set(0,n/2-9,r),t.add(o);for(let c=0;c<5;c++){const l=K(2.4,1.2,112,F.noctuaRim);l.rotation.y=c/5*Math.PI,H(t,l,0,n/2-.6,r)}}else{t.add(xh(66,61,r,F.psuGrille));const o=Gi(58,7);o.name="psu-fan",o.position.set(0,n/2-9,r),t.add(o);for(const[c,l]of[[-s/2+26,.35],[s/2-26,.35]]){const u=K(e-4,.8,22,F.armor);u.rotation.y=l,H(t,u,0,n/2-.4,c)}H(t,K(26,.8,11,F.armor),0,n/2-.4,r)}const a=([o,c],l,u=9)=>{H(t,K(l,u,3,F.slot),o,c,-s/2-1.2),H(t,K(l-3,u-3,1.6,F.cablePlug),o,c,-s/2-2.4)};a($s.mb10,21),a($s.mb18,38);for(const o of $s.cpu8)a(o,17);for(const o of $s.peri)a(o,13);for(const o of $s.hpwr)a(o,19,8),H(t,K(9,2.2,2.5,F.slot),o[0],o[1]+5.4,-s/2-1);H(t,K(e-10,n-10,1.6,F.psuGrille),0,0,s/2+.4),H(t,K(30,26,4,F.slot),-42,0,s/2+1.6),H(t,K(20,24,4,F.chip),-13,0,s/2+1.6),H(t,K(11,11,3.4,F.connector),8,-4,s/2+1.4),H(t,K(16,3,1,F.label),8,6,s/2+1.4);for(const o of[-1,1]){const c=K(1.4,22,62,F.armor);c.rotation.x=.12,H(t,c,o*(e/2+.4),4,-18),H(t,K(1,8,34,F.label),o*(e/2+.3),-28,62)}return H(t,K(e*.72,1,s*.6,F.label),0,-n/2-.4,0),t}const de=(i,t)=>[i-152.5,t-165],Zf=[141.3,121,100.6,80.3,60,39.7,19.4].map(i=>i-152.5),kc=79.5-165,Qv=[4,0].map(i=>Zf[i]),tc={atx24:de(224,326),eps:[de(297,46),de(297,262)]},ty=de(224,170),ec=[22-152.5,8.25,-166];function ey(){const i=new Xt;H(i,K(305,2.5,330,F.pcbBlack),0,0,0);const t=1.25,[e,n]=ty;H(i,K(74,3,80,F.bracket),e,t+1.5,n),H(i,K(60,3.6,68,F.chip),e,t+2,n),H(i,K(52,2.4,60,F.bracket),e,t+4.6,n),i.userData.coolerUnresolved=!0;for(const l of[151.5,160.1,168.6,177.2,271.7,280.3,288.9,297.4]){const[u]=de(l,0);H(i,K(7.5,4.5,140,F.slot),u,t+2.2,n),H(i,K(4.6,30,133.4,F.chip),u,t+16,n)}for(const l of Zf)H(i,K(9,10,94,F.bracket),l,t+5,kc),H(i,K(5.5,1.8,89,F.slot),l,t+10.2,kc);const s=[[13.5,11,11,F.chip],[22,14,14,F.connector],[38,14,14,F.connector],[51.5,14,14,F.connector],[60,14,12,F.connector],[79,14,12,F.connector],[100,18,15,F.connector],[115.5,16,7,F.slot]];for(const[l,u,f,h]of s)H(i,K(u,f,14,h),de(l,0)[0],t+f/2,-157);H(i,K(12,11,18,F.chip),144.5,t+5.5,de(0,46)[1]),H(i,K(12,11,14,F.chip),144.5,t+5.5,de(0,61)[1]),H(i,K(12,11,14,F.chip),144.5,t+5.5,de(0,242)[1]),H(i,K(12,11,18,F.chip),144.5,t+5.5,de(0,262)[1]);for(const l of[299,306])H(i,ue(3.2,5,F.cap,14),146,t+2.5,de(0,l)[1]);H(i,K(5,2.6,12,F.debugRed),147,t+1.3,de(0,316)[1]);const r=[[224,52,13,F.slot],[199,19,9,F.connector],[181,19,9,F.connector],[162,10,7,F.chip],[107,13,8,F.connector],[91,13,8,F.connector],[72,16,9,F.slot],[51,16,9,F.slot],[41,12,11,F.chip],[28,12,11,F.chip]];for(const[l,u,f,h]of r)H(i,K(u,f,11,h),de(l,0)[0],t+f/2,157);for(const l of[45,110,142,181,197,251,276,296])H(i,K(6,7,12,F.slot),-146,t+3.5,de(0,l)[1]);H(i,K(14,2,14,F.chip),de(69,0)[0],t+1,de(0,18)[1]);const a=(l,u,f,h,d)=>{const[g]=de(l,0),[x]=de(u,0),m=de(0,f)[1],p=de(0,h)[1],y=(g+x)/2,_=(m+p)/2,v=x-g,b=p-m;H(i,K(v,4,b,F.heatsink),y,t+2,_);for(let S=g+2;S<=x-2;S+=4.5)H(i,K(1.5,24,b-4,F.heatsink),S,t+16,_);const E=ue(3,v-6,F.heatsink,12);E.rotation.z=Math.PI/2,H(i,E,y,t+24,_);for(let S=0;S<d;S++){const C=Gi(15);C.position.set(y+(S-(d-1)/2)*(v/d),t+30,_),i.add(C)}};a(185,280,40,100,2),a(170,285,250,310,3);const[o,c]=[de(80,0)[0],de(0,265.5)[1]];return H(i,K(100,6,91,F.armor),o,t+3,c),H(i,K(78,2.2,66,F.chip),o-4,t+7,c+4),H(i,K(100,1.8,30,F.armor),o,t+7.5,c-24),H(i,K(115,8,14,F.armor),de(92.5,0)[0],t+4,de(0,29)[1]),i}const As={W:442.4,H:43.7,D:285.6},vh=[75,-2,As.D/2+2];function ny(){const i=new Xt,{W:t,H:e,D:n}=As,s=n/2;H(i,K(t,e,n-4,F.rail),0,0,-2),H(i,K(t,e,4,F.udmFace),0,0,s-2),H(i,K(96,26,1.2,F.slot),-158,0,s+.2),H(i,K(80,3,1.4,F.udmFace),-158,-6,s+.6),H(i,K(15,13,2,F.slot),-92,-2,s+.4);for(let o=0;o<4;o++)for(const c of[7,-8])H(i,K(15,13,2,F.slot),-58+o*19,c+.5,s+.4);for(const o of[47,75])H(i,K(16,10,2,F.slot),o,-2,s+.4);const r=ue(19,1.6,F.slot,32);r.rotation.x=Math.PI/2,H(i,r,165,0,s+.6);const a=ue(15.5,1.6,F.screen,32);a.rotation.x=Math.PI/2,H(i,a,165,0,s+1.2);for(const o of[-1,1])H(i,K(22,e,3,F.rail),o*(t/2+11),0,s-1.5);return i}function iy(){const i=new Xt;return H(i,K(13.5,12.5,32,F.caster),0,0,0),H(i,K(11.5,9,2,F.slot),0,0,16),H(i,K(6,2,6,F.gold),0,-4,12),i}const jf={W:438,H:44,D:114};function sy(){const i=new Xt,{W:t,H:e,D:n}=jf,s=n/2;H(i,K(t,e,n-3,F.rail),0,0,-1.5),H(i,K(t,e,3,F.psuBody),0,0,s-1.5);for(const a of[-1,1])for(let o=0;o<6;o++){const c=a*(38+o*27);H(i,K(19,24,1.6,F.slot),c,0,s+.3),H(i,K(4,9,1.8,F.vent),c,3,s+.6),H(i,ue(2.6,1.8,F.vent,10),c,-7,s+.6)}H(i,K(34,18,1.8,F.screen),0,2,s+.4),H(i,K(26,9,.8,F.debugRed),0,3,s+1.2),H(i,ue(4.5,2.2,F.caster,14),0,-12,s+.6);const r=ue(4.5,26,F.cable,12);r.rotation.x=Math.PI/2,H(i,r,-t/2+24,0,-s-12);for(const a of[-1,1])H(i,K(22,e,3,F.rail),a*(t/2+11),0,s-1.5);return i}const ry="cad/out/retention-evidence.json; original GPU OBJ and Harwin R30-601 drawing",oy=1.4,ay=139.55,cy=49.58,ly=50.48,uy=9,hy=4.76,fy=3.3,dy=.5,py=7,my=3.2,gy=16,_y=60.48,xy=!1,vy=!1,re={source:ry,axisX:oy,axisZ:ay,foldBottom:cy,foldTop:ly,spacerLength:uy,spacerOuter:hy,spacerBore:fy,washerThickness:dy,washerOuter:py,washerBore:my,screwLength:gy,railBottom:_y,physicalFitVerified:xy,strengthVerified:vy},yy="8525T261",My=null,Sy="McMaster",Ey="https://www.mcmaster.com/8525T261/",by="solid silicone rubber, adhesive backed",Ty=60,Ay=1.5875,wy=40,Ry=12.7,Py=8,Cy=[914.4,12.7],Ly=-42.03,Dy=-100,Iy=232.22222222222223,Uy=null,Ny=null,Oy=!1,Fy=!1,Hc={sku:yy,manufacturerModel:My,supplier:Sy,url:Ey,material:by,durometerShoreA:Ty,nominalThicknessMm:Ay,padLengthMm:wy,padWidthMm:Ry,padCount:Py,sheetSizeMm:Cy,contactLocalY:Ly,contactLocalZ:Dy,materialMaximumC:Iy,adhesiveMaximumC:Uy,thicknessToleranceMm:Ny,compressionVerified:Oy,physicalFitVerified:Fy},uo=Object.freeze({body:30,baseWasher:1,baseWasherCount:2,topShim:0,stud:6}),Mn=Object.freeze({profileSize:20,layout:"shared-four-by-two",frameWidth:435,adapterSpacer:uo.body+uo.baseWasher+uo.topShim,adapterStack:uo,tierBaseLift:10,tierSetupTravel:5,adapterPcb:1.6,gpuCenterAboveAdapter:62,earLeg:440,rearLeg:315,rearPad:Hc.nominalThicknessMm,rearSupport:Hc,retention:re,boardPcb:2.5,boardSpacer:8,motherboardHoles:null,installedCooler:{model:"SilverStone XE360-TR5",confirmed:!0},shelfVentPattern:null}),J1=Object.freeze([{length:395,quantity:8},{length:440,quantity:2},{length:315,quantity:2},{length:219.5,quantity:4},{length:360,quantity:3},{length:330,quantity:2},{length:285,quantity:2},{length:86,quantity:4}]),Q1=Object.freeze(["Motherboard: measured 11-hole coordinates and matched tray/rail supports","CPU cooler: XE360-TR5 radiator/tube clearance and positive mounting","Shelf: measured vent map, installed revision, rail setting and frame attachment","GPU adapters: two CAD holes and reversed keyed seating corrected; verify delivered revision and plugs","GPU retention: central-opening clamp surface clearance checked; delivered fit, torque and load check pending","Shared frame: verify selected joints/braces under load and final retention access","Host cards, switches and PSUs: final positive retention and shelf attachments","Power: connector pinouts, paired GPU/slot feeds, PSU synchronization and capacity","Cooling: measured intake/exhaust and loaded temperatures"]),yh=168,Ks=68.5,Gc=-.6,$f=[[3.8,4,-39.5],[3.8,4,-69.5]];function By(){const i=new Xt,t=aa("host-retimer");if(t)return i.add(t),H(i,K(1.5,Ks-.2,yh-.2,F.pcbBlack),0,0,0),H(i,K(1.8,11,89,F.gold),0,-Ks/2-5.5,Gc),i;H(i,K(1.8,Ks,yh,F.pcbBlack),0,0,0),H(i,K(1.8,11,89,F.gold),0,-Ks/2-5.5,Gc),H(i,K(22,80.844,1,F.bracket),9.5,-5.7,88.3);const e=ne.retainer;H(i,mn(18.74,1,12,[[e.x-10.73,e.z-94.8,2]],F.bracket),10.73,e.bottomY+.5,94.8);for(const[,,s]of $f)H(i,K(9,11.6,25.8,F.connector),4,-8.5,s),H(i,K(7,2.5,21,F.slot),4,-2,s);H(i,K(11.5,50,50,F.heatsink),8.5,.7,1);const n=Gi(15);n.rotation.z=-Math.PI/2,n.position.set(15,.7,1),i.add(n);for(const s of[26,-24]){const r=ue(2,7,F.gold,10);r.rotation.z=Math.PI/2,H(i,r,3,-22,s)}H(i,K(4,5.5,7,F.chip),3.5,2,62),H(i,K(4,5.5,7,F.chip),3.5,2,52);for(const s of[50,38])H(i,K(2.8,3,13,F.slot),2.6,Ks/2-3.5,s);return i}const la=(i,t,e,n)=>(Object.assign(t.userData,{part:e,role:n,zone:"Host_shelf"}),i.add(t),t);function No(i,t,e,n,s){const r=Di(t);return n==="z"&&(r.rotation.y=Math.PI/2),n==="y"&&(r.rotation.z=Math.PI/2),r.position.set(...e),la(i,r,"mount",s)}function pr(i,t,e,n,s="frame-joint"){return la(i,Tr(dl({shelfFoot:s==="shelf-foot"||s==="host-card-clamp"}),t,e,n),"bracket",s)}function zy(i,t){const e=t+ne.leg+20;for(const n of[-190,ne.legX])for(const s of[-185,ne.endZ]){No(i,ne.leg,[n,t+ne.leg/2,s],"y","host-leg");const r=Math.sign(n),a=n-r*10;pr(i,[a,t,s],[-r,0,0],[0,1,0],"shelf-foot"),pr(i,[a,t+ne.leg,s],[-r,0,0],[0,-1,0])}for(const n of[-185,ne.endZ])No(i,ne.endBeam,[0,e-10,n],"x","host-end-beam");for(const n of ne.rows){const s=No(i,ne.rail,[n.x,e-10,0],"z","motherboard-rail");s.userData.adjustment="Slides across both end beams; nuts slide along rail";for(const r of[-1,1])pr(i,[n.x-10,e-10,r*ne.rail/2],[-1,0,0],[0,0,-r]);for(const r of n.z){const a=new Xt;a.position.set(n.x,e,r+ne.boardZ);const o=pl();o.rotation.y=Math.PI/2,a.add(o);for(const f of[.25,.75])H(a,Ye(.5,7,3.2),0,f,0);H(a,fl(ne.standoff,6),0,ne.baseWashers+ne.standoff/2,0);const c=2.5,l=ne.baseWashers+ne.standoff,u=l+c;H(a,ue(2.75,2,F.gold,20),0,u+1,0),H(a,ue(1.5,6,F.gold,20),0,u-3,0),la(i,a,"boardMount","motherboard-standoff"),Object.assign(a.userData,{sku:"R30-3002002",holeMeasured:!1,coordinateEvidence:ne.holeEvidence,pcbUnderside:e+l})}}return i.userData.hostMount={shelfU:ne.shelfU,deckAboveShelf:ne.leg+20,standoffCount:11,mountingMethod:"sliding rails and standoffs",physicalFitVerified:!1},{deckY:e,boardSpacer:ne.standoff+ne.baseWashers,boardZ:ne.boardZ}}function ky(i,t,e){for(const n of t){const s=[n.position.x-ne.retainer.x,n.position.y+ne.retainer.bottomY,n.position.z-ne.retainer.z],r=s[0]-25;No(i,ne.post,[r,e+ne.post/2,-185],"y","host-retention-post"),pr(i,[r-10,e,-185],[-1,0,0],[0,1,0]);const a=pr(i,[r+10,s[1]-3,s[2]],[1,0,0],[0,1,0],"host-card-clamp");Object.assign(a.userData,{tabAxis:s,adjustment:"Slide vertically to seated tab; post slides across rear beam"});const o=new Xt;o.position.set(...s),H(o,Ye(.5,7,3.2),0,ne.retainer.thickness+.25,0),H(o,Ye(.5,7,3.2),0,-3.25,0);const c=ue(2.75,2.4,F.gold,6);H(o,c,0,-4.7,0);const l=ne.retainer.thickness+.5;H(o,ue(2.75,2,F.gold,20),0,l+1,0),H(o,ue(1.5,16,F.gold,20),0,l-8,0),la(i,o,"hostClamp","host-tab-fastener")}}const Ei=(i,t)=>(i.userData.part=t,i);function Hy(i,t,e,{floorRunners:n=!0,supportedHost:s=!1}={}){const r=t,a=r+(n?20:0),o=n?86:106,c=a+o;let l=c+20,u=Mn.boardSpacer,f=0;if(s)({deckY:l,boardSpacer:u,boardZ:f}=zy(i,t));else{const y=[-158,0,124],_=190,v=[-150,115],b=(E,S,C,M=!1)=>{const T=Tr(dl({shelfFoot:M}),E,S,C);T.userData.zone="Host_shelf",i.add(T)};if(n)for(const E of[-1,1]){const S=Ei(Di(285),"mount");S.rotation.y=Math.PI/2,S.position.set(E*_,r+10,-17.5),i.add(S)}for(const E of[-1,1])for(const S of v){const C=Ei(Di(o),"mount");C.rotation.z=Math.PI/2,C.position.set(E*_,a+o/2,S),i.add(C);const M=S<0?1:-1,T=S+M*10;n&&b([E*_,a,T],[0,0,M],[0,1,0]),b([E*_,c,T],[0,0,M],[0,-1,0])}for(const E of[-1,1]){const S=Ei(Di(330),"mount");S.rotation.y=Math.PI/2,S.position.set(E*_,c+10,-17),i.add(S)}for(const E of y){const S=Ei(Di(360),"mount");S.position.set(0,c+10,E),i.add(S);for(const C of[-1,1])b([C*180,c+10,E-10],[-C,0,0],[0,0,-1])}for(const E of[-1,1])for(const S of n?[-90,70]:v)b([E*180,r,S],[-E,0,0],[0,1,0],!0);for(const[E,S]of Mn.motherboardHoles||[]){const C=Ei(Ye(Mn.boardSpacer),"riser");C.position.set(E,l+Mn.boardSpacer/2,S),i.add(C)}}const h=l+u+Mn.boardPcb/2,d=Ei(ey(),"board");d.position.set(0,h,f),i.add(d),d.userData.mountingUnresolved=!s&&!Mn.motherboardHoles,d.userData.mountingFitVerified=!1;const g=h+8.75;e.boardPwr.push([tc.atx24[0],g,tc.atx24[1]+f],...tc.eps.map(y=>[y[0],g,y[1]+f]));const x=h+Mn.boardPcb/2+3+68.5/2+11,m=f+kc+Gc,p=[];return Qv.forEach(y=>{const _=Ei(By(),"host");_.position.set(y,x,m),_.rotation.y=Math.PI,i.add(_),p.push(_),e.hostMcio.push(...$f.map(v=>[y-v[0],x+v[1],m-v[2]]))}),s&&ky(i,p,l),{deckY:l,boardSpacer:u,boardZ:f}}const Kf=0,Gy=1,Vy=2,Mh=2,nc=1.25,Sh=1,mr=6*4+4+4,ua=65535,Wy=Math.pow(2,-24),ic=Symbol("SKIP_GENERATION");function Xy(i){return i.index?i.index.count:i.attributes.position.count}function ks(i){return Xy(i)/3}function qy(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Yy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=qy(e,n);i.setIndex(new Le(s,1));for(let r=0;r<e;r++)s[r]=r}}function Jf(i,t){const e=ks(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(e,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function Qf(i,t){if(!i.groups||!i.groups.length)return Jf(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const c of i.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(a,u))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],u=o[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function Zy(i,t){const e=ks(i),n=Qf(i,t).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),e!==r}function sc(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,d=1/0,g=-1/0,x=-1/0,m=-1/0;for(let p=t*6,y=(t+e)*6;p<y;p+=6){const _=i[p+0],v=i[p+1],b=_-v,E=_+v;b<r&&(r=b),E>c&&(c=E),_<f&&(f=_),_>g&&(g=_);const S=i[p+2],C=i[p+3],M=S-C,T=S+C;M<a&&(a=M),T>l&&(l=T),S<h&&(h=S),S>x&&(x=S);const I=i[p+4],U=i[p+5],z=I-U,L=I+U;z<o&&(o=z),L>u&&(u=L),I<d&&(d=I),I>m&&(m=I)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,s[0]=f,s[1]=h,s[2]=d,s[3]=g,s[4]=x,s[5]=m}function jy(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=ks(i),o=s.normalized;let c;t===null?(c=new Float32Array(a*6*4),e=0,n=a):(c=t,e=e||0,n=n||a);const l=s.array,u=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let d=e;d<e+n;d++){const g=d*3,x=d*6;let m=g+0,p=g+1,y=g+2;r&&(m=r[m],p=r[p],y=r[y]),o||(m=m*f+u,p=p*f+u,y=y*f+u);for(let _=0;_<3;_++){let v,b,E;o?(v=s[h[_]](m),b=s[h[_]](p),E=s[h[_]](y)):(v=l[m+_],b=l[p+_],E=l[y+_]);let S=v;b<S&&(S=b),E<S&&(S=E);let C=v;b>C&&(C=b),E>C&&(C=E);const M=(C-S)/2,T=_*2;c[x+T+0]=S+M,c[x+T+1]=M+(Math.abs(S)+M)*Wy}}return c}function Se(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Eh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function bh(i,t){t.set(i)}function Th(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function ho(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function Js(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Xn=32,$y=(i,t)=>i.candidate-t.candidate,ni=new Array(Xn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),fo=new Float32Array(6);function Ky(i,t,e,n,s,r){let a=-1,o=0;if(r===Kf)a=Eh(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===Gy)a=Eh(i),a!==-1&&(o=Jy(e,n,s,a));else if(r===Vy){const c=Js(i);let l=nc*s;const u=n*6,f=(n+s)*6;for(let h=0;h<3;h++){const d=t[h],m=(t[h+3]-d)/Xn;if(s<Xn/4){const p=[...ni];p.length=s;let y=0;for(let v=u;v<f;v+=6,y++){const b=p[y];b.candidate=e[v+2*h],b.count=0;const{bounds:E,leftCacheBounds:S,rightCacheBounds:C}=b;for(let M=0;M<3;M++)C[M]=1/0,C[M+3]=-1/0,S[M]=1/0,S[M+3]=-1/0,E[M]=1/0,E[M+3]=-1/0;ho(v,e,E)}p.sort($y);let _=s;for(let v=0;v<_;v++){const b=p[v];for(;v+1<_&&p[v+1].candidate===b.candidate;)p.splice(v+1,1),_--}for(let v=u;v<f;v+=6){const b=e[v+2*h];for(let E=0;E<_;E++){const S=p[E];b>=S.candidate?ho(v,e,S.rightCacheBounds):(ho(v,e,S.leftCacheBounds),S.count++)}}for(let v=0;v<_;v++){const b=p[v],E=b.count,S=s-b.count,C=b.leftCacheBounds,M=b.rightCacheBounds;let T=0;E!==0&&(T=Js(C)/c);let I=0;S!==0&&(I=Js(M)/c);const U=Sh+nc*(T*E+I*S);U<l&&(a=h,l=U,o=b.candidate)}}else{for(let _=0;_<Xn;_++){const v=ni[_];v.count=0,v.candidate=d+m+_*m;const b=v.bounds;for(let E=0;E<3;E++)b[E]=1/0,b[E+3]=-1/0}for(let _=u;_<f;_+=6){let E=~~((e[_+2*h]-d)/m);E>=Xn&&(E=Xn-1);const S=ni[E];S.count++,ho(_,e,S.bounds)}const p=ni[Xn-1];bh(p.bounds,p.rightCacheBounds);for(let _=Xn-2;_>=0;_--){const v=ni[_],b=ni[_+1];Th(v.bounds,b.rightCacheBounds,v.rightCacheBounds)}let y=0;for(let _=0;_<Xn-1;_++){const v=ni[_],b=v.count,E=v.bounds,C=ni[_+1].rightCacheBounds;b!==0&&(y===0?bh(E,fo):Th(E,fo,fo)),y+=b;let M=0,T=0;y!==0&&(M=Js(fo)/c);const I=s-y;I!==0&&(T=Js(C)/c);const U=Sh+nc*(M*y+T*I);U<l&&(a=h,l=U,o=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function Jy(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}class rc{constructor(){this.boundingData=new Float32Array(6)}}function Qy(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let f=t[a*3+u];t[a*3+u]=t[o*3+u],t[o*3+u]=f}for(let u=0;u<6;u++){let f=e[a*6+u];e[a*6+u]=e[o*6+u],e[o*6+u]=f}a++,o--}else return a}}function tM(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){let u=i[a];i[a]=i[o],i[o]=u;for(let f=0;f<6;f++){let h=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=h}a++,o--}else return a}}function $e(i,t){return t[i+15]===65535}function tn(i,t){return t[i+6]}function un(i,t){return t[i+14]}function hn(i){return i+8}function fn(i,t){return t[i+6]}function td(i,t){return t[i+7]}let ed,cr,Oo,nd;const eM=Math.pow(2,32);function Vc(i){return"count"in i?1:1+Vc(i.left)+Vc(i.right)}function nM(i,t,e){return ed=new Float32Array(e),cr=new Uint32Array(e),Oo=new Uint16Array(e),nd=new Uint8Array(e),Wc(i,t)}function Wc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)ed[e+a]=r[a];if(s)if(t.buffer){const a=t.buffer;nd.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=mr){const l=o/2;$e(l,Oo)||(cr[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return cr[e+6]=a,Oo[n+14]=o,Oo[n+15]=ua,i+mr}else{const a=t.left,o=t.right,c=t.splitAxis;let l;if(l=Wc(i+mr,a),l/4>eM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return cr[e+6]=l/4,l=Wc(l,o),cr[e+7]=c,l}}function iM(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function sM(i,t,e,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=s,f=i._indirectBuffer,h=i.geometry,d=h.index?h.index.array:null,g=u?tM:Qy,x=ks(h),m=new Float32Array(6);let p=!1;const y=new rc;return sc(t,e,n,y.boundingData,m),v(y,e,n,m),y;function _(b){l&&l(b/x)}function v(b,E,S,C=null,M=0){if(!p&&M>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),S<=o||M>=r)return _(E+S),b.offset=E,b.count=S,b;const T=Ky(b.boundingData,C,t,E,S,c);if(T.axis===-1)return _(E+S),b.offset=E,b.count=S,b;const I=g(f,d,t,E,S,T);if(I===E||I===E+S)_(E+S),b.offset=E,b.count=S;else{b.splitAxis=T.axis;const U=new rc,z=E,L=I-E;b.left=U,sc(t,z,L,U.boundingData,m),v(U,z,L,m,M+1);const N=new rc,k=I,Z=S-L;b.right=N,sc(t,k,Z,N.boundingData,m),v(N,k,Z,m,M+1)}return b}}function rM(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=iM(e,t.useSharedArrayBuffer),Zy(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Yy(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=jy(e),r=t.indirect?Jf(e,t.range):Qf(e,t.range);i._roots=r.map(a=>{const o=sM(i,s,a.offset,a.count,t),c=Vc(o),l=new n(mr*c);return nM(0,o,l),l})}class jn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],c=t.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}jn.prototype.setFromBox=function(){const i=new w;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);const f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();const oM=function(){const i=new w,t=new w,e=new w;return function(s,r,a){const o=s.start,c=i,l=r.start,u=t;e.subVectors(o,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(c),d=u.dot(u),g=e.dot(c),m=c.dot(c)*d-h*h;let p,y;m!==0?p=(f*h-g*d)/m:p=0,y=(f+p*h)/d,a.x=p,a.y=y}}(),ml=function(){const i=new ct,t=new w,e=new w;return function(s,r,a,o){oM(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=s.start:u=s.end;let f;l<0?f=r.start:f=r.end;const h=t,d=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=d.distanceToSquared(u)){a.copy(h),o.copy(f);return}else{a.copy(u),o.copy(d);return}}}}(),aM=function(){const i=new w,t=new w,e=new Sn,n=new pn;return function(r,a){const{radius:o,center:c}=r,{a:l,b:u,c:f}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const x=a.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=o){const p=x.projectPoint(c,t);if(a.containsPoint(p))return!0}return!1}}(),cM=1e-15;function oc(i){return Math.abs(i)<cM}class gn extends pe{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new w),this.satBounds=new Array(4).fill().map(()=>new jn),this.points=[this.a,this.b,this.c],this.sphere=new Wi,this.plane=new Sn,this.needsUpdate=!0}intersectsSphere(t){return aM(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);const l=r[1],u=a[1];l.subVectors(t,e),u.setFromPoints(l,s);const f=r[2],h=a[2];f.subVectors(e,n),h.setFromPoints(f,s);const d=r[3],g=a[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}gn.prototype.closestPointToSegment=function(){const i=new w,t=new w,e=new pn;return function(s,r=null,a=null){const{start:o,end:c}=s,l=this.points;let u,f=1/0;for(let h=0;h<3;h++){const d=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[d]),ml(e,s,i,t),u=i.distanceToSquared(t),u<f&&(f=u,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(f)}}();gn.prototype.intersectsTriangle=function(){const i=new gn,t=new Array(3),e=new Array(3),n=new jn,s=new jn,r=new w,a=new w,o=new w,c=new w,l=new w,u=new pn,f=new pn,h=new pn,d=new w;function g(x,m,p){const y=x.points;let _=0,v=-1;for(let b=0;b<3;b++){const{start:E,end:S}=u;E.copy(y[b]),S.copy(y[(b+1)%3]),u.delta(a);const C=oc(m.distanceToPoint(E));if(oc(m.normal.dot(a))&&C){p.copy(u),_=2;break}const M=m.intersectLine(u,d);if(!M&&C&&d.copy(E),(M||C)&&!oc(d.distanceTo(S))){if(_<=1)(_===1?p.start:p.end).copy(d),C&&(v=_);else if(_>=2){(v===1?p.start:p.end).copy(d),_=2;break}if(_++,_===2&&v===-1)break}}return _}return function(m,p=null,y=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const _=this.plane,v=m.plane;if(Math.abs(_.normal.dot(v.normal))>1-1e-10){const b=this.satBounds,E=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let M=0;M<4;M++){const T=b[M],I=E[M];if(n.setFromPoints(I,e),T.isSeparated(n))return!1}const S=m.satBounds,C=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){const T=S[M],I=C[M];if(n.setFromPoints(I,t),T.isSeparated(n))return!1}for(let M=0;M<4;M++){const T=E[M];for(let I=0;I<4;I++){const U=C[I];if(r.crossVectors(T,U),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const b=g(this,v,f);if(b===1&&m.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(b!==2)return!1;const E=g(m,_,h);if(E===1&&this.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(E!==2)return!1;if(f.delta(o),h.delta(c),o.dot(c)<0){let z=h.start;h.start=h.end,h.end=z}const S=f.start.dot(o),C=f.end.dot(o),M=h.start.dot(o),T=h.end.dot(o),I=C<M,U=S<T;return S!==T&&M!==C&&I===U?!1:(p&&(l.subVectors(f.start,h.start),l.dot(o)>0?p.start.copy(f.start):p.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(o)<0?p.end.copy(f.end):p.end.copy(h.end)),!0)}}}();gn.prototype.distanceToPoint=function(){const i=new w;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();gn.prototype.distanceToTriangle=function(){const i=new w,t=new w,e=["a","b","c"],n=new pn,s=new pn;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h;const d=e[f],g=a[d];this.closestPointToPoint(g,i),h=g.distanceToSquared(i),h<u&&(u=h,o&&o.copy(i),c&&c.copy(g));const x=this[d];a.closestPointToPoint(x,i),h=x.distanceToSquared(i),h<u&&(u=h,o&&o.copy(x),c&&c.copy(i))}for(let f=0;f<3;f++){const h=e[f],d=e[(f+1)%3];n.set(this[h],this[d]);for(let g=0;g<3;g++){const x=e[g],m=e[(g+1)%3];s.set(a[x],a[m]),ml(n,s,i,t);const p=i.distanceToSquared(t);p<u&&(u=p,o&&o.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();class Ze{constructor(t,e,n){this.isOrientedBox=!0,this.min=new w,this.max=new w,this.matrix=new te,this.invMatrix=new te,this.points=new Array(8).fill().map(()=>new w),this.satAxes=new Array(3).fill().map(()=>new w),this.satBounds=new Array(3).fill().map(()=>new jn),this.alignedSatBounds=new Array(3).fill().map(()=>new jn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ze.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*l|2*u|4*f,d=s[h];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=f?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){const u=a[l],f=r[l],h=1<<l,d=s[h];u.subVectors(o,d),f.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ze.prototype.intersectsBox=function(){const i=new jn;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();Ze.prototype.intersectsTriangle=function(){const i=new gn,t=new Array(3),e=new jn,n=new jn,s=new w;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let h=0;h<3;h++){const d=o[h],g=c[h];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const l=a.satBounds,u=a.satAxes,f=this.points;for(let h=0;h<3;h++){const d=l[h],g=u[h];if(e.setFromPoints(g,f),d.isSeparated(e))return!1}for(let h=0;h<3;h++){const d=c[h];for(let g=0;g<4;g++){const x=u[g];if(s.crossVectors(d,x),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();Ze.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Ze.prototype.distanceToPoint=function(){const i=new w;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ze.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new pn),e=new Array(12).fill().map(()=>new pn),n=new w,s=new w;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const u=o*o,f=a.min,h=a.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];s.copy(p).clamp(f,h);const y=p.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(p),l&&l.copy(s),y<u))return Math.sqrt(y)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const _=(m+1)%3,v=(m+2)%3,b=p<<_|y<<v,E=1<<m|p<<_|y<<v,S=d[b],C=d[E];t[x].set(S,C);const T=i[m],I=i[_],U=i[v],z=e[x],L=z.start,N=z.end;L[T]=f[T],L[I]=p?f[I]:h[I],L[U]=y?f[U]:h[I],N[T]=h[T],N[I]=p?f[I]:h[I],N[U]=y?f[U]:h[I],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?h.x:f.x,s.y=p?h.y:f.y,s.z=y?h.z:f.z,this.closestPointToPoint(s,n);const _=s.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(s),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=t[m];for(let y=0;y<12;y++){const _=e[y];ml(p,_,n,s);const v=n.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(n),l&&l.copy(s),v<u))return Math.sqrt(v)}}return Math.sqrt(g)}}();class gl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class lM extends gl{constructor(){super(()=>new gn)}}const dn=new lM;class uM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const fe=new uM;let ci,ws;const ds=[],po=new gl(()=>new Pe);function hM(i,t,e,n,s,r){ci=po.getPrimitive(),ws=po.getPrimitive(),ds.push(ci,ws),fe.setBuffer(i._roots[t]);const a=Xc(0,i.geometry,e,n,s,r);fe.clearBuffer(),po.releasePrimitive(ci),po.releasePrimitive(ws),ds.pop(),ds.pop();const o=ds.length;return o>0&&(ws=ds[o-1],ci=ds[o-2]),a}function Xc(i,t,e,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=fe;let u=i*2;if($e(u,c)){const h=tn(i,l),d=un(u,c);return Se(i,o,ci),n(h,d,!1,a,r+i,ci)}else{let T=function(U){const{uint16Array:z,uint32Array:L}=fe;let N=U*2;for(;!$e(N,z);)U=hn(U),N=U*2;return tn(U,L)},I=function(U){const{uint16Array:z,uint32Array:L}=fe;let N=U*2;for(;!$e(N,z);)U=fn(U,L),N=U*2;return tn(U,L)+un(N,z)};const h=hn(i),d=fn(i,l);let g=h,x=d,m,p,y,_;if(s&&(y=ci,_=ws,Se(g,o,y),Se(x,o,_),m=s(y),p=s(_),p<m)){g=d,x=h;const U=m;m=p,p=U,y=_}y||(y=ci,Se(g,o,y));const v=$e(g*2,c),b=e(y,v,m,a+1,r+g);let E;if(b===Mh){const U=T(g),L=I(g)-U;E=n(U,L,!0,a+1,r+g,y)}else E=b&&Xc(g,t,e,n,s,r,a+1);if(E)return!0;_=ws,Se(x,o,_);const S=$e(x*2,c),C=e(_,S,p,a+1,r+x);let M;if(C===Mh){const U=T(x),L=I(x)-U;M=n(U,L,!0,a+1,r+x,_)}else M=C&&Xc(x,t,e,n,s,r,a+1);return!!M}}const Qs=new w,ac=new w;function fM(i,t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(Qs.copy(t).clamp(u.min,u.max),Qs.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<o&&h<a,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Qs);const h=t.distanceToSquared(Qs);return h<o&&(ac.copy(Qs),o=h,c=f),h<r}}),o===1/0)return null;const l=Math.sqrt(o);return e.point?e.point.copy(ac):e.point=ac.clone(),e.distance=l,e.faceIndex=c,e}const ps=new w,ms=new w,gs=new w,mo=new ct,go=new ct,_o=new ct,Ah=new w,wh=new w,Rh=new w,xo=new w;function dM(i,t,e,n,s,r,a,o){let c;if(r===Ve?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==cn,s),c===null)return null;const l=i.origin.distanceTo(s);return l<a||l>o?null:{distance:l,point:s.clone()}}function pM(i,t,e,n,s,r,a,o,c,l,u){ps.fromBufferAttribute(t,r),ms.fromBufferAttribute(t,a),gs.fromBufferAttribute(t,o);const f=dM(i,ps,ms,gs,xo,c,l,u);if(f){n&&(mo.fromBufferAttribute(n,r),go.fromBufferAttribute(n,a),_o.fromBufferAttribute(n,o),f.uv=pe.getInterpolation(xo,ps,ms,gs,mo,go,_o,new ct)),s&&(mo.fromBufferAttribute(s,r),go.fromBufferAttribute(s,a),_o.fromBufferAttribute(s,o),f.uv1=pe.getInterpolation(xo,ps,ms,gs,mo,go,_o,new ct)),e&&(Ah.fromBufferAttribute(e,r),wh.fromBufferAttribute(e,a),Rh.fromBufferAttribute(e,o),f.normal=pe.getInterpolation(xo,ps,ms,gs,Ah,wh,Rh,new w),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:r,b:a,c:o,normal:new w,materialIndex:0};pe.getNormal(ps,ms,gs,h.normal),f.face=h,f.faceIndex=r}return f}function ha(i,t,e,n,s,r,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const f=i.index;i.index&&(c=f.getX(c),l=f.getX(l),u=f.getX(u));const{position:h,normal:d,uv:g,uv1:x}=i.attributes,m=pM(e,h,d,g,x,c,l,u,t,r,a);return m?(m.faceIndex=n,s&&s.push(m),m):null}function Re(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,c=t+1,l=t+2;e&&(o=e.getX(o),c=e.getX(c),l=e.getX(l)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function mM(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+s;u<f;u++)ha(c,t,e,u,r,a,o)}function gM(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let d;d=ha(o,t,e,f,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function _M(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=u,Re(a,h*3,c,l),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function xM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,d,g=!1){const x=h*2;if(o[x+15]===ua){const p=a[h+6],y=o[x+14];let _=1/0,v=1/0,b=1/0,E=-1/0,S=-1/0,C=-1/0;for(let M=3*p,T=3*(p+y);M<T;M++){let I=n[M];const U=s.getX(I),z=s.getY(I),L=s.getZ(I);U<_&&(_=U),U>E&&(E=U),z<v&&(v=z),z>S&&(S=z),L<b&&(b=L),L>C&&(C=L)}return c[h+0]!==_||c[h+1]!==v||c[h+2]!==b||c[h+3]!==E||c[h+4]!==S||c[h+5]!==C?(c[h+0]=_,c[h+1]=v,c[h+2]=b,c[h+3]=E,c[h+4]=S,c[h+5]=C,!0):!1}else{const p=h+8,y=a[h+6],_=p+d,v=y+d;let b=g,E=!1,S=!1;t?b||(E=t.has(_),S=t.has(v),b=!E&&!S):(E=!0,S=!0);const C=b||E,M=b||S;let T=!1;C&&(T=f(p,d,b));let I=!1;M&&(I=f(y,d,b));const U=T||I;if(U)for(let z=0;z<3;z++){const L=p+z,N=y+z,k=c[L],Z=c[L+3],$=c[N],Y=c[N+3];c[h+z]=k<$?k:$,c[h+z+3]=Z>Y?Z:Y}return U}}}function pi(i,t,e,n,s){let r,a,o,c,l,u;const f=1/e.direction.x,h=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,x=e.origin.y,m=e.origin.z;let p=t[i],y=t[i+3],_=t[i+1],v=t[i+3+1],b=t[i+2],E=t[i+3+2];return f>=0?(r=(p-g)*f,a=(y-g)*f):(r=(y-g)*f,a=(p-g)*f),h>=0?(o=(_-x)*h,c=(v-x)*h):(o=(v-x)*h,c=(_-x)*h),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),d>=0?(l=(b-m)*d,u=(E-m)*d):(l=(E-m)*d,u=(b-m)*d),r>u||l>a)?!1:((l>r||r!==r)&&(r=l),(u<a||a!==a)&&(a=u),r<=s&&a>=n)}function vM(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+s;u<f;u++){let h=l?l[u]:u;ha(c,t,e,h,r,a,o)}}function yM(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let d;d=ha(o,t,e,c?c[f]:f,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function MM(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),Re(a,h*3,c,l),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function SM(i,t,e,n,s,r,a){fe.setBuffer(i._roots[t]),qc(0,i,e,n,s,r,a),fe.clearBuffer()}function qc(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=fe,u=i*2;if($e(u,c)){const h=tn(i,l),d=un(u,c);mM(t,e,n,h,d,s,r,a)}else{const h=hn(i);pi(h,o,n,r,a)&&qc(h,t,e,n,s,r,a);const d=fn(i,l);pi(d,o,n,r,a)&&qc(d,t,e,n,s,r,a)}}const EM=["x","y","z"];function bM(i,t,e,n,s,r){fe.setBuffer(i._roots[t]);const a=Yc(0,i,e,n,s,r);return fe.clearBuffer(),a}function Yc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=fe;let l=i*2;if($e(l,o)){const f=tn(i,c),h=un(l,o);return gM(t,e,n,f,h,s,r)}else{const f=td(i,c),h=EM[f],g=n.direction[h]>=0;let x,m;g?(x=hn(i),m=fn(i,c)):(x=fn(i,c),m=hn(i));const y=pi(x,a,n,s,r)?Yc(x,t,e,n,s,r):null;if(y){const b=y.point[h];if(g?b<=a[m+f]:b>=a[m+f+3])return y}const v=pi(m,a,n,s,r)?Yc(m,t,e,n,s,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}const vo=new Pe,_s=new gn,xs=new gn,tr=new te,Ph=new Ze,yo=new Ze;function TM(i,t,e,n){fe.setBuffer(i._roots[t]);const s=Zc(0,i,e,n);return fe.clearBuffer(),s}function Zc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=fe;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Ph.set(e.boundingBox.min,e.boundingBox.max,n),s=Ph),$e(c,a)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,x=tn(i,o),m=un(c,a);if(tr.copy(n).invert(),e.boundsTree)return Se(i,r,yo),yo.matrix.copy(tr),yo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>yo.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let _=x*3,v=(m+x)*3;_<v;_+=3)if(Re(xs,_,f,h),xs.needsUpdate=!0,y.intersectsTriangle(xs))return!0;return!1}});for(let p=x*3,y=(m+x)*3;p<y;p+=3){Re(_s,p,f,h),_s.a.applyMatrix4(tr),_s.b.applyMatrix4(tr),_s.c.applyMatrix4(tr),_s.needsUpdate=!0;for(let _=0,v=d.count;_<v;_+=3)if(Re(xs,_,d,g),xs.needsUpdate=!0,_s.intersectsTriangle(xs))return!0}}else{const u=i+8,f=o[i+6];return Se(u,r,vo),!!(s.intersectsBox(vo)&&Zc(u,t,e,n,s)||(Se(f,r,vo),s.intersectsBox(vo)&&Zc(f,t,e,n,s)))}}const Mo=new te,cc=new Ze,er=new Ze,AM=new w,wM=new w,RM=new w,PM=new w;function CM(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),cc.set(t.boundingBox.min,t.boundingBox.max,e),cc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,f=t.index,h=dn.getPrimitive(),d=dn.getPrimitive();let g=AM,x=wM,m=null,p=null;s&&(m=RM,p=PM);let y=1/0,_=null,v=null;return Mo.copy(e).invert(),er.matrix.copy(Mo),i.shapecast({boundsTraverseOrder:b=>cc.distanceToBox(b),intersectsBounds:(b,E,S)=>S<y&&S<a?(E&&(er.min.copy(b.min),er.max.copy(b.max),er.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>er.distanceToBox(C),intersectsBounds:(C,M,T)=>T<y&&T<a,intersectsRange:(C,M)=>{for(let T=C,I=C+M;T<I;T++){Re(d,3*T,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let U=b,z=b+E;U<z;U++){Re(h,3*U,l,c),h.needsUpdate=!0;const L=h.distanceToTriangle(d,g,m);if(L<y&&(x.copy(g),p&&p.copy(m),y=L,_=U,v=T),L<r)return!0}}}});{const S=ks(t);for(let C=0,M=S;C<M;C++){Re(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let T=b,I=b+E;T<I;T++){Re(h,3*T,l,c),h.needsUpdate=!0;const U=h.distanceToTriangle(d,g,m);if(U<y&&(x.copy(g),p&&p.copy(m),y=U,_=T,v=C),U<r)return!0}}}}}),dn.releasePrimitive(h),dn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Mo),x.applyMatrix4(Mo),s.distance=x.sub(s.point).length(),s.faceIndex=v),n)}function LM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,d,g=!1){const x=h*2;if(o[x+15]===ua){const p=a[h+6],y=o[x+14];let _=1/0,v=1/0,b=1/0,E=-1/0,S=-1/0,C=-1/0;for(let M=p,T=p+y;M<T;M++){const I=3*i.resolveTriangleIndex(M);for(let U=0;U<3;U++){let z=I+U;z=n?n[z]:z;const L=s.getX(z),N=s.getY(z),k=s.getZ(z);L<_&&(_=L),L>E&&(E=L),N<v&&(v=N),N>S&&(S=N),k<b&&(b=k),k>C&&(C=k)}}return c[h+0]!==_||c[h+1]!==v||c[h+2]!==b||c[h+3]!==E||c[h+4]!==S||c[h+5]!==C?(c[h+0]=_,c[h+1]=v,c[h+2]=b,c[h+3]=E,c[h+4]=S,c[h+5]=C,!0):!1}else{const p=h+8,y=a[h+6],_=p+d,v=y+d;let b=g,E=!1,S=!1;t?b||(E=t.has(_),S=t.has(v),b=!E&&!S):(E=!0,S=!0);const C=b||E,M=b||S;let T=!1;C&&(T=f(p,d,b));let I=!1;M&&(I=f(y,d,b));const U=T||I;if(U)for(let z=0;z<3;z++){const L=p+z,N=y+z,k=c[L],Z=c[L+3],$=c[N],Y=c[N+3];c[h+z]=k<$?k:$,c[h+z+3]=Z>Y?Z:Y}return U}}}function DM(i,t,e,n,s,r,a){fe.setBuffer(i._roots[t]),jc(0,i,e,n,s,r,a),fe.clearBuffer()}function jc(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=fe,u=i*2;if($e(u,c)){const h=tn(i,l),d=un(u,c);vM(t,e,n,h,d,s,r,a)}else{const h=hn(i);pi(h,o,n,r,a)&&jc(h,t,e,n,s,r,a);const d=fn(i,l);pi(d,o,n,r,a)&&jc(d,t,e,n,s,r,a)}}const IM=["x","y","z"];function UM(i,t,e,n,s,r){fe.setBuffer(i._roots[t]);const a=$c(0,i,e,n,s,r);return fe.clearBuffer(),a}function $c(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=fe;let l=i*2;if($e(l,o)){const f=tn(i,c),h=un(l,o);return yM(t,e,n,f,h,s,r)}else{const f=td(i,c),h=IM[f],g=n.direction[h]>=0;let x,m;g?(x=hn(i),m=fn(i,c)):(x=fn(i,c),m=hn(i));const y=pi(x,a,n,s,r)?$c(x,t,e,n,s,r):null;if(y){const b=y.point[h];if(g?b<=a[m+f]:b>=a[m+f+3])return y}const v=pi(m,a,n,s,r)?$c(m,t,e,n,s,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}const So=new Pe,vs=new gn,ys=new gn,nr=new te,Ch=new Ze,Eo=new Ze;function NM(i,t,e,n){fe.setBuffer(i._roots[t]);const s=Kc(0,i,e,n);return fe.clearBuffer(),s}function Kc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=fe;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Ch.set(e.boundingBox.min,e.boundingBox.max,n),s=Ch),$e(c,a)){const u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,g=e.attributes.position,x=tn(i,o),m=un(c,a);if(nr.copy(n).invert(),e.boundsTree)return Se(i,r,Eo),Eo.matrix.copy(nr),Eo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Eo.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let _=x,v=m+x;_<v;_++)if(Re(ys,3*t.resolveTriangleIndex(_),f,h),ys.needsUpdate=!0,y.intersectsTriangle(ys))return!0;return!1}});for(let p=x,y=m+x;p<y;p++){const _=t.resolveTriangleIndex(p);Re(vs,3*_,f,h),vs.a.applyMatrix4(nr),vs.b.applyMatrix4(nr),vs.c.applyMatrix4(nr),vs.needsUpdate=!0;for(let v=0,b=d.count;v<b;v+=3)if(Re(ys,v,d,g),ys.needsUpdate=!0,vs.intersectsTriangle(ys))return!0}}else{const u=i+8,f=o[i+6];return Se(u,r,So),!!(s.intersectsBox(So)&&Kc(u,t,e,n,s)||(Se(f,r,So),s.intersectsBox(So)&&Kc(f,t,e,n,s)))}}const bo=new te,lc=new Ze,ir=new Ze,OM=new w,FM=new w,BM=new w,zM=new w;function kM(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),lc.set(t.boundingBox.min,t.boundingBox.max,e),lc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,f=t.index,h=dn.getPrimitive(),d=dn.getPrimitive();let g=OM,x=FM,m=null,p=null;s&&(m=BM,p=zM);let y=1/0,_=null,v=null;return bo.copy(e).invert(),ir.matrix.copy(bo),i.shapecast({boundsTraverseOrder:b=>lc.distanceToBox(b),intersectsBounds:(b,E,S)=>S<y&&S<a?(E&&(ir.min.copy(b.min),ir.max.copy(b.max),ir.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree){const S=t.boundsTree;return S.shapecast({boundsTraverseOrder:C=>ir.distanceToBox(C),intersectsBounds:(C,M,T)=>T<y&&T<a,intersectsRange:(C,M)=>{for(let T=C,I=C+M;T<I;T++){const U=S.resolveTriangleIndex(T);Re(d,3*U,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let z=b,L=b+E;z<L;z++){const N=i.resolveTriangleIndex(z);Re(h,3*N,l,c),h.needsUpdate=!0;const k=h.distanceToTriangle(d,g,m);if(k<y&&(x.copy(g),p&&p.copy(m),y=k,_=z,v=T),k<r)return!0}}}})}else{const S=ks(t);for(let C=0,M=S;C<M;C++){Re(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let T=b,I=b+E;T<I;T++){const U=i.resolveTriangleIndex(T);Re(h,3*U,l,c),h.needsUpdate=!0;const z=h.distanceToTriangle(d,g,m);if(z<y&&(x.copy(g),p&&p.copy(m),y=z,_=T,v=C),z<r)return!0}}}}}),dn.releasePrimitive(h),dn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(bo),x.applyMatrix4(bo),s.distance=x.sub(s.point).length(),s.faceIndex=v),n)}function HM(){return typeof SharedArrayBuffer<"u"}const gr=new fe.constructor,jo=new fe.constructor,si=new gl(()=>new Pe),Ms=new Pe,Ss=new Pe,uc=new Pe,hc=new Pe;let fc=!1;function GM(i,t,e,n){if(fc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");fc=!0;const s=i._roots,r=t._roots;let a,o=0,c=0;const l=new te().copy(e).invert();for(let u=0,f=s.length;u<f;u++){gr.setBuffer(s[u]),c=0;const h=si.getPrimitive();Se(0,gr.float32Array,h),h.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(jo.setBuffer(r[d]),a=yn(0,0,e,l,n,o,c,0,0,h),jo.clearBuffer(),c+=r[d].length,!a);d++);if(si.releasePrimitive(h),gr.clearBuffer(),o+=s[u].length,a)break}return fc=!1,a}function yn(i,t,e,n,s,r=0,a=0,o=0,c=0,l=null,u=!1){let f,h;u?(f=jo,h=gr):(f=gr,h=jo);const d=f.float32Array,g=f.uint32Array,x=f.uint16Array,m=h.float32Array,p=h.uint32Array,y=h.uint16Array,_=i*2,v=t*2,b=$e(_,x),E=$e(v,y);let S=!1;if(E&&b)u?S=s(tn(t,p),un(t*2,y),tn(i,g),un(i*2,x),c,a+t,o,r+i):S=s(tn(i,g),un(i*2,x),tn(t,p),un(t*2,y),o,r+i,c,a+t);else if(E){const C=si.getPrimitive();Se(t,m,C),C.applyMatrix4(e);const M=hn(i),T=fn(i,g);Se(M,d,Ms),Se(T,d,Ss);const I=C.intersectsBox(Ms),U=C.intersectsBox(Ss);S=I&&yn(t,M,n,e,s,a,r,c,o+1,C,!u)||U&&yn(t,T,n,e,s,a,r,c,o+1,C,!u),si.releasePrimitive(C)}else{const C=hn(t),M=fn(t,p);Se(C,m,uc),Se(M,m,hc);const T=l.intersectsBox(uc),I=l.intersectsBox(hc);if(T&&I)S=yn(i,C,e,n,s,r,a,o,c+1,l,u)||yn(i,M,e,n,s,r,a,o,c+1,l,u);else if(T)if(b)S=yn(i,C,e,n,s,r,a,o,c+1,l,u);else{const U=si.getPrimitive();U.copy(uc).applyMatrix4(e);const z=hn(i),L=fn(i,g);Se(z,d,Ms),Se(L,d,Ss);const N=U.intersectsBox(Ms),k=U.intersectsBox(Ss);S=N&&yn(C,z,n,e,s,a,r,c,o+1,U,!u)||k&&yn(C,L,n,e,s,a,r,c,o+1,U,!u),si.releasePrimitive(U)}else if(I)if(b)S=yn(i,M,e,n,s,r,a,o,c+1,l,u);else{const U=si.getPrimitive();U.copy(hc).applyMatrix4(e);const z=hn(i),L=fn(i,g);Se(z,d,Ms),Se(L,d,Ss);const N=U.intersectsBox(Ms),k=U.intersectsBox(Ss);S=N&&yn(M,z,n,e,s,a,r,c,o+1,U,!u)||k&&yn(M,L,n,e,s,a,r,c,o+1,U,!u),si.releasePrimitive(U)}}return S}const To=new Ze,Lh=new Pe,VM={strategy:Kf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class _l{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:s.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=t,o=new _l(e,{...n,[ic]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=e.getIndex();if(c===null){const l=new Le(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...VM,[ic]:!1},e),e.useSharedArrayBuffer&&!HM())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[ic]||(rM(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Pe))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?LM:xM)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=r[l+15]===ua;if(u){const f=s[o+6],h=r[l+14];t(c,u,new Float32Array(n,o*4,6),f,h)}else{const f=o+mr/4,h=s[o+6],d=s[o+7];t(c,u,new Float32Array(n,o*4,6),d)||(a(f,c+1),a(h,c+1))}}}raycast(t,e=In,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],c=e.isMaterial,l=Array.isArray(e),u=a.groups,f=c?e.side:e,h=this.indirect?DM:SM;for(let d=0,g=r.length;d<g;d++){const x=l?e[u[d].materialIndex].side:f,m=o.length;if(h(this,d,x,t,o,n,s),l){const p=u[d].materialIndex;for(let y=m,_=o.length;y<_;y++)o[y].face.materialIndex=p}}return o}raycastFirst(t,e=In,n=0,s=1/0){const r=this._roots,a=this.geometry,o=e.isMaterial,c=Array.isArray(e);let l=null;const u=a.groups,f=o?e.side:e,h=this.indirect?UM:bM;for(let d=0,g=r.length;d<g;d++){const x=c?e[u[d].materialIndex].side:f,m=h(this,d,x,t,n,s);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[d].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?NM:TM;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){const e=dn.getPrimitive(),n=this.indirect?MM:_M;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const f=a;a=(h,d,g,x,m)=>f(h,d,g,x,m)?!0:n(h,d,this,o,g,x,e)}else a||(o?a=(f,h,d,g)=>n(f,h,this,o,d,g,e):a=(f,h,d)=>d);let c=!1,l=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const d=u[f];if(c=hM(this,f,r,a,s,l),c)break;l+=d.byteLength}return dn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=dn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Re(a,x*3,o,c)}:g=>{Re(a,g*3,o,c)},u=dn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,d=t.indirect?g=>{const x=t.resolveTriangleIndex(g);Re(u,x*3,f,h)}:g=>{Re(u,g*3,f,h)};if(r){const g=(x,m,p,y,_,v,b,E)=>{for(let S=p,C=p+y;S<C;S++){d(S),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=x,T=x+m;M<T;M++)if(l(M),a.needsUpdate=!0,r(a,u,M,S,_,v,b,E))return!0}return!1};if(s){const x=s;s=function(m,p,y,_,v,b,E,S){return x(m,p,y,_,v,b,E,S)?!0:g(m,p,y,_,v,b,E,S)}}else s=g}return GM(this,t,e,s)}intersectsBox(t,e){return To.set(t.min,t.max,e),To.needsUpdate=!0,this.shapecast({intersectsBounds:n=>To.intersectsBox(n),intersectsTriangle:n=>To.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?kM:CM)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return fM(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Se(0,new Float32Array(n),Lh),t.union(Lh)}),t}}const id=1e-6,WM=id*.5,sd=Math.pow(10,-Math.log10(id)),XM=WM*sd;function Dn(i){return~~(i*sd+XM)}function qM(i){return`${Dn(i.x)},${Dn(i.y)}`}function Dh(i){return`${Dn(i.x)},${Dn(i.y)},${Dn(i.z)}`}function YM(i){return`${Dn(i.x)},${Dn(i.y)},${Dn(i.z)},${Dn(i.w)}`}function ZM(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function rd(){return typeof SharedArrayBuffer<"u"}function jM(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(n).set(s,0),new t(n)}function $M(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function KM(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=$M(e,n);i.setIndex(new Le(s,1));for(let r=0;r<e;r++)s[r]=r}}function JM(i){return i.index?i.index.count:i.attributes.position.count}function xl(i){return JM(i)/3}const QM=1e-8,tS=new w;function eS(i){return~~(i/3)}function nS(i){return i%3}function Ih(i,t){return i.start-t.start}function Uh(i,t){return tS.subVectors(t,i.origin).dot(i.direction)}function iS(i,t,e,n=QM){i.sort(Ih),t.sort(Ih);for(let o=0;o<i.length;o++){const c=i[o];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||i.splice(o+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const f=c.end;c.end=u.start,u.start=f}else if(c.start>=u.start&&c.end>=u.end){const f=u.end;u.end=c.start,c.start=f}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),a(u)&&(t.splice(l,1),l--),a(c)){i.splice(o,1),o--;break}}}s(i),s(t);function s(o){for(let c=0;c<o.length;c++)a(o[c])&&(o.splice(c,1),c--)}function r(o,c){return Math.abs(c-o)<n}function a(o){return Math.abs(o.end-o.start)<n}}const Nh=1e-5,Oh=1e-4;class sS{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(a(u,t)&&a(u,n))continue;const f=o(u,t),h=o(u,n),d=Math.min(f,h);d<s&&(s=d,r=u)}return r;function a(c,l){const u=c.origin.distanceTo(l.origin)>Nh;return c.direction.angleTo(l.direction)>Oh||u}function o(c,l){const u=c.origin.distanceTo(l.origin),f=c.direction.angleTo(l.direction);return u/Nh+f/Oh}}}const dc=new w,pc=new w,Ao=new Fs;function rS(i,t,e){const n=i.attributes,s=i.index,r=n.position,a=new Map,o=new Map,c=Array.from(t),l=new sS;for(let u=0,f=c.length;u<f;u++){const h=c[u],d=eS(h),g=nS(h);let x=3*d+g,m=3*d+(g+1)%3;s&&(x=s.getX(x),m=s.getX(m)),dc.fromBufferAttribute(r,x),pc.fromBufferAttribute(r,m),ZM(dc,pc,Ao);let p,y=l.findClosestRay(Ao);y===null&&(y=Ao.clone(),l.addRay(y)),o.has(y)||o.set(y,{forward:[],reverse:[],ray:y}),p=o.get(y);let _=Uh(y,dc),v=Uh(y,pc);_>v&&([_,v]=[v,_]),Ao.direction.dot(y.direction)<0?p.reverse.push({start:_,end:v,index:h}):p.forward.push({start:_,end:v,index:h})}return o.forEach(({forward:u,reverse:f},h)=>{iS(u,f,a,e),u.length===0&&f.length===0&&o.delete(h)}),{disjointConnectivityMap:a,fragmentMap:o}}const oS=new ct,mc=new w,aS=new se,gc=["","",""];class cS{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:s,degenerateEpsilon:r}=this,a=e?_:y,o=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,f=c.position;let h=xl(t);const d=h;let g=0;n&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(h=~~(t.drawRange.count/3)));let x=this.data;(!x||x.length<3*d)&&(x=new Int32Array(3*d)),x.fill(-1);let m=0,p=new Set;for(let v=g,b=h*3+g;v<b;v+=3){const E=v;for(let S=0;S<3;S++){let C=E+S;u&&(C=u.getX(C)),gc[S]=a(C)}for(let S=0;S<3;S++){const C=(S+1)%3,M=gc[S],T=gc[C],I=`${T}_${M}`;if(o.has(I)){const U=E+S,z=o.get(I);x[U]=z,x[z]=U,o.delete(I),m+=2,p.delete(z)}else{const U=`${M}_${T}`,z=E+S;o.set(U,z),p.add(z)}}}if(s){const{fragmentMap:v,disjointConnectivityMap:b}=rS(t,p,r);p.clear(),v.forEach(({forward:E,reverse:S})=>{E.forEach(({index:C})=>p.add(C)),S.forEach(({index:C})=>p.add(C))}),this.unmatchedDisjointEdges=v,this.disjointConnections=b,m=h*3-p.size}this.matchedEdges=m,this.unmatchedEdges=p.size,this.data=x;function y(v){return mc.fromBufferAttribute(f,v),Dh(mc)}function _(v){let b="";for(let E=0,S=l.length;E<S;E++){const C=c[l[E]];let M;switch(C.itemSize){case 1:M=Dn(C.getX(v));break;case 2:M=qM(oS.fromBufferAttribute(C,v));break;case 3:M=Dh(mc.fromBufferAttribute(C,v));break;case 4:M=YM(aS.fromBufferAttribute(C,v));break}b!==""&&(b+="|"),b+=M}return b}}}class $o extends $t{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new te,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,s=e.elements;for(let r=0;r<16;r++)if(n[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=rd();if(n)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=jM(r.array)}if(t.boundsTree||(KM(t,{useSharedArrayBuffer:n}),t.boundsTree=new _l(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new cS(t)),!t.groupIndices){const s=xl(t),r=new Uint16Array(s),a=t.groups;for(let o=0,c=a.length;o<c;o++){const{start:l,count:u}=a[o];for(let f=l/3,h=(l+u)/3;f<h;f++)r[f]=o}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const lS=1e-14,_c=new w,Fh=new w,Bh=new w;function ri(i,t=lS){_c.subVectors(i.b,i.a),Fh.subVectors(i.c,i.a),Bh.subVectors(i.b,i.c);const e=_c.angleTo(Fh),n=_c.angleTo(Bh),s=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(s)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const xc=1e-10,sr=1e-10,uS=1e-10,Hn=new pn,Te=new pn,Gn=new w,vc=new w,zh=new w,wo=new Sn,yc=new gn;class hS{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new pe),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class fS{constructor(){this.trianglePool=new hS,this.triangles=[],this.normal=new w,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:s}=this;if(Array.isArray(t))for(let r=0,a=t.length;r<a;r++){const o=t[r];if(r===0)o.getNormal(s);else if(Math.abs(1-o.getNormal(Gn).dot(s))>xc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=n.getTriangle();c.copy(o),e.push(c)}else{t.getNormal(s);const r=n.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(vc).normalize(),Math.abs(1-Math.abs(vc.dot(e)))<uS){this.coplanarTriangleUsed=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const a=(r+1)%3,o=s[r],c=s[a];Gn.subVectors(c,o).normalize(),zh.crossVectors(vc,Gn),wo.setFromNormalAndCoplanarPoint(zh,o),this.splitByPlane(wo,t)}}else t.getPlane(wo),this.splitByPlane(wo,t)}splitByPlane(t,e){const{triangles:n,trianglePool:s}=this;yc.copy(e),yc.needsUpdate=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];if(!yc.intersectsTriangle(o,Hn,!0))continue;const{a:c,b:l,c:u}=o;let f=0,h=-1,d=!1,g=[],x=[];const m=[c,l,u];for(let p=0;p<3;p++){const y=(p+1)%3;Hn.start.copy(m[p]),Hn.end.copy(m[y]);const _=t.distanceToPoint(Hn.start),v=t.distanceToPoint(Hn.end);if(Math.abs(_)<sr&&Math.abs(v)<sr){d=!0;break}if(_>0?g.push(p):x.push(p),Math.abs(_)<sr)continue;let b=!!t.intersectLine(Hn,Gn);!b&&Math.abs(v)<sr&&(Gn.copy(Hn.end),b=!0),b&&!(Gn.distanceTo(Hn.start)<xc)&&(Gn.distanceTo(Hn.end)<xc&&(h=p),f===0?Te.start.copy(Gn):Te.end.copy(Gn),f++)}if(!d&&f===2&&Te.distance()>sr)if(h!==-1){h=(h+1)%3;let p=0;p===h&&(p=(p+1)%3);let y=p+1;y===h&&(y=(y+1)%3);const _=s.getTriangle();_.a.copy(m[y]),_.b.copy(Te.end),_.c.copy(Te.start),ri(_)||n.push(_),o.a.copy(m[p]),o.b.copy(Te.start),o.c.copy(Te.end),ri(o)&&(n.splice(r,1),r--,a--)}else{const p=g.length>=2?x[0]:g[0];if(p===0){let E=Te.start;Te.start=Te.end,Te.end=E}const y=(p+1)%3,_=(p+2)%3,v=s.getTriangle(),b=s.getTriangle();m[y].distanceToSquared(Te.start)<m[_].distanceToSquared(Te.end)?(v.a.copy(m[y]),v.b.copy(Te.start),v.c.copy(Te.end),b.a.copy(m[y]),b.b.copy(m[_]),b.c.copy(Te.start)):(v.a.copy(m[_]),v.b.copy(Te.start),v.c.copy(Te.end),b.a.copy(m[y]),b.b.copy(m[_]),b.c.copy(Te.end)),o.a.copy(m[p]),o.b.copy(Te.end),o.c.copy(Te.start),ri(v)||n.push(v),ri(b)||n.push(b),ri(o)&&(n.splice(r,1),r--,a--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function dS(i){return i=~~i,i+4-i%4}class kh{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=rd()?SharedArrayBuffer:ArrayBuffer,s=new e(new n(dS(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[n+s]=t[s];this.length+=t.length}clear(){this.length=0}}class pS{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let s=0;for(let r=0;r<e;r++){const a=n[r];s+=a[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in n){const a=n[r],o=new kh(a.type);o.itemSize=a.itemSize,o.normalized=a.normalized,s[r]=o}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,s){const{groupAttributes:r}=this,o=r[0][t];if(o){if(o.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=n,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new kh(e);u.itemSize=n,u.normalized=s,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class Hh{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:s}=this;n[t]||(n[t]=[],s.push(t)),n[t].push(e)}}const mS=0,od=1,gS=2,_S=3,xS=4,ad=5,cd=6,rn=new Fs,Gh=new te,We=new pe,Vn=new w,Vh=new se,Wh=new se,Xh=new se,Mc=new se,Ro=new se,Po=new se,qh=new pn,Sc=new w,Ec=1e-8,vS=1e-15,Ci=-1,Li=1,Fo=-2,Bo=2,_r=0,bi=1,vl=2,yS=1e-14;let zo=null;function Yh(i){zo=i}function ld(i,t){i.getMidpoint(rn.origin),i.getNormal(rn.direction);const e=t.raycastFirst(rn,cn);return!!(e&&rn.direction.dot(e.face.normal)>0)?Ci:Li}function MS(i,t){function e(){return Math.random()-.5}i.getNormal(Sc),rn.direction.copy(Sc),i.getMidpoint(rn.origin);const n=3;let s=0,r=1/0;for(let a=0;a<n;a++){rn.direction.x+=e()*Ec,rn.direction.y+=e()*Ec,rn.direction.z+=e()*Ec,rn.direction.multiplyScalar(-1);const o=t.raycastFirst(rn,cn);if(!!(o&&rn.direction.dot(o.face.normal)>0)&&s++,o!==null&&(r=Math.min(r,o.distance)),r<=vS)return o.face.normal.dot(Sc)>0?Bo:Fo;if(s/n>.5||(a-s+1)/n>.5)break}return s/n>.5?Ci:Li}function SS(i,t){const e=new Hh,n=new Hh;return Gh.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Gh,{intersectsTriangles(s,r,a,o){if(!ri(s)&&!ri(r)){let c=s.intersectsTriangle(r,qh,!0);if(!c){const l=s.plane,u=r.plane,f=l.normal,h=u.normal;f.dot(h)===1&&Math.abs(l.constant-u.constant)<yS&&(c=!0)}if(c){let l=i.geometry.boundsTree.resolveTriangleIndex(a),u=t.geometry.boundsTree.resolveTriangleIndex(o);e.add(l,u),n.add(u,l),zo&&(zo.addEdge(qh),zo.addIntersectingTriangles(a,s,o,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function ES(i,t,e,n,s,r,a=!1){const o=e.attributes,c=e.index,l=i*3,u=c.getX(l+0),f=c.getX(l+1),h=c.getX(l+2);for(const d in r){const g=o[d],x=r[d];if(!(d in o))throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);const m=g.itemSize;d==="position"?(We.a.fromBufferAttribute(g,u).applyMatrix4(n),We.b.fromBufferAttribute(g,f).applyMatrix4(n),We.c.fromBufferAttribute(g,h).applyMatrix4(n),bc(We.a,We.b,We.c,t,3,x,a)):d==="normal"?(We.a.fromBufferAttribute(g,u).applyNormalMatrix(s),We.b.fromBufferAttribute(g,f).applyNormalMatrix(s),We.c.fromBufferAttribute(g,h).applyNormalMatrix(s),a&&(We.a.multiplyScalar(-1),We.b.multiplyScalar(-1),We.c.multiplyScalar(-1)),bc(We.a,We.b,We.c,t,3,x,a,!0)):(Vh.fromBufferAttribute(g,u),Wh.fromBufferAttribute(g,f),Xh.fromBufferAttribute(g,h),bc(Vh,Wh,Xh,t,m,x,a))}}function bS(i,t,e,n,s,r,a,o=!1){Tc(i,n,s,r,a,o),Tc(o?e:t,n,s,r,a,o),Tc(o?t:e,n,s,r,a,o)}function ud(i,t,e=!1){switch(i){case mS:if(t===Li||t===Bo&&!e)return bi;break;case od:if(e){if(t===Ci)return _r}else if(t===Li||t===Fo)return bi;break;case gS:if(e){if(t===Li||t===Fo)return bi}else if(t===Ci)return _r;break;case xS:if(t===Ci)return _r;if(t===Li)return bi;break;case _S:if(t===Ci||t===Bo&&!e)return bi;break;case ad:if(!e&&(t===Li||t===Fo))return bi;break;case cd:if(!e&&(t===Ci||t===Bo))return bi;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return vl}function bc(i,t,e,n,s,r,a=!1,o=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};Mc.set(0,0,0,0).addScaledVector(i,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),Ro.set(0,0,0,0).addScaledVector(i,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),Po.set(0,0,0,0).addScaledVector(i,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),o&&(Mc.normalize(),Ro.normalize(),Po.normalize()),c(Mc),a?(c(Po),c(Ro)):(c(Ro),c(Po))}function Tc(i,t,e,n,s,r=!1){for(const a in s){const o=t[a],c=s[a];if(!(a in t))throw new Error(`CSG Operations: Attribute ${a} no available on geometry.`);const l=o.itemSize;a==="position"?(Vn.fromBufferAttribute(o,i).applyMatrix4(e),c.push(Vn.x,Vn.y,Vn.z)):a==="normal"?(Vn.fromBufferAttribute(o,i).applyNormalMatrix(n),r&&Vn.multiplyScalar(-1),c.push(Vn.x,Vn.y,Vn.z)):(c.push(o.getX(i)),l>1&&c.push(o.getY(i)),l>2&&c.push(o.getZ(i)),l>3&&c.push(o.getW(i)))}}class TS{constructor(t){this.triangle=new pe().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new pe().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class Zh{constructor(){this.data={}}addTriangleIntersection(t,e,n,s){const{data:r}=this;r[t]||(r[t]=new TS(e)),r[t].addTriangle(n,s)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const s in e)n.push(e[s].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,s=new Set,r=[],a=o=>{if(n[o])if(e!==null)n[o].intersects[e]&&r.push(n[o].intersects[e]);else{const c=n[o].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(t!==null)a(t);else for(const o in n)a(o);return r}reset(){this.data={}}}class AS{constructor(){this.enabled=!1,this.triangleIntersectsA=new Zh,this.triangleIntersectsB=new Zh,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,s){const{triangleIntersectsA:r,triangleIntersectsB:a}=this;r.addTriangleIntersection(t,e,n,s),a.addTriangleIntersection(n,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Yh(this))}complete(){this.enabled&&Yh(null)}}const li=new te,Ko=new Zt,Ti=new pe,Co=new pe,ii=new pe,Lo=new pe,Tn=[],Fi=[];function wS(i){for(const t of i)return t}function RS(i,t,e,n,s,r={}){const{useGroups:a=!0}=r,{aIntersections:o,bIntersections:c}=SS(i,t),l=[];let u=null,f;return f=a?0:-1,jh(i,t,o,e,!1,n,s,f),$h(i,t,o,e,!1,s,f),e.findIndex(d=>d!==cd&&d!==ad)!==-1&&(f=a?i.geometry.groups.length||1:-1,jh(t,i,c,e,!0,n,s,f),$h(t,i,c,e,!0,s,f)),Tn.length=0,Fi.length=0,{groups:l,materials:u}}function jh(i,t,e,n,s,r,a,o=0){const c=i.matrixWorld.determinant()<0;li.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Ko.getNormalMatrix(i.matrixWorld).multiplyScalar(c?-1:1);const l=i.geometry.groupIndices,u=i.geometry.index,f=i.geometry.attributes.position,h=t.geometry.boundsTree,d=t.geometry.index,g=t.geometry.attributes.position,x=e.ids,m=e.intersectionSet;for(let p=0,y=x.length;p<y;p++){const _=x[p],v=o===-1?0:l[_]+o,b=3*_,E=u.getX(b+0),S=u.getX(b+1),C=u.getX(b+2);Ti.a.fromBufferAttribute(f,E).applyMatrix4(li),Ti.b.fromBufferAttribute(f,S).applyMatrix4(li),Ti.c.fromBufferAttribute(f,C).applyMatrix4(li),r.reset(),r.initialize(Ti);const M=m[_];for(let I=0,U=M.length;I<U;I++){const z=3*M[I],L=d.getX(z+0),N=d.getX(z+1),k=d.getX(z+2);Co.a.fromBufferAttribute(g,L),Co.b.fromBufferAttribute(g,N),Co.c.fromBufferAttribute(g,k),r.splitByTriangle(Co)}const T=r.triangles;for(let I=0,U=T.length;I<U;I++){const z=T[I],L=r.coplanarTriangleUsed?MS(z,h):ld(z,h);Tn.length=0,Fi.length=0;for(let N=0,k=n.length;N<k;N++){const Z=ud(n[N],L,s);Z!==vl&&(Fi.push(Z),Tn.push(a[N].getGroupAttrSet(v)))}if(Tn.length!==0){Ti.getBarycoord(z.a,Lo.a),Ti.getBarycoord(z.b,Lo.b),Ti.getBarycoord(z.c,Lo.c);for(let N=0,k=Tn.length;N<k;N++){const Z=Tn[N],Y=Fi[N]===_r;ES(_,Lo,i.geometry,i.matrixWorld,Ko,Z,c!==Y)}}}}return x.length}function $h(i,t,e,n,s,r,a=0){const o=i.matrixWorld.determinant()<0;li.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Ko.getNormalMatrix(i.matrixWorld).multiplyScalar(o?-1:1);const c=t.geometry.boundsTree,l=i.geometry.groupIndices,u=i.geometry.index,f=i.geometry.attributes,h=f.position,d=[],g=i.geometry.halfEdges,x=new Set,m=xl(i.geometry);for(let p=0,y=m;p<y;p++)p in e.intersectionSet||x.add(p);for(;x.size>0;){const p=wS(x);x.delete(p),d.push(p);const y=3*p,_=u.getX(y+0),v=u.getX(y+1),b=u.getX(y+2);ii.a.fromBufferAttribute(h,_).applyMatrix4(li),ii.b.fromBufferAttribute(h,v).applyMatrix4(li),ii.c.fromBufferAttribute(h,b).applyMatrix4(li);const E=ld(ii,c);Fi.length=0,Tn.length=0;for(let S=0,C=n.length;S<C;S++){const M=ud(n[S],E,s);M!==vl&&(Fi.push(M),Tn.push(r[S]))}for(;d.length>0;){const S=d.pop();for(let C=0;C<3;C++){const M=g.getSiblingTriangleIndex(S,C);M!==-1&&x.has(M)&&(d.push(M),x.delete(M))}if(Tn.length!==0){const C=3*S,M=u.getX(C+0),T=u.getX(C+1),I=u.getX(C+2),U=a===-1?0:l[S]+a;if(ii.a.fromBufferAttribute(h,M),ii.b.fromBufferAttribute(h,T),ii.c.fromBufferAttribute(h,I),!ri(ii))for(let z=0,L=Tn.length;z<L;z++){const N=Fi[z],k=Tn[z].getGroupAttrSet(U),Z=N===_r;bS(M,T,I,f,i.matrixWorld,Ko,k,Z!==o)}}}}}function PS(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const s=e.start,r=n.start+n.count;n.start=s,n.count=r-s,i.splice(t,1),t--}}}function CS(i,t,e,n){e.clear();const s=i.attributes;for(let r=0,a=n.length;r<a;r++){const o=n[r],c=s[o];e.initializeArray(o,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)n.includes(r)||e.delete(r);for(const r in t.attributes)n.includes(r)||(t.deleteAttribute(r),t.dispose())}function LS(i,t,e){let n=!1,s=-1;const r=i.attributes,a=t.groupAttributes[0];for(const c in a){const l=t.getTotalLength(c),u=t.getType(c),f=t.getItemSize(c),h=t.getNormalized(c);let d=r[c];(!d||d.array.length<l)&&(d=new Le(new u(l),f,h),i.setAttribute(c,d),n=!0);let g=0;for(let x=0,m=Math.min(e.length,t.groupCount);x<m;x++){const p=e[x].index,{array:y,type:_,length:v}=t.groupAttributes[p][c],b=new _(y.buffer,0,v);d.array.set(b,g),g+=b.length}d.needsUpdate=!0,s=l/d.itemSize}if(i.index){const c=i.index.array;if(c.length<s)i.index=null,n=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let o=0;i.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:f}=e[c],h=t.getCount(u);h!==0&&(i.addGroup(o,h,f),o+=h)}i.setDrawRange(0,s),i.boundsTree=null,n&&i.dispose()}function Kh(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class DS{constructor(){this.triangleSplitter=new fS,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new AS}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,s=new $o){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s],r=!1),s.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:a,attributeData:o,attributes:c,useGroups:l,consolidateGroups:u,debug:f}=this;for(;o.length<s.length;)o.push(new pS);s.forEach((p,y)=>{CS(t.geometry,p.geometry,o[y],c)}),f.init(),RS(t,e,n,a,o,{useGroups:l}),f.complete();const h=this.getGroupRanges(t.geometry),d=Kh(h,t.material),g=this.getGroupRanges(e.geometry),x=Kh(g,e.material);g.forEach(p=>p.materialIndex+=d.length);let m=[...h,...g].map((p,y)=>({...p,index:y}));if(l){const p=[...d,...x];u&&(m=m.map(_=>{const v=p[_.materialIndex];return _.materialIndex=p.indexOf(v),_}).sort((_,v)=>_.materialIndex-v.materialIndex));const y=[];for(let _=0,v=p.length;_<v;_++){let b=!1;for(let E=0,S=m.length;E<S;E++){const C=m[E];C.materialIndex===_&&(b=!0,C.materialIndex=y.length)}b&&y.push(p[_])}s.forEach(_=>{_.material=y})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(p=>{p.material=d[0]});return s.forEach((p,y)=>{const _=p.geometry;LS(_,o[y],m),u&&PS(_.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new $o){t.updateMatrixWorld(!0);const n=(r,a)=>{const o=r.children;for(let c=0,l=o.length;c<l;c++){const u=o[c];u.isOperationGroup?n(u,a):a(u)}},s=r=>{const a=r.children;let o=!1;for(let l=0,u=a.length;l<u;l++){const f=a[l];o=s(f)||o}const c=r.isDirty();if(c&&r.markUpdated(),o&&!r.isOperationGroup){let l;return n(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return o||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const IS="HFBL45A5-2020-100-SET",US="https://jp.misumi-ec.com/vona2/detail/110310614879/",NS="https://jp.misumi-ec.com/linked/item/10310614879/img/drw_20.gif",OS=100,FS=20,BS=18,zS=5.5,kS=11,HS=4,GS="CBE5-10",VS=5,WS=10,XS=8.5,qS=5,YS="PWF5",ZS=1,jS=10,$S=5.3,KS="HNTT5-5",JS=2,QS=.5,t1="Outer material envelope with machined mounting bores; longitudinal T-slots omitted; generic nut envelopes; no thread model",ae={sku:IS,source:US,drawing:NS,legMm:OS,profileMm:FS,holeSetbackMm:BS,throughDiameterMm:zS,counterboreDiameterMm:kS,floorThicknessMm:HS,screwSku:GS,screwDiameterMm:VS,screwLengthMm:WS,headDiameterMm:XS,headHeightMm:qS,washerSku:YS,washerThicknessMm:ZS,washerOuterDiameterMm:jS,washerInnerDiameterMm:$S,nutSku:KS,kitFastenerCount:JS,legToleranceMm:QS,fidelity:t1};let Do;function e1(){if(Do)return Do;const i=ae.legMm,t=i-ae.profileMm*Math.SQRT2,e=new mi;e.moveTo(0,i),e.lineTo(i,0),e.lineTo(t,0),e.lineTo(0,t),e.closePath();const n=new $n(e,{depth:ae.profileMm,bevelEnabled:!1});n.translate(0,0,-20/2),n.clearGroups();let s=new $o(n,F.extrusion);s.updateMatrixWorld();const r=new DS;r.useGroups=!1;const a=ae.legMm-ae.holeSetbackMm;for(const o of["y","x"])for(const[c,l]of[[ae.throughDiameterMm/2,-1],[ae.counterboreDiameterMm/2,ae.floorThicknessMm]]){const u=ae.legMm+1,f=new $o(new wr(c,c,u-l,40),F.extrusion);o==="y"?f.position.set(a,(l+u)/2,0):(f.rotation.z=-Math.PI/2,f.position.set((l+u)/2,a,0)),f.updateMatrixWorld(),s=r.evaluate(s,f,od),s.updateMatrixWorld()}return Do=s.geometry,Do}function n1(){const i=new Xt,t=new $t(e1(),F.extrusion);t.userData.cadPrimitive={kind:"miterBraceEnvelope",...ae},i.add(t);const e=ae.legMm-ae.holeSetbackMm;for(const n of["y","x"]){const s=new Xt,r=gi(ae.screwDiameterMm,ae.screwLengthMm,ae.headHeightMm,ae.headDiameterMm/2,{grip:ae.floorThicknessMm+ae.washerThicknessMm,washerThickness:0});r.position.y=ae.floorThicknessMm+ae.washerThicknessMm+ae.headHeightMm/2,s.add(r);const a=Ye(ae.washerThicknessMm,ae.washerOuterDiameterMm,ae.washerInnerDiameterMm);a.position.y=ae.floorThicknessMm+ae.washerThicknessMm/2,s.add(a),n==="y"?s.position.x=e:(s.rotation.z=-Math.PI/2,s.position.y=e),i.add(s)}return i.userData={part:"bracket",sku:ae.sku,role:"side-brace",geometryFidelity:ae.fidelity,holesLocal:[[e,0,0],[0,e,0]],fastenersSelected:!0},i}const Jo=Object.freeze({x:-16.715,keyZ:75.55,bottomY:-55.28,shoulderY:-49.911,thickness:1.57}),Jc=Hc.contactLocalY;function i1(){const i=new Xt,t=aa("gpu-maxq");if(t)return i.add(t),i;const{L:e,H:n,T:s}=br,r=x=>e/2-x,a=54.5-Jc,o=(54.5+Jc)/2;H(i,K(s,a,e,F.cardShroud),0,o,0),H(i,K(1.57,5.369,83.3,F.gold),Jo.x,Jo.bottomY+5.369/2,45.55),H(i,K(s-6,3,20,F.slot),0,-n/2+12,r(155));const c=r(215),l=o,u=ue(37,1.6,F.gold,40);u.rotation.z=Math.PI/2,H(i,u,s/2+.3,l,c);const f=ue(34,3,F.vent,40);f.rotation.z=Math.PI/2,H(i,f,s/2-.5,l,c);const h=ue(17,2.5,F.bracket,28);h.rotation.z=Math.PI/2,H(i,h,s/2+.6,l,c);for(let x=0;x<18;x++){const m=x/18*Math.PI*2,p=25,y=K(1.6,1.2,13,F.fanBlade);y.rotation.x=m+.5,H(i,y,s/2+.4,l+Math.sin(m)*p,c+Math.cos(m)*p)}H(i,K(s-4,2,33,F.cardBack),0,n/2+.6,r(17.5)),H(i,K(s-12,1.2,20,F.gold),0,n/2+1.8,r(17.5)),H(i,K(s-8,2.6,160,F.gold),0,n/2+.8,r(115));for(let x=0;x<39;x++)H(i,K(s-10,1.4,1.1,F.vent),0,n/2+2.1,r(37+x*4.1));H(i,K(s-14,1.2,26,F.gold),0,n/2+.9,r(238)),H(i,K(s-10,14,15,F.vent),0,n/2-8,-e/2+8),H(i,K(18,9,9,F.connector),0,n/2-8,-e/2+6),H(i,K(14,6.5,2,F.slot),0,n/2-8,-e/2+1),H(i,K(s+2,n-4,2,F.bracket),0,2,e/2+1);for(let x=0;x<4;x++)H(i,K(3,6,16,F.slot),-s/4,26-x*15,e/2+1.4).rotation.y=Math.PI/2;for(let x=0;x<12;x++){const m=K(14,2.4,1.6,F.slot);m.rotation.z=.45,H(i,m,s/4-2,34-x*6.4,e/2+2.2)}H(i,K(8,8,1.6,F.slot),-s/4,42,e/2+2.2);const d=12.7599,g=146.1099-d/2;return H(i,mn(s+2,re.foldTop-re.foldBottom,d,[[re.axisX,re.axisZ-g,2]],F.bracket),0,(re.foldTop+re.foldBottom)/2,g),i}function s1(){const i=new Xt,t=(s,r)=>(s.position.set(re.axisX,r,re.axisZ),i.add(s),s),e=gi(3,re.screwLength,2,2.75,{nut:!1,grip:11.4,washerThickness:re.washerThickness});e.rotation.x=Math.PI,t(e,re.foldBottom-re.washerThickness-1),t(Ye(re.washerThickness,re.washerOuter,re.washerBore),re.foldTop+re.washerThickness/2),t(Ye(re.spacerLength,re.spacerOuter,re.spacerBore),re.foldTop+re.washerThickness+re.spacerLength/2),t(Ye(re.washerThickness,re.washerOuter,re.washerBore),re.railBottom-re.washerThickness/2);const n=pl();return n.rotation.x=Math.PI,t(n,re.railBottom),i.userData={role:"central-opening-gpu-clamp",geometryFidelity:"Original-mesh surface clearance checked; delivered fit and load test pending",mountingUnresolved:!0,physicalFitVerified:!1,strengthVerified:!1},i}const Me={slotX:4,slotZ:7.5,mcioX:-5.2,mcioZ:[-2.5,31.5],auxX:-4.3,auxZ:-30,holesZ:[-42.5,57.5],holeX:4.5,holeRadius:1.875,keyZ:-22.5};function r1(){const i=new Xt,t=Me.holesZ.map(a=>[Me.holeX,a,Me.holeRadius]),e=aa("device-vertical");if(e)return i.add(e),i;const{W:n,PCB:s,L:r}=Wv;H(i,mn(n,s,r,t,F.pcbBlack),0,0,0),H(i,K(9.2,12,91,F.slot),Me.slotX,s/2+6,Me.slotZ),H(i,K(2.2,2,89,F.cablePlug),Me.slotX,s/2+11,Me.slotZ);for(const a of Me.mcioZ)H(i,K(7.8,11,25.8,F.connector),Me.mcioX,-s/2-5.5,a),H(i,K(3.5,2,23,F.slot),Me.mcioX,-s/2-11.5,a);return H(i,K(11,13,14.5,F.chip),Me.auxX,-s/2-6.5,Me.auxZ),H(i,K(8,2.6,10,F.chip),3,s/2+1.3,-54),i}function hd(i,t,e,n=[0,0],s={}){const r={...Mn,...s},a=s.gpusPerTier??Gv,o=s.tiers??2,c=s.pitch??Vv;if(n.length!==o||n.some(v=>!Number.isFinite(v)||Math.abs(v)>r.tierSetupTravel))throw new RangeError("Each configured GPU tier setup offset must be within ±5 mm.");const l=i.children.length,u=0,f=[],h=r.frameWidth/2-10,d=r.frameWidth-40,g=u+r.retention.axisZ,x=u+r.rearSupport.contactLocalZ,m=u+Jo.keyZ+Me.keyZ,p=(v,b,E,S,C,M)=>(v.userData={...v.userData,part:b,zone:"GPU_shelf"},M!==void 0&&(v.userData.bank=M),v.position.set(E,S,C),i.add(v),v),y=(v,b,E,S,C="x",M="mount",T)=>{const I=Di(v);return C==="y"&&(I.rotation.z=Math.PI/2),C==="z"&&(I.rotation.y=Math.PI/2),p(I,M,b,E,S,T)},_=(v,b,E,S,C=!1)=>{const M=Tr(dl({shelfFoot:C}),v,b,E);M.userData.zone="GPU_shelf",S!==void 0&&(M.userData.bank=S),i.add(M)};for(const v of[-1,1])y(r.earLeg,v*h,t+r.earLeg/2,g,"y"),y(r.rearLeg,v*h,t+r.rearLeg/2,x,"y");for(let v=0;v<o;v++){const b=t+r.tierBaseLift+v*Cs.gpuTierSpacing+n[v],E=b+20+r.adapterSpacer+r.adapterPcb/2,S=E+r.gpuCenterAboveAdapter,C=S+r.retention.railBottom,M=S+Jc-r.rearPad;f.push({bank:v,base:b,gpuY:S,GZ:u,railLen:a*c});for(const U of[-1,1]){y(219.5,U*h,b+10,(g+x)/2,"z","mount",v);for(const[z,L]of[[x+10,1],[g-10,-1]])if(_([U*h,b+20,z],[0,0,L],[0,1,0],v),v===0&&s.sideBraces!==!1){const N=Tr(n1(),[U*h,b+20,z],[0,0,L],[0,1,0]);N.userData.zone="GPU_shelf",N.userData.bank=v,i.add(N)}}for(const U of Me.holesZ){y(d,0,b+10,m-U,"x","mount",v);for(const z of[-1,1])_([z*d/2,b+10,m-U+10],[-z,0,0],[0,0,1],v)}const T=d,I=y(T,0,C+10,g,"x","earRail",v);I.userData.mountingUnresolved=!0,y(T,0,M-10,x,"x","mount",v);for(const U of[-1,1])_([U*d/2,C,g],[-U,0,0],[0,-1,0],v),_([U*d/2,M-20,x],[-U,0,0],[0,-1,0],v);for(let U=0;U<a;U++){const z=(U-(a-1)/2)*c,L=z+Jo.x+Me.slotX,N=p(K(r.rearSupport.padLengthMm,r.rearPad,r.rearSupport.padWidthMm,F.vent),"mount",z,M+r.rearPad/2,x,v);N.userData={...N.userData,role:"rear-shroud-pad",sku:r.rearSupport.sku,geometryFidelity:"nominal uncompressed silicone; set rail to delivered contact"};const k=r1();k.rotation.y=Math.PI,p(k,"adapter",L,E,m,v),p(i1(),"gpu",z,S,u,v);for(const Z of Me.holesZ){const $=r.adapterStack,Y=L-Me.holeX,tt=m-Z;for(let et=0;et<2;et++)p(Ye(.5,7,3.2),"adapterShim",Y,b+20+.25+et*.5,tt,v);p(pl(),"mount",Y,b+20,tt,v),p(fl($.body,$.stud),"riser",Y,b+20+$.baseWasher+$.body/2,tt,v),p(gi(3,6,2,2.75,{grip:r.adapterPcb,nut:!1,washerThickness:.5}),"mount",L-Me.holeX,E+r.adapterPcb/2+1.5,m-Z,v)}p(s1(),"screw",z,S,u,v),e.adAux.push([L-Me.auxX,E-16,m-Me.auxZ]),e.gpuPwr.push([z,S+br.H/2-8,u-(br.L/2+6)]),e.gpuMcio.push(...Me.mcioZ.map(Z=>[L-Me.mcioX,E-14,m-Z]))}}for(const v of[-1,1])for(const b of[g,x])_([v*d/2,t,b],[-v,0,0],[0,1,0],void 0,!0);for(const v of i.children.slice(l))v.userData.zone="GPU_shelf";return i.userData.sharedGpuFrame={tiers:o,shelves:1,continuousPosts:4,jointsSelected:!0,jointsVerified:!1,earRetentionVerified:!1,sideBraces:s.sideBraces===!1?0:4,shelfFeet:4,setupTravelMm:r.tierSetupTravel,tierOffsetsMm:n.slice(),nominalBaseLiftMm:r.tierBaseLift},{tiers:f}}const fd=Object.freeze({block:[79,25,119],radiator:[394,120,53],tubeLength:460,confirmed:!0}),o1=new Er({color:14985037,transparent:!0,opacity:.4});function dd(i){const t=K(...i,o1);return t.userData.referenceOnly=!0,t.userData.mountingUnresolved=!0,t}const a1=()=>dd(fd.block),c1=()=>dd(fd.radiator);function l1(){const i=new Xt;H(i,K(360,96,24,F.heatsink),0,0,-12.5);for(const e of[-188.5,188.5])H(i,K(17,120,28,F.post),e,0,-12.5);const t=[-172.5,-67.5,-52.5,52.5,67.5,172.5];for(const e of[-54,54]){const n=mn(360,2,12,t.map(s=>[s,e>0?1.5:-1.5,1.8]),F.post);n.rotation.x=Math.PI/2,H(i,n,0,e,-25.5),H(i,K(360,12,26,F.post),0,e,-11.5)}for(const e of[-120,0,120]){const n=mn(120,25,120,[[0,0,55],...[-52.5,52.5].flatMap(r=>[-52.5,52.5].map(a=>[r,a,2]))],F.post);n.rotation.x=Math.PI/2,H(i,n,e,0,14);const s=Gi(51);s.rotation.x=Math.PI/2,H(i,s,e,0,14)}return i.userData={part:"coolerRadiator",zone:"Host_shelf",referenceOnly:!0,mountingUnresolved:!1,physicalFitVerified:!1,fanExhaust:[0,0,1],hoseRoutingUnresolved:!0,guide:"cad/RADIATOR-MOUNT.md"},i}const Rn=(i,t)=>(i.userData.part=t,i);function u1({tierOffsets:i=[0,0],hostFloorRunners:t=!0,supportedHost:e=!1,hostShelfTop:n=Cs.switchShelfTop}={}){const s=new Xt;s.add(Rn(qv(),"rack"));const{udmShelfTop:r,gpuShelfTop:a}=Cs,o=n,c=[];for(const L of[r,o,a]){const N=Rn(Yv(),"shelf");N.position.y=L,s.add(N),c.push([L,N])}const l={gpuPwr:[],gpuMcio:[],adAux:[],swAux:[],hostMcio:[],boardPwr:[]},u=[-120,120],f=a+Xf,h=o+58,d=[-90,90],g=-88;d.forEach(L=>{const N=Rn(Yf(!0),"psu");N.position.set(L,h,g),N.rotation.z=Math.PI,s.add(N);for(const k of[-60,60])for(const Z of[-85,85]){const $=Rn(ue(9,15,F.caster,16),"feet");$.position.set(L+k,o+7.5,g+Z),s.add($)}});const x=(L,N)=>[d[L]-N[0],h-N[1],g-oa.L/2-3],m=-245,p=()=>-1;u.forEach(L=>{const N=Rn(qf(),"switch");N.position.set(L,f,m),N.rotation.y=Math.PI,s.add(N);const k=p();l.swAux.push([L+k*dr[0],f+dr[1],m+k*dr[2]])});const{deckY:y,boardSpacer:_,boardZ:v}=Hy(s,o,l,{floorRunners:t,supportedHost:e}),b=Rn(a1(),"coolerBlock");b.position.set(71.5,y+_+Mn.boardPcb+5.8+12.5,5+v),s.add(b);const E=Rn(c1(),"coolerRadiator");E.position.set(0,o+80,265),s.add(E);const S=r+As.H/2,C=-195+As.D/2,M=Rn(ny(),"udm");M.position.set(0,S,C),M.rotation.y=Math.PI,s.add(M);const T=Rn(iy(),"xcvr");T.position.set(-75,S+vh[1],C-As.D/2-12),T.rotation.y=Math.PI,s.add(T);const I=[ec[0],y+9.25+ec[1],ec[2]],U=[-75,S+vh[1],C-As.D/2-30];for(const L of[Ns/2,Ns*1.5]){const N=Rn(sy(),"pdu");N.position.set(0,L,-Yn/2+jf.D/2),N.rotation.y=Math.PI,s.add(N)}const{tiers:z}=hd(s,a,l,i);for(const L of s.children)L.userData.zone||(L.userData.zone=["switch"].includes(L.userData.part)?"GPU_shelf":"Host_shelf");return s.updateMatrixWorld(!0),{rig:s,shelves:c,swTop:o,N:l,switchX:u,swY:f,swZ:m,swM:p,psuX:d,psuY:h,psuZ:g,sock:x,lanA:I,lanB:U,tiers:z}}function h1(i=1){const t=new Xt,e=[[38,0],[66,0],[0,38],[0,66]],n=ca([[-9,-9],[76,-9],[76,9],[9,9],[9,76],[-9,76]],3.2,e.map(([s,r])=>[s,r,2.75]));t.add(n);for(const[s,r]of e){const a=gi(5,8,5,4.25,{grip:3.2,washerThickness:0});a.rotation.x=i*Math.PI/2,a.position.set(s,r,i*4.1),t.add(a)}return t.userData={part:"topPlate",role:"top-corner-plate",sku:"HPTLS5-SEP",holesLocal:e,proposedNut:"HNTP5-5",fastenersSelected:!0,geometryFidelity:"drawing-derived plate; chamfers omitted; nut/thread envelopes",strengthVerified:!1},t}function f1(i,t,e){const n=e.frameWidth/2-10,s=Mn.retention.axisZ,r=Mn.rearSupport.contactLocalZ,a=t+e.earLeg-10;for(const o of[-1,1]){const c=Di(219.5);c.rotation.y=Math.PI/2,c.position.set(o*n,a,(s+r)/2),c.userData={part:"mount",zone:"GPU_shelf",role:"side-top-bar"},i.add(c);for(const[l,u]of[[s,-1],[r,1]]){const f=Tr(h1(o/u),[o*(n+10+1.6),a,l],[0,0,u],[0,-1,0]);f.userData.zone="GPU_shelf",i.add(f)}}Object.assign(i.userData.sharedGpuFrame,{topBars:2,topCornerPlates:4,jointsVerified:!1})}const d1="XSPC-RADSTAND-120-V2",p1=265,m1=70,g1=[-172.5,172.5],_1=[17.5,122.5],x1={thickness:2,holeOffset:13,holeDiameter:5},v1={width:5,centerSpan:17,lateralCenter:18,depthCenters:[17,47]},y1={length:16,washerThickness:.8,washerOD:9,nutHeight:2.4},ge={sku:d1,contactZ:p1,radiatorCentreAboveShelf:m1,holeColumns:g1,uprightHolesAboveShelf:_1,stand:x1,slot:v1,shelfScrew:y1};function M1(){const i=new Xt,t=ge.stand,n=ca([[0,0],[60,0],[60,14],[55,17.5],[25,17.5],[13,30],[13,110],[25,121],[25,127],[22,130],[0,130]],t.thickness,ge.uprightHolesAboveShelf.map(a=>[t.holeOffset,a,t.holeDiameter/2]));n.position.z=t.thickness/2,n.material=F.post,i.add(n);const s=new mi;s.moveTo(0,2),s.lineTo(60,2),s.lineTo(60,62),s.lineTo(0,62),s.closePath();for(const a of ge.slot.depthCenters){const o=new di,c=ge.slot.width/2,l=ge.slot.lateralCenter-ge.slot.centerSpan/2,u=l+ge.slot.centerSpan;o.moveTo(l,a-c),o.lineTo(u,a-c),o.absarc(u,a,c,-Math.PI/2,Math.PI/2,!1),o.lineTo(l,a+c),o.absarc(l,a,c,Math.PI/2,3*Math.PI/2,!1),o.closePath(),s.holes.push(o)}const r=new $n(s,{depth:t.thickness,bevelEnabled:!1,curveSegments:16});return r.rotateX(Math.PI/2),r.translate(0,t.thickness,0),i.add(new $t(r,F.post)),i.userData={part:"radiatorStand",sku:ge.sku,zone:"Host_shelf",role:"radiator-stand",source:"research/radiator/xspc-radstand-drawing.png",physicalFitVerified:!1},i}function S1(){const i=new Xt,t=ge.shelfScrew,e=ge.stand.thickness,n=e+t.washerThickness,s=gi(3,t.length,2,2.75,{nut:!1,washerThickness:0});H(i,s,0,n+1,0),H(i,Ye(t.washerThickness,t.washerOD,3.2),0,e+t.washerThickness/2,0),H(i,Ye(t.washerThickness,t.washerOD,3.2),0,-1.2-t.washerThickness/2,0);const r=ue(5.5/Math.sqrt(3),t.nutHeight,F.gold,6);return H(i,r,0,-1.2-t.washerThickness-t.nutHeight/2,0),i.userData={part:"radiatorFastener",zone:"Host_shelf",role:"radiator-shelf-bolt",screwSKU:"92855A316",washerSKU:"91116A120",nutSKU:"90591A250",shelfHoleMeasured:!1,physicalFitVerified:!1},i}function E1(i,t){const e=i.children.find(s=>s.userData.part==="coolerRadiator");e&&i.remove(e);const n=l1();n.position.set(0,t+ge.radiatorCentreAboveShelf,ge.contactZ+53/2),i.add(n);for(const s of ge.holeColumns){const r=s<0?1:-1,a=s-r*ge.stand.holeOffset,o=M1();o.scale.x=r,o.position.set(a,t,ge.contactZ-ge.stand.thickness),i.add(o);for(const c of ge.uprightHolesAboveShelf){const l=gi(3.5,5,2,3,{nut:!1,washerThickness:0});l.rotation.x=-Math.PI/2,l.position.set(s,t+c,ge.contactZ-ge.stand.thickness-1),l.userData={part:"radiatorFastener",zone:"Host_shelf",role:"radiator-case-screw",suppliedBy:"Owned SilverStone cooler; item B",dimensionsReferenceOnly:!0},i.add(l)}for(const c of ge.slot.depthCenters){const l=S1();l.position.set(a+r*ge.slot.lateralCenter,t,ge.contactZ-ge.stand.thickness+c),i.add(l)}}return i.userData.radiatorMount={method:"XSPC Radstand V2 pair; four OEM case screws; four shelf bolt stacks",designSpecified:!0,physicalFitVerified:!1,shelfHoleMeasured:!1,shelfFallback:"Use actual stand as template for four 3.5 mm shelf holes on sound steel if vents cannot be used",tubeFitVerified:!1,guide:"cad/RADIATOR-MOUNT.md"},n}const b1=11,T1=1.5875,A1=10,w1="ATX-BrK",R1={width:190,height:95,flangeDepth:45,sheet:1.6},P1="Vendor specifies ATX cabinet mounting; envelope is a conservative installation reservation, not a dimensioned vendor drawing",C1=[{id:"A",model:"Seasonic PRIME TX-1600 Noctua",owned:!0,length:210,z:-55},{id:"B",model:"Seasonic PRIME TX-1600 Noctua",owned:!0,length:210,z:140}],L1=150,D1=86,I1=[-1,0,0],U1=[0,1,0],N1=!1,Ln={shelfU:b1,padMm:T1,maximumAssemblyLiftMm:A1,bracketSku:w1,bracketEnvelope:R1,bracketEvidence:P1,supplies:C1,width:L1,height:D1,acDirection:I1,fanDirection:U1,physicalFitVerified:N1};Object.freeze(Ln);function O1(i=210){const t=new Xt,e=Ln.bracketEnvelope,n=-i/2-e.sheet/2;for(const s of[-78,78])H(t,K(e.sheet,90,6,F.bracket),n,45,s);for(const s of[3,87])H(t,K(e.sheet,6,150,F.bracket),n,s,0);return H(t,K(e.flangeDepth,e.sheet,e.width,F.bracket),-i/2+e.flangeDepth/2,e.sheet/2,0),t.userData={part:"psuBracket",zone:"Host_shelf",sku:Ln.bracketSku,geometryFidelity:Ln.bracketEvidence,physicalFitVerified:!1},t}function F1(i){for(const e of[...i.children])["psu","feet"].includes(e.userData.part)&&i.remove(e);const t=Oi(Ln.shelfU);for(const e of Ln.supplies){const n=Yf(!0);n.rotation.y=-Math.PI/2,n.position.set(0,t+Ln.padMm+Ln.height/2,e.z),Object.assign(n.userData,{part:"psu",zone:"Host_shelf",supply:e.id,model:e.model,owned:e.owned,physicalFitVerified:!1}),i.add(n);const s=O1(e.length);s.position.set(0,t,e.z),s.userData.supply=e.id,i.add(s);for(const r of[-50,50]){const a=K(12.7,Ln.padMm,40,F.caster);a.position.set(e.length/2-20,t+Ln.padMm/2,e.z+r),a.userData={part:"feet",role:"psu-support-pad",zone:"Host_shelf",supply:e.id},i.add(a)}}}const Jh=Object.freeze({shelfU:18,padMm:1.5875,x:[156,220],z:[[-302,-15],[15,302]],height:72,stockCableMm:750,usedCables:20,spareCables:4});function B1(i){const t=Oi(Jh.shelfU),e=Jh.padMm,n=(s,r,a,o)=>{const c=K(s,e,r,F.caster);c.position.set(a,t+e/2,o),c.userData={part:"cablePad",zone:"GPU_shelf",role:"mcio-shelf-pad",stockSku:"8525T261",cutLengthMm:Math.max(s,r),physicalFitVerified:!1},i.add(c)};for(const s of[-158.5,158.5])for(const r of[163,213])n(12.7,250,r,s);for(const s of[-295,-22,22,295])n(60,12.7,189,s)}const rr=Object.freeze({pitch:75,gpusPerTier:8,tiers:1,frameWidth:655,earLeg:220,rearLeg:220,sideBraces:!1}),or=i=>new w(...i),Qh=i=>[-i[2],i[1],i[0]];function tE(){const{rig:i,N:t}=u1({hostFloorRunners:!1,supportedHost:!0,hostShelfTop:Oi(ne.shelfU)});for(const d of[...i.children])(d.userData.zone==="GPU_shelf"||["udm","xcvr","pdu"].includes(d.userData.part))&&i.remove(d);F1(i),B1(i),E1(i,Oi(ne.shelfU)),i.children.filter(d=>d.userData.part==="shelf").sort((d,g)=>d.position.y-g.position.y).forEach((d,g)=>{d.userData.rackU=[4,11,18][g]}),i.userData.installedShelves=[4,11,18];const n=new Xt,s={gpuPwr:[],gpuMcio:[],adAux:[]};hd(n,Cs.gpuShelfTop,s,[0],rr),f1(n,Cs.gpuShelfTop,rr);for(const d of[...n.children])d.position.copy(or(Qh(d.position.toArray()))),d.rotateOnWorldAxis(new w(0,1,0),-Math.PI/2),i.add(d);const r=s.gpuMcio.map(Qh),a=[];for(const d of[-90,90]){const g=qf();g.rotation.y=Math.PI/2,g.position.set(100,Cs.gpuShelfTop+Xf,d),g.userData={...g.userData,part:"switch",zone:"GPU_shelf"},i.add(g),a.push(g)}for(const d of i.children)d.userData.part==="bracket"&&Object.assign(d.userData,{sku:"HBLSS5-SEP",proposedNut:"HNTP5-5"});i.updateMatrixWorld(!0);const o=new Xt,c=new Xt,l=(d,g,x,m)=>{const p=Math.min(d[1],g[1])-10,y=[or(d),new w(d[0],p,d[2]),new w(g[0],p,g[2]),or(g)],_=new rl(new ze().setFromPoints(y),new rv({color:x==="host"?6864895:14395226,dashSize:5,gapSize:3}));_.computeLineDistances(),_.userData={role:"schematic-link",type:x,index:m,a:d,b:g},o.add(_)};for(let d=0;d<16;d++){const g=a[Math.floor(d/8)],x=g.localToWorld(or(gh.device[d%8])).toArray();l(r[d],x,"device",d)}t.hostMcio.forEach((d,g)=>l(d,a[Math.floor(g/2)].localToWorld(or(gh.host[g%2])).toArray(),"host",g));for(const d of i.children.filter(g=>g.userData.part==="gpu")){const g=d.position.clone().add(new w(-151.35,0,0));c.add(new uv(new w(-1,0,0),g,80,16752740,14,7))}i.userData.sharedGpuFrame=n.userData.sharedGpuFrame;const u=i.children.filter(d=>d.userData.part==="gpu");i.userData.depthRow={...rr,nominalGapMm:rr.pitch-br.T,cardSpanMm:7*rr.pitch+br.T,exhaustDirection:[-1,0,0],fanFaceDirection:[0,0,1],thermalValidated:!1,cableRoutesValidated:!1};const f=i.children.filter(d=>d.userData.zone==="GPU_shelf"),h=new Pe;for(const d of f)h.union(new Pe().setFromObject(d));return{rig:i,links:o,arrows:c,ports:r,switches:a,gpuObjects:u,bounds:h}}function eE(){const i=new Xt,t=new $t(new ia(6e3,6e3),new Er({color:527636,metalness:.1,roughness:.95}));t.rotation.x=-Math.PI/2,t.position.y=Zo,t.userData.role="floor",i.add(t);const e=new lv(4400,44,2240838,1186600);return e.position.y=Zo+.2,i.add(e),i}export{H1 as $,Ye as A,Pe as B,fl as C,h1 as D,J1 as E,M1 as F,Xt as G,ne as H,z1 as I,l1 as J,O1 as K,Z1 as L,na as M,pv as N,q1 as O,tE as P,Cs as Q,$d as R,K1 as S,cl as T,Be as U,w as V,Tx as W,wx as X,wu as Y,X1 as Z,k1 as _,Xi as a,an as a0,W1 as a1,Fs as a2,Q1 as a3,$1 as a4,Qt as a5,j1 as a6,Df as a7,lv as a8,eE as a9,G1 as aa,ct as ab,V1 as ac,te as b,K as c,ue as d,$t as e,Gi as f,Mn as g,dl as h,iy as i,ny as j,sy as k,Yv as l,F as m,c1 as n,Di as o,H as p,Yf as q,s1 as r,Y1 as s,qv as t,r1 as u,qf as v,By as w,ey as x,i1 as y,a1 as z};
