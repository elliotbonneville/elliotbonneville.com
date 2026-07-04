(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="160",Ki={ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bp=0,Zl=1,zp=2,Uf=1,kp=2,$n=3,Nn=0,He=1,pn=2,gi=0,Os=1,jl=2,Kl=3,Jl=4,Hp=5,Ni=100,Gp=101,Vp=102,Ql=103,tu=104,Wp=200,Xp=201,qp=202,Yp=203,Yc=204,$c=205,$p=206,Zp=207,jp=208,Kp=209,Jp=210,Qp=211,tm=212,em=213,nm=214,im=0,sm=1,rm=2,Qo=3,om=4,am=5,cm=6,lm=7,Nf=0,um=1,hm=2,_i=0,fm=1,dm=2,pm=3,Sl=4,mm=5,gm=6,Ff=300,ks=301,Hs=302,Zc=303,jc=304,ga=306,ta=1e3,Rn=1001,Kc=1002,qe=1003,eu=1004,Ia=1005,dn=1006,_m=1007,Rr=1008,xi=1009,xm=1010,vm=1011,bl=1012,Of=1013,fi=1014,di=1015,Pr=1016,Bf=1017,zf=1018,zi=1020,ym=1021,Pn=1023,Mm=1024,Sm=1025,ki=1026,Gs=1027,bm=1028,kf=1029,Em=1030,Hf=1031,Gf=1033,Ua=33776,Na=33777,Fa=33778,Oa=33779,nu=35840,iu=35841,su=35842,ru=35843,Vf=36196,ou=37492,au=37496,cu=37808,lu=37809,uu=37810,hu=37811,fu=37812,du=37813,pu=37814,mu=37815,gu=37816,_u=37817,xu=37818,vu=37819,yu=37820,Mu=37821,Ba=36492,Su=36494,bu=36495,wm=36283,Eu=36284,wu=36285,Tu=36286,Wf=3e3,Hi=3001,Tm=3200,Am=3201,Xf=0,Rm=1,mn="",Ae="srgb",Qn="srgb-linear",El="display-p3",_a="display-p3-linear",ea="linear",he="srgb",na="rec709",ia="p3",Qi=7680,Au=519,Pm=512,Cm=513,Lm=514,qf=515,Dm=516,Im=517,Um=518,Nm=519,Ru=35044,Pu="300 es",Jc=1035,Kn=2e3,sa=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xo=Math.PI/180,Qc=180/Math.PI;function Xs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Fm(i,t){return(i%t+t)%t}function za(i,t,e){return(1-e)*i+e*t}function Cu(i){return(i&i-1)===0&&i!==0}function tl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Js(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Om={DEG2RAD:Xo};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,a,o,c,l){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],_=s[4],y=s[7],E=s[2],b=s[5],S=s[8];return r[0]=a*x+o*v+c*E,r[3]=a*m+o*_+c*b,r[6]=a*p+o*y+c*S,r[1]=l*x+u*v+h*E,r[4]=l*m+u*_+h*b,r[7]=l*p+u*y+h*S,r[2]=f*x+d*v+g*E,r[5]=f*m+d*_+g*b,r[8]=f*p+d*y+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ka=new te;function Yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bm(){const i=ra("canvas");return i.style.display="block",i}const Lu={};function _r(i){i in Lu||(Lu[i]=!0,console.warn(i))}const Du=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Iu=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[Qn]:{transfer:ea,primaries:na,toReference:i=>i,fromReference:i=>i},[Ae]:{transfer:he,primaries:na,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_a]:{transfer:ea,primaries:ia,toReference:i=>i.applyMatrix3(Iu),fromReference:i=>i.applyMatrix3(Du)},[El]:{transfer:he,primaries:ia,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Iu),fromReference:i=>i.applyMatrix3(Du).convertLinearToSRGB()}},zm=new Set([Qn,_a]),ue={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=zr[t].toReference,s=zr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return zr[i].primaries},getTransfer:function(i){return i===mn?ea:zr[i].transfer}};function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ha(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class $f{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=ra("canvas")),ts.width=t.width,ts.height=t.height;const n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ra("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bs(e[n]/255)*255):e[n]=Bs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let km=0;class Zf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Xs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hm=0;class Je extends $i{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Rn,s=Rn,r=dn,a=Rr,o=Pn,c=xi,l=Je.DEFAULT_ANISOTROPY,u=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Xs(),this.name="",this.source=new Zf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hi?Ae:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?Hi:Wf}set encoding(t){_r("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Hi?Ae:mn}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Ff;Je.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(d+1)/2,E=(p+1)/2,b=(u+f)/4,S=(h+x)/4,R=(g+m)/4;return _>y&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=S/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=R/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=S/r,s=R/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gm extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(_r("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hi?Ae:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Gm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jf extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vm extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),b=Math.atan2(E,p*v);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E}const y=o*v;if(c=c*m+f*y,l=l*m+d*y,u=u*m+g*y,h=h*m+x*y,m===1-o){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-o*d,t[e+2]=l*g+u*d+o*f-c*h,t[e+3]=u*g-o*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new A,Uu=new Wi;class ae{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Hr.subVectors(this.max,Qs),es.subVectors(t.a,Qs),ns.subVectors(t.b,Qs),is.subVectors(t.c,Qs),ni.subVectors(ns,es),ii.subVectors(is,ns),wi.subVectors(es,is);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-wi.z,wi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,wi.z,0,-wi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-wi.y,wi.x,0];return!Wa(e,es,ns,is,Hr)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,es,ns,is,Hr))?!1:(Gr.crossVectors(ni,ii),e=[Gr.x,Gr.y,Gr.z],Wa(e,es,ns,is,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new A,new A,new A,new A,new A,new A,new A,new A],Sn=new A,kr=new ae,es=new A,ns=new A,is=new A,ni=new A,ii=new A,wi=new A,Qs=new A,Hr=new A,Gr=new A,Ti=new A;function Wa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ti.fromArray(i,r);const o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Wm=new ae,tr=new A,Xa=new A;class Zi{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);const e=tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Xa)),this.expandByPoint(tr.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new A,qa=new A,Vr=new A,si=new A,Ya=new A,Wr=new A,$a=new A;class qs{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(qa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Vr),o=si.dot(this.direction),c=-si.dot(Vr),l=si.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qa).addScaledVector(Vr,f),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){Ya.subVectors(e,t),Wr.subVectors(n,t),$a.crossVectors(Ya,Wr);let a=this.direction.dot($a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const c=o*this.direction.dot(Wr.crossVectors(si,Wr));if(c<0)return null;const l=o*this.direction.dot(Ya.cross(si));if(l<0||c+l>a)return null;const u=-o*si.dot($a);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,h,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,g=o*u,x=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,x=l*h;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,x=l*h;e[0]=f-x*o,e[4]=-a*h,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=o*u,x=o*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*h,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+x,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xm,t,qm)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),ri.crossVectors(n,en),ri.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ri.crossVectors(n,en)),ri.normalize(),Xr.crossVectors(en,ri),s[0]=ri.x,s[4]=Xr.x,s[8]=en.x,s[1]=ri.y,s[5]=Xr.y,s[9]=en.y,s[2]=ri.z,s[6]=Xr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],E=n[15],b=s[0],S=s[4],R=s[8],M=s[12],w=s[1],D=s[5],F=s[9],H=s[13],L=s[2],O=s[6],G=s[10],Q=s[14],K=s[3],Y=s[7],st=s[11],it=s[15];return r[0]=a*b+o*w+c*L+l*K,r[4]=a*S+o*D+c*O+l*Y,r[8]=a*R+o*F+c*G+l*st,r[12]=a*M+o*H+c*Q+l*it,r[1]=u*b+h*w+f*L+d*K,r[5]=u*S+h*D+f*O+d*Y,r[9]=u*R+h*F+f*G+d*st,r[13]=u*M+h*H+f*Q+d*it,r[2]=g*b+x*w+m*L+p*K,r[6]=g*S+x*D+m*O+p*Y,r[10]=g*R+x*F+m*G+p*st,r[14]=g*M+x*H+m*Q+p*it,r[3]=v*b+_*w+y*L+E*K,r[7]=v*S+_*D+y*O+E*Y,r[11]=v*R+_*F+y*G+E*st,r[15]=v*M+_*H+y*Q+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*o*f+n*l*f+s*o*d-n*c*d)+x*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*u-r*c*u)+m*(+e*l*h-e*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+p*(-s*o*u-e*c*h+e*o*f+s*a*h-n*a*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=h*m*l-x*f*l+x*c*d-o*m*d-h*c*p+o*f*p,_=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,y=u*x*l-g*h*l+g*o*d-a*x*d-u*o*p+a*h*p,E=g*h*c-u*x*c-g*o*f+a*x*f+u*o*m-a*h*m,b=e*v+n*_+s*y+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return t[0]=v*S,t[1]=(x*f*r-h*m*r-x*s*d+n*m*d+h*s*p-n*f*p)*S,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*S,t[3]=(h*c*r-o*f*r-h*s*l+n*f*l+o*s*d-n*c*d)*S,t[4]=_*S,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*S,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*S,t[7]=(a*f*r-u*c*r+u*s*l-e*f*l-a*s*d+e*c*d)*S,t[8]=y*S,t[9]=(g*h*r-u*x*r-g*n*d+e*x*d+u*n*p-e*h*p)*S,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*p+e*o*p)*S,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*d-e*o*d)*S,t[12]=E*S,t[13]=(u*x*s-g*h*s+g*n*f-e*x*f-u*n*m+e*h*m)*S,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*S,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*f+e*o*f)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,x=a*u,m=a*h,p=o*h,v=c*l,_=c*u,y=c*h,E=n.x,b=n.y,S=n.z;return s[0]=(1-(x+p))*E,s[1]=(d+y)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(d-y)*b,s[5]=(1-(f+p))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+_)*S,s[9]=(m-v)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const l=1/r,u=1/a,h=1/o;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,e.setFromRotationMatrix(bn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Kn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===Kn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===sa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Kn){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*l,d=(n+s)*u;let g,x;if(o===Kn)g=(a+r)*h,x=-2*h;else if(o===sa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new A,bn=new oe,Xm=new A(0,0,0),qm=new A(1,1,1),ri=new A,Xr=new A,en=new A,Nu=new oe,Fu=new Wi;class xa{constructor(t=0,e=0,n=0,s=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class wl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ym=0;const Ou=new A,rs=new Wi,Gn=new oe,qr=new A,er=new A,$m=new A,Zm=new Wi,Bu=new A(1,0,0),zu=new A(0,1,0),ku=new A(0,0,1),jm={type:"added"},Km={type:"removed"};class Ne extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new A,e=new xa,n=new Wi,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new te}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(ku,t)}translateOnAxis(t,e){return Ou.copy(t).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(er,qr,this.up):Gn.lookAt(qr,er,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Gn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Km)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,$m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Zm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new A(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new A,Vn=new A,Za=new A,Wn=new A,os=new A,as=new A,Hu=new A,ja=new A,Ka=new A,Ja=new A;let Yr=!1;class ge{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),Vn.subVectors(n,e),Za.subVectors(t,e);const a=En.dot(En),o=En.dot(Vn),c=En.dot(Za),l=Vn.dot(Vn),u=Vn.dot(Za),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),Vn.subVectors(t,e),En.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),En.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ge.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),ge.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return ge.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,n),as.subVectors(r,n),ja.subVectors(t,n);const c=os.dot(ja),l=as.dot(ja);if(c<=0&&l<=0)return e.copy(n);Ka.subVectors(t,s);const u=os.dot(Ka),h=as.dot(Ka);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(os,a);Ja.subVectors(t,r);const d=os.dot(Ja),g=as.dot(Ja);if(g>=0&&d<=g)return e.copy(r);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(as,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Hu.subVectors(r,s),o=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Hu,o);const p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(os,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Fm(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qa(a,r,t+1/3),this.g=Qa(a,r,t),this.b=Qa(a,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ue.fromWorkingColorSpace(ze.copy(this),t),Math.round(Ie(ze.r*255,0,255))*65536+Math.round(Ie(ze.g*255,0,255))*256+Math.round(Ie(ze.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ae){ue.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,s=ze.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL($r);const n=za(oi.h,$r.h,e),s=za(oi.s,$r.s,e),r=za(oi.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new ne;ne.NAMES=Kf;let Jm=0;class Ys extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Os,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=$c,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yc&&(n.blendSrc=this.blendSrc),this.blendDst!==$c&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class va extends Ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new A,Zr=new ht;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ru,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ru&&(t.usage=this.usage),t}}class Jf extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qf extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qm=0;const ln=new oe,tc=new Ne,cs=new A,nn=new ae,nr=new ae,De=new A;class Ye extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yf(t)?Qf:Jf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return tc.lookAt(t),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ae);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];nr.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(nn.min,nr.min),nn.expandByPoint(De),De.addVectors(nn.max,nr.max),nn.expandByPoint(De)):(nn.expandByPoint(nr.min),nn.expandByPoint(nr.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)De.fromBufferAttribute(o,l),c&&(cs.fromBufferAttribute(t,l),De.add(cs)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<o;w++)l[w]=new A,u[w]=new A;const h=new A,f=new A,d=new A,g=new ht,x=new ht,m=new ht,p=new A,v=new A;function _(w,D,F){h.fromArray(s,w*3),f.fromArray(s,D*3),d.fromArray(s,F*3),g.fromArray(a,w*2),x.fromArray(a,D*2),m.fromArray(a,F*2),f.sub(h),d.sub(h),x.sub(g),m.sub(g);const H=1/(x.x*m.y-m.x*x.y);isFinite(H)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(H),v.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(H),l[w].add(p),l[D].add(p),l[F].add(p),u[w].add(v),u[D].add(v),u[F].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,D=y.length;w<D;++w){const F=y[w],H=F.start,L=F.count;for(let O=H,G=H+L;O<G;O+=3)_(n[O+0],n[O+1],n[O+2])}const E=new A,b=new A,S=new A,R=new A;function M(w){S.fromArray(r,w*3),R.copy(S);const D=l[w];E.copy(D),E.sub(S.multiplyScalar(S.dot(D))).normalize(),b.crossVectors(R,D);const H=b.dot(u[w])<0?-1:1;c[w*4]=E.x,c[w*4+1]=E.y,c[w*4+2]=E.z,c[w*4+3]=H}for(let w=0,D=y.length;w<D;++w){const F=y[w],H=F.start,L=F.count;for(let O=H,G=H+L;O<G;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,u=new A,h=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Re(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new oe,Ai=new qs,jr=new Zi,Vu=new A,ls=new A,us=new A,hs=new A,ec=new A,Kr=new A,Jr=new ht,Qr=new ht,to=new ht,Wu=new A,Xu=new A,qu=new A,eo=new A,no=new A;class se extends Ne{constructor(t=new Ye,e=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(ec.fromBufferAttribute(h,t),a?Kr.addScaledVector(ec,u):Kr.addScaledVector(ec.sub(e),u))}e.add(Kr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(jr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(jr,Vu)===null||Ai.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,E=_;y<E;y+=3){const b=o.getX(y),S=o.getX(y+1),R=o.getX(y+2);s=io(this,p,t,n,l,u,h,b,S,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=io(this,a,t,n,l,u,h,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,E=_;y<E;y+=3){const b=y,S=y+1,R=y+2;s=io(this,p,t,n,l,u,h,b,S,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=m,_=m+1,y=m+2;s=io(this,a,t,n,l,u,h,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function tg(i,t,e,n,s,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Nn,o),c===null)return null;no.copy(o),no.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(no);return l<e.near||l>e.far?null:{distance:l,point:no.clone(),object:i}}function io(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ls),i.getVertexPosition(c,us),i.getVertexPosition(l,hs);const u=tg(i,t,e,n,ls,us,hs,eo);if(u){s&&(Jr.fromBufferAttribute(s,o),Qr.fromBufferAttribute(s,c),to.fromBufferAttribute(s,l),u.uv=ge.getInterpolation(eo,ls,us,hs,Jr,Qr,to,new ht)),r&&(Jr.fromBufferAttribute(r,o),Qr.fromBufferAttribute(r,c),to.fromBufferAttribute(r,l),u.uv1=ge.getInterpolation(eo,ls,us,hs,Jr,Qr,to,new ht),u.uv2=u.uv1),a&&(Wu.fromBufferAttribute(a,o),Xu.fromBufferAttribute(a,c),qu.fromBufferAttribute(a,l),u.normal=ge.getInterpolation(eo,ls,us,hs,Wu,Xu,qu,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new A,materialIndex:0};ge.getNormal(ls,us,hs,h.normal),u.face=h}return u}class on extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(h,2));function g(x,m,p,v,_,y,E,b,S,R,M){const w=y/S,D=E/R,F=y/2,H=E/2,L=b/2,O=S+1,G=R+1;let Q=0,K=0;const Y=new A;for(let st=0;st<G;st++){const it=st*D-H;for(let _t=0;_t<O;_t++){const Z=_t*w-F;Y[x]=Z*v,Y[m]=it*_,Y[p]=L,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=b>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(_t/S),h.push(1-st/R),Q+=1}}for(let st=0;st<R;st++)for(let it=0;it<S;it++){const _t=f+it+O*st,Z=f+it+O*(st+1),ct=f+(it+1)+O*(st+1),Mt=f+(it+1)+O*st;c.push(_t,Z,Mt),c.push(Z,ct,Mt),K+=6}o.addGroup(d,K,M),d+=K,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Vs(i[e]);for(const s in n)t[s]=n[s]}return t}function eg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function td(i){return i.getRenderTarget()===null?i.outputColorSpace:ue.workingColorSpace}const ng={clone:Vs,merge:We};var ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=eg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ed extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class je extends ed{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qc*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fs=-90,ds=1;class rg extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(fs,ds,t,e);s.layers=this.layers,this.add(s);const r=new je(fs,ds,t,e);r.layers=this.layers,this.add(r);const a=new je(fs,ds,t,e);a.layers=this.layers,this.add(a);const o=new je(fs,ds,t,e);o.layers=this.layers,this.add(o);const c=new je(fs,ds,t,e);c.layers=this.layers,this.add(c);const l=new je(fs,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nd extends Je{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class og extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(_r("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Hi?Ae:mn),this.texture=new nd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new on(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:gi});r.uniforms.tEquirect.value=e;const a=new se(s,r),o=e.minFilter;return e.minFilter===Rr&&(e.minFilter=dn),new rg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const nc=new A,ag=new A,cg=new te;class Tn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=nc.subVectors(n,e).cross(ag.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||cg.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Zi,so=new A;class Tl{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],_=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-d,y-p).normalize(),n[1].setComponents(c+r,f+l,m+d,y+p).normalize(),n[2].setComponents(c+a,f+u,m+g,y+v).normalize(),n[3].setComponents(c-a,f-u,m-g,y-v).normalize(),n[4].setComponents(c-o,f-h,m-x,y-_).normalize(),e===Kn)n[5].setComponents(c+o,f+h,m+x,y+_).normalize();else if(e===sa)n[5].setComponents(o,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function id(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lg(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,f=l.usage,d=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),l.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),d.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){const p=g[x];e?i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class ya extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*f-a;for(let _=0;_<l;_++){const y=_*h-r;g.push(y,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const _=v+l*p,y=v+l*(p+1),E=v+1+l*(p+1),b=v+1+l*p;d.push(_,y,b),d.push(y,E,b)}this.setIndex(d),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.width,t.height,t.widthSegments,t.heightSegments)}}var ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
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
#endif`,fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
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
#endif`,_g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xg=`#ifdef USE_BATCHING
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
#endif`,vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bg=`#ifdef USE_IRIDESCENCE
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
#endif`,Eg=`#ifdef USE_BUMPMAP
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ig=`#define PI 3.141592653589793
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
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hg=`
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
}`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,Jg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
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
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
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
#endif`,l0=`struct PhysicalMaterial {
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
}`,u0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,g0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y0=`#if defined( USE_POINTS_UV )
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
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
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
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`#include <common>
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
}`,g_=`#if DEPTH_PACKING == 3200
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
}`,__=`#define DISTANCE
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
}`,x_=`#define DISTANCE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
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
}`,S_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,E_=`uniform vec3 diffuse;
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
}`,w_=`#define LAMBERT
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
}`,T_=`#define LAMBERT
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
}`,A_=`#define MATCAP
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
}`,R_=`#define MATCAP
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
}`,P_=`#define NORMAL
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
}`,C_=`#define NORMAL
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
}`,L_=`#define PHONG
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
}`,D_=`#define PHONG
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
}`,I_=`#define STANDARD
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
}`,U_=`#define STANDARD
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
}`,N_=`#define TOON
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
}`,F_=`#define TOON
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
}`,O_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,k_=`uniform vec3 color;
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
}`,H_=`uniform float rotation;
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
}`,G_=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:ug,alphahash_pars_fragment:hg,alphamap_fragment:fg,alphamap_pars_fragment:dg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:_g,batching_pars_vertex:xg,batching_vertex:vg,begin_vertex:yg,beginnormal_vertex:Mg,bsdfs:Sg,iridescence_fragment:bg,bumpmap_pars_fragment:Eg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Rg,color_fragment:Pg,color_pars_fragment:Cg,color_pars_vertex:Lg,color_vertex:Dg,common:Ig,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Fg,displacementmap_vertex:Og,emissivemap_fragment:Bg,emissivemap_pars_fragment:zg,colorspace_fragment:kg,colorspace_pars_fragment:Hg,envmap_fragment:Gg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:i0,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:$g,fog_fragment:Zg,fog_pars_fragment:jg,gradientmap_pars_fragment:Kg,lightmap_fragment:Jg,lightmap_pars_fragment:Qg,lights_lambert_fragment:t0,lights_lambert_pars_fragment:e0,lights_pars_begin:n0,lights_toon_fragment:s0,lights_toon_pars_fragment:r0,lights_phong_fragment:o0,lights_phong_pars_fragment:a0,lights_physical_fragment:c0,lights_physical_pars_fragment:l0,lights_fragment_begin:u0,lights_fragment_maps:h0,lights_fragment_end:f0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:_0,map_pars_fragment:x0,map_particle_fragment:v0,map_particle_pars_fragment:y0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:S0,morphcolor_vertex:b0,morphnormal_vertex:E0,morphtarget_pars_vertex:w0,morphtarget_vertex:T0,normal_fragment_begin:A0,normal_fragment_maps:R0,normal_pars_fragment:P0,normal_pars_vertex:C0,normal_vertex:L0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:F0,opaque_fragment:O0,packing:B0,premultiplied_alpha_fragment:z0,project_vertex:k0,dithering_fragment:H0,dithering_pars_fragment:G0,roughnessmap_fragment:V0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:q0,shadowmap_vertex:Y0,shadowmask_pars_fragment:$0,skinbase_vertex:Z0,skinning_pars_vertex:j0,skinning_vertex:K0,skinnormal_vertex:J0,specularmap_fragment:Q0,specularmap_pars_fragment:t_,tonemapping_fragment:e_,tonemapping_pars_fragment:n_,transmission_fragment:i_,transmission_pars_fragment:s_,uv_pars_fragment:r_,uv_pars_vertex:o_,uv_vertex:a_,worldpos_vertex:c_,background_vert:l_,background_frag:u_,backgroundCube_vert:h_,backgroundCube_frag:f_,cube_vert:d_,cube_frag:p_,depth_vert:m_,depth_frag:g_,distanceRGBA_vert:__,distanceRGBA_frag:x_,equirect_vert:v_,equirect_frag:y_,linedashed_vert:M_,linedashed_frag:S_,meshbasic_vert:b_,meshbasic_frag:E_,meshlambert_vert:w_,meshlambert_frag:T_,meshmatcap_vert:A_,meshmatcap_frag:R_,meshnormal_vert:P_,meshnormal_frag:C_,meshphong_vert:L_,meshphong_frag:D_,meshphysical_vert:I_,meshphysical_frag:U_,meshtoon_vert:N_,meshtoon_frag:F_,points_vert:O_,points_frag:B_,shadow_vert:z_,shadow_frag:k_,sprite_vert:H_,sprite_frag:G_},vt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},In={basic:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:We([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:We([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:We([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:We([vt.points,vt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:We([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:We([vt.common,vt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:We([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:We([vt.sprite,vt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:We([vt.common,vt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:We([vt.lights,vt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};In.physical={uniforms:We([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const ro={r:0,b:0,g:0};function V_(i,t,e,n,s,r,a){const o=new ne(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),v=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ga)?(u===void 0&&(u=new se(new on(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Vs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ue.getTransfer(_.colorSpace)!==he,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new se(new ya(2,2),new Xi({name:"BackgroundMaterial",uniforms:Vs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ue.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(ro,td(i)),n.buffers.color.setClear(ro.r,ro.g,ro.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:g}}function W_(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function h(L,O,G,Q,K){let Y=!1;if(a){const st=x(Q,G,O);l!==st&&(l=st,d(l.object)),Y=p(L,Q,G,K),Y&&v(L,Q,G,K)}else{const st=O.wireframe===!0;(l.geometry!==Q.id||l.program!==G.id||l.wireframe!==st)&&(l.geometry=Q.id,l.program=G.id,l.wireframe=st,Y=!0)}K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,R(L,O,G,Q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,O,G){const Q=G.wireframe===!0;let K=o[L.id];K===void 0&&(K={},o[L.id]=K);let Y=K[O.id];Y===void 0&&(Y={},K[O.id]=Y);let st=Y[Q];return st===void 0&&(st=m(f()),Y[Q]=st),st}function m(L){const O=[],G=[],Q=[];for(let K=0;K<s;K++)O[K]=0,G[K]=0,Q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:Q,object:L,attributes:{},index:null}}function p(L,O,G,Q){const K=l.attributes,Y=O.attributes;let st=0;const it=G.getAttributes();for(const _t in it)if(it[_t].location>=0){const ct=K[_t];let Mt=Y[_t];if(Mt===void 0&&(_t==="instanceMatrix"&&L.instanceMatrix&&(Mt=L.instanceMatrix),_t==="instanceColor"&&L.instanceColor&&(Mt=L.instanceColor)),ct===void 0||ct.attribute!==Mt||Mt&&ct.data!==Mt.data)return!0;st++}return l.attributesNum!==st||l.index!==Q}function v(L,O,G,Q){const K={},Y=O.attributes;let st=0;const it=G.getAttributes();for(const _t in it)if(it[_t].location>=0){let ct=Y[_t];ct===void 0&&(_t==="instanceMatrix"&&L.instanceMatrix&&(ct=L.instanceMatrix),_t==="instanceColor"&&L.instanceColor&&(ct=L.instanceColor));const Mt={};Mt.attribute=ct,ct&&ct.data&&(Mt.data=ct.data),K[_t]=Mt,st++}l.attributes=K,l.attributesNum=st,l.index=Q}function _(){const L=l.newAttributes;for(let O=0,G=L.length;O<G;O++)L[O]=0}function y(L){E(L,0)}function E(L,O){const G=l.newAttributes,Q=l.enabledAttributes,K=l.attributeDivisors;G[L]=1,Q[L]===0&&(i.enableVertexAttribArray(L),Q[L]=1),K[L]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),K[L]=O)}function b(){const L=l.newAttributes,O=l.enabledAttributes;for(let G=0,Q=O.length;G<Q;G++)O[G]!==L[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function S(L,O,G,Q,K,Y,st){st===!0?i.vertexAttribIPointer(L,O,G,K,Y):i.vertexAttribPointer(L,O,G,Q,K,Y)}function R(L,O,G,Q){if(n.isWebGL2===!1&&(L.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const K=Q.attributes,Y=G.getAttributes(),st=O.defaultAttributeValues;for(const it in Y){const _t=Y[it];if(_t.location>=0){let Z=K[it];if(Z===void 0&&(it==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),it==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const ct=Z.normalized,Mt=Z.itemSize,Ct=e.get(Z);if(Ct===void 0)continue;const bt=Ct.buffer,zt=Ct.type,Ht=Ct.bytesPerElement,Rt=n.isWebGL2===!0&&(zt===i.INT||zt===i.UNSIGNED_INT||Z.gpuType===Of);if(Z.isInterleavedBufferAttribute){const kt=Z.data,B=kt.stride,gt=Z.offset;if(kt.isInstancedInterleavedBuffer){for(let nt=0;nt<_t.locationSize;nt++)E(_t.location+nt,kt.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let nt=0;nt<_t.locationSize;nt++)y(_t.location+nt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let nt=0;nt<_t.locationSize;nt++)S(_t.location+nt,Mt/_t.locationSize,zt,ct,B*Ht,(gt+Mt/_t.locationSize*nt)*Ht,Rt)}else{if(Z.isInstancedBufferAttribute){for(let kt=0;kt<_t.locationSize;kt++)E(_t.location+kt,Z.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let kt=0;kt<_t.locationSize;kt++)y(_t.location+kt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let kt=0;kt<_t.locationSize;kt++)S(_t.location+kt,Mt/_t.locationSize,zt,ct,Mt*Ht,Mt/_t.locationSize*kt*Ht,Rt)}}else if(st!==void 0){const ct=st[it];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(_t.location,ct);break;case 3:i.vertexAttrib3fv(_t.location,ct);break;case 4:i.vertexAttrib4fv(_t.location,ct);break;default:i.vertexAttrib1fv(_t.location,ct)}}}}b()}function M(){F();for(const L in o){const O=o[L];for(const G in O){const Q=O[G];for(const K in Q)g(Q[K].object),delete Q[K];delete O[G]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const O=o[L.id];for(const G in O){const Q=O[G];for(const K in Q)g(Q[K].object),delete Q[K];delete O[G]}delete o[L.id]}function D(L){for(const O in o){const G=o[O];if(G[L.id]===void 0)continue;const Q=G[L.id];for(const K in Q)g(Q[K].object),delete Q[K];delete G[L.id]}}function F(){H(),u=!0,l!==c&&(l=c,d(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:F,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:y,disableUnusedAttributes:b}}function X_(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),e.update(h,r,f)}function l(u,h,f){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function q_(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=a||t.has("OES_texture_float"),E=_&&y,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:b}}function Y_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Tn,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,_=v*4;let y=p.clippingState||null;c.value=y,y=u(g,f,_,d);for(let E=0;E!==_;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=d;_!==x;++_,y+=4)a.copy(h[_]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function $_(i){let t=new WeakMap;function e(a,o){return o===Zc?a.mapping=ks:o===jc&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zc||o===jc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new og(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class sd extends ed{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ds=4,Yu=[.125,.215,.35,.446,.526,.582],Fi=20,ic=new sd,$u=new ne;let sc=null,rc=0,oc=0;const Ii=(1+Math.sqrt(5))/2,ps=1/Ii,Zu=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Ii,ps),new A(0,Ii,-ps),new A(ps,0,Ii),new A(-ps,0,Ii),new A(Ii,ps,0),new A(-Ii,ps,0)];class oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sc,rc,oc),t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Pr,format:Pn,colorSpace:Qn,depthBuffer:!1},s=ju(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z_(r)),this._blurMaterial=j_(r,t,e)}return s}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,ic)}_sceneToCubeUV(t,e,n,s){const o=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($u),u.toneMapping=_i,u.autoClear=!1;const d=new va({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new se(new on,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy($u),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;oo(s,v*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ks||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;oo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ic)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zu[(s-1)%Zu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new se(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const p=[];let v=0;for(let S=0;S<Fi;++S){const R=S/x,M=Math.exp(-R*R/2);p.push(M),S===0?v+=M:S<m&&(v+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const y=this._sizeLods[s],E=3*y*(s>_-Ds?s-_+Ds:0),b=4*(this._cubeSize-y);oo(e,E,b,3*y,2*y),c.setRenderTarget(e),c.render(h,ic)}}function Z_(i){const t=[],e=[],n=[];let s=i;const r=i-Ds+1+Yu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ds?c=Yu[a-i+Ds-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),_=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let b=0;b<d;b++){const S=b%3*2/3-1,R=b>2?0:-1,M=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];v.set(M,x*g*b),_.set(f,m*g*b);const w=[b,b,b,b,b,b];y.set(w,p*g*b)}const E=new Ye;E.setAttribute("position",new Re(v,x)),E.setAttribute("uv",new Re(_,m)),E.setAttribute("faceIndex",new Re(y,p)),t.push(E),s>Ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ju(i,t,e){const n=new Vi(i,t,e);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function j_(i,t,e){const n=new Float32Array(Fi),s=new A(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ku(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Ju(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function K_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Zc||c===jc,u=c===ks||c===Hs;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new oa(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new oa(i));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function J_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Q_(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let _=0,y=v.length;_<y;_+=3){const E=v[_+0],b=v[_+1],S=v[_+2];f.push(E,b,b,S,S,E)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const E=_+0,b=_+1,S=_+2;f.push(E,b,b,S,S,E)}}else return;const m=new(Yf(f)?Qf:Jf)(f,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function tx(i,t,e,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,g){i.drawElements(r,g,o,d*c),e.update(g,r,1)}function h(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,x);let p=0;for(let v=0;v<x;v++)p+=g[v];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function ex(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nx(i,t){return i[0]-t[0]}function ix(i,t){return Math.abs(t[1])-Math.abs(i[1])}function sx(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new ce,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let x=r.get(u);if(x===void 0||x.count!==g){let L=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let R=0;v===!0&&(R=1),_===!0&&(R=2),y===!0&&(R=3);let M=u.attributes.position.count*R,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const D=new Float32Array(M*w*4*g),F=new jf(D,M,w,g);F.type=di,F.needsUpdate=!0;const H=R*4;for(let O=0;O<g;O++){const G=E[O],Q=b[O],K=S[O],Y=M*w*4*O;for(let st=0;st<G.count;st++){const it=st*H;v===!0&&(a.fromBufferAttribute(G,st),D[Y+it+0]=a.x,D[Y+it+1]=a.y,D[Y+it+2]=a.z,D[Y+it+3]=0),_===!0&&(a.fromBufferAttribute(Q,st),D[Y+it+4]=a.x,D[Y+it+5]=a.y,D[Y+it+6]=a.z,D[Y+it+7]=0),y===!0&&(a.fromBufferAttribute(K,st),D[Y+it+8]=a.x,D[Y+it+9]=a.y,D[Y+it+10]=a.z,D[Y+it+11]=K.itemSize===4?a.w:1)}}x={count:g,texture:F,size:new ht(M,w)},r.set(u,x),u.addEventListener("dispose",L)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const d=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<d;_++){const y=g[_];y[0]=_,y[1]=f[_]}g.sort(ix);for(let _=0;_<8;_++)_<d&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(nx);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const y=o[_],E=y[0],b=y[1];E!==Number.MAX_SAFE_INTEGER&&b?(x&&u.getAttribute("morphTarget"+_)!==x[E]&&u.setAttribute("morphTarget"+_,x[E]),m&&u.getAttribute("morphNormal"+_)!==m[E]&&u.setAttribute("morphNormal"+_,m[E]),s[_]=b,p+=b):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function rx(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class rd extends Je{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:ki,u!==ki&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ki&&(n=fi),n===void 0&&u===Gs&&(n=zi),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const od=new Je,ad=new rd(1,1);ad.compareFunction=qf;const cd=new jf,ld=new Vm,ud=new nd,Qu=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function $s(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qu[s];if(r===void 0&&(r=new Float32Array(s),Qu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ma(i,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ox(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function ux(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),Ce(e,n)}}function hx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),Ce(e,n)}}function fx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),Ce(e,n)}}function dx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function gx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function _x(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function vx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function yx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Mx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?ad:od;e.setTexture2D(t||r,s)}function Sx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ld,s)}function bx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ud,s)}function Ex(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cd,s)}function wx(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return cx;case 35666:return lx;case 35674:return ux;case 35675:return hx;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return xx;case 36295:return vx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Tx(i,t){i.uniform1fv(this.addr,t)}function Ax(i,t){const e=$s(t,this.size,2);i.uniform2fv(this.addr,e)}function Rx(i,t){const e=$s(t,this.size,3);i.uniform3fv(this.addr,e)}function Px(i,t){const e=$s(t,this.size,4);i.uniform4fv(this.addr,e)}function Cx(i,t){const e=$s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lx(i,t){const e=$s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dx(i,t){const e=$s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ix(i,t){i.uniform1iv(this.addr,t)}function Ux(i,t){i.uniform2iv(this.addr,t)}function Nx(i,t){i.uniform3iv(this.addr,t)}function Fx(i,t){i.uniform4iv(this.addr,t)}function Ox(i,t){i.uniform1uiv(this.addr,t)}function Bx(i,t){i.uniform2uiv(this.addr,t)}function zx(i,t){i.uniform3uiv(this.addr,t)}function kx(i,t){i.uniform4uiv(this.addr,t)}function Hx(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||od,r[a])}function Gx(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ld,r[a])}function Vx(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ud,r[a])}function Wx(i,t,e){const n=this.cache,s=t.length,r=Ma(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cd,r[a])}function Xx(i){switch(i){case 5126:return Tx;case 35664:return Ax;case 35665:return Rx;case 35666:return Px;case 35674:return Cx;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Ix;case 35667:case 35671:return Ux;case 35668:case 35672:return Nx;case 35669:case 35673:return Fx;case 5125:return Ox;case 36294:return Bx;case 36295:return zx;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}class qx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wx(e.type)}}class Yx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xx(e.type)}}class $x{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function sh(i,t){i.seq.push(t),i.map[t.id]=t}function Zx(i,t,e){const n=i.name,s=n.length;for(ac.lastIndex=0;;){const r=ac.exec(n),a=ac.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){sh(e,l===void 0?new qx(o,i,t):new Yx(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new $x(o),sh(e,h)),e=h}}}class qo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Zx(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function rh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jx=37297;let Kx=0;function Jx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Qx(i){const t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(i);let n;switch(t===e?n="":t===ia&&e===na?n="LinearDisplayP3ToLinearSRGB":t===na&&e===ia&&(n="LinearSRGBToLinearDisplayP3"),i){case Qn:case _a:return[n,"LinearTransferOETF"];case Ae:case El:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function oh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Jx(i.getShaderSource(t),a)}else return s}function tv(i,t){const e=Qx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ev(i,t){let e;switch(t){case fm:e="Linear";break;case dm:e="Reinhard";break;case pm:e="OptimizedCineon";break;case Sl:e="ACESFilmic";break;case gm:e="AgX";break;case mm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function nv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function iv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function sv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Is(i){return i!==""}function ah(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ch(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(ov,cv)}const av=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cv(i,t){let e=Kt[t];if(e===void 0){const n=av.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(lv,uv)}function uv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function fv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Hs:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function pv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nf:t="ENVMAP_BLENDING_MULTIPLY";break;case um:t="ENVMAP_BLENDING_MIX";break;case hm:t="ENVMAP_BLENDING_ADD";break}return t}function mv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=hv(e),l=fv(e),u=dv(e),h=pv(e),f=mv(e),d=e.isWebGL2?"":nv(e),g=iv(e),x=sv(r),m=s.createProgram();let p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Is).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Is).join(`
`),v.length>0&&(v+=`
`)):(p=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),v=[d,uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Kt.tonemapping_pars_fragment:"",e.toneMapping!==_i?ev("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,tv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=el(a),a=ah(a,e),a=ch(a,e),o=el(o),o=ah(o,e),o=ch(o,e),a=lh(a),o=lh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=_+p+a,E=_+v+o,b=rh(s,s.VERTEX_SHADER,y),S=rh(s,s.FRAGMENT_SHADER,E);s.attachShader(m,b),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(F){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(b).trim(),O=s.getShaderInfoLog(S).trim();let G=!0,Q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,S);else{const K=oh(s,b,"vertex"),Y=oh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+K+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(L===""||O==="")&&(Q=!1);Q&&(F.diagnostics={runnable:G,programLog:H,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:v}})}s.deleteShader(b),s.deleteShader(S),M=new qo(s,m),w=rv(s,m)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,jx)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=S,this}let _v=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vv(t),e.set(t,n)),n}}class vv{constructor(t){this.id=_v++,this.code=t,this.usedTimes=0}}function yv(i,t,e,n,s,r,a){const o=new wl,c=new xv,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,w,D,F,H){const L=F.fog,O=H.geometry,G=M.isMeshStandardMaterial?F.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),K=Q&&Q.mapping===ga?Q.image.height:null,Y=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const st=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=st!==void 0?st.length:0;let _t=0;O.morphAttributes.position!==void 0&&(_t=1),O.morphAttributes.normal!==void 0&&(_t=2),O.morphAttributes.color!==void 0&&(_t=3);let Z,ct,Mt,Ct;if(Y){const tt=In[Y];Z=tt.vertexShader,ct=tt.fragmentShader}else Z=M.vertexShader,ct=M.fragmentShader,c.update(M),Mt=c.getVertexShaderID(M),Ct=c.getFragmentShaderID(M);const bt=i.getRenderTarget(),zt=H.isInstancedMesh===!0,Ht=H.isBatchedMesh===!0,Rt=!!M.map,kt=!!M.matcap,B=!!Q,gt=!!M.aoMap,nt=!!M.lightMap,ft=!!M.bumpMap,et=!!M.normalMap,Dt=!!M.displacementMap,xt=!!M.emissiveMap,P=!!M.metalnessMap,T=!!M.roughnessMap,W=M.anisotropy>0,at=M.clearcoat>0,lt=M.iridescence>0,rt=M.sheen>0,Pt=M.transmission>0,mt=W&&!!M.anisotropyMap,wt=at&&!!M.clearcoatMap,Ut=at&&!!M.clearcoatNormalMap,Xt=at&&!!M.clearcoatRoughnessMap,ot=lt&&!!M.iridescenceMap,ie=lt&&!!M.iridescenceThicknessMap,Yt=rt&&!!M.sheenColorMap,Gt=rt&&!!M.sheenRoughnessMap,It=!!M.specularMap,Et=!!M.specularColorMap,I=!!M.specularIntensityMap,dt=Pt&&!!M.transmissionMap,Lt=Pt&&!!M.thicknessMap,Tt=!!M.gradientMap,ut=!!M.alphaMap,z=M.alphaTest>0,pt=!!M.alphaHash,yt=!!M.extensions,Ot=!!O.attributes.uv1,Nt=!!O.attributes.uv2,Jt=!!O.attributes.uv3;let U=_i;return M.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(U=i.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:ct,defines:M.defines,customVertexShaderID:Mt,customFragmentShaderID:Ct,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ht,instancing:zt,instancingColor:zt&&H.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:bt===null?i.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Qn,map:Rt,matcap:kt,envMap:B,envMapMode:B&&Q.mapping,envMapCubeUVHeight:K,aoMap:gt,lightMap:nt,bumpMap:ft,normalMap:et,displacementMap:f&&Dt,emissiveMap:xt,normalMapObjectSpace:et&&M.normalMapType===Rm,normalMapTangentSpace:et&&M.normalMapType===Xf,metalnessMap:P,roughnessMap:T,anisotropy:W,anisotropyMap:mt,clearcoat:at,clearcoatMap:wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Xt,iridescence:lt,iridescenceMap:ot,iridescenceThicknessMap:ie,sheen:rt,sheenColorMap:Yt,sheenRoughnessMap:Gt,specularMap:It,specularColorMap:Et,specularIntensityMap:I,transmission:Pt,transmissionMap:dt,thicknessMap:Lt,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===Os,alphaMap:ut,alphaTest:z,alphaHash:pt,combine:M.combine,mapUv:Rt&&x(M.map.channel),aoMapUv:gt&&x(M.aoMap.channel),lightMapUv:nt&&x(M.lightMap.channel),bumpMapUv:ft&&x(M.bumpMap.channel),normalMapUv:et&&x(M.normalMap.channel),displacementMapUv:Dt&&x(M.displacementMap.channel),emissiveMapUv:xt&&x(M.emissiveMap.channel),metalnessMapUv:P&&x(M.metalnessMap.channel),roughnessMapUv:T&&x(M.roughnessMap.channel),anisotropyMapUv:mt&&x(M.anisotropyMap.channel),clearcoatMapUv:wt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(M.sheenRoughnessMap.channel),specularMapUv:It&&x(M.specularMap.channel),specularColorMapUv:Et&&x(M.specularColorMap.channel),specularIntensityMapUv:I&&x(M.specularIntensityMap.channel),transmissionMapUv:dt&&x(M.transmissionMap.channel),thicknessMapUv:Lt&&x(M.thicknessMap.channel),alphaMapUv:ut&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(et||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:Nt,vertexUv3s:Jt,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(Rt||ut),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:_t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:U,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Rt&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pn,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:yt&&M.extensions.derivatives===!0,extensionFragDepth:yt&&M.extensions.fragDepth===!0,extensionDrawBuffers:yt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:yt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:yt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)w.push(D),w.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(w,M),_(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const w=g[M.type];let D;if(w){const F=In[w];D=ng.clone(F.uniforms)}else D=M.uniforms;return D}function E(M,w){let D;for(let F=0,H=l.length;F<H;F++){const L=l[F];if(L.cacheKey===w){D=L,++D.usedTimes;break}}return D===void 0&&(D=new gv(i,w,M,r),l.push(D)),D}function b(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function S(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:S,programs:l,dispose:R}}function Mv(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Sv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function o(h,f,d,g,x,m){const p=a(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,x,m){const p=a(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||Sv),n.length>1&&n.sort(f||hh),s.length>1&&s.sort(f||hh)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function bv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fh,i.set(n,[a])):s>=r.length?(a=new fh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ev(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new ne};break;case"SpotLight":e={position:new A,direction:new A,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function wv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tv=0;function Av(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Rv(i,t){const e=new Ev,n=wv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new A);const r=new A,a=new oe,o=new oe;function c(u,h){let f=0,d=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let x=0,m=0,p=0,v=0,_=0,y=0,E=0,b=0,S=0,R=0,M=0;u.sort(Av);const w=h===!0?Math.PI:1;for(let F=0,H=u.length;F<H;F++){const L=u[F],O=L.color,G=L.intensity,Q=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*G*w,d+=O.g*G*w,g+=O.b*G*w;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],G);M++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const st=L.shadow,it=n.get(L);it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,s.directionalShadow[x]=it,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=L.shadow.matrix,y++}s.directional[x]=Y,x++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(G*w),Y.distance=Q,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[p]=Y;const st=L.shadow;if(L.map&&(s.spotLightMap[S]=L.map,S++,st.updateMatrices(L),L.castShadow&&R++),s.spotLightMatrix[p]=st.matrix,L.castShadow){const it=n.get(L);it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,s.spotShadow[p]=it,s.spotShadowMap[p]=K,b++}p++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(O).multiplyScalar(G),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=Y,v++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*w),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const st=L.shadow,it=n.get(L);it.shadowBias=st.bias,it.shadowNormalBias=st.normalBias,it.shadowRadius=st.radius,it.shadowMapSize=st.mapSize,it.shadowCameraNear=st.camera.near,it.shadowCameraFar=st.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=L.shadow.matrix,E++}s.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(G*w),Y.groundColor.copy(L.groundColor).multiplyScalar(G*w),s.hemi[_]=Y,_++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_FLOAT_1,s.rectAreaLTC2=vt.LTC_FLOAT_2):(s.rectAreaLTC1=vt.LTC_HALF_1,s.rectAreaLTC2=vt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_FLOAT_1,s.rectAreaLTC2=vt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_HALF_1,s.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==x||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==_||D.numDirectionalShadows!==y||D.numPointShadows!==E||D.numSpotShadows!==b||D.numSpotMaps!==S||D.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=v,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=b+S-R,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=M,D.directionalLength=x,D.pointLength=m,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=_,D.numDirectionalShadows=y,D.numPointShadows=E,D.numSpotShadows=b,D.numSpotMaps=S,D.numLightProbes=M,s.version=Tv++)}function l(u,h){let f=0,d=0,g=0,x=0,m=0;const p=h.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const y=u[v];if(y.isDirectionalLight){const E=s.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(y.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const E=s.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const E=s.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function dh(i,t){const e=new Rv(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Pv(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new dh(i,t),e.set(r,[c])):a>=o.length?(c=new dh(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Cv extends Ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lv extends Ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
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
}`;function Uv(i,t,e){let n=new Tl;const s=new ht,r=new ht,a=new ce,o=new Cv({depthPacking:Am}),c=new Lv,l={},u=e.maxTextureSize,h={[Nn]:He,[He]:Nn,[pn]:pn},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Dv,fragmentShader:Iv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let p=this.type;this.render=function(b,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(gi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==$n&&this.type===$n,L=p===$n&&this.type!==$n;for(let O=0,G=b.length;O<G;O++){const Q=b[O],K=Q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const Y=K.getFrameExtents();if(s.multiply(Y),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,K.mapSize.y=r.y)),K.map===null||H===!0||L===!0){const it=this.type!==$n?{minFilter:qe,magFilter:qe}:{};K.map!==null&&K.map.dispose(),K.map=new Vi(s.x,s.y,it),K.map.texture.name=Q.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const st=K.getViewportCount();for(let it=0;it<st;it++){const _t=K.getViewport(it);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),F.viewport(a),K.updateMatrices(Q,it),n=K.getFrustum(),y(S,R,K.camera,Q,this.type)}K.isPointLightShadow!==!0&&this.type===$n&&v(K,R),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,D)};function v(b,S){const R=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,R,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,R,d,x,null)}function _(b,S,R,M){let w=null;const D=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)w=D;else if(w=R.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=w.uuid,H=S.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let O=L[H];O===void 0&&(O=w.clone(),L[H]=O,S.addEventListener("dispose",E)),w=O}if(w.visible=S.visible,w.wireframe=S.wireframe,M===$n?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:h[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=i.properties.get(w);F.light=R}return w}function y(b,S,R,M,w){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===$n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const H=t.update(b),L=b.material;if(Array.isArray(L)){const O=H.groups;for(let G=0,Q=O.length;G<Q;G++){const K=O[G],Y=L[K.materialIndex];if(Y&&Y.visible){const st=_(b,Y,M,w);b.onBeforeShadow(i,b,S,R,H,st,K),i.renderBufferDirect(R,null,H,st,b,K),b.onAfterShadow(i,b,S,R,H,st,K)}}}else if(L.visible){const O=_(b,L,M,w);b.onBeforeShadow(i,b,S,R,H,O,null),i.renderBufferDirect(R,null,H,O,b,null),b.onAfterShadow(i,b,S,R,H,O,null)}}const F=b.children;for(let H=0,L=F.length;H<L;H++)y(F[H],S,R,M,w)}function E(b){b.target.removeEventListener("dispose",E);for(const R in l){const M=l[R],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Nv(i,t,e){const n=e.isWebGL2;function s(){let z=!1;const pt=new ce;let yt=null;const Ot=new ce(0,0,0,0);return{setMask:function(Nt){yt!==Nt&&!z&&(i.colorMask(Nt,Nt,Nt,Nt),yt=Nt)},setLocked:function(Nt){z=Nt},setClear:function(Nt,Jt,U,k,tt){tt===!0&&(Nt*=k,Jt*=k,U*=k),pt.set(Nt,Jt,U,k),Ot.equals(pt)===!1&&(i.clearColor(Nt,Jt,U,k),Ot.copy(pt))},reset:function(){z=!1,yt=null,Ot.set(-1,0,0,0)}}}function r(){let z=!1,pt=null,yt=null,Ot=null;return{setTest:function(Nt){Nt?Ht(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(Nt){pt!==Nt&&!z&&(i.depthMask(Nt),pt=Nt)},setFunc:function(Nt){if(yt!==Nt){switch(Nt){case im:i.depthFunc(i.NEVER);break;case sm:i.depthFunc(i.ALWAYS);break;case rm:i.depthFunc(i.LESS);break;case Qo:i.depthFunc(i.LEQUAL);break;case om:i.depthFunc(i.EQUAL);break;case am:i.depthFunc(i.GEQUAL);break;case cm:i.depthFunc(i.GREATER);break;case lm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Nt}},setLocked:function(Nt){z=Nt},setClear:function(Nt){Ot!==Nt&&(i.clearDepth(Nt),Ot=Nt)},reset:function(){z=!1,pt=null,yt=null,Ot=null}}}function a(){let z=!1,pt=null,yt=null,Ot=null,Nt=null,Jt=null,U=null,k=null,tt=null;return{setTest:function(St){z||(St?Ht(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(St){pt!==St&&!z&&(i.stencilMask(St),pt=St)},setFunc:function(St,Bt,de){(yt!==St||Ot!==Bt||Nt!==de)&&(i.stencilFunc(St,Bt,de),yt=St,Ot=Bt,Nt=de)},setOp:function(St,Bt,de){(Jt!==St||U!==Bt||k!==de)&&(i.stencilOp(St,Bt,de),Jt=St,U=Bt,k=de)},setLocked:function(St){z=St},setClear:function(St){tt!==St&&(i.clearStencil(St),tt=St)},reset:function(){z=!1,pt=null,yt=null,Ot=null,Nt=null,Jt=null,U=null,k=null,tt=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,E=null,b=null,S=null,R=null,M=new ne(0,0,0),w=0,D=!1,F=null,H=null,L=null,O=null,G=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(st)[1]),K=Y>=1):st.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),K=Y>=2);let it=null,_t={};const Z=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),Mt=new ce().fromArray(Z),Ct=new ce().fromArray(ct);function bt(z,pt,yt,Ot){const Nt=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(z,Jt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let U=0;U<yt;U++)n&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(pt,0,i.RGBA,1,1,Ot,0,i.RGBA,i.UNSIGNED_BYTE,Nt):i.texImage2D(pt+U,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Nt);return Jt}const zt={};zt[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),zt[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(zt[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),zt[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ht(i.DEPTH_TEST),c.setFunc(Qo),xt(!1),P(Zl),Ht(i.CULL_FACE),et(gi);function Ht(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function Rt(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function kt(z,pt){return d[z]!==pt?(i.bindFramebuffer(z,pt),d[z]=pt,n&&(z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt)),!0):!1}function B(z,pt){let yt=x,Ot=!1;if(z)if(yt=g.get(pt),yt===void 0&&(yt=[],g.set(pt,yt)),z.isWebGLMultipleRenderTargets){const Nt=z.texture;if(yt.length!==Nt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,U=Nt.length;Jt<U;Jt++)yt[Jt]=i.COLOR_ATTACHMENT0+Jt;yt.length=Nt.length,Ot=!0}}else yt[0]!==i.COLOR_ATTACHMENT0&&(yt[0]=i.COLOR_ATTACHMENT0,Ot=!0);else yt[0]!==i.BACK&&(yt[0]=i.BACK,Ot=!0);Ot&&(e.isWebGL2?i.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function gt(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const nt={[Ni]:i.FUNC_ADD,[Gp]:i.FUNC_SUBTRACT,[Vp]:i.FUNC_REVERSE_SUBTRACT};if(n)nt[Ql]=i.MIN,nt[tu]=i.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(nt[Ql]=z.MIN_EXT,nt[tu]=z.MAX_EXT)}const ft={[Wp]:i.ZERO,[Xp]:i.ONE,[qp]:i.SRC_COLOR,[Yc]:i.SRC_ALPHA,[Jp]:i.SRC_ALPHA_SATURATE,[jp]:i.DST_COLOR,[$p]:i.DST_ALPHA,[Yp]:i.ONE_MINUS_SRC_COLOR,[$c]:i.ONE_MINUS_SRC_ALPHA,[Kp]:i.ONE_MINUS_DST_COLOR,[Zp]:i.ONE_MINUS_DST_ALPHA,[Qp]:i.CONSTANT_COLOR,[tm]:i.ONE_MINUS_CONSTANT_COLOR,[em]:i.CONSTANT_ALPHA,[nm]:i.ONE_MINUS_CONSTANT_ALPHA};function et(z,pt,yt,Ot,Nt,Jt,U,k,tt,St){if(z===gi){p===!0&&(Rt(i.BLEND),p=!1);return}if(p===!1&&(Ht(i.BLEND),p=!0),z!==Hp){if(z!==v||St!==D){if((_!==Ni||b!==Ni)&&(i.blendEquation(i.FUNC_ADD),_=Ni,b=Ni),St)switch(z){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFunc(i.ONE,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,E=null,S=null,R=null,M.set(0,0,0),w=0,v=z,D=St}return}Nt=Nt||pt,Jt=Jt||yt,U=U||Ot,(pt!==_||Nt!==b)&&(i.blendEquationSeparate(nt[pt],nt[Nt]),_=pt,b=Nt),(yt!==y||Ot!==E||Jt!==S||U!==R)&&(i.blendFuncSeparate(ft[yt],ft[Ot],ft[Jt],ft[U]),y=yt,E=Ot,S=Jt,R=U),(k.equals(M)===!1||tt!==w)&&(i.blendColor(k.r,k.g,k.b,tt),M.copy(k),w=tt),v=z,D=!1}function Dt(z,pt){z.side===pn?Rt(i.CULL_FACE):Ht(i.CULL_FACE);let yt=z.side===He;pt&&(yt=!yt),xt(yt),z.blending===Os&&z.transparent===!1?et(gi):et(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);const Ot=z.stencilWrite;l.setTest(Ot),Ot&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),W(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ht(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(z){F!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),F=z)}function P(z){z!==Bp?(Ht(i.CULL_FACE),z!==H&&(z===Zl?i.cullFace(i.BACK):z===zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),H=z}function T(z){z!==L&&(K&&i.lineWidth(z),L=z)}function W(z,pt,yt){z?(Ht(i.POLYGON_OFFSET_FILL),(O!==pt||G!==yt)&&(i.polygonOffset(pt,yt),O=pt,G=yt)):Rt(i.POLYGON_OFFSET_FILL)}function at(z){z?Ht(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function lt(z){z===void 0&&(z=i.TEXTURE0+Q-1),it!==z&&(i.activeTexture(z),it=z)}function rt(z,pt,yt){yt===void 0&&(it===null?yt=i.TEXTURE0+Q-1:yt=it);let Ot=_t[yt];Ot===void 0&&(Ot={type:void 0,texture:void 0},_t[yt]=Ot),(Ot.type!==z||Ot.texture!==pt)&&(it!==yt&&(i.activeTexture(yt),it=yt),i.bindTexture(z,pt||zt[z]),Ot.type=z,Ot.texture=pt)}function Pt(){const z=_t[it];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function mt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Gt(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function I(z){Mt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Mt.copy(z))}function dt(z){Ct.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ct.copy(z))}function Lt(z,pt){let yt=h.get(pt);yt===void 0&&(yt=new WeakMap,h.set(pt,yt));let Ot=yt.get(z);Ot===void 0&&(Ot=i.getUniformBlockIndex(pt,z.name),yt.set(z,Ot))}function Tt(z,pt){const Ot=h.get(pt).get(z);u.get(pt)!==Ot&&(i.uniformBlockBinding(pt,Ot,z.__bindingPointIndex),u.set(pt,Ot))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},it=null,_t={},d={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,E=null,b=null,S=null,R=null,M=new ne(0,0,0),w=0,D=!1,F=null,H=null,L=null,O=null,G=null,Mt.set(0,0,i.canvas.width,i.canvas.height),Ct.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ht,disable:Rt,bindFramebuffer:kt,drawBuffers:B,useProgram:gt,setBlending:et,setMaterial:Dt,setFlipSided:xt,setCullFace:P,setLineWidth:T,setPolygonOffset:W,setScissorTest:at,activeTexture:lt,bindTexture:rt,unbindTexture:Pt,compressedTexImage2D:mt,compressedTexImage3D:wt,texImage2D:It,texImage3D:Et,updateUBOMapping:Lt,uniformBlockBinding:Tt,texStorage2D:Yt,texStorage3D:Gt,texSubImage2D:Ut,texSubImage3D:Xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ie,scissor:I,viewport:dt,reset:ut}}function Fv(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):ra("canvas")}function x(P,T,W,at){let lt=1;if((P.width>at||P.height>at)&&(lt=at/Math.max(P.width,P.height)),lt<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const rt=T?tl:Math.floor,Pt=rt(lt*P.width),mt=rt(lt*P.height);h===void 0&&(h=g(Pt,mt));const wt=W?g(Pt,mt):h;return wt.width=Pt,wt.height=mt,wt.getContext("2d").drawImage(P,0,0,Pt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Pt+"x"+mt+")."),wt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return Cu(P.width)&&Cu(P.height)}function p(P){return o?!1:P.wrapS!==Rn||P.wrapT!==Rn||P.minFilter!==qe&&P.minFilter!==dn}function v(P,T){return P.generateMipmaps&&T&&P.minFilter!==qe&&P.minFilter!==dn}function _(P){i.generateMipmap(P)}function y(P,T,W,at,lt=!1){if(o===!1)return T;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let rt=T;if(T===i.RED&&(W===i.FLOAT&&(rt=i.R32F),W===i.HALF_FLOAT&&(rt=i.R16F),W===i.UNSIGNED_BYTE&&(rt=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.R8UI),W===i.UNSIGNED_SHORT&&(rt=i.R16UI),W===i.UNSIGNED_INT&&(rt=i.R32UI),W===i.BYTE&&(rt=i.R8I),W===i.SHORT&&(rt=i.R16I),W===i.INT&&(rt=i.R32I)),T===i.RG&&(W===i.FLOAT&&(rt=i.RG32F),W===i.HALF_FLOAT&&(rt=i.RG16F),W===i.UNSIGNED_BYTE&&(rt=i.RG8)),T===i.RGBA){const Pt=lt?ea:ue.getTransfer(at);W===i.FLOAT&&(rt=i.RGBA32F),W===i.HALF_FLOAT&&(rt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(rt=Pt===he?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function E(P,T,W){return v(P,W)===!0||P.isFramebufferTexture&&P.minFilter!==qe&&P.minFilter!==dn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function b(P){return P===qe||P===eu||P===Ia?i.NEAREST:i.LINEAR}function S(P){const T=P.target;T.removeEventListener("dispose",S),M(T),T.isVideoTexture&&u.delete(T)}function R(P){const T=P.target;T.removeEventListener("dispose",R),D(T)}function M(P){const T=n.get(P);if(T.__webglInit===void 0)return;const W=P.source,at=f.get(W);if(at){const lt=at[T.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(P),Object.keys(at).length===0&&f.delete(W)}n.remove(P)}function w(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const W=P.source,at=f.get(W);delete at[T.__cacheKey],a.memory.textures--}function D(P){const T=P.texture,W=n.get(P),at=n.get(T);if(at.__webglTexture!==void 0&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(W.__webglFramebuffer[lt]))for(let rt=0;rt<W.__webglFramebuffer[lt].length;rt++)i.deleteFramebuffer(W.__webglFramebuffer[lt][rt]);else i.deleteFramebuffer(W.__webglFramebuffer[lt]);W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer[lt])}else{if(Array.isArray(W.__webglFramebuffer))for(let lt=0;lt<W.__webglFramebuffer.length;lt++)i.deleteFramebuffer(W.__webglFramebuffer[lt]);else i.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&i.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&i.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let lt=0;lt<W.__webglColorRenderbuffer.length;lt++)W.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(W.__webglColorRenderbuffer[lt]);W.__webglDepthRenderbuffer&&i.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let lt=0,rt=T.length;lt<rt;lt++){const Pt=n.get(T[lt]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),a.memory.textures--),n.remove(T[lt])}n.remove(T),n.remove(P)}let F=0;function H(){F=0}function L(){const P=F;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),F+=1,P}function O(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function G(P,T){const W=n.get(P);if(P.isVideoTexture&&Dt(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const at=P.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(W,P,T);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function Q(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Mt(W,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function K(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Mt(W,P,T);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function Y(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Ct(W,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const st={[ta]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Kc]:i.MIRRORED_REPEAT},it={[qe]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[_m]:i.LINEAR_MIPMAP_NEAREST,[Rr]:i.LINEAR_MIPMAP_LINEAR},_t={[Pm]:i.NEVER,[Nm]:i.ALWAYS,[Cm]:i.LESS,[qf]:i.LEQUAL,[Lm]:i.EQUAL,[Um]:i.GEQUAL,[Dm]:i.GREATER,[Im]:i.NOTEQUAL};function Z(P,T,W){if(W?(i.texParameteri(P,i.TEXTURE_WRAP_S,st[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,st[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,st[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,it[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,it[T.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==Rn||T.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,b(T.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==qe&&T.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,_t[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const at=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===qe||T.minFilter!==Ia&&T.minFilter!==Rr||T.type===di&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===Pr&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(P,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ct(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",S));const at=T.source;let lt=f.get(at);lt===void 0&&(lt={},f.set(at,lt));const rt=O(T);if(rt!==P.__cacheKey){lt[rt]===void 0&&(lt[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),lt[rt].usedTimes++;const Pt=lt[P.__cacheKey];Pt!==void 0&&(lt[P.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(T)),P.__cacheKey=rt,P.__webglTexture=lt[rt].texture}return W}function Mt(P,T,W){let at=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(at=i.TEXTURE_3D);const lt=ct(P,T),rt=T.source;e.bindTexture(at,P.__webglTexture,i.TEXTURE0+W);const Pt=n.get(rt);if(rt.version!==Pt.__version||lt===!0){e.activeTexture(i.TEXTURE0+W);const mt=ue.getPrimaries(ue.workingColorSpace),wt=T.colorSpace===mn?null:ue.getPrimaries(T.colorSpace),Ut=T.colorSpace===mn||mt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Xt=p(T)&&m(T.image)===!1;let ot=x(T.image,Xt,!1,s.maxTextureSize);ot=xt(T,ot);const ie=m(ot)||o,Yt=r.convert(T.format,T.colorSpace);let Gt=r.convert(T.type),It=y(T.internalFormat,Yt,Gt,T.colorSpace,T.isVideoTexture);Z(at,T,ie);let Et;const I=T.mipmaps,dt=o&&T.isVideoTexture!==!0&&It!==Vf,Lt=Pt.__version===void 0||lt===!0,Tt=E(T,ot,ie);if(T.isDepthTexture)It=i.DEPTH_COMPONENT,o?T.type===di?It=i.DEPTH_COMPONENT32F:T.type===fi?It=i.DEPTH_COMPONENT24:T.type===zi?It=i.DEPTH24_STENCIL8:It=i.DEPTH_COMPONENT16:T.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ki&&It===i.DEPTH_COMPONENT&&T.type!==bl&&T.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=fi,Gt=r.convert(T.type)),T.format===Gs&&It===i.DEPTH_COMPONENT&&(It=i.DEPTH_STENCIL,T.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=zi,Gt=r.convert(T.type))),Lt&&(dt?e.texStorage2D(i.TEXTURE_2D,1,It,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,It,ot.width,ot.height,0,Yt,Gt,null));else if(T.isDataTexture)if(I.length>0&&ie){dt&&Lt&&e.texStorage2D(i.TEXTURE_2D,Tt,It,I[0].width,I[0].height);for(let ut=0,z=I.length;ut<z;ut++)Et=I[ut],dt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Yt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,ut,It,Et.width,Et.height,0,Yt,Gt,Et.data);T.generateMipmaps=!1}else dt?(Lt&&e.texStorage2D(i.TEXTURE_2D,Tt,It,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Yt,Gt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,It,ot.width,ot.height,0,Yt,Gt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){dt&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,It,I[0].width,I[0].height,ot.depth);for(let ut=0,z=I.length;ut<z;ut++)Et=I[ut],T.format!==Pn?Yt!==null?dt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ot.depth,Yt,Et.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,It,Et.width,Et.height,ot.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ot.depth,Yt,Gt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,It,Et.width,Et.height,ot.depth,0,Yt,Gt,Et.data)}else{dt&&Lt&&e.texStorage2D(i.TEXTURE_2D,Tt,It,I[0].width,I[0].height);for(let ut=0,z=I.length;ut<z;ut++)Et=I[ut],T.format!==Pn?Yt!==null?dt?e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Yt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,It,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Yt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,ut,It,Et.width,Et.height,0,Yt,Gt,Et.data)}else if(T.isDataArrayTexture)dt?(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,It,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Yt,Gt,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ot.width,ot.height,ot.depth,0,Yt,Gt,ot.data);else if(T.isData3DTexture)dt?(Lt&&e.texStorage3D(i.TEXTURE_3D,Tt,It,ot.width,ot.height,ot.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Yt,Gt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,It,ot.width,ot.height,ot.depth,0,Yt,Gt,ot.data);else if(T.isFramebufferTexture){if(Lt)if(dt)e.texStorage2D(i.TEXTURE_2D,Tt,It,ot.width,ot.height);else{let ut=ot.width,z=ot.height;for(let pt=0;pt<Tt;pt++)e.texImage2D(i.TEXTURE_2D,pt,It,ut,z,0,Yt,Gt,null),ut>>=1,z>>=1}}else if(I.length>0&&ie){dt&&Lt&&e.texStorage2D(i.TEXTURE_2D,Tt,It,I[0].width,I[0].height);for(let ut=0,z=I.length;ut<z;ut++)Et=I[ut],dt?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Yt,Gt,Et):e.texImage2D(i.TEXTURE_2D,ut,It,Yt,Gt,Et);T.generateMipmaps=!1}else dt?(Lt&&e.texStorage2D(i.TEXTURE_2D,Tt,It,ot.width,ot.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Yt,Gt,ot)):e.texImage2D(i.TEXTURE_2D,0,It,Yt,Gt,ot);v(T,ie)&&_(at),Pt.__version=rt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Ct(P,T,W){if(T.image.length!==6)return;const at=ct(P,T),lt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const rt=n.get(lt);if(lt.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+W);const Pt=ue.getPrimaries(ue.workingColorSpace),mt=T.colorSpace===mn?null:ue.getPrimaries(T.colorSpace),wt=T.colorSpace===mn||Pt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Ut=T.isCompressedTexture||T.image[0].isCompressedTexture,Xt=T.image[0]&&T.image[0].isDataTexture,ot=[];for(let ut=0;ut<6;ut++)!Ut&&!Xt?ot[ut]=x(T.image[ut],!1,!0,s.maxCubemapSize):ot[ut]=Xt?T.image[ut].image:T.image[ut],ot[ut]=xt(T,ot[ut]);const ie=ot[0],Yt=m(ie)||o,Gt=r.convert(T.format,T.colorSpace),It=r.convert(T.type),Et=y(T.internalFormat,Gt,It,T.colorSpace),I=o&&T.isVideoTexture!==!0,dt=rt.__version===void 0||at===!0;let Lt=E(T,ie,Yt);Z(i.TEXTURE_CUBE_MAP,T,Yt);let Tt;if(Ut){I&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Et,ie.width,ie.height);for(let ut=0;ut<6;ut++){Tt=ot[ut].mipmaps;for(let z=0;z<Tt.length;z++){const pt=Tt[z];T.format!==Pn?Gt!==null?I?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,z,0,0,pt.width,pt.height,Gt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,z,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,z,0,0,pt.width,pt.height,Gt,It,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,z,Et,pt.width,pt.height,0,Gt,It,pt.data)}}}else{Tt=T.mipmaps,I&&dt&&(Tt.length>0&&Lt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Et,ot[0].width,ot[0].height));for(let ut=0;ut<6;ut++)if(Xt){I?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ot[ut].width,ot[ut].height,Gt,It,ot[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Et,ot[ut].width,ot[ut].height,0,Gt,It,ot[ut].data);for(let z=0;z<Tt.length;z++){const yt=Tt[z].image[ut].image;I?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,z+1,0,0,yt.width,yt.height,Gt,It,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,z+1,Et,yt.width,yt.height,0,Gt,It,yt.data)}}else{I?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Gt,It,ot[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Et,Gt,It,ot[ut]);for(let z=0;z<Tt.length;z++){const pt=Tt[z];I?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,z+1,0,0,Gt,It,pt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,z+1,Et,Gt,It,pt.image[ut])}}}v(T,Yt)&&_(i.TEXTURE_CUBE_MAP),rt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function bt(P,T,W,at,lt,rt){const Pt=r.convert(W.format,W.colorSpace),mt=r.convert(W.type),wt=y(W.internalFormat,Pt,mt,W.colorSpace);if(!n.get(T).__hasExternalTextures){const Xt=Math.max(1,T.width>>rt),ot=Math.max(1,T.height>>rt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,rt,wt,Xt,ot,T.depth,0,Pt,mt,null):e.texImage2D(lt,rt,wt,Xt,ot,0,Pt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),et(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,lt,n.get(W).__webglTexture,0,ft(T)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,lt,n.get(W).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(P,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let at=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||et(T)){const lt=T.depthTexture;lt&&lt.isDepthTexture&&(lt.type===di?at=i.DEPTH_COMPONENT32F:lt.type===fi&&(at=i.DEPTH_COMPONENT24));const rt=ft(T);et(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,at,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,at,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,at,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const at=ft(T);W&&et(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,T.width,T.height):et(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const at=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let lt=0;lt<at.length;lt++){const rt=at[lt],Pt=r.convert(rt.format,rt.colorSpace),mt=r.convert(rt.type),wt=y(rt.internalFormat,Pt,mt,rt.colorSpace),Ut=ft(T);W&&et(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,wt,T.width,T.height):et(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,wt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,wt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const at=n.get(T.depthTexture).__webglTexture,lt=ft(T);if(T.depthTexture.format===ki)et(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(T.depthTexture.format===Gs)et(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Rt(P){const T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ht(T.__webglFramebuffer,P)}else if(W){T.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[at]),T.__webglDepthbuffer[at]=i.createRenderbuffer(),zt(T.__webglDepthbuffer[at],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),zt(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(P,T,W){const at=n.get(P);T!==void 0&&bt(at.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Rt(P)}function B(P){const T=P.texture,W=n.get(P),at=n.get(T);P.addEventListener("dispose",R),P.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=T.version,a.memory.textures++);const lt=P.isWebGLCubeRenderTarget===!0,rt=P.isWebGLMultipleRenderTargets===!0,Pt=m(P)||o;if(lt){W.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(o&&T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[mt]=[];for(let wt=0;wt<T.mipmaps.length;wt++)W.__webglFramebuffer[mt][wt]=i.createFramebuffer()}else W.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)W.__webglFramebuffer[mt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(rt)if(s.drawBuffers){const mt=P.texture;for(let wt=0,Ut=mt.length;wt<Ut;wt++){const Xt=n.get(mt[wt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&et(P)===!1){const mt=rt?T:[T];W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let wt=0;wt<mt.length;wt++){const Ut=mt[wt];W.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[wt]);const Xt=r.convert(Ut.format,Ut.colorSpace),ot=r.convert(Ut.type),ie=y(Ut.internalFormat,Xt,ot,Ut.colorSpace,P.isXRRenderTarget===!0),Yt=ft(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,ie,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,W.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),Z(i.TEXTURE_CUBE_MAP,T,Pt);for(let mt=0;mt<6;mt++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)bt(W.__webglFramebuffer[mt][wt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,wt);else bt(W.__webglFramebuffer[mt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);v(T,Pt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const mt=P.texture;for(let wt=0,Ut=mt.length;wt<Ut;wt++){const Xt=mt[wt],ot=n.get(Xt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Z(i.TEXTURE_2D,Xt,Pt),bt(W.__webglFramebuffer,P,Xt,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),v(Xt,Pt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?mt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,at.__webglTexture),Z(mt,T,Pt),o&&T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)bt(W.__webglFramebuffer[wt],P,T,i.COLOR_ATTACHMENT0,mt,wt);else bt(W.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,mt,0);v(T,Pt)&&_(mt),e.unbindTexture()}P.depthBuffer&&Rt(P)}function gt(P){const T=m(P)||o,W=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let at=0,lt=W.length;at<lt;at++){const rt=W[at];if(v(rt,T)){const Pt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,mt=n.get(rt).__webglTexture;e.bindTexture(Pt,mt),_(Pt),e.unbindTexture()}}}function nt(P){if(o&&P.samples>0&&et(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],W=P.width,at=P.height;let lt=i.COLOR_BUFFER_BIT;const rt=[],Pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(P),wt=P.isWebGLMultipleRenderTargets===!0;if(wt)for(let Ut=0;Ut<T.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Ut=0;Ut<T.length;Ut++){rt.push(i.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&rt.push(Pt);const Xt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(Xt===!1&&(P.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),wt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[Ut]),Xt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Pt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Pt])),wt){const ot=n.get(T[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,W,at,0,0,W,at,lt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let Ut=0;Ut<T.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,mt.__webglColorRenderbuffer[Ut]);const Xt=n.get(T[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function ft(P){return Math.min(s.maxSamples,P.samples)}function et(P){const T=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Dt(P){const T=a.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function xt(P,T){const W=P.colorSpace,at=P.format,lt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Jc||W!==Qn&&W!==mn&&(ue.getTransfer(W)===he?o===!1?t.has("EXT_sRGB")===!0&&at===Pn?(P.format=Jc,P.minFilter=dn,P.generateMipmaps=!1):T=$f.sRGBToLinear(T):(at!==Pn||lt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=kt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=et}function Ov(i,t,e){const n=e.isWebGL2;function s(r,a=mn){let o;const c=ue.getTransfer(a);if(r===xi)return i.UNSIGNED_BYTE;if(r===Bf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===zf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===xm)return i.BYTE;if(r===vm)return i.SHORT;if(r===bl)return i.UNSIGNED_SHORT;if(r===Of)return i.INT;if(r===fi)return i.UNSIGNED_INT;if(r===di)return i.FLOAT;if(r===Pr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ym)return i.ALPHA;if(r===Pn)return i.RGBA;if(r===Mm)return i.LUMINANCE;if(r===Sm)return i.LUMINANCE_ALPHA;if(r===ki)return i.DEPTH_COMPONENT;if(r===Gs)return i.DEPTH_STENCIL;if(r===Jc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===bm)return i.RED;if(r===kf)return i.RED_INTEGER;if(r===Em)return i.RG;if(r===Hf)return i.RG_INTEGER;if(r===Gf)return i.RGBA_INTEGER;if(r===Ua||r===Na||r===Fa||r===Oa)if(c===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Na)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nu||r===iu||r===su||r===ru)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===nu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===iu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===su)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ru)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ou||r===au)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ou)return c===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===au)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cu||r===lu||r===uu||r===hu||r===fu||r===du||r===pu||r===mu||r===gu||r===_u||r===xu||r===vu||r===yu||r===Mu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===cu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===du)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_u)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mu)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ba||r===Su||r===bu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ba)return c===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Su)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===wm||r===Eu||r===wu||r===Tu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ba)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Bv extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class le extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zv={type:"move"};class cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class kv extends $i{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const x=e.getContextAttributes();let m=null,p=null;const v=[],_=[],y=new ht;let E=null;const b=new je;b.layers.enable(1),b.viewport=new ce;const S=new je;S.layers.enable(2),S.viewport=new ce;const R=[b,S],M=new Bv;M.layers.enable(1),M.layers.enable(2);let w=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=v[Z];return ct===void 0&&(ct=new cc,v[Z]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=v[Z];return ct===void 0&&(ct=new cc,v[Z]=ct),ct.getGripSpace()},this.getHand=function(Z){let ct=v[Z];return ct===void 0&&(ct=new cc,v[Z]=ct),ct.getHandSpace()};function F(Z){const ct=_.indexOf(Z.inputSource);if(ct===-1)return;const Mt=v[ct];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,l||a),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",L);for(let Z=0;Z<v.length;Z++){const ct=_[Z];ct!==null&&(_[Z]=null,v[Z].disconnect(ct))}w=null,D=null,t.setRenderTarget(m),d=null,f=null,h=null,s=null,p=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ct={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Vi(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ct=null,Mt=null,Ct=null;x.depth&&(Ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=x.stencil?Gs:ki,Mt=x.stencil?zi:fi);const bt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Vi(f.textureWidth,f.textureHeight,{format:Pn,type:xi,depthTexture:new rd(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const zt=t.properties.get(p);zt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Z){for(let ct=0;ct<Z.removed.length;ct++){const Mt=Z.removed[ct],Ct=_.indexOf(Mt);Ct>=0&&(_[Ct]=null,v[Ct].disconnect(Mt))}for(let ct=0;ct<Z.added.length;ct++){const Mt=Z.added[ct];let Ct=_.indexOf(Mt);if(Ct===-1){for(let zt=0;zt<v.length;zt++)if(zt>=_.length){_.push(Mt),Ct=zt;break}else if(_[zt]===null){_[zt]=Mt,Ct=zt;break}if(Ct===-1)break}const bt=v[Ct];bt&&bt.connect(Mt)}}const O=new A,G=new A;function Q(Z,ct,Mt){O.setFromMatrixPosition(ct.matrixWorld),G.setFromMatrixPosition(Mt.matrixWorld);const Ct=O.distanceTo(G),bt=ct.projectionMatrix.elements,zt=Mt.projectionMatrix.elements,Ht=bt[14]/(bt[10]-1),Rt=bt[14]/(bt[10]+1),kt=(bt[9]+1)/bt[5],B=(bt[9]-1)/bt[5],gt=(bt[8]-1)/bt[0],nt=(zt[8]+1)/zt[0],ft=Ht*gt,et=Ht*nt,Dt=Ct/(-gt+nt),xt=Dt*-gt;ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(xt),Z.translateZ(Dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const P=Ht+Dt,T=Rt+Dt,W=ft-xt,at=et+(Ct-xt),lt=kt*Rt/T*P,rt=B*Rt/T*P;Z.projectionMatrix.makePerspective(W,at,lt,rt,P,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function K(Z,ct){ct===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;M.near=S.near=b.near=Z.near,M.far=S.far=b.far=Z.far,(w!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,D=M.far);const ct=Z.parent,Mt=M.cameras;K(M,ct);for(let Ct=0;Ct<Mt.length;Ct++)K(Mt[Ct],ct);Mt.length===2?Q(M,b,S):M.projectionMatrix.copy(b.projectionMatrix),Y(Z,M,ct)};function Y(Z,ct,Mt){Mt===null?Z.matrix.copy(ct.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let st=null;function it(Z,ct){if(u=ct.getViewerPose(l||a),g=ct,u!==null){const Mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Ct=!1;Mt.length!==M.cameras.length&&(M.cameras.length=0,Ct=!0);for(let bt=0;bt<Mt.length;bt++){const zt=Mt[bt];let Ht=null;if(d!==null)Ht=d.getViewport(zt);else{const kt=h.getViewSubImage(f,zt);Ht=kt.viewport,bt===0&&(t.setRenderTargetTextures(p,kt.colorTexture,f.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(p))}let Rt=R[bt];Rt===void 0&&(Rt=new je,Rt.layers.enable(bt),Rt.viewport=new ce,R[bt]=Rt),Rt.matrix.fromArray(zt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(zt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),bt===0&&(M.matrix.copy(Rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ct===!0&&M.cameras.push(Rt)}}for(let Mt=0;Mt<v.length;Mt++){const Ct=_[Mt],bt=v[Mt];Ct!==null&&bt!==void 0&&bt.update(Ct,ct,l||a)}st&&st(Z,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const _t=new id;_t.setAnimationLoop(it),this.setAnimationLoop=function(Z){st=Z},this.dispose=function(){}}}function Hv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,td(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gv(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(v,E);const b=t.render.frame;r[v.id]!==b&&(f(v),r[v.id]=b)}function u(v){const _=h();v.__bindingPointIndex=_;const y=i.createBuffer(),E=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,S=y.length;b<S;b++){const R=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,w=R.length;M<w;M++){const D=R[M];if(d(D,b,M,E)===!0){const F=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let L=0;for(let O=0;O<H.length;O++){const G=H[O],Q=x(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+L,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,_,y,E){const b=v.value,S=_+"_"+y;if(E[S]===void 0)return typeof b=="number"||typeof b=="boolean"?E[S]=b:E[S]=b.clone(),!0;{const R=E[S];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return E[S]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(v){const _=v.uniforms;let y=0;const E=16;for(let S=0,R=_.length;S<R;S++){const M=Array.isArray(_[S])?_[S]:[_[S]];for(let w=0,D=M.length;w<D;w++){const F=M[w],H=Array.isArray(F.value)?F.value:[F.value];for(let L=0,O=H.length;L<O;L++){const G=H[L],Q=x(G),K=y%E;K!==0&&E-K<Q.boundary&&(y+=E-K),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Q.storage}}}const b=y%E;return b>0&&(y+=E-b),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Rl{constructor(t={}){const{canvas:e=Bm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const _=this;let y=!1,E=0,b=0,S=null,R=-1,M=null;const w=new ce,D=new ce;let F=null;const H=new ne(0);let L=0,O=e.width,G=e.height,Q=1,K=null,Y=null;const st=new ce(0,0,O,G),it=new ce(0,0,O,G);let _t=!1;const Z=new Tl;let ct=!1,Mt=!1,Ct=null;const bt=new oe,zt=new ht,Ht=new A,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return S===null?Q:1}let B=n;function gt(C,X){for(let j=0;j<C.length;j++){const J=C[j],$=e.getContext(J,X);if($!==null)return $}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",pt,!1),B===null){const X=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&X.shift(),B=gt(X,C),B===null)throw gt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let nt,ft,et,Dt,xt,P,T,W,at,lt,rt,Pt,mt,wt,Ut,Xt,ot,ie,Yt,Gt,It,Et,I,dt;function Lt(){nt=new J_(B),ft=new q_(B,nt,t),nt.init(ft),Et=new Ov(B,nt,ft),et=new Nv(B,nt,ft),Dt=new ex(B),xt=new Mv,P=new Fv(B,nt,et,xt,ft,Et,Dt),T=new $_(_),W=new K_(_),at=new lg(B,ft),I=new W_(B,nt,at,ft),lt=new Q_(B,at,Dt,I),rt=new rx(B,lt,at,Dt),Yt=new sx(B,ft,P),Xt=new Y_(xt),Pt=new yv(_,T,W,nt,ft,I,Xt),mt=new Hv(_,xt),wt=new bv,Ut=new Pv(nt,ft),ie=new V_(_,T,W,et,rt,f,c),ot=new Uv(_,rt,ft),dt=new Gv(B,Dt,ft,et),Gt=new X_(B,nt,Dt,ft),It=new tx(B,nt,Dt,ft),Dt.programs=Pt.programs,_.capabilities=ft,_.extensions=nt,_.properties=xt,_.renderLists=wt,_.shadowMap=ot,_.state=et,_.info=Dt}Lt();const Tt=new kv(_,B);this.xr=Tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(O,G,!1))},this.getSize=function(C){return C.set(O,G)},this.setSize=function(C,X,j=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,G=X,e.width=Math.floor(C*Q),e.height=Math.floor(X*Q),j===!0&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(O*Q,G*Q).floor()},this.setDrawingBufferSize=function(C,X,j){O=C,G=X,Q=j,e.width=Math.floor(C*j),e.height=Math.floor(X*j),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(st)},this.setViewport=function(C,X,j,J){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,X,j,J),et.viewport(w.copy(st).multiplyScalar(Q).floor())},this.getScissor=function(C){return C.copy(it)},this.setScissor=function(C,X,j,J){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,X,j,J),et.scissor(D.copy(it).multiplyScalar(Q).floor())},this.getScissorTest=function(){return _t},this.setScissorTest=function(C){et.setScissorTest(_t=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(C=!0,X=!0,j=!0){let J=0;if(C){let $=!1;if(S!==null){const At=S.texture.format;$=At===Gf||At===Hf||At===kf}if($){const At=S.texture.type,Ft=At===xi||At===fi||At===bl||At===zi||At===Bf||At===zf,Vt=ie.getClearColor(),qt=ie.getClearAlpha(),Qt=Vt.r,$t=Vt.g,Zt=Vt.b;Ft?(d[0]=Qt,d[1]=$t,d[2]=Zt,d[3]=qt,B.clearBufferuiv(B.COLOR,0,d)):(g[0]=Qt,g[1]=$t,g[2]=Zt,g[3]=qt,B.clearBufferiv(B.COLOR,0,g))}else J|=B.COLOR_BUFFER_BIT}X&&(J|=B.DEPTH_BUFFER_BIT),j&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),wt.dispose(),Ut.dispose(),xt.dispose(),T.dispose(),W.dispose(),rt.dispose(),I.dispose(),dt.dispose(),Pt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",tt),Tt.removeEventListener("sessionend",St),Ct&&(Ct.dispose(),Ct=null),Bt.stop()};function ut(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Dt.autoReset,X=ot.enabled,j=ot.autoUpdate,J=ot.needsUpdate,$=ot.type;Lt(),Dt.autoReset=C,ot.enabled=X,ot.autoUpdate=j,ot.needsUpdate=J,ot.type=$}function pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function yt(C){const X=C.target;X.removeEventListener("dispose",yt),Ot(X)}function Ot(C){Nt(C),xt.remove(C)}function Nt(C){const X=xt.get(C).programs;X!==void 0&&(X.forEach(function(j){Pt.releaseProgram(j)}),C.isShaderMaterial&&Pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,j,J,$,At){X===null&&(X=Rt);const Ft=$.isMesh&&$.matrixWorld.determinant()<0,Vt=Up(C,X,j,J,$);et.setMaterial(J,Ft);let qt=j.index,Qt=1;if(J.wireframe===!0){if(qt=lt.getWireframeAttribute(j),qt===void 0)return;Qt=2}const $t=j.drawRange,Zt=j.attributes.position;let Se=$t.start*Qt,tn=($t.start+$t.count)*Qt;At!==null&&(Se=Math.max(Se,At.start*Qt),tn=Math.min(tn,(At.start+At.count)*Qt)),qt!==null?(Se=Math.max(Se,0),tn=Math.min(tn,qt.count)):Zt!=null&&(Se=Math.max(Se,0),tn=Math.min(tn,Zt.count));const Le=tn-Se;if(Le<0||Le===1/0)return;I.setup($,J,Vt,j,qt);let zn,_e=Gt;if(qt!==null&&(zn=at.get(qt),_e=It,_e.setIndex(zn)),$.isMesh)J.wireframe===!0?(et.setLineWidth(J.wireframeLinewidth*kt()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if($.isLine){let ee=J.linewidth;ee===void 0&&(ee=1),et.setLineWidth(ee*kt()),$.isLineSegments?_e.setMode(B.LINES):$.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else $.isPoints?_e.setMode(B.POINTS):$.isSprite&&_e.setMode(B.TRIANGLES);if($.isBatchedMesh)_e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)_e.renderInstances(Se,Le,$.count);else if(j.isInstancedBufferGeometry){const ee=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pa=Math.min(j.instanceCount,ee);_e.renderInstances(Se,Le,Pa)}else _e.render(Se,Le)};function Jt(C,X,j){C.transparent===!0&&C.side===pn&&C.forceSinglePass===!1?(C.side=He,C.needsUpdate=!0,Br(C,X,j),C.side=Nn,C.needsUpdate=!0,Br(C,X,j),C.side=pn):Br(C,X,j)}this.compile=function(C,X,j=null){j===null&&(j=C),m=Ut.get(j),m.init(),v.push(m),j.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),C!==j&&C.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(_._useLegacyLights);const J=new Set;return C.traverse(function($){const At=$.material;if(At)if(Array.isArray(At))for(let Ft=0;Ft<At.length;Ft++){const Vt=At[Ft];Jt(Vt,j,$),J.add(Vt)}else Jt(At,j,$),J.add(At)}),v.pop(),m=null,J},this.compileAsync=function(C,X,j=null){const J=this.compile(C,X,j);return new Promise($=>{function At(){if(J.forEach(function(Ft){xt.get(Ft).currentProgram.isReady()&&J.delete(Ft)}),J.size===0){$(C);return}setTimeout(At,10)}nt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let U=null;function k(C){U&&U(C)}function tt(){Bt.stop()}function St(){Bt.start()}const Bt=new id;Bt.setAnimationLoop(k),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(C){U=C,Tt.setAnimationLoop(C),C===null?Bt.stop():Bt.start()},Tt.addEventListener("sessionstart",tt),Tt.addEventListener("sessionend",St),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(X),X=Tt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,X,S),m=Ut.get(C,v.length),m.init(),v.push(m),bt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(bt),Mt=this.localClippingEnabled,ct=Xt.init(this.clippingPlanes,Mt),x=wt.get(C,p.length),x.init(),p.push(x),de(C,X,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(K,Y),this.info.render.frame++,ct===!0&&Xt.beginShadows();const j=m.state.shadowsArray;if(ot.render(j,C,X),ct===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(x,C),m.setupLights(_._useLegacyLights),X.isArrayCamera){const J=X.cameras;for(let $=0,At=J.length;$<At;$++){const Ft=J[$];Fe(x,C,Ft,Ft.viewport)}}else Fe(x,C,X);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(_,C,X),I.resetDefaultState(),R=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function de(C,X,j,J){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){J&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const Ft=rt.update(C),Vt=C.material;Vt.visible&&x.push(C,Ft,Vt,j,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Ft=rt.update(C),Vt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Ht.copy(Ft.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(Vt)){const qt=Ft.groups;for(let Qt=0,$t=qt.length;Qt<$t;Qt++){const Zt=qt[Qt],Se=Vt[Zt.materialIndex];Se&&Se.visible&&x.push(C,Ft,Se,j,Ht.z,Zt)}}else Vt.visible&&x.push(C,Ft,Vt,j,Ht.z,null)}}const At=C.children;for(let Ft=0,Vt=At.length;Ft<Vt;Ft++)de(At[Ft],X,j,J)}function Fe(C,X,j,J){const $=C.opaque,At=C.transmissive,Ft=C.transparent;m.setupLightsView(j),ct===!0&&Xt.setGlobalState(_.clippingPlanes,j),At.length>0&&an($,At,X,j),J&&et.viewport(w.copy(J)),$.length>0&&Bn($,X,j),At.length>0&&Bn(At,X,j),Ft.length>0&&Bn(Ft,X,j),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function an(C,X,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const At=ft.isWebGL2;Ct===null&&(Ct=new Vi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")?Pr:xi,minFilter:Rr,samples:At?4:0})),_.getDrawingBufferSize(zt),At?Ct.setSize(zt.x,zt.y):Ct.setSize(tl(zt.x),tl(zt.y));const Ft=_.getRenderTarget();_.setRenderTarget(Ct),_.getClearColor(H),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Vt=_.toneMapping;_.toneMapping=_i,Bn(C,j,J),P.updateMultisampleRenderTarget(Ct),P.updateRenderTargetMipmap(Ct);let qt=!1;for(let Qt=0,$t=X.length;Qt<$t;Qt++){const Zt=X[Qt],Se=Zt.object,tn=Zt.geometry,Le=Zt.material,zn=Zt.group;if(Le.side===pn&&Se.layers.test(J.layers)){const _e=Le.side;Le.side=He,Le.needsUpdate=!0,js(Se,j,J,tn,Le,zn),Le.side=_e,Le.needsUpdate=!0,qt=!0}}qt===!0&&(P.updateMultisampleRenderTarget(Ct),P.updateRenderTargetMipmap(Ct)),_.setRenderTarget(Ft),_.setClearColor(H,L),_.toneMapping=Vt}function Bn(C,X,j){const J=X.isScene===!0?X.overrideMaterial:null;for(let $=0,At=C.length;$<At;$++){const Ft=C[$],Vt=Ft.object,qt=Ft.geometry,Qt=J===null?Ft.material:J,$t=Ft.group;Vt.layers.test(j.layers)&&js(Vt,X,j,qt,Qt,$t)}}function js(C,X,j,J,$,At){C.onBeforeRender(_,X,j,J,$,At),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(_,X,j,J,C,At),$.transparent===!0&&$.side===pn&&$.forceSinglePass===!1?($.side=He,$.needsUpdate=!0,_.renderBufferDirect(j,X,J,$,C,At),$.side=Nn,$.needsUpdate=!0,_.renderBufferDirect(j,X,J,$,C,At),$.side=pn):_.renderBufferDirect(j,X,J,$,C,At),C.onAfterRender(_,X,j,J,$,At)}function Br(C,X,j){X.isScene!==!0&&(X=Rt);const J=xt.get(C),$=m.state.lights,At=m.state.shadowsArray,Ft=$.state.version,Vt=Pt.getParameters(C,$.state,At,X,j),qt=Pt.getProgramCacheKey(Vt);let Qt=J.programs;J.environment=C.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(C.isMeshStandardMaterial?W:T).get(C.envMap||J.environment),Qt===void 0&&(C.addEventListener("dispose",yt),Qt=new Map,J.programs=Qt);let $t=Qt.get(qt);if($t!==void 0){if(J.currentProgram===$t&&J.lightsStateVersion===Ft)return ql(C,Vt),$t}else Vt.uniforms=Pt.getUniforms(C),C.onBuild(j,Vt,_),C.onBeforeCompile(Vt,_),$t=Pt.acquireProgram(Vt,qt),Qt.set(qt,$t),J.uniforms=Vt.uniforms;const Zt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=Xt.uniform),ql(C,Vt),J.needsLights=Fp(C),J.lightsStateVersion=Ft,J.needsLights&&(Zt.ambientLightColor.value=$.state.ambient,Zt.lightProbe.value=$.state.probe,Zt.directionalLights.value=$.state.directional,Zt.directionalLightShadows.value=$.state.directionalShadow,Zt.spotLights.value=$.state.spot,Zt.spotLightShadows.value=$.state.spotShadow,Zt.rectAreaLights.value=$.state.rectArea,Zt.ltc_1.value=$.state.rectAreaLTC1,Zt.ltc_2.value=$.state.rectAreaLTC2,Zt.pointLights.value=$.state.point,Zt.pointLightShadows.value=$.state.pointShadow,Zt.hemisphereLights.value=$.state.hemi,Zt.directionalShadowMap.value=$.state.directionalShadowMap,Zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Zt.spotShadowMap.value=$.state.spotShadowMap,Zt.spotLightMatrix.value=$.state.spotLightMatrix,Zt.spotLightMap.value=$.state.spotLightMap,Zt.pointShadowMap.value=$.state.pointShadowMap,Zt.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=$t,J.uniformsList=null,$t}function Xl(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=qo.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function ql(C,X){const j=xt.get(C);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function Up(C,X,j,J,$){X.isScene!==!0&&(X=Rt),P.resetTextureUnits();const At=X.fog,Ft=J.isMeshStandardMaterial?X.environment:null,Vt=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Qn,qt=(J.isMeshStandardMaterial?W:T).get(J.envMap||Ft),Qt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$t=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!j.morphAttributes.position,Se=!!j.morphAttributes.normal,tn=!!j.morphAttributes.color;let Le=_i;J.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Le=_.toneMapping);const zn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=zn!==void 0?zn.length:0,ee=xt.get(J),Pa=m.state.lights;if(ct===!0&&(Mt===!0||C!==M)){const cn=C===M&&J.id===R;Xt.setState(J,C,cn)}let ve=!1;J.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Pa.state.version||ee.outputColorSpace!==Vt||$.isBatchedMesh&&ee.batching===!1||!$.isBatchedMesh&&ee.batching===!0||$.isInstancedMesh&&ee.instancing===!1||!$.isInstancedMesh&&ee.instancing===!0||$.isSkinnedMesh&&ee.skinning===!1||!$.isSkinnedMesh&&ee.skinning===!0||$.isInstancedMesh&&ee.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ee.instancingColor===!1&&$.instanceColor!==null||ee.envMap!==qt||J.fog===!0&&ee.fog!==At||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Xt.numPlanes||ee.numIntersection!==Xt.numIntersection)||ee.vertexAlphas!==Qt||ee.vertexTangents!==$t||ee.morphTargets!==Zt||ee.morphNormals!==Se||ee.morphColors!==tn||ee.toneMapping!==Le||ft.isWebGL2===!0&&ee.morphTargetsCount!==_e)&&(ve=!0):(ve=!0,ee.__version=J.version);let bi=ee.currentProgram;ve===!0&&(bi=Br(J,X,$));let Yl=!1,Ks=!1,Ca=!1;const Oe=bi.getUniforms(),Ei=ee.uniforms;if(et.useProgram(bi.program)&&(Yl=!0,Ks=!0,Ca=!0),J.id!==R&&(R=J.id,Ks=!0),Yl||M!==C){Oe.setValue(B,"projectionMatrix",C.projectionMatrix),Oe.setValue(B,"viewMatrix",C.matrixWorldInverse);const cn=Oe.map.cameraPosition;cn!==void 0&&cn.setValue(B,Ht.setFromMatrixPosition(C.matrixWorld)),ft.logarithmicDepthBuffer&&Oe.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Oe.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Ks=!0,Ca=!0)}if($.isSkinnedMesh){Oe.setOptional(B,$,"bindMatrix"),Oe.setOptional(B,$,"bindMatrixInverse");const cn=$.skeleton;cn&&(ft.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Oe.setValue(B,"boneTexture",cn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Oe.setOptional(B,$,"batchingTexture"),Oe.setValue(B,"batchingTexture",$._matricesTexture,P));const La=j.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&ft.isWebGL2===!0)&&Yt.update($,j,bi),(Ks||ee.receiveShadow!==$.receiveShadow)&&(ee.receiveShadow=$.receiveShadow,Oe.setValue(B,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ei.envMap.value=qt,Ei.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),Ks&&(Oe.setValue(B,"toneMappingExposure",_.toneMappingExposure),ee.needsLights&&Np(Ei,Ca),At&&J.fog===!0&&mt.refreshFogUniforms(Ei,At),mt.refreshMaterialUniforms(Ei,J,Q,G,Ct),qo.upload(B,Xl(ee),Ei,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(qo.upload(B,Xl(ee),Ei,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Oe.setValue(B,"center",$.center),Oe.setValue(B,"modelViewMatrix",$.modelViewMatrix),Oe.setValue(B,"normalMatrix",$.normalMatrix),Oe.setValue(B,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const cn=J.uniformsGroups;for(let Da=0,Op=cn.length;Da<Op;Da++)if(ft.isWebGL2){const $l=cn[Da];dt.update($l,bi),dt.bind($l,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Np(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Fp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,X,j){xt.get(C.texture).__webglTexture=X,xt.get(C.depthTexture).__webglTexture=j;const J=xt.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const j=xt.get(C);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,j=0){S=C,E=X,b=j;let J=!0,$=null,At=!1,Ft=!1;if(C){const qt=xt.get(C);qt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(B.FRAMEBUFFER,null),J=!1):qt.__webglFramebuffer===void 0?P.setupRenderTarget(C):qt.__hasExternalTextures&&P.rebindTextures(C,xt.get(C.texture).__webglTexture,xt.get(C.depthTexture).__webglTexture);const Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ft=!0);const $t=xt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[X])?$=$t[X][j]:$=$t[X],At=!0):ft.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?$=xt.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?$=$t[j]:$=$t,w.copy(C.viewport),D.copy(C.scissor),F=C.scissorTest}else w.copy(st).multiplyScalar(Q).floor(),D.copy(it).multiplyScalar(Q).floor(),F=_t;if(et.bindFramebuffer(B.FRAMEBUFFER,$)&&ft.drawBuffers&&J&&et.drawBuffers(C,$),et.viewport(w),et.scissor(D),et.setScissorTest(F),At){const qt=xt.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,qt.__webglTexture,j)}else if(Ft){const qt=xt.get(C.texture),Qt=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.__webglTexture,j||0,Qt)}R=-1},this.readRenderTargetPixels=function(C,X,j,J,$,At,Ft){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Vt=Vt[Ft]),Vt){et.bindFramebuffer(B.FRAMEBUFFER,Vt);try{const qt=C.texture,Qt=qt.format,$t=qt.type;if(Qt!==Pn&&Et.convert(Qt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Zt=$t===Pr&&(nt.has("EXT_color_buffer_half_float")||ft.isWebGL2&&nt.has("EXT_color_buffer_float"));if($t!==xi&&Et.convert($t)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===di&&(ft.isWebGL2||nt.has("OES_texture_float")||nt.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-J&&j>=0&&j<=C.height-$&&B.readPixels(X,j,J,$,Et.convert(Qt),Et.convert($t),At)}finally{const qt=S!==null?xt.get(S).__webglFramebuffer:null;et.bindFramebuffer(B.FRAMEBUFFER,qt)}}},this.copyFramebufferToTexture=function(C,X,j=0){const J=Math.pow(2,-j),$=Math.floor(X.image.width*J),At=Math.floor(X.image.height*J);P.setTexture2D(X,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,C.x,C.y,$,At),et.unbindTexture()},this.copyTextureToTexture=function(C,X,j,J=0){const $=X.image.width,At=X.image.height,Ft=Et.convert(j.format),Vt=Et.convert(j.type);P.setTexture2D(j,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment),X.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,J,C.x,C.y,$,At,Ft,Vt,X.image.data):X.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,J,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Ft,X.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,J,C.x,C.y,Ft,Vt,X.image),J===0&&j.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(C,X,j,J,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=C.max.x-C.min.x+1,Ft=C.max.y-C.min.y+1,Vt=C.max.z-C.min.z+1,qt=Et.convert(J.format),Qt=Et.convert(J.type);let $t;if(J.isData3DTexture)P.setTexture3D(J,0),$t=B.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)P.setTexture2DArray(J,0),$t=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);const Zt=B.getParameter(B.UNPACK_ROW_LENGTH),Se=B.getParameter(B.UNPACK_IMAGE_HEIGHT),tn=B.getParameter(B.UNPACK_SKIP_PIXELS),Le=B.getParameter(B.UNPACK_SKIP_ROWS),zn=B.getParameter(B.UNPACK_SKIP_IMAGES),_e=j.isCompressedTexture?j.mipmaps[$]:j.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,_e.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,C.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,C.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D($t,$,X.x,X.y,X.z,At,Ft,Vt,qt,Qt,_e.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D($t,$,X.x,X.y,X.z,At,Ft,Vt,qt,_e.data)):B.texSubImage3D($t,$,X.x,X.y,X.z,At,Ft,Vt,qt,Qt,_e),B.pixelStorei(B.UNPACK_ROW_LENGTH,Zt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Le),B.pixelStorei(B.UNPACK_SKIP_IMAGES,zn),$===0&&J.generateMipmaps&&B.generateMipmap($t),et.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){E=0,b=0,S=null,et.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===El?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===_a?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?Hi:Wf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Hi?Ae:Qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Vv extends Rl{}Vv.prototype.isWebGL1Renderer=!0;class Pl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new Pl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cl extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ph extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ms=new oe,mh=new oe,ao=[],gh=new ae,Wv=new oe,ir=new se,sr=new Zi;class Xv extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ph(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ae),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),gh.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(gh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),sr.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),mh.multiplyMatrices(n,ms),ir.matrixWorld=mh,ir.raycast(t,ao);for(let a=0,o=ao.length;a<o;a++){const c=ao[a];c.instanceId=r,c.object=this,e.push(c)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ph(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ll extends Ys{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _h=new A,xh=new A,vh=new oe,lc=new qs,co=new Zi;class qv extends Ne{constructor(t=new Ye,e=new Ll){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)_h.fromBufferAttribute(e,s-1),xh.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=_h.distanceTo(xh);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;vh.copy(s).invert(),lc.copy(t.ray).applyMatrix4(vh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new A,u=new A,h=new A,f=new A,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let _=p,y=v-1;_<y;_+=d){const E=g.getX(_),b=g.getX(_+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,b),lc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=p,y=v-1;_<y;_+=d){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),lc.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const yh=new A,Mh=new A;class hd extends qv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)yh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yh.distanceTo(Mh);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yv extends Je{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(a-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ht:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],a=[],o=new A,c=new oe;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ie(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ie(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dl extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new ht,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $v extends Dl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,d*=u,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const lo=new A,uc=new Il,hc=new Il,fc=new Il;class fd extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(lo.subVectors(s[0],s[1]).add(s[0]),l=lo);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),uc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,x,m),hc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,x,m),fc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),hc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),fc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(uc.calc(c),hc.calc(c),fc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Zv(i,t){const e=1-i;return e*e*t}function jv(i,t){return 2*(1-i)*i*t}function Kv(i,t){return i*i*t}function xr(i,t,e,n){return Zv(i,t)+jv(i,e)+Kv(i,n)}function Jv(i,t){const e=1-i;return e*e*e*t}function Qv(i,t){const e=1-i;return 3*e*e*i*t}function ty(i,t){return 3*(1-i)*i*i*t}function ey(i,t){return i*i*i*t}function vr(i,t,e,n,s){return Jv(i,t)+Qv(i,e)+ty(i,n)+ey(i,s)}class dd extends Fn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ny extends Fn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y),vr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pd extends Fn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iy extends Fn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class md extends Fn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(t,s.x,r.x,a.x),xr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gd extends Fn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(xr(t,s.x,r.x,a.x),xr(t,s.y,r.y,a.y),xr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Sh(o,c.x,l.x,u.x,h.x),Sh(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var aa=Object.freeze({__proto__:null,ArcCurve:$v,CatmullRomCurve3:fd,CubicBezierCurve:dd,CubicBezierCurve3:ny,EllipseCurve:Dl,LineCurve:pd,LineCurve3:iy,QuadraticBezierCurve:md,QuadraticBezierCurve3:gd,SplineCurve:_d});class sy extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new aa[s.type]().fromJSON(s))}return this}}class nl extends sy{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new pd(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new md(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new dd(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _d(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Dl(t,e,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ur extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function v(){const y=new A,E=new A;let b=0;const S=(e-t)/n;for(let R=0;R<=r;R++){const M=[],w=R/r,D=w*(e-t)+t;for(let F=0;F<=s;F++){const H=F/s,L=H*c+o,O=Math.sin(L),G=Math.cos(L);E.x=D*O,E.y=-w*n+m,E.z=D*G,h.push(E.x,E.y,E.z),y.set(O,S,G).normalize(),f.push(y.x,y.y,y.z),d.push(H,1-w),M.push(g++)}x.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){const w=x[M][R],D=x[M+1][R],F=x[M+1][R+1],H=x[M][R+1];u.push(w,D,H),u.push(D,F,H),b+=6}l.addGroup(p,b,0),p+=b}function _(y){const E=g,b=new ht,S=new A;let R=0;const M=y===!0?t:e,w=y===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const L=F/s*c+o,O=Math.cos(L),G=Math.sin(L);S.x=M*G,S.y=m*w,S.z=M*O,h.push(S.x,S.y,S.z),f.push(0,w,0),b.x=O*.5+.5,b.y=G*.5*w+.5,d.push(b.x,b.y),g++}for(let F=0;F<s;F++){const H=E+F,L=D+F;y===!0?u.push(L,L+1,H):u.push(L+1,L,H),R+=3}l.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xd extends nl{constructor(t){super(t),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new nl().fromJSON(s))}return this}}const ry={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=vd(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,f,d;if(n&&(r=uy(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-o,u-c),d=d!==0?32767/d:0}return Cr(r,a,e,o,c,d,0),a}};function vd(i,t,e,n,s){let r,a;if(s===My(i,t,e,n)>0)for(r=t;r<e;r+=n)a=bh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=bh(r,i[r],i[r+1],a);return a&&Sa(a,a.next)&&(Dr(a),a=a.next),a}function qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sa(e,e.next)||xe(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&my(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ay(i,n,s,r):oy(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Dr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=cy(qi(i),t,e),Cr(i,t,e,n,s,r,2)):a===2&&ly(i,t,e,n,s,r):Cr(qi(i),t,e,n,s,r,1);break}}}function oy(i){const t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Us(s,o,r,c,a,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ay(i,t,e,n){const s=i.prev,r=i,a=i.next;if(xe(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,x=o>c?o>l?o:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=il(d,g,t,e,n),v=il(x,m,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Us(o,u,c,h,l,f,_.x,_.y)&&xe(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Us(o,u,c,h,l,f,y.x,y.y)&&xe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Us(o,u,c,h,l,f,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Us(o,u,c,h,l,f,y.x,y.y)&&xe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cy(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Sa(s,r)&&yd(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Dr(n),Dr(n.next),n=i=r),n=n.next}while(n!==i);return qi(n)}function ly(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xy(a,o)){let c=Md(a,o);a=qi(a,a.next),c=qi(c,c.next),Cr(a,t,e,n,s,r,0),Cr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function uy(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=vd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(_y(l));for(s.sort(hy),r=0;r<s.length;r++)e=fy(s[r],e);return e}function hy(i,t){return i.x-t.x}function fy(i,t){const e=dy(i,t);if(!e)return t;const n=Md(e,i);return qi(n,n.next),qi(e,e.next)}function dy(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Us(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Lr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&py(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function py(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function my(i,t,e,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gy(s)}function gy(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _y(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Us(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function xy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vy(i,t)&&(Lr(i,t)&&Lr(t,i)&&yy(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Sa(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sa(i,t){return i.x===t.x&&i.y===t.y}function yd(i,t,e,n){const s=ho(xe(i,t,e)),r=ho(xe(i,t,n)),a=ho(xe(e,n,i)),o=ho(xe(e,n,t));return!!(s!==r&&a!==o||s===0&&uo(i,e,t)||r===0&&uo(i,n,t)||a===0&&uo(e,i,n)||o===0&&uo(e,t,n))}function uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ho(i){return i>0?1:i<0?-1:0}function vy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function yy(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Md(i,t){const e=new sl(i.i,i.x,i.y),n=new sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bh(i,t,e,n){const s=new sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Dr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function My(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class yr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return yr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Eh(t),wh(n,t);let a=t.length;e.forEach(Eh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,wh(n,e[c]);const o=ry.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Eh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ul extends Ye{constructor(t=new xd([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Sy;let _,y=!1,E,b,S,R;p&&(_=p.getSpacedPoints(u),y=!0,f=!1,E=p.computeFrenetFrames(u,!1),b=new A,S=new A,R=new A),f||(m=0,d=0,g=0,x=0);const M=o.extractPoints(l);let w=M.shape;const D=M.holes;if(!yr.isClockWise(w)){w=w.reverse();for(let B=0,gt=D.length;B<gt;B++){const nt=D[B];yr.isClockWise(nt)&&(D[B]=nt.reverse())}}const H=yr.triangulateShape(w,D),L=w;for(let B=0,gt=D.length;B<gt;B++){const nt=D[B];w=w.concat(nt)}function O(B,gt,nt){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(gt,nt)}const G=w.length,Q=H.length;function K(B,gt,nt){let ft,et,Dt;const xt=B.x-gt.x,P=B.y-gt.y,T=nt.x-B.x,W=nt.y-B.y,at=xt*xt+P*P,lt=xt*W-P*T;if(Math.abs(lt)>Number.EPSILON){const rt=Math.sqrt(at),Pt=Math.sqrt(T*T+W*W),mt=gt.x-P/rt,wt=gt.y+xt/rt,Ut=nt.x-W/Pt,Xt=nt.y+T/Pt,ot=((Ut-mt)*W-(Xt-wt)*T)/(xt*W-P*T);ft=mt+xt*ot-B.x,et=wt+P*ot-B.y;const ie=ft*ft+et*et;if(ie<=2)return new ht(ft,et);Dt=Math.sqrt(ie/2)}else{let rt=!1;xt>Number.EPSILON?T>Number.EPSILON&&(rt=!0):xt<-Number.EPSILON?T<-Number.EPSILON&&(rt=!0):Math.sign(P)===Math.sign(W)&&(rt=!0),rt?(ft=-P,et=xt,Dt=Math.sqrt(at)):(ft=xt,et=P,Dt=Math.sqrt(at/2))}return new ht(ft/Dt,et/Dt)}const Y=[];for(let B=0,gt=L.length,nt=gt-1,ft=B+1;B<gt;B++,nt++,ft++)nt===gt&&(nt=0),ft===gt&&(ft=0),Y[B]=K(L[B],L[nt],L[ft]);const st=[];let it,_t=Y.concat();for(let B=0,gt=D.length;B<gt;B++){const nt=D[B];it=[];for(let ft=0,et=nt.length,Dt=et-1,xt=ft+1;ft<et;ft++,Dt++,xt++)Dt===et&&(Dt=0),xt===et&&(xt=0),it[ft]=K(nt[ft],nt[Dt],nt[xt]);st.push(it),_t=_t.concat(it)}for(let B=0;B<m;B++){const gt=B/m,nt=d*Math.cos(gt*Math.PI/2),ft=g*Math.sin(gt*Math.PI/2)+x;for(let et=0,Dt=L.length;et<Dt;et++){const xt=O(L[et],Y[et],ft);bt(xt.x,xt.y,-nt)}for(let et=0,Dt=D.length;et<Dt;et++){const xt=D[et];it=st[et];for(let P=0,T=xt.length;P<T;P++){const W=O(xt[P],it[P],ft);bt(W.x,W.y,-nt)}}}const Z=g+x;for(let B=0;B<G;B++){const gt=f?O(w[B],_t[B],Z):w[B];y?(S.copy(E.normals[0]).multiplyScalar(gt.x),b.copy(E.binormals[0]).multiplyScalar(gt.y),R.copy(_[0]).add(S).add(b),bt(R.x,R.y,R.z)):bt(gt.x,gt.y,0)}for(let B=1;B<=u;B++)for(let gt=0;gt<G;gt++){const nt=f?O(w[gt],_t[gt],Z):w[gt];y?(S.copy(E.normals[B]).multiplyScalar(nt.x),b.copy(E.binormals[B]).multiplyScalar(nt.y),R.copy(_[B]).add(S).add(b),bt(R.x,R.y,R.z)):bt(nt.x,nt.y,h/u*B)}for(let B=m-1;B>=0;B--){const gt=B/m,nt=d*Math.cos(gt*Math.PI/2),ft=g*Math.sin(gt*Math.PI/2)+x;for(let et=0,Dt=L.length;et<Dt;et++){const xt=O(L[et],Y[et],ft);bt(xt.x,xt.y,h+nt)}for(let et=0,Dt=D.length;et<Dt;et++){const xt=D[et];it=st[et];for(let P=0,T=xt.length;P<T;P++){const W=O(xt[P],it[P],ft);y?bt(W.x,W.y+_[u-1].y,_[u-1].x+nt):bt(W.x,W.y,h+nt)}}}ct(),Mt();function ct(){const B=s.length/3;if(f){let gt=0,nt=G*gt;for(let ft=0;ft<Q;ft++){const et=H[ft];zt(et[2]+nt,et[1]+nt,et[0]+nt)}gt=u+m*2,nt=G*gt;for(let ft=0;ft<Q;ft++){const et=H[ft];zt(et[0]+nt,et[1]+nt,et[2]+nt)}}else{for(let gt=0;gt<Q;gt++){const nt=H[gt];zt(nt[2],nt[1],nt[0])}for(let gt=0;gt<Q;gt++){const nt=H[gt];zt(nt[0]+G*u,nt[1]+G*u,nt[2]+G*u)}}n.addGroup(B,s.length/3-B,0)}function Mt(){const B=s.length/3;let gt=0;Ct(L,gt),gt+=L.length;for(let nt=0,ft=D.length;nt<ft;nt++){const et=D[nt];Ct(et,gt),gt+=et.length}n.addGroup(B,s.length/3-B,1)}function Ct(B,gt){let nt=B.length;for(;--nt>=0;){const ft=nt;let et=nt-1;et<0&&(et=B.length-1);for(let Dt=0,xt=u+m*2;Dt<xt;Dt++){const P=G*Dt,T=G*(Dt+1),W=gt+ft+P,at=gt+et+P,lt=gt+et+T,rt=gt+ft+T;Ht(W,at,lt,rt)}}}function bt(B,gt,nt){c.push(B),c.push(gt),c.push(nt)}function zt(B,gt,nt){Rt(B),Rt(gt),Rt(nt);const ft=s.length/3,et=v.generateTopUV(n,s,ft-3,ft-2,ft-1);kt(et[0]),kt(et[1]),kt(et[2])}function Ht(B,gt,nt,ft){Rt(B),Rt(gt),Rt(ft),Rt(gt),Rt(nt),Rt(ft);const et=s.length/3,Dt=v.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);kt(Dt[0]),kt(Dt[1]),kt(Dt[3]),kt(Dt[1]),kt(Dt[2]),kt(Dt[3])}function Rt(B){s.push(c[B*3+0]),s.push(c[B*3+1]),s.push(c[B*3+2])}function kt(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return by(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new aa[s.type]().fromJSON(s)),new Ul(n,t.options)}}const Sy={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ht(r,a),new ht(o,c),new ht(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ht(a,1-c),new ht(l,1-h),new ht(f,1-g),new ht(x,1-p)]:[new ht(o,1-c),new ht(u,1-h),new ht(d,1-g),new ht(m,1-p)]}};function by(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ba extends Ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new A,h=new A,f=new A;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;a.push(x,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Nl extends Ye{constructor(t=new gd(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,c=new A,l=new ht;let u=new A;const h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),v(),p()}function m(_){u=t.getPointAt(_/e,u);const y=a.normals[_],E=a.binormals[_];for(let b=0;b<=s;b++){const S=b/s*Math.PI*2,R=Math.sin(S),M=-Math.cos(S);c.x=M*y.x+R*E.x,c.y=M*y.y+R*E.y,c.z=M*y.z+R*E.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){const E=(s+1)*(_-1)+(y-1),b=(s+1)*_+(y-1),S=(s+1)*_+y,R=(s+1)*(_-1)+y;g.push(E,b,R),g.push(b,S,R)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)l.x=_/e,l.y=y/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Nl(new aa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ca extends Ys{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xf,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fl extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Sd extends Fl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const dc=new oe,Th=new A,Ah=new A;class bd{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rh=new oe,rr=new A,pc=new A;class Ey extends bd{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(rr),pc.copy(n.position),pc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pc),n.updateMatrixWorld(),s.makeTranslation(-rr.x,-rr.y,-rr.z),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh)}}class wy extends Fl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ey}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ty extends bd{constructor(){super(new sd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nr extends Fl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Ty}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ay{constructor(t,e,n=0,s=1/0){this.ray=new qs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return rl(t,this,n,e),n.sort(Ph),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rl(t[s],this,n,e);return n.sort(Ph),n}}function Ph(i,t){return i.distance-t.distance}function rl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)rl(s[r],t,e,!0)}}class Ch{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lh=new A,fo=new A;class yn{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Lh.subVectors(t,this.start),fo.subVectors(this.end,this.start);const n=fo.dot(fo);let r=fo.dot(Lh)/n;return e&&(r=Ie(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Dh extends hd{constructor(t=10,e=10,n=4473924,s=8947848){n=new ne(n),s=new ne(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let f=0,d=0,g=-o;f<=e;f++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const x=f===r?n:s;x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3,x.toArray(l,d),d+=3}const u=new Ye;u.setAttribute("position",new Me(c,3)),u.setAttribute("color",new Me(l,3));const h=new Ll({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const po=new ae;class Ry extends hd{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Ye;r.setIndex(new Re(n,1)),r.setAttribute("position",new Re(s,3)),super(r,new Ll({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&po.setFromObject(this.object),po.isEmpty())return;const e=po.min,n=po.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const Ih={type:"change"},mc={type:"start"},Uh={type:"end"},mo=new qs,Nh=new Tn,Py=Math.cos(70*Om.DEG2RAD);class Ed extends $i{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Ut),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ut),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ih),n.update(),r=s.NONE},this.update=function(){const I=new A,dt=new Wi().setFromUnitVectors(t.up,new A(0,1,0)),Lt=dt.clone().invert(),Tt=new A,ut=new Wi,z=new A,pt=2*Math.PI;return function(Ot=null){const Nt=n.object.position;I.copy(Nt).sub(n.target),I.applyQuaternion(dt),o.setFromVector3(I),n.autoRotate&&r===s.NONE&&F(w(Ot)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Jt=n.minAzimuthAngle,U=n.maxAzimuthAngle;isFinite(Jt)&&isFinite(U)&&(Jt<-Math.PI?Jt+=pt:Jt>Math.PI&&(Jt-=pt),U<-Math.PI?U+=pt:U>Math.PI&&(U-=pt),Jt<=U?o.theta=Math.max(Jt,Math.min(U,o.theta)):o.theta=o.theta>(Jt+U)/2?Math.max(Jt,o.theta):Math.min(U,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?o.radius=st(o.radius):o.radius=st(o.radius*l),I.setFromSpherical(o),I.applyQuaternion(Lt),Nt.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let k=!1;if(n.zoomToCursor&&b){let tt=null;if(n.object.isPerspectiveCamera){const St=I.length();tt=st(St*l);const Bt=St-tt;n.object.position.addScaledVector(y,Bt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const St=new A(E.x,E.y,0);St.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),k=!0;const Bt=new A(E.x,E.y,0);Bt.unproject(n.object),n.object.position.sub(Bt).add(St),n.object.updateMatrixWorld(),tt=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(mo.origin.copy(n.object.position),mo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(mo.direction))<Py?t.lookAt(n.target):(Nh.setFromNormalAndCoplanarPoint(n.object.up,n.target),mo.intersectPlane(Nh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),k=!0);return l=1,b=!1,k||Tt.distanceToSquared(n.object.position)>a||8*(1-ut.dot(n.object.quaternion))>a||z.distanceToSquared(n.target)>0?(n.dispatchEvent(Ih),Tt.copy(n.object.position),ut.copy(n.object.quaternion),z.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",W),n.domElement.removeEventListener("wheel",rt),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",W),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ut),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Ch,c=new Ch;let l=1;const u=new A,h=new ht,f=new ht,d=new ht,g=new ht,x=new ht,m=new ht,p=new ht,v=new ht,_=new ht,y=new A,E=new ht;let b=!1;const S=[],R={};let M=!1;function w(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function D(I){const dt=Math.abs(I*.01);return Math.pow(.95,n.zoomSpeed*dt)}function F(I){c.theta-=I}function H(I){c.phi-=I}const L=function(){const I=new A;return function(Lt,Tt){I.setFromMatrixColumn(Tt,0),I.multiplyScalar(-Lt),u.add(I)}}(),O=function(){const I=new A;return function(Lt,Tt){n.screenSpacePanning===!0?I.setFromMatrixColumn(Tt,1):(I.setFromMatrixColumn(Tt,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(Lt),u.add(I)}}(),G=function(){const I=new A;return function(Lt,Tt){const ut=n.domElement;if(n.object.isPerspectiveCamera){const z=n.object.position;I.copy(z).sub(n.target);let pt=I.length();pt*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Lt*pt/ut.clientHeight,n.object.matrix),O(2*Tt*pt/ut.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Lt*(n.object.right-n.object.left)/n.object.zoom/ut.clientWidth,n.object.matrix),O(Tt*(n.object.top-n.object.bottom)/n.object.zoom/ut.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Q(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(I,dt){if(!n.zoomToCursor)return;b=!0;const Lt=n.domElement.getBoundingClientRect(),Tt=I-Lt.left,ut=dt-Lt.top,z=Lt.width,pt=Lt.height;E.x=Tt/z*2-1,E.y=-(ut/pt)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function st(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function it(I){h.set(I.clientX,I.clientY)}function _t(I){Y(I.clientX,I.clientX),p.set(I.clientX,I.clientY)}function Z(I){g.set(I.clientX,I.clientY)}function ct(I){f.set(I.clientX,I.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const dt=n.domElement;F(2*Math.PI*d.x/dt.clientHeight),H(2*Math.PI*d.y/dt.clientHeight),h.copy(f),n.update()}function Mt(I){v.set(I.clientX,I.clientY),_.subVectors(v,p),_.y>0?Q(D(_.y)):_.y<0&&K(D(_.y)),p.copy(v),n.update()}function Ct(I){x.set(I.clientX,I.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(x),n.update()}function bt(I){Y(I.clientX,I.clientY),I.deltaY<0?K(D(I.deltaY)):I.deltaY>0&&Q(D(I.deltaY)),n.update()}function zt(I){let dt=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),dt=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),dt=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),dt=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),dt=!0;break}dt&&(I.preventDefault(),n.update())}function Ht(I){if(S.length===1)h.set(I.pageX,I.pageY);else{const dt=Et(I),Lt=.5*(I.pageX+dt.x),Tt=.5*(I.pageY+dt.y);h.set(Lt,Tt)}}function Rt(I){if(S.length===1)g.set(I.pageX,I.pageY);else{const dt=Et(I),Lt=.5*(I.pageX+dt.x),Tt=.5*(I.pageY+dt.y);g.set(Lt,Tt)}}function kt(I){const dt=Et(I),Lt=I.pageX-dt.x,Tt=I.pageY-dt.y,ut=Math.sqrt(Lt*Lt+Tt*Tt);p.set(0,ut)}function B(I){n.enableZoom&&kt(I),n.enablePan&&Rt(I)}function gt(I){n.enableZoom&&kt(I),n.enableRotate&&Ht(I)}function nt(I){if(S.length==1)f.set(I.pageX,I.pageY);else{const Lt=Et(I),Tt=.5*(I.pageX+Lt.x),ut=.5*(I.pageY+Lt.y);f.set(Tt,ut)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const dt=n.domElement;F(2*Math.PI*d.x/dt.clientHeight),H(2*Math.PI*d.y/dt.clientHeight),h.copy(f)}function ft(I){if(S.length===1)x.set(I.pageX,I.pageY);else{const dt=Et(I),Lt=.5*(I.pageX+dt.x),Tt=.5*(I.pageY+dt.y);x.set(Lt,Tt)}m.subVectors(x,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(x)}function et(I){const dt=Et(I),Lt=I.pageX-dt.x,Tt=I.pageY-dt.y,ut=Math.sqrt(Lt*Lt+Tt*Tt);v.set(0,ut),_.set(0,Math.pow(v.y/p.y,n.zoomSpeed)),Q(_.y),p.copy(v);const z=(I.pageX+dt.x)*.5,pt=(I.pageY+dt.y)*.5;Y(z,pt)}function Dt(I){n.enableZoom&&et(I),n.enablePan&&ft(I)}function xt(I){n.enableZoom&&et(I),n.enableRotate&&nt(I)}function P(I){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",W)),Yt(I),I.pointerType==="touch"?Xt(I):at(I))}function T(I){n.enabled!==!1&&(I.pointerType==="touch"?ot(I):lt(I))}function W(I){Gt(I),S.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",W)),n.dispatchEvent(Uh),r=s.NONE}function at(I){let dt;switch(I.button){case 0:dt=n.mouseButtons.LEFT;break;case 1:dt=n.mouseButtons.MIDDLE;break;case 2:dt=n.mouseButtons.RIGHT;break;default:dt=-1}switch(dt){case Ki.DOLLY:if(n.enableZoom===!1)return;_t(I),r=s.DOLLY;break;case Ki.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;Z(I),r=s.PAN}else{if(n.enableRotate===!1)return;it(I),r=s.ROTATE}break;case Ki.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;it(I),r=s.ROTATE}else{if(n.enablePan===!1)return;Z(I),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(mc)}function lt(I){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;ct(I);break;case s.DOLLY:if(n.enableZoom===!1)return;Mt(I);break;case s.PAN:if(n.enablePan===!1)return;Ct(I);break}}function rt(I){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(I.preventDefault(),n.dispatchEvent(mc),bt(Pt(I)),n.dispatchEvent(Uh))}function Pt(I){const dt=I.deltaMode,Lt={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(dt){case 1:Lt.deltaY*=16;break;case 2:Lt.deltaY*=100;break}return I.ctrlKey&&!M&&(Lt.deltaY*=10),Lt}function mt(I){I.key==="Control"&&(M=!0,document.addEventListener("keyup",wt,{passive:!0,capture:!0}))}function wt(I){I.key==="Control"&&(M=!1,document.removeEventListener("keyup",wt,{passive:!0,capture:!0}))}function Ut(I){n.enabled===!1||n.enablePan===!1||zt(I)}function Xt(I){switch(It(I),S.length){case 1:switch(n.touches.ONE){case Ji.ROTATE:if(n.enableRotate===!1)return;Ht(I),r=s.TOUCH_ROTATE;break;case Ji.PAN:if(n.enablePan===!1)return;Rt(I),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(I),r=s.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;gt(I),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(mc)}function ot(I){switch(It(I),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;nt(I),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ft(I),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(I),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(I),n.update();break;default:r=s.NONE}}function ie(I){n.enabled!==!1&&I.preventDefault()}function Yt(I){S.push(I.pointerId)}function Gt(I){delete R[I.pointerId];for(let dt=0;dt<S.length;dt++)if(S[dt]==I.pointerId){S.splice(dt,1);return}}function It(I){let dt=R[I.pointerId];dt===void 0&&(dt=new ht,R[I.pointerId]=dt),dt.set(I.pageX,I.pageY)}function Et(I){const dt=I.pointerId===S[0]?S[1]:S[0];return R[dt]}n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",P),n.domElement.addEventListener("pointercancel",W),n.domElement.addEventListener("wheel",rt,{passive:!1}),document.addEventListener("keydown",mt,{passive:!0,capture:!0}),this.update()}}class wd extends Cl{constructor(t=null){super();const e=new on;e.deleteAttribute("uv");const n=new ca({side:He}),s=new ca;let r=5;t!==null&&t._useLegacyLights===!1&&(r=900);const a=new wy(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new se(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const c=new se(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const l=new se(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const u=new se(e,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const h=new se(e,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const f=new se(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);const d=new se(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const g=new se(e,gs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const x=new se(e,gs(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const m=new se(e,gs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new se(e,gs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const v=new se(e,gs(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const _=new se(e,gs(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function gs(i){const t=new va;return t.color.setScalar(i),t}const jt=i=>new ca(i),N={post:jt({color:2368554,metalness:.75,roughness:.42}),rail:jt({color:3355452,metalness:.72,roughness:.4}),shelf:jt({color:4342348,metalness:.45,roughness:.62}),caster:jt({color:1315864,metalness:.35,roughness:.6}),foot:jt({color:1842210,metalness:.6,roughness:.45}),cardShroud:jt({color:2039590,metalness:.58,roughness:.32}),cardBack:jt({color:1644832,metalness:.45,roughness:.5}),shroud:jt({color:3881798,metalness:.62,roughness:.4}),shroudTop:jt({color:4868694,metalness:.55,roughness:.46}),vent:jt({color:1381658,metalness:.3,roughness:.82}),fanHub:jt({color:2302761,metalness:.4,roughness:.55}),fanBlade:jt({color:1842210,metalness:.3,roughness:.6}),bracket:jt({color:9869988,metalness:.72,roughness:.38}),nvGreen:jt({color:7780608,metalness:.3,roughness:.4,emissive:1914368,emissiveIntensity:.6}),pcb:jt({color:1014345,metalness:.22,roughness:.68}),pcbDark:jt({color:740656,metalness:.22,roughness:.72}),pcbBlack:jt({color:2105383,metalness:.3,roughness:.62}),armor:jt({color:11186360,metalness:.8,roughness:.34}),debugRed:jt({color:16722474,emissive:10031377,emissiveIntensity:1.1,metalness:.2,roughness:.5}),slot:jt({color:1447452,metalness:.35,roughness:.7}),gold:jt({color:13214283,metalness:.85,roughness:.35}),connector:jt({color:4540495,metalness:.74,roughness:.38}),chip:jt({color:2565934,metalness:.5,roughness:.45}),cap:jt({color:3421244,metalness:.5,roughness:.5}),heatsink:jt({color:3947589,metalness:.78,roughness:.32}),extrusion:jt({color:10133674,metalness:.78,roughness:.28}),extGroove:jt({color:6053992,metalness:.6,roughness:.45}),cable:jt({color:2368556,metalness:.18,roughness:.86}),power:jt({color:2499618,metalness:.22,roughness:.78}),aux:jt({color:3358797,metalness:.3,roughness:.7}),cablePlug:jt({color:1776417,metalness:.4,roughness:.55}),eth:jt({color:3232122,metalness:.14,roughness:.8}),udmFace:jt({color:15132650,metalness:.12,roughness:.45}),screen:jt({color:924716,metalness:.1,roughness:.2}),perf:jt({color:2829107,metalness:.65,roughness:.45}),filter:jt({color:3882562,metalness:.05,roughness:.96}),psuBody:jt({color:2434349,metalness:.62,roughness:.4}),psuGrille:jt({color:1513245,metalness:.4,roughness:.6}),noctua:jt({color:9067068,metalness:.18,roughness:.72}),noctuaRim:jt({color:5913128,metalness:.18,roughness:.72}),label:jt({color:14211294,metalness:.1,roughness:.8})};function q(i,t,e,n){const s=new se(new on(i,t,e),n);return s.castShadow=s.receiveShadow=!0,s}function V(i,t,e=0,n=0,s=0){return t.position.set(e,n,s),i.add(t),t}function Wt(i,t,e,n=28){const s=new se(new Ur(i,i,t,n),e);return s.castShadow=s.receiveShadow=!0,s}function vi(i,t=11){const e=new le;V(e,Wt(i*1.04,7,N.vent,40),0,-3.5,0);const n=new se(new ba(i*.97,i*.05,10,44),N.fanHub);n.rotation.x=Math.PI/2,n.castShadow=!0,e.add(n),V(e,Wt(i*.26,6,N.fanHub,24),0,1,0),V(e,Wt(i*.19,1.4,N.chip,20),0,4,0);for(let s=0;s<t;s++){const r=q(i*.7,.7,i*.38,N.fanBlade);r.position.x=i*.5,r.rotation.x=.62;const a=new le;a.add(r),a.position.y=.5,a.rotation.y=s/t*Math.PI*2,e.add(a)}return e}function sn(i){const t=[[-10,10],[-3,10],[-3,8.2],[-5.5,8.2],[-5.5,6],[5.5,6],[5.5,8.2],[3,8.2],[3,10]],e=[];for(let c=0;c<4;c++){const l=Math.cos(-c*Math.PI/2),u=Math.sin(-c*Math.PI/2);for(const[h,f]of t)e.push([h*l-f*u,h*u+f*l])}const n=new xd;e.forEach(([c,l],u)=>u?n.lineTo(c,l):n.moveTo(c,l)),n.closePath();const s=new nl;s.absarc(0,0,2.1,0,Math.PI*2,!0),n.holes.push(s);const r=new Ul(n,{depth:i,bevelEnabled:!1,curveSegments:10});r.rotateY(Math.PI/2),r.translate(-i/2,0,0);const a=new se(r,N.extrusion);a.castShadow=a.receiveShadow=!0;const o=new le;return o.add(a),o}const la={mcio:{mat:N.cable,r:3.4,plug:[13,6,17]},power12v:{mat:N.power,r:5.4,plug:[18,9,12]},aux6:{mat:N.aux,r:2.5,plug:[12,6,10]},atx:{mat:N.power,r:7,plug:[26,10,12]},cat6a:{mat:N.eth,r:3.6,plug:[12,8,16]}},Cy=i=>(la[i]||la.mcio).r;function go(i){const t=Math.abs(i.x),e=Math.abs(i.y),n=Math.abs(i.z);return t>=e&&t>=n?new A(Math.sign(i.x)||1,0,0):e>=n?new A(0,Math.sign(i.y)||1,0):new A(0,0,Math.sign(i.z)||1)}function Td(i,t,e={}){const{type:n="mcio",sag:s=45,route:r="drape"}=e,a=la[n]||la.mcio,o=new le;o.userData.part=n;const c=new A(...i),l=new A(...t);let u;if(e.vias)u=[c,...e.vias.map(m=>new A(m[0],m[1],m[2])),l];else if(r==="riser"){const m=e.backZ??-230,p=e.laneX??c.x;u=[c,new A(p,c.y+15,m),new A(p,(c.y+l.y)/2,m),new A(p,l.y-15,m),l]}else{const m=new A((c.x+l.x)/2,Math.min(c.y,l.y)-s,(c.z+l.z)/2-4),p=new A(c.x,c.y-Math.min(32,(c.y-m.y)*.6),c.z-1),v=new A(l.x,l.y-Math.min(32,(l.y-m.y)*.6),l.z-1);u=[c,p,m,v,l]}const h=e.na?go(new A(...e.na)):go(u[1].clone().sub(c)),f=e.nb?go(new A(...e.nb)):go(u[u.length-2].clone().sub(l));u.splice(1,0,c.clone().addScaledVector(h,Math.min(14,c.distanceTo(u[1])*.6))),u.splice(u.length-1,0,l.clone().addScaledVector(f,Math.min(14,l.distanceTo(u[u.length-2])*.6)));const d=new fd(u,!1,"centripetal"),g=Math.max(64,Math.min(220,Math.round(d.getLength()/5))),x=new se(new Nl(d,g,a.r,9,!1),a.mat);x.castShadow=!0,o.add(x),o.userData.samples=d.getPoints(56),o.userData.lengthMm=Math.round(d.getLength());for(const[m,p,v]of[[c,h,e.ta],[l,f,e.tb]]){const _=q(...a.plug,N.cablePlug);_.position.copy(m),_.lookAt(m.clone().add(p));const y=v||[0,0,1];p.y&&Math.abs(y[2])>=Math.abs(y[0])&&_.rotateZ(Math.PI/2),o.add(_)}return o}function or(i){return Td([-70,6,0],[70,6,0],{type:i,sag:24})}const Ad=44.45,Rd=25,jn=Rd*Ad,Ol=465.1,gc=600,ua=711.2,zs={W:445,D:700,LIP:40,EARS:482.6},Ls={L:266.7,H:111.8,T:40.6},_s=8,_c=56,Pd={W:150,H:86,L:210},Cd={W:20,PCB:1.6,L:125},Ly={udmShelfTop:133,switchShelfTop:510,gpuShelfTop:775},Mr=[],Ld=659222,Fh=55,Oh=55,xc=2;function Dd(){const i=new le,t=Ol/2,e=ua/2,n=t+21,s=n+Fh/2-xc/2;for(const r of[-1,1])for(const a of[-1,1]){V(i,q(Fh,jn+40,xc,N.post),r*n,jn/2-10,a*e),V(i,q(xc,jn+40,Oh,N.post),r*s,jn/2-10,a*(e-Oh/2));for(let o=0;o<Rd;o++)for(const c of[6.35,22.225,38.1])V(i,q(9.5,9.5,1.4,N.caster),r*t,o*Ad+c,a*(e+.7))}for(const r of[-1,1])for(const a of[-22,jn-22]){V(i,q(30,32,ua-340,N.post),r*n,a,0);for(const o of[-1,1])V(i,q(38,40,250,N.post),r*n,a,o*(e-125))}for(const r of[-1,1]){V(i,q(gc,5,80,N.post),0,jn+2.5,r*(e-40));for(const a of[-1,1])for(let o=0;o<4;o++)V(i,q(34,1.4,8,N.caster),a*(170+o*32),jn+5.2,r*(e-40))}for(const r of[-1,1])V(i,q(gc,95,55,N.post),0,-48,r*(e-28));for(const r of[-1,1])for(const a of[-1,1]){const o=r*(gc/2-45),c=a*(e-28);V(i,q(70,8,70,N.foot),o,-100,c),V(i,Wt(9,14,N.foot,14),o,-110,c);for(const l of[-1,1]){const u=Wt(28,10,N.caster,22);u.rotation.z=Math.PI/2,V(i,u,o+l*11,-145,c+8)}}for(const r of[-1,1])for(let a=0;a<6;a++){const o=130+a*160,c=r*(n-6),l=-345.6;V(i,q(6,44,2.5,N.rail),c,o,l),V(i,q(6,2.5,24,N.rail),c,o-22,l-12),V(i,q(6,14,2.5,N.rail),c,o-16,l-24)}return i}const Id=0,Dy=1,Iy=2,Bh=2,vc=1.25,zh=1,Sr=6*4+4+4,Ea=65535,Uy=Math.pow(2,-24),yc=Symbol("SKIP_GENERATION");function Ny(i){return i.index?i.index.count:i.attributes.position.count}function Zs(i){return Ny(i)/3}function Fy(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Oy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Fy(e,n);i.setIndex(new Re(s,1));for(let r=0;r<e;r++)s[r]=r}}function Ud(i,t){const e=Zs(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(e,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function Nd(i,t){if(!i.groups||!i.groups.length)return Ud(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const c of i.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(a,u))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],u=o[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function By(i,t){const e=Zs(i),n=Nd(i,t).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),e!==r}function Mc(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,x=-1/0,m=-1/0;for(let p=t*6,v=(t+e)*6;p<v;p+=6){const _=i[p+0],y=i[p+1],E=_-y,b=_+y;E<r&&(r=E),b>c&&(c=b),_<h&&(h=_),_>g&&(g=_);const S=i[p+2],R=i[p+3],M=S-R,w=S+R;M<a&&(a=M),w>l&&(l=w),S<f&&(f=S),S>x&&(x=S);const D=i[p+4],F=i[p+5],H=D-F,L=D+F;H<o&&(o=H),L>u&&(u=L),D<d&&(d=D),D>m&&(m=D)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,s[0]=h,s[1]=f,s[2]=d,s[3]=g,s[4]=x,s[5]=m}function zy(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=Zs(i),o=s.normalized;let c;t===null?(c=new Float32Array(a*6*4),e=0,n=a):(c=t,e=e||0,n=n||a);const l=s.array,u=s.offset||0;let h=3;s.isInterleavedBufferAttribute&&(h=s.data.stride);const f=["getX","getY","getZ"];for(let d=e;d<e+n;d++){const g=d*3,x=d*6;let m=g+0,p=g+1,v=g+2;r&&(m=r[m],p=r[p],v=r[v]),o||(m=m*h+u,p=p*h+u,v=v*h+u);for(let _=0;_<3;_++){let y,E,b;o?(y=s[f[_]](m),E=s[f[_]](p),b=s[f[_]](v)):(y=l[m+_],E=l[p+_],b=l[v+_]);let S=y;E<S&&(S=E),b<S&&(S=b);let R=y;E>R&&(R=E),b>R&&(R=b);const M=(R-S)/2,w=_*2;c[x+w+0]=S+M,c[x+w+1]=M+(Math.abs(S)+M)*Uy}}return c}function ye(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function kh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Hh(i,t){t.set(i)}function Gh(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function _o(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function ar(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Zn=32,ky=(i,t)=>i.candidate-t.candidate,ai=new Array(Zn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),xo=new Float32Array(6);function Hy(i,t,e,n,s,r){let a=-1,o=0;if(r===Id)a=kh(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===Dy)a=kh(i),a!==-1&&(o=Gy(e,n,s,a));else if(r===Iy){const c=ar(i);let l=vc*s;const u=n*6,h=(n+s)*6;for(let f=0;f<3;f++){const d=t[f],m=(t[f+3]-d)/Zn;if(s<Zn/4){const p=[...ai];p.length=s;let v=0;for(let y=u;y<h;y+=6,v++){const E=p[v];E.candidate=e[y+2*f],E.count=0;const{bounds:b,leftCacheBounds:S,rightCacheBounds:R}=E;for(let M=0;M<3;M++)R[M]=1/0,R[M+3]=-1/0,S[M]=1/0,S[M+3]=-1/0,b[M]=1/0,b[M+3]=-1/0;_o(y,e,b)}p.sort(ky);let _=s;for(let y=0;y<_;y++){const E=p[y];for(;y+1<_&&p[y+1].candidate===E.candidate;)p.splice(y+1,1),_--}for(let y=u;y<h;y+=6){const E=e[y+2*f];for(let b=0;b<_;b++){const S=p[b];E>=S.candidate?_o(y,e,S.rightCacheBounds):(_o(y,e,S.leftCacheBounds),S.count++)}}for(let y=0;y<_;y++){const E=p[y],b=E.count,S=s-E.count,R=E.leftCacheBounds,M=E.rightCacheBounds;let w=0;b!==0&&(w=ar(R)/c);let D=0;S!==0&&(D=ar(M)/c);const F=zh+vc*(w*b+D*S);F<l&&(a=f,l=F,o=E.candidate)}}else{for(let _=0;_<Zn;_++){const y=ai[_];y.count=0,y.candidate=d+m+_*m;const E=y.bounds;for(let b=0;b<3;b++)E[b]=1/0,E[b+3]=-1/0}for(let _=u;_<h;_+=6){let b=~~((e[_+2*f]-d)/m);b>=Zn&&(b=Zn-1);const S=ai[b];S.count++,_o(_,e,S.bounds)}const p=ai[Zn-1];Hh(p.bounds,p.rightCacheBounds);for(let _=Zn-2;_>=0;_--){const y=ai[_],E=ai[_+1];Gh(y.bounds,E.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let _=0;_<Zn-1;_++){const y=ai[_],E=y.count,b=y.bounds,R=ai[_+1].rightCacheBounds;E!==0&&(v===0?Hh(b,xo):Gh(b,xo,xo)),v+=E;let M=0,w=0;v!==0&&(M=ar(xo)/c);const D=s-v;D!==0&&(w=ar(R)/c);const F=zh+vc*(M*v+w*D);F<l&&(a=f,l=F,o=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function Gy(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}class Sc{constructor(){this.boundingData=new Float32Array(6)}}function Vy(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let h=t[a*3+u];t[a*3+u]=t[o*3+u],t[o*3+u]=h}for(let u=0;u<6;u++){let h=e[a*6+u];e[a*6+u]=e[o*6+u],e[o*6+u]=h}a++,o--}else return a}}function Wy(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){let u=i[a];i[a]=i[o],i[o]=u;for(let h=0;h<6;h++){let f=e[a*6+h];e[a*6+h]=e[o*6+h],e[o*6+h]=f}a++,o--}else return a}}function Ke(i,t){return t[i+15]===65535}function rn(i,t){return t[i+6]}function gn(i,t){return t[i+14]}function _n(i){return i+8}function xn(i,t){return t[i+6]}function Fd(i,t){return t[i+7]}let Od,mr,Yo,Bd;const Xy=Math.pow(2,32);function ol(i){return"count"in i?1:1+ol(i.left)+ol(i.right)}function qy(i,t,e){return Od=new Float32Array(e),mr=new Uint32Array(e),Yo=new Uint16Array(e),Bd=new Uint8Array(e),al(i,t)}function al(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)Od[e+a]=r[a];if(s)if(t.buffer){const a=t.buffer;Bd.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=Sr){const l=o/2;Ke(l,Yo)||(mr[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return mr[e+6]=a,Yo[n+14]=o,Yo[n+15]=Ea,i+Sr}else{const a=t.left,o=t.right,c=t.splitAxis;let l;if(l=al(i+Sr,a),l/4>Xy)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return mr[e+6]=l/4,l=al(l,o),mr[e+7]=c,l}}function Yy(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function $y(i,t,e,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=s,h=i._indirectBuffer,f=i.geometry,d=f.index?f.index.array:null,g=u?Wy:Vy,x=Zs(f),m=new Float32Array(6);let p=!1;const v=new Sc;return Mc(t,e,n,v.boundingData,m),y(v,e,n,m),v;function _(E){l&&l(E/x)}function y(E,b,S,R=null,M=0){if(!p&&M>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),S<=o||M>=r)return _(b+S),E.offset=b,E.count=S,E;const w=Hy(E.boundingData,R,t,b,S,c);if(w.axis===-1)return _(b+S),E.offset=b,E.count=S,E;const D=g(h,d,t,b,S,w);if(D===b||D===b+S)_(b+S),E.offset=b,E.count=S;else{E.splitAxis=w.axis;const F=new Sc,H=b,L=D-b;E.left=F,Mc(t,H,L,F.boundingData,m),y(F,H,L,m,M+1);const O=new Sc,G=D,Q=S-L;E.right=O,Mc(t,G,Q,O.boundingData,m),y(O,G,Q,m,M+1)}return E}}function Zy(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=Yy(e,t.useSharedArrayBuffer),By(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Oy(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=zy(e),r=t.indirect?Ud(e,t.range):Nd(e,t.range);i._roots=r.map(a=>{const o=$y(i,s,a.offset,a.count,t),c=ol(o),l=new n(Sr*c);return qy(0,o,l),l})}class ti{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],c=t.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}ti.prototype.setFromBox=function(){const i=new A;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);const h=e.dot(i);a=Math.min(h,a),o=Math.max(h,o)}this.min=a,this.max=o}}();const jy=function(){const i=new A,t=new A,e=new A;return function(s,r,a){const o=s.start,c=i,l=r.start,u=t;e.subVectors(o,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(u),f=u.dot(c),d=u.dot(u),g=e.dot(c),m=c.dot(c)*d-f*f;let p,v;m!==0?p=(h*f-g*d)/m:p=0,v=(h+p*f)/d,a.x=p,a.y=v}}(),Bl=function(){const i=new ht,t=new A,e=new A;return function(s,r,a,o){jy(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=s.start:u=s.end;let h;l<0?h=r.start:h=r.end;const f=t,d=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){a.copy(f),o.copy(h);return}else{a.copy(u),o.copy(d);return}}}}(),Ky=function(){const i=new A,t=new A,e=new Tn,n=new yn;return function(r,a){const{radius:o,center:c}=r,{a:l,b:u,c:h}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const x=a.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=o){const p=x.projectPoint(c,t);if(a.containsPoint(p))return!0}return!1}}(),Jy=1e-15;function bc(i){return Math.abs(i)<Jy}class Mn extends ge{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new A),this.satBounds=new Array(4).fill().map(()=>new ti),this.points=[this.a,this.b,this.c],this.sphere=new Zi,this.plane=new Tn,this.needsUpdate=!0}intersectsSphere(t){return Ky(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);const l=r[1],u=a[1];l.subVectors(t,e),u.setFromPoints(l,s);const h=r[2],f=a[2];h.subVectors(e,n),f.setFromPoints(h,s);const d=r[3],g=a[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}Mn.prototype.closestPointToSegment=function(){const i=new A,t=new A,e=new yn;return function(s,r=null,a=null){const{start:o,end:c}=s,l=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[d]),Bl(e,s,i,t),u=i.distanceToSquared(t),u<h&&(h=u,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(h)}}();Mn.prototype.intersectsTriangle=function(){const i=new Mn,t=new Array(3),e=new Array(3),n=new ti,s=new ti,r=new A,a=new A,o=new A,c=new A,l=new A,u=new yn,h=new yn,f=new yn,d=new A;function g(x,m,p){const v=x.points;let _=0,y=-1;for(let E=0;E<3;E++){const{start:b,end:S}=u;b.copy(v[E]),S.copy(v[(E+1)%3]),u.delta(a);const R=bc(m.distanceToPoint(b));if(bc(m.normal.dot(a))&&R){p.copy(u),_=2;break}const M=m.intersectLine(u,d);if(!M&&R&&d.copy(b),(M||R)&&!bc(d.distanceTo(S))){if(_<=1)(_===1?p.start:p.end).copy(d),R&&(y=_);else if(_>=2){(y===1?p.start:p.end).copy(d),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(m,p=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const _=this.plane,y=m.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){const E=this.satBounds,b=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let M=0;M<4;M++){const w=E[M],D=b[M];if(n.setFromPoints(D,e),w.isSeparated(n))return!1}const S=m.satBounds,R=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){const w=S[M],D=R[M];if(n.setFromPoints(D,t),w.isSeparated(n))return!1}for(let M=0;M<4;M++){const w=b[M];for(let D=0;D<4;D++){const F=R[D];if(r.crossVectors(w,F),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const E=g(this,y,h);if(E===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(E!==2)return!1;const b=g(m,_,f);if(b===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(b!==2)return!1;if(h.delta(o),f.delta(c),o.dot(c)<0){let H=f.start;f.start=f.end,f.end=H}const S=h.start.dot(o),R=h.end.dot(o),M=f.start.dot(o),w=f.end.dot(o),D=R<M,F=S<w;return S!==w&&M!==R&&D===F?!1:(p&&(l.subVectors(h.start,f.start),l.dot(o)>0?p.start.copy(h.start):p.start.copy(f.start),l.subVectors(h.end,f.end),l.dot(o)<0?p.end.copy(h.end):p.end.copy(f.end)),!0)}}}();Mn.prototype.distanceToPoint=function(){const i=new A;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Mn.prototype.distanceToTriangle=function(){const i=new A,t=new A,e=["a","b","c"],n=new yn,s=new yn;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=e[h],g=a[d];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<u&&(u=f,o&&o.copy(i),c&&c.copy(g));const x=this[d];a.closestPointToPoint(x,i),f=x.distanceToSquared(i),f<u&&(u=f,o&&o.copy(x),c&&c.copy(i))}for(let h=0;h<3;h++){const f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){const x=e[g],m=e[(g+1)%3];s.set(a[x],a[m]),Bl(n,s,i,t);const p=i.distanceToSquared(t);p<u&&(u=p,o&&o.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();class $e{constructor(t,e,n){this.isOrientedBox=!0,this.min=new A,this.max=new A,this.matrix=new oe,this.invMatrix=new oe,this.points=new Array(8).fill().map(()=>new A),this.satAxes=new Array(3).fill().map(()=>new A),this.satBounds=new Array(3).fill().map(()=>new ti),this.alignedSatBounds=new Array(3).fill().map(()=>new ti),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}$e.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*l|2*u|4*h,d=s[f];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){const u=a[l],h=r[l],f=1<<l,d=s[f];u.subVectors(o,d),h.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();$e.prototype.intersectsBox=function(){const i=new ti;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();$e.prototype.intersectsTriangle=function(){const i=new Mn,t=new Array(3),e=new ti,n=new ti,s=new A;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let f=0;f<3;f++){const d=o[f],g=c[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}const l=a.satBounds,u=a.satAxes,h=this.points;for(let f=0;f<3;f++){const d=l[f],g=u[f];if(e.setFromPoints(g,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){const d=c[f];for(let g=0;g<4;g++){const x=u[g];if(s.crossVectors(d,x),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}}();$e.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();$e.prototype.distanceToPoint=function(){const i=new A;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();$e.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new yn),e=new Array(12).fill().map(()=>new yn),n=new A,s=new A;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const u=o*o,h=a.min,f=a.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];s.copy(p).clamp(h,f);const v=p.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(p),l&&l.copy(s),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const _=(m+1)%3,y=(m+2)%3,E=p<<_|v<<y,b=1<<m|p<<_|v<<y,S=d[E],R=d[b];t[x].set(S,R);const w=i[m],D=i[_],F=i[y],H=e[x],L=H.start,O=H.end;L[w]=h[w],L[D]=p?h[D]:f[D],L[F]=v?h[F]:f[D],O[w]=f[w],O[D]=p?h[D]:f[D],O[F]=v?h[F]:f[D],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){s.x=m?f.x:h.x,s.y=p?f.y:h.y,s.z=v?f.z:h.z,this.closestPointToPoint(s,n);const _=s.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(s),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=t[m];for(let v=0;v<12;v++){const _=e[v];Bl(p,_,n,s);const y=n.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(s),y<u))return Math.sqrt(y)}}return Math.sqrt(g)}}();class zl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Qy extends zl{constructor(){super(()=>new Mn)}}const vn=new Qy;class tM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const fe=new tM;let pi,Ns;const xs=[],vo=new zl(()=>new ae);function eM(i,t,e,n,s,r){pi=vo.getPrimitive(),Ns=vo.getPrimitive(),xs.push(pi,Ns),fe.setBuffer(i._roots[t]);const a=cl(0,i.geometry,e,n,s,r);fe.clearBuffer(),vo.releasePrimitive(pi),vo.releasePrimitive(Ns),xs.pop(),xs.pop();const o=xs.length;return o>0&&(Ns=xs[o-1],pi=xs[o-2]),a}function cl(i,t,e,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=fe;let u=i*2;if(Ke(u,c)){const f=rn(i,l),d=gn(u,c);return ye(i,o,pi),n(f,d,!1,a,r+i,pi)}else{let w=function(F){const{uint16Array:H,uint32Array:L}=fe;let O=F*2;for(;!Ke(O,H);)F=_n(F),O=F*2;return rn(F,L)},D=function(F){const{uint16Array:H,uint32Array:L}=fe;let O=F*2;for(;!Ke(O,H);)F=xn(F,L),O=F*2;return rn(F,L)+gn(O,H)};const f=_n(i),d=xn(i,l);let g=f,x=d,m,p,v,_;if(s&&(v=pi,_=Ns,ye(g,o,v),ye(x,o,_),m=s(v),p=s(_),p<m)){g=d,x=f;const F=m;m=p,p=F,v=_}v||(v=pi,ye(g,o,v));const y=Ke(g*2,c),E=e(v,y,m,a+1,r+g);let b;if(E===Bh){const F=w(g),L=D(g)-F;b=n(F,L,!0,a+1,r+g,v)}else b=E&&cl(g,t,e,n,s,r,a+1);if(b)return!0;_=Ns,ye(x,o,_);const S=Ke(x*2,c),R=e(_,S,p,a+1,r+x);let M;if(R===Bh){const F=w(x),L=D(x)-F;M=n(F,L,!0,a+1,r+x,_)}else M=R&&cl(x,t,e,n,s,r,a+1);return!!M}}const cr=new A,Ec=new A;function nM(i,t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(cr.copy(t).clamp(u.min,u.max),cr.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<o&&f<a,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,cr);const f=t.distanceToSquared(cr);return f<o&&(Ec.copy(cr),o=f,c=h),f<r}}),o===1/0)return null;const l=Math.sqrt(o);return e.point?e.point.copy(Ec):e.point=Ec.clone(),e.distance=l,e.faceIndex=c,e}const vs=new A,ys=new A,Ms=new A,yo=new ht,Mo=new ht,So=new ht,Vh=new A,Wh=new A,Xh=new A,bo=new A;function iM(i,t,e,n,s,r,a,o){let c;if(r===He?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==pn,s),c===null)return null;const l=i.origin.distanceTo(s);return l<a||l>o?null:{distance:l,point:s.clone()}}function sM(i,t,e,n,s,r,a,o,c,l,u){vs.fromBufferAttribute(t,r),ys.fromBufferAttribute(t,a),Ms.fromBufferAttribute(t,o);const h=iM(i,vs,ys,Ms,bo,c,l,u);if(h){n&&(yo.fromBufferAttribute(n,r),Mo.fromBufferAttribute(n,a),So.fromBufferAttribute(n,o),h.uv=ge.getInterpolation(bo,vs,ys,Ms,yo,Mo,So,new ht)),s&&(yo.fromBufferAttribute(s,r),Mo.fromBufferAttribute(s,a),So.fromBufferAttribute(s,o),h.uv1=ge.getInterpolation(bo,vs,ys,Ms,yo,Mo,So,new ht)),e&&(Vh.fromBufferAttribute(e,r),Wh.fromBufferAttribute(e,a),Xh.fromBufferAttribute(e,o),h.normal=ge.getInterpolation(bo,vs,ys,Ms,Vh,Wh,Xh,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:a,c:o,normal:new A,materialIndex:0};ge.getNormal(vs,ys,Ms,f.normal),h.face=f,h.faceIndex=r}return h}function wa(i,t,e,n,s,r,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const h=i.index;i.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:f,normal:d,uv:g,uv1:x}=i.attributes,m=sM(e,f,d,g,x,c,l,u,t,r,a);return m?(m.faceIndex=n,s&&s.push(m),m):null}function Te(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,c=t+1,l=t+2;e&&(o=e.getX(o),c=e.getX(c),l=e.getX(l)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function rM(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,h=n+s;u<h;u++)wa(c,t,e,u,r,a,o)}function oM(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let h=n,f=n+s;h<f;h++){let d;d=wa(o,t,e,h,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function aM(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=u,Te(a,f*3,c,l),a.needsUpdate=!0,n(a,f,s,r))return!0}return!1}function cM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const x=f*2;if(o[x+15]===Ea){const p=a[f+6],v=o[x+14];let _=1/0,y=1/0,E=1/0,b=-1/0,S=-1/0,R=-1/0;for(let M=3*p,w=3*(p+v);M<w;M++){let D=n[M];const F=s.getX(D),H=s.getY(D),L=s.getZ(D);F<_&&(_=F),F>b&&(b=F),H<y&&(y=H),H>S&&(S=H),L<E&&(E=L),L>R&&(R=L)}return c[f+0]!==_||c[f+1]!==y||c[f+2]!==E||c[f+3]!==b||c[f+4]!==S||c[f+5]!==R?(c[f+0]=_,c[f+1]=y,c[f+2]=E,c[f+3]=b,c[f+4]=S,c[f+5]=R,!0):!1}else{const p=f+8,v=a[f+6],_=p+d,y=v+d;let E=g,b=!1,S=!1;t?E||(b=t.has(_),S=t.has(y),E=!b&&!S):(b=!0,S=!0);const R=E||b,M=E||S;let w=!1;R&&(w=h(p,d,E));let D=!1;M&&(D=h(v,d,E));const F=w||D;if(F)for(let H=0;H<3;H++){const L=p+H,O=v+H,G=c[L],Q=c[L+3],K=c[O],Y=c[O+3];c[f+H]=G<K?G:K,c[f+H+3]=Q>Y?Q:Y}return F}}}function yi(i,t,e,n,s){let r,a,o,c,l,u;const h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,x=e.origin.y,m=e.origin.z;let p=t[i],v=t[i+3],_=t[i+1],y=t[i+3+1],E=t[i+2],b=t[i+3+2];return h>=0?(r=(p-g)*h,a=(v-g)*h):(r=(v-g)*h,a=(p-g)*h),f>=0?(o=(_-x)*f,c=(y-x)*f):(o=(y-x)*f,c=(_-x)*f),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),d>=0?(l=(E-m)*d,u=(b-m)*d):(l=(b-m)*d,u=(E-m)*d),r>u||l>a)?!1:((l>r||r!==r)&&(r=l),(u<a||a!==a)&&(a=u),r<=s&&a>=n)}function lM(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,h=n+s;u<h;u++){let f=l?l[u]:u;wa(c,t,e,f,r,a,o)}}function uM(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let h=n,f=n+s;h<f;h++){let d;d=wa(o,t,e,c?c[h]:h,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function hM(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),Te(a,f*3,c,l),a.needsUpdate=!0,n(a,f,s,r))return!0}return!1}function fM(i,t,e,n,s,r,a){fe.setBuffer(i._roots[t]),ll(0,i,e,n,s,r,a),fe.clearBuffer()}function ll(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=fe,u=i*2;if(Ke(u,c)){const f=rn(i,l),d=gn(u,c);rM(t,e,n,f,d,s,r,a)}else{const f=_n(i);yi(f,o,n,r,a)&&ll(f,t,e,n,s,r,a);const d=xn(i,l);yi(d,o,n,r,a)&&ll(d,t,e,n,s,r,a)}}const dM=["x","y","z"];function pM(i,t,e,n,s,r){fe.setBuffer(i._roots[t]);const a=ul(0,i,e,n,s,r);return fe.clearBuffer(),a}function ul(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=fe;let l=i*2;if(Ke(l,o)){const h=rn(i,c),f=gn(l,o);return oM(t,e,n,h,f,s,r)}else{const h=Fd(i,c),f=dM[h],g=n.direction[f]>=0;let x,m;g?(x=_n(i),m=xn(i,c)):(x=xn(i,c),m=_n(i));const v=yi(x,a,n,s,r)?ul(x,t,e,n,s,r):null;if(v){const E=v.point[f];if(g?E<=a[m+h]:E>=a[m+h+3])return v}const y=yi(m,a,n,s,r)?ul(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const Eo=new ae,Ss=new Mn,bs=new Mn,lr=new oe,qh=new $e,wo=new $e;function mM(i,t,e,n){fe.setBuffer(i._roots[t]);const s=hl(0,i,e,n);return fe.clearBuffer(),s}function hl(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=fe;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),qh.set(e.boundingBox.min,e.boundingBox.max,n),s=qh),Ke(c,a)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,x=rn(i,o),m=gn(c,a);if(lr.copy(n).invert(),e.boundsTree)return ye(i,r,wo),wo.matrix.copy(lr),wo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>wo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x*3,y=(m+x)*3;_<y;_+=3)if(Te(bs,_,h,f),bs.needsUpdate=!0,v.intersectsTriangle(bs))return!0;return!1}});for(let p=x*3,v=(m+x)*3;p<v;p+=3){Te(Ss,p,h,f),Ss.a.applyMatrix4(lr),Ss.b.applyMatrix4(lr),Ss.c.applyMatrix4(lr),Ss.needsUpdate=!0;for(let _=0,y=d.count;_<y;_+=3)if(Te(bs,_,d,g),bs.needsUpdate=!0,Ss.intersectsTriangle(bs))return!0}}else{const u=i+8,h=o[i+6];return ye(u,r,Eo),!!(s.intersectsBox(Eo)&&hl(u,t,e,n,s)||(ye(h,r,Eo),s.intersectsBox(Eo)&&hl(h,t,e,n,s)))}}const To=new oe,wc=new $e,ur=new $e,gM=new A,_M=new A,xM=new A,vM=new A;function yM(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),wc.set(t.boundingBox.min,t.boundingBox.max,e),wc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,h=t.index,f=vn.getPrimitive(),d=vn.getPrimitive();let g=gM,x=_M,m=null,p=null;s&&(m=xM,p=vM);let v=1/0,_=null,y=null;return To.copy(e).invert(),ur.matrix.copy(To),i.shapecast({boundsTraverseOrder:E=>wc.distanceToBox(E),intersectsBounds:(E,b,S)=>S<v&&S<a?(b&&(ur.min.copy(E.min),ur.max.copy(E.max),ur.needsUpdate=!0),!0):!1,intersectsRange:(E,b)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:R=>ur.distanceToBox(R),intersectsBounds:(R,M,w)=>w<v&&w<a,intersectsRange:(R,M)=>{for(let w=R,D=R+M;w<D;w++){Te(d,3*w,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let F=E,H=E+b;F<H;F++){Te(f,3*F,l,c),f.needsUpdate=!0;const L=f.distanceToTriangle(d,g,m);if(L<v&&(x.copy(g),p&&p.copy(m),v=L,_=F,y=w),L<r)return!0}}}});{const S=Zs(t);for(let R=0,M=S;R<M;R++){Te(d,3*R,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let w=E,D=E+b;w<D;w++){Te(f,3*w,l,c),f.needsUpdate=!0;const F=f.distanceToTriangle(d,g,m);if(F<v&&(x.copy(g),p&&p.copy(m),v=F,_=w,y=R),F<r)return!0}}}}}),vn.releasePrimitive(f),vn.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(To),x.applyMatrix4(To),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function MM(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const x=f*2;if(o[x+15]===Ea){const p=a[f+6],v=o[x+14];let _=1/0,y=1/0,E=1/0,b=-1/0,S=-1/0,R=-1/0;for(let M=p,w=p+v;M<w;M++){const D=3*i.resolveTriangleIndex(M);for(let F=0;F<3;F++){let H=D+F;H=n?n[H]:H;const L=s.getX(H),O=s.getY(H),G=s.getZ(H);L<_&&(_=L),L>b&&(b=L),O<y&&(y=O),O>S&&(S=O),G<E&&(E=G),G>R&&(R=G)}}return c[f+0]!==_||c[f+1]!==y||c[f+2]!==E||c[f+3]!==b||c[f+4]!==S||c[f+5]!==R?(c[f+0]=_,c[f+1]=y,c[f+2]=E,c[f+3]=b,c[f+4]=S,c[f+5]=R,!0):!1}else{const p=f+8,v=a[f+6],_=p+d,y=v+d;let E=g,b=!1,S=!1;t?E||(b=t.has(_),S=t.has(y),E=!b&&!S):(b=!0,S=!0);const R=E||b,M=E||S;let w=!1;R&&(w=h(p,d,E));let D=!1;M&&(D=h(v,d,E));const F=w||D;if(F)for(let H=0;H<3;H++){const L=p+H,O=v+H,G=c[L],Q=c[L+3],K=c[O],Y=c[O+3];c[f+H]=G<K?G:K,c[f+H+3]=Q>Y?Q:Y}return F}}}function SM(i,t,e,n,s,r,a){fe.setBuffer(i._roots[t]),fl(0,i,e,n,s,r,a),fe.clearBuffer()}function fl(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=fe,u=i*2;if(Ke(u,c)){const f=rn(i,l),d=gn(u,c);lM(t,e,n,f,d,s,r,a)}else{const f=_n(i);yi(f,o,n,r,a)&&fl(f,t,e,n,s,r,a);const d=xn(i,l);yi(d,o,n,r,a)&&fl(d,t,e,n,s,r,a)}}const bM=["x","y","z"];function EM(i,t,e,n,s,r){fe.setBuffer(i._roots[t]);const a=dl(0,i,e,n,s,r);return fe.clearBuffer(),a}function dl(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=fe;let l=i*2;if(Ke(l,o)){const h=rn(i,c),f=gn(l,o);return uM(t,e,n,h,f,s,r)}else{const h=Fd(i,c),f=bM[h],g=n.direction[f]>=0;let x,m;g?(x=_n(i),m=xn(i,c)):(x=xn(i,c),m=_n(i));const v=yi(x,a,n,s,r)?dl(x,t,e,n,s,r):null;if(v){const E=v.point[f];if(g?E<=a[m+h]:E>=a[m+h+3])return v}const y=yi(m,a,n,s,r)?dl(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const Ao=new ae,Es=new Mn,ws=new Mn,hr=new oe,Yh=new $e,Ro=new $e;function wM(i,t,e,n){fe.setBuffer(i._roots[t]);const s=pl(0,i,e,n);return fe.clearBuffer(),s}function pl(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=fe;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Yh.set(e.boundingBox.min,e.boundingBox.max,n),s=Yh),Ke(c,a)){const u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,x=rn(i,o),m=gn(c,a);if(hr.copy(n).invert(),e.boundsTree)return ye(i,r,Ro),Ro.matrix.copy(hr),Ro.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>Ro.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x,y=m+x;_<y;_++)if(Te(ws,3*t.resolveTriangleIndex(_),h,f),ws.needsUpdate=!0,v.intersectsTriangle(ws))return!0;return!1}});for(let p=x,v=m+x;p<v;p++){const _=t.resolveTriangleIndex(p);Te(Es,3*_,h,f),Es.a.applyMatrix4(hr),Es.b.applyMatrix4(hr),Es.c.applyMatrix4(hr),Es.needsUpdate=!0;for(let y=0,E=d.count;y<E;y+=3)if(Te(ws,y,d,g),ws.needsUpdate=!0,Es.intersectsTriangle(ws))return!0}}else{const u=i+8,h=o[i+6];return ye(u,r,Ao),!!(s.intersectsBox(Ao)&&pl(u,t,e,n,s)||(ye(h,r,Ao),s.intersectsBox(Ao)&&pl(h,t,e,n,s)))}}const Po=new oe,Tc=new $e,fr=new $e,TM=new A,AM=new A,RM=new A,PM=new A;function CM(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Tc.set(t.boundingBox.min,t.boundingBox.max,e),Tc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,h=t.index,f=vn.getPrimitive(),d=vn.getPrimitive();let g=TM,x=AM,m=null,p=null;s&&(m=RM,p=PM);let v=1/0,_=null,y=null;return Po.copy(e).invert(),fr.matrix.copy(Po),i.shapecast({boundsTraverseOrder:E=>Tc.distanceToBox(E),intersectsBounds:(E,b,S)=>S<v&&S<a?(b&&(fr.min.copy(E.min),fr.max.copy(E.max),fr.needsUpdate=!0),!0):!1,intersectsRange:(E,b)=>{if(t.boundsTree){const S=t.boundsTree;return S.shapecast({boundsTraverseOrder:R=>fr.distanceToBox(R),intersectsBounds:(R,M,w)=>w<v&&w<a,intersectsRange:(R,M)=>{for(let w=R,D=R+M;w<D;w++){const F=S.resolveTriangleIndex(w);Te(d,3*F,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let H=E,L=E+b;H<L;H++){const O=i.resolveTriangleIndex(H);Te(f,3*O,l,c),f.needsUpdate=!0;const G=f.distanceToTriangle(d,g,m);if(G<v&&(x.copy(g),p&&p.copy(m),v=G,_=H,y=w),G<r)return!0}}}})}else{const S=Zs(t);for(let R=0,M=S;R<M;R++){Te(d,3*R,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let w=E,D=E+b;w<D;w++){const F=i.resolveTriangleIndex(w);Te(f,3*F,l,c),f.needsUpdate=!0;const H=f.distanceToTriangle(d,g,m);if(H<v&&(x.copy(g),p&&p.copy(m),v=H,_=w,y=R),H<r)return!0}}}}}),vn.releasePrimitive(f),vn.releasePrimitive(d),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Po),x.applyMatrix4(Po),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function LM(){return typeof SharedArrayBuffer<"u"}const br=new fe.constructor,ha=new fe.constructor,li=new zl(()=>new ae),Ts=new ae,As=new ae,Ac=new ae,Rc=new ae;let Pc=!1;function DM(i,t,e,n){if(Pc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Pc=!0;const s=i._roots,r=t._roots;let a,o=0,c=0;const l=new oe().copy(e).invert();for(let u=0,h=s.length;u<h;u++){br.setBuffer(s[u]),c=0;const f=li.getPrimitive();ye(0,br.float32Array,f),f.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(ha.setBuffer(r[d]),a=wn(0,0,e,l,n,o,c,0,0,f),ha.clearBuffer(),c+=r[d].length,!a);d++);if(li.releasePrimitive(f),br.clearBuffer(),o+=s[u].length,a)break}return Pc=!1,a}function wn(i,t,e,n,s,r=0,a=0,o=0,c=0,l=null,u=!1){let h,f;u?(h=ha,f=br):(h=br,f=ha);const d=h.float32Array,g=h.uint32Array,x=h.uint16Array,m=f.float32Array,p=f.uint32Array,v=f.uint16Array,_=i*2,y=t*2,E=Ke(_,x),b=Ke(y,v);let S=!1;if(b&&E)u?S=s(rn(t,p),gn(t*2,v),rn(i,g),gn(i*2,x),c,a+t,o,r+i):S=s(rn(i,g),gn(i*2,x),rn(t,p),gn(t*2,v),o,r+i,c,a+t);else if(b){const R=li.getPrimitive();ye(t,m,R),R.applyMatrix4(e);const M=_n(i),w=xn(i,g);ye(M,d,Ts),ye(w,d,As);const D=R.intersectsBox(Ts),F=R.intersectsBox(As);S=D&&wn(t,M,n,e,s,a,r,c,o+1,R,!u)||F&&wn(t,w,n,e,s,a,r,c,o+1,R,!u),li.releasePrimitive(R)}else{const R=_n(t),M=xn(t,p);ye(R,m,Ac),ye(M,m,Rc);const w=l.intersectsBox(Ac),D=l.intersectsBox(Rc);if(w&&D)S=wn(i,R,e,n,s,r,a,o,c+1,l,u)||wn(i,M,e,n,s,r,a,o,c+1,l,u);else if(w)if(E)S=wn(i,R,e,n,s,r,a,o,c+1,l,u);else{const F=li.getPrimitive();F.copy(Ac).applyMatrix4(e);const H=_n(i),L=xn(i,g);ye(H,d,Ts),ye(L,d,As);const O=F.intersectsBox(Ts),G=F.intersectsBox(As);S=O&&wn(R,H,n,e,s,a,r,c,o+1,F,!u)||G&&wn(R,L,n,e,s,a,r,c,o+1,F,!u),li.releasePrimitive(F)}else if(D)if(E)S=wn(i,M,e,n,s,r,a,o,c+1,l,u);else{const F=li.getPrimitive();F.copy(Rc).applyMatrix4(e);const H=_n(i),L=xn(i,g);ye(H,d,Ts),ye(L,d,As);const O=F.intersectsBox(Ts),G=F.intersectsBox(As);S=O&&wn(M,H,n,e,s,a,r,c,o+1,F,!u)||G&&wn(M,L,n,e,s,a,r,c,o+1,F,!u),li.releasePrimitive(F)}}return S}const Co=new $e,$h=new ae,IM={strategy:Id,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class kl{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:s.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=t,o=new kl(e,{...n,[yc]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=e.getIndex();if(c===null){const l=new Re(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...IM,[yc]:!1},e),e.useSharedArrayBuffer&&!LM())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[yc]||(Zy(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ae))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?MM:cM)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=r[l+15]===Ea;if(u){const h=s[o+6],f=r[l+14];t(c,u,new Float32Array(n,o*4,6),h,f)}else{const h=o+Sr/4,f=s[o+6],d=s[o+7];t(c,u,new Float32Array(n,o*4,6),d)||(a(h,c+1),a(f,c+1))}}}raycast(t,e=Nn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],c=e.isMaterial,l=Array.isArray(e),u=a.groups,h=c?e.side:e,f=this.indirect?SM:fM;for(let d=0,g=r.length;d<g;d++){const x=l?e[u[d].materialIndex].side:h,m=o.length;if(f(this,d,x,t,o,n,s),l){const p=u[d].materialIndex;for(let v=m,_=o.length;v<_;v++)o[v].face.materialIndex=p}}return o}raycastFirst(t,e=Nn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=e.isMaterial,c=Array.isArray(e);let l=null;const u=a.groups,h=o?e.side:e,f=this.indirect?EM:pM;for(let d=0,g=r.length;d<g;d++){const x=c?e[u[d].materialIndex].side:h,m=f(this,d,x,t,n,s);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[d].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?wM:mM;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){const e=vn.getPrimitive(),n=this.indirect?hM:aM;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const h=a;a=(f,d,g,x,m)=>h(f,d,g,x,m)?!0:n(f,d,this,o,g,x,e)}else a||(o?a=(h,f,d,g)=>n(h,f,this,o,d,g,e):a=(h,f,d)=>d);let c=!1,l=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(c=eM(this,h,r,a,s,l),c)break;l+=d.byteLength}return vn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=vn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Te(a,x*3,o,c)}:g=>{Te(a,g*3,o,c)},u=vn.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{const x=t.resolveTriangleIndex(g);Te(u,x*3,h,f)}:g=>{Te(u,g*3,h,f)};if(r){const g=(x,m,p,v,_,y,E,b)=>{for(let S=p,R=p+v;S<R;S++){d(S),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=x,w=x+m;M<w;M++)if(l(M),a.needsUpdate=!0,r(a,u,M,S,_,y,E,b))return!0}return!1};if(s){const x=s;s=function(m,p,v,_,y,E,b,S){return x(m,p,v,_,y,E,b,S)?!0:g(m,p,v,_,y,E,b,S)}}else s=g}return DM(this,t,e,s)}intersectsBox(t,e){return Co.set(t.min,t.max,e),Co.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Co.intersectsBox(n),intersectsTriangle:n=>Co.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?CM:yM)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return nM(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ye(0,new Float32Array(n),$h),t.union($h)}),t}}const zd=1e-6,UM=zd*.5,kd=Math.pow(10,-Math.log10(zd)),NM=UM*kd;function Un(i){return~~(i*kd+NM)}function FM(i){return`${Un(i.x)},${Un(i.y)}`}function Zh(i){return`${Un(i.x)},${Un(i.y)},${Un(i.z)}`}function OM(i){return`${Un(i.x)},${Un(i.y)},${Un(i.z)},${Un(i.w)}`}function BM(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Hd(){return typeof SharedArrayBuffer<"u"}function zM(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(n).set(s,0),new t(n)}function kM(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function HM(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=kM(e,n);i.setIndex(new Re(s,1));for(let r=0;r<e;r++)s[r]=r}}function GM(i){return i.index?i.index.count:i.attributes.position.count}function Hl(i){return GM(i)/3}const VM=1e-8,WM=new A;function XM(i){return~~(i/3)}function qM(i){return i%3}function jh(i,t){return i.start-t.start}function Kh(i,t){return WM.subVectors(t,i.origin).dot(i.direction)}function YM(i,t,e,n=VM){i.sort(jh),t.sort(jh);for(let o=0;o<i.length;o++){const c=i[o];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||i.splice(o+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const h=c.end;c.end=u.start,u.start=h}else if(c.start>=u.start&&c.end>=u.end){const h=u.end;u.end=c.start,c.start=h}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),a(u)&&(t.splice(l,1),l--),a(c)){i.splice(o,1),o--;break}}}s(i),s(t);function s(o){for(let c=0;c<o.length;c++)a(o[c])&&(o.splice(c,1),c--)}function r(o,c){return Math.abs(c-o)<n}function a(o){return Math.abs(o.end-o.start)<n}}const Jh=1e-5,Qh=1e-4;class $M{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(a(u,t)&&a(u,n))continue;const h=o(u,t),f=o(u,n),d=Math.min(h,f);d<s&&(s=d,r=u)}return r;function a(c,l){const u=c.origin.distanceTo(l.origin)>Jh;return c.direction.angleTo(l.direction)>Qh||u}function o(c,l){const u=c.origin.distanceTo(l.origin),h=c.direction.angleTo(l.direction);return u/Jh+h/Qh}}}const Cc=new A,Lc=new A,Lo=new qs;function ZM(i,t,e){const n=i.attributes,s=i.index,r=n.position,a=new Map,o=new Map,c=Array.from(t),l=new $M;for(let u=0,h=c.length;u<h;u++){const f=c[u],d=XM(f),g=qM(f);let x=3*d+g,m=3*d+(g+1)%3;s&&(x=s.getX(x),m=s.getX(m)),Cc.fromBufferAttribute(r,x),Lc.fromBufferAttribute(r,m),BM(Cc,Lc,Lo);let p,v=l.findClosestRay(Lo);v===null&&(v=Lo.clone(),l.addRay(v)),o.has(v)||o.set(v,{forward:[],reverse:[],ray:v}),p=o.get(v);let _=Kh(v,Cc),y=Kh(v,Lc);_>y&&([_,y]=[y,_]),Lo.direction.dot(v.direction)<0?p.reverse.push({start:_,end:y,index:f}):p.forward.push({start:_,end:y,index:f})}return o.forEach(({forward:u,reverse:h},f)=>{YM(u,h,a,e),u.length===0&&h.length===0&&o.delete(f)}),{disjointConnectivityMap:a,fragmentMap:o}}const jM=new ht,Dc=new A,KM=new ce,Ic=["","",""];class JM{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:s,degenerateEpsilon:r}=this,a=e?_:v,o=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,h=c.position;let f=Hl(t);const d=f;let g=0;n&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(f=~~(t.drawRange.count/3)));let x=this.data;(!x||x.length<3*d)&&(x=new Int32Array(3*d)),x.fill(-1);let m=0,p=new Set;for(let y=g,E=f*3+g;y<E;y+=3){const b=y;for(let S=0;S<3;S++){let R=b+S;u&&(R=u.getX(R)),Ic[S]=a(R)}for(let S=0;S<3;S++){const R=(S+1)%3,M=Ic[S],w=Ic[R],D=`${w}_${M}`;if(o.has(D)){const F=b+S,H=o.get(D);x[F]=H,x[H]=F,o.delete(D),m+=2,p.delete(H)}else{const F=`${M}_${w}`,H=b+S;o.set(F,H),p.add(H)}}}if(s){const{fragmentMap:y,disjointConnectivityMap:E}=ZM(t,p,r);p.clear(),y.forEach(({forward:b,reverse:S})=>{b.forEach(({index:R})=>p.add(R)),S.forEach(({index:R})=>p.add(R))}),this.unmatchedDisjointEdges=y,this.disjointConnections=E,m=f*3-p.size}this.matchedEdges=m,this.unmatchedEdges=p.size,this.data=x;function v(y){return Dc.fromBufferAttribute(h,y),Zh(Dc)}function _(y){let E="";for(let b=0,S=l.length;b<S;b++){const R=c[l[b]];let M;switch(R.itemSize){case 1:M=Un(R.getX(y));break;case 2:M=FM(jM.fromBufferAttribute(R,y));break;case 3:M=Zh(Dc.fromBufferAttribute(R,y));break;case 4:M=OM(KM.fromBufferAttribute(R,y));break}E!==""&&(E+="|"),E+=M}return E}}}class ei extends se{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new oe,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,s=e.elements;for(let r=0;r<16;r++)if(n[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Hd();if(n)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=zM(r.array)}if(t.boundsTree||(HM(t,{useSharedArrayBuffer:n}),t.boundsTree=new kl(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new JM(t)),!t.groupIndices){const s=Hl(t),r=new Uint16Array(s),a=t.groups;for(let o=0,c=a.length;o<c;o++){const{start:l,count:u}=a[o];for(let h=l/3,f=(l+u)/3;h<f;h++)r[h]=o}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const QM=1e-14,Uc=new A,tf=new A,ef=new A;function ui(i,t=QM){Uc.subVectors(i.b,i.a),tf.subVectors(i.c,i.a),ef.subVectors(i.b,i.c);const e=Uc.angleTo(tf),n=Uc.angleTo(ef),s=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(s)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const Nc=1e-10,dr=1e-10,t1=1e-10,Xn=new yn,be=new yn,qn=new A,Fc=new A,nf=new A,Do=new Tn,Oc=new Mn;class e1{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new ge),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class n1{constructor(){this.trianglePool=new e1,this.triangles=[],this.normal=new A,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:s}=this;if(Array.isArray(t))for(let r=0,a=t.length;r<a;r++){const o=t[r];if(r===0)o.getNormal(s);else if(Math.abs(1-o.getNormal(qn).dot(s))>Nc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=n.getTriangle();c.copy(o),e.push(c)}else{t.getNormal(s);const r=n.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(Fc).normalize(),Math.abs(1-Math.abs(Fc.dot(e)))<t1){this.coplanarTriangleUsed=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const a=(r+1)%3,o=s[r],c=s[a];qn.subVectors(c,o).normalize(),nf.crossVectors(Fc,qn),Do.setFromNormalAndCoplanarPoint(nf,o),this.splitByPlane(Do,t)}}else t.getPlane(Do),this.splitByPlane(Do,t)}splitByPlane(t,e){const{triangles:n,trianglePool:s}=this;Oc.copy(e),Oc.needsUpdate=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];if(!Oc.intersectsTriangle(o,Xn,!0))continue;const{a:c,b:l,c:u}=o;let h=0,f=-1,d=!1,g=[],x=[];const m=[c,l,u];for(let p=0;p<3;p++){const v=(p+1)%3;Xn.start.copy(m[p]),Xn.end.copy(m[v]);const _=t.distanceToPoint(Xn.start),y=t.distanceToPoint(Xn.end);if(Math.abs(_)<dr&&Math.abs(y)<dr){d=!0;break}if(_>0?g.push(p):x.push(p),Math.abs(_)<dr)continue;let E=!!t.intersectLine(Xn,qn);!E&&Math.abs(y)<dr&&(qn.copy(Xn.end),E=!0),E&&!(qn.distanceTo(Xn.start)<Nc)&&(qn.distanceTo(Xn.end)<Nc&&(f=p),h===0?be.start.copy(qn):be.end.copy(qn),h++)}if(!d&&h===2&&be.distance()>dr)if(f!==-1){f=(f+1)%3;let p=0;p===f&&(p=(p+1)%3);let v=p+1;v===f&&(v=(v+1)%3);const _=s.getTriangle();_.a.copy(m[v]),_.b.copy(be.end),_.c.copy(be.start),ui(_)||n.push(_),o.a.copy(m[p]),o.b.copy(be.start),o.c.copy(be.end),ui(o)&&(n.splice(r,1),r--,a--)}else{const p=g.length>=2?x[0]:g[0];if(p===0){let b=be.start;be.start=be.end,be.end=b}const v=(p+1)%3,_=(p+2)%3,y=s.getTriangle(),E=s.getTriangle();m[v].distanceToSquared(be.start)<m[_].distanceToSquared(be.end)?(y.a.copy(m[v]),y.b.copy(be.start),y.c.copy(be.end),E.a.copy(m[v]),E.b.copy(m[_]),E.c.copy(be.start)):(y.a.copy(m[_]),y.b.copy(be.start),y.c.copy(be.end),E.a.copy(m[v]),E.b.copy(m[_]),E.c.copy(be.end)),o.a.copy(m[p]),o.b.copy(be.end),o.c.copy(be.start),ui(y)||n.push(y),ui(E)||n.push(E),ui(o)&&(n.splice(r,1),r--,a--)}else h===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function i1(i){return i=~~i,i+4-i%4}class sf{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Hd()?SharedArrayBuffer:ArrayBuffer,s=new e(new n(i1(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[n+s]=t[s];this.length+=t.length}clear(){this.length=0}}class s1{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let s=0;for(let r=0;r<e;r++){const a=n[r];s+=a[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in n){const a=n[r],o=new sf(a.type);o.itemSize=a.itemSize,o.normalized=a.normalized,s[r]=o}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,s){const{groupAttributes:r}=this,o=r[0][t];if(o){if(o.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=n,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new sf(e);u.itemSize=n,u.normalized=s,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class rf{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:s}=this;n[t]||(n[t]=[],s.push(t)),n[t].push(e)}}const Gd=0,Fr=1,r1=2,o1=3,a1=4,Vd=5,Wd=6,hn=new qs,of=new oe,Ve=new ge,Yn=new A,af=new ce,cf=new ce,lf=new ce,Bc=new ce,Io=new ce,Uo=new ce,uf=new yn,zc=new A,kc=1e-8,c1=1e-15,Oi=-1,Bi=1,$o=-2,Zo=2,Er=0,Pi=1,Gl=2,l1=1e-14;let jo=null;function hf(i){jo=i}function Xd(i,t){i.getMidpoint(hn.origin),i.getNormal(hn.direction);const e=t.raycastFirst(hn,pn);return!!(e&&hn.direction.dot(e.face.normal)>0)?Oi:Bi}function u1(i,t){function e(){return Math.random()-.5}i.getNormal(zc),hn.direction.copy(zc),i.getMidpoint(hn.origin);const n=3;let s=0,r=1/0;for(let a=0;a<n;a++){hn.direction.x+=e()*kc,hn.direction.y+=e()*kc,hn.direction.z+=e()*kc,hn.direction.multiplyScalar(-1);const o=t.raycastFirst(hn,pn);if(!!(o&&hn.direction.dot(o.face.normal)>0)&&s++,o!==null&&(r=Math.min(r,o.distance)),r<=c1)return o.face.normal.dot(zc)>0?Zo:$o;if(s/n>.5||(a-s+1)/n>.5)break}return s/n>.5?Oi:Bi}function h1(i,t){const e=new rf,n=new rf;return of.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,of,{intersectsTriangles(s,r,a,o){if(!ui(s)&&!ui(r)){let c=s.intersectsTriangle(r,uf,!0);if(!c){const l=s.plane,u=r.plane,h=l.normal,f=u.normal;h.dot(f)===1&&Math.abs(l.constant-u.constant)<l1&&(c=!0)}if(c){let l=i.geometry.boundsTree.resolveTriangleIndex(a),u=t.geometry.boundsTree.resolveTriangleIndex(o);e.add(l,u),n.add(u,l),jo&&(jo.addEdge(uf),jo.addIntersectingTriangles(a,s,o,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function f1(i,t,e,n,s,r,a=!1){const o=e.attributes,c=e.index,l=i*3,u=c.getX(l+0),h=c.getX(l+1),f=c.getX(l+2);for(const d in r){const g=o[d],x=r[d];if(!(d in o))throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);const m=g.itemSize;d==="position"?(Ve.a.fromBufferAttribute(g,u).applyMatrix4(n),Ve.b.fromBufferAttribute(g,h).applyMatrix4(n),Ve.c.fromBufferAttribute(g,f).applyMatrix4(n),Hc(Ve.a,Ve.b,Ve.c,t,3,x,a)):d==="normal"?(Ve.a.fromBufferAttribute(g,u).applyNormalMatrix(s),Ve.b.fromBufferAttribute(g,h).applyNormalMatrix(s),Ve.c.fromBufferAttribute(g,f).applyNormalMatrix(s),a&&(Ve.a.multiplyScalar(-1),Ve.b.multiplyScalar(-1),Ve.c.multiplyScalar(-1)),Hc(Ve.a,Ve.b,Ve.c,t,3,x,a,!0)):(af.fromBufferAttribute(g,u),cf.fromBufferAttribute(g,h),lf.fromBufferAttribute(g,f),Hc(af,cf,lf,t,m,x,a))}}function d1(i,t,e,n,s,r,a,o=!1){Gc(i,n,s,r,a,o),Gc(o?e:t,n,s,r,a,o),Gc(o?t:e,n,s,r,a,o)}function qd(i,t,e=!1){switch(i){case Gd:if(t===Bi||t===Zo&&!e)return Pi;break;case Fr:if(e){if(t===Oi)return Er}else if(t===Bi||t===$o)return Pi;break;case r1:if(e){if(t===Bi||t===$o)return Pi}else if(t===Oi)return Er;break;case a1:if(t===Oi)return Er;if(t===Bi)return Pi;break;case o1:if(t===Oi||t===Zo&&!e)return Pi;break;case Vd:if(!e&&(t===Bi||t===$o))return Pi;break;case Wd:if(!e&&(t===Oi||t===Zo))return Pi;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Gl}function Hc(i,t,e,n,s,r,a=!1,o=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};Bc.set(0,0,0,0).addScaledVector(i,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),Io.set(0,0,0,0).addScaledVector(i,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),Uo.set(0,0,0,0).addScaledVector(i,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),o&&(Bc.normalize(),Io.normalize(),Uo.normalize()),c(Bc),a?(c(Uo),c(Io)):(c(Io),c(Uo))}function Gc(i,t,e,n,s,r=!1){for(const a in s){const o=t[a],c=s[a];if(!(a in t))throw new Error(`CSG Operations: Attribute ${a} no available on geometry.`);const l=o.itemSize;a==="position"?(Yn.fromBufferAttribute(o,i).applyMatrix4(e),c.push(Yn.x,Yn.y,Yn.z)):a==="normal"?(Yn.fromBufferAttribute(o,i).applyNormalMatrix(n),r&&Yn.multiplyScalar(-1),c.push(Yn.x,Yn.y,Yn.z)):(c.push(o.getX(i)),l>1&&c.push(o.getY(i)),l>2&&c.push(o.getZ(i)),l>3&&c.push(o.getW(i)))}}class p1{constructor(t){this.triangle=new ge().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ge().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class ff{constructor(){this.data={}}addTriangleIntersection(t,e,n,s){const{data:r}=this;r[t]||(r[t]=new p1(e)),r[t].addTriangle(n,s)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const s in e)n.push(e[s].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,s=new Set,r=[],a=o=>{if(n[o])if(e!==null)n[o].intersects[e]&&r.push(n[o].intersects[e]);else{const c=n[o].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(t!==null)a(t);else for(const o in n)a(o);return r}reset(){this.data={}}}class m1{constructor(){this.enabled=!1,this.triangleIntersectsA=new ff,this.triangleIntersectsB=new ff,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,s){const{triangleIntersectsA:r,triangleIntersectsB:a}=this;r.addTriangleIntersection(t,e,n,s),a.addTriangleIntersection(n,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),hf(this))}complete(){this.enabled&&hf(null)}}const mi=new oe,fa=new te,Ci=new ge,No=new ge,ci=new ge,Fo=new ge,Cn=[],Gi=[];function g1(i){for(const t of i)return t}function _1(i,t,e,n,s,r={}){const{useGroups:a=!0}=r,{aIntersections:o,bIntersections:c}=h1(i,t),l=[];let u=null,h;return h=a?0:-1,df(i,t,o,e,!1,n,s,h),pf(i,t,o,e,!1,s,h),e.findIndex(d=>d!==Wd&&d!==Vd)!==-1&&(h=a?i.geometry.groups.length||1:-1,df(t,i,c,e,!0,n,s,h),pf(t,i,c,e,!0,s,h)),Cn.length=0,Gi.length=0,{groups:l,materials:u}}function df(i,t,e,n,s,r,a,o=0){const c=i.matrixWorld.determinant()<0;mi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),fa.getNormalMatrix(i.matrixWorld).multiplyScalar(c?-1:1);const l=i.geometry.groupIndices,u=i.geometry.index,h=i.geometry.attributes.position,f=t.geometry.boundsTree,d=t.geometry.index,g=t.geometry.attributes.position,x=e.ids,m=e.intersectionSet;for(let p=0,v=x.length;p<v;p++){const _=x[p],y=o===-1?0:l[_]+o,E=3*_,b=u.getX(E+0),S=u.getX(E+1),R=u.getX(E+2);Ci.a.fromBufferAttribute(h,b).applyMatrix4(mi),Ci.b.fromBufferAttribute(h,S).applyMatrix4(mi),Ci.c.fromBufferAttribute(h,R).applyMatrix4(mi),r.reset(),r.initialize(Ci);const M=m[_];for(let D=0,F=M.length;D<F;D++){const H=3*M[D],L=d.getX(H+0),O=d.getX(H+1),G=d.getX(H+2);No.a.fromBufferAttribute(g,L),No.b.fromBufferAttribute(g,O),No.c.fromBufferAttribute(g,G),r.splitByTriangle(No)}const w=r.triangles;for(let D=0,F=w.length;D<F;D++){const H=w[D],L=r.coplanarTriangleUsed?u1(H,f):Xd(H,f);Cn.length=0,Gi.length=0;for(let O=0,G=n.length;O<G;O++){const Q=qd(n[O],L,s);Q!==Gl&&(Gi.push(Q),Cn.push(a[O].getGroupAttrSet(y)))}if(Cn.length!==0){Ci.getBarycoord(H.a,Fo.a),Ci.getBarycoord(H.b,Fo.b),Ci.getBarycoord(H.c,Fo.c);for(let O=0,G=Cn.length;O<G;O++){const Q=Cn[O],Y=Gi[O]===Er;f1(_,Fo,i.geometry,i.matrixWorld,fa,Q,c!==Y)}}}}return x.length}function pf(i,t,e,n,s,r,a=0){const o=i.matrixWorld.determinant()<0;mi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),fa.getNormalMatrix(i.matrixWorld).multiplyScalar(o?-1:1);const c=t.geometry.boundsTree,l=i.geometry.groupIndices,u=i.geometry.index,h=i.geometry.attributes,f=h.position,d=[],g=i.geometry.halfEdges,x=new Set,m=Hl(i.geometry);for(let p=0,v=m;p<v;p++)p in e.intersectionSet||x.add(p);for(;x.size>0;){const p=g1(x);x.delete(p),d.push(p);const v=3*p,_=u.getX(v+0),y=u.getX(v+1),E=u.getX(v+2);ci.a.fromBufferAttribute(f,_).applyMatrix4(mi),ci.b.fromBufferAttribute(f,y).applyMatrix4(mi),ci.c.fromBufferAttribute(f,E).applyMatrix4(mi);const b=Xd(ci,c);Gi.length=0,Cn.length=0;for(let S=0,R=n.length;S<R;S++){const M=qd(n[S],b,s);M!==Gl&&(Gi.push(M),Cn.push(r[S]))}for(;d.length>0;){const S=d.pop();for(let R=0;R<3;R++){const M=g.getSiblingTriangleIndex(S,R);M!==-1&&x.has(M)&&(d.push(M),x.delete(M))}if(Cn.length!==0){const R=3*S,M=u.getX(R+0),w=u.getX(R+1),D=u.getX(R+2),F=a===-1?0:l[S]+a;if(ci.a.fromBufferAttribute(f,M),ci.b.fromBufferAttribute(f,w),ci.c.fromBufferAttribute(f,D),!ui(ci))for(let H=0,L=Cn.length;H<L;H++){const O=Gi[H],G=Cn[H].getGroupAttrSet(F),Q=O===Er;d1(M,w,D,h,i.matrixWorld,fa,G,Q!==o)}}}}}function x1(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const s=e.start,r=n.start+n.count;n.start=s,n.count=r-s,i.splice(t,1),t--}}}function v1(i,t,e,n){e.clear();const s=i.attributes;for(let r=0,a=n.length;r<a;r++){const o=n[r],c=s[o];e.initializeArray(o,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)n.includes(r)||e.delete(r);for(const r in t.attributes)n.includes(r)||(t.deleteAttribute(r),t.dispose())}function y1(i,t,e){let n=!1,s=-1;const r=i.attributes,a=t.groupAttributes[0];for(const c in a){const l=t.getTotalLength(c),u=t.getType(c),h=t.getItemSize(c),f=t.getNormalized(c);let d=r[c];(!d||d.array.length<l)&&(d=new Re(new u(l),h,f),i.setAttribute(c,d),n=!0);let g=0;for(let x=0,m=Math.min(e.length,t.groupCount);x<m;x++){const p=e[x].index,{array:v,type:_,length:y}=t.groupAttributes[p][c],E=new _(v.buffer,0,y);d.array.set(E,g),g+=E.length}d.needsUpdate=!0,s=l/d.itemSize}if(i.index){const c=i.index.array;if(c.length<s)i.index=null,n=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let o=0;i.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:h}=e[c],f=t.getCount(u);f!==0&&(i.addGroup(o,f,h),o+=f)}i.setDrawRange(0,s),i.boundsTree=null,n&&i.dispose()}function mf(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class M1{constructor(){this.triangleSplitter=new n1,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new m1}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,s=new ei){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s],r=!1),s.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:a,attributeData:o,attributes:c,useGroups:l,consolidateGroups:u,debug:h}=this;for(;o.length<s.length;)o.push(new s1);s.forEach((p,v)=>{v1(t.geometry,p.geometry,o[v],c)}),h.init(),_1(t,e,n,a,o,{useGroups:l}),h.complete();const f=this.getGroupRanges(t.geometry),d=mf(f,t.material),g=this.getGroupRanges(e.geometry),x=mf(g,e.material);g.forEach(p=>p.materialIndex+=d.length);let m=[...f,...g].map((p,v)=>({...p,index:v}));if(l){const p=[...d,...x];u&&(m=m.map(_=>{const y=p[_.materialIndex];return _.materialIndex=p.indexOf(y),_}).sort((_,y)=>_.materialIndex-y.materialIndex));const v=[];for(let _=0,y=p.length;_<y;_++){let E=!1;for(let b=0,S=m.length;b<S;b++){const R=m[b];R.materialIndex===_&&(E=!0,R.materialIndex=v.length)}E&&v.push(p[_])}s.forEach(_=>{_.material=v})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(p=>{p.material=d[0]});return s.forEach((p,v)=>{const _=p.geometry;y1(_,o[v],m),u&&x1(_.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new ei){t.updateMatrixWorld(!0);const n=(r,a)=>{const o=r.children;for(let c=0,l=o.length;c<l;c++){const u=o[c];u.isOperationGroup?n(u,a):a(u)}},s=r=>{const a=r.children;let o=!1;for(let l=0,u=a.length;l<u;l++){const h=a[l];o=s(h)||o}const c=r.isDirty();if(c&&r.markUpdated(),o&&!r.isOperationGroup){let l;return n(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return o||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const Yd=160,Or=new M1;let Oo=null,Bo=null,zo=null;function Vl(i,t,e){let n=new ei(new on(i,e,t));n.updateMatrixWorld();for(const s of[-1,1]){const r=new ei(new Ur(t/2,t/2,e,20));r.position.x=s*i/2,r.updateMatrixWorld(),n=Or.evaluate(n,r,Gd)}return n}function S1(){if(Oo)return Oo;const{W:i}=zs,t=zs.D-Yd,e=zs.D/2-t/2;let n=new ei(new on(i,3,t));n.position.z=e,n.updateMatrixWorld();for(const s of[-1,1])for(let r=0;r<9;r++)for(let a=0;a<3;a++){const o=e+(r-4)*46,c=s*(58+a*50+(r%2?25:0));if(Math.abs(c)>i/2-30)continue;const l=Vl(40,8,9);l.position.set(c,0,o),l.updateMatrixWorld(),n=Or.evaluate(n,l,Fr)}return Oo=n.geometry,Oo}function b1(){if(Bo)return Bo;const{W:i,LIP:t}=zs;let e=new ei(new on(i,t,3));e.updateMatrixWorld();for(const n of[-1,1])for(let s=0;s<4;s++){const r=Vl(40,8,9);r.rotation.x=Math.PI/2,r.position.set(n*(35+s*52),2,0),r.updateMatrixWorld(),e=Or.evaluate(e,r,Fr)}return Bo=e.geometry,Bo}function gf(i){if(zo)return zo;let t=new ei(new on(i,40,3));t.updateMatrixWorld();for(const e of[-15.875,0,15.875]){const n=new ei(new Ur(3.5,3.5,9,16));n.rotation.x=Math.PI/2,n.position.set(0,e,0),n.updateMatrixWorld(),t=Or.evaluate(t,n,Fr)}return zo=t.geometry,zo}function E1(i,t){const{W:e,D:n}=zs,s=i.children.find(o=>o.userData.floor),r=[];for(const[o,c]of t)c<-n/2+Yd||c>n/2-6||Math.abs(o)>e/2-6||r.some(([l,u])=>Math.abs(o-l)<20&&Math.abs(c-u)<12)||r.push([o,c]);if(!r.length)return;let a=new ei(s.geometry);a.updateMatrixWorld();for(const[o,c]of r){const l=Vl(28,16,9);l.position.set(o,0,c),l.updateMatrixWorld(),a=Or.evaluate(a,l,Fr)}s.geometry=a.geometry,s.userData.holes=(s.userData.holes||[]).concat(r)}function $d(){const i=new le,{W:t,D:e,LIP:n,EARS:s}=zs,r=1.5-n/2,a=new se(S1(),N.shelf);a.userData.floor=!0,a.castShadow=a.receiveShadow=!0,i.add(a);for(const u of[-1,1])V(i,q(3,n,e,N.shelf),u*(t/2-1.5),r,0);const o=new se(b1(),N.shelf);o.castShadow=o.receiveShadow=!0,V(i,o,0,r,e/2-1.5),V(i,q(t-6,n,3,N.shelf),0,r,-e/2+1.5);const c=(s-t)/2+6,l=t/2+(s-t)/4;for(const u of[-1,1]){const h=new se(gf(c),N.rail);h.castShadow=h.receiveShadow=!0,V(i,h,u*l,r,e/2+1.5);const f=new se(gf(c),N.rail);f.castShadow=f.receiveShadow=!0,V(i,f,u*l,r,-351.5),V(i,q(3,n-4,200,N.rail),u*(t/2+2.5),r,-245);for(const d of[1.5-2,1.5-n+2])V(i,q(14,4,200,N.rail),u*(t/2+8),d,-245);for(const d of[-40,40]){const g=Wt(3.2,2,N.caster,14);g.rotation.z=Math.PI/2,V(i,g,u*(t/2+4.5),r,-245+d)}}return i}const w1={pcb:N.pcbBlack,slot:N.slot,connector:N.connector,chip:N.chip,heatsink:N.heatsink,bracket:N.bracket,parts:N.cap,shroud:N.cardShroud,back:N.cardBack,gold:N.gold,fan:N.fanBlade},Zd=new Map,T1=["device-vertical","host-retimer","switch-pm50100","gpu-maxq"];function A1(i){const e=new DataView(i).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,4,e))),s=new le;s.userData.solidBoxes=[];let r=4+e;for(const{n:a,v:o,i:c,b:l}of n){const u=new Float32Array(i.slice(r,r+o*12));r+=o*12;const h=new Uint32Array(i.slice(r,r+c*4));r+=c*4;const f=new Ye;f.setAttribute("position",new Re(u,3)),f.setIndex(new Re(h,1)),f.computeVertexNormals();const d=new se(f,w1[a]||N.cap);d.castShadow=d.receiveShadow=!0,d.userData.noCollide=!0,s.add(d);for(const g of l||[])s.userData.solidBoxes.push(g)}return s}async function R1(i="./"){await Promise.all(T1.map(async t=>{try{const e=await fetch(`${i}cad/${t}.bin`);if(!e.ok)throw new Error(e.status);Zd.set(t,A1(await e.arrayBuffer()))}catch(e){console.warn(`CAD mesh ${t} unavailable (${e.message}) — using parametric fallback`)}}))}function Ta(i){const t=Zd.get(i);return t?t.clone():null}const jd=49.1,_f=-41.6,Kd=[-12.8,7.5];function Jd(){const i=new le,t=Ta("gpu-maxq");if(t)return i.add(t),i;const{L:e,H:n,T:s}=Ls,r=g=>e/2-g,a=n-11,o=(n-a)/2;V(i,q(s,a,e,N.cardShroud),0,o,0),V(i,q(3,11,89,N.gold),0,-n/2+5.5,r(47)-44.5),V(i,q(s-6,3,20,N.slot),0,-n/2+12,r(155));const c=r(215),l=o,u=Wt(37,1.6,N.gold,40);u.rotation.z=Math.PI/2,V(i,u,s/2+.3,l,c);const h=Wt(34,3,N.vent,40);h.rotation.z=Math.PI/2,V(i,h,s/2-.5,l,c);const f=Wt(17,2.5,N.bracket,28);f.rotation.z=Math.PI/2,V(i,f,s/2+.6,l,c);for(let g=0;g<18;g++){const x=g/18*Math.PI*2,m=25,p=q(1.6,1.2,13,N.fanBlade);p.rotation.x=x+.5,V(i,p,s/2+.4,l+Math.sin(x)*m,c+Math.cos(x)*m)}V(i,q(s-4,2,33,N.cardBack),0,n/2+.6,r(17.5)),V(i,q(s-12,1.2,20,N.gold),0,n/2+1.8,r(17.5)),V(i,q(s-8,2.6,160,N.gold),0,n/2+.8,r(115));for(let g=0;g<39;g++)V(i,q(s-10,1.4,1.1,N.vent),0,n/2+2.1,r(37+g*4.1));V(i,q(s-14,1.2,26,N.gold),0,n/2+.9,r(238)),V(i,q(s-10,14,15,N.vent),0,n/2-8,-e/2+8),V(i,q(18,9,9,N.connector),0,n/2-8,-e/2+6),V(i,q(14,6.5,2,N.slot),0,n/2-8,-e/2+1),V(i,q(s+2,n-4,2,N.bracket),0,2,e/2+1);for(let g=0;g<4;g++)V(i,q(3,6,16,N.slot),-s/4,26-g*15,e/2+1.4).rotation.y=Math.PI/2;for(let g=0;g<12;g++){const x=q(14,2.4,1.6,N.slot);x.rotation.z=.45,V(i,x,s/4-2,34-g*6.4,e/2+2.2)}V(i,q(8,8,1.6,N.slot),-s/4,42,e/2+2.2);const d=jd;V(i,q(s+2,1.4,11.43,N.bracket),0,d+.7,e/2+2+11.43/2);for(const g of Kd)V(i,q(3,.5,4.3,N.slot),g,d+1.5,e/2+11.25);return i}const me={slotX:4,slotZ:7.5,mcioX:-5.2,mcioZ:[-2.5,31.5],auxX:-4.3,auxZ:-30,holesZ:[-57,57],holesX:4.5};function Qd(){const i=new le,t=Ta("device-vertical");if(t)return i.add(t),V(i,q(19.8,1.5,124.8,N.pcbBlack),0,0,0),i;const{W:e,PCB:n,L:s}=Cd;V(i,q(e,n,s,N.pcbBlack),0,0,0),V(i,q(9.2,12,91,N.slot),me.slotX,n/2+6,me.slotZ),V(i,q(2.2,2,89,N.cablePlug),me.slotX,n/2+11,me.slotZ);for(const r of me.mcioZ)V(i,q(7.8,11,25.8,N.connector),me.mcioX,-n/2-5.5,r),V(i,q(3.5,2,23,N.slot),me.mcioX,-n/2-11.5,r);V(i,q(11,13,14.5,N.chip),me.auxX,-n/2-6.5,me.auxZ),V(i,q(8,2.6,10,N.chip),3,n/2+1.3,-54);for(const r of me.holesZ)for(const a of[-1,1])V(i,Wt(2.2,n+1.2,N.gold,10),a*me.holesX,0,r);return i}const An=(i,t)=>[i-75,55-t],tp=[[-31,-50.8],[-31,50.8],[0,-50.8],[0,50.8],[31,-50.8],[31,50.8]],Ui={CN6:An(23.2,85.8),CN7:An(23.2,54.4),CN8:An(23.2,22.4),CN2:An(125.6,85.3),CN1:An(125.6,54.9),CN12:An(125.6,22.4)},ko=An(139.9,39.3),wr=[146.5-75,12,55-17.3],Li=([i,t])=>[i,16,t],Rs={device:[...tp.map(Li),Li(Ui.CN6),Li(Ui.CN8)],host:[Li(Ui.CN2),Li(Ui.CN1),Li(Ui.CN12),Li(Ui.CN7)]},un=[0,1,0],Ho={device:[un,un,un,un,un,un,un,un],host:[un,un,un,un]},Ps=[1,0,0],Cs=[0,0,1],Go={device:[Ps,Ps,Ps,Ps,Ps,Ps,Cs,Cs],host:[Cs,Cs,Cs,Cs]},ep=8;function xf(i){V(i,q(86,2.5,87,N.chip),0,-2,0);for(const t of[-40,40])for(const e of[-40.5,40.5])V(i,Wt(3,1.6,N.caster,12),t,-3.5,e);for(const t of[25,125])for(const e of[5,105]){const[n,s]=An(t,e);V(i,Wt(2.6,ep-.6,N.gold,12),n,-8.6/2,s)}}function np(){const i=new le,t=Ta("switch-pm50100");if(t){i.add(t),V(i,q(149.8,1.5,109.8,N.pcbBlack),0,.2,0);const n=vi(40);return n.position.set(0,21.5,0),i.add(n),xf(i),i}xf(i),V(i,q(150,2,110,N.pcbBlack),0,0,0);for(const n of[25,125])for(const s of[5,105]){const[r,a]=An(n,s);V(i,Wt(3.6,.6,N.gold,16),r,1.2,a),V(i,Wt(1.8,1,N.slot,12),r,1.4,a)}V(i,q(40,3,40,N.chip),0,2.5,0);for(const n of[-40,40])for(const s of[-40,40])V(i,Wt(2.4,7,N.gold,10),n,4.5,s);V(i,q(90,5,91,N.heatsink),0,9.5,0);for(let n=-10;n<=10;n++)V(i,q(3,18,89,N.heatsink),n*4.3,21,0);const e=vi(40);e.position.set(0,33,0),i.add(e);for(const[n,s]of tp)V(i,q(27.5,13,7,N.connector),n,7.5,s),V(i,q(23,2,3.5,N.slot),n,14.2,s);for(const[n,s]of Object.values(Ui))V(i,q(7,13,27.5,N.connector),n,7.5,s),V(i,q(3.5,2,23,N.slot),n,14.2,s);V(i,q(7,13,16,N.connector),ko[0],7.5,ko[1]),V(i,q(3.5,2,12,N.slot),ko[0],14.2,ko[1]),V(i,q(13,11,12,N.chip),wr[0],6.5,wr[2]),V(i,q(6,5,8,N.slot),An(4.7,7.1)[0],3.5,An(4.7,7.1)[1]);for(let n=0;n<3;n++)V(i,q(10,4,3,N.slot),-66,3,-40+n*6);return V(i,q(17,6,33,N.pcb),-63,4,8),V(i,q(17,6,33,N.pcb),60,4,-38),V(i,q(11,.4,17,N.label),-63,1.2,-22),i}const Xe={mb10:[-51.5,20],mb18:[-16,20],cpu8:[[18,20],[37.5,20],[56.5,20],[18,0],[37.5,0],[56.5,0],[18,-18],[37.5,-18],[56.5,-18]],hpwr:[[-3,0],[-3,-18]],peri:[[-51.5,0],[-37.5,0],[-23.5,0],[-51.5,-18],[-37.5,-18],[-23.5,-18]]};function ip(i=!1){const t=new le,{W:e,H:n,L:s}=Pd,r=8;if(V(t,q(e,n,s,N.psuBody),0,0,0),i){V(t,Wt(62,2.2,N.noctuaRim,36),0,n/2+.6,r),V(t,Wt(57,1.6,N.vent,36),0,n/2+1.2,r);const o=vi(52,9);o.traverse(c=>{c.material===N.fanBlade&&(c.material=N.noctua)}),o.position.set(0,n/2+.8,r),t.add(o);for(let c=0;c<5;c++){const l=q(2.4,1.2,112,N.noctuaRim);l.rotation.y=c/5*Math.PI,V(t,l,0,n/2+2.4,r)}}else{V(t,Wt(66,1.8,N.psuGrille,40),0,n/2+.5,r);const o=vi(58,7);o.position.set(0,n/2+1,r),t.add(o);for(const[c,l]of[[-s/2+26,.35],[s/2-26,.35]]){const u=q(e-4,.8,22,N.armor);u.rotation.y=l,V(t,u,0,n/2+.9,c)}V(t,q(26,.8,11,N.armor),0,n/2+2,r)}const a=([o,c],l,u=9)=>{V(t,q(l,u,3,N.slot),o,c,-s/2-1.2),V(t,q(l-3,u-3,1.6,N.cablePlug),o,c,-s/2-2.4)};a(Xe.mb10,21),a(Xe.mb18,38);for(const o of Xe.cpu8)a(o,17);for(const o of Xe.peri)a(o,13);for(const o of Xe.hpwr)a(o,19,8),V(t,q(9,2.2,2.5,N.slot),o[0],o[1]+5.4,-s/2-1);V(t,q(e-10,n-10,1.6,N.psuGrille),0,0,s/2+.4),V(t,q(30,26,4,N.slot),-42,0,s/2+1.6),V(t,q(20,24,4,N.chip),-13,0,s/2+1.6),V(t,q(11,11,3.4,N.connector),8,-4,s/2+1.4),V(t,q(16,3,1,N.label),8,6,s/2+1.4);for(const o of[-1,1]){const c=q(1.4,22,62,N.armor);c.rotation.x=.12,V(t,c,o*(e/2+.4),4,-18),V(t,q(1,8,34,N.label),o*(e/2+.3),-28,62)}return V(t,q(e*.72,1,s*.6,N.label),0,-n/2-.4,0),t}const pe=(i,t)=>[i-152.5,t-165],sp=[141.3,121,100.6,80.3,60,39.7,19.4].map(i=>i-152.5),ml=79.5-165,P1=[0,2,4,6].map(i=>sp[i]),Vc={atx24:pe(224,326),eps:[pe(297,46),pe(297,262)]},C1=pe(224,170),Wc=[22-152.5,8.25,-166];function rp(){const i=new le;V(i,q(305,2.5,330,N.pcbBlack),0,0,0);const t=1.25,[e,n]=C1;V(i,q(74,3,80,N.bracket),e,t+1.5,n),V(i,q(60,3.6,68,N.chip),e,t+2,n),V(i,q(52,2.4,60,N.bracket),e,t+4.6,n),V(i,q(58,8,66,N.heatsink),e,t+10,n);for(let u=0;u<6;u++)V(i,Wt(3,42,N.heatsink,12),e+(u-2.5)*9,t+32,n);for(let u=48;u<=118;u+=3)V(i,q(128,1.3,96,N.heatsink),e,u,n);const s=vi(34);s.rotation.x=Math.PI/2,s.position.set(e,83,n-52),i.add(s);for(const u of[151.5,160.1,168.6,177.2,271.7,280.3,288.9,297.4]){const[h]=pe(u,0);V(i,q(7.5,4.5,140,N.slot),h,t+2.2,n),V(i,q(4.6,30,133.4,N.chip),h,t+16,n)}for(const u of sp)V(i,q(9,10,94,N.bracket),u,t+5,ml),V(i,q(5.5,1.8,89,N.slot),u,t+10.2,ml);const r=[[13.5,11,11,N.chip],[22,14,14,N.connector],[38,14,14,N.connector],[51.5,14,14,N.connector],[60,14,12,N.connector],[79,14,12,N.connector],[100,18,15,N.connector],[115.5,16,7,N.slot]];for(const[u,h,f,d]of r)V(i,q(h,f,14,d),pe(u,0)[0],t+f/2,-157);V(i,q(12,11,18,N.chip),144.5,t+5.5,pe(0,46)[1]),V(i,q(12,11,14,N.chip),144.5,t+5.5,pe(0,61)[1]),V(i,q(12,11,14,N.chip),144.5,t+5.5,pe(0,242)[1]),V(i,q(12,11,18,N.chip),144.5,t+5.5,pe(0,262)[1]);for(const u of[299,306])V(i,Wt(3.2,5,N.cap,14),146,t+2.5,pe(0,u)[1]);V(i,q(5,2.6,12,N.debugRed),147,t+1.3,pe(0,316)[1]);const a=[[224,52,13,N.slot],[199,19,9,N.connector],[181,19,9,N.connector],[162,10,7,N.chip],[107,13,8,N.connector],[91,13,8,N.connector],[72,16,9,N.slot],[51,16,9,N.slot],[41,12,11,N.chip],[28,12,11,N.chip]];for(const[u,h,f,d]of a)V(i,q(h,f,11,d),pe(u,0)[0],t+f/2,157);for(const u of[45,110,142,181,197,251,276,296])V(i,q(6,7,12,N.slot),-146,t+3.5,pe(0,u)[1]);V(i,q(14,2,14,N.chip),pe(69,0)[0],t+1,pe(0,18)[1]);const o=(u,h,f,d,g)=>{const[x]=pe(u,0),[m]=pe(h,0),p=pe(0,f)[1],v=pe(0,d)[1],_=(x+m)/2,y=(p+v)/2,E=m-x,b=v-p;V(i,q(E,4,b,N.heatsink),_,t+2,y);for(let R=x+2;R<=m-2;R+=4.5)V(i,q(1.5,24,b-4,N.heatsink),R,t+16,y);const S=Wt(3,E-6,N.heatsink,12);S.rotation.z=Math.PI/2,V(i,S,_,t+24,y);for(let R=0;R<g;R++){const M=vi(15);M.position.set(_+(R-(g-1)/2)*(E/g),t+30,y),i.add(M)}};o(185,280,40,100,2),o(170,285,250,310,3);const[c,l]=[pe(80,0)[0],pe(0,265.5)[1]];return V(i,q(100,6,91,N.armor),c,t+3,l),V(i,q(78,2.2,66,N.chip),c-4,t+7,l+4),V(i,q(100,1.8,30,N.armor),c,t+7.5,l-24),V(i,q(115,8,14,N.armor),pe(92.5,0)[0],t+4,pe(0,29)[1]),i}const Fs={W:442.4,H:43.7,D:285.6},vf=[75,-2,Fs.D/2+2];function op(){const i=new le,{W:t,H:e,D:n}=Fs,s=n/2;V(i,q(t,e,n-4,N.rail),0,0,-2),V(i,q(t,e,4,N.udmFace),0,0,s-2),V(i,q(96,26,1.2,N.slot),-158,0,s+.2),V(i,q(80,3,1.4,N.udmFace),-158,-6,s+.6),V(i,q(15,13,2,N.slot),-92,-2,s+.4);for(let o=0;o<4;o++)for(const c of[7,-8])V(i,q(15,13,2,N.slot),-58+o*19,c+.5,s+.4);for(const o of[47,75])V(i,q(16,10,2,N.slot),o,-2,s+.4);const r=Wt(19,1.6,N.slot,32);r.rotation.x=Math.PI/2,V(i,r,165,0,s+.6);const a=Wt(15.5,1.6,N.screen,32);a.rotation.x=Math.PI/2,V(i,a,165,0,s+1.2);for(const o of[-1,1])V(i,q(22,e,3,N.rail),o*(t/2+11),0,s-1.5);return i}function ap(){const i=new le;return V(i,q(13.5,12.5,32,N.caster),0,0,0),V(i,q(11.5,9,2,N.slot),0,0,16),V(i,q(6,2,6,N.gold),0,-4,12),i}const cp={W:438,H:44,D:114};function lp(){const i=new le,{W:t,H:e,D:n}=cp,s=n/2;V(i,q(t,e,n-3,N.rail),0,0,-1.5),V(i,q(t,e,3,N.psuBody),0,0,s-1.5);for(const a of[-1,1])for(let o=0;o<6;o++){const c=a*(38+o*27);V(i,q(19,24,1.6,N.slot),c,0,s+.3),V(i,q(4,9,1.8,N.vent),c,3,s+.6),V(i,Wt(2.6,1.8,N.vent,10),c,-7,s+.6)}V(i,q(34,18,1.8,N.screen),0,2,s+.4),V(i,q(26,9,.8,N.debugRed),0,3,s+1.2),V(i,Wt(4.5,2.2,N.caster,14),0,-12,s+.6);const r=Wt(4.5,26,N.cable,12);r.rotation.x=Math.PI/2,V(i,r,-t/2+24,0,-s-12);for(const a of[-1,1])V(i,q(22,e,3,N.rail),a*(t/2+11),0,s-1.5);return i}const Tr=-1,Ln=1.5,yf=14.7,up=-95,Aa=1120,Mf=572,L1=Aa-up,D1=(up+Aa)/2,Sf=712,I1=Aa,U1=Aa/2,hp=Ol/2+21+27.5,da=ua/2+2.8,N1=hp+7+Ln/2,F1=jn+6+7+Ln/2,bf=[{y:889},{y:600}].map(i=>({...i,z:Tr*(da+Ln/2)})),Ef={y:400,z:-Tr*(da+Ln/2)};let Vo;function O1(){if(Vo!==void 0)return Vo;if(typeof document>"u")return Vo=null;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,64,64),t.fillStyle="#000";for(const[e,n]of[[16,16],[48,48]])t.beginPath(),t.arc(e,n,20.75,0,Math.PI*2),t.fill();return Vo=i}function Ko(i,t){const e=new le,n=N.perf.clone(),s=O1();if(s){const a=new Yv(s);a.wrapS=a.wrapT=ta,a.repeat.set(i/yf,t/yf),n.alphaMap=a,n.alphaTest=.5}const r=new se(new on(i,t,Ln),n);r.castShadow=r.receiveShadow=!0,e.add(r);for(const a of[-1,1])V(e,q(i+3,7,Ln+4.5,N.vent),0,a*(t/2-2),0),V(e,q(7,t-11,Ln+4.5,N.vent),a*(i/2-2),0,0);return e}function fp(i,t,e,n,s){const r=Wt(6.5,1.2,N.caster,16);r.rotation.x=Math.PI/2,V(i,r,t,e,n+s*.6);const a=Wt(4.4,2.4,N.bracket,16);return a.rotation.x=Math.PI/2,V(i,a,t,e,n+s*2.2),a}function gl(i,t,e,n,s){const r=Wt(10,7,N.vent,20),a=Wt(4.2,3,N.bracket,6);s==="x"&&(r.rotation.z=Math.PI/2,a.rotation.z=Math.PI/2),s==="z"&&(r.rotation.x=Math.PI/2,a.rotation.x=Math.PI/2),V(i,r,t,e,n);const o=3.5+Ln+1.5;V(i,a,t+(s==="x"?Math.sign(t)*o:0),e+(s==="y"?o:0),n+(s==="z"?Math.sign(n)*o:0))}function B1(){const i=new le,t=Ol/2,e=[1,7,13,19,24].map(s=>s*44.45+22.225);for(const s of[-1,1]){const r=Ko(Mf,L1);r.position.set(0,D1,s*da),i.add(r);for(const a of[-1,1])for(const o of e)fp(i,a*t,o,s*(da+Ln/2),s)}for(const s of[-1,1]){const r=Ko(Sf,I1);r.rotation.y=Math.PI/2,r.position.set(s*N1,U1,0),i.add(r);for(const a of[-1,1])for(const o of[150,560,1e3])gl(i,s*(hp+3.5),o,a*328,"x")}const n=Ko(Mf,Sf+4);n.rotation.x=-Math.PI/2,n.position.set(0,F1,0),i.add(n);for(const s of[-1,1])for(const r of[-1,1])gl(i,s*253.55,jn+6+3.5,r*(ua/2-40),"y");return i}function z1(){const i=new le;V(i,q(132,132,6,N.post),0,0,-18);const t=Wt(60,38,N.vent,36);t.rotation.x=Math.PI/2,V(i,t,0,0,1);const e=vi(56,7);e.rotation.x=Math.PI/2,V(i,e,0,0,14);for(let n=0;n<4;n++){const s=new se(new ba(14+n*14,1.3,8,36),N.bracket);V(i,s,0,0,21+n*.4)}for(const n of[.4,1.97,3.54,5.11]){const s=q(2.6,62,2.6,N.bracket);s.rotation.z=n,V(i,s,Math.sin(n)*-31,Math.cos(n)*31,20)}for(const n of[-1,1])for(const s of[-1,1])V(i,Wt(3,2.5,N.gold,12),n*52.5,s*52.5,-14).rotation.x=Math.PI/2;return i}function dp(){const i=new le;for(const n of[-1,1])V(i,z1(),n*75,0,0);const t=q(85,75,13,N.caster);V(i,t,195,-20,-11),V(i,q(60,40,1.2,N.screen),195,-12,-3.8);for(const n of[-18,0,18])V(i,Wt(4,2,N.chip,12),195+n,-44,-4).rotation.x=Math.PI/2;const e=q(4,3,3,N.cable);return V(i,e,152,-20,-11),i}function pp(i=520,t=720){const e=new le;V(e,q(i-8,t-8,10,N.filter),0,0,8);for(const n of[-1,1])V(e,q(i,25,14,N.rail),0,n*(t/2-12.5),8),V(e,q(25,t-50,14,N.rail),n*(i/2-12.5),0,8);for(const n of[-1,1])for(const s of[-1,1])V(e,q(16,30,22,N.caster),n*(i/2-30),s*(t/2-3),4);return e}function k1(){const i=new le;return i.add(Ko(340,340)),fp(i,-120,-120,Ln/2,1),gl(i,120,-120,-3.5-Ln/2,"z"),i}const Wo=168,pr=68.5,_l=-.6,mp=[[3.8,4,-39.5],[3.8,4,-69.5]];function gp(){const i=new le,t=Ta("host-retimer");if(t)return i.add(t),V(i,q(1.5,pr-.2,Wo-.2,N.pcbBlack),0,0,0),V(i,q(1.8,11,89,N.gold),0,-pr/2-5.5,_l),i;V(i,q(1.8,pr,Wo,N.pcbBlack),0,0,0),V(i,q(1.8,11,89,N.gold),0,-pr/2-5.5,_l),V(i,q(2.5,100,2,N.bracket),0,11,Wo/2+6),V(i,q(2.5,3,10,N.bracket),0,62,Wo/2+10);for(const[,,n]of mp)V(i,q(9,11.6,25.8,N.connector),4,-8.5,n),V(i,q(7,2.5,21,N.slot),4,-2,n);V(i,q(11.5,50,50,N.heatsink),8.5,.7,1);const e=vi(15);e.rotation.z=-Math.PI/2,e.position.set(15,.7,1),i.add(e);for(const n of[26,-24]){const s=Wt(2,7,N.gold,10);s.rotation.z=Math.PI/2,V(i,s,3,-22,n)}V(i,q(4,5.5,7,N.chip),3.5,2,62),V(i,q(4,5.5,7,N.chip),3.5,2,52);for(const n of[50,38])V(i,q(2.8,3,13,N.slot),2.6,pr/2-3.5,n);return i}class H1{constructor(){this.ids=[],this.pr=[]}get size(){return this.ids.length}push(t,e){this.ids.push(t),this.pr.push(e);let n=this.ids.length-1;for(;n>0;){const s=n-1>>1;if(this.pr[s]<=this.pr[n])break;this._sw(n,s),n=s}}pop(){const t=this.ids[0],e=this.ids.length-1;this.ids[0]=this.ids[e],this.pr[0]=this.pr[e],this.ids.pop(),this.pr.pop();let n=0;for(;;){let s=2*n+1,r=2*n+2,a=n;if(s<this.ids.length&&this.pr[s]<this.pr[a]&&(a=s),r<this.ids.length&&this.pr[r]<this.pr[a]&&(a=r),a===n)break;this._sw(n,a),n=a}return t}_sw(t,e){const n=this.ids[t];this.ids[t]=this.ids[e],this.ids[e]=n;const s=this.pr[t];this.pr[t]=this.pr[e],this.pr[e]=s}}const xl=[];for(let i=-1;i<=1;i++)for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++){if(!i&&!t&&!e)continue;const n=new Set,s=[];for(const[r,a,o]of[[i,0,0],[0,t,0],[0,0,e],[i,t,0],[i,0,e],[0,t,e]]){if(!r&&!a&&!o||r===i&&a===t&&o===e)continue;const c=r*9+a*3+o;n.has(c)||(n.add(c),s.push([r,a,o]))}xl.push([i,t,e,Math.hypot(i,t,e),s])}class _p{constructor(t,e={}){const{cell:n=5,bias:s=[],biasRadius:r=140,biasWeight:a=.6,normalBoxes:o=null,padThin:c=6.5,padFat:l=10}=e;this.cell=n;const u=new ae;t.forEach(f=>u.union(f)),u.expandByScalar(75),this.min=u.min.clone(),this.nx=Math.ceil((u.max.x-u.min.x)/n)+1,this.ny=Math.ceil((u.max.y-u.min.y)/n)+1,this.nz=Math.ceil((u.max.z-u.min.z)/n)+1;const h=this.nx*this.ny*this.nz;this.blocked=new Uint8Array(h),this.blockedFat=new Uint8Array(h);for(const f of t)this._block(f.clone().expandByScalar(c),this.blocked),this._block(f.clone().expandByScalar(l),this.blockedFat);for(const[f,d,g,x]of e.holes||[]){const m=this._cell({x:f-x,y:d-14,z:g-x}),p=this._cell({x:f+x,y:d+14,z:g+x});for(let v=Math.max(0,m[0]);v<=Math.min(this.nx-1,p[0]);v++)for(let _=Math.max(0,m[1]);_<=Math.min(this.ny-1,p[1]);_++)for(let y=Math.max(0,m[2]);y<=Math.min(this.nz-1,p[2]);y++){const E=this._i(v,_,y);this.blocked[E]=0,this.blockedFat[E]=0}}this._blk=this.blocked,this._bias(s,r,a),this.trail=new Float32Array(h),this._trailCells=[],this._trailLoom=-1,this._bit=0,this.use=new Uint8Array(h),this.mask=new Int32Array(h),this.history=new Float32Array(h),this.presFac=0,this._g=new Float32Array(h),this._came=new Int32Array(h),this._closed=new Uint8Array(h),this._gen=new Int32Array(h),this._genId=0,this._boxes=o||t,this.fails=0,this.overuse=0}debugVoxels(){this._blk=this.blocked;const t=[];for(let a=0;a<this.nx;a++)for(let o=0;o<this.ny;o++)for(let c=0;c<this.nz;c++)this.blocked[this._i(a,o,c)]&&(this._free(a+1,o,c)||this._free(a-1,o,c)||this._free(a,o+1,c)||this._free(a,o-1,c)||this._free(a,o,c+1)||this._free(a,o,c-1))&&t.push([a,o,c]);const e=new on(this.cell*.92,this.cell*.92,this.cell*.92),n=new va({color:3718648,transparent:!0,opacity:.4,depthWrite:!1}),s=new Xv(e,n,t.length),r=new oe;return t.forEach(([a,o,c],l)=>{const u=this._world(a,o,c);s.setMatrixAt(l,r.makeTranslation(u.x,u.y,u.z))}),s.instanceMatrix.needsUpdate=!0,s.frustumCulled=!1,s}_normalAt(t){const e=this._cell(t),n=Math.ceil(64/this.cell),s=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];let r=[0,1,0],a=-1;for(const[o,c,l]of s){let u=0;for(let h=1;h<=n;h++)this._free(e[0]+o*h,e[1]+c*h,e[2]+l*h)&&(u+=n+1-h);u>a&&(a=u,r=[o,c,l])}return new A(...r)}_i(t,e,n){return(t*this.ny+e)*this.nz+n}_dec(t){const e=t%this.nz,n=(t-e)/this.nz%this.ny;return[(t-e-n*this.nz)/(this.ny*this.nz),n,e]}_cell(t){return[Math.round((t.x-this.min.x)/this.cell),Math.round((t.y-this.min.y)/this.cell),Math.round((t.z-this.min.z)/this.cell)]}_world(t,e,n){return new A(this.min.x+t*this.cell,this.min.y+e*this.cell,this.min.z+n*this.cell)}_in(t,e,n){return t>=0&&e>=0&&n>=0&&t<this.nx&&e<this.ny&&n<this.nz}_free(t,e,n){return this._in(t,e,n)&&this._blk[this._i(t,e,n)]===0}_block(t,e){const n=this._cell(t.min),s=this._cell(t.max);for(let r=Math.max(0,n[0]);r<=Math.min(this.nx-1,s[0]);r++)for(let a=Math.max(0,n[1]);a<=Math.min(this.ny-1,s[1]);a++)for(let o=Math.max(0,n[2]);o<=Math.min(this.nz-1,s[2]);o++)e[this._i(r,a,o)]=1}_bias(t,e,n){if(this.attr=null,!t||!t.length)return;this.attr=new Float32Array(this.nx*this.ny*this.nz);const s=Math.ceil(e/this.cell);for(const r of t){const a=new A(r[0],r[1],r[2]),o=this._cell(a);for(let c=o[0]-s;c<=o[0]+s;c++)for(let l=o[1]-s;l<=o[1]+s;l++)for(let u=o[2]-s;u<=o[2]+s;u++){if(!this._in(c,l,u))continue;const h=this._world(c,l,u).distanceTo(a);if(h<e){const f=n*(1-h/e),d=this._i(c,l,u);f>this.attr[d]&&(this.attr[d]=f)}}}}_nearestFree(t){if(this._free(...t))return t;const e=Math.ceil(96/this.cell);for(let n=1;n<e;n++)for(const[s,r,a]of xl){const o=[t[0]+s*n,t[1]+r*n,t[2]+a*n];if(this._free(...o))return o}return null}_los(t,e){const s=Math.max(Math.abs(e[0]-t[0]),Math.abs(e[1]-t[1]),Math.abs(e[2]-t[2]))*2;for(let r=1;r<s;r++){const a=r/s,o=Math.round(t[0]+(e[0]-t[0])*a),c=Math.round(t[1]+(e[1]-t[1])*a),l=Math.round(t[2]+(e[2]-t[2])*a);if(!this._free(o,c,l))return!1;const u=this._i(o,c,l);if(this.use[u]||this.mask[u]&~this._bit)return!1}return!0}_smooth(t){if(t.length<=2)return t;const e=[t[0]];let n=0;for(;n<t.length-1;){let s=n+1;for(;s+1<t.length&&this._los(t[n],t[s+1]);)s++;e.push(t[s]),n=s}return e}_stamp(t){const e=Math.max(1,Math.round(8/this.cell));for(const[n,s,r]of t)for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++)for(let c=-e;c<=e;c++){if(!this._in(n+a,s+o,r+c))continue;const l=this._i(n+a,s+o,r+c),u=.95-.14/e*(Math.abs(a)+Math.abs(o)+Math.abs(c));u<=this.trail[l]||(this.trail[l]||this._trailCells.push(l),this.trail[l]=u)}}_setTrail(t,e){if(this._trailLoom!==e){for(const n of this._trailCells)this.trail[n]=0;this._trailCells.length=0,this._trailLoom=e;for(const n of t)n.loom===e&&n.path&&this._stamp(n.path)}}_stampMask(t,e,n){for(const[s,r,a]of t)for(let o=-e;o<=e;o++)for(let c=-e;c<=e;c++)for(let l=-e;l<=e;l++)this._in(s+o,r+c,a+l)&&(this.mask[this._i(s+o,r+c,a+l)]|=n)}_stampUse(t,e,n=1){const s=new Set;for(let r=0;r<t.length;r++){const[a,o,c]=t[r];for(let l=-e;l<=e;l++)for(let u=-e;u<=e;u++)for(let h=-e;h<=e;h++)this._in(a+l,o+u,c+h)&&s.add(this._i(a+l,o+u,c+h))}for(const r of s)this.use[r]+=n}_legBox(t,e){const n=Math.ceil(220/this.cell);return[[Math.max(0,Math.min(t[0],e[0])-n),Math.max(0,Math.min(t[1],e[1])-n),Math.max(0,Math.min(t[2],e[2])-n)],[Math.min(this.nx-1,Math.max(t[0],e[0])+n),Math.min(this.ny-1,Math.max(t[1],e[1])+n),Math.min(this.nz-1,Math.max(t[2],e[2])+n)]]}_astar(t,e,n){const s=this._g,r=this._came,a=this._closed,o=this._gen,c=++this._genId,l=m=>{o[m]!==c&&(o[m]=c,s[m]=1/0,r[m]=-1,a[m]=0)},u=this._i(...t),h=this._i(...e),f=this._world(...e);l(u),s[u]=0;const d=new H1;for(d.push(u,this._world(...t).distanceTo(f));d.size;){const m=d.pop();if(m===h)break;if(a[m])continue;a[m]=1;const[p,v,_]=this._dec(m);let y=0,E=0,b=0;if(r[m]>=0){const[S,R,M]=this._dec(r[m]);y=p-S,E=v-R,b=_-M}for(const[S,R,M,w,D]of xl){const F=p+S,H=v+R,L=_+M;if(n&&(F<n[0][0]||H<n[0][1]||L<n[0][2]||F>n[1][0]||H>n[1][1]||L>n[1][2])||!this._free(F,H,L))continue;let O=!0;for(const[_t,Z,ct]of D)if(!this._free(p+_t,v+Z,_+ct)){O=!1;break}if(!O)continue;const G=this._i(F,H,L);if(l(G),a[G])continue;const Q=Math.max(this.attr?this.attr[G]:0,this._trailLoom>=0?this.trail[G]:0),K=this.use[G]+(this.mask[G]&~this._bit?1:0),Y=r[m]>=0&&(S!==y||R!==E||M!==b)?1.5*this.cell:0,st=w*this.cell*(1-.9*Q)*(1+this.presFac*K)*(1+this.history[G])+Y,it=s[m]+st;it<s[G]&&(s[G]=it,r[G]=m,d.push(G,it+1.2*this._world(F,H,L).distanceTo(f)))}}if(l(h),r[h]===-1&&u!==h)return null;const g=[];let x=h;for(;x!==-1;)g.push(this._dec(x)),x=r[x];return g.reverse()}_standoff(t,e){let n=null,s=!1;for(let r=6;r<=30;r+=4){const a=t.clone().addScaledVector(e,r);if(this._free(...this._cell(a)))s=!0,n=a;else if(s)break}return n||t.clone().addScaledVector(e,6)}solve(t,e){const n=[],s=t.map(({a:l,b:u,type:h=null,r:f=0,opts:d={}},g)=>{const x=new A(...l),m=new A(...u);this._blk=f>=5?this.blockedFat:this.blocked;const p=d.na?new A(...d.na).normalize():this._normalAt(x),v=d.nb?new A(...d.nb).normalize():this._normalAt(m),_=this._standoff(x,p),y=this._standoff(m,v),E=this._nearestFree(this._cell(_)),b=this._nearestFree(this._cell(y));(!E||!b)&&this.fails++;let S=d.loom!=null?n.findIndex(D=>D.key===d.loom):n.findIndex(D=>D.key==null&&D.type===h&&D.A.distanceTo(x)<130&&D.B.distanceTo(m)<130);S<0&&(n.push({type:h,A:x.clone(),B:m.clone(),key:d.loom??null}),S=n.length-1);const R=Math.max(0,Math.ceil(2*f/this.cell)-1),M=Math.max(R,Math.ceil((2*f+4)/this.cell)-1),w=(d.wps||[]).map(D=>this._nearestFree(this._cell(new A(...D)))).filter(Boolean);return{i:g,type:h,r:f,Ao:_,Bo:y,na:p.toArray(),nb:v.toArray(),start:E,end:b,wps:w,loom:S,bit:1<<Math.min(S,31),shTight:R,shMargin:M,path:null}});this.looms=n.length;const r=Math.ceil(16/this.cell);let a=s.filter(l=>l.start&&l.end),o=1/0,c=0;for(this.rounds=0;this.rounds<8&&a.length;this.rounds++){this.presFac=2+3*this.rounds,a.sort((h,f)=>h.loom-f.loom);const l=new Set(a);this.mask.fill(0);for(const h of s)h.path&&!l.has(h)&&this._stampMask(h.path,h.shMargin,h.bit);for(const h of a)h.path&&this._stampUse(h.path,h.shTight,-1),this._blk=h.r>=5?this.blockedFat:this.blocked,this._bit=h.bit,this._setTrail(s,h.loom),h.path=this._chain(h),h.path&&(this._stamp(h.path),this._stampUse(h.path,h.shTight),this._stampMask(h.path,h.shMargin,h.bit),e&&e(h));this.overuse=0,a=[];const u=Math.ceil(90/this.cell);for(const h of s){if(!h.path)continue;let f=0;for(let d=r;d<h.path.length-r;d++){const g=h.path[d],x=h.wps.length&&h.wps.some(v=>Math.max(Math.abs(g[0]-v[0]),Math.abs(g[1]-v[1]),Math.abs(g[2]-v[2]))<=u),m=this._i(...g);(x?this.mask[m]&~h.bit:this.use[m]>1||this.mask[m]&~h.bit)&&(f++,this.history[m]+=.6)}f&&(this.overuse+=f,a.push(h))}if(this.overuse<=8)break;if(this.overuse>=o){if(++c>=2)break}else c=0;o=this.overuse}return this.fails+=s.filter(l=>l.start&&l.end&&!l.path).length,s.map(l=>this._extract(l))}_chain(t){const e=[t.start,...t.wps||[],t.end];let n=null;for(let s=1;s<e.length;s++){const r=this._astar(e[s-1],e[s],this._legBox(e[s-1],e[s]))||this._astar(e[s-1],e[s]);if(!r)return null;n=n?n.concat(r.slice(1)):r}return n}_extract(t){if(!t.path)return{vias:[t.Ao.toArray(),t.Bo.toArray()],na:t.na,nb:t.nb};this._blk=t.r>=5?this.blockedFat:this.blocked,this._bit=t.bit,this._stampUse(t.path,t.shTight,-1);const e=this._smooth(t.path).map(([s,r,a])=>this._world(s,r,a));for(this._stampUse(t.path,t.shTight,1);e.length&&e[0].distanceTo(t.Ao)<this.cell*1.5;)e.shift();for(;e.length&&e[e.length-1].distanceTo(t.Bo)<this.cell*1.5;)e.pop();const n=[];for(let s=0;s<e.length;s++){if(s){const r=e[s].clone().sub(e[s-1]),a=r.length(),o=Math.floor(a/36);for(let c=1;c<=o;c++)n.push(e[s-1].clone().addScaledVector(r,c/(o+1)))}n.push(e[s])}return{vias:[t.Ao.toArray(),...n.map(s=>s.toArray()),t.Bo.toArray()],na:t.na,nb:t.nb}}}function G1({boxes:i,normalBoxes:t,bias:e,jobs:n},s){const r=performance.now(),a=v=>new ae(new A(v[0],v[1],v[2]),new A(v[3],v[4],v[5])),o=new _p(i.map(a),{bias:e,normalBoxes:t.map(a)}),c=performance.now(),l=o.solve(n,s),u=performance.now(),h=(v,_)=>{const y=_>=5?o.blockedFat:o.blocked,E=b=>{const S=o._cell({x:b[0],y:b[1],z:b[2]});return o._in(...S)&&y[o._i(...S)]===0};for(let b=0;b<30;b++)for(let S=1;S<v.length-1;S++){const R=v[S-1],M=v[S+1],w=v[S],D=[0,1,2].map(F=>w[F]+((R[F]+M[F])/2-w[F])*.5);E(D)&&E([0,1,2].map(F=>(R[F]+D[F])/2))&&E([0,1,2].map(F=>(D[F]+M[F])/2))&&(v[S]=D)}for(let b=v.length-2;b>=1;b--){const S=v[b-1],R=v[b],M=v[b+1],w=(M[0]-S[0])**2+(M[1]-S[1])**2+(M[2]-S[2])**2;if(!w)continue;const D=Math.max(0,Math.min(1,((R[0]-S[0])*(M[0]-S[0])+(R[1]-S[1])*(M[1]-S[1])+(R[2]-S[2])*(M[2]-S[2]))/w));Math.hypot(R[0]-(S[0]+(M[0]-S[0])*D),R[1]-(S[1]+(M[1]-S[1])*D),R[2]-(S[2]+(M[2]-S[2])*D))<1.6&&v.splice(b,1)}};l.forEach((v,_)=>h(v.vias,n[_].r));const f={step:95,reach:34,endSkip:55},d=[];n.forEach((v,_)=>{const y=new A(...v.a),E=new A(...v.b),b=v.opts&&v.opts.loom!=null?v.opts.loom:null;let S=b!=null?d.find(R=>R.key===b):d.find(R=>R.key==null&&R.type===v.type&&R.A.distanceTo(y)<130&&R.B.distanceTo(E)<130);S||(S={type:v.type,A:y,B:E,key:b,members:[]},d.push(S)),S.members.push(_)});const g=v=>{let _=0;for(let y=1;y<v.length;y++)_+=Math.hypot(v[y][0]-v[y-1][0],v[y][1]-v[y-1][1],v[y][2]-v[y-1][2]);return _},x=(v,_)=>{for(let y=1,E=0;y<v.length;y++){const b=Math.hypot(v[y][0]-v[y-1][0],v[y][1]-v[y-1][1],v[y][2]-v[y-1][2]);if(E+b>=_){const S=(_-E)/(b||1);return[0,1,2].map(R=>v[y-1][R]+(v[y][R]-v[y-1][R])*S)}E+=b}return v[v.length-1].slice()},m=[];for(const v of d){if(v.members.length<2)continue;const _=v.members.reduce((E,b)=>g(l[E].vias)>g(l[b].vias)?E:b),y=g(l[_].vias);for(let E=f.endSkip;E<y-f.endSkip;E+=f.step){const b=x(l[_].vias,E),S=[];for(const L of v.members){const O=l[L].vias;let G=-1,Q=1/0;for(let K=1;K<O.length-1;K++){const Y=Math.hypot(O[K][0]-b[0],O[K][1]-b[1],O[K][2]-b[2]);Y<Q&&(Q=Y,G=K)}Q>f.reach||S.push({m:L,k:G})}if(S.length<2)continue;const R=S.reduce((L,O)=>{const G=l[O.m].vias[O.k];return[L[0]+G[0],L[1]+G[1],L[2]+G[2]]},[0,0,0]).map(L=>L/S.length);let M=0;for(const L of S){const O=l[L.m].vias[L.k],G=n[L.m].r,Q=S.length<=2?G+1.2:G/Math.sin(Math.PI/S.length)+.6,K=Math.hypot(O[0]-R[0],O[1]-R[1],O[2]-R[2]),Y=Math.min(K,Q),st=K>0?Y/K:0,it=[R[0]+(O[0]-R[0])*st,R[1]+(O[1]-R[1])*st,R[2]+(O[2]-R[2])*st];o._free(...o._cell({x:it[0],y:it[1],z:it[2]}))&&(l[L.m].vias[L.k]=it),M=Math.max(M,Math.hypot(l[L.m].vias[L.k][0]-R[0],l[L.m].vias[L.k][1]-R[1],l[L.m].vias[L.k][2]-R[2])+G)}const w=Math.max(...S.map(L=>n[L.m].r)),D=S.length<=2?w+1.2:w/Math.sin(Math.PI/S.length)+.6;if(M>D+w+3)continue;const F=x(l[_].vias,Math.min(E+12,y)),H=new A(F[0]-b[0],F[1]-b[1],F[2]-b[2]).normalize();m.push({c:R,r:M+.5,tang:H.toArray()})}}const p={fails:o.fails,overuse:o.overuse,rounds:o.rounds,looms:o.looms,ms:Math.round(performance.now()-r),grid:[o.nx,o.ny,o.nz],boxes:i.length,msVox:Math.round(c-r),msSolve:Math.round(u-c),msPost:Math.round(performance.now()-u)};return{routed:l,bands:m,stats:p,router:o}}const V1=()=>{const i=new le,t=Wt(2.85,1.8,N.gold,16);t.position.y=13.7,i.add(t);const e=Wt(3.5,.7,N.rail,20);e.position.y=12.45,i.add(e);const n=Wt(1.5,8,N.gold,12);n.position.y=8,i.add(n);const s=q(10,4,5.9,N.rail);return s.position.y=2,i.add(s),i},W1=()=>{const i=new le,t=q(18,2.5,17,N.rail);t.position.set(9,19.75,0),i.add(t);const e=q(2.5,18,17,N.rail);return e.position.set(1.25,9.5,0),i.add(e),i},X1=()=>{const i=new le,t=q(10,4,5.9,N.rail);t.position.y=2,i.add(t);const e=Wt(2.9,6,N.gold,6);e.position.y=7,i.add(e);const n=Wt(2.9,25,N.gold,6);return n.position.y=22.5,i.add(n),i},q1=()=>Wt(9.1,15.2,N.caster,24),ke={gpu:{name:"RTX PRO 6000 Blackwell Max-Q",qty:8,dims:"266.7 × 111.8 mm · dual-slot (40.6 mm)",build:Jd,link:"https://www.exxactcorp.com/NVIDIA-900-5G153-2200-000-E8815317",desc:"NVIDIA workstation GPU — 96 GB GDDR7, 300 W, PCIe 5.0 x16. Single enclosed radial blower: intake through the side fan + gold top louvres, exhaust out the bracket only, which is what makes it safe to pack eight in a row. 12V-2×6 sits in a recessed pocket on the far edge. Reaches the host over MCIO cable through a device adapter, not a motherboard slot."},board:{name:"ASRock WRX90 WS EVO",qty:1,dims:"305 × 330 mm · SSI-EEB",build:rp,link:"https://www.asrock.com/mb/AMD/WRX90%20WS%20EVO/index.asp",desc:"SSI-EEB motherboard for the Threadripper PRO 9985WX (128 PCIe 5.0 lanes). Four of its x16 slots carry the host adapters that feed the switch fabric."},host:{name:"C-Payne Host Adapter x16 — RETIMER (Astera)",qty:4,dims:"≈175 × 68 mm · half-height x16 card",build:gp,link:"https://c-payne.com/products/mcio-pcie-gen5-host-adapter-x16-retimer",price:240,desc:"Plugs into a board x16 slot and breaks it into 2× MCIO 8i at the far end of the bottom edge, with an actively-cooled Astera Aries retimer to hold clean Gen5 across the cable. Slot-powered, no aux. Four total = two uplinks per switch (the 2-VS-per-chip layout)."},switch:{name:"C-Payne PM50100 switch (CP-0551)",qty:2,dims:"150 × 110 mm · 100 × 100 mm hole pitch",build:np,link:"https://c-payne.com/products/pcie-gen5-mcio-switch-100-lane-microchip-switchtec-pm50100",price:2e3,owned:2,desc:"Microchip Switchtec PM50100 — a 100-lane PCIe Gen5 switch. 12× MCIO 8i + 1× 4i ring the chip under a 90 mm heatsink + 92 mm Arctic fan; PCIe 6-pin power. Each takes two host uplinks and fans out to four GPUs. You already own both."},adapter:{name:"C-Payne Device Adapter x8/x16 (VERTICAL)",qty:8,dims:"≈128 × 41 mm · photo-scaled ±3 mm",build:Qd,link:"https://c-payne.com/products/mcio-pcie-gen5-device-adapter-x8-x16",price:50,desc:'Turns 2× MCIO 8i into a PCIe x16 slot the GPU plugs into — a "portable slot". Vertical MCIO + 6-pin point straight down, which is what allows single-slot-width spacing. The 6-pin 12 V feed is mandatory (and must NOT be an EPS/ATX plug). One per GPU; the piece the mount has to anchor.'},psu:{name:"Seasonic TX-1600 Noctua Edition",qty:2,dims:"210 × 150 × 86 mm · ATX",build:()=>ip(!0),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",desc:"1600 W Titanium, ATX 3.1, 2× native 12V-2×6. Two units — both Noctua Edition — on two separate 120V circuits, synced by an ADD2PSU."},rack:{name:"StarTech 4POSTRACK25U",qty:1,dims:'25U (1111 mm) · 19" · 22–40" deep',build:Dd,link:"https://www.startech.com/en-us/server-management/4postrack25u",desc:'Open 4-post 25U rack — 22–40" adjustable depth, square-hole rails, casters. Ships flat-packed.'},shelf:{name:"StarTech ADJSHELF vented shelf",qty:3,dims:"445 × 700 mm tray · 1U · 80 kg cap.",build:()=>$d(),link:"https://www.startech.com/en-us/server-management/adjshelf",desc:"Three total. Bottom: the UDM-SE gateway, port face over the rear channel. Middle: fan-down PSUs breathing through the vents, with the WRX90 on a 2020 mezzanine above them. Upper: the card row up front and both switches on the rear strip. No data cable ever crosses a shelf floor — zero drilling."},mount:{name:"2020 T-slot extrusion — Misumi HFS5-2020, cut to length",qty:23,dims:"20 × 20 mm profile · cut: 4× 435 + 3× 360 + 2× 330 + 2× 285 + 2× 143 + 4× 86 + 2× 80 + 2× 56.5 + 2× 50.5 mm",build:()=>sn(435),link:"https://us.misumi-ec.com/vona2/detail/110302683830/",links:[{label:"M5×10 button-heads, 50 pk (Amazon B01H6PKBZA)",url:"https://www.amazon.com/dp/B01H6PKBZA"},{label:"M5 drop-in T-nuts, 100 pk (Amazon B0F1BX43T9)",url:"https://www.amazon.com/dp/B0F1BX43T9"}],note:"order HFS5-2020-‹len›, all plain (no end taps needed) ≈ $110–125 the set of 23 (from verified 448 mm @ $7.39) — every piece ≥ Misumi's 50 mm minimum, no hand-cutting, ZERO drilled holes · standoff stacks for adapters/board/switches: see the M3 riser row",desc:"Aluminium frame, all 20 × 20, all extrusion-to-extrusion — no member bolts point-to-tray (a leg's end never lines up with the vent grid), so nothing is drilled. GPU shelf: two 435 mm rails under the adapters, the 435 mm ear rail on 143 mm uprights, the 435 mm rear support rail on 50.5 mm legs, and 80 + 56.5 mm side ties that lace the legs to the rails (split around the outer adapters' MCIO plugs, spliced by a flat plate) — the chassis clamps to the tray with two M5s through existing vents into the front rail's slot. Mezzanine: 285 mm floor runners ride the vent columns at x ±190 (four M5 vent clamps), carrying 86 mm legs, 330 beams and three 360 cross-rails flush at deck height. Board standoff stack: M3 spring T-nut → 8 mm brass standoff → M3 button-head + washer. Horizontals are cut 435 to fit the 439 mm clear width between the ADJSHELF side lips."},earRail:{name:"GPU ear rail — 2020 across the bracket ears",qty:1,dims:"435 mm · 20 × 20 mm · top slot = the screw row",build:()=>sn(435),link:"https://us.misumi-ec.com/vona2/detail/110302683830/",links:[{label:"M3×8 button-heads, 100 pk (Amazon B07H14B2XM)",url:"https://www.amazon.com/dp/B07H14B2XM"},{label:"M3 washers + T-nuts — see the M3 screw card",url:"https://www.amazon.com/dp/B09B3GXTL1"}],note:"HFS5-2020-435, $7.39 (part of the extrusion set) — no cutting or drilling beyond the Misumi order",desc:"Open-frame (mining-rig) retention: the row of ear folds rests directly on the rail's top face and each card screws down through both of its fold slots — M3 button-heads into drop-in T-nuts in the rail's top slot, two per card. Card pitch is continuously adjustable along the slot (no drilled hole pattern), and this one stock piece replaces the cut-and-drilled aluminium angle entirely. Front face sits 3.2 mm behind the bracket plane so the T-slot centreline lands in the fold slots' open band."},screw:{name:"M3 × 8 button-heads + washers + T-nuts (GPU ears)",qty:16,dims:"M3 × 0.5 · ISO 7380 + DIN 125 (7 mm OD) + drop-in",build:V1,link:"https://www.amazon.com/dp/B07H14B2XM",links:[{label:"M3 washers, 100 pk (Amazon B0844LJZ3J)",url:"https://www.amazon.com/dp/B0844LJZ3J"},{label:"M3 spring-loaded drop-in T-nuts, 100 pk (Amazon B09B3GXTL1)",url:"https://www.amazon.com/dp/B09B3GXTL1"}],note:"screws $8.89/100 + washers $8.84/100 + spring T-nuts $9.99/100 (verified 2026-07-03) · plain 30 pk alt: BINZZO B085BN2NMF $6.99",desc:"TWO per card: the ear fold carries two open slots on the standard 20.32 mm slot pitch (one over each slot position of the dual-slot bracket), and the factory CAD measures them at 3.0 mm clear — M3 clearance, NOT the 4.4 mm case-screw slot of a consumer bracket, so M3 is the only size that passes. The 7 mm washer spreads the 5.7 mm button head across the open slot; spring-loaded drop-in T-nuts hold their position in the rail while you start the screws blind under the ears."},bracket:{name:"2020 corner brackets (frame joints)",qty:26,dims:"20-series L-brace · M5 bolts + slide nuts included",build:W1,link:"https://www.amazon.com/dp/B0BMLY9MZX",note:"FORRCKY 10-set pack $21.66 ×3 (verified 2026-07-03) — ear rail 2, rear support 2, side-tie legs 4, tie↔rail laps 4, mezzanine leg↔runner 4, leg↔beam 4, deck-rail ends 6 · plus 2 flat splint plates ~110 mm (any 2020 straight/mending plate pack — unverified, ~$8)",desc:"Joins two members where end-taps can't reach: T-nut in each slot, one bracket per joint (the pack ships with its own M5 hardware). Vertical corners at the ear-rail uprights, rear-support legs, side-tie ends and mezzanine legs (top AND bottom, onto the floor runners); lap brackets where the side ties ride the adapter rails; flat corners where the three deck rails butt into the side beams flush at the top face."},riser:{name:"M3 brass standoffs — adapter / board / switch risers",qty:49,dims:"32× 25+6 mm stacks · 17× 8 mm · M3 × 0.5 M-F",build:X1,link:"https://www.amazon.com/dp/B0FB2SKS9T",links:[{label:"M3×6 M-F, 50 pk (HELIFOUNER B0BDQSSHG8)",url:"https://www.amazon.com/dp/B0BDQSSHG8"},{label:"M3×8 M-F, 50 pk (Amazon B01H7MMI4E)",url:"https://www.amazon.com/dp/B01H7MMI4E"},{label:"M3 hex nuts, 100 pk (Amazon B0BLC26S9J)",url:"https://www.amazon.com/dp/B0BLC26S9J"}],note:"25 mm $14.09/50 (PATIKIL B0FB2SKS9T — low stock; SS alt B0GPX4T584) + 6 mm $6.69/50 + 8 mm $6.99/50 + nuts $5.99/100 (verified 2026-07-03)",desc:"One M3 system lifts everything. Adapters: 31 mm stacks (6 mm M-F into a rail T-nut, 25 mm M-F on top, M3×8 + washer through the board into its deeper female) at the 4 plated ø3.4 holes — verified from vendor CAD at x ±4.5, ~5 mm in from each end. Board deck: 9× 8 mm from cross-rail T-nuts. Switches: 4× 8 mm each, stud down through a shelf vent with a hex nut beneath (the 100 × 100 pattern is M3-class per the vendor drawing). Screws, washers and spring T-nuts come from the ear-fastener packs — 65 screws and 57 T-nuts used, one pack of each covers all."},feet:{name:"PSU feet — adhesive PU bumpers",qty:8,dims:"ø18.2 × 15.2 mm · 60–70 Shore A",build:q1,link:"https://www.amazon.com/dp/B0949K8PDQ",note:"$11.00/14 (Bumper Specialties BS28, verified 2026-07-03) · clear alt B0949DJ6LD",desc:"Under the fan-down PSUs: the inverted fan hub pokes 7.3 mm below the chassis, so 15 mm feet float it 7.7 mm clear of the vented tray and let it breathe. Four per PSU, ~11 N each — loafing for a 3M-Bumpon-class polyurethane pad."},bolt:{name:"M5 × 10 mm button-head screws (ISO 7380)",qty:12,dims:"M5 × 0.8 · 10 mm · pack of 50",link:"https://www.amazon.com/dp/B01H6PKBZA",note:"$7.99/50 (Amazon B01H6PKBZA) · McMaster alt 92095A208 $17.80/100",desc:"The six tray clamps: up through EXISTING vent slots into drop-in T-nuts in the bottom slots of the mezzanine runners (4) and the GPU front rail (2) — the T-nut slides along the member to meet whatever vent is nearby, so nothing needs to line up and nothing gets drilled. 10 mm suits 1.2 mm tray + nut; the corner brackets bring their own bolts."},tnut:{name:"M5 drop-in T-nuts, 2020 slot",qty:8,dims:"6 mm slot · hammer-head, nickel-plated · pack of 100",link:"https://www.amazon.com/dp/B0F1BX43T9",note:"$8.99/100 (Amazon B0F1BX43T9) — drop-in style retrofits an assembled frame",desc:"For every joint that isn't an end-tap: clamping the rails to the shelf and the corner-bracket sides of the rail joints. Hammer-head style quarter-turns into the 6 mm slot after assembly, so joints can be added to the standing frame."},pdu:{name:"Tripp Lite PDUMH20 metered PDU",qty:2,dims:"1U · 120 V/20 A · 5-20P or L5-20P in · 12× 5-15/20R",build:lp,link:"https://assets.tripplite.com/product-pdfs/en/pdumh20.pdf",note:"street ~$200–250 each — ships with both L5-20P and 5-20P plugs; verify at order time",desc:"One per circuit — the PORTABILITY plan: the rig runs anywhere the house offers two dedicated 120 V/20 A circuits (chapel first, basement when finished), no per-location 240 V work. Each leg carries one TX-1600 + its host share ≈ 13.6 A peak, inside a 20 A branch's 16 A continuous limit; a shared 15 A room circuit (12 A cap) is NOT enough. The old range cable remains the upgrade path: an electrician can land it as two 120 V legs (MWBC) or one 240 V/30 A circuit + a single CyberPower PDU41008 for a permanent basement install."},udm:{name:"Ubiquiti UniFi Dream Machine SE",qty:1,dims:"442 × 286 × 44 mm · 1U",build:op,owned:1,link:"https://store.ui.com/us/en/products/udm-se",price:499,desc:"The existing home gateway, reverse-mounted low in the rack so its port face meets the rear cable channel. Exposes 10G only as SFP+ — bridged to the board's onboard 10GBASE-T for fast model staging (~2 min per 149 GB), not a serving requirement."},xcvr:{name:"Ubiquiti UACC-CM-RJ45-MG transceiver",qty:1,dims:"SFP+ → 10GBASE-T · 100 m on Cat6a",build:ap,link:"https://store.ui.com/us/en/products/uacc-cm-rj45-mg",price:65,desc:`SFP+ to 10GBASE-T RJ45 module in the UDM-SE's spare LAN SFP+ port. Must be the 100 m -MG, not the 30 m -10G — and bought from store.ui.com; several third-party "-MG" listings are 30 m clones reusing the model string.`},cat6a:{name:"Shielded Cat6a S/FTP patch",qty:1,dims:"10 ft (3 m) · S/FTP",build:()=>or("cat6a"),link:"https://www.fs.com/products/73065.html",price:7,stockMm:[3048],desc:"The 10G staging link: board 10GBASE-T port down the rear cable channel into the -MG transceiver. Shielded S/FTP for 10GBASE-T alien-crosstalk headroom."},mcio:{name:"MCIO 8i Gen5 cable",qty:24,dims:"45/75 cm · 8i (SFF-TA-1016), 85 Ω",build:()=>or("mcio"),link:"https://c-payne.com/products/mcio-sff-ta-1016-8i-cable-pcie-gen5",price:40,stockMm:[450,750],desc:"PCIe Gen5 data. 8 host→switch + 16 switch→GPU = 24. Every x16 link is two of these."},power12v:{name:"12V-2×6 GPU power",qty:8,dims:"600 W-rated · 16-pin · stock 75 cm (EPS 70 cm)",build:()=>or("power12v"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSUs (2 native + 3 via 8-pin per unit) · the flagged EPS run takes a 20 cm EPS extension",stockMm:[700,750,900],desc:"One 600 W-rated feed per GPU from a PSU (4 native + 4 via 2×8-pin adapters). One cable per card — never split."},aux6:{name:"PCIe 6-pin aux feed",qty:10,dims:"6-pin · ≤ 75 W · stock 69 cm (+30/50 cm ext where flagged)",build:()=>or("aux6"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSUs (peripheral leads) · runs beyond 69 cm take cheap 30/50 cm 6-pin extensions — fine at ≤75 W (or use Seasonic's 3-drop daisy leads)",stockMm:[690,990,1190],desc:"≤75 W feeds for the 2 switch boards + 8 device adapters. Low-current, fine to split off spare PSU leads."},atx:{name:"ATX 24-pin + EPS",qty:1,dims:"24-pin · stock 61 cm (+30 cm ext if flagged)",build:()=>or("atx"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSU · a 30 cm 24-pin extension covers the flagged run",stockMm:[610,910],desc:"Mainboard and CPU power from the host-side PSU."},tie:{name:"Nylon cable ties",qty:1,dims:"2.5 × 100 mm · 100-pack",build:()=>{const i=new le,t=Wt(8,3.6,N.cablePlug,18);t.rotation.z=Math.PI/2,i.add(t);for(const e of[3.8,-3.8]){const n=Wt(3.4,60,N.cable,12);n.rotation.z=Math.PI/2,n.position.y=e,i.add(n)}return i},note:"any brand — the model places one every ~10 cm along each bundle",desc:"Cinch points for the loom: every multi-cable run is tied every ~10 cm so bundles ride together instead of splaying. The viz pinches the routed cables at each tie."},wall:{name:"Perforated steel enclosure panels — clip-on, cut to the frame",qty:5,dims:"2× 572 × 1215 (front/rear) + 2× 712 × 1120 (sides) + 572 × 716 (top) · 16 ga",build:k1,link:"https://www.mcmaster.com/products/perforated-steel-sheets/",links:[{label:'McNichols round-hole carbon steel (1/4" on 5/16" staggered = 58% open, 6.4 mm holes — stock pattern)',url:"https://www.mcnichols.com/perforated-metal/round-hole"},{label:"Industrial Metal Supply 16 ga 24×48 sheets (price class ~$30–40/sheet)",url:"https://www.industrialmetalsupply.com/perforated-steel-sheet/pss164824750"},{label:"BICSI ≥63% open-area guidance (why open area is the whole game)",url:"https://electronmetal.ca/blogs/series-4000-server-cabinets/server-cabinet-door-types-airflow-security-access-guide"}],note:'cut list: 2× 24"×48" sheets (front/rear) + 3× 36"×48" (sides + top) ≈ $150–300 the set · stock-pattern tradeoff: 1/4" holes on 5/16" = 58% open but truly finger-proof (ø6.4 mm); 3/8" on 7/16" = 66% open but ø9.5 mm holes; the ≥63%-AND-small-holes combo is datacenter-door tooling — i.e. the enclosed-cabinet re-spec, still the open alternative. Never window-screen mesh (costs 4–30 °C)',desc:`Full envelope for toddler + cats. Rack-grade perforation near the 63%-open knee is thermally transparent (measured: a 63%-open door ≈ no door; 58% gives up a few percent, nothing at this ~3 kW load); fine mesh is 4–30 °C worse. Panels are cut to the frame faces they cover — flange-to-flange front/rear from base to top, sides over the post legs (the 600 mm steel base closes the perimeter below), roof over the top brackets. Attachment: front/rear panels screw into the posts' square-hole columns with the rack's included M6 cage-nut hardware (5 per side, on the U grid); sides and roof float on rubber-coated stud magnets and lift straight off for service; every cut edge wears rubber U-channel trim. Toggleable via the "walls" layer.`},wallmount:{name:"Rubber-coated neodymium stud magnets (side/top panels)",qty:16,dims:"ø20–43 mm puck · 1/4-20 stud + nut · ~24 lb pull each",link:"https://www.amazon.com/MUTUACTOR-Neodymium-Magnets-Strong-Hanging/dp/B0DT9BHP4S",links:[{label:"30 lb 4-pack alt (B0DWXFFKRK)",url:"https://www.amazon.com/Strong-Rubber-Coated-Magnets-Threaded/dp/B0DWXFFKRK"}],note:"~$25 per 4-pack × 4 ≈ $100 — 6 per side panel + 4 on the roof; a ~5.5 kg side panel hangs on 6× 24 lb pucks with an order-of-magnitude margin. Front/rear panels need NO purchase: the rack ships with 32 M6 cage nuts + screws + cup washers",desc:'The real "clip-on": the rubber-coated puck grips the steel frame, the stud bolts through the panel, and the whole panel lifts off by hand for service — no tools, no scratched powder coat, and the rubber jacket keeps toddler-pull shear from sliding. Bolted M6 cage-nut columns hold the front/rear panels rigid where the fan kits and filter hang.'},edgetrim:{name:"Rubber U-channel edge trim (panel edges)",qty:1,dims:'1/16" channel · EPDM push-on/adhesive · ~56 ft needed',link:"https://www.amazon.com/Rubber-Self-Adhesive-Protector-Material-Channel/dp/B0BK85WM6S",links:[{label:'Trim-Lok neoprene push-on, 1/16" edge (B00NL4C97E)',url:"https://www.amazon.com/Trim-Lok-Rubber-Edge-Trim-Push/dp/B00NL4C97E"}],note:"~$20–30 for a 100 ft roll (perimeters total ≈ 56 ft) — sheared perforated-sheet edges are SHARP; this is a toddler-adjacent build",desc:"Push-on EPDM channel over every cut panel edge. Cut sheet edges from the perforation pattern are razor-jagged; the trim caps them, quiets panel rattle against the frame, and finishes the DIY panels to look shop-made."},fanwall:{name:"AC Infinity AC-RRF7 rack fan kit — dual 120 mm boundary exhaust",qty:2,dims:"per kit: 2× 132 × 132 × 42 mm · 200 CFM · 26 dBA · 105 mm hole pitch",build:dp,link:"https://acinfinity.com/rack-roof-fan-kit-dual-cooling-fans-with-speed-controller/",links:[{label:"Amazon listing (B07FQLHCXL)",url:"https://www.amazon.com/AC-Infinity-Dual-Fans-Controller-cooling/dp/B07FQLHCXL"}],note:`$69.99 each (acinfinity.com, verified 2026-07-03) — TWO kits = 4× 120 mm, 400 CFM: carrying the full ~3 kW on boundary flow alone needs ~280–370 CFM (+20…+15 °C rise), so two kits cover it even before the ≥63% envelope's passive throughput (BICSI rates the class to ~5 kW) · still-hot escalation: CLOUDLINE T8 (807 CFM) + 8" ducting ≈ $239 · controllers link to share one program`,desc:"Thermostat/speed-controlled boundary exhaust on the REAR panel (never the roof — cats sleep on warm rack tops): one pair at the GPU plume height, one at the PSU/board zone. Inline 8-speed controllers, dual-ball 67k-h bearings, steel spiral guards. Sits ON the enclosure boundary because a room circulator can't push air across a resistive panel. OPEN QUESTION flagged in research/enclosure-fans.md: this layout's card row and PSUs currently exhaust out the FRONT, against the rear through-flow — either the card row flips rearward or EXHAUST_FACE in walls.js flips the kits to the front."},filter:{name:"Washable coarse intake filter media (cat hair)",qty:1,dims:"~520 × 720 × 12 mm pad · framed, thumb-clipped · cut from a 25 ft × 12 in roll",build:()=>pp(340,340),link:"https://www.amazon.com/Northwest-Enterprises-Roll-Business-Electrostatic/dp/B08NTB55VP",links:[{label:"LifeSupplyUSA cut-to-fit electrostatic kit (alt)",url:"https://www.amazon.com/LifeSupplyUSA-Vent-Electrostatic-Filtration-size/dp/B08TRWSTZF"}],note:'~$20–30 — Northwest Enterprises washable electrostatic media roll (25 ft × 12 in × 1/8 in, B08NTB55VP); three 12" strips cover the 520 mm-wide intake frame',desc:`Coarse washable media on the OUTSIDE of the front intake panel, low (the notes' "generous passive intake area low at the front"): cat hair mats where a vacuum reaches in thirty seconds instead of inside the Max-Q blower heatsinks (a teardown). Monthly vacuum; a slow intake-temp creep at constant load on the SensorPush is the filter-fouling alarm.`}},pa=[{key:"walls",label:"Enclosure",parts:["wall","filter"]},{key:"fans",label:"Case fans",parts:["fanwall"]},{key:"rack",label:"Rack frame",parts:["rack"]},{key:"shelves",label:"Shelves",parts:["shelf"]},{key:"gpus",label:"GPUs",parts:["gpu"]},{key:"adapters",label:"Device adapters",parts:["adapter"]},{key:"switches",label:"PCIe switches",parts:["switch"]},{key:"psus",label:"Power supplies",parts:["psu"]},{key:"board",label:"Board + hosts",parts:["board","host"]},{key:"frame",label:"Mount frame",parts:["mount","earRail","screw","bracket","riser","feet"]},{key:"network",label:"Network + power",parts:["udm","xcvr","pdu"]},{key:"cables",label:"Cables + ties",parts:["mcio","power12v","aux6","atx","cat6a","tie"]}],Y1={gpu:"#76b900",adapter:"#0f9a5c",host:"#0f7a49",switch:"#1c6a44",psu:"#8a5a3c",board:"#202027",rack:"#24242a",shelf:"#42424c",mount:"#9aa0aa",earRail:"#9aa0aa",screw:"#c9a24b",bracket:"#9aa0aa",riser:"#c9a24b",feet:"#141418",udm:"#e6e7ea",xcvr:"#c9a24b",pdu:"#1c1c22",cat6a:"#31517a",mcio:"#131316",power12v:"#262422",aux6:"#33404d",atx:"#262422",tie:"#1b1b21",wall:"#2b2b33",fanwall:"#969aa4",filter:"#3b3e42"},xp={};for(const i of pa)for(const t of i.parts)xp[t]=i.key;const Dn=Object.fromEntries(pa.map(i=>[i.key,!0])),wf=typeof location<"u"&&new URLSearchParams(location.search).get("hide");if(wf)for(const i of wf.split(","))i in Dn&&(Dn[i]=!1);function Ws(i){i.traverse(t=>{const e=xp[t.userData.part];e&&(t.visible=Dn[e])})}const Tf=`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="M1.5 8s2.4-4.2 6.5-4.2S14.5 8 14.5 8 12.1 12.2 8 12.2 1.5 8 1.5 8Z"/><circle cx="8" cy="8" r="2.1"/></svg>`,Af=`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3">
  <path d="M1.5 8s2.4-4.2 6.5-4.2S14.5 8 14.5 8 12.1 12.2 8 12.2 1.5 8 1.5 8Z" opacity=".35"/>
  <line x1="2.5" y1="13.5" x2="13.5" y2="2.5"/></svg>`,$1='<svg class="caret" viewBox="0 0 8 8" fill="currentColor"><path d="M1.5 0.5 6.5 4 1.5 7.5Z"/></svg>';function Z1(i){const t=document.getElementById("tree"),e=a=>a.parts.filter(o=>ke[o]&&ke[o].name),n=pa.map(a=>`
    <section class="grp${Dn[a.key]?"":" off"}" data-grp="${a.key}">
      <div class="grp-row">
        <button class="grp-toggle" aria-expanded="false">${$1}<span class="grp-label">${a.label}</span></button>
        <button class="eye" title="Show or hide ${a.label.toLowerCase()}" aria-pressed="${Dn[a.key]}">${Dn[a.key]?Tf:Af}</button>
      </div>
      <div class="leaves">${e(a).map(o=>`
        <button class="leaf" data-part="${o}">
          <i class="sw" style="background:${Y1[o]||"#444"}"></i>
          <span class="nm">${ke[o].name}</span>
          <span class="qty">×${ke[o].qty}</span>
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
    <p class="tree-note">Left switch feeds cards 1–4, right feeds 5–8 · single GPU row across the 19″</p>`;const s=()=>{for(const a of t.querySelectorAll(".grp")){const o=Dn[a.dataset.grp];a.classList.toggle("off",!o);const c=a.querySelector(".eye");c.innerHTML=o?Tf:Af,c.setAttribute("aria-pressed",o)}};t.addEventListener("click",a=>{const o=a.target.closest(".grp-toggle");if(o){const h=o.closest(".grp").classList.toggle("open");o.setAttribute("aria-expanded",h);return}const c=a.target.closest(".eye");if(c){const u=c.closest(".grp").dataset.grp;Dn[u]=!Dn[u],s(),Ws(i());return}const l=a.target.closest(".leaf");l&&dispatchEvent(new CustomEvent("rig:inspect",{detail:l.dataset.part}))});const r=a=>{for(const o of pa)Dn[o.key]=a(o.key);s(),Ws(i())};document.getElementById("layers-all").onclick=()=>r(()=>!0),document.getElementById("layers-none").onclick=()=>r(a=>!["walls","fans"].includes(a)),addEventListener("rig:selected",a=>{for(const o of t.querySelectorAll(".leaf")){const c=o.dataset.part===a.detail;o.classList.toggle("sel",c),c&&o.closest(".grp").classList.add("open")}}),addEventListener("rig:closed",()=>{for(const a of t.querySelectorAll(".leaf.sel"))a.classList.remove("sel")})}const re=(i,t)=>(i.userData.part=t,i);function vp(){const i=new le;i.add(re(Dd(),"rack")),i.add(re(B1(),"wall"));for(const U of bf){const k=re(dp(),"fanwall");k.rotation.y=Math.PI,k.position.set(0,U.y,U.z+Tr*21),i.add(k)}const t=re(pp(),"filter");t.position.set(0,Ef.y,Ef.z),i.add(t);const{udmShelfTop:e,switchShelfTop:n,gpuShelfTop:s}=Ly,r=[];for(const U of[e,n,s]){const k=re($d(),"shelf");k.position.y=U,i.add(k),r.push([U,k])}const a={gpuPwr:[],gpuMcio:[],adAux:[],swAux:[],hostMcio:[],boardPwr:[]},o=[-120,120],c=s+ep,l=n+58,u=[-90,90],h=-88;u.forEach(U=>{const k=re(ip(!0),"psu");k.position.set(U,l,h),k.rotation.z=Math.PI,i.add(k);for(const tt of[-60,60])for(const St of[-85,85]){const Bt=re(Wt(9,15,N.caster,16),"feet");Bt.position.set(U+tt,n+7.5,h+St),i.add(Bt)}});const f=(U,k)=>[u[U]-k[0],l-k[1],h-Pd.L/2-3],d=-130,g=U=>U>0?-1:1;o.forEach(U=>{const k=re(np(),"switch");k.position.set(U,c,d),U>0&&(k.rotation.y=Math.PI),i.add(k);const tt=g(U);a.swAux.push([U+tt*wr[0],c+wr[1],d+tt*wr[2]])});const x=n+1.5,m=x+20,p=m+86,v=p+20,_=[-158,0,124],y=190,E=[-150,115],b=(U,k,tt,St,Bt,de)=>{const Fe=re(Wt(U,k,N.gold,14),"mount");de==="z"&&(Fe.rotation.x=Math.PI/2),de==="x"&&(Fe.rotation.z=Math.PI/2),Fe.position.set(tt,St,Bt),i.add(Fe)},S=(U,k,tt,St,Bt,de)=>{const Fe=re(q(U,k,tt,N.rail),"mount");Fe.position.set(St,Bt,de),i.add(Fe)};for(const U of[-1,1]){const k=re(sn(285),"mount");k.rotation.y=Math.PI/2,k.position.set(U*y,x+10,-17.5),i.add(k);for(const tt of[-58,34])b(4.7,2.2,U*y,n-2.6,tt,"y")}for(const U of[-1,1])for(const k of E){const tt=re(sn(86),"mount");tt.rotation.z=Math.PI/2,tt.position.set(U*y,m+43,k),i.add(tt);const St=k<0?1:-1,Bt=k+St*10;S(17,2.5,18,U*y,m+1.25,Bt+St*9),S(17,18,2.5,U*y,m+11.5,Bt+St*1.25),b(4,2,U*y,m+3.5,Bt+St*12,"y"),b(4,2,U*y,m+15,Bt+St*4.6,"z"),S(17,2.5,18,U*y,p-1.25,Bt+St*9),S(17,18,2.5,U*y,p-9,Bt+St*1.25),b(4,2,U*y,p-3.5,Bt+St*12,"y"),b(4,2,U*y,p-12,Bt+St*4.6,"z")}for(const U of[-1,1]){const k=re(sn(330),"mount");k.rotation.y=Math.PI/2,k.position.set(U*y,p+10,-17),i.add(k)}for(const U of _){const k=re(sn(360),"mount");k.position.set(0,p+10,U),i.add(k);for(const tt of[-1,1])S(2.5,17,18,tt*(180-1.25),p+10,U-19),S(18,17,2.5,tt*171,p+10,U-11.25),b(4,2,tt*(180-3.6),p+10,U-19,"x"),b(4,2,tt*171,p+10,U-13.6,"z")}for(const U of _)for(const k of[-145,0,145]){const tt=re(Wt(2.6,8,N.gold,6),"riser");tt.position.set(k,v+4,U),i.add(tt),b(2.9,1.8,k,v+11.2,U,"y")}const R=re(rp(),"board");R.position.set(0,v+9,0),i.add(R);const M=v+18;a.boardPwr.push([Vc.atx24[0],M,Vc.atx24[1]],...Vc.eps.map(U=>[U[0],M,U[1]]));const w=v+48,D=ml+_l;P1.forEach(U=>{const k=re(gp(),"host");k.position.set(U,w,D),k.rotation.y=Math.PI,i.add(k),a.hostMcio.push(...mp.map(tt=>[U-tt[0],w+tt[1],D-tt[2]]))});const F=e+Fs.H/2,H=-195+Fs.D/2,L=re(op(),"udm");L.position.set(0,F,H),L.rotation.y=Math.PI,i.add(L);const O=re(ap(),"xcvr");O.position.set(-75,F+vf[1],H-Fs.D/2-12),O.rotation.y=Math.PI,i.add(O);const G=[Wc[0],v+9+Wc[1],Wc[2]],Q=[-75,F+vf[1],H-Fs.D/2-30];for(const U of[22,22+44.45]){const k=re(lp(),"pdu");k.position.set(0,U,-355.6+cp.D/2),k.rotation.y=Math.PI,i.add(k)}const K=_c*_s,Y=K-13,st=100,it=s+52,_t=it+62,Z=st+41.85-me.slotZ,ct=s+20;for(const U of me.holesZ){const k=re(sn(Y),"mount");k.position.set(0,s+10,Z+U),i.add(k)}const Mt=it-Cd.PCB/2-ct;for(let U=0;U<_s;U++){const k=(U-(_s-1)/2)*_c,tt=k-me.slotX,St=re(Qd(),"adapter");St.position.set(tt,it,Z),i.add(St);for(const de of me.holesZ)for(const Fe of[-1,1]){const an=re(Wt(2.6,Mt,N.gold,12),"riser");an.position.set(tt+Fe*me.holesX,ct+Mt/2,Z+de),i.add(an)}a.adAux.push([tt+me.auxX,it-16,Z+me.auxZ]);const Bt=re(Jd(),"gpu");Bt.position.set(k,_t,st),i.add(Bt),a.gpuPwr.push([k,_t+Ls.H/2-8,st-(Ls.L/2+6)]),a.gpuMcio.push([tt+me.mcioX,it-14,Z+me.mcioZ[0]],[tt+me.mcioX,it-14,Z+me.mcioZ[1]])}const Ct=_t+jd,bt=st+Ls.L/2+13.2,zt=re(sn(Y),"earRail");zt.position.set(0,Ct-10,bt),i.add(zt);for(let U=0;U<_s;U++){const k=(U-(_s-1)/2)*_c;for(const tt of Kd){const St=re(Wt(2.75,2,N.gold,16),"screw");St.position.set(k+tt,Ct+1.4+1,bt),i.add(St)}}const Ht=(U,k,tt,St)=>{const Bt=re(q(18,2.5,17,N.rail),"bracket");Bt.position.set(U+St*19,k-1.25,tt),i.add(Bt);const de=re(q(2.5,18,17,N.rail),"bracket");de.position.set(U+St*11.25,k-11.5,tt),i.add(de)};for(const U of[-1,1]){const k=Ct-20-s,tt=re(sn(k),"mount");tt.rotation.z=Math.PI/2,tt.position.set(U*(Y/2-10),s+k/2,bt),i.add(tt),Ht(U*(Y/2-10),Ct-20,bt,-U)}const Rt=st-100,kt=_t+_f-2-10,B=re(sn(Y),"mount");B.position.set(0,kt,Rt),i.add(B);const gt=re(q(Y-2,2,12,N.vent),"mount");gt.position.set(0,_t+_f-1,Rt),i.add(gt);for(const U of[-1,1]){const k=kt-10-s,tt=re(sn(k),"mount");tt.rotation.z=Math.PI/2,tt.position.set(U*(Y/2-10),s+k/2,Rt),i.add(tt),Ht(U*(Y/2-10),kt-10,Rt,-U)}const nt=(U,k,tt)=>{S(18,2.5,17,U+tt*9,s+21.25,k),S(2.5,18,17,U+tt*1.25,s+29,k),b(4,2,U+tt*12,s+23.5,k,"y"),b(4,2,U+tt*4.6,s+32,k,"x")},ft=(U,k,tt)=>{S(17,2.5,18,U,s+18.75,k+tt*9),S(17,18,2.5,U,s+11,k+tt*1.25),b(4,2,U,s+16.5,k+tt*12,"y"),b(4,2,U,s+8,k+tt*4.6,"z")},et=Z+me.holesZ[0],Dt=Z+me.holesZ[1];for(const U of[-1,1]){const k=U*(Y/2-10),tt=re(sn(80),"mount");tt.rotation.y=Math.PI/2,tt.position.set(k,s+30,Rt+50),i.add(tt),ft(k,Rt+10,1),nt(k-U*10,et,-U);const St=re(sn(56.5),"mount");St.rotation.y=Math.PI/2,St.position.set(k,s+30,bt-38.25),i.add(St),ft(k,bt-10,-1),nt(k-U*10,Dt,-U);const Bt=re(q(2.5,17,110,N.rail),"bracket");Bt.position.set(U*(Y/2-21.25),s+26,135),i.add(Bt),b(4,2,U*(Y/2-23.35),s+30,85,"x"),b(4,2,U*(Y/2-23.35),s+30,185,"x")}for(const U of[-108,108])b(4.7,2.2,U,s-2.6,et,"y");i.updateMatrixWorld(!0);const xt=[];i.traverse(U=>{if(U.userData.solidBoxes)for(const k of U.userData.solidBoxes)xt.push(new ae(new A(k[0],k[1],k[2]),new A(k[3],k[4],k[5])).applyMatrix4(U.matrixWorld));if(U.isMesh&&!U.userData.noCollide){const k=new ae().setFromObject(U);k.isEmpty()||xt.push(k)}});const P=new Set(["gpu","switch","psu","board","host","adapter","mount","earRail","screw","bracket","riser","feet"]),T=[];i.traverse(U=>{P.has(U.userData.part)&&T.push(new ae().setFromObject(U))}),xt.push(new ae(new A(-K/2-10,_t+Ls.H/2+2,st-65),new A(K/2+10,_t+Ls.H/2+62,st+100)));for(const U of o)xt.push(new ae(new A(U-52,c+26,d-52),new A(U+52,c+81,d+52)));for(const U of u)xt.push(new ae(new A(U-76,n-62,h-106),new A(U+76,n-4,h+106)));for(const U of bf){const k=U.z-Tr*2,tt=U.z-Tr*62;xt.push(new ae(new A(-160,U.y-90,Math.min(k,tt)),new A(160,U.y+90,Math.max(k,tt))))}let W=null;i.userData.router={fails:0,overuse:0,rounds:0,looms:0,debugVoxels:()=>(W??=new _p(xt,{bias:Mr,normalBoxes:T})).debugVoxels()};const at=[0,1,0],lt=[0,-1,0],rt=[0,0,-1],Pt=[],mt=(U,k,tt,St)=>Pt.push({a:U,b:k,type:tt,r:Cy(tt),opts:St}),wt=(U,k)=>[U+g(U)*Rs.device[k][0],c+Rs.device[k][1],d+g(U)*Rs.device[k][2]],Ut=(U,k)=>[U+g(U)*Rs.host[k][0],c+Rs.host[k][1],d+g(U)*Rs.host[k][2]],Xt=(U,k)=>[g(U)*k[0],k[1],g(U)*k[2]],ot=(U,k)=>U>0&&k===3,ie=(U,k)=>ot(U,k)?wt(U,3):Ut(U,k),Yt=(U,k)=>Xt(U,ot(U,k)?Ho.device[3]:Ho.host[k]),Gt=(U,k)=>ot(U,k)?Ut(U,3):wt(U,k),It=(U,k)=>Xt(U,ot(U,k)?Ho.host[3]:Ho.device[k]),Et=(U,k)=>ot(U,k)?Go.device[3]:Go.host[k],I=(U,k)=>ot(U,k)?Go.host[3]:Go.device[k];for(let U=0;U<_s;U++){const k=U<4?o[0]:o[1],tt=U%4;mt(a.gpuMcio[U*2],Gt(k,tt*2),"mcio",{na:lt,nb:It(k,tt*2),tb:I(k,tt*2)}),mt(a.gpuMcio[U*2+1],Gt(k,tt*2+1),"mcio",{na:lt,nb:It(k,tt*2+1),tb:I(k,tt*2+1)})}[0,1,2,3].sort((U,k)=>a.hostMcio[U*2][0]-a.hostMcio[k*2][0]).forEach((U,k)=>{const tt=k<2?o[0]:o[1],St=k%2;mt(a.hostMcio[U*2],ie(tt,St*2),"mcio",{na:at,nb:Yt(tt,St*2),tb:Et(tt,St*2)}),mt(a.hostMcio[U*2+1],ie(tt,St*2+1),"mcio",{na:at,nb:Yt(tt,St*2+1),tb:Et(tt,St*2+1)})});const Lt=[Xe.hpwr[0],Xe.hpwr[1],Xe.cpu8[3],Xe.cpu8[4],Xe.cpu8[5]],Tt=-215,ut=900,z=[Lt.slice(0,5).reduce((U,k)=>U+(u[0]-k[0]),0)/5,Lt.slice(0,3).reduce((U,k)=>U+(u[1]-k[0]),0)/3];a.gpuPwr.forEach((U,k)=>{const tt=k<5?0:1;mt(f(tt,Lt[k<5?k:k-5]),U,"power12v",{na:rt,nb:rt,loom:`gpupwr-${tt}`,wps:[[z[tt],700,Tt],[U[0],ut,Tt]]})}),a.swAux.forEach((U,k)=>mt(f(k,Xe.peri[4]),U,"aux6",{na:rt,nb:at})),a.adAux.forEach((U,k)=>mt(f(k<4?0:1,Xe.peri[k%4]),U,"aux6",{na:rt,nb:lt})),mt(f(1,Xe.mb18),a.boardPwr[0],"atx",{na:rt,nb:at,tb:[1,0,0]}),mt(f(1,Xe.cpu8[0]),a.boardPwr[1],"power12v",{na:rt,nb:at}),mt(f(1,Xe.cpu8[1]),a.boardPwr[2],"power12v",{na:rt,nb:at}),mt(G,Q,"cat6a",{na:rt,nb:rt});const pt=U=>[U.min.x,U.min.y,U.min.z,U.max.x,U.max.y,U.max.z],yt={boxes:xt.map(pt),normalBoxes:T.map(pt),bias:Mr.slice(),jobs:Pt.map(U=>({a:U.a,b:U.b,type:U.type,r:U.r,opts:{na:U.opts.na,nb:U.opts.nb,loom:U.opts.loom,wps:U.opts.wps}}))},Ot=new Array(Pt.length).fill(null),Nt=(U,{vias:k,na:tt,nb:St})=>{Ot[U]&&i.remove(Ot[U]);const Bt=Pt[U];Ot[U]=Td(Bt.a,Bt.b,{type:Bt.type,vias:k,na:tt,nb:St,ta:Bt.opts.ta,tb:Bt.opts.tb}),Ws(Ot[U]),i.add(Ot[U])},Jt=U=>{U.routed.forEach((k,tt)=>Nt(tt,k));for(const k of U.bands){const tt=re(Wt(k.r,2.4,N.cablePlug,18),"tie");tt.position.set(...k.c),tt.quaternion.setFromUnitVectors(new A(0,1,0),new A(...k.tang)),tt.userData.noCollide=!0,i.add(tt)}Object.assign(i.userData.router,U.stats),Ws(i);for(const[k,tt]of r){const St=[];i.traverse(Bt=>{if(!Bt.userData.samples)return;const de=Bt.userData.samples;for(let Fe=1;Fe<de.length;Fe++){const an=de[Fe-1],Bn=de[Fe];if((an.y-k)*(Bn.y-k)>0)continue;const js=(k-an.y)/(Bn.y-an.y||1e-9);St.push([an.x+(Bn.x-an.x)*js,an.z+(Bn.z-an.z)*js])}}),E1(tt,St)}};if(typeof Worker>"u"){const U=G1(yt),k=i.userData.router;i.userData.router=U.router,i.userData.router.debugVoxels||=k.debugVoxels,Jt(U)}else{const U=new Worker(new URL(""+new URL("route.worker-CHRr9wZz.js",import.meta.url).href,import.meta.url),{type:"module"});U.postMessage(yt),i.userData.stopRouting=()=>U.terminate(),U.onmessage=k=>{const tt=k.data;if(tt.kind==="net"){Nt(tt.i,tt);return}tt.kind==="done"&&(console.info("[route]",tt.stats),Jt(tt),U.terminate())}}return i}const yp=document.getElementById("info"),ma=document.getElementById("info-canvas"),j1=document.getElementById("info-title"),K1=document.getElementById("info-dims"),J1=document.getElementById("info-qty"),Q1=document.getElementById("info-desc"),tS=document.getElementById("info-link"),ji=new Rl({canvas:ma,antialias:!0,alpha:!0});ji.setPixelRatio(Math.min(devicePixelRatio,2));ji.toneMapping=Sl;ji.toneMappingExposure=1.42;ji.outputColorSpace=Ae;const Yi=new Cl;Yi.environment=new oa(ji).fromScene(new wd,.04).texture;Yi.add(new Sd(13490677,3026488,1.6));const Mp=new Nr(16777215,1.9);Mp.position.set(60,120,90);Yi.add(Mp);const Sp=new Nr(10467583,1);Sp.position.set(-80,30,-50);Yi.add(Sp);const Ir=new je(40,1,.5,8e3),Jn=new Ed(Ir,ma);Jn.enableDamping=!0;Jn.enablePan=!1;Jn.autoRotate=!0;Jn.autoRotateSpeed=1.6;let Di=null,Ar=null;function eS(){const i=ma.clientWidth||320,t=ma.clientHeight||240;ji.setSize(i,t,!1),Ir.aspect=i/t,Ir.updateProjectionMatrix()}function bp(i,t){const e=ke[i];if(!e)return;j1.textContent=e.name;const n=t&&t.userData.lengthMm;K1.textContent=(e.dims||"")+(n?` · this run ≈ ${(n/10).toFixed(1)} cm`:""),J1.textContent=e.qty?`×${e.qty} in this build`:"",Q1.textContent=e.desc||"";const s=[e.link&&{label:"product page",url:e.link},...e.links||[]].filter(Boolean);if(tS.innerHTML=s.map(r=>`<div class="link-row"><a href="${r.url}" target="_blank" rel="noopener">${r.label} ↗</a><span class="src">${new URL(r.url).hostname.replace(/^www\./,"")}</span></div>`).join(""),yp.classList.add("open"),eS(),Di&&Yi.remove(Di),Di=e.build?e.build():null,Di){Yi.add(Di);const r=new ae().setFromObject(Di),a=r.getCenter(new A),o=r.getSize(new A);Di.position.sub(a);const c=Math.max(o.x,o.y,o.z,40)*1.6+30;Ir.position.set(c*.7,c*.5,c),Jn.target.set(0,0,0),Jn.minDistance=c*.3,Jn.maxDistance=c*5,Jn.update()}Ar||Ep()}function Ep(){Ar=requestAnimationFrame(Ep),Jn.update(),ji.render(Yi,Ir)}function wp(){yp.classList.remove("open"),Ar&&(cancelAnimationFrame(Ar),Ar=null),dispatchEvent(new CustomEvent("rig:closed"))}document.getElementById("info-close").onclick=wp;const Xc=["mcio","power12v","aux6","atx","cat6a"];function Rf(i){for(let t=i;t;t=t.parent)if(t.userData&&t.userData.part!==void 0)return t.userData.part;return null}function Wl(i,{margin:t=1.5,skipEnds:e=4}={}){i.updateMatrixWorld(!0);const n=[];i.traverse(r=>{if(r.userData.solidBoxes){const l=Rf(r);if(l!==null&&!Xc.includes(l))for(const u of r.userData.solidBoxes){const h=new ae(new A(u[0],u[1],u[2]),new A(u[3],u[4],u[5])).applyMatrix4(r.matrixWorld).expandByScalar(-t);h.isEmpty()||n.push({part:l,box:h})}}if(!r.isMesh||r.isInstancedMesh||r.userData.noCollide)return;const a=Rf(r);if(a===null||Xc.includes(a))return;const o=new ae().setFromObject(r).expandByScalar(-t),c=r.userData.floor&&r.userData.holes?r.userData.holes.map(([l,u])=>[l,r.getWorldPosition(new A).z+u]):null;o.isEmpty()||n.push({part:a,box:o,holes:c})});const s={};return i.traverse(r=>{if(!Xc.includes(r.userData.part)||!r.userData.samples)return;const a=r.userData.samples,o=a[0],c=a[a.length-1],l=new Set;for(let u=e;u<a.length-e;u++)if(!(a[u].distanceTo(o)<35||a[u].distanceTo(c)<35)){for(const h of n)if(!l.has(h.part)&&h.box.containsPoint(a[u])){const f=a[u];if(h.holes&&h.holes.some(([g,x])=>Math.abs(f.x-g)<=15&&Math.abs(f.z-x)<=9))continue;const d=`${r.userData.part} → ${h.part}`;s[d]=(s[d]||0)+1,l.add(h.part)}}}),s}const nS=["mcio","power12v","aux6","atx"],Tp=1.12;function Ap(i){const t={};return i.traverse(e=>{nS.includes(e.userData.part)&&e.userData.lengthMm&&(t[e.userData.part]||=[]).push(e.userData.lengthMm)}),t}function Rp(i,t){const e=i*Tp;for(const n of t)if(e<=n)return n;return null}function iS(i,t){const e=t[i];if(!e||!e.length)return"";const n=Math.min(...e),s=Math.max(...e);let r="";if(ke[i].stockMm){const a={};let o=0;for(const l of e){const u=Rp(l,ke[i].stockMm);u===null?o++:a[u]=(a[u]||0)+1}const c=Object.entries(a).map(([l,u])=>`${u}× ${l/10} cm`).join(" + ");r=o?` · <span class="bom-bad">⚠ ${o} run${o>1?"s":""} too long for stock</span>`:` · ${ke[i].price!=null?`buy ${c}`:`stock fits (${c})`} <span class="bom-ok">✓</span>`}return`runs ${(n/10).toFixed(1)}–${(s/10).toFixed(1)} cm${r}`}function sS(i,t){const e=[],n=i.userData.router?i.userData.router.fails:0;e.push(n?`<span class="bom-bad">⚠ ${n} cable route${n>1?"s":""} found no collision-free path</span>`:'<span class="bom-ok">✓</span> all cable routes found a collision-free path');const s=Wl(i),r=Object.keys(s).length;e.push(r?`<span class="bom-bad">⚠ wires passing through parts: ${Object.entries(s).map(([c,l])=>`${c} (${l})`).join(", ")}</span>`:'<span class="bom-ok">✓</span> no wire passes through a component');const a=t.mcio||[],o=a.filter(c=>Rp(c,ke.mcio.stockMm)===null).length;if(a.length){const c=Math.max(...a);e.push(o?`<span class="bom-bad">⚠ ${o} MCIO run(s) exceed the 75 cm stock cable (longest ${(c/10).toFixed(1)} cm + slack)</span>`:`<span class="bom-ok">✓</span> every MCIO run fits stock cable (longest ${(c/10).toFixed(1)} cm routed, ×${Tp} slack ≤ 75 cm)`)}return e}const qc=i=>`€${i.toLocaleString("en-US")}`;function rS(i){const t=Ap(i);let e=0,n=0;const s=Object.entries(ke).map(([r,a])=>{const o=a.owned||0,c=a.qty-o,l=a.price!=null?a.price*c:null;l!=null?e+=l:!a.note&&c>0&&n++;const u=a.link?`<a href="${a.link}" target="_blank" rel="noopener">${a.name} ↗</a>`:a.name,h=[o?`${o} owned`:"",a.note||"",iS(r,t)].filter(Boolean).join(" · ");return`<tr>
      <td class="n">${a.qty}×</td>
      <td>${u}</td>
      <td class="n">${a.price!=null?qc(a.price):"—"}</td>
      <td class="n">${l!=null?l?qc(l):'<span class="bom-ok">owned</span>':"—"}</td>
      <td class="notes">${h}</td>
    </tr>`}).join("");document.getElementById("bom-body").innerHTML=`
    <table>
      <thead><tr><th class="n">Qty</th><th>Part</th><th class="n">Unit</th><th class="n">To buy</th><th>Notes — live from this layout</th></tr></thead>
      <tbody>${s}</tbody>
    </table>
    <div id="bom-checks"><h3>Verification</h3>${sS(i,t).map(r=>`<div>${r}</div>`).join("")}</div>`,document.getElementById("bom-total").textContent=`priced items: ${qc(e)}${n?` · +${n} unpriced (see links)`:""}`}function oS(i){const t=Ap(i),e=r=>`"${String(r).replaceAll('"','""')}"`,n=[["qty","part","unit_eur","owned","to_buy_eur","link","notes"].join(",")];for(const[r,a]of Object.entries(ke)){const o=a.owned||0,c=a.qty-o,l=t[r],u=[a.note||"",l?`routed runs cm: ${l.map(h=>(h/10).toFixed(1)).join(" ")}`:""].filter(Boolean).join(" | ");n.push([a.qty,e(a.name),a.price??"",o,a.price!=null?a.price*c:"",a.link||"",e(u)].join(","))}const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([n.join(`
`)],{type:"text/csv"})),s.download="rig-bom.csv",s.click(),URL.revokeObjectURL(s.href)}function aS(i){const t=document.getElementById("bom");document.getElementById("bom-btn").onclick=()=>{rS(i()),t.classList.add("open")},document.getElementById("bom-close").onclick=()=>t.classList.remove("open"),t.addEventListener("pointerdown",e=>{e.target===t&&t.classList.remove("open")}),document.getElementById("bom-csv").onclick=()=>oS(i())}await R1();const Jo=new URLSearchParams(location.search).get("part"),On=!!(Jo&&ke[Jo]&&ke[Jo].build),cS=document.getElementById("app"),Ge=new Cl;Ge.background=new ne(On?1120294:Ld);On||(Ge.fog=new Pl(Ld,2800,5600));const Mi=new je(42,innerWidth/innerHeight,5,12e3),Qe=new Rl({antialias:!0});Qe.setSize(innerWidth,innerHeight);Qe.setPixelRatio(Math.min(devicePixelRatio,2));Qe.toneMapping=Sl;Qe.toneMappingExposure=1.42;Qe.outputColorSpace=Ae;cS.appendChild(Qe.domElement);const lS=new oa(Qe);Ge.environment=lS.fromScene(new wd,.04).texture;Ge.add(new Sd(13490677,3026488,On?1.7:1.5));const Pp=new Nr(16777215,On?2.6:2);Pp.position.set(900,1600,1100);Ge.add(Pp);const Cp=new Nr(10467583,On?1.5:1.1);Cp.position.set(-1e3,500,-700);Ge.add(Cp);const Lp=new Nr(16770752,.75);Lp.position.set(200,400,-1200);Ge.add(Lp);let Ue=On?ke[Jo].build():vp();On||Ws(Ue);Ge.add(Ue);const Pf=6072575,Ee=new Ed(Mi,Qe.domElement);Ee.enableDamping=!0;Ee.autoRotateSpeed=1;let Si;if(On){const i=new ae().setFromObject(Ue),t=i.getCenter(new A),e=i.getSize(new A),n=Math.max(e.x,e.y,e.z)*1.9+60;Si={pos:[t.x+n*.85,t.y+n*.5,t.z+n],target:t.toArray()},Ee.autoRotate=!0,Ee.minDistance=30,Ee.maxDistance=4e3;const s=new Dh(Math.max(e.x,e.z)*5,20,2240838,1318187);s.position.set(t.x,i.min.y-6,t.z),Ge.add(s)}else{Si={pos:[720,900,1240],target:[0,470,0]},Ee.autoRotate=!1,Ee.minDistance=380,Ee.maxDistance=5200,Ee.maxPolarAngle=Math.PI*.54;const i=new se(new ya(6e3,6e3),new ca({color:527636,metalness:.1,roughness:.95}));i.rotation.x=-Math.PI/2,i.position.y=-173,Ge.add(i);const t=new Dh(4400,44,2240838,1186600);t.position.y=-172,Ge.add(t)}const Cf=new URLSearchParams(location.search).get("cam");if(Cf){const[i,t,e,n,s,r]=Cf.split(",").map(Number);Si={pos:[i,t,e],target:[n,s,r]},Ee.autoRotate=!1,Ee.minDistance=10}Mi.position.set(...Si.pos);Ee.target.set(...Si.target);Ee.update();window.__viz={camera:Mi,controls:Ee,HOME:Si,object:Ue};window.__collisions=()=>Wl(Ue);const Lf=new Ay,Df=new ht;let fn=null,gr=null,hi=null;const vl=[];function Ra(){fn&&(Ge.remove(fn),fn.geometry&&fn.geometry.dispose(),fn.material&&fn.material.dispose(),fn=null);for(const[i,t]of vl)i.material.dispose(),i.material=t;vl.length=0}function Dp(i){if(!i.userData.samples){fn=new Ry(i,Pf),Ge.add(fn);return}i.traverse(t=>{if(!t.isMesh)return;const e=t.material.clone();e.emissive=new ne(Pf),e.emissiveIntensity=.55,vl.push([t,t.material]),t.material=e})}Qe.domElement.addEventListener("pointerdown",i=>{gr=[i.clientX,i.clientY]});Qe.domElement.addEventListener("pointerup",i=>{if(!gr)return;const t=Math.hypot(i.clientX-gr[0],i.clientY-gr[1]);if(gr=null,t>5||i.button!==0)return;const e=Qe.domElement.getBoundingClientRect();Df.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),Lf.setFromCamera(Df,Mi);const n=Lf.intersectObject(Ue,!0).find(r=>{for(let a=r.object;a;a=a.parent)if(!a.visible)return!1;return!0});let s=n&&n.object;for(;s&&s.userData.part===void 0;)s=s.parent;s&&s.userData.part&&ke[s.userData.part]&&(bp(s.userData.part,s),Ra(),Dp(s),dispatchEvent(new CustomEvent("rig:selected",{detail:s.userData.part})))});addEventListener("rig:inspect",i=>{const t=i.detail;if(!ke[t])return;let e=null;Ue.traverse(n=>{!e&&n.userData.part===t&&(e=n)}),bp(t,e),Ra(),e&&Dp(e),dispatchEvent(new CustomEvent("rig:selected",{detail:t}))});addEventListener("rig:closed",Ra);addEventListener("keydown",i=>{i.key==="Escape"&&(document.getElementById("bom").classList.remove("open"),wp())});function Ip(){hi&&(hi.removeFromParent(),hi.geometry.dispose(),hi.material.dispose(),hi=null)}function If(){Ge.remove(Ue),Ue=vp(),Ws(Ue),Ge.add(Ue),window.__viz.object=Ue,window.__collisions=()=>Wl(Ue),Ra(),Ip()}On?(document.getElementById("bom-btn").style.display="none",document.getElementById("titleblock").style.display="none",document.getElementById("tree").style.display="none"):(aS(()=>Ue),Z1(()=>Ue));On||(window.__addBias=i=>(Mr.push(i),If(),Mr.slice()),window.__clearBias=()=>{Mr.length=0,If()},addEventListener("keydown",i=>{i.key.toLowerCase()==="v"&&(hi?Ip():Ue.userData.router&&(hi=Ue.userData.router.debugVoxels(),Ue.add(hi)))}));const yl=document.getElementById("spin");yl.textContent=Ee.autoRotate?"Pause spin":"Start spin";yl.onclick=()=>{Ee.autoRotate=!Ee.autoRotate,yl.textContent=Ee.autoRotate?"Pause spin":"Start spin"};document.getElementById("fit").onclick=()=>{Mi.position.set(...Si.pos),Ee.target.set(...Si.target),Ee.update()};addEventListener("resize",()=>{Mi.aspect=innerWidth/innerHeight,Mi.updateProjectionMatrix(),Qe.setSize(innerWidth,innerHeight)});Qe.setAnimationLoop(()=>{Ee.update(),fn&&fn.isBoxHelper&&fn.update(),Qe.render(Ge,Mi)});
