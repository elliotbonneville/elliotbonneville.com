(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="160",qi={ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zd=0,Ll=1,Kd=2,of=1,Jd=2,Gn=3,Pn=0,Fe=1,cn=2,ui=0,Ps=1,Dl=2,Il=3,Ul=4,Qd=5,Ci=100,tp=101,ep=102,Nl=103,Ol=104,np=200,ip=201,sp=202,rp=203,Tc=204,Ac=205,op=206,ap=207,cp=208,lp=209,up=210,hp=211,fp=212,dp=213,pp=214,mp=0,gp=1,_p=2,Bo=3,xp=4,vp=5,yp=6,Mp=7,af=0,Sp=1,Ep=2,hi=0,bp=1,Tp=2,Ap=3,tl=4,wp=5,Rp=6,cf=300,Ds=301,Is=302,wc=303,Rc=304,Ko=306,Cc=1e3,Sn=1001,Pc=1002,Ge=1003,Fl=1004,fa=1005,an=1006,Cp=1007,_r=1008,fi=1009,Pp=1010,Lp=1011,el=1012,lf=1013,oi=1014,ai=1015,xr=1016,uf=1017,hf=1018,Ii=1020,Dp=1021,En=1023,Ip=1024,Up=1025,Ui=1026,Us=1027,Np=1028,ff=1029,Op=1030,df=1031,pf=1033,da=33776,pa=33777,ma=33778,ga=33779,Bl=35840,zl=35841,kl=35842,Hl=35843,mf=36196,Gl=37492,Vl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,$l=37812,jl=37813,Zl=37814,Kl=37815,Jl=37816,Ql=37817,tu=37818,eu=37819,nu=37820,iu=37821,_a=36492,su=36494,ru=36495,Fp=36283,ou=36284,au=36285,cu=36286,gf=3e3,Ni=3001,Bp=3200,zp=3201,_f=0,kp=1,ln="",Ae="srgb",Yn="srgb-linear",nl="display-p3",Jo="display-p3-linear",zo="linear",oe="srgb",ko="rec709",Ho="p3",$i=7680,lu=519,Hp=512,Gp=513,Vp=514,xf=515,Wp=516,Xp=517,qp=518,Yp=519,uu=35044,hu="300 es",Lc=1035,Xn=2e3,Go=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,Dc=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function $p(i,t){return(i%t+t)%t}function xa(i,t,e){return(1-e)*i+e*t}function fu(i){return(i&i-1)===0&&i!==0}function Ic(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jp={DEG2RAD:Po};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,a,o,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],x=s[0],m=s[3],d=s[6],v=s[1],g=s[4],y=s[7],E=s[2],T=s[5],S=s[8];return r[0]=a*x+o*v+c*E,r[3]=a*m+o*g+c*T,r[6]=a*d+o*y+c*S,r[1]=l*x+u*v+f*E,r[4]=l*m+u*g+f*T,r[7]=l*d+u*y+f*S,r[2]=h*x+p*v+_*E,r[5]=h*m+p*g+_*T,r[8]=h*d+p*y+_*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,p=l*r-a*c,_=e*f+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Yt;function vf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zp(){const i=Vo("canvas");return i.style.display="block",i}const du={};function ar(i){i in du||(du[i]=!0,console.warn(i))}const pu=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mu=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ar={[Yn]:{transfer:zo,primaries:ko,toReference:i=>i,fromReference:i=>i},[Ae]:{transfer:oe,primaries:ko,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jo]:{transfer:zo,primaries:Ho,toReference:i=>i.applyMatrix3(mu),fromReference:i=>i.applyMatrix3(pu)},[nl]:{transfer:oe,primaries:Ho,toReference:i=>i.convertSRGBToLinear().applyMatrix3(mu),fromReference:i=>i.applyMatrix3(pu).convertLinearToSRGB()}},Kp=new Set([Yn,Jo]),re={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Kp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ar[t].toReference,s=Ar[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ar[i].primaries},getTransfer:function(i){return i===ln?zo:Ar[i].transfer}};function Ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class yf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=Vo("canvas")),ji.width=t.width,ji.height=t.height;const n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ls(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ls(e[n]/255)*255):e[n]=Ls(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jp=0;class Mf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Fs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ma(s[a].image)):r.push(Ma(s[a]))}else r=Ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qp=0;class tn extends Vi{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Sn,s=Sn,r=an,a=_r,o=En,c=fi,l=tn.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Fs(),this.name="",this.source=new Mf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ni?Ae:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cc:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case Pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cc:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case Pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?Ni:gf}set encoding(t){ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ni?Ae:ln}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=cf;tn.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],_=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,y=(p+1)/2,E=(d+1)/2,T=(u+h)/4,S=(f+x)/4,P=(_+m)/4;return g>y&&g>E?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=T/n,r=S/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=S/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tm extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?Ae:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends tm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sf extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class em extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const h=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(f!==x||c!==h||l!==p||u!==_){let m=1-o;const d=c*h+l*p+u*_+f*x,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const E=Math.sqrt(g),T=Math.atan2(E,d*v);m=Math.sin(m*T)/E,o=Math.sin(o*T)/E}const y=o*v;if(c=c*m+h*y,l=l*m+p*y,u=u*m+_*y,f=f*m+x*y,m===1-o){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*f+c*p-l*h,t[e+1]=c*_+u*h+l*f-o*p,t[e+2]=l*_+u*p+o*h-c*f,t[e+3]=u*_-o*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f+h*p*_;break;case"YZX":this._x=h*u*f+l*p*_,this._y=l*p*f+h*u*_,this._z=l*u*_-h*p*f,this._w=l*u*f-h*p*_;break;case"XZY":this._x=h*u*f-l*p*_,this._y=l*p*f-h*u*_,this._z=l*u*_+h*p*f,this._w=l*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new w,gu=new Bi;class se{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Rr.subVectors(this.max,Ws),Zi.subVectors(t.a,Ws),Ki.subVectors(t.b,Ws),Ji.subVectors(t.c,Ws),Zn.subVectors(Ki,Zi),Kn.subVectors(Ji,Ki),xi.subVectors(Zi,Ji);let e=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-xi.y,xi.x,0];return!Ea(e,Zi,Ki,Ji,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Zi,Ki,Ji,Rr))?!1:(Cr.crossVectors(Zn,Kn),e=[Cr.x,Cr.y,Cr.z],Ea(e,Zi,Ki,Ji,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new w,new w,new w,new w,new w,new w,new w,new w],gn=new w,wr=new se,Zi=new w,Ki=new w,Ji=new w,Zn=new w,Kn=new w,xi=new w,Ws=new w,Rr=new w,Cr=new w,vi=new w;function Ea(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const nm=new se,Xs=new w,ba=new w;class Wi{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(ba)),this.expandByPoint(Xs.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new w,Ta=new w,Pr=new w,Jn=new w,Aa=new w,Lr=new w,wa=new w;class Bs{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Ta);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Pr),o=Jn.dot(this.direction),c=-Jn.dot(Pr),l=Jn.lengthSq(),u=Math.abs(1-a*a);let f,h,p,_;if(u>0)if(f=a*c-o,h=a*o-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ta).addScaledVector(Pr,h),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){Aa.subVectors(e,t),Lr.subVectors(n,t),wa.crossVectors(Aa,Lr);let a=this.direction.dot(wa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const c=o*this.direction.dot(Lr.crossVectors(Jn,Lr));if(c<0)return null;const l=o*this.direction.dot(Aa.cross(Jn));if(l<0||c+l>a)return null;const u=-o*Jn.dot(wa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,s,r,a,o,c,l,u,f,h,p,_,x,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,f,h,p,_,x,m)}set(t,e,n,s,r,a,o,c,l,u,f,h,p,_,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*f,_=o*u,x=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+_*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,p=c*f,_=l*u,x=l*f;e[0]=h+x*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,p=c*f,_=l*u,x=l*f;e[0]=h-x*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,p=a*f,_=o*u,x=o*f;e[0]=c*u,e[4]=_*l-p,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,p=a*l,_=o*c,x=o*l;e[0]=c*u,e[4]=x-h*f,e[8]=_*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+_,e[10]=h-x*f}else if(t.order==="XZY"){const h=a*c,p=a*l,_=o*c,x=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=a*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,sm)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Qn.crossVectors(n,Ke),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Qn.crossVectors(n,Ke)),Qn.normalize(),Dr.crossVectors(Ke,Qn),s[0]=Qn.x,s[4]=Dr.x,s[8]=Ke.x,s[1]=Qn.y,s[5]=Dr.y,s[9]=Ke.y,s[2]=Qn.z,s[6]=Dr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],x=n[6],m=n[10],d=n[14],v=n[3],g=n[7],y=n[11],E=n[15],T=s[0],S=s[4],P=s[8],M=s[12],b=s[1],I=s[5],U=s[9],H=s[13],D=s[2],z=s[6],G=s[10],Q=s[14],tt=s[3],J=s[7],ot=s[11],st=s[15];return r[0]=a*T+o*b+c*D+l*tt,r[4]=a*S+o*I+c*z+l*J,r[8]=a*P+o*U+c*G+l*ot,r[12]=a*M+o*H+c*Q+l*st,r[1]=u*T+f*b+h*D+p*tt,r[5]=u*S+f*I+h*z+p*J,r[9]=u*P+f*U+h*G+p*ot,r[13]=u*M+f*H+h*Q+p*st,r[2]=_*T+x*b+m*D+d*tt,r[6]=_*S+x*I+m*z+d*J,r[10]=_*P+x*U+m*G+d*ot,r[14]=_*M+x*H+m*Q+d*st,r[3]=v*T+g*b+y*D+E*tt,r[7]=v*S+g*I+y*z+E*J,r[11]=v*P+g*U+y*G+E*ot,r[15]=v*M+g*H+y*Q+E*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],_=t[3],x=t[7],m=t[11],d=t[15];return _*(+r*c*f-s*l*f-r*o*h+n*l*h+s*o*p-n*c*p)+x*(+e*c*p-e*l*h+r*a*h-s*a*p+s*l*u-r*c*u)+m*(+e*l*f-e*o*p-r*a*f+n*a*p+r*o*u-n*l*u)+d*(-s*o*u-e*c*f+e*o*h+s*a*f-n*a*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],_=t[12],x=t[13],m=t[14],d=t[15],v=f*m*l-x*h*l+x*c*p-o*m*p-f*c*d+o*h*d,g=_*h*l-u*m*l-_*c*p+a*m*p+u*c*d-a*h*d,y=u*x*l-_*f*l+_*o*p-a*x*p-u*o*d+a*f*d,E=_*f*c-u*x*c-_*o*h+a*x*h+u*o*m-a*f*m,T=e*v+n*g+s*y+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return t[0]=v*S,t[1]=(x*h*r-f*m*r-x*s*p+n*m*p+f*s*d-n*h*d)*S,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*d+n*c*d)*S,t[3]=(f*c*r-o*h*r-f*s*l+n*h*l+o*s*p-n*c*p)*S,t[4]=g*S,t[5]=(u*m*r-_*h*r+_*s*p-e*m*p-u*s*d+e*h*d)*S,t[6]=(_*c*r-a*m*r-_*s*l+e*m*l+a*s*d-e*c*d)*S,t[7]=(a*h*r-u*c*r+u*s*l-e*h*l-a*s*p+e*c*p)*S,t[8]=y*S,t[9]=(_*f*r-u*x*r-_*n*p+e*x*p+u*n*d-e*f*d)*S,t[10]=(a*x*r-_*o*r+_*n*l-e*x*l-a*n*d+e*o*d)*S,t[11]=(u*o*r-a*f*r-u*n*l+e*f*l+a*n*p-e*o*p)*S,t[12]=E*S,t[13]=(u*x*s-_*f*s+_*n*h-e*x*h-u*n*m+e*f*m)*S,t[14]=(_*o*s-a*x*s-_*n*c+e*x*c+a*n*m-e*o*m)*S,t[15]=(a*f*s-u*o*s+u*n*c-e*f*c-a*n*h+e*o*h)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,p=r*u,_=r*f,x=a*u,m=a*f,d=o*f,v=c*l,g=c*u,y=c*f,E=n.x,T=n.y,S=n.z;return s[0]=(1-(x+d))*E,s[1]=(p+y)*E,s[2]=(_-g)*E,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(h+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(_+g)*S,s[9]=(m-v)*S,s[10]=(1-(h+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const a=Qi.set(s[4],s[5],s[6]).length(),o=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const l=1/r,u=1/a,f=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Xn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let p,_;if(o===Xn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Go)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Xn){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(a-r),h=(e+t)*l,p=(n+s)*u;let _,x;if(o===Xn)_=(a+r)*f,x=-2*f;else if(o===Go)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new w,_n=new Qt,im=new w(0,0,0),sm=new w(1,1,1),Qn=new w,Dr=new w,Ke=new w,_u=new Qt,xu=new Bi;class Qo{constructor(t=0,e=0,n=0,s=Qo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qo.DEFAULT_ORDER="XYZ";class il{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rm=0;const vu=new w,ts=new Bi,On=new Qt,Ir=new w,qs=new w,om=new w,am=new Bi,yu=new w(1,0,0),Mu=new w(0,1,0),Su=new w(0,0,1),cm={type:"added"},lm={type:"removed"};class Ie extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new w,e=new Qo,n=new Bi,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Yt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(qs,Ir,this.up):On.lookAt(Ir,qs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(On),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(cm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new w(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new w,Fn=new w,Ra=new w,Bn=new w,es=new w,ns=new w,Eu=new w,Ca=new w,Pa=new w,La=new w;let Ur=!1;class ue{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Fn.subVectors(n,e),Ra.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Fn),c=xn.dot(Ra),l=Fn.dot(Fn),u=Fn.dot(Ra),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Fn.subVectors(t,e),xn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),xn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ue.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ue.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),ue.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return ue.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ue.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ue.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;es.subVectors(s,n),ns.subVectors(r,n),Ca.subVectors(t,n);const c=es.dot(Ca),l=ns.dot(Ca);if(c<=0&&l<=0)return e.copy(n);Pa.subVectors(t,s);const u=es.dot(Pa),f=ns.dot(Pa);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(es,a);La.subVectors(t,r);const p=es.dot(La),_=ns.dot(La);if(_>=0&&p<=_)return e.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(ns,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Eu.subVectors(r,s),o=(f-u)/(f-u+(p-_)),e.copy(s).addScaledVector(Eu,o);const d=1/(m+x+h);return a=x*d,o=h*d,e.copy(n).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=$p(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Da(a,r,t+1/3),this.g=Da(a,r,t),this.b=Da(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}copyLinearToSRGB(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return re.fromWorkingColorSpace(Oe.copy(this),t),Math.round(De(Oe.r*255,0,255))*65536+Math.round(De(Oe.g*255,0,255))*256+Math.round(De(Oe.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Ae){re.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Nr);const n=xa(ti.h,Nr.h,e),s=xa(ti.s,Nr.s,e),r=xa(ti.l,Nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new jt;jt.NAMES=Ef;let um=0;class zs extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=Ps,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Ac,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ac&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ta extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new w,Or=new ft;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uu&&(t.usage=this.usage),t}}class bf extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tf extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hm=0;const nn=new Qt,Ia=new Ie,is=new w,Je=new se,Ys=new se,Le=new w;class Ve extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vf(t)?Tf:bf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new se);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(Je.min,Ys.min),Je.expandByPoint(Le),Le.addVectors(Je.max,Ys.max),Je.expandByPoint(Le)):(Je.expandByPoint(Ys.min),Je.expandByPoint(Ys.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Le.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(t,l),Le.add(is)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<o;b++)l[b]=new w,u[b]=new w;const f=new w,h=new w,p=new w,_=new ft,x=new ft,m=new ft,d=new w,v=new w;function g(b,I,U){f.fromArray(s,b*3),h.fromArray(s,I*3),p.fromArray(s,U*3),_.fromArray(a,b*2),x.fromArray(a,I*2),m.fromArray(a,U*2),h.sub(f),p.sub(f),x.sub(_),m.sub(_);const H=1/(x.x*m.y-m.x*x.y);isFinite(H)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(H),v.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(H),l[b].add(d),l[I].add(d),l[U].add(d),u[b].add(v),u[I].add(v),u[U].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,I=y.length;b<I;++b){const U=y[b],H=U.start,D=U.count;for(let z=H,G=H+D;z<G;z+=3)g(n[z+0],n[z+1],n[z+2])}const E=new w,T=new w,S=new w,P=new w;function M(b){S.fromArray(r,b*3),P.copy(S);const I=l[b];E.copy(I),E.sub(S.multiplyScalar(S.dot(I))).normalize(),T.crossVectors(P,I);const H=T.dot(u[b])<0?-1:1;c[b*4]=E.x,c[b*4+1]=E.y,c[b*4+2]=E.z,c[b*4+3]=H}for(let b=0,I=y.length;b<I;++b){const U=y[b],H=U.start,D=U.count;for(let z=H,G=H+D;z<G;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new w,r=new w,a=new w,o=new w,c=new w,l=new w,u=new w,f=new w;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)h[_++]=l[p++]}return new we(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=t(h,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new Qt,yi=new Bs,Fr=new Wi,Tu=new w,ss=new w,rs=new w,os=new w,Ua=new w,Br=new w,zr=new ft,kr=new ft,Hr=new ft,Au=new w,wu=new w,Ru=new w,Gr=new w,Vr=new w;class ee extends Ie{constructor(t=new Ve,e=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(Ua.fromBufferAttribute(f,t),a?Br.addScaledVector(Ua,u):Br.addScaledVector(Ua.sub(e),u))}e.add(Br)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Fr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Fr,Tu)===null||yi.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(bu.copy(r).invert(),yi.copy(t.ray).applyMatrix4(bu),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=g;y<E;y+=3){const T=o.getX(y),S=o.getX(y+1),P=o.getX(y+2);s=Wr(this,d,t,n,l,u,f,T,S,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const v=o.getX(m),g=o.getX(m+1),y=o.getX(m+2);s=Wr(this,a,t,n,l,u,f,v,g,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=g;y<E;y+=3){const T=y,S=y+1,P=y+2;s=Wr(this,d,t,n,l,u,f,T,S,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const v=m,g=m+1,y=m+2;s=Wr(this,a,t,n,l,u,f,v,g,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function fm(i,t,e,n,s,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Pn,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Wr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ss),i.getVertexPosition(c,rs),i.getVertexPosition(l,os);const u=fm(i,t,e,n,ss,rs,os,Gr);if(u){s&&(zr.fromBufferAttribute(s,o),kr.fromBufferAttribute(s,c),Hr.fromBufferAttribute(s,l),u.uv=ue.getInterpolation(Gr,ss,rs,os,zr,kr,Hr,new ft)),r&&(zr.fromBufferAttribute(r,o),kr.fromBufferAttribute(r,c),Hr.fromBufferAttribute(r,l),u.uv1=ue.getInterpolation(Gr,ss,rs,os,zr,kr,Hr,new ft),u.uv2=u.uv1),a&&(Au.fromBufferAttribute(a,o),wu.fromBufferAttribute(a,c),Ru.fromBufferAttribute(a,l),u.normal=ue.getInterpolation(Gr,ss,rs,os,Au,wu,Ru,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new w,materialIndex:0};ue.getNormal(ss,rs,os,f.normal),u.face=f}return u}class Ln extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function _(x,m,d,v,g,y,E,T,S,P,M){const b=y/S,I=E/P,U=y/2,H=E/2,D=T/2,z=S+1,G=P+1;let Q=0,tt=0;const J=new w;for(let ot=0;ot<G;ot++){const st=ot*I-H;for(let vt=0;vt<z;vt++){const K=vt*b-U;J[x]=K*v,J[m]=st*g,J[d]=D,l.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[d]=T>0?1:-1,u.push(J.x,J.y,J.z),f.push(vt/S),f.push(1-ot/P),Q+=1}}for(let ot=0;ot<P;ot++)for(let st=0;st<S;st++){const vt=h+st+z*ot,K=h+st+z*(ot+1),rt=h+(st+1)+z*(ot+1),yt=h+(st+1)+z*ot;c.push(vt,K,yt),c.push(K,rt,yt),tt+=6}o.addGroup(p,tt,M),p+=tt,h+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Ns(i[e]);for(const s in n)t[s]=n[s]}return t}function dm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Af(i){return i.getRenderTarget()===null?i.outputColorSpace:re.workingColorSpace}const pm={clone:Ns,merge:ke};var mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mm,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wf extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends wf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Dc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dc*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,cs=1;class _m extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(as,cs,t,e);s.layers=this.layers,this.add(s);const r=new qe(as,cs,t,e);r.layers=this.layers,this.add(r);const a=new qe(as,cs,t,e);a.layers=this.layers,this.add(a);const o=new qe(as,cs,t,e);o.layers=this.layers,this.add(o);const c=new qe(as,cs,t,e);c.layers=this.layers,this.add(c);const l=new qe(as,cs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Rf extends tn{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xm extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ni?Ae:ln),this.texture=new Rf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ln(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ui});r.uniforms.tEquirect.value=e;const a=new ee(s,r),o=e.minFilter;return e.minFilter===_r&&(e.minFilter=an),new _m(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Na=new w,vm=new w,ym=new Yt;class yn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Na.subVectors(n,e).cross(vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ym.getNormalMatrix(t),s=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Wi,Xr=new w;class sl{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],p=s[8],_=s[9],x=s[10],m=s[11],d=s[12],v=s[13],g=s[14],y=s[15];if(n[0].setComponents(c-r,h-l,m-p,y-d).normalize(),n[1].setComponents(c+r,h+l,m+p,y+d).normalize(),n[2].setComponents(c+a,h+u,m+_,y+v).normalize(),n[3].setComponents(c-a,h-u,m-_,y-v).normalize(),n[4].setComponents(c-o,h-f,m-x,y-g).normalize(),e===Xn)n[5].setComponents(c+o,h+f,m+x,y+g).normalize();else if(e===Go)n[5].setComponents(o,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mm(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,u){const f=l.array,h=l.usage,p=f.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,f){const h=u.array,p=u._updateRange,_=u.updateRanges;if(i.bindBuffer(f,l),p.count===-1&&_.length===0&&i.bufferSubData(f,0,h),_.length!==0){for(let x=0,m=_.length;x<m;x++){const d=_[x];e?i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,s(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:a,remove:o,update:c}}class ea extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const v=d*h-a;for(let g=0;g<l;g++){const y=g*f-r;_.push(y,-v,0),x.push(0,0,1),m.push(g/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const g=v+l*d,y=v+l*(d+1),E=v+1+l*(d+1),T=v+1+l*d;p.push(g,y,T),p.push(y,E,T)}this.setIndex(p),this.setAttribute("position",new ge(_,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`
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
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,ug=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
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
#endif`,Mg=`struct PhysicalMaterial {
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
}`,Sg=`
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
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
#endif`,Fg=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,O0=`uniform vec3 diffuse;
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
}`,F0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,k0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,G0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define TOON
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
}`,$0=`#define TOON
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
}`,j0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,J0=`uniform vec3 color;
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
}`,Q0=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Sm,alphahash_pars_fragment:Em,alphamap_fragment:bm,alphamap_pars_fragment:Tm,alphatest_fragment:Am,alphatest_pars_fragment:wm,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Lm,begin_vertex:Dm,beginnormal_vertex:Im,bsdfs:Um,iridescence_fragment:Nm,bumpmap_pars_fragment:Om,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:km,color_fragment:Hm,color_pars_fragment:Gm,color_pars_vertex:Vm,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:$m,displacementmap_vertex:jm,emissivemap_fragment:Zm,emissivemap_pars_fragment:Km,colorspace_fragment:Jm,colorspace_pars_fragment:Qm,envmap_fragment:tg,envmap_common_pars_fragment:eg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:mg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:cg,gradientmap_pars_fragment:lg,lightmap_fragment:ug,lightmap_pars_fragment:hg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:dg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:xg,lights_phong_pars_fragment:vg,lights_physical_fragment:yg,lights_physical_pars_fragment:Mg,lights_fragment_begin:Sg,lights_fragment_maps:Eg,lights_fragment_end:bg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:Rg,map_fragment:Cg,map_pars_fragment:Pg,map_particle_fragment:Lg,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Ug,morphcolor_vertex:Ng,morphnormal_vertex:Og,morphtarget_pars_vertex:Fg,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:kg,normal_pars_fragment:Hg,normal_pars_vertex:Gg,normal_vertex:Vg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:$g,opaque_fragment:jg,packing:Zg,premultiplied_alpha_fragment:Kg,project_vertex:Jg,dithering_fragment:Qg,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:c0,skinning_vertex:l0,skinnormal_vertex:u0,specularmap_fragment:h0,specularmap_pars_fragment:f0,tonemapping_fragment:d0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:_0,uv_pars_vertex:x0,uv_vertex:v0,worldpos_vertex:y0,background_vert:M0,background_frag:S0,backgroundCube_vert:E0,backgroundCube_frag:b0,cube_vert:T0,cube_frag:A0,depth_vert:w0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:I0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:O0,meshlambert_vert:F0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:k0,meshnormal_vert:H0,meshnormal_frag:G0,meshphong_vert:V0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:q0,meshtoon_vert:Y0,meshtoon_frag:$0,points_vert:j0,points_frag:Z0,shadow_vert:K0,shadow_frag:J0,sprite_vert:Q0,sprite_frag:t_},St={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Rn={basic:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new jt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:ke([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:ke([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new jt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:ke([St.points,St.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:ke([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:ke([St.common,St.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:ke([St.sprite,St.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:ke([St.common,St.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:ke([St.lights,St.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Rn.physical={uniforms:ke([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const qr={r:0,b:0,g:0};function e_(i,t,e,n,s,r,a){const o=new jt(0);let c=r===!0?0:1,l,u,f=null,h=0,p=null;function _(m,d){let v=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?e:t).get(g)),g===null?x(o,c):g&&g.isColor&&(x(g,1),v=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ko)?(u===void 0&&(u=new ee(new Ln(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ns(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=re.getTransfer(g.colorSpace)!==oe,(f!==g||h!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new ee(new ea(2,2),new zi({name:"BackgroundMaterial",uniforms:Ns(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=re.getTransfer(g.colorSpace)!==oe,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=g,h=g.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,d){m.getRGB(qr,Af(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:_}}function n_(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function f(D,z,G,Q,tt){let J=!1;if(a){const ot=x(Q,G,z);l!==ot&&(l=ot,p(l.object)),J=d(D,Q,G,tt),J&&v(D,Q,G,tt)}else{const ot=z.wireframe===!0;(l.geometry!==Q.id||l.program!==G.id||l.wireframe!==ot)&&(l.geometry=Q.id,l.program=G.id,l.wireframe=ot,J=!0)}tt!==null&&e.update(tt,i.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,P(D,z,G,Q),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,z,G){const Q=G.wireframe===!0;let tt=o[D.id];tt===void 0&&(tt={},o[D.id]=tt);let J=tt[z.id];J===void 0&&(J={},tt[z.id]=J);let ot=J[Q];return ot===void 0&&(ot=m(h()),J[Q]=ot),ot}function m(D){const z=[],G=[],Q=[];for(let tt=0;tt<s;tt++)z[tt]=0,G[tt]=0,Q[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:Q,object:D,attributes:{},index:null}}function d(D,z,G,Q){const tt=l.attributes,J=z.attributes;let ot=0;const st=G.getAttributes();for(const vt in st)if(st[vt].location>=0){const rt=tt[vt];let yt=J[vt];if(yt===void 0&&(vt==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),vt==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),rt===void 0||rt.attribute!==yt||yt&&rt.data!==yt.data)return!0;ot++}return l.attributesNum!==ot||l.index!==Q}function v(D,z,G,Q){const tt={},J=z.attributes;let ot=0;const st=G.getAttributes();for(const vt in st)if(st[vt].location>=0){let rt=J[vt];rt===void 0&&(vt==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),vt==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor));const yt={};yt.attribute=rt,rt&&rt.data&&(yt.data=rt.data),tt[vt]=yt,ot++}l.attributes=tt,l.attributesNum=ot,l.index=Q}function g(){const D=l.newAttributes;for(let z=0,G=D.length;z<G;z++)D[z]=0}function y(D){E(D,0)}function E(D,z){const G=l.newAttributes,Q=l.enabledAttributes,tt=l.attributeDivisors;G[D]=1,Q[D]===0&&(i.enableVertexAttribArray(D),Q[D]=1),tt[D]!==z&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),tt[D]=z)}function T(){const D=l.newAttributes,z=l.enabledAttributes;for(let G=0,Q=z.length;G<Q;G++)z[G]!==D[G]&&(i.disableVertexAttribArray(G),z[G]=0)}function S(D,z,G,Q,tt,J,ot){ot===!0?i.vertexAttribIPointer(D,z,G,tt,J):i.vertexAttribPointer(D,z,G,Q,tt,J)}function P(D,z,G,Q){if(n.isWebGL2===!1&&(D.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const tt=Q.attributes,J=G.getAttributes(),ot=z.defaultAttributeValues;for(const st in J){const vt=J[st];if(vt.location>=0){let K=tt[st];if(K===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const rt=K.normalized,yt=K.itemSize,At=e.get(K);if(At===void 0)continue;const wt=At.buffer,Ft=At.type,zt=At.bytesPerElement,Pt=n.isWebGL2===!0&&(Ft===i.INT||Ft===i.UNSIGNED_INT||K.gpuType===lf);if(K.isInterleavedBufferAttribute){const Bt=K.data,O=Bt.stride,_t=K.offset;if(Bt.isInstancedInterleavedBuffer){for(let it=0;it<vt.locationSize;it++)E(vt.location+it,Bt.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Bt.meshPerAttribute*Bt.count)}else for(let it=0;it<vt.locationSize;it++)y(vt.location+it);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let it=0;it<vt.locationSize;it++)S(vt.location+it,yt/vt.locationSize,Ft,rt,O*zt,(_t+yt/vt.locationSize*it)*zt,Pt)}else{if(K.isInstancedBufferAttribute){for(let Bt=0;Bt<vt.locationSize;Bt++)E(vt.location+Bt,K.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Bt=0;Bt<vt.locationSize;Bt++)y(vt.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let Bt=0;Bt<vt.locationSize;Bt++)S(vt.location+Bt,yt/vt.locationSize,Ft,rt,yt*zt,yt/vt.locationSize*Bt*zt,Pt)}}else if(ot!==void 0){const rt=ot[st];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(vt.location,rt);break;case 3:i.vertexAttrib3fv(vt.location,rt);break;case 4:i.vertexAttrib4fv(vt.location,rt);break;default:i.vertexAttrib1fv(vt.location,rt)}}}}T()}function M(){U();for(const D in o){const z=o[D];for(const G in z){const Q=z[G];for(const tt in Q)_(Q[tt].object),delete Q[tt];delete z[G]}delete o[D]}}function b(D){if(o[D.id]===void 0)return;const z=o[D.id];for(const G in z){const Q=z[G];for(const tt in Q)_(Q[tt].object),delete Q[tt];delete z[G]}delete o[D.id]}function I(D){for(const z in o){const G=o[z];if(G[D.id]===void 0)continue;const Q=G[D.id];for(const tt in Q)_(Q[tt].object),delete Q[tt];delete G[D.id]}}function U(){H(),u=!0,l!==c&&(l=c,p(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:U,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:y,disableUnusedAttributes:T}}function i_(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),e.update(f,r,1)}function c(u,f,h){if(h===0)return;let p,_;if(s)p=i,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,u,f,h),e.update(f,r,h)}function l(u,f,h){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(u[_],f[_]);else{p.multiDrawArraysWEBGL(r,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function s_(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=a||t.has("OES_texture_float"),E=g&&y,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:T}}function r_(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new yn,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,g=v*4;let y=d.clippingState||null;c.value=y,y=u(_,h,g,p);for(let E=0;E!==g;++E)y[E]=e[E];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const d=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,y=p;g!==x;++g,y+=4)a.copy(f[g]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function o_(i){let t=new WeakMap;function e(a,o){return o===wc?a.mapping=Ds:o===Rc&&(a.mapping=Is),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wc||o===Rc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new xm(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Pf extends wf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const As=4,Cu=[.125,.215,.35,.446,.526,.582],Pi=20,Oa=new Pf,Pu=new jt;let Fa=null,Ba=0,za=0;const wi=(1+Math.sqrt(5))/2,ls=1/wi,Lu=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,wi,ls),new w(0,wi,-ls),new w(ls,0,wi),new w(-ls,0,wi),new w(wi,ls,0),new w(-wi,ls,0)];class Wo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Ba,za),t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:xr,format:En,colorSpace:Yn,depthBuffer:!1},s=Du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a_(r)),this._blurMaterial=c_(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s){const o=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Pu),u.toneMapping=hi,u.autoClear=!1;const p=new ta({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),_=new ee(new Ln,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Pu),x=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):v===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const g=this._cubeSize;Yr(s,v*g,d>2?g:0,g,g),u.setRenderTarget(s),x&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ds||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lu[(s-1)%Lu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ee(this._lodPlanes[s],l),h=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Pi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const d=[];let v=0;for(let S=0;S<Pi;++S){const P=S/x,M=Math.exp(-P*P/2);d.push(M),S===0?v+=M:S<m&&(v+=2*M)}for(let S=0;S<d.length;S++)d[S]=d[S]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-n;const y=this._sizeLods[s],E=3*y*(s>g-As?s-g+As:0),T=4*(this._cubeSize-y);Yr(e,E,T,3*y,2*y),c.setRenderTarget(e),c.render(f,Oa)}}function a_(i){const t=[],e=[],n=[];let s=i;const r=i-As+1+Cu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-As?c=Cu[a-i+As-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,v=new Float32Array(x*_*p),g=new Float32Array(m*_*p),y=new Float32Array(d*_*p);for(let T=0;T<p;T++){const S=T%3*2/3-1,P=T>2?0:-1,M=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];v.set(M,x*_*T),g.set(h,m*_*T);const b=[T,T,T,T,T,T];y.set(b,d*_*T)}const E=new Ve;E.setAttribute("position",new we(v,x)),E.setAttribute("uv",new we(g,m)),E.setAttribute("faceIndex",new we(y,d)),t.push(E),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Du(i,t,e){const n=new Fi(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function c_(i,t,e){const n=new Float32Array(Pi),s=new w(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Iu(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Uu(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function l_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===wc||c===Rc,u=c===Ds||c===Is;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Wo(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&s(f)){e===null&&(e=new Wo(i));const h=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function u_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function h_(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const _ in h)t.update(h[_],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let g=0,y=v.length;g<y;g+=3){const E=v[g+0],T=v[g+1],S=v[g+2];h.push(E,T,T,S,S,E)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const E=g+0,T=g+1,S=g+2;h.push(E,T,T,S,S,E)}}else return;const m=new(vf(h)?Tf:bf)(h,1);m.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function f_(i,t,e,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,_){i.drawElements(r,_,o,p*c),e.update(_,r,1)}function f(p,_,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,_,o,p*c,x),e.update(_,r,x)}function h(p,_,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/c,_[d]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,x);let d=0;for(let v=0;v<x;v++)d+=_[v];e.update(d,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function d_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function p_(i,t){return i[0]-t[0]}function m_(i,t){return Math.abs(t[1])-Math.abs(i[1])}function g_(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new ne,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let x=r.get(u);if(x===void 0||x.count!==_){let D=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let P=0;v===!0&&(P=1),g===!0&&(P=2),y===!0&&(P=3);let M=u.attributes.position.count*P,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const I=new Float32Array(M*b*4*_),U=new Sf(I,M,b,_);U.type=ai,U.needsUpdate=!0;const H=P*4;for(let z=0;z<_;z++){const G=E[z],Q=T[z],tt=S[z],J=M*b*4*z;for(let ot=0;ot<G.count;ot++){const st=ot*H;v===!0&&(a.fromBufferAttribute(G,ot),I[J+st+0]=a.x,I[J+st+1]=a.y,I[J+st+2]=a.z,I[J+st+3]=0),g===!0&&(a.fromBufferAttribute(Q,ot),I[J+st+4]=a.x,I[J+st+5]=a.y,I[J+st+6]=a.z,I[J+st+7]=0),y===!0&&(a.fromBufferAttribute(tt,ot),I[J+st+8]=a.x,I[J+st+9]=a.y,I[J+st+10]=a.z,I[J+st+11]=tt.itemSize===4?a.w:1)}}x={count:_,texture:U,size:new ft(M,b)},r.set(u,x),u.addEventListener("dispose",D)}let m=0;for(let v=0;v<h.length;v++)m+=h[v];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",d),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==p){_=[];for(let g=0;g<p;g++)_[g]=[g,0];n[u.id]=_}for(let g=0;g<p;g++){const y=_[g];y[0]=g,y[1]=h[g]}_.sort(m_);for(let g=0;g<8;g++)g<p&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(p_);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let g=0;g<8;g++){const y=o[g],E=y[0],T=y[1];E!==Number.MAX_SAFE_INTEGER&&T?(x&&u.getAttribute("morphTarget"+g)!==x[E]&&u.setAttribute("morphTarget"+g,x[E]),m&&u.getAttribute("morphNormal"+g)!==m[E]&&u.setAttribute("morphNormal"+g,m[E]),s[g]=T,d+=T):(x&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),m&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),s[g]=0)}const v=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function __(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Lf extends tn{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=oi),n===void 0&&u===Us&&(n=Ii),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=c!==void 0?c:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Df=new tn,If=new Lf(1,1);If.compareFunction=xf;const Uf=new Sf,Nf=new em,Of=new Rf,Nu=[],Ou=[],Fu=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function x_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function M_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function S_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;zu.set(n),i.uniformMatrix2fv(this.addr,!1,zu),Ce(e,n)}}function E_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Bu.set(n),i.uniformMatrix3fv(this.addr,!1,Bu),Ce(e,n)}}function b_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Fu.set(n),i.uniformMatrix4fv(this.addr,!1,Fu),Ce(e,n)}}function T_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function A_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function w_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function R_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function C_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function L_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function D_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function I_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?If:Df;e.setTexture2D(t||r,s)}function U_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nf,s)}function N_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Of,s)}function O_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uf,s)}function F_(i){switch(i){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return E_;case 35676:return b_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return w_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return O_}}function B_(i,t){i.uniform1fv(this.addr,t)}function z_(i,t){const e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function k_(i,t){const e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function H_(i,t){const e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function G_(i,t){const e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function V_(i,t){const e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function W_(i,t){const e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function X_(i,t){i.uniform1iv(this.addr,t)}function q_(i,t){i.uniform2iv(this.addr,t)}function Y_(i,t){i.uniform3iv(this.addr,t)}function $_(i,t){i.uniform4iv(this.addr,t)}function j_(i,t){i.uniform1uiv(this.addr,t)}function Z_(i,t){i.uniform2uiv(this.addr,t)}function K_(i,t){i.uniform3uiv(this.addr,t)}function J_(i,t){i.uniform4uiv(this.addr,t)}function Q_(i,t,e){const n=this.cache,s=t.length,r=na(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Df,r[a])}function tx(i,t,e){const n=this.cache,s=t.length,r=na(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Nf,r[a])}function ex(i,t,e){const n=this.cache,s=t.length,r=na(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Of,r[a])}function nx(i,t,e){const n=this.cache,s=t.length,r=na(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Uf,r[a])}function ix(i){switch(i){case 5126:return B_;case 35664:return z_;case 35665:return k_;case 35666:return H_;case 35674:return G_;case 35675:return V_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return $_;case 5125:return j_;case 36294:return Z_;case 36295:return K_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}class sx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=F_(e.type)}}class rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ix(e.type)}}class ox{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function ku(i,t){i.seq.push(t),i.map[t.id]=t}function ax(i,t,e){const n=i.name,s=n.length;for(ka.lastIndex=0;;){const r=ka.exec(n),a=ka.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ku(e,l===void 0?new sx(o,i,t):new rx(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ox(o),ku(e,f)),e=f}}}class Lo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ax(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Hu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const cx=37297;let lx=0;function ux(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function hx(i){const t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i);let n;switch(t===e?n="":t===Ho&&e===ko?n="LinearDisplayP3ToLinearSRGB":t===ko&&e===Ho&&(n="LinearSRGBToLinearDisplayP3"),i){case Yn:case Jo:return[n,"LinearTransferOETF"];case Ae:case nl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ux(i.getShaderSource(t),a)}else return s}function fx(i,t){const e=hx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function dx(i,t){let e;switch(t){case bp:e="Linear";break;case Tp:e="Reinhard";break;case Ap:e="OptimizedCineon";break;case tl:e="ACESFilmic";break;case Rp:e="AgX";break;case wp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function px(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ws).join(`
`)}function mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ws).join(`
`)}function gx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _x(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ws(i){return i!==""}function Vu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(xx,yx)}const vx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yx(i,t){let e=Xt[t];if(e===void 0){const n=vx.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uc(e)}const Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(Mx,Sx)}function Sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ex(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===of?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function bx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Is:t="ENVMAP_TYPE_CUBE";break;case Ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function Ax(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case af:t="ENVMAP_BLENDING_MULTIPLY";break;case Sp:t="ENVMAP_BLENDING_MIX";break;case Ep:t="ENVMAP_BLENDING_ADD";break}return t}function wx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ex(e),l=bx(e),u=Tx(e),f=Ax(e),h=wx(e),p=e.isWebGL2?"":px(e),_=mx(e),x=gx(r),m=s.createProgram();let d,v,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ws).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ws).join(`
`),v.length>0&&(v+=`
`)):(d=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),v=[p,qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==hi?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,fx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),a=Uc(a),a=Vu(a,e),a=Wu(a,e),o=Uc(o),o=Vu(o,e),o=Wu(o,e),a=Xu(a),o=Xu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=g+d+a,E=g+v+o,T=Hu(s,s.VERTEX_SHADER,y),S=Hu(s,s.FRAGMENT_SHADER,E);s.attachShader(m,T),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function P(U){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(T).trim(),z=s.getShaderInfoLog(S).trim();let G=!0,Q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,S);else{const tt=Gu(s,T,"vertex"),J=Gu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+tt+`
`+J)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||z==="")&&(Q=!1);Q&&(U.diagnostics={runnable:G,programLog:H,vertexShader:{log:D,prefix:d},fragmentShader:{log:z,prefix:v}})}s.deleteShader(T),s.deleteShader(S),M=new Lo(s,m),b=_x(s,m)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,cx)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=S,this}let Cx=0;class Px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Lx(t),e.set(t,n)),n}}class Lx{constructor(t){this.id=Cx++,this.code=t,this.usedTimes=0}}function Dx(i,t,e,n,s,r,a){const o=new il,c=new Px,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,b,I,U,H){const D=U.fog,z=H.geometry,G=M.isMeshStandardMaterial?U.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),tt=Q&&Q.mapping===Ko?Q.image.height:null,J=_[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=ot!==void 0?ot.length:0;let vt=0;z.morphAttributes.position!==void 0&&(vt=1),z.morphAttributes.normal!==void 0&&(vt=2),z.morphAttributes.color!==void 0&&(vt=3);let K,rt,yt,At;if(J){const _e=Rn[J];K=_e.vertexShader,rt=_e.fragmentShader}else K=M.vertexShader,rt=M.fragmentShader,c.update(M),yt=c.getVertexShaderID(M),At=c.getFragmentShaderID(M);const wt=i.getRenderTarget(),Ft=H.isInstancedMesh===!0,zt=H.isBatchedMesh===!0,Pt=!!M.map,Bt=!!M.matcap,O=!!Q,_t=!!M.aoMap,it=!!M.lightMap,dt=!!M.bumpMap,nt=!!M.normalMap,Ut=!!M.displacementMap,bt=!!M.emissiveMap,R=!!M.metalnessMap,A=!!M.roughnessMap,V=M.anisotropy>0,ht=M.clearcoat>0,lt=M.iridescence>0,at=M.sheen>0,N=M.transmission>0,B=V&&!!M.anisotropyMap,X=ht&&!!M.clearcoatMap,pt=ht&&!!M.clearcoatNormalMap,gt=ht&&!!M.clearcoatRoughnessMap,q=lt&&!!M.iridescenceMap,Et=lt&&!!M.iridescenceThicknessMap,Dt=at&&!!M.sheenColorMap,It=at&&!!M.sheenRoughnessMap,Lt=!!M.specularMap,xt=!!M.specularColorMap,L=!!M.specularIntensityMap,ut=N&&!!M.transmissionMap,Rt=N&&!!M.thicknessMap,Tt=!!M.gradientMap,ct=!!M.alphaMap,F=M.alphaTest>0,mt=!!M.alphaHash,Mt=!!M.extensions,kt=!!z.attributes.uv1,Ot=!!z.attributes.uv2,Zt=!!z.attributes.uv3;let Kt=hi;return M.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Kt=i.toneMapping),{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:K,fragmentShader:rt,defines:M.defines,customVertexShaderID:yt,customFragmentShaderID:At,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:zt,instancing:Ft,instancingColor:Ft&&H.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Yn,map:Pt,matcap:Bt,envMap:O,envMapMode:O&&Q.mapping,envMapCubeUVHeight:tt,aoMap:_t,lightMap:it,bumpMap:dt,normalMap:nt,displacementMap:h&&Ut,emissiveMap:bt,normalMapObjectSpace:nt&&M.normalMapType===kp,normalMapTangentSpace:nt&&M.normalMapType===_f,metalnessMap:R,roughnessMap:A,anisotropy:V,anisotropyMap:B,clearcoat:ht,clearcoatMap:X,clearcoatNormalMap:pt,clearcoatRoughnessMap:gt,iridescence:lt,iridescenceMap:q,iridescenceThicknessMap:Et,sheen:at,sheenColorMap:Dt,sheenRoughnessMap:It,specularMap:Lt,specularColorMap:xt,specularIntensityMap:L,transmission:N,transmissionMap:ut,thicknessMap:Rt,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===Ps,alphaMap:ct,alphaTest:F,alphaHash:mt,combine:M.combine,mapUv:Pt&&x(M.map.channel),aoMapUv:_t&&x(M.aoMap.channel),lightMapUv:it&&x(M.lightMap.channel),bumpMapUv:dt&&x(M.bumpMap.channel),normalMapUv:nt&&x(M.normalMap.channel),displacementMapUv:Ut&&x(M.displacementMap.channel),emissiveMapUv:bt&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:B&&x(M.anisotropyMap.channel),clearcoatMapUv:X&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(M.sheenRoughnessMap.channel),specularMapUv:Lt&&x(M.specularMap.channel),specularColorMapUv:xt&&x(M.specularColorMap.channel),specularIntensityMapUv:L&&x(M.specularIntensityMap.channel),transmissionMapUv:ut&&x(M.transmissionMap.channel),thicknessMapUv:Rt&&x(M.thicknessMap.channel),alphaMapUv:ct&&x(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(nt||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:kt,vertexUv2s:Ot,vertexUv3s:Zt,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(Pt||ct),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:vt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Mt&&M.extensions.derivatives===!0,extensionFragDepth:Mt&&M.extensions.fragDepth===!0,extensionDrawBuffers:Mt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Mt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Mt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(b,M),g(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function g(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const b=_[M.type];let I;if(b){const U=Rn[b];I=pm.clone(U.uniforms)}else I=M.uniforms;return I}function E(M,b){let I;for(let U=0,H=l.length;U<H;U++){const D=l[U];if(D.cacheKey===b){I=D,++I.usedTimes;break}}return I===void 0&&(I=new Rx(i,b,M,r),l.push(I)),I}function T(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function S(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:S,programs:l,dispose:P}}function Ix(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Ux(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $u(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,h,p,_,x,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function o(f,h,p,_,x,m){const d=a(f,h,p,_,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(f,h,p,_,x,m){const d=a(f,h,p,_,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(f,h){e.length>1&&e.sort(f||Ux),n.length>1&&n.sort(h||Yu),s.length>1&&s.sort(h||Yu)}function u(){for(let f=t,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Nx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new $u,i.set(n,[a])):s>=r.length?(a=new $u,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ox(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new jt};break;case"SpotLight":e={position:new w,direction:new w,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function Fx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Bx=0;function zx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kx(i,t){const e=new Ox,n=Fx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new w);const r=new w,a=new Qt,o=new Qt;function c(u,f){let h=0,p=0,_=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let x=0,m=0,d=0,v=0,g=0,y=0,E=0,T=0,S=0,P=0,M=0;u.sort(zx);const b=f===!0?Math.PI:1;for(let U=0,H=u.length;U<H;U++){const D=u[U],z=D.color,G=D.intensity,Q=D.distance,tt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*G*b,p+=z.g*G*b,_+=z.b*G*b;else if(D.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(D.sh.coefficients[J],G);M++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const ot=D.shadow,st=n.get(D);st.shadowBias=ot.bias,st.shadowNormalBias=ot.normalBias,st.shadowRadius=ot.radius,st.shadowMapSize=ot.mapSize,s.directionalShadow[x]=st,s.directionalShadowMap[x]=tt,s.directionalShadowMatrix[x]=D.shadow.matrix,y++}s.directional[x]=J,x++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(z).multiplyScalar(G*b),J.distance=Q,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,s.spot[d]=J;const ot=D.shadow;if(D.map&&(s.spotLightMap[S]=D.map,S++,ot.updateMatrices(D),D.castShadow&&P++),s.spotLightMatrix[d]=ot.matrix,D.castShadow){const st=n.get(D);st.shadowBias=ot.bias,st.shadowNormalBias=ot.normalBias,st.shadowRadius=ot.radius,st.shadowMapSize=ot.mapSize,s.spotShadow[d]=st,s.spotShadowMap[d]=tt,T++}d++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(z).multiplyScalar(G),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),s.rectArea[v]=J,v++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*b),J.distance=D.distance,J.decay=D.decay,D.castShadow){const ot=D.shadow,st=n.get(D);st.shadowBias=ot.bias,st.shadowNormalBias=ot.normalBias,st.shadowRadius=ot.radius,st.shadowMapSize=ot.mapSize,st.shadowCameraNear=ot.camera.near,st.shadowCameraFar=ot.camera.far,s.pointShadow[m]=st,s.pointShadowMap[m]=tt,s.pointShadowMatrix[m]=D.shadow.matrix,E++}s.point[m]=J,m++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(G*b),J.groundColor.copy(D.groundColor).multiplyScalar(G*b),s.hemi[g]=J,g++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=_;const I=s.hash;(I.directionalLength!==x||I.pointLength!==m||I.spotLength!==d||I.rectAreaLength!==v||I.hemiLength!==g||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==T||I.numSpotMaps!==S||I.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=v,s.point.length=m,s.hemi.length=g,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=T+S-P,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=M,I.directionalLength=x,I.pointLength=m,I.spotLength=d,I.rectAreaLength=v,I.hemiLength=g,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=T,I.numSpotMaps=S,I.numLightProbes=M,s.version=Bx++)}function l(u,f){let h=0,p=0,_=0,x=0,m=0;const d=f.matrixWorldInverse;for(let v=0,g=u.length;v<g;v++){const y=u[v];if(y.isDirectionalLight){const E=s.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),h++}else if(y.isSpotLight){const E=s.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const E=s.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function ju(i,t){const e=new kx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Hx(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new ju(i,t),e.set(r,[c])):a>=o.length?(c=new ju(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Gx extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vx extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xx=`uniform sampler2D shadow_pass;
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
}`;function qx(i,t,e){let n=new sl;const s=new ft,r=new ft,a=new ne,o=new Gx({depthPacking:zp}),c=new Vx,l={},u=e.maxTextureSize,f={[Pn]:Fe,[Fe]:Pn,[cn]:cn},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Wx,fragmentShader:Xx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ve;_.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ee(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let d=this.type;this.render=function(T,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ui),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=d!==Gn&&this.type===Gn,D=d===Gn&&this.type!==Gn;for(let z=0,G=T.length;z<G;z++){const Q=T[z],tt=Q.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);const J=tt.getFrameExtents();if(s.multiply(J),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,tt.mapSize.y=r.y)),tt.map===null||H===!0||D===!0){const st=this.type!==Gn?{minFilter:Ge,magFilter:Ge}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Fi(s.x,s.y,st),tt.map.texture.name=Q.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();const ot=tt.getViewportCount();for(let st=0;st<ot;st++){const vt=tt.getViewport(st);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),U.viewport(a),tt.updateMatrices(Q,st),n=tt.getFrustum(),y(S,P,tt.camera,Q,this.type)}tt.isPointLightShadow!==!0&&this.type===Gn&&v(tt,P),tt.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,I)};function v(T,S){const P=t.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fi(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,P,h,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,P,p,x,null)}function g(T,S,P,M){let b=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)b=I;else if(b=P.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=b.uuid,H=S.uuid;let D=l[U];D===void 0&&(D={},l[U]=D);let z=D[H];z===void 0&&(z=b.clone(),D[H]=z,S.addEventListener("dispose",E)),b=z}if(b.visible=S.visible,b.wireframe=S.wireframe,M===Gn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:f[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=i.properties.get(b);U.light=P}return b}function y(T,S,P,M,b){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const H=t.update(T),D=T.material;if(Array.isArray(D)){const z=H.groups;for(let G=0,Q=z.length;G<Q;G++){const tt=z[G],J=D[tt.materialIndex];if(J&&J.visible){const ot=g(T,J,M,b);T.onBeforeShadow(i,T,S,P,H,ot,tt),i.renderBufferDirect(P,null,H,ot,T,tt),T.onAfterShadow(i,T,S,P,H,ot,tt)}}}else if(D.visible){const z=g(T,D,M,b);T.onBeforeShadow(i,T,S,P,H,z,null),i.renderBufferDirect(P,null,H,z,T,null),T.onAfterShadow(i,T,S,P,H,z,null)}}const U=T.children;for(let H=0,D=U.length;H<D;H++)y(U[H],S,P,M,b)}function E(T){T.target.removeEventListener("dispose",E);for(const P in l){const M=l[P],b=T.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function Yx(i,t,e){const n=e.isWebGL2;function s(){let F=!1;const mt=new ne;let Mt=null;const kt=new ne(0,0,0,0);return{setMask:function(Ot){Mt!==Ot&&!F&&(i.colorMask(Ot,Ot,Ot,Ot),Mt=Ot)},setLocked:function(Ot){F=Ot},setClear:function(Ot,Zt,Kt,de,_e){_e===!0&&(Ot*=de,Zt*=de,Kt*=de),mt.set(Ot,Zt,Kt,de),kt.equals(mt)===!1&&(i.clearColor(Ot,Zt,Kt,de),kt.copy(mt))},reset:function(){F=!1,Mt=null,kt.set(-1,0,0,0)}}}function r(){let F=!1,mt=null,Mt=null,kt=null;return{setTest:function(Ot){Ot?zt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Ot){mt!==Ot&&!F&&(i.depthMask(Ot),mt=Ot)},setFunc:function(Ot){if(Mt!==Ot){switch(Ot){case mp:i.depthFunc(i.NEVER);break;case gp:i.depthFunc(i.ALWAYS);break;case _p:i.depthFunc(i.LESS);break;case Bo:i.depthFunc(i.LEQUAL);break;case xp:i.depthFunc(i.EQUAL);break;case vp:i.depthFunc(i.GEQUAL);break;case yp:i.depthFunc(i.GREATER);break;case Mp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Ot}},setLocked:function(Ot){F=Ot},setClear:function(Ot){kt!==Ot&&(i.clearDepth(Ot),kt=Ot)},reset:function(){F=!1,mt=null,Mt=null,kt=null}}}function a(){let F=!1,mt=null,Mt=null,kt=null,Ot=null,Zt=null,Kt=null,de=null,_e=null;return{setTest:function(te){F||(te?zt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(te){mt!==te&&!F&&(i.stencilMask(te),mt=te)},setFunc:function(te,Se,An){(Mt!==te||kt!==Se||Ot!==An)&&(i.stencilFunc(te,Se,An),Mt=te,kt=Se,Ot=An)},setOp:function(te,Se,An){(Zt!==te||Kt!==Se||de!==An)&&(i.stencilOp(te,Se,An),Zt=te,Kt=Se,de=An)},setLocked:function(te){F=te},setClear:function(te){_e!==te&&(i.clearStencil(te),_e=te)},reset:function(){F=!1,mt=null,Mt=null,kt=null,Ot=null,Zt=null,Kt=null,de=null,_e=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,x=[],m=null,d=!1,v=null,g=null,y=null,E=null,T=null,S=null,P=null,M=new jt(0,0,0),b=0,I=!1,U=null,H=null,D=null,z=null,G=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,J=0;const ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ot)[1]),tt=J>=1):ot.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),tt=J>=2);let st=null,vt={};const K=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),yt=new ne().fromArray(K),At=new ne().fromArray(rt);function wt(F,mt,Mt,kt){const Ot=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(F,Zt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<Mt;Kt++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(mt,0,i.RGBA,1,1,kt,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(mt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return Zt}const Ft={};Ft[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ft[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),zt(i.DEPTH_TEST),c.setFunc(Bo),bt(!1),R(Ll),zt(i.CULL_FACE),nt(ui);function zt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Pt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Bt(F,mt){return p[F]!==mt?(i.bindFramebuffer(F,mt),p[F]=mt,n&&(F===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=mt),F===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=mt)),!0):!1}function O(F,mt){let Mt=x,kt=!1;if(F)if(Mt=_.get(mt),Mt===void 0&&(Mt=[],_.set(mt,Mt)),F.isWebGLMultipleRenderTargets){const Ot=F.texture;if(Mt.length!==Ot.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,Kt=Ot.length;Zt<Kt;Zt++)Mt[Zt]=i.COLOR_ATTACHMENT0+Zt;Mt.length=Ot.length,kt=!0}}else Mt[0]!==i.COLOR_ATTACHMENT0&&(Mt[0]=i.COLOR_ATTACHMENT0,kt=!0);else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,kt=!0);kt&&(e.isWebGL2?i.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function _t(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const it={[Ci]:i.FUNC_ADD,[tp]:i.FUNC_SUBTRACT,[ep]:i.FUNC_REVERSE_SUBTRACT};if(n)it[Nl]=i.MIN,it[Ol]=i.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(it[Nl]=F.MIN_EXT,it[Ol]=F.MAX_EXT)}const dt={[np]:i.ZERO,[ip]:i.ONE,[sp]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[up]:i.SRC_ALPHA_SATURATE,[cp]:i.DST_COLOR,[op]:i.DST_ALPHA,[rp]:i.ONE_MINUS_SRC_COLOR,[Ac]:i.ONE_MINUS_SRC_ALPHA,[lp]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[hp]:i.CONSTANT_COLOR,[fp]:i.ONE_MINUS_CONSTANT_COLOR,[dp]:i.CONSTANT_ALPHA,[pp]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(F,mt,Mt,kt,Ot,Zt,Kt,de,_e,te){if(F===ui){d===!0&&(Pt(i.BLEND),d=!1);return}if(d===!1&&(zt(i.BLEND),d=!0),F!==Qd){if(F!==v||te!==I){if((g!==Ci||T!==Ci)&&(i.blendEquation(i.FUNC_ADD),g=Ci,T=Ci),te)switch(F){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dl:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,E=null,S=null,P=null,M.set(0,0,0),b=0,v=F,I=te}return}Ot=Ot||mt,Zt=Zt||Mt,Kt=Kt||kt,(mt!==g||Ot!==T)&&(i.blendEquationSeparate(it[mt],it[Ot]),g=mt,T=Ot),(Mt!==y||kt!==E||Zt!==S||Kt!==P)&&(i.blendFuncSeparate(dt[Mt],dt[kt],dt[Zt],dt[Kt]),y=Mt,E=kt,S=Zt,P=Kt),(de.equals(M)===!1||_e!==b)&&(i.blendColor(de.r,de.g,de.b,_e),M.copy(de),b=_e),v=F,I=!1}function Ut(F,mt){F.side===cn?Pt(i.CULL_FACE):zt(i.CULL_FACE);let Mt=F.side===Fe;mt&&(Mt=!Mt),bt(Mt),F.blending===Ps&&F.transparent===!1?nt(ui):nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),o.setMask(F.colorWrite);const kt=F.stencilWrite;l.setTest(kt),kt&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),V(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?zt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(F){U!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),U=F)}function R(F){F!==Zd?(zt(i.CULL_FACE),F!==H&&(F===Ll?i.cullFace(i.BACK):F===Kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),H=F}function A(F){F!==D&&(tt&&i.lineWidth(F),D=F)}function V(F,mt,Mt){F?(zt(i.POLYGON_OFFSET_FILL),(z!==mt||G!==Mt)&&(i.polygonOffset(mt,Mt),z=mt,G=Mt)):Pt(i.POLYGON_OFFSET_FILL)}function ht(F){F?zt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function lt(F){F===void 0&&(F=i.TEXTURE0+Q-1),st!==F&&(i.activeTexture(F),st=F)}function at(F,mt,Mt){Mt===void 0&&(st===null?Mt=i.TEXTURE0+Q-1:Mt=st);let kt=vt[Mt];kt===void 0&&(kt={type:void 0,texture:void 0},vt[Mt]=kt),(kt.type!==F||kt.texture!==mt)&&(st!==Mt&&(i.activeTexture(Mt),st=Mt),i.bindTexture(F,mt||Ft[F]),kt.type=F,kt.texture=mt)}function N(){const F=vt[st];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function B(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(F){yt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),yt.copy(F))}function ut(F){At.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),At.copy(F))}function Rt(F,mt){let Mt=f.get(mt);Mt===void 0&&(Mt=new WeakMap,f.set(mt,Mt));let kt=Mt.get(F);kt===void 0&&(kt=i.getUniformBlockIndex(mt,F.name),Mt.set(F,kt))}function Tt(F,mt){const kt=f.get(mt).get(F);u.get(mt)!==kt&&(i.uniformBlockBinding(mt,kt,F.__bindingPointIndex),u.set(mt,kt))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,vt={},p={},_=new WeakMap,x=[],m=null,d=!1,v=null,g=null,y=null,E=null,T=null,S=null,P=null,M=new jt(0,0,0),b=0,I=!1,U=null,H=null,D=null,z=null,G=null,yt.set(0,0,i.canvas.width,i.canvas.height),At.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:zt,disable:Pt,bindFramebuffer:Bt,drawBuffers:O,useProgram:_t,setBlending:nt,setMaterial:Ut,setFlipSided:bt,setCullFace:R,setLineWidth:A,setPolygonOffset:V,setScissorTest:ht,activeTexture:lt,bindTexture:at,unbindTexture:N,compressedTexImage2D:B,compressedTexImage3D:X,texImage2D:Lt,texImage3D:xt,updateUBOMapping:Rt,uniformBlockBinding:Tt,texStorage2D:Dt,texStorage3D:It,texSubImage2D:pt,texSubImage3D:gt,compressedTexSubImage2D:q,compressedTexSubImage3D:Et,scissor:L,viewport:ut,reset:ct}}function $x(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,A){return p?new OffscreenCanvas(R,A):Vo("canvas")}function x(R,A,V,ht){let lt=1;if((R.width>ht||R.height>ht)&&(lt=ht/Math.max(R.width,R.height)),lt<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const at=A?Ic:Math.floor,N=at(lt*R.width),B=at(lt*R.height);f===void 0&&(f=_(N,B));const X=V?_(N,B):f;return X.width=N,X.height=B,X.getContext("2d").drawImage(R,0,0,N,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+N+"x"+B+")."),X}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return fu(R.width)&&fu(R.height)}function d(R){return o?!1:R.wrapS!==Sn||R.wrapT!==Sn||R.minFilter!==Ge&&R.minFilter!==an}function v(R,A){return R.generateMipmaps&&A&&R.minFilter!==Ge&&R.minFilter!==an}function g(R){i.generateMipmap(R)}function y(R,A,V,ht,lt=!1){if(o===!1)return A;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=A;if(A===i.RED&&(V===i.FLOAT&&(at=i.R32F),V===i.HALF_FLOAT&&(at=i.R16F),V===i.UNSIGNED_BYTE&&(at=i.R8)),A===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(at=i.R8UI),V===i.UNSIGNED_SHORT&&(at=i.R16UI),V===i.UNSIGNED_INT&&(at=i.R32UI),V===i.BYTE&&(at=i.R8I),V===i.SHORT&&(at=i.R16I),V===i.INT&&(at=i.R32I)),A===i.RG&&(V===i.FLOAT&&(at=i.RG32F),V===i.HALF_FLOAT&&(at=i.RG16F),V===i.UNSIGNED_BYTE&&(at=i.RG8)),A===i.RGBA){const N=lt?zo:re.getTransfer(ht);V===i.FLOAT&&(at=i.RGBA32F),V===i.HALF_FLOAT&&(at=i.RGBA16F),V===i.UNSIGNED_BYTE&&(at=N===oe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function E(R,A,V){return v(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==Ge&&R.minFilter!==an?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){return R===Ge||R===Fl||R===fa?i.NEAREST:i.LINEAR}function S(R){const A=R.target;A.removeEventListener("dispose",S),M(A),A.isVideoTexture&&u.delete(A)}function P(R){const A=R.target;A.removeEventListener("dispose",P),I(A)}function M(R){const A=n.get(R);if(A.__webglInit===void 0)return;const V=R.source,ht=h.get(V);if(ht){const lt=ht[A.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&b(R),Object.keys(ht).length===0&&h.delete(V)}n.remove(R)}function b(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const V=R.source,ht=h.get(V);delete ht[A.__cacheKey],a.memory.textures--}function I(R){const A=R.texture,V=n.get(R),ht=n.get(A);if(ht.__webglTexture!==void 0&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(V.__webglFramebuffer[lt]))for(let at=0;at<V.__webglFramebuffer[lt].length;at++)i.deleteFramebuffer(V.__webglFramebuffer[lt][at]);else i.deleteFramebuffer(V.__webglFramebuffer[lt]);V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[lt])}else{if(Array.isArray(V.__webglFramebuffer))for(let lt=0;lt<V.__webglFramebuffer.length;lt++)i.deleteFramebuffer(V.__webglFramebuffer[lt]);else i.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let lt=0;lt<V.__webglColorRenderbuffer.length;lt++)V.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[lt]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let lt=0,at=A.length;lt<at;lt++){const N=n.get(A[lt]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(A[lt])}n.remove(A),n.remove(R)}let U=0;function H(){U=0}function D(){const R=U;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function z(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function G(R,A){const V=n.get(R);if(R.isVideoTexture&&Ut(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ht=R.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(V,R,A);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+A)}function Q(R,A){const V=n.get(R);if(R.version>0&&V.__version!==R.version){yt(V,R,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+A)}function tt(R,A){const V=n.get(R);if(R.version>0&&V.__version!==R.version){yt(V,R,A);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+A)}function J(R,A){const V=n.get(R);if(R.version>0&&V.__version!==R.version){At(V,R,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+A)}const ot={[Cc]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[Pc]:i.MIRRORED_REPEAT},st={[Ge]:i.NEAREST,[Fl]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Cp]:i.LINEAR_MIPMAP_NEAREST,[_r]:i.LINEAR_MIPMAP_LINEAR},vt={[Hp]:i.NEVER,[Yp]:i.ALWAYS,[Gp]:i.LESS,[xf]:i.LEQUAL,[Vp]:i.EQUAL,[qp]:i.GEQUAL,[Wp]:i.GREATER,[Xp]:i.NOTEQUAL};function K(R,A,V){if(V?(i.texParameteri(R,i.TEXTURE_WRAP_S,ot[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ot[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ot[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,st[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,st[A.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Sn||A.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(A.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Ge&&A.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,vt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ge||A.minFilter!==fa&&A.minFilter!==_r||A.type===ai&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===xr&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(R,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function rt(R,A){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",S));const ht=A.source;let lt=h.get(ht);lt===void 0&&(lt={},h.set(ht,lt));const at=z(A);if(at!==R.__cacheKey){lt[at]===void 0&&(lt[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),lt[at].usedTimes++;const N=lt[R.__cacheKey];N!==void 0&&(lt[R.__cacheKey].usedTimes--,N.usedTimes===0&&b(A)),R.__cacheKey=at,R.__webglTexture=lt[at].texture}return V}function yt(R,A,V){let ht=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ht=i.TEXTURE_3D);const lt=rt(R,A),at=A.source;e.bindTexture(ht,R.__webglTexture,i.TEXTURE0+V);const N=n.get(at);if(at.version!==N.__version||lt===!0){e.activeTexture(i.TEXTURE0+V);const B=re.getPrimaries(re.workingColorSpace),X=A.colorSpace===ln?null:re.getPrimaries(A.colorSpace),pt=A.colorSpace===ln||B===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const gt=d(A)&&m(A.image)===!1;let q=x(A.image,gt,!1,s.maxTextureSize);q=bt(A,q);const Et=m(q)||o,Dt=r.convert(A.format,A.colorSpace);let It=r.convert(A.type),Lt=y(A.internalFormat,Dt,It,A.colorSpace,A.isVideoTexture);K(ht,A,Et);let xt;const L=A.mipmaps,ut=o&&A.isVideoTexture!==!0&&Lt!==mf,Rt=N.__version===void 0||lt===!0,Tt=E(A,q,Et);if(A.isDepthTexture)Lt=i.DEPTH_COMPONENT,o?A.type===ai?Lt=i.DEPTH_COMPONENT32F:A.type===oi?Lt=i.DEPTH_COMPONENT24:A.type===Ii?Lt=i.DEPTH24_STENCIL8:Lt=i.DEPTH_COMPONENT16:A.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ui&&Lt===i.DEPTH_COMPONENT&&A.type!==el&&A.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=oi,It=r.convert(A.type)),A.format===Us&&Lt===i.DEPTH_COMPONENT&&(Lt=i.DEPTH_STENCIL,A.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ii,It=r.convert(A.type))),Rt&&(ut?e.texStorage2D(i.TEXTURE_2D,1,Lt,q.width,q.height):e.texImage2D(i.TEXTURE_2D,0,Lt,q.width,q.height,0,Dt,It,null));else if(A.isDataTexture)if(L.length>0&&Et){ut&&Rt&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,L[0].width,L[0].height);for(let ct=0,F=L.length;ct<F;ct++)xt=L[ct],ut?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,Dt,It,xt.data):e.texImage2D(i.TEXTURE_2D,ct,Lt,xt.width,xt.height,0,Dt,It,xt.data);A.generateMipmaps=!1}else ut?(Rt&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,q.width,q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,q.width,q.height,Dt,It,q.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,q.width,q.height,0,Dt,It,q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Lt,L[0].width,L[0].height,q.depth);for(let ct=0,F=L.length;ct<F;ct++)xt=L[ct],A.format!==En?Dt!==null?ut?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,q.depth,Dt,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Lt,xt.width,xt.height,q.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,xt.width,xt.height,q.depth,Dt,It,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Lt,xt.width,xt.height,q.depth,0,Dt,It,xt.data)}else{ut&&Rt&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,L[0].width,L[0].height);for(let ct=0,F=L.length;ct<F;ct++)xt=L[ct],A.format!==En?Dt!==null?ut?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,Dt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Lt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,xt.width,xt.height,Dt,It,xt.data):e.texImage2D(i.TEXTURE_2D,ct,Lt,xt.width,xt.height,0,Dt,It,xt.data)}else if(A.isDataArrayTexture)ut?(Rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Lt,q.width,q.height,q.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Dt,It,q.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,q.width,q.height,q.depth,0,Dt,It,q.data);else if(A.isData3DTexture)ut?(Rt&&e.texStorage3D(i.TEXTURE_3D,Tt,Lt,q.width,q.height,q.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Dt,It,q.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,q.width,q.height,q.depth,0,Dt,It,q.data);else if(A.isFramebufferTexture){if(Rt)if(ut)e.texStorage2D(i.TEXTURE_2D,Tt,Lt,q.width,q.height);else{let ct=q.width,F=q.height;for(let mt=0;mt<Tt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Lt,ct,F,0,Dt,It,null),ct>>=1,F>>=1}}else if(L.length>0&&Et){ut&&Rt&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,L[0].width,L[0].height);for(let ct=0,F=L.length;ct<F;ct++)xt=L[ct],ut?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Dt,It,xt):e.texImage2D(i.TEXTURE_2D,ct,Lt,Dt,It,xt);A.generateMipmaps=!1}else ut?(Rt&&e.texStorage2D(i.TEXTURE_2D,Tt,Lt,q.width,q.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,It,q)):e.texImage2D(i.TEXTURE_2D,0,Lt,Dt,It,q);v(A,Et)&&g(ht),N.__version=at.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function At(R,A,V){if(A.image.length!==6)return;const ht=rt(R,A),lt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const at=n.get(lt);if(lt.version!==at.__version||ht===!0){e.activeTexture(i.TEXTURE0+V);const N=re.getPrimaries(re.workingColorSpace),B=A.colorSpace===ln?null:re.getPrimaries(A.colorSpace),X=A.colorSpace===ln||N===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const pt=A.isCompressedTexture||A.image[0].isCompressedTexture,gt=A.image[0]&&A.image[0].isDataTexture,q=[];for(let ct=0;ct<6;ct++)!pt&&!gt?q[ct]=x(A.image[ct],!1,!0,s.maxCubemapSize):q[ct]=gt?A.image[ct].image:A.image[ct],q[ct]=bt(A,q[ct]);const Et=q[0],Dt=m(Et)||o,It=r.convert(A.format,A.colorSpace),Lt=r.convert(A.type),xt=y(A.internalFormat,It,Lt,A.colorSpace),L=o&&A.isVideoTexture!==!0,ut=at.__version===void 0||ht===!0;let Rt=E(A,Et,Dt);K(i.TEXTURE_CUBE_MAP,A,Dt);let Tt;if(pt){L&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,xt,Et.width,Et.height);for(let ct=0;ct<6;ct++){Tt=q[ct].mipmaps;for(let F=0;F<Tt.length;F++){const mt=Tt[F];A.format!==En?It!==null?L?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,F,0,0,mt.width,mt.height,It,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,F,xt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,F,0,0,mt.width,mt.height,It,Lt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,F,xt,mt.width,mt.height,0,It,Lt,mt.data)}}}else{Tt=A.mipmaps,L&&ut&&(Tt.length>0&&Rt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,xt,q[0].width,q[0].height));for(let ct=0;ct<6;ct++)if(gt){L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,q[ct].width,q[ct].height,It,Lt,q[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,xt,q[ct].width,q[ct].height,0,It,Lt,q[ct].data);for(let F=0;F<Tt.length;F++){const Mt=Tt[F].image[ct].image;L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,F+1,0,0,Mt.width,Mt.height,It,Lt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,F+1,xt,Mt.width,Mt.height,0,It,Lt,Mt.data)}}else{L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It,Lt,q[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,xt,It,Lt,q[ct]);for(let F=0;F<Tt.length;F++){const mt=Tt[F];L?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,F+1,0,0,It,Lt,mt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,F+1,xt,It,Lt,mt.image[ct])}}}v(A,Dt)&&g(i.TEXTURE_CUBE_MAP),at.__version=lt.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function wt(R,A,V,ht,lt,at){const N=r.convert(V.format,V.colorSpace),B=r.convert(V.type),X=y(V.internalFormat,N,B,V.colorSpace);if(!n.get(A).__hasExternalTextures){const gt=Math.max(1,A.width>>at),q=Math.max(1,A.height>>at);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,at,X,gt,q,A.depth,0,N,B,null):e.texImage2D(lt,at,X,gt,q,0,N,B,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),nt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,lt,n.get(V).__webglTexture,0,dt(A)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,lt,n.get(V).__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(R,A,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ht=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(V||nt(A)){const lt=A.depthTexture;lt&&lt.isDepthTexture&&(lt.type===ai?ht=i.DEPTH_COMPONENT32F:lt.type===oi&&(ht=i.DEPTH_COMPONENT24));const at=dt(A);nt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,ht,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ht,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ht,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ht=dt(A);V&&nt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,A.width,A.height):nt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ht=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let lt=0;lt<ht.length;lt++){const at=ht[lt],N=r.convert(at.format,at.colorSpace),B=r.convert(at.type),X=y(at.internalFormat,N,B,at.colorSpace),pt=dt(A);V&&nt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,X,A.width,A.height):nt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,X,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,X,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const ht=n.get(A.depthTexture).__webglTexture,lt=dt(A);if(A.depthTexture.format===Ui)nt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(A.depthTexture.format===Us)nt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Pt(R){const A=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");zt(A.__webglFramebuffer,R)}else if(V){A.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ht]),A.__webglDepthbuffer[ht]=i.createRenderbuffer(),Ft(A.__webglDepthbuffer[ht],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Ft(A.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(R,A,V){const ht=n.get(R);A!==void 0&&wt(ht.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Pt(R)}function O(R){const A=R.texture,V=n.get(R),ht=n.get(A);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=A.version,a.memory.textures++);const lt=R.isWebGLCubeRenderTarget===!0,at=R.isWebGLMultipleRenderTargets===!0,N=m(R)||o;if(lt){V.__webglFramebuffer=[];for(let B=0;B<6;B++)if(o&&A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[B]=[];for(let X=0;X<A.mipmaps.length;X++)V.__webglFramebuffer[B][X]=i.createFramebuffer()}else V.__webglFramebuffer[B]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let B=0;B<A.mipmaps.length;B++)V.__webglFramebuffer[B]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(at)if(s.drawBuffers){const B=R.texture;for(let X=0,pt=B.length;X<pt;X++){const gt=n.get(B[X]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&nt(R)===!1){const B=at?A:[A];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let X=0;X<B.length;X++){const pt=B[X];V.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[X]);const gt=r.convert(pt.format,pt.colorSpace),q=r.convert(pt.type),Et=y(pt.internalFormat,gt,q,pt.colorSpace,R.isXRRenderTarget===!0),Dt=dt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,V.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),K(i.TEXTURE_CUBE_MAP,A,N);for(let B=0;B<6;B++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let X=0;X<A.mipmaps.length;X++)wt(V.__webglFramebuffer[B][X],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,X);else wt(V.__webglFramebuffer[B],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);v(A,N)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const B=R.texture;for(let X=0,pt=B.length;X<pt;X++){const gt=B[X],q=n.get(gt);e.bindTexture(i.TEXTURE_2D,q.__webglTexture),K(i.TEXTURE_2D,gt,N),wt(V.__webglFramebuffer,R,gt,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,0),v(gt,N)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let B=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?B=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(B,ht.__webglTexture),K(B,A,N),o&&A.mipmaps&&A.mipmaps.length>0)for(let X=0;X<A.mipmaps.length;X++)wt(V.__webglFramebuffer[X],R,A,i.COLOR_ATTACHMENT0,B,X);else wt(V.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,B,0);v(A,N)&&g(B),e.unbindTexture()}R.depthBuffer&&Pt(R)}function _t(R){const A=m(R)||o,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ht=0,lt=V.length;ht<lt;ht++){const at=V[ht];if(v(at,A)){const N=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,B=n.get(at).__webglTexture;e.bindTexture(N,B),g(N),e.unbindTexture()}}}function it(R){if(o&&R.samples>0&&nt(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,ht=R.height;let lt=i.COLOR_BUFFER_BIT;const at=[],N=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=n.get(R),X=R.isWebGLMultipleRenderTargets===!0;if(X)for(let pt=0;pt<A.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let pt=0;pt<A.length;pt++){at.push(i.COLOR_ATTACHMENT0+pt),R.depthBuffer&&at.push(N);const gt=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(gt===!1&&(R.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),X&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]),gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[N]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[N])),X){const q=n.get(A[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,V,ht,0,0,V,ht,lt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let pt=0;pt<A.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);const gt=n.get(A[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,B.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}}function dt(R){return Math.min(s.maxSamples,R.samples)}function nt(R){const A=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ut(R){const A=a.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function bt(R,A){const V=R.colorSpace,ht=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Lc||V!==Yn&&V!==ln&&(re.getTransfer(V)===oe?o===!1?t.has("EXT_sRGB")===!0&&ht===En?(R.format=Lc,R.minFilter=an,R.generateMipmaps=!1):A=yf.sRGBToLinear(A):(ht!==En||lt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),A}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=tt,this.setTextureCube=J,this.rebindTextures=Bt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=nt}function jx(i,t,e){const n=e.isWebGL2;function s(r,a=ln){let o;const c=re.getTransfer(a);if(r===fi)return i.UNSIGNED_BYTE;if(r===uf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===hf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Pp)return i.BYTE;if(r===Lp)return i.SHORT;if(r===el)return i.UNSIGNED_SHORT;if(r===lf)return i.INT;if(r===oi)return i.UNSIGNED_INT;if(r===ai)return i.FLOAT;if(r===xr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Dp)return i.ALPHA;if(r===En)return i.RGBA;if(r===Ip)return i.LUMINANCE;if(r===Up)return i.LUMINANCE_ALPHA;if(r===Ui)return i.DEPTH_COMPONENT;if(r===Us)return i.DEPTH_STENCIL;if(r===Lc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Np)return i.RED;if(r===ff)return i.RED_INTEGER;if(r===Op)return i.RG;if(r===df)return i.RG_INTEGER;if(r===pf)return i.RGBA_INTEGER;if(r===da||r===pa||r===ma||r===ga)if(c===oe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===da)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===da)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bl||r===zl||r===kl||r===Hl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gl||r===Vl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Gl)return c===oe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Vl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wl||r===Xl||r===ql||r===Yl||r===$l||r===jl||r===Zl||r===Kl||r===Jl||r===Ql||r===tu||r===eu||r===nu||r===iu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Wl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ql)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$l)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jl)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ql)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tu)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eu)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nu)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===iu)return c===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_a||r===su||r===ru)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===_a)return c===oe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===su)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ru)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fp||r===ou||r===au||r===cu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===_a)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ou)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===au)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ii?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Zx extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&h>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Jx extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,_=null;const x=e.getContextAttributes();let m=null,d=null;const v=[],g=[],y=new ft;let E=null;const T=new qe;T.layers.enable(1),T.viewport=new ne;const S=new qe;S.layers.enable(2),S.viewport=new ne;const P=[T,S],M=new Zx;M.layers.enable(1),M.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=v[K];return rt===void 0&&(rt=new Ha,v[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=v[K];return rt===void 0&&(rt=new Ha,v[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=v[K];return rt===void 0&&(rt=new Ha,v[K]=rt),rt.getHandSpace()};function U(K){const rt=g.indexOf(K.inputSource);if(rt===-1)return;const yt=v[rt];yt!==void 0&&(yt.update(K.inputSource,K.frame,l||a),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",D);for(let K=0;K<v.length;K++){const rt=g[K];rt!==null&&(g[K]=null,v[K].disconnect(rt))}b=null,I=null,t.setRenderTarget(m),p=null,h=null,f=null,s=null,d=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const rt={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Fi(p.framebufferWidth,p.framebufferHeight,{format:En,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let rt=null,yt=null,At=null;x.depth&&(At=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?Us:Ui,yt=x.stencil?Ii:oi);const wt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer(wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),d=new Fi(h.textureWidth,h.textureHeight,{format:En,type:fi,depthTexture:new Lf(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Ft=t.properties.get(d);Ft.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(K){for(let rt=0;rt<K.removed.length;rt++){const yt=K.removed[rt],At=g.indexOf(yt);At>=0&&(g[At]=null,v[At].disconnect(yt))}for(let rt=0;rt<K.added.length;rt++){const yt=K.added[rt];let At=g.indexOf(yt);if(At===-1){for(let Ft=0;Ft<v.length;Ft++)if(Ft>=g.length){g.push(yt),At=Ft;break}else if(g[Ft]===null){g[Ft]=yt,At=Ft;break}if(At===-1)break}const wt=v[At];wt&&wt.connect(yt)}}const z=new w,G=new w;function Q(K,rt,yt){z.setFromMatrixPosition(rt.matrixWorld),G.setFromMatrixPosition(yt.matrixWorld);const At=z.distanceTo(G),wt=rt.projectionMatrix.elements,Ft=yt.projectionMatrix.elements,zt=wt[14]/(wt[10]-1),Pt=wt[14]/(wt[10]+1),Bt=(wt[9]+1)/wt[5],O=(wt[9]-1)/wt[5],_t=(wt[8]-1)/wt[0],it=(Ft[8]+1)/Ft[0],dt=zt*_t,nt=zt*it,Ut=At/(-_t+it),bt=Ut*-_t;rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(bt),K.translateZ(Ut),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const R=zt+Ut,A=Pt+Ut,V=dt-bt,ht=nt+(At-bt),lt=Bt*Pt/A*R,at=O*Pt/A*R;K.projectionMatrix.makePerspective(V,ht,lt,at,R,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function tt(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;M.near=S.near=T.near=K.near,M.far=S.far=T.far=K.far,(b!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,I=M.far);const rt=K.parent,yt=M.cameras;tt(M,rt);for(let At=0;At<yt.length;At++)tt(yt[At],rt);yt.length===2?Q(M,T,S):M.projectionMatrix.copy(T.projectionMatrix),J(K,M,rt)};function J(K,rt,yt){yt===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Dc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)};let ot=null;function st(K,rt){if(u=rt.getViewerPose(l||a),_=rt,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let At=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,At=!0);for(let wt=0;wt<yt.length;wt++){const Ft=yt[wt];let zt=null;if(p!==null)zt=p.getViewport(Ft);else{const Bt=f.getViewSubImage(h,Ft);zt=Bt.viewport,wt===0&&(t.setRenderTargetTextures(d,Bt.colorTexture,h.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(d))}let Pt=P[wt];Pt===void 0&&(Pt=new qe,Pt.layers.enable(wt),Pt.viewport=new ne,P[wt]=Pt),Pt.matrix.fromArray(Ft.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Ft.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(zt.x,zt.y,zt.width,zt.height),wt===0&&(M.matrix.copy(Pt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),At===!0&&M.cameras.push(Pt)}}for(let yt=0;yt<v.length;yt++){const At=g[yt],wt=v[yt];At!==null&&wt!==void 0&&wt.update(At,rt,l||a)}ot&&ot(K,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}const vt=new Cf;vt.setAnimationLoop(st),this.setAnimationLoop=function(K){ot=K},this.dispose=function(){}}}function Qx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Af(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,g,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,g):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Fe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Fe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const g=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Fe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,g){const y=g.program;n.uniformBlockBinding(v,y)}function l(v,g){let y=s[v.id];y===void 0&&(_(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));const E=g.program;n.updateUBOMapping(v,E);const T=t.render.frame;r[v.id]!==T&&(h(v),r[v.id]=T)}function u(v){const g=f();v.__bindingPointIndex=g;const y=i.createBuffer(),E=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,y),y}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let T=0,S=y.length;T<S;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,b=P.length;M<b;M++){const I=P[M];if(p(I,T,M,E)===!0){const U=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let z=0;z<H.length;z++){const G=H[z],Q=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+D,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,D),D+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,g,y,E){const T=v.value,S=g+"_"+y;if(E[S]===void 0)return typeof T=="number"||typeof T=="boolean"?E[S]=T:E[S]=T.clone(),!0;{const P=E[S];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return E[S]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(v){const g=v.uniforms;let y=0;const E=16;for(let S=0,P=g.length;S<P;S++){const M=Array.isArray(g[S])?g[S]:[g[S]];for(let b=0,I=M.length;b<I;b++){const U=M[b],H=Array.isArray(U.value)?U.value:[U.value];for(let D=0,z=H.length;D<z;D++){const G=H[D],Q=x(G),tt=y%E;tt!==0&&E-tt<Q.boundary&&(y+=E-tt),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Q.storage}}}const T=y%E;return T>0&&(y+=E-T),v.__size=y,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class ol{constructor(t={}){const{canvas:e=Zp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const g=this;let y=!1,E=0,T=0,S=null,P=-1,M=null;const b=new ne,I=new ne;let U=null;const H=new jt(0);let D=0,z=e.width,G=e.height,Q=1,tt=null,J=null;const ot=new ne(0,0,z,G),st=new ne(0,0,z,G);let vt=!1;const K=new sl;let rt=!1,yt=!1,At=null;const wt=new Qt,Ft=new ft,zt=new w,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Bt(){return S===null?Q:1}let O=n;function _t(C,W){for(let $=0;$<C.length;$++){const Z=C[$],Y=e.getContext(Z,W);if(Y!==null)return Y}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",mt,!1),O===null){const W=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&W.shift(),O=_t(W,C),O===null)throw _t(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let it,dt,nt,Ut,bt,R,A,V,ht,lt,at,N,B,X,pt,gt,q,Et,Dt,It,Lt,xt,L,ut;function Rt(){it=new u_(O),dt=new s_(O,it,t),it.init(dt),xt=new jx(O,it,dt),nt=new Yx(O,it,dt),Ut=new d_(O),bt=new Ix,R=new $x(O,it,nt,bt,dt,xt,Ut),A=new o_(g),V=new l_(g),ht=new Mm(O,dt),L=new n_(O,it,ht,dt),lt=new h_(O,ht,Ut,L),at=new __(O,lt,ht,Ut),Dt=new g_(O,dt,R),gt=new r_(bt),N=new Dx(g,A,V,it,dt,L,gt),B=new Qx(g,bt),X=new Nx,pt=new Hx(it,dt),Et=new e_(g,A,V,nt,at,h,c),q=new qx(g,at,dt),ut=new tv(O,Ut,dt,nt),It=new i_(O,it,Ut,dt),Lt=new f_(O,it,Ut,dt),Ut.programs=N.programs,g.capabilities=dt,g.extensions=it,g.properties=bt,g.renderLists=X,g.shadowMap=q,g.state=nt,g.info=Ut}Rt();const Tt=new Jx(g,O);this.xr=Tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(z,G,!1))},this.getSize=function(C){return C.set(z,G)},this.setSize=function(C,W,$=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,G=W,e.width=Math.floor(C*Q),e.height=Math.floor(W*Q),$===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(z*Q,G*Q).floor()},this.setDrawingBufferSize=function(C,W,$){z=C,G=W,Q=$,e.width=Math.floor(C*$),e.height=Math.floor(W*$),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(ot)},this.setViewport=function(C,W,$,Z){C.isVector4?ot.set(C.x,C.y,C.z,C.w):ot.set(C,W,$,Z),nt.viewport(b.copy(ot).multiplyScalar(Q).floor())},this.getScissor=function(C){return C.copy(st)},this.setScissor=function(C,W,$,Z){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,W,$,Z),nt.scissor(I.copy(st).multiplyScalar(Q).floor())},this.getScissorTest=function(){return vt},this.setScissorTest=function(C){nt.setScissorTest(vt=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(C=!0,W=!0,$=!0){let Z=0;if(C){let Y=!1;if(S!==null){const Ct=S.texture.format;Y=Ct===pf||Ct===df||Ct===ff}if(Y){const Ct=S.texture.type,Nt=Ct===fi||Ct===oi||Ct===el||Ct===Ii||Ct===uf||Ct===hf,Ht=Et.getClearColor(),Gt=Et.getClearAlpha(),qt=Ht.r,Vt=Ht.g,Wt=Ht.b;Nt?(p[0]=qt,p[1]=Vt,p[2]=Wt,p[3]=Gt,O.clearBufferuiv(O.COLOR,0,p)):(_[0]=qt,_[1]=Vt,_[2]=Wt,_[3]=Gt,O.clearBufferiv(O.COLOR,0,_))}else Z|=O.COLOR_BUFFER_BIT}W&&(Z|=O.DEPTH_BUFFER_BIT),$&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),X.dispose(),pt.dispose(),bt.dispose(),A.dispose(),V.dispose(),at.dispose(),L.dispose(),ut.dispose(),N.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",_e),Tt.removeEventListener("sessionend",te),At&&(At.dispose(),At=null),Se.stop()};function ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Ut.autoReset,W=q.enabled,$=q.autoUpdate,Z=q.needsUpdate,Y=q.type;Rt(),Ut.autoReset=C,q.enabled=W,q.autoUpdate=$,q.needsUpdate=Z,q.type=Y}function mt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Mt(C){const W=C.target;W.removeEventListener("dispose",Mt),kt(W)}function kt(C){Ot(C),bt.remove(C)}function Ot(C){const W=bt.get(C).programs;W!==void 0&&(W.forEach(function($){N.releaseProgram($)}),C.isShaderMaterial&&N.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,$,Z,Y,Ct){W===null&&(W=Pt);const Nt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ht=qd(C,W,$,Z,Y);nt.setMaterial(Z,Nt);let Gt=$.index,qt=1;if(Z.wireframe===!0){if(Gt=lt.getWireframeAttribute($),Gt===void 0)return;qt=2}const Vt=$.drawRange,Wt=$.attributes.position;let xe=Vt.start*qt,Ze=(Vt.start+Vt.count)*qt;Ct!==null&&(xe=Math.max(xe,Ct.start*qt),Ze=Math.min(Ze,(Ct.start+Ct.count)*qt)),Gt!==null?(xe=Math.max(xe,0),Ze=Math.min(Ze,Gt.count)):Wt!=null&&(xe=Math.max(xe,0),Ze=Math.min(Ze,Wt.count));const Pe=Ze-xe;if(Pe<0||Pe===1/0)return;L.setup(Y,Z,Ht,$,Gt);let In,he=It;if(Gt!==null&&(In=ht.get(Gt),he=Lt,he.setIndex(In)),Y.isMesh)Z.wireframe===!0?(nt.setLineWidth(Z.wireframeLinewidth*Bt()),he.setMode(O.LINES)):he.setMode(O.TRIANGLES);else if(Y.isLine){let $t=Z.linewidth;$t===void 0&&($t=1),nt.setLineWidth($t*Bt()),Y.isLineSegments?he.setMode(O.LINES):Y.isLineLoop?he.setMode(O.LINE_LOOP):he.setMode(O.LINE_STRIP)}else Y.isPoints?he.setMode(O.POINTS):Y.isSprite&&he.setMode(O.TRIANGLES);if(Y.isBatchedMesh)he.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)he.renderInstances(xe,Pe,Y.count);else if($.isInstancedBufferGeometry){const $t=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ca=Math.min($.instanceCount,$t);he.renderInstances(xe,Pe,ca)}else he.render(xe,Pe)};function Zt(C,W,$){C.transparent===!0&&C.side===cn&&C.forceSinglePass===!1?(C.side=Fe,C.needsUpdate=!0,Tr(C,W,$),C.side=Pn,C.needsUpdate=!0,Tr(C,W,$),C.side=cn):Tr(C,W,$)}this.compile=function(C,W,$=null){$===null&&($=C),m=pt.get($),m.init(),v.push(m),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),C!==$&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(g._useLegacyLights);const Z=new Set;return C.traverse(function(Y){const Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let Nt=0;Nt<Ct.length;Nt++){const Ht=Ct[Nt];Zt(Ht,$,Y),Z.add(Ht)}else Zt(Ct,$,Y),Z.add(Ct)}),v.pop(),m=null,Z},this.compileAsync=function(C,W,$=null){const Z=this.compile(C,W,$);return new Promise(Y=>{function Ct(){if(Z.forEach(function(Nt){bt.get(Nt).currentProgram.isReady()&&Z.delete(Nt)}),Z.size===0){Y(C);return}setTimeout(Ct,10)}it.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Kt=null;function de(C){Kt&&Kt(C)}function _e(){Se.stop()}function te(){Se.start()}const Se=new Cf;Se.setAnimationLoop(de),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(C){Kt=C,Tt.setAnimationLoop(C),C===null?Se.stop():Se.start()},Tt.addEventListener("sessionstart",_e),Tt.addEventListener("sessionend",te),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(W),W=Tt.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,W,S),m=pt.get(C,v.length),m.init(),v.push(m),wt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(wt),yt=this.localClippingEnabled,rt=gt.init(this.clippingPlanes,yt),x=X.get(C,d.length),x.init(),d.push(x),An(C,W,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(tt,J),this.info.render.frame++,rt===!0&&gt.beginShadows();const $=m.state.shadowsArray;if(q.render($,C,W),rt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(x,C),m.setupLights(g._useLegacyLights),W.isArrayCamera){const Z=W.cameras;for(let Y=0,Ct=Z.length;Y<Ct;Y++){const Nt=Z[Y];Tl(x,C,Nt,Nt.viewport)}}else Tl(x,C,W);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(g,C,W),L.resetDefaultState(),P=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function An(C,W,$,Z){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){Z&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(wt);const Nt=at.update(C),Ht=C.material;Ht.visible&&x.push(C,Nt,Ht,$,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const Nt=at.update(C),Ht=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),zt.copy(Nt.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(wt)),Array.isArray(Ht)){const Gt=Nt.groups;for(let qt=0,Vt=Gt.length;qt<Vt;qt++){const Wt=Gt[qt],xe=Ht[Wt.materialIndex];xe&&xe.visible&&x.push(C,Nt,xe,$,zt.z,Wt)}}else Ht.visible&&x.push(C,Nt,Ht,$,zt.z,null)}}const Ct=C.children;for(let Nt=0,Ht=Ct.length;Nt<Ht;Nt++)An(Ct[Nt],W,$,Z)}function Tl(C,W,$,Z){const Y=C.opaque,Ct=C.transmissive,Nt=C.transparent;m.setupLightsView($),rt===!0&&gt.setGlobalState(g.clippingPlanes,$),Ct.length>0&&Xd(Y,Ct,W,$),Z&&nt.viewport(b.copy(Z)),Y.length>0&&br(Y,W,$),Ct.length>0&&br(Ct,W,$),Nt.length>0&&br(Nt,W,$),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Xd(C,W,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Ct=dt.isWebGL2;At===null&&(At=new Fi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")?xr:fi,minFilter:_r,samples:Ct?4:0})),g.getDrawingBufferSize(Ft),Ct?At.setSize(Ft.x,Ft.y):At.setSize(Ic(Ft.x),Ic(Ft.y));const Nt=g.getRenderTarget();g.setRenderTarget(At),g.getClearColor(H),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();const Ht=g.toneMapping;g.toneMapping=hi,br(C,$,Z),R.updateMultisampleRenderTarget(At),R.updateRenderTargetMipmap(At);let Gt=!1;for(let qt=0,Vt=W.length;qt<Vt;qt++){const Wt=W[qt],xe=Wt.object,Ze=Wt.geometry,Pe=Wt.material,In=Wt.group;if(Pe.side===cn&&xe.layers.test(Z.layers)){const he=Pe.side;Pe.side=Fe,Pe.needsUpdate=!0,Al(xe,$,Z,Ze,Pe,In),Pe.side=he,Pe.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(At),R.updateRenderTargetMipmap(At)),g.setRenderTarget(Nt),g.setClearColor(H,D),g.toneMapping=Ht}function br(C,W,$){const Z=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ct=C.length;Y<Ct;Y++){const Nt=C[Y],Ht=Nt.object,Gt=Nt.geometry,qt=Z===null?Nt.material:Z,Vt=Nt.group;Ht.layers.test($.layers)&&Al(Ht,W,$,Gt,qt,Vt)}}function Al(C,W,$,Z,Y,Ct){C.onBeforeRender(g,W,$,Z,Y,Ct),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(g,W,$,Z,C,Ct),Y.transparent===!0&&Y.side===cn&&Y.forceSinglePass===!1?(Y.side=Fe,Y.needsUpdate=!0,g.renderBufferDirect($,W,Z,Y,C,Ct),Y.side=Pn,Y.needsUpdate=!0,g.renderBufferDirect($,W,Z,Y,C,Ct),Y.side=cn):g.renderBufferDirect($,W,Z,Y,C,Ct),C.onAfterRender(g,W,$,Z,Y,Ct)}function Tr(C,W,$){W.isScene!==!0&&(W=Pt);const Z=bt.get(C),Y=m.state.lights,Ct=m.state.shadowsArray,Nt=Y.state.version,Ht=N.getParameters(C,Y.state,Ct,W,$),Gt=N.getProgramCacheKey(Ht);let qt=Z.programs;Z.environment=C.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(C.isMeshStandardMaterial?V:A).get(C.envMap||Z.environment),qt===void 0&&(C.addEventListener("dispose",Mt),qt=new Map,Z.programs=qt);let Vt=qt.get(Gt);if(Vt!==void 0){if(Z.currentProgram===Vt&&Z.lightsStateVersion===Nt)return Rl(C,Ht),Vt}else Ht.uniforms=N.getUniforms(C),C.onBuild($,Ht,g),C.onBeforeCompile(Ht,g),Vt=N.acquireProgram(Ht,Gt),qt.set(Gt,Vt),Z.uniforms=Ht.uniforms;const Wt=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=gt.uniform),Rl(C,Ht),Z.needsLights=$d(C),Z.lightsStateVersion=Nt,Z.needsLights&&(Wt.ambientLightColor.value=Y.state.ambient,Wt.lightProbe.value=Y.state.probe,Wt.directionalLights.value=Y.state.directional,Wt.directionalLightShadows.value=Y.state.directionalShadow,Wt.spotLights.value=Y.state.spot,Wt.spotLightShadows.value=Y.state.spotShadow,Wt.rectAreaLights.value=Y.state.rectArea,Wt.ltc_1.value=Y.state.rectAreaLTC1,Wt.ltc_2.value=Y.state.rectAreaLTC2,Wt.pointLights.value=Y.state.point,Wt.pointLightShadows.value=Y.state.pointShadow,Wt.hemisphereLights.value=Y.state.hemi,Wt.directionalShadowMap.value=Y.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Wt.spotShadowMap.value=Y.state.spotShadowMap,Wt.spotLightMatrix.value=Y.state.spotLightMatrix,Wt.spotLightMap.value=Y.state.spotLightMap,Wt.pointShadowMap.value=Y.state.pointShadowMap,Wt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Vt,Z.uniformsList=null,Vt}function wl(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Lo.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Rl(C,W){const $=bt.get(C);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function qd(C,W,$,Z,Y){W.isScene!==!0&&(W=Pt),R.resetTextureUnits();const Ct=W.fog,Nt=Z.isMeshStandardMaterial?W.environment:null,Ht=S===null?g.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Yn,Gt=(Z.isMeshStandardMaterial?V:A).get(Z.envMap||Nt),qt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Wt=!!$.morphAttributes.position,xe=!!$.morphAttributes.normal,Ze=!!$.morphAttributes.color;let Pe=hi;Z.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Pe=g.toneMapping);const In=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,he=In!==void 0?In.length:0,$t=bt.get(Z),ca=m.state.lights;if(rt===!0&&(yt===!0||C!==M)){const en=C===M&&Z.id===P;gt.setState(Z,C,en)}let pe=!1;Z.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ca.state.version||$t.outputColorSpace!==Ht||Y.isBatchedMesh&&$t.batching===!1||!Y.isBatchedMesh&&$t.batching===!0||Y.isInstancedMesh&&$t.instancing===!1||!Y.isInstancedMesh&&$t.instancing===!0||Y.isSkinnedMesh&&$t.skinning===!1||!Y.isSkinnedMesh&&$t.skinning===!0||Y.isInstancedMesh&&$t.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$t.instancingColor===!1&&Y.instanceColor!==null||$t.envMap!==Gt||Z.fog===!0&&$t.fog!==Ct||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==gt.numPlanes||$t.numIntersection!==gt.numIntersection)||$t.vertexAlphas!==qt||$t.vertexTangents!==Vt||$t.morphTargets!==Wt||$t.morphNormals!==xe||$t.morphColors!==Ze||$t.toneMapping!==Pe||dt.isWebGL2===!0&&$t.morphTargetsCount!==he)&&(pe=!0):(pe=!0,$t.__version=Z.version);let gi=$t.currentProgram;pe===!0&&(gi=Tr(Z,W,Y));let Cl=!1,Gs=!1,la=!1;const Ue=gi.getUniforms(),_i=$t.uniforms;if(nt.useProgram(gi.program)&&(Cl=!0,Gs=!0,la=!0),Z.id!==P&&(P=Z.id,Gs=!0),Cl||M!==C){Ue.setValue(O,"projectionMatrix",C.projectionMatrix),Ue.setValue(O,"viewMatrix",C.matrixWorldInverse);const en=Ue.map.cameraPosition;en!==void 0&&en.setValue(O,zt.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&Ue.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ue.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Gs=!0,la=!0)}if(Y.isSkinnedMesh){Ue.setOptional(O,Y,"bindMatrix"),Ue.setOptional(O,Y,"bindMatrixInverse");const en=Y.skeleton;en&&(dt.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ue.setValue(O,"boneTexture",en.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Ue.setOptional(O,Y,"batchingTexture"),Ue.setValue(O,"batchingTexture",Y._matricesTexture,R));const ua=$.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&dt.isWebGL2===!0)&&Dt.update(Y,$,gi),(Gs||$t.receiveShadow!==Y.receiveShadow)&&($t.receiveShadow=Y.receiveShadow,Ue.setValue(O,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(_i.envMap.value=Gt,_i.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),Gs&&(Ue.setValue(O,"toneMappingExposure",g.toneMappingExposure),$t.needsLights&&Yd(_i,la),Ct&&Z.fog===!0&&B.refreshFogUniforms(_i,Ct),B.refreshMaterialUniforms(_i,Z,Q,G,At),Lo.upload(O,wl($t),_i,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Lo.upload(O,wl($t),_i,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ue.setValue(O,"center",Y.center),Ue.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Ue.setValue(O,"normalMatrix",Y.normalMatrix),Ue.setValue(O,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const en=Z.uniformsGroups;for(let ha=0,jd=en.length;ha<jd;ha++)if(dt.isWebGL2){const Pl=en[ha];ut.update(Pl,gi),ut.bind(Pl,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Yd(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function $d(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,W,$){bt.get(C.texture).__webglTexture=W,bt.get(C.depthTexture).__webglTexture=$;const Z=bt.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){const $=bt.get(C);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,$=0){S=C,E=W,T=$;let Z=!0,Y=null,Ct=!1,Nt=!1;if(C){const Gt=bt.get(C);Gt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1):Gt.__webglFramebuffer===void 0?R.setupRenderTarget(C):Gt.__hasExternalTextures&&R.rebindTextures(C,bt.get(C.texture).__webglTexture,bt.get(C.depthTexture).__webglTexture);const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Nt=!0);const Vt=bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[W])?Y=Vt[W][$]:Y=Vt[W],Ct=!0):dt.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?Y=bt.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?Y=Vt[$]:Y=Vt,b.copy(C.viewport),I.copy(C.scissor),U=C.scissorTest}else b.copy(ot).multiplyScalar(Q).floor(),I.copy(st).multiplyScalar(Q).floor(),U=vt;if(nt.bindFramebuffer(O.FRAMEBUFFER,Y)&&dt.drawBuffers&&Z&&nt.drawBuffers(C,Y),nt.viewport(b),nt.scissor(I),nt.setScissorTest(U),Ct){const Gt=bt.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Gt.__webglTexture,$)}else if(Nt){const Gt=bt.get(C.texture),qt=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.__webglTexture,$||0,qt)}P=-1},this.readRenderTargetPixels=function(C,W,$,Z,Y,Ct,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ht=Ht[Nt]),Ht){nt.bindFramebuffer(O.FRAMEBUFFER,Ht);try{const Gt=C.texture,qt=Gt.format,Vt=Gt.type;if(qt!==En&&xt.convert(qt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===xr&&(it.has("EXT_color_buffer_half_float")||dt.isWebGL2&&it.has("EXT_color_buffer_float"));if(Vt!==fi&&xt.convert(Vt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===ai&&(dt.isWebGL2||it.has("OES_texture_float")||it.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-Z&&$>=0&&$<=C.height-Y&&O.readPixels(W,$,Z,Y,xt.convert(qt),xt.convert(Vt),Ct)}finally{const Gt=S!==null?bt.get(S).__webglFramebuffer:null;nt.bindFramebuffer(O.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(C,W,$=0){const Z=Math.pow(2,-$),Y=Math.floor(W.image.width*Z),Ct=Math.floor(W.image.height*Z);R.setTexture2D(W,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,C.x,C.y,Y,Ct),nt.unbindTexture()},this.copyTextureToTexture=function(C,W,$,Z=0){const Y=W.image.width,Ct=W.image.height,Nt=xt.convert($.format),Ht=xt.convert($.type);R.setTexture2D($,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Z,C.x,C.y,Y,Ct,Nt,Ht,W.image.data):W.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Z,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Nt,W.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,Z,C.x,C.y,Nt,Ht,W.image),Z===0&&$.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,$,Z,Y=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=C.max.x-C.min.x+1,Nt=C.max.y-C.min.y+1,Ht=C.max.z-C.min.z+1,Gt=xt.convert(Z.format),qt=xt.convert(Z.type);let Vt;if(Z.isData3DTexture)R.setTexture3D(Z,0),Vt=O.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)R.setTexture2DArray(Z,0),Vt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment);const Wt=O.getParameter(O.UNPACK_ROW_LENGTH),xe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ze=O.getParameter(O.UNPACK_SKIP_PIXELS),Pe=O.getParameter(O.UNPACK_SKIP_ROWS),In=O.getParameter(O.UNPACK_SKIP_IMAGES),he=$.isCompressedTexture?$.mipmaps[Y]:$.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,he.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,C.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,C.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?O.texSubImage3D(Vt,Y,W.x,W.y,W.z,Ct,Nt,Ht,Gt,qt,he.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Vt,Y,W.x,W.y,W.z,Ct,Nt,Ht,Gt,he.data)):O.texSubImage3D(Vt,Y,W.x,W.y,W.z,Ct,Nt,Ht,Gt,qt,he),O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,In),Y===0&&Z.generateMipmaps&&O.generateMipmap(Vt),nt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),nt.unbindTexture()},this.resetState=function(){E=0,T=0,S=null,nt.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===nl?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Jo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?Ni:gf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ni?Ae:Yn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ev extends ol{}ev.prototype.isWebGL1Renderer=!0;class al{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new al(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cl extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Zu extends we{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const us=new Qt,Ku=new Qt,$r=[],Ju=new se,nv=new Qt,$s=new ee,js=new Wi;class iv extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new se),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Ju.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Ju)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),js.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Ku.multiplyMatrices(n,us),$s.matrixWorld=Ku,$s.raycast(t,$r);for(let a=0,o=$r.length;a<o;a++){const c=$r[a];c.instanceId=r,c.object=this,e.push(c)}$r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zu(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ll extends zs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qu=new w,th=new w,eh=new Qt,Ga=new Bs,jr=new Wi;class sv extends Ie{constructor(t=new Ve,e=new ll){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Qu.fromBufferAttribute(e,s-1),th.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Qu.distanceTo(th);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;eh.copy(s).invert(),Ga.copy(t.ray).applyMatrix4(eh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new w,u=new w,f=new w,h=new w,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const d=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let g=d,y=v-1;g<y;g+=p){const E=_.getX(g),T=_.getX(g+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,T),Ga.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(h);P<t.near||P>t.far||e.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let g=d,y=v-1;g<y;g+=p){if(l.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),Ga.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(h);T<t.near||T>t.far||e.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const nh=new w,ih=new w;class Ff extends sv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)nh.fromBufferAttribute(e,s),ih.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nh.distanceTo(ih);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ft:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],r=[],a=[],o=new w,c=new Qt;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(De(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(De(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ul extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new ft,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rv extends ul{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function hl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Zr=new w,Va=new hl,Wa=new hl,Xa=new hl;class Bf extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Zr.subVectors(s[0],s[1]).add(s[0]),l=Zr);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Va.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,_,x,m),Wa.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,_,x,m),Xa.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Wa.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Xa.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Va.calc(c),Wa.calc(c),Xa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ov(i,t){const e=1-i;return e*e*t}function av(i,t){return 2*(1-i)*i*t}function cv(i,t){return i*i*t}function cr(i,t,e,n){return ov(i,t)+av(i,e)+cv(i,n)}function lv(i,t){const e=1-i;return e*e*e*t}function uv(i,t){const e=1-i;return 3*e*e*i*t}function hv(i,t){return 3*(1-i)*i*i*t}function fv(i,t){return i*i*i*t}function lr(i,t,e,n,s){return lv(i,t)+uv(i,e)+hv(i,n)+fv(i,s)}class zf extends Dn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dv extends Dn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y),lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kf extends Dn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pv extends Dn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hf extends Dn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gf extends Dn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y),cr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vf extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(sh(o,c.x,l.x,u.x,f.x),sh(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Xo=Object.freeze({__proto__:null,ArcCurve:rv,CatmullRomCurve3:Bf,CubicBezierCurve:zf,CubicBezierCurve3:dv,EllipseCurve:ul,LineCurve:kf,LineCurve3:pv,QuadraticBezierCurve:Hf,QuadraticBezierCurve3:Gf,SplineCurve:Vf});class mv extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Xo[s.type]().fromJSON(s))}return this}}class Nc extends mv{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kf(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Hf(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new zf(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new ul(t,e,n,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ia extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let _=0;const x=[],m=n/2;let d=0;v(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(p,2));function v(){const y=new w,E=new w;let T=0;const S=(e-t)/n;for(let P=0;P<=r;P++){const M=[],b=P/r,I=b*(e-t)+t;for(let U=0;U<=s;U++){const H=U/s,D=H*c+o,z=Math.sin(D),G=Math.cos(D);E.x=I*z,E.y=-b*n+m,E.z=I*G,f.push(E.x,E.y,E.z),y.set(z,S,G).normalize(),h.push(y.x,y.y,y.z),p.push(H,1-b),M.push(_++)}x.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const b=x[M][P],I=x[M+1][P],U=x[M+1][P+1],H=x[M][P+1];u.push(b,I,H),u.push(I,U,H),T+=6}l.addGroup(d,T,0),d+=T}function g(y){const E=_,T=new ft,S=new w;let P=0;const M=y===!0?t:e,b=y===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),_++;const I=_;for(let U=0;U<=s;U++){const D=U/s*c+o,z=Math.cos(D),G=Math.sin(D);S.x=M*G,S.y=m*b,S.z=M*z,f.push(S.x,S.y,S.z),h.push(0,b,0),T.x=z*.5+.5,T.y=G*.5*b+.5,p.push(T.x,T.y),_++}for(let U=0;U<s;U++){const H=E+U,D=I+U;y===!0?u.push(D,D+1,H):u.push(D+1,D,H),P+=3}l.addGroup(d,P,y===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wf extends Nc{constructor(t){super(t),this.uuid=Fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Nc().fromJSON(s))}return this}}const gv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Xf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,f,h,p;if(n&&(r=Mv(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let _=e;_<s;_+=e)f=i[_],h=i[_+1],f<o&&(o=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return vr(r,a,e,o,c,p,0),a}};function Xf(i,t,e,n,s){let r,a;if(s===Dv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=rh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=rh(r,i[r],i[r+1],a);return a&&sa(a,a.next)&&(Mr(a),a=a.next),a}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(sa(e,e.next)||fe(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Av(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?xv(i,n,s,r):_v(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Mr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=vv(ki(i),t,e),vr(i,t,e,n,s,r,2)):a===2&&yv(i,t,e,n,s,r):vr(ki(i),t,e,n,s,r,1);break}}}function _v(i){const t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<c?o<l?o:l:c<l?c:l,h=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=p&&Rs(s,o,r,c,a,l,_.x,_.y)&&fe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function xv(i,t,e,n){const s=i.prev,r=i,a=i.next;if(fe(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,f=r.y,h=a.y,p=o<c?o<l?o:l:c<l?c:l,_=u<f?u<h?u:h:f<h?f:h,x=o>c?o>l?o:l:c>l?c:l,m=u>f?u>h?u:h:f>h?f:h,d=Oc(p,_,t,e,n),v=Oc(x,m,t,e,n);let g=i.prevZ,y=i.nextZ;for(;g&&g.z>=d&&y&&y.z<=v;){if(g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&Rs(o,u,c,f,l,h,g.x,g.y)&&fe(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Rs(o,u,c,f,l,h,y.x,y.y)&&fe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=d;){if(g.x>=p&&g.x<=x&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&Rs(o,u,c,f,l,h,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Rs(o,u,c,f,l,h,y.x,y.y)&&fe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function vv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!sa(s,r)&&qf(s,n,n.next,r)&&yr(s,r)&&yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=i=r),n=n.next}while(n!==i);return ki(n)}function yv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cv(a,o)){let c=Yf(a,o);a=ki(a,a.next),c=ki(c,c.next),vr(a,t,e,n,s,r,0),vr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mv(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Xf(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Rv(l));for(s.sort(Sv),r=0;r<s.length;r++)e=Ev(s[r],e);return e}function Sv(i,t){return i.x-t.x}function Ev(i,t){const e=bv(i,t);if(!e)return t;const n=Yf(e,i);return ki(n,n.next),ki(e,e.next)}function bv(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Rs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),yr(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&Tv(s,e)))&&(s=e,u=f)),e=e.next;while(e!==o);return s}function Tv(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function Av(i,t,e,n){let s=i;do s.z===0&&(s.z=Oc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wv(s)}function wv(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Oc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Cv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pv(i,t)&&(yr(i,t)&&yr(t,i)&&Lv(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||sa(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function sa(i,t){return i.x===t.x&&i.y===t.y}function qf(i,t,e,n){const s=Jr(fe(i,t,e)),r=Jr(fe(i,t,n)),a=Jr(fe(e,n,i)),o=Jr(fe(e,n,t));return!!(s!==r&&a!==o||s===0&&Kr(i,e,t)||r===0&&Kr(i,n,t)||a===0&&Kr(e,i,n)||o===0&&Kr(e,t,n))}function Kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jr(i){return i>0?1:i<0?-1:0}function Pv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function Lv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yf(i,t){const e=new Fc(i.i,i.x,i.y),n=new Fc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rh(i,t,e,n){const s=new Fc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ur{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ur.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];oh(t),ah(n,t);let a=t.length;e.forEach(oh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,ah(n,e[c]);const o=gv.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function oh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ah(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class fl extends Ve{constructor(t=new Wf([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Iv;let g,y=!1,E,T,S,P;d&&(g=d.getSpacedPoints(u),y=!0,h=!1,E=d.computeFrenetFrames(u,!1),T=new w,S=new w,P=new w),h||(m=0,p=0,_=0,x=0);const M=o.extractPoints(l);let b=M.shape;const I=M.holes;if(!ur.isClockWise(b)){b=b.reverse();for(let O=0,_t=I.length;O<_t;O++){const it=I[O];ur.isClockWise(it)&&(I[O]=it.reverse())}}const H=ur.triangulateShape(b,I),D=b;for(let O=0,_t=I.length;O<_t;O++){const it=I[O];b=b.concat(it)}function z(O,_t,it){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(_t,it)}const G=b.length,Q=H.length;function tt(O,_t,it){let dt,nt,Ut;const bt=O.x-_t.x,R=O.y-_t.y,A=it.x-O.x,V=it.y-O.y,ht=bt*bt+R*R,lt=bt*V-R*A;if(Math.abs(lt)>Number.EPSILON){const at=Math.sqrt(ht),N=Math.sqrt(A*A+V*V),B=_t.x-R/at,X=_t.y+bt/at,pt=it.x-V/N,gt=it.y+A/N,q=((pt-B)*V-(gt-X)*A)/(bt*V-R*A);dt=B+bt*q-O.x,nt=X+R*q-O.y;const Et=dt*dt+nt*nt;if(Et<=2)return new ft(dt,nt);Ut=Math.sqrt(Et/2)}else{let at=!1;bt>Number.EPSILON?A>Number.EPSILON&&(at=!0):bt<-Number.EPSILON?A<-Number.EPSILON&&(at=!0):Math.sign(R)===Math.sign(V)&&(at=!0),at?(dt=-R,nt=bt,Ut=Math.sqrt(ht)):(dt=bt,nt=R,Ut=Math.sqrt(ht/2))}return new ft(dt/Ut,nt/Ut)}const J=[];for(let O=0,_t=D.length,it=_t-1,dt=O+1;O<_t;O++,it++,dt++)it===_t&&(it=0),dt===_t&&(dt=0),J[O]=tt(D[O],D[it],D[dt]);const ot=[];let st,vt=J.concat();for(let O=0,_t=I.length;O<_t;O++){const it=I[O];st=[];for(let dt=0,nt=it.length,Ut=nt-1,bt=dt+1;dt<nt;dt++,Ut++,bt++)Ut===nt&&(Ut=0),bt===nt&&(bt=0),st[dt]=tt(it[dt],it[Ut],it[bt]);ot.push(st),vt=vt.concat(st)}for(let O=0;O<m;O++){const _t=O/m,it=p*Math.cos(_t*Math.PI/2),dt=_*Math.sin(_t*Math.PI/2)+x;for(let nt=0,Ut=D.length;nt<Ut;nt++){const bt=z(D[nt],J[nt],dt);wt(bt.x,bt.y,-it)}for(let nt=0,Ut=I.length;nt<Ut;nt++){const bt=I[nt];st=ot[nt];for(let R=0,A=bt.length;R<A;R++){const V=z(bt[R],st[R],dt);wt(V.x,V.y,-it)}}}const K=_+x;for(let O=0;O<G;O++){const _t=h?z(b[O],vt[O],K):b[O];y?(S.copy(E.normals[0]).multiplyScalar(_t.x),T.copy(E.binormals[0]).multiplyScalar(_t.y),P.copy(g[0]).add(S).add(T),wt(P.x,P.y,P.z)):wt(_t.x,_t.y,0)}for(let O=1;O<=u;O++)for(let _t=0;_t<G;_t++){const it=h?z(b[_t],vt[_t],K):b[_t];y?(S.copy(E.normals[O]).multiplyScalar(it.x),T.copy(E.binormals[O]).multiplyScalar(it.y),P.copy(g[O]).add(S).add(T),wt(P.x,P.y,P.z)):wt(it.x,it.y,f/u*O)}for(let O=m-1;O>=0;O--){const _t=O/m,it=p*Math.cos(_t*Math.PI/2),dt=_*Math.sin(_t*Math.PI/2)+x;for(let nt=0,Ut=D.length;nt<Ut;nt++){const bt=z(D[nt],J[nt],dt);wt(bt.x,bt.y,f+it)}for(let nt=0,Ut=I.length;nt<Ut;nt++){const bt=I[nt];st=ot[nt];for(let R=0,A=bt.length;R<A;R++){const V=z(bt[R],st[R],dt);y?wt(V.x,V.y+g[u-1].y,g[u-1].x+it):wt(V.x,V.y,f+it)}}}rt(),yt();function rt(){const O=s.length/3;if(h){let _t=0,it=G*_t;for(let dt=0;dt<Q;dt++){const nt=H[dt];Ft(nt[2]+it,nt[1]+it,nt[0]+it)}_t=u+m*2,it=G*_t;for(let dt=0;dt<Q;dt++){const nt=H[dt];Ft(nt[0]+it,nt[1]+it,nt[2]+it)}}else{for(let _t=0;_t<Q;_t++){const it=H[_t];Ft(it[2],it[1],it[0])}for(let _t=0;_t<Q;_t++){const it=H[_t];Ft(it[0]+G*u,it[1]+G*u,it[2]+G*u)}}n.addGroup(O,s.length/3-O,0)}function yt(){const O=s.length/3;let _t=0;At(D,_t),_t+=D.length;for(let it=0,dt=I.length;it<dt;it++){const nt=I[it];At(nt,_t),_t+=nt.length}n.addGroup(O,s.length/3-O,1)}function At(O,_t){let it=O.length;for(;--it>=0;){const dt=it;let nt=it-1;nt<0&&(nt=O.length-1);for(let Ut=0,bt=u+m*2;Ut<bt;Ut++){const R=G*Ut,A=G*(Ut+1),V=_t+dt+R,ht=_t+nt+R,lt=_t+nt+A,at=_t+dt+A;zt(V,ht,lt,at)}}}function wt(O,_t,it){c.push(O),c.push(_t),c.push(it)}function Ft(O,_t,it){Pt(O),Pt(_t),Pt(it);const dt=s.length/3,nt=v.generateTopUV(n,s,dt-3,dt-2,dt-1);Bt(nt[0]),Bt(nt[1]),Bt(nt[2])}function zt(O,_t,it,dt){Pt(O),Pt(_t),Pt(dt),Pt(_t),Pt(it),Pt(dt);const nt=s.length/3,Ut=v.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);Bt(Ut[0]),Bt(Ut[1]),Bt(Ut[3]),Bt(Ut[1]),Bt(Ut[2]),Bt(Ut[3])}function Pt(O){s.push(c[O*3+0]),s.push(c[O*3+1]),s.push(c[O*3+2])}function Bt(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Uv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xo[s.type]().fromJSON(s)),new fl(n,t.options)}}const Iv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ft(r,a),new ft(o,c),new ft(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],p=t[s*3+1],_=t[s*3+2],x=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ft(a,1-c),new ft(l,1-f),new ft(h,1-_),new ft(x,1-d)]:[new ft(o,1-c),new ft(u,1-f),new ft(p,1-_),new ft(m,1-d)]}};function Uv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class dl extends Ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new w,f=new w,h=new w;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const x=_/s*r,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,d=(s+1)*(p-1)+_,v=(s+1)*p+_;a.push(x,m,v),a.push(m,d,v)}this.setIndex(a),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pl extends Ve{constructor(t=new Gf(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,c=new w,l=new ft;let u=new w;const f=[],h=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(p,2));function x(){for(let g=0;g<e;g++)m(g);m(r===!1?e:0),v(),d()}function m(g){u=t.getPointAt(g/e,u);const y=a.normals[g],E=a.binormals[g];for(let T=0;T<=s;T++){const S=T/s*Math.PI*2,P=Math.sin(S),M=-Math.cos(S);c.x=M*y.x+P*E.x,c.y=M*y.y+P*E.y,c.z=M*y.z+P*E.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function d(){for(let g=1;g<=e;g++)for(let y=1;y<=s;y++){const E=(s+1)*(g-1)+(y-1),T=(s+1)*g+(y-1),S=(s+1)*g+y,P=(s+1)*(g-1)+y;_.push(E,T,P),_.push(T,S,P)}}function v(){for(let g=0;g<=e;g++)for(let y=0;y<=s;y++)l.x=g/e,l.y=y/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new pl(new Xo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class qo extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ml extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class $f extends ml{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qa=new Qt,ch=new w,lh=new w;class jf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const uh=new Qt,Zs=new w,Ya=new w;class Nv extends jf{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zs),Ya.copy(n.position),Ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-Zs.x,-Zs.y,-Zs.z),uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh)}}class Ov extends ml{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fv extends jf{constructor(){super(new Pf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Er extends ml{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Fv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bv{constructor(t,e,n=0,s=1/0){this.ray=new Bs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Bc(t,this,n,e),n.sort(hh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bc(t[s],this,n,e);return n.sort(hh),n}}function hh(i,t){return i.distance-t.distance}function Bc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Bc(s[r],t,e,!0)}}class fh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dh=new w,Qr=new w;class pn{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){dh.subVectors(t,this.start),Qr.subVectors(this.end,this.start);const n=Qr.dot(Qr);let r=Qr.dot(dh)/n;return e&&(r=De(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ph extends Ff{constructor(t=10,e=10,n=4473924,s=8947848){n=new jt(n),s=new jt(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let h=0,p=0,_=-o;h<=e;h++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const x=h===r?n:s;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const u=new Ve;u.setAttribute("position",new ge(c,3)),u.setAttribute("color",new ge(l,3));const f=new ll({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const to=new se;class zv extends Ff{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Ve;r.setIndex(new we(n,1)),r.setAttribute("position",new we(s,3)),super(r,new ll({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&to.setFromObject(this.object),to.isEmpty())return;const e=to.min,n=to.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const mh={type:"change"},$a={type:"start"},gh={type:"end"},eo=new Bs,_h=new yn,kv=Math.cos(70*jp.DEG2RAD);class Zf extends Vi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",pt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(mh),n.update(),r=s.NONE},this.update=function(){const L=new w,ut=new Bi().setFromUnitVectors(t.up,new w(0,1,0)),Rt=ut.clone().invert(),Tt=new w,ct=new Bi,F=new w,mt=2*Math.PI;return function(kt=null){const Ot=n.object.position;L.copy(Ot).sub(n.target),L.applyQuaternion(ut),o.setFromVector3(L),n.autoRotate&&r===s.NONE&&U(b(kt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Zt=n.minAzimuthAngle,Kt=n.maxAzimuthAngle;isFinite(Zt)&&isFinite(Kt)&&(Zt<-Math.PI?Zt+=mt:Zt>Math.PI&&(Zt-=mt),Kt<-Math.PI?Kt+=mt:Kt>Math.PI&&(Kt-=mt),Zt<=Kt?o.theta=Math.max(Zt,Math.min(Kt,o.theta)):o.theta=o.theta>(Zt+Kt)/2?Math.max(Zt,o.theta):Math.min(Kt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=ot(o.radius):o.radius=ot(o.radius*l),L.setFromSpherical(o),L.applyQuaternion(Rt),Ot.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let de=!1;if(n.zoomToCursor&&T){let _e=null;if(n.object.isPerspectiveCamera){const te=L.length();_e=ot(te*l);const Se=te-_e;n.object.position.addScaledVector(y,Se),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const te=new w(E.x,E.y,0);te.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),de=!0;const Se=new w(E.x,E.y,0);Se.unproject(n.object),n.object.position.sub(Se).add(te),n.object.updateMatrixWorld(),_e=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;_e!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(_e).add(n.object.position):(eo.origin.copy(n.object.position),eo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(eo.direction))<kv?t.lookAt(n.target):(_h.setFromNormalAndCoplanarPoint(n.object.up,n.target),eo.intersectPlane(_h,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),de=!0);return l=1,T=!1,de||Tt.distanceToSquared(n.object.position)>a||8*(1-ct.dot(n.object.quaternion))>a||F.distanceToSquared(n.target)>0?(n.dispatchEvent(mh),Tt.copy(n.object.position),ct.copy(n.object.quaternion),F.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Et),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",at),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",V),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",pt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new fh,c=new fh;let l=1;const u=new w,f=new ft,h=new ft,p=new ft,_=new ft,x=new ft,m=new ft,d=new ft,v=new ft,g=new ft,y=new w,E=new ft;let T=!1;const S=[],P={};let M=!1;function b(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function I(L){const ut=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*ut)}function U(L){c.theta-=L}function H(L){c.phi-=L}const D=function(){const L=new w;return function(Rt,Tt){L.setFromMatrixColumn(Tt,0),L.multiplyScalar(-Rt),u.add(L)}}(),z=function(){const L=new w;return function(Rt,Tt){n.screenSpacePanning===!0?L.setFromMatrixColumn(Tt,1):(L.setFromMatrixColumn(Tt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Rt),u.add(L)}}(),G=function(){const L=new w;return function(Rt,Tt){const ct=n.domElement;if(n.object.isPerspectiveCamera){const F=n.object.position;L.copy(F).sub(n.target);let mt=L.length();mt*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Rt*mt/ct.clientHeight,n.object.matrix),z(2*Tt*mt/ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Rt*(n.object.right-n.object.left)/n.object.zoom/ct.clientWidth,n.object.matrix),z(Tt*(n.object.top-n.object.bottom)/n.object.zoom/ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Q(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function tt(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L,ut){if(!n.zoomToCursor)return;T=!0;const Rt=n.domElement.getBoundingClientRect(),Tt=L-Rt.left,ct=ut-Rt.top,F=Rt.width,mt=Rt.height;E.x=Tt/F*2-1,E.y=-(ct/mt)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function ot(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function st(L){f.set(L.clientX,L.clientY)}function vt(L){J(L.clientX,L.clientX),d.set(L.clientX,L.clientY)}function K(L){_.set(L.clientX,L.clientY)}function rt(L){h.set(L.clientX,L.clientY),p.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ut=n.domElement;U(2*Math.PI*p.x/ut.clientHeight),H(2*Math.PI*p.y/ut.clientHeight),f.copy(h),n.update()}function yt(L){v.set(L.clientX,L.clientY),g.subVectors(v,d),g.y>0?Q(I(g.y)):g.y<0&&tt(I(g.y)),d.copy(v),n.update()}function At(L){x.set(L.clientX,L.clientY),m.subVectors(x,_).multiplyScalar(n.panSpeed),G(m.x,m.y),_.copy(x),n.update()}function wt(L){J(L.clientX,L.clientY),L.deltaY<0?tt(I(L.deltaY)):L.deltaY>0&&Q(I(L.deltaY)),n.update()}function Ft(L){let ut=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),ut=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),ut=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),ut=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),ut=!0;break}ut&&(L.preventDefault(),n.update())}function zt(L){if(S.length===1)f.set(L.pageX,L.pageY);else{const ut=xt(L),Rt=.5*(L.pageX+ut.x),Tt=.5*(L.pageY+ut.y);f.set(Rt,Tt)}}function Pt(L){if(S.length===1)_.set(L.pageX,L.pageY);else{const ut=xt(L),Rt=.5*(L.pageX+ut.x),Tt=.5*(L.pageY+ut.y);_.set(Rt,Tt)}}function Bt(L){const ut=xt(L),Rt=L.pageX-ut.x,Tt=L.pageY-ut.y,ct=Math.sqrt(Rt*Rt+Tt*Tt);d.set(0,ct)}function O(L){n.enableZoom&&Bt(L),n.enablePan&&Pt(L)}function _t(L){n.enableZoom&&Bt(L),n.enableRotate&&zt(L)}function it(L){if(S.length==1)h.set(L.pageX,L.pageY);else{const Rt=xt(L),Tt=.5*(L.pageX+Rt.x),ct=.5*(L.pageY+Rt.y);h.set(Tt,ct)}p.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ut=n.domElement;U(2*Math.PI*p.x/ut.clientHeight),H(2*Math.PI*p.y/ut.clientHeight),f.copy(h)}function dt(L){if(S.length===1)x.set(L.pageX,L.pageY);else{const ut=xt(L),Rt=.5*(L.pageX+ut.x),Tt=.5*(L.pageY+ut.y);x.set(Rt,Tt)}m.subVectors(x,_).multiplyScalar(n.panSpeed),G(m.x,m.y),_.copy(x)}function nt(L){const ut=xt(L),Rt=L.pageX-ut.x,Tt=L.pageY-ut.y,ct=Math.sqrt(Rt*Rt+Tt*Tt);v.set(0,ct),g.set(0,Math.pow(v.y/d.y,n.zoomSpeed)),Q(g.y),d.copy(v);const F=(L.pageX+ut.x)*.5,mt=(L.pageY+ut.y)*.5;J(F,mt)}function Ut(L){n.enableZoom&&nt(L),n.enablePan&&dt(L)}function bt(L){n.enableZoom&&nt(L),n.enableRotate&&it(L)}function R(L){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",V)),Dt(L),L.pointerType==="touch"?gt(L):ht(L))}function A(L){n.enabled!==!1&&(L.pointerType==="touch"?q(L):lt(L))}function V(L){It(L),S.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",V)),n.dispatchEvent(gh),r=s.NONE}function ht(L){let ut;switch(L.button){case 0:ut=n.mouseButtons.LEFT;break;case 1:ut=n.mouseButtons.MIDDLE;break;case 2:ut=n.mouseButtons.RIGHT;break;default:ut=-1}switch(ut){case qi.DOLLY:if(n.enableZoom===!1)return;vt(L),r=s.DOLLY;break;case qi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;K(L),r=s.PAN}else{if(n.enableRotate===!1)return;st(L),r=s.ROTATE}break;case qi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;st(L),r=s.ROTATE}else{if(n.enablePan===!1)return;K(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent($a)}function lt(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;rt(L);break;case s.DOLLY:if(n.enableZoom===!1)return;yt(L);break;case s.PAN:if(n.enablePan===!1)return;At(L);break}}function at(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent($a),wt(N(L)),n.dispatchEvent(gh))}function N(L){const ut=L.deltaMode,Rt={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ut){case 1:Rt.deltaY*=16;break;case 2:Rt.deltaY*=100;break}return L.ctrlKey&&!M&&(Rt.deltaY*=10),Rt}function B(L){L.key==="Control"&&(M=!0,document.addEventListener("keyup",X,{passive:!0,capture:!0}))}function X(L){L.key==="Control"&&(M=!1,document.removeEventListener("keyup",X,{passive:!0,capture:!0}))}function pt(L){n.enabled===!1||n.enablePan===!1||Ft(L)}function gt(L){switch(Lt(L),S.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;zt(L),r=s.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;Pt(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(L),r=s.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent($a)}function q(L){switch(Lt(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;it(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;dt(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ut(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(L),n.update();break;default:r=s.NONE}}function Et(L){n.enabled!==!1&&L.preventDefault()}function Dt(L){S.push(L.pointerId)}function It(L){delete P[L.pointerId];for(let ut=0;ut<S.length;ut++)if(S[ut]==L.pointerId){S.splice(ut,1);return}}function Lt(L){let ut=P[L.pointerId];ut===void 0&&(ut=new ft,P[L.pointerId]=ut),ut.set(L.pageX,L.pageY)}function xt(L){const ut=L.pointerId===S[0]?S[1]:S[0];return P[ut]}n.domElement.addEventListener("contextmenu",Et),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",at,{passive:!1}),document.addEventListener("keydown",B,{passive:!0,capture:!0}),this.update()}}class Kf extends cl{constructor(t=null){super();const e=new Ln;e.deleteAttribute("uv");const n=new qo({side:Fe}),s=new qo;let r=5;t!==null&&t._useLegacyLights===!1&&(r=900);const a=new Ov(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new ee(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const c=new ee(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const l=new ee(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const u=new ee(e,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const f=new ee(e,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new ee(e,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new ee(e,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const _=new ee(e,hs(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);const x=new ee(e,hs(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const m=new ee(e,hs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const d=new ee(e,hs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const v=new ee(e,hs(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const g=new ee(e,hs(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function hs(i){const t=new ta;return t.color.setScalar(i),t}const Jt=i=>new qo(i),k={post:Jt({color:2368554,metalness:.75,roughness:.42}),rail:Jt({color:3355452,metalness:.72,roughness:.4}),shelf:Jt({color:4342348,metalness:.45,roughness:.62}),caster:Jt({color:1315864,metalness:.35,roughness:.6}),foot:Jt({color:1842210,metalness:.6,roughness:.45}),cardShroud:Jt({color:2039590,metalness:.58,roughness:.32}),cardBack:Jt({color:1644832,metalness:.45,roughness:.5}),shroud:Jt({color:3881798,metalness:.62,roughness:.4}),shroudTop:Jt({color:4868694,metalness:.55,roughness:.46}),vent:Jt({color:1381658,metalness:.3,roughness:.82}),fanHub:Jt({color:2302761,metalness:.4,roughness:.55}),fanBlade:Jt({color:1842210,metalness:.3,roughness:.6}),bracket:Jt({color:9869988,metalness:.72,roughness:.38}),nvGreen:Jt({color:7780608,metalness:.3,roughness:.4,emissive:1914368,emissiveIntensity:.6}),pcb:Jt({color:1014345,metalness:.22,roughness:.68}),pcbDark:Jt({color:740656,metalness:.22,roughness:.72}),pcbBlack:Jt({color:2105383,metalness:.3,roughness:.62}),armor:Jt({color:11186360,metalness:.8,roughness:.34}),debugRed:Jt({color:16722474,emissive:10031377,emissiveIntensity:1.1,metalness:.2,roughness:.5}),slot:Jt({color:1447452,metalness:.35,roughness:.7}),gold:Jt({color:13214283,metalness:.85,roughness:.35}),connector:Jt({color:4540495,metalness:.74,roughness:.38}),chip:Jt({color:2565934,metalness:.5,roughness:.45}),cap:Jt({color:3421244,metalness:.5,roughness:.5}),heatsink:Jt({color:3947589,metalness:.78,roughness:.32}),extrusion:Jt({color:10133674,metalness:.78,roughness:.28}),extGroove:Jt({color:6053992,metalness:.6,roughness:.45}),cable:Jt({color:2368556,metalness:.18,roughness:.86}),power:Jt({color:2499618,metalness:.22,roughness:.78}),aux:Jt({color:3358797,metalness:.3,roughness:.7}),cablePlug:Jt({color:1776417,metalness:.4,roughness:.55}),psuBody:Jt({color:2434349,metalness:.62,roughness:.4}),psuGrille:Jt({color:1513245,metalness:.4,roughness:.6}),noctua:Jt({color:9067068,metalness:.18,roughness:.72}),noctuaRim:Jt({color:5913128,metalness:.18,roughness:.72}),label:Jt({color:14211294,metalness:.1,roughness:.8})};function et(i,t,e,n){const s=new ee(new Ln(i,t,e),n);return s.castShadow=s.receiveShadow=!0,s}function j(i,t,e=0,n=0,s=0){return t.position.set(e,n,s),i.add(t),t}function ie(i,t,e,n=28){const s=new ee(new ia(i,i,t,n),e);return s.castShadow=s.receiveShadow=!0,s}function Hi(i,t=11){const e=new Me;j(e,ie(i*1.04,7,k.vent,40),0,-3.5,0);const n=new ee(new dl(i*.97,i*.05,10,44),k.fanHub);n.rotation.x=Math.PI/2,n.castShadow=!0,e.add(n),j(e,ie(i*.26,6,k.fanHub,24),0,1,0),j(e,ie(i*.19,1.4,k.chip,20),0,4,0);for(let s=0;s<t;s++){const r=et(i*.7,.7,i*.38,k.fanBlade);r.position.x=i*.5,r.rotation.x=.62;const a=new Me;a.add(r),a.position.y=.5,a.rotation.y=s/t*Math.PI*2,e.add(a)}return e}function Vn(i){const t=[[-10,10],[-3,10],[-3,8.2],[-5.5,8.2],[-5.5,5],[5.5,5],[5.5,8.2],[3,8.2],[3,10]],e=[];for(let c=0;c<4;c++){const l=Math.cos(-c*Math.PI/2),u=Math.sin(-c*Math.PI/2);for(const[f,h]of t)e.push([f*l-h*u,f*u+h*l])}const n=new Wf;e.forEach(([c,l],u)=>u?n.lineTo(c,l):n.moveTo(c,l)),n.closePath();const s=new Nc;s.absarc(0,0,2.1,0,Math.PI*2,!0),n.holes.push(s);const r=new fl(n,{depth:i,bevelEnabled:!1,curveSegments:10});r.rotateY(Math.PI/2),r.translate(-i/2,0,0);const a=new ee(r,k.extrusion);a.castShadow=a.receiveShadow=!0;const o=new Me;return o.add(a),o}const Yo={mcio:{mat:k.cable,r:3.4,plug:[13,6,17]},power12v:{mat:k.power,r:5.4,plug:[18,9,12]},aux6:{mat:k.aux,r:2.5,plug:[12,6,10]},atx:{mat:k.power,r:7,plug:[26,10,12]}},xh=i=>(Yo[i]||Yo.mcio).r;function no(i){const t=Math.abs(i.x),e=Math.abs(i.y),n=Math.abs(i.z);return t>=e&&t>=n?new w(Math.sign(i.x)||1,0,0):e>=n?new w(0,Math.sign(i.y)||1,0):new w(0,0,Math.sign(i.z)||1)}function Jf(i,t,e={}){const{type:n="mcio",sag:s=45,route:r="drape"}=e,a=Yo[n]||Yo.mcio,o=new Me;o.userData.part=n;const c=new w(...i),l=new w(...t);let u;if(e.vias)u=[c,...e.vias.map(m=>new w(m[0],m[1],m[2])),l];else if(r==="riser"){const m=e.backZ??-230,d=e.laneX??c.x;u=[c,new w(d,c.y+15,m),new w(d,(c.y+l.y)/2,m),new w(d,l.y-15,m),l]}else{const m=new w((c.x+l.x)/2,Math.min(c.y,l.y)-s,(c.z+l.z)/2-4),d=new w(c.x,c.y-Math.min(32,(c.y-m.y)*.6),c.z-1),v=new w(l.x,l.y-Math.min(32,(l.y-m.y)*.6),l.z-1);u=[c,d,m,v,l]}const f=e.na?no(new w(...e.na)):no(u[1].clone().sub(c)),h=e.nb?no(new w(...e.nb)):no(u[u.length-2].clone().sub(l));u.splice(1,0,c.clone().addScaledVector(f,Math.min(14,c.distanceTo(u[1])*.6))),u.splice(u.length-1,0,l.clone().addScaledVector(h,Math.min(14,l.distanceTo(u[u.length-2])*.6)));const p=new Bf(u,!1,"centripetal"),_=Math.max(64,Math.min(220,Math.round(p.getLength()/5))),x=new ee(new pl(p,_,a.r,9,!1),a.mat);x.castShadow=!0,o.add(x),o.userData.samples=p.getPoints(56),o.userData.lengthMm=Math.round(p.getLength());for(const[m,d,v]of[[c,f,e.ta],[l,h,e.tb]]){const g=et(...a.plug,k.cablePlug);g.position.copy(m),g.lookAt(m.clone().add(d));const y=v||[0,0,1];d.y&&Math.abs(y[2])>=Math.abs(y[0])&&g.rotateZ(Math.PI/2),o.add(g)}return o}function io(i){return Jf([-70,6,0],[70,6,0],{type:i,sag:24})}const Qf=44.45,td=25,Si=td*Qf,Hv=465.1,ja=600,vh=711.2,hr={W:445,D:700,LIP:40,EARS:482.6},wn={L:266.7,H:111.8,T:40.6},fs=8,Za=56,ed={W:150,H:86,L:210},nd={W:20,PCB:1.6,L:125},Gv={switchShelfTop:510,gpuShelfTop:775},Do=[],id=855314,yh=55,Mh=55,Ka=2;function sd(){const i=new Me,t=Hv/2,e=vh/2,n=t+21,s=n+yh/2-Ka/2;for(const r of[-1,1])for(const a of[-1,1]){j(i,et(yh,Si+40,Ka,k.post),r*n,Si/2-10,a*e),j(i,et(Ka,Si+40,Mh,k.post),r*s,Si/2-10,a*(e-Mh/2));for(let o=0;o<td;o++)for(const c of[6.35,22.225,38.1])j(i,et(9.5,9.5,1.4,k.caster),r*t,o*Qf+c,a*(e+.7))}for(const r of[-1,1])for(const a of[-22,Si-22]){j(i,et(30,32,vh-340,k.post),r*n,a,0);for(const o of[-1,1])j(i,et(38,40,250,k.post),r*n,a,o*(e-125))}for(const r of[-1,1]){j(i,et(ja,5,80,k.post),0,Si+2.5,r*(e-40));for(const a of[-1,1])for(let o=0;o<4;o++)j(i,et(34,1.4,8,k.caster),a*(170+o*32),Si+5.2,r*(e-40))}for(const r of[-1,1])j(i,et(ja,95,55,k.post),0,-48,r*(e-28));for(const r of[-1,1])for(const a of[-1,1]){const o=r*(ja/2-45),c=a*(e-28);j(i,et(70,8,70,k.foot),o,-100,c),j(i,ie(9,14,k.foot,14),o,-110,c);for(const l of[-1,1]){const u=ie(28,10,k.caster,22);u.rotation.z=Math.PI/2,j(i,u,o+l*11,-145,c+8)}}for(const r of[-1,1])for(let a=0;a<6;a++){const o=130+a*160,c=r*(n-6),l=-345.6;j(i,et(6,44,2.5,k.rail),c,o,l),j(i,et(6,2.5,24,k.rail),c,o-22,l-12),j(i,et(6,14,2.5,k.rail),c,o-16,l-24)}return i}const rd=0,Vv=1,Wv=2,Sh=2,Ja=1.25,Eh=1,fr=6*4+4+4,ra=65535,Xv=Math.pow(2,-24),Qa=Symbol("SKIP_GENERATION");function qv(i){return i.index?i.index.count:i.attributes.position.count}function Hs(i){return qv(i)/3}function Yv(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function $v(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Yv(e,n);i.setIndex(new we(s,1));for(let r=0;r<e;r++)s[r]=r}}function od(i,t){const e=Hs(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(e,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function ad(i,t){if(!i.groups||!i.groups.length)return od(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const c of i.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(a,u))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],u=o[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function jv(i,t){const e=Hs(i),n=ad(i,t).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),e!==r}function tc(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,p=1/0,_=-1/0,x=-1/0,m=-1/0;for(let d=t*6,v=(t+e)*6;d<v;d+=6){const g=i[d+0],y=i[d+1],E=g-y,T=g+y;E<r&&(r=E),T>c&&(c=T),g<f&&(f=g),g>_&&(_=g);const S=i[d+2],P=i[d+3],M=S-P,b=S+P;M<a&&(a=M),b>l&&(l=b),S<h&&(h=S),S>x&&(x=S);const I=i[d+4],U=i[d+5],H=I-U,D=I+U;H<o&&(o=H),D>u&&(u=D),I<p&&(p=I),I>m&&(m=I)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,s[0]=f,s[1]=h,s[2]=p,s[3]=_,s[4]=x,s[5]=m}function Zv(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=Hs(i),o=s.normalized;let c;t===null?(c=new Float32Array(a*6*4),e=0,n=a):(c=t,e=e||0,n=n||a);const l=s.array,u=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let p=e;p<e+n;p++){const _=p*3,x=p*6;let m=_+0,d=_+1,v=_+2;r&&(m=r[m],d=r[d],v=r[v]),o||(m=m*f+u,d=d*f+u,v=v*f+u);for(let g=0;g<3;g++){let y,E,T;o?(y=s[h[g]](m),E=s[h[g]](d),T=s[h[g]](v)):(y=l[m+g],E=l[d+g],T=l[v+g]);let S=y;E<S&&(S=E),T<S&&(S=T);let P=y;E>P&&(P=E),T>P&&(P=T);const M=(P-S)/2,b=g*2;c[x+b+0]=S+M,c[x+b+1]=M+(Math.abs(S)+M)*Xv}}return c}function me(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function bh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Th(i,t){t.set(i)}function Ah(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function so(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function Ks(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Wn=32,Kv=(i,t)=>i.candidate-t.candidate,ei=new Array(Wn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ro=new Float32Array(6);function Jv(i,t,e,n,s,r){let a=-1,o=0;if(r===rd)a=bh(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===Vv)a=bh(i),a!==-1&&(o=Qv(e,n,s,a));else if(r===Wv){const c=Ks(i);let l=Ja*s;const u=n*6,f=(n+s)*6;for(let h=0;h<3;h++){const p=t[h],m=(t[h+3]-p)/Wn;if(s<Wn/4){const d=[...ei];d.length=s;let v=0;for(let y=u;y<f;y+=6,v++){const E=d[v];E.candidate=e[y+2*h],E.count=0;const{bounds:T,leftCacheBounds:S,rightCacheBounds:P}=E;for(let M=0;M<3;M++)P[M]=1/0,P[M+3]=-1/0,S[M]=1/0,S[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0;so(y,e,T)}d.sort(Kv);let g=s;for(let y=0;y<g;y++){const E=d[y];for(;y+1<g&&d[y+1].candidate===E.candidate;)d.splice(y+1,1),g--}for(let y=u;y<f;y+=6){const E=e[y+2*h];for(let T=0;T<g;T++){const S=d[T];E>=S.candidate?so(y,e,S.rightCacheBounds):(so(y,e,S.leftCacheBounds),S.count++)}}for(let y=0;y<g;y++){const E=d[y],T=E.count,S=s-E.count,P=E.leftCacheBounds,M=E.rightCacheBounds;let b=0;T!==0&&(b=Ks(P)/c);let I=0;S!==0&&(I=Ks(M)/c);const U=Eh+Ja*(b*T+I*S);U<l&&(a=h,l=U,o=E.candidate)}}else{for(let g=0;g<Wn;g++){const y=ei[g];y.count=0,y.candidate=p+m+g*m;const E=y.bounds;for(let T=0;T<3;T++)E[T]=1/0,E[T+3]=-1/0}for(let g=u;g<f;g+=6){let T=~~((e[g+2*h]-p)/m);T>=Wn&&(T=Wn-1);const S=ei[T];S.count++,so(g,e,S.bounds)}const d=ei[Wn-1];Th(d.bounds,d.rightCacheBounds);for(let g=Wn-2;g>=0;g--){const y=ei[g],E=ei[g+1];Ah(y.bounds,E.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let g=0;g<Wn-1;g++){const y=ei[g],E=y.count,T=y.bounds,P=ei[g+1].rightCacheBounds;E!==0&&(v===0?Th(T,ro):Ah(T,ro,ro)),v+=E;let M=0,b=0;v!==0&&(M=Ks(ro)/c);const I=s-v;I!==0&&(b=Ks(P)/c);const U=Eh+Ja*(M*v+b*I);U<l&&(a=h,l=U,o=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function Qv(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}class ec{constructor(){this.boundingData=new Float32Array(6)}}function ty(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let f=t[a*3+u];t[a*3+u]=t[o*3+u],t[o*3+u]=f}for(let u=0;u<6;u++){let f=e[a*6+u];e[a*6+u]=e[o*6+u],e[o*6+u]=f}a++,o--}else return a}}function ey(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){let u=i[a];i[a]=i[o],i[o]=u;for(let f=0;f<6;f++){let h=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=h}a++,o--}else return a}}function Ye(i,t){return t[i+15]===65535}function Qe(i,t){return t[i+6]}function un(i,t){return t[i+14]}function hn(i){return i+8}function fn(i,t){return t[i+6]}function cd(i,t){return t[i+7]}let ld,rr,Io,ud;const ny=Math.pow(2,32);function zc(i){return"count"in i?1:1+zc(i.left)+zc(i.right)}function iy(i,t,e){return ld=new Float32Array(e),rr=new Uint32Array(e),Io=new Uint16Array(e),ud=new Uint8Array(e),kc(i,t)}function kc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)ld[e+a]=r[a];if(s)if(t.buffer){const a=t.buffer;ud.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=fr){const l=o/2;Ye(l,Io)||(rr[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return rr[e+6]=a,Io[n+14]=o,Io[n+15]=ra,i+fr}else{const a=t.left,o=t.right,c=t.splitAxis;let l;if(l=kc(i+fr,a),l/4>ny)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return rr[e+6]=l/4,l=kc(l,o),rr[e+7]=c,l}}function sy(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function ry(i,t,e,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=s,f=i._indirectBuffer,h=i.geometry,p=h.index?h.index.array:null,_=u?ey:ty,x=Hs(h),m=new Float32Array(6);let d=!1;const v=new ec;return tc(t,e,n,v.boundingData,m),y(v,e,n,m),v;function g(E){l&&l(E/x)}function y(E,T,S,P=null,M=0){if(!d&&M>=r&&(d=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),S<=o||M>=r)return g(T+S),E.offset=T,E.count=S,E;const b=Jv(E.boundingData,P,t,T,S,c);if(b.axis===-1)return g(T+S),E.offset=T,E.count=S,E;const I=_(f,p,t,T,S,b);if(I===T||I===T+S)g(T+S),E.offset=T,E.count=S;else{E.splitAxis=b.axis;const U=new ec,H=T,D=I-T;E.left=U,tc(t,H,D,U.boundingData,m),y(U,H,D,m,M+1);const z=new ec,G=I,Q=S-D;E.right=z,tc(t,G,Q,z.boundingData,m),y(z,G,Q,m,M+1)}return E}}function oy(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=sy(e,t.useSharedArrayBuffer),jv(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||$v(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Zv(e),r=t.indirect?od(e,t.range):ad(e,t.range);i._roots=r.map(a=>{const o=ry(i,s,a.offset,a.count,t),c=zc(o),l=new n(fr*c);return iy(0,o,l),l})}class $n{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],c=t.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}$n.prototype.setFromBox=function(){const i=new w;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);const f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();const ay=function(){const i=new w,t=new w,e=new w;return function(s,r,a){const o=s.start,c=i,l=r.start,u=t;e.subVectors(o,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(c),p=u.dot(u),_=e.dot(c),m=c.dot(c)*p-h*h;let d,v;m!==0?d=(f*h-_*p)/m:d=0,v=(f+d*h)/p,a.x=d,a.y=v}}(),gl=function(){const i=new ft,t=new w,e=new w;return function(s,r,a,o){ay(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=s.start:u=s.end;let f;l<0?f=r.start:f=r.end;const h=t,p=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=p.distanceToSquared(u)){a.copy(h),o.copy(f);return}else{a.copy(u),o.copy(p);return}}}}(),cy=function(){const i=new w,t=new w,e=new yn,n=new pn;return function(r,a){const{radius:o,center:c}=r,{a:l,b:u,c:f}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const x=a.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=o){const d=x.projectPoint(c,t);if(a.containsPoint(d))return!0}return!1}}(),ly=1e-15;function nc(i){return Math.abs(i)<ly}class mn extends ue{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new w),this.satBounds=new Array(4).fill().map(()=>new $n),this.points=[this.a,this.b,this.c],this.sphere=new Wi,this.plane=new yn,this.needsUpdate=!0}intersectsSphere(t){return cy(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);const l=r[1],u=a[1];l.subVectors(t,e),u.setFromPoints(l,s);const f=r[2],h=a[2];f.subVectors(e,n),h.setFromPoints(f,s);const p=r[3],_=a[3];p.subVectors(n,t),_.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}mn.prototype.closestPointToSegment=function(){const i=new w,t=new w,e=new pn;return function(s,r=null,a=null){const{start:o,end:c}=s,l=this.points;let u,f=1/0;for(let h=0;h<3;h++){const p=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[p]),gl(e,s,i,t),u=i.distanceToSquared(t),u<f&&(f=u,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(f)}}();mn.prototype.intersectsTriangle=function(){const i=new mn,t=new Array(3),e=new Array(3),n=new $n,s=new $n,r=new w,a=new w,o=new w,c=new w,l=new w,u=new pn,f=new pn,h=new pn,p=new w;function _(x,m,d){const v=x.points;let g=0,y=-1;for(let E=0;E<3;E++){const{start:T,end:S}=u;T.copy(v[E]),S.copy(v[(E+1)%3]),u.delta(a);const P=nc(m.distanceToPoint(T));if(nc(m.normal.dot(a))&&P){d.copy(u),g=2;break}const M=m.intersectLine(u,p);if(!M&&P&&p.copy(T),(M||P)&&!nc(p.distanceTo(S))){if(g<=1)(g===1?d.start:d.end).copy(p),P&&(y=g);else if(g>=2){(y===1?d.start:d.end).copy(p),g=2;break}if(g++,g===2&&y===-1)break}}return g}return function(m,d=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const g=this.plane,y=m.plane;if(Math.abs(g.normal.dot(y.normal))>1-1e-10){const E=this.satBounds,T=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let M=0;M<4;M++){const b=E[M],I=T[M];if(n.setFromPoints(I,e),b.isSeparated(n))return!1}const S=m.satBounds,P=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){const b=S[M],I=P[M];if(n.setFromPoints(I,t),b.isSeparated(n))return!1}for(let M=0;M<4;M++){const b=T[M];for(let I=0;I<4;I++){const U=P[I];if(r.crossVectors(b,U),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return d&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{const E=_(this,y,f);if(E===1&&m.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(E!==2)return!1;const T=_(m,g,h);if(T===1&&this.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(T!==2)return!1;if(f.delta(o),h.delta(c),o.dot(c)<0){let H=h.start;h.start=h.end,h.end=H}const S=f.start.dot(o),P=f.end.dot(o),M=h.start.dot(o),b=h.end.dot(o),I=P<M,U=S<b;return S!==b&&M!==P&&I===U?!1:(d&&(l.subVectors(f.start,h.start),l.dot(o)>0?d.start.copy(f.start):d.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(o)<0?d.end.copy(f.end):d.end.copy(h.end)),!0)}}}();mn.prototype.distanceToPoint=function(){const i=new w;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();mn.prototype.distanceToTriangle=function(){const i=new w,t=new w,e=["a","b","c"],n=new pn,s=new pn;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h;const p=e[f],_=a[p];this.closestPointToPoint(_,i),h=_.distanceToSquared(i),h<u&&(u=h,o&&o.copy(i),c&&c.copy(_));const x=this[p];a.closestPointToPoint(x,i),h=x.distanceToSquared(i),h<u&&(u=h,o&&o.copy(x),c&&c.copy(i))}for(let f=0;f<3;f++){const h=e[f],p=e[(f+1)%3];n.set(this[h],this[p]);for(let _=0;_<3;_++){const x=e[_],m=e[(_+1)%3];s.set(a[x],a[m]),gl(n,s,i,t);const d=i.distanceToSquared(t);d<u&&(u=d,o&&o.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();class We{constructor(t,e,n){this.isOrientedBox=!0,this.min=new w,this.max=new w,this.matrix=new Qt,this.invMatrix=new Qt,this.points=new Array(8).fill().map(()=>new w),this.satAxes=new Array(3).fill().map(()=>new w),this.satBounds=new Array(3).fill().map(()=>new $n),this.alignedSatBounds=new Array(3).fill().map(()=>new $n),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}We.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*l|2*u|4*f,p=s[h];p.x=l?n.x:e.x,p.y=u?n.y:e.y,p.z=f?n.z:e.z,p.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){const u=a[l],f=r[l],h=1<<l,p=s[h];u.subVectors(o,p),f.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();We.prototype.intersectsBox=function(){const i=new $n;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();We.prototype.intersectsTriangle=function(){const i=new mn,t=new Array(3),e=new $n,n=new $n,s=new w;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let h=0;h<3;h++){const p=o[h],_=c[h];if(e.setFromPoints(_,t),p.isSeparated(e))return!1}const l=a.satBounds,u=a.satAxes,f=this.points;for(let h=0;h<3;h++){const p=l[h],_=u[h];if(e.setFromPoints(_,f),p.isSeparated(e))return!1}for(let h=0;h<3;h++){const p=c[h];for(let _=0;_<4;_++){const x=u[_];if(s.crossVectors(p,x),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();We.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();We.prototype.distanceToPoint=function(){const i=new w;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();We.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new pn),e=new Array(12).fill().map(()=>new pn),n=new w,s=new w;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const u=o*o,f=a.min,h=a.max,p=this.points;let _=1/0;for(let m=0;m<8;m++){const d=p[m];s.copy(d).clamp(f,h);const v=d.distanceToSquared(s);if(v<_&&(_=v,c&&c.copy(d),l&&l.copy(s),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let v=0;v<=1;v++){const g=(m+1)%3,y=(m+2)%3,E=d<<g|v<<y,T=1<<m|d<<g|v<<y,S=p[E],P=p[T];t[x].set(S,P);const b=i[m],I=i[g],U=i[y],H=e[x],D=H.start,z=H.end;D[b]=f[b],D[I]=d?f[I]:h[I],D[U]=v?f[U]:h[I],z[b]=h[b],z[I]=d?f[I]:h[I],z[U]=v?f[U]:h[I],x++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let v=0;v<=1;v++){s.x=m?h.x:f.x,s.y=d?h.y:f.y,s.z=v?h.z:f.z,this.closestPointToPoint(s,n);const g=s.distanceToSquared(n);if(g<_&&(_=g,c&&c.copy(n),l&&l.copy(s),g<u))return Math.sqrt(g)}for(let m=0;m<12;m++){const d=t[m];for(let v=0;v<12;v++){const g=e[v];gl(d,g,n,s);const y=n.distanceToSquared(s);if(y<_&&(_=y,c&&c.copy(n),l&&l.copy(s),y<u))return Math.sqrt(y)}}return Math.sqrt(_)}}();class _l{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class uy extends _l{constructor(){super(()=>new mn)}}const dn=new uy;class hy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ae=new hy;let ci,Cs;const ds=[],oo=new _l(()=>new se);function fy(i,t,e,n,s,r){ci=oo.getPrimitive(),Cs=oo.getPrimitive(),ds.push(ci,Cs),ae.setBuffer(i._roots[t]);const a=Hc(0,i.geometry,e,n,s,r);ae.clearBuffer(),oo.releasePrimitive(ci),oo.releasePrimitive(Cs),ds.pop(),ds.pop();const o=ds.length;return o>0&&(Cs=ds[o-1],ci=ds[o-2]),a}function Hc(i,t,e,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=ae;let u=i*2;if(Ye(u,c)){const h=Qe(i,l),p=un(u,c);return me(i,o,ci),n(h,p,!1,a,r+i,ci)}else{let b=function(U){const{uint16Array:H,uint32Array:D}=ae;let z=U*2;for(;!Ye(z,H);)U=hn(U),z=U*2;return Qe(U,D)},I=function(U){const{uint16Array:H,uint32Array:D}=ae;let z=U*2;for(;!Ye(z,H);)U=fn(U,D),z=U*2;return Qe(U,D)+un(z,H)};const h=hn(i),p=fn(i,l);let _=h,x=p,m,d,v,g;if(s&&(v=ci,g=Cs,me(_,o,v),me(x,o,g),m=s(v),d=s(g),d<m)){_=p,x=h;const U=m;m=d,d=U,v=g}v||(v=ci,me(_,o,v));const y=Ye(_*2,c),E=e(v,y,m,a+1,r+_);let T;if(E===Sh){const U=b(_),D=I(_)-U;T=n(U,D,!0,a+1,r+_,v)}else T=E&&Hc(_,t,e,n,s,r,a+1);if(T)return!0;g=Cs,me(x,o,g);const S=Ye(x*2,c),P=e(g,S,d,a+1,r+x);let M;if(P===Sh){const U=b(x),D=I(x)-U;M=n(U,D,!0,a+1,r+x,g)}else M=P&&Hc(x,t,e,n,s,r,a+1);return!!M}}const Js=new w,ic=new w;function dy(i,t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(Js.copy(t).clamp(u.min,u.max),Js.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<o&&h<a,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Js);const h=t.distanceToSquared(Js);return h<o&&(ic.copy(Js),o=h,c=f),h<r}}),o===1/0)return null;const l=Math.sqrt(o);return e.point?e.point.copy(ic):e.point=ic.clone(),e.distance=l,e.faceIndex=c,e}const ps=new w,ms=new w,gs=new w,ao=new ft,co=new ft,lo=new ft,wh=new w,Rh=new w,Ch=new w,uo=new w;function py(i,t,e,n,s,r,a,o){let c;if(r===Fe?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==cn,s),c===null)return null;const l=i.origin.distanceTo(s);return l<a||l>o?null:{distance:l,point:s.clone()}}function my(i,t,e,n,s,r,a,o,c,l,u){ps.fromBufferAttribute(t,r),ms.fromBufferAttribute(t,a),gs.fromBufferAttribute(t,o);const f=py(i,ps,ms,gs,uo,c,l,u);if(f){n&&(ao.fromBufferAttribute(n,r),co.fromBufferAttribute(n,a),lo.fromBufferAttribute(n,o),f.uv=ue.getInterpolation(uo,ps,ms,gs,ao,co,lo,new ft)),s&&(ao.fromBufferAttribute(s,r),co.fromBufferAttribute(s,a),lo.fromBufferAttribute(s,o),f.uv1=ue.getInterpolation(uo,ps,ms,gs,ao,co,lo,new ft)),e&&(wh.fromBufferAttribute(e,r),Rh.fromBufferAttribute(e,a),Ch.fromBufferAttribute(e,o),f.normal=ue.getInterpolation(uo,ps,ms,gs,wh,Rh,Ch,new w),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:r,b:a,c:o,normal:new w,materialIndex:0};ue.getNormal(ps,ms,gs,h.normal),f.face=h,f.faceIndex=r}return f}function oa(i,t,e,n,s,r,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const f=i.index;i.index&&(c=f.getX(c),l=f.getX(l),u=f.getX(u));const{position:h,normal:p,uv:_,uv1:x}=i.attributes,m=my(e,h,p,_,x,c,l,u,t,r,a);return m?(m.faceIndex=n,s&&s.push(m),m):null}function Te(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,c=t+1,l=t+2;e&&(o=e.getX(o),c=e.getX(c),l=e.getX(l)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function gy(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+s;u<f;u++)oa(c,t,e,u,r,a,o)}function _y(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let p;p=oa(o,t,e,f,null,r,a),p&&p.distance<l&&(u=p,l=p.distance)}return u}function xy(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=u,Te(a,h*3,c,l),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function vy(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,_=!1){const x=h*2;if(o[x+15]===ra){const d=a[h+6],v=o[x+14];let g=1/0,y=1/0,E=1/0,T=-1/0,S=-1/0,P=-1/0;for(let M=3*d,b=3*(d+v);M<b;M++){let I=n[M];const U=s.getX(I),H=s.getY(I),D=s.getZ(I);U<g&&(g=U),U>T&&(T=U),H<y&&(y=H),H>S&&(S=H),D<E&&(E=D),D>P&&(P=D)}return c[h+0]!==g||c[h+1]!==y||c[h+2]!==E||c[h+3]!==T||c[h+4]!==S||c[h+5]!==P?(c[h+0]=g,c[h+1]=y,c[h+2]=E,c[h+3]=T,c[h+4]=S,c[h+5]=P,!0):!1}else{const d=h+8,v=a[h+6],g=d+p,y=v+p;let E=_,T=!1,S=!1;t?E||(T=t.has(g),S=t.has(y),E=!T&&!S):(T=!0,S=!0);const P=E||T,M=E||S;let b=!1;P&&(b=f(d,p,E));let I=!1;M&&(I=f(v,p,E));const U=b||I;if(U)for(let H=0;H<3;H++){const D=d+H,z=v+H,G=c[D],Q=c[D+3],tt=c[z],J=c[z+3];c[h+H]=G<tt?G:tt,c[h+H+3]=Q>J?Q:J}return U}}}function di(i,t,e,n,s){let r,a,o,c,l,u;const f=1/e.direction.x,h=1/e.direction.y,p=1/e.direction.z,_=e.origin.x,x=e.origin.y,m=e.origin.z;let d=t[i],v=t[i+3],g=t[i+1],y=t[i+3+1],E=t[i+2],T=t[i+3+2];return f>=0?(r=(d-_)*f,a=(v-_)*f):(r=(v-_)*f,a=(d-_)*f),h>=0?(o=(g-x)*h,c=(y-x)*h):(o=(y-x)*h,c=(g-x)*h),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),p>=0?(l=(E-m)*p,u=(T-m)*p):(l=(T-m)*p,u=(E-m)*p),r>u||l>a)?!1:((l>r||r!==r)&&(r=l),(u<a||a!==a)&&(a=u),r<=s&&a>=n)}function yy(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+s;u<f;u++){let h=l?l[u]:u;oa(c,t,e,h,r,a,o)}}function My(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let p;p=oa(o,t,e,c?c[f]:f,null,r,a),p&&p.distance<l&&(u=p,l=p.distance)}return u}function Sy(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),Te(a,h*3,c,l),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function Ey(i,t,e,n,s,r,a){ae.setBuffer(i._roots[t]),Gc(0,i,e,n,s,r,a),ae.clearBuffer()}function Gc(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=ae,u=i*2;if(Ye(u,c)){const h=Qe(i,l),p=un(u,c);gy(t,e,n,h,p,s,r,a)}else{const h=hn(i);di(h,o,n,r,a)&&Gc(h,t,e,n,s,r,a);const p=fn(i,l);di(p,o,n,r,a)&&Gc(p,t,e,n,s,r,a)}}const by=["x","y","z"];function Ty(i,t,e,n,s,r){ae.setBuffer(i._roots[t]);const a=Vc(0,i,e,n,s,r);return ae.clearBuffer(),a}function Vc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=ae;let l=i*2;if(Ye(l,o)){const f=Qe(i,c),h=un(l,o);return _y(t,e,n,f,h,s,r)}else{const f=cd(i,c),h=by[f],_=n.direction[h]>=0;let x,m;_?(x=hn(i),m=fn(i,c)):(x=fn(i,c),m=hn(i));const v=di(x,a,n,s,r)?Vc(x,t,e,n,s,r):null;if(v){const E=v.point[h];if(_?E<=a[m+f]:E>=a[m+f+3])return v}const y=di(m,a,n,s,r)?Vc(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const ho=new se,_s=new mn,xs=new mn,Qs=new Qt,Ph=new We,fo=new We;function Ay(i,t,e,n){ae.setBuffer(i._roots[t]);const s=Wc(0,i,e,n);return ae.clearBuffer(),s}function Wc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=ae;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Ph.set(e.boundingBox.min,e.boundingBox.max,n),s=Ph),Ye(c,a)){const u=t.geometry,f=u.index,h=u.attributes.position,p=e.index,_=e.attributes.position,x=Qe(i,o),m=un(c,a);if(Qs.copy(n).invert(),e.boundsTree)return me(i,r,fo),fo.matrix.copy(Qs),fo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>fo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let g=x*3,y=(m+x)*3;g<y;g+=3)if(Te(xs,g,f,h),xs.needsUpdate=!0,v.intersectsTriangle(xs))return!0;return!1}});for(let d=x*3,v=(m+x)*3;d<v;d+=3){Te(_s,d,f,h),_s.a.applyMatrix4(Qs),_s.b.applyMatrix4(Qs),_s.c.applyMatrix4(Qs),_s.needsUpdate=!0;for(let g=0,y=p.count;g<y;g+=3)if(Te(xs,g,p,_),xs.needsUpdate=!0,_s.intersectsTriangle(xs))return!0}}else{const u=i+8,f=o[i+6];return me(u,r,ho),!!(s.intersectsBox(ho)&&Wc(u,t,e,n,s)||(me(f,r,ho),s.intersectsBox(ho)&&Wc(f,t,e,n,s)))}}const po=new Qt,sc=new We,tr=new We,wy=new w,Ry=new w,Cy=new w,Py=new w;function Ly(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),sc.set(t.boundingBox.min,t.boundingBox.max,e),sc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,f=t.index,h=dn.getPrimitive(),p=dn.getPrimitive();let _=wy,x=Ry,m=null,d=null;s&&(m=Cy,d=Py);let v=1/0,g=null,y=null;return po.copy(e).invert(),tr.matrix.copy(po),i.shapecast({boundsTraverseOrder:E=>sc.distanceToBox(E),intersectsBounds:(E,T,S)=>S<v&&S<a?(T&&(tr.min.copy(E.min),tr.max.copy(E.max),tr.needsUpdate=!0),!0):!1,intersectsRange:(E,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:P=>tr.distanceToBox(P),intersectsBounds:(P,M,b)=>b<v&&b<a,intersectsRange:(P,M)=>{for(let b=P,I=P+M;b<I;b++){Te(p,3*b,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let U=E,H=E+T;U<H;U++){Te(h,3*U,l,c),h.needsUpdate=!0;const D=h.distanceToTriangle(p,_,m);if(D<v&&(x.copy(_),d&&d.copy(m),v=D,g=U,y=b),D<r)return!0}}}});{const S=Hs(t);for(let P=0,M=S;P<M;P++){Te(p,3*P,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let b=E,I=E+T;b<I;b++){Te(h,3*b,l,c),h.needsUpdate=!0;const U=h.distanceToTriangle(p,_,m);if(U<v&&(x.copy(_),d&&d.copy(m),v=U,g=b,y=P),U<r)return!0}}}}}),dn.releasePrimitive(h),dn.releasePrimitive(p),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=g,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(po),x.applyMatrix4(po),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function Dy(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,_=!1){const x=h*2;if(o[x+15]===ra){const d=a[h+6],v=o[x+14];let g=1/0,y=1/0,E=1/0,T=-1/0,S=-1/0,P=-1/0;for(let M=d,b=d+v;M<b;M++){const I=3*i.resolveTriangleIndex(M);for(let U=0;U<3;U++){let H=I+U;H=n?n[H]:H;const D=s.getX(H),z=s.getY(H),G=s.getZ(H);D<g&&(g=D),D>T&&(T=D),z<y&&(y=z),z>S&&(S=z),G<E&&(E=G),G>P&&(P=G)}}return c[h+0]!==g||c[h+1]!==y||c[h+2]!==E||c[h+3]!==T||c[h+4]!==S||c[h+5]!==P?(c[h+0]=g,c[h+1]=y,c[h+2]=E,c[h+3]=T,c[h+4]=S,c[h+5]=P,!0):!1}else{const d=h+8,v=a[h+6],g=d+p,y=v+p;let E=_,T=!1,S=!1;t?E||(T=t.has(g),S=t.has(y),E=!T&&!S):(T=!0,S=!0);const P=E||T,M=E||S;let b=!1;P&&(b=f(d,p,E));let I=!1;M&&(I=f(v,p,E));const U=b||I;if(U)for(let H=0;H<3;H++){const D=d+H,z=v+H,G=c[D],Q=c[D+3],tt=c[z],J=c[z+3];c[h+H]=G<tt?G:tt,c[h+H+3]=Q>J?Q:J}return U}}}function Iy(i,t,e,n,s,r,a){ae.setBuffer(i._roots[t]),Xc(0,i,e,n,s,r,a),ae.clearBuffer()}function Xc(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=ae,u=i*2;if(Ye(u,c)){const h=Qe(i,l),p=un(u,c);yy(t,e,n,h,p,s,r,a)}else{const h=hn(i);di(h,o,n,r,a)&&Xc(h,t,e,n,s,r,a);const p=fn(i,l);di(p,o,n,r,a)&&Xc(p,t,e,n,s,r,a)}}const Uy=["x","y","z"];function Ny(i,t,e,n,s,r){ae.setBuffer(i._roots[t]);const a=qc(0,i,e,n,s,r);return ae.clearBuffer(),a}function qc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=ae;let l=i*2;if(Ye(l,o)){const f=Qe(i,c),h=un(l,o);return My(t,e,n,f,h,s,r)}else{const f=cd(i,c),h=Uy[f],_=n.direction[h]>=0;let x,m;_?(x=hn(i),m=fn(i,c)):(x=fn(i,c),m=hn(i));const v=di(x,a,n,s,r)?qc(x,t,e,n,s,r):null;if(v){const E=v.point[h];if(_?E<=a[m+f]:E>=a[m+f+3])return v}const y=di(m,a,n,s,r)?qc(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const mo=new se,vs=new mn,ys=new mn,er=new Qt,Lh=new We,go=new We;function Oy(i,t,e,n){ae.setBuffer(i._roots[t]);const s=Yc(0,i,e,n);return ae.clearBuffer(),s}function Yc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=ae;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Lh.set(e.boundingBox.min,e.boundingBox.max,n),s=Lh),Ye(c,a)){const u=t.geometry,f=u.index,h=u.attributes.position,p=e.index,_=e.attributes.position,x=Qe(i,o),m=un(c,a);if(er.copy(n).invert(),e.boundsTree)return me(i,r,go),go.matrix.copy(er),go.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>go.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let g=x,y=m+x;g<y;g++)if(Te(ys,3*t.resolveTriangleIndex(g),f,h),ys.needsUpdate=!0,v.intersectsTriangle(ys))return!0;return!1}});for(let d=x,v=m+x;d<v;d++){const g=t.resolveTriangleIndex(d);Te(vs,3*g,f,h),vs.a.applyMatrix4(er),vs.b.applyMatrix4(er),vs.c.applyMatrix4(er),vs.needsUpdate=!0;for(let y=0,E=p.count;y<E;y+=3)if(Te(ys,y,p,_),ys.needsUpdate=!0,vs.intersectsTriangle(ys))return!0}}else{const u=i+8,f=o[i+6];return me(u,r,mo),!!(s.intersectsBox(mo)&&Yc(u,t,e,n,s)||(me(f,r,mo),s.intersectsBox(mo)&&Yc(f,t,e,n,s)))}}const _o=new Qt,rc=new We,nr=new We,Fy=new w,By=new w,zy=new w,ky=new w;function Hy(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),rc.set(t.boundingBox.min,t.boundingBox.max,e),rc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,f=t.index,h=dn.getPrimitive(),p=dn.getPrimitive();let _=Fy,x=By,m=null,d=null;s&&(m=zy,d=ky);let v=1/0,g=null,y=null;return _o.copy(e).invert(),nr.matrix.copy(_o),i.shapecast({boundsTraverseOrder:E=>rc.distanceToBox(E),intersectsBounds:(E,T,S)=>S<v&&S<a?(T&&(nr.min.copy(E.min),nr.max.copy(E.max),nr.needsUpdate=!0),!0):!1,intersectsRange:(E,T)=>{if(t.boundsTree){const S=t.boundsTree;return S.shapecast({boundsTraverseOrder:P=>nr.distanceToBox(P),intersectsBounds:(P,M,b)=>b<v&&b<a,intersectsRange:(P,M)=>{for(let b=P,I=P+M;b<I;b++){const U=S.resolveTriangleIndex(b);Te(p,3*U,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let H=E,D=E+T;H<D;H++){const z=i.resolveTriangleIndex(H);Te(h,3*z,l,c),h.needsUpdate=!0;const G=h.distanceToTriangle(p,_,m);if(G<v&&(x.copy(_),d&&d.copy(m),v=G,g=H,y=b),G<r)return!0}}}})}else{const S=Hs(t);for(let P=0,M=S;P<M;P++){Te(p,3*P,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let b=E,I=E+T;b<I;b++){const U=i.resolveTriangleIndex(b);Te(h,3*U,l,c),h.needsUpdate=!0;const H=h.distanceToTriangle(p,_,m);if(H<v&&(x.copy(_),d&&d.copy(m),v=H,g=b,y=P),H<r)return!0}}}}}),dn.releasePrimitive(h),dn.releasePrimitive(p),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=g,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(_o),x.applyMatrix4(_o),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function Gy(){return typeof SharedArrayBuffer<"u"}const dr=new ae.constructor,$o=new ae.constructor,ii=new _l(()=>new se),Ms=new se,Ss=new se,oc=new se,ac=new se;let cc=!1;function Vy(i,t,e,n){if(cc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");cc=!0;const s=i._roots,r=t._roots;let a,o=0,c=0;const l=new Qt().copy(e).invert();for(let u=0,f=s.length;u<f;u++){dr.setBuffer(s[u]),c=0;const h=ii.getPrimitive();me(0,dr.float32Array,h),h.applyMatrix4(l);for(let p=0,_=r.length;p<_&&($o.setBuffer(r[p]),a=vn(0,0,e,l,n,o,c,0,0,h),$o.clearBuffer(),c+=r[p].length,!a);p++);if(ii.releasePrimitive(h),dr.clearBuffer(),o+=s[u].length,a)break}return cc=!1,a}function vn(i,t,e,n,s,r=0,a=0,o=0,c=0,l=null,u=!1){let f,h;u?(f=$o,h=dr):(f=dr,h=$o);const p=f.float32Array,_=f.uint32Array,x=f.uint16Array,m=h.float32Array,d=h.uint32Array,v=h.uint16Array,g=i*2,y=t*2,E=Ye(g,x),T=Ye(y,v);let S=!1;if(T&&E)u?S=s(Qe(t,d),un(t*2,v),Qe(i,_),un(i*2,x),c,a+t,o,r+i):S=s(Qe(i,_),un(i*2,x),Qe(t,d),un(t*2,v),o,r+i,c,a+t);else if(T){const P=ii.getPrimitive();me(t,m,P),P.applyMatrix4(e);const M=hn(i),b=fn(i,_);me(M,p,Ms),me(b,p,Ss);const I=P.intersectsBox(Ms),U=P.intersectsBox(Ss);S=I&&vn(t,M,n,e,s,a,r,c,o+1,P,!u)||U&&vn(t,b,n,e,s,a,r,c,o+1,P,!u),ii.releasePrimitive(P)}else{const P=hn(t),M=fn(t,d);me(P,m,oc),me(M,m,ac);const b=l.intersectsBox(oc),I=l.intersectsBox(ac);if(b&&I)S=vn(i,P,e,n,s,r,a,o,c+1,l,u)||vn(i,M,e,n,s,r,a,o,c+1,l,u);else if(b)if(E)S=vn(i,P,e,n,s,r,a,o,c+1,l,u);else{const U=ii.getPrimitive();U.copy(oc).applyMatrix4(e);const H=hn(i),D=fn(i,_);me(H,p,Ms),me(D,p,Ss);const z=U.intersectsBox(Ms),G=U.intersectsBox(Ss);S=z&&vn(P,H,n,e,s,a,r,c,o+1,U,!u)||G&&vn(P,D,n,e,s,a,r,c,o+1,U,!u),ii.releasePrimitive(U)}else if(I)if(E)S=vn(i,M,e,n,s,r,a,o,c+1,l,u);else{const U=ii.getPrimitive();U.copy(ac).applyMatrix4(e);const H=hn(i),D=fn(i,_);me(H,p,Ms),me(D,p,Ss);const z=U.intersectsBox(Ms),G=U.intersectsBox(Ss);S=z&&vn(M,H,n,e,s,a,r,c,o+1,U,!u)||G&&vn(M,D,n,e,s,a,r,c,o+1,U,!u),ii.releasePrimitive(U)}}return S}const xo=new We,Dh=new se,Wy={strategy:rd,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class xl{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:s.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=t,o=new xl(e,{...n,[Qa]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=e.getIndex();if(c===null){const l=new we(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...Wy,[Qa]:!1},e),e.useSharedArrayBuffer&&!Gy())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Qa]||(oy(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new se))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?Dy:vy)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=r[l+15]===ra;if(u){const f=s[o+6],h=r[l+14];t(c,u,new Float32Array(n,o*4,6),f,h)}else{const f=o+fr/4,h=s[o+6],p=s[o+7];t(c,u,new Float32Array(n,o*4,6),p)||(a(f,c+1),a(h,c+1))}}}raycast(t,e=Pn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],c=e.isMaterial,l=Array.isArray(e),u=a.groups,f=c?e.side:e,h=this.indirect?Iy:Ey;for(let p=0,_=r.length;p<_;p++){const x=l?e[u[p].materialIndex].side:f,m=o.length;if(h(this,p,x,t,o,n,s),l){const d=u[p].materialIndex;for(let v=m,g=o.length;v<g;v++)o[v].face.materialIndex=d}}return o}raycastFirst(t,e=Pn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=e.isMaterial,c=Array.isArray(e);let l=null;const u=a.groups,f=o?e.side:e,h=this.indirect?Ny:Ty;for(let p=0,_=r.length;p<_;p++){const x=c?e[u[p].materialIndex].side:f,m=h(this,p,x,t,n,s);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[p].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?Oy:Ay;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){const e=dn.getPrimitive(),n=this.indirect?Sy:xy;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const f=a;a=(h,p,_,x,m)=>f(h,p,_,x,m)?!0:n(h,p,this,o,_,x,e)}else a||(o?a=(f,h,p,_)=>n(f,h,this,o,p,_,e):a=(f,h,p)=>p);let c=!1,l=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const p=u[f];if(c=fy(this,f,r,a,s,l),c)break;l+=p.byteLength}return dn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=dn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?_=>{const x=this.resolveTriangleIndex(_);Te(a,x*3,o,c)}:_=>{Te(a,_*3,o,c)},u=dn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,p=t.indirect?_=>{const x=t.resolveTriangleIndex(_);Te(u,x*3,f,h)}:_=>{Te(u,_*3,f,h)};if(r){const _=(x,m,d,v,g,y,E,T)=>{for(let S=d,P=d+v;S<P;S++){p(S),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=x,b=x+m;M<b;M++)if(l(M),a.needsUpdate=!0,r(a,u,M,S,g,y,E,T))return!0}return!1};if(s){const x=s;s=function(m,d,v,g,y,E,T,S){return x(m,d,v,g,y,E,T,S)?!0:_(m,d,v,g,y,E,T,S)}}else s=_}return Vy(this,t,e,s)}intersectsBox(t,e){return xo.set(t.min,t.max,e),xo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>xo.intersectsBox(n),intersectsTriangle:n=>xo.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?Hy:Ly)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return dy(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{me(0,new Float32Array(n),Dh),t.union(Dh)}),t}}const hd=1e-6,Xy=hd*.5,fd=Math.pow(10,-Math.log10(hd)),qy=Xy*fd;function Cn(i){return~~(i*fd+qy)}function Yy(i){return`${Cn(i.x)},${Cn(i.y)}`}function Ih(i){return`${Cn(i.x)},${Cn(i.y)},${Cn(i.z)}`}function $y(i){return`${Cn(i.x)},${Cn(i.y)},${Cn(i.z)},${Cn(i.w)}`}function jy(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function dd(){return typeof SharedArrayBuffer<"u"}function Zy(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(n).set(s,0),new t(n)}function Ky(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Jy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Ky(e,n);i.setIndex(new we(s,1));for(let r=0;r<e;r++)s[r]=r}}function Qy(i){return i.index?i.index.count:i.attributes.position.count}function vl(i){return Qy(i)/3}const tM=1e-8,eM=new w;function nM(i){return~~(i/3)}function iM(i){return i%3}function Uh(i,t){return i.start-t.start}function Nh(i,t){return eM.subVectors(t,i.origin).dot(i.direction)}function sM(i,t,e,n=tM){i.sort(Uh),t.sort(Uh);for(let o=0;o<i.length;o++){const c=i[o];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||i.splice(o+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const f=c.end;c.end=u.start,u.start=f}else if(c.start>=u.start&&c.end>=u.end){const f=u.end;u.end=c.start,c.start=f}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),a(u)&&(t.splice(l,1),l--),a(c)){i.splice(o,1),o--;break}}}s(i),s(t);function s(o){for(let c=0;c<o.length;c++)a(o[c])&&(o.splice(c,1),c--)}function r(o,c){return Math.abs(c-o)<n}function a(o){return Math.abs(o.end-o.start)<n}}const Oh=1e-5,Fh=1e-4;class rM{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(a(u,t)&&a(u,n))continue;const f=o(u,t),h=o(u,n),p=Math.min(f,h);p<s&&(s=p,r=u)}return r;function a(c,l){const u=c.origin.distanceTo(l.origin)>Oh;return c.direction.angleTo(l.direction)>Fh||u}function o(c,l){const u=c.origin.distanceTo(l.origin),f=c.direction.angleTo(l.direction);return u/Oh+f/Fh}}}const lc=new w,uc=new w,vo=new Bs;function oM(i,t,e){const n=i.attributes,s=i.index,r=n.position,a=new Map,o=new Map,c=Array.from(t),l=new rM;for(let u=0,f=c.length;u<f;u++){const h=c[u],p=nM(h),_=iM(h);let x=3*p+_,m=3*p+(_+1)%3;s&&(x=s.getX(x),m=s.getX(m)),lc.fromBufferAttribute(r,x),uc.fromBufferAttribute(r,m),jy(lc,uc,vo);let d,v=l.findClosestRay(vo);v===null&&(v=vo.clone(),l.addRay(v)),o.has(v)||o.set(v,{forward:[],reverse:[],ray:v}),d=o.get(v);let g=Nh(v,lc),y=Nh(v,uc);g>y&&([g,y]=[y,g]),vo.direction.dot(v.direction)<0?d.reverse.push({start:g,end:y,index:h}):d.forward.push({start:g,end:y,index:h})}return o.forEach(({forward:u,reverse:f},h)=>{sM(u,f,a,e),u.length===0&&f.length===0&&o.delete(h)}),{disjointConnectivityMap:a,fragmentMap:o}}const aM=new ft,hc=new w,cM=new ne,fc=["","",""];class lM{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:s,degenerateEpsilon:r}=this,a=e?g:v,o=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,f=c.position;let h=vl(t);const p=h;let _=0;n&&(_=t.drawRange.start,t.drawRange.count!==1/0&&(h=~~(t.drawRange.count/3)));let x=this.data;(!x||x.length<3*p)&&(x=new Int32Array(3*p)),x.fill(-1);let m=0,d=new Set;for(let y=_,E=h*3+_;y<E;y+=3){const T=y;for(let S=0;S<3;S++){let P=T+S;u&&(P=u.getX(P)),fc[S]=a(P)}for(let S=0;S<3;S++){const P=(S+1)%3,M=fc[S],b=fc[P],I=`${b}_${M}`;if(o.has(I)){const U=T+S,H=o.get(I);x[U]=H,x[H]=U,o.delete(I),m+=2,d.delete(H)}else{const U=`${M}_${b}`,H=T+S;o.set(U,H),d.add(H)}}}if(s){const{fragmentMap:y,disjointConnectivityMap:E}=oM(t,d,r);d.clear(),y.forEach(({forward:T,reverse:S})=>{T.forEach(({index:P})=>d.add(P)),S.forEach(({index:P})=>d.add(P))}),this.unmatchedDisjointEdges=y,this.disjointConnections=E,m=h*3-d.size}this.matchedEdges=m,this.unmatchedEdges=d.size,this.data=x;function v(y){return hc.fromBufferAttribute(f,y),Ih(hc)}function g(y){let E="";for(let T=0,S=l.length;T<S;T++){const P=c[l[T]];let M;switch(P.itemSize){case 1:M=Cn(P.getX(y));break;case 2:M=Yy(aM.fromBufferAttribute(P,y));break;case 3:M=Ih(hc.fromBufferAttribute(P,y));break;case 4:M=$y(cM.fromBufferAttribute(P,y));break}E!==""&&(E+="|"),E+=M}return E}}}class Os extends ee{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Qt,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,s=e.elements;for(let r=0;r<16;r++)if(n[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=dd();if(n)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=Zy(r.array)}if(t.boundsTree||(Jy(t,{useSharedArrayBuffer:n}),t.boundsTree=new xl(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new lM(t)),!t.groupIndices){const s=vl(t),r=new Uint16Array(s),a=t.groups;for(let o=0,c=a.length;o<c;o++){const{start:l,count:u}=a[o];for(let f=l/3,h=(l+u)/3;f<h;f++)r[f]=o}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const uM=1e-14,dc=new w,Bh=new w,zh=new w;function si(i,t=uM){dc.subVectors(i.b,i.a),Bh.subVectors(i.c,i.a),zh.subVectors(i.b,i.c);const e=dc.angleTo(Bh),n=dc.angleTo(zh),s=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(s)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const pc=1e-10,ir=1e-10,hM=1e-10,zn=new pn,ve=new pn,kn=new w,mc=new w,kh=new w,yo=new yn,gc=new mn;class fM{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new ue),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class dM{constructor(){this.trianglePool=new fM,this.triangles=[],this.normal=new w,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:s}=this;if(Array.isArray(t))for(let r=0,a=t.length;r<a;r++){const o=t[r];if(r===0)o.getNormal(s);else if(Math.abs(1-o.getNormal(kn).dot(s))>pc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=n.getTriangle();c.copy(o),e.push(c)}else{t.getNormal(s);const r=n.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(mc).normalize(),Math.abs(1-Math.abs(mc.dot(e)))<hM){this.coplanarTriangleUsed=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const a=(r+1)%3,o=s[r],c=s[a];kn.subVectors(c,o).normalize(),kh.crossVectors(mc,kn),yo.setFromNormalAndCoplanarPoint(kh,o),this.splitByPlane(yo,t)}}else t.getPlane(yo),this.splitByPlane(yo,t)}splitByPlane(t,e){const{triangles:n,trianglePool:s}=this;gc.copy(e),gc.needsUpdate=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];if(!gc.intersectsTriangle(o,zn,!0))continue;const{a:c,b:l,c:u}=o;let f=0,h=-1,p=!1,_=[],x=[];const m=[c,l,u];for(let d=0;d<3;d++){const v=(d+1)%3;zn.start.copy(m[d]),zn.end.copy(m[v]);const g=t.distanceToPoint(zn.start),y=t.distanceToPoint(zn.end);if(Math.abs(g)<ir&&Math.abs(y)<ir){p=!0;break}if(g>0?_.push(d):x.push(d),Math.abs(g)<ir)continue;let E=!!t.intersectLine(zn,kn);!E&&Math.abs(y)<ir&&(kn.copy(zn.end),E=!0),E&&!(kn.distanceTo(zn.start)<pc)&&(kn.distanceTo(zn.end)<pc&&(h=d),f===0?ve.start.copy(kn):ve.end.copy(kn),f++)}if(!p&&f===2&&ve.distance()>ir)if(h!==-1){h=(h+1)%3;let d=0;d===h&&(d=(d+1)%3);let v=d+1;v===h&&(v=(v+1)%3);const g=s.getTriangle();g.a.copy(m[v]),g.b.copy(ve.end),g.c.copy(ve.start),si(g)||n.push(g),o.a.copy(m[d]),o.b.copy(ve.start),o.c.copy(ve.end),si(o)&&(n.splice(r,1),r--,a--)}else{const d=_.length>=2?x[0]:_[0];if(d===0){let T=ve.start;ve.start=ve.end,ve.end=T}const v=(d+1)%3,g=(d+2)%3,y=s.getTriangle(),E=s.getTriangle();m[v].distanceToSquared(ve.start)<m[g].distanceToSquared(ve.end)?(y.a.copy(m[v]),y.b.copy(ve.start),y.c.copy(ve.end),E.a.copy(m[v]),E.b.copy(m[g]),E.c.copy(ve.start)):(y.a.copy(m[g]),y.b.copy(ve.start),y.c.copy(ve.end),E.a.copy(m[v]),E.b.copy(m[g]),E.c.copy(ve.end)),o.a.copy(m[d]),o.b.copy(ve.end),o.c.copy(ve.start),si(y)||n.push(y),si(E)||n.push(E),si(o)&&(n.splice(r,1),r--,a--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function pM(i){return i=~~i,i+4-i%4}class Hh{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=dd()?SharedArrayBuffer:ArrayBuffer,s=new e(new n(pM(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[n+s]=t[s];this.length+=t.length}clear(){this.length=0}}class mM{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let s=0;for(let r=0;r<e;r++){const a=n[r];s+=a[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in n){const a=n[r],o=new Hh(a.type);o.itemSize=a.itemSize,o.normalized=a.normalized,s[r]=o}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,s){const{groupAttributes:r}=this,o=r[0][t];if(o){if(o.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=n,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new Hh(e);u.itemSize=n,u.normalized=s,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class Gh{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:s}=this;n[t]||(n[t]=[],s.push(t)),n[t].push(e)}}const pd=0,yl=1,gM=2,_M=3,xM=4,md=5,gd=6,rn=new Bs,Vh=new Qt,ze=new ue,Hn=new w,Wh=new ne,Xh=new ne,qh=new ne,_c=new ne,Mo=new ne,So=new ne,Yh=new pn,xc=new w,vc=1e-8,vM=1e-15,Li=-1,Di=1,Uo=-2,No=2,pr=0,Ei=1,Ml=2,yM=1e-14;let Oo=null;function $h(i){Oo=i}function _d(i,t){i.getMidpoint(rn.origin),i.getNormal(rn.direction);const e=t.raycastFirst(rn,cn);return!!(e&&rn.direction.dot(e.face.normal)>0)?Li:Di}function MM(i,t){function e(){return Math.random()-.5}i.getNormal(xc),rn.direction.copy(xc),i.getMidpoint(rn.origin);const n=3;let s=0,r=1/0;for(let a=0;a<n;a++){rn.direction.x+=e()*vc,rn.direction.y+=e()*vc,rn.direction.z+=e()*vc,rn.direction.multiplyScalar(-1);const o=t.raycastFirst(rn,cn);if(!!(o&&rn.direction.dot(o.face.normal)>0)&&s++,o!==null&&(r=Math.min(r,o.distance)),r<=vM)return o.face.normal.dot(xc)>0?No:Uo;if(s/n>.5||(a-s+1)/n>.5)break}return s/n>.5?Li:Di}function SM(i,t){const e=new Gh,n=new Gh;return Vh.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Vh,{intersectsTriangles(s,r,a,o){if(!si(s)&&!si(r)){let c=s.intersectsTriangle(r,Yh,!0);if(!c){const l=s.plane,u=r.plane,f=l.normal,h=u.normal;f.dot(h)===1&&Math.abs(l.constant-u.constant)<yM&&(c=!0)}if(c){let l=i.geometry.boundsTree.resolveTriangleIndex(a),u=t.geometry.boundsTree.resolveTriangleIndex(o);e.add(l,u),n.add(u,l),Oo&&(Oo.addEdge(Yh),Oo.addIntersectingTriangles(a,s,o,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function EM(i,t,e,n,s,r,a=!1){const o=e.attributes,c=e.index,l=i*3,u=c.getX(l+0),f=c.getX(l+1),h=c.getX(l+2);for(const p in r){const _=o[p],x=r[p];if(!(p in o))throw new Error(`CSG Operations: Attribute ${p} not available on geometry.`);const m=_.itemSize;p==="position"?(ze.a.fromBufferAttribute(_,u).applyMatrix4(n),ze.b.fromBufferAttribute(_,f).applyMatrix4(n),ze.c.fromBufferAttribute(_,h).applyMatrix4(n),yc(ze.a,ze.b,ze.c,t,3,x,a)):p==="normal"?(ze.a.fromBufferAttribute(_,u).applyNormalMatrix(s),ze.b.fromBufferAttribute(_,f).applyNormalMatrix(s),ze.c.fromBufferAttribute(_,h).applyNormalMatrix(s),a&&(ze.a.multiplyScalar(-1),ze.b.multiplyScalar(-1),ze.c.multiplyScalar(-1)),yc(ze.a,ze.b,ze.c,t,3,x,a,!0)):(Wh.fromBufferAttribute(_,u),Xh.fromBufferAttribute(_,f),qh.fromBufferAttribute(_,h),yc(Wh,Xh,qh,t,m,x,a))}}function bM(i,t,e,n,s,r,a,o=!1){Mc(i,n,s,r,a,o),Mc(o?e:t,n,s,r,a,o),Mc(o?t:e,n,s,r,a,o)}function xd(i,t,e=!1){switch(i){case pd:if(t===Di||t===No&&!e)return Ei;break;case yl:if(e){if(t===Li)return pr}else if(t===Di||t===Uo)return Ei;break;case gM:if(e){if(t===Di||t===Uo)return Ei}else if(t===Li)return pr;break;case xM:if(t===Li)return pr;if(t===Di)return Ei;break;case _M:if(t===Li||t===No&&!e)return Ei;break;case md:if(!e&&(t===Di||t===Uo))return Ei;break;case gd:if(!e&&(t===Li||t===No))return Ei;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Ml}function yc(i,t,e,n,s,r,a=!1,o=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};_c.set(0,0,0,0).addScaledVector(i,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),Mo.set(0,0,0,0).addScaledVector(i,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),So.set(0,0,0,0).addScaledVector(i,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),o&&(_c.normalize(),Mo.normalize(),So.normalize()),c(_c),a?(c(So),c(Mo)):(c(Mo),c(So))}function Mc(i,t,e,n,s,r=!1){for(const a in s){const o=t[a],c=s[a];if(!(a in t))throw new Error(`CSG Operations: Attribute ${a} no available on geometry.`);const l=o.itemSize;a==="position"?(Hn.fromBufferAttribute(o,i).applyMatrix4(e),c.push(Hn.x,Hn.y,Hn.z)):a==="normal"?(Hn.fromBufferAttribute(o,i).applyNormalMatrix(n),r&&Hn.multiplyScalar(-1),c.push(Hn.x,Hn.y,Hn.z)):(c.push(o.getX(i)),l>1&&c.push(o.getY(i)),l>2&&c.push(o.getZ(i)),l>3&&c.push(o.getW(i)))}}class TM{constructor(t){this.triangle=new ue().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ue().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class jh{constructor(){this.data={}}addTriangleIntersection(t,e,n,s){const{data:r}=this;r[t]||(r[t]=new TM(e)),r[t].addTriangle(n,s)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const s in e)n.push(e[s].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,s=new Set,r=[],a=o=>{if(n[o])if(e!==null)n[o].intersects[e]&&r.push(n[o].intersects[e]);else{const c=n[o].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(t!==null)a(t);else for(const o in n)a(o);return r}reset(){this.data={}}}class AM{constructor(){this.enabled=!1,this.triangleIntersectsA=new jh,this.triangleIntersectsB=new jh,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,s){const{triangleIntersectsA:r,triangleIntersectsB:a}=this;r.addTriangleIntersection(t,e,n,s),a.addTriangleIntersection(n,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),$h(this))}complete(){this.enabled&&$h(null)}}const li=new Qt,jo=new Yt,bi=new ue,Eo=new ue,ni=new ue,bo=new ue,bn=[],Oi=[];function wM(i){for(const t of i)return t}function RM(i,t,e,n,s,r={}){const{useGroups:a=!0}=r,{aIntersections:o,bIntersections:c}=SM(i,t),l=[];let u=null,f;return f=a?0:-1,Zh(i,t,o,e,!1,n,s,f),Kh(i,t,o,e,!1,s,f),e.findIndex(p=>p!==gd&&p!==md)!==-1&&(f=a?i.geometry.groups.length||1:-1,Zh(t,i,c,e,!0,n,s,f),Kh(t,i,c,e,!0,s,f)),bn.length=0,Oi.length=0,{groups:l,materials:u}}function Zh(i,t,e,n,s,r,a,o=0){const c=i.matrixWorld.determinant()<0;li.copy(t.matrixWorld).invert().multiply(i.matrixWorld),jo.getNormalMatrix(i.matrixWorld).multiplyScalar(c?-1:1);const l=i.geometry.groupIndices,u=i.geometry.index,f=i.geometry.attributes.position,h=t.geometry.boundsTree,p=t.geometry.index,_=t.geometry.attributes.position,x=e.ids,m=e.intersectionSet;for(let d=0,v=x.length;d<v;d++){const g=x[d],y=o===-1?0:l[g]+o,E=3*g,T=u.getX(E+0),S=u.getX(E+1),P=u.getX(E+2);bi.a.fromBufferAttribute(f,T).applyMatrix4(li),bi.b.fromBufferAttribute(f,S).applyMatrix4(li),bi.c.fromBufferAttribute(f,P).applyMatrix4(li),r.reset(),r.initialize(bi);const M=m[g];for(let I=0,U=M.length;I<U;I++){const H=3*M[I],D=p.getX(H+0),z=p.getX(H+1),G=p.getX(H+2);Eo.a.fromBufferAttribute(_,D),Eo.b.fromBufferAttribute(_,z),Eo.c.fromBufferAttribute(_,G),r.splitByTriangle(Eo)}const b=r.triangles;for(let I=0,U=b.length;I<U;I++){const H=b[I],D=r.coplanarTriangleUsed?MM(H,h):_d(H,h);bn.length=0,Oi.length=0;for(let z=0,G=n.length;z<G;z++){const Q=xd(n[z],D,s);Q!==Ml&&(Oi.push(Q),bn.push(a[z].getGroupAttrSet(y)))}if(bn.length!==0){bi.getBarycoord(H.a,bo.a),bi.getBarycoord(H.b,bo.b),bi.getBarycoord(H.c,bo.c);for(let z=0,G=bn.length;z<G;z++){const Q=bn[z],J=Oi[z]===pr;EM(g,bo,i.geometry,i.matrixWorld,jo,Q,c!==J)}}}}return x.length}function Kh(i,t,e,n,s,r,a=0){const o=i.matrixWorld.determinant()<0;li.copy(t.matrixWorld).invert().multiply(i.matrixWorld),jo.getNormalMatrix(i.matrixWorld).multiplyScalar(o?-1:1);const c=t.geometry.boundsTree,l=i.geometry.groupIndices,u=i.geometry.index,f=i.geometry.attributes,h=f.position,p=[],_=i.geometry.halfEdges,x=new Set,m=vl(i.geometry);for(let d=0,v=m;d<v;d++)d in e.intersectionSet||x.add(d);for(;x.size>0;){const d=wM(x);x.delete(d),p.push(d);const v=3*d,g=u.getX(v+0),y=u.getX(v+1),E=u.getX(v+2);ni.a.fromBufferAttribute(h,g).applyMatrix4(li),ni.b.fromBufferAttribute(h,y).applyMatrix4(li),ni.c.fromBufferAttribute(h,E).applyMatrix4(li);const T=_d(ni,c);Oi.length=0,bn.length=0;for(let S=0,P=n.length;S<P;S++){const M=xd(n[S],T,s);M!==Ml&&(Oi.push(M),bn.push(r[S]))}for(;p.length>0;){const S=p.pop();for(let P=0;P<3;P++){const M=_.getSiblingTriangleIndex(S,P);M!==-1&&x.has(M)&&(p.push(M),x.delete(M))}if(bn.length!==0){const P=3*S,M=u.getX(P+0),b=u.getX(P+1),I=u.getX(P+2),U=a===-1?0:l[S]+a;if(ni.a.fromBufferAttribute(h,M),ni.b.fromBufferAttribute(h,b),ni.c.fromBufferAttribute(h,I),!si(ni))for(let H=0,D=bn.length;H<D;H++){const z=Oi[H],G=bn[H].getGroupAttrSet(U),Q=z===pr;bM(M,b,I,f,i.matrixWorld,jo,G,Q!==o)}}}}}function CM(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const s=e.start,r=n.start+n.count;n.start=s,n.count=r-s,i.splice(t,1),t--}}}function PM(i,t,e,n){e.clear();const s=i.attributes;for(let r=0,a=n.length;r<a;r++){const o=n[r],c=s[o];e.initializeArray(o,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)n.includes(r)||e.delete(r);for(const r in t.attributes)n.includes(r)||(t.deleteAttribute(r),t.dispose())}function LM(i,t,e){let n=!1,s=-1;const r=i.attributes,a=t.groupAttributes[0];for(const c in a){const l=t.getTotalLength(c),u=t.getType(c),f=t.getItemSize(c),h=t.getNormalized(c);let p=r[c];(!p||p.array.length<l)&&(p=new we(new u(l),f,h),i.setAttribute(c,p),n=!0);let _=0;for(let x=0,m=Math.min(e.length,t.groupCount);x<m;x++){const d=e[x].index,{array:v,type:g,length:y}=t.groupAttributes[d][c],E=new g(v.buffer,0,y);p.array.set(E,_),_+=E.length}p.needsUpdate=!0,s=l/p.itemSize}if(i.index){const c=i.index.array;if(c.length<s)i.index=null,n=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let o=0;i.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:f}=e[c],h=t.getCount(u);h!==0&&(i.addGroup(o,h,f),o+=h)}i.setDrawRange(0,s),i.boundsTree=null,n&&i.dispose()}function Jh(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class DM{constructor(){this.triangleSplitter=new dM,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new AM}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,s=new Os){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s],r=!1),s.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:a,attributeData:o,attributes:c,useGroups:l,consolidateGroups:u,debug:f}=this;for(;o.length<s.length;)o.push(new mM);s.forEach((d,v)=>{PM(t.geometry,d.geometry,o[v],c)}),f.init(),RM(t,e,n,a,o,{useGroups:l}),f.complete();const h=this.getGroupRanges(t.geometry),p=Jh(h,t.material),_=this.getGroupRanges(e.geometry),x=Jh(_,e.material);_.forEach(d=>d.materialIndex+=p.length);let m=[...h,..._].map((d,v)=>({...d,index:v}));if(l){const d=[...p,...x];u&&(m=m.map(g=>{const y=d[g.materialIndex];return g.materialIndex=d.indexOf(y),g}).sort((g,y)=>g.materialIndex-y.materialIndex));const v=[];for(let g=0,y=d.length;g<y;g++){let E=!1;for(let T=0,S=m.length;T<S;T++){const P=m[T];P.materialIndex===g&&(E=!0,P.materialIndex=v.length)}E&&v.push(d[g])}s.forEach(g=>{g.material=v})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(d=>{d.material=p[0]});return s.forEach((d,v)=>{const g=d.geometry;LM(g,o[v],m),u&&CM(g.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new Os){t.updateMatrixWorld(!0);const n=(r,a)=>{const o=r.children;for(let c=0,l=o.length;c<l;c++){const u=o[c];u.isOperationGroup?n(u,a):a(u)}},s=r=>{const a=r.children;let o=!1;for(let l=0,u=a.length;l<u;l++){const f=a[l];o=s(f)||o}const c=r.isDirty();if(c&&r.markUpdated(),o&&!r.isOperationGroup){let l;return n(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return o||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const Sl=160,El=new DM;let To=null;function vd(i,t,e){let n=new Os(new Ln(i,e,t));n.updateMatrixWorld();for(const s of[-1,1]){const r=new Os(new ia(t/2,t/2,e,20));r.position.x=s*i/2,r.updateMatrixWorld(),n=El.evaluate(n,r,pd)}return n}function IM(){if(To)return To;const{W:i}=hr,t=hr.D-Sl,e=hr.D/2-t/2;let n=new Os(new Ln(i,3,t));n.position.z=e,n.updateMatrixWorld();for(const s of[-1,1])for(let r=0;r<9;r++)for(let a=0;a<3;a++){const o=e+(r-4)*46,c=s*(58+a*50+(r%2?25:0));if(Math.abs(c)>i/2-30)continue;const l=vd(40,8,9);l.position.set(c,0,o),l.updateMatrixWorld(),n=El.evaluate(n,l,yl)}return To=n.geometry,To}function UM(i,t){const{W:e,D:n}=hr,s=i.children.find(o=>o.userData.floor),r=[];for(const[o,c]of t)c<-n/2+Sl||c>n/2-6||Math.abs(o)>e/2-6||r.some(([l,u])=>Math.abs(o-l)<20&&Math.abs(c-u)<12)||r.push([o,c]);if(!r.length)return;let a=new Os(s.geometry);a.updateMatrixWorld();for(const[o,c]of r){const l=vd(28,16,9);l.position.set(o,0,c),l.updateMatrixWorld(),a=El.evaluate(a,l,yl)}s.geometry=a.geometry,s.userData.holes=(s.userData.holes||[]).concat(r)}function yd(){const i=new Me,{W:t,D:e,LIP:n,EARS:s}=hr,r=e-Sl,a=e/2-r/2,o=new ee(IM(),k.shelf);o.userData.floor=!0,o.castShadow=o.receiveShadow=!0,i.add(o);for(const u of[-1,1])j(i,et(3,n,r,k.shelf),u*(t/2-1.5),n/2-1.5,a);j(i,et(t-6,16,3,k.shelf),0,6.5,e/2-1.5),j(i,et(t-6,12,3,k.shelf),0,5,-e/2+1.5);for(const u of[-1,1])j(i,et(3,12,e,k.shelf),u*(t/2-1.5),5,0);const c=(s-t)/2+6,l=t/2+(s-t)/4;for(const u of[-1,1])j(i,et(c,40,3,k.rail),u*l,18,e/2+1.5),j(i,et(18,40,200,k.rail),u*(t/2+10.5),18,-245),j(i,et(c,40,3,k.rail),u*l,18,-351.5);return i}const NM={pcb:k.pcbBlack,slot:k.slot,connector:k.connector,chip:k.chip,heatsink:k.heatsink,bracket:k.bracket,parts:k.cap,shroud:k.cardShroud,back:k.cardBack,gold:k.gold,fan:k.fanBlade},Md=new Map,OM=["device-vertical","host-retimer","switch-pm50100","gpu-maxq"];function FM(i){const e=new DataView(i).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,4,e))),s=new Me;s.userData.solidBoxes=[];let r=4+e;for(const{n:a,v:o,i:c,b:l}of n){const u=new Float32Array(i.slice(r,r+o*12));r+=o*12;const f=new Uint32Array(i.slice(r,r+c*4));r+=c*4;const h=new Ve;h.setAttribute("position",new we(u,3)),h.setIndex(new we(f,1)),h.computeVertexNormals();const p=new ee(h,NM[a]||k.cap);p.castShadow=p.receiveShadow=!0,p.userData.noCollide=!0,s.add(p);for(const _ of l||[])s.userData.solidBoxes.push(_)}return s}async function BM(i="./"){await Promise.all(OM.map(async t=>{try{const e=await fetch(`${i}cad/${t}.bin`);if(!e.ok)throw new Error(e.status);Md.set(t,FM(await e.arrayBuffer()))}catch(e){console.warn(`CAD mesh ${t} unavailable (${e.message}) — using parametric fallback`)}}))}function aa(i){const t=Md.get(i);return t?t.clone():null}function Sd(){const i=new Me,t=aa("gpu-maxq");if(t)return i.add(t),i;const{L:e,H:n,T:s}=wn,r=x=>e/2-x,a=n-11,o=(n-a)/2;j(i,et(s,a,e,k.cardShroud),0,o,0),j(i,et(3,11,89,k.gold),0,-n/2+5.5,r(47)-44.5),j(i,et(s-6,3,20,k.slot),0,-n/2+12,r(155));const c=r(215),l=o,u=ie(37,1.6,k.gold,40);u.rotation.z=Math.PI/2,j(i,u,s/2+.3,l,c);const f=ie(34,3,k.vent,40);f.rotation.z=Math.PI/2,j(i,f,s/2-.5,l,c);const h=ie(17,2.5,k.bracket,28);h.rotation.z=Math.PI/2,j(i,h,s/2+.6,l,c);for(let x=0;x<18;x++){const m=x/18*Math.PI*2,d=25,v=et(1.6,1.2,13,k.fanBlade);v.rotation.x=m+.5,j(i,v,s/2+.4,l+Math.sin(m)*d,c+Math.cos(m)*d)}j(i,et(s-4,2,33,k.cardBack),0,n/2+.6,r(17.5)),j(i,et(s-12,1.2,20,k.gold),0,n/2+1.8,r(17.5)),j(i,et(s-8,2.6,160,k.gold),0,n/2+.8,r(115));for(let x=0;x<39;x++)j(i,et(s-10,1.4,1.1,k.vent),0,n/2+2.1,r(37+x*4.1));j(i,et(s-14,1.2,26,k.gold),0,n/2+.9,r(238)),j(i,et(s-10,14,15,k.vent),0,n/2-8,-e/2+8),j(i,et(18,9,9,k.connector),0,n/2-8,-e/2+6),j(i,et(14,6.5,2,k.slot),0,n/2-8,-e/2+1),j(i,et(s+2,n-4,2,k.bracket),0,2,e/2+1);for(let x=0;x<4;x++)j(i,et(3,6,16,k.slot),-s/4,26-x*15,e/2+2).rotation.y=Math.PI/2;for(let x=0;x<12;x++){const m=et(14,2.4,1.6,k.slot);m.rotation.z=.45,j(i,m,s/4-2,34-x*6.4,e/2+2.2)}j(i,et(8,8,1.6,k.slot),-s/4,42,e/2+2.2);const p=-s/4+2,_=n/2+7.3;return j(i,et(21.6,7.3,2,k.bracket),p,n/2+7.3/2,e/2+1),j(i,et(6,3.4,2,k.bracket),p-10,_+1.7,e/2+1),j(i,et(12,1.6,11.43,k.bracket),p,_+.8,e/2+2+11.43/2),j(i,et(4.42,.5,8.5,k.slot),p,_+1.7,e/2+2+11.43-4.6),i}const be={slotX:4,slotZ:7.5,mcioX:-5.2,mcioZ:[-2.5,31.5],auxX:-4.3,auxZ:-30,holesZ:[-52,52]};function Ed(){const i=new Me,t=aa("device-vertical");if(t)return i.add(t),j(i,et(19.8,1.5,124.8,k.pcbBlack),0,0,0),i;const{W:e,PCB:n,L:s}=nd;j(i,et(e,n,s,k.pcbBlack),0,0,0),j(i,et(9.2,12,91,k.slot),be.slotX,n/2+6,be.slotZ),j(i,et(2.2,2,89,k.cablePlug),be.slotX,n/2+11,be.slotZ);for(const r of be.mcioZ)j(i,et(7.8,11,25.8,k.connector),be.mcioX,-n/2-5.5,r),j(i,et(3.5,2,23,k.slot),be.mcioX,-n/2-11.5,r);j(i,et(11,13,14.5,k.chip),be.auxX,-n/2-6.5,be.auxZ),j(i,et(8,2.6,10,k.chip),3,n/2+1.3,-54);for(const r of be.holesZ)for(const a of[-1,1])j(i,ie(2.2,n+1.2,k.gold,10),a*6.5,0,r);return i}const Mn=(i,t)=>[i-75,55-t],bd=[[-31,-50.8],[-31,50.8],[0,-50.8],[0,50.8],[31,-50.8],[31,50.8]],Ri={CN6:Mn(23.2,85.8),CN7:Mn(23.2,54.4),CN8:Mn(23.2,22.4),CN2:Mn(125.6,85.3),CN1:Mn(125.6,54.9),CN12:Mn(125.6,22.4)},Ao=Mn(139.9,39.3),mr=[146.5-75,12,55-17.3],Ti=([i,t])=>[i,16,t],Es={device:[...bd.map(Ti),Ti(Ri.CN6),Ti(Ri.CN8)],host:[Ti(Ri.CN2),Ti(Ri.CN1),Ti(Ri.CN12),Ti(Ri.CN7)]},sn=[0,1,0],wo={device:[sn,sn,sn,sn,sn,sn,sn,sn],host:[sn,sn,sn,sn]},bs=[1,0,0],Ts=[0,0,1],Ro={device:[bs,bs,bs,bs,bs,bs,Ts,Ts],host:[Ts,Ts,Ts,Ts]},Td=8;function Qh(i){j(i,et(86,2.5,87,k.chip),0,-2,0);for(const t of[-40,40])for(const e of[-40.5,40.5])j(i,ie(3,1.6,k.caster,12),t,-3.5,e);for(const t of[25,125])for(const e of[5,105]){const[n,s]=Mn(t,e);j(i,ie(2.6,Td-.6,k.gold,12),n,-8.6/2,s)}}function Ad(){const i=new Me,t=aa("switch-pm50100");if(t){i.add(t),j(i,et(149.8,1.5,109.8,k.pcbBlack),0,.2,0);const n=Hi(40);return n.position.set(0,21.5,0),i.add(n),Qh(i),i}Qh(i),j(i,et(150,2,110,k.pcbBlack),0,0,0);for(const n of[25,125])for(const s of[5,105]){const[r,a]=Mn(n,s);j(i,ie(3.6,.6,k.gold,16),r,1.2,a),j(i,ie(1.8,1,k.slot,12),r,1.4,a)}j(i,et(40,3,40,k.chip),0,2.5,0);for(const n of[-40,40])for(const s of[-40,40])j(i,ie(2.4,7,k.gold,10),n,4.5,s);j(i,et(90,5,91,k.heatsink),0,9.5,0);for(let n=-10;n<=10;n++)j(i,et(3,18,89,k.heatsink),n*4.3,21,0);const e=Hi(40);e.position.set(0,33,0),i.add(e);for(const[n,s]of bd)j(i,et(27.5,13,7,k.connector),n,7.5,s),j(i,et(23,2,3.5,k.slot),n,14.2,s);for(const[n,s]of Object.values(Ri))j(i,et(7,13,27.5,k.connector),n,7.5,s),j(i,et(3.5,2,23,k.slot),n,14.2,s);j(i,et(7,13,16,k.connector),Ao[0],7.5,Ao[1]),j(i,et(3.5,2,12,k.slot),Ao[0],14.2,Ao[1]),j(i,et(13,11,12,k.chip),mr[0],6.5,mr[2]),j(i,et(6,5,8,k.slot),Mn(4.7,7.1)[0],3.5,Mn(4.7,7.1)[1]);for(let n=0;n<3;n++)j(i,et(10,4,3,k.slot),-66,3,-40+n*6);return j(i,et(17,6,33,k.pcb),-63,4,8),j(i,et(17,6,33,k.pcb),60,4,-38),j(i,et(11,.4,17,k.label),-63,1.2,-22),i}const He={mb10:[-51.5,20],mb18:[-16,20],cpu8:[[18,20],[37.5,20],[56.5,20],[18,0],[37.5,0],[56.5,0],[18,-18],[37.5,-18],[56.5,-18]],hpwr:[[-3,0],[-3,-18]],peri:[[-51.5,0],[-37.5,0],[-23.5,0],[-51.5,-18],[-37.5,-18],[-23.5,-18]]};function wd(i=!1){const t=new Me,{W:e,H:n,L:s}=ed,r=8;if(j(t,et(e,n,s,k.psuBody),0,0,0),i){j(t,ie(62,2.2,k.noctuaRim,36),0,n/2+.6,r),j(t,ie(57,1.6,k.vent,36),0,n/2+1.2,r);const o=Hi(52,9);o.traverse(c=>{c.material===k.fanBlade&&(c.material=k.noctua)}),o.position.set(0,n/2+.8,r),t.add(o);for(let c=0;c<5;c++){const l=et(2.4,1.2,112,k.noctuaRim);l.rotation.y=c/5*Math.PI,j(t,l,0,n/2+2.4,r)}}else{j(t,ie(66,1.8,k.psuGrille,40),0,n/2+.5,r);const o=Hi(58,7);o.position.set(0,n/2+1,r),t.add(o);for(const[c,l]of[[-s/2+26,.35],[s/2-26,.35]]){const u=et(e-4,.8,22,k.armor);u.rotation.y=l,j(t,u,0,n/2+.9,c)}j(t,et(26,.8,11,k.armor),0,n/2+2,r)}const a=([o,c],l,u=9)=>{j(t,et(l,u,3,k.slot),o,c,-s/2-1.2),j(t,et(l-3,u-3,1.6,k.cablePlug),o,c,-s/2-2.4)};a(He.mb10,21),a(He.mb18,38);for(const o of He.cpu8)a(o,17);for(const o of He.peri)a(o,13);for(const o of He.hpwr)a(o,19,8),j(t,et(9,2.2,2.5,k.slot),o[0],o[1]+5.4,-s/2-1);j(t,et(e-10,n-10,1.6,k.psuGrille),0,0,s/2+.4),j(t,et(30,26,4,k.slot),-42,0,s/2+1.6),j(t,et(20,24,4,k.chip),-13,0,s/2+1.6),j(t,et(11,11,3.4,k.connector),8,-4,s/2+1.4),j(t,et(16,3,1,k.label),8,6,s/2+1.4);for(const o of[-1,1]){const c=et(1.4,22,62,k.armor);c.rotation.x=.12,j(t,c,o*(e/2+.4),4,-18),j(t,et(1,8,34,k.label),o*(e/2+.3),-28,62)}return j(t,et(e*.72,1,s*.6,k.label),0,-n/2-.4,0),t}const le=(i,t)=>[i-152.5,t-165],Rd=[141.3,121,100.6,80.3,60,39.7,19.4].map(i=>i-152.5),$c=79.5-165,zM=[0,2,4,6].map(i=>Rd[i]),Sc={atx24:le(224,326),eps:[le(297,46),le(297,262)]},kM=le(224,170);function Cd(){const i=new Me;j(i,et(305,2.5,330,k.pcbBlack),0,0,0);const t=1.25,[e,n]=kM;j(i,et(74,3,80,k.bracket),e,t+1.5,n),j(i,et(60,3.6,68,k.chip),e,t+2,n),j(i,et(52,2.4,60,k.bracket),e,t+4.6,n),j(i,et(58,8,66,k.heatsink),e,t+10,n);for(let u=0;u<6;u++)j(i,ie(3,42,k.heatsink,12),e+(u-2.5)*9,t+32,n);for(let u=48;u<=118;u+=3)j(i,et(128,1.3,96,k.heatsink),e,u,n);const s=Hi(34);s.rotation.x=Math.PI/2,s.position.set(e,83,n-52),i.add(s);for(const u of[151.5,160.1,168.6,177.2,271.7,280.3,288.9,297.4]){const[f]=le(u,0);j(i,et(7.5,4.5,140,k.slot),f,t+2.2,n),j(i,et(4.6,30,133.4,k.chip),f,t+16,n)}for(const u of Rd)j(i,et(9,10,94,k.bracket),u,t+5,$c),j(i,et(5.5,1.8,89,k.slot),u,t+10.2,$c);const r=[[13.5,11,11,k.chip],[22,14,14,k.connector],[38,14,14,k.connector],[51.5,14,14,k.connector],[60,14,12,k.connector],[79,14,12,k.connector],[100,18,15,k.connector],[115.5,16,7,k.slot]];for(const[u,f,h,p]of r)j(i,et(f,h,14,p),le(u,0)[0],t+h/2,-157);j(i,et(12,11,18,k.chip),144.5,t+5.5,le(0,46)[1]),j(i,et(12,11,14,k.chip),144.5,t+5.5,le(0,61)[1]),j(i,et(12,11,14,k.chip),144.5,t+5.5,le(0,242)[1]),j(i,et(12,11,18,k.chip),144.5,t+5.5,le(0,262)[1]);for(const u of[299,306])j(i,ie(3.2,5,k.cap,14),146,t+2.5,le(0,u)[1]);j(i,et(5,2.6,12,k.debugRed),147,t+1.3,le(0,316)[1]);const a=[[224,52,13,k.slot],[199,19,9,k.connector],[181,19,9,k.connector],[162,10,7,k.chip],[107,13,8,k.connector],[91,13,8,k.connector],[72,16,9,k.slot],[51,16,9,k.slot],[41,12,11,k.chip],[28,12,11,k.chip]];for(const[u,f,h,p]of a)j(i,et(f,h,11,p),le(u,0)[0],t+h/2,157);for(const u of[45,110,142,181,197,251,276,296])j(i,et(6,7,12,k.slot),-146,t+3.5,le(0,u)[1]);j(i,et(14,2,14,k.chip),le(69,0)[0],t+1,le(0,18)[1]);const o=(u,f,h,p,_)=>{const[x]=le(u,0),[m]=le(f,0),d=le(0,h)[1],v=le(0,p)[1],g=(x+m)/2,y=(d+v)/2,E=m-x,T=v-d;j(i,et(E,4,T,k.heatsink),g,t+2,y);for(let P=x+2;P<=m-2;P+=4.5)j(i,et(1.5,24,T-4,k.heatsink),P,t+16,y);const S=ie(3,E-6,k.heatsink,12);S.rotation.z=Math.PI/2,j(i,S,g,t+24,y);for(let P=0;P<_;P++){const M=Hi(15);M.position.set(g+(P-(_-1)/2)*(E/_),t+30,y),i.add(M)}};o(185,280,40,100,2),o(170,285,250,310,3);const[c,l]=[le(80,0)[0],le(0,265.5)[1]];return j(i,et(100,6,91,k.armor),c,t+3,l),j(i,et(78,2.2,66,k.chip),c-4,t+7,l+4),j(i,et(100,1.8,30,k.armor),c,t+7.5,l-24),j(i,et(115,8,14,k.armor),le(92.5,0)[0],t+4,le(0,29)[1]),i}const Co=168,sr=68.5,jc=-.6,Pd=[[3.8,4,-39.5],[3.8,4,-69.5]];function Ld(){const i=new Me,t=aa("host-retimer");if(t)return i.add(t),j(i,et(1.5,sr-.2,Co-.2,k.pcbBlack),0,0,0),j(i,et(1.8,11,89,k.gold),0,-sr/2-5.5,jc),i;j(i,et(1.8,sr,Co,k.pcbBlack),0,0,0),j(i,et(1.8,11,89,k.gold),0,-sr/2-5.5,jc),j(i,et(2.5,100,2,k.bracket),0,11,Co/2+6),j(i,et(2.5,3,10,k.bracket),0,62,Co/2+10);for(const[,,n]of Pd)j(i,et(9,11.6,25.8,k.connector),4,-8.5,n),j(i,et(7,2.5,21,k.slot),4,-2,n);j(i,et(11.5,50,50,k.heatsink),8.5,.7,1);const e=Hi(15);e.rotation.z=-Math.PI/2,e.position.set(15,.7,1),i.add(e);for(const n of[26,-24]){const s=ie(2,7,k.gold,10);s.rotation.z=Math.PI/2,j(i,s,3,-22,n)}j(i,et(4,5.5,7,k.chip),3.5,2,62),j(i,et(4,5.5,7,k.chip),3.5,2,52);for(const n of[50,38])j(i,et(2.8,3,13,k.slot),2.6,sr/2-3.5,n);return i}class HM{constructor(){this.ids=[],this.pr=[]}get size(){return this.ids.length}push(t,e){this.ids.push(t),this.pr.push(e);let n=this.ids.length-1;for(;n>0;){const s=n-1>>1;if(this.pr[s]<=this.pr[n])break;this._sw(n,s),n=s}}pop(){const t=this.ids[0],e=this.ids.length-1;this.ids[0]=this.ids[e],this.pr[0]=this.pr[e],this.ids.pop(),this.pr.pop();let n=0;for(;;){let s=2*n+1,r=2*n+2,a=n;if(s<this.ids.length&&this.pr[s]<this.pr[a]&&(a=s),r<this.ids.length&&this.pr[r]<this.pr[a]&&(a=r),a===n)break;this._sw(n,a),n=a}return t}_sw(t,e){const n=this.ids[t];this.ids[t]=this.ids[e],this.ids[e]=n;const s=this.pr[t];this.pr[t]=this.pr[e],this.pr[e]=s}}const Zc=[];for(let i=-1;i<=1;i++)for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++){if(!i&&!t&&!e)continue;const n=new Set,s=[];for(const[r,a,o]of[[i,0,0],[0,t,0],[0,0,e],[i,t,0],[i,0,e],[0,t,e]]){if(!r&&!a&&!o||r===i&&a===t&&o===e)continue;const c=r*9+a*3+o;n.has(c)||(n.add(c),s.push([r,a,o]))}Zc.push([i,t,e,Math.hypot(i,t,e),s])}class GM{constructor(t,e={}){const{cell:n=5,bias:s=[],biasRadius:r=140,biasWeight:a=.6,normalBoxes:o=null,padThin:c=6.5,padFat:l=10}=e;this.cell=n;const u=new se;t.forEach(h=>u.union(h)),u.expandByScalar(75),this.min=u.min.clone(),this.nx=Math.ceil((u.max.x-u.min.x)/n)+1,this.ny=Math.ceil((u.max.y-u.min.y)/n)+1,this.nz=Math.ceil((u.max.z-u.min.z)/n)+1;const f=this.nx*this.ny*this.nz;this.blocked=new Uint8Array(f),this.blockedFat=new Uint8Array(f);for(const h of t)this._block(h.clone().expandByScalar(c),this.blocked),this._block(h.clone().expandByScalar(l),this.blockedFat);for(const[h,p,_,x]of e.holes||[]){const m=this._cell({x:h-x,y:p-14,z:_-x}),d=this._cell({x:h+x,y:p+14,z:_+x});for(let v=Math.max(0,m[0]);v<=Math.min(this.nx-1,d[0]);v++)for(let g=Math.max(0,m[1]);g<=Math.min(this.ny-1,d[1]);g++)for(let y=Math.max(0,m[2]);y<=Math.min(this.nz-1,d[2]);y++){const E=this._i(v,g,y);this.blocked[E]=0,this.blockedFat[E]=0}}this._blk=this.blocked,this._bias(s,r,a),this.trail=new Float32Array(f),this._trailCells=[],this._trailLoom=-1,this._bit=0,this.use=new Uint8Array(f),this.mask=new Int32Array(f),this.history=new Float32Array(f),this.presFac=0,this._g=new Float32Array(f),this._came=new Int32Array(f),this._closed=new Uint8Array(f),this._boxes=o||t,this.fails=0,this.overuse=0}debugVoxels(){this._blk=this.blocked;const t=[];for(let a=0;a<this.nx;a++)for(let o=0;o<this.ny;o++)for(let c=0;c<this.nz;c++)this.blocked[this._i(a,o,c)]&&(this._free(a+1,o,c)||this._free(a-1,o,c)||this._free(a,o+1,c)||this._free(a,o-1,c)||this._free(a,o,c+1)||this._free(a,o,c-1))&&t.push([a,o,c]);const e=new Ln(this.cell*.92,this.cell*.92,this.cell*.92),n=new ta({color:3718648,transparent:!0,opacity:.4,depthWrite:!1}),s=new iv(e,n,t.length),r=new Qt;return t.forEach(([a,o,c],l)=>{const u=this._world(a,o,c);s.setMatrixAt(l,r.makeTranslation(u.x,u.y,u.z))}),s.instanceMatrix.needsUpdate=!0,s.frustumCulled=!1,s}_normalAt(t){const e=this._cell(t),n=Math.ceil(64/this.cell),s=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];let r=[0,1,0],a=-1;for(const[o,c,l]of s){let u=0;for(let f=1;f<=n;f++)this._free(e[0]+o*f,e[1]+c*f,e[2]+l*f)&&(u+=n+1-f);u>a&&(a=u,r=[o,c,l])}return new w(...r)}_i(t,e,n){return(t*this.ny+e)*this.nz+n}_dec(t){const e=t%this.nz,n=(t-e)/this.nz%this.ny;return[(t-e-n*this.nz)/(this.ny*this.nz),n,e]}_cell(t){return[Math.round((t.x-this.min.x)/this.cell),Math.round((t.y-this.min.y)/this.cell),Math.round((t.z-this.min.z)/this.cell)]}_world(t,e,n){return new w(this.min.x+t*this.cell,this.min.y+e*this.cell,this.min.z+n*this.cell)}_in(t,e,n){return t>=0&&e>=0&&n>=0&&t<this.nx&&e<this.ny&&n<this.nz}_free(t,e,n){return this._in(t,e,n)&&this._blk[this._i(t,e,n)]===0}_block(t,e){const n=this._cell(t.min),s=this._cell(t.max);for(let r=Math.max(0,n[0]);r<=Math.min(this.nx-1,s[0]);r++)for(let a=Math.max(0,n[1]);a<=Math.min(this.ny-1,s[1]);a++)for(let o=Math.max(0,n[2]);o<=Math.min(this.nz-1,s[2]);o++)e[this._i(r,a,o)]=1}_bias(t,e,n){if(this.attr=null,!t||!t.length)return;this.attr=new Float32Array(this.nx*this.ny*this.nz);const s=Math.ceil(e/this.cell);for(const r of t){const a=new w(r[0],r[1],r[2]),o=this._cell(a);for(let c=o[0]-s;c<=o[0]+s;c++)for(let l=o[1]-s;l<=o[1]+s;l++)for(let u=o[2]-s;u<=o[2]+s;u++){if(!this._in(c,l,u))continue;const f=this._world(c,l,u).distanceTo(a);if(f<e){const h=n*(1-f/e),p=this._i(c,l,u);h>this.attr[p]&&(this.attr[p]=h)}}}}_nearestFree(t){if(this._free(...t))return t;const e=Math.ceil(96/this.cell);for(let n=1;n<e;n++)for(const[s,r,a]of Zc){const o=[t[0]+s*n,t[1]+r*n,t[2]+a*n];if(this._free(...o))return o}return null}_los(t,e){const s=Math.max(Math.abs(e[0]-t[0]),Math.abs(e[1]-t[1]),Math.abs(e[2]-t[2]))*2;for(let r=1;r<s;r++){const a=r/s,o=Math.round(t[0]+(e[0]-t[0])*a),c=Math.round(t[1]+(e[1]-t[1])*a),l=Math.round(t[2]+(e[2]-t[2])*a);if(!this._free(o,c,l))return!1;const u=this._i(o,c,l);if(this.use[u]||this.mask[u]&~this._bit)return!1}return!0}_smooth(t){if(t.length<=2)return t;const e=[t[0]];let n=0;for(;n<t.length-1;){let s=n+1;for(;s+1<t.length&&this._los(t[n],t[s+1]);)s++;e.push(t[s]),n=s}return e}_stamp(t){const e=Math.max(1,Math.round(8/this.cell));for(const[n,s,r]of t)for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++)for(let c=-e;c<=e;c++){if(!this._in(n+a,s+o,r+c))continue;const l=this._i(n+a,s+o,r+c),u=.95-.14/e*(Math.abs(a)+Math.abs(o)+Math.abs(c));u<=this.trail[l]||(this.trail[l]||this._trailCells.push(l),this.trail[l]=u)}}_setTrail(t,e){if(this._trailLoom!==e){for(const n of this._trailCells)this.trail[n]=0;this._trailCells.length=0,this._trailLoom=e;for(const n of t)n.loom===e&&n.path&&this._stamp(n.path)}}_stampMask(t,e,n){for(const[s,r,a]of t)for(let o=-e;o<=e;o++)for(let c=-e;c<=e;c++)for(let l=-e;l<=e;l++)this._in(s+o,r+c,a+l)&&(this.mask[this._i(s+o,r+c,a+l)]|=n)}_stampUse(t,e,n=1){const s=new Set;for(let r=0;r<t.length;r++){const[a,o,c]=t[r];for(let l=-e;l<=e;l++)for(let u=-e;u<=e;u++)for(let f=-e;f<=e;f++)this._in(a+l,o+u,c+f)&&s.add(this._i(a+l,o+u,c+f))}for(const r of s)this.use[r]+=n}_astar(t,e){const n=this._g.fill(1/0),s=this._came.fill(-1),r=this._closed.fill(0),a=this._i(...t),o=this._i(...e),c=this._world(...e);n[a]=0;const l=new HM;for(l.push(a,this._world(...t).distanceTo(c));l.size;){const h=l.pop();if(h===o)break;if(r[h])continue;r[h]=1;const[p,_,x]=this._dec(h);let m=0,d=0,v=0;if(s[h]>=0){const[g,y,E]=this._dec(s[h]);m=p-g,d=_-y,v=x-E}for(const[g,y,E,T,S]of Zc){const P=p+g,M=_+y,b=x+E;if(!this._free(P,M,b))continue;let I=!0;for(const[tt,J,ot]of S)if(!this._free(p+tt,_+J,x+ot)){I=!1;break}if(!I)continue;const U=this._i(P,M,b);if(r[U])continue;const H=Math.max(this.attr?this.attr[U]:0,this._trailLoom>=0?this.trail[U]:0),D=this.use[U]+(this.mask[U]&~this._bit?1:0),z=s[h]>=0&&(g!==m||y!==d||E!==v)?1.5*this.cell:0,G=T*this.cell*(1-.9*H)*(1+this.presFac*D)*(1+this.history[U])+z,Q=n[h]+G;Q<n[U]&&(n[U]=Q,s[U]=h,l.push(U,Q+1.2*this._world(P,M,b).distanceTo(c)))}}if(s[o]===-1&&a!==o)return null;const u=[];let f=o;for(;f!==-1;)u.push(this._dec(f)),f=s[f];return u.reverse()}_standoff(t,e){let n=null;for(let s=6;s<=30;s+=4){const r=t.clone().addScaledVector(e,s);if(!this._free(...this._cell(r)))break;n=r}return n||t.clone().addScaledVector(e,6)}solve(t){const e=[],n=t.map(({a,b:o,type:c=null,r:l=0,opts:u={}})=>{const f=new w(...a),h=new w(...o);this._blk=l>=5?this.blockedFat:this.blocked;const p=u.na?new w(...u.na).normalize():this._normalAt(f),_=u.nb?new w(...u.nb).normalize():this._normalAt(h),x=this._standoff(f,p),m=this._standoff(h,_),d=this._nearestFree(this._cell(x)),v=this._nearestFree(this._cell(m));(!d||!v)&&this.fails++;let g=e.findIndex(T=>T.type===c&&T.A.distanceTo(f)<130&&T.B.distanceTo(h)<130);g<0&&(e.push({type:c,A:f.clone(),B:h.clone()}),g=e.length-1);const y=Math.max(0,Math.ceil(2*l/this.cell)-1),E=Math.max(y,Math.ceil((2*l+4)/this.cell)-1);return{type:c,r:l,Ao:x,Bo:m,na:p.toArray(),nb:_.toArray(),start:d,end:v,loom:g,bit:1<<Math.min(g,31),shTight:y,shMargin:E,path:null}});this.looms=e.length;const s=Math.ceil(16/this.cell);let r=n.filter(a=>a.start&&a.end);for(this.rounds=0;this.rounds<8&&r.length;this.rounds++){this.presFac=2+3*this.rounds,r.sort((o,c)=>o.loom-c.loom);const a=new Set(r);this.mask.fill(0);for(const o of n)o.path&&!a.has(o)&&this._stampMask(o.path,o.shMargin,o.bit);for(const o of r)o.path&&this._stampUse(o.path,o.shTight,-1),this._blk=o.r>=5?this.blockedFat:this.blocked,this._bit=o.bit,this._setTrail(n,o.loom),o.path=this._astar(o.start,o.end),o.path&&(this._stamp(o.path),this._stampUse(o.path,o.shTight),this._stampMask(o.path,o.shMargin,o.bit));this.overuse=0,r=[];for(const o of n){if(!o.path)continue;let c=0;for(let l=s;l<o.path.length-s;l++){const u=this._i(...o.path[l]);(this.use[u]>1||this.mask[u]&~o.bit)&&(c++,this.history[u]+=.6)}c&&(this.overuse+=c,r.push(o))}}return this.fails+=n.filter(a=>a.start&&a.end&&!a.path).length,n.map(a=>this._extract(a))}_extract(t){if(!t.path)return{vias:[t.Ao.toArray(),t.Bo.toArray()],na:t.na,nb:t.nb};this._blk=t.r>=5?this.blockedFat:this.blocked,this._bit=t.bit,this._stampUse(t.path,t.shTight,-1);const e=this._smooth(t.path).map(([s,r,a])=>this._world(s,r,a));for(this._stampUse(t.path,t.shTight,1);e.length&&e[0].distanceTo(t.Ao)<this.cell*1.5;)e.shift();for(;e.length&&e[e.length-1].distanceTo(t.Bo)<this.cell*1.5;)e.pop();const n=[];for(let s=0;s<e.length;s++){if(s){const r=e[s].clone().sub(e[s-1]),a=r.length(),o=Math.floor(a/36);for(let c=1;c<=o;c++)n.push(e[s-1].clone().addScaledVector(r,c/(o+1)))}n.push(e[s])}return{vias:[t.Ao.toArray(),...n.map(s=>s.toArray()),t.Bo.toArray()],na:t.na,nb:t.nb}}}const ce=(i,t)=>(i.userData.part=t,i);function Dd(){const i=new Me;i.add(ce(sd(),"rack"));const{switchShelfTop:t,gpuShelfTop:e}=Gv,n=[];for(const N of[t,e]){const B=ce(yd(),"shelf");B.position.y=N,i.add(B),n.push([N,B])}const s={gpuPwr:[],gpuMcio:[],adAux:[],swAux:[],hostMcio:[],boardPwr:[]},r=[-120,120],a=e+Td,o=t+58,c=[-90,90],l=-88;c.forEach(N=>{const B=ce(wd(!0),"psu");B.position.set(N,o,l),B.rotation.z=Math.PI,i.add(B);for(const X of[-60,60])for(const pt of[-85,85]){const gt=ce(ie(9,15,k.caster,16),"mount");gt.position.set(N+X,t+7.5,l+pt),i.add(gt)}});const u=(N,B)=>[c[N]-B[0],o-B[1],l-ed.L/2-3],f=-130,h=N=>N>0?-1:1;r.forEach(N=>{const B=ce(Ad(),"switch");B.position.set(N,a,f),N>0&&(B.rotation.y=Math.PI),i.add(B);const X=h(N);s.swAux.push([N+X*mr[0],a+mr[1],f+X*mr[2]])});const p=636,_=[-158,0,124];for(const N of[-1,1])for(const B of[-150,115]){const X=ce(Vn(106),"mount");X.rotation.z=Math.PI/2,X.position.set(N*190,t+53,B),i.add(X)}for(const N of[-1,1]){const B=ce(Vn(330),"mount");B.rotation.y=Math.PI/2,B.position.set(N*190,t+116,-17),i.add(B)}for(const N of _){const B=ce(Vn(400),"mount");B.position.set(0,t+116,N),i.add(B)}for(const N of _)for(const B of[-145,0,145]){const X=ce(ie(2.6,8,k.gold,12),"mount");X.position.set(B,p+4,N),i.add(X)}const x=ce(Cd(),"board");x.position.set(0,p+9,0),i.add(x);const m=p+18;s.boardPwr.push([Sc.atx24[0],m,Sc.atx24[1]],...Sc.eps.map(N=>[N[0],m,N[1]]));const d=p+48,v=$c+jc;zM.forEach(N=>{const B=ce(Ld(),"host");B.position.set(N,d,v),B.rotation.y=Math.PI,i.add(B),s.hostMcio.push(...Pd.map(X=>[N-X[0],d+X[1],v-X[2]]))});const g=Za*fs,y=100,E=e+46,T=E+62,S=y+41.85-be.slotZ,P=e+20;for(const N of be.holesZ){const B=ce(Vn(g),"mount");B.position.set(0,e+10,S+N),i.add(B)}const M=E-nd.PCB/2-P;for(let N=0;N<fs;N++){const B=(N-(fs-1)/2)*Za,X=B-be.slotX,pt=ce(Ed(),"adapter");pt.position.set(X,E,S),i.add(pt);for(const q of be.holesZ)for(const Et of[-1,1]){const Dt=ce(ie(2.6,M,k.gold,12),"mount");Dt.position.set(X+Et*6.5,P+M/2,S+q),i.add(Dt)}s.adAux.push([X+be.auxX,E-16,S+be.auxZ]);const gt=ce(Sd(),"gpu");gt.position.set(B,T,y),i.add(gt),s.gpuPwr.push([B,T+wn.H/2-8,y-(wn.L/2+6)]),s.gpuMcio.push([X+be.mcioX,E-14,S+be.mcioZ[0]],[X+be.mcioX,E-14,S+be.mcioZ[1]])}const b=T+wn.H/2+7.3,I=y+wn.L/2+12,U=ce(Vn(g),"earRail");U.position.set(0,b-10,I),i.add(U);for(let N=0;N<fs;N++){const B=(N-(fs-1)/2)*Za-wn.T/4+2,X=ce(ie(3.7,2.4,k.gold,16),"screw");X.position.set(B,b+1.6+1.2,I),i.add(X)}const H=(N,B,X,pt)=>{const gt=ce(et(18,2.5,17,k.rail),"bracket");gt.position.set(N+pt*19,B-1.25,X),i.add(gt);const q=ce(et(2.5,18,17,k.rail),"bracket");q.position.set(N+pt*11.25,B-11.5,X),i.add(q)};for(const N of[-1,1]){const B=b-20-e,X=ce(Vn(B),"mount");X.rotation.z=Math.PI/2,X.position.set(N*(g/2-10),e+B/2,I),i.add(X),H(N*(g/2-10),b-20,I,-N)}const D=T-28,z=y-(wn.L/2+12),G=ce(Vn(g),"mount");G.position.set(0,D,z),i.add(G);const Q=ce(et(g-2,12,2,k.vent),"mount");Q.position.set(0,D,y-(wn.L/2+1)),i.add(Q);for(const N of[-1,1]){const B=D-10-e,X=ce(Vn(B),"mount");X.rotation.z=Math.PI/2,X.position.set(N*(g/2-10),e+B/2,z),i.add(X),H(N*(g/2-10),D-10,z,-N)}i.updateMatrixWorld(!0);const tt=[];i.traverse(N=>{if(N.userData.solidBoxes)for(const B of N.userData.solidBoxes)tt.push(new se(new w(B[0],B[1],B[2]),new w(B[3],B[4],B[5])).applyMatrix4(N.matrixWorld));if(N.isMesh&&!N.userData.noCollide){const B=new se().setFromObject(N);B.isEmpty()||tt.push(B)}});const J=new Set(["gpu","switch","psu","board","host","adapter","mount","earRail","screw","bracket"]),ot=[];i.traverse(N=>{J.has(N.userData.part)&&ot.push(new se().setFromObject(N))}),tt.push(new se(new w(-g/2-10,T+wn.H/2+2,y-65),new w(g/2+10,T+wn.H/2+62,y+100)));for(const N of r)tt.push(new se(new w(N-52,a+26,f-52),new w(N+52,a+81,f+52)));for(const N of c)tt.push(new se(new w(N-76,t-62,l-106),new w(N+76,t-4,l+106)));const st=new GM(tt,{bias:Do,normalBoxes:ot});i.userData.router=st;const vt=[0,1,0],K=[0,-1,0],rt=[0,0,-1],yt=[],At=(N,B,X,pt)=>yt.push({a:N,b:B,type:X,r:xh(X),opts:pt}),wt=(N,B)=>[N+h(N)*Es.device[B][0],a+Es.device[B][1],f+h(N)*Es.device[B][2]],Ft=(N,B)=>[N+h(N)*Es.host[B][0],a+Es.host[B][1],f+h(N)*Es.host[B][2]],zt=(N,B)=>[h(N)*B[0],B[1],h(N)*B[2]],Pt=(N,B)=>N>0&&B===3,Bt=(N,B)=>Pt(N,B)?wt(N,3):Ft(N,B),O=(N,B)=>zt(N,Pt(N,B)?wo.device[3]:wo.host[B]),_t=(N,B)=>Pt(N,B)?Ft(N,3):wt(N,B),it=(N,B)=>zt(N,Pt(N,B)?wo.host[3]:wo.device[B]),dt=(N,B)=>Pt(N,B)?Ro.device[3]:Ro.host[B],nt=(N,B)=>Pt(N,B)?Ro.host[3]:Ro.device[B];for(let N=0;N<fs;N++){const B=N<4?r[0]:r[1],X=N%4;At(s.gpuMcio[N*2],_t(B,X*2),"mcio",{na:K,nb:it(B,X*2),tb:nt(B,X*2)}),At(s.gpuMcio[N*2+1],_t(B,X*2+1),"mcio",{na:K,nb:it(B,X*2+1),tb:nt(B,X*2+1)})}[0,1,2,3].sort((N,B)=>s.hostMcio[N*2][0]-s.hostMcio[B*2][0]).forEach((N,B)=>{const X=B<2?r[0]:r[1],pt=B%2;At(s.hostMcio[N*2],Bt(X,pt*2),"mcio",{na:vt,nb:O(X,pt*2),tb:dt(X,pt*2)}),At(s.hostMcio[N*2+1],Bt(X,pt*2+1),"mcio",{na:vt,nb:O(X,pt*2+1),tb:dt(X,pt*2+1)})});const bt=[He.hpwr[0],He.hpwr[1],He.cpu8[3],He.cpu8[4],He.cpu8[5]];s.gpuPwr.forEach((N,B)=>At(u(B<5?0:1,bt[B<5?B:B-5]),N,"power12v",{na:rt,nb:rt})),s.swAux.forEach((N,B)=>At(u(B,He.peri[4]),N,"aux6",{na:rt,nb:vt})),s.adAux.forEach((N,B)=>At(u(B<4?0:1,He.peri[B%4]),N,"aux6",{na:rt,nb:K})),At(u(1,He.mb18),s.boardPwr[0],"atx",{na:rt,nb:vt,tb:[1,0,0]}),At(u(1,He.cpu8[0]),s.boardPwr[1],"power12v",{na:rt,nb:vt}),At(u(1,He.cpu8[1]),s.boardPwr[2],"power12v",{na:rt,nb:vt});const R=st.solve(yt),A=(N,B)=>{const X=B>=5?st.blockedFat:st.blocked,pt=gt=>{const q=st._cell({x:gt[0],y:gt[1],z:gt[2]});return st._in(...q)&&X[st._i(...q)]===0};for(let gt=0;gt<30;gt++)for(let q=1;q<N.length-1;q++){const Et=N[q-1],Dt=N[q+1],It=N[q],Lt=[0,1,2].map(xt=>It[xt]+((Et[xt]+Dt[xt])/2-It[xt])*.5);pt(Lt)&&pt([0,1,2].map(xt=>(Et[xt]+Lt[xt])/2))&&pt([0,1,2].map(xt=>(Lt[xt]+Dt[xt])/2))&&(N[q]=Lt)}for(let gt=N.length-2;gt>=1;gt--){const q=N[gt-1],Et=N[gt],Dt=N[gt+1],It=(Dt[0]-q[0])**2+(Dt[1]-q[1])**2+(Dt[2]-q[2])**2;if(!It)continue;const Lt=Math.max(0,Math.min(1,((Et[0]-q[0])*(Dt[0]-q[0])+(Et[1]-q[1])*(Dt[1]-q[1])+(Et[2]-q[2])*(Dt[2]-q[2]))/It));Math.hypot(Et[0]-(q[0]+(Dt[0]-q[0])*Lt),Et[1]-(q[1]+(Dt[1]-q[1])*Lt),Et[2]-(q[2]+(Dt[2]-q[2])*Lt))<1.6&&N.splice(gt,1)}};R.forEach((N,B)=>A(N.vias,yt[B].r));const V={step:95,reach:34,endSkip:55},ht=[];yt.forEach((N,B)=>{const X=new w(...N.a),pt=new w(...N.b);let gt=ht.find(q=>q.type===N.type&&q.A.distanceTo(X)<130&&q.B.distanceTo(pt)<130);gt||(gt={type:N.type,A:X,B:pt,members:[]},ht.push(gt)),gt.members.push(B)});const lt=N=>{let B=0;for(let X=1;X<N.length;X++)B+=Math.hypot(N[X][0]-N[X-1][0],N[X][1]-N[X-1][1],N[X][2]-N[X-1][2]);return B},at=(N,B)=>{for(let X=1,pt=0;X<N.length;X++){const gt=Math.hypot(N[X][0]-N[X-1][0],N[X][1]-N[X-1][1],N[X][2]-N[X-1][2]);if(pt+gt>=B){const q=(B-pt)/(gt||1);return[0,1,2].map(Et=>N[X-1][Et]+(N[X][Et]-N[X-1][Et])*q)}pt+=gt}return N[N.length-1].slice()};for(const N of ht){if(N.members.length<2)continue;const B=N.members.reduce((pt,gt)=>lt(R[pt].vias)>lt(R[gt].vias)?pt:gt),X=lt(R[B].vias);for(let pt=V.endSkip;pt<X-V.endSkip;pt+=V.step){const gt=at(R[B].vias,pt),q=[];for(const L of N.members){const ut=R[L].vias;let Rt=-1,Tt=1/0;for(let ct=1;ct<ut.length-1;ct++){const F=Math.hypot(ut[ct][0]-gt[0],ut[ct][1]-gt[1],ut[ct][2]-gt[2]);F<Tt&&(Tt=F,Rt=ct)}Tt>V.reach||q.push({m:L,k:Rt})}if(q.length<2)continue;const Et=q.reduce((L,ut)=>{const Rt=R[ut.m].vias[ut.k];return[L[0]+Rt[0],L[1]+Rt[1],L[2]+Rt[2]]},[0,0,0]).map(L=>L/q.length);let Dt=0;for(const L of q){const ut=R[L.m].vias[L.k],Rt=xh(yt[L.m].type),Tt=Math.hypot(ut[0]-Et[0],ut[1]-Et[1],ut[2]-Et[2]),ct=q.length<=2?Rt+1.2:Rt/Math.sin(Math.PI/q.length)+.6,F=Math.min(Tt,ct),mt=Tt>0?F/Tt:0,Mt=[Et[0]+(ut[0]-Et[0])*mt,Et[1]+(ut[1]-Et[1])*mt,Et[2]+(ut[2]-Et[2])*mt];st._free(...st._cell({x:Mt[0],y:Mt[1],z:Mt[2]}))&&(R[L.m].vias[L.k]=Mt),Dt=Math.max(Dt,Math.hypot(R[L.m].vias[L.k][0]-Et[0],R[L.m].vias[L.k][1]-Et[1],R[L.m].vias[L.k][2]-Et[2])+Rt)}const It=at(R[B].vias,Math.min(pt+12,X)),Lt=new w(It[0]-gt[0],It[1]-gt[1],It[2]-gt[2]).normalize(),xt=ce(ie(Dt+.8,3.6,k.cablePlug,18),"tie");xt.position.set(Et[0],Et[1],Et[2]),xt.quaternion.setFromUnitVectors(new w(0,1,0),Lt),xt.userData.noCollide=!0,i.add(xt)}}R.forEach((N,B)=>{const X=yt[B];i.add(Jf(X.a,X.b,{type:X.type,vias:N.vias,na:N.na,nb:N.nb,ta:X.opts.ta,tb:X.opts.tb}))});for(const[N,B]of n){const X=[];i.traverse(pt=>{if(!pt.userData.samples)return;const gt=pt.userData.samples;for(let q=1;q<gt.length;q++){const Et=gt[q-1],Dt=gt[q];if((Et.y-N)*(Dt.y-N)>0)continue;const It=(N-Et.y)/(Dt.y-Et.y||1e-9);X.push([Et.x+(Dt.x-Et.x)*It,Et.z+(Dt.z-Et.z)*It])}}),UM(B,X)}return i}const VM=()=>{const i=new Me,t=et(448,3,26,k.rail);t.position.set(0,1.5,0),i.add(t);const e=et(448,15,3,k.rail);return e.position.set(0,7.5,-11.5),i.add(e),i},WM=()=>{const i=new Me,t=ie(2.8,2.2,k.gold,16);t.position.y=10.6,i.add(t);const e=ie(1.75,9.5,k.gold,12);e.position.y=4.75,i.add(e);const n=ie(4,2.9,k.rail,6);return n.position.y=1.45,i.add(n),i},Tn={gpu:{name:"RTX PRO 6000 Blackwell Max-Q",qty:8,dims:"266.7 × 111.8 mm · dual-slot (40.6 mm)",build:Sd,link:"https://www.exxactcorp.com/NVIDIA-900-5G153-2200-000-E8815317",desc:"NVIDIA workstation GPU — 96 GB GDDR7, 300 W, PCIe 5.0 x16. Single enclosed radial blower: intake through the side fan + gold top louvres, exhaust out the bracket only, which is what makes it safe to pack eight in a row. 12V-2×6 sits in a recessed pocket on the far edge. Reaches the host over MCIO cable through a device adapter, not a motherboard slot."},board:{name:"ASRock WRX90 WS EVO",qty:1,dims:"305 × 330 mm · SSI-EEB",build:Cd,link:"https://www.asrock.com/mb/AMD/WRX90%20WS%20EVO/index.asp",desc:"SSI-EEB motherboard for the Threadripper PRO 9985WX (128 PCIe 5.0 lanes). Four of its x16 slots carry the host adapters that feed the switch fabric."},host:{name:"C-Payne Host Adapter x16 — RETIMER (Astera)",qty:4,dims:"≈175 × 68 mm · half-height x16 card",build:Ld,link:"https://c-payne.com/products/mcio-pcie-gen5-host-adapter-x16-retimer",price:240,desc:"Plugs into a board x16 slot and breaks it into 2× MCIO 8i at the far end of the bottom edge, with an actively-cooled Astera Aries retimer to hold clean Gen5 across the cable. Slot-powered, no aux. Four total = two uplinks per switch (the 2-VS-per-chip layout)."},switch:{name:"C-Payne PM50100 switch (CP-0551)",qty:2,dims:"150 × 110 mm · 100 × 100 mm hole pitch",build:Ad,link:"https://c-payne.com/products/pcie-gen5-mcio-switch-100-lane-microchip-switchtec-pm50100",price:2e3,owned:2,desc:"Microchip Switchtec PM50100 — a 100-lane PCIe Gen5 switch. 12× MCIO 8i + 1× 4i ring the chip under a 90 mm heatsink + 92 mm Arctic fan; PCIe 6-pin power. Each takes two host uplinks and fans out to four GPUs. You already own both."},adapter:{name:"C-Payne Device Adapter x8/x16 (VERTICAL)",qty:8,dims:"≈128 × 41 mm · photo-scaled ±3 mm",build:Ed,link:"https://c-payne.com/products/mcio-pcie-gen5-device-adapter-x8-x16",price:50,desc:'Turns 2× MCIO 8i into a PCIe x16 slot the GPU plugs into — a "portable slot". Vertical MCIO + 6-pin point straight down, which is what allows single-slot-width spacing. The 6-pin 12 V feed is mandatory (and must NOT be an EPS/ATX plug). One per GPU; the piece the mount has to anchor.'},psu:{name:"Seasonic TX-1600 Noctua Edition",qty:2,dims:"210 × 150 × 86 mm · ATX",build:()=>wd(!0),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",desc:"1600 W Titanium, ATX 3.1, 2× native 12V-2×6. Two units — both Noctua Edition — on two separate 120V circuits, synced by an ADD2PSU."},rack:{name:"StarTech 4POSTRACK25U",qty:1,dims:'25U (1111 mm) · 19" · 22–40" deep',build:sd,link:"https://www.startech.com/en-us/server-management/4postrack25u",desc:'Open 4-post 25U rack — 22–40" adjustable depth, square-hole rails, casters. Ships flat-packed.'},shelf:{name:"StarTech ADJSHELF vented shelf",qty:2,dims:"445 × 700 mm tray · 1U · 80 kg cap.",build:()=>yd(),link:"https://www.startech.com/en-us/server-management/adjshelf",desc:"Two total. Lower: fan-down PSUs breathing through the vents, with the WRX90 on a 2020 mezzanine above them. Upper: the card row up front and both switches on the rear strip. No data cable ever crosses a shelf floor — zero drilling."},mount:{name:"2020 T-slot extrusion — Misumi HFS5-2020, cut to length",qty:16,dims:"20 × 20 mm profile · cut: 3× 448 + 3× 400 + 2× 330 + 2× 148 + 4× 92 + 2× 50 mm",build:()=>Vn(448),link:"https://us.misumi-ec.com/vona2/detail/110302683830/",links:[{label:"M5×10 button-heads, 50 pk (Amazon B01H6PKBZA)",url:"https://www.amazon.com/dp/B01H6PKBZA"},{label:"M5 drop-in T-nuts, 100 pk (Amazon B0F1BX43T9)",url:"https://www.amazon.com/dp/B0F1BX43T9"}],note:"order HFS5-2020-‹len›-TPW: cut to length, both ends M5-tapped ≈ $70 the set (verified 2026-07-02) · plus 32× M3 brass spacers (4 per adapter)",desc:"Aluminium frame: two 448 mm rails under the device adapters (adapters stand on brass spacers at their mount holes); two 148 mm uprights carrying the retention L-bar at the ear tabs; and a 448 mm anti-sag bar on 50 mm legs against the solid backplates. The TPW alteration taps the centre bore M5 at both ends, so every leg bolts to the shelf below and the L-bar above with plain M5 button-heads — no brackets, no drilling the extrusion."},lbar:{name:'Retention L-bar — 1"×1"×1/8" 6061 angle, cut 448 mm',qty:1,dims:"448 mm · 25.4 × 25.4 mm legs · 3.2 mm wall",build:VM,link:"https://www.mcmaster.com/8982K4/",links:[{label:'Amazon alt — Remington 48" (B07KX9FBNJ)',url:"https://www.amazon.com/dp/B07KX9FBNJ"}],note:"McMaster 8982K402 (2 ft, $11.42) — cut to 448 mm, drill 8× ø4.0 at 56 mm pitch + 2× ø5.5 at the ends",desc:`The bar the cards actually bolt to. It runs under the row of CEM ear tabs with its upturned flange outboard (flat 26×3 bar would sag 4–9 mm between the legs; the flange stiffens it ~55×). A 6-32 screw drops through each ear's open slot into a drilled hole with a nyloc beneath, and an M5 at each end threads into the tapped core of the 2020 upright below. Stock 1"×1" angle covers the modelled 26 × 15 mm section — one cut, ten holes.`},screw:{name:'6-32 × 3/8" pan-head screws + nyloc nuts (GPU ears)',qty:8,dims:"6-32 UNC · 9.5 mm · 18-8 stainless",build:WM,link:"https://www.mcmaster.com/91772A146/",links:[{label:"6-32 nyloc nuts, 100 pk (McMaster 91831A007)",url:"https://www.mcmaster.com/91831A007/"},{label:"tool-free alt: 6-32 thumbscrews (Amazon B09ZKNH2JX)",url:"https://www.amazon.com/dp/B09ZKNH2JX"}],note:"screws 91772A146 $6.46/100 + nylocs 91831A007 $6.01/100 (verified 2026-07-02)",desc:`Same 6-32 thread as a PC case slot screw. 3/8" is the deliberate length: through the ear tab and the 3 mm L-bar with full nylon engagement in the nyloc — a plain 1/4" case thumbscrew only just reaches. One per card, dropped through the ear's open slot; the nyloc keeps eight cards' worth of vibration from backing anything out.`},bolt:{name:"M5 × 10 mm button-head screws (ISO 7380)",qty:10,dims:"M5 × 0.8 · 10 mm · pack of 50",link:"https://www.amazon.com/dp/B01H6PKBZA",note:"$7.99/50 (Amazon B01H6PKBZA) · McMaster alt 92095A208 $17.80/100",desc:"One per joint: 2 through the L-bar into the upright end-taps, 4 up through the shelf vents into the leg bottoms, 2 into the anti-sag legs, spares for T-nut clamps. 10 mm length suits 3 mm flange + tapped core or drop-in nut."},tnut:{name:"M5 drop-in T-nuts, 2020 slot",qty:8,dims:"6 mm slot · hammer-head, nickel-plated · pack of 100",link:"https://www.amazon.com/dp/B0F1BX43T9",note:"$8.99/100 (Amazon B0F1BX43T9) — drop-in style retrofits an assembled frame",desc:"For every joint that isn't an end-tap: clamping the rails to the shelf and bracing the anti-sag bar to its legs. Hammer-head style quarter-turns into the 6 mm slot after assembly, so joints can be added to the standing frame."},mcio:{name:"MCIO 8i Gen5 cable",qty:24,dims:"45/75 cm · 8i (SFF-TA-1016), 85 Ω",build:()=>io("mcio"),link:"https://c-payne.com/products/mcio-sff-ta-1016-8i-cable-pcie-gen5",price:40,stockMm:[450,750],desc:"PCIe Gen5 data. 8 host→switch + 16 switch→GPU = 24. Every x16 link is two of these."},power12v:{name:"12V-2×6 GPU power",qty:8,dims:"600 W-rated · 16-pin · stock 75 cm (EPS 70 cm)",build:()=>io("power12v"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSUs (2 native + 3 via 8-pin per unit) · the flagged EPS run takes a 20 cm EPS extension",stockMm:[700,750,900],desc:"One 600 W-rated feed per GPU from a PSU (4 native + 4 via 2×8-pin adapters). One cable per card — never split."},aux6:{name:"PCIe 6-pin aux feed",qty:10,dims:"6-pin · ≤ 75 W · stock 69 cm (+30/50 cm ext where flagged)",build:()=>io("aux6"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSUs (peripheral leads) · runs beyond 69 cm take cheap 30/50 cm 6-pin extensions — fine at ≤75 W (or use Seasonic's 3-drop daisy leads)",stockMm:[690,990,1190],desc:"≤75 W feeds for the 2 switch boards + 8 device adapters. Low-current, fine to split off spare PSU leads."},atx:{name:"ATX 24-pin + EPS",qty:1,dims:"24-pin · stock 61 cm (+30 cm ext if flagged)",build:()=>io("atx"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSU · a 30 cm 24-pin extension covers the flagged run",stockMm:[610,910],desc:"Mainboard and CPU power from the host-side PSU."},tie:{name:"Nylon cable ties",qty:1,dims:"2.5 × 100 mm · 100-pack",build:()=>{const i=new Me,t=ie(8,3.6,k.cablePlug,18);t.rotation.z=Math.PI/2,i.add(t);for(const e of[3.8,-3.8]){const n=ie(3.4,60,k.cable,12);n.rotation.z=Math.PI/2,n.position.y=e,i.add(n)}return i},note:"any brand — the model places one every ~10 cm along each bundle",desc:"Cinch points for the loom: every multi-cable run is tied every ~10 cm so bundles ride together instead of splaying. The viz pinches the routed cables at each tie."}},Id=document.getElementById("info"),Zo=document.getElementById("info-canvas"),XM=document.getElementById("info-title"),qM=document.getElementById("info-dims"),YM=document.getElementById("info-qty"),$M=document.getElementById("info-desc"),jM=document.getElementById("info-link"),Xi=new ol({canvas:Zo,antialias:!0,alpha:!0});Xi.setPixelRatio(Math.min(devicePixelRatio,2));Xi.toneMapping=tl;Xi.toneMappingExposure=1.42;Xi.outputColorSpace=Ae;const Gi=new cl;Gi.environment=new Wo(Xi).fromScene(new Kf,.04).texture;Gi.add(new $f(13490677,3026488,1.6));const Ud=new Er(16777215,1.9);Ud.position.set(60,120,90);Gi.add(Ud);const Nd=new Er(10467583,1);Nd.position.set(-80,30,-50);Gi.add(Nd);const Sr=new qe(40,1,.5,8e3),qn=new Zf(Sr,Zo);qn.enableDamping=!0;qn.enablePan=!1;qn.autoRotate=!0;qn.autoRotateSpeed=1.6;let Ai=null,gr=null;function ZM(){const i=Zo.clientWidth||320,t=Zo.clientHeight||240;Xi.setSize(i,t,!1),Sr.aspect=i/t,Sr.updateProjectionMatrix()}function KM(i,t){const e=Tn[i];if(!e)return;XM.textContent=e.name;const n=t&&t.userData.lengthMm;qM.textContent=(e.dims||"")+(n?` · this run ≈ ${(n/10).toFixed(1)} cm`:""),YM.textContent=e.qty?`×${e.qty} in the build`:"",$M.textContent=e.desc||"";const s=[e.link&&{label:"product page",url:e.link},...e.links||[]].filter(Boolean);if(jM.innerHTML=s.map(r=>`<a href="${r.url}" target="_blank" rel="noopener">${r.label} ↗</a> <span class="src">${new URL(r.url).hostname.replace(/^www\./,"")}</span>`).join("<br>"),Id.classList.add("open"),ZM(),Ai&&Gi.remove(Ai),Ai=e.build?e.build():null,Ai){Gi.add(Ai);const r=new se().setFromObject(Ai),a=r.getCenter(new w),o=r.getSize(new w);Ai.position.sub(a);const c=Math.max(o.x,o.y,o.z,40)*1.6+30;Sr.position.set(c*.7,c*.5,c),qn.target.set(0,0,0),qn.minDistance=c*.3,qn.maxDistance=c*5,qn.update()}gr||Od()}function Od(){gr=requestAnimationFrame(Od),qn.update(),Xi.render(Gi,Sr)}function JM(){Id.classList.remove("open"),gr&&(cancelAnimationFrame(gr),gr=null)}document.getElementById("info-close").onclick=JM;const Ec=["mcio","power12v","aux6","atx"];function tf(i){for(let t=i;t;t=t.parent)if(t.userData&&t.userData.part!==void 0)return t.userData.part;return null}function bl(i,{margin:t=1.5,skipEnds:e=4}={}){i.updateMatrixWorld(!0);const n=[];i.traverse(r=>{if(r.userData.solidBoxes){const l=tf(r);if(l!==null&&!Ec.includes(l))for(const u of r.userData.solidBoxes){const f=new se(new w(u[0],u[1],u[2]),new w(u[3],u[4],u[5])).applyMatrix4(r.matrixWorld).expandByScalar(-t);f.isEmpty()||n.push({part:l,box:f})}}if(!r.isMesh||r.isInstancedMesh||r.userData.noCollide)return;const a=tf(r);if(a===null||Ec.includes(a))return;const o=new se().setFromObject(r).expandByScalar(-t),c=r.userData.floor&&r.userData.holes?r.userData.holes.map(([l,u])=>[l,r.getWorldPosition(new w).z+u]):null;o.isEmpty()||n.push({part:a,box:o,holes:c})});const s={};return i.traverse(r=>{if(!Ec.includes(r.userData.part)||!r.userData.samples)return;const a=r.userData.samples,o=a[0],c=a[a.length-1],l=new Set;for(let u=e;u<a.length-e;u++)if(!(a[u].distanceTo(o)<35||a[u].distanceTo(c)<35)){for(const f of n)if(!l.has(f.part)&&f.box.containsPoint(a[u])){const h=a[u];if(f.holes&&f.holes.some(([_,x])=>Math.abs(h.x-_)<=15&&Math.abs(h.z-x)<=9))continue;const p=`${r.userData.part} → ${f.part}`;s[p]=(s[p]||0)+1,l.add(f.part)}}}),s}const QM=["mcio","power12v","aux6","atx"],Fd=1.12;function Bd(i){const t={};return i.traverse(e=>{QM.includes(e.userData.part)&&e.userData.lengthMm&&(t[e.userData.part]||=[]).push(e.userData.lengthMm)}),t}function zd(i,t){const e=i*Fd;for(const n of t)if(e<=n)return n;return null}function tS(i,t){const e=t[i];if(!e||!e.length)return"";const n=Math.min(...e),s=Math.max(...e);let r="";if(Tn[i].stockMm){const a={};let o=0;for(const l of e){const u=zd(l,Tn[i].stockMm);u===null?o++:a[u]=(a[u]||0)+1}const c=Object.entries(a).map(([l,u])=>`${u}× ${l/10} cm`).join(" + ");r=o?` · <span class="bom-bad">⚠ ${o} run${o>1?"s":""} too long for stock</span>`:` · ${Tn[i].price!=null?`buy ${c}`:`stock fits (${c})`} <span class="bom-ok">✓</span>`}return`runs ${(n/10).toFixed(1)}–${(s/10).toFixed(1)} cm${r}`}function eS(i,t){const e=[],n=i.userData.router?i.userData.router.fails:0;e.push(n?`<span class="bom-bad">⚠ ${n} cable route${n>1?"s":""} found no collision-free path</span>`:'<span class="bom-ok">✓</span> all cable routes found a collision-free path');const s=bl(i),r=Object.keys(s).length;e.push(r?`<span class="bom-bad">⚠ wires passing through parts: ${Object.entries(s).map(([c,l])=>`${c} (${l})`).join(", ")}</span>`:'<span class="bom-ok">✓</span> no wire passes through a component');const a=t.mcio||[],o=a.filter(c=>zd(c,Tn.mcio.stockMm)===null).length;if(a.length){const c=Math.max(...a);e.push(o?`<span class="bom-bad">⚠ ${o} MCIO run(s) exceed the 75 cm stock cable (longest ${(c/10).toFixed(1)} cm + slack)</span>`:`<span class="bom-ok">✓</span> every MCIO run fits stock cable (longest ${(c/10).toFixed(1)} cm routed, ×${Fd} slack ≤ 75 cm)`)}return e}const bc=i=>`€${i.toLocaleString("en-US")}`;function nS(i){const t=Bd(i);let e=0,n=0;const s=Object.entries(Tn).map(([r,a])=>{const o=a.owned||0,c=a.qty-o,l=a.price!=null?a.price*c:null;l!=null?e+=l:!a.note&&c>0&&n++;const u=a.link?`<a href="${a.link}" target="_blank" rel="noopener">${a.name} ↗</a>`:a.name,f=[o?`${o} owned`:"",a.note||"",tS(r,t)].filter(Boolean).join(" · ");return`<tr>
      <td class="n">${a.qty}×</td>
      <td>${u}</td>
      <td class="n">${a.price!=null?bc(a.price):"—"}</td>
      <td class="n">${l!=null?l?bc(l):'<span class="bom-ok">owned</span>':"—"}</td>
      <td class="notes">${f}</td>
    </tr>`}).join("");document.getElementById("bom-body").innerHTML=`
    <table>
      <thead><tr><th class="n">qty</th><th>part</th><th class="n">unit</th><th class="n">to buy</th><th>notes · live from this layout</th></tr></thead>
      <tbody>${s}</tbody>
    </table>
    <div id="bom-checks">${eS(i,t).map(r=>`<div>${r}</div>`).join("")}</div>`,document.getElementById("bom-total").textContent=`priced items: ${bc(e)}${n?` · +${n} unpriced (see links)`:""}`}function iS(i){const t=Bd(i),e=r=>`"${String(r).replaceAll('"','""')}"`,n=[["qty","part","unit_eur","owned","to_buy_eur","link","notes"].join(",")];for(const[r,a]of Object.entries(Tn)){const o=a.owned||0,c=a.qty-o,l=t[r],u=[a.note||"",l?`routed runs cm: ${l.map(f=>(f/10).toFixed(1)).join(" ")}`:""].filter(Boolean).join(" | ");n.push([a.qty,e(a.name),a.price??"",o,a.price!=null?a.price*c:"",a.link||"",e(u)].join(","))}const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([n.join(`
`)],{type:"text/csv"})),s.download="rig-bom.csv",s.click(),URL.revokeObjectURL(s.href)}function sS(i){const t=document.getElementById("bom");document.getElementById("bom-btn").onclick=()=>{nS(i()),t.classList.add("open")},document.getElementById("bom-close").onclick=()=>t.classList.remove("open"),t.addEventListener("pointerdown",e=>{e.target===t&&t.classList.remove("open")}),document.getElementById("bom-csv").onclick=()=>iS(i())}await BM();const Fo=new URLSearchParams(location.search).get("part"),jn=!!(Fo&&Tn[Fo]&&Tn[Fo].build),rS=document.getElementById("app"),Be=new cl;Be.background=new jt(jn?1381659:id);jn||(Be.fog=new al(id,2800,5600));const pi=new qe(42,innerWidth/innerHeight,5,12e3),je=new ol({antialias:!0});je.setSize(innerWidth,innerHeight);je.setPixelRatio(Math.min(devicePixelRatio,2));je.toneMapping=tl;je.toneMappingExposure=1.42;je.outputColorSpace=Ae;rS.appendChild(je.domElement);const oS=new Wo(je);Be.environment=oS.fromScene(new Kf,.04).texture;Be.add(new $f(13490677,3026488,jn?1.7:1.5));const kd=new Er(16777215,jn?2.6:2);kd.position.set(900,1600,1100);Be.add(kd);const Hd=new Er(10467583,jn?1.5:1.1);Hd.position.set(-1e3,500,-700);Be.add(Hd);const Gd=new Er(16770752,.75);Gd.position.set(200,400,-1200);Be.add(Gd);let $e=jn?Tn[Fo].build():Dd();Be.add($e);const ye=new Zf(pi,je.domElement);ye.enableDamping=!0;ye.autoRotateSpeed=1;let mi;if(jn){const i=new se().setFromObject($e),t=i.getCenter(new w),e=i.getSize(new w),n=Math.max(e.x,e.y,e.z)*1.9+60;mi={pos:[t.x+n*.85,t.y+n*.5,t.z+n],target:t.toArray()},ye.autoRotate=!0,ye.minDistance=30,ye.maxDistance=4e3,document.getElementById("legend").style.display="none";const s=new ph(Math.max(e.x,e.z)*5,20,2763318,1710626);s.position.set(t.x,i.min.y-6,t.z),Be.add(s)}else{mi={pos:[720,900,1240],target:[0,470,0]},ye.autoRotate=!1,ye.minDistance=380,ye.maxDistance=5200,ye.maxPolarAngle=Math.PI*.54;const i=new ee(new ea(6e3,6e3),new qo({color:657934,metalness:.1,roughness:.95}));i.rotation.x=-Math.PI/2,i.position.y=-173,Be.add(i);const t=new ph(4400,44,2763318,1513246);t.position.y=-172,Be.add(t)}const ef=new URLSearchParams(location.search).get("cam");if(ef){const[i,t,e,n,s,r]=ef.split(",").map(Number);mi={pos:[i,t,e],target:[n,s,r]},ye.autoRotate=!1,ye.minDistance=10}pi.position.set(...mi.pos);ye.target.set(...mi.target);ye.update();window.__viz={camera:pi,controls:ye,HOME:mi,object:$e};window.__collisions=()=>bl($e);const nf=new Bv,sf=new ft;let on=null,or=null,ri=null;const Kc=[];function Vd(){on&&(Be.remove(on),on.geometry&&on.geometry.dispose(),on.material&&on.material.dispose(),on=null);for(const[i,t]of Kc)i.material.dispose(),i.material=t;Kc.length=0}function aS(i){if(!i.userData.samples){on=new zv(i,10146106),Be.add(on);return}i.traverse(t=>{if(!t.isMesh)return;const e=t.material.clone();e.emissive=new jt(10146106),e.emissiveIntensity=.55,Kc.push([t,t.material]),t.material=e})}je.domElement.addEventListener("pointerdown",i=>{or=[i.clientX,i.clientY]});je.domElement.addEventListener("pointerup",i=>{if(!or)return;const t=Math.hypot(i.clientX-or[0],i.clientY-or[1]);if(or=null,t>5||i.button!==0)return;const e=je.domElement.getBoundingClientRect();sf.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),nf.setFromCamera(sf,pi);const n=nf.intersectObject($e,!0)[0];let s=n&&n.object;for(;s&&s.userData.part===void 0;)s=s.parent;s&&s.userData.part&&Tn[s.userData.part]&&(KM(s.userData.part,s),Vd(),aS(s))});function Wd(){ri&&(ri.removeFromParent(),ri.geometry.dispose(),ri.material.dispose(),ri=null)}function rf(){Be.remove($e),$e=Dd(),Be.add($e),window.__viz.object=$e,window.__collisions=()=>bl($e),Vd(),Wd()}jn?(document.getElementById("bom-btn").style.display="none",document.getElementById("legend-btn").style.display="none"):(sS(()=>$e),document.getElementById("legend-btn").onclick=()=>document.getElementById("legend").classList.toggle("open"));jn||(window.__addBias=i=>(Do.push(i),rf(),Do.slice()),window.__clearBias=()=>{Do.length=0,rf()},addEventListener("keydown",i=>{i.key.toLowerCase()==="v"&&(ri?Wd():$e.userData.router&&(ri=$e.userData.router.debugVoxels(),$e.add(ri)))}));const Jc=document.getElementById("spin");Jc.textContent=ye.autoRotate?"pause spin":"start spin";Jc.onclick=()=>{ye.autoRotate=!ye.autoRotate,Jc.textContent=ye.autoRotate?"pause spin":"start spin"};document.getElementById("fit").onclick=()=>{pi.position.set(...mi.pos),ye.target.set(...mi.target),ye.update()};addEventListener("resize",()=>{pi.aspect=innerWidth/innerHeight,pi.updateProjectionMatrix(),je.setSize(innerWidth,innerHeight)});je.setAnimationLoop(()=>{ye.update(),on&&on.isBoxHelper&&on.update(),je.render(Be,pi)});
