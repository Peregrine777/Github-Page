(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function Sg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mg={exports:{}},Cc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=Symbol.for("react.transitional.element"),Qv=Symbol.for("react.fragment");function yg(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:Kv,type:e,key:i,ref:t!==void 0?t:null,props:n}}Cc.Fragment=Qv;Cc.jsx=yg;Cc.jsxs=yg;Mg.exports=Cc;var lt=Mg.exports,Eg={exports:{}},Pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih=Symbol.for("react.transitional.element"),Jv=Symbol.for("react.portal"),$v=Symbol.for("react.fragment"),tx=Symbol.for("react.strict_mode"),ex=Symbol.for("react.profiler"),nx=Symbol.for("react.consumer"),ix=Symbol.for("react.context"),ax=Symbol.for("react.forward_ref"),rx=Symbol.for("react.suspense"),sx=Symbol.for("react.memo"),Tg=Symbol.for("react.lazy"),$d=Symbol.iterator;function ox(e){return e===null||typeof e!="object"?null:(e=$d&&e[$d]||e["@@iterator"],typeof e=="function"?e:null)}var bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ag=Object.assign,Rg={};function ms(e,t,n){this.props=e,this.context=t,this.refs=Rg,this.updater=n||bg}ms.prototype.isReactComponent={};ms.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ms.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cg(){}Cg.prototype=ms.prototype;function Fh(e,t,n){this.props=e,this.context=t,this.refs=Rg,this.updater=n||bg}var Hh=Fh.prototype=new Cg;Hh.constructor=Fh;Ag(Hh,ms.prototype);Hh.isPureReactComponent=!0;var tp=Array.isArray,de={H:null,A:null,T:null,S:null},wg=Object.prototype.hasOwnProperty;function Gh(e,t,n,i,a,r){return n=r.ref,{$$typeof:Ih,type:e,key:t,ref:n!==void 0?n:null,props:r}}function lx(e,t){return Gh(e.type,t,void 0,void 0,void 0,e.props)}function Vh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ih}function cx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ep=/\/+/g;function tu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cx(""+e.key):t.toString(36)}function np(){}function ux(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(np,np):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Cr(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ih:case Jv:s=!0;break;case Tg:return s=e._init,Cr(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+tu(e,0):i,tp(a)?(n="",s!=null&&(n=s.replace(ep,"$&/")+"/"),Cr(a,t,n,"",function(c){return c})):a!=null&&(Vh(a)&&(a=lx(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(ep,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(tp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+tu(i,l),s+=Cr(i,t,n,r,a);else if(l=ox(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+tu(i,l++),s+=Cr(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Cr(ux(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function ko(e,t,n){if(e==null)return e;var i=[],a=0;return Cr(e,i,"","",function(r){return t.call(n,r,a++)}),i}function fx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ip=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function hx(){}Pt.Children={map:ko,forEach:function(e,t,n){ko(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ko(e,function(){t++}),t},toArray:function(e){return ko(e,function(t){return t})||[]},only:function(e){if(!Vh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pt.Component=ms;Pt.Fragment=$v;Pt.Profiler=ex;Pt.PureComponent=Fh;Pt.StrictMode=tx;Pt.Suspense=rx;Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=de;Pt.act=function(){throw Error("act(...) is not supported in production builds of React.")};Pt.cache=function(e){return function(){return e.apply(null,arguments)}};Pt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Ag({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!wg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Gh(e.type,a,void 0,void 0,r,i)};Pt.createContext=function(e){return e={$$typeof:ix,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:nx,_context:e},e};Pt.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)wg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Gh(e,r,void 0,void 0,null,a)};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(e){return{$$typeof:ax,render:e}};Pt.isValidElement=Vh;Pt.lazy=function(e){return{$$typeof:Tg,_payload:{_status:-1,_result:e},_init:fx}};Pt.memo=function(e,t){return{$$typeof:sx,type:e,compare:t===void 0?null:t}};Pt.startTransition=function(e){var t=de.T,n={};de.T=n;try{var i=e(),a=de.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(hx,ip)}catch(r){ip(r)}finally{de.T=t}};Pt.unstable_useCacheRefresh=function(){return de.H.useCacheRefresh()};Pt.use=function(e){return de.H.use(e)};Pt.useActionState=function(e,t,n){return de.H.useActionState(e,t,n)};Pt.useCallback=function(e,t){return de.H.useCallback(e,t)};Pt.useContext=function(e){return de.H.useContext(e)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(e,t){return de.H.useDeferredValue(e,t)};Pt.useEffect=function(e,t){return de.H.useEffect(e,t)};Pt.useId=function(){return de.H.useId()};Pt.useImperativeHandle=function(e,t,n){return de.H.useImperativeHandle(e,t,n)};Pt.useInsertionEffect=function(e,t){return de.H.useInsertionEffect(e,t)};Pt.useLayoutEffect=function(e,t){return de.H.useLayoutEffect(e,t)};Pt.useMemo=function(e,t){return de.H.useMemo(e,t)};Pt.useOptimistic=function(e,t){return de.H.useOptimistic(e,t)};Pt.useReducer=function(e,t,n){return de.H.useReducer(e,t,n)};Pt.useRef=function(e){return de.H.useRef(e)};Pt.useState=function(e){return de.H.useState(e)};Pt.useSyncExternalStore=function(e,t,n){return de.H.useSyncExternalStore(e,t,n)};Pt.useTransition=function(){return de.H.useTransition()};Pt.version="19.0.0";Eg.exports=Pt;var Ie=Eg.exports;const Dg=Sg(Ie);var Ug={exports:{}},wc={},Lg={exports:{}},Ng={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,F){var z=N.length;N.push(F);t:for(;0<z;){var tt=z-1>>>1,at=N[tt];if(0<a(at,F))N[tt]=F,N[z]=at,z=tt;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],z=N.pop();if(z!==F){N[0]=z;t:for(var tt=0,at=N.length,pt=at>>>1;tt<pt;){var zt=2*(tt+1)-1,Wt=N[zt],k=zt+1,$=N[k];if(0>a(Wt,z))k<at&&0>a($,Wt)?(N[tt]=$,N[k]=z,tt=k):(N[tt]=Wt,N[zt]=z,tt=zt);else if(k<at&&0>a($,z))N[tt]=$,N[k]=z,tt=k;else break t}}return F}function a(N,F){var z=N.sortIndex-F.sortIndex;return z!==0?z:N.id-F.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,d=null,f=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function g(N){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=N)i(c),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(c)}}function M(N){if(x=!1,g(N),!v)if(n(l)!==null)v=!0,j();else{var F=n(c);F!==null&&Y(M,F.startTime-N)}}var w=!1,R=-1,b=5,U=-1;function T(){return!(e.unstable_now()-U<b)}function y(){if(w){var N=e.unstable_now();U=N;var F=!0;try{t:{v=!1,x&&(x=!1,u(R),R=-1),p=!0;var z=f;try{e:{for(g(N),d=n(l);d!==null&&!(d.expirationTime>N&&T());){var tt=d.callback;if(typeof tt=="function"){d.callback=null,f=d.priorityLevel;var at=tt(d.expirationTime<=N);if(N=e.unstable_now(),typeof at=="function"){d.callback=at,g(N),F=!0;break e}d===n(l)&&i(l),g(N)}else i(l);d=n(l)}if(d!==null)F=!0;else{var pt=n(c);pt!==null&&Y(M,pt.startTime-N),F=!1}}break t}finally{d=null,f=z,p=!1}F=void 0}}finally{F?D():w=!1}}}var D;if(typeof _=="function")D=function(){_(y)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,V=X.port2;X.port1.onmessage=y,D=function(){V.postMessage(null)}}else D=function(){m(y,0)};function j(){w||(w=!0,D())}function Y(N,F){R=m(function(){N(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,j())},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var z=f;f=F;try{return N()}finally{f=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=f;f=N;try{return F()}finally{f=z}},e.unstable_scheduleCallback=function(N,F,z){var tt=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?tt+z:tt):z=tt,N){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=z+at,N={id:h++,callback:F,priorityLevel:N,startTime:z,expirationTime:at,sortIndex:-1},z>tt?(N.sortIndex=z,t(c,N),n(l)===null&&N===n(c)&&(x?(u(R),R=-1):x=!0,Y(M,z-tt))):(N.sortIndex=at,t(l,N),v||p||(v=!0,j())),N},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(N){var F=f;return function(){var z=f;f=F;try{return N.apply(this,arguments)}finally{f=z}}}})(Ng);Lg.exports=Ng;var dx=Lg.exports,Og={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=Ie;function Pg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fi(){}var $e={d:{f:Fi,r:function(){throw Error(Pg(522))},D:Fi,C:Fi,L:Fi,m:Fi,X:Fi,S:Fi,M:Fi},p:0,findDOMNode:null},mx=Symbol.for("react.portal");function gx(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mx,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ws=px.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Dc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$e;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Pg(299));return gx(e,t,null,n)};en.flushSync=function(e){var t=Ws.T,n=$e.p;try{if(Ws.T=null,$e.p=2,e)return e()}finally{Ws.T=t,$e.p=n,$e.d.f()}};en.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,$e.d.C(e,t))};en.prefetchDNS=function(e){typeof e=="string"&&$e.d.D(e)};en.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Dc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?$e.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&$e.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};en.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Dc(t.as,t.crossOrigin);$e.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&$e.d.M(e)};en.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Dc(n,t.crossOrigin);$e.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};en.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Dc(t.as,t.crossOrigin);$e.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else $e.d.m(e)};en.requestFormReset=function(e){$e.d.r(e)};en.unstable_batchedUpdates=function(e,t){return e(t)};en.useFormState=function(e,t,n){return Ws.H.useFormState(e,t,n)};en.useFormStatus=function(){return Ws.H.useHostTransitionStatus()};en.version="19.0.0";function zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zg)}catch(e){console.error(e)}}zg(),Og.exports=en;var _x=Og.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le=dx,Bg=Ie,vx=_x;function W(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ig(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var xx=Symbol.for("react.element"),Xo=Symbol.for("react.transitional.element"),Fs=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Fg=Symbol.for("react.strict_mode"),uf=Symbol.for("react.profiler"),Sx=Symbol.for("react.provider"),Hg=Symbol.for("react.consumer"),Ei=Symbol.for("react.context"),kh=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),Gg=Symbol.for("react.offscreen"),Mx=Symbol.for("react.memo_cache_sentinel"),ap=Symbol.iterator;function bs(e){return e===null||typeof e!="object"?null:(e=ap&&e[ap]||e["@@iterator"],typeof e=="function"?e:null)}var yx=Symbol.for("react.client.reference");function df(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yx?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lr:return"Fragment";case Fs:return"Portal";case uf:return"Profiler";case Fg:return"StrictMode";case ff:return"Suspense";case hf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ei:return(e.displayName||"Context")+".Provider";case Hg:return(e._context.displayName||"Context")+".Consumer";case kh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xh:return t=e.displayName||null,t!==null?t:df(e.type)||"Memo";case ji:t=e._payload,e=e._init;try{return df(e(t))}catch{}}return null}var Ut=Bg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=Object.assign,eu,rp;function Hs(e){if(eu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eu=t&&t[1]||"",rp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eu+e+rp}var nu=!1;function iu(e,t){if(!e||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Hs(n):""}function Ex(e){switch(e.tag){case 26:case 27:case 5:return Hs(e.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 15:return e=iu(e.type,!1),e;case 11:return e=iu(e.type.render,!1),e;case 1:return e=iu(e.type,!0),e;default:return""}}function sp(e){try{var t="";do t+=Ex(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function gs(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function op(e){if(gs(e)!==e)throw Error(W(188))}function Tx(e){var t=e.alternate;if(!t){if(t=gs(e),t===null)throw Error(W(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return op(a),e;if(r===i)return op(a),t;r=r.sibling}throw Error(W(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(W(189))}}if(n.alternate!==i)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?e:t}function kg(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=kg(e),t!==null)return t;e=e.sibling}return null}var Gs=Array.isArray,le=vx.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ga={pending:!1,data:null,method:null,action:null},pf=[],Nr=-1;function si(e){return{current:e}}function Ge(e){0>Nr||(e.current=pf[Nr],pf[Nr]=null,Nr--)}function ue(e,t){Nr++,pf[Nr]=e.current,e.current=t}var ei=si(null),lo=si(null),ia=si(null),jl=si(null);function Zl(e,t){switch(ue(ia,t),ue(lo,e),ue(ei,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?lm(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=lm(e),t=ev(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ge(ei),ue(ei,t)}function es(){Ge(ei),Ge(lo),Ge(ia)}function mf(e){e.memoizedState!==null&&ue(jl,e);var t=ei.current,n=ev(t,e.type);t!==n&&(ue(lo,e),ue(ei,n))}function Kl(e){lo.current===e&&(Ge(ei),Ge(lo)),jl.current===e&&(Ge(jl),So._currentValue=Ga)}var gf=Object.prototype.hasOwnProperty,Wh=Le.unstable_scheduleCallback,au=Le.unstable_cancelCallback,bx=Le.unstable_shouldYield,Ax=Le.unstable_requestPaint,ni=Le.unstable_now,Rx=Le.unstable_getCurrentPriorityLevel,Xg=Le.unstable_ImmediatePriority,Wg=Le.unstable_UserBlockingPriority,Ql=Le.unstable_NormalPriority,Cx=Le.unstable_LowPriority,qg=Le.unstable_IdlePriority,wx=Le.log,Dx=Le.unstable_setDisableYieldValue,bo=null,_n=null;function Ux(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(bo,e,void 0,(e.current.flags&128)===128)}catch{}}function ea(e){if(typeof wx=="function"&&Dx(e),_n&&typeof _n.setStrictMode=="function")try{_n.setStrictMode(bo,e)}catch{}}var vn=Math.clz32?Math.clz32:Ox,Lx=Math.log,Nx=Math.LN2;function Ox(e){return e>>>=0,e===0?32:31-(Lx(e)/Nx|0)|0}var Wo=128,qo=4194304;function Da(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Uc(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,a=e.suspendedLanes,r=e.pingedLanes,s=e.warmLanes;e=e.finishedLanes!==0;var o=n&134217727;return o!==0?(n=o&~a,n!==0?i=Da(n):(r&=o,r!==0?i=Da(r):e||(s=o&~s,s!==0&&(i=Da(s))))):(o=n&~a,o!==0?i=Da(o):r!==0?i=Da(r):e||(s=n&~s,s!==0&&(i=Da(s)))),i===0?0:t!==0&&t!==i&&!(t&a)&&(a=i&-i,s=t&-t,a>=s||a===32&&(s&4194176)!==0)?t:i}function Ao(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Px(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yg(){var e=Wo;return Wo<<=1,!(Wo&4194176)&&(Wo=128),e}function jg(){var e=qo;return qo<<=1,!(qo&62914560)&&(qo=4194304),e}function ru(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ro(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zx(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-vn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Zg(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function Zg(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-vn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194218}function Kg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-vn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Qg(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Jg(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:fv(e.type))}function Bx(e,t){var n=le.p;try{return le.p=e,t()}finally{le.p=n}}var xa=Math.random().toString(36).slice(2),Ze="__reactFiber$"+xa,ln="__reactProps$"+xa,_s="__reactContainer$"+xa,_f="__reactEvents$"+xa,Ix="__reactListeners$"+xa,Fx="__reactHandles$"+xa,lp="__reactResources$"+xa,co="__reactMarker$"+xa;function qh(e){delete e[Ze],delete e[ln],delete e[_f],delete e[Ix],delete e[Fx]}function Ba(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_s]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=um(e);e!==null;){if(n=e[Ze])return n;e=um(e)}return t}e=n,n=e.parentNode}return null}function vs(e){if(e=e[Ze]||e[_s]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Vs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(W(33))}function Xr(e){var t=e[lp];return t||(t=e[lp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[co]=!0}var $g=new Set,t_={};function er(e,t){ns(e,t),ns(e+"Capture",t)}function ns(e,t){for(t_[e]=t,e=0;e<t.length;e++)$g.add(t[e])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cp={},up={};function Gx(e){return gf.call(up,e)?!0:gf.call(cp,e)?!1:Hx.test(e)?up[e]=!0:(cp[e]=!0,!1)}function Dl(e,t,n){if(Gx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Yo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ci(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function e_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vx(e){var t=e_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jl(e){e._valueTracker||(e._valueTracker=Vx(e))}function n_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=e_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function $l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kx=/[\n"\\]/g;function Un(e){return e.replace(kx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rn(t)):e.value!==""+Rn(t)&&(e.value=""+Rn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?xf(e,s,Rn(t)):n!=null?xf(e,s,Rn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Rn(o):e.removeAttribute("name")}function i_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Rn(n):"",t=t!=null?""+Rn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function xf(e,t,n){t==="number"&&$l(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Wr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function a_(e,t,n){if(t!=null&&(t=""+Rn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Rn(n):""}function r_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(W(92));if(Gs(i)){if(1<i.length)throw Error(W(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Rn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function is(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Xx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function s_(e,t,n){if(t!=null&&typeof t!="object")throw Error(W(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&fp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&fp(e,r,t[r])}function Yh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return qx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Sf=null;function jh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,qr=null;function hp(e){var t=vs(e);if(t&&(e=t.stateNode)){var n=e[ln]||null;t:switch(e=t.stateNode,t.type){case"input":if(vf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Un(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[ln]||null;if(!a)throw Error(W(90));vf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&n_(i)}break t;case"textarea":a_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Wr(e,!!n.multiple,t,!1)}}}var su=!1;function o_(e,t,n){if(su)return e(t,n);su=!0;try{var i=e(t);return i}finally{if(su=!1,(Or!==null||qr!==null)&&(Gc(),Or&&(t=Or,e=qr,qr=Or=null,hp(t),e)))for(t=0;t<e.length;t++)hp(e[t])}}function uo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ln]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(W(231,t,typeof n));return n}var Mf=!1;if(Ui)try{var As={};Object.defineProperty(As,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Mf=!1}var na=null,Zh=null,Ll=null;function l_(){if(Ll)return Ll;var e,t=Zh,n=t.length,i,a="value"in na?na.value:na.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Ll=a.slice(e,1<i?1-i:void 0)}function Nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function dp(){return!1}function cn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?jo:dp,this.isPropagationStopped=dp,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=cn(nr),Co=ce({},nr,{view:0,detail:0}),Yx=cn(Co),ou,lu,Rs,Nc=ce({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rs&&(Rs&&e.type==="mousemove"?(ou=e.screenX-Rs.screenX,lu=e.screenY-Rs.screenY):lu=ou=0,Rs=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),pp=cn(Nc),jx=ce({},Nc,{dataTransfer:0}),Zx=cn(jx),Kx=ce({},Co,{relatedTarget:0}),cu=cn(Kx),Qx=ce({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=cn(Qx),$x=ce({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tS=cn($x),eS=ce({},nr,{data:0}),mp=cn(eS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aS[e])?!!t[e]:!1}function Kh(){return rS}var sS=ce({},Co,{key:function(e){if(e.key){var t=nS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kh,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oS=cn(sS),lS=ce({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=cn(lS),cS=ce({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kh}),uS=cn(cS),fS=ce({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=cn(fS),dS=ce({},Nc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=cn(dS),mS=ce({},nr,{newState:0,oldState:0}),gS=cn(mS),_S=[9,13,27,32],Qh=Ui&&"CompositionEvent"in window,qs=null;Ui&&"documentMode"in document&&(qs=document.documentMode);var vS=Ui&&"TextEvent"in window&&!qs,c_=Ui&&(!Qh||qs&&8<qs&&11>=qs),_p=" ",vp=!1;function u_(e,t){switch(e){case"keyup":return _S.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function xS(e,t){switch(e){case"compositionend":return f_(t);case"keypress":return t.which!==32?null:(vp=!0,_p);case"textInput":return e=t.data,e===_p&&vp?null:e;default:return null}}function SS(e,t){if(Pr)return e==="compositionend"||!Qh&&u_(e,t)?(e=l_(),Ll=Zh=na=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return c_&&t.locale!=="ko"?null:t.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!MS[e.type]:t==="textarea"}function h_(e,t,n,i){Or?qr?qr.push(i):qr=[i]:Or=i,t=mc(t,"onChange"),0<t.length&&(n=new Lc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ys=null,fo=null;function yS(e){J0(e,0)}function Oc(e){var t=Vs(e);if(n_(t))return e}function Sp(e,t){if(e==="change")return t}var d_=!1;if(Ui){var uu;if(Ui){var fu="oninput"in document;if(!fu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),fu=typeof Mp.oninput=="function"}uu=fu}else uu=!1;d_=uu&&(!document.documentMode||9<document.documentMode)}function yp(){Ys&&(Ys.detachEvent("onpropertychange",p_),fo=Ys=null)}function p_(e){if(e.propertyName==="value"&&Oc(fo)){var t=[];h_(t,fo,e,jh(e)),o_(yS,t)}}function ES(e,t,n){e==="focusin"?(yp(),Ys=t,fo=n,Ys.attachEvent("onpropertychange",p_)):e==="focusout"&&yp()}function TS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oc(fo)}function bS(e,t){if(e==="click")return Oc(t)}function AS(e,t){if(e==="input"||e==="change")return Oc(t)}function RS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mn=typeof Object.is=="function"?Object.is:RS;function ho(e,t){if(Mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!gf.call(t,a)||!Mn(e[a],t[a]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tp(e,t){var n=Ep(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ep(n)}}function m_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?m_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function g_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$l(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$l(e.document)}return t}function Jh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function CS(e,t){var n=g_(t);t=e.focusedElem;var i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&m_(t.ownerDocument.documentElement,t)){if(i!==null&&Jh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=t.textContent.length,r=Math.min(i.start,a);i=i.end===void 0?r:Math.min(i.end,a),!n.extend&&r>i&&(a=i,i=r,r=a),a=Tp(t,r);var s=Tp(t,i);a&&s&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),r>i?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var wS=Ui&&"documentMode"in document&&11>=document.documentMode,zr=null,yf=null,js=null,Ef=!1;function bp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||zr==null||zr!==$l(i)||(i=zr,"selectionStart"in i&&Jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),js&&ho(js,i)||(js=i,i=mc(yf,"onSelect"),0<i.length&&(t=new Lc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=zr)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Br={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},hu={},__={};Ui&&(__=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function ir(e){if(hu[e])return hu[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in __)return hu[e]=t[n];return e}var v_=ir("animationend"),x_=ir("animationiteration"),S_=ir("animationstart"),DS=ir("transitionrun"),US=ir("transitionstart"),LS=ir("transitioncancel"),M_=ir("transitionend"),y_=new Map,Ap="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Yn(e,t){y_.set(e,t),er(t,[e])}var An=[],Ir=0,$h=0;function Pc(){for(var e=Ir,t=$h=Ir=0;t<e;){var n=An[t];An[t++]=null;var i=An[t];An[t++]=null;var a=An[t];An[t++]=null;var r=An[t];if(An[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&E_(n,a,r)}}function zc(e,t,n,i){An[Ir++]=e,An[Ir++]=t,An[Ir++]=n,An[Ir++]=i,$h|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function td(e,t,n,i){return zc(e,t,n,i),tc(e)}function da(e,t){return zc(e,null,null,t),tc(e)}function E_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;a&&t!==null&&e.tag===3&&(r=e.stateNode,a=31-vn(n),r=r.hiddenUpdates,e=r[a],e===null?r[a]=[t]:e.push(t),t.lane=n|536870912)}function tc(e){if(50<so)throw so=0,Wf=null,Error(W(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fr={},Rp=new WeakMap;function Ln(e,t){if(typeof e=="object"&&e!==null){var n=Rp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:sp(t)},Rp.set(e,t),t)}return{value:e,source:t,stack:sp(t)}}var Hr=[],Gr=0,ec=null,nc=0,Cn=[],wn=0,Va=null,Ti=1,bi="";function Ua(e,t){Hr[Gr++]=nc,Hr[Gr++]=ec,ec=e,nc=t}function T_(e,t,n){Cn[wn++]=Ti,Cn[wn++]=bi,Cn[wn++]=Va,Va=e;var i=Ti;e=bi;var a=32-vn(i)-1;i&=~(1<<a),n+=1;var r=32-vn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ti=1<<32-vn(t)+a|n<<a|i,bi=r+e}else Ti=1<<r|n<<a|i,bi=e}function ed(e){e.return!==null&&(Ua(e,1),T_(e,1,0))}function nd(e){for(;e===ec;)ec=Hr[--Gr],Hr[Gr]=null,nc=Hr[--Gr],Hr[Gr]=null;for(;e===Va;)Va=Cn[--wn],Cn[wn]=null,bi=Cn[--wn],Cn[wn]=null,Ti=Cn[--wn],Cn[wn]=null}var Je=null,We=null,qt=!1,kn=null,Qn=!1,Tf=Error(W(519));function ja(e){var t=Error(W(418,""));throw po(Ln(t,e)),Tf}function Cp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ze]=e,t[ln]=i,n){case"dialog":Gt("cancel",t),Gt("close",t);break;case"iframe":case"object":case"embed":Gt("load",t);break;case"video":case"audio":for(n=0;n<_o.length;n++)Gt(_o[n],t);break;case"source":Gt("error",t);break;case"img":case"image":case"link":Gt("error",t),Gt("load",t);break;case"details":Gt("toggle",t);break;case"input":Gt("invalid",t),i_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Jl(t);break;case"select":Gt("invalid",t);break;case"textarea":Gt("invalid",t),r_(t,i.value,i.defaultValue,i.children),Jl(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||tv(t.textContent,n)?(i.popover!=null&&(Gt("beforetoggle",t),Gt("toggle",t)),i.onScroll!=null&&Gt("scroll",t),i.onScrollEnd!=null&&Gt("scrollend",t),i.onClick!=null&&(t.onclick=kc),t=!0):t=!1,t||ja(e)}function wp(e){for(Je=e.return;Je;)switch(Je.tag){case 3:case 27:Qn=!0;return;case 5:case 13:Qn=!1;return;default:Je=Je.return}}function Cs(e){if(e!==Je)return!1;if(!qt)return wp(e),qt=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Jf(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&We&&ja(e),wp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){We=qn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}We=null}}else We=Je?qn(e.stateNode.nextSibling):null;return!0}function wo(){We=Je=null,qt=!1}function po(e){kn===null?kn=[e]:kn.push(e)}var Zs=Error(W(460)),b_=Error(W(474)),bf={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zo(){}function A_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zo,Zo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Zs?Error(W(483)):e;default:if(typeof t.status=="string")t.then(Zo,Zo);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(W(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Zs?Error(W(483)):e}throw Ks=t,Zs}}var Ks=null;function Up(){if(Ks===null)throw Error(W(459));var e=Ks;return Ks=null,e}var Yr=null,mo=0;function Ko(e){var t=mo;return mo+=1,Yr===null&&(Yr=[]),A_(Yr,e,t)}function ws(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Qo(e,t){throw t.$$typeof===xx?Error(W(525)):(e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Lp(e){var t=e._init;return t(e._payload)}function R_(e){function t(u,_){if(e){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!e)return null;for(;_!==null;)t(u,_),_=_.sibling;return null}function i(u){for(var _=new Map;u!==null;)u.key!==null?_.set(u.key,u):_.set(u.index,u),u=u.sibling;return _}function a(u,_){return u=sa(u,_),u.index=0,u.sibling=null,u}function r(u,_,g){return u.index=g,e?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=33554434,_):g):(u.flags|=33554434,_)):(u.flags|=1048576,_)}function s(u){return e&&u.alternate===null&&(u.flags|=33554434),u}function o(u,_,g,M){return _===null||_.tag!==6?(_=Tu(g,u.mode,M),_.return=u,_):(_=a(_,g),_.return=u,_)}function l(u,_,g,M){var w=g.type;return w===Lr?h(u,_,g.props.children,M,g.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ji&&Lp(w)===_.type)?(_=a(_,g.props),ws(_,g),_.return=u,_):(_=Il(g.type,g.key,g.props,null,u.mode,M),ws(_,g),_.return=u,_)}function c(u,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=bu(g,u.mode,M),_.return=u,_):(_=a(_,g.children||[]),_.return=u,_)}function h(u,_,g,M,w){return _===null||_.tag!==7?(_=Xa(g,u.mode,M,w),_.return=u,_):(_=a(_,g),_.return=u,_)}function d(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Tu(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xo:return g=Il(_.type,_.key,_.props,null,u.mode,g),ws(g,_),g.return=u,g;case Fs:return _=bu(_,u.mode,g),_.return=u,_;case ji:var M=_._init;return _=M(_._payload),d(u,_,g)}if(Gs(_)||bs(_))return _=Xa(_,u.mode,g,null),_.return=u,_;if(typeof _.then=="function")return d(u,Ko(_),g);if(_.$$typeof===Ei)return d(u,Jo(u,_),g);Qo(u,_)}return null}function f(u,_,g,M){var w=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return w!==null?null:o(u,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:return g.key===w?l(u,_,g,M):null;case Fs:return g.key===w?c(u,_,g,M):null;case ji:return w=g._init,g=w(g._payload),f(u,_,g,M)}if(Gs(g)||bs(g))return w!==null?null:h(u,_,g,M,null);if(typeof g.then=="function")return f(u,_,Ko(g),M);if(g.$$typeof===Ei)return f(u,_,Jo(u,g),M);Qo(u,g)}return null}function p(u,_,g,M,w){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return u=u.get(g)||null,o(_,u,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xo:return u=u.get(M.key===null?g:M.key)||null,l(_,u,M,w);case Fs:return u=u.get(M.key===null?g:M.key)||null,c(_,u,M,w);case ji:var R=M._init;return M=R(M._payload),p(u,_,g,M,w)}if(Gs(M)||bs(M))return u=u.get(g)||null,h(_,u,M,w,null);if(typeof M.then=="function")return p(u,_,g,Ko(M),w);if(M.$$typeof===Ei)return p(u,_,g,Jo(_,M),w);Qo(_,M)}return null}function v(u,_,g,M){for(var w=null,R=null,b=_,U=_=0,T=null;b!==null&&U<g.length;U++){b.index>U?(T=b,b=null):T=b.sibling;var y=f(u,b,g[U],M);if(y===null){b===null&&(b=T);break}e&&b&&y.alternate===null&&t(u,b),_=r(y,_,U),R===null?w=y:R.sibling=y,R=y,b=T}if(U===g.length)return n(u,b),qt&&Ua(u,U),w;if(b===null){for(;U<g.length;U++)b=d(u,g[U],M),b!==null&&(_=r(b,_,U),R===null?w=b:R.sibling=b,R=b);return qt&&Ua(u,U),w}for(b=i(b);U<g.length;U++)T=p(b,u,U,g[U],M),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?U:T.key),_=r(T,_,U),R===null?w=T:R.sibling=T,R=T);return e&&b.forEach(function(D){return t(u,D)}),qt&&Ua(u,U),w}function x(u,_,g,M){if(g==null)throw Error(W(151));for(var w=null,R=null,b=_,U=_=0,T=null,y=g.next();b!==null&&!y.done;U++,y=g.next()){b.index>U?(T=b,b=null):T=b.sibling;var D=f(u,b,y.value,M);if(D===null){b===null&&(b=T);break}e&&b&&D.alternate===null&&t(u,b),_=r(D,_,U),R===null?w=D:R.sibling=D,R=D,b=T}if(y.done)return n(u,b),qt&&Ua(u,U),w;if(b===null){for(;!y.done;U++,y=g.next())y=d(u,y.value,M),y!==null&&(_=r(y,_,U),R===null?w=y:R.sibling=y,R=y);return qt&&Ua(u,U),w}for(b=i(b);!y.done;U++,y=g.next())y=p(b,u,U,y.value,M),y!==null&&(e&&y.alternate!==null&&b.delete(y.key===null?U:y.key),_=r(y,_,U),R===null?w=y:R.sibling=y,R=y);return e&&b.forEach(function(X){return t(u,X)}),qt&&Ua(u,U),w}function m(u,_,g,M){if(typeof g=="object"&&g!==null&&g.type===Lr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:t:{for(var w=g.key;_!==null;){if(_.key===w){if(w=g.type,w===Lr){if(_.tag===7){n(u,_.sibling),M=a(_,g.props.children),M.return=u,u=M;break t}}else if(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ji&&Lp(w)===_.type){n(u,_.sibling),M=a(_,g.props),ws(M,g),M.return=u,u=M;break t}n(u,_);break}else t(u,_);_=_.sibling}g.type===Lr?(M=Xa(g.props.children,u.mode,M,g.key),M.return=u,u=M):(M=Il(g.type,g.key,g.props,null,u.mode,M),ws(M,g),M.return=u,u=M)}return s(u);case Fs:t:{for(w=g.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),M=a(_,g.children||[]),M.return=u,u=M;break t}else{n(u,_);break}else t(u,_);_=_.sibling}M=bu(g,u.mode,M),M.return=u,u=M}return s(u);case ji:return w=g._init,g=w(g._payload),m(u,_,g,M)}if(Gs(g))return v(u,_,g,M);if(bs(g)){if(w=bs(g),typeof w!="function")throw Error(W(150));return g=w.call(g),x(u,_,g,M)}if(typeof g.then=="function")return m(u,_,Ko(g),M);if(g.$$typeof===Ei)return m(u,_,Jo(u,g),M);Qo(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),M=a(_,g),M.return=u,u=M):(n(u,_),M=Tu(g,u.mode,M),M.return=u,u=M),s(u)):n(u,_)}return function(u,_,g,M){try{mo=0;var w=m(u,_,g,M);return Yr=null,w}catch(b){if(b===Zs)throw b;var R=Nn(29,b,null,u.mode);return R.lanes=M,R.return=u,R}finally{}}}var Za=R_(!0),C_=R_(!1),as=si(null),ic=si(0);function Np(e,t){e=Oi,ue(ic,e),ue(as,t),Oi=e|t.baseLanes}function Af(){ue(ic,Oi),ue(as,as.current)}function id(){Oi=ic.current,Ge(as),Ge(ic)}var zn=si(null),ii=null;function Ki(e){var t=e.alternate;ue(De,De.current&1),ue(zn,e),ii===null&&(t===null||as.current!==null||t.memoizedState!==null)&&(ii=e)}function w_(e){if(e.tag===22){if(ue(De,De.current),ue(zn,e),ii===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ii=e)}}else Qi()}function Qi(){ue(De,De.current),ue(zn,zn.current)}function Ai(e){Ge(zn),ii===e&&(ii=null),Ge(De)}var De=si(0);function ac(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var NS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},OS=Le.unstable_scheduleCallback,PS=Le.unstable_NormalPriority,we={$$typeof:Ei,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ad(){return{controller:new NS,data:new Map,refCount:0}}function Do(e){e.refCount--,e.refCount===0&&OS(PS,function(){e.controller.abort()})}var Qs=null,Rf=0,rs=0,jr=null;function zS(e,t){if(Qs===null){var n=Qs=[];Rf=0,rs=Rd(),jr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Rf++,t.then(Op,Op),t}function Op(){if(--Rf===0&&Qs!==null){jr!==null&&(jr.status="fulfilled");var e=Qs;Qs=null,rs=0,jr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function BS(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Pp=Ut.S;Ut.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&zS(e,t),Pp!==null&&Pp(e,t)};var ka=si(null);function rd(){var e=ka.current;return e!==null?e:se.pooledCache}function Ol(e,t){t===null?ue(ka,ka.current):ue(ka,t.pool)}function D_(){var e=rd();return e===null?null:{parent:we._currentValue,pool:e}}var pa=0,Bt=null,ie=null,Re=null,rc=!1,Zr=!1,Ka=!1,sc=0,go=0,Kr=null,IS=0;function Se(){throw Error(W(321))}function sd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mn(e[n],t[n]))return!1;return!0}function od(e,t,n,i,a,r){return pa=r,Bt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?ar:Sa,Ka=!1,r=n(i,a),Ka=!1,Zr&&(r=L_(t,n,i,a)),U_(e),r}function U_(e){Ut.H=ri;var t=ie!==null&&ie.next!==null;if(pa=0,Re=ie=Bt=null,rc=!1,go=0,Kr=null,t)throw Error(W(300));e===null||He||(e=e.dependencies,e!==null&&cc(e)&&(He=!0))}function L_(e,t,n,i){Bt=e;var a=0;do{if(Zr&&(Kr=null),go=0,Zr=!1,25<=a)throw Error(W(301));if(a+=1,Re=ie=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ut.H=rr,r=t(n,i)}while(Zr);return r}function FS(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?Uo(t):t,e=e.useState()[0],(ie!==null?ie.memoizedState:null)!==e&&(Bt.flags|=1024),t}function ld(){var e=sc!==0;return sc=0,e}function cd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ud(e){if(rc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rc=!1}pa=0,Re=ie=Bt=null,Zr=!1,go=sc=0,Kr=null}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Bt.memoizedState=Re=e:Re=Re.next=e,Re}function Ce(){if(ie===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=Re===null?Bt.memoizedState:Re.next;if(t!==null)Re=t,ie=e;else{if(e===null)throw Bt.alternate===null?Error(W(467)):Error(W(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},Re===null?Bt.memoizedState=Re=e:Re=Re.next=e}return Re}var Bc;Bc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Uo(e){var t=go;return go+=1,Kr===null&&(Kr=[]),e=A_(Kr,e,t),t=Bt,(Re===null?t.memoizedState:Re.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?ar:Sa),e}function Ic(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uo(e);if(e.$$typeof===Ei)return Ke(e)}throw Error(W(438,String(e)))}function fd(e){var t=null,n=Bt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Bt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Bc(),Bt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Mx;return t.index++,n}function Li(e,t){return typeof t=="function"?t(e):t}function Pl(e){var t=Ce();return hd(t,ie,e)}function hd(e,t,n){var i=e.queue;if(i===null)throw Error(W(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(kt&d)===d:(pa&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===rs&&(h=!0);else if((pa&f)===f){c=c.next,f===rs&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,Bt.lanes|=f,ga|=f;d=c.action,Ka&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Bt.lanes|=d,ga|=d;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!Mn(r,e.memoizedState)&&(He=!0,h&&(n=jr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function du(e){var t=Ce(),n=t.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Mn(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function N_(e,t,n){var i=Bt,a=Ce(),r=qt;if(r){if(n===void 0)throw Error(W(407));n=n()}else n=t();var s=!Mn((ie||a).memoizedState,n);if(s&&(a.memoizedState=n,He=!0),a=a.queue,dd(z_.bind(null,i,a,e),[e]),a.getSnapshot!==t||s||Re!==null&&Re.memoizedState.tag&1){if(i.flags|=2048,ss(9,P_.bind(null,i,a,n,t),{destroy:void 0},null),se===null)throw Error(W(349));r||pa&60||O_(i,t,n)}return n}function O_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Bt.updateQueue,t===null?(t=Bc(),Bt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function P_(e,t,n,i){t.value=n,t.getSnapshot=i,B_(t)&&I_(e)}function z_(e,t,n){return n(function(){B_(t)&&I_(e)})}function B_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mn(e,n)}catch{return!0}}function I_(e){var t=da(e,2);t!==null&&tn(t,e,2)}function Cf(e){var t=an();if(typeof e=="function"){var n=e;if(e=n(),Ka){ea(!0);try{n()}finally{ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t}function F_(e,t,n,i){return e.baseState=n,hd(e,ie,typeof i=="function"?i:Li)}function HS(e,t,n,i,a){if(Hc(e))throw Error(W(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ut.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,H_(t,r)):(r.next=n.next,t.pending=n.next=r)}}function H_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Ut.T,s={};Ut.T=s;try{var o=n(a,i),l=Ut.S;l!==null&&l(s,o),zp(e,t,o)}catch(c){wf(e,t,c)}finally{Ut.T=r}}else try{r=n(a,i),zp(e,t,r)}catch(c){wf(e,t,c)}}function zp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Bp(e,t,i)},function(i){return wf(e,t,i)}):Bp(e,t,n)}function Bp(e,t,n){t.status="fulfilled",t.value=n,G_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,H_(e,n)))}function wf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,G_(t),t=t.next;while(t!==i)}e.action=null}function G_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function V_(e,t){return t}function k_(e,t){if(qt){var n=se.formState;if(n!==null){t:{var i=Bt;if(qt){if(We){e:{for(var a=We,r=Qn;a.nodeType!==8;){if(!r){a=null;break e}if(a=qn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){We=qn(a.nextSibling),i=a.data==="F!";break t}}ja(i)}i=!1}i&&(t=n[0])}}return n=an(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:V_,lastRenderedState:t},n.queue=i,n=s0.bind(null,Bt,i),i.dispatch=n,i=Cf(!1),r=_d.bind(null,Bt,!1,i.queue),i=an(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=HS.bind(null,Bt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function X_(e){var t=Ce();return W_(t,ie,e)}function W_(e,t,n){t=hd(e,t,V_)[0],e=Pl(Li)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Uo(t):t;var i=Ce(),a=i.queue,r=a.dispatch;return n!==i.memoizedState&&(Bt.flags|=2048,ss(9,GS.bind(null,a,n),{destroy:void 0},null)),[t,r,e]}function GS(e,t){e.action=t}function q_(e){var t=Ce(),n=ie;if(n!==null)return W_(t,n,e);Ce(),t=t.memoizedState,n=Ce();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ss(e,t,n,i){return e={tag:e,create:t,inst:n,deps:i,next:null},t=Bt.updateQueue,t===null&&(t=Bc(),Bt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Y_(){return Ce().memoizedState}function zl(e,t,n,i){var a=an();Bt.flags|=e,a.memoizedState=ss(1|t,n,{destroy:void 0},i===void 0?null:i)}function Fc(e,t,n,i){var a=Ce();i=i===void 0?null:i;var r=a.memoizedState.inst;ie!==null&&i!==null&&sd(i,ie.memoizedState.deps)?a.memoizedState=ss(t,n,r,i):(Bt.flags|=e,a.memoizedState=ss(1|t,n,r,i))}function Ip(e,t){zl(8390656,8,e,t)}function dd(e,t){Fc(2048,8,e,t)}function j_(e,t){return Fc(4,2,e,t)}function Z_(e,t){return Fc(4,4,e,t)}function K_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Q_(e,t,n){n=n!=null?n.concat([e]):null,Fc(4,4,K_.bind(null,t,e),n)}function pd(){}function J_(e,t){var n=Ce();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&sd(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function $_(e,t){var n=Ce();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&sd(t,i[1]))return i[0];if(i=e(),Ka){ea(!0);try{e()}finally{ea(!1)}}return n.memoizedState=[i,t],i}function md(e,t,n){return n===void 0||pa&1073741824?e.memoizedState=t:(e.memoizedState=n,e=G0(),Bt.lanes|=e,ga|=e,n)}function t0(e,t,n,i){return Mn(n,t)?n:as.current!==null?(e=md(e,n,i),Mn(e,t)||(He=!0),e):pa&42?(e=G0(),Bt.lanes|=e,ga|=e,t):(He=!0,e.memoizedState=n)}function e0(e,t,n,i,a){var r=le.p;le.p=r!==0&&8>r?r:8;var s=Ut.T,o={};Ut.T=o,_d(e,!1,t,n);try{var l=a(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=BS(l,i);Js(e,t,h,xn(e))}else Js(e,t,i,xn(e))}catch(d){Js(e,t,{then:function(){},status:"rejected",reason:d},xn())}finally{le.p=r,Ut.T=s}}function VS(){}function Df(e,t,n,i){if(e.tag!==5)throw Error(W(476));var a=n0(e).queue;e0(e,a,t,Ga,n===null?VS:function(){return i0(e),n(i)})}function n0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ga,baseState:Ga,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:Ga},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function i0(e){var t=n0(e).next.queue;Js(e,t,{},xn())}function gd(){return Ke(So)}function a0(){return Ce().memoizedState}function r0(){return Ce().memoizedState}function kS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=xn();e=aa(n);var i=ra(t,e,n);i!==null&&(tn(i,t,n),to(i,t,n)),t={cache:ad()},e.payload=t;return}t=t.return}}function XS(e,t,n){var i=xn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Hc(e)?o0(t,n):(n=td(e,t,n,i),n!==null&&(tn(n,e,i),l0(n,t,i)))}function s0(e,t,n){var i=xn();Js(e,t,n,i)}function Js(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hc(e))o0(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Mn(o,s))return zc(e,t,a,0),se===null&&Pc(),!1}catch{}finally{}if(n=td(e,t,a,i),n!==null)return tn(n,e,i),l0(n,t,i),!0}return!1}function _d(e,t,n,i){if(i={lane:2,revertLane:Rd(),action:i,hasEagerState:!1,eagerState:null,next:null},Hc(e)){if(t)throw Error(W(479))}else t=td(e,n,i,2),t!==null&&tn(t,e,2)}function Hc(e){var t=e.alternate;return e===Bt||t!==null&&t===Bt}function o0(e,t){Zr=rc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function l0(e,t,n){if(n&4194176){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Kg(e,n)}}var ri={readContext:Ke,use:Ic,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se};ri.useCacheRefresh=Se;ri.useMemoCache=Se;ri.useHostTransitionStatus=Se;ri.useFormState=Se;ri.useActionState=Se;ri.useOptimistic=Se;var ar={readContext:Ke,use:Ic,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Ip,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zl(4194308,4,K_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zl(4194308,4,e,t)},useInsertionEffect:function(e,t){zl(4,2,e,t)},useMemo:function(e,t){var n=an();t=t===void 0?null:t;var i=e();if(Ka){ea(!0);try{e()}finally{ea(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=an();if(n!==void 0){var a=n(t);if(Ka){ea(!0);try{n(t)}finally{ea(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=XS.bind(null,Bt,e),[i.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:function(e){e=Cf(e);var t=e.queue,n=s0.bind(null,Bt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:pd,useDeferredValue:function(e,t){var n=an();return md(n,e,t)},useTransition:function(){var e=Cf(!1);return e=e0.bind(null,Bt,e.queue,!0,!1),an().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Bt,a=an();if(qt){if(n===void 0)throw Error(W(407));n=n()}else{if(n=t(),se===null)throw Error(W(349));kt&60||O_(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Ip(z_.bind(null,i,r,e),[e]),i.flags|=2048,ss(9,P_.bind(null,i,r,n,t),{destroy:void 0},null),n},useId:function(){var e=an(),t=se.identifierPrefix;if(qt){var n=bi,i=Ti;n=(i&~(1<<32-vn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=sc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=IS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return an().memoizedState=kS.bind(null,Bt)}};ar.useMemoCache=fd;ar.useHostTransitionStatus=gd;ar.useFormState=k_;ar.useActionState=k_;ar.useOptimistic=function(e){var t=an();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_d.bind(null,Bt,!0,n),n.dispatch=t,[e,t]};var Sa={readContext:Ke,use:Ic,useCallback:J_,useContext:Ke,useEffect:dd,useImperativeHandle:Q_,useInsertionEffect:j_,useLayoutEffect:Z_,useMemo:$_,useReducer:Pl,useRef:Y_,useState:function(){return Pl(Li)},useDebugValue:pd,useDeferredValue:function(e,t){var n=Ce();return t0(n,ie.memoizedState,e,t)},useTransition:function(){var e=Pl(Li)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Uo(e),t]},useSyncExternalStore:N_,useId:a0};Sa.useCacheRefresh=r0;Sa.useMemoCache=fd;Sa.useHostTransitionStatus=gd;Sa.useFormState=X_;Sa.useActionState=X_;Sa.useOptimistic=function(e,t){var n=Ce();return F_(n,ie,e,t)};var rr={readContext:Ke,use:Ic,useCallback:J_,useContext:Ke,useEffect:dd,useImperativeHandle:Q_,useInsertionEffect:j_,useLayoutEffect:Z_,useMemo:$_,useReducer:du,useRef:Y_,useState:function(){return du(Li)},useDebugValue:pd,useDeferredValue:function(e,t){var n=Ce();return ie===null?md(n,e,t):t0(n,ie.memoizedState,e,t)},useTransition:function(){var e=du(Li)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Uo(e),t]},useSyncExternalStore:N_,useId:a0};rr.useCacheRefresh=r0;rr.useMemoCache=fd;rr.useHostTransitionStatus=gd;rr.useFormState=q_;rr.useActionState=q_;rr.useOptimistic=function(e,t){var n=Ce();return ie!==null?F_(n,ie,e,t):(n.baseState=e,[e,n.queue.dispatch])};function pu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uf={isMounted:function(e){return(e=e._reactInternals)?gs(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=xn(),a=aa(i);a.payload=t,n!=null&&(a.callback=n),t=ra(e,a,i),t!==null&&(tn(t,e,i),to(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=xn(),a=aa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ra(e,a,i),t!==null&&(tn(t,e,i),to(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xn(),i=aa(n);i.tag=2,t!=null&&(i.callback=t),t=ra(e,i,n),t!==null&&(tn(t,e,n),to(t,e,n))}};function Fp(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!ho(n,i)||!ho(a,r):!0}function Hp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Uf.enqueueReplaceState(t,t.state,null)}function Qa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ce({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var oc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function c0(e){oc(e)}function u0(e){console.error(e)}function f0(e){oc(e)}function lc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Gp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Lf(e,t,n){return n=aa(n),n.tag=3,n.payload={element:null},n.callback=function(){lc(e,t)},n}function h0(e){return e=aa(e),e.tag=3,e}function d0(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Gp(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Gp(t,n,i),typeof a!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function WS(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Lo(t,n,a,!0),n=zn.current,n!==null){switch(n.tag){case 13:return ii===null?Yf():n.alternate===null&&xe===0&&(xe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===bf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ru(e,i,a)),!1;case 22:return n.flags|=65536,i===bf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ru(e,i,a)),!1}throw Error(W(435,n.tag))}return Ru(e,i,a),Yf(),!1}if(qt)return t=zn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Tf&&(e=Error(W(422),{cause:i}),po(Ln(e,n)))):(i!==Tf&&(t=Error(W(423),{cause:i}),po(Ln(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Ln(i,n),a=Lf(e.stateNode,i,a),Su(e,a),xe!==4&&(xe=2)),!1;var r=Error(W(520),{cause:i});if(r=Ln(r,n),ao===null?ao=[r]:ao.push(r),xe!==4&&(xe=2),t===null)return!0;i=Ln(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Lf(n.stateNode,i,e),Su(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(oa===null||!oa.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=h0(a),d0(a,e,n,i),Su(n,a),!1}n=n.return}while(n!==null);return!1}var p0=Error(W(461)),He=!1;function Xe(e,t,n,i){t.child=e===null?C_(t,null,n,i):Za(t,e.child,n,i)}function Vp(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Ja(t),i=od(e,t,n,s,r,a),o=ld(),e!==null&&!He?(cd(e,t,a),Ni(e,t,a)):(qt&&o&&ed(t),t.flags|=1,Xe(e,t,i,a),t.child)}function kp(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!yd(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,m0(e,t,r,i,a)):(e=Il(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!vd(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(s,i)&&e.ref===t.ref)return Ni(e,t,a)}return t.flags|=1,e=sa(r,i),e.ref=t.ref,e.return=t,t.child=e}function m0(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(ho(r,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=r,vd(e,a))e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Ni(e,t,a)}return Nf(e,t,n,i,a)}function g0(e,t,n){var i=t.pendingProps,a=i.children,r=(t.stateNode._pendingVisibility&2)!==0,s=e!==null?e.memoizedState:null;if($s(e,t),i.mode==="hidden"||r){if(t.flags&128){if(i=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return Xp(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(t,s!==null?s.cachePool:null),s!==null?Np(t,s):Af(),w_(t);else return t.lanes=t.childLanes=536870912,Xp(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(Ol(t,s.cachePool),Np(t,s),Qi(),t.memoizedState=null):(e!==null&&Ol(t,null),Af(),Qi());return Xe(e,t,a,n),t.child}function Xp(e,t,n,i){var a=rd();return a=a===null?null:{parent:we._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ol(t,null),Af(),w_(t),e!==null&&Lo(e,t,i,!0),null}function $s(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(W(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Nf(e,t,n,i,a){return Ja(t),n=od(e,t,n,i,void 0,a),i=ld(),e!==null&&!He?(cd(e,t,a),Ni(e,t,a)):(qt&&i&&ed(t),t.flags|=1,Xe(e,t,n,a),t.child)}function Wp(e,t,n,i,a,r){return Ja(t),t.updateQueue=null,n=L_(t,i,n,a),U_(e),i=ld(),e!==null&&!He?(cd(e,t,r),Ni(e,t,r)):(qt&&i&&ed(t),t.flags|=1,Xe(e,t,n,r),t.child)}function qp(e,t,n,i,a){if(Ja(t),t.stateNode===null){var r=Fr,s=n.contextType;typeof s=="object"&&s!==null&&(r=Ke(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Uf,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},xd(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?Ke(s):Fr,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(pu(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Uf.enqueueReplaceState(r,r.state,null),no(t,i,r,a),eo(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=Qa(n,o);r.props=l;var c=r.context,h=n.contextType;s=Fr,typeof h=="object"&&h!==null&&(s=Ke(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&Hp(t,r,i,s),Zi=!1;var f=t.memoizedState;r.state=f,no(t,i,r,a),eo(),c=t.memoizedState,o||f!==c||Zi?(typeof d=="function"&&(pu(t,n,d,i),c=t.memoizedState),(l=Zi||Fp(t,n,l,i,f,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Ff(e,t),s=t.memoizedProps,h=Qa(n,s),r.props=h,d=t.pendingProps,f=r.context,c=n.contextType,l=Fr,typeof c=="object"&&c!==null&&(l=Ke(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Hp(t,r,i,l),Zi=!1,f=t.memoizedState,r.state=f,no(t,i,r,a),eo();var p=t.memoizedState;s!==d||f!==p||Zi||e!==null&&e.dependencies!==null&&cc(e.dependencies)?(typeof o=="function"&&(pu(t,n,o,i),p=t.memoizedState),(h=Zi||Fp(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&cc(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,$s(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Za(t,e.child,null,a),t.child=Za(t,null,n,a)):Xe(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Ni(e,t,a),e}function Yp(e,t,n,i){return wo(),t.flags|=256,Xe(e,t,n,i),t.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function gu(e){return{baseLanes:e,cachePool:D_()}}function _u(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=On),e}function _0(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(De.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(qt){if(a?Ki(t):Qi(),qt){var o=We,l;if(l=o){t:{for(l=o,o=Qn;l.nodeType!==8;){if(!o){o=null;break t}if(l=qn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:Va!==null?{id:Ti,overflow:bi}:null,retryLane:536870912},l=Nn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,Je=t,We=null,l=!0):l=!1}l||ja(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return o.data==="$!"?t.lanes=16:t.lanes=536870912,null;Ai(t)}return o=i.children,i=i.fallback,a?(Qi(),a=t.mode,o=Pf({mode:"hidden",children:o},a),i=Xa(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=gu(n),a.childLanes=_u(e,s,n),t.memoizedState=mu,i):(Ki(t),Of(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Ki(t),t.flags&=-257,t=vu(e,t,n)):t.memoizedState!==null?(Qi(),t.child=e.child,t.flags|=128,t=null):(Qi(),a=i.fallback,o=t.mode,i=Pf({mode:"visible",children:i.children},o),a=Xa(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,Za(t,e.child,null,n),i=t.child,i.memoizedState=gu(n),i.childLanes=_u(e,s,n),t.memoizedState=mu,t=a);else if(Ki(t),o.data==="$!"){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(W(419)),i.stack="",i.digest=s,po({value:i,source:null,stack:null}),t=vu(e,t,n)}else if(He||Lo(e,t,n,!1),s=(n&e.childLanes)!==0,He||s){if(s=se,s!==null){if(i=n&-n,i&42)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane)throw l.retryLane=i,da(e,i),tn(s,e,i),p0}o.data==="$?"||Yf(),t=vu(e,t,n)}else o.data==="$?"?(t.flags|=128,t.child=e.child,t=sM.bind(null,e),o._reactRetry=t,t=null):(e=l.treeContext,We=qn(o.nextSibling),Je=t,qt=!0,kn=null,Qn=!1,e!==null&&(Cn[wn++]=Ti,Cn[wn++]=bi,Cn[wn++]=Va,Ti=e.id,bi=e.overflow,Va=t),t=Of(t,i.children),t.flags|=4096);return t}return a?(Qi(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=sa(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&31457280,c!==null?a=sa(c,a):(a=Xa(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=gu(n):(l=o.cachePool,l!==null?(c=we._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=D_(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=_u(e,s,n),t.memoizedState=mu,i):(Ki(t),n=e.child,e=n.sibling,n=sa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Of(e,t){return t=Pf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pf(e,t){return F0(e,t,0,null)}function vu(e,t,n){return Za(t,e.child,null,n),e=Of(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Bf(e.return,t,n)}function xu(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function v0(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(Xe(e,t,i.children,n),i=De.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jp(e,n,t);else if(e.tag===19)jp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(ue(De,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ac(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),xu(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ac(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}xu(t,!0,n,null,r);break;case"together":xu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ga|=t.lanes,!(n&t.childLanes))if(e!==null){if(Lo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,n=sa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vd(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&cc(e)))}function qS(e,t,n){switch(t.tag){case 3:Zl(t,t.stateNode.containerInfo),Ji(t,we,e.memoizedState.cache),wo();break;case 27:case 5:mf(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:Ji(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ki(t),t.flags|=128,null):n&t.child.childLanes?_0(e,t,n):(Ki(t),e=Ni(e,t,n),e!==null?e.sibling:null);Ki(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Lo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return v0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ue(De,De.current),i)break;return null;case 22:case 23:return t.lanes=0,g0(e,t,n);case 24:Ji(t,we,e.memoizedState.cache)}return Ni(e,t,n)}function x0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!vd(e,n)&&!(t.flags&128))return He=!1,qS(e,t,n);He=!!(e.flags&131072)}else He=!1,qt&&t.flags&1048576&&T_(t,nc,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")yd(i)?(e=Qa(i,e),t.tag=1,t=qp(null,t,i,e,n)):(t.tag=0,t=Nf(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===kh){t.tag=11,t=Vp(null,t,i,e,n);break t}else if(a===Xh){t.tag=14,t=kp(null,t,i,e,n);break t}}throw t=df(i)||i,Error(W(306,t,""))}}return t;case 0:return Nf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Qa(i,t.pendingProps),qp(e,t,i,a,n);case 3:t:{if(Zl(t,t.stateNode.containerInfo),e===null)throw Error(W(387));var r=t.pendingProps;a=t.memoizedState,i=a.element,Ff(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ji(t,we,r),r!==a.cache&&If(t,[we],n,!0),eo(),r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Yp(e,t,r,n);break t}else if(r!==i){i=Ln(Error(W(424)),t),po(i),t=Yp(e,t,r,n);break t}else for(We=qn(t.stateNode.containerInfo.firstChild),Je=t,qt=!0,kn=null,Qn=!0,n=C_(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),r===i){t=Ni(e,t,n);break t}Xe(e,t,r,n)}t=t.child}return t;case 26:return $s(e,t),e===null?(n=hm(t.type,null,t.pendingProps,null))?t.memoizedState=n:qt||(n=t.type,e=t.pendingProps,i=gc(ia.current).createElement(n),i[Ze]=t,i[ln]=e,qe(i,n,e),Be(i),t.stateNode=i):t.memoizedState=hm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return mf(t),e===null&&qt&&(i=t.stateNode=iv(t.type,t.pendingProps,ia.current),Je=t,Qn=!0,We=qn(i.firstChild)),i=t.pendingProps.children,e!==null||qt?Xe(e,t,i,n):t.child=Za(t,null,i,n),$s(e,t),t.child;case 5:return e===null&&qt&&((a=i=We)&&(i=yM(i,t.type,t.pendingProps,Qn),i!==null?(t.stateNode=i,Je=t,We=qn(i.firstChild),Qn=!1,a=!0):a=!1),a||ja(t)),mf(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,Jf(a,r)?i=null:s!==null&&Jf(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=od(e,t,FS,null,null,n),So._currentValue=a),$s(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&qt&&((e=n=We)&&(n=EM(n,t.pendingProps,Qn),n!==null?(t.stateNode=n,Je=t,We=null,e=!0):e=!1),e||ja(t)),null;case 13:return _0(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Za(t,null,i,n):Xe(e,t,i,n),t.child;case 11:return Vp(e,t,t.type,t.pendingProps,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ji(t,t.type,i.value),Xe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Ja(t),a=Ke(a),i=i(a),t.flags|=1,Xe(e,t,i,n),t.child;case 14:return kp(e,t,t.type,t.pendingProps,n);case 15:return m0(e,t,t.type,t.pendingProps,n);case 19:return v0(e,t,n);case 22:return g0(e,t,n);case 24:return Ja(t),i=Ke(we),e===null?(a=rd(),a===null&&(a=se,r=ad(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},xd(t),Ji(t,we,a)):(e.lanes&n&&(Ff(e,t),no(t,null,null,n),eo()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ji(t,we,i)):(i=r.cache,Ji(t,we,i),i!==a.cache&&If(t,[we],n,!0))),Xe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(W(156,t.tag))}var zf=si(null),sr=null,Ri=null;function Ji(e,t,n){ue(zf,t._currentValue),t._currentValue=n}function Di(e){e._currentValue=zf.current,Ge(zf)}function Bf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function If(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Bf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(W(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Bf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Lo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(W(387));if(s=s.memoizedProps,s!==null){var o=a.type;Mn(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===jl.current){if(s=a.alternate,s===null)throw Error(W(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}a=a.return}e!==null&&If(t,e,n,i),t.flags|=262144}function cc(e){for(e=e.firstContext;e!==null;){if(!Mn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){sr=e,Ri=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return S0(sr,e)}function Jo(e,t){return sr===null&&Ja(e),S0(e,t)}function S0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ri===null){if(e===null)throw Error(W(308));Ri=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ri=Ri.next=t;return n}var Zi=!1;function xd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ff(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,pe&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=tc(e),E_(e,null,n),t}return zc(e,i,t,n),tc(e)}function to(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Kg(e,n)}}function Su(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Hf=!1;function eo(){if(Hf){var e=jr;if(e!==null)throw e}}function no(e,t,n,i){Hf=!1;var a=e.updateQueue;Zi=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,h=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(kt&f)===f:(i&f)===f){f!==0&&f===rs&&(Hf=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break t;d=ce({},d,f);break t;case 2:Zi=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),ga|=s,e.lanes=s,e.memoizedState=d}}function M0(e,t){if(typeof e!="function")throw Error(W(191,e));e.call(t)}function y0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)M0(n[e],t)}function No(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){ae(t,t.return,o)}}function ma(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n;try{o()}catch(c){ae(a,l,c)}}}i=i.next}while(i!==r)}}catch(c){ae(t,t.return,c)}}function E0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{y0(t,n)}catch(i){ae(e,e.return,i)}}}function T0(e,t,n){n.props=Qa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ae(e,t,i)}}function Ia(e,t){try{var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 26:case 27:case 5:var a=i;break;default:a=i}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){ae(e,t,r)}}function gn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ae(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ae(e,t,a)}else n.current=null}function b0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ae(e,e.return,a)}}function Zp(e,t,n){try{var i=e.stateNode;_M(i,e.type,n,t),i[ln]=t}catch(a){ae(e,e.return,a)}}function A0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Mu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||A0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kc));else if(i!==4&&i!==27&&(e=e.child,e!==null))for(Gf(e,t,n),e=e.sibling;e!==null;)Gf(e,t,n),e=e.sibling}function uc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&i!==27&&(e=e.child,e!==null))for(uc(e,t,n),e=e.sibling;e!==null;)uc(e,t,n),e=e.sibling}var xi=!1,ve=!1,yu=!1,Kp=typeof WeakSet=="function"?WeakSet:Set,ze=null,Qp=!1;function YS(e,t){if(e=e.containerInfo,Kf=Sc,e=g_(e),Jh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===a&&(o=s),f===r&&++h===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:e,selectionRange:n},Sc=!1,ze=t;ze!==null;)if(t=ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ze=e;else for(;ze!==null;){switch(t=ze,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var v=Qa(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(v,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){ae(n,n.return,x)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)$f(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(W(163))}if(e=t.sibling,e!==null){e.return=t.return,ze=e;break}ze=t.return}return v=Qp,Qp=!1,v}function R0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fi(e,n),i&4&&No(5,n);break;case 1:if(fi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ae(n,n.return,o)}else{var a=Qa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ae(n,n.return,o)}}i&64&&E0(n),i&512&&Ia(n,n.return);break;case 3:if(fi(e,n),i&64&&(i=n.updateQueue,i!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{y0(i,e)}catch(o){ae(n,n.return,o)}}break;case 26:fi(e,n),i&512&&Ia(n,n.return);break;case 27:case 5:fi(e,n),t===null&&i&4&&b0(n),i&512&&Ia(n,n.return);break;case 12:fi(e,n);break;case 13:fi(e,n),i&4&&D0(e,n);break;case 22:if(a=n.memoizedState!==null||xi,!a){t=t!==null&&t.memoizedState!==null||ve;var r=xi,s=ve;xi=a,(ve=t)&&!s?Yi(e,n,(n.subtreeFlags&8772)!==0):fi(e,n),xi=r,ve=s}i&512&&(n.memoizedProps.mode==="manual"?Ia(n,n.return):gn(n,n.return));break;default:fi(e,n)}}function C0(e){var t=e.alternate;t!==null&&(e.alternate=null,C0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&qh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,pn=!1;function ui(e,t,n){for(n=n.child;n!==null;)w0(e,t,n),n=n.sibling}function w0(e,t,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 26:ve||gn(n,t),ui(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ve||gn(n,t);var i=Ae,a=pn;for(Ae=n.stateNode,ui(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);qh(n),Ae=i,pn=a;break;case 5:ve||gn(n,t);case 6:a=Ae;var r=pn;if(Ae=null,ui(e,t,n),Ae=a,pn=r,Ae!==null)if(pn)try{e=Ae,i=n.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)}catch(s){ae(n,t,s)}else try{Ae.removeChild(n.stateNode)}catch(s){ae(n,t,s)}break;case 18:Ae!==null&&(pn?(t=Ae,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),Eo(t)):Ou(Ae,n.stateNode));break;case 4:i=Ae,a=pn,Ae=n.stateNode.containerInfo,pn=!0,ui(e,t,n),Ae=i,pn=a;break;case 0:case 11:case 14:case 15:ve||ma(2,n,t),ve||ma(4,n,t),ui(e,t,n);break;case 1:ve||(gn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&T0(n,t,i)),ui(e,t,n);break;case 21:ui(e,t,n);break;case 22:ve||gn(n,t),ve=(i=ve)||n.memoizedState!==null,ui(e,t,n),ve=i;break;default:ui(e,t,n)}}function D0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(n){ae(t,t.return,n)}}function jS(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kp),t;default:throw Error(W(435,e.tag))}}function Eu(e,t){var n=jS(e);t.forEach(function(i){var a=oM.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function En(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:case 5:Ae=o.stateNode,pn=!1;break t;case 3:Ae=o.stateNode.containerInfo,pn=!0;break t;case 4:Ae=o.stateNode.containerInfo,pn=!0;break t}o=o.return}if(Ae===null)throw Error(W(160));w0(r,s,a),Ae=null,pn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)U0(t,e),t=t.sibling}var Vn=null;function U0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(t,e),Tn(e),i&4&&(ma(3,e,e.return),No(3,e),ma(5,e,e.return));break;case 1:En(t,e),Tn(e),i&512&&(ve||n===null||gn(n,n.return)),i&64&&xi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Vn;if(En(t,e),Tn(e),i&512&&(ve||n===null||gn(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[co]||r[Ze]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),qe(r,i,n),r[Ze]=e,Be(r),i=r;break t;case"link":var s=pm("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),qe(r,i,n),a.head.appendChild(r);break;case"meta":if(s=pm("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),qe(r,i,n),a.head.appendChild(r);break;default:throw Error(W(468,i))}r[Ze]=e,Be(r),i=r}e.stateNode=i}else mm(a,e.type,e.stateNode);else e.stateNode=dm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?mm(a,e.type,e.stateNode):dm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Zp(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(i&4&&e.alternate===null){a=e.stateNode,r=e.memoizedProps;try{for(var l=a.firstChild;l;){var c=l.nextSibling,h=l.nodeName;l[co]||h==="HEAD"||h==="BODY"||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=c}for(var d=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);qe(a,d,r),a[Ze]=e,a[ln]=r}catch(v){ae(e,e.return,v)}}case 5:if(En(t,e),Tn(e),i&512&&(ve||n===null||gn(n,n.return)),e.flags&32){a=e.stateNode;try{is(a,"")}catch(v){ae(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Zp(e,a,n!==null?n.memoizedProps:a)),i&1024&&(yu=!0);break;case 6:if(En(t,e),Tn(e),i&4){if(e.stateNode===null)throw Error(W(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){ae(e,e.return,v)}}break;case 3:if(Hl=null,a=Vn,Vn=_c(t.containerInfo),En(t,e),Vn=a,Tn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(t.containerInfo)}catch(v){ae(e,e.return,v)}yu&&(yu=!1,L0(e));break;case 4:i=Vn,Vn=_c(e.stateNode.containerInfo),En(t,e),Tn(e),Vn=i;break;case 12:En(t,e),Tn(e);break;case 13:En(t,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bd=ni()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Eu(e,i)));break;case 22:if(i&512&&(ve||n===null||gn(n,n.return)),l=e.memoizedState!==null,c=n!==null&&n.memoizedState!==null,h=xi,d=ve,xi=h||l,ve=d||c,En(t,e),ve=d,xi=h,Tn(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,i&8192&&(t._visibility=l?t._visibility&-2:t._visibility|1,l&&(t=xi||ve,n===null||c||t||wr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){c=n=t;try{if(a=c.stateNode,l)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=c.stateNode,o=c.memoizedProps.style;var p=o!=null&&o.hasOwnProperty("display")?o.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(v){ae(c,c.return,v)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(v){ae(c,c.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Eu(e,n))));break;case 19:En(t,e),Tn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Eu(e,i)));break;case 21:break;default:En(t,e),Tn(e)}}function Tn(e){var t=e.flags;if(t&2){try{if(e.tag!==27){t:{for(var n=e.return;n!==null;){if(A0(n)){var i=n;break t}n=n.return}throw Error(W(160))}switch(i.tag){case 27:var a=i.stateNode,r=Mu(e);uc(e,r,a);break;case 5:var s=i.stateNode;i.flags&32&&(is(s,""),i.flags&=-33);var o=Mu(e);uc(e,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,c=Mu(e);Gf(e,c,l);break;default:throw Error(W(161))}}}catch(h){ae(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;L0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)R0(e,t.alternate,t),t=t.sibling}function wr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),wr(t);break;case 1:gn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&T0(t,t.return,n),wr(t);break;case 26:case 27:case 5:gn(t,t.return),wr(t);break;case 22:gn(t,t.return),t.memoizedState===null&&wr(t);break;default:wr(t)}e=e.sibling}}function Yi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Yi(a,r,n),No(4,r);break;case 1:if(Yi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ae(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)M0(l[a],o)}catch(c){ae(i,i.return,c)}}n&&s&64&&E0(r),Ia(r,r.return);break;case 26:case 27:case 5:Yi(a,r,n),n&&i===null&&s&4&&b0(r),Ia(r,r.return);break;case 12:Yi(a,r,n);break;case 13:Yi(a,r,n),n&&s&4&&D0(a,r);break;case 22:r.memoizedState===null&&Yi(a,r,n),Ia(r,r.return);break;default:Yi(a,r,n)}t=t.sibling}}function Sd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Do(n))}function Md(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Do(e))}function Hi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)N0(e,t,n,i),t=t.sibling}function N0(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hi(e,t,n,i),a&2048&&No(9,t);break;case 3:Hi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Do(e)));break;case 12:if(a&2048){Hi(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ae(t,t.return,l)}}else Hi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,t.memoizedState!==null?r._visibility&4?Hi(e,t,n,i):io(e,t):r._visibility&4?Hi(e,t,n,i):(r._visibility|=4,Dr(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&Sd(t.alternate,t);break;case 24:Hi(e,t,n,i),a&2048&&Md(t.alternate,t);break;default:Hi(e,t,n,i)}}function Dr(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Dr(r,s,o,l,a),No(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&4?Dr(r,s,o,l,a):io(r,s):(h._visibility|=4,Dr(r,s,o,l,a)),a&&c&2048&&Sd(s.alternate,s);break;case 24:Dr(r,s,o,l,a),a&&c&2048&&Md(s.alternate,s);break;default:Dr(r,s,o,l,a)}t=t.sibling}}function io(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:io(n,i),a&2048&&Sd(i.alternate,i);break;case 24:io(n,i),a&2048&&Md(i.alternate,i);break;default:io(n,i)}t=t.sibling}}var ks=8192;function cr(e){if(e.subtreeFlags&ks)for(e=e.child;e!==null;)O0(e),e=e.sibling}function O0(e){switch(e.tag){case 26:cr(e),e.flags&ks&&e.memoizedState!==null&&zM(Vn,e.memoizedState,e.memoizedProps);break;case 5:cr(e);break;case 3:case 4:var t=Vn;Vn=_c(e.stateNode.containerInfo),cr(e),Vn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ks,ks=16777216,cr(e),ks=t):cr(e));break;default:cr(e)}}function P0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ds(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ze=i,B0(i,e)}P0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)z0(e),e=e.sibling}function z0(e){switch(e.tag){case 0:case 11:case 15:Ds(e),e.flags&2048&&ma(9,e,e.return);break;case 3:Ds(e);break;case 12:Ds(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Bl(e)):Ds(e);break;default:Ds(e)}}function Bl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ze=i,B0(i,e)}P0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),Bl(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,Bl(t));break;default:Bl(t)}e=e.sibling}}function B0(e,t){for(;ze!==null;){var n=ze;switch(n.tag){case 0:case 11:case 15:ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Do(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ze=i;else t:for(n=e;ze!==null;){i=ze;var a=i.sibling,r=i.return;if(C0(i),i===n){ze=null;break t}if(a!==null){a.return=r,ze=a;break t}ze=r}}}function ZS(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,t,n,i){return new ZS(e,t,n,i)}function yd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,t){var n=e.alternate;return n===null?(n=Nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function I0(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Il(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")yd(e)&&(s=1);else if(typeof e=="string")s=OM(e,n,ei.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Lr:return Xa(n.children,a,r,t);case Fg:s=8,a|=24;break;case uf:return e=Nn(12,n,t,a|2),e.elementType=uf,e.lanes=r,e;case ff:return e=Nn(13,n,t,a),e.elementType=ff,e.lanes=r,e;case hf:return e=Nn(19,n,t,a),e.elementType=hf,e.lanes=r,e;case Gg:return F0(n,a,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sx:case Ei:s=10;break t;case Hg:s=9;break t;case kh:s=11;break t;case Xh:s=14;break t;case ji:s=16,i=null;break t}s=29,n=Error(W(130,e===null?"null":typeof e,"")),i=null}return t=Nn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Xa(e,t,n,i){return e=Nn(7,e,i,t),e.lanes=n,e}function F0(e,t,n,i){e=Nn(22,e,i,t),e.elementType=Gg,e.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=a._current;if(r===null)throw Error(W(456));if(!(a._pendingVisibility&2)){var s=da(r,2);s!==null&&(a._pendingVisibility|=2,tn(s,r,2))}},attach:function(){var r=a._current;if(r===null)throw Error(W(456));if(a._pendingVisibility&2){var s=da(r,2);s!==null&&(a._pendingVisibility&=-3,tn(s,r,2))}}};return e.stateNode=a,e}function Tu(e,t,n){return e=Nn(6,e,null,t),e.lanes=n,e}function bu(e,t,n){return t=Nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hi(e){e.flags|=4}function Jp(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!sv(t)){if(t=zn.current,t!==null&&((kt&4194176)===kt?ii!==null:(kt&62914560)!==kt&&!(kt&536870912)||t!==ii))throw Ks=bf,b_;e.flags|=8192}}function $o(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jg():536870912,e.lanes|=t,os|=t)}function Us(e,t){if(!qt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&31457280,i|=a.flags&31457280,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function KS(e,t,n){var i=t.pendingProps;switch(nd(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Di(we),es(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Cs(t)?hi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kn!==null&&(qf(kn),kn=null))),he(t),null;case 26:return n=t.memoizedState,e===null?(hi(t),n!==null?(he(t),Jp(t,n)):(he(t),t.flags&=-16777217)):n?n!==e.memoizedState?(hi(t),he(t),Jp(t,n)):(he(t),t.flags&=-16777217):(e.memoizedProps!==i&&hi(t),he(t),t.flags&=-16777217),null;case 27:Kl(t),n=ia.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&hi(t);else{if(!i){if(t.stateNode===null)throw Error(W(166));return he(t),null}e=ei.current,Cs(t)?Cp(t):(e=iv(a,i,n),t.stateNode=e,hi(t))}return he(t),null;case 5:if(Kl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&hi(t);else{if(!i){if(t.stateNode===null)throw Error(W(166));return he(t),null}if(e=ei.current,Cs(t))Cp(t);else{switch(a=gc(ia.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[Ze]=t,e[ln]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(qe(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&hi(t)}}return he(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&hi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(W(166));if(e=ia.current,Cs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=Je,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||tv(e.nodeValue,n)),e||ja(t)}else e=gc(e).createTextNode(i),e[Ze]=t,t.stateNode=e}return he(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Cs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(W(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(W(317));a[Ze]=t}else wo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),a=!1}else kn!==null&&(qf(kn),kn=null),a=!0;if(!a)return t.flags&256?(Ai(t),t):(Ai(t),null)}if(Ai(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),$o(t,t.updateQueue),he(t),null;case 4:return es(),e===null&&Cd(t.stateNode.containerInfo),he(t),null;case 10:return Di(t.type),he(t),null;case 19:if(Ge(De),a=t.memoizedState,a===null)return he(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Us(a,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=ac(e),r!==null){for(t.flags|=128,Us(a,!1),e=r.updateQueue,t.updateQueue=e,$o(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)I0(n,e),n=n.sibling;return ue(De,De.current&1|2),t.child}e=e.sibling}a.tail!==null&&ni()>fc&&(t.flags|=128,i=!0,Us(a,!1),t.lanes=4194304)}else{if(!i)if(e=ac(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,$o(t,e),Us(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!qt)return he(t),null}else 2*ni()-a.renderingStartTime>fc&&n!==536870912&&(t.flags|=128,i=!0,Us(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ni(),t.sibling=null,e=De.current,ue(De,i?e&1|2:e&1),t):(he(t),null);case 22:case 23:return Ai(t),id(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),n=t.updateQueue,n!==null&&$o(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ge(ka),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Di(we),he(t),null;case 25:return null}throw Error(W(156,t.tag))}function QS(e,t){switch(nd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Di(we),es(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kl(t),null;case 13:if(Ai(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));wo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ge(De),null;case 4:return es(),null;case 10:return Di(t.type),null;case 22:case 23:return Ai(t),id(),e!==null&&Ge(ka),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Di(we),null;case 25:return null;default:return null}}function H0(e,t){switch(nd(t),t.tag){case 3:Di(we),es();break;case 26:case 27:case 5:Kl(t);break;case 4:es();break;case 13:Ai(t);break;case 19:Ge(De);break;case 10:Di(t.type);break;case 22:case 23:Ai(t),id(),e!==null&&Ge(ka);break;case 24:Di(we)}}var JS={getCacheForType:function(e){var t=Ke(we),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},$S=typeof WeakMap=="function"?WeakMap:Map,pe=0,se=null,Ft=null,kt=0,re=0,mn=null,Si=!1,xs=!1,Ed=!1,Oi=0,xe=0,ga=0,Wa=0,Td=0,On=0,os=0,ao=null,Jn=null,Vf=!1,bd=0,fc=1/0,hc=null,oa=null,tl=!1,Oa=null,ro=0,kf=0,Xf=null,so=0,Wf=null;function xn(){if(pe&2&&kt!==0)return kt&-kt;if(Ut.T!==null){var e=rs;return e!==0?e:Rd()}return Jg()}function G0(){On===0&&(On=!(kt&536870912)||qt?Yg():536870912);var e=zn.current;return e!==null&&(e.flags|=32),On}function tn(e,t,n){(e===se&&re===2||e.cancelPendingCommit!==null)&&(ls(e,0),Mi(e,kt,On,!1)),Ro(e,n),(!(pe&2)||e!==se)&&(e===se&&(!(pe&2)&&(Wa|=n),xe===4&&Mi(e,kt,On,!1)),oi(e))}function V0(e,t,n){if(pe&6)throw Error(W(327));var i=!n&&(t&60)===0&&(t&e.expiredLanes)===0||Ao(e,t),a=i?nM(e,t):Au(e,t,!0),r=i;do{if(a===0){xs&&!i&&Mi(e,t,0,!1);break}else if(a===6)Mi(e,t,0,!Si);else{if(n=e.current.alternate,r&&!tM(n)){a=Au(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=ao;var l=o.current.memoizedState.isDehydrated;if(l&&(ls(o,s).flags|=256),s=Au(o,s,!1),s!==2){if(Ed&&!l){o.errorRecoveryDisabledLanes|=r,Wa|=r,a=4;break t}r=Jn,Jn=a,r!==null&&qf(r)}a=s}if(r=!1,a!==2)continue}}if(a===1){ls(e,0),Mi(e,t,0,!0);break}t:{switch(i=e,a){case 0:case 1:throw Error(W(345));case 4:if((t&4194176)===t){Mi(i,t,On,!Si);break t}break;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(W(329))}if(i.finishedWork=n,i.finishedLanes=t,(t&62914560)===t&&(r=bd+300-ni(),10<r)){if(Mi(i,t,On,!Si),Uc(i,0)!==0)break t;i.timeoutHandle=nv($p.bind(null,i,n,Jn,hc,Vf,t,On,Wa,os,Si,2,-0,0),r);break t}$p(i,n,Jn,hc,Vf,t,On,Wa,os,Si,0,-0,0)}}break}while(!0);oi(e)}function qf(e){Jn===null?Jn=e:Jn.push.apply(Jn,e)}function $p(e,t,n,i,a,r,s,o,l,c,h,d,f){var p=t.subtreeFlags;if((p&8192||(p&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:PM},O0(t),t=BM(),t!==null)){e.cancelPendingCommit=t(em.bind(null,e,n,i,a,s,o,l,1,d,f)),Mi(e,r,s,!c);return}em(e,n,i,a,s,o,l,h,d,f)}function tM(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Mn(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mi(e,t,n,i){t&=~Td,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-vn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Zg(e,n,t)}function Gc(){return pe&6?!0:(Oo(0),!1)}function Ad(){if(Ft!==null){if(re===0)var e=Ft.return;else e=Ft,Ri=sr=null,ud(e),Yr=null,mo=0,e=Ft;for(;e!==null;)H0(e.alternate,e),e=e.return;Ft=null}}function ls(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,xM(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ad(),se=e,Ft=n=sa(e.current,null),kt=t,re=0,mn=null,Si=!1,xs=Ao(e,t),Ed=!1,os=On=Td=Wa=ga=xe=0,Jn=ao=null,Vf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-vn(i),r=1<<a;t|=e[a],i&=~r}return Oi=t,Pc(),n}function k0(e,t){Bt=null,Ut.H=ri,t===Zs?(t=Up(),re=3):t===b_?(t=Up(),re=4):re=t===p0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mn=t,Ft===null&&(xe=1,lc(e,Ln(t,e.current)))}function X0(){var e=Ut.H;return Ut.H=ri,e===null?ri:e}function W0(){var e=Ut.A;return Ut.A=JS,e}function Yf(){xe=4,Si||(kt&4194176)!==kt&&zn.current!==null||(xs=!0),!(ga&134217727)&&!(Wa&134217727)||se===null||Mi(se,kt,On,!1)}function Au(e,t,n){var i=pe;pe|=2;var a=X0(),r=W0();(se!==e||kt!==t)&&(hc=null,ls(e,t)),t=!1;var s=xe;t:do try{if(re!==0&&Ft!==null){var o=Ft,l=mn;switch(re){case 8:Ad(),s=6;break t;case 3:case 2:case 6:zn.current===null&&(t=!0);var c=re;if(re=0,mn=null,Vr(e,o,l,c),n&&xs){s=0;break t}break;default:c=re,re=0,mn=null,Vr(e,o,l,c)}}eM(),s=xe;break}catch(h){k0(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ri=sr=null,pe=i,Ut.H=a,Ut.A=r,Ft===null&&(se=null,kt=0,Pc()),s}function eM(){for(;Ft!==null;)q0(Ft)}function nM(e,t){var n=pe;pe|=2;var i=X0(),a=W0();se!==e||kt!==t?(hc=null,fc=ni()+500,ls(e,t)):xs=Ao(e,t);t:do try{if(re!==0&&Ft!==null){t=Ft;var r=mn;e:switch(re){case 1:re=0,mn=null,Vr(e,t,r,1);break;case 2:if(Dp(r)){re=0,mn=null,tm(t);break}t=function(){re===2&&se===e&&(re=7),oi(e)},r.then(t,t);break t;case 3:re=7;break t;case 4:re=5;break t;case 7:Dp(r)?(re=0,mn=null,tm(t)):(re=0,mn=null,Vr(e,t,r,7));break;case 5:var s=null;switch(Ft.tag){case 26:s=Ft.memoizedState;case 5:case 27:var o=Ft;if(!s||sv(s)){re=0,mn=null;var l=o.sibling;if(l!==null)Ft=l;else{var c=o.return;c!==null?(Ft=c,Vc(c)):Ft=null}break e}}re=0,mn=null,Vr(e,t,r,5);break;case 6:re=0,mn=null,Vr(e,t,r,6);break;case 8:Ad(),xe=6;break t;default:throw Error(W(462))}}iM();break}catch(h){k0(e,h)}while(!0);return Ri=sr=null,Ut.H=i,Ut.A=a,pe=n,Ft!==null?0:(se=null,kt=0,Pc(),xe)}function iM(){for(;Ft!==null&&!bx();)q0(Ft)}function q0(e){var t=x0(e.alternate,e,Oi);e.memoizedProps=e.pendingProps,t===null?Vc(e):Ft=t}function tm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Wp(n,t,t.pendingProps,t.type,void 0,kt);break;case 11:t=Wp(n,t,t.pendingProps,t.type.render,t.ref,kt);break;case 5:ud(t);default:H0(n,t),t=Ft=I0(t,Oi),t=x0(n,t,Oi)}e.memoizedProps=e.pendingProps,t===null?Vc(e):Ft=t}function Vr(e,t,n,i){Ri=sr=null,ud(t),Yr=null,mo=0;var a=t.return;try{if(WS(e,a,t,n,kt)){xe=1,lc(e,Ln(n,e.current)),Ft=null;return}}catch(r){if(a!==null)throw Ft=a,r;xe=1,lc(e,Ln(n,e.current)),Ft=null;return}t.flags&32768?(qt||i===1?e=!0:xs||kt&536870912?e=!1:(Si=e=!0,(i===2||i===3||i===6)&&(i=zn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Y0(t,e)):Vc(t)}function Vc(e){var t=e;do{if(t.flags&32768){Y0(t,Si);return}e=t.return;var n=KS(t.alternate,t,Oi);if(n!==null){Ft=n;return}if(t=t.sibling,t!==null){Ft=t;return}Ft=t=e}while(t!==null);xe===0&&(xe=5)}function Y0(e,t){do{var n=QS(e.alternate,e);if(n!==null){n.flags&=32767,Ft=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ft=e;return}Ft=e=n}while(e!==null);xe=6,Ft=null}function em(e,t,n,i,a,r,s,o,l,c){var h=Ut.T,d=le.p;try{le.p=2,Ut.T=null,aM(e,t,n,i,d,a,r,s,o,l,c)}finally{Ut.T=h,le.p=d}}function aM(e,t,n,i,a,r,s,o){do Qr();while(Oa!==null);if(pe&6)throw Error(W(327));var l=e.finishedWork;if(i=e.finishedLanes,l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=l.lanes|l.childLanes;if(c|=$h,zx(e,i,c,r,s,o),e===se&&(Ft=se=null,kt=0),!(l.subtreeFlags&10256)&&!(l.flags&10256)||tl||(tl=!0,kf=c,Xf=n,lM(Ql,function(){return Qr(),null})),n=(l.flags&15990)!==0,l.subtreeFlags&15990||n?(n=Ut.T,Ut.T=null,r=le.p,le.p=2,s=pe,pe|=4,YS(e,l),U0(l,e),CS(Qf,e.containerInfo),Sc=!!Kf,Qf=Kf=null,e.current=l,R0(e,l.alternate,l),Ax(),pe=s,le.p=r,Ut.T=n):e.current=l,tl?(tl=!1,Oa=e,ro=i):j0(e,c),c=e.pendingLanes,c===0&&(oa=null),Ux(l.stateNode),oi(e),t!==null)for(a=e.onRecoverableError,l=0;l<t.length;l++)c=t[l],a(c.value,{componentStack:c.stack});return ro&3&&Qr(),c=e.pendingLanes,i&4194218&&c&42?e===Wf?so++:(so=0,Wf=e):so=0,Oo(0),null}function j0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Do(t)))}function Qr(){if(Oa!==null){var e=Oa,t=kf;kf=0;var n=Qg(ro),i=Ut.T,a=le.p;try{if(le.p=32>n?32:n,Ut.T=null,Oa===null)var r=!1;else{n=Xf,Xf=null;var s=Oa,o=ro;if(Oa=null,ro=0,pe&6)throw Error(W(331));var l=pe;if(pe|=4,z0(s.current),N0(s,s.current,o,n),pe=l,Oo(0,!1),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(bo,s)}catch{}r=!0}return r}finally{le.p=a,Ut.T=i,j0(e,t)}}return!1}function nm(e,t,n){t=Ln(n,t),t=Lf(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Ro(e,2),oi(e))}function ae(e,t,n){if(e.tag===3)nm(e,e,n);else for(;t!==null;){if(t.tag===3){nm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(oa===null||!oa.has(i))){e=Ln(n,e),n=h0(2),i=ra(t,n,2),i!==null&&(d0(n,i,t,e),Ro(i,2),oi(i));break}}t=t.return}}function Ru(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new $S;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Ed=!0,a.add(n),e=rM.bind(null,e,t,n),t.then(e,e))}function rM(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,se===e&&(kt&n)===n&&(xe===4||xe===3&&(kt&62914560)===kt&&300>ni()-bd?!(pe&2)&&ls(e,0):Td|=n,os===kt&&(os=0)),oi(e)}function Z0(e,t){t===0&&(t=jg()),e=da(e,t),e!==null&&(Ro(e,t),oi(e))}function sM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Z0(e,n)}function oM(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(W(314))}i!==null&&i.delete(t),Z0(e,n)}function lM(e,t){return Wh(e,t)}var dc=null,Ur=null,jf=!1,pc=!1,Cu=!1,qa=0;function oi(e){e!==Ur&&e.next===null&&(Ur===null?dc=Ur=e:Ur=Ur.next=e),pc=!0,jf||(jf=!0,uM(cM))}function Oo(e,t){if(!Cu&&pc){Cu=!0;do for(var n=!1,i=dc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-vn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326677?r&201326677|1:r?r|2:0}r!==0&&(n=!0,im(i,r))}else r=kt,r=Uc(i,i===se?r:0),!(r&3)||Ao(i,r)||(n=!0,im(i,r));i=i.next}while(n);Cu=!1}}function cM(){pc=jf=!1;var e=0;qa!==0&&(vM()&&(e=qa),qa=0);for(var t=ni(),n=null,i=dc;i!==null;){var a=i.next,r=K0(i,t);r===0?(i.next=null,n===null?dc=a:n.next=a,a===null&&(Ur=n)):(n=i,(e!==0||r&3)&&(pc=!0)),i=a}Oo(e)}function K0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-vn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=Px(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=se,n=kt,n=Uc(e,e===t?n:0),i=e.callbackNode,n===0||e===t&&re===2||e.cancelPendingCommit!==null)return i!==null&&i!==null&&au(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ao(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&au(i),Qg(n)){case 2:case 8:n=Wg;break;case 32:n=Ql;break;case 268435456:n=qg;break;default:n=Ql}return i=Q0.bind(null,e),n=Wh(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&au(i),e.callbackPriority=2,e.callbackNode=null,2}function Q0(e,t){var n=e.callbackNode;if(Qr()&&e.callbackNode!==n)return null;var i=kt;return i=Uc(e,e===se?i:0),i===0?null:(V0(e,i,t),K0(e,ni()),e.callbackNode!=null&&e.callbackNode===n?Q0.bind(null,e):null)}function im(e,t){if(Qr())return null;V0(e,t,!0)}function uM(e){SM(function(){pe&6?Wh(Xg,e):e()})}function Rd(){return qa===0&&(qa=Yg()),qa}function am(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function rm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fM(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=am((a[ln]||null).action),s=i.submitter;s&&(t=(t=s[ln]||null)?am(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Lc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qa!==0){var l=s?rm(a,s):new FormData(a);Df(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?rm(a,s):new FormData(a),Df(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var wu=0;wu<Ap.length;wu++){var Du=Ap[wu],hM=Du.toLowerCase(),dM=Du[0].toUpperCase()+Du.slice(1);Yn(hM,"on"+dM)}Yn(v_,"onAnimationEnd");Yn(x_,"onAnimationIteration");Yn(S_,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(DS,"onTransitionRun");Yn(US,"onTransitionStart");Yn(LS,"onTransitionCancel");Yn(M_,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function J0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){oc(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){oc(h)}a.currentTarget=null,r=l}}}}function Gt(e,t){var n=t[_f];n===void 0&&(n=t[_f]=new Set);var i=e+"__bubble";n.has(i)||($0(t,e,2,!1),n.add(i))}function Uu(e,t,n){var i=0;t&&(i|=4),$0(n,e,i,t)}var el="_reactListening"+Math.random().toString(36).slice(2);function Cd(e){if(!e[el]){e[el]=!0,$g.forEach(function(n){n!=="selectionchange"&&(pM.has(n)||Uu(n,!1,e),Uu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[el]||(t[el]=!0,Uu("selectionchange",!1,t))}}function $0(e,t,n,i){switch(fv(t)){case 2:var a=HM;break;case 8:a=GM;break;default:a=Ld}n=a.bind(null,t,n,e),a=void 0,!Mf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Lu(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;o!==null;){if(s=Ba(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}o_(function(){var c=r,h=jh(n),d=[];t:{var f=y_.get(e);if(f!==void 0){var p=Lc,v=e;switch(e){case"keypress":if(Nl(n)===0)break t;case"keydown":case"keyup":p=oS;break;case"focusin":v="focus",p=cu;break;case"focusout":v="blur",p=cu;break;case"beforeblur":case"afterblur":p=cu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uS;break;case v_:case x_:case S_:p=Jx;break;case M_:p=hS;break;case"scroll":case"scrollend":p=Yx;break;case"wheel":p=pS;break;case"copy":case"cut":case"paste":p=tS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gp;break;case"toggle":case"beforetoggle":p=gS}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,g;_!==null;){var M=_;if(g=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||g===null||u===null||(M=uo(_,u),M!=null&&x.push(vo(_,M,g))),m)break;_=_.return}0<x.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:x}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Sf&&(v=n.relatedTarget||n.fromElement)&&(Ba(v)||v[_s]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Ba(v):null,v!==null&&(m=gs(v),x=v.tag,v!==m||x!==5&&x!==27&&x!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=pp,M="onMouseLeave",u="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(x=gp,M="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?f:Vs(p),g=v==null?f:Vs(v),f=new x(M,_+"leave",p,n,h),f.target=m,f.relatedTarget=g,M=null,Ba(h)===c&&(x=new x(u,_+"enter",v,n,h),x.target=g,x.relatedTarget=m,M=x),m=M,p&&v)e:{for(x=p,u=v,_=0,g=x;g;g=ur(g))_++;for(g=0,M=u;M;M=ur(M))g++;for(;0<_-g;)x=ur(x),_--;for(;0<g-_;)u=ur(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break e;x=ur(x),u=ur(u)}x=null}else x=null;p!==null&&sm(d,f,p,x,!1),v!==null&&m!==null&&sm(d,m,v,x,!0)}}t:{if(f=c?Vs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=Sp;else if(xp(f))if(d_)w=AS;else{w=TS;var R=ES}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Yh(c.elementType)&&(w=Sp):w=bS;if(w&&(w=w(e,c))){h_(d,w,n,h);break t}R&&R(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&xf(f,"number",f.value)}switch(R=c?Vs(c):window,e){case"focusin":(xp(R)||R.contentEditable==="true")&&(zr=R,yf=c,js=null);break;case"focusout":js=yf=zr=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,bp(d,n,h);break;case"selectionchange":if(wS)break;case"keydown":case"keyup":bp(d,n,h)}var b;if(Qh)t:{switch(e){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else Pr?u_(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(c_&&n.locale!=="ko"&&(Pr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Pr&&(b=l_()):(na=h,Zh="value"in na?na.value:na.textContent,Pr=!0)),R=mc(c,U),0<R.length&&(U=new mp(U,e,null,n,h),d.push({event:U,listeners:R}),b?U.data=b:(b=f_(n),b!==null&&(U.data=b)))),(b=vS?xS(e,n):SS(e,n))&&(U=mc(c,"onBeforeInput"),0<U.length&&(R=new mp("onBeforeInput","beforeinput",null,n,h),d.push({event:R,listeners:U}),R.data=b)),fM(d,e,c,n,h)}J0(d,t)})}function vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=uo(e,n),a!=null&&i.unshift(vo(e,a,r)),a=uo(e,t),a!=null&&i.push(vo(e,a,r))),e=e.return}return i}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sm(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=uo(n,r),c!=null&&s.unshift(vo(n,c,l))):a||(c=uo(n,r),c!=null&&s.push(vo(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var mM=/\r\n?/g,gM=/\u0000|\uFFFD/g;function om(e){return(typeof e=="string"?e:""+e).replace(mM,`
`).replace(gM,"")}function tv(e,t){return t=om(t),om(e)===t}function kc(){}function ne(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||is(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&is(e,""+i);break;case"className":Yo(e,"class",i);break;case"tabIndex":Yo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Yo(e,n,i);break;case"style":s_(e,i,r);break;case"data":if(t!=="object"){Yo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&ne(e,t,"name",a.name,a,null),ne(e,t,"formEncType",a.formEncType,a,null),ne(e,t,"formMethod",a.formMethod,a,null),ne(e,t,"formTarget",a.formTarget,a,null)):(ne(e,t,"encType",a.encType,a,null),ne(e,t,"method",a.method,a,null),ne(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=kc);break;case"onScroll":i!=null&&Gt("scroll",e);break;case"onScrollEnd":i!=null&&Gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(W(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(W(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ul(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Gt("beforetoggle",e),Gt("toggle",e),Dl(e,"popover",i);break;case"xlinkActuate":ci(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ci(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ci(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ci(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ci(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ci(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ci(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ci(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ci(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Dl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Wx.get(n)||n,Dl(e,n,i))}}function Zf(e,t,n,i,a,r){switch(n){case"style":s_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(W(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(W(60));e.innerHTML=n}}break;case"children":typeof i=="string"?is(e,i):(typeof i=="number"||typeof i=="bigint")&&is(e,""+i);break;case"onScroll":i!=null&&Gt("scroll",e);break;case"onScrollEnd":i!=null&&Gt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=kc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!t_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[ln]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Dl(e,n,i)}}}function qe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Gt("error",e),Gt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:ne(e,t,r,s,n,null)}}a&&ne(e,t,"srcSet",n.srcSet,n,null),i&&ne(e,t,"src",n.src,n,null);return;case"input":Gt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(W(137,t));break;default:ne(e,t,i,h,n,null)}}i_(e,r,o,l,c,s,a,!1),Jl(e);return;case"select":Gt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:ne(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Wr(e,!!i,t,!1):n!=null&&Wr(e,!!i,n,!0);return;case"textarea":Gt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(W(91));break;default:ne(e,t,s,o,n,null)}r_(e,i,a,r),Jl(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ne(e,t,l,i,n,null)}return;case"dialog":Gt("cancel",e),Gt("close",e);break;case"iframe":case"object":Gt("load",e);break;case"video":case"audio":for(i=0;i<_o.length;i++)Gt(_o[i],e);break;case"image":Gt("error",e),Gt("load",e);break;case"details":Gt("toggle",e);break;case"embed":case"source":case"link":Gt("error",e),Gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(W(137,t));default:ne(e,t,c,i,n,null)}return;default:if(Yh(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Zf(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ne(e,t,o,i,n,null))}function _M(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ne(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(W(137,t));break;default:p!==d&&ne(e,t,f,p,i,d)}}vf(e,s,o,l,c,h,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ne(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&ne(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?Wr(e,!!n,f,!1):!!i!=!!n&&(t!=null?Wr(e,!!n,t,!0):Wr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ne(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(W(91));break;default:a!==r&&ne(e,t,s,a,i,r)}a_(e,f,p);return;case"option":for(var v in n)if(f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:ne(e,t,v,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:ne(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&ne(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(W(137,t));break;default:ne(e,t,c,f,i,p)}return;default:if(Yh(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Zf(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Zf(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&ne(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||ne(e,t,d,f,i,p)}var Kf=null,Qf=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function lm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ev(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Jf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nu=null;function vM(){var e=window.event;return e&&e.type==="popstate"?e===Nu?!1:(Nu=e,!0):(Nu=null,!1)}var nv=typeof setTimeout=="function"?setTimeout:void 0,xM=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,SM=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(e){return cm.resolve(null).then(e).catch(MM)}:nv;function MM(e){setTimeout(function(){throw e})}function Ou(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){e.removeChild(a),Eo(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);Eo(t)}function $f(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$f(n),qh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yM(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[co])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=qn(e.nextSibling),e===null)break}return null}function EM(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=qn(e.nextSibling),e===null))return null;return e}function qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function um(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function iv(e,t,n){switch(t=gc(n),e){case"html":if(e=t.documentElement,!e)throw Error(W(452));return e;case"head":if(e=t.head,!e)throw Error(W(453));return e;case"body":if(e=t.body,!e)throw Error(W(454));return e;default:throw Error(W(451))}}var Bn=new Map,fm=new Set;function _c(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Bi=le.d;le.d={f:TM,r:bM,D:AM,C:RM,L:CM,m:wM,X:UM,S:DM,M:LM};function TM(){var e=Bi.f(),t=Gc();return e||t}function bM(e){var t=vs(e);t!==null&&t.tag===5&&t.type==="form"?i0(t):Bi.r(e)}var Ss=typeof document>"u"?null:document;function av(e,t,n){var i=Ss;if(i&&typeof t=="string"&&t){var a=Un(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),fm.has(a)||(fm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),qe(t,"link",e),Be(t),i.head.appendChild(t)))}}function AM(e){Bi.D(e),av("dns-prefetch",e,null)}function RM(e,t){Bi.C(e,t),av("preconnect",e,t)}function CM(e,t,n){Bi.L(e,t,n);var i=Ss;if(i&&e&&t){var a='link[rel="preload"][as="'+Un(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Un(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Un(n.imageSizes)+'"]')):a+='[href="'+Un(e)+'"]';var r=a;switch(t){case"style":r=cs(e);break;case"script":r=Ms(e)}Bn.has(r)||(e=ce({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Po(r))||t==="script"&&i.querySelector(zo(r))||(t=i.createElement("link"),qe(t,"link",e),Be(t),i.head.appendChild(t)))}}function wM(e,t){Bi.m(e,t);var n=Ss;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Un(i)+'"][href="'+Un(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ms(e)}if(!Bn.has(r)&&(e=ce({rel:"modulepreload",href:e},t),Bn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(zo(r)))return}i=n.createElement("link"),qe(i,"link",e),Be(i),n.head.appendChild(i)}}}function DM(e,t,n){Bi.S(e,t,n);var i=Ss;if(i&&e){var a=Xr(i).hoistableStyles,r=cs(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Po(r)))o.loading=5;else{e=ce({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bn.get(r))&&wd(e,n);var l=s=i.createElement("link");Be(l),qe(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Fl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function UM(e,t){Bi.X(e,t);var n=Ss;if(n&&e){var i=Xr(n).hoistableScripts,a=Ms(e),r=i.get(a);r||(r=n.querySelector(zo(a)),r||(e=ce({src:e,async:!0},t),(t=Bn.get(a))&&Dd(e,t),r=n.createElement("script"),Be(r),qe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function LM(e,t){Bi.M(e,t);var n=Ss;if(n&&e){var i=Xr(n).hoistableScripts,a=Ms(e),r=i.get(a);r||(r=n.querySelector(zo(a)),r||(e=ce({src:e,async:!0,type:"module"},t),(t=Bn.get(a))&&Dd(e,t),r=n.createElement("script"),Be(r),qe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function hm(e,t,n,i){var a=(a=ia.current)?_c(a):null;if(!a)throw Error(W(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=cs(n.href),n=Xr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=cs(n.href);var r=Xr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Po(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Bn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bn.set(e,n),r||NM(a,e,n,s.state))),t&&i===null)throw Error(W(528,""));return s}if(t&&i!==null)throw Error(W(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ms(n),n=Xr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(W(444,e))}}function cs(e){return'href="'+Un(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function rv(e){return ce({},e,{"data-precedence":e.precedence,precedence:null})}function NM(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),qe(t,"link",n),Be(t),e.head.appendChild(t))}function Ms(e){return'[src="'+Un(e)+'"]'}function zo(e){return"script[async]"+e}function dm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Un(n.href)+'"]');if(i)return t.instance=i,Be(i),i;var a=ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Be(i),qe(i,"style",a),Fl(i,n.precedence,e),t.instance=i;case"stylesheet":a=cs(n.href);var r=e.querySelector(Po(a));if(r)return t.state.loading|=4,t.instance=r,Be(r),r;i=rv(n),(a=Bn.get(a))&&wd(i,a),r=(e.ownerDocument||e).createElement("link"),Be(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),qe(r,"link",i),t.state.loading|=4,Fl(r,n.precedence,e),t.instance=r;case"script":return r=Ms(n.src),(a=e.querySelector(zo(r)))?(t.instance=a,Be(a),a):(i=n,(a=Bn.get(r))&&(i=ce({},n),Dd(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Be(a),qe(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(W(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Fl(i,n.precedence,e));return t.instance}function Fl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hl=null;function pm(e,t,n){if(Hl===null){var i=new Map,a=Hl=new Map;a.set(n,i)}else a=Hl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[co]||r[Ze]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function mm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function OM(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sv(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var xo=null;function PM(){}function zM(e,t,n){if(xo===null)throw Error(W(475));var i=xo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=cs(n.href),r=e.querySelector(Po(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=vc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,Be(r);return}r=e.ownerDocument||e,n=rv(n),(a=Bn.get(a))&&wd(n,a),r=r.createElement("link"),Be(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),qe(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=vc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function BM(){if(xo===null)throw Error(W(475));var e=xo;return e.stylesheets&&e.count===0&&th(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&th(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)th(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function th(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,t.forEach(IM,e),xc=null,vc.call(e))}function IM(e,t){if(!(t.state.loading&4)){var n=xc.get(e);if(n)var i=n.get(null);else{n=new Map,xc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=vc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var So={$$typeof:Ei,Provider:null,Consumer:null,_currentValue:Ga,_currentValue2:Ga,_threadCount:0};function FM(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.hiddenUpdates=ru(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ov(e,t,n,i,a,r,s,o,l,c,h,d){return e=new FM(e,t,n,s,o,l,c,d),t=1,r===!0&&(t|=24),r=Nn(3,null,null,t),e.current=r,r.stateNode=e,t=ad(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},xd(r),e}function lv(e){return e?(e=Fr,e):Fr}function cv(e,t,n,i,a,r){a=lv(a),i.context===null?i.context=a:i.pendingContext=a,i=aa(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=ra(e,i,t),n!==null&&(tn(n,e,t),to(n,e,t))}function gm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ud(e,t){gm(e,t),(e=e.alternate)&&gm(e,t)}function uv(e){if(e.tag===13){var t=da(e,67108864);t!==null&&tn(t,e,67108864),Ud(e,67108864)}}var Sc=!0;function HM(e,t,n,i){var a=Ut.T;Ut.T=null;var r=le.p;try{le.p=2,Ld(e,t,n,i)}finally{le.p=r,Ut.T=a}}function GM(e,t,n,i){var a=Ut.T;Ut.T=null;var r=le.p;try{le.p=8,Ld(e,t,n,i)}finally{le.p=r,Ut.T=a}}function Ld(e,t,n,i){if(Sc){var a=eh(i);if(a===null)Lu(e,t,i,Mc,n),_m(e,i);else if(kM(a,e,t,n,i))i.stopPropagation();else if(_m(e,i),t&4&&-1<VM.indexOf(e)){for(;a!==null;){var r=vs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Da(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-vn(s);o.entanglements[1]|=l,s&=~l}oi(r),!(pe&6)&&(fc=ni()+500,Oo(0))}}break;case 13:o=da(r,2),o!==null&&tn(o,r,2),Gc(),Ud(r,2)}if(r=eh(i),r===null&&Lu(e,t,i,Mc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Lu(e,t,i,null,n)}}function eh(e){return e=jh(e),Nd(e)}var Mc=null;function Nd(e){if(Mc=null,e=Ba(e),e!==null){var t=gs(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Vg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Mc=e,null}function fv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rx()){case Xg:return 2;case Wg:return 8;case Ql:case Cx:return 32;case qg:return 268435456;default:return 32}default:return 32}}var nh=!1,la=null,ca=null,ua=null,Mo=new Map,yo=new Map,$i=[],VM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _m(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(t.pointerId)}}function Ls(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=vs(t),t!==null&&uv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function kM(e,t,n,i,a){switch(t){case"focusin":return la=Ls(la,e,t,n,i,a),!0;case"dragenter":return ca=Ls(ca,e,t,n,i,a),!0;case"mouseover":return ua=Ls(ua,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Mo.set(r,Ls(Mo.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,yo.set(r,Ls(yo.get(r)||null,e,t,n,i,a)),!0}return!1}function hv(e){var t=Ba(e.target);if(t!==null){var n=gs(t);if(n!==null){if(t=n.tag,t===13){if(t=Vg(n),t!==null){e.blockedOn=t,Bx(e.priority,function(){if(n.tag===13){var i=xn(),a=da(n,i);a!==null&&tn(a,n,i),Ud(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Sf=i,n.target.dispatchEvent(i),Sf=null}else return t=vs(n),t!==null&&uv(t),e.blockedOn=n,!1;t.shift()}return!0}function vm(e,t,n){Gl(e)&&n.delete(t)}function XM(){nh=!1,la!==null&&Gl(la)&&(la=null),ca!==null&&Gl(ca)&&(ca=null),ua!==null&&Gl(ua)&&(ua=null),Mo.forEach(vm),yo.forEach(vm)}function nl(e,t){e.blockedOn===t&&(e.blockedOn=null,nh||(nh=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,XM)))}var il=null;function xm(e){il!==e&&(il=e,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,function(){il===e&&(il=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Nd(i||n)===null)continue;break}var r=vs(n);r!==null&&(e.splice(t,3),t-=3,Df(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Eo(e){function t(l){return nl(l,e)}la!==null&&nl(la,e),ca!==null&&nl(ca,e),ua!==null&&nl(ua,e),Mo.forEach(t),yo.forEach(t);for(var n=0;n<$i.length;n++){var i=$i[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)hv(n),n.blockedOn===null&&$i.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[ln]||null;if(typeof r=="function")s||xm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[ln]||null)o=s.formAction;else if(Nd(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),xm(n)}}}function Od(e){this._internalRoot=e}Xc.prototype.render=Od.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));var n=t.current,i=xn();cv(n,i,e,t,null,null)};Xc.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&Qr(),cv(e.current,2,null,e,null,null),Gc(),t[_s]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$i.length&&t!==0&&t<$i[n].priority;n++);$i.splice(n,0,e),n===0&&hv(e)}};var Sm=Bg.version;if(Sm!=="19.0.0")throw Error(W(527,Sm,"19.0.0"));le.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=Tx(t),e=e!==null?kg(e):null,e=e===null?null:e.stateNode,e};var WM={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Ut,findFiberByHostInstance:Ba,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{bo=al.inject(WM),_n=al}catch{}}wc.createRoot=function(e,t){if(!Ig(e))throw Error(W(299));var n=!1,i="",a=c0,r=u0,s=f0,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=ov(e,1,!1,null,null,n,i,a,r,s,o,null),e[_s]=t.current,Cd(e.nodeType===8?e.parentNode:e),new Od(t)};wc.hydrateRoot=function(e,t,n){if(!Ig(e))throw Error(W(299));var i=!1,a="",r=c0,s=u0,o=f0,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=ov(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=lv(null),n=t.current,i=xn(),a=aa(i),a.callback=null,ra(n,a,i),t.current.lanes=i,Ro(t,i),oi(t),e[_s]=t.current,Cd(e),new Xc(t)};wc.version="19.0.0";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(e){console.error(e)}}dv(),Ug.exports=wc;var qM=Ug.exports;const YM=Sg(qM);var ih=new Map,rl=new WeakMap,Mm=0,jM=void 0;function ZM(e){return e?(rl.has(e)||(Mm+=1,rl.set(e,Mm.toString())),rl.get(e)):"0"}function KM(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?ZM(e.root):e[t]}`).toString()}function QM(e){const t=KM(e);let n=ih.get(t);if(!n){const i=new Map;let a;const r=new IntersectionObserver(s=>{s.forEach(o=>{var l;const c=o.isIntersecting&&a.some(h=>o.intersectionRatio>=h);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=i.get(o.target))==null||l.forEach(h=>{h(c,o)})})},e);a=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:r,elements:i},ih.set(t,n)}return n}function JM(e,t,n={},i=jM){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:r,elements:s}=QM(n),o=s.get(e)||[];return s.has(e)||s.set(e,o),o.push(t),r.observe(e),function(){o.splice(o.indexOf(t),1),o.length===0&&(s.delete(e),r.unobserve(e)),s.size===0&&(r.disconnect(),ih.delete(a))}}function pv({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:r,skip:s,initialInView:o,fallbackInView:l,onChange:c}={}){var h;const[d,f]=Ie.useState(null),p=Ie.useRef(c),[v,x]=Ie.useState({inView:!!o,entry:void 0});p.current=c,Ie.useEffect(()=>{if(s||!d)return;let g;return g=JM(d,(M,w)=>{x({inView:M,entry:w}),p.current&&p.current(M,w),w.isIntersecting&&r&&g&&(g(),g=void 0)},{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{g&&g()}},[Array.isArray(e)?e.toString():e,d,a,i,r,s,n,l,t]);const m=(h=v.entry)==null?void 0:h.target,u=Ie.useRef(void 0);!d&&m&&!r&&!s&&u.current!==m&&(u.current=m,x({inView:!!o,entry:void 0}));const _=[f,v.inView,v.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}const sl=({height:e,title:t,darkMode:n,children:i})=>{const{ref:a,inView:r}=pv({threshold:.7,triggerOnce:!0});return lt.jsx("section",{ref:a,style:{minHeight:e},className:`section ${r?"section-visible":"section-hidden"} ${n?"dark-mode":"light-mode"}`,children:lt.jsx("div",{className:"section-content",children:i})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="168",$M=0,ym=1,ty=2,mv=1,ey=2,vi=3,_a=0,sn=1,yi=2,fa=0,Jr=1,Em=2,Tm=3,bm=4,ny=5,Pa=100,iy=101,ay=102,ry=103,sy=104,oy=200,ly=201,cy=202,uy=203,ah=204,rh=205,fy=206,hy=207,dy=208,py=209,my=210,gy=211,_y=212,vy=213,xy=214,Sy=0,My=1,yy=2,yc=3,Ey=4,Ty=5,by=6,Ay=7,gv=0,Ry=1,Cy=2,ha=0,wy=1,Dy=2,Uy=3,Ly=4,Ny=5,Oy=6,Py=7,_v=300,us=301,fs=302,sh=303,oh=304,Wc=306,lh=1e3,Fa=1001,ch=1002,Pn=1003,zy=1004,ol=1005,Xn=1006,Pu=1007,Ha=1008,Pi=1009,vv=1010,xv=1011,To=1012,zd=1013,$a=1014,Ci=1015,Bo=1016,Bd=1017,Id=1018,hs=1020,Sv=35902,Mv=1021,yv=1022,Wn=1023,Ev=1024,Tv=1025,$r=1026,ds=1027,bv=1028,Fd=1029,Av=1030,Hd=1031,Gd=1033,Vl=33776,kl=33777,Xl=33778,Wl=33779,uh=35840,fh=35841,hh=35842,dh=35843,ph=36196,mh=37492,gh=37496,_h=37808,vh=37809,xh=37810,Sh=37811,Mh=37812,yh=37813,Eh=37814,Th=37815,bh=37816,Ah=37817,Rh=37818,Ch=37819,wh=37820,Dh=37821,ql=36492,Uh=36494,Lh=36495,Rv=36283,Nh=36284,Oh=36285,Ph=36286,By=3200,Iy=3201,Fy=0,Hy=1,ta="",Zn="srgb",Ma="srgb-linear",Vd="display-p3",qc="display-p3-linear",Ec="linear",oe="srgb",Tc="rec709",bc="p3",fr=7680,Am=519,Gy=512,Vy=513,ky=514,Cv=515,Xy=516,Wy=517,qy=518,Yy=519,Rm=35044,Cm="300 es",wi=2e3,Ac=2001;class ys{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=Math.PI/180,zh=180/Math.PI;function Io(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[e&255]+Ye[e>>8&255]+Ye[e>>16&255]+Ye[e>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[n&63|128]+Ye[n>>8&255]+"-"+Ye[n>>16&255]+Ye[n>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function rn(e,t,n){return Math.max(t,Math.min(n,e))}function jy(e,t){return(e%t+t)%t}function Bu(e,t,n){return(1-n)*e+n*t}function Ns(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function nn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,n=0){$t.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,n,i,a,r,s,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],v=i[8],x=a[0],m=a[3],u=a[6],_=a[1],g=a[4],M=a[7],w=a[2],R=a[5],b=a[8];return r[0]=s*x+o*_+l*w,r[3]=s*m+o*g+l*R,r[6]=s*u+o*M+l*b,r[1]=c*x+h*_+d*w,r[4]=c*m+h*g+d*R,r[7]=c*u+h*M+d*b,r[2]=f*x+p*_+v*w,r[5]=f*m+p*g+v*R,r[8]=f*u+p*M+v*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,f=o*l-h*r,p=c*r-s*l,v=n*d+i*f+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=d*x,t[1]=(a*c-h*i)*x,t[2]=(o*i-a*s)*x,t[3]=f*x,t[4]=(h*n-a*l)*x,t[5]=(a*r-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(s*n-i*r)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Iu.makeScale(t,n)),this}rotate(t){return this.premultiply(Iu.makeRotation(-t)),this}translate(t,n){return this.premultiply(Iu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Iu=new Ot;function wv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Rc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Zy(){const e=Rc("canvas");return e.style.display="block",e}const wm={};function oo(e){e in wm||(wm[e]=!0,console.warn(e))}function Ky(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Dm=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Um=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Os={[Ma]:{transfer:Ec,primaries:Tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Zn]:{transfer:oe,primaries:Tc,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[qc]:{transfer:Ec,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(Um),fromReference:e=>e.applyMatrix3(Dm)},[Vd]:{transfer:oe,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(Um),fromReference:e=>e.applyMatrix3(Dm).convertLinearToSRGB()}},Qy=new Set([Ma,qc]),Qt={enabled:!0,_workingColorSpace:Ma,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Qy.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Os[t].toReference,a=Os[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Os[e].primaries},getTransfer:function(e){return e===ta?Ec:Os[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(Os[t].luminanceCoefficients)}};function ts(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Fu(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let hr;class Jy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hr===void 0&&(hr=Rc("canvas")),hr.width=t.width,hr.height=t.height;const i=hr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Rc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ts(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $y=0;class Dv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Io(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Hu(a[s].image)):r.push(Hu(a[s]))}else r=Hu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Hu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Jy.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tE=0;class on extends ys{constructor(t=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Fa,a=Fa,r=Xn,s=Ha,o=Wn,l=Pi,c=on.DEFAULT_ANISOTROPY,h=ta){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Io(),this.name="",this.source=new Dv(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_v)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lh:t.x=t.x-Math.floor(t.x);break;case Fa:t.x=t.x<0?0:1;break;case ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lh:t.y=t.y-Math.floor(t.y);break;case Fa:t.y=t.y<0?0:1;break;case ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=_v;on.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,n=0,i=0,a=1){Fe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,w=(u+1)/2,R=(h+f)/4,b=(d+x)/4,U=(v+m)/4;return g>M&&g>w?g<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(g),a=R/i,r=b/i):M>w?M<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(M),i=R/a,r=U/a):w<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(w),i=b/r,a=U/r),this.set(i,a,r,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eE extends ys{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n);const a={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new on(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Dv(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends eE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Uv extends on{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nE extends on{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3];const f=r[s+0],p=r[s+1],v=r[s+2],x=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=v,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==v){let m=1-o;const u=l*f+c*p+h*v+d*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const w=Math.sqrt(g),R=Math.atan2(w,u*_);m=Math.sin(m*R)/w,o=Math.sin(o*R)/w}const M=o*_;if(l=l*m+f*M,c=c*m+p*M,h=h*m+v*M,d=d*m+x*M,m===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=r[s],f=r[s+1],p=r[s+2],v=r[s+3];return t[n]=o*v+h*d+l*p-c*f,t[n+1]=l*v+h*f+c*d-o*p,t[n+2]=c*v+h*p+o*f-l*d,t[n+3]=h*v-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(r/2),f=l(i/2),p=l(a/2),v=l(r/2);switch(s){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,n=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Lm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Lm.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),h=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*c+s*d-o*h,this.y=i+l*h+o*c-r*d,this.z=a+l*d+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gu.copy(this).projectOnVector(t),this.sub(Gu)}reflect(t){return this.sub(Gu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new H,Lm=new Fo;class Ho{constructor(t=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Fn):Fn.fromBufferAttribute(r,s),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ll.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ll.copy(i.boundingBox)),ll.applyMatrix4(t.matrixWorld),this.union(ll)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),cl.subVectors(this.max,Ps),dr.subVectors(t.a,Ps),pr.subVectors(t.b,Ps),mr.subVectors(t.c,Ps),Gi.subVectors(pr,dr),Vi.subVectors(mr,pr),Ta.subVectors(dr,mr);let n=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-Ta.z,Ta.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,Ta.z,0,-Ta.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-Ta.y,Ta.x,0];return!Vu(n,dr,pr,mr,cl)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,dr,pr,mr,cl))?!1:(ul.crossVectors(Gi,Vi),n=[ul.x,ul.y,ul.z],Vu(n,dr,pr,mr,cl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new H,new H,new H,new H,new H,new H,new H,new H],Fn=new H,ll=new Ho,dr=new H,pr=new H,mr=new H,Gi=new H,Vi=new H,Ta=new H,Ps=new H,cl=new H,ul=new H,ba=new H;function Vu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){ba.fromArray(e,r);const o=a.x*Math.abs(ba.x)+a.y*Math.abs(ba.y)+a.z*Math.abs(ba.z),l=t.dot(ba),c=n.dot(ba),h=i.dot(ba);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const iE=new Ho,zs=new H,ku=new H;class kd{constructor(t=new H,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):iE.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);const n=zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(zs,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ku.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(ku)),this.expandByPoint(zs.copy(t.center).sub(ku))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new H,Xu=new H,fl=new H,ki=new H,Wu=new H,hl=new H,qu=new H;class aE{constructor(t=new H,n=new H(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=pi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Xu.copy(t).add(n).multiplyScalar(.5),fl.copy(n).sub(t).normalize(),ki.copy(this.origin).sub(Xu);const r=t.distanceTo(n)*.5,s=-this.direction.dot(fl),o=ki.dot(this.direction),l=-ki.dot(fl),c=ki.lengthSq(),h=Math.abs(1-s*s);let d,f,p,v;if(h>0)if(d=s*l-o,f=s*o-l,v=r*h,d>=0)if(f>=-v)if(f<=v){const x=1/h;d*=x,f*=x,p=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Xu).addScaledVector(fl,f),p}intersectSphere(t,n){pi.subVectors(t.center,this.origin);const i=pi.dot(this.direction),a=pi.dot(pi)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,n,i,a,r){Wu.subVectors(n,t),hl.subVectors(i,t),qu.crossVectors(Wu,hl);let s=this.direction.dot(qu),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ki.subVectors(this.origin,t);const l=o*this.direction.dot(hl.crossVectors(ki,hl));if(l<0)return null;const c=o*this.direction.dot(Wu.cross(ki));if(c<0||l+c>s)return null;const h=-o*ki.dot(qu);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,n,i,a,r,s,o,l,c,h,d,f,p,v,x,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,h,d,f,p,v,x,m)}set(t,n,i,a,r,s,o,l,c,h,d,f,p,v,x,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/gr.setFromMatrixColumn(t,0).length(),r=1/gr.setFromMatrixColumn(t,1).length(),s=1/gr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=s*h,p=s*d,v=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=v+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f+x*o,n[4]=v*o-p,n[8]=s*c,n[1]=s*d,n[5]=s*h,n[9]=-o,n[2]=p*o-v,n[6]=x+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f-x*o,n[4]=-s*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=s*h,n[9]=x-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*h,p=s*d,v=o*h,x=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,v=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=v*d+p,n[1]=d,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=f-x*d}else if(t.order==="XZY"){const f=s*l,p=s*c,v=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=s*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rE,t,sE)}lookAt(t,n,i){const a=this.elements;return hn.subVectors(t,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Xi.crossVectors(i,hn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Xi.crossVectors(i,hn)),Xi.normalize(),dl.crossVectors(hn,Xi),a[0]=Xi.x,a[4]=dl.x,a[8]=hn.x,a[1]=Xi.y,a[5]=dl.y,a[9]=hn.y,a[2]=Xi.z,a[6]=dl.z,a[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],_=i[3],g=i[7],M=i[11],w=i[15],R=a[0],b=a[4],U=a[8],T=a[12],y=a[1],D=a[5],X=a[9],V=a[13],j=a[2],Y=a[6],N=a[10],F=a[14],z=a[3],tt=a[7],at=a[11],pt=a[15];return r[0]=s*R+o*y+l*j+c*z,r[4]=s*b+o*D+l*Y+c*tt,r[8]=s*U+o*X+l*N+c*at,r[12]=s*T+o*V+l*F+c*pt,r[1]=h*R+d*y+f*j+p*z,r[5]=h*b+d*D+f*Y+p*tt,r[9]=h*U+d*X+f*N+p*at,r[13]=h*T+d*V+f*F+p*pt,r[2]=v*R+x*y+m*j+u*z,r[6]=v*b+x*D+m*Y+u*tt,r[10]=v*U+x*X+m*N+u*at,r[14]=v*T+x*V+m*F+u*pt,r[3]=_*R+g*y+M*j+w*z,r[7]=_*b+g*D+M*Y+w*tt,r[11]=_*U+g*X+M*N+w*at,r[15]=_*T+g*V+M*F+w*pt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],v=t[3],x=t[7],m=t[11],u=t[15];return v*(+r*l*d-a*c*d-r*o*f+i*c*f+a*o*p-i*l*p)+x*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*h-r*l*h)+m*(+n*c*d-n*o*p-r*s*d+i*s*p+r*o*h-i*c*h)+u*(-a*o*h-n*l*d+n*o*f+a*s*d-i*s*f+i*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],v=t[12],x=t[13],m=t[14],u=t[15],_=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,g=v*f*c-h*m*c-v*l*p+s*m*p+h*l*u-s*f*u,M=h*x*c-v*d*c+v*o*p-s*x*p-h*o*u+s*d*u,w=v*d*l-h*x*l-v*o*f+s*x*f+h*o*m-s*d*m,R=n*_+i*g+a*M+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=_*b,t[1]=(x*f*r-d*m*r-x*a*p+i*m*p+d*a*u-i*f*u)*b,t[2]=(o*m*r-x*l*r+x*a*c-i*m*c-o*a*u+i*l*u)*b,t[3]=(d*l*r-o*f*r-d*a*c+i*f*c+o*a*p-i*l*p)*b,t[4]=g*b,t[5]=(h*m*r-v*f*r+v*a*p-n*m*p-h*a*u+n*f*u)*b,t[6]=(v*l*r-s*m*r-v*a*c+n*m*c+s*a*u-n*l*u)*b,t[7]=(s*f*r-h*l*r+h*a*c-n*f*c-s*a*p+n*l*p)*b,t[8]=M*b,t[9]=(v*d*r-h*x*r-v*i*p+n*x*p+h*i*u-n*d*u)*b,t[10]=(s*x*r-v*o*r+v*i*c-n*x*c-s*i*u+n*o*u)*b,t[11]=(h*o*r-s*d*r-h*i*c+n*d*c+s*i*p-n*o*p)*b,t[12]=w*b,t[13]=(h*x*a-v*d*a+v*i*f-n*x*f-h*i*m+n*d*m)*b,t[14]=(v*o*a-s*x*a-v*i*l+n*x*l+s*i*m-n*o*m)*b,t[15]=(s*d*a-h*o*a+h*i*l-n*d*l-s*i*f+n*o*f)*b,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,d=o+o,f=r*c,p=r*h,v=r*d,x=s*h,m=s*d,u=o*d,_=l*c,g=l*h,M=l*d,w=i.x,R=i.y,b=i.z;return a[0]=(1-(x+u))*w,a[1]=(p+M)*w,a[2]=(v-g)*w,a[3]=0,a[4]=(p-M)*R,a[5]=(1-(f+u))*R,a[6]=(m+_)*R,a[7]=0,a[8]=(v+g)*b,a[9]=(m-_)*b,a[10]=(1-(f+x))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=gr.set(a[0],a[1],a[2]).length();const s=gr.set(a[4],a[5],a[6]).length(),o=gr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Hn.copy(this);const c=1/r,h=1/s,d=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,n.setFromRotationMatrix(Hn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=wi){const l=this.elements,c=2*r/(n-t),h=2*r/(i-a),d=(n+t)/(n-t),f=(i+a)/(i-a);let p,v;if(o===wi)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Ac)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=wi){const l=this.elements,c=1/(n-t),h=1/(i-a),d=1/(s-r),f=(n+t)*c,p=(i+a)*h;let v,x;if(o===wi)v=(s+r)*d,x=-2*d;else if(o===Ac)v=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const gr=new H,Hn=new Ue,rE=new H(0,0,0),sE=new H(1,1,1),Xi=new H,dl=new H,hn=new H,Nm=new Ue,Om=new Fo;class zi{constructor(t=0,n=0,i=0,a=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Nm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Om.setFromEuler(this),this.setFromQuaternion(Om,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Lv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let oE=0;const Pm=new H,_r=new Fo,mi=new Ue,pl=new H,Bs=new H,lE=new H,cE=new Fo,zm=new H(1,0,0),Bm=new H(0,1,0),Im=new H(0,0,1),Fm={type:"added"},uE={type:"removed"},vr={type:"childadded",child:null},Yu={type:"childremoved",child:null};class Sn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new H,n=new zi,i=new Fo,a=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ot}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return _r.setFromAxisAngle(t,n),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,n){return _r.setFromAxisAngle(t,n),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(zm,t)}rotateY(t){return this.rotateOnAxis(Bm,t)}rotateZ(t){return this.rotateOnAxis(Im,t)}translateOnAxis(t,n){return Pm.copy(t).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(zm,t)}translateY(t){return this.translateOnAxis(Bm,t)}translateZ(t){return this.translateOnAxis(Im,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?pl.copy(t):pl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Bs,pl,this.up):mi.lookAt(pl,Bs,this.up),this.quaternion.setFromRotationMatrix(mi),a&&(mi.extractRotation(a.matrixWorld),_r.setFromRotationMatrix(mi),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fm),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(uE),Yu.child=t,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fm),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,lE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,cE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),f=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Sn.DEFAULT_UP=new H(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new H,gi=new H,ju=new H,_i=new H,xr=new H,Sr=new H,Hm=new H,Zu=new H,Ku=new H,Qu=new H;class $n{constructor(t=new H,n=new H,i=new H){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Gn.subVectors(t,n),a.cross(Gn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Gn.subVectors(a,n),gi.subVectors(i,n),ju.subVectors(t,n);const s=Gn.dot(Gn),o=Gn.dot(gi),l=Gn.dot(ju),c=gi.dot(gi),h=gi.dot(ju),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,v=(s*h-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(s,_i.y),l.addScaledVector(o,_i.z),l)}static isFrontFacing(t,n,i,a){return Gn.subVectors(i,n),gi.subVectors(t,n),Gn.cross(gi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Gn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return $n.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return $n.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;xr.subVectors(a,i),Sr.subVectors(r,i),Zu.subVectors(t,i);const l=xr.dot(Zu),c=Sr.dot(Zu);if(l<=0&&c<=0)return n.copy(i);Ku.subVectors(t,a);const h=xr.dot(Ku),d=Sr.dot(Ku);if(h>=0&&d<=h)return n.copy(a);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(xr,s);Qu.subVectors(t,r);const p=xr.dot(Qu),v=Sr.dot(Qu);if(v>=0&&p<=v)return n.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Sr,o);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Hm.subVectors(r,a),o=(d-h)/(d-h+(p-v)),n.copy(a).addScaledVector(Hm,o);const u=1/(m+x+f);return s=x*u,o=f*u,n.copy(i).addScaledVector(xr,s).addScaledVector(Sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Ju(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=Qt.workingColorSpace){if(t=jy(t,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Ju(s,r,t+1/3),this.g=Ju(s,r,t),this.b=Ju(s,r,t-1/3)}return Qt.toWorkingColorSpace(this,a),this}setStyle(t,n=Zn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Zn){const i=Nv[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=Fu(t.r),this.g=Fu(t.g),this.b=Fu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return Qt.fromWorkingColorSpace(je.copy(this),t),Math.round(rn(je.r*255,0,255))*65536+Math.round(rn(je.g*255,0,255))*256+Math.round(rn(je.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.fromWorkingColorSpace(je.copy(this),n);const i=je.r,a=je.g,r=je.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(je.copy(this),n),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Zn){Qt.fromWorkingColorSpace(je.copy(this),t);const n=je.r,i=je.g,a=je.b;return t!==Zn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+n,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Wi),t.getHSL(ml);const i=Bu(Wi.h,ml.h,n),a=Bu(Wi.s,ml.s,n),r=Bu(Wi.l,ml.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Jt;Jt.NAMES=Nv;let fE=0;class Yc extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Jr,this.side=_a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=rh,this.blendEquation=Pa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=yc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==_a&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==rh&&(i.blendDst=this.blendDst),this.blendEquation!==Pa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xd extends Yc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new H,gl=new $t;class ai{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return oo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(t),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)be.fromBufferAttribute(this,n),be.applyMatrix3(t),this.setXYZ(n,be.x,be.y,be.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)be.fromBufferAttribute(this,n),be.applyMatrix4(t),this.setXYZ(n,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)be.fromBufferAttribute(this,n),be.applyNormalMatrix(t),this.setXYZ(n,be.x,be.y,be.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)be.fromBufferAttribute(this,n),be.transformDirection(t),this.setXYZ(n,be.x,be.y,be.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ns(n,this.array)),n}setX(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ns(n,this.array)),n}setY(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ns(n,this.array)),n}setZ(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ns(n,this.array)),n}setW(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),a=nn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),a=nn(a,this.array),r=nn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rm&&(t.usage=this.usage),t}}class Ov extends ai{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Pv extends ai{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Ya extends ai{constructor(t,n,i){super(new Float32Array(t),n,i)}}let hE=0;const bn=new Ue,$u=new Sn,Mr=new H,dn=new Ho,Is=new Ho,Pe=new H;class or extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wv(t)?Pv:Ov)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,n,i){return bn.makeTranslation(t,n,i),this.applyMatrix4(bn),this}scale(t,n,i){return bn.makeScale(t,n,i),this.applyMatrix4(bn),this}lookAt(t){return $u.lookAt(t),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ya(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kd);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(dn.min,Is.min),dn.expandByPoint(Pe),Pe.addVectors(dn.max,Is.max),dn.expandByPoint(Pe)):(dn.expandByPoint(Is.min),dn.expandByPoint(Is.max))}dn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Pe.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Pe));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pe.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(t,c),Pe.add(Mr)),a=Math.max(a,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new H,l[U]=new H;const c=new H,h=new H,d=new H,f=new $t,p=new $t,v=new $t,x=new H,m=new H;function u(U,T,y){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(f),v.sub(f);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(D),o[U].add(x),o[T].add(x),o[y].add(x),l[U].add(m),l[T].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let U=0,T=_.length;U<T;++U){const y=_[U],D=y.start,X=y.count;for(let V=D,j=D+X;V<j;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const g=new H,M=new H,w=new H,R=new H;function b(U){w.fromBufferAttribute(a,U),R.copy(w);const T=o[U];g.copy(T),g.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(R,T);const D=M.dot(l[U])<0?-1:1;s.setXYZW(U,g.x,g.y,g.z,D)}for(let U=0,T=_.length;U<T;++U){const y=_[U],D=y.start,X=y.count;for(let V=D,j=D+X;V<j;V+=3)b(t.getX(V+0)),b(t.getX(V+1)),b(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new H,r=new H,s=new H,o=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Pe.fromBufferAttribute(t,n),Pe.normalize(),t.setXYZ(n,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new ai(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new or,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new Ue,Aa=new aE,_l=new kd,Vm=new H,yr=new H,Er=new H,Tr=new H,tf=new H,vl=new H,xl=new $t,Sl=new $t,Ml=new $t,km=new H,Xm=new H,Wm=new H,yl=new H,El=new H;class ti extends Sn{constructor(t=new or,n=new Xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){vl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(tf.fromBufferAttribute(d,t),s?vl.addScaledVector(tf,h):vl.addScaledVector(tf.sub(n),h))}n.add(vl)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),Aa.copy(t.ray).recast(t.near),!(_l.containsPoint(Aa.origin)===!1&&(Aa.intersectSphere(_l,Vm)===null||Aa.origin.distanceToSquared(Vm)>(t.far-t.near)**2))&&(Gm.copy(r).invert(),Aa.copy(t.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&Aa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Aa)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,x=f.length;v<x;v++){const m=f[v],u=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,w=g;M<w;M+=3){const R=o.getX(M),b=o.getX(M+1),U=o.getX(M+2);a=Tl(this,u,t,i,c,h,d,R,b,U),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=o.getX(m),g=o.getX(m+1),M=o.getX(m+2);a=Tl(this,s,t,i,c,h,d,_,g,M),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,x=f.length;v<x;v++){const m=f[v],u=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,w=g;M<w;M+=3){const R=M,b=M+1,U=M+2;a=Tl(this,u,t,i,c,h,d,R,b,U),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=m,g=m+1,M=m+2;a=Tl(this,s,t,i,c,h,d,_,g,M),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function dE(e,t,n,i,a,r,s,o){let l;if(t.side===sn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===_a,o),l===null)return null;El.copy(o),El.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(El);return c<n.near||c>n.far?null:{distance:c,point:El.clone(),object:e}}function Tl(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,yr),e.getVertexPosition(l,Er),e.getVertexPosition(c,Tr);const h=dE(e,t,n,i,yr,Er,Tr,yl);if(h){a&&(xl.fromBufferAttribute(a,o),Sl.fromBufferAttribute(a,l),Ml.fromBufferAttribute(a,c),h.uv=$n.getInterpolation(yl,yr,Er,Tr,xl,Sl,Ml,new $t)),r&&(xl.fromBufferAttribute(r,o),Sl.fromBufferAttribute(r,l),Ml.fromBufferAttribute(r,c),h.uv1=$n.getInterpolation(yl,yr,Er,Tr,xl,Sl,Ml,new $t)),s&&(km.fromBufferAttribute(s,o),Xm.fromBufferAttribute(s,l),Wm.fromBufferAttribute(s,c),h.normal=$n.getInterpolation(yl,yr,Er,Tr,km,Xm,Wm,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};$n.getNormal(yr,Er,Tr,d.normal),h.face=d}return h}class Es extends or{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,t,s,r,0),v("z","y","x",1,-1,i,n,-t,s,r,1),v("x","z","y",1,1,t,i,n,a,s,2),v("x","z","y",1,-1,t,i,-n,a,s,3),v("x","y","z",1,-1,t,n,i,a,r,4),v("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Ya(c,3)),this.setAttribute("normal",new Ya(h,3)),this.setAttribute("uv",new Ya(d,2));function v(x,m,u,_,g,M,w,R,b,U,T){const y=M/b,D=w/U,X=M/2,V=w/2,j=R/2,Y=b+1,N=U+1;let F=0,z=0;const tt=new H;for(let at=0;at<N;at++){const pt=at*D-V;for(let zt=0;zt<Y;zt++){const Wt=zt*y-X;tt[x]=Wt*_,tt[m]=pt*g,tt[u]=j,c.push(tt.x,tt.y,tt.z),tt[x]=0,tt[m]=0,tt[u]=R>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(zt/b),d.push(1-at/U),F+=1}}for(let at=0;at<U;at++)for(let pt=0;pt<b;pt++){const zt=f+pt+Y*at,Wt=f+pt+Y*(at+1),k=f+(pt+1)+Y*(at+1),$=f+(pt+1)+Y*at;l.push(zt,Wt,$),l.push(Wt,k,$),z+=6}o.addGroup(p,z,T),p+=z,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function Qe(e){const t={};for(let n=0;n<e.length;n++){const i=ps(e[n]);for(const a in i)t[a]=i[a]}return t}function pE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function zv(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const mE={clone:ps,merge:Qe};var gE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class va extends Yc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=pE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Bv extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=wi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new H,qm=new $t,Ym=new $t;class Dn extends Bv{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=zh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,n){return this.getViewBounds(t,qm,Ym),n.subVectors(Ym,qm)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(zu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const br=-90,Ar=1;class vE extends Sn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Dn(br,Ar,t,n);a.layers=this.layers,this.add(a);const r=new Dn(br,Ar,t,n);r.layers=this.layers,this.add(r);const s=new Dn(br,Ar,t,n);s.layers=this.layers,this.add(s);const o=new Dn(br,Ar,t,n);o.layers=this.layers,this.add(o);const l=new Dn(br,Ar,t,n);l.layers=this.layers,this.add(l);const c=new Dn(br,Ar,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,a),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Iv extends on{constructor(t,n,i,a,r,s,o,l,c,h){t=t!==void 0?t:[],n=n!==void 0?n:us,super(t,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xE extends tr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Iv(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Es(5,5,5),r=new va({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:fa});r.uniforms.tEquirect.value=n;const s=new ti(a,r),o=n.minFilter;return n.minFilter===Ha&&(n.minFilter=Xn),new vE(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n,i,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}const ef=new H,SE=new H,ME=new Ot;class La{constructor(t=new H(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=ef.subVectors(i,n).cross(SE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(ef),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||ME.getNormalMatrix(t),a=this.coplanarPoint(ef).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ra=new kd,bl=new H;class Fv{constructor(t=new La,n=new La,i=new La,a=new La,r=new La,s=new La){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=wi){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],f=a[7],p=a[8],v=a[9],x=a[10],m=a[11],u=a[12],_=a[13],g=a[14],M=a[15];if(i[0].setComponents(l-r,f-c,m-p,M-u).normalize(),i[1].setComponents(l+r,f+c,m+p,M+u).normalize(),i[2].setComponents(l+s,f+h,m+v,M+_).normalize(),i[3].setComponents(l-s,f-h,m-v,M-_).normalize(),i[4].setComponents(l-o,f-d,m-x,M-g).normalize(),n===wi)i[5].setComponents(l+o,f+d,m+x,M+g).normalize();else if(n===Ac)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ra.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ra)}intersectsSprite(t){return Ra.center.set(0,0,0),Ra.radius=.7071067811865476,Ra.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ra)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(bl.x=a.normal.x>0?t.max.x:t.min.x,bl.y=a.normal.y>0?t.max.y:t.min.y,bl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(bl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hv(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function yE(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l._updateRange,f=l.updateRanges;if(e.bindBuffer(c,o),d.count===-1&&f.length===0&&e.bufferSubData(c,0,h),f.length!==0){for(let p=0,v=f.length;p<v;p++){const x=f[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(e.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}class jc extends or{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,f=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<h;u++){const _=u*f-s;for(let g=0;g<c;g++){const M=g*d-r;v.push(M,-_,0),x.push(0,0,1),m.push(g/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const g=_+c*u,M=_+c*(u+1),w=_+1+c*(u+1),R=_+1+c*u;p.push(g,M,R),p.push(M,w,R)}this.setIndex(p),this.setAttribute("position",new Ya(v,3)),this.setAttribute("normal",new Ya(x,3)),this.setAttribute("uv",new Ya(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.width,t.height,t.widthSegments,t.heightSegments)}}var EE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TE=`#ifdef USE_ALPHAHASH
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
#endif`,bE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wE=`#ifdef USE_AOMAP
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
#endif`,DE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zE=`#ifdef USE_IRIDESCENCE
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
#endif`,BE=`#ifdef USE_BUMPMAP
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qE=`#define PI 3.141592653589793
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
} // validated`,YE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jE=`vec3 transformedNormal = objectNormal;
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
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$E="gl_FragColor = linearToOutputTexel( gl_FragColor );",tT=`
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
}`,eT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,nT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iT=`#ifdef USE_ENVMAP
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
#endif`,aT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uT=`#ifdef USE_GRADIENTMAP
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
}`,fT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,mT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,gT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ST=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,MT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,yT=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ET=`#if defined( RE_IndirectDiffuse )
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LT=`#if defined( USE_POINTS_UV )
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
#endif`,NT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WT=`#ifdef USE_NORMALMAP
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
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,JT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c1=`#ifdef USE_SKINNING
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
#endif`,u1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_1=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,w1=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D1=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,U1=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,B1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,I1=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,F1=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,H1=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,G1=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,V1=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,k1=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,W1=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,q1=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Y1=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,j1=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Z1=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,K1=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Q1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,$1=`uniform vec3 color;
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
}`,tb=`uniform float rotation;
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
}`,eb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Nt={alphahash_fragment:EE,alphahash_pars_fragment:TE,alphamap_fragment:bE,alphamap_pars_fragment:AE,alphatest_fragment:RE,alphatest_pars_fragment:CE,aomap_fragment:wE,aomap_pars_fragment:DE,batching_pars_vertex:UE,batching_vertex:LE,begin_vertex:NE,beginnormal_vertex:OE,bsdfs:PE,iridescence_fragment:zE,bumpmap_pars_fragment:BE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:FE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:GE,color_fragment:VE,color_pars_fragment:kE,color_pars_vertex:XE,color_vertex:WE,common:qE,cube_uv_reflection_fragment:YE,defaultnormal_vertex:jE,displacementmap_pars_vertex:ZE,displacementmap_vertex:KE,emissivemap_fragment:QE,emissivemap_pars_fragment:JE,colorspace_fragment:$E,colorspace_pars_fragment:tT,envmap_fragment:eT,envmap_common_pars_fragment:nT,envmap_pars_fragment:iT,envmap_pars_vertex:aT,envmap_physical_pars_fragment:mT,envmap_vertex:rT,fog_vertex:sT,fog_pars_vertex:oT,fog_fragment:lT,fog_pars_fragment:cT,gradientmap_pars_fragment:uT,lightmap_pars_fragment:fT,lights_lambert_fragment:hT,lights_lambert_pars_fragment:dT,lights_pars_begin:pT,lights_toon_fragment:gT,lights_toon_pars_fragment:_T,lights_phong_fragment:vT,lights_phong_pars_fragment:xT,lights_physical_fragment:ST,lights_physical_pars_fragment:MT,lights_fragment_begin:yT,lights_fragment_maps:ET,lights_fragment_end:TT,logdepthbuf_fragment:bT,logdepthbuf_pars_fragment:AT,logdepthbuf_pars_vertex:RT,logdepthbuf_vertex:CT,map_fragment:wT,map_pars_fragment:DT,map_particle_fragment:UT,map_particle_pars_fragment:LT,metalnessmap_fragment:NT,metalnessmap_pars_fragment:OT,morphinstance_vertex:PT,morphcolor_vertex:zT,morphnormal_vertex:BT,morphtarget_pars_vertex:IT,morphtarget_vertex:FT,normal_fragment_begin:HT,normal_fragment_maps:GT,normal_pars_fragment:VT,normal_pars_vertex:kT,normal_vertex:XT,normalmap_pars_fragment:WT,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:YT,clearcoat_pars_fragment:jT,iridescence_pars_fragment:ZT,opaque_fragment:KT,packing:QT,premultiplied_alpha_fragment:JT,project_vertex:$T,dithering_fragment:t1,dithering_pars_fragment:e1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:r1,shadowmap_vertex:s1,shadowmask_pars_fragment:o1,skinbase_vertex:l1,skinning_pars_vertex:c1,skinning_vertex:u1,skinnormal_vertex:f1,specularmap_fragment:h1,specularmap_pars_fragment:d1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:_1,uv_pars_fragment:v1,uv_pars_vertex:x1,uv_vertex:S1,worldpos_vertex:M1,background_vert:y1,background_frag:E1,backgroundCube_vert:T1,backgroundCube_frag:b1,cube_vert:A1,cube_frag:R1,depth_vert:C1,depth_frag:w1,distanceRGBA_vert:D1,distanceRGBA_frag:U1,equirect_vert:L1,equirect_frag:N1,linedashed_vert:O1,linedashed_frag:P1,meshbasic_vert:z1,meshbasic_frag:B1,meshlambert_vert:I1,meshlambert_frag:F1,meshmatcap_vert:H1,meshmatcap_frag:G1,meshnormal_vert:V1,meshnormal_frag:k1,meshphong_vert:X1,meshphong_frag:W1,meshphysical_vert:q1,meshphysical_frag:Y1,meshtoon_vert:j1,meshtoon_frag:Z1,points_vert:K1,points_frag:Q1,shadow_vert:J1,shadow_frag:$1,sprite_vert:tb,sprite_frag:eb},st={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Kn={basic:{uniforms:Qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Qe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Qe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Qe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Qe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Qe([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Qe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Qe([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Qe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Qe([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Qe([st.common,st.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Qe([st.lights,st.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Kn.physical={uniforms:Qe([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Al={r:0,b:0,g:0},Ca=new zi,nb=new Ue;function ib(e,t,n,i,a,r,s){const o=new Jt(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:t).get(g)),g}function x(_){let g=!1;const M=v(_);M===null?u(o,l):M&&M.isColor&&(u(M,1),g=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===Wc)?(h===void 0&&(h=new ti(new Es(1,1,1),new va({name:"BackgroundCubeMaterial",uniforms:ps(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Ca.copy(g.backgroundRotation),Ca.x*=-1,Ca.y*=-1,Ca.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ca.y*=-1,Ca.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nb.makeRotationFromEuler(Ca)),h.material.toneMapped=Qt.getTransfer(M.colorSpace)!==oe,(d!==M||f!==M.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ti(new jc(2,2),new va({name:"BackgroundMaterial",uniforms:ps(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:_a,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==oe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(Al,zv(e)),i.buffers.color.setClear(Al.r,Al.g,Al.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(_,g=1){o.set(_),l=g,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:x,addToRenderList:m}}function ab(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(y,D,X,V,j){let Y=!1;const N=d(V,X,D);r!==N&&(r=N,c(r.object)),Y=p(y,V,X,j),Y&&v(y,V,X,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,M(y,D,X,V),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return e.createVertexArray()}function c(y){return e.bindVertexArray(y)}function h(y){return e.deleteVertexArray(y)}function d(y,D,X){const V=X.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let Y=j[D.id];Y===void 0&&(Y={},j[D.id]=Y);let N=Y[V];return N===void 0&&(N=f(l()),Y[V]=N),N}function f(y){const D=[],X=[],V=[];for(let j=0;j<n;j++)D[j]=0,X[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,D,X,V){const j=r.attributes,Y=D.attributes;let N=0;const F=X.getAttributes();for(const z in F)if(F[z].location>=0){const at=j[z];let pt=Y[z];if(pt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),at===void 0||at.attribute!==pt||pt&&at.data!==pt.data)return!0;N++}return r.attributesNum!==N||r.index!==V}function v(y,D,X,V){const j={},Y=D.attributes;let N=0;const F=X.getAttributes();for(const z in F)if(F[z].location>=0){let at=Y[z];at===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const pt={};pt.attribute=at,at&&at.data&&(pt.data=at.data),j[z]=pt,N++}r.attributes=j,r.attributesNum=N,r.index=V}function x(){const y=r.newAttributes;for(let D=0,X=y.length;D<X;D++)y[D]=0}function m(y){u(y,0)}function u(y,D){const X=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;X[y]=1,V[y]===0&&(e.enableVertexAttribArray(y),V[y]=1),j[y]!==D&&(e.vertexAttribDivisor(y,D),j[y]=D)}function _(){const y=r.newAttributes,D=r.enabledAttributes;for(let X=0,V=D.length;X<V;X++)D[X]!==y[X]&&(e.disableVertexAttribArray(X),D[X]=0)}function g(y,D,X,V,j,Y,N){N===!0?e.vertexAttribIPointer(y,D,X,j,Y):e.vertexAttribPointer(y,D,X,V,j,Y)}function M(y,D,X,V){x();const j=V.attributes,Y=X.getAttributes(),N=D.defaultAttributeValues;for(const F in Y){const z=Y[F];if(z.location>=0){let tt=j[F];if(tt===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){const at=tt.normalized,pt=tt.itemSize,zt=t.get(tt);if(zt===void 0)continue;const Wt=zt.buffer,k=zt.type,$=zt.bytesPerElement,_t=k===e.INT||k===e.UNSIGNED_INT||tt.gpuType===zd;if(tt.isInterleavedBufferAttribute){const ft=tt.data,Tt=ft.stride,wt=tt.offset;if(ft.isInstancedInterleavedBuffer){for(let Ht=0;Ht<z.locationSize;Ht++)u(z.location+Ht,ft.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ht=0;Ht<z.locationSize;Ht++)m(z.location+Ht);e.bindBuffer(e.ARRAY_BUFFER,Wt);for(let Ht=0;Ht<z.locationSize;Ht++)g(z.location+Ht,pt/z.locationSize,k,at,Tt*$,(wt+pt/z.locationSize*Ht)*$,_t)}else{if(tt.isInstancedBufferAttribute){for(let ft=0;ft<z.locationSize;ft++)u(z.location+ft,tt.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ft=0;ft<z.locationSize;ft++)m(z.location+ft);e.bindBuffer(e.ARRAY_BUFFER,Wt);for(let ft=0;ft<z.locationSize;ft++)g(z.location+ft,pt/z.locationSize,k,at,pt*$,pt/z.locationSize*ft*$,_t)}}else if(N!==void 0){const at=N[F];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(z.location,at);break;case 3:e.vertexAttrib3fv(z.location,at);break;case 4:e.vertexAttrib4fv(z.location,at);break;default:e.vertexAttrib1fv(z.location,at)}}}}_()}function w(){U();for(const y in i){const D=i[y];for(const X in D){const V=D[X];for(const j in V)h(V[j].object),delete V[j];delete D[X]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const X in D){const V=D[X];for(const j in V)h(V[j].object),delete V[j];delete D[X]}delete i[y.id]}function b(y){for(const D in i){const X=i[D];if(X[y.id]===void 0)continue;const V=X[y.id];for(const j in V)h(V[j].object),delete V[j];delete X[y.id]}}function U(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function rb(e,t,n){let i;function a(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)s(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x];for(let x=0;x<f.length;x++)n.update(v,i,f[x])}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sb(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==Wn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const b=R===Bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Pi&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ci&&!b)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),x=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),u=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:M,maxSamples:w}}function ob(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new La,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||v===null||v.length===0||r&&!m)r?h(null):c();else{const _=r?0:i,g=_*4;let M=u.clippingState||null;l.value=M,M=h(v,f,g,p);for(let w=0;w!==g;++w)M[w]=n[w];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,M=p;g!==x;++g,M+=4)s.copy(d[g]).applyMatrix4(_,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function lb(e){let t=new WeakMap;function n(s,o){return o===sh?s.mapping=us:o===oh&&(s.mapping=fs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===sh||o===oh)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new xE(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class cb extends Bv{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const kr=4,jm=[.125,.215,.35,.446,.526,.582],za=20,nf=new cb,Zm=new Jt;let af=null,rf=0,sf=0,of=!1;const Na=(1+Math.sqrt(5))/2,Rr=1/Na,Km=[new H(-Na,Rr,0),new H(Na,Rr,0),new H(-Rr,0,Na),new H(Rr,0,Na),new H(0,Na,-Rr),new H(0,Na,Rr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Qm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){af=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,a,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(af,rf,sf),this._renderer.xr.enabled=of,t.scissorTest=!1,Rl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),af=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Bo,format:Wn,colorSpace:Ma,depthBuffer:!1},a=Jm(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ub(r)),this._blurMaterial=fb(r,t,n)}return a}_compileMaterial(t){const n=new ti(this._lodPlanes[0],t);this._renderer.compile(n,nf)}_sceneToCubeUV(t,n,i,a){const o=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Zm),h.toneMapping=ha,h.autoClear=!1;const p=new Xd({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new ti(new Es,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Zm),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):_===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;Rl(a,_*g,u>2?g:0,g,g),h.setRenderTarget(a),x&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===us||t.mapping===fs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new ti(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,nf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Km[(a-r-1)%Km.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ti(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*za-1),x=r/v,m=isFinite(r)?1+Math.floor(h*x):za;m>za&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${za}`);const u=[];let _=0;for(let b=0;b<za;++b){const U=b/x,T=Math.exp(-U*U/2);u.push(T),b===0?_+=T:b<m&&(_+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const M=this._sizeLods[a],w=3*M*(a>g-kr?a-g+kr:0),R=4*(this._cubeSize-M);Rl(n,w,R,3*M,2*M),l.setRenderTarget(n),l.render(d,nf)}}function ub(e){const t=[],n=[],i=[];let a=e;const r=e-kr+1+jm.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-kr?l=jm[s-e+kr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,x=3,m=2,u=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let R=0;R<p;R++){const b=R%3*2/3-1,U=R>2?0:-1,T=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];_.set(T,x*v*R),g.set(f,m*v*R);const y=[R,R,R,R,R,R];M.set(y,u*v*R)}const w=new or;w.setAttribute("position",new ai(_,x)),w.setAttribute("uv",new ai(g,m)),w.setAttribute("faceIndex",new ai(M,u)),t.push(w),a>kr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Jm(e,t,n){const i=new tr(e,t,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function fb(e,t,n){const i=new Float32Array(za),a=new H(0,1,0);return new va({name:"SphericalGaussianBlur",defines:{n:za,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function $m(){return new va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function tg(){return new va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function hb(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sh||l===oh,h=l===us||l===fs;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Qm(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&a(p)?(n===null&&(n=new Qm(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function db(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&oo("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function pb(e,t,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)t.remove(x[m])}f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],e.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)t.update(x[m],e.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,M=_.length;g<M;g+=3){const w=_[g+0],R=_[g+1],b=_[g+2];f.push(w,R,R,b,b,w)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const w=g+0,R=g+1,b=g+2;f.push(w,R,R,b,b,w)}}else return;const m=new(wv(f)?Pv:Ov)(f,1);m.version=x;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function mb(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,v){v!==0&&(e.drawElementsInstanced(i,p,r,f*s,v),n.update(p,i,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function d(f,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,v);let u=0;for(let _=0;_<v;_++)u+=p[_];for(let _=0;_<x.length;_++)n.update(u,i,x[_])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function gb(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function _b(e,t,n){const i=new WeakMap,a=new Fe;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let y=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const b=new Float32Array(w*R*4*d),U=new Uv(b,w,R,d);U.type=Ci,U.needsUpdate=!0;const T=M*4;for(let D=0;D<d;D++){const X=u[D],V=_[D],j=g[D],Y=w*R*4*D;for(let N=0;N<X.count;N++){const F=N*T;v===!0&&(a.fromBufferAttribute(X,N),b[Y+F+0]=a.x,b[Y+F+1]=a.y,b[Y+F+2]=a.z,b[Y+F+3]=0),x===!0&&(a.fromBufferAttribute(V,N),b[Y+F+4]=a.x,b[Y+F+5]=a.y,b[Y+F+6]=a.z,b[Y+F+7]=0),m===!0&&(a.fromBufferAttribute(j,N),b[Y+F+8]=a.x,b[Y+F+9]=a.y,b[Y+F+10]=a.z,b[Y+F+11]=j.itemSize===4?a.w:1)}}f={count:d,texture:U,size:new $t(w,R)},i.set(o,f),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function vb(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}class Gv extends on{constructor(t,n,i,a,r,s,o,l,c,h=$r){if(h!==$r&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$r&&(i=$a),i===void 0&&h===ds&&(i=hs),super(null,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Vv=new on,eg=new Gv(1,1),kv=new Uv,Xv=new nE,Wv=new Iv,ng=[],ig=[],ag=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function Ts(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=ng[a];if(r===void 0&&(r=new Float32Array(a),ng[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Ne(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Oe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Zc(e,t){let n=ig[t];n===void 0&&(n=new Int32Array(t),ig[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function xb(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Sb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ne(n,t))return;e.uniform2fv(this.addr,t),Oe(n,t)}}function Mb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ne(n,t))return;e.uniform3fv(this.addr,t),Oe(n,t)}}function yb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ne(n,t))return;e.uniform4fv(this.addr,t),Oe(n,t)}}function Eb(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ne(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Oe(n,t)}else{if(Ne(n,i))return;sg.set(i),e.uniformMatrix2fv(this.addr,!1,sg),Oe(n,i)}}function Tb(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ne(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Oe(n,t)}else{if(Ne(n,i))return;rg.set(i),e.uniformMatrix3fv(this.addr,!1,rg),Oe(n,i)}}function bb(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ne(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Oe(n,t)}else{if(Ne(n,i))return;ag.set(i),e.uniformMatrix4fv(this.addr,!1,ag),Oe(n,i)}}function Ab(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Rb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ne(n,t))return;e.uniform2iv(this.addr,t),Oe(n,t)}}function Cb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ne(n,t))return;e.uniform3iv(this.addr,t),Oe(n,t)}}function wb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ne(n,t))return;e.uniform4iv(this.addr,t),Oe(n,t)}}function Db(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ub(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ne(n,t))return;e.uniform2uiv(this.addr,t),Oe(n,t)}}function Lb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ne(n,t))return;e.uniform3uiv(this.addr,t),Oe(n,t)}}function Nb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ne(n,t))return;e.uniform4uiv(this.addr,t),Oe(n,t)}}function Ob(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(eg.compareFunction=Cv,r=eg):r=Vv,n.setTexture2D(t||r,a)}function Pb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||Xv,a)}function zb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||Wv,a)}function Bb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||kv,a)}function Ib(e){switch(e){case 5126:return xb;case 35664:return Sb;case 35665:return Mb;case 35666:return yb;case 35674:return Eb;case 35675:return Tb;case 35676:return bb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return wb;case 5125:return Db;case 36294:return Ub;case 36295:return Lb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Bb}}function Fb(e,t){e.uniform1fv(this.addr,t)}function Hb(e,t){const n=Ts(t,this.size,2);e.uniform2fv(this.addr,n)}function Gb(e,t){const n=Ts(t,this.size,3);e.uniform3fv(this.addr,n)}function Vb(e,t){const n=Ts(t,this.size,4);e.uniform4fv(this.addr,n)}function kb(e,t){const n=Ts(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xb(e,t){const n=Ts(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Wb(e,t){const n=Ts(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function qb(e,t){e.uniform1iv(this.addr,t)}function Yb(e,t){e.uniform2iv(this.addr,t)}function jb(e,t){e.uniform3iv(this.addr,t)}function Zb(e,t){e.uniform4iv(this.addr,t)}function Kb(e,t){e.uniform1uiv(this.addr,t)}function Qb(e,t){e.uniform2uiv(this.addr,t)}function Jb(e,t){e.uniform3uiv(this.addr,t)}function $b(e,t){e.uniform4uiv(this.addr,t)}function tA(e,t,n){const i=this.cache,a=t.length,r=Zc(n,a);Ne(i,r)||(e.uniform1iv(this.addr,r),Oe(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||Vv,r[s])}function eA(e,t,n){const i=this.cache,a=t.length,r=Zc(n,a);Ne(i,r)||(e.uniform1iv(this.addr,r),Oe(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||Xv,r[s])}function nA(e,t,n){const i=this.cache,a=t.length,r=Zc(n,a);Ne(i,r)||(e.uniform1iv(this.addr,r),Oe(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||Wv,r[s])}function iA(e,t,n){const i=this.cache,a=t.length,r=Zc(n,a);Ne(i,r)||(e.uniform1iv(this.addr,r),Oe(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||kv,r[s])}function aA(e){switch(e){case 5126:return Fb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return kb;case 35675:return Xb;case 35676:return Wb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return jb;case 35669:case 35673:return Zb;case 5125:return Kb;case 36294:return Qb;case 36295:return Jb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class rA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ib(n.type)}}class sA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aA(n.type)}}class oA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const lf=/(\w+)(\])?(\[|\.)?/g;function og(e,t){e.seq.push(t),e.map[t.id]=t}function lA(e,t,n){const i=e.name,a=i.length;for(lf.lastIndex=0;;){const r=lf.exec(i),s=lf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){og(n,c===void 0?new rA(o,e,t):new sA(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new oA(o),og(n,d)),n=d}}}class Yl{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);lA(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function lg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const cA=37297;let uA=0;function fA(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function hA(e){const t=Qt.getPrimaries(Qt.workingColorSpace),n=Qt.getPrimaries(e);let i;switch(t===n?i="":t===bc&&n===Tc?i="LinearDisplayP3ToLinearSRGB":t===Tc&&n===bc&&(i="LinearSRGBToLinearDisplayP3"),e){case Ma:case qc:return[i,"LinearTransferOETF"];case Zn:case Vd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function cg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+fA(e.getShaderSource(t),s)}else return a}function dA(e,t){const n=hA(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pA(e,t){let n;switch(t){case wy:n="Linear";break;case Dy:n="Reinhard";break;case Uy:n="Cineon";break;case Ly:n="ACESFilmic";break;case Oy:n="AgX";break;case Py:n="Neutral";break;case Ny:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new H;function mA(){Qt.getLuminanceCoefficients(Cl);const e=Cl.x.toFixed(4),t=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gA(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function _A(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function vA(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Xs(e){return e!==""}function ug(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(e){return e.replace(xA,MA)}const SA=new Map;function MA(e,t){let n=Nt[t];if(n===void 0){const i=SA.get(t);if(i!==void 0)n=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bh(n)}const yA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(e){return e.replace(yA,EA)}function EA(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function dg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TA(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===mv?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===ey?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function bA(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case Wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AA(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function RA(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case gv:t="ENVMAP_BLENDING_MULTIPLY";break;case Ry:t="ENVMAP_BLENDING_MIX";break;case Cy:t="ENVMAP_BLENDING_ADD";break}return t}function CA(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wA(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=TA(n),c=bA(n),h=AA(n),d=RA(n),f=CA(n),p=gA(n),v=_A(r),x=a.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Xs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Xs).join(`
`),u.length>0&&(u+=`
`)):(m=[dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),u=[dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ha?"#define TONE_MAPPING":"",n.toneMapping!==ha?Nt.tonemapping_pars_fragment:"",n.toneMapping!==ha?pA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,dA("linearToOutputTexel",n.outputColorSpace),mA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),s=Bh(s),s=ug(s,n),s=fg(s,n),o=Bh(o),o=ug(o,n),o=fg(o,n),s=hg(s),o=hg(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+m+s,M=_+u+o,w=lg(a,a.VERTEX_SHADER,g),R=lg(a,a.FRAGMENT_SHADER,M);a.attachShader(x,w),a.attachShader(x,R),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function b(D){if(e.debug.checkShaderErrors){const X=a.getProgramInfoLog(x).trim(),V=a.getShaderInfoLog(w).trim(),j=a.getShaderInfoLog(R).trim();let Y=!0,N=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,w,R);else{const F=cg(a,w,"vertex"),z=cg(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+F+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||j==="")&&(N=!1);N&&(D.diagnostics={runnable:Y,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:u}})}a.deleteShader(w),a.deleteShader(R),U=new Yl(a,x),T=vA(a,x)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(x,cA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uA++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=R,this}let DA=0;class UA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new LA(t),n.set(t,i)),i}}class LA{constructor(t){this.id=DA++,this.code=t,this.usedTimes=0}}function NA(e,t,n,i,a,r,s){const o=new Lv,l=new UA,c=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,y,D,X,V){const j=X.fog,Y=V.geometry,N=T.isMeshStandardMaterial?X.environment:null,F=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),z=F&&F.mapping===Wc?F.image.height:null,tt=v[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const at=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pt=at!==void 0?at.length:0;let zt=0;Y.morphAttributes.position!==void 0&&(zt=1),Y.morphAttributes.normal!==void 0&&(zt=2),Y.morphAttributes.color!==void 0&&(zt=3);let Wt,k,$,_t;if(tt){const Yt=Kn[tt];Wt=Yt.vertexShader,k=Yt.fragmentShader}else Wt=T.vertexShader,k=T.fragmentShader,l.update(T),$=l.getVertexShaderID(T),_t=l.getFragmentShaderID(T);const ft=e.getRenderTarget(),Tt=V.isInstancedMesh===!0,wt=V.isBatchedMesh===!0,Ht=!!T.map,me=!!T.matcap,C=!!F,Me=!!T.aoMap,te=!!T.lightMap,ee=!!T.bumpMap,St=!!T.normalMap,ye=!!T.displacementMap,Rt=!!T.emissiveMap,Dt=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,G=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,Q=T.sheen>0,Mt=T.transmission>0,ot=S&&!!T.anisotropyMap,ht=G&&!!T.clearcoatMap,Lt=G&&!!T.clearcoatNormalMap,et=G&&!!T.clearcoatRoughnessMap,ut=J&&!!T.iridescenceMap,Vt=J&&!!T.iridescenceThicknessMap,At=Q&&!!T.sheenColorMap,dt=Q&&!!T.sheenRoughnessMap,Ct=!!T.specularMap,It=!!T.specularColorMap,fe=!!T.specularIntensityMap,L=Mt&&!!T.transmissionMap,nt=Mt&&!!T.thicknessMap,q=!!T.gradientMap,Z=!!T.alphaMap,rt=T.alphaTest>0,yt=!!T.alphaHash,Xt=!!T.extensions;let Ee=ha;T.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ee=e.toneMapping);const Ve={shaderID:tt,shaderType:T.type,shaderName:T.name,vertexShader:Wt,fragmentShader:k,defines:T.defines,customVertexShaderID:$,customFragmentShaderID:_t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:wt,batchingColor:wt&&V._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&V.instanceColor!==null,instancingMorph:Tt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?e.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ma,alphaToCoverage:!!T.alphaToCoverage,map:Ht,matcap:me,envMap:C,envMapMode:C&&F.mapping,envMapCubeUVHeight:z,aoMap:Me,lightMap:te,bumpMap:ee,normalMap:St,displacementMap:f&&ye,emissiveMap:Rt,normalMapObjectSpace:St&&T.normalMapType===Hy,normalMapTangentSpace:St&&T.normalMapType===Fy,metalnessMap:Dt,roughnessMap:A,anisotropy:S,anisotropyMap:ot,clearcoat:G,clearcoatMap:ht,clearcoatNormalMap:Lt,clearcoatRoughnessMap:et,dispersion:K,iridescence:J,iridescenceMap:ut,iridescenceThicknessMap:Vt,sheen:Q,sheenColorMap:At,sheenRoughnessMap:dt,specularMap:Ct,specularColorMap:It,specularIntensityMap:fe,transmission:Mt,transmissionMap:L,thicknessMap:nt,gradientMap:q,opaque:T.transparent===!1&&T.blending===Jr&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:rt,alphaHash:yt,combine:T.combine,mapUv:Ht&&x(T.map.channel),aoMapUv:Me&&x(T.aoMap.channel),lightMapUv:te&&x(T.lightMap.channel),bumpMapUv:ee&&x(T.bumpMap.channel),normalMapUv:St&&x(T.normalMap.channel),displacementMapUv:ye&&x(T.displacementMap.channel),emissiveMapUv:Rt&&x(T.emissiveMap.channel),metalnessMapUv:Dt&&x(T.metalnessMap.channel),roughnessMapUv:A&&x(T.roughnessMap.channel),anisotropyMapUv:ot&&x(T.anisotropyMap.channel),clearcoatMapUv:ht&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:At&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(T.sheenRoughnessMap.channel),specularMapUv:Ct&&x(T.specularMap.channel),specularColorMapUv:It&&x(T.specularColorMap.channel),specularIntensityMapUv:fe&&x(T.specularIntensityMap.channel),transmissionMapUv:L&&x(T.transmissionMap.channel),thicknessMapUv:nt&&x(T.thicknessMap.channel),alphaMapUv:Z&&x(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(St||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(Ht||Z),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ht&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yi,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&T.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function u(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)y.push(D),y.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(_(y,T),g(y,T),y.push(e.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function _(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function g(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),T.push(o.mask)}function M(T){const y=v[T.type];let D;if(y){const X=Kn[y];D=mE.clone(X.uniforms)}else D=T.uniforms;return D}function w(T,y){let D;for(let X=0,V=h.length;X<V;X++){const j=h[X];if(j.cacheKey===y){D=j,++D.usedTimes;break}}return D===void 0&&(D=new wA(e,y,T,r),h.push(D)),D}function R(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:w,releaseProgram:R,releaseShaderCache:b,programs:h,dispose:U}}function OA(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function PA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function pg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function mg(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(d,f,p,v,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,v,x,m){const u=s(d,f,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,f,p,v,x,m){const u=s(d,f,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||PA),i.length>1&&i.sort(f||pg),a.length>1&&a.sort(f||pg)}function h(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:h,sort:c}}function zA(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new mg,e.set(i,[s])):a>=r.length?(s=new mg,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function BA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new H,color:new Jt};break;case"SpotLight":n={position:new H,direction:new H,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=n,n}}}function IA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let FA=0;function HA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function GA(e){const t=new BA,n=IA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const a=new H,r=new Ue,s=new Ue;function o(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,x=0,m=0,u=0,_=0,g=0,M=0,w=0,R=0,b=0;c.sort(HA);for(let T=0,y=c.length;T<y;T++){const D=c[T],X=D.color,V=D.intensity,j=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=X.r*V,d+=X.g*V,f+=X.b*V;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],V);b++}else if(D.isDirectionalLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,z=n.get(D);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=N,p++}else if(D.isSpotLight){const N=t.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(X).multiplyScalar(V),N.distance=j,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[x]=N;const F=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,F.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[x]=F.matrix,D.castShadow){const z=n.get(D);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=Y,M++}x++}else if(D.isRectAreaLight){const N=t.get(D);N.color.copy(X).multiplyScalar(V),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=N,m++}else if(D.isPointLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const F=D.shadow,z=n.get(D);z.shadowIntensity=F.intensity,z.shadowBias=F.bias,z.shadowNormalBias=F.normalBias,z.shadowRadius=F.radius,z.shadowMapSize=F.mapSize,z.shadowCameraNear=F.camera.near,z.shadowCameraFar=F.camera.far,i.pointShadow[v]=z,i.pointShadowMap[v]=Y,i.pointShadowMatrix[v]=D.shadow.matrix,g++}i.point[v]=N,v++}else if(D.isHemisphereLight){const N=t.get(D);N.skyColor.copy(D.color).multiplyScalar(V),N.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[u]=N,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==v||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==_||U.numPointShadows!==g||U.numSpotShadows!==M||U.numSpotMaps!==w||U.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,U.directionalLength=p,U.pointLength=v,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=_,U.numPointShadows=g,U.numSpotShadows=M,U.numSpotMaps=w,U.numLightProbes=b,i.version=FA++)}function l(c,h){let d=0,f=0,p=0,v=0,x=0;const m=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),d++}else if(g.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),s.identity(),r.copy(g.matrixWorld),r.premultiply(m),s.extractRotation(r),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(g.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function gg(e){const t=new GA(e),n=[],i=[];function a(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function VA(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new gg(e),t.set(a,[o])):r>=s.length?(o=new gg(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class kA extends Yc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=By,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XA extends Yc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
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
}`;function YA(e,t,n){let i=new Fv;const a=new $t,r=new $t,s=new Fe,o=new kA({depthPacking:Iy}),l=new XA,c={},h=n.maxTextureSize,d={[_a]:sn,[sn]:_a,[yi]:yi},f=new va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:WA,fragmentShader:qA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new or;v.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ti(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mv;let u=this.type;this.render=function(R,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=e.getRenderTarget(),y=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),X=e.state;X.setBlending(fa),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=u!==vi&&this.type===vi,j=u===vi&&this.type!==vi;for(let Y=0,N=R.length;Y<N;Y++){const F=R[Y],z=F.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const tt=z.getFrameExtents();if(a.multiply(tt),r.copy(z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/tt.x),a.x=r.x*tt.x,z.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/tt.y),a.y=r.y*tt.y,z.mapSize.y=r.y)),z.map===null||V===!0||j===!0){const pt=this.type!==vi?{minFilter:Pn,magFilter:Pn}:{};z.map!==null&&z.map.dispose(),z.map=new tr(a.x,a.y,pt),z.map.texture.name=F.name+".shadowMap",z.camera.updateProjectionMatrix()}e.setRenderTarget(z.map),e.clear();const at=z.getViewportCount();for(let pt=0;pt<at;pt++){const zt=z.getViewport(pt);s.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),X.viewport(s),z.updateMatrices(F,pt),i=z.getFrustum(),M(b,U,z.camera,F,this.type)}z.isPointLightShadow!==!0&&this.type===vi&&_(z,U),z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,y,D)};function _(R,b){const U=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new tr(a.x,a.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(b,null,U,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(b,null,U,p,x,null)}function g(R,b,U,T){let y=null;const D=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)y=D;else if(y=U.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const X=y.uuid,V=b.uuid;let j=c[X];j===void 0&&(j={},c[X]=j);let Y=j[V];Y===void 0&&(Y=y.clone(),j[V]=Y,b.addEventListener("dispose",w)),y=Y}if(y.visible=b.visible,y.wireframe=b.wireframe,T===vi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=e.properties.get(y);X.light=U}return y}function M(R,b,U,T,y){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===vi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const V=t.update(R),j=R.material;if(Array.isArray(j)){const Y=V.groups;for(let N=0,F=Y.length;N<F;N++){const z=Y[N],tt=j[z.materialIndex];if(tt&&tt.visible){const at=g(R,tt,T,y);R.onBeforeShadow(e,R,b,U,V,at,z),e.renderBufferDirect(U,null,V,at,R,z),R.onAfterShadow(e,R,b,U,V,at,z)}}}else if(j.visible){const Y=g(R,j,T,y);R.onBeforeShadow(e,R,b,U,V,Y,null),e.renderBufferDirect(U,null,V,Y,R,null),R.onAfterShadow(e,R,b,U,V,Y,null)}}const X=R.children;for(let V=0,j=X.length;V<j;V++)M(X[V],b,U,T,y)}function w(R){R.target.removeEventListener("dispose",w);for(const U in c){const T=c[U],y=R.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function jA(e){function t(){let L=!1;const nt=new Fe;let q=null;const Z=new Fe(0,0,0,0);return{setMask:function(rt){q!==rt&&!L&&(e.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){L=rt},setClear:function(rt,yt,Xt,Ee,Ve){Ve===!0&&(rt*=Ee,yt*=Ee,Xt*=Ee),nt.set(rt,yt,Xt,Ee),Z.equals(nt)===!1&&(e.clearColor(rt,yt,Xt,Ee),Z.copy(nt))},reset:function(){L=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,nt=null,q=null,Z=null;return{setTest:function(rt){rt?_t(e.DEPTH_TEST):ft(e.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!L&&(e.depthMask(rt),nt=rt)},setFunc:function(rt){if(q!==rt){switch(rt){case Sy:e.depthFunc(e.NEVER);break;case My:e.depthFunc(e.ALWAYS);break;case yy:e.depthFunc(e.LESS);break;case yc:e.depthFunc(e.LEQUAL);break;case Ey:e.depthFunc(e.EQUAL);break;case Ty:e.depthFunc(e.GEQUAL);break;case by:e.depthFunc(e.GREATER);break;case Ay:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}q=rt}},setLocked:function(rt){L=rt},setClear:function(rt){Z!==rt&&(e.clearDepth(rt),Z=rt)},reset:function(){L=!1,nt=null,q=null,Z=null}}}function i(){let L=!1,nt=null,q=null,Z=null,rt=null,yt=null,Xt=null,Ee=null,Ve=null;return{setTest:function(Yt){L||(Yt?_t(e.STENCIL_TEST):ft(e.STENCIL_TEST))},setMask:function(Yt){nt!==Yt&&!L&&(e.stencilMask(Yt),nt=Yt)},setFunc:function(Yt,li,jn){(q!==Yt||Z!==li||rt!==jn)&&(e.stencilFunc(Yt,li,jn),q=Yt,Z=li,rt=jn)},setOp:function(Yt,li,jn){(yt!==Yt||Xt!==li||Ee!==jn)&&(e.stencilOp(Yt,li,jn),yt=Yt,Xt=li,Ee=jn)},setLocked:function(Yt){L=Yt},setClear:function(Yt){Ve!==Yt&&(e.clearStencil(Yt),Ve=Yt)},reset:function(){L=!1,nt=null,q=null,Z=null,rt=null,yt=null,Xt=null,Ee=null,Ve=null}}}const a=new t,r=new n,s=new i,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,M=null,w=null,R=new Jt(0,0,0),b=0,U=!1,T=null,y=null,D=null,X=null,V=null;const j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,N=0;const F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=N>=1):F.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=N>=2);let z=null,tt={};const at=e.getParameter(e.SCISSOR_BOX),pt=e.getParameter(e.VIEWPORT),zt=new Fe().fromArray(at),Wt=new Fe().fromArray(pt);function k(L,nt,q,Z){const rt=new Uint8Array(4),yt=e.createTexture();e.bindTexture(L,yt),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Xt=0;Xt<q;Xt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,Z,0,e.RGBA,e.UNSIGNED_BYTE,rt):e.texImage2D(nt+Xt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,rt);return yt}const $={};$[e.TEXTURE_2D]=k(e.TEXTURE_2D,e.TEXTURE_2D,1),$[e.TEXTURE_CUBE_MAP]=k(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[e.TEXTURE_2D_ARRAY]=k(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),$[e.TEXTURE_3D]=k(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),s.setClear(0),_t(e.DEPTH_TEST),r.setFunc(yc),ee(!1),St(ym),_t(e.CULL_FACE),Me(fa);function _t(L){c[L]!==!0&&(e.enable(L),c[L]=!0)}function ft(L){c[L]!==!1&&(e.disable(L),c[L]=!1)}function Tt(L,nt){return h[L]!==nt?(e.bindFramebuffer(L,nt),h[L]=nt,L===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=nt),L===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function wt(L,nt){let q=f,Z=!1;if(L){q=d.get(nt),q===void 0&&(q=[],d.set(nt,q));const rt=L.textures;if(q.length!==rt.length||q[0]!==e.COLOR_ATTACHMENT0){for(let yt=0,Xt=rt.length;yt<Xt;yt++)q[yt]=e.COLOR_ATTACHMENT0+yt;q.length=rt.length,Z=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,Z=!0);Z&&e.drawBuffers(q)}function Ht(L){return p!==L?(e.useProgram(L),p=L,!0):!1}const me={[Pa]:e.FUNC_ADD,[iy]:e.FUNC_SUBTRACT,[ay]:e.FUNC_REVERSE_SUBTRACT};me[ry]=e.MIN,me[sy]=e.MAX;const C={[oy]:e.ZERO,[ly]:e.ONE,[cy]:e.SRC_COLOR,[ah]:e.SRC_ALPHA,[my]:e.SRC_ALPHA_SATURATE,[dy]:e.DST_COLOR,[fy]:e.DST_ALPHA,[uy]:e.ONE_MINUS_SRC_COLOR,[rh]:e.ONE_MINUS_SRC_ALPHA,[py]:e.ONE_MINUS_DST_COLOR,[hy]:e.ONE_MINUS_DST_ALPHA,[gy]:e.CONSTANT_COLOR,[_y]:e.ONE_MINUS_CONSTANT_COLOR,[vy]:e.CONSTANT_ALPHA,[xy]:e.ONE_MINUS_CONSTANT_ALPHA};function Me(L,nt,q,Z,rt,yt,Xt,Ee,Ve,Yt){if(L===fa){v===!0&&(ft(e.BLEND),v=!1);return}if(v===!1&&(_t(e.BLEND),v=!0),L!==ny){if(L!==x||Yt!==U){if((m!==Pa||g!==Pa)&&(e.blendEquation(e.FUNC_ADD),m=Pa,g=Pa),Yt)switch(L){case Jr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Em:e.blendFunc(e.ONE,e.ONE);break;case Tm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case bm:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Em:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Tm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case bm:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}u=null,_=null,M=null,w=null,R.set(0,0,0),b=0,x=L,U=Yt}return}rt=rt||nt,yt=yt||q,Xt=Xt||Z,(nt!==m||rt!==g)&&(e.blendEquationSeparate(me[nt],me[rt]),m=nt,g=rt),(q!==u||Z!==_||yt!==M||Xt!==w)&&(e.blendFuncSeparate(C[q],C[Z],C[yt],C[Xt]),u=q,_=Z,M=yt,w=Xt),(Ee.equals(R)===!1||Ve!==b)&&(e.blendColor(Ee.r,Ee.g,Ee.b,Ve),R.copy(Ee),b=Ve),x=L,U=!1}function te(L,nt){L.side===yi?ft(e.CULL_FACE):_t(e.CULL_FACE);let q=L.side===sn;nt&&(q=!q),ee(q),L.blending===Jr&&L.transparent===!1?Me(fa):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);const Z=L.stencilWrite;s.setTest(Z),Z&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(e.SAMPLE_ALPHA_TO_COVERAGE):ft(e.SAMPLE_ALPHA_TO_COVERAGE)}function ee(L){T!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),T=L)}function St(L){L!==$M?(_t(e.CULL_FACE),L!==y&&(L===ym?e.cullFace(e.BACK):L===ty?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ft(e.CULL_FACE),y=L}function ye(L){L!==D&&(Y&&e.lineWidth(L),D=L)}function Rt(L,nt,q){L?(_t(e.POLYGON_OFFSET_FILL),(X!==nt||V!==q)&&(e.polygonOffset(nt,q),X=nt,V=q)):ft(e.POLYGON_OFFSET_FILL)}function Dt(L){L?_t(e.SCISSOR_TEST):ft(e.SCISSOR_TEST)}function A(L){L===void 0&&(L=e.TEXTURE0+j-1),z!==L&&(e.activeTexture(L),z=L)}function S(L,nt,q){q===void 0&&(z===null?q=e.TEXTURE0+j-1:q=z);let Z=tt[q];Z===void 0&&(Z={type:void 0,texture:void 0},tt[q]=Z),(Z.type!==L||Z.texture!==nt)&&(z!==q&&(e.activeTexture(q),z=q),e.bindTexture(L,nt||$[L]),Z.type=L,Z.texture=nt)}function G(){const L=tt[z];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(L){zt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),zt.copy(L))}function dt(L){Wt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Wt.copy(L))}function Ct(L,nt){let q=l.get(nt);q===void 0&&(q=new WeakMap,l.set(nt,q));let Z=q.get(L);Z===void 0&&(Z=e.getUniformBlockIndex(nt,L.name),q.set(L,Z))}function It(L,nt){const Z=l.get(nt).get(L);o.get(nt)!==Z&&(e.uniformBlockBinding(nt,Z,L.__bindingPointIndex),o.set(nt,Z))}function fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},z=null,tt={},h={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,M=null,w=null,R=new Jt(0,0,0),b=0,U=!1,T=null,y=null,D=null,X=null,V=null,zt.set(0,0,e.canvas.width,e.canvas.height),Wt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),s.reset()}return{buffers:{color:a,depth:r,stencil:s},enable:_t,disable:ft,bindFramebuffer:Tt,drawBuffers:wt,useProgram:Ht,setBlending:Me,setMaterial:te,setFlipSided:ee,setCullFace:St,setLineWidth:ye,setPolygonOffset:Rt,setScissorTest:Dt,activeTexture:A,bindTexture:S,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ut,texImage3D:Vt,updateUBOMapping:Ct,uniformBlockBinding:It,texStorage2D:Lt,texStorage3D:et,texSubImage2D:Q,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ht,scissor:At,viewport:dt,reset:fe}}function _g(e,t,n,i){const a=ZA(i);switch(n){case Mv:return e*t;case Ev:return e*t;case Tv:return e*t*2;case bv:return e*t/a.components*a.byteLength;case Fd:return e*t/a.components*a.byteLength;case Av:return e*t*2/a.components*a.byteLength;case Hd:return e*t*2/a.components*a.byteLength;case yv:return e*t*3/a.components*a.byteLength;case Wn:return e*t*4/a.components*a.byteLength;case Gd:return e*t*4/a.components*a.byteLength;case Vl:case kl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xl:case Wl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fh:case dh:return Math.max(e,16)*Math.max(t,8)/4;case uh:case hh:return Math.max(e,8)*Math.max(t,8)/2;case ph:case mh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case xh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case yh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case bh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ql:case Uh:case Lh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Rv:case Nh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oh:case Ph:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZA(e){switch(e){case Pi:case vv:return{byteLength:1,components:1};case To:case xv:case Bo:return{byteLength:2,components:1};case Bd:case Id:return{byteLength:2,components:4};case $a:case zd:case Ci:return{byteLength:4,components:1};case Sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function KA(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return p?new OffscreenCanvas(A,S):Rc("canvas")}function x(A,S,G){let K=1;const J=Dt(A);if((J.width>G||J.height>G)&&(K=G/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(K*J.width),Mt=Math.floor(K*J.height);d===void 0&&(d=v(Q,Mt));const ot=S?v(Q,Mt):d;return ot.width=Q,ot.height=Mt,ot.getContext("2d").drawImage(A,0,0,Q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+Mt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Pn&&A.minFilter!==Xn}function u(A){e.generateMipmap(A)}function _(A,S,G,K,J=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=S;if(S===e.RED&&(G===e.FLOAT&&(Q=e.R32F),G===e.HALF_FLOAT&&(Q=e.R16F),G===e.UNSIGNED_BYTE&&(Q=e.R8)),S===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(Q=e.R8UI),G===e.UNSIGNED_SHORT&&(Q=e.R16UI),G===e.UNSIGNED_INT&&(Q=e.R32UI),G===e.BYTE&&(Q=e.R8I),G===e.SHORT&&(Q=e.R16I),G===e.INT&&(Q=e.R32I)),S===e.RG&&(G===e.FLOAT&&(Q=e.RG32F),G===e.HALF_FLOAT&&(Q=e.RG16F),G===e.UNSIGNED_BYTE&&(Q=e.RG8)),S===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(Q=e.RG8UI),G===e.UNSIGNED_SHORT&&(Q=e.RG16UI),G===e.UNSIGNED_INT&&(Q=e.RG32UI),G===e.BYTE&&(Q=e.RG8I),G===e.SHORT&&(Q=e.RG16I),G===e.INT&&(Q=e.RG32I)),S===e.RGB&&G===e.UNSIGNED_INT_5_9_9_9_REV&&(Q=e.RGB9_E5),S===e.RGBA){const Mt=J?Ec:Qt.getTransfer(K);G===e.FLOAT&&(Q=e.RGBA32F),G===e.HALF_FLOAT&&(Q=e.RGBA16F),G===e.UNSIGNED_BYTE&&(Q=Mt===oe?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT_4_4_4_4&&(Q=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(Q=e.RGB5_A1)}return(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function g(A,S){let G;return A?S===null||S===$a||S===hs?G=e.DEPTH24_STENCIL8:S===Ci?G=e.DEPTH32F_STENCIL8:S===To&&(G=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$a||S===hs?G=e.DEPTH_COMPONENT24:S===Ci?G=e.DEPTH_COMPONENT32F:S===To&&(G=e.DEPTH_COMPONENT16),G}function M(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pn&&A.minFilter!==Xn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),b(S),S.isVideoTexture&&h.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),T(S)}function b(A){const S=i.get(A);if(S.__webglInit===void 0)return;const G=A.source,K=f.get(G);if(K){const J=K[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&U(A),Object.keys(K).length===0&&f.delete(G)}i.remove(A)}function U(A){const S=i.get(A);e.deleteTexture(S.__webglTexture);const G=A.source,K=f.get(G);delete K[S.__cacheKey],s.memory.textures--}function T(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let J=0;J<S.__webglFramebuffer[K].length;J++)e.deleteFramebuffer(S.__webglFramebuffer[K][J]);else e.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)e.deleteFramebuffer(S.__webglFramebuffer[K]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=A.textures;for(let K=0,J=G.length;K<J;K++){const Q=i.get(G[K]);Q.__webglTexture&&(e.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(G[K])}i.remove(A)}let y=0;function D(){y=0}function X(){const A=y;return A>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),y+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){const G=i.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(G,A,S);return}}n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+S)}function Y(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Wt(G,A,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+S)}function N(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Wt(G,A,S);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+S)}function F(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){k(G,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+S)}const z={[lh]:e.REPEAT,[Fa]:e.CLAMP_TO_EDGE,[ch]:e.MIRRORED_REPEAT},tt={[Pn]:e.NEAREST,[zy]:e.NEAREST_MIPMAP_NEAREST,[ol]:e.NEAREST_MIPMAP_LINEAR,[Xn]:e.LINEAR,[Pu]:e.LINEAR_MIPMAP_NEAREST,[Ha]:e.LINEAR_MIPMAP_LINEAR},at={[Gy]:e.NEVER,[Yy]:e.ALWAYS,[Vy]:e.LESS,[Cv]:e.LEQUAL,[ky]:e.EQUAL,[qy]:e.GEQUAL,[Xy]:e.GREATER,[Wy]:e.NOTEQUAL};function pt(A,S){if(S.type===Ci&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Xn||S.magFilter===Pu||S.magFilter===ol||S.magFilter===Ha||S.minFilter===Xn||S.minFilter===Pu||S.minFilter===ol||S.minFilter===Ha)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,z[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,z[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,z[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,tt[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,tt[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pn||S.minFilter!==ol&&S.minFilter!==Ha||S.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function zt(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const K=S.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const Q=V(S);if(Q!==A.__cacheKey){J[Q]===void 0&&(J[Q]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,G=!0),J[Q].usedTimes++;const Mt=J[A.__cacheKey];Mt!==void 0&&(J[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&U(S)),A.__cacheKey=Q,A.__webglTexture=J[Q].texture}return G}function Wt(A,S,G){let K=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=e.TEXTURE_3D);const J=zt(A,S),Q=S.source;n.bindTexture(K,A.__webglTexture,e.TEXTURE0+G);const Mt=i.get(Q);if(Q.version!==Mt.__version||J===!0){n.activeTexture(e.TEXTURE0+G);const ot=Qt.getPrimaries(Qt.workingColorSpace),ht=S.colorSpace===ta?null:Qt.getPrimaries(S.colorSpace),Lt=S.colorSpace===ta||ot===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let et=x(S.image,!1,a.maxTextureSize);et=Rt(S,et);const ut=r.convert(S.format,S.colorSpace),Vt=r.convert(S.type);let At=_(S.internalFormat,ut,Vt,S.colorSpace,S.isVideoTexture);pt(K,S);let dt;const Ct=S.mipmaps,It=S.isVideoTexture!==!0,fe=Mt.__version===void 0||J===!0,L=Q.dataReady,nt=M(S,et);if(S.isDepthTexture)At=g(S.format===ds,S.type),fe&&(It?n.texStorage2D(e.TEXTURE_2D,1,At,et.width,et.height):n.texImage2D(e.TEXTURE_2D,0,At,et.width,et.height,0,ut,Vt,null));else if(S.isDataTexture)if(Ct.length>0){It&&fe&&n.texStorage2D(e.TEXTURE_2D,nt,At,Ct[0].width,Ct[0].height);for(let q=0,Z=Ct.length;q<Z;q++)dt=Ct[q],It?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,dt.width,dt.height,ut,Vt,dt.data):n.texImage2D(e.TEXTURE_2D,q,At,dt.width,dt.height,0,ut,Vt,dt.data);S.generateMipmaps=!1}else It?(fe&&n.texStorage2D(e.TEXTURE_2D,nt,At,et.width,et.height),L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,et.width,et.height,ut,Vt,et.data)):n.texImage2D(e.TEXTURE_2D,0,At,et.width,et.height,0,ut,Vt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){It&&fe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,At,Ct[0].width,Ct[0].height,et.depth);for(let q=0,Z=Ct.length;q<Z;q++)if(dt=Ct[q],S.format!==Wn)if(ut!==null)if(It){if(L)if(S.layerUpdates.size>0){const rt=_g(dt.width,dt.height,S.format,S.type);for(const yt of S.layerUpdates){const Xt=dt.data.subarray(yt*rt/dt.data.BYTES_PER_ELEMENT,(yt+1)*rt/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,yt,dt.width,dt.height,1,ut,Xt,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,et.depth,ut,dt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,At,dt.width,dt.height,et.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,dt.width,dt.height,et.depth,ut,Vt,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,q,At,dt.width,dt.height,et.depth,0,ut,Vt,dt.data)}else{It&&fe&&n.texStorage2D(e.TEXTURE_2D,nt,At,Ct[0].width,Ct[0].height);for(let q=0,Z=Ct.length;q<Z;q++)dt=Ct[q],S.format!==Wn?ut!==null?It?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,dt.width,dt.height,ut,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,q,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,dt.width,dt.height,ut,Vt,dt.data):n.texImage2D(e.TEXTURE_2D,q,At,dt.width,dt.height,0,ut,Vt,dt.data)}else if(S.isDataArrayTexture)if(It){if(fe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,At,et.width,et.height,et.depth),L)if(S.layerUpdates.size>0){const q=_g(et.width,et.height,S.format,S.type);for(const Z of S.layerUpdates){const rt=et.data.subarray(Z*q/et.data.BYTES_PER_ELEMENT,(Z+1)*q/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,ut,Vt,rt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,Vt,et.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,et.width,et.height,et.depth,0,ut,Vt,et.data);else if(S.isData3DTexture)It?(fe&&n.texStorage3D(e.TEXTURE_3D,nt,At,et.width,et.height,et.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,Vt,et.data)):n.texImage3D(e.TEXTURE_3D,0,At,et.width,et.height,et.depth,0,ut,Vt,et.data);else if(S.isFramebufferTexture){if(fe)if(It)n.texStorage2D(e.TEXTURE_2D,nt,At,et.width,et.height);else{let q=et.width,Z=et.height;for(let rt=0;rt<nt;rt++)n.texImage2D(e.TEXTURE_2D,rt,At,q,Z,0,ut,Vt,null),q>>=1,Z>>=1}}else if(Ct.length>0){if(It&&fe){const q=Dt(Ct[0]);n.texStorage2D(e.TEXTURE_2D,nt,At,q.width,q.height)}for(let q=0,Z=Ct.length;q<Z;q++)dt=Ct[q],It?L&&n.texSubImage2D(e.TEXTURE_2D,q,0,0,ut,Vt,dt):n.texImage2D(e.TEXTURE_2D,q,At,ut,Vt,dt);S.generateMipmaps=!1}else if(It){if(fe){const q=Dt(et);n.texStorage2D(e.TEXTURE_2D,nt,At,q.width,q.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Vt,et)}else n.texImage2D(e.TEXTURE_2D,0,At,ut,Vt,et);m(S)&&u(K),Mt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function k(A,S,G){if(S.image.length!==6)return;const K=zt(A,S),J=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+G);const Q=i.get(J);if(J.version!==Q.__version||K===!0){n.activeTexture(e.TEXTURE0+G);const Mt=Qt.getPrimaries(Qt.workingColorSpace),ot=S.colorSpace===ta?null:Qt.getPrimaries(S.colorSpace),ht=S.colorSpace===ta||Mt===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Lt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!Lt&&!et?ut[Z]=x(S.image[Z],!0,a.maxCubemapSize):ut[Z]=et?S.image[Z].image:S.image[Z],ut[Z]=Rt(S,ut[Z]);const Vt=ut[0],At=r.convert(S.format,S.colorSpace),dt=r.convert(S.type),Ct=_(S.internalFormat,At,dt,S.colorSpace),It=S.isVideoTexture!==!0,fe=Q.__version===void 0||K===!0,L=J.dataReady;let nt=M(S,Vt);pt(e.TEXTURE_CUBE_MAP,S);let q;if(Lt){It&&fe&&n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Ct,Vt.width,Vt.height);for(let Z=0;Z<6;Z++){q=ut[Z].mipmaps;for(let rt=0;rt<q.length;rt++){const yt=q[rt];S.format!==Wn?At!==null?It?L&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,yt.width,yt.height,At,yt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Ct,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,0,0,yt.width,yt.height,At,dt,yt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt,Ct,yt.width,yt.height,0,At,dt,yt.data)}}}else{if(q=S.mipmaps,It&&fe){q.length>0&&nt++;const Z=Dt(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Ct,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){It?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,At,dt,ut[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ct,ut[Z].width,ut[Z].height,0,At,dt,ut[Z].data);for(let rt=0;rt<q.length;rt++){const Xt=q[rt].image[Z].image;It?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,Xt.width,Xt.height,At,dt,Xt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Ct,Xt.width,Xt.height,0,At,dt,Xt.data)}}else{It?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,dt,ut[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ct,At,dt,ut[Z]);for(let rt=0;rt<q.length;rt++){const yt=q[rt];It?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,0,0,At,dt,yt.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,rt+1,Ct,At,dt,yt.image[Z])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),Q.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function $(A,S,G,K,J,Q){const Mt=r.convert(G.format,G.colorSpace),ot=r.convert(G.type),ht=_(G.internalFormat,Mt,ot,G.colorSpace);if(!i.get(S).__hasExternalTextures){const et=Math.max(1,S.width>>Q),ut=Math.max(1,S.height>>Q);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,Q,ht,et,ut,S.depth,0,Mt,ot,null):n.texImage2D(J,Q,ht,et,ut,0,Mt,ot,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,J,i.get(G).__webglTexture,0,ee(S)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,J,i.get(G).__webglTexture,Q),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _t(A,S,G){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){const K=S.depthTexture,J=K&&K.isDepthTexture?K.type:null,Q=g(S.stencilBuffer,J),Mt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=ee(S);St(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot,Q,S.width,S.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot,Q,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Q,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,A)}else{const K=S.textures;for(let J=0;J<K.length;J++){const Q=K[J],Mt=r.convert(Q.format,Q.colorSpace),ot=r.convert(Q.type),ht=_(Q.internalFormat,Mt,ot,Q.colorSpace),Lt=ee(S);G&&St(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Lt,ht,S.width,S.height):St(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Lt,ht,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ht,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ft(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const K=i.get(S.depthTexture).__webglTexture,J=ee(S);if(S.depthTexture.format===$r)St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(S.depthTexture.format===ds)St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,J):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Tt(A){const S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ft(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=e.createRenderbuffer(),_t(S.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,Q),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),_t(S.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,J)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function wt(A,S,G){const K=i.get(A);S!==void 0&&$(K.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&Tt(A)}function Ht(A){const S=A.texture,G=i.get(A),K=i.get(S);A.addEventListener("dispose",R);const J=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=S.version,s.memory.textures++),Q){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let ht=0;ht<S.mipmaps.length;ht++)G.__webglFramebuffer[ot][ht]=e.createFramebuffer()}else G.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)G.__webglFramebuffer[ot]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let ot=0,ht=J.length;ot<ht;ot++){const Lt=i.get(J[ot]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&St(A)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const ht=J[ot];G.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);const Lt=r.convert(ht.format,ht.colorSpace),et=r.convert(ht.type),ut=_(ht.internalFormat,Lt,et,ht.colorSpace,A.isXRRenderTarget===!0),Vt=ee(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Vt,ut,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),_t(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Q){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),pt(e.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)$(G.__webglFramebuffer[ot][ht],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else $(G.__webglFramebuffer[ot],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let ot=0,ht=J.length;ot<ht;ot++){const Lt=J[ot],et=i.get(Lt);n.bindTexture(e.TEXTURE_2D,et.__webglTexture),pt(e.TEXTURE_2D,Lt),$(G.__webglFramebuffer,A,Lt,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,0),m(Lt)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let ot=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ot,K.__webglTexture),pt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)$(G.__webglFramebuffer[ht],A,S,e.COLOR_ATTACHMENT0,ot,ht);else $(G.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,ot,0);m(S)&&u(ot),n.unbindTexture()}A.depthBuffer&&Tt(A)}function me(A){const S=A.textures;for(let G=0,K=S.length;G<K;G++){const J=S[G];if(m(J)){const Q=A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Mt=i.get(J).__webglTexture;n.bindTexture(Q,Mt),u(Q),n.unbindTexture()}}}const C=[],Me=[];function te(A){if(A.samples>0){if(St(A)===!1){const S=A.textures,G=A.width,K=A.height;let J=e.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(A),ot=S.length>1;if(ot)for(let ht=0;ht<S.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[ht]);const Lt=i.get(S[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Lt,0)}e.blitFramebuffer(0,0,G,K,0,0,G,K,J,e.NEAREST),l===!0&&(C.length=0,Me.length=0,C.push(e.COLOR_ATTACHMENT0+ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(C.push(Q),Me.push(Q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,C))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let ht=0;ht<S.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[ht]);const Lt=i.get(S[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,Lt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ee(A){return Math.min(a.maxSamples,A.samples)}function St(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(A){const S=s.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Rt(A,S){const G=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ma&&G!==ta&&(Qt.getTransfer(G)===oe?(K!==Wn||J!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=D,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=N,this.setTextureCube=F,this.rebindTextures=wt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=St}function QA(e,t){function n(i,a=ta){let r;const s=Qt.getTransfer(a);if(i===Pi)return e.UNSIGNED_BYTE;if(i===Bd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Sv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===vv)return e.BYTE;if(i===xv)return e.SHORT;if(i===To)return e.UNSIGNED_SHORT;if(i===zd)return e.INT;if(i===$a)return e.UNSIGNED_INT;if(i===Ci)return e.FLOAT;if(i===Bo)return e.HALF_FLOAT;if(i===Mv)return e.ALPHA;if(i===yv)return e.RGB;if(i===Wn)return e.RGBA;if(i===Ev)return e.LUMINANCE;if(i===Tv)return e.LUMINANCE_ALPHA;if(i===$r)return e.DEPTH_COMPONENT;if(i===ds)return e.DEPTH_STENCIL;if(i===bv)return e.RED;if(i===Fd)return e.RED_INTEGER;if(i===Av)return e.RG;if(i===Hd)return e.RG_INTEGER;if(i===Gd)return e.RGBA_INTEGER;if(i===Vl||i===kl||i===Xl||i===Wl)if(s===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uh||i===fh||i===hh||i===dh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ph||i===mh||i===gh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ph||i===mh)return s===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_h||i===vh||i===xh||i===Sh||i===Mh||i===yh||i===Eh||i===Th||i===bh||i===Ah||i===Rh||i===Ch||i===wh||i===Dh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_h)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Th)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ah)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ch)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Uh||i===Lh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ql)return s===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rv||i===Nh||i===Oh||i===Ph)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class JA extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wl extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $A={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const x of t.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($A)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new wl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new on,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new va({vertexShader:tR,fragmentShader:eR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new jc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iR extends ys{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const x=new nR,m=n.getContextAttributes();let u=null,_=null;const g=[],M=[],w=new $t;let R=null;const b=new Dn;b.layers.enable(1),b.viewport=new Fe;const U=new Dn;U.layers.enable(2),U.viewport=new Fe;const T=[b,U],y=new JA;y.layers.enable(1),y.layers.enable(2);let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=g[k];return $===void 0&&($=new cf,g[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=g[k];return $===void 0&&($=new cf,g[k]=$),$.getGripSpace()},this.getHand=function(k){let $=g[k];return $===void 0&&($=new cf,g[k]=$),$.getHandSpace()};function V(k){const $=M.indexOf(k.inputSource);if($===-1)return;const _t=g[$];_t!==void 0&&(_t.update(k.inputSource,k.frame,c||s),_t.dispatchEvent({type:k.type,data:k.inputSource}))}function j(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",j),a.removeEventListener("inputsourceschange",Y);for(let k=0;k<g.length;k++){const $=M[k];$!==null&&(M[k]=null,g[k].disconnect($))}D=null,X=null,x.reset(),t.setRenderTarget(u),p=null,f=null,d=null,a=null,_=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(k){if(a=k,a!==null){if(u=t.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",j),a.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),a.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,$),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new tr(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,_t=null,ft=null;m.depth&&(ft=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=m.stencil?ds:$r,_t=m.stencil?hs:$a);const Tt={colorFormat:n.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(a,n),f=d.createProjectionLayer(Tt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new tr(f.textureWidth,f.textureHeight,{format:Wn,type:Pi,depthTexture:new Gv(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Wt.setContext(a),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(k){for(let $=0;$<k.removed.length;$++){const _t=k.removed[$],ft=M.indexOf(_t);ft>=0&&(M[ft]=null,g[ft].disconnect(_t))}for(let $=0;$<k.added.length;$++){const _t=k.added[$];let ft=M.indexOf(_t);if(ft===-1){for(let wt=0;wt<g.length;wt++)if(wt>=M.length){M.push(_t),ft=wt;break}else if(M[wt]===null){M[wt]=_t,ft=wt;break}if(ft===-1)break}const Tt=g[ft];Tt&&Tt.connect(_t)}}const N=new H,F=new H;function z(k,$,_t){N.setFromMatrixPosition($.matrixWorld),F.setFromMatrixPosition(_t.matrixWorld);const ft=N.distanceTo(F),Tt=$.projectionMatrix.elements,wt=_t.projectionMatrix.elements,Ht=Tt[14]/(Tt[10]-1),me=Tt[14]/(Tt[10]+1),C=(Tt[9]+1)/Tt[5],Me=(Tt[9]-1)/Tt[5],te=(Tt[8]-1)/Tt[0],ee=(wt[8]+1)/wt[0],St=Ht*te,ye=Ht*ee,Rt=ft/(-te+ee),Dt=Rt*-te;if($.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Dt),k.translateZ(Rt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Tt[10]===-1)k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const A=Ht+Rt,S=me+Rt,G=St-Dt,K=ye+(ft-Dt),J=C*me/S*A,Q=Me*me/S*A;k.projectionMatrix.makePerspective(G,K,J,Q,A,S),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function tt(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(a===null)return;let $=k.near,_t=k.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),y.near=U.near=b.near=$,y.far=U.far=b.far=_t,(D!==y.near||X!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,X=y.far);const ft=k.parent,Tt=y.cameras;tt(y,ft);for(let wt=0;wt<Tt.length;wt++)tt(Tt[wt],ft);Tt.length===2?z(y,b,U):y.projectionMatrix.copy(b.projectionMatrix),at(k,y,ft)};function at(k,$,_t){_t===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(_t.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=zh*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let pt=null;function zt(k,$){if(h=$.getViewerPose(c||s),v=$,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let ft=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,ft=!0);for(let wt=0;wt<_t.length;wt++){const Ht=_t[wt];let me=null;if(p!==null)me=p.getViewport(Ht);else{const Me=d.getViewSubImage(f,Ht);me=Me.viewport,wt===0&&(t.setRenderTargetTextures(_,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(_))}let C=T[wt];C===void 0&&(C=new Dn,C.layers.enable(wt),C.viewport=new Fe,T[wt]=C),C.matrix.fromArray(Ht.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ht.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(me.x,me.y,me.width,me.height),wt===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ft===!0&&y.cameras.push(C)}const Tt=a.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const wt=d.getDepthInformation(_t[0]);wt&&wt.isValid&&wt.texture&&x.init(t,wt,a.renderState)}}for(let _t=0;_t<g.length;_t++){const ft=M[_t],Tt=g[_t];ft!==null&&Tt!==void 0&&Tt.update(ft,$,c||s)}pt&&pt(k,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const Wt=new Hv;Wt.setAnimationLoop(zt),this.setAnimationLoop=function(k){pt=k},this.dispose=function(){}}}const wa=new zi,aR=new Ue;function rR(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,zv(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,_,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),v(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=t.get(u),g=_.envMap,M=_.envMapRotation;g&&(m.envMap.value=g,wa.copy(M),wa.x*=-1,wa.y*=-1,wa.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(wa.y*=-1,wa.z*=-1),m.envMapRotation.value.setFromMatrix4(aR.makeRotationFromEuler(wa)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function sR(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=a[_.id];M===void 0&&(v(_),M=h(_),a[_.id]=M,_.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(_,w);const R=t.render.frame;r[_.id]!==R&&(f(_),r[_.id]=R)}function h(_){const g=d();_.__bindingPointIndex=g;const M=e.createBuffer(),w=_.__size,R=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,w,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,M),M}function d(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=a[_.id],M=_.uniforms,w=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let R=0,b=M.length;R<b;R++){const U=Array.isArray(M[R])?M[R]:[M[R]];for(let T=0,y=U.length;T<y;T++){const D=U[T];if(p(D,R,T,w)===!0){const X=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let Y=0;Y<V.length;Y++){const N=V[Y],F=x(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,X+j,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,j),j+=F.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,X,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,g,M,w){const R=_.value,b=g+"_"+M;if(w[b]===void 0)return typeof R=="number"||typeof R=="boolean"?w[b]=R:w[b]=R.clone(),!0;{const U=w[b];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return w[b]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function v(_){const g=_.uniforms;let M=0;const w=16;for(let b=0,U=g.length;b<U;b++){const T=Array.isArray(g[b])?g[b]:[g[b]];for(let y=0,D=T.length;y<D;y++){const X=T[y],V=Array.isArray(X.value)?X.value:[X.value];for(let j=0,Y=V.length;j<Y;j++){const N=V[j],F=x(N),z=M%w,tt=z%F.boundary,at=z+tt;M+=tt,at!==0&&w-at<F.storage&&(M+=w-at),X.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=F.storage}}}const R=M%w;return R>0&&(M+=w-R),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const M=s.indexOf(g.__bindingPointIndex);s.splice(M,1),e.deleteBuffer(a[g.id]),delete a[g.id],delete r[g.id]}function u(){for(const _ in a)e.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class oR{constructor(t={}){const{canvas:n=Zy(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=ha,this.toneMappingExposure=1;const g=this;let M=!1,w=0,R=0,b=null,U=-1,T=null;const y=new Fe,D=new Fe;let X=null;const V=new Jt(0);let j=0,Y=n.width,N=n.height,F=1,z=null,tt=null;const at=new Fe(0,0,Y,N),pt=new Fe(0,0,Y,N);let zt=!1;const Wt=new Fv;let k=!1,$=!1;const _t=new Ue,ft=new H,Tt=new Fe,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function me(){return b===null?F:1}let C=i;function Me(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pd}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",rt,!1),C===null){const O="webgl2";if(C=Me(O,E),C===null)throw Me(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,ee,St,ye,Rt,Dt,A,S,G,K,J,Q,Mt,ot,ht,Lt,et,ut,Vt,At,dt,Ct,It,fe;function L(){te=new db(C),te.init(),Ct=new QA(C,te),ee=new sb(C,te,t,Ct),St=new jA(C),ye=new gb(C),Rt=new OA,Dt=new KA(C,te,St,Rt,ee,Ct,ye),A=new lb(g),S=new hb(g),G=new yE(C),It=new ab(C,G),K=new pb(C,G,ye,It),J=new vb(C,K,G,ye),Vt=new _b(C,ee,Dt),Lt=new ob(Rt),Q=new NA(g,A,S,te,ee,It,Lt),Mt=new rR(g,Rt),ot=new zA,ht=new VA(te),ut=new ib(g,A,S,St,J,f,l),et=new YA(g,J,ee),fe=new sR(C,ye,ee,St),At=new rb(C,te,ye),dt=new mb(C,te,ye),ye.programs=Q.programs,g.capabilities=ee,g.extensions=te,g.properties=Rt,g.renderLists=ot,g.shadowMap=et,g.state=St,g.info=ye}L();const nt=new iR(g,C);this.xr=nt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(Y,N,!1))},this.getSize=function(E){return E.set(Y,N)},this.setSize=function(E,O,B=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,N=O,n.width=Math.floor(E*F),n.height=Math.floor(O*F),B===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Y*F,N*F).floor()},this.setDrawingBufferSize=function(E,O,B){Y=E,N=O,F=B,n.width=Math.floor(E*B),n.height=Math.floor(O*B),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(at)},this.setViewport=function(E,O,B,I){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,O,B,I),St.viewport(y.copy(at).multiplyScalar(F).round())},this.getScissor=function(E){return E.copy(pt)},this.setScissor=function(E,O,B,I){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,O,B,I),St.scissor(D.copy(pt).multiplyScalar(F).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(E){St.setScissorTest(zt=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){tt=E},this.getClearColor=function(E){return E.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(E=!0,O=!0,B=!0){let I=0;if(E){let P=!1;if(b!==null){const it=b.texture.format;P=it===Gd||it===Hd||it===Fd}if(P){const it=b.texture.type,ct=it===Pi||it===$a||it===To||it===hs||it===Bd||it===Id,mt=ut.getClearColor(),gt=ut.getClearAlpha(),Et=mt.r,bt=mt.g,vt=mt.b;ct?(p[0]=Et,p[1]=bt,p[2]=vt,p[3]=gt,C.clearBufferuiv(C.COLOR,0,p)):(v[0]=Et,v[1]=bt,v[2]=vt,v[3]=gt,C.clearBufferiv(C.COLOR,0,v))}else I|=C.COLOR_BUFFER_BIT}O&&(I|=C.DEPTH_BUFFER_BIT),B&&(I|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",rt,!1),ot.dispose(),ht.dispose(),Rt.dispose(),A.dispose(),S.dispose(),J.dispose(),It.dispose(),fe.dispose(),Q.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",jn),nt.removeEventListener("sessionend",qd),ya.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=ye.autoReset,O=et.enabled,B=et.autoUpdate,I=et.needsUpdate,P=et.type;L(),ye.autoReset=E,et.enabled=O,et.autoUpdate=B,et.needsUpdate=I,et.type=P}function rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function yt(E){const O=E.target;O.removeEventListener("dispose",yt),Xt(O)}function Xt(E){Ee(E),Rt.remove(E)}function Ee(E){const O=Rt.get(E).programs;O!==void 0&&(O.forEach(function(B){Q.releaseProgram(B)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,B,I,P,it){O===null&&(O=wt);const ct=P.isMesh&&P.matrixWorld.determinant()<0,mt=qv(E,O,B,I,P);St.setMaterial(I,ct);let gt=B.index,Et=1;if(I.wireframe===!0){if(gt=K.getWireframeAttribute(B),gt===void 0)return;Et=2}const bt=B.drawRange,vt=B.attributes.position;let jt=bt.start*Et,ge=(bt.start+bt.count)*Et;it!==null&&(jt=Math.max(jt,it.start*Et),ge=Math.min(ge,(it.start+it.count)*Et)),gt!==null?(jt=Math.max(jt,0),ge=Math.min(ge,gt.count)):vt!=null&&(jt=Math.max(jt,0),ge=Math.min(ge,vt.count));const _e=ge-jt;if(_e<0||_e===1/0)return;It.setup(P,I,mt,B,gt);let un,Zt=At;if(gt!==null&&(un=G.get(gt),Zt=dt,Zt.setIndex(un)),P.isMesh)I.wireframe===!0?(St.setLineWidth(I.wireframeLinewidth*me()),Zt.setMode(C.LINES)):Zt.setMode(C.TRIANGLES);else if(P.isLine){let xt=I.linewidth;xt===void 0&&(xt=1),St.setLineWidth(xt*me()),P.isLineSegments?Zt.setMode(C.LINES):P.isLineLoop?Zt.setMode(C.LINE_LOOP):Zt.setMode(C.LINE_STRIP)}else P.isPoints?Zt.setMode(C.POINTS):P.isSprite&&Zt.setMode(C.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Zt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Zt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const xt=P._multiDrawStarts,ke=P._multiDrawCounts,Kt=P._multiDrawCount,In=gt?G.get(gt).bytesPerElement:1,lr=Rt.get(I).currentProgram.getUniforms();for(let fn=0;fn<Kt;fn++)lr.setValue(C,"_gl_DrawID",fn),Zt.render(xt[fn]/In,ke[fn])}else if(P.isInstancedMesh)Zt.renderInstances(jt,_e,P.count);else if(B.isInstancedBufferGeometry){const xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ke=Math.min(B.instanceCount,xt);Zt.renderInstances(jt,_e,ke)}else Zt.render(jt,_e)};function Ve(E,O,B){E.transparent===!0&&E.side===yi&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Vo(E,O,B),E.side=_a,E.needsUpdate=!0,Vo(E,O,B),E.side=yi):Vo(E,O,B)}this.compile=function(E,O,B=null){B===null&&(B=E),m=ht.get(B),m.init(O),_.push(m),B.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),E!==B&&E.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(m.pushLight(P),P.castShadow&&m.pushShadow(P))}),m.setupLights();const I=new Set;return E.traverse(function(P){const it=P.material;if(it)if(Array.isArray(it))for(let ct=0;ct<it.length;ct++){const mt=it[ct];Ve(mt,B,P),I.add(mt)}else Ve(it,B,P),I.add(it)}),_.pop(),m=null,I},this.compileAsync=function(E,O,B=null){const I=this.compile(E,O,B);return new Promise(P=>{function it(){if(I.forEach(function(ct){Rt.get(ct).currentProgram.isReady()&&I.delete(ct)}),I.size===0){P(E);return}setTimeout(it,10)}te.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Yt=null;function li(E){Yt&&Yt(E)}function jn(){ya.stop()}function qd(){ya.start()}const ya=new Hv;ya.setAnimationLoop(li),typeof self<"u"&&ya.setContext(self),this.setAnimationLoop=function(E){Yt=E,nt.setAnimationLoop(E),E===null?ya.stop():ya.start()},nt.addEventListener("sessionstart",jn),nt.addEventListener("sessionend",qd),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(O),O=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,O,b),m=ht.get(E,_.length),m.init(O),_.push(m),_t.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Wt.setFromProjectionMatrix(_t),$=this.localClippingEnabled,k=Lt.init(this.clippingPlanes,$),x=ot.get(E,u.length),x.init(),u.push(x),nt.enabled===!0&&nt.isPresenting===!0){const it=g.xr.getDepthSensingMesh();it!==null&&Kc(it,O,-1/0,g.sortObjects)}Kc(E,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(z,tt),Ht=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Ht&&ut.addToRenderList(x,E),this.info.render.frame++,k===!0&&Lt.beginShadows();const B=m.state.shadowsArray;et.render(B,E,O),k===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=x.opaque,P=x.transmissive;if(m.setupLights(),O.isArrayCamera){const it=O.cameras;if(P.length>0)for(let ct=0,mt=it.length;ct<mt;ct++){const gt=it[ct];jd(I,P,E,gt)}Ht&&ut.render(E);for(let ct=0,mt=it.length;ct<mt;ct++){const gt=it[ct];Yd(x,E,gt,gt.viewport)}}else P.length>0&&jd(I,P,E,O),Ht&&ut.render(E),Yd(x,E,O);b!==null&&(Dt.updateMultisampleRenderTarget(b),Dt.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(g,E,O),It.resetDefaultState(),U=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],k===!0&&Lt.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Kc(E,O,B,I){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Wt.intersectsSprite(E)){I&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const ct=J.update(E),mt=E.material;mt.visible&&x.push(E,ct,mt,B,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Wt.intersectsObject(E))){const ct=J.update(E),mt=E.material;if(I&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Tt.copy(ct.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(mt)){const gt=ct.groups;for(let Et=0,bt=gt.length;Et<bt;Et++){const vt=gt[Et],jt=mt[vt.materialIndex];jt&&jt.visible&&x.push(E,ct,jt,B,Tt.z,vt)}}else mt.visible&&x.push(E,ct,mt,B,Tt.z,null)}}const it=E.children;for(let ct=0,mt=it.length;ct<mt;ct++)Kc(it[ct],O,B,I)}function Yd(E,O,B,I){const P=E.opaque,it=E.transmissive,ct=E.transparent;m.setupLightsView(B),k===!0&&Lt.setGlobalState(g.clippingPlanes,B),I&&St.viewport(y.copy(I)),P.length>0&&Go(P,O,B),it.length>0&&Go(it,O,B),ct.length>0&&Go(ct,O,B),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function jd(E,O,B,I){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[I.id]===void 0&&(m.state.transmissionRenderTarget[I.id]=new tr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Bo:Pi,minFilter:Ha,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const it=m.state.transmissionRenderTarget[I.id],ct=I.viewport||y;it.setSize(ct.z,ct.w);const mt=g.getRenderTarget();g.setRenderTarget(it),g.getClearColor(V),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear(),Ht&&ut.render(B);const gt=g.toneMapping;g.toneMapping=ha;const Et=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),m.setupLightsView(I),k===!0&&Lt.setGlobalState(g.clippingPlanes,I),Go(E,B,I),Dt.updateMultisampleRenderTarget(it),Dt.updateRenderTargetMipmap(it),te.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let vt=0,jt=O.length;vt<jt;vt++){const ge=O[vt],_e=ge.object,un=ge.geometry,Zt=ge.material,xt=ge.group;if(Zt.side===yi&&_e.layers.test(I.layers)){const ke=Zt.side;Zt.side=sn,Zt.needsUpdate=!0,Zd(_e,B,I,un,Zt,xt),Zt.side=ke,Zt.needsUpdate=!0,bt=!0}}bt===!0&&(Dt.updateMultisampleRenderTarget(it),Dt.updateRenderTargetMipmap(it))}g.setRenderTarget(mt),g.setClearColor(V,j),Et!==void 0&&(I.viewport=Et),g.toneMapping=gt}function Go(E,O,B){const I=O.isScene===!0?O.overrideMaterial:null;for(let P=0,it=E.length;P<it;P++){const ct=E[P],mt=ct.object,gt=ct.geometry,Et=I===null?ct.material:I,bt=ct.group;mt.layers.test(B.layers)&&Zd(mt,O,B,gt,Et,bt)}}function Zd(E,O,B,I,P,it){E.onBeforeRender(g,O,B,I,P,it),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),P.onBeforeRender(g,O,B,I,E,it),P.transparent===!0&&P.side===yi&&P.forceSinglePass===!1?(P.side=sn,P.needsUpdate=!0,g.renderBufferDirect(B,O,I,P,E,it),P.side=_a,P.needsUpdate=!0,g.renderBufferDirect(B,O,I,P,E,it),P.side=yi):g.renderBufferDirect(B,O,I,P,E,it),E.onAfterRender(g,O,B,I,P,it)}function Vo(E,O,B){O.isScene!==!0&&(O=wt);const I=Rt.get(E),P=m.state.lights,it=m.state.shadowsArray,ct=P.state.version,mt=Q.getParameters(E,P.state,it,O,B),gt=Q.getProgramCacheKey(mt);let Et=I.programs;I.environment=E.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(E.isMeshStandardMaterial?S:A).get(E.envMap||I.environment),I.envMapRotation=I.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",yt),Et=new Map,I.programs=Et);let bt=Et.get(gt);if(bt!==void 0){if(I.currentProgram===bt&&I.lightsStateVersion===ct)return Qd(E,mt),bt}else mt.uniforms=Q.getUniforms(E),E.onBeforeCompile(mt,g),bt=Q.acquireProgram(mt,gt),Et.set(gt,bt),I.uniforms=mt.uniforms;const vt=I.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(vt.clippingPlanes=Lt.uniform),Qd(E,mt),I.needsLights=jv(E),I.lightsStateVersion=ct,I.needsLights&&(vt.ambientLightColor.value=P.state.ambient,vt.lightProbe.value=P.state.probe,vt.directionalLights.value=P.state.directional,vt.directionalLightShadows.value=P.state.directionalShadow,vt.spotLights.value=P.state.spot,vt.spotLightShadows.value=P.state.spotShadow,vt.rectAreaLights.value=P.state.rectArea,vt.ltc_1.value=P.state.rectAreaLTC1,vt.ltc_2.value=P.state.rectAreaLTC2,vt.pointLights.value=P.state.point,vt.pointLightShadows.value=P.state.pointShadow,vt.hemisphereLights.value=P.state.hemi,vt.directionalShadowMap.value=P.state.directionalShadowMap,vt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,vt.spotShadowMap.value=P.state.spotShadowMap,vt.spotLightMatrix.value=P.state.spotLightMatrix,vt.spotLightMap.value=P.state.spotLightMap,vt.pointShadowMap.value=P.state.pointShadowMap,vt.pointShadowMatrix.value=P.state.pointShadowMatrix),I.currentProgram=bt,I.uniformsList=null,bt}function Kd(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Yl.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Qd(E,O){const B=Rt.get(E);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function qv(E,O,B,I,P){O.isScene!==!0&&(O=wt),Dt.resetTextureUnits();const it=O.fog,ct=I.isMeshStandardMaterial?O.environment:null,mt=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ma,gt=(I.isMeshStandardMaterial?S:A).get(I.envMap||ct),Et=I.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,bt=!!B.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),vt=!!B.morphAttributes.position,jt=!!B.morphAttributes.normal,ge=!!B.morphAttributes.color;let _e=ha;I.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(_e=g.toneMapping);const un=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=un!==void 0?un.length:0,xt=Rt.get(I),ke=m.state.lights;if(k===!0&&($===!0||E!==T)){const yn=E===T&&I.id===U;Lt.setState(I,E,yn)}let Kt=!1;I.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==ke.state.version||xt.outputColorSpace!==mt||P.isBatchedMesh&&xt.batching===!1||!P.isBatchedMesh&&xt.batching===!0||P.isBatchedMesh&&xt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&xt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&xt.instancing===!1||!P.isInstancedMesh&&xt.instancing===!0||P.isSkinnedMesh&&xt.skinning===!1||!P.isSkinnedMesh&&xt.skinning===!0||P.isInstancedMesh&&xt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&xt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&xt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&xt.instancingMorph===!1&&P.morphTexture!==null||xt.envMap!==gt||I.fog===!0&&xt.fog!==it||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Lt.numPlanes||xt.numIntersection!==Lt.numIntersection)||xt.vertexAlphas!==Et||xt.vertexTangents!==bt||xt.morphTargets!==vt||xt.morphNormals!==jt||xt.morphColors!==ge||xt.toneMapping!==_e||xt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,xt.__version=I.version);let In=xt.currentProgram;Kt===!0&&(In=Vo(I,O,P));let lr=!1,fn=!1,Qc=!1;const Te=In.getUniforms(),Ii=xt.uniforms;if(St.useProgram(In.program)&&(lr=!0,fn=!0,Qc=!0),I.id!==U&&(U=I.id,fn=!0),lr||T!==E){Te.setValue(C,"projectionMatrix",E.projectionMatrix),Te.setValue(C,"viewMatrix",E.matrixWorldInverse);const yn=Te.map.cameraPosition;yn!==void 0&&yn.setValue(C,ft.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&Te.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Te.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,fn=!0,Qc=!0)}if(P.isSkinnedMesh){Te.setOptional(C,P,"bindMatrix"),Te.setOptional(C,P,"bindMatrixInverse");const yn=P.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Te.setValue(C,"boneTexture",yn.boneTexture,Dt))}P.isBatchedMesh&&(Te.setOptional(C,P,"batchingTexture"),Te.setValue(C,"batchingTexture",P._matricesTexture,Dt),Te.setOptional(C,P,"batchingIdTexture"),Te.setValue(C,"batchingIdTexture",P._indirectTexture,Dt),Te.setOptional(C,P,"batchingColorTexture"),P._colorsTexture!==null&&Te.setValue(C,"batchingColorTexture",P._colorsTexture,Dt));const Jc=B.morphAttributes;if((Jc.position!==void 0||Jc.normal!==void 0||Jc.color!==void 0)&&Vt.update(P,B,In),(fn||xt.receiveShadow!==P.receiveShadow)&&(xt.receiveShadow=P.receiveShadow,Te.setValue(C,"receiveShadow",P.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Ii.envMap.value=gt,Ii.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&O.environment!==null&&(Ii.envMapIntensity.value=O.environmentIntensity),fn&&(Te.setValue(C,"toneMappingExposure",g.toneMappingExposure),xt.needsLights&&Yv(Ii,Qc),it&&I.fog===!0&&Mt.refreshFogUniforms(Ii,it),Mt.refreshMaterialUniforms(Ii,I,F,N,m.state.transmissionRenderTarget[E.id]),Yl.upload(C,Kd(xt),Ii,Dt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Yl.upload(C,Kd(xt),Ii,Dt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Te.setValue(C,"center",P.center),Te.setValue(C,"modelViewMatrix",P.modelViewMatrix),Te.setValue(C,"normalMatrix",P.normalMatrix),Te.setValue(C,"modelMatrix",P.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const yn=I.uniformsGroups;for(let $c=0,Zv=yn.length;$c<Zv;$c++){const Jd=yn[$c];fe.update(Jd,In),fe.bind(Jd,In)}}return In}function Yv(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function jv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,O,B){Rt.get(E.texture).__webglTexture=O,Rt.get(E.depthTexture).__webglTexture=B;const I=Rt.get(E);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=B===void 0,I.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const B=Rt.get(E);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,B=0){b=E,w=O,R=B;let I=!0,P=null,it=!1,ct=!1;if(E){const gt=Rt.get(E);if(gt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(C.FRAMEBUFFER,null),I=!1;else if(gt.__webglFramebuffer===void 0)Dt.setupRenderTarget(E);else if(gt.__hasExternalTextures)Dt.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const vt=E.depthTexture;if(gt.__boundDepthTexture!==vt){if(vt!==null&&Rt.has(vt)&&(E.width!==vt.image.width||E.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ct=!0);const bt=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(bt[O])?P=bt[O][B]:P=bt[O],it=!0):E.samples>0&&Dt.useMultisampledRTT(E)===!1?P=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(bt)?P=bt[B]:P=bt,y.copy(E.viewport),D.copy(E.scissor),X=E.scissorTest}else y.copy(at).multiplyScalar(F).floor(),D.copy(pt).multiplyScalar(F).floor(),X=zt;if(St.bindFramebuffer(C.FRAMEBUFFER,P)&&I&&St.drawBuffers(E,P),St.viewport(y),St.scissor(D),St.setScissorTest(X),it){const gt=Rt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,B)}else if(ct){const gt=Rt.get(E.texture),Et=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.__webglTexture,B||0,Et)}U=-1},this.readRenderTargetPixels=function(E,O,B,I,P,it,ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){St.bindFramebuffer(C.FRAMEBUFFER,mt);try{const gt=E.texture,Et=gt.format,bt=gt.type;if(!ee.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-I&&B>=0&&B<=E.height-P&&C.readPixels(O,B,I,P,Ct.convert(Et),Ct.convert(bt),it)}finally{const gt=b!==null?Rt.get(b).__webglFramebuffer:null;St.bindFramebuffer(C.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(E,O,B,I,P,it,ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){St.bindFramebuffer(C.FRAMEBUFFER,mt);try{const gt=E.texture,Et=gt.format,bt=gt.type;if(!ee.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-I&&B>=0&&B<=E.height-P){const vt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,vt),C.bufferData(C.PIXEL_PACK_BUFFER,it.byteLength,C.STREAM_READ),C.readPixels(O,B,I,P,Ct.convert(Et),Ct.convert(bt),0),C.flush();const jt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Ky(C,jt,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,vt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,it)}finally{C.deleteBuffer(vt),C.deleteSync(jt)}return it}}finally{const gt=b!==null?Rt.get(b).__webglFramebuffer:null;St.bindFramebuffer(C.FRAMEBUFFER,gt)}}},this.copyFramebufferToTexture=function(E,O=null,B=0){E.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const I=Math.pow(2,-B),P=Math.floor(E.image.width*I),it=Math.floor(E.image.height*I),ct=O!==null?O.x:0,mt=O!==null?O.y:0;Dt.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ct,mt,P,it),St.unbindTexture()},this.copyTextureToTexture=function(E,O,B=null,I=null,P=0){E.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,E=arguments[1],O=arguments[2],P=arguments[3]||0,B=null);let it,ct,mt,gt,Et,bt;B!==null?(it=B.max.x-B.min.x,ct=B.max.y-B.min.y,mt=B.min.x,gt=B.min.y):(it=E.image.width,ct=E.image.height,mt=0,gt=0),I!==null?(Et=I.x,bt=I.y):(Et=0,bt=0);const vt=Ct.convert(O.format),jt=Ct.convert(O.type);Dt.setTexture2D(O,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const ge=C.getParameter(C.UNPACK_ROW_LENGTH),_e=C.getParameter(C.UNPACK_IMAGE_HEIGHT),un=C.getParameter(C.UNPACK_SKIP_PIXELS),Zt=C.getParameter(C.UNPACK_SKIP_ROWS),xt=C.getParameter(C.UNPACK_SKIP_IMAGES),ke=E.isCompressedTexture?E.mipmaps[P]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ke.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ke.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,mt),C.pixelStorei(C.UNPACK_SKIP_ROWS,gt),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,P,Et,bt,it,ct,vt,jt,ke.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,P,Et,bt,ke.width,ke.height,vt,ke.data):C.texSubImage2D(C.TEXTURE_2D,P,Et,bt,it,ct,vt,jt,ke),C.pixelStorei(C.UNPACK_ROW_LENGTH,ge),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_e),C.pixelStorei(C.UNPACK_SKIP_PIXELS,un),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xt),P===0&&O.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(E,O,B=null,I=null,P=0){E.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,I=arguments[1]||null,E=arguments[2],O=arguments[3],P=arguments[4]||0);let it,ct,mt,gt,Et,bt,vt,jt,ge;const _e=E.isCompressedTexture?E.mipmaps[P]:E.image;B!==null?(it=B.max.x-B.min.x,ct=B.max.y-B.min.y,mt=B.max.z-B.min.z,gt=B.min.x,Et=B.min.y,bt=B.min.z):(it=_e.width,ct=_e.height,mt=_e.depth,gt=0,Et=0,bt=0),I!==null?(vt=I.x,jt=I.y,ge=I.z):(vt=0,jt=0,ge=0);const un=Ct.convert(O.format),Zt=Ct.convert(O.type);let xt;if(O.isData3DTexture)Dt.setTexture3D(O,0),xt=C.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Dt.setTexture2DArray(O,0),xt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const ke=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),In=C.getParameter(C.UNPACK_SKIP_PIXELS),lr=C.getParameter(C.UNPACK_SKIP_ROWS),fn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,_e.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_e.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Et),C.pixelStorei(C.UNPACK_SKIP_IMAGES,bt),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(xt,P,vt,jt,ge,it,ct,mt,un,Zt,_e.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(xt,P,vt,jt,ge,it,ct,mt,un,_e.data):C.texSubImage3D(xt,P,vt,jt,ge,it,ct,mt,un,Zt,_e),C.pixelStorei(C.UNPACK_ROW_LENGTH,ke),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,In),C.pixelStorei(C.UNPACK_SKIP_ROWS,lr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,fn),P===0&&O.generateMipmaps&&C.generateMipmap(xt),St.unbindTexture()},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&Dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Dt.setTextureCube(E,0):E.isData3DTexture?Dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Dt.setTexture2DArray(E,0):Dt.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){w=0,R=0,b=null,St.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===Vd?"display-p3":"srgb",n.unpackColorSpace=Qt.workingColorSpace===qc?"display-p3":"srgb"}}class lR extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);function cR(e,t){let n=e.current;if(!n)return;const i=new oR({antialias:!0});console.log(n.offsetWidth,", ",n.offsetHeight);const a=window.devicePixelRatio||1;i.setSize(n.offsetWidth,n.offsetHeight),i.setPixelRatio(a),n.appendChild(i.domElement);const r=window.getComputedStyle(t).backgroundColor,s=new lR;console.log(r),s.background=new Jt(r);const o=new Dn(75,n.offsetWidth/n.offsetHeight,.1,1e3);o.position.z=5;const l=new Es,c=new Xd({color:65280}),h=new ti(l,c);s.add(h);const d=x=>{console.log("3jsContainer: ",n),console.log("Resizing"),console.log("3js Container: ",n.offsetWidth,", ",n.offsetHeight),i.setSize(n.offsetWidth,n.offsetHeight),o.aspect=n.offsetWidth/n.offsetHeight,o.updateProjectionMatrix()};window.addEventListener("resize",d);let f=!1;const p=()=>{f||(d(),f=!0),requestAnimationFrame(p),h.rotation.x+=.01,h.rotation.y+=.01,i.render(s,o)};return p(),{handleResize:d,handleDarkModeChange:()=>{const x=window.getComputedStyle(t).backgroundColor;s.background=new Jt(x)},scene:s,cleanup:()=>{window.removeEventListener("resize",d),i.dispose(),n.removeChild(i.domElement)}}}const uR=({darkMode:e})=>{const t=Ie.useRef(null);let n=Ie.useRef(null),i=Ie.useRef(null);return Ie.useEffect(()=>{var s;for(n=(s=t.current)==null?void 0:s.parentElement;n&&n.tagName!=="SECTION";)console.log("Parent Element: ",n.tagName),n=n.parentElement;console.log("Parent Element: ",n),i=cR(t,n),console.log("Container: ",t.current),console.log("init container size",t.current.offsetWidth,t.current.offsetHeight),(()=>{i==null||i.handleDarkModeChange})();const r=setTimeout(()=>{console.log("delayed container size",t.current.offsetWidth,t.current.offsetHeight),console.log("ThreeJS Instance: ",i),i!=null&&i.handleResize&&i.handleResize(t)},1e3);return()=>{clearTimeout(r),i!=null&&i.cleanup&&i.cleanup()}},[e]),lt.jsx("div",{ref:t,style:{minWidth:"250px",minHeight:"250px",width:"auto",height:"auto"}})},vg=({children:e,className:t,style:n,childStyle:i})=>{const{ref:a,inView:r}=pv({threshold:.85,triggerOnce:!0});return lt.jsx("div",{ref:a,className:`flex-reveal ${t} ${r?"flex-reveal-visible":"flex-reveal-hidden"}`,style:{display:"flex",width:"100%",...n},children:Dg.Children.map(e,(s,o)=>lt.jsx("div",{className:"flex-child",style:{transitionDelay:`${o*.5}s`,flex:"1",...i},children:s}))})},fR=({darkMode:e,toggleDarkMode:t})=>(Ie.useState({x:0,y:0}),lt.jsxs("div",{className:"settings",children:[lt.jsx("button",{className:"settings-icon",children:"⚙️"}),lt.jsxs("div",{className:`settings-menu-wrapper ${e?"dark-mode":"light-mode"}`,children:[" ",lt.jsx("div",{className:`settings-menu ${e?"dark-mode":"light-mode"}`,children:lt.jsxs("button",{onClick:t,className:"settingsMenuButton",children:[lt.jsx("img",{className:"clickableImage",src:`assets/Images/${e?"DarkMode.png":"LightMode.png"}`,alt:e?"Dark Mode":"Light Mode",style:{width:"25px",height:"25px",marginRight:"0.5rem"}}),e?"Switch to Light Mode":"Switch to Dark Mode"]})})]})]})),xg=({darkMode:e,text:t,onClick:n})=>(Ie.useState(!1),Ie.useState(!1),lt.jsx("button",{onClick:n,className:`minimal-button ${e?"dark-mode":"light-mode"}`,style:{padding:"10px 20px",cursor:"pointer"},children:t})),hR=({darkMode:e,isOpen:t,content:n,onClose:i})=>t?lt.jsx("div",{className:"lightbox-overlay",onClick:i,children:lt.jsxs("div",{className:`lightbox-content ${e?"dark-mode":"light-mode"}`,onClick:a=>a.stopPropagation(),children:[lt.jsx("button",{className:"close-button",onClick:i,children:"X"}),lt.jsx("div",{children:n})]})}):null,dR=()=>{const[e,t]=Ie.useState(!0),[n,i]=Ie.useState(!1),[a,r]=Ie.useState(null),s=c=>{r(c),i(!0)},o=()=>{i(!1)},l=()=>{t(c=>{const h=!c;return document.body.className=h?"dark-mode":"light-mode",h})};return lt.jsxs("div",{className:"app",children:[lt.jsx(hR,{darkMode:e,isOpen:n,content:a,onClose:o}),lt.jsxs("header",{className:`header ${e?"dark-mode":"light-mode"}`,children:[lt.jsxs("div",{children:[lt.jsx("img",{src:`assets/Images/Peregrine_${e?"dark.png":"light.png"}`,alt:"Logo",className:"logo",style:{marginBottom:"1rem",verticalAlign:"middle",objectFit:"contain",width:"50px",height:"50px",marginRight:"8px"}}),lt.jsx("h1",{style:{display:"inline-block",paddingLeft:"10px"},children:"Samuel Mckenzie-Sell"})]}),lt.jsx(fR,{darkMode:e,toggleDarkMode:l})]}),lt.jsxs("main",{className:`main ${e?"dark-mode":"light-mode"}`,children:[lt.jsx(sl,{title:"Section 1",darkMode:e,children:lt.jsxs("div",{className:"container",children:[lt.jsxs("div",{className:"column",style:{paddingLeft:"10%",flexGrow:"0"},children:[lt.jsxs("div",{style:{flex:"1",flexDirection:"vertical"},children:[lt.jsx("div",{style:{justifyContent:"center",padding:"2rem"},children:lt.jsx("h2",{style:{textAlign:"left",fontSize:"36",textWrap:"wrap",paddingLeft:"0rem"},children:"Let's make something amazing together!"})}),lt.jsx("p",{children:" I am a software engineer with a passion for creating innovative solutions. "}),lt.jsx("p",{children:" I have experience in various programming languages and frameworks. "}),lt.jsx("p",{children:" I enjoy collaborating with teams and solving complex problems. "})]}),lt.jsxs(vg,{style:{justifyContent:"center",alignItems:"center",marginTop:"2rem"},children:[lt.jsx(xg,{darkMode:e,text:"Resume",onClick:()=>window.open("assets/Files/Resume.pdf","_blank")}),lt.jsx("div",{className:"column",style:{flex:"0"},children:lt.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",target:"_blank",rel:"noreferer",children:lt.jsx("img",{className:"clickableImage",src:"assets/Images/linkedIn_logo.png",alt:"LinkedIn",style:{width:"100px",height:"100px",marginRight:"8px"}})})}),lt.jsx("div",{className:"column",style:{flex:"0"},children:lt.jsx("a",{href:"https://github.com/Peregrine777",target:"_blank",rel:"noreferer",children:lt.jsx("img",{className:"clickableImage",src:`assets/Images/github-logo_${e?"dark.png":"light.png"}`,alt:"GitHub",style:{width:"100px",height:"100px",marginRight:"8px"}})})})]})]}),lt.jsx("div",{className:"column",style:{flexShrink:"3"},children:lt.jsx("img",{src:"assets/Images/Profile.png",alt:"Profile",style:{maxWidth:"300px",verticalAlign:"middle",height:"auto"}})})]})}),lt.jsx(sl,{title:"Section 2",darkMode:e,children:lt.jsxs(vg,{style:{justifyContent:"center"},childStyle:{minWidth:"250px"},children:[lt.jsxs("div",{className:"majorColumn",children:[lt.jsx("h2",{style:{textAlign:"center"},children:"Game Development"}),lt.jsx("a",{href:"https://chanel-parfait.itch.io/gloria-armada",target:"_blank",rel:"noreferer",children:lt.jsx("img",{className:"clickableImage",src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})}),lt.jsx("h3",{children:"Gloria Armada"}),lt.jsx("p",{children:"Gloria Armada combines 2D shootemup genres but with physics based controls and a perspective that changes between top-down, side-on and rear aspect! "}),lt.jsx(xg,{darkMode:e,text:"More Info",onClick:()=>s(lt.jsxs("div",{style:{textAlign:"center"},children:[lt.jsx("h2",{children:"Gloria Armada"}),lt.jsx("p",{children:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"})]}))})]}),lt.jsxs("div",{className:"majorColumn",children:[lt.jsx("h2",{style:{textAlign:"center"},children:"Data Analysis"}),lt.jsx("p",{children:"Gloria Armada combines 2D shootemup genres but with physics based controls and a perspective that changes between top-down, side-on and rear aspect! "})]}),lt.jsxs("div",{className:"majorColumn",children:[lt.jsx("h2",{style:{textAlign:"center"},children:"Interactive Visualizations"}),lt.jsx("div",{className:"column-content",id:"threejsContainer",children:lt.jsx(uR,{darkMode:e,containerID:"threejsContainer"})})]})]})}),lt.jsx(sl,{title:"Section 3",darkMode:e}),lt.jsx(sl,{title:"Section 4",darkMode:e,children:lt.jsxs("div",{className:"container",children:[lt.jsx("div",{className:"column",style:{flexShrink:"3"},children:lt.jsx("img",{src:"assets/Images/Profile.png",alt:"Profile",style:{maxWidth:"300px",verticalAlign:"middle",height:"auto"}})}),lt.jsx("div",{className:"column",style:{paddingLeft:"10%",flexGrow:"0"}})]})})]})]})};YM.createRoot(document.getElementById("root")).render(lt.jsx(Dg.StrictMode,{children:lt.jsx(dR,{})}));
