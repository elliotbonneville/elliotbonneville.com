(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="160",Wi={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wd=0,Al=1,Xd=2,Qh=1,qd=2,Hn=3,wn=0,Fe=1,cn=2,ai=0,Cs=1,wl=2,Rl=3,Cl=4,Yd=5,Ti=100,jd=101,$d=102,Pl=103,Ll=104,Zd=200,Kd=201,Jd=202,Qd=203,Ec=204,bc=205,tp=206,ep=207,np=208,ip=209,sp=210,rp=211,op=212,ap=213,cp=214,lp=0,up=1,hp=2,Fo=3,fp=4,dp=5,pp=6,mp=7,tf=0,gp=1,_p=2,ci=0,xp=1,vp=2,yp=3,Jc=4,Mp=5,Sp=6,ef=300,Ls=301,Ds=302,Tc=303,Ac=304,Zo=306,wc=1e3,Mn=1001,Rc=1002,Ge=1003,Dl=1004,ha=1005,on=1006,Ep=1007,dr=1008,li=1009,bp=1010,Tp=1011,Qc=1012,nf=1013,ii=1014,si=1015,pr=1016,sf=1017,rf=1018,Pi=1020,Ap=1021,Sn=1023,wp=1024,Rp=1025,Li=1026,Is=1027,Cp=1028,of=1029,Pp=1030,af=1031,cf=1033,fa=33776,da=33777,pa=33778,ma=33779,Il=35840,Ul=35841,Nl=35842,Ol=35843,lf=36196,Fl=37492,Bl=37496,zl=37808,Hl=37809,Gl=37810,kl=37811,Vl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,jl=37817,$l=37818,Zl=37819,Kl=37820,Jl=37821,ga=36492,Ql=36494,tu=36495,Lp=36283,eu=36284,nu=36285,iu=36286,uf=3e3,Di=3001,Dp=3200,Ip=3201,hf=0,Up=1,ln="",Ee="srgb",Wn="srgb-linear",tl="display-p3",Ko="display-p3-linear",Bo="linear",re="srgb",zo="rec709",Ho="p3",qi=7680,su=519,Np=512,Op=513,Fp=514,ff=515,Bp=516,zp=517,Hp=518,Gp=519,ru=35044,ou="300 es",Cc=1035,kn=2e3,Go=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,Pc=180/Math.PI;function Ns(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function kp(i,t){return(i%t+t)%t}function _a(i,t,e){return(1-e)*i+e*t}function au(i){return(i&i-1)===0&&i!==0}function Lc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vp={DEG2RAD:wo};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,a,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],v=s[1],_=s[4],y=s[7],E=s[2],T=s[5],S=s[8];return r[0]=a*x+o*v+c*E,r[3]=a*m+o*_+c*T,r[6]=a*d+o*y+c*S,r[1]=l*x+u*v+f*E,r[4]=l*m+u*_+f*T,r[7]=l*d+u*y+f*S,r[2]=h*x+p*v+g*E,r[5]=h*m+p*_+g*T,r[8]=h*d+p*y+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*r,p=l*r-a*c,g=e*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new qt;function df(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wp(){const i=ko("canvas");return i.style.display="block",i}const cu={};function sr(i){i in cu||(cu[i]=!0,console.warn(i))}const lu=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uu=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[Wn]:{transfer:Bo,primaries:zo,toReference:i=>i,fromReference:i=>i},[Ee]:{transfer:re,primaries:zo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ko]:{transfer:Bo,primaries:Ho,toReference:i=>i.applyMatrix3(uu),fromReference:i=>i.applyMatrix3(lu)},[tl]:{transfer:re,primaries:Ho,toReference:i=>i.convertSRGBToLinear().applyMatrix3(uu),fromReference:i=>i.applyMatrix3(lu).convertLinearToSRGB()}},Xp=new Set([Wn,Ko]),ie={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Er[t].toReference,s=Er[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Er[i].primaries},getTransfer:function(i){return i===ln?Bo:Er[i].transfer}};function Ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function va(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class pf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=ko("canvas")),Yi.width=t.width,Yi.height=t.height;const n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ko("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ps(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ps(e[n]/255)*255):e[n]=Ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qp=0;class mf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Ns(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;class tn extends Gi{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Mn,s=Mn,r=on,a=dr,o=Sn,c=li,l=tn.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Ns(),this.name="",this.source=new mf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Di?Ee:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wc:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wc:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?Di:uf}set encoding(t){sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Di?Ee:ln}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=ef;tn.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(p+1)/2,E=(d+1)/2,T=(u+h)/4,S=(f+x)/4,P=(g+m)/4;return _>y&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=S/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=S/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jp extends Gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Di?Ee:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends jp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gf extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $p extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const h=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==h||l!==p||u!==g){let m=1-o;const d=c*h+l*p+u*g+f*x,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const E=Math.sqrt(_),T=Math.atan2(E,d*v);m=Math.sin(m*T)/E,o=Math.sin(o*T)/E}const y=o*v;if(c=c*m+h*y,l=l*m+p*y,u=u*m+g*y,f=f*m+x*y,m===1-o){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*f+c*p-l*h,t[e+1]=c*g+u*h+l*f-o*p,t[e+2]=l*g+u*p+o*h-c*f,t[e+3]=u*g-o*f-c*h-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new w,hu=new Ni;class se{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Tr.subVectors(this.max,ks),ji.subVectors(t.a,ks),$i.subVectors(t.b,ks),Zi.subVectors(t.c,ks),Yn.subVectors($i,ji),jn.subVectors(Zi,$i),pi.subVectors(ji,Zi);let e=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-pi.z,pi.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,pi.z,0,-pi.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-pi.y,pi.x,0];return!Sa(e,ji,$i,Zi,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Sa(e,ji,$i,Zi,Tr))?!1:(Ar.crossVectors(Yn,jn),e=[Ar.x,Ar.y,Ar.z],Sa(e,ji,$i,Zi,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new w,new w,new w,new w,new w,new w,new w,new w],gn=new w,br=new se,ji=new w,$i=new w,Zi=new w,Yn=new w,jn=new w,pi=new w,ks=new w,Tr=new w,Ar=new w,mi=new w;function Sa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Zp=new se,Vs=new w,Ea=new w;class ki{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Ea)),this.expandByPoint(Vs.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new w,ba=new w,wr=new w,$n=new w,Ta=new w,Rr=new w,Aa=new w;class Os{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ba.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(wr),o=$n.dot(this.direction),c=-$n.dot(wr),l=$n.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*c-o,h=a*o-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ba).addScaledVector(wr,h),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){Ta.subVectors(e,t),Rr.subVectors(n,t),Aa.crossVectors(Ta,Rr);let a=this.direction.dot(Aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,t);const c=o*this.direction.dot(Rr.crossVectors($n,Rr));if(c<0)return null;const l=o*this.direction.dot(Ta.cross($n));if(l<0||c+l>a)return null;const u=-o*$n.dot(Aa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,a,o,c,l,u,f,h,p,g,x,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,f,h,p,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,f,h,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,p=c*f,g=l*u,x=l*f;e[0]=h+x*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,p=c*f,g=l*u,x=l*f;e[0]=h-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,p=a*f,g=o*u,x=o*f;e[0]=c*u,e[4]=g*l-p,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*f+g,e[10]=h-x*f}else if(t.order==="XZY"){const h=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kp,t,Jp)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Zn.crossVectors(n,Ke),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Zn.crossVectors(n,Ke)),Zn.normalize(),Cr.crossVectors(Ke,Zn),s[0]=Zn.x,s[4]=Cr.x,s[8]=Ke.x,s[1]=Zn.y,s[5]=Cr.y,s[9]=Ke.y,s[2]=Zn.z,s[6]=Cr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],v=n[3],_=n[7],y=n[11],E=n[15],T=s[0],S=s[4],P=s[8],M=s[12],b=s[1],I=s[5],U=s[9],B=s[13],L=s[2],F=s[6],H=s[10],Z=s[14],J=s[3],j=s[7],it=s[11],nt=s[15];return r[0]=a*T+o*b+c*L+l*J,r[4]=a*S+o*I+c*F+l*j,r[8]=a*P+o*U+c*H+l*it,r[12]=a*M+o*B+c*Z+l*nt,r[1]=u*T+f*b+h*L+p*J,r[5]=u*S+f*I+h*F+p*j,r[9]=u*P+f*U+h*H+p*it,r[13]=u*M+f*B+h*Z+p*nt,r[2]=g*T+x*b+m*L+d*J,r[6]=g*S+x*I+m*F+d*j,r[10]=g*P+x*U+m*H+d*it,r[14]=g*M+x*B+m*Z+d*nt,r[3]=v*T+_*b+y*L+E*J,r[7]=v*S+_*I+y*F+E*j,r[11]=v*P+_*U+y*H+E*it,r[15]=v*M+_*B+y*Z+E*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*c*f-s*l*f-r*o*h+n*l*h+s*o*p-n*c*p)+x*(+e*c*p-e*l*h+r*a*h-s*a*p+s*l*u-r*c*u)+m*(+e*l*f-e*o*p-r*a*f+n*a*p+r*o*u-n*l*u)+d*(-s*o*u-e*c*f+e*o*h+s*a*f-n*a*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],v=f*m*l-x*h*l+x*c*p-o*m*p-f*c*d+o*h*d,_=g*h*l-u*m*l-g*c*p+a*m*p+u*c*d-a*h*d,y=u*x*l-g*f*l+g*o*p-a*x*p-u*o*d+a*f*d,E=g*f*c-u*x*c-g*o*h+a*x*h+u*o*m-a*f*m,T=e*v+n*_+s*y+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return t[0]=v*S,t[1]=(x*h*r-f*m*r-x*s*p+n*m*p+f*s*d-n*h*d)*S,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*d+n*c*d)*S,t[3]=(f*c*r-o*h*r-f*s*l+n*h*l+o*s*p-n*c*p)*S,t[4]=_*S,t[5]=(u*m*r-g*h*r+g*s*p-e*m*p-u*s*d+e*h*d)*S,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*d-e*c*d)*S,t[7]=(a*h*r-u*c*r+u*s*l-e*h*l-a*s*p+e*c*p)*S,t[8]=y*S,t[9]=(g*f*r-u*x*r-g*n*p+e*x*p+u*n*d-e*f*d)*S,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*d+e*o*d)*S,t[11]=(u*o*r-a*f*r-u*n*l+e*f*l+a*n*p-e*o*p)*S,t[12]=E*S,t[13]=(u*x*s-g*f*s+g*n*h-e*x*h-u*n*m+e*f*m)*S,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*S,t[15]=(a*f*s-u*o*s+u*n*c-e*f*c-a*n*h+e*o*h)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,f=o+o,h=r*l,p=r*u,g=r*f,x=a*u,m=a*f,d=o*f,v=c*l,_=c*u,y=c*f,E=n.x,T=n.y,S=n.z;return s[0]=(1-(x+d))*E,s[1]=(p+y)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(h+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+_)*S,s[9]=(m-v)*S,s[10]=(1-(h+x))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const a=Ki.set(s[4],s[5],s[6]).length(),o=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const l=1/r,u=1/a,f=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=kn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s);let p,g;if(o===kn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Go)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=kn){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(a-r),h=(e+t)*l,p=(n+s)*u;let g,x;if(o===kn)g=(a+r)*f,x=-2*f;else if(o===Go)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new w,_n=new Jt,Kp=new w(0,0,0),Jp=new w(1,1,1),Zn=new w,Cr=new w,Ke=new w,fu=new Jt,du=new Ni;class Jo{constructor(t=0,e=0,n=0,s=Jo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jo.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qp=0;const pu=new w,Ji=new Ni,Un=new Jt,Pr=new w,Ws=new w,tm=new w,em=new Ni,mu=new w(1,0,0),gu=new w(0,1,0),_u=new w(0,0,1),nm={type:"added"},im={type:"removed"};class De extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new w,e=new Jo,n=new Ni,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new qt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(mu,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(_u,t)}translateOnAxis(t,e){return pu.copy(t).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mu,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(_u,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ws,Pr,this.up):Un.lookAt(Pr,Ws,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Un),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(nm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(im)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new w(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new w,Nn=new w,wa=new w,On=new w,Qi=new w,ts=new w,xu=new w,Ra=new w,Ca=new w,Pa=new w;let Lr=!1;class ce{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Nn.subVectors(n,e),wa.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Nn),c=xn.dot(wa),l=Nn.dot(Nn),u=Nn.dot(wa),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(t,e,n,s,r,a,o,c){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Nn.subVectors(t,e),xn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),xn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ce.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ce.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),ce.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return ce.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ce.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ce.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,n),ts.subVectors(r,n),Ra.subVectors(t,n);const c=Qi.dot(Ra),l=ts.dot(Ra);if(c<=0&&l<=0)return e.copy(n);Ca.subVectors(t,s);const u=Qi.dot(Ca),f=ts.dot(Ca);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Qi,a);Pa.subVectors(t,r);const p=Qi.dot(Pa),g=ts.dot(Pa);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ts,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return xu.subVectors(r,s),o=(f-u)/(f-u+(p-g)),e.copy(s).addScaledVector(xu,o);const d=1/(m+x+h);return a=x*d,o=h*d,e.copy(n).addScaledVector(Qi,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function La(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=kp(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=La(a,r,t+1/3),this.g=La(a,r,t),this.b=La(a,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=_f[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return ie.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Pe(Oe.r*255,0,255))*65536+Math.round(Pe(Oe.g*255,0,255))*256+Math.round(Pe(Oe.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Ee){ie.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Dr);const n=_a(Kn.h,Dr.h,e),s=_a(Kn.s,Dr.s,e),r=_a(Kn.l,Dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new jt;jt.NAMES=_f;let sm=0;class Fs extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Cs,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=bc,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ec&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qo extends Fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new w,Ir=new ut;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ru,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ru&&(t.usage=this.usage),t}}class xf extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vf extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rm=0;const nn=new Jt,Da=new De,es=new w,Je=new se,Xs=new se,Ce=new w;class ke extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(df(t)?vf:xf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new se);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(Je.min,Xs.min),Je.expandByPoint(Ce),Ce.addVectors(Je.max,Xs.max),Je.expandByPoint(Ce)):(Je.expandByPoint(Xs.min),Je.expandByPoint(Xs.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ce.fromBufferAttribute(o,l),c&&(es.fromBufferAttribute(t,l),Ce.add(es)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<o;b++)l[b]=new w,u[b]=new w;const f=new w,h=new w,p=new w,g=new ut,x=new ut,m=new ut,d=new w,v=new w;function _(b,I,U){f.fromArray(s,b*3),h.fromArray(s,I*3),p.fromArray(s,U*3),g.fromArray(a,b*2),x.fromArray(a,I*2),m.fromArray(a,U*2),h.sub(f),p.sub(f),x.sub(g),m.sub(g);const B=1/(x.x*m.y-m.x*x.y);isFinite(B)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(B),v.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(B),l[b].add(d),l[I].add(d),l[U].add(d),u[b].add(v),u[I].add(v),u[U].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,I=y.length;b<I;++b){const U=y[b],B=U.start,L=U.count;for(let F=B,H=B+L;F<H;F+=3)_(n[F+0],n[F+1],n[F+2])}const E=new w,T=new w,S=new w,P=new w;function M(b){S.fromArray(r,b*3),P.copy(S);const I=l[b];E.copy(I),E.sub(S.multiplyScalar(S.dot(I))).normalize(),T.crossVectors(P,I);const B=T.dot(u[b])<0?-1:1;c[b*4]=E.x,c[b*4+1]=E.y,c[b*4+2]=E.z,c[b*4+3]=B}for(let b=0,I=y.length;b<I;++b){const U=y[b],B=U.start,L=U.count;for(let F=B,H=B+L;F<H;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new w,r=new w,a=new w,o=new w,c=new w,l=new w,u=new w,f=new w;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new Te(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=t(h,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vu=new Jt,gi=new Os,Ur=new ki,yu=new w,ns=new w,is=new w,ss=new w,Ia=new w,Nr=new w,Or=new ut,Fr=new ut,Br=new ut,Mu=new w,Su=new w,Eu=new w,zr=new w,Hr=new w;class ee extends De{constructor(t=new ke,e=new Qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(Ia.fromBufferAttribute(f,t),a?Nr.addScaledVector(Ia,u):Nr.addScaledVector(Ia.sub(e),u))}e.add(Nr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(Ur.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ur,yu)===null||gi.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(vu.copy(r).invert(),gi.copy(t.ray).applyMatrix4(vu),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=_;y<E;y+=3){const T=o.getX(y),S=o.getX(y+1),P=o.getX(y+2);s=Gr(this,d,t,n,l,u,f,T,S,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=o.getX(m),_=o.getX(m+1),y=o.getX(m+2);s=Gr(this,a,t,n,l,u,f,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=_;y<E;y+=3){const T=y,S=y+1,P=y+2;s=Gr(this,d,t,n,l,u,f,T,S,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=m,_=m+1,y=m+2;s=Gr(this,a,t,n,l,u,f,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function om(i,t,e,n,s,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===wn,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Hr);return l<e.near||l>e.far?null:{distance:l,point:Hr.clone(),object:i}}function Gr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ns),i.getVertexPosition(c,is),i.getVertexPosition(l,ss);const u=om(i,t,e,n,ns,is,ss,zr);if(u){s&&(Or.fromBufferAttribute(s,o),Fr.fromBufferAttribute(s,c),Br.fromBufferAttribute(s,l),u.uv=ce.getInterpolation(zr,ns,is,ss,Or,Fr,Br,new ut)),r&&(Or.fromBufferAttribute(r,o),Fr.fromBufferAttribute(r,c),Br.fromBufferAttribute(r,l),u.uv1=ce.getInterpolation(zr,ns,is,ss,Or,Fr,Br,new ut),u.uv2=u.uv1),a&&(Mu.fromBufferAttribute(a,o),Su.fromBufferAttribute(a,c),Eu.fromBufferAttribute(a,l),u.normal=ce.getInterpolation(zr,ns,is,ss,Mu,Su,Eu,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new w,materialIndex:0};ce.getNormal(ns,is,ss,f.normal),u.face=f}return u}class Cn extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function g(x,m,d,v,_,y,E,T,S,P,M){const b=y/S,I=E/P,U=y/2,B=E/2,L=T/2,F=S+1,H=P+1;let Z=0,J=0;const j=new w;for(let it=0;it<H;it++){const nt=it*I-B;for(let _t=0;_t<F;_t++){const W=_t*b-U;j[x]=W*v,j[m]=nt*_,j[d]=L,l.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[d]=T>0?1:-1,u.push(j.x,j.y,j.z),f.push(_t/S),f.push(1-it/P),Z+=1}}for(let it=0;it<P;it++)for(let nt=0;nt<S;nt++){const _t=h+nt+F*it,W=h+nt+F*(it+1),st=h+(nt+1)+F*(it+1),vt=h+(nt+1)+F*it;c.push(_t,W,vt),c.push(W,st,vt),J+=6}o.addGroup(p,J,M),p+=J,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function am(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yf(i){return i.getRenderTarget()===null?i.outputColorSpace:ie.workingColorSpace}const cm={clone:Us,merge:He};var lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mf extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends Mf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pc*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,os=1;class hm extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(rs,os,t,e);s.layers=this.layers,this.add(s);const r=new qe(rs,os,t,e);r.layers=this.layers,this.add(r);const a=new qe(rs,os,t,e);a.layers=this.layers,this.add(a);const o=new qe(rs,os,t,e);o.layers=this.layers,this.add(o);const c=new qe(rs,os,t,e);c.layers=this.layers,this.add(c);const l=new qe(rs,os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sf extends tn{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fm extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Di?Ee:ln),this.texture=new Sf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cn(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ai});r.uniforms.tEquirect.value=e;const a=new ee(s,r),o=e.minFilter;return e.minFilter===dr&&(e.minFilter=on),new hm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ua=new w,dm=new w,pm=new qt;class yn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ua.subVectors(n,e).cross(dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pm.getNormalMatrix(t),s=this.coplanarPoint(Ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ki,kr=new w;class nl{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],f=s[6],h=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],v=s[13],_=s[14],y=s[15];if(n[0].setComponents(c-r,h-l,m-p,y-d).normalize(),n[1].setComponents(c+r,h+l,m+p,y+d).normalize(),n[2].setComponents(c+a,h+u,m+g,y+v).normalize(),n[3].setComponents(c-a,h-u,m-g,y-v).normalize(),n[4].setComponents(c-o,h-f,m-x,y-_).normalize(),e===kn)n[5].setComponents(c+o,h+f,m+x,y+_).normalize();else if(e===Go)n[5].setComponents(o,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(kr.x=s.normal.x>0?t.max.x:t.min.x,kr.y=s.normal.y>0?t.max.y:t.min.y,kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ef(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mm(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,u){const f=l.array,h=l.usage,p=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),l.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,f){const h=u.array,p=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,l),p.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let x=0,m=g.length;x<m;x++){const d=g[x];e?i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,s(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:a,remove:o,update:c}}class ta extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=t/o,h=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const v=d*h-a;for(let _=0;_<l;_++){const y=_*f-r;g.push(y,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const _=v+l*d,y=v+l*(d+1),E=v+1+l*(d+1),T=v+1+l*d;p.push(_,y,T),p.push(y,E,T)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.width,t.height,t.widthSegments,t.heightSegments)}}var gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_m=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
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
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cm=`#ifdef USE_IRIDESCENCE
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
#endif`,Pm=`#ifdef USE_BUMPMAP
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zm=`#define PI 3.141592653589793
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
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`
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
}`,jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ig=`#ifdef USE_GRADIENTMAP
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
}`,sg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
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
#endif`,mg=`struct PhysicalMaterial {
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
}`,gg=`
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ag=`#if defined( USE_POINTS_UV )
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
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pg=`#ifdef USE_MORPHNORMALS
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
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
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t0=`float getShadowMask() {
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
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,E0=`#define DISTANCE
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
}`,b0=`#define DISTANCE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,F0=`#define PHONG
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
}`,B0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,k0=`#define TOON
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
}`,V0=`uniform float size;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,Y0=`uniform float rotation;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:gm,alphahash_pars_fragment:_m,alphamap_fragment:xm,alphamap_pars_fragment:vm,alphatest_fragment:ym,alphatest_pars_fragment:Mm,aomap_fragment:Sm,aomap_pars_fragment:Em,batching_pars_vertex:bm,batching_vertex:Tm,begin_vertex:Am,beginnormal_vertex:wm,bsdfs:Rm,iridescence_fragment:Cm,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Um,color_fragment:Nm,color_pars_fragment:Om,color_pars_vertex:Fm,color_vertex:Bm,common:zm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:km,displacementmap_vertex:Vm,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:jm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Zm,envmap_pars_vertex:Km,envmap_physical_pars_fragment:lg,envmap_vertex:Jm,fog_vertex:Qm,fog_pars_vertex:tg,fog_fragment:eg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:cg,lights_toon_fragment:ug,lights_toon_pars_fragment:hg,lights_phong_fragment:fg,lights_phong_pars_fragment:dg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:_g,lights_fragment_end:xg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:Eg,map_pars_fragment:bg,map_particle_fragment:Tg,map_particle_pars_fragment:Ag,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Rg,morphcolor_vertex:Cg,morphnormal_vertex:Pg,morphtarget_pars_vertex:Lg,morphtarget_vertex:Dg,normal_fragment_begin:Ig,normal_fragment_maps:Ug,normal_pars_fragment:Ng,normal_pars_vertex:Og,normal_vertex:Fg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:kg,opaque_fragment:Vg,packing:Wg,premultiplied_alpha_fragment:Xg,project_vertex:qg,dithering_fragment:Yg,dithering_pars_fragment:jg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Jg,shadowmap_vertex:Qg,shadowmask_pars_fragment:t0,skinbase_vertex:e0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:s0,specularmap_fragment:r0,specularmap_pars_fragment:o0,tonemapping_fragment:a0,tonemapping_pars_fragment:c0,transmission_fragment:l0,transmission_pars_fragment:u0,uv_pars_fragment:h0,uv_pars_vertex:f0,uv_vertex:d0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:_0,backgroundCube_frag:x0,cube_vert:v0,cube_frag:y0,depth_vert:M0,depth_frag:S0,distanceRGBA_vert:E0,distanceRGBA_frag:b0,equirect_vert:T0,equirect_frag:A0,linedashed_vert:w0,linedashed_frag:R0,meshbasic_vert:C0,meshbasic_frag:P0,meshlambert_vert:L0,meshlambert_frag:D0,meshmatcap_vert:I0,meshmatcap_frag:U0,meshnormal_vert:N0,meshnormal_frag:O0,meshphong_vert:F0,meshphong_frag:B0,meshphysical_vert:z0,meshphysical_frag:H0,meshtoon_vert:G0,meshtoon_frag:k0,points_vert:V0,points_frag:W0,shadow_vert:X0,shadow_frag:q0,sprite_vert:Y0,sprite_frag:j0},gt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Tn={basic:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:He([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:He([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:He([gt.points,gt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:He([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:He([gt.common,gt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:He([gt.sprite,gt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:He([gt.common,gt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:He([gt.lights,gt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Tn.physical={uniforms:He([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Vr={r:0,b:0,g:0};function $0(i,t,e,n,s,r,a){const o=new jt(0);let c=r===!0?0:1,l,u,f=null,h=0,p=null;function g(m,d){let v=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),v=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Zo)?(u===void 0&&(u=new ee(new Cn(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Us(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ie.getTransfer(_.colorSpace)!==re,(f!==_||h!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ee(new ta(2,2),new Oi({name:"BackgroundMaterial",uniforms:Us(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,d){m.getRGB(Vr,yf(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(o,c)},render:g}}function Z0(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function f(L,F,H,Z,J){let j=!1;if(a){const it=x(Z,H,F);l!==it&&(l=it,p(l.object)),j=d(L,Z,H,J),j&&v(L,Z,H,J)}else{const it=F.wireframe===!0;(l.geometry!==Z.id||l.program!==H.id||l.wireframe!==it)&&(l.geometry=Z.id,l.program=H.id,l.wireframe=it,j=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,P(L,F,H,Z),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,F,H){const Z=H.wireframe===!0;let J=o[L.id];J===void 0&&(J={},o[L.id]=J);let j=J[F.id];j===void 0&&(j={},J[F.id]=j);let it=j[Z];return it===void 0&&(it=m(h()),j[Z]=it),it}function m(L){const F=[],H=[],Z=[];for(let J=0;J<s;J++)F[J]=0,H[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:Z,object:L,attributes:{},index:null}}function d(L,F,H,Z){const J=l.attributes,j=F.attributes;let it=0;const nt=H.getAttributes();for(const _t in nt)if(nt[_t].location>=0){const st=J[_t];let vt=j[_t];if(vt===void 0&&(_t==="instanceMatrix"&&L.instanceMatrix&&(vt=L.instanceMatrix),_t==="instanceColor"&&L.instanceColor&&(vt=L.instanceColor)),st===void 0||st.attribute!==vt||vt&&st.data!==vt.data)return!0;it++}return l.attributesNum!==it||l.index!==Z}function v(L,F,H,Z){const J={},j=F.attributes;let it=0;const nt=H.getAttributes();for(const _t in nt)if(nt[_t].location>=0){let st=j[_t];st===void 0&&(_t==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),_t==="instanceColor"&&L.instanceColor&&(st=L.instanceColor));const vt={};vt.attribute=st,st&&st.data&&(vt.data=st.data),J[_t]=vt,it++}l.attributes=J,l.attributesNum=it,l.index=Z}function _(){const L=l.newAttributes;for(let F=0,H=L.length;F<H;F++)L[F]=0}function y(L){E(L,0)}function E(L,F){const H=l.newAttributes,Z=l.enabledAttributes,J=l.attributeDivisors;H[L]=1,Z[L]===0&&(i.enableVertexAttribArray(L),Z[L]=1),J[L]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),J[L]=F)}function T(){const L=l.newAttributes,F=l.enabledAttributes;for(let H=0,Z=F.length;H<Z;H++)F[H]!==L[H]&&(i.disableVertexAttribArray(H),F[H]=0)}function S(L,F,H,Z,J,j,it){it===!0?i.vertexAttribIPointer(L,F,H,J,j):i.vertexAttribPointer(L,F,H,Z,J,j)}function P(L,F,H,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const J=Z.attributes,j=H.getAttributes(),it=F.defaultAttributeValues;for(const nt in j){const _t=j[nt];if(_t.location>=0){let W=J[nt];if(W===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const st=W.normalized,vt=W.itemSize,wt=e.get(W);if(wt===void 0)continue;const $=wt.buffer,et=wt.type,mt=wt.bytesPerElement,St=n.isWebGL2===!0&&(et===i.INT||et===i.UNSIGNED_INT||W.gpuType===nf);if(W.isInterleavedBufferAttribute){const Nt=W.data,N=Nt.stride,pt=W.offset;if(Nt.isInstancedInterleavedBuffer){for(let Q=0;Q<_t.locationSize;Q++)E(_t.location+Q,Nt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Q=0;Q<_t.locationSize;Q++)y(_t.location+Q);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Q=0;Q<_t.locationSize;Q++)S(_t.location+Q,vt/_t.locationSize,et,st,N*mt,(pt+vt/_t.locationSize*Q)*mt,St)}else{if(W.isInstancedBufferAttribute){for(let Nt=0;Nt<_t.locationSize;Nt++)E(_t.location+Nt,W.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Nt=0;Nt<_t.locationSize;Nt++)y(_t.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Nt=0;Nt<_t.locationSize;Nt++)S(_t.location+Nt,vt/_t.locationSize,et,st,vt*mt,vt/_t.locationSize*Nt*mt,St)}}else if(it!==void 0){const st=it[nt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(_t.location,st);break;case 3:i.vertexAttrib3fv(_t.location,st);break;case 4:i.vertexAttrib4fv(_t.location,st);break;default:i.vertexAttrib1fv(_t.location,st)}}}}T()}function M(){U();for(const L in o){const F=o[L];for(const H in F){const Z=F[H];for(const J in Z)g(Z[J].object),delete Z[J];delete F[H]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const F=o[L.id];for(const H in F){const Z=F[H];for(const J in Z)g(Z[J].object),delete Z[J];delete F[H]}delete o[L.id]}function I(L){for(const F in o){const H=o[F];if(H[L.id]===void 0)continue;const Z=H[L.id];for(const J in Z)g(Z[J].object),delete Z[J];delete H[L.id]}}function U(){B(),u=!0,l!==c&&(l=c,p(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:U,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function K0(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),e.update(f,r,1)}function c(u,f,h){if(h===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,f,h),e.update(f,r,h)}function l(u,f,h){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=f[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function J0(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=a||t.has("OES_texture_float"),E=_&&y,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:T}}function Q0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new yn,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,_=v*4;let y=d.clippingState||null;c.value=y,y=u(g,h,_,p);for(let E=0;E!==_;++E)y[E]=e[E];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==x;++_,y+=4)a.copy(f[_]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function t_(i){let t=new WeakMap;function e(a,o){return o===Tc?a.mapping=Ls:o===Ac&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tc||o===Ac)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fm(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class bf extends Mf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ts=4,bu=[.125,.215,.35,.446,.526,.582],Ai=20,Na=new bf,Tu=new jt;let Oa=null,Fa=0,Ba=0;const Si=(1+Math.sqrt(5))/2,as=1/Si,Au=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Si,as),new w(0,Si,-as),new w(as,0,Si),new w(-as,0,Si),new w(Si,as,0),new w(-Si,as,0)];class Vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,Fa,Ba),t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:pr,format:Sn,colorSpace:Wn,depthBuffer:!1},s=wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e_(r)),this._blurMaterial=n_(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,n,s){const o=new qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Tu),u.toneMapping=ci,u.autoClear=!1;const p=new Qo({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new ee(new Cn,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Tu),x=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):v===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const _=this._cubeSize;Wr(s,v*_,d>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ls||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Na)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Au[(s-1)%Au.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ee(this._lodPlanes[s],l),h=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const d=[];let v=0;for(let S=0;S<Ai;++S){const P=S/x,M=Math.exp(-P*P/2);d.push(M),S===0?v+=M:S<m&&(v+=2*M)}for(let S=0;S<d.length;S++)d[S]=d[S]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const y=this._sizeLods[s],E=3*y*(s>_-Ts?s-_+Ts:0),T=4*(this._cubeSize-y);Wr(e,E,T,3*y,2*y),c.setRenderTarget(e),c.render(f,Na)}}function e_(i){const t=[],e=[],n=[];let s=i;const r=i-Ts+1+bu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ts?c=bu[a-i+Ts-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let T=0;T<p;T++){const S=T%3*2/3-1,P=T>2?0:-1,M=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];v.set(M,x*g*T),_.set(h,m*g*T);const b=[T,T,T,T,T,T];y.set(b,d*g*T)}const E=new ke;E.setAttribute("position",new Te(v,x)),E.setAttribute("uv",new Te(_,m)),E.setAttribute("faceIndex",new Te(y,d)),t.push(E),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wu(i,t,e){const n=new Ui(i,t,e);return n.texture.mapping=Zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function n_(i,t,e){const n=new Float32Array(Ai),s=new w(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ru(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Cu(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function i_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Tc||c===Ac,u=c===Ls||c===Ds;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Vo(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&s(f)){e===null&&(e=new Vo(i));const h=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function s_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r_(i,t,e,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,y=v.length;_<y;_+=3){const E=v[_+0],T=v[_+1],S=v[_+2];h.push(E,T,T,S,S,E)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const E=_+0,T=_+1,S=_+2;h.push(E,T,T,S,S,E)}}else return;const m=new(df(h)?vf:xf)(h,1);m.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function o_(i,t,e,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,g){i.drawElements(r,g,o,p*c),e.update(g,r,1)}function f(p,g,x){if(x===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,o,p*c,x),e.update(g,r,x)}function h(p,g,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let d=0;for(let v=0;v<x;v++)d+=g[v];e.update(d,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function a_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function c_(i,t){return i[0]-t[0]}function l_(i,t){return Math.abs(t[1])-Math.abs(i[1])}function u_(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new ne,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let x=r.get(u);if(x===void 0||x.count!==g){let L=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let P=0;v===!0&&(P=1),_===!0&&(P=2),y===!0&&(P=3);let M=u.attributes.position.count*P,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const I=new Float32Array(M*b*4*g),U=new gf(I,M,b,g);U.type=si,U.needsUpdate=!0;const B=P*4;for(let F=0;F<g;F++){const H=E[F],Z=T[F],J=S[F],j=M*b*4*F;for(let it=0;it<H.count;it++){const nt=it*B;v===!0&&(a.fromBufferAttribute(H,it),I[j+nt+0]=a.x,I[j+nt+1]=a.y,I[j+nt+2]=a.z,I[j+nt+3]=0),_===!0&&(a.fromBufferAttribute(Z,it),I[j+nt+4]=a.x,I[j+nt+5]=a.y,I[j+nt+6]=a.z,I[j+nt+7]=0),y===!0&&(a.fromBufferAttribute(J,it),I[j+nt+8]=a.x,I[j+nt+9]=a.y,I[j+nt+10]=a.z,I[j+nt+11]=J.itemSize===4?a.w:1)}}x={count:g,texture:U,size:new ut(M,b)},r.set(u,x),u.addEventListener("dispose",L)}let m=0;for(let v=0;v<h.length;v++)m+=h[v];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",d),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<p;_++){const y=g[_];y[0]=_,y[1]=h[_]}g.sort(l_);for(let _=0;_<8;_++)_<p&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(c_);const x=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let _=0;_<8;_++){const y=o[_],E=y[0],T=y[1];E!==Number.MAX_SAFE_INTEGER&&T?(x&&u.getAttribute("morphTarget"+_)!==x[E]&&u.setAttribute("morphTarget"+_,x[E]),m&&u.getAttribute("morphNormal"+_)!==m[E]&&u.setAttribute("morphNormal"+_,m[E]),s[_]=T,d+=T):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const v=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function h_(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Tf extends tn{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:Li,u!==Li&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Li&&(n=ii),n===void 0&&u===Is&&(n=Pi),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=c!==void 0?c:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Af=new tn,wf=new Tf(1,1);wf.compareFunction=ff;const Rf=new gf,Cf=new $p,Pf=new Sf,Pu=[],Lu=[],Du=new Float32Array(16),Iu=new Float32Array(9),Uu=new Float32Array(4);function Bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=Lu[t];e===void 0&&(e=new Int32Array(t),Lu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function f_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function d_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function p_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function m_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function g_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;Uu.set(n),i.uniformMatrix2fv(this.addr,!1,Uu),we(e,n)}}function __(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;Iu.set(n),i.uniformMatrix3fv(this.addr,!1,Iu),we(e,n)}}function x_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;Du.set(n),i.uniformMatrix4fv(this.addr,!1,Du),we(e,n)}}function v_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function M_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function S_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function E_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function b_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function T_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function A_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function w_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?wf:Af;e.setTexture2D(t||r,s)}function R_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cf,s)}function C_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pf,s)}function P_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rf,s)}function L_(i){switch(i){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return v_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return E_;case 36294:return b_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}function D_(i,t){i.uniform1fv(this.addr,t)}function I_(i,t){const e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function U_(i,t){const e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function N_(i,t){const e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function O_(i,t){const e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function F_(i,t){const e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function B_(i,t){const e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function z_(i,t){i.uniform1iv(this.addr,t)}function H_(i,t){i.uniform2iv(this.addr,t)}function G_(i,t){i.uniform3iv(this.addr,t)}function k_(i,t){i.uniform4iv(this.addr,t)}function V_(i,t){i.uniform1uiv(this.addr,t)}function W_(i,t){i.uniform2uiv(this.addr,t)}function X_(i,t){i.uniform3uiv(this.addr,t)}function q_(i,t){i.uniform4uiv(this.addr,t)}function Y_(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Af,r[a])}function j_(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cf,r[a])}function $_(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Pf,r[a])}function Z_(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rf,r[a])}function K_(i){switch(i){case 5126:return D_;case 35664:return I_;case 35665:return U_;case 35666:return N_;case 35674:return O_;case 35675:return F_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return H_;case 35668:case 35672:return G_;case 35669:case 35673:return k_;case 5125:return V_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}class J_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L_(e.type)}}class Q_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K_(e.type)}}class tx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Nu(i,t){i.seq.push(t),i.map[t.id]=t}function ex(i,t,e){const n=i.name,s=n.length;for(za.lastIndex=0;;){const r=za.exec(n),a=za.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Nu(e,l===void 0?new J_(o,i,t):new Q_(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new tx(o),Nu(e,f)),e=f}}}class Ro{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);ex(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ou(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const nx=37297;let ix=0;function sx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function rx(i){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(i);let n;switch(t===e?n="":t===Ho&&e===zo?n="LinearDisplayP3ToLinearSRGB":t===zo&&e===Ho&&(n="LinearSRGBToLinearDisplayP3"),i){case Wn:case Ko:return[n,"LinearTransferOETF"];case Ee:case tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sx(i.getShaderSource(t),a)}else return s}function ox(i,t){const e=rx(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ax(i,t){let e;switch(t){case xp:e="Linear";break;case vp:e="Reinhard";break;case yp:e="OptimizedCineon";break;case Jc:e="ACESFilmic";break;case Sp:e="AgX";break;case Mp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function lx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function ux(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function As(i){return i!==""}function Bu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(fx,px)}const dx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function px(i,t){let e=Vt[t];if(e===void 0){const n=dx.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dc(e)}const mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(i){return i.replace(mx,gx)}function gx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _x(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function xx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case Zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function yx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tf:t="ENVMAP_BLENDING_MULTIPLY";break;case gp:t="ENVMAP_BLENDING_MIX";break;case _p:t="ENVMAP_BLENDING_ADD";break}return t}function Mx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=_x(e),l=xx(e),u=vx(e),f=yx(e),h=Mx(e),p=e.isWebGL2?"":cx(e),g=lx(e),x=ux(r),m=s.createProgram();let d,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(As).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(As).join(`
`),v.length>0&&(v+=`
`)):(d=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),v=[p,Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ci?ax("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,ox("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),a=Dc(a),a=Bu(a,e),a=zu(a,e),o=Dc(o),o=Bu(o,e),o=zu(o,e),a=Hu(a),o=Hu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=_+d+a,E=_+v+o,T=Ou(s,s.VERTEX_SHADER,y),S=Ou(s,s.FRAGMENT_SHADER,E);s.attachShader(m,T),s.attachShader(m,S),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function P(U){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(S).trim();let H=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,S);else{const J=Fu(s,T,"vertex"),j=Fu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+J+`
`+j)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||F==="")&&(Z=!1);Z&&(U.diagnostics={runnable:H,programLog:B,vertexShader:{log:L,prefix:d},fragmentShader:{log:F,prefix:v}})}s.deleteShader(T),s.deleteShader(S),M=new Ro(s,m),b=hx(s,m)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,nx)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ix++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=S,this}let Ex=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tx(t),e.set(t,n)),n}}class Tx{constructor(t){this.id=Ex++,this.code=t,this.usedTimes=0}}function Ax(i,t,e,n,s,r,a){const o=new el,c=new bx,l=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,b,I,U,B){const L=U.fog,F=B.geometry,H=M.isMeshStandardMaterial?U.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),J=Z&&Z.mapping===Zo?Z.image.height:null,j=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,nt=it!==void 0?it.length:0;let _t=0;F.morphAttributes.position!==void 0&&(_t=1),F.morphAttributes.normal!==void 0&&(_t=2),F.morphAttributes.color!==void 0&&(_t=3);let W,st,vt,wt;if(j){const ge=Tn[j];W=ge.vertexShader,st=ge.fragmentShader}else W=M.vertexShader,st=M.fragmentShader,c.update(M),vt=c.getVertexShaderID(M),wt=c.getFragmentShaderID(M);const $=i.getRenderTarget(),et=B.isInstancedMesh===!0,mt=B.isBatchedMesh===!0,St=!!M.map,Nt=!!M.matcap,N=!!Z,pt=!!M.aoMap,Q=!!M.lightMap,ht=!!M.bumpMap,tt=!!M.normalMap,Ct=!!M.displacementMap,Mt=!!M.emissiveMap,R=!!M.metalnessMap,A=!!M.roughnessMap,G=M.anisotropy>0,ct=M.clearcoat>0,ot=M.iridescence>0,rt=M.sheen>0,Rt=M.transmission>0,xt=G&&!!M.anisotropyMap,bt=ct&&!!M.clearcoatMap,It=ct&&!!M.clearcoatNormalMap,Ht=ct&&!!M.clearcoatRoughnessMap,at=ot&&!!M.iridescenceMap,Qt=ot&&!!M.iridescenceThicknessMap,Wt=rt&&!!M.sheenColorMap,Bt=rt&&!!M.sheenRoughnessMap,Dt=!!M.specularMap,Et=!!M.specularColorMap,D=!!M.specularIntensityMap,ft=Rt&&!!M.transmissionMap,Pt=Rt&&!!M.thicknessMap,At=!!M.gradientMap,lt=!!M.alphaMap,O=M.alphaTest>0,dt=!!M.alphaHash,yt=!!M.extensions,Ot=!!F.attributes.uv1,Ut=!!F.attributes.uv2,$t=!!F.attributes.uv3;let Zt=ci;return M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Zt=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:st,defines:M.defines,customVertexShaderID:vt,customFragmentShaderID:wt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:mt,instancing:et,instancingColor:et&&B.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Wn,map:St,matcap:Nt,envMap:N,envMapMode:N&&Z.mapping,envMapCubeUVHeight:J,aoMap:pt,lightMap:Q,bumpMap:ht,normalMap:tt,displacementMap:h&&Ct,emissiveMap:Mt,normalMapObjectSpace:tt&&M.normalMapType===Up,normalMapTangentSpace:tt&&M.normalMapType===hf,metalnessMap:R,roughnessMap:A,anisotropy:G,anisotropyMap:xt,clearcoat:ct,clearcoatMap:bt,clearcoatNormalMap:It,clearcoatRoughnessMap:Ht,iridescence:ot,iridescenceMap:at,iridescenceThicknessMap:Qt,sheen:rt,sheenColorMap:Wt,sheenRoughnessMap:Bt,specularMap:Dt,specularColorMap:Et,specularIntensityMap:D,transmission:Rt,transmissionMap:ft,thicknessMap:Pt,gradientMap:At,opaque:M.transparent===!1&&M.blending===Cs,alphaMap:lt,alphaTest:O,alphaHash:dt,combine:M.combine,mapUv:St&&x(M.map.channel),aoMapUv:pt&&x(M.aoMap.channel),lightMapUv:Q&&x(M.lightMap.channel),bumpMapUv:ht&&x(M.bumpMap.channel),normalMapUv:tt&&x(M.normalMap.channel),displacementMapUv:Ct&&x(M.displacementMap.channel),emissiveMapUv:Mt&&x(M.emissiveMap.channel),metalnessMapUv:R&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:xt&&x(M.anisotropyMap.channel),clearcoatMapUv:bt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&x(M.sheenRoughnessMap.channel),specularMapUv:Dt&&x(M.specularMap.channel),specularColorMapUv:Et&&x(M.specularColorMap.channel),specularIntensityMapUv:D&&x(M.specularIntensityMap.channel),transmissionMapUv:ft&&x(M.transmissionMap.channel),thicknessMapUv:Pt&&x(M.thicknessMap.channel),alphaMapUv:lt&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(tt||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:Ut,vertexUv3s:$t,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(St||lt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:_t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:yt&&M.extensions.derivatives===!0,extensionFragDepth:yt&&M.extensions.fragDepth===!0,extensionDrawBuffers:yt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:yt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:yt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(b,M),_(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const b=g[M.type];let I;if(b){const U=Tn[b];I=cm.clone(U.uniforms)}else I=M.uniforms;return I}function E(M,b){let I;for(let U=0,B=l.length;U<B;U++){const L=l[U];if(L.cacheKey===b){I=L,++I.usedTimes;break}}return I===void 0&&(I=new Sx(i,b,M,r),l.push(I)),I}function T(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function S(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:S,programs:l,dispose:P}}function wx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Rx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ku(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,h,p,g,x,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function o(f,h,p,g,x,m){const d=a(f,h,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(f,h,p,g,x,m){const d=a(f,h,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(f,h){e.length>1&&e.sort(f||Rx),n.length>1&&n.sort(h||ku),s.length>1&&s.sort(h||ku)}function u(){for(let f=t,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Cx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Vu,i.set(n,[a])):s>=r.length?(a=new Vu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Px(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new jt};break;case"SpotLight":e={position:new w,direction:new w,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function Lx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dx=0;function Ix(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ux(i,t){const e=new Px,n=Lx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new w);const r=new w,a=new Jt,o=new Jt;function c(u,f){let h=0,p=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let x=0,m=0,d=0,v=0,_=0,y=0,E=0,T=0,S=0,P=0,M=0;u.sort(Ix);const b=f===!0?Math.PI:1;for(let U=0,B=u.length;U<B;U++){const L=u[U],F=L.color,H=L.intensity,Z=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*H*b,p+=F.g*H*b,g+=F.b*H*b;else if(L.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(L.sh.coefficients[j],H);M++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const it=L.shadow,nt=n.get(L);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,s.directionalShadow[x]=nt,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=L.shadow.matrix,y++}s.directional[x]=j,x++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(F).multiplyScalar(H*b),j.distance=Z,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,s.spot[d]=j;const it=L.shadow;if(L.map&&(s.spotLightMap[S]=L.map,S++,it.updateMatrices(L),L.castShadow&&P++),s.spotLightMatrix[d]=it.matrix,L.castShadow){const nt=n.get(L);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,s.spotShadow[d]=nt,s.spotShadowMap[d]=J,T++}d++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(F).multiplyScalar(H),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=j,v++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*b),j.distance=L.distance,j.decay=L.decay,L.castShadow){const it=L.shadow,nt=n.get(L);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,nt.shadowCameraNear=it.camera.near,nt.shadowCameraFar=it.camera.far,s.pointShadow[m]=nt,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,E++}s.point[m]=j,m++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(H*b),j.groundColor.copy(L.groundColor).multiplyScalar(H*b),s.hemi[_]=j,_++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_FLOAT_1,s.rectAreaLTC2=gt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=gt.LTC_HALF_1,s.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const I=s.hash;(I.directionalLength!==x||I.pointLength!==m||I.spotLength!==d||I.rectAreaLength!==v||I.hemiLength!==_||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==T||I.numSpotMaps!==S||I.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=v,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=T+S-P,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=M,I.directionalLength=x,I.pointLength=m,I.spotLength=d,I.rectAreaLength=v,I.hemiLength=_,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=T,I.numSpotMaps=S,I.numLightProbes=M,s.version=Dx++)}function l(u,f){let h=0,p=0,g=0,x=0,m=0;const d=f.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const y=u[v];if(y.isDirectionalLight){const E=s.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),h++}else if(y.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const E=s.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function Wu(i,t){const e=new Ux(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Nx(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Wu(i,t),e.set(r,[c])):a>=o.length?(c=new Wu(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ox extends Fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fx extends Fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
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
}`;function Hx(i,t,e){let n=new nl;const s=new ut,r=new ut,a=new ne,o=new Ox({depthPacking:Ip}),c=new Fx,l={},u=e.maxTextureSize,f={[wn]:Fe,[Fe]:wn,[cn]:cn},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Bx,fragmentShader:zx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ee(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let d=this.type;this.render=function(T,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ai),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=d!==Hn&&this.type===Hn,L=d===Hn&&this.type!==Hn;for(let F=0,H=T.length;F<H;F++){const Z=T[F],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const j=J.getFrameExtents();if(s.multiply(j),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,J.mapSize.y=r.y)),J.map===null||B===!0||L===!0){const nt=this.type!==Hn?{minFilter:Ge,magFilter:Ge}:{};J.map!==null&&J.map.dispose(),J.map=new Ui(s.x,s.y,nt),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const it=J.getViewportCount();for(let nt=0;nt<it;nt++){const _t=J.getViewport(nt);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),U.viewport(a),J.updateMatrices(Z,nt),n=J.getFrustum(),y(S,P,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Hn&&v(J,P),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,I)};function v(T,S){const P=t.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ui(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(S,null,P,h,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(S,null,P,p,x,null)}function _(T,S,P,M){let b=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)b=I;else if(b=P.isPointLight===!0?c:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=b.uuid,B=S.uuid;let L=l[U];L===void 0&&(L={},l[U]=L);let F=L[B];F===void 0&&(F=b.clone(),L[B]=F,S.addEventListener("dispose",E)),b=F}if(b.visible=S.visible,b.wireframe=S.wireframe,M===Hn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:f[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=i.properties.get(b);U.light=P}return b}function y(T,S,P,M,b){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const B=t.update(T),L=T.material;if(Array.isArray(L)){const F=B.groups;for(let H=0,Z=F.length;H<Z;H++){const J=F[H],j=L[J.materialIndex];if(j&&j.visible){const it=_(T,j,M,b);T.onBeforeShadow(i,T,S,P,B,it,J),i.renderBufferDirect(P,null,B,it,T,J),T.onAfterShadow(i,T,S,P,B,it,J)}}}else if(L.visible){const F=_(T,L,M,b);T.onBeforeShadow(i,T,S,P,B,F,null),i.renderBufferDirect(P,null,B,F,T,null),T.onAfterShadow(i,T,S,P,B,F,null)}}const U=T.children;for(let B=0,L=U.length;B<L;B++)y(U[B],S,P,M,b)}function E(T){T.target.removeEventListener("dispose",E);for(const P in l){const M=l[P],b=T.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function Gx(i,t,e){const n=e.isWebGL2;function s(){let O=!1;const dt=new ne;let yt=null;const Ot=new ne(0,0,0,0);return{setMask:function(Ut){yt!==Ut&&!O&&(i.colorMask(Ut,Ut,Ut,Ut),yt=Ut)},setLocked:function(Ut){O=Ut},setClear:function(Ut,$t,Zt,he,ge){ge===!0&&(Ut*=he,$t*=he,Zt*=he),dt.set(Ut,$t,Zt,he),Ot.equals(dt)===!1&&(i.clearColor(Ut,$t,Zt,he),Ot.copy(dt))},reset:function(){O=!1,yt=null,Ot.set(-1,0,0,0)}}}function r(){let O=!1,dt=null,yt=null,Ot=null;return{setTest:function(Ut){Ut?mt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Ut){dt!==Ut&&!O&&(i.depthMask(Ut),dt=Ut)},setFunc:function(Ut){if(yt!==Ut){switch(Ut){case lp:i.depthFunc(i.NEVER);break;case up:i.depthFunc(i.ALWAYS);break;case hp:i.depthFunc(i.LESS);break;case Fo:i.depthFunc(i.LEQUAL);break;case fp:i.depthFunc(i.EQUAL);break;case dp:i.depthFunc(i.GEQUAL);break;case pp:i.depthFunc(i.GREATER);break;case mp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Ut}},setLocked:function(Ut){O=Ut},setClear:function(Ut){Ot!==Ut&&(i.clearDepth(Ut),Ot=Ut)},reset:function(){O=!1,dt=null,yt=null,Ot=null}}}function a(){let O=!1,dt=null,yt=null,Ot=null,Ut=null,$t=null,Zt=null,he=null,ge=null;return{setTest:function(te){O||(te?mt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(te){dt!==te&&!O&&(i.stencilMask(te),dt=te)},setFunc:function(te,ve,bn){(yt!==te||Ot!==ve||Ut!==bn)&&(i.stencilFunc(te,ve,bn),yt=te,Ot=ve,Ut=bn)},setOp:function(te,ve,bn){($t!==te||Zt!==ve||he!==bn)&&(i.stencilOp(te,ve,bn),$t=te,Zt=ve,he=bn)},setLocked:function(te){O=te},setClear:function(te){ge!==te&&(i.clearStencil(te),ge=te)},reset:function(){O=!1,dt=null,yt=null,Ot=null,Ut=null,$t=null,Zt=null,he=null,ge=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,x=[],m=null,d=!1,v=null,_=null,y=null,E=null,T=null,S=null,P=null,M=new jt(0,0,0),b=0,I=!1,U=null,B=null,L=null,F=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(it)[1]),J=j>=1):it.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),J=j>=2);let nt=null,_t={};const W=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),vt=new ne().fromArray(W),wt=new ne().fromArray(st);function $(O,dt,yt,Ot){const Ut=new Uint8Array(4),$t=i.createTexture();i.bindTexture(O,$t),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<yt;Zt++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(dt,0,i.RGBA,1,1,Ot,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(dt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return $t}const et={};et[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),mt(i.DEPTH_TEST),c.setFunc(Fo),Mt(!1),R(Al),mt(i.CULL_FACE),tt(ai);function mt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function St(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Nt(O,dt){return p[O]!==dt?(i.bindFramebuffer(O,dt),p[O]=dt,n&&(O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=dt),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=dt)),!0):!1}function N(O,dt){let yt=x,Ot=!1;if(O)if(yt=g.get(dt),yt===void 0&&(yt=[],g.set(dt,yt)),O.isWebGLMultipleRenderTargets){const Ut=O.texture;if(yt.length!==Ut.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,Zt=Ut.length;$t<Zt;$t++)yt[$t]=i.COLOR_ATTACHMENT0+$t;yt.length=Ut.length,Ot=!0}}else yt[0]!==i.COLOR_ATTACHMENT0&&(yt[0]=i.COLOR_ATTACHMENT0,Ot=!0);else yt[0]!==i.BACK&&(yt[0]=i.BACK,Ot=!0);Ot&&(e.isWebGL2?i.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function pt(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const Q={[Ti]:i.FUNC_ADD,[jd]:i.FUNC_SUBTRACT,[$d]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[Pl]=i.MIN,Q[Ll]=i.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(Q[Pl]=O.MIN_EXT,Q[Ll]=O.MAX_EXT)}const ht={[Zd]:i.ZERO,[Kd]:i.ONE,[Jd]:i.SRC_COLOR,[Ec]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[np]:i.DST_COLOR,[tp]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[ep]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[op]:i.ONE_MINUS_CONSTANT_COLOR,[ap]:i.CONSTANT_ALPHA,[cp]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(O,dt,yt,Ot,Ut,$t,Zt,he,ge,te){if(O===ai){d===!0&&(St(i.BLEND),d=!1);return}if(d===!1&&(mt(i.BLEND),d=!0),O!==Yd){if(O!==v||te!==I){if((_!==Ti||T!==Ti)&&(i.blendEquation(i.FUNC_ADD),_=Ti,T=Ti),te)switch(O){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,E=null,S=null,P=null,M.set(0,0,0),b=0,v=O,I=te}return}Ut=Ut||dt,$t=$t||yt,Zt=Zt||Ot,(dt!==_||Ut!==T)&&(i.blendEquationSeparate(Q[dt],Q[Ut]),_=dt,T=Ut),(yt!==y||Ot!==E||$t!==S||Zt!==P)&&(i.blendFuncSeparate(ht[yt],ht[Ot],ht[$t],ht[Zt]),y=yt,E=Ot,S=$t,P=Zt),(he.equals(M)===!1||ge!==b)&&(i.blendColor(he.r,he.g,he.b,ge),M.copy(he),b=ge),v=O,I=!1}function Ct(O,dt){O.side===cn?St(i.CULL_FACE):mt(i.CULL_FACE);let yt=O.side===Fe;dt&&(yt=!yt),Mt(yt),O.blending===Cs&&O.transparent===!1?tt(ai):tt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),o.setMask(O.colorWrite);const Ot=O.stencilWrite;l.setTest(Ot),Ot&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),G(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(O){U!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),U=O)}function R(O){O!==Wd?(mt(i.CULL_FACE),O!==B&&(O===Al?i.cullFace(i.BACK):O===Xd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),B=O}function A(O){O!==L&&(J&&i.lineWidth(O),L=O)}function G(O,dt,yt){O?(mt(i.POLYGON_OFFSET_FILL),(F!==dt||H!==yt)&&(i.polygonOffset(dt,yt),F=dt,H=yt)):St(i.POLYGON_OFFSET_FILL)}function ct(O){O?mt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function ot(O){O===void 0&&(O=i.TEXTURE0+Z-1),nt!==O&&(i.activeTexture(O),nt=O)}function rt(O,dt,yt){yt===void 0&&(nt===null?yt=i.TEXTURE0+Z-1:yt=nt);let Ot=_t[yt];Ot===void 0&&(Ot={type:void 0,texture:void 0},_t[yt]=Ot),(Ot.type!==O||Ot.texture!==dt)&&(nt!==yt&&(i.activeTexture(yt),nt=yt),i.bindTexture(O,dt||et[O]),Ot.type=O,Ot.texture=dt)}function Rt(){const O=_t[nt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function xt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function It(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(O){vt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),vt.copy(O))}function ft(O){wt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),wt.copy(O))}function Pt(O,dt){let yt=f.get(dt);yt===void 0&&(yt=new WeakMap,f.set(dt,yt));let Ot=yt.get(O);Ot===void 0&&(Ot=i.getUniformBlockIndex(dt,O.name),yt.set(O,Ot))}function At(O,dt){const Ot=f.get(dt).get(O);u.get(dt)!==Ot&&(i.uniformBlockBinding(dt,Ot,O.__bindingPointIndex),u.set(dt,Ot))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,_t={},p={},g=new WeakMap,x=[],m=null,d=!1,v=null,_=null,y=null,E=null,T=null,S=null,P=null,M=new jt(0,0,0),b=0,I=!1,U=null,B=null,L=null,F=null,H=null,vt.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:mt,disable:St,bindFramebuffer:Nt,drawBuffers:N,useProgram:pt,setBlending:tt,setMaterial:Ct,setFlipSided:Mt,setCullFace:R,setLineWidth:A,setPolygonOffset:G,setScissorTest:ct,activeTexture:ot,bindTexture:rt,unbindTexture:Rt,compressedTexImage2D:xt,compressedTexImage3D:bt,texImage2D:Dt,texImage3D:Et,updateUBOMapping:Pt,uniformBlockBinding:At,texStorage2D:Wt,texStorage3D:Bt,texSubImage2D:It,texSubImage3D:Ht,compressedTexSubImage2D:at,compressedTexSubImage3D:Qt,scissor:D,viewport:ft,reset:lt}}function kx(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,A){return p?new OffscreenCanvas(R,A):ko("canvas")}function x(R,A,G,ct){let ot=1;if((R.width>ct||R.height>ct)&&(ot=ct/Math.max(R.width,R.height)),ot<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const rt=A?Lc:Math.floor,Rt=rt(ot*R.width),xt=rt(ot*R.height);f===void 0&&(f=g(Rt,xt));const bt=G?g(Rt,xt):f;return bt.width=Rt,bt.height=xt,bt.getContext("2d").drawImage(R,0,0,Rt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Rt+"x"+xt+")."),bt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return au(R.width)&&au(R.height)}function d(R){return o?!1:R.wrapS!==Mn||R.wrapT!==Mn||R.minFilter!==Ge&&R.minFilter!==on}function v(R,A){return R.generateMipmaps&&A&&R.minFilter!==Ge&&R.minFilter!==on}function _(R){i.generateMipmap(R)}function y(R,A,G,ct,ot=!1){if(o===!1)return A;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt=A;if(A===i.RED&&(G===i.FLOAT&&(rt=i.R32F),G===i.HALF_FLOAT&&(rt=i.R16F),G===i.UNSIGNED_BYTE&&(rt=i.R8)),A===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(rt=i.R8UI),G===i.UNSIGNED_SHORT&&(rt=i.R16UI),G===i.UNSIGNED_INT&&(rt=i.R32UI),G===i.BYTE&&(rt=i.R8I),G===i.SHORT&&(rt=i.R16I),G===i.INT&&(rt=i.R32I)),A===i.RG&&(G===i.FLOAT&&(rt=i.RG32F),G===i.HALF_FLOAT&&(rt=i.RG16F),G===i.UNSIGNED_BYTE&&(rt=i.RG8)),A===i.RGBA){const Rt=ot?Bo:ie.getTransfer(ct);G===i.FLOAT&&(rt=i.RGBA32F),G===i.HALF_FLOAT&&(rt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(rt=Rt===re?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function E(R,A,G){return v(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==Ge&&R.minFilter!==on?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){return R===Ge||R===Dl||R===ha?i.NEAREST:i.LINEAR}function S(R){const A=R.target;A.removeEventListener("dispose",S),M(A),A.isVideoTexture&&u.delete(A)}function P(R){const A=R.target;A.removeEventListener("dispose",P),I(A)}function M(R){const A=n.get(R);if(A.__webglInit===void 0)return;const G=R.source,ct=h.get(G);if(ct){const ot=ct[A.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&b(R),Object.keys(ct).length===0&&h.delete(G)}n.remove(R)}function b(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const G=R.source,ct=h.get(G);delete ct[A.__cacheKey],a.memory.textures--}function I(R){const A=R.texture,G=n.get(R),ct=n.get(A);if(ct.__webglTexture!==void 0&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(G.__webglFramebuffer[ot]))for(let rt=0;rt<G.__webglFramebuffer[ot].length;rt++)i.deleteFramebuffer(G.__webglFramebuffer[ot][rt]);else i.deleteFramebuffer(G.__webglFramebuffer[ot]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[ot])}else{if(Array.isArray(G.__webglFramebuffer))for(let ot=0;ot<G.__webglFramebuffer.length;ot++)i.deleteFramebuffer(G.__webglFramebuffer[ot]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ot=0;ot<G.__webglColorRenderbuffer.length;ot++)G.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[ot]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ot=0,rt=A.length;ot<rt;ot++){const Rt=n.get(A[ot]);Rt.__webglTexture&&(i.deleteTexture(Rt.__webglTexture),a.memory.textures--),n.remove(A[ot])}n.remove(A),n.remove(R)}let U=0;function B(){U=0}function L(){const R=U;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function F(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function H(R,A){const G=n.get(R);if(R.isVideoTexture&&Ct(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(G,R,A);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+A)}function Z(R,A){const G=n.get(R);if(R.version>0&&G.__version!==R.version){vt(G,R,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+A)}function J(R,A){const G=n.get(R);if(R.version>0&&G.__version!==R.version){vt(G,R,A);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+A)}function j(R,A){const G=n.get(R);if(R.version>0&&G.__version!==R.version){wt(G,R,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+A)}const it={[wc]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Rc]:i.MIRRORED_REPEAT},nt={[Ge]:i.NEAREST,[Dl]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Ep]:i.LINEAR_MIPMAP_NEAREST,[dr]:i.LINEAR_MIPMAP_LINEAR},_t={[Np]:i.NEVER,[Gp]:i.ALWAYS,[Op]:i.LESS,[ff]:i.LEQUAL,[Fp]:i.EQUAL,[Hp]:i.GEQUAL,[Bp]:i.GREATER,[zp]:i.NOTEQUAL};function W(R,A,G){if(G?(i.texParameteri(R,i.TEXTURE_WRAP_S,it[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,it[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,it[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,nt[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,nt[A.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Mn||A.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(A.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==Ge&&A.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_t[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ct=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ge||A.minFilter!==ha&&A.minFilter!==dr||A.type===si&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===pr&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(R,ct.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function st(R,A){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",S));const ct=A.source;let ot=h.get(ct);ot===void 0&&(ot={},h.set(ct,ot));const rt=F(A);if(rt!==R.__cacheKey){ot[rt]===void 0&&(ot[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ot[rt].usedTimes++;const Rt=ot[R.__cacheKey];Rt!==void 0&&(ot[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(A)),R.__cacheKey=rt,R.__webglTexture=ot[rt].texture}return G}function vt(R,A,G){let ct=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ct=i.TEXTURE_3D);const ot=st(R,A),rt=A.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+G);const Rt=n.get(rt);if(rt.version!==Rt.__version||ot===!0){e.activeTexture(i.TEXTURE0+G);const xt=ie.getPrimaries(ie.workingColorSpace),bt=A.colorSpace===ln?null:ie.getPrimaries(A.colorSpace),It=A.colorSpace===ln||xt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Ht=d(A)&&m(A.image)===!1;let at=x(A.image,Ht,!1,s.maxTextureSize);at=Mt(A,at);const Qt=m(at)||o,Wt=r.convert(A.format,A.colorSpace);let Bt=r.convert(A.type),Dt=y(A.internalFormat,Wt,Bt,A.colorSpace,A.isVideoTexture);W(ct,A,Qt);let Et;const D=A.mipmaps,ft=o&&A.isVideoTexture!==!0&&Dt!==lf,Pt=Rt.__version===void 0||ot===!0,At=E(A,at,Qt);if(A.isDepthTexture)Dt=i.DEPTH_COMPONENT,o?A.type===si?Dt=i.DEPTH_COMPONENT32F:A.type===ii?Dt=i.DEPTH_COMPONENT24:A.type===Pi?Dt=i.DEPTH24_STENCIL8:Dt=i.DEPTH_COMPONENT16:A.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Li&&Dt===i.DEPTH_COMPONENT&&A.type!==Qc&&A.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ii,Bt=r.convert(A.type)),A.format===Is&&Dt===i.DEPTH_COMPONENT&&(Dt=i.DEPTH_STENCIL,A.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Pi,Bt=r.convert(A.type))),Pt&&(ft?e.texStorage2D(i.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,Wt,Bt,null));else if(A.isDataTexture)if(D.length>0&&Qt){ft&&Pt&&e.texStorage2D(i.TEXTURE_2D,At,Dt,D[0].width,D[0].height);for(let lt=0,O=D.length;lt<O;lt++)Et=D[lt],ft?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Et.width,Et.height,Wt,Bt,Et.data):e.texImage2D(i.TEXTURE_2D,lt,Dt,Et.width,Et.height,0,Wt,Bt,Et.data);A.generateMipmaps=!1}else ft?(Pt&&e.texStorage2D(i.TEXTURE_2D,At,Dt,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Wt,Bt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,Wt,Bt,at.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ft&&Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Dt,D[0].width,D[0].height,at.depth);for(let lt=0,O=D.length;lt<O;lt++)Et=D[lt],A.format!==Sn?Wt!==null?ft?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Et.width,Et.height,at.depth,Wt,Et.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Dt,Et.width,Et.height,at.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,Et.width,Et.height,at.depth,Wt,Bt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Dt,Et.width,Et.height,at.depth,0,Wt,Bt,Et.data)}else{ft&&Pt&&e.texStorage2D(i.TEXTURE_2D,At,Dt,D[0].width,D[0].height);for(let lt=0,O=D.length;lt<O;lt++)Et=D[lt],A.format!==Sn?Wt!==null?ft?e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,Et.width,Et.height,Wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Dt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Et.width,Et.height,Wt,Bt,Et.data):e.texImage2D(i.TEXTURE_2D,lt,Dt,Et.width,Et.height,0,Wt,Bt,Et.data)}else if(A.isDataArrayTexture)ft?(Pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Dt,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Wt,Bt,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,Wt,Bt,at.data);else if(A.isData3DTexture)ft?(Pt&&e.texStorage3D(i.TEXTURE_3D,At,Dt,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Wt,Bt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,Wt,Bt,at.data);else if(A.isFramebufferTexture){if(Pt)if(ft)e.texStorage2D(i.TEXTURE_2D,At,Dt,at.width,at.height);else{let lt=at.width,O=at.height;for(let dt=0;dt<At;dt++)e.texImage2D(i.TEXTURE_2D,dt,Dt,lt,O,0,Wt,Bt,null),lt>>=1,O>>=1}}else if(D.length>0&&Qt){ft&&Pt&&e.texStorage2D(i.TEXTURE_2D,At,Dt,D[0].width,D[0].height);for(let lt=0,O=D.length;lt<O;lt++)Et=D[lt],ft?e.texSubImage2D(i.TEXTURE_2D,lt,0,0,Wt,Bt,Et):e.texImage2D(i.TEXTURE_2D,lt,Dt,Wt,Bt,Et);A.generateMipmaps=!1}else ft?(Pt&&e.texStorage2D(i.TEXTURE_2D,At,Dt,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,Bt,at)):e.texImage2D(i.TEXTURE_2D,0,Dt,Wt,Bt,at);v(A,Qt)&&_(ct),Rt.__version=rt.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function wt(R,A,G){if(A.image.length!==6)return;const ct=st(R,A),ot=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const rt=n.get(ot);if(ot.version!==rt.__version||ct===!0){e.activeTexture(i.TEXTURE0+G);const Rt=ie.getPrimaries(ie.workingColorSpace),xt=A.colorSpace===ln?null:ie.getPrimaries(A.colorSpace),bt=A.colorSpace===ln||Rt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const It=A.isCompressedTexture||A.image[0].isCompressedTexture,Ht=A.image[0]&&A.image[0].isDataTexture,at=[];for(let lt=0;lt<6;lt++)!It&&!Ht?at[lt]=x(A.image[lt],!1,!0,s.maxCubemapSize):at[lt]=Ht?A.image[lt].image:A.image[lt],at[lt]=Mt(A,at[lt]);const Qt=at[0],Wt=m(Qt)||o,Bt=r.convert(A.format,A.colorSpace),Dt=r.convert(A.type),Et=y(A.internalFormat,Bt,Dt,A.colorSpace),D=o&&A.isVideoTexture!==!0,ft=rt.__version===void 0||ct===!0;let Pt=E(A,Qt,Wt);W(i.TEXTURE_CUBE_MAP,A,Wt);let At;if(It){D&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Et,Qt.width,Qt.height);for(let lt=0;lt<6;lt++){At=at[lt].mipmaps;for(let O=0;O<At.length;O++){const dt=At[O];A.format!==Sn?Bt!==null?D?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,O,0,0,dt.width,dt.height,Bt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,O,Et,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,O,0,0,dt.width,dt.height,Bt,Dt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,O,Et,dt.width,dt.height,0,Bt,Dt,dt.data)}}}else{At=A.mipmaps,D&&ft&&(At.length>0&&Pt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Et,at[0].width,at[0].height));for(let lt=0;lt<6;lt++)if(Ht){D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,at[lt].width,at[lt].height,Bt,Dt,at[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Et,at[lt].width,at[lt].height,0,Bt,Dt,at[lt].data);for(let O=0;O<At.length;O++){const yt=At[O].image[lt].image;D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,O+1,0,0,yt.width,yt.height,Bt,Dt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,O+1,Et,yt.width,yt.height,0,Bt,Dt,yt.data)}}else{D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,Dt,at[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Et,Bt,Dt,at[lt]);for(let O=0;O<At.length;O++){const dt=At[O];D?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,O+1,0,0,Bt,Dt,dt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,O+1,Et,Bt,Dt,dt.image[lt])}}}v(A,Wt)&&_(i.TEXTURE_CUBE_MAP),rt.__version=ot.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function $(R,A,G,ct,ot,rt){const Rt=r.convert(G.format,G.colorSpace),xt=r.convert(G.type),bt=y(G.internalFormat,Rt,xt,G.colorSpace);if(!n.get(A).__hasExternalTextures){const Ht=Math.max(1,A.width>>rt),at=Math.max(1,A.height>>rt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,rt,bt,Ht,at,A.depth,0,Rt,xt,null):e.texImage2D(ot,rt,bt,Ht,at,0,Rt,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),tt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,n.get(G).__webglTexture,0,ht(A)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,n.get(G).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(R,A,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ct=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(G||tt(A)){const ot=A.depthTexture;ot&&ot.isDepthTexture&&(ot.type===si?ct=i.DEPTH_COMPONENT32F:ot.type===ii&&(ct=i.DEPTH_COMPONENT24));const rt=ht(A);tt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,ct,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ct,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ct,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ct=ht(A);G&&tt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,A.width,A.height):tt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ct=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ot=0;ot<ct.length;ot++){const rt=ct[ot],Rt=r.convert(rt.format,rt.colorSpace),xt=r.convert(rt.type),bt=y(rt.internalFormat,Rt,xt,rt.colorSpace),It=ht(A);G&&tt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,bt,A.width,A.height):tt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,bt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,bt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);const ct=n.get(A.depthTexture).__webglTexture,ot=ht(A);if(A.depthTexture.format===Li)tt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(A.depthTexture.format===Is)tt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function St(R){const A=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");mt(A.__webglFramebuffer,R)}else if(G){A.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ct]),A.__webglDepthbuffer[ct]=i.createRenderbuffer(),et(A.__webglDepthbuffer[ct],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),et(A.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(R,A,G){const ct=n.get(R);A!==void 0&&$(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&St(R)}function N(R){const A=R.texture,G=n.get(R),ct=n.get(A);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=A.version,a.memory.textures++);const ot=R.isWebGLCubeRenderTarget===!0,rt=R.isWebGLMultipleRenderTargets===!0,Rt=m(R)||o;if(ot){G.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(o&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[xt]=[];for(let bt=0;bt<A.mipmaps.length;bt++)G.__webglFramebuffer[xt][bt]=i.createFramebuffer()}else G.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let xt=0;xt<A.mipmaps.length;xt++)G.__webglFramebuffer[xt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(rt)if(s.drawBuffers){const xt=R.texture;for(let bt=0,It=xt.length;bt<It;bt++){const Ht=n.get(xt[bt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&tt(R)===!1){const xt=rt?A:[A];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let bt=0;bt<xt.length;bt++){const It=xt[bt];G.__webglColorRenderbuffer[bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[bt]);const Ht=r.convert(It.format,It.colorSpace),at=r.convert(It.type),Qt=y(It.internalFormat,Ht,at,It.colorSpace,R.isXRRenderTarget===!0),Wt=ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Qt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,G.__webglColorRenderbuffer[bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),et(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),W(i.TEXTURE_CUBE_MAP,A,Rt);for(let xt=0;xt<6;xt++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let bt=0;bt<A.mipmaps.length;bt++)$(G.__webglFramebuffer[xt][bt],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt);else $(G.__webglFramebuffer[xt],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);v(A,Rt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const xt=R.texture;for(let bt=0,It=xt.length;bt<It;bt++){const Ht=xt[bt],at=n.get(Ht);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),W(i.TEXTURE_2D,Ht,Rt),$(G.__webglFramebuffer,R,Ht,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,0),v(Ht,Rt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?xt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,ct.__webglTexture),W(xt,A,Rt),o&&A.mipmaps&&A.mipmaps.length>0)for(let bt=0;bt<A.mipmaps.length;bt++)$(G.__webglFramebuffer[bt],R,A,i.COLOR_ATTACHMENT0,xt,bt);else $(G.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,xt,0);v(A,Rt)&&_(xt),e.unbindTexture()}R.depthBuffer&&St(R)}function pt(R){const A=m(R)||o,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ct=0,ot=G.length;ct<ot;ct++){const rt=G[ct];if(v(rt,A)){const Rt=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(rt).__webglTexture;e.bindTexture(Rt,xt),_(Rt),e.unbindTexture()}}}function Q(R){if(o&&R.samples>0&&tt(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,ct=R.height;let ot=i.COLOR_BUFFER_BIT;const rt=[],Rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(R),bt=R.isWebGLMultipleRenderTargets===!0;if(bt)for(let It=0;It<A.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let It=0;It<A.length;It++){rt.push(i.COLOR_ATTACHMENT0+It),R.depthBuffer&&rt.push(Rt);const Ht=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(Ht===!1&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),bt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[It]),Ht===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Rt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Rt])),bt){const at=n.get(A[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,G,ct,0,0,G,ct,ot,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),bt)for(let It=0;It<A.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,xt.__webglColorRenderbuffer[It]);const Ht=n.get(A[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function ht(R){return Math.min(s.maxSamples,R.samples)}function tt(R){const A=n.get(R);return o&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(R){const A=a.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function Mt(R,A){const G=R.colorSpace,ct=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Cc||G!==Wn&&G!==ln&&(ie.getTransfer(G)===re?o===!1?t.has("EXT_sRGB")===!0&&ct===Sn?(R.format=Cc,R.minFilter=on,R.generateMipmaps=!1):A=pf.sRGBToLinear(A):(ct!==Sn||ot!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=Nt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=$,this.useMultisampledRTT=tt}function Vx(i,t,e){const n=e.isWebGL2;function s(r,a=ln){let o;const c=ie.getTransfer(a);if(r===li)return i.UNSIGNED_BYTE;if(r===sf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===rf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===bp)return i.BYTE;if(r===Tp)return i.SHORT;if(r===Qc)return i.UNSIGNED_SHORT;if(r===nf)return i.INT;if(r===ii)return i.UNSIGNED_INT;if(r===si)return i.FLOAT;if(r===pr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Ap)return i.ALPHA;if(r===Sn)return i.RGBA;if(r===wp)return i.LUMINANCE;if(r===Rp)return i.LUMINANCE_ALPHA;if(r===Li)return i.DEPTH_COMPONENT;if(r===Is)return i.DEPTH_STENCIL;if(r===Cc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Cp)return i.RED;if(r===of)return i.RED_INTEGER;if(r===Pp)return i.RG;if(r===af)return i.RG_INTEGER;if(r===cf)return i.RGBA_INTEGER;if(r===fa||r===da||r===pa||r===ma)if(c===re)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ma)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Il||r===Ul||r===Nl||r===Ol)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Il)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fl||r===Bl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Fl)return c===re?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zl||r===Hl||r===Gl||r===kl||r===Vl||r===Wl||r===Xl||r===ql||r===Yl||r===jl||r===$l||r===Zl||r===Kl||r===Jl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===zl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ql)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$l)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Zl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jl)return c===re?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ga||r===Ql||r===tu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ga)return c===re?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ql)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lp||r===eu||r===nu||r===iu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ga)return o.COMPRESSED_RED_RGTC1_EXT;if(r===eu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===iu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Wx extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Le extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xx={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class qx extends Gi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null;const x=e.getContextAttributes();let m=null,d=null;const v=[],_=[],y=new ut;let E=null;const T=new qe;T.layers.enable(1),T.viewport=new ne;const S=new qe;S.layers.enable(2),S.viewport=new ne;const P=[T,S],M=new Wx;M.layers.enable(1),M.layers.enable(2);let b=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let st=v[W];return st===void 0&&(st=new Ha,v[W]=st),st.getTargetRaySpace()},this.getControllerGrip=function(W){let st=v[W];return st===void 0&&(st=new Ha,v[W]=st),st.getGripSpace()},this.getHand=function(W){let st=v[W];return st===void 0&&(st=new Ha,v[W]=st),st.getHandSpace()};function U(W){const st=_.indexOf(W.inputSource);if(st===-1)return;const vt=v[st];vt!==void 0&&(vt.update(W.inputSource,W.frame,l||a),vt.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",L);for(let W=0;W<v.length;W++){const st=_[W];st!==null&&(_[W]=null,v[W].disconnect(st))}b=null,I=null,t.setRenderTarget(m),p=null,h=null,f=null,s=null,d=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Ui(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let st=null,vt=null,wt=null;x.depth&&(wt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=x.stencil?Is:Li,vt=x.stencil?Pi:ii);const $={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=new XRWebGLBinding(s,e),h=f.createProjectionLayer($),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),d=new Ui(h.textureWidth,h.textureHeight,{format:Sn,type:li,depthTexture:new Tf(h.textureWidth,h.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const et=t.properties.get(d);et.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_t.setContext(s),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(W){for(let st=0;st<W.removed.length;st++){const vt=W.removed[st],wt=_.indexOf(vt);wt>=0&&(_[wt]=null,v[wt].disconnect(vt))}for(let st=0;st<W.added.length;st++){const vt=W.added[st];let wt=_.indexOf(vt);if(wt===-1){for(let et=0;et<v.length;et++)if(et>=_.length){_.push(vt),wt=et;break}else if(_[et]===null){_[et]=vt,wt=et;break}if(wt===-1)break}const $=v[wt];$&&$.connect(vt)}}const F=new w,H=new w;function Z(W,st,vt){F.setFromMatrixPosition(st.matrixWorld),H.setFromMatrixPosition(vt.matrixWorld);const wt=F.distanceTo(H),$=st.projectionMatrix.elements,et=vt.projectionMatrix.elements,mt=$[14]/($[10]-1),St=$[14]/($[10]+1),Nt=($[9]+1)/$[5],N=($[9]-1)/$[5],pt=($[8]-1)/$[0],Q=(et[8]+1)/et[0],ht=mt*pt,tt=mt*Q,Ct=wt/(-pt+Q),Mt=Ct*-pt;st.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Mt),W.translateZ(Ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const R=mt+Ct,A=St+Ct,G=ht-Mt,ct=tt+(wt-Mt),ot=Nt*St/A*R,rt=N*St/A*R;W.projectionMatrix.makePerspective(G,ct,ot,rt,R,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function J(W,st){st===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(st.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;M.near=S.near=T.near=W.near,M.far=S.far=T.far=W.far,(b!==M.near||I!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,I=M.far);const st=W.parent,vt=M.cameras;J(M,st);for(let wt=0;wt<vt.length;wt++)J(vt[wt],st);vt.length===2?Z(M,T,S):M.projectionMatrix.copy(T.projectionMatrix),j(W,M,st)};function j(W,st,vt){vt===null?W.matrix.copy(st.matrixWorld):(W.matrix.copy(vt.matrixWorld),W.matrix.invert(),W.matrix.multiply(st.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(st.projectionMatrix),W.projectionMatrixInverse.copy(st.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Pc*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let it=null;function nt(W,st){if(u=st.getViewerPose(l||a),g=st,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let wt=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,wt=!0);for(let $=0;$<vt.length;$++){const et=vt[$];let mt=null;if(p!==null)mt=p.getViewport(et);else{const Nt=f.getViewSubImage(h,et);mt=Nt.viewport,$===0&&(t.setRenderTargetTextures(d,Nt.colorTexture,h.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(d))}let St=P[$];St===void 0&&(St=new qe,St.layers.enable($),St.viewport=new ne,P[$]=St),St.matrix.fromArray(et.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(et.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(mt.x,mt.y,mt.width,mt.height),$===0&&(M.matrix.copy(St.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),wt===!0&&M.cameras.push(St)}}for(let vt=0;vt<v.length;vt++){const wt=_[vt],$=v[vt];wt!==null&&$!==void 0&&$.update(wt,st,l||a)}it&&it(W,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const _t=new Ef;_t.setAnimationLoop(nt),this.setAnimationLoop=function(W){it=W},this.dispose=function(){}}}function Yx(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,yf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,_):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Fe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Fe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Fe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(v,E);const T=t.render.frame;r[v.id]!==T&&(h(v),r[v.id]=T)}function u(v){const _=f();v.__bindingPointIndex=_;const y=i.createBuffer(),E=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,S=y.length;T<S;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,b=P.length;M<b;M++){const I=P[M];if(p(I,T,M,E)===!0){const U=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let F=0;F<B.length;F++){const H=B[F],Z=x(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+L,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,_,y,E){const T=v.value,S=_+"_"+y;if(E[S]===void 0)return typeof T=="number"||typeof T=="boolean"?E[S]=T:E[S]=T.clone(),!0;{const P=E[S];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return E[S]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const _=v.uniforms;let y=0;const E=16;for(let S=0,P=_.length;S<P;S++){const M=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,I=M.length;b<I;b++){const U=M[b],B=Array.isArray(U.value)?U.value:[U.value];for(let L=0,F=B.length;L<F;L++){const H=B[L],Z=x(H),J=y%E;J!==0&&E-J<Z.boundary&&(y+=E-J),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Z.storage}}}const T=y%E;return T>0&&(y+=E-T),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class sl{constructor(t={}){const{canvas:e=Wp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=ci,this.toneMappingExposure=1;const _=this;let y=!1,E=0,T=0,S=null,P=-1,M=null;const b=new ne,I=new ne;let U=null;const B=new jt(0);let L=0,F=e.width,H=e.height,Z=1,J=null,j=null;const it=new ne(0,0,F,H),nt=new ne(0,0,F,H);let _t=!1;const W=new nl;let st=!1,vt=!1,wt=null;const $=new Jt,et=new ut,mt=new w,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return S===null?Z:1}let N=n;function pt(C,k){for(let X=0;X<C.length;X++){const Y=C[X],V=e.getContext(Y,k);if(V!==null)return V}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",dt,!1),N===null){const k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),N=pt(k,C),N===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,ht,tt,Ct,Mt,R,A,G,ct,ot,rt,Rt,xt,bt,It,Ht,at,Qt,Wt,Bt,Dt,Et,D,ft;function Pt(){Q=new s_(N),ht=new J0(N,Q,t),Q.init(ht),Et=new Vx(N,Q,ht),tt=new Gx(N,Q,ht),Ct=new a_(N),Mt=new wx,R=new kx(N,Q,tt,Mt,ht,Et,Ct),A=new t_(_),G=new i_(_),ct=new mm(N,ht),D=new Z0(N,Q,ct,ht),ot=new r_(N,ct,Ct,D),rt=new h_(N,ot,ct,Ct),Wt=new u_(N,ht,R),Ht=new Q0(Mt),Rt=new Ax(_,A,G,Q,ht,D,Ht),xt=new Yx(_,Mt),bt=new Cx,It=new Nx(Q,ht),Qt=new $0(_,A,G,tt,rt,h,c),at=new Hx(_,rt,ht),ft=new jx(N,Ct,ht,tt),Bt=new K0(N,Q,Ct,ht),Dt=new o_(N,Q,Ct,ht),Ct.programs=Rt.programs,_.capabilities=ht,_.extensions=Q,_.properties=Mt,_.renderLists=bt,_.shadowMap=at,_.state=tt,_.info=Ct}Pt();const At=new qx(_,N);this.xr=At,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(F,H,!1))},this.getSize=function(C){return C.set(F,H)},this.setSize=function(C,k,X=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,H=k,e.width=Math.floor(C*Z),e.height=Math.floor(k*Z),X===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(F*Z,H*Z).floor()},this.setDrawingBufferSize=function(C,k,X){F=C,H=k,Z=X,e.width=Math.floor(C*X),e.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,k,X,Y){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,k,X,Y),tt.viewport(b.copy(it).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(nt)},this.setScissor=function(C,k,X,Y){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,k,X,Y),tt.scissor(I.copy(nt).multiplyScalar(Z).floor())},this.getScissorTest=function(){return _t},this.setScissorTest=function(C){tt.setScissorTest(_t=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(C=!0,k=!0,X=!0){let Y=0;if(C){let V=!1;if(S!==null){const Tt=S.texture.format;V=Tt===cf||Tt===af||Tt===of}if(V){const Tt=S.texture.type,Lt=Tt===li||Tt===ii||Tt===Qc||Tt===Pi||Tt===sf||Tt===rf,Ft=Qt.getClearColor(),zt=Qt.getClearAlpha(),Xt=Ft.r,Gt=Ft.g,kt=Ft.b;Lt?(p[0]=Xt,p[1]=Gt,p[2]=kt,p[3]=zt,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Xt,g[1]=Gt,g[2]=kt,g[3]=zt,N.clearBufferiv(N.COLOR,0,g))}else Y|=N.COLOR_BUFFER_BIT}k&&(Y|=N.DEPTH_BUFFER_BIT),X&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),bt.dispose(),It.dispose(),Mt.dispose(),A.dispose(),G.dispose(),rt.dispose(),D.dispose(),ft.dispose(),Rt.dispose(),At.dispose(),At.removeEventListener("sessionstart",ge),At.removeEventListener("sessionend",te),wt&&(wt.dispose(),wt=null),ve.stop()};function lt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Ct.autoReset,k=at.enabled,X=at.autoUpdate,Y=at.needsUpdate,V=at.type;Pt(),Ct.autoReset=C,at.enabled=k,at.autoUpdate=X,at.needsUpdate=Y,at.type=V}function dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function yt(C){const k=C.target;k.removeEventListener("dispose",yt),Ot(k)}function Ot(C){Ut(C),Mt.remove(C)}function Ut(C){const k=Mt.get(C).programs;k!==void 0&&(k.forEach(function(X){Rt.releaseProgram(X)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,Y,V,Tt){k===null&&(k=St);const Lt=V.isMesh&&V.matrixWorld.determinant()<0,Ft=Hd(C,k,X,Y,V);tt.setMaterial(Y,Lt);let zt=X.index,Xt=1;if(Y.wireframe===!0){if(zt=ot.getWireframeAttribute(X),zt===void 0)return;Xt=2}const Gt=X.drawRange,kt=X.attributes.position;let _e=Gt.start*Xt,Ze=(Gt.start+Gt.count)*Xt;Tt!==null&&(_e=Math.max(_e,Tt.start*Xt),Ze=Math.min(Ze,(Tt.start+Tt.count)*Xt)),zt!==null?(_e=Math.max(_e,0),Ze=Math.min(Ze,zt.count)):kt!=null&&(_e=Math.max(_e,0),Ze=Math.min(Ze,kt.count));const Re=Ze-_e;if(Re<0||Re===1/0)return;D.setup(V,Y,Ft,X,zt);let Ln,le=Bt;if(zt!==null&&(Ln=ct.get(zt),le=Dt,le.setIndex(Ln)),V.isMesh)Y.wireframe===!0?(tt.setLineWidth(Y.wireframeLinewidth*Nt()),le.setMode(N.LINES)):le.setMode(N.TRIANGLES);else if(V.isLine){let Yt=Y.linewidth;Yt===void 0&&(Yt=1),tt.setLineWidth(Yt*Nt()),V.isLineSegments?le.setMode(N.LINES):V.isLineLoop?le.setMode(N.LINE_LOOP):le.setMode(N.LINE_STRIP)}else V.isPoints?le.setMode(N.POINTS):V.isSprite&&le.setMode(N.TRIANGLES);if(V.isBatchedMesh)le.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)le.renderInstances(_e,Re,V.count);else if(X.isInstancedBufferGeometry){const Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,aa=Math.min(X.instanceCount,Yt);le.renderInstances(_e,Re,aa)}else le.render(_e,Re)};function $t(C,k,X){C.transparent===!0&&C.side===cn&&C.forceSinglePass===!1?(C.side=Fe,C.needsUpdate=!0,Sr(C,k,X),C.side=wn,C.needsUpdate=!0,Sr(C,k,X),C.side=cn):Sr(C,k,X)}this.compile=function(C,k,X=null){X===null&&(X=C),m=It.get(X),m.init(),v.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),C!==X&&C.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(_._useLegacyLights);const Y=new Set;return C.traverse(function(V){const Tt=V.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Ft=Tt[Lt];$t(Ft,X,V),Y.add(Ft)}else $t(Tt,X,V),Y.add(Tt)}),v.pop(),m=null,Y},this.compileAsync=function(C,k,X=null){const Y=this.compile(C,k,X);return new Promise(V=>{function Tt(){if(Y.forEach(function(Lt){Mt.get(Lt).currentProgram.isReady()&&Y.delete(Lt)}),Y.size===0){V(C);return}setTimeout(Tt,10)}Q.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Zt=null;function he(C){Zt&&Zt(C)}function ge(){ve.stop()}function te(){ve.start()}const ve=new Ef;ve.setAnimationLoop(he),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(C){Zt=C,At.setAnimationLoop(C),C===null?ve.stop():ve.start()},At.addEventListener("sessionstart",ge),At.addEventListener("sessionend",te),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(k),k=At.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,k,S),m=It.get(C,v.length),m.init(),v.push(m),$.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix($),vt=this.localClippingEnabled,st=Ht.init(this.clippingPlanes,vt),x=bt.get(C,d.length),x.init(),d.push(x),bn(C,k,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(J,j),this.info.render.frame++,st===!0&&Ht.beginShadows();const X=m.state.shadowsArray;if(at.render(X,C,k),st===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qt.render(x,C),m.setupLights(_._useLegacyLights),k.isArrayCamera){const Y=k.cameras;for(let V=0,Tt=Y.length;V<Tt;V++){const Lt=Y[V];yl(x,C,Lt,Lt.viewport)}}else yl(x,C,k);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(_,C,k),D.resetDefaultState(),P=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function bn(C,k,X,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){Y&&mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Lt=rt.update(C),Ft=C.material;Ft.visible&&x.push(C,Lt,Ft,X,mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Lt=rt.update(C),Ft=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),mt.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),mt.copy(Lt.boundingSphere.center)),mt.applyMatrix4(C.matrixWorld).applyMatrix4($)),Array.isArray(Ft)){const zt=Lt.groups;for(let Xt=0,Gt=zt.length;Xt<Gt;Xt++){const kt=zt[Xt],_e=Ft[kt.materialIndex];_e&&_e.visible&&x.push(C,Lt,_e,X,mt.z,kt)}}else Ft.visible&&x.push(C,Lt,Ft,X,mt.z,null)}}const Tt=C.children;for(let Lt=0,Ft=Tt.length;Lt<Ft;Lt++)bn(Tt[Lt],k,X,Y)}function yl(C,k,X,Y){const V=C.opaque,Tt=C.transmissive,Lt=C.transparent;m.setupLightsView(X),st===!0&&Ht.setGlobalState(_.clippingPlanes,X),Tt.length>0&&zd(V,Tt,k,X),Y&&tt.viewport(b.copy(Y)),V.length>0&&Mr(V,k,X),Tt.length>0&&Mr(Tt,k,X),Lt.length>0&&Mr(Lt,k,X),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function zd(C,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Tt=ht.isWebGL2;wt===null&&(wt=new Ui(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?pr:li,minFilter:dr,samples:Tt?4:0})),_.getDrawingBufferSize(et),Tt?wt.setSize(et.x,et.y):wt.setSize(Lc(et.x),Lc(et.y));const Lt=_.getRenderTarget();_.setRenderTarget(wt),_.getClearColor(B),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Ft=_.toneMapping;_.toneMapping=ci,Mr(C,X,Y),R.updateMultisampleRenderTarget(wt),R.updateRenderTargetMipmap(wt);let zt=!1;for(let Xt=0,Gt=k.length;Xt<Gt;Xt++){const kt=k[Xt],_e=kt.object,Ze=kt.geometry,Re=kt.material,Ln=kt.group;if(Re.side===cn&&_e.layers.test(Y.layers)){const le=Re.side;Re.side=Fe,Re.needsUpdate=!0,Ml(_e,X,Y,Ze,Re,Ln),Re.side=le,Re.needsUpdate=!0,zt=!0}}zt===!0&&(R.updateMultisampleRenderTarget(wt),R.updateRenderTargetMipmap(wt)),_.setRenderTarget(Lt),_.setClearColor(B,L),_.toneMapping=Ft}function Mr(C,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let V=0,Tt=C.length;V<Tt;V++){const Lt=C[V],Ft=Lt.object,zt=Lt.geometry,Xt=Y===null?Lt.material:Y,Gt=Lt.group;Ft.layers.test(X.layers)&&Ml(Ft,k,X,zt,Xt,Gt)}}function Ml(C,k,X,Y,V,Tt){C.onBeforeRender(_,k,X,Y,V,Tt),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(_,k,X,Y,C,Tt),V.transparent===!0&&V.side===cn&&V.forceSinglePass===!1?(V.side=Fe,V.needsUpdate=!0,_.renderBufferDirect(X,k,Y,V,C,Tt),V.side=wn,V.needsUpdate=!0,_.renderBufferDirect(X,k,Y,V,C,Tt),V.side=cn):_.renderBufferDirect(X,k,Y,V,C,Tt),C.onAfterRender(_,k,X,Y,V,Tt)}function Sr(C,k,X){k.isScene!==!0&&(k=St);const Y=Mt.get(C),V=m.state.lights,Tt=m.state.shadowsArray,Lt=V.state.version,Ft=Rt.getParameters(C,V.state,Tt,k,X),zt=Rt.getProgramCacheKey(Ft);let Xt=Y.programs;Y.environment=C.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(C.isMeshStandardMaterial?G:A).get(C.envMap||Y.environment),Xt===void 0&&(C.addEventListener("dispose",yt),Xt=new Map,Y.programs=Xt);let Gt=Xt.get(zt);if(Gt!==void 0){if(Y.currentProgram===Gt&&Y.lightsStateVersion===Lt)return El(C,Ft),Gt}else Ft.uniforms=Rt.getUniforms(C),C.onBuild(X,Ft,_),C.onBeforeCompile(Ft,_),Gt=Rt.acquireProgram(Ft,zt),Xt.set(zt,Gt),Y.uniforms=Ft.uniforms;const kt=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=Ht.uniform),El(C,Ft),Y.needsLights=kd(C),Y.lightsStateVersion=Lt,Y.needsLights&&(kt.ambientLightColor.value=V.state.ambient,kt.lightProbe.value=V.state.probe,kt.directionalLights.value=V.state.directional,kt.directionalLightShadows.value=V.state.directionalShadow,kt.spotLights.value=V.state.spot,kt.spotLightShadows.value=V.state.spotShadow,kt.rectAreaLights.value=V.state.rectArea,kt.ltc_1.value=V.state.rectAreaLTC1,kt.ltc_2.value=V.state.rectAreaLTC2,kt.pointLights.value=V.state.point,kt.pointLightShadows.value=V.state.pointShadow,kt.hemisphereLights.value=V.state.hemi,kt.directionalShadowMap.value=V.state.directionalShadowMap,kt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,kt.spotShadowMap.value=V.state.spotShadowMap,kt.spotLightMatrix.value=V.state.spotLightMatrix,kt.spotLightMap.value=V.state.spotLightMap,kt.pointShadowMap.value=V.state.pointShadowMap,kt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Gt,Y.uniformsList=null,Gt}function Sl(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Ro.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function El(C,k){const X=Mt.get(C);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Hd(C,k,X,Y,V){k.isScene!==!0&&(k=St),R.resetTextureUnits();const Tt=k.fog,Lt=Y.isMeshStandardMaterial?k.environment:null,Ft=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Wn,zt=(Y.isMeshStandardMaterial?G:A).get(Y.envMap||Lt),Xt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!X.morphAttributes.position,_e=!!X.morphAttributes.normal,Ze=!!X.morphAttributes.color;let Re=ci;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Re=_.toneMapping);const Ln=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=Ln!==void 0?Ln.length:0,Yt=Mt.get(Y),aa=m.state.lights;if(st===!0&&(vt===!0||C!==M)){const en=C===M&&Y.id===P;Ht.setState(Y,C,en)}let fe=!1;Y.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==aa.state.version||Yt.outputColorSpace!==Ft||V.isBatchedMesh&&Yt.batching===!1||!V.isBatchedMesh&&Yt.batching===!0||V.isInstancedMesh&&Yt.instancing===!1||!V.isInstancedMesh&&Yt.instancing===!0||V.isSkinnedMesh&&Yt.skinning===!1||!V.isSkinnedMesh&&Yt.skinning===!0||V.isInstancedMesh&&Yt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Yt.instancingColor===!1&&V.instanceColor!==null||Yt.envMap!==zt||Y.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ht.numPlanes||Yt.numIntersection!==Ht.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==Gt||Yt.morphTargets!==kt||Yt.morphNormals!==_e||Yt.morphColors!==Ze||Yt.toneMapping!==Re||ht.isWebGL2===!0&&Yt.morphTargetsCount!==le)&&(fe=!0):(fe=!0,Yt.__version=Y.version);let fi=Yt.currentProgram;fe===!0&&(fi=Sr(Y,k,V));let bl=!1,Hs=!1,ca=!1;const Ue=fi.getUniforms(),di=Yt.uniforms;if(tt.useProgram(fi.program)&&(bl=!0,Hs=!0,ca=!0),Y.id!==P&&(P=Y.id,Hs=!0),bl||M!==C){Ue.setValue(N,"projectionMatrix",C.projectionMatrix),Ue.setValue(N,"viewMatrix",C.matrixWorldInverse);const en=Ue.map.cameraPosition;en!==void 0&&en.setValue(N,mt.setFromMatrixPosition(C.matrixWorld)),ht.logarithmicDepthBuffer&&Ue.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ue.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Hs=!0,ca=!0)}if(V.isSkinnedMesh){Ue.setOptional(N,V,"bindMatrix"),Ue.setOptional(N,V,"bindMatrixInverse");const en=V.skeleton;en&&(ht.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ue.setValue(N,"boneTexture",en.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ue.setOptional(N,V,"batchingTexture"),Ue.setValue(N,"batchingTexture",V._matricesTexture,R));const la=X.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0&&ht.isWebGL2===!0)&&Wt.update(V,X,fi),(Hs||Yt.receiveShadow!==V.receiveShadow)&&(Yt.receiveShadow=V.receiveShadow,Ue.setValue(N,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(di.envMap.value=zt,di.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Hs&&(Ue.setValue(N,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&Gd(di,ca),Tt&&Y.fog===!0&&xt.refreshFogUniforms(di,Tt),xt.refreshMaterialUniforms(di,Y,Z,H,wt),Ro.upload(N,Sl(Yt),di,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ro.upload(N,Sl(Yt),di,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ue.setValue(N,"center",V.center),Ue.setValue(N,"modelViewMatrix",V.modelViewMatrix),Ue.setValue(N,"normalMatrix",V.normalMatrix),Ue.setValue(N,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const en=Y.uniformsGroups;for(let ua=0,Vd=en.length;ua<Vd;ua++)if(ht.isWebGL2){const Tl=en[ua];ft.update(Tl,fi),ft.bind(Tl,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Gd(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function kd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,k,X){Mt.get(C.texture).__webglTexture=k,Mt.get(C.depthTexture).__webglTexture=X;const Y=Mt.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const X=Mt.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){S=C,E=k,T=X;let Y=!0,V=null,Tt=!1,Lt=!1;if(C){const zt=Mt.get(C);zt.__useDefaultFramebuffer!==void 0?(tt.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1):zt.__webglFramebuffer===void 0?R.setupRenderTarget(C):zt.__hasExternalTextures&&R.rebindTextures(C,Mt.get(C.texture).__webglTexture,Mt.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Lt=!0);const Gt=Mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?V=Gt[k][X]:V=Gt[k],Tt=!0):ht.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?V=Mt.get(C).__webglMultisampledFramebuffer:Array.isArray(Gt)?V=Gt[X]:V=Gt,b.copy(C.viewport),I.copy(C.scissor),U=C.scissorTest}else b.copy(it).multiplyScalar(Z).floor(),I.copy(nt).multiplyScalar(Z).floor(),U=_t;if(tt.bindFramebuffer(N.FRAMEBUFFER,V)&&ht.drawBuffers&&Y&&tt.drawBuffers(C,V),tt.viewport(b),tt.scissor(I),tt.setScissorTest(U),Tt){const zt=Mt.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,zt.__webglTexture,X)}else if(Lt){const zt=Mt.get(C.texture),Xt=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.__webglTexture,X||0,Xt)}P=-1},this.readRenderTargetPixels=function(C,k,X,Y,V,Tt,Lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){tt.bindFramebuffer(N.FRAMEBUFFER,Ft);try{const zt=C.texture,Xt=zt.format,Gt=zt.type;if(Xt!==Sn&&Et.convert(Xt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Gt===pr&&(Q.has("EXT_color_buffer_half_float")||ht.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Gt!==li&&Et.convert(Gt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===si&&(ht.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&X>=0&&X<=C.height-V&&N.readPixels(k,X,Y,V,Et.convert(Xt),Et.convert(Gt),Tt)}finally{const zt=S!==null?Mt.get(S).__webglFramebuffer:null;tt.bindFramebuffer(N.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(C,k,X=0){const Y=Math.pow(2,-X),V=Math.floor(k.image.width*Y),Tt=Math.floor(k.image.height*Y);R.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,C.x,C.y,V,Tt),tt.unbindTexture()},this.copyTextureToTexture=function(C,k,X,Y=0){const V=k.image.width,Tt=k.image.height,Lt=Et.convert(X.format),Ft=Et.convert(X.type);R.setTexture2D(X,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment),k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Y,C.x,C.y,V,Tt,Lt,Ft,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Y,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Lt,k.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,Y,C.x,C.y,Lt,Ft,k.image),Y===0&&X.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X,Y,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=C.max.x-C.min.x+1,Lt=C.max.y-C.min.y+1,Ft=C.max.z-C.min.z+1,zt=Et.convert(Y.format),Xt=Et.convert(Y.type);let Gt;if(Y.isData3DTexture)R.setTexture3D(Y,0),Gt=N.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Gt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const kt=N.getParameter(N.UNPACK_ROW_LENGTH),_e=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ze=N.getParameter(N.UNPACK_SKIP_PIXELS),Re=N.getParameter(N.UNPACK_SKIP_ROWS),Ln=N.getParameter(N.UNPACK_SKIP_IMAGES),le=X.isCompressedTexture?X.mipmaps[V]:X.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,le.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,C.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,C.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?N.texSubImage3D(Gt,V,k.x,k.y,k.z,Tt,Lt,Ft,zt,Xt,le.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Gt,V,k.x,k.y,k.z,Tt,Lt,Ft,zt,le.data)):N.texSubImage3D(Gt,V,k.x,k.y,k.z,Tt,Lt,Ft,zt,Xt,le),N.pixelStorei(N.UNPACK_ROW_LENGTH,kt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ln),V===0&&Y.generateMipmaps&&N.generateMipmap(Gt),tt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),tt.unbindTexture()},this.resetState=function(){E=0,T=0,S=null,tt.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===tl?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Ko?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?Di:uf}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Di?Ee:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class $x extends sl{}$x.prototype.isWebGL1Renderer=!0;class rl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ol extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Xu extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cs=new Jt,qu=new Jt,Xr=[],Yu=new se,Zx=new Jt,qs=new ee,Ys=new ki;class Kx extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new se),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Yu.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Yu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Ys.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),t.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),qu.multiplyMatrices(n,cs),qs.matrixWorld=qu,qs.raycast(t,Xr);for(let a=0,o=Xr.length;a<o;a++){const c=Xr[a];c.instanceId=r,c.object=this,e.push(c)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xu(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class al extends Fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ju=new w,$u=new w,Zu=new Jt,Ga=new Os,qr=new ki;class Jx extends De{constructor(t=new ke,e=new al){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ju.fromBufferAttribute(e,s-1),$u.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ju.distanceTo($u);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,t.ray.intersectsSphere(qr)===!1)return;Zu.copy(s).invert(),Ga.copy(t.ray).applyMatrix4(Zu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new w,u=new w,f=new w,h=new w,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let _=d,y=v-1;_<y;_+=p){const E=g.getX(_),T=g.getX(_+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,T),Ga.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(h);P<t.near||P>t.far||e.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=d,y=v-1;_<y;_+=p){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Ga.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(h);T<t.near||T>t.far||e.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ku=new w,Ju=new w;class Lf extends Jx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ku.fromBufferAttribute(e,s),Ju.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ku.distanceTo(Ju);t.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ut:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],r=[],a=[],o=new w,c=new Jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Pe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Pe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cl extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new ut,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qx extends cl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ll(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,p=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,p*=u,s(a,o,h,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Yr=new w,ka=new ll,Va=new ll,Wa=new ll;class Df extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Yr.subVectors(s[0],s[1]).add(s[0]),l=Yr);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ka.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),Va.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),Wa.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Va.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Wa.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(ka.calc(c),Va.calc(c),Wa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function tv(i,t){const e=1-i;return e*e*t}function ev(i,t){return 2*(1-i)*i*t}function nv(i,t){return i*i*t}function rr(i,t,e,n){return tv(i,t)+ev(i,e)+nv(i,n)}function iv(i,t){const e=1-i;return e*e*e*t}function sv(i,t){const e=1-i;return 3*e*e*i*t}function rv(i,t){return 3*(1-i)*i*i*t}function ov(i,t){return i*i*i*t}function or(i,t,e,n,s){return iv(i,t)+sv(i,e)+rv(i,n)+ov(i,s)}class If extends Pn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class av extends Pn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,s.x,r.x,a.x,o.x),or(t,s.y,r.y,a.y,o.y),or(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uf extends Pn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cv extends Pn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends Pn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends Pn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y),rr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ff extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Qu(o,c.x,l.x,u.x,f.x),Qu(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Wo=Object.freeze({__proto__:null,ArcCurve:Qx,CatmullRomCurve3:Df,CubicBezierCurve:If,CubicBezierCurve3:av,EllipseCurve:cl,LineCurve:Uf,LineCurve3:cv,QuadraticBezierCurve:Nf,QuadraticBezierCurve3:Of,SplineCurve:Ff});class lv extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Wo[s.type]().fromJSON(s))}return this}}class Ic extends lv{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uf(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Nf(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new If(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ff(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new cl(t,e,n,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class na extends ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],p=[];let g=0;const x=[],m=n/2;let d=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new pe(f,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(p,2));function v(){const y=new w,E=new w;let T=0;const S=(e-t)/n;for(let P=0;P<=r;P++){const M=[],b=P/r,I=b*(e-t)+t;for(let U=0;U<=s;U++){const B=U/s,L=B*c+o,F=Math.sin(L),H=Math.cos(L);E.x=I*F,E.y=-b*n+m,E.z=I*H,f.push(E.x,E.y,E.z),y.set(F,S,H).normalize(),h.push(y.x,y.y,y.z),p.push(B,1-b),M.push(g++)}x.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const b=x[M][P],I=x[M+1][P],U=x[M+1][P+1],B=x[M][P+1];u.push(b,I,B),u.push(I,U,B),T+=6}l.addGroup(d,T,0),d+=T}function _(y){const E=g,T=new ut,S=new w;let P=0;const M=y===!0?t:e,b=y===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),g++;const I=g;for(let U=0;U<=s;U++){const L=U/s*c+o,F=Math.cos(L),H=Math.sin(L);S.x=M*H,S.y=m*b,S.z=M*F,f.push(S.x,S.y,S.z),h.push(0,b,0),T.x=F*.5+.5,T.y=H*.5*b+.5,p.push(T.x,T.y),g++}for(let U=0;U<s;U++){const B=E+U,L=I+U;y===!0?u.push(L,L+1,B):u.push(L+1,L,B),P+=3}l.addGroup(d,P,y===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bf extends Ic{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ic().fromJSON(s))}return this}}const uv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=zf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,f,h,p;if(n&&(r=mv(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)f=i[g],h=i[g+1],f<o&&(o=f),h<c&&(c=h),f>l&&(l=f),h>u&&(u=h);p=Math.max(l-o,u-c),p=p!==0?32767/p:0}return mr(r,a,e,o,c,p,0),a}};function zf(i,t,e,n,s){let r,a;if(s===Av(i,t,e,n)>0)for(r=t;r<e;r+=n)a=th(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=th(r,i[r],i[r+1],a);return a&&ia(a,a.next)&&(_r(a),a=a.next),a}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ia(e,e.next)||ue(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&yv(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?fv(i,n,s,r):hv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),_r(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=dv(Fi(i),t,e),mr(i,t,e,n,s,r,2)):a===2&&pv(i,t,e,n,s,r):mr(Fi(i),t,e,n,s,r,1);break}}}function hv(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<c?o<l?o:l:c<l?c:l,h=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&ws(s,o,r,c,a,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fv(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ue(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,f=r.y,h=a.y,p=o<c?o<l?o:l:c<l?c:l,g=u<f?u<h?u:h:f<h?f:h,x=o>c?o>l?o:l:c>l?c:l,m=u>f?u>h?u:h:f>h?f:h,d=Uc(p,g,t,e,n),v=Uc(x,m,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=d&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ws(o,u,c,f,l,h,_.x,_.y)&&ue(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ws(o,u,c,f,l,h,y.x,y.y)&&ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ws(o,u,c,f,l,h,_.x,_.y)&&ue(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ws(o,u,c,f,l,h,y.x,y.y)&&ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function dv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ia(s,r)&&Hf(s,n,n.next,r)&&gr(s,r)&&gr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),_r(n),_r(n.next),n=i=r),n=n.next}while(n!==i);return Fi(n)}function pv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ev(a,o)){let c=Gf(a,o);a=Fi(a,a.next),c=Fi(c,c.next),mr(a,t,e,n,s,r,0),mr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function mv(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=zf(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Sv(l));for(s.sort(gv),r=0;r<s.length;r++)e=_v(s[r],e);return e}function gv(i,t){return i.x-t.x}function _v(i,t){const e=xv(i,t);if(!e)return t;const n=Gf(e,i);return Fi(n,n.next),Fi(e,e.next)}function xv(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ws(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),gr(e,i)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&vv(s,e)))&&(s=e,u=f)),e=e.next;while(e!==o);return s}function vv(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function yv(i,t,e,n){let s=i;do s.z===0&&(s.z=Uc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mv(s)}function Mv(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Uc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ws(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ev(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bv(i,t)&&(gr(i,t)&&gr(t,i)&&Tv(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||ia(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ia(i,t){return i.x===t.x&&i.y===t.y}function Hf(i,t,e,n){const s=$r(ue(i,t,e)),r=$r(ue(i,t,n)),a=$r(ue(e,n,i)),o=$r(ue(e,n,t));return!!(s!==r&&a!==o||s===0&&jr(i,e,t)||r===0&&jr(i,n,t)||a===0&&jr(e,i,n)||o===0&&jr(e,t,n))}function jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $r(i){return i>0?1:i<0?-1:0}function bv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gr(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function Tv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gf(i,t){const e=new Nc(i.i,i.x,i.y),n=new Nc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function th(i,t,e,n){const s=new Nc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Av(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ar{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ar.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];eh(t),nh(n,t);let a=t.length;e.forEach(eh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,nh(n,e[c]);const o=uv.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function eh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ul extends ke{constructor(t=new Bf([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:wv;let _,y=!1,E,T,S,P;d&&(_=d.getSpacedPoints(u),y=!0,h=!1,E=d.computeFrenetFrames(u,!1),T=new w,S=new w,P=new w),h||(m=0,p=0,g=0,x=0);const M=o.extractPoints(l);let b=M.shape;const I=M.holes;if(!ar.isClockWise(b)){b=b.reverse();for(let N=0,pt=I.length;N<pt;N++){const Q=I[N];ar.isClockWise(Q)&&(I[N]=Q.reverse())}}const B=ar.triangulateShape(b,I),L=b;for(let N=0,pt=I.length;N<pt;N++){const Q=I[N];b=b.concat(Q)}function F(N,pt,Q){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(pt,Q)}const H=b.length,Z=B.length;function J(N,pt,Q){let ht,tt,Ct;const Mt=N.x-pt.x,R=N.y-pt.y,A=Q.x-N.x,G=Q.y-N.y,ct=Mt*Mt+R*R,ot=Mt*G-R*A;if(Math.abs(ot)>Number.EPSILON){const rt=Math.sqrt(ct),Rt=Math.sqrt(A*A+G*G),xt=pt.x-R/rt,bt=pt.y+Mt/rt,It=Q.x-G/Rt,Ht=Q.y+A/Rt,at=((It-xt)*G-(Ht-bt)*A)/(Mt*G-R*A);ht=xt+Mt*at-N.x,tt=bt+R*at-N.y;const Qt=ht*ht+tt*tt;if(Qt<=2)return new ut(ht,tt);Ct=Math.sqrt(Qt/2)}else{let rt=!1;Mt>Number.EPSILON?A>Number.EPSILON&&(rt=!0):Mt<-Number.EPSILON?A<-Number.EPSILON&&(rt=!0):Math.sign(R)===Math.sign(G)&&(rt=!0),rt?(ht=-R,tt=Mt,Ct=Math.sqrt(ct)):(ht=Mt,tt=R,Ct=Math.sqrt(ct/2))}return new ut(ht/Ct,tt/Ct)}const j=[];for(let N=0,pt=L.length,Q=pt-1,ht=N+1;N<pt;N++,Q++,ht++)Q===pt&&(Q=0),ht===pt&&(ht=0),j[N]=J(L[N],L[Q],L[ht]);const it=[];let nt,_t=j.concat();for(let N=0,pt=I.length;N<pt;N++){const Q=I[N];nt=[];for(let ht=0,tt=Q.length,Ct=tt-1,Mt=ht+1;ht<tt;ht++,Ct++,Mt++)Ct===tt&&(Ct=0),Mt===tt&&(Mt=0),nt[ht]=J(Q[ht],Q[Ct],Q[Mt]);it.push(nt),_t=_t.concat(nt)}for(let N=0;N<m;N++){const pt=N/m,Q=p*Math.cos(pt*Math.PI/2),ht=g*Math.sin(pt*Math.PI/2)+x;for(let tt=0,Ct=L.length;tt<Ct;tt++){const Mt=F(L[tt],j[tt],ht);$(Mt.x,Mt.y,-Q)}for(let tt=0,Ct=I.length;tt<Ct;tt++){const Mt=I[tt];nt=it[tt];for(let R=0,A=Mt.length;R<A;R++){const G=F(Mt[R],nt[R],ht);$(G.x,G.y,-Q)}}}const W=g+x;for(let N=0;N<H;N++){const pt=h?F(b[N],_t[N],W):b[N];y?(S.copy(E.normals[0]).multiplyScalar(pt.x),T.copy(E.binormals[0]).multiplyScalar(pt.y),P.copy(_[0]).add(S).add(T),$(P.x,P.y,P.z)):$(pt.x,pt.y,0)}for(let N=1;N<=u;N++)for(let pt=0;pt<H;pt++){const Q=h?F(b[pt],_t[pt],W):b[pt];y?(S.copy(E.normals[N]).multiplyScalar(Q.x),T.copy(E.binormals[N]).multiplyScalar(Q.y),P.copy(_[N]).add(S).add(T),$(P.x,P.y,P.z)):$(Q.x,Q.y,f/u*N)}for(let N=m-1;N>=0;N--){const pt=N/m,Q=p*Math.cos(pt*Math.PI/2),ht=g*Math.sin(pt*Math.PI/2)+x;for(let tt=0,Ct=L.length;tt<Ct;tt++){const Mt=F(L[tt],j[tt],ht);$(Mt.x,Mt.y,f+Q)}for(let tt=0,Ct=I.length;tt<Ct;tt++){const Mt=I[tt];nt=it[tt];for(let R=0,A=Mt.length;R<A;R++){const G=F(Mt[R],nt[R],ht);y?$(G.x,G.y+_[u-1].y,_[u-1].x+Q):$(G.x,G.y,f+Q)}}}st(),vt();function st(){const N=s.length/3;if(h){let pt=0,Q=H*pt;for(let ht=0;ht<Z;ht++){const tt=B[ht];et(tt[2]+Q,tt[1]+Q,tt[0]+Q)}pt=u+m*2,Q=H*pt;for(let ht=0;ht<Z;ht++){const tt=B[ht];et(tt[0]+Q,tt[1]+Q,tt[2]+Q)}}else{for(let pt=0;pt<Z;pt++){const Q=B[pt];et(Q[2],Q[1],Q[0])}for(let pt=0;pt<Z;pt++){const Q=B[pt];et(Q[0]+H*u,Q[1]+H*u,Q[2]+H*u)}}n.addGroup(N,s.length/3-N,0)}function vt(){const N=s.length/3;let pt=0;wt(L,pt),pt+=L.length;for(let Q=0,ht=I.length;Q<ht;Q++){const tt=I[Q];wt(tt,pt),pt+=tt.length}n.addGroup(N,s.length/3-N,1)}function wt(N,pt){let Q=N.length;for(;--Q>=0;){const ht=Q;let tt=Q-1;tt<0&&(tt=N.length-1);for(let Ct=0,Mt=u+m*2;Ct<Mt;Ct++){const R=H*Ct,A=H*(Ct+1),G=pt+ht+R,ct=pt+tt+R,ot=pt+tt+A,rt=pt+ht+A;mt(G,ct,ot,rt)}}}function $(N,pt,Q){c.push(N),c.push(pt),c.push(Q)}function et(N,pt,Q){St(N),St(pt),St(Q);const ht=s.length/3,tt=v.generateTopUV(n,s,ht-3,ht-2,ht-1);Nt(tt[0]),Nt(tt[1]),Nt(tt[2])}function mt(N,pt,Q,ht){St(N),St(pt),St(ht),St(pt),St(Q),St(ht);const tt=s.length/3,Ct=v.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);Nt(Ct[0]),Nt(Ct[1]),Nt(Ct[3]),Nt(Ct[1]),Nt(Ct[2]),Nt(Ct[3])}function St(N){s.push(c[N*3+0]),s.push(c[N*3+1]),s.push(c[N*3+2])}function Nt(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wo[s.type]().fromJSON(s)),new ul(n,t.options)}}const wv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ut(r,a),new ut(o,c),new ut(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ut(a,1-c),new ut(l,1-f),new ut(h,1-g),new ut(x,1-d)]:[new ut(o,1-c),new ut(u,1-f),new ut(p,1-g),new ut(m,1-d)]}};function Rv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hl extends ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new w,f=new w,h=new w;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*r,m=p/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,v=(s+1)*p+g;a.push(x,m,v),a.push(m,d,v)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fl extends ke{constructor(t=new Of(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,c=new w,l=new ut;let u=new w;const f=[],h=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new pe(f,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(p,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),v(),d()}function m(_){u=t.getPointAt(_/e,u);const y=a.normals[_],E=a.binormals[_];for(let T=0;T<=s;T++){const S=T/s*Math.PI*2,P=Math.sin(S),M=-Math.cos(S);c.x=M*y.x+P*E.x,c.y=M*y.y+P*E.y,c.z=M*y.z+P*E.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function d(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){const E=(s+1)*(_-1)+(y-1),T=(s+1)*_+(y-1),S=(s+1)*_+y,P=(s+1)*(_-1)+y;g.push(E,T,P),g.push(T,S,P)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)l.x=_/e,l.y=y/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new fl(new Wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Xo extends Fs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hf,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dl extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class kf extends dl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xa=new Jt,ih=new w,sh=new w;class Vf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rh=new Jt,js=new w,qa=new w;class Cv extends Vf{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(t.matrixWorld),n.position.copy(js),qa.copy(n.position),qa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qa),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh)}}class Pv extends dl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Lv extends Vf{constructor(){super(new bf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yr extends dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Lv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dv{constructor(t,e,n=0,s=1/0){this.ray=new Os(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Oc(t,this,n,e),n.sort(oh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Oc(t[s],this,n,e);return n.sort(oh),n}}function oh(i,t){return i.distance-t.distance}function Oc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Oc(s[r],t,e,!0)}}class ah{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ch=new w,Zr=new w;class pn{constructor(t=new w,e=new w){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ch.subVectors(t,this.start),Zr.subVectors(this.end,this.start);const n=Zr.dot(Zr);let r=Zr.dot(ch)/n;return e&&(r=Pe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class lh extends Lf{constructor(t=10,e=10,n=4473924,s=8947848){n=new jt(n),s=new jt(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let h=0,p=0,g=-o;h<=e;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const x=h===r?n:s;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const u=new ke;u.setAttribute("position",new pe(c,3)),u.setAttribute("color",new pe(l,3));const f=new al({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Kr=new se;class Iv extends Lf{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new ke;r.setIndex(new Te(n,1)),r.setAttribute("position",new Te(s,3)),super(r,new al({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Kr.setFromObject(this.object),Kr.isEmpty())return;const e=Kr.min,n=Kr.max,s=this.geometry.attributes.position,r=s.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const uh={type:"change"},Ya={type:"start"},hh={type:"end"},Jr=new Os,fh=new yn,Uv=Math.cos(70*Vp.DEG2RAD);class Wf extends Gi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",It),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",It),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(uh),n.update(),r=s.NONE},this.update=function(){const D=new w,ft=new Ni().setFromUnitVectors(t.up,new w(0,1,0)),Pt=ft.clone().invert(),At=new w,lt=new Ni,O=new w,dt=2*Math.PI;return function(Ot=null){const Ut=n.object.position;D.copy(Ut).sub(n.target),D.applyQuaternion(ft),o.setFromVector3(D),n.autoRotate&&r===s.NONE&&U(b(Ot)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let $t=n.minAzimuthAngle,Zt=n.maxAzimuthAngle;isFinite($t)&&isFinite(Zt)&&($t<-Math.PI?$t+=dt:$t>Math.PI&&($t-=dt),Zt<-Math.PI?Zt+=dt:Zt>Math.PI&&(Zt-=dt),$t<=Zt?o.theta=Math.max($t,Math.min(Zt,o.theta)):o.theta=o.theta>($t+Zt)/2?Math.max($t,o.theta):Math.min(Zt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=it(o.radius):o.radius=it(o.radius*l),D.setFromSpherical(o),D.applyQuaternion(Pt),Ut.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let he=!1;if(n.zoomToCursor&&T){let ge=null;if(n.object.isPerspectiveCamera){const te=D.length();ge=it(te*l);const ve=te-ge;n.object.position.addScaledVector(y,ve),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const te=new w(E.x,E.y,0);te.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),he=!0;const ve=new w(E.x,E.y,0);ve.unproject(n.object),n.object.position.sub(ve).add(te),n.object.updateMatrixWorld(),ge=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ge).add(n.object.position):(Jr.origin.copy(n.object.position),Jr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Jr.direction))<Uv?t.lookAt(n.target):(fh.setFromNormalAndCoplanarPoint(n.object.up,n.target),Jr.intersectPlane(fh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),he=!0);return l=1,T=!1,he||At.distanceToSquared(n.object.position)>a||8*(1-lt.dot(n.object.quaternion))>a||O.distanceToSquared(n.target)>0?(n.dispatchEvent(uh),At.copy(n.object.position),lt.copy(n.object.quaternion),O.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Qt),n.domElement.removeEventListener("pointerdown",R),n.domElement.removeEventListener("pointercancel",G),n.domElement.removeEventListener("wheel",rt),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",G),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",It),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new ah,c=new ah;let l=1;const u=new w,f=new ut,h=new ut,p=new ut,g=new ut,x=new ut,m=new ut,d=new ut,v=new ut,_=new ut,y=new w,E=new ut;let T=!1;const S=[],P={};let M=!1;function b(D){return D!==null?2*Math.PI/60*n.autoRotateSpeed*D:2*Math.PI/60/60*n.autoRotateSpeed}function I(D){const ft=Math.abs(D*.01);return Math.pow(.95,n.zoomSpeed*ft)}function U(D){c.theta-=D}function B(D){c.phi-=D}const L=function(){const D=new w;return function(Pt,At){D.setFromMatrixColumn(At,0),D.multiplyScalar(-Pt),u.add(D)}}(),F=function(){const D=new w;return function(Pt,At){n.screenSpacePanning===!0?D.setFromMatrixColumn(At,1):(D.setFromMatrixColumn(At,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(Pt),u.add(D)}}(),H=function(){const D=new w;return function(Pt,At){const lt=n.domElement;if(n.object.isPerspectiveCamera){const O=n.object.position;D.copy(O).sub(n.target);let dt=D.length();dt*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Pt*dt/lt.clientHeight,n.object.matrix),F(2*At*dt/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Pt*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),F(At*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(D){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(D,ft){if(!n.zoomToCursor)return;T=!0;const Pt=n.domElement.getBoundingClientRect(),At=D-Pt.left,lt=ft-Pt.top,O=Pt.width,dt=Pt.height;E.x=At/O*2-1,E.y=-(lt/dt)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function it(D){return Math.max(n.minDistance,Math.min(n.maxDistance,D))}function nt(D){f.set(D.clientX,D.clientY)}function _t(D){j(D.clientX,D.clientX),d.set(D.clientX,D.clientY)}function W(D){g.set(D.clientX,D.clientY)}function st(D){h.set(D.clientX,D.clientY),p.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ft=n.domElement;U(2*Math.PI*p.x/ft.clientHeight),B(2*Math.PI*p.y/ft.clientHeight),f.copy(h),n.update()}function vt(D){v.set(D.clientX,D.clientY),_.subVectors(v,d),_.y>0?Z(I(_.y)):_.y<0&&J(I(_.y)),d.copy(v),n.update()}function wt(D){x.set(D.clientX,D.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(x),n.update()}function $(D){j(D.clientX,D.clientY),D.deltaY<0?J(I(D.deltaY)):D.deltaY>0&&Z(I(D.deltaY)),n.update()}function et(D){let ft=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),ft=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),ft=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),ft=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),ft=!0;break}ft&&(D.preventDefault(),n.update())}function mt(D){if(S.length===1)f.set(D.pageX,D.pageY);else{const ft=Et(D),Pt=.5*(D.pageX+ft.x),At=.5*(D.pageY+ft.y);f.set(Pt,At)}}function St(D){if(S.length===1)g.set(D.pageX,D.pageY);else{const ft=Et(D),Pt=.5*(D.pageX+ft.x),At=.5*(D.pageY+ft.y);g.set(Pt,At)}}function Nt(D){const ft=Et(D),Pt=D.pageX-ft.x,At=D.pageY-ft.y,lt=Math.sqrt(Pt*Pt+At*At);d.set(0,lt)}function N(D){n.enableZoom&&Nt(D),n.enablePan&&St(D)}function pt(D){n.enableZoom&&Nt(D),n.enableRotate&&mt(D)}function Q(D){if(S.length==1)h.set(D.pageX,D.pageY);else{const Pt=Et(D),At=.5*(D.pageX+Pt.x),lt=.5*(D.pageY+Pt.y);h.set(At,lt)}p.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ft=n.domElement;U(2*Math.PI*p.x/ft.clientHeight),B(2*Math.PI*p.y/ft.clientHeight),f.copy(h)}function ht(D){if(S.length===1)x.set(D.pageX,D.pageY);else{const ft=Et(D),Pt=.5*(D.pageX+ft.x),At=.5*(D.pageY+ft.y);x.set(Pt,At)}m.subVectors(x,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(x)}function tt(D){const ft=Et(D),Pt=D.pageX-ft.x,At=D.pageY-ft.y,lt=Math.sqrt(Pt*Pt+At*At);v.set(0,lt),_.set(0,Math.pow(v.y/d.y,n.zoomSpeed)),Z(_.y),d.copy(v);const O=(D.pageX+ft.x)*.5,dt=(D.pageY+ft.y)*.5;j(O,dt)}function Ct(D){n.enableZoom&&tt(D),n.enablePan&&ht(D)}function Mt(D){n.enableZoom&&tt(D),n.enableRotate&&Q(D)}function R(D){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",G)),Wt(D),D.pointerType==="touch"?Ht(D):ct(D))}function A(D){n.enabled!==!1&&(D.pointerType==="touch"?at(D):ot(D))}function G(D){Bt(D),S.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",G)),n.dispatchEvent(hh),r=s.NONE}function ct(D){let ft;switch(D.button){case 0:ft=n.mouseButtons.LEFT;break;case 1:ft=n.mouseButtons.MIDDLE;break;case 2:ft=n.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case Wi.DOLLY:if(n.enableZoom===!1)return;_t(D),r=s.DOLLY;break;case Wi.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;W(D),r=s.PAN}else{if(n.enableRotate===!1)return;nt(D),r=s.ROTATE}break;case Wi.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;nt(D),r=s.ROTATE}else{if(n.enablePan===!1)return;W(D),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ya)}function ot(D){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;st(D);break;case s.DOLLY:if(n.enableZoom===!1)return;vt(D);break;case s.PAN:if(n.enablePan===!1)return;wt(D);break}}function rt(D){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(D.preventDefault(),n.dispatchEvent(Ya),$(Rt(D)),n.dispatchEvent(hh))}function Rt(D){const ft=D.deltaMode,Pt={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(ft){case 1:Pt.deltaY*=16;break;case 2:Pt.deltaY*=100;break}return D.ctrlKey&&!M&&(Pt.deltaY*=10),Pt}function xt(D){D.key==="Control"&&(M=!0,document.addEventListener("keyup",bt,{passive:!0,capture:!0}))}function bt(D){D.key==="Control"&&(M=!1,document.removeEventListener("keyup",bt,{passive:!0,capture:!0}))}function It(D){n.enabled===!1||n.enablePan===!1||et(D)}function Ht(D){switch(Dt(D),S.length){case 1:switch(n.touches.ONE){case Xi.ROTATE:if(n.enableRotate===!1)return;mt(D),r=s.TOUCH_ROTATE;break;case Xi.PAN:if(n.enablePan===!1)return;St(D),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(D),r=s.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(D),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ya)}function at(D){switch(Dt(D),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Q(D),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ht(D),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(D),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(D),n.update();break;default:r=s.NONE}}function Qt(D){n.enabled!==!1&&D.preventDefault()}function Wt(D){S.push(D.pointerId)}function Bt(D){delete P[D.pointerId];for(let ft=0;ft<S.length;ft++)if(S[ft]==D.pointerId){S.splice(ft,1);return}}function Dt(D){let ft=P[D.pointerId];ft===void 0&&(ft=new ut,P[D.pointerId]=ft),ft.set(D.pageX,D.pageY)}function Et(D){const ft=D.pointerId===S[0]?S[1]:S[0];return P[ft]}n.domElement.addEventListener("contextmenu",Qt),n.domElement.addEventListener("pointerdown",R),n.domElement.addEventListener("pointercancel",G),n.domElement.addEventListener("wheel",rt,{passive:!1}),document.addEventListener("keydown",xt,{passive:!0,capture:!0}),this.update()}}class Xf extends ol{constructor(t=null){super();const e=new Cn;e.deleteAttribute("uv");const n=new Xo({side:Fe}),s=new Xo;let r=5;t!==null&&t._useLegacyLights===!1&&(r=900);const a=new Pv(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new ee(e,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const c=new ee(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const l=new ee(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);const u=new ee(e,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const f=new ee(e,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new ee(e,s);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new ee(e,s);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const g=new ee(e,ls(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const x=new ee(e,ls(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const m=new ee(e,ls(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const d=new ee(e,ls(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const v=new ee(e,ls(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const _=new ee(e,ls(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ls(i){const t=new Qo;return t.color.setScalar(i),t}const Kt=i=>new Xo(i),z={post:Kt({color:2368554,metalness:.75,roughness:.42}),rail:Kt({color:3355452,metalness:.72,roughness:.4}),shelf:Kt({color:4342348,metalness:.45,roughness:.62}),caster:Kt({color:1315864,metalness:.35,roughness:.6}),foot:Kt({color:1842210,metalness:.6,roughness:.45}),cardShroud:Kt({color:2039590,metalness:.58,roughness:.32}),cardBack:Kt({color:1644832,metalness:.45,roughness:.5}),shroud:Kt({color:3881798,metalness:.62,roughness:.4}),shroudTop:Kt({color:4868694,metalness:.55,roughness:.46}),vent:Kt({color:1381658,metalness:.3,roughness:.82}),fanHub:Kt({color:2302761,metalness:.4,roughness:.55}),fanBlade:Kt({color:1842210,metalness:.3,roughness:.6}),bracket:Kt({color:9869988,metalness:.72,roughness:.38}),nvGreen:Kt({color:7780608,metalness:.3,roughness:.4,emissive:1914368,emissiveIntensity:.6}),pcb:Kt({color:1014345,metalness:.22,roughness:.68}),pcbDark:Kt({color:740656,metalness:.22,roughness:.72}),pcbBlack:Kt({color:2105383,metalness:.3,roughness:.62}),armor:Kt({color:11186360,metalness:.8,roughness:.34}),debugRed:Kt({color:16722474,emissive:10031377,emissiveIntensity:1.1,metalness:.2,roughness:.5}),slot:Kt({color:1447452,metalness:.35,roughness:.7}),gold:Kt({color:13214283,metalness:.85,roughness:.35}),connector:Kt({color:4540495,metalness:.74,roughness:.38}),chip:Kt({color:2565934,metalness:.5,roughness:.45}),cap:Kt({color:3421244,metalness:.5,roughness:.5}),heatsink:Kt({color:3947589,metalness:.78,roughness:.32}),extrusion:Kt({color:10133674,metalness:.78,roughness:.28}),extGroove:Kt({color:6053992,metalness:.6,roughness:.45}),cable:Kt({color:2368556,metalness:.18,roughness:.86}),power:Kt({color:2499618,metalness:.22,roughness:.78}),aux:Kt({color:3358797,metalness:.3,roughness:.7}),cablePlug:Kt({color:1776417,metalness:.4,roughness:.55}),psuBody:Kt({color:2434349,metalness:.62,roughness:.4}),psuGrille:Kt({color:1513245,metalness:.4,roughness:.6}),noctua:Kt({color:9067068,metalness:.18,roughness:.72}),noctuaRim:Kt({color:5913128,metalness:.18,roughness:.72}),label:Kt({color:14211294,metalness:.1,roughness:.8})};function K(i,t,e,n){const s=new ee(new Cn(i,t,e),n);return s.castShadow=s.receiveShadow=!0,s}function q(i,t,e=0,n=0,s=0){return t.position.set(e,n,s),i.add(t),t}function me(i,t,e,n=28){const s=new ee(new na(i,i,t,n),e);return s.castShadow=s.receiveShadow=!0,s}function Bi(i,t=11){const e=new Le;q(e,me(i*1.04,7,z.vent,40),0,-3.5,0);const n=new ee(new hl(i*.97,i*.05,10,44),z.fanHub);n.rotation.x=Math.PI/2,n.castShadow=!0,e.add(n),q(e,me(i*.26,6,z.fanHub,24),0,1,0),q(e,me(i*.19,1.4,z.chip,20),0,4,0);for(let s=0;s<t;s++){const r=K(i*.7,.7,i*.38,z.fanBlade);r.position.x=i*.5,r.rotation.x=.62;const a=new Le;a.add(r),a.position.y=.5,a.rotation.y=s/t*Math.PI*2,e.add(a)}return e}function Ei(i){const n=new Bf;n.moveTo(-10,-10),n.lineTo(10,-10),n.lineTo(10,10),n.lineTo(-10,10),n.lineTo(-10,-10);const s=new Ic;s.absarc(0,0,3,0,Math.PI*2,!0),n.holes.push(s);const r=new ul(n,{depth:i,bevelEnabled:!1,curveSegments:8});r.rotateY(Math.PI/2),r.translate(-i/2,0,0);const a=new ee(r,z.extrusion);a.castShadow=a.receiveShadow=!0;const o=new Le;o.add(a);for(const[c,l]of[[10-1.5,0],[-8.5,0],[0,10-1.5],[0,-8.5]]){const u=K(i-1,l===0?3.5:.6,l===0?.6:3.5,z.extGroove);q(o,u,0,c,l)}return o}const qo={mcio:{mat:z.cable,r:3.4,plug:[13,6,17]},power12v:{mat:z.power,r:5.4,plug:[18,9,12]},aux6:{mat:z.aux,r:2.5,plug:[12,6,10]},atx:{mat:z.power,r:7,plug:[26,10,12]}},Nv=i=>(qo[i]||qo.mcio).r;function Qr(i){const t=Math.abs(i.x),e=Math.abs(i.y),n=Math.abs(i.z);return t>=e&&t>=n?new w(Math.sign(i.x)||1,0,0):e>=n?new w(0,Math.sign(i.y)||1,0):new w(0,0,Math.sign(i.z)||1)}function qf(i,t,e={}){const{type:n="mcio",sag:s=45,route:r="drape"}=e,a=qo[n]||qo.mcio,o=new Le;o.userData.part=n;const c=new w(...i),l=new w(...t);let u;if(e.vias)u=[c,...e.vias.map(m=>new w(m[0],m[1],m[2])),l];else if(r==="riser"){const m=e.backZ??-230,d=e.laneX??c.x;u=[c,new w(d,c.y+15,m),new w(d,(c.y+l.y)/2,m),new w(d,l.y-15,m),l]}else{const m=new w((c.x+l.x)/2,Math.min(c.y,l.y)-s,(c.z+l.z)/2-4),d=new w(c.x,c.y-Math.min(32,(c.y-m.y)*.6),c.z-1),v=new w(l.x,l.y-Math.min(32,(l.y-m.y)*.6),l.z-1);u=[c,d,m,v,l]}const f=e.na?Qr(new w(...e.na)):Qr(u[1].clone().sub(c)),h=e.nb?Qr(new w(...e.nb)):Qr(u[u.length-2].clone().sub(l));u.splice(1,0,c.clone().addScaledVector(f,Math.min(14,c.distanceTo(u[1])*.6))),u.splice(u.length-1,0,l.clone().addScaledVector(h,Math.min(14,l.distanceTo(u[u.length-2])*.6)));const p=new Df(u,!1,"centripetal"),g=Math.max(64,Math.min(220,Math.round(p.getLength()/5))),x=new ee(new fl(p,g,a.r,9,!1),a.mat);x.castShadow=!0,o.add(x),o.userData.samples=p.getPoints(56),o.userData.lengthMm=Math.round(p.getLength());for(const[m,d]of[[c,f],[l,h]]){const v=K(...a.plug,z.cablePlug);v.position.copy(m),v.lookAt(m.clone().add(d)),o.add(v)}return o}function to(i){return qf([-70,6,0],[70,6,0],{type:i,sag:24})}const Yf=44.45,jf=25,xi=jf*Yf,Ov=465.1,ja=600,dh=711.2,Co={W:445,D:700,LIP:40,EARS:482.6},Po={L:266.7,H:111.8,T:40.6},eo=8,ph=56,Fv={W:150,H:86,L:210},$f={W:20,PCB:1.6,L:125},Bv={psuShelfTop:90,boardTrayTop:320,switchShelfTop:510,gpuShelfTop:720},Lo=[],Zf=855314,mh=55,gh=55,$a=2;function Kf(){const i=new Le,t=Ov/2,e=dh/2,n=t+21,s=n+mh/2-$a/2;for(const r of[-1,1])for(const a of[-1,1]){q(i,K(mh,xi+40,$a,z.post),r*n,xi/2-10,a*e),q(i,K($a,xi+40,gh,z.post),r*s,xi/2-10,a*(e-gh/2));for(let o=0;o<jf;o++)for(const c of[6.35,22.225,38.1])q(i,K(9.5,9.5,1.4,z.caster),r*t,o*Yf+c,a*(e+.7))}for(const r of[-1,1])for(const a of[-22,xi-22]){q(i,K(30,32,dh-340,z.post),r*n,a,0);for(const o of[-1,1])q(i,K(38,40,250,z.post),r*n,a,o*(e-125))}for(const r of[-1,1]){q(i,K(ja,5,80,z.post),0,xi+2.5,r*(e-40));for(const a of[-1,1])for(let o=0;o<4;o++)q(i,K(34,1.4,8,z.caster),a*(170+o*32),xi+5.2,r*(e-40))}for(const r of[-1,1])q(i,K(ja,95,55,z.post),0,-48,r*(e-28));for(const r of[-1,1])for(const a of[-1,1]){const o=r*(ja/2-45),c=a*(e-28);q(i,K(70,8,70,z.foot),o,-100,c),q(i,me(9,14,z.foot,14),o,-110,c);for(const l of[-1,1]){const u=me(28,10,z.caster,22);u.rotation.z=Math.PI/2,q(i,u,o+l*11,-145,c+8)}}for(const r of[-1,1])for(let a=0;a<6;a++){const o=130+a*160,c=r*(n-6),l=-345.6;q(i,K(6,44,2.5,z.rail),c,o,l),q(i,K(6,2.5,24,z.rail),c,o-22,l-12),q(i,K(6,14,2.5,z.rail),c,o-16,l-24)}return i}const Jf=0,zv=1,Hv=2,_h=2,Za=1.25,xh=1,cr=6*4+4+4,sa=65535,Gv=Math.pow(2,-24),Ka=Symbol("SKIP_GENERATION");function kv(i){return i.index?i.index.count:i.attributes.position.count}function zs(i){return kv(i)/3}function Vv(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Wv(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Vv(e,n);i.setIndex(new Te(s,1));for(let r=0;r<e;r++)s[r]=r}}function Qf(i,t){const e=zs(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(e,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function td(i,t){if(!i.groups||!i.groups.length)return Qf(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const c of i.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(a,u))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],u=o[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function Xv(i,t){const e=zs(i),n=td(i,t).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),e!==r}function Ja(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,p=1/0,g=-1/0,x=-1/0,m=-1/0;for(let d=t*6,v=(t+e)*6;d<v;d+=6){const _=i[d+0],y=i[d+1],E=_-y,T=_+y;E<r&&(r=E),T>c&&(c=T),_<f&&(f=_),_>g&&(g=_);const S=i[d+2],P=i[d+3],M=S-P,b=S+P;M<a&&(a=M),b>l&&(l=b),S<h&&(h=S),S>x&&(x=S);const I=i[d+4],U=i[d+5],B=I-U,L=I+U;B<o&&(o=B),L>u&&(u=L),I<p&&(p=I),I>m&&(m=I)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,s[0]=f,s[1]=h,s[2]=p,s[3]=g,s[4]=x,s[5]=m}function qv(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=zs(i),o=s.normalized;let c;t===null?(c=new Float32Array(a*6*4),e=0,n=a):(c=t,e=e||0,n=n||a);const l=s.array,u=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const h=["getX","getY","getZ"];for(let p=e;p<e+n;p++){const g=p*3,x=p*6;let m=g+0,d=g+1,v=g+2;r&&(m=r[m],d=r[d],v=r[v]),o||(m=m*f+u,d=d*f+u,v=v*f+u);for(let _=0;_<3;_++){let y,E,T;o?(y=s[h[_]](m),E=s[h[_]](d),T=s[h[_]](v)):(y=l[m+_],E=l[d+_],T=l[v+_]);let S=y;E<S&&(S=E),T<S&&(S=T);let P=y;E>P&&(P=E),T>P&&(P=T);const M=(P-S)/2,b=_*2;c[x+b+0]=S+M,c[x+b+1]=M+(Math.abs(S)+M)*Gv}}return c}function de(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function vh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function yh(i,t){t.set(i)}function Mh(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function no(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function $s(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Gn=32,Yv=(i,t)=>i.candidate-t.candidate,Jn=new Array(Gn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),io=new Float32Array(6);function jv(i,t,e,n,s,r){let a=-1,o=0;if(r===Jf)a=vh(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===zv)a=vh(i),a!==-1&&(o=$v(e,n,s,a));else if(r===Hv){const c=$s(i);let l=Za*s;const u=n*6,f=(n+s)*6;for(let h=0;h<3;h++){const p=t[h],m=(t[h+3]-p)/Gn;if(s<Gn/4){const d=[...Jn];d.length=s;let v=0;for(let y=u;y<f;y+=6,v++){const E=d[v];E.candidate=e[y+2*h],E.count=0;const{bounds:T,leftCacheBounds:S,rightCacheBounds:P}=E;for(let M=0;M<3;M++)P[M]=1/0,P[M+3]=-1/0,S[M]=1/0,S[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0;no(y,e,T)}d.sort(Yv);let _=s;for(let y=0;y<_;y++){const E=d[y];for(;y+1<_&&d[y+1].candidate===E.candidate;)d.splice(y+1,1),_--}for(let y=u;y<f;y+=6){const E=e[y+2*h];for(let T=0;T<_;T++){const S=d[T];E>=S.candidate?no(y,e,S.rightCacheBounds):(no(y,e,S.leftCacheBounds),S.count++)}}for(let y=0;y<_;y++){const E=d[y],T=E.count,S=s-E.count,P=E.leftCacheBounds,M=E.rightCacheBounds;let b=0;T!==0&&(b=$s(P)/c);let I=0;S!==0&&(I=$s(M)/c);const U=xh+Za*(b*T+I*S);U<l&&(a=h,l=U,o=E.candidate)}}else{for(let _=0;_<Gn;_++){const y=Jn[_];y.count=0,y.candidate=p+m+_*m;const E=y.bounds;for(let T=0;T<3;T++)E[T]=1/0,E[T+3]=-1/0}for(let _=u;_<f;_+=6){let T=~~((e[_+2*h]-p)/m);T>=Gn&&(T=Gn-1);const S=Jn[T];S.count++,no(_,e,S.bounds)}const d=Jn[Gn-1];yh(d.bounds,d.rightCacheBounds);for(let _=Gn-2;_>=0;_--){const y=Jn[_],E=Jn[_+1];Mh(y.bounds,E.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let _=0;_<Gn-1;_++){const y=Jn[_],E=y.count,T=y.bounds,P=Jn[_+1].rightCacheBounds;E!==0&&(v===0?yh(T,io):Mh(T,io,io)),v+=E;let M=0,b=0;v!==0&&(M=$s(io)/c);const I=s-v;I!==0&&(b=$s(P)/c);const U=xh+Za*(M*v+b*I);U<l&&(a=h,l=U,o=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function $v(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}class Qa{constructor(){this.boundingData=new Float32Array(6)}}function Zv(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let f=t[a*3+u];t[a*3+u]=t[o*3+u],t[o*3+u]=f}for(let u=0;u<6;u++){let f=e[a*6+u];e[a*6+u]=e[o*6+u],e[o*6+u]=f}a++,o--}else return a}}function Kv(i,t,e,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&e[a*6+l]<c;)a++;for(;a<=o&&e[o*6+l]>=c;)o--;if(a<o){let u=i[a];i[a]=i[o],i[o]=u;for(let f=0;f<6;f++){let h=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=h}a++,o--}else return a}}function Ye(i,t){return t[i+15]===65535}function Qe(i,t){return t[i+6]}function un(i,t){return t[i+14]}function hn(i){return i+8}function fn(i,t){return t[i+6]}function ed(i,t){return t[i+7]}let nd,nr,Do,id;const Jv=Math.pow(2,32);function Fc(i){return"count"in i?1:1+Fc(i.left)+Fc(i.right)}function Qv(i,t,e){return nd=new Float32Array(e),nr=new Uint32Array(e),Do=new Uint16Array(e),id=new Uint8Array(e),Bc(i,t)}function Bc(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)nd[e+a]=r[a];if(s)if(t.buffer){const a=t.buffer;id.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=cr){const l=o/2;Ye(l,Do)||(nr[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return nr[e+6]=a,Do[n+14]=o,Do[n+15]=sa,i+cr}else{const a=t.left,o=t.right,c=t.splitAxis;let l;if(l=Bc(i+cr,a),l/4>Jv)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return nr[e+6]=l/4,l=Bc(l,o),nr[e+7]=c,l}}function ty(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function ey(i,t,e,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=s,f=i._indirectBuffer,h=i.geometry,p=h.index?h.index.array:null,g=u?Kv:Zv,x=zs(h),m=new Float32Array(6);let d=!1;const v=new Qa;return Ja(t,e,n,v.boundingData,m),y(v,e,n,m),v;function _(E){l&&l(E/x)}function y(E,T,S,P=null,M=0){if(!d&&M>=r&&(d=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),S<=o||M>=r)return _(T+S),E.offset=T,E.count=S,E;const b=jv(E.boundingData,P,t,T,S,c);if(b.axis===-1)return _(T+S),E.offset=T,E.count=S,E;const I=g(f,p,t,T,S,b);if(I===T||I===T+S)_(T+S),E.offset=T,E.count=S;else{E.splitAxis=b.axis;const U=new Qa,B=T,L=I-T;E.left=U,Ja(t,B,L,U.boundingData,m),y(U,B,L,m,M+1);const F=new Qa,H=I,Z=S-L;E.right=F,Ja(t,H,Z,F.boundingData,m),y(F,H,Z,m,M+1)}return E}}function ny(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=ty(e,t.useSharedArrayBuffer),Xv(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Wv(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=qv(e),r=t.indirect?Qf(e,t.range):td(e,t.range);i._roots=r.map(a=>{const o=ey(i,s,a.offset,a.count,t),c=Fc(o),l=new n(cr*c);return Qv(0,o,l),l})}class Xn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],c=t.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}Xn.prototype.setFromBox=function(){const i=new w;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);const f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();const iy=function(){const i=new w,t=new w,e=new w;return function(s,r,a){const o=s.start,c=i,l=r.start,u=t;e.subVectors(o,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(u),h=u.dot(c),p=u.dot(u),g=e.dot(c),m=c.dot(c)*p-h*h;let d,v;m!==0?d=(f*h-g*p)/m:d=0,v=(f+d*h)/p,a.x=d,a.y=v}}(),pl=function(){const i=new ut,t=new w,e=new w;return function(s,r,a,o){iy(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=s.start:u=s.end;let f;l<0?f=r.start:f=r.end;const h=t,p=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=p.distanceToSquared(u)){a.copy(h),o.copy(f);return}else{a.copy(u),o.copy(p);return}}}}(),sy=function(){const i=new w,t=new w,e=new yn,n=new pn;return function(r,a){const{radius:o,center:c}=r,{a:l,b:u,c:f}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const x=a.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=o){const d=x.projectPoint(c,t);if(a.containsPoint(d))return!0}return!1}}(),ry=1e-15;function tc(i){return Math.abs(i)<ry}class mn extends ce{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new w),this.satBounds=new Array(4).fill().map(()=>new Xn),this.points=[this.a,this.b,this.c],this.sphere=new ki,this.plane=new yn,this.needsUpdate=!0}intersectsSphere(t){return sy(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);const l=r[1],u=a[1];l.subVectors(t,e),u.setFromPoints(l,s);const f=r[2],h=a[2];f.subVectors(e,n),h.setFromPoints(f,s);const p=r[3],g=a[3];p.subVectors(n,t),g.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}mn.prototype.closestPointToSegment=function(){const i=new w,t=new w,e=new pn;return function(s,r=null,a=null){const{start:o,end:c}=s,l=this.points;let u,f=1/0;for(let h=0;h<3;h++){const p=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[p]),pl(e,s,i,t),u=i.distanceToSquared(t),u<f&&(f=u,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(f)}}();mn.prototype.intersectsTriangle=function(){const i=new mn,t=new Array(3),e=new Array(3),n=new Xn,s=new Xn,r=new w,a=new w,o=new w,c=new w,l=new w,u=new pn,f=new pn,h=new pn,p=new w;function g(x,m,d){const v=x.points;let _=0,y=-1;for(let E=0;E<3;E++){const{start:T,end:S}=u;T.copy(v[E]),S.copy(v[(E+1)%3]),u.delta(a);const P=tc(m.distanceToPoint(T));if(tc(m.normal.dot(a))&&P){d.copy(u),_=2;break}const M=m.intersectLine(u,p);if(!M&&P&&p.copy(T),(M||P)&&!tc(p.distanceTo(S))){if(_<=1)(_===1?d.start:d.end).copy(p),P&&(y=_);else if(_>=2){(y===1?d.start:d.end).copy(p),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(m,d=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const _=this.plane,y=m.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){const E=this.satBounds,T=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let M=0;M<4;M++){const b=E[M],I=T[M];if(n.setFromPoints(I,e),b.isSeparated(n))return!1}const S=m.satBounds,P=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){const b=S[M],I=P[M];if(n.setFromPoints(I,t),b.isSeparated(n))return!1}for(let M=0;M<4;M++){const b=T[M];for(let I=0;I<4;I++){const U=P[I];if(r.crossVectors(b,U),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return d&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{const E=g(this,y,f);if(E===1&&m.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(E!==2)return!1;const T=g(m,_,h);if(T===1&&this.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(T!==2)return!1;if(f.delta(o),h.delta(c),o.dot(c)<0){let B=h.start;h.start=h.end,h.end=B}const S=f.start.dot(o),P=f.end.dot(o),M=h.start.dot(o),b=h.end.dot(o),I=P<M,U=S<b;return S!==b&&M!==P&&I===U?!1:(d&&(l.subVectors(f.start,h.start),l.dot(o)>0?d.start.copy(f.start):d.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(o)<0?d.end.copy(f.end):d.end.copy(h.end)),!0)}}}();mn.prototype.distanceToPoint=function(){const i=new w;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();mn.prototype.distanceToTriangle=function(){const i=new w,t=new w,e=["a","b","c"],n=new pn,s=new pn;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h;const p=e[f],g=a[p];this.closestPointToPoint(g,i),h=g.distanceToSquared(i),h<u&&(u=h,o&&o.copy(i),c&&c.copy(g));const x=this[p];a.closestPointToPoint(x,i),h=x.distanceToSquared(i),h<u&&(u=h,o&&o.copy(x),c&&c.copy(i))}for(let f=0;f<3;f++){const h=e[f],p=e[(f+1)%3];n.set(this[h],this[p]);for(let g=0;g<3;g++){const x=e[g],m=e[(g+1)%3];s.set(a[x],a[m]),pl(n,s,i,t);const d=i.distanceToSquared(t);d<u&&(u=d,o&&o.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();class Ve{constructor(t,e,n){this.isOrientedBox=!0,this.min=new w,this.max=new w,this.matrix=new Jt,this.invMatrix=new Jt,this.points=new Array(8).fill().map(()=>new w),this.satAxes=new Array(3).fill().map(()=>new w),this.satBounds=new Array(3).fill().map(()=>new Xn),this.alignedSatBounds=new Array(3).fill().map(()=>new Xn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ve.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const h=1*l|2*u|4*f,p=s[h];p.x=l?n.x:e.x,p.y=u?n.y:e.y,p.z=f?n.z:e.z,p.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){const u=a[l],f=r[l],h=1<<l,p=s[h];u.subVectors(o,p),f.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ve.prototype.intersectsBox=function(){const i=new Xn;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();Ve.prototype.intersectsTriangle=function(){const i=new mn,t=new Array(3),e=new Xn,n=new Xn,s=new w;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let h=0;h<3;h++){const p=o[h],g=c[h];if(e.setFromPoints(g,t),p.isSeparated(e))return!1}const l=a.satBounds,u=a.satAxes,f=this.points;for(let h=0;h<3;h++){const p=l[h],g=u[h];if(e.setFromPoints(g,f),p.isSeparated(e))return!1}for(let h=0;h<3;h++){const p=c[h];for(let g=0;g<4;g++){const x=u[g];if(s.crossVectors(p,x),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();Ve.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Ve.prototype.distanceToPoint=function(){const i=new w;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ve.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new pn),e=new Array(12).fill().map(()=>new pn),n=new w,s=new w;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const u=o*o,f=a.min,h=a.max,p=this.points;let g=1/0;for(let m=0;m<8;m++){const d=p[m];s.copy(d).clamp(f,h);const v=d.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(d),l&&l.copy(s),v<u))return Math.sqrt(v)}let x=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let v=0;v<=1;v++){const _=(m+1)%3,y=(m+2)%3,E=d<<_|v<<y,T=1<<m|d<<_|v<<y,S=p[E],P=p[T];t[x].set(S,P);const b=i[m],I=i[_],U=i[y],B=e[x],L=B.start,F=B.end;L[b]=f[b],L[I]=d?f[I]:h[I],L[U]=v?f[U]:h[I],F[b]=h[b],F[I]=d?f[I]:h[I],F[U]=v?f[U]:h[I],x++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let v=0;v<=1;v++){s.x=m?h.x:f.x,s.y=d?h.y:f.y,s.z=v?h.z:f.z,this.closestPointToPoint(s,n);const _=s.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(s),_<u))return Math.sqrt(_)}for(let m=0;m<12;m++){const d=t[m];for(let v=0;v<12;v++){const _=e[v];pl(d,_,n,s);const y=n.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(s),y<u))return Math.sqrt(y)}}return Math.sqrt(g)}}();class ml{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class oy extends ml{constructor(){super(()=>new mn)}}const dn=new oy;class ay{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const oe=new ay;let ri,Rs;const us=[],so=new ml(()=>new se);function cy(i,t,e,n,s,r){ri=so.getPrimitive(),Rs=so.getPrimitive(),us.push(ri,Rs),oe.setBuffer(i._roots[t]);const a=zc(0,i.geometry,e,n,s,r);oe.clearBuffer(),so.releasePrimitive(ri),so.releasePrimitive(Rs),us.pop(),us.pop();const o=us.length;return o>0&&(Rs=us[o-1],ri=us[o-2]),a}function zc(i,t,e,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=oe;let u=i*2;if(Ye(u,c)){const h=Qe(i,l),p=un(u,c);return de(i,o,ri),n(h,p,!1,a,r+i,ri)}else{let b=function(U){const{uint16Array:B,uint32Array:L}=oe;let F=U*2;for(;!Ye(F,B);)U=hn(U),F=U*2;return Qe(U,L)},I=function(U){const{uint16Array:B,uint32Array:L}=oe;let F=U*2;for(;!Ye(F,B);)U=fn(U,L),F=U*2;return Qe(U,L)+un(F,B)};const h=hn(i),p=fn(i,l);let g=h,x=p,m,d,v,_;if(s&&(v=ri,_=Rs,de(g,o,v),de(x,o,_),m=s(v),d=s(_),d<m)){g=p,x=h;const U=m;m=d,d=U,v=_}v||(v=ri,de(g,o,v));const y=Ye(g*2,c),E=e(v,y,m,a+1,r+g);let T;if(E===_h){const U=b(g),L=I(g)-U;T=n(U,L,!0,a+1,r+g,v)}else T=E&&zc(g,t,e,n,s,r,a+1);if(T)return!0;_=Rs,de(x,o,_);const S=Ye(x*2,c),P=e(_,S,d,a+1,r+x);let M;if(P===_h){const U=b(x),L=I(x)-U;M=n(U,L,!0,a+1,r+x,_)}else M=P&&zc(x,t,e,n,s,r,a+1);return!!M}}const Zs=new w,ec=new w;function ly(i,t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(Zs.copy(t).clamp(u.min,u.max),Zs.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<o&&h<a,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Zs);const h=t.distanceToSquared(Zs);return h<o&&(ec.copy(Zs),o=h,c=f),h<r}}),o===1/0)return null;const l=Math.sqrt(o);return e.point?e.point.copy(ec):e.point=ec.clone(),e.distance=l,e.faceIndex=c,e}const hs=new w,fs=new w,ds=new w,ro=new ut,oo=new ut,ao=new ut,Sh=new w,Eh=new w,bh=new w,co=new w;function uy(i,t,e,n,s,r,a,o){let c;if(r===Fe?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==cn,s),c===null)return null;const l=i.origin.distanceTo(s);return l<a||l>o?null:{distance:l,point:s.clone()}}function hy(i,t,e,n,s,r,a,o,c,l,u){hs.fromBufferAttribute(t,r),fs.fromBufferAttribute(t,a),ds.fromBufferAttribute(t,o);const f=uy(i,hs,fs,ds,co,c,l,u);if(f){n&&(ro.fromBufferAttribute(n,r),oo.fromBufferAttribute(n,a),ao.fromBufferAttribute(n,o),f.uv=ce.getInterpolation(co,hs,fs,ds,ro,oo,ao,new ut)),s&&(ro.fromBufferAttribute(s,r),oo.fromBufferAttribute(s,a),ao.fromBufferAttribute(s,o),f.uv1=ce.getInterpolation(co,hs,fs,ds,ro,oo,ao,new ut)),e&&(Sh.fromBufferAttribute(e,r),Eh.fromBufferAttribute(e,a),bh.fromBufferAttribute(e,o),f.normal=ce.getInterpolation(co,hs,fs,ds,Sh,Eh,bh,new w),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:r,b:a,c:o,normal:new w,materialIndex:0};ce.getNormal(hs,fs,ds,h.normal),f.face=h,f.faceIndex=r}return f}function ra(i,t,e,n,s,r,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const f=i.index;i.index&&(c=f.getX(c),l=f.getX(l),u=f.getX(u));const{position:h,normal:p,uv:g,uv1:x}=i.attributes,m=hy(e,h,p,g,x,c,l,u,t,r,a);return m?(m.faceIndex=n,s&&s.push(m),m):null}function Se(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,c=t+1,l=t+2;e&&(o=e.getX(o),c=e.getX(c),l=e.getX(l)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function fy(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+s;u<f;u++)ra(c,t,e,u,r,a,o)}function dy(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let p;p=ra(o,t,e,f,null,r,a),p&&p.distance<l&&(u=p,l=p.distance)}return u}function py(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=u,Se(a,h*3,c,l),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function my(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,g=!1){const x=h*2;if(o[x+15]===sa){const d=a[h+6],v=o[x+14];let _=1/0,y=1/0,E=1/0,T=-1/0,S=-1/0,P=-1/0;for(let M=3*d,b=3*(d+v);M<b;M++){let I=n[M];const U=s.getX(I),B=s.getY(I),L=s.getZ(I);U<_&&(_=U),U>T&&(T=U),B<y&&(y=B),B>S&&(S=B),L<E&&(E=L),L>P&&(P=L)}return c[h+0]!==_||c[h+1]!==y||c[h+2]!==E||c[h+3]!==T||c[h+4]!==S||c[h+5]!==P?(c[h+0]=_,c[h+1]=y,c[h+2]=E,c[h+3]=T,c[h+4]=S,c[h+5]=P,!0):!1}else{const d=h+8,v=a[h+6],_=d+p,y=v+p;let E=g,T=!1,S=!1;t?E||(T=t.has(_),S=t.has(y),E=!T&&!S):(T=!0,S=!0);const P=E||T,M=E||S;let b=!1;P&&(b=f(d,p,E));let I=!1;M&&(I=f(v,p,E));const U=b||I;if(U)for(let B=0;B<3;B++){const L=d+B,F=v+B,H=c[L],Z=c[L+3],J=c[F],j=c[F+3];c[h+B]=H<J?H:J,c[h+B+3]=Z>j?Z:j}return U}}}function ui(i,t,e,n,s){let r,a,o,c,l,u;const f=1/e.direction.x,h=1/e.direction.y,p=1/e.direction.z,g=e.origin.x,x=e.origin.y,m=e.origin.z;let d=t[i],v=t[i+3],_=t[i+1],y=t[i+3+1],E=t[i+2],T=t[i+3+2];return f>=0?(r=(d-g)*f,a=(v-g)*f):(r=(v-g)*f,a=(d-g)*f),h>=0?(o=(_-x)*h,c=(y-x)*h):(o=(y-x)*h,c=(_-x)*h),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),p>=0?(l=(E-m)*p,u=(T-m)*p):(l=(T-m)*p,u=(E-m)*p),r>u||l>a)?!1:((l>r||r!==r)&&(r=l),(u<a||a!==a)&&(a=u),r<=s&&a>=n)}function gy(i,t,e,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+s;u<f;u++){let h=l?l[u]:u;ra(c,t,e,h,r,a,o)}}function _y(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let p;p=ra(o,t,e,c?c[f]:f,null,r,a),p&&p.distance<l&&(u=p,l=p.distance)}return u}function xy(i,t,e,n,s,r,a){const{geometry:o}=e,{index:c}=o,l=o.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),Se(a,h*3,c,l),a.needsUpdate=!0,n(a,h,s,r))return!0}return!1}function vy(i,t,e,n,s,r,a){oe.setBuffer(i._roots[t]),Hc(0,i,e,n,s,r,a),oe.clearBuffer()}function Hc(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=oe,u=i*2;if(Ye(u,c)){const h=Qe(i,l),p=un(u,c);fy(t,e,n,h,p,s,r,a)}else{const h=hn(i);ui(h,o,n,r,a)&&Hc(h,t,e,n,s,r,a);const p=fn(i,l);ui(p,o,n,r,a)&&Hc(p,t,e,n,s,r,a)}}const yy=["x","y","z"];function My(i,t,e,n,s,r){oe.setBuffer(i._roots[t]);const a=Gc(0,i,e,n,s,r);return oe.clearBuffer(),a}function Gc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=oe;let l=i*2;if(Ye(l,o)){const f=Qe(i,c),h=un(l,o);return dy(t,e,n,f,h,s,r)}else{const f=ed(i,c),h=yy[f],g=n.direction[h]>=0;let x,m;g?(x=hn(i),m=fn(i,c)):(x=fn(i,c),m=hn(i));const v=ui(x,a,n,s,r)?Gc(x,t,e,n,s,r):null;if(v){const E=v.point[h];if(g?E<=a[m+f]:E>=a[m+f+3])return v}const y=ui(m,a,n,s,r)?Gc(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const lo=new se,ps=new mn,ms=new mn,Ks=new Jt,Th=new Ve,uo=new Ve;function Sy(i,t,e,n){oe.setBuffer(i._roots[t]);const s=kc(0,i,e,n);return oe.clearBuffer(),s}function kc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=oe;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Th.set(e.boundingBox.min,e.boundingBox.max,n),s=Th),Ye(c,a)){const u=t.geometry,f=u.index,h=u.attributes.position,p=e.index,g=e.attributes.position,x=Qe(i,o),m=un(c,a);if(Ks.copy(n).invert(),e.boundsTree)return de(i,r,uo),uo.matrix.copy(Ks),uo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>uo.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x*3,y=(m+x)*3;_<y;_+=3)if(Se(ms,_,f,h),ms.needsUpdate=!0,v.intersectsTriangle(ms))return!0;return!1}});for(let d=x*3,v=(m+x)*3;d<v;d+=3){Se(ps,d,f,h),ps.a.applyMatrix4(Ks),ps.b.applyMatrix4(Ks),ps.c.applyMatrix4(Ks),ps.needsUpdate=!0;for(let _=0,y=p.count;_<y;_+=3)if(Se(ms,_,p,g),ms.needsUpdate=!0,ps.intersectsTriangle(ms))return!0}}else{const u=i+8,f=o[i+6];return de(u,r,lo),!!(s.intersectsBox(lo)&&kc(u,t,e,n,s)||(de(f,r,lo),s.intersectsBox(lo)&&kc(f,t,e,n,s)))}}const ho=new Jt,nc=new Ve,Js=new Ve,Ey=new w,by=new w,Ty=new w,Ay=new w;function wy(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),nc.set(t.boundingBox.min,t.boundingBox.max,e),nc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,f=t.index,h=dn.getPrimitive(),p=dn.getPrimitive();let g=Ey,x=by,m=null,d=null;s&&(m=Ty,d=Ay);let v=1/0,_=null,y=null;return ho.copy(e).invert(),Js.matrix.copy(ho),i.shapecast({boundsTraverseOrder:E=>nc.distanceToBox(E),intersectsBounds:(E,T,S)=>S<v&&S<a?(T&&(Js.min.copy(E.min),Js.max.copy(E.max),Js.needsUpdate=!0),!0):!1,intersectsRange:(E,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:P=>Js.distanceToBox(P),intersectsBounds:(P,M,b)=>b<v&&b<a,intersectsRange:(P,M)=>{for(let b=P,I=P+M;b<I;b++){Se(p,3*b,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let U=E,B=E+T;U<B;U++){Se(h,3*U,l,c),h.needsUpdate=!0;const L=h.distanceToTriangle(p,g,m);if(L<v&&(x.copy(g),d&&d.copy(m),v=L,_=U,y=b),L<r)return!0}}}});{const S=zs(t);for(let P=0,M=S;P<M;P++){Se(p,3*P,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let b=E,I=E+T;b<I;b++){Se(h,3*b,l,c),h.needsUpdate=!0;const U=h.distanceToTriangle(p,g,m);if(U<v&&(x.copy(g),d&&d.copy(m),v=U,_=b,y=P),U<r)return!0}}}}}),dn.releasePrimitive(h),dn.releasePrimitive(p),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(ho),x.applyMatrix4(ho),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function Ry(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,c,l=0;const u=i._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,g=!1){const x=h*2;if(o[x+15]===sa){const d=a[h+6],v=o[x+14];let _=1/0,y=1/0,E=1/0,T=-1/0,S=-1/0,P=-1/0;for(let M=d,b=d+v;M<b;M++){const I=3*i.resolveTriangleIndex(M);for(let U=0;U<3;U++){let B=I+U;B=n?n[B]:B;const L=s.getX(B),F=s.getY(B),H=s.getZ(B);L<_&&(_=L),L>T&&(T=L),F<y&&(y=F),F>S&&(S=F),H<E&&(E=H),H>P&&(P=H)}}return c[h+0]!==_||c[h+1]!==y||c[h+2]!==E||c[h+3]!==T||c[h+4]!==S||c[h+5]!==P?(c[h+0]=_,c[h+1]=y,c[h+2]=E,c[h+3]=T,c[h+4]=S,c[h+5]=P,!0):!1}else{const d=h+8,v=a[h+6],_=d+p,y=v+p;let E=g,T=!1,S=!1;t?E||(T=t.has(_),S=t.has(y),E=!T&&!S):(T=!0,S=!0);const P=E||T,M=E||S;let b=!1;P&&(b=f(d,p,E));let I=!1;M&&(I=f(v,p,E));const U=b||I;if(U)for(let B=0;B<3;B++){const L=d+B,F=v+B,H=c[L],Z=c[L+3],J=c[F],j=c[F+3];c[h+B]=H<J?H:J,c[h+B+3]=Z>j?Z:j}return U}}}function Cy(i,t,e,n,s,r,a){oe.setBuffer(i._roots[t]),Vc(0,i,e,n,s,r,a),oe.clearBuffer()}function Vc(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=oe,u=i*2;if(Ye(u,c)){const h=Qe(i,l),p=un(u,c);gy(t,e,n,h,p,s,r,a)}else{const h=hn(i);ui(h,o,n,r,a)&&Vc(h,t,e,n,s,r,a);const p=fn(i,l);ui(p,o,n,r,a)&&Vc(p,t,e,n,s,r,a)}}const Py=["x","y","z"];function Ly(i,t,e,n,s,r){oe.setBuffer(i._roots[t]);const a=Wc(0,i,e,n,s,r);return oe.clearBuffer(),a}function Wc(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=oe;let l=i*2;if(Ye(l,o)){const f=Qe(i,c),h=un(l,o);return _y(t,e,n,f,h,s,r)}else{const f=ed(i,c),h=Py[f],g=n.direction[h]>=0;let x,m;g?(x=hn(i),m=fn(i,c)):(x=fn(i,c),m=hn(i));const v=ui(x,a,n,s,r)?Wc(x,t,e,n,s,r):null;if(v){const E=v.point[h];if(g?E<=a[m+f]:E>=a[m+f+3])return v}const y=ui(m,a,n,s,r)?Wc(m,t,e,n,s,r):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const fo=new se,gs=new mn,_s=new mn,Qs=new Jt,Ah=new Ve,po=new Ve;function Dy(i,t,e,n){oe.setBuffer(i._roots[t]);const s=Xc(0,i,e,n);return oe.clearBuffer(),s}function Xc(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=oe;let c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Ah.set(e.boundingBox.min,e.boundingBox.max,n),s=Ah),Ye(c,a)){const u=t.geometry,f=u.index,h=u.attributes.position,p=e.index,g=e.attributes.position,x=Qe(i,o),m=un(c,a);if(Qs.copy(n).invert(),e.boundsTree)return de(i,r,po),po.matrix.copy(Qs),po.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>po.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let _=x,y=m+x;_<y;_++)if(Se(_s,3*t.resolveTriangleIndex(_),f,h),_s.needsUpdate=!0,v.intersectsTriangle(_s))return!0;return!1}});for(let d=x,v=m+x;d<v;d++){const _=t.resolveTriangleIndex(d);Se(gs,3*_,f,h),gs.a.applyMatrix4(Qs),gs.b.applyMatrix4(Qs),gs.c.applyMatrix4(Qs),gs.needsUpdate=!0;for(let y=0,E=p.count;y<E;y+=3)if(Se(_s,y,p,g),_s.needsUpdate=!0,gs.intersectsTriangle(_s))return!0}}else{const u=i+8,f=o[i+6];return de(u,r,fo),!!(s.intersectsBox(fo)&&Xc(u,t,e,n,s)||(de(f,r,fo),s.intersectsBox(fo)&&Xc(f,t,e,n,s)))}}const mo=new Jt,ic=new Ve,tr=new Ve,Iy=new w,Uy=new w,Ny=new w,Oy=new w;function Fy(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),ic.set(t.boundingBox.min,t.boundingBox.max,e),ic.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=t.attributes.position,f=t.index,h=dn.getPrimitive(),p=dn.getPrimitive();let g=Iy,x=Uy,m=null,d=null;s&&(m=Ny,d=Oy);let v=1/0,_=null,y=null;return mo.copy(e).invert(),tr.matrix.copy(mo),i.shapecast({boundsTraverseOrder:E=>ic.distanceToBox(E),intersectsBounds:(E,T,S)=>S<v&&S<a?(T&&(tr.min.copy(E.min),tr.max.copy(E.max),tr.needsUpdate=!0),!0):!1,intersectsRange:(E,T)=>{if(t.boundsTree){const S=t.boundsTree;return S.shapecast({boundsTraverseOrder:P=>tr.distanceToBox(P),intersectsBounds:(P,M,b)=>b<v&&b<a,intersectsRange:(P,M)=>{for(let b=P,I=P+M;b<I;b++){const U=S.resolveTriangleIndex(b);Se(p,3*U,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let B=E,L=E+T;B<L;B++){const F=i.resolveTriangleIndex(B);Se(h,3*F,l,c),h.needsUpdate=!0;const H=h.distanceToTriangle(p,g,m);if(H<v&&(x.copy(g),d&&d.copy(m),v=H,_=B,y=b),H<r)return!0}}}})}else{const S=zs(t);for(let P=0,M=S;P<M;P++){Se(p,3*P,f,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let b=E,I=E+T;b<I;b++){const U=i.resolveTriangleIndex(b);Se(h,3*U,l,c),h.needsUpdate=!0;const B=h.distanceToTriangle(p,g,m);if(B<v&&(x.copy(g),d&&d.copy(m),v=B,_=b,y=P),B<r)return!0}}}}}),dn.releasePrimitive(h),dn.releasePrimitive(p),v===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=v,n.faceIndex=_,s&&(s.point?s.point.copy(d):s.point=d.clone(),s.point.applyMatrix4(mo),x.applyMatrix4(mo),s.distance=x.sub(s.point).length(),s.faceIndex=y),n)}function By(){return typeof SharedArrayBuffer<"u"}const lr=new oe.constructor,Yo=new oe.constructor,ti=new ml(()=>new se),xs=new se,vs=new se,sc=new se,rc=new se;let oc=!1;function zy(i,t,e,n){if(oc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");oc=!0;const s=i._roots,r=t._roots;let a,o=0,c=0;const l=new Jt().copy(e).invert();for(let u=0,f=s.length;u<f;u++){lr.setBuffer(s[u]),c=0;const h=ti.getPrimitive();de(0,lr.float32Array,h),h.applyMatrix4(l);for(let p=0,g=r.length;p<g&&(Yo.setBuffer(r[p]),a=vn(0,0,e,l,n,o,c,0,0,h),Yo.clearBuffer(),c+=r[p].length,!a);p++);if(ti.releasePrimitive(h),lr.clearBuffer(),o+=s[u].length,a)break}return oc=!1,a}function vn(i,t,e,n,s,r=0,a=0,o=0,c=0,l=null,u=!1){let f,h;u?(f=Yo,h=lr):(f=lr,h=Yo);const p=f.float32Array,g=f.uint32Array,x=f.uint16Array,m=h.float32Array,d=h.uint32Array,v=h.uint16Array,_=i*2,y=t*2,E=Ye(_,x),T=Ye(y,v);let S=!1;if(T&&E)u?S=s(Qe(t,d),un(t*2,v),Qe(i,g),un(i*2,x),c,a+t,o,r+i):S=s(Qe(i,g),un(i*2,x),Qe(t,d),un(t*2,v),o,r+i,c,a+t);else if(T){const P=ti.getPrimitive();de(t,m,P),P.applyMatrix4(e);const M=hn(i),b=fn(i,g);de(M,p,xs),de(b,p,vs);const I=P.intersectsBox(xs),U=P.intersectsBox(vs);S=I&&vn(t,M,n,e,s,a,r,c,o+1,P,!u)||U&&vn(t,b,n,e,s,a,r,c,o+1,P,!u),ti.releasePrimitive(P)}else{const P=hn(t),M=fn(t,d);de(P,m,sc),de(M,m,rc);const b=l.intersectsBox(sc),I=l.intersectsBox(rc);if(b&&I)S=vn(i,P,e,n,s,r,a,o,c+1,l,u)||vn(i,M,e,n,s,r,a,o,c+1,l,u);else if(b)if(E)S=vn(i,P,e,n,s,r,a,o,c+1,l,u);else{const U=ti.getPrimitive();U.copy(sc).applyMatrix4(e);const B=hn(i),L=fn(i,g);de(B,p,xs),de(L,p,vs);const F=U.intersectsBox(xs),H=U.intersectsBox(vs);S=F&&vn(P,B,n,e,s,a,r,c,o+1,U,!u)||H&&vn(P,L,n,e,s,a,r,c,o+1,U,!u),ti.releasePrimitive(U)}else if(I)if(E)S=vn(i,M,e,n,s,r,a,o,c+1,l,u);else{const U=ti.getPrimitive();U.copy(rc).applyMatrix4(e);const B=hn(i),L=fn(i,g);de(B,p,xs),de(L,p,vs);const F=U.intersectsBox(xs),H=U.intersectsBox(vs);S=F&&vn(M,B,n,e,s,a,r,c,o+1,U,!u)||H&&vn(M,L,n,e,s,a,r,c,o+1,U,!u),ti.releasePrimitive(U)}}return S}const go=new Ve,wh=new se,Hy={strategy:Jf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class gl{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:s.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=t,o=new gl(e,{...n,[Ka]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=e.getIndex();if(c===null){const l=new Te(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...Hy,[Ka]:!1},e),e.useSharedArrayBuffer&&!By())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Ka]||(ny(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new se))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?Ry:my)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=r[l+15]===sa;if(u){const f=s[o+6],h=r[l+14];t(c,u,new Float32Array(n,o*4,6),f,h)}else{const f=o+cr/4,h=s[o+6],p=s[o+7];t(c,u,new Float32Array(n,o*4,6),p)||(a(f,c+1),a(h,c+1))}}}raycast(t,e=wn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],c=e.isMaterial,l=Array.isArray(e),u=a.groups,f=c?e.side:e,h=this.indirect?Cy:vy;for(let p=0,g=r.length;p<g;p++){const x=l?e[u[p].materialIndex].side:f,m=o.length;if(h(this,p,x,t,o,n,s),l){const d=u[p].materialIndex;for(let v=m,_=o.length;v<_;v++)o[v].face.materialIndex=d}}return o}raycastFirst(t,e=wn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=e.isMaterial,c=Array.isArray(e);let l=null;const u=a.groups,f=o?e.side:e,h=this.indirect?Ly:My;for(let p=0,g=r.length;p<g;p++){const x=c?e[u[p].materialIndex].side:f,m=h(this,p,x,t,n,s);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[p].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?Dy:Sy;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){const e=dn.getPrimitive(),n=this.indirect?xy:py;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const f=a;a=(h,p,g,x,m)=>f(h,p,g,x,m)?!0:n(h,p,this,o,g,x,e)}else a||(o?a=(f,h,p,g)=>n(f,h,this,o,p,g,e):a=(f,h,p)=>p);let c=!1,l=0;const u=this._roots;for(let f=0,h=u.length;f<h;f++){const p=u[f];if(c=cy(this,f,r,a,s,l),c)break;l+=p.byteLength}return dn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=dn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Se(a,x*3,o,c)}:g=>{Se(a,g*3,o,c)},u=dn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,p=t.indirect?g=>{const x=t.resolveTriangleIndex(g);Se(u,x*3,f,h)}:g=>{Se(u,g*3,f,h)};if(r){const g=(x,m,d,v,_,y,E,T)=>{for(let S=d,P=d+v;S<P;S++){p(S),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=x,b=x+m;M<b;M++)if(l(M),a.needsUpdate=!0,r(a,u,M,S,_,y,E,T))return!0}return!1};if(s){const x=s;s=function(m,d,v,_,y,E,T,S){return x(m,d,v,_,y,E,T,S)?!0:g(m,d,v,_,y,E,T,S)}}else s=g}return zy(this,t,e,s)}intersectsBox(t,e){return go.set(t.min,t.max,e),go.needsUpdate=!0,this.shapecast({intersectsBounds:n=>go.intersectsBox(n),intersectsTriangle:n=>go.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?Fy:wy)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return ly(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{de(0,new Float32Array(n),wh),t.union(wh)}),t}}const sd=1e-6,Gy=sd*.5,rd=Math.pow(10,-Math.log10(sd)),ky=Gy*rd;function An(i){return~~(i*rd+ky)}function Vy(i){return`${An(i.x)},${An(i.y)}`}function Rh(i){return`${An(i.x)},${An(i.y)},${An(i.z)}`}function Wy(i){return`${An(i.x)},${An(i.y)},${An(i.z)},${An(i.w)}`}function Xy(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function od(){return typeof SharedArrayBuffer<"u"}function qy(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),s=new Uint8Array(e);return new Uint8Array(n).set(s,0),new t(n)}function Yy(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function jy(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Yy(e,n);i.setIndex(new Te(s,1));for(let r=0;r<e;r++)s[r]=r}}function $y(i){return i.index?i.index.count:i.attributes.position.count}function _l(i){return $y(i)/3}const Zy=1e-8,Ky=new w;function Jy(i){return~~(i/3)}function Qy(i){return i%3}function Ch(i,t){return i.start-t.start}function Ph(i,t){return Ky.subVectors(t,i.origin).dot(i.direction)}function tM(i,t,e,n=Zy){i.sort(Ch),t.sort(Ch);for(let o=0;o<i.length;o++){const c=i[o];for(let l=0;l<t.length;l++){const u=t[l];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||i.splice(o+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(l+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){const f=c.end;c.end=u.start,u.start=f}else if(c.start>=u.start&&c.end>=u.end){const f=u.end;u.end=c.start,c.start=f}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),a(u)&&(t.splice(l,1),l--),a(c)){i.splice(o,1),o--;break}}}s(i),s(t);function s(o){for(let c=0;c<o.length;c++)a(o[c])&&(o.splice(c,1),c--)}function r(o,c){return Math.abs(c-o)<n}function a(o){return Math.abs(o.end-o.start)<n}}const Lh=1e-5,Dh=1e-4;class eM{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let s=1/0,r=null;for(let c=0,l=e.length;c<l;c++){const u=e[c];if(a(u,t)&&a(u,n))continue;const f=o(u,t),h=o(u,n),p=Math.min(f,h);p<s&&(s=p,r=u)}return r;function a(c,l){const u=c.origin.distanceTo(l.origin)>Lh;return c.direction.angleTo(l.direction)>Dh||u}function o(c,l){const u=c.origin.distanceTo(l.origin),f=c.direction.angleTo(l.direction);return u/Lh+f/Dh}}}const ac=new w,cc=new w,_o=new Os;function nM(i,t,e){const n=i.attributes,s=i.index,r=n.position,a=new Map,o=new Map,c=Array.from(t),l=new eM;for(let u=0,f=c.length;u<f;u++){const h=c[u],p=Jy(h),g=Qy(h);let x=3*p+g,m=3*p+(g+1)%3;s&&(x=s.getX(x),m=s.getX(m)),ac.fromBufferAttribute(r,x),cc.fromBufferAttribute(r,m),Xy(ac,cc,_o);let d,v=l.findClosestRay(_o);v===null&&(v=_o.clone(),l.addRay(v)),o.has(v)||o.set(v,{forward:[],reverse:[],ray:v}),d=o.get(v);let _=Ph(v,ac),y=Ph(v,cc);_>y&&([_,y]=[y,_]),_o.direction.dot(v.direction)<0?d.reverse.push({start:_,end:y,index:h}):d.forward.push({start:_,end:y,index:h})}return o.forEach(({forward:u,reverse:f},h)=>{tM(u,f,a,e),u.length===0&&f.length===0&&o.delete(h)}),{disjointConnectivityMap:a,fragmentMap:o}}const iM=new ut,lc=new w,sM=new ne,uc=["","",""];class rM{constructor(t=null){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8,t&&this.updateFrom(t)}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,s=this.disjointConnections.get(n);return s?s.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:s,degenerateEpsilon:r}=this,a=e?_:v,o=new Map,{attributes:c}=t,l=e?Object.keys(c):null,u=t.index,f=c.position;let h=_l(t);const p=h;let g=0;n&&(g=t.drawRange.start,t.drawRange.count!==1/0&&(h=~~(t.drawRange.count/3)));let x=this.data;(!x||x.length<3*p)&&(x=new Int32Array(3*p)),x.fill(-1);let m=0,d=new Set;for(let y=g,E=h*3+g;y<E;y+=3){const T=y;for(let S=0;S<3;S++){let P=T+S;u&&(P=u.getX(P)),uc[S]=a(P)}for(let S=0;S<3;S++){const P=(S+1)%3,M=uc[S],b=uc[P],I=`${b}_${M}`;if(o.has(I)){const U=T+S,B=o.get(I);x[U]=B,x[B]=U,o.delete(I),m+=2,d.delete(B)}else{const U=`${M}_${b}`,B=T+S;o.set(U,B),d.add(B)}}}if(s){const{fragmentMap:y,disjointConnectivityMap:E}=nM(t,d,r);d.clear(),y.forEach(({forward:T,reverse:S})=>{T.forEach(({index:P})=>d.add(P)),S.forEach(({index:P})=>d.add(P))}),this.unmatchedDisjointEdges=y,this.disjointConnections=E,m=h*3-d.size}this.matchedEdges=m,this.unmatchedEdges=d.size,this.data=x;function v(y){return lc.fromBufferAttribute(f,y),Rh(lc)}function _(y){let E="";for(let T=0,S=l.length;T<S;T++){const P=c[l[T]];let M;switch(P.itemSize){case 1:M=An(P.getX(y));break;case 2:M=Vy(iM.fromBufferAttribute(P,y));break;case 3:M=Rh(lc.fromBufferAttribute(P,y));break;case 4:M=Wy(sM.fromBufferAttribute(P,y));break}E!==""&&(E+="|"),E+=M}return E}}}class xr extends ee{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Jt,this._previousMatrix.elements.fill(0)}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,s=e.elements;for(let r=0;r<16;r++)if(n[r]!==s[r])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=od();if(n)for(const s in e){const r=e[s];if(r.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");r.array=qy(r.array)}if(t.boundsTree||(jy(t,{useSharedArrayBuffer:n}),t.boundsTree=new gl(t,{maxLeafTris:3,indirect:!0,useSharedArrayBuffer:n})),t.halfEdges||(t.halfEdges=new rM(t)),!t.groupIndices){const s=_l(t),r=new Uint16Array(s),a=t.groups;for(let o=0,c=a.length;o<c;o++){const{start:l,count:u}=a[o];for(let f=l/3,h=(l+u)/3;f<h;f++)r[f]=o}t.groupIndices=r}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}const oM=1e-14,hc=new w,Ih=new w,Uh=new w;function ei(i,t=oM){hc.subVectors(i.b,i.a),Ih.subVectors(i.c,i.a),Uh.subVectors(i.b,i.c);const e=hc.angleTo(Ih),n=hc.angleTo(Uh),s=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(s)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const fc=1e-10,er=1e-10,aM=1e-10,Fn=new pn,xe=new pn,Bn=new w,dc=new w,Nh=new w,xo=new yn,pc=new mn;class cM{constructor(){this._pool=[],this._index=0}getTriangle(){return this._index>=this._pool.length&&this._pool.push(new ce),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}class lM{constructor(){this.trianglePool=new cM,this.triangles=[],this.normal=new w,this.coplanarTriangleUsed=!1}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:s}=this;if(Array.isArray(t))for(let r=0,a=t.length;r<a;r++){const o=t[r];if(r===0)o.getNormal(s);else if(Math.abs(1-o.getNormal(Bn).dot(s))>fc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const c=n.getTriangle();c.copy(o),e.push(c)}else{t.getNormal(s);const r=n.getTriangle();r.copy(t),e.push(r)}}splitByTriangle(t){const{normal:e,triangles:n}=this;if(t.getNormal(dc).normalize(),Math.abs(1-Math.abs(dc.dot(e)))<aM){this.coplanarTriangleUsed=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.coplanarCount=0}const s=[t.a,t.b,t.c];for(let r=0;r<3;r++){const a=(r+1)%3,o=s[r],c=s[a];Bn.subVectors(c,o).normalize(),Nh.crossVectors(dc,Bn),xo.setFromNormalAndCoplanarPoint(Nh,o),this.splitByPlane(xo,t)}}else t.getPlane(xo),this.splitByPlane(xo,t)}splitByPlane(t,e){const{triangles:n,trianglePool:s}=this;pc.copy(e),pc.needsUpdate=!0;for(let r=0,a=n.length;r<a;r++){const o=n[r];if(!pc.intersectsTriangle(o,Fn,!0))continue;const{a:c,b:l,c:u}=o;let f=0,h=-1,p=!1,g=[],x=[];const m=[c,l,u];for(let d=0;d<3;d++){const v=(d+1)%3;Fn.start.copy(m[d]),Fn.end.copy(m[v]);const _=t.distanceToPoint(Fn.start),y=t.distanceToPoint(Fn.end);if(Math.abs(_)<er&&Math.abs(y)<er){p=!0;break}if(_>0?g.push(d):x.push(d),Math.abs(_)<er)continue;let E=!!t.intersectLine(Fn,Bn);!E&&Math.abs(y)<er&&(Bn.copy(Fn.end),E=!0),E&&!(Bn.distanceTo(Fn.start)<fc)&&(Bn.distanceTo(Fn.end)<fc&&(h=d),f===0?xe.start.copy(Bn):xe.end.copy(Bn),f++)}if(!p&&f===2&&xe.distance()>er)if(h!==-1){h=(h+1)%3;let d=0;d===h&&(d=(d+1)%3);let v=d+1;v===h&&(v=(v+1)%3);const _=s.getTriangle();_.a.copy(m[v]),_.b.copy(xe.end),_.c.copy(xe.start),ei(_)||n.push(_),o.a.copy(m[d]),o.b.copy(xe.start),o.c.copy(xe.end),ei(o)&&(n.splice(r,1),r--,a--)}else{const d=g.length>=2?x[0]:g[0];if(d===0){let T=xe.start;xe.start=xe.end,xe.end=T}const v=(d+1)%3,_=(d+2)%3,y=s.getTriangle(),E=s.getTriangle();m[v].distanceToSquared(xe.start)<m[_].distanceToSquared(xe.end)?(y.a.copy(m[v]),y.b.copy(xe.start),y.c.copy(xe.end),E.a.copy(m[v]),E.b.copy(m[_]),E.c.copy(xe.start)):(y.a.copy(m[_]),y.b.copy(xe.start),y.c.copy(xe.end),E.a.copy(m[v]),E.b.copy(m[_]),E.c.copy(xe.end)),o.a.copy(m[d]),o.b.copy(xe.end),o.c.copy(xe.start),ei(y)||n.push(y),ei(E)||n.push(E),ei(o)&&(n.splice(r,1),r--,a--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear(),this.coplanarTriangleUsed=!1}}function uM(i){return i=~~i,i+4-i%4}class Oh{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=od()?SharedArrayBuffer:ArrayBuffer,s=new e(new n(uM(t*e.BYTES_PER_ELEMENT)));this.array&&s.set(this.array,0),this.array=s}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let s=0,r=t.length;s<r;s++)e[n+s]=t[s];this.length+=t.length}clear(){this.length=0}}class hM{constructor(){this.groupAttributes=[{}],this.groupCount=0}getType(t){return this.groupAttributes[0][t].type}getItemSize(t){return this.groupAttributes[0][t].itemSize}getNormalized(t){return this.groupAttributes[0][t].normalized}getCount(t){if(this.groupCount<=t)return 0;const e=this.getGroupAttrArray("position",t);return e.length/e.itemSize}getTotalLength(t){const{groupCount:e,groupAttributes:n}=this;let s=0;for(let r=0;r<e;r++){const a=n[r];s+=a[t].length}return s}getGroupAttrSet(t=0){const{groupAttributes:e}=this;if(e[t])return this.groupCount=Math.max(this.groupCount,t+1),e[t];const n=e[0];for(this.groupCount=Math.max(this.groupCount,t+1);t>=e.length;){const s={};e.push(s);for(const r in n){const a=n[r],o=new Oh(a.type);o.itemSize=a.itemSize,o.normalized=a.normalized,s[r]=o}}return e[t]}getGroupAttrArray(t,e=0){const{groupAttributes:n}=this;if(!n[0][t])throw new Error(`TypedAttributeData: Attribute with "${t}" has not been initialized`);return this.getGroupAttrSet(e)[t]}initializeArray(t,e,n,s){const{groupAttributes:r}=this,o=r[0][t];if(o){if(o.type!==e)for(let c=0,l=r.length;c<l;c++){const u=r[c][t];u.setType(e),u.itemSize=n,u.normalized=s}}else for(let c=0,l=r.length;c<l;c++){const u=new Oh(e);u.itemSize=n,u.normalized=s,r[c][t]=u}}clear(){this.groupCount=0;const{groupAttributes:t}=this;t.forEach(e=>{for(const n in e)e[n].clear()})}delete(t){this.groupAttributes.forEach(e=>{delete e[t]})}reset(){this.groupAttributes=[],this.groupCount=0}}class Fh{constructor(){this.intersectionSet={},this.ids=[]}add(t,e){const{intersectionSet:n,ids:s}=this;n[t]||(n[t]=[],s.push(t)),n[t].push(e)}}const ad=0,cd=1,fM=2,dM=3,pM=4,ld=5,ud=6,sn=new Os,Bh=new Jt,ze=new ce,zn=new w,zh=new ne,Hh=new ne,Gh=new ne,mc=new ne,vo=new ne,yo=new ne,kh=new pn,gc=new w,_c=1e-8,mM=1e-15,wi=-1,Ri=1,Io=-2,Uo=2,ur=0,vi=1,xl=2,gM=1e-14;let No=null;function Vh(i){No=i}function hd(i,t){i.getMidpoint(sn.origin),i.getNormal(sn.direction);const e=t.raycastFirst(sn,cn);return!!(e&&sn.direction.dot(e.face.normal)>0)?wi:Ri}function _M(i,t){function e(){return Math.random()-.5}i.getNormal(gc),sn.direction.copy(gc),i.getMidpoint(sn.origin);const n=3;let s=0,r=1/0;for(let a=0;a<n;a++){sn.direction.x+=e()*_c,sn.direction.y+=e()*_c,sn.direction.z+=e()*_c,sn.direction.multiplyScalar(-1);const o=t.raycastFirst(sn,cn);if(!!(o&&sn.direction.dot(o.face.normal)>0)&&s++,o!==null&&(r=Math.min(r,o.distance)),r<=mM)return o.face.normal.dot(gc)>0?Uo:Io;if(s/n>.5||(a-s+1)/n>.5)break}return s/n>.5?wi:Ri}function xM(i,t){const e=new Fh,n=new Fh;return Bh.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Bh,{intersectsTriangles(s,r,a,o){if(!ei(s)&&!ei(r)){let c=s.intersectsTriangle(r,kh,!0);if(!c){const l=s.plane,u=r.plane,f=l.normal,h=u.normal;f.dot(h)===1&&Math.abs(l.constant-u.constant)<gM&&(c=!0)}if(c){let l=i.geometry.boundsTree.resolveTriangleIndex(a),u=t.geometry.boundsTree.resolveTriangleIndex(o);e.add(l,u),n.add(u,l),No&&(No.addEdge(kh),No.addIntersectingTriangles(a,s,o,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function vM(i,t,e,n,s,r,a=!1){const o=e.attributes,c=e.index,l=i*3,u=c.getX(l+0),f=c.getX(l+1),h=c.getX(l+2);for(const p in r){const g=o[p],x=r[p];if(!(p in o))throw new Error(`CSG Operations: Attribute ${p} not available on geometry.`);const m=g.itemSize;p==="position"?(ze.a.fromBufferAttribute(g,u).applyMatrix4(n),ze.b.fromBufferAttribute(g,f).applyMatrix4(n),ze.c.fromBufferAttribute(g,h).applyMatrix4(n),xc(ze.a,ze.b,ze.c,t,3,x,a)):p==="normal"?(ze.a.fromBufferAttribute(g,u).applyNormalMatrix(s),ze.b.fromBufferAttribute(g,f).applyNormalMatrix(s),ze.c.fromBufferAttribute(g,h).applyNormalMatrix(s),a&&(ze.a.multiplyScalar(-1),ze.b.multiplyScalar(-1),ze.c.multiplyScalar(-1)),xc(ze.a,ze.b,ze.c,t,3,x,a,!0)):(zh.fromBufferAttribute(g,u),Hh.fromBufferAttribute(g,f),Gh.fromBufferAttribute(g,h),xc(zh,Hh,Gh,t,m,x,a))}}function yM(i,t,e,n,s,r,a,o=!1){vc(i,n,s,r,a,o),vc(o?e:t,n,s,r,a,o),vc(o?t:e,n,s,r,a,o)}function fd(i,t,e=!1){switch(i){case ad:if(t===Ri||t===Uo&&!e)return vi;break;case cd:if(e){if(t===wi)return ur}else if(t===Ri||t===Io)return vi;break;case fM:if(e){if(t===Ri||t===Io)return vi}else if(t===wi)return ur;break;case pM:if(t===wi)return ur;if(t===Ri)return vi;break;case dM:if(t===wi||t===Uo&&!e)return vi;break;case ld:if(!e&&(t===Ri||t===Io))return vi;break;case ud:if(!e&&(t===wi||t===Uo))return vi;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return xl}function xc(i,t,e,n,s,r,a=!1,o=!1){const c=l=>{r.push(l.x),s>1&&r.push(l.y),s>2&&r.push(l.z),s>3&&r.push(l.w)};mc.set(0,0,0,0).addScaledVector(i,n.a.x).addScaledVector(t,n.a.y).addScaledVector(e,n.a.z),vo.set(0,0,0,0).addScaledVector(i,n.b.x).addScaledVector(t,n.b.y).addScaledVector(e,n.b.z),yo.set(0,0,0,0).addScaledVector(i,n.c.x).addScaledVector(t,n.c.y).addScaledVector(e,n.c.z),o&&(mc.normalize(),vo.normalize(),yo.normalize()),c(mc),a?(c(yo),c(vo)):(c(vo),c(yo))}function vc(i,t,e,n,s,r=!1){for(const a in s){const o=t[a],c=s[a];if(!(a in t))throw new Error(`CSG Operations: Attribute ${a} no available on geometry.`);const l=o.itemSize;a==="position"?(zn.fromBufferAttribute(o,i).applyMatrix4(e),c.push(zn.x,zn.y,zn.z)):a==="normal"?(zn.fromBufferAttribute(o,i).applyNormalMatrix(n),r&&zn.multiplyScalar(-1),c.push(zn.x,zn.y,zn.z)):(c.push(o.getX(i)),l>1&&c.push(o.getY(i)),l>2&&c.push(o.getZ(i)),l>3&&c.push(o.getW(i)))}}class MM{constructor(t){this.triangle=new ce().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ce().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class Wh{constructor(){this.data={}}addTriangleIntersection(t,e,n,s){const{data:r}=this;r[t]||(r[t]=new MM(e)),r[t].addTriangle(n,s)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const s in e)n.push(e[s].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,s=new Set,r=[],a=o=>{if(n[o])if(e!==null)n[o].intersects[e]&&r.push(n[o].intersects[e]);else{const c=n[o].intersects;for(const l in c)s.has(l)||(s.add(l),r.push(c[l]))}};if(t!==null)a(t);else for(const o in n)a(o);return r}reset(){this.data={}}}class SM{constructor(){this.enabled=!1,this.triangleIntersectsA=new Wh,this.triangleIntersectsB=new Wh,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,s){const{triangleIntersectsA:r,triangleIntersectsB:a}=this;r.addTriangleIntersection(t,e,n,s),a.addTriangleIntersection(n,s,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Vh(this))}complete(){this.enabled&&Vh(null)}}const oi=new Jt,jo=new qt,yi=new ce,Mo=new ce,Qn=new ce,So=new ce,En=[],Ii=[];function EM(i){for(const t of i)return t}function bM(i,t,e,n,s,r={}){const{useGroups:a=!0}=r,{aIntersections:o,bIntersections:c}=xM(i,t),l=[];let u=null,f;return f=a?0:-1,Xh(i,t,o,e,!1,n,s,f),qh(i,t,o,e,!1,s,f),e.findIndex(p=>p!==ud&&p!==ld)!==-1&&(f=a?i.geometry.groups.length||1:-1,Xh(t,i,c,e,!0,n,s,f),qh(t,i,c,e,!0,s,f)),En.length=0,Ii.length=0,{groups:l,materials:u}}function Xh(i,t,e,n,s,r,a,o=0){const c=i.matrixWorld.determinant()<0;oi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),jo.getNormalMatrix(i.matrixWorld).multiplyScalar(c?-1:1);const l=i.geometry.groupIndices,u=i.geometry.index,f=i.geometry.attributes.position,h=t.geometry.boundsTree,p=t.geometry.index,g=t.geometry.attributes.position,x=e.ids,m=e.intersectionSet;for(let d=0,v=x.length;d<v;d++){const _=x[d],y=o===-1?0:l[_]+o,E=3*_,T=u.getX(E+0),S=u.getX(E+1),P=u.getX(E+2);yi.a.fromBufferAttribute(f,T).applyMatrix4(oi),yi.b.fromBufferAttribute(f,S).applyMatrix4(oi),yi.c.fromBufferAttribute(f,P).applyMatrix4(oi),r.reset(),r.initialize(yi);const M=m[_];for(let I=0,U=M.length;I<U;I++){const B=3*M[I],L=p.getX(B+0),F=p.getX(B+1),H=p.getX(B+2);Mo.a.fromBufferAttribute(g,L),Mo.b.fromBufferAttribute(g,F),Mo.c.fromBufferAttribute(g,H),r.splitByTriangle(Mo)}const b=r.triangles;for(let I=0,U=b.length;I<U;I++){const B=b[I],L=r.coplanarTriangleUsed?_M(B,h):hd(B,h);En.length=0,Ii.length=0;for(let F=0,H=n.length;F<H;F++){const Z=fd(n[F],L,s);Z!==xl&&(Ii.push(Z),En.push(a[F].getGroupAttrSet(y)))}if(En.length!==0){yi.getBarycoord(B.a,So.a),yi.getBarycoord(B.b,So.b),yi.getBarycoord(B.c,So.c);for(let F=0,H=En.length;F<H;F++){const Z=En[F],j=Ii[F]===ur;vM(_,So,i.geometry,i.matrixWorld,jo,Z,c!==j)}}}}return x.length}function qh(i,t,e,n,s,r,a=0){const o=i.matrixWorld.determinant()<0;oi.copy(t.matrixWorld).invert().multiply(i.matrixWorld),jo.getNormalMatrix(i.matrixWorld).multiplyScalar(o?-1:1);const c=t.geometry.boundsTree,l=i.geometry.groupIndices,u=i.geometry.index,f=i.geometry.attributes,h=f.position,p=[],g=i.geometry.halfEdges,x=new Set,m=_l(i.geometry);for(let d=0,v=m;d<v;d++)d in e.intersectionSet||x.add(d);for(;x.size>0;){const d=EM(x);x.delete(d),p.push(d);const v=3*d,_=u.getX(v+0),y=u.getX(v+1),E=u.getX(v+2);Qn.a.fromBufferAttribute(h,_).applyMatrix4(oi),Qn.b.fromBufferAttribute(h,y).applyMatrix4(oi),Qn.c.fromBufferAttribute(h,E).applyMatrix4(oi);const T=hd(Qn,c);Ii.length=0,En.length=0;for(let S=0,P=n.length;S<P;S++){const M=fd(n[S],T,s);M!==xl&&(Ii.push(M),En.push(r[S]))}for(;p.length>0;){const S=p.pop();for(let P=0;P<3;P++){const M=g.getSiblingTriangleIndex(S,P);M!==-1&&x.has(M)&&(p.push(M),x.delete(M))}if(En.length!==0){const P=3*S,M=u.getX(P+0),b=u.getX(P+1),I=u.getX(P+2),U=a===-1?0:l[S]+a;if(Qn.a.fromBufferAttribute(h,M),Qn.b.fromBufferAttribute(h,b),Qn.c.fromBufferAttribute(h,I),!ei(Qn))for(let B=0,L=En.length;B<L;B++){const F=Ii[B],H=En[B].getGroupAttrSet(U),Z=F===ur;yM(M,b,I,f,i.matrixWorld,jo,H,Z!==o)}}}}}function TM(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const s=e.start,r=n.start+n.count;n.start=s,n.count=r-s,i.splice(t,1),t--}}}function AM(i,t,e,n){e.clear();const s=i.attributes;for(let r=0,a=n.length;r<a;r++){const o=n[r],c=s[o];e.initializeArray(o,c.array.constructor,c.itemSize,c.normalized)}for(const r in e.attributes)n.includes(r)||e.delete(r);for(const r in t.attributes)n.includes(r)||(t.deleteAttribute(r),t.dispose())}function wM(i,t,e){let n=!1,s=-1;const r=i.attributes,a=t.groupAttributes[0];for(const c in a){const l=t.getTotalLength(c),u=t.getType(c),f=t.getItemSize(c),h=t.getNormalized(c);let p=r[c];(!p||p.array.length<l)&&(p=new Te(new u(l),f,h),i.setAttribute(c,p),n=!0);let g=0;for(let x=0,m=Math.min(e.length,t.groupCount);x<m;x++){const d=e[x].index,{array:v,type:_,length:y}=t.groupAttributes[d][c],E=new _(v.buffer,0,y);p.array.set(E,g),g+=E.length}p.needsUpdate=!0,s=l/p.itemSize}if(i.index){const c=i.index.array;if(c.length<s)i.index=null,n=!0;else for(let l=0,u=c.length;l<u;l++)c[l]=l}let o=0;i.clearGroups();for(let c=0,l=Math.min(e.length,t.groupCount);c<l;c++){const{index:u,materialIndex:f}=e[c],h=t.getCount(u);h!==0&&(i.addGroup(o,h,f),o+=h)}i.setDrawRange(0,s),i.boundsTree=null,n&&i.dispose()}function Yh(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class RM{constructor(){this.triangleSplitter=new lM,this.attributeData=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.debug=new SM}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(e=>({...e}))}evaluate(t,e,n,s=new xr){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s],r=!1),s.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:a,attributeData:o,attributes:c,useGroups:l,consolidateGroups:u,debug:f}=this;for(;o.length<s.length;)o.push(new hM);s.forEach((d,v)=>{AM(t.geometry,d.geometry,o[v],c)}),f.init(),bM(t,e,n,a,o,{useGroups:l}),f.complete();const h=this.getGroupRanges(t.geometry),p=Yh(h,t.material),g=this.getGroupRanges(e.geometry),x=Yh(g,e.material);g.forEach(d=>d.materialIndex+=p.length);let m=[...h,...g].map((d,v)=>({...d,index:v}));if(l){const d=[...p,...x];u&&(m=m.map(_=>{const y=d[_.materialIndex];return _.materialIndex=d.indexOf(y),_}).sort((_,y)=>_.materialIndex-y.materialIndex));const v=[];for(let _=0,y=d.length;_<y;_++){let E=!1;for(let T=0,S=m.length;T<S;T++){const P=m[T];P.materialIndex===_&&(E=!0,P.materialIndex=v.length)}E&&v.push(d[_])}s.forEach(_=>{_.material=v})}else m=[{start:0,count:1/0,index:0,materialIndex:0}],s.forEach(d=>{d.material=p[0]});return s.forEach((d,v)=>{const _=d.geometry;wM(_,o[v],m),u&&TM(_.groups)}),r?s:s[0]}evaluateHierarchy(t,e=new xr){t.updateMatrixWorld(!0);const n=(r,a)=>{const o=r.children;for(let c=0,l=o.length;c<l;c++){const u=o[c];u.isOperationGroup?n(u,a):a(u)}},s=r=>{const a=r.children;let o=!1;for(let l=0,u=a.length;l<u;l++){const f=a[l];o=s(f)||o}const c=r.isDirty();if(c&&r.markUpdated(),o&&!r.isOperationGroup){let l;return n(r,u=>{l?l=this.evaluate(l,u,u.operation):l=this.evaluate(r,u,u.operation)}),r._cachedGeometry=l.geometry,r._cachedMaterials=l.material,!0}else return o||c};return s(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const dd=160,pd=new RM;let Eo=null;function CM(i,t,e){let n=new xr(new Cn(i,e,t));n.updateMatrixWorld();for(const s of[-1,1]){const r=new xr(new na(t/2,t/2,e,20));r.position.x=s*i/2,r.updateMatrixWorld(),n=pd.evaluate(n,r,ad)}return n}function PM(){if(Eo)return Eo;const{W:i}=Co,t=Co.D-dd,e=Co.D/2-t/2;let n=new xr(new Cn(i,3,t));n.position.z=e,n.updateMatrixWorld();for(const s of[-1,1])for(let r=0;r<9;r++)for(let a=0;a<3;a++){const o=e+(r-4)*46,c=s*(58+a*50+(r%2?25:0));if(Math.abs(c)>i/2-30)continue;const l=CM(40,8,9);l.position.set(c,0,o),l.updateMatrixWorld(),n=pd.evaluate(n,l,cd)}return Eo=n.geometry,Eo}function md(){const i=new Le,{W:t,D:e,LIP:n,EARS:s}=Co,r=e-dd,a=e/2-r/2,o=new ee(PM(),z.shelf);o.castShadow=o.receiveShadow=!0,i.add(o);for(const u of[-1,1])q(i,K(3,n,r,z.shelf),u*(t/2-1.5),n/2-1.5,a);q(i,K(t-6,16,3,z.shelf),0,6.5,e/2-1.5),q(i,K(t-6,12,3,z.shelf),0,5,-e/2+1.5);for(const u of[-1,1])q(i,K(3,12,e,z.shelf),u*(t/2-1.5),5,0);const c=(s-t)/2+6,l=t/2+(s-t)/4;for(const u of[-1,1])q(i,K(c,40,3,z.rail),u*l,18,e/2+1.5),q(i,K(18,40,200,z.rail),u*(t/2+10.5),18,-245),q(i,K(c,40,3,z.rail),u*l,18,-351.5);return i}const LM={pcb:z.pcbBlack,slot:z.slot,connector:z.connector,chip:z.chip,heatsink:z.heatsink,bracket:z.bracket,parts:z.cap,shroud:z.cardShroud,back:z.cardBack,gold:z.gold,fan:z.fanBlade},gd=new Map,DM=["device-vertical","host-retimer","switch-pm50100","gpu-maxq"];function IM(i){const e=new DataView(i).getUint32(0,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,4,e))),s=new Le;s.userData.solidBoxes=[];let r=4+e;for(const{n:a,v:o,i:c,b:l}of n){const u=new Float32Array(i.slice(r,r+o*12));r+=o*12;const f=new Uint32Array(i.slice(r,r+c*4));r+=c*4;const h=new ke;h.setAttribute("position",new Te(u,3)),h.setIndex(new Te(f,1)),h.computeVertexNormals();const p=new ee(h,LM[a]||z.cap);p.castShadow=p.receiveShadow=!0,p.userData.noCollide=!0,s.add(p);for(const g of l||[])s.userData.solidBoxes.push(g)}return s}async function UM(i="./"){await Promise.all(DM.map(async t=>{try{const e=await fetch(`${i}cad/${t}.bin`);if(!e.ok)throw new Error(e.status);gd.set(t,IM(await e.arrayBuffer()))}catch(e){console.warn(`CAD mesh ${t} unavailable (${e.message}) — using parametric fallback`)}}))}function oa(i){const t=gd.get(i);return t?t.clone():null}function _d(){const i=new Le,t=oa("gpu-maxq");if(t)return i.add(t),i;const{L:e,H:n,T:s}=Po,r=x=>e/2-x,a=n-11,o=(n-a)/2;q(i,K(s,a,e,z.cardShroud),0,o,0),q(i,K(3,11,89,z.gold),0,-n/2+5.5,r(47)-44.5),q(i,K(s-6,3,20,z.slot),0,-n/2+12,r(155));const c=r(215),l=o,u=me(37,1.6,z.gold,40);u.rotation.z=Math.PI/2,q(i,u,s/2+.3,l,c);const f=me(34,3,z.vent,40);f.rotation.z=Math.PI/2,q(i,f,s/2-.5,l,c);const h=me(17,2.5,z.bracket,28);h.rotation.z=Math.PI/2,q(i,h,s/2+.6,l,c);for(let x=0;x<18;x++){const m=x/18*Math.PI*2,d=25,v=K(1.6,1.2,13,z.fanBlade);v.rotation.x=m+.5,q(i,v,s/2+.4,l+Math.sin(m)*d,c+Math.cos(m)*d)}q(i,K(s-4,2,33,z.cardBack),0,n/2+.6,r(17.5)),q(i,K(s-12,1.2,20,z.gold),0,n/2+1.8,r(17.5)),q(i,K(s-8,2.6,160,z.gold),0,n/2+.8,r(115));for(let x=0;x<39;x++)q(i,K(s-10,1.4,1.1,z.vent),0,n/2+2.1,r(37+x*4.1));q(i,K(s-14,1.2,26,z.gold),0,n/2+.9,r(238)),q(i,K(s-10,14,15,z.vent),0,n/2-8,-e/2+8),q(i,K(18,9,9,z.connector),0,n/2-8,-e/2+6),q(i,K(14,6.5,2,z.slot),0,n/2-8,-e/2+1),q(i,K(s+2,n-4,2,z.bracket),0,2,e/2+1);for(let x=0;x<4;x++)q(i,K(3,6,16,z.slot),-s/4,26-x*15,e/2+2).rotation.y=Math.PI/2;for(let x=0;x<12;x++){const m=K(14,2.4,1.6,z.slot);m.rotation.z=.45,q(i,m,s/4-2,34-x*6.4,e/2+2.2)}q(i,K(8,8,1.6,z.slot),-s/4,42,e/2+2.2);const p=-s/4+2,g=n/2+7.3;return q(i,K(21.6,7.3,2,z.bracket),p,n/2+7.3/2,e/2+1),q(i,K(6,3.4,2,z.bracket),p-10,g+1.7,e/2+1),q(i,K(12,1.6,11.43,z.bracket),p,g+.8,e/2+2+11.43/2),q(i,K(4.42,.5,8.5,z.slot),p,g+1.7,e/2+2+11.43-4.6),i}const Me={slotX:4,slotZ:7.5,mcioX:-5.2,mcioZ:[-2.5,31.5],auxX:-4.3,auxZ:-30,holesZ:[-52,52]};function xd(){const i=new Le,t=oa("device-vertical");if(t)return i.add(t),q(i,K(19.8,1.5,124.8,z.pcbBlack),0,0,0),i;const{W:e,PCB:n,L:s}=$f;q(i,K(e,n,s,z.pcbBlack),0,0,0),q(i,K(9.2,12,91,z.slot),Me.slotX,n/2+6,Me.slotZ),q(i,K(2.2,2,89,z.cablePlug),Me.slotX,n/2+11,Me.slotZ);for(const r of Me.mcioZ)q(i,K(7.8,11,25.8,z.connector),Me.mcioX,-n/2-5.5,r),q(i,K(3.5,2,23,z.slot),Me.mcioX,-n/2-11.5,r);q(i,K(11,13,14.5,z.chip),Me.auxX,-n/2-6.5,Me.auxZ),q(i,K(8,2.6,10,z.chip),3,n/2+1.3,-54);for(const r of Me.holesZ)for(const a of[-1,1])q(i,me(2.2,n+1.2,z.gold,10),a*6.5,0,r);return i}const an=(i,t)=>[i-75,55-t],NM=[[44.2,110],[75.3,110],[106.1,110],[44.2,0],[75.3,0],[106.1,0]],bi={CN6:an(23.2,85.8),CN7:an(23.2,54.4),CN8:an(23.2,22.4),CN2:an(125.6,85.3),CN1:an(125.6,54.9),CN12:an(125.6,22.4)},bo=an(139.9,39.3),hr=[146.5-75,12,55-17.3],ys=(i,t)=>[i-75,5,t>55?-64:64],Ms=([i,t])=>[i,16,t],Ss={device:[ys(44.2,110),ys(44.2,0),ys(75.3,110),ys(75.3,0),ys(106.1,110),ys(106.1,0),Ms(bi.CN6),Ms(bi.CN8)],host:[Ms(bi.CN2),Ms(bi.CN1),Ms(bi.CN12),Ms(bi.CN7)]},Es=(i,t)=>[0,0,t>55?-1:1],bs=[0,1,0],To={device:[Es(44.2,110),Es(44.2,0),Es(75.3,110),Es(75.3,0),Es(106.1,110),Es(106.1,0),bs,bs],host:[bs,bs,bs,bs]},vd=8;function jh(i){q(i,K(86,2.5,87,z.chip),0,-2,0);for(const t of[-40,40])for(const e of[-40.5,40.5])q(i,me(3,1.6,z.caster,12),t,-3.5,e);for(const t of[25,125])for(const e of[5,105]){const[n,s]=an(t,e);q(i,me(2.6,vd-.6,z.gold,12),n,-8.6/2,s)}}function yd(){const i=new Le,t=oa("switch-pm50100");if(t){i.add(t),q(i,K(149.8,1.5,109.8,z.pcbBlack),0,.2,0);const n=Bi(40);return n.position.set(0,21.5,0),i.add(n),jh(i),i}jh(i),q(i,K(150,2,110,z.pcbBlack),0,0,0);for(const n of[25,125])for(const s of[5,105]){const[r,a]=an(n,s);q(i,me(3.6,.6,z.gold,16),r,1.2,a),q(i,me(1.8,1,z.slot,12),r,1.4,a)}q(i,K(40,3,40,z.chip),0,2.5,0);for(const n of[-40,40])for(const s of[-40,40])q(i,me(2.4,7,z.gold,10),n,4.5,s);q(i,K(90,5,91,z.heatsink),0,9.5,0);for(let n=-10;n<=10;n++)q(i,K(3,18,89,z.heatsink),n*4.3,21,0);const e=Bi(40);e.position.set(0,33,0),i.add(e);for(const[n,s]of NM){const[r]=an(n,s),a=s>55?-1:1;q(i,K(27.5,8,14,z.connector),r,5,a*52),q(i,K(22,4.5,2,z.slot),r,5,a*59.5)}for(const[n,s]of Object.values(bi))q(i,K(7,13,27.5,z.connector),n,7.5,s),q(i,K(3.5,2,23,z.slot),n,14.2,s);q(i,K(7,13,16,z.connector),bo[0],7.5,bo[1]),q(i,K(3.5,2,12,z.slot),bo[0],14.2,bo[1]),q(i,K(13,11,12,z.chip),hr[0],6.5,hr[2]),q(i,K(6,5,8,z.slot),an(4.7,7.1)[0],3.5,an(4.7,7.1)[1]);for(let n=0;n<3;n++)q(i,K(10,4,3,z.slot),-66,3,-40+n*6);return q(i,K(17,6,33,z.pcb),-63,4,8),q(i,K(17,6,33,z.pcb),60,4,-38),q(i,K(11,.4,17,z.label),-63,1.2,-22),i}const Xe={mb10:[-51.5,20],mb18:[-16,20],cpu8:[[18,20],[37.5,20],[56.5,20],[18,0],[37.5,0],[56.5,0],[18,-18],[37.5,-18],[56.5,-18]],hpwr:[[-3,0],[-3,-18]],peri:[[-51.5,0],[-37.5,0],[-23.5,0],[-51.5,-18],[-37.5,-18],[-23.5,-18]]};function Md(i=!1){const t=new Le,{W:e,H:n,L:s}=Fv,r=8;if(q(t,K(e,n,s,z.psuBody),0,0,0),i){q(t,me(62,2.2,z.noctuaRim,36),0,n/2+.6,r),q(t,me(57,1.6,z.vent,36),0,n/2+1.2,r);const o=Bi(52,9);o.traverse(c=>{c.material===z.fanBlade&&(c.material=z.noctua)}),o.position.set(0,n/2+.8,r),t.add(o);for(let c=0;c<5;c++){const l=K(2.4,1.2,112,z.noctuaRim);l.rotation.y=c/5*Math.PI,q(t,l,0,n/2+2.4,r)}}else{q(t,me(66,1.8,z.psuGrille,40),0,n/2+.5,r);const o=Bi(58,7);o.position.set(0,n/2+1,r),t.add(o);for(const[c,l]of[[-s/2+26,.35],[s/2-26,.35]]){const u=K(e-4,.8,22,z.armor);u.rotation.y=l,q(t,u,0,n/2+.9,c)}q(t,K(26,.8,11,z.armor),0,n/2+2,r)}const a=([o,c],l,u=9)=>{q(t,K(l,u,3,z.slot),o,c,-s/2-1.2),q(t,K(l-3,u-3,1.6,z.cablePlug),o,c,-s/2-2.4)};a(Xe.mb10,21),a(Xe.mb18,38);for(const o of Xe.cpu8)a(o,17);for(const o of Xe.peri)a(o,13);for(const o of Xe.hpwr)a(o,19,8),q(t,K(9,2.2,2.5,z.slot),o[0],o[1]+5.4,-s/2-1);q(t,K(e-10,n-10,1.6,z.psuGrille),0,0,s/2+.4),q(t,K(30,26,4,z.slot),-42,0,s/2+1.6),q(t,K(20,24,4,z.chip),-13,0,s/2+1.6),q(t,K(11,11,3.4,z.connector),8,-4,s/2+1.4),q(t,K(16,3,1,z.label),8,6,s/2+1.4);for(const o of[-1,1]){const c=K(1.4,22,62,z.armor);c.rotation.x=.12,q(t,c,o*(e/2+.4),4,-18),q(t,K(1,8,34,z.label),o*(e/2+.3),-28,62)}return q(t,K(e*.72,1,s*.6,z.label),0,-n/2-.4,0),t}const ae=(i,t)=>[i-152.5,t-165],Sd=[141.3,121,100.6,80.3,60,39.7,19.4].map(i=>i-152.5),qc=79.5-165,OM=[0,2,4,6].map(i=>Sd[i]),yc={atx24:ae(224,326),eps:[ae(297,46),ae(297,262)]},FM=ae(224,170);function Ed(){const i=new Le;q(i,K(305,2.5,330,z.pcbBlack),0,0,0);const t=1.25,[e,n]=FM;q(i,K(74,3,80,z.bracket),e,t+1.5,n),q(i,K(60,3.6,68,z.chip),e,t+2,n),q(i,K(52,2.4,60,z.bracket),e,t+4.6,n),q(i,K(58,8,66,z.heatsink),e,t+10,n);for(let u=0;u<6;u++)q(i,me(3,42,z.heatsink,12),e+(u-2.5)*9,t+32,n);for(let u=48;u<=118;u+=3)q(i,K(128,1.3,96,z.heatsink),e,u,n);const s=Bi(34);s.rotation.x=Math.PI/2,s.position.set(e,83,n-52),i.add(s);for(const u of[151.5,160.1,168.6,177.2,271.7,280.3,288.9,297.4]){const[f]=ae(u,0);q(i,K(7.5,4.5,140,z.slot),f,t+2.2,n),q(i,K(4.6,30,133.4,z.chip),f,t+16,n)}for(const u of Sd)q(i,K(9,10,94,z.bracket),u,t+5,qc),q(i,K(5.5,1.8,89,z.slot),u,t+10.2,qc);const r=[[13.5,11,11,z.chip],[22,14,14,z.connector],[38,14,14,z.connector],[51.5,14,14,z.connector],[60,14,12,z.connector],[79,14,12,z.connector],[100,18,15,z.connector],[115.5,16,7,z.slot]];for(const[u,f,h,p]of r)q(i,K(f,h,14,p),ae(u,0)[0],t+h/2,-157);q(i,K(12,11,18,z.chip),144.5,t+5.5,ae(0,46)[1]),q(i,K(12,11,14,z.chip),144.5,t+5.5,ae(0,61)[1]),q(i,K(12,11,14,z.chip),144.5,t+5.5,ae(0,242)[1]),q(i,K(12,11,18,z.chip),144.5,t+5.5,ae(0,262)[1]);for(const u of[299,306])q(i,me(3.2,5,z.cap,14),146,t+2.5,ae(0,u)[1]);q(i,K(5,2.6,12,z.debugRed),147,t+1.3,ae(0,316)[1]);const a=[[224,52,13,z.slot],[199,19,9,z.connector],[181,19,9,z.connector],[162,10,7,z.chip],[107,13,8,z.connector],[91,13,8,z.connector],[72,16,9,z.slot],[51,16,9,z.slot],[41,12,11,z.chip],[28,12,11,z.chip]];for(const[u,f,h,p]of a)q(i,K(f,h,11,p),ae(u,0)[0],t+h/2,157);for(const u of[45,110,142,181,197,251,276,296])q(i,K(6,7,12,z.slot),-146,t+3.5,ae(0,u)[1]);q(i,K(14,2,14,z.chip),ae(69,0)[0],t+1,ae(0,18)[1]);const o=(u,f,h,p,g)=>{const[x]=ae(u,0),[m]=ae(f,0),d=ae(0,h)[1],v=ae(0,p)[1],_=(x+m)/2,y=(d+v)/2,E=m-x,T=v-d;q(i,K(E,4,T,z.heatsink),_,t+2,y);for(let P=x+2;P<=m-2;P+=4.5)q(i,K(1.5,24,T-4,z.heatsink),P,t+16,y);const S=me(3,E-6,z.heatsink,12);S.rotation.z=Math.PI/2,q(i,S,_,t+24,y);for(let P=0;P<g;P++){const M=Bi(15);M.position.set(_+(P-(g-1)/2)*(E/g),t+30,y),i.add(M)}};o(185,280,40,100,2),o(170,285,250,310,3);const[c,l]=[ae(80,0)[0],ae(0,265.5)[1]];return q(i,K(100,6,91,z.armor),c,t+3,l),q(i,K(78,2.2,66,z.chip),c-4,t+7,l+4),q(i,K(100,1.8,30,z.armor),c,t+7.5,l-24),q(i,K(115,8,14,z.armor),ae(92.5,0)[0],t+4,ae(0,29)[1]),i}const Ao=168,Ci=68.5,Yc=-.6,bd=[[3.8,-Ci/2-6,-39.5],[3.8,-Ci/2-6,-69.5]];function Td(){const i=new Le,t=oa("host-retimer");if(t)return i.add(t),q(i,K(1.5,Ci-.2,Ao-.2,z.pcbBlack),0,0,0),q(i,K(1.8,11,89,z.gold),0,-Ci/2-5.5,Yc),i;q(i,K(1.8,Ci,Ao,z.pcbBlack),0,0,0),q(i,K(1.8,11,89,z.gold),0,-Ci/2-5.5,Yc),q(i,K(2.5,100,2,z.bracket),0,11,Ao/2+6),q(i,K(2.5,3,10,z.bracket),0,62,Ao/2+10);for(const[,,n]of bd)q(i,K(9,11.6,25.8,z.connector),4,-8.5,n),q(i,K(7,2.5,21,z.slot),4,-14.5,n);q(i,K(11.5,50,50,z.heatsink),8.5,.7,1);const e=Bi(15);e.rotation.z=-Math.PI/2,e.position.set(15,.7,1),i.add(e);for(const n of[26,-24]){const s=me(2,7,z.gold,10);s.rotation.z=Math.PI/2,q(i,s,3,-22,n)}q(i,K(4,5.5,7,z.chip),3.5,2,62),q(i,K(4,5.5,7,z.chip),3.5,2,52);for(const n of[50,38])q(i,K(2.8,3,13,z.slot),2.6,Ci/2-3.5,n);return i}class BM{constructor(){this.ids=[],this.pr=[]}get size(){return this.ids.length}push(t,e){this.ids.push(t),this.pr.push(e);let n=this.ids.length-1;for(;n>0;){const s=n-1>>1;if(this.pr[s]<=this.pr[n])break;this._sw(n,s),n=s}}pop(){const t=this.ids[0],e=this.ids.length-1;this.ids[0]=this.ids[e],this.pr[0]=this.pr[e],this.ids.pop(),this.pr.pop();let n=0;for(;;){let s=2*n+1,r=2*n+2,a=n;if(s<this.ids.length&&this.pr[s]<this.pr[a]&&(a=s),r<this.ids.length&&this.pr[r]<this.pr[a]&&(a=r),a===n)break;this._sw(n,a),n=a}return t}_sw(t,e){const n=this.ids[t];this.ids[t]=this.ids[e],this.ids[e]=n;const s=this.pr[t];this.pr[t]=this.pr[e],this.pr[e]=s}}const jc=[];for(let i=-1;i<=1;i++)for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)(i||t||e)&&jc.push([i,t,e,Math.hypot(i,t,e)]);class zM{constructor(t,e={}){const{cell:n=8,pad:s=3,bias:r=[],biasRadius:a=140,biasWeight:o=.6,normalBoxes:c=null}=e;this.cell=n;const l=new se;t.forEach(f=>l.union(f)),l.expandByScalar(75),this.min=l.min.clone(),this.nx=Math.ceil((l.max.x-l.min.x)/n)+1,this.ny=Math.ceil((l.max.y-l.min.y)/n)+1,this.nz=Math.ceil((l.max.z-l.min.z)/n)+1,this.blocked=new Uint8Array(this.nx*this.ny*this.nz);for(const f of t)this._block(f.clone().expandByScalar(s));this._bias(r,a,o),this.trails={},this._trail=null,this._bit=0;const u=this.nx*this.ny*this.nz;this.use=new Uint8Array(u),this.mask=new Int32Array(u),this.history=new Float32Array(u),this.presFac=0,this._g=new Float32Array(u),this._came=new Int32Array(u),this._closed=new Uint8Array(u),this._boxes=c||t,this.fails=0,this.overuse=0}debugVoxels(){const t=[];for(let a=0;a<this.nx;a++)for(let o=0;o<this.ny;o++)for(let c=0;c<this.nz;c++)this.blocked[this._i(a,o,c)]&&(this._free(a+1,o,c)||this._free(a-1,o,c)||this._free(a,o+1,c)||this._free(a,o-1,c)||this._free(a,o,c+1)||this._free(a,o,c-1))&&t.push([a,o,c]);const e=new Cn(this.cell*.92,this.cell*.92,this.cell*.92),n=new Qo({color:3718648,transparent:!0,opacity:.4,depthWrite:!1}),s=new Kx(e,n,t.length),r=new Jt;return t.forEach(([a,o,c],l)=>{const u=this._world(a,o,c);s.setMatrixAt(l,r.makeTranslation(u.x,u.y,u.z))}),s.instanceMatrix.needsUpdate=!0,s.frustumCulled=!1,s}_normalAt(t){const e=this._cell(t),n=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];let s=[0,1,0],r=-1;for(const[a,o,c]of n){let l=0;for(let u=1;u<=8;u++)this._free(e[0]+a*u,e[1]+o*u,e[2]+c*u)&&(l+=9-u);l>r&&(r=l,s=[a,o,c])}return new w(...s)}_i(t,e,n){return(t*this.ny+e)*this.nz+n}_dec(t){const e=t%this.nz,n=(t-e)/this.nz%this.ny;return[(t-e-n*this.nz)/(this.ny*this.nz),n,e]}_cell(t){return[Math.round((t.x-this.min.x)/this.cell),Math.round((t.y-this.min.y)/this.cell),Math.round((t.z-this.min.z)/this.cell)]}_world(t,e,n){return new w(this.min.x+t*this.cell,this.min.y+e*this.cell,this.min.z+n*this.cell)}_in(t,e,n){return t>=0&&e>=0&&n>=0&&t<this.nx&&e<this.ny&&n<this.nz}_free(t,e,n){return this._in(t,e,n)&&this.blocked[this._i(t,e,n)]===0}_block(t){const e=this._cell(t.min),n=this._cell(t.max);for(let s=Math.max(0,e[0]);s<=Math.min(this.nx-1,n[0]);s++)for(let r=Math.max(0,e[1]);r<=Math.min(this.ny-1,n[1]);r++)for(let a=Math.max(0,e[2]);a<=Math.min(this.nz-1,n[2]);a++)this.blocked[this._i(s,r,a)]=1}_bias(t,e,n){if(this.attr=null,!t||!t.length)return;this.attr=new Float32Array(this.nx*this.ny*this.nz);const s=Math.ceil(e/this.cell);for(const r of t){const a=new w(r[0],r[1],r[2]),o=this._cell(a);for(let c=o[0]-s;c<=o[0]+s;c++)for(let l=o[1]-s;l<=o[1]+s;l++)for(let u=o[2]-s;u<=o[2]+s;u++){if(!this._in(c,l,u))continue;const f=this._world(c,l,u).distanceTo(a);if(f<e){const h=n*(1-f/e),p=this._i(c,l,u);h>this.attr[p]&&(this.attr[p]=h)}}}}_nearestFree(t){if(this._free(...t))return t;for(let e=1;e<12;e++)for(const[n,s,r]of jc){const a=[t[0]+n*e,t[1]+s*e,t[2]+r*e];if(this._free(...a))return a}return null}_los(t,e){const n=Math.max(Math.abs(e[0]-t[0]),Math.abs(e[1]-t[1]),Math.abs(e[2]-t[2]));for(let s=1;s<n;s++){const r=s/n,a=Math.round(t[0]+(e[0]-t[0])*r),o=Math.round(t[1]+(e[1]-t[1])*r),c=Math.round(t[2]+(e[2]-t[2])*r);if(!this._free(a,o,c))return!1;const l=this._i(a,o,c);if(this.use[l]||this.mask[l]&~this._bit)return!1}return!0}_smooth(t){if(t.length<=2)return t;const e=[t[0]];let n=0;for(;n<t.length-1;){let s=Math.min(t.length-1,n+3);for(;s>n+1&&!this._los(t[n],t[s]);)s--;e.push(t[s]),n=s}return e}_stamp(t){const e=this._trail;for(const[n,s,r]of t)for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){if(!this._in(n+a,s+o,r+c))continue;const l=this._i(n+a,s+o,r+c),u=.8-.12*(Math.abs(a)+Math.abs(o)+Math.abs(c));u>e[l]&&(e[l]=u)}}_stampMask(t,e,n){for(const[s,r,a]of t)for(let o=-e;o<=e;o++)for(let c=-e;c<=e;c++)for(let l=-e;l<=e;l++)this._in(s+o,r+c,a+l)&&(this.mask[this._i(s+o,r+c,a+l)]|=n)}_stampUse(t,e,n=1){const s=new Set;for(let r=0;r<t.length;r++){const[a,o,c]=t[r];for(let l=-e;l<=e;l++)for(let u=-e;u<=e;u++)for(let f=-e;f<=e;f++)this._in(a+l,o+u,c+f)&&s.add(this._i(a+l,o+u,c+f))}for(const r of s)this.use[r]+=n}_astar(t,e){const n=this._g.fill(1/0),s=this._came.fill(-1),r=this._closed.fill(0),a=this._i(...t),o=this._i(...e),c=this._world(...e);n[a]=0;const l=new BM;for(l.push(a,this._world(...t).distanceTo(c));l.size;){const h=l.pop();if(h===o)break;if(r[h])continue;r[h]=1;const[p,g,x]=this._dec(h);for(const[m,d,v,_]of jc){const y=p+m,E=g+d,T=x+v;if(!this._free(y,E,T))continue;const S=this._i(y,E,T);if(r[S])continue;const P=Math.max(this.attr?this.attr[S]:0,this._trail?this._trail[S]:0),M=this.use[S]+(this.mask[S]&~this._bit?1:0),b=_*this.cell*(1-.7*P)*(1+this.presFac*M)*(1+this.history[S]),I=n[h]+b;I<n[S]&&(n[S]=I,s[S]=h,l.push(S,I+this._world(y,E,T).distanceTo(c)))}}if(s[o]===-1&&a!==o)return null;const u=[];let f=o;for(;f!==-1;)u.push(this._dec(f)),f=s[f];return u.reverse()}_standoff(t,e){for(let n=30;n>6;n-=4){const s=t.clone().addScaledVector(e,n);if(this._free(...this._cell(s)))return s}return t.clone().addScaledVector(e,8)}solve(t){const e=[],n=t.map(({a:r,b:a,type:o=null,r:c=0,opts:l={}})=>{const u=new w(...r),f=new w(...a),h=l.na?new w(...l.na).normalize():this._normalAt(u),p=l.nb?new w(...l.nb).normalize():this._normalAt(f),g=this._standoff(u,h),x=this._standoff(f,p),m=this._nearestFree(this._cell(g)),d=this._nearestFree(this._cell(x));(!m||!d)&&this.fails++;let v=e.findIndex(E=>E.type===o&&E.A.distanceTo(u)<130&&E.B.distanceTo(f)<130);v<0&&(e.push({type:o,A:u.clone(),B:f.clone()}),v=e.length-1);const _=Math.max(0,Math.ceil((c-this.cell/2)/this.cell)),y=Math.max(_,Math.ceil((c+2-this.cell/2)/this.cell));return{type:o,Ao:g,Bo:x,na:h.toArray(),nb:p.toArray(),start:m,end:d,loom:v,bit:1<<Math.min(v,31),shTight:_,shMargin:y,path:null}});this.looms=e.length;let s=n.filter(r=>r.start&&r.end);for(this.rounds=0;this.rounds<8&&s.length;this.rounds++){this.presFac=2+3*this.rounds;const r=new Set(s);this.mask.fill(0);for(const a of n)a.path&&!r.has(a)&&this._stampMask(a.path,a.shMargin,a.bit);for(const a of s)a.path&&this._stampUse(a.path,a.shTight,-1),this._trail=this.trails[a.loom]||(this.trails[a.loom]=new Float32Array(this.blocked.length)),this._bit=a.bit,a.path=this._astar(a.start,a.end),a.path&&(this._stamp(a.path),this._stampUse(a.path,a.shTight),this._stampMask(a.path,a.shMargin,a.bit));this.overuse=0,s=[];for(const a of n){if(!a.path)continue;let o=0;for(let c=2;c<a.path.length-2;c++){const l=this._i(...a.path[c]);(this.use[l]>1||this.mask[l]&~a.bit)&&(o++,this.history[l]+=.6)}o&&(this.overuse+=o,s.push(a))}}return this.fails+=n.filter(r=>r.start&&r.end&&!r.path).length,n.map(r=>this._extract(r))}_extract(t){if(!t.path)return{vias:[t.Ao.toArray(),t.Bo.toArray()],na:t.na,nb:t.nb};this._bit=t.bit,this._stampUse(t.path,t.shTight,-1);const e=this._smooth(t.path).map(([n,s,r])=>this._world(n,s,r));for(this._stampUse(t.path,t.shTight,1);e.length&&e[0].distanceTo(t.Ao)<this.cell*1.5;)e.shift();for(;e.length&&e[e.length-1].distanceTo(t.Bo)<this.cell*1.5;)e.pop();return{vias:[t.Ao.toArray(),...e.map(n=>n.toArray()),t.Bo.toArray()],na:t.na,nb:t.nb}}}const Ie=(i,t)=>(i.userData.part=t,i);function Ad(){const i=new Le;i.add(Ie(Kf(),"rack"));const{psuShelfTop:t,boardTrayTop:e,switchShelfTop:n,gpuShelfTop:s}=Bv;for(const $ of[t,e,n,s]){const et=Ie(md(),"shelf");et.position.y=$,i.add(et)}const r={gpuPwr:[],gpuMcio:[],adAux:[],swAux:[],hostMcio:[],boardPwr:[]},a=[-120,120],o=n+vd,c=t+45,l=[-90,90];l.forEach($=>{const et=Ie(Md(!0),"psu");et.position.set($,c,0),i.add(et)});const u=($,et)=>[l[$]+et[0],c+et[1],-210/2-3];a.forEach($=>{const et=Ie(yd(),"switch");et.position.set($,o,0),i.add(et),r.swAux.push([$+hr[0],o+hr[1],hr[2]])});const f=Ie(Ed(),"board");f.position.set(0,e+9,0),i.add(f);const h=e+18;r.boardPwr.push([yc.atx24[0],h,yc.atx24[1]],...yc.eps.map($=>[$[0],h,$[1]]));const p=e+48,g=qc+Yc;OM.forEach($=>{const et=Ie(Td(),"host");et.position.set($,p,g),et.rotation.y=Math.PI,i.add(et),r.hostMcio.push(...bd.map(mt=>[$-mt[0],p+mt[1],g-mt[2]]))});const x=ph*eo,m=s+26,d=m+62,v=41.85-Me.slotZ,_=s+20;for(const $ of Me.holesZ){const et=Ie(Ei(x),"mount");et.position.set(0,s+10,v+$),i.add(et)}const y=m-$f.PCB/2-_;for(let $=0;$<eo;$++){const et=($-(eo-1)/2)*ph,mt=et-Me.slotX,St=Ie(xd(),"adapter");St.position.set(mt,m,v),i.add(St);for(const N of Me.holesZ)for(const pt of[-1,1]){const Q=Ie(me(2.6,y,z.gold,12),"mount");Q.position.set(mt+pt*6.5,_+y/2,v+N),i.add(Q)}r.adAux.push([mt+Me.auxX,m-16,v+Me.auxZ]);const Nt=Ie(_d(),"gpu");Nt.position.set(et,d,0),i.add(Nt),r.gpuPwr.push([et,d+Po.H/2-8,-139.35]),r.gpuMcio.push([mt+Me.mcioX,m-14,v+Me.mcioZ[0]],[mt+Me.mcioX,m-14,v+Me.mcioZ[1]])}const E=Po.L/2-17.5,T=d+55.87,S=T+3+10,P=Ie(Ei(x),"mount");P.position.set(0,S,E),i.add(P);const M=Ie(K(x-2,3,24,z.vent),"mount");M.position.set(0,T+1.5,E),i.add(M);const b=Po.L/2+25;for(const $ of[-1,1]){const et=S-10-s,mt=Ie(Ei(et),"mount");mt.rotation.z=Math.PI/2,mt.position.set($*(x/2-10),s+et/2,b),i.add(mt);const St=Ie(Ei(b-E+20),"mount");St.rotation.y=Math.PI/2,St.position.set($*(x/2-10),S,(b+E)/2),i.add(St)}const I=d-28,U=-145.35,B=Ie(Ei(x),"mount");B.position.set(0,I,U),i.add(B);const L=Ie(K(x-2,12,2,z.vent),"mount");L.position.set(0,I,-134.35),i.add(L);for(const $ of[-1,1]){const et=I-10-s,mt=Ie(Ei(et),"mount");mt.rotation.z=Math.PI/2,mt.position.set($*(x/2-10),s+et/2,U),i.add(mt)}i.updateMatrixWorld(!0);const F=[];i.traverse($=>{if($.userData.solidBoxes)for(const et of $.userData.solidBoxes)F.push(new se(new w(et[0],et[1],et[2]),new w(et[3],et[4],et[5])).applyMatrix4($.matrixWorld));if($.isMesh&&!$.userData.noCollide){const et=new se().setFromObject($);et.isEmpty()||F.push(et)}});const H=new Set(["gpu","switch","psu","board","host","adapter","mount"]),Z=[];i.traverse($=>{H.has($.userData.part)&&Z.push(new se().setFromObject($))});const J=new zM(F,{bias:Lo,normalBoxes:Z});i.userData.router=J;const j=[0,1,0],it=[0,-1,0],nt=[0,0,-1],_t=[],W=($,et,mt,St)=>_t.push({a:$,b:et,type:mt,r:Nv(mt),opts:St}),st=($,et)=>[$+Ss.device[et][0],o+Ss.device[et][1],Ss.device[et][2]],vt=($,et)=>[$+Ss.host[et][0],o+Ss.host[et][1],Ss.host[et][2]];for(let $=0;$<eo;$++){const et=$<4?a[0]:a[1],mt=$%4;W(r.gpuMcio[$*2],st(et,mt*2),"mcio",{na:it,nb:To.device[mt*2]}),W(r.gpuMcio[$*2+1],st(et,mt*2+1),"mcio",{na:it,nb:To.device[mt*2+1]})}for(let $=0;$<4;$++){const et=$<2?a[0]:a[1],mt=$%2;W(r.hostMcio[$*2],vt(et,mt*2),"mcio",{na:it,nb:To.host[mt*2]}),W(r.hostMcio[$*2+1],vt(et,mt*2+1),"mcio",{na:it,nb:To.host[mt*2+1]})}const wt=[Xe.hpwr[0],Xe.hpwr[1],Xe.cpu8[3],Xe.cpu8[4]];return r.gpuPwr.forEach(($,et)=>W(u(et<4?0:1,wt[et%4]),$,"power12v",{na:nt,nb:nt})),r.swAux.forEach(($,et)=>W(u(et,Xe.peri[4]),$,"aux6",{na:nt,nb:j})),r.adAux.forEach(($,et)=>W(u(et<4?0:1,Xe.peri[et%4]),$,"aux6",{na:nt,nb:it})),W(u(0,Xe.mb18),r.boardPwr[0],"atx",{na:nt,nb:j}),W(u(0,Xe.cpu8[0]),r.boardPwr[1],"power12v",{na:nt,nb:j}),W(u(0,Xe.cpu8[1]),r.boardPwr[2],"power12v",{na:nt,nb:j}),J.solve(_t).forEach(($,et)=>{const mt=_t[et];i.add(qf(mt.a,mt.b,{type:mt.type,vias:$.vias,na:$.na,nb:$.nb}))}),i}const Rn={gpu:{name:"RTX PRO 6000 Blackwell Max-Q",qty:8,dims:"266.7 × 111.8 mm · dual-slot (40.6 mm)",build:_d,link:"https://www.exxactcorp.com/NVIDIA-900-5G153-2200-000-E8815317",desc:"NVIDIA workstation GPU — 96 GB GDDR7, 300 W, PCIe 5.0 x16. Single enclosed radial blower: intake through the side fan + gold top louvres, exhaust out the bracket only, which is what makes it safe to pack eight in a row. 12V-2×6 sits in a recessed pocket on the far edge. Reaches the host over MCIO cable through a device adapter, not a motherboard slot."},board:{name:"ASRock WRX90 WS EVO",qty:1,dims:"305 × 330 mm · SSI-EEB",build:Ed,link:"https://www.asrock.com/mb/AMD/WRX90%20WS%20EVO/index.asp",desc:"SSI-EEB motherboard for the Threadripper PRO 9985WX (128 PCIe 5.0 lanes). Four of its x16 slots carry the host adapters that feed the switch fabric."},host:{name:"C-Payne Host Adapter x16 — RETIMER (Astera)",qty:4,dims:"≈175 × 68 mm · half-height x16 card",build:Td,link:"https://c-payne.com/products/mcio-pcie-gen5-host-adapter-x16-retimer",price:240,desc:"Plugs into a board x16 slot and breaks it into 2× MCIO 8i at the far end of the bottom edge, with an actively-cooled Astera Aries retimer to hold clean Gen5 across the cable. Slot-powered, no aux. Four total = two uplinks per switch (the 2-VS-per-chip layout)."},switch:{name:"C-Payne PM50100 switch (CP-0551)",qty:2,dims:"150 × 110 mm · 100 × 100 mm hole pitch",build:yd,link:"https://c-payne.com/products/pcie-gen5-mcio-switch-100-lane-microchip-switchtec-pm50100",price:2e3,owned:2,desc:"Microchip Switchtec PM50100 — a 100-lane PCIe Gen5 switch. 12× MCIO 8i + 1× 4i ring the chip under a 90 mm heatsink + 92 mm Arctic fan; PCIe 6-pin power. Each takes two host uplinks and fans out to four GPUs. You already own both."},adapter:{name:"C-Payne Device Adapter x8/x16 (VERTICAL)",qty:8,dims:"≈128 × 41 mm · photo-scaled ±3 mm",build:xd,link:"https://c-payne.com/products/mcio-pcie-gen5-device-adapter-x8-x16",price:50,desc:'Turns 2× MCIO 8i into a PCIe x16 slot the GPU plugs into — a "portable slot". Vertical MCIO + 6-pin point straight down, which is what allows single-slot-width spacing. The 6-pin 12 V feed is mandatory (and must NOT be an EPS/ATX plug). One per GPU; the piece the mount has to anchor.'},psu:{name:"Seasonic TX-1600 Noctua Edition",qty:2,dims:"210 × 150 × 86 mm · ATX",build:()=>Md(!0),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",desc:"1600 W Titanium, ATX 3.1, 2× native 12V-2×6. Two units — both Noctua Edition — on two separate 120V circuits, synced by an ADD2PSU."},rack:{name:"StarTech 4POSTRACK25U",qty:1,dims:'25U (1111 mm) · 19" · 22–40" deep',build:Kf,link:"https://www.startech.com/en-us/server-management/4postrack25u",desc:'Open 4-post 25U rack — 22–40" adjustable depth, square-hole rails, casters. Ships flat-packed.'},shelf:{name:"StarTech ADJSHELF vented shelf",qty:4,dims:"445 × 700 mm tray · 1U · 80 kg cap.",build:()=>md(),link:"https://www.startech.com/en-us/server-management/adjshelf",desc:"Four total: PSU shelf, WRX90 board tray, switch shelf, and the GPU shelf."},mount:{name:"2020 T-slot extrusion (mount)",qty:10,dims:"20 × 20 mm profile",build:()=>Ei(220),note:"generic — any 2020 supplier, cut to length · plus 32× M3 brass spacers (4 per adapter)",desc:"Aluminium frame: two rails under the device adapters (adapters stand on brass spacers at their mount holes); a top hold-down bar pressing the cards' solid top label panels — NOT the bracket exhaust or the gold intake louvres — via legs + corner arms in front of the row; and a rear anti-sag bar against the solid backplates. No-drill, bolt-together — the semi-custom part."},mcio:{name:"MCIO 8i Gen5 cable",qty:24,dims:"450/750 mm · 8i (SFF-TA-1016), 85 Ω",build:()=>to("mcio"),link:"https://c-payne.com/products/mcio-sff-ta-1016-8i-cable-pcie-gen5",price:40,stockMm:[450,750],desc:"PCIe Gen5 data. 8 host→switch + 16 switch→GPU = 24. Every x16 link is two of these."},power12v:{name:"12V-2×6 GPU power",qty:8,dims:"600 W-rated · 16-pin",build:()=>to("power12v"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSUs (4 native + 4 via 2×8-pin)",desc:"One 600 W-rated feed per GPU from a PSU (4 native + 4 via 2×8-pin adapters). One cable per card — never split."},aux6:{name:"PCIe 6-pin aux feed",qty:10,dims:"6-pin · ≤ 75 W",build:()=>to("aux6"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSUs (peripheral leads)",desc:"≤75 W feeds for the 2 switch boards + 8 device adapters. Low-current, fine to split off spare PSU leads."},atx:{name:"ATX 24-pin + EPS",qty:1,dims:"24-pin + 8-pin EPS",build:()=>to("atx"),link:"https://seasonic.com/product/prime-tx-1600-noctua-edition/",note:"ships with the PSU",desc:"Mainboard and CPU power from the host-side PSU."}},wd=document.getElementById("info"),$o=document.getElementById("info-canvas"),HM=document.getElementById("info-title"),GM=document.getElementById("info-dims"),kM=document.getElementById("info-qty"),VM=document.getElementById("info-desc"),Vi=new sl({canvas:$o,antialias:!0,alpha:!0});Vi.setPixelRatio(Math.min(devicePixelRatio,2));Vi.toneMapping=Jc;Vi.toneMappingExposure=1.42;Vi.outputColorSpace=Ee;const zi=new ol;zi.environment=new Vo(Vi).fromScene(new Xf,.04).texture;zi.add(new kf(13490677,3026488,1.6));const Rd=new yr(16777215,1.9);Rd.position.set(60,120,90);zi.add(Rd);const Cd=new yr(10467583,1);Cd.position.set(-80,30,-50);zi.add(Cd);const vr=new qe(40,1,.5,8e3),Vn=new Wf(vr,$o);Vn.enableDamping=!0;Vn.enablePan=!1;Vn.autoRotate=!0;Vn.autoRotateSpeed=1.6;let Mi=null,fr=null;function WM(){const i=$o.clientWidth||320,t=$o.clientHeight||240;Vi.setSize(i,t,!1),vr.aspect=i/t,vr.updateProjectionMatrix()}function XM(i,t){const e=Rn[i];if(!e)return;HM.textContent=e.name;const n=t&&t.userData.lengthMm;if(GM.textContent=(e.dims||"")+(n?` · this run ≈ ${n} mm`:""),kM.textContent=e.qty?`×${e.qty} in the build`:"",VM.textContent=e.desc||"",wd.classList.add("open"),WM(),Mi&&zi.remove(Mi),Mi=e.build?e.build():null,Mi){zi.add(Mi);const s=new se().setFromObject(Mi),r=s.getCenter(new w),a=s.getSize(new w);Mi.position.sub(r);const o=Math.max(a.x,a.y,a.z,40)*1.6+30;vr.position.set(o*.7,o*.5,o),Vn.target.set(0,0,0),Vn.minDistance=o*.3,Vn.maxDistance=o*5,Vn.update()}fr||Pd()}function Pd(){fr=requestAnimationFrame(Pd),Vn.update(),Vi.render(zi,vr)}function qM(){wd.classList.remove("open"),fr&&(cancelAnimationFrame(fr),fr=null)}document.getElementById("info-close").onclick=qM;const Mc=["mcio","power12v","aux6","atx"];function $h(i){for(let t=i;t;t=t.parent)if(t.userData&&t.userData.part!==void 0)return t.userData.part;return null}function vl(i,{margin:t=1.5,skipEnds:e=4}={}){i.updateMatrixWorld(!0);const n=[];i.traverse(r=>{if(r.userData.solidBoxes){const c=$h(r);if(c!==null&&!Mc.includes(c))for(const l of r.userData.solidBoxes){const u=new se(new w(l[0],l[1],l[2]),new w(l[3],l[4],l[5])).applyMatrix4(r.matrixWorld).expandByScalar(-t);u.isEmpty()||n.push({part:c,box:u})}}if(!r.isMesh||r.isInstancedMesh||r.userData.noCollide)return;const a=$h(r);if(a===null||Mc.includes(a))return;const o=new se().setFromObject(r).expandByScalar(-t);o.isEmpty()||n.push({part:a,box:o})});const s={};return i.traverse(r=>{if(!Mc.includes(r.userData.part)||!r.userData.samples)return;const a=r.userData.samples,o=new Set;for(let c=e;c<a.length-e;c++)for(const l of n)if(!o.has(l.part)&&l.box.containsPoint(a[c])){const u=`${r.userData.part} → ${l.part}`;s[u]=(s[u]||0)+1,o.add(l.part)}}),s}const YM=["mcio","power12v","aux6","atx"],Ld=1.12;function Dd(i){const t={};return i.traverse(e=>{YM.includes(e.userData.part)&&e.userData.lengthMm&&(t[e.userData.part]||=[]).push(e.userData.lengthMm)}),t}function Id(i,t){const e=i*Ld;for(const n of t)if(e<=n)return n;return null}function jM(i,t){const e=t[i];if(!e||!e.length)return"";const n=Math.min(...e),s=Math.max(...e);let r="";if(Rn[i].stockMm){const a={};let o=0;for(const l of e){const u=Id(l,Rn[i].stockMm);u===null?o++:a[u]=(a[u]||0)+1}const c=Object.entries(a).map(([l,u])=>`${u}× ${l/10} cm`).join(" + ");r=o?` · <span class="bom-bad">⚠ ${o} run${o>1?"s":""} too long for stock</span>`:` · buy ${c} <span class="bom-ok">✓</span>`}return`runs ${Math.round(n)}–${Math.round(s)} mm${r}`}function $M(i,t){const e=[],n=i.userData.router?i.userData.router.fails:0;e.push(n?`<span class="bom-bad">⚠ ${n} cable route${n>1?"s":""} found no collision-free path</span>`:'<span class="bom-ok">✓</span> all cable routes found a collision-free path');const s=vl(i),r=Object.keys(s).length;e.push(r?`<span class="bom-bad">⚠ wires passing through parts: ${Object.entries(s).map(([c,l])=>`${c} (${l})`).join(", ")}</span>`:'<span class="bom-ok">✓</span> no wire passes through a component');const a=t.mcio||[],o=a.filter(c=>Id(c,Rn.mcio.stockMm)===null).length;if(a.length){const c=Math.max(...a);e.push(o?`<span class="bom-bad">⚠ ${o} MCIO run(s) exceed the 75 cm stock cable (longest ${Math.round(c)} mm + slack)</span>`:`<span class="bom-ok">✓</span> every MCIO run fits stock cable (longest ${Math.round(c)} mm routed, ×${Ld} slack ≤ 750 mm)`)}return e}const Sc=i=>`€${i.toLocaleString("en-US")}`;function ZM(i){const t=Dd(i);let e=0,n=0;const s=Object.entries(Rn).map(([r,a])=>{const o=a.owned||0,c=a.qty-o,l=a.price!=null?a.price*c:null;l!=null?e+=l:!a.note&&c>0&&n++;const u=a.link?`<a href="${a.link}" target="_blank" rel="noopener">${a.name} ↗</a>`:a.name,f=[o?`${o} owned`:"",a.note||"",jM(r,t)].filter(Boolean).join(" · ");return`<tr>
      <td class="n">${a.qty}×</td>
      <td>${u}</td>
      <td class="n">${a.price!=null?Sc(a.price):"—"}</td>
      <td class="n">${l!=null?l?Sc(l):'<span class="bom-ok">owned</span>':"—"}</td>
      <td class="notes">${f}</td>
    </tr>`}).join("");document.getElementById("bom-body").innerHTML=`
    <table>
      <thead><tr><th class="n">qty</th><th>part</th><th class="n">unit</th><th class="n">to buy</th><th>notes · live from this layout</th></tr></thead>
      <tbody>${s}</tbody>
    </table>
    <div id="bom-checks">${$M(i,t).map(r=>`<div>${r}</div>`).join("")}</div>`,document.getElementById("bom-total").textContent=`priced items: ${Sc(e)}${n?` · +${n} unpriced (see links)`:""}`}function KM(i){const t=Dd(i),e=r=>`"${String(r).replaceAll('"','""')}"`,n=[["qty","part","unit_eur","owned","to_buy_eur","link","notes"].join(",")];for(const[r,a]of Object.entries(Rn)){const o=a.owned||0,c=a.qty-o,l=t[r],u=[a.note||"",l?`routed runs mm: ${l.map(Math.round).join(" ")}`:""].filter(Boolean).join(" | ");n.push([a.qty,e(a.name),a.price??"",o,a.price!=null?a.price*c:"",a.link||"",e(u)].join(","))}const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([n.join(`
`)],{type:"text/csv"})),s.download="rig-bom.csv",s.click(),URL.revokeObjectURL(s.href)}function JM(i){const t=document.getElementById("bom");document.getElementById("bom-btn").onclick=()=>{ZM(i()),t.classList.add("open")},document.getElementById("bom-close").onclick=()=>t.classList.remove("open"),t.addEventListener("pointerdown",e=>{e.target===t&&t.classList.remove("open")}),document.getElementById("bom-csv").onclick=()=>KM(i())}await UM();const Oo=new URLSearchParams(location.search).get("part"),qn=!!(Oo&&Rn[Oo]&&Rn[Oo].build),QM=document.getElementById("app"),Be=new ol;Be.background=new jt(qn?1381659:Zf);qn||(Be.fog=new rl(Zf,2800,5600));const hi=new qe(42,innerWidth/innerHeight,5,12e3),$e=new sl({antialias:!0});$e.setSize(innerWidth,innerHeight);$e.setPixelRatio(Math.min(devicePixelRatio,2));$e.toneMapping=Jc;$e.toneMappingExposure=1.42;$e.outputColorSpace=Ee;QM.appendChild($e.domElement);const tS=new Vo($e);Be.environment=tS.fromScene(new Xf,.04).texture;Be.add(new kf(13490677,3026488,qn?1.7:1.5));const Ud=new yr(16777215,qn?2.6:2);Ud.position.set(900,1600,1100);Be.add(Ud);const Nd=new yr(10467583,qn?1.5:1.1);Nd.position.set(-1e3,500,-700);Be.add(Nd);const Od=new yr(16770752,.75);Od.position.set(200,400,-1200);Be.add(Od);let je=qn?Rn[Oo].build():Ad();Be.add(je);const be=new Wf(hi,$e.domElement);be.enableDamping=!0;be.autoRotateSpeed=1;let Hi;if(qn){const i=new se().setFromObject(je),t=i.getCenter(new w),e=i.getSize(new w),n=Math.max(e.x,e.y,e.z)*1.9+60;Hi={pos:[t.x+n*.85,t.y+n*.5,t.z+n],target:t.toArray()},be.autoRotate=!0,be.minDistance=30,be.maxDistance=4e3,document.getElementById("legend").style.display="none";const s=new lh(Math.max(e.x,e.z)*5,20,2763318,1710626);s.position.set(t.x,i.min.y-6,t.z),Be.add(s)}else{Hi={pos:[720,900,1240],target:[0,470,0]},be.autoRotate=!1,be.minDistance=380,be.maxDistance=5200,be.maxPolarAngle=Math.PI*.54;const i=new ee(new ta(6e3,6e3),new Xo({color:657934,metalness:.1,roughness:.95}));i.rotation.x=-Math.PI/2,i.position.y=-173,Be.add(i);const t=new lh(4400,44,2763318,1513246);t.position.y=-172,Be.add(t)}hi.position.set(...Hi.pos);be.target.set(...Hi.target);be.update();window.__viz={camera:hi,controls:be,HOME:Hi,object:je};window.__collisions=()=>vl(je);const Zh=new Dv,Kh=new ut;let rn=null,ir=null,ni=null;const $c=[];function Fd(){rn&&(Be.remove(rn),rn.geometry&&rn.geometry.dispose(),rn.material&&rn.material.dispose(),rn=null);for(const[i,t]of $c)i.material.dispose(),i.material=t;$c.length=0}function eS(i){if(!i.userData.samples){rn=new Iv(i,10146106),Be.add(rn);return}i.traverse(t=>{if(!t.isMesh)return;const e=t.material.clone();e.emissive=new jt(10146106),e.emissiveIntensity=.55,$c.push([t,t.material]),t.material=e})}$e.domElement.addEventListener("pointerdown",i=>{ir=[i.clientX,i.clientY]});$e.domElement.addEventListener("pointerup",i=>{if(!ir)return;const t=Math.hypot(i.clientX-ir[0],i.clientY-ir[1]);if(ir=null,t>5||i.button!==0)return;const e=$e.domElement.getBoundingClientRect();Kh.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),Zh.setFromCamera(Kh,hi);const n=Zh.intersectObject(je,!0)[0];let s=n&&n.object;for(;s&&s.userData.part===void 0;)s=s.parent;s&&s.userData.part&&Rn[s.userData.part]&&(XM(s.userData.part,s),Fd(),eS(s))});function Bd(){ni&&(ni.removeFromParent(),ni.geometry.dispose(),ni.material.dispose(),ni=null)}function Jh(){Be.remove(je),je=Ad(),Be.add(je),window.__viz.object=je,window.__collisions=()=>vl(je),Fd(),Bd()}qn?(document.getElementById("bom-btn").style.display="none",document.getElementById("legend-btn").style.display="none"):(JM(()=>je),document.getElementById("legend-btn").onclick=()=>document.getElementById("legend").classList.toggle("open"));qn||(window.__addBias=i=>(Lo.push(i),Jh(),Lo.slice()),window.__clearBias=()=>{Lo.length=0,Jh()},addEventListener("keydown",i=>{i.key.toLowerCase()==="v"&&(ni?Bd():je.userData.router&&(ni=je.userData.router.debugVoxels(),je.add(ni)))}));const Zc=document.getElementById("spin");Zc.textContent=be.autoRotate?"pause spin":"start spin";Zc.onclick=()=>{be.autoRotate=!be.autoRotate,Zc.textContent=be.autoRotate?"pause spin":"start spin"};document.getElementById("fit").onclick=()=>{hi.position.set(...Hi.pos),be.target.set(...Hi.target),be.update()};addEventListener("resize",()=>{hi.aspect=innerWidth/innerHeight,hi.updateProjectionMatrix(),$e.setSize(innerWidth,innerHeight)});$e.setAnimationLoop(()=>{be.update(),rn&&rn.isBoxHelper&&rn.update(),$e.render(Be,hi)});
