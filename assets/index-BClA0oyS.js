var sx=Object.defineProperty;var ox=(e,t,n)=>t in e?sx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var As=(e,t,n)=>ox(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function wg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dg={exports:{}},Pc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=Symbol.for("react.transitional.element"),cx=Symbol.for("react.fragment");function Ug(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:lx,type:e,key:i,ref:t!==void 0?t:null,props:n}}Pc.Fragment=cx;Pc.jsx=Ug;Pc.jsxs=Ug;Dg.exports=Pc;var P=Dg.exports,Lg={exports:{}},zt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh=Symbol.for("react.transitional.element"),ux=Symbol.for("react.portal"),fx=Symbol.for("react.fragment"),hx=Symbol.for("react.strict_mode"),dx=Symbol.for("react.profiler"),px=Symbol.for("react.consumer"),mx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),_x=Symbol.for("react.suspense"),vx=Symbol.for("react.memo"),Ng=Symbol.for("react.lazy"),lp=Symbol.iterator;function xx(e){return e===null||typeof e!="object"?null:(e=lp&&e[lp]||e["@@iterator"],typeof e=="function"?e:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pg=Object.assign,zg={};function gs(e,t,n){this.props=e,this.context=t,this.refs=zg,this.updater=n||Og}gs.prototype.isReactComponent={};gs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bg(){}Bg.prototype=gs.prototype;function jh(e,t,n){this.props=e,this.context=t,this.refs=zg,this.updater=n||Og}var Zh=jh.prototype=new Bg;Zh.constructor=jh;Pg(Zh,gs.prototype);Zh.isPureReactComponent=!0;var cp=Array.isArray,pe={H:null,A:null,T:null,S:null},Ig=Object.prototype.hasOwnProperty;function Kh(e,t,n,i,a,r){return n=r.ref,{$$typeof:Yh,type:e,key:t,ref:n!==void 0?n:null,props:r}}function Sx(e,t){return Kh(e.type,t,void 0,void 0,void 0,e.props)}function Qh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yh}function yx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var up=/\/+/g;function ou(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yx(""+e.key):t.toString(36)}function fp(){}function Mx(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(fp,fp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function wr(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Yh:case ux:s=!0;break;case Ng:return s=e._init,wr(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+ou(e,0):i,cp(a)?(n="",s!=null&&(n=s.replace(up,"$&/")+"/"),wr(a,t,n,"",function(c){return c})):a!=null&&(Qh(a)&&(a=Sx(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(up,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(cp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+ou(i,l),s+=wr(i,t,n,r,a);else if(l=xx(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+ou(i,l++),s+=wr(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return wr(Mx(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Yo(e,t,n){if(e==null)return e;var i=[],a=0;return wr(e,i,"","",function(r){return t.call(n,r,a++)}),i}function Ex(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var hp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Tx(){}zt.Children={map:Yo,forEach:function(e,t,n){Yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yo(e,function(){t++}),t},toArray:function(e){return Yo(e,function(t){return t})||[]},only:function(e){if(!Qh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};zt.Component=gs;zt.Fragment=fx;zt.Profiler=dx;zt.PureComponent=jh;zt.StrictMode=hx;zt.Suspense=_x;zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pe;zt.act=function(){throw Error("act(...) is not supported in production builds of React.")};zt.cache=function(e){return function(){return e.apply(null,arguments)}};zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Pg({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!Ig.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Kh(e.type,a,void 0,void 0,r,i)};zt.createContext=function(e){return e={$$typeof:mx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:px,_context:e},e};zt.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Ig.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Kh(e,r,void 0,void 0,null,a)};zt.createRef=function(){return{current:null}};zt.forwardRef=function(e){return{$$typeof:gx,render:e}};zt.isValidElement=Qh;zt.lazy=function(e){return{$$typeof:Ng,_payload:{_status:-1,_result:e},_init:Ex}};zt.memo=function(e,t){return{$$typeof:vx,type:e,compare:t===void 0?null:t}};zt.startTransition=function(e){var t=pe.T,n={};pe.T=n;try{var i=e(),a=pe.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Tx,hp)}catch(r){hp(r)}finally{pe.T=t}};zt.unstable_useCacheRefresh=function(){return pe.H.useCacheRefresh()};zt.use=function(e){return pe.H.use(e)};zt.useActionState=function(e,t,n){return pe.H.useActionState(e,t,n)};zt.useCallback=function(e,t){return pe.H.useCallback(e,t)};zt.useContext=function(e){return pe.H.useContext(e)};zt.useDebugValue=function(){};zt.useDeferredValue=function(e,t){return pe.H.useDeferredValue(e,t)};zt.useEffect=function(e,t){return pe.H.useEffect(e,t)};zt.useId=function(){return pe.H.useId()};zt.useImperativeHandle=function(e,t,n){return pe.H.useImperativeHandle(e,t,n)};zt.useInsertionEffect=function(e,t){return pe.H.useInsertionEffect(e,t)};zt.useLayoutEffect=function(e,t){return pe.H.useLayoutEffect(e,t)};zt.useMemo=function(e,t){return pe.H.useMemo(e,t)};zt.useOptimistic=function(e,t){return pe.H.useOptimistic(e,t)};zt.useReducer=function(e,t,n){return pe.H.useReducer(e,t,n)};zt.useRef=function(e){return pe.H.useRef(e)};zt.useState=function(e){return pe.H.useState(e)};zt.useSyncExternalStore=function(e,t,n){return pe.H.useSyncExternalStore(e,t,n)};zt.useTransition=function(){return pe.H.useTransition()};zt.version="19.0.0";Lg.exports=zt;var kt=Lg.exports;const zc=wg(kt);var Fg={exports:{}},Bc={},Hg={exports:{}},Gg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,G){var B=N.length;N.push(G);t:for(;0<B;){var et=B-1>>>1,rt=N[et];if(0<a(rt,G))N[et]=G,N[B]=rt,B=et;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var G=N[0],B=N.pop();if(B!==G){N[0]=B;t:for(var et=0,rt=N.length,pt=rt>>>1;et<pt;){var Bt=2*(et+1)-1,Yt=N[Bt],X=Bt+1,tt=N[X];if(0>a(Yt,B))X<rt&&0>a(tt,Yt)?(N[et]=tt,N[X]=B,et=X):(N[et]=Yt,N[Bt]=B,et=Bt);else if(X<rt&&0>a(tt,B))N[et]=tt,N[X]=B,et=X;else break t}}return G}function a(N,G){var B=N.sortIndex-G.sortIndex;return B!==0?B:N.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,d=null,f=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function g(N){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=N)i(c),G.sortIndex=G.expirationTime,t(l,G);else break;G=n(c)}}function y(N){if(x=!1,g(N),!v)if(n(l)!==null)v=!0,Z();else{var G=n(c);G!==null&&j(y,G.startTime-N)}}var C=!1,A=-1,b=5,U=-1;function T(){return!(e.unstable_now()-U<b)}function M(){if(C){var N=e.unstable_now();U=N;var G=!0;try{t:{v=!1,x&&(x=!1,u(A),A=-1),p=!0;var B=f;try{e:{for(g(N),d=n(l);d!==null&&!(d.expirationTime>N&&T());){var et=d.callback;if(typeof et=="function"){d.callback=null,f=d.priorityLevel;var rt=et(d.expirationTime<=N);if(N=e.unstable_now(),typeof rt=="function"){d.callback=rt,g(N),G=!0;break e}d===n(l)&&i(l),g(N)}else i(l);d=n(l)}if(d!==null)G=!0;else{var pt=n(c);pt!==null&&j(y,pt.startTime-N),G=!1}}break t}finally{d=null,f=B,p=!1}G=void 0}}finally{G?D():C=!1}}}var D;if(typeof _=="function")D=function(){_(M)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,k=W.port2;W.port1.onmessage=M,D=function(){k.postMessage(null)}}else D=function(){m(M,0)};function Z(){C||(C=!0,D())}function j(N,G){A=m(function(){N(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,Z())},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var B=f;f=G;try{return N()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=f;f=N;try{return G()}finally{f=B}},e.unstable_scheduleCallback=function(N,G,B){var et=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?et+B:et):B=et,N){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=B+rt,N={id:h++,callback:G,priorityLevel:N,startTime:B,expirationTime:rt,sortIndex:-1},B>et?(N.sortIndex=B,t(c,N),n(l)===null&&N===n(c)&&(x?(u(A),A=-1):x=!0,j(y,B-et))):(N.sortIndex=rt,t(l,N),v||p||(v=!0,Z())),N},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(N){var G=f;return function(){var B=f;f=G;try{return N.apply(this,arguments)}finally{f=B}}}})(Gg);Hg.exports=Gg;var bx=Hg.exports,Vg={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax=kt;function kg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Hi(){}var $e={d:{f:Hi,r:function(){throw Error(kg(522))},D:Hi,C:Hi,L:Hi,m:Hi,X:Hi,S:Hi,M:Hi},p:0,findDOMNode:null},Rx=Symbol.for("react.portal");function Cx(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rx,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ys=Ax.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ic(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$e;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(kg(299));return Cx(e,t,null,n)};en.flushSync=function(e){var t=Ys.T,n=$e.p;try{if(Ys.T=null,$e.p=2,e)return e()}finally{Ys.T=t,$e.p=n,$e.d.f()}};en.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,$e.d.C(e,t))};en.prefetchDNS=function(e){typeof e=="string"&&$e.d.D(e)};en.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Ic(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?$e.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&$e.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};en.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ic(t.as,t.crossOrigin);$e.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&$e.d.M(e)};en.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Ic(n,t.crossOrigin);$e.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};en.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ic(t.as,t.crossOrigin);$e.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else $e.d.m(e)};en.requestFormReset=function(e){$e.d.r(e)};en.unstable_batchedUpdates=function(e,t){return e(t)};en.useFormState=function(e,t,n){return Ys.H.useFormState(e,t,n)};en.useFormStatus=function(){return Ys.H.useHostTransitionStatus()};en.version="19.0.0";function Xg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xg)}catch(e){console.error(e)}}Xg(),Vg.exports=en;var wx=Vg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne=bx,Wg=kt,Dx=wx;function q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var Ux=Symbol.for("react.element"),jo=Symbol.for("react.transitional.element"),Gs=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),Yg=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),jg=Symbol.for("react.consumer"),Ti=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),xf=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),Nx=Symbol.for("react.memo_cache_sentinel"),dp=Symbol.iterator;function Rs(e){return e===null||typeof e!="object"?null:(e=dp&&e[dp]||e["@@iterator"],typeof e=="function"?e:null)}var Ox=Symbol.for("react.client.reference");function Sf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ox?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nr:return"Fragment";case Gs:return"Portal";case _f:return"Profiler";case Yg:return"StrictMode";case vf:return"Suspense";case xf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ti:return(e.displayName||"Context")+".Provider";case jg:return(e._context.displayName||"Context")+".Consumer";case Jh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $h:return t=e.displayName||null,t!==null?t:Sf(e.type)||"Memo";case Zi:t=e._payload,e=e._init;try{return Sf(e(t))}catch{}}return null}var Lt=Wg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Object.assign,lu,pp;function Vs(e){if(lu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);lu=t&&t[1]||"",pp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lu+e+pp}var cu=!1;function uu(e,t){if(!e||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Vs(n):""}function Px(e){switch(e.tag){case 26:case 27:case 5:return Vs(e.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 15:return e=uu(e.type,!1),e;case 11:return e=uu(e.type.render,!1),e;case 1:return e=uu(e.type,!0),e;default:return""}}function mp(e){try{var t="";do t+=Px(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function _s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gp(e){if(_s(e)!==e)throw Error(q(188))}function zx(e){var t=e.alternate;if(!t){if(t=_s(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return gp(a),e;if(r===i)return gp(a),t;r=r.sibling}throw Error(q(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(q(189))}}if(n.alternate!==i)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function Qg(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Qg(e),t!==null)return t;e=e.sibling}return null}var ks=Array.isArray,ce=Dx.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Va={pending:!1,data:null,method:null,action:null},yf=[],Or=-1;function oi(e){return{current:e}}function Ge(e){0>Or||(e.current=yf[Or],yf[Or]=null,Or--)}function fe(e,t){Or++,yf[Or]=e.current,e.current=t}var ei=oi(null),uo=oi(null),aa=oi(null),ec=oi(null);function nc(e,t){switch(fe(aa,t),fe(uo,e),fe(ei,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?_m(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=_m(e),t=cv(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ge(ei),fe(ei,t)}function ns(){Ge(ei),Ge(uo),Ge(aa)}function Mf(e){e.memoizedState!==null&&fe(ec,e);var t=ei.current,n=cv(t,e.type);t!==n&&(fe(uo,e),fe(ei,n))}function ic(e){uo.current===e&&(Ge(ei),Ge(uo)),ec.current===e&&(Ge(ec),Mo._currentValue=Va)}var Ef=Object.prototype.hasOwnProperty,td=Ne.unstable_scheduleCallback,fu=Ne.unstable_cancelCallback,Bx=Ne.unstable_shouldYield,Ix=Ne.unstable_requestPaint,ni=Ne.unstable_now,Fx=Ne.unstable_getCurrentPriorityLevel,Jg=Ne.unstable_ImmediatePriority,$g=Ne.unstable_UserBlockingPriority,ac=Ne.unstable_NormalPriority,Hx=Ne.unstable_LowPriority,t_=Ne.unstable_IdlePriority,Gx=Ne.log,Vx=Ne.unstable_setDisableYieldValue,Ro=null,vn=null;function kx(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}function na(e){if(typeof Gx=="function"&&Vx(e),vn&&typeof vn.setStrictMode=="function")try{vn.setStrictMode(Ro,e)}catch{}}var xn=Math.clz32?Math.clz32:qx,Xx=Math.log,Wx=Math.LN2;function qx(e){return e>>>=0,e===0?32:31-(Xx(e)/Wx|0)|0}var Zo=128,Ko=4194304;function Ua(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fc(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,a=e.suspendedLanes,r=e.pingedLanes,s=e.warmLanes;e=e.finishedLanes!==0;var o=n&134217727;return o!==0?(n=o&~a,n!==0?i=Ua(n):(r&=o,r!==0?i=Ua(r):e||(s=o&~s,s!==0&&(i=Ua(s))))):(o=n&~a,o!==0?i=Ua(o):r!==0?i=Ua(r):e||(s=n&~s,s!==0&&(i=Ua(s)))),i===0?0:t!==0&&t!==i&&!(t&a)&&(a=i&-i,s=t&-t,a>=s||a===32&&(s&4194176)!==0)?t:i}function Co(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Yx(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e_(){var e=Zo;return Zo<<=1,!(Zo&4194176)&&(Zo=128),e}function n_(){var e=Ko;return Ko<<=1,!(Ko&62914560)&&(Ko=4194304),e}function hu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function jx(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var h=31-xn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&i_(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function i_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-xn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194218}function a_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-xn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function r_(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function s_(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:xv(e.type))}function Zx(e,t){var n=ce.p;try{return ce.p=e,t()}finally{ce.p=n}}var xa=Math.random().toString(36).slice(2),Ze="__reactFiber$"+xa,cn="__reactProps$"+xa,vs="__reactContainer$"+xa,Tf="__reactEvents$"+xa,Kx="__reactListeners$"+xa,Qx="__reactHandles$"+xa,_p="__reactResources$"+xa,fo="__reactMarker$"+xa;function ed(e){delete e[Ze],delete e[cn],delete e[Tf],delete e[Kx],delete e[Qx]}function Ia(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vs]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xm(e);e!==null;){if(n=e[Ze])return n;e=xm(e)}return t}e=n,n=e.parentNode}return null}function xs(e){if(e=e[Ze]||e[vs]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Xs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(q(33))}function Wr(e){var t=e[_p];return t||(t=e[_p]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[fo]=!0}var o_=new Set,l_={};function nr(e,t){is(e,t),is(e+"Capture",t)}function is(e,t){for(l_[e]=t,e=0;e<t.length;e++)o_.add(t[e])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vp={},xp={};function $x(e){return Ef.call(xp,e)?!0:Ef.call(vp,e)?!1:Jx.test(e)?xp[e]=!0:(vp[e]=!0,!1)}function Bl(e,t,n){if($x(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ui(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function c_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tS(e){var t=c_(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rc(e){e._valueTracker||(e._valueTracker=tS(e))}function u_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=c_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function sc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var eS=/[\n"\\]/g;function Un(e){return e.replace(eS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rn(t)):e.value!==""+Rn(t)&&(e.value=""+Rn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Af(e,s,Rn(t)):n!=null?Af(e,s,Rn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Rn(o):e.removeAttribute("name")}function f_(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Rn(n):"",t=t!=null?""+Rn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Af(e,t,n){t==="number"&&sc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function qr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function h_(e,t,n){if(t!=null&&(t=""+Rn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Rn(n):""}function d_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(q(92));if(ks(i)){if(1<i.length)throw Error(q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Rn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function as(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||nS.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function p_(e,t,n){if(t!=null&&typeof t!="object")throw Error(q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Sp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&Sp(e,r,t[r])}function nd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return aS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Rf=null;function id(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,Yr=null;function yp(e){var t=xs(e);if(t&&(e=t.stateNode)){var n=e[cn]||null;t:switch(e=t.stateNode,t.type){case"input":if(bf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Un(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[cn]||null;if(!a)throw Error(q(90));bf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&u_(i)}break t;case"textarea":h_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&qr(e,!!n.multiple,t,!1)}}}var du=!1;function m_(e,t,n){if(du)return e(t,n);du=!0;try{var i=e(t);return i}finally{if(du=!1,(Pr!==null||Yr!==null)&&(Zc(),Pr&&(t=Pr,e=Yr,Yr=Pr=null,yp(t),e)))for(t=0;t<e.length;t++)yp(e[t])}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var i=n[cn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var Cf=!1;if(Li)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Cf=!1}var ia=null,ad=null,Fl=null;function g_(){if(Fl)return Fl;var e,t=ad,n=t.length,i,a="value"in ia?ia.value:ia.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Fl=a.slice(e,1<i?1-i:void 0)}function Hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Mp(){return!1}function un(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Jo:Mp,this.isPropagationStopped=Mp,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hc=un(ir),Do=ue({},ir,{view:0,detail:0}),rS=un(Do),pu,mu,ws,Gc=ue({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ws&&(ws&&e.type==="mousemove"?(pu=e.screenX-ws.screenX,mu=e.screenY-ws.screenY):mu=pu=0,ws=e),pu)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),Ep=un(Gc),sS=ue({},Gc,{dataTransfer:0}),oS=un(sS),lS=ue({},Do,{relatedTarget:0}),gu=un(lS),cS=ue({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=un(cS),fS=ue({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hS=un(fS),dS=ue({},ir,{data:0}),Tp=un(dS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gS[e])?!!t[e]:!1}function rd(){return _S}var vS=ue({},Do,{key:function(e){if(e.key){var t=pS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xS=un(vS),SS=ue({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=un(SS),yS=ue({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),MS=un(yS),ES=ue({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=un(ES),bS=ue({},Gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),AS=un(bS),RS=ue({},ir,{newState:0,oldState:0}),CS=un(RS),wS=[9,13,27,32],sd=Li&&"CompositionEvent"in window,js=null;Li&&"documentMode"in document&&(js=document.documentMode);var DS=Li&&"TextEvent"in window&&!js,__=Li&&(!sd||js&&8<js&&11>=js),Ap=" ",Rp=!1;function v_(e,t){switch(e){case"keyup":return wS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function US(e,t){switch(e){case"compositionend":return x_(t);case"keypress":return t.which!==32?null:(Rp=!0,Ap);case"textInput":return e=t.data,e===Ap&&Rp?null:e;default:return null}}function LS(e,t){if(zr)return e==="compositionend"||!sd&&v_(e,t)?(e=g_(),Fl=ad=ia=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return __&&t.locale!=="ko"?null:t.data;default:return null}}var NS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!NS[e.type]:t==="textarea"}function S_(e,t,n,i){Pr?Yr?Yr.push(i):Yr=[i]:Pr=i,t=Mc(t,"onChange"),0<t.length&&(n=new Hc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Zs=null,po=null;function OS(e){sv(e,0)}function Vc(e){var t=Xs(e);if(u_(t))return e}function wp(e,t){if(e==="change")return t}var y_=!1;if(Li){var _u;if(Li){var vu="oninput"in document;if(!vu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),vu=typeof Dp.oninput=="function"}_u=vu}else _u=!1;y_=_u&&(!document.documentMode||9<document.documentMode)}function Up(){Zs&&(Zs.detachEvent("onpropertychange",M_),po=Zs=null)}function M_(e){if(e.propertyName==="value"&&Vc(po)){var t=[];S_(t,po,e,id(e)),m_(OS,t)}}function PS(e,t,n){e==="focusin"?(Up(),Zs=t,po=n,Zs.attachEvent("onpropertychange",M_)):e==="focusout"&&Up()}function zS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vc(po)}function BS(e,t){if(e==="click")return Vc(t)}function IS(e,t){if(e==="input"||e==="change")return Vc(t)}function FS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yn=typeof Object.is=="function"?Object.is:FS;function mo(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Ef.call(t,a)||!yn(e[a],t[a]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,t){var n=Lp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Lp(n)}}function E_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?E_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function T_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=sc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sc(e.document)}return t}function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function HS(e,t){var n=T_(t);t=e.focusedElem;var i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&E_(t.ownerDocument.documentElement,t)){if(i!==null&&od(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=t.textContent.length,r=Math.min(i.start,a);i=i.end===void 0?r:Math.min(i.end,a),!n.extend&&r>i&&(a=i,i=r,r=a),a=Np(t,r);var s=Np(t,i);a&&s&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),r>i?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var GS=Li&&"documentMode"in document&&11>=document.documentMode,Br=null,wf=null,Ks=null,Df=!1;function Op(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||Br==null||Br!==sc(i)||(i=Br,"selectionStart"in i&&od(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ks&&mo(Ks,i)||(Ks=i,i=Mc(wf,"onSelect"),0<i.length&&(t=new Hc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Br)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},xu={},b_={};Li&&(b_=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function ar(e){if(xu[e])return xu[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in b_)return xu[e]=t[n];return e}var A_=ar("animationend"),R_=ar("animationiteration"),C_=ar("animationstart"),VS=ar("transitionrun"),kS=ar("transitionstart"),XS=ar("transitioncancel"),w_=ar("transitionend"),D_=new Map,Pp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function jn(e,t){D_.set(e,t),nr(t,[e])}var An=[],Fr=0,ld=0;function kc(){for(var e=Fr,t=ld=Fr=0;t<e;){var n=An[t];An[t++]=null;var i=An[t];An[t++]=null;var a=An[t];An[t++]=null;var r=An[t];if(An[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&U_(n,a,r)}}function Xc(e,t,n,i){An[Fr++]=e,An[Fr++]=t,An[Fr++]=n,An[Fr++]=i,ld|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function cd(e,t,n,i){return Xc(e,t,n,i),oc(e)}function pa(e,t){return Xc(e,null,null,t),oc(e)}function U_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;a&&t!==null&&e.tag===3&&(r=e.stateNode,a=31-xn(n),r=r.hiddenUpdates,e=r[a],e===null?r[a]=[t]:e.push(t),t.lane=n|536870912)}function oc(e){if(50<lo)throw lo=0,Jf=null,Error(q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hr={},zp=new WeakMap;function Ln(e,t){if(typeof e=="object"&&e!==null){var n=zp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:mp(t)},zp.set(e,t),t)}return{value:e,source:t,stack:mp(t)}}var Gr=[],Vr=0,lc=null,cc=0,Cn=[],wn=0,ka=null,bi=1,Ai="";function La(e,t){Gr[Vr++]=cc,Gr[Vr++]=lc,lc=e,cc=t}function L_(e,t,n){Cn[wn++]=bi,Cn[wn++]=Ai,Cn[wn++]=ka,ka=e;var i=bi;e=Ai;var a=32-xn(i)-1;i&=~(1<<a),n+=1;var r=32-xn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,bi=1<<32-xn(t)+a|n<<a|i,Ai=r+e}else bi=1<<r|n<<a|i,Ai=e}function ud(e){e.return!==null&&(La(e,1),L_(e,1,0))}function fd(e){for(;e===lc;)lc=Gr[--Vr],Gr[Vr]=null,cc=Gr[--Vr],Gr[Vr]=null;for(;e===ka;)ka=Cn[--wn],Cn[wn]=null,Ai=Cn[--wn],Cn[wn]=null,bi=Cn[--wn],Cn[wn]=null}var Je=null,We=null,jt=!1,kn=null,Jn=!1,Uf=Error(q(519));function Za(e){var t=Error(q(418,""));throw go(Ln(t,e)),Uf}function Bp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ze]=e,t[cn]=i,n){case"dialog":Vt("cancel",t),Vt("close",t);break;case"iframe":case"object":case"embed":Vt("load",t);break;case"video":case"audio":for(n=0;n<xo.length;n++)Vt(xo[n],t);break;case"source":Vt("error",t);break;case"img":case"image":case"link":Vt("error",t),Vt("load",t);break;case"details":Vt("toggle",t);break;case"input":Vt("invalid",t),f_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),rc(t);break;case"select":Vt("invalid",t);break;case"textarea":Vt("invalid",t),d_(t,i.value,i.defaultValue,i.children),rc(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||lv(t.textContent,n)?(i.popover!=null&&(Vt("beforetoggle",t),Vt("toggle",t)),i.onScroll!=null&&Vt("scroll",t),i.onScrollEnd!=null&&Vt("scrollend",t),i.onClick!=null&&(t.onclick=Qc),t=!0):t=!1,t||Za(e)}function Ip(e){for(Je=e.return;Je;)switch(Je.tag){case 3:case 27:Jn=!0;return;case 5:case 13:Jn=!1;return;default:Je=Je.return}}function Ds(e){if(e!==Je)return!1;if(!jt)return Ip(e),jt=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||rh(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&We&&Za(e),Ip(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){We=Yn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}We=null}}else We=Je?Yn(e.stateNode.nextSibling):null;return!0}function Uo(){We=Je=null,jt=!1}function go(e){kn===null?kn=[e]:kn.push(e)}var Qs=Error(q(460)),N_=Error(q(474)),Lf={then:function(){}};function Fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $o(){}function O_(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($o,$o),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Qs?Error(q(483)):e;default:if(typeof t.status=="string")t.then($o,$o);else{if(e=oe,e!==null&&100<e.shellSuspendCounter)throw Error(q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Qs?Error(q(483)):e}throw Js=t,Qs}}var Js=null;function Hp(){if(Js===null)throw Error(q(459));var e=Js;return Js=null,e}var jr=null,_o=0;function tl(e){var t=_o;return _o+=1,jr===null&&(jr=[]),O_(jr,e,t)}function Us(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function el(e,t){throw t.$$typeof===Ux?Error(q(525)):(e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Gp(e){var t=e._init;return t(e._payload)}function P_(e){function t(u,_){if(e){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!e)return null;for(;_!==null;)t(u,_),_=_.sibling;return null}function i(u){for(var _=new Map;u!==null;)u.key!==null?_.set(u.key,u):_.set(u.index,u),u=u.sibling;return _}function a(u,_){return u=oa(u,_),u.index=0,u.sibling=null,u}function r(u,_,g){return u.index=g,e?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=33554434,_):g):(u.flags|=33554434,_)):(u.flags|=1048576,_)}function s(u){return e&&u.alternate===null&&(u.flags|=33554434),u}function o(u,_,g,y){return _===null||_.tag!==6?(_=Uu(g,u.mode,y),_.return=u,_):(_=a(_,g),_.return=u,_)}function l(u,_,g,y){var C=g.type;return C===Nr?h(u,_,g.props.children,y,g.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zi&&Gp(C)===_.type)?(_=a(_,g.props),Us(_,g),_.return=u,_):(_=Wl(g.type,g.key,g.props,null,u.mode,y),Us(_,g),_.return=u,_)}function c(u,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Lu(g,u.mode,y),_.return=u,_):(_=a(_,g.children||[]),_.return=u,_)}function h(u,_,g,y,C){return _===null||_.tag!==7?(_=Wa(g,u.mode,y,C),_.return=u,_):(_=a(_,g),_.return=u,_)}function d(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Uu(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:return g=Wl(_.type,_.key,_.props,null,u.mode,g),Us(g,_),g.return=u,g;case Gs:return _=Lu(_,u.mode,g),_.return=u,_;case Zi:var y=_._init;return _=y(_._payload),d(u,_,g)}if(ks(_)||Rs(_))return _=Wa(_,u.mode,g,null),_.return=u,_;if(typeof _.then=="function")return d(u,tl(_),g);if(_.$$typeof===Ti)return d(u,nl(u,_),g);el(u,_)}return null}function f(u,_,g,y){var C=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return C!==null?null:o(u,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case jo:return g.key===C?l(u,_,g,y):null;case Gs:return g.key===C?c(u,_,g,y):null;case Zi:return C=g._init,g=C(g._payload),f(u,_,g,y)}if(ks(g)||Rs(g))return C!==null?null:h(u,_,g,y,null);if(typeof g.then=="function")return f(u,_,tl(g),y);if(g.$$typeof===Ti)return f(u,_,nl(u,g),y);el(u,g)}return null}function p(u,_,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(g)||null,o(_,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case jo:return u=u.get(y.key===null?g:y.key)||null,l(_,u,y,C);case Gs:return u=u.get(y.key===null?g:y.key)||null,c(_,u,y,C);case Zi:var A=y._init;return y=A(y._payload),p(u,_,g,y,C)}if(ks(y)||Rs(y))return u=u.get(g)||null,h(_,u,y,C,null);if(typeof y.then=="function")return p(u,_,g,tl(y),C);if(y.$$typeof===Ti)return p(u,_,g,nl(_,y),C);el(_,y)}return null}function v(u,_,g,y){for(var C=null,A=null,b=_,U=_=0,T=null;b!==null&&U<g.length;U++){b.index>U?(T=b,b=null):T=b.sibling;var M=f(u,b,g[U],y);if(M===null){b===null&&(b=T);break}e&&b&&M.alternate===null&&t(u,b),_=r(M,_,U),A===null?C=M:A.sibling=M,A=M,b=T}if(U===g.length)return n(u,b),jt&&La(u,U),C;if(b===null){for(;U<g.length;U++)b=d(u,g[U],y),b!==null&&(_=r(b,_,U),A===null?C=b:A.sibling=b,A=b);return jt&&La(u,U),C}for(b=i(b);U<g.length;U++)T=p(b,u,U,g[U],y),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?U:T.key),_=r(T,_,U),A===null?C=T:A.sibling=T,A=T);return e&&b.forEach(function(D){return t(u,D)}),jt&&La(u,U),C}function x(u,_,g,y){if(g==null)throw Error(q(151));for(var C=null,A=null,b=_,U=_=0,T=null,M=g.next();b!==null&&!M.done;U++,M=g.next()){b.index>U?(T=b,b=null):T=b.sibling;var D=f(u,b,M.value,y);if(D===null){b===null&&(b=T);break}e&&b&&D.alternate===null&&t(u,b),_=r(D,_,U),A===null?C=D:A.sibling=D,A=D,b=T}if(M.done)return n(u,b),jt&&La(u,U),C;if(b===null){for(;!M.done;U++,M=g.next())M=d(u,M.value,y),M!==null&&(_=r(M,_,U),A===null?C=M:A.sibling=M,A=M);return jt&&La(u,U),C}for(b=i(b);!M.done;U++,M=g.next())M=p(b,u,U,M.value,y),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?U:M.key),_=r(M,_,U),A===null?C=M:A.sibling=M,A=M);return e&&b.forEach(function(W){return t(u,W)}),jt&&La(u,U),C}function m(u,_,g,y){if(typeof g=="object"&&g!==null&&g.type===Nr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case jo:t:{for(var C=g.key;_!==null;){if(_.key===C){if(C=g.type,C===Nr){if(_.tag===7){n(u,_.sibling),y=a(_,g.props.children),y.return=u,u=y;break t}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zi&&Gp(C)===_.type){n(u,_.sibling),y=a(_,g.props),Us(y,g),y.return=u,u=y;break t}n(u,_);break}else t(u,_);_=_.sibling}g.type===Nr?(y=Wa(g.props.children,u.mode,y,g.key),y.return=u,u=y):(y=Wl(g.type,g.key,g.props,null,u.mode,y),Us(y,g),y.return=u,u=y)}return s(u);case Gs:t:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),y=a(_,g.children||[]),y.return=u,u=y;break t}else{n(u,_);break}else t(u,_);_=_.sibling}y=Lu(g,u.mode,y),y.return=u,u=y}return s(u);case Zi:return C=g._init,g=C(g._payload),m(u,_,g,y)}if(ks(g))return v(u,_,g,y);if(Rs(g)){if(C=Rs(g),typeof C!="function")throw Error(q(150));return g=C.call(g),x(u,_,g,y)}if(typeof g.then=="function")return m(u,_,tl(g),y);if(g.$$typeof===Ti)return m(u,_,nl(u,g),y);el(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),y=a(_,g),y.return=u,u=y):(n(u,_),y=Uu(g,u.mode,y),y.return=u,u=y),s(u)):n(u,_)}return function(u,_,g,y){try{_o=0;var C=m(u,_,g,y);return jr=null,C}catch(b){if(b===Qs)throw b;var A=Nn(29,b,null,u.mode);return A.lanes=y,A.return=u,A}finally{}}}var Ka=P_(!0),z_=P_(!1),rs=oi(null),uc=oi(0);function Vp(e,t){e=Pi,fe(uc,e),fe(rs,t),Pi=e|t.baseLanes}function Nf(){fe(uc,Pi),fe(rs,rs.current)}function hd(){Pi=uc.current,Ge(rs),Ge(uc)}var zn=oi(null),ii=null;function Qi(e){var t=e.alternate;fe(Le,Le.current&1),fe(zn,e),ii===null&&(t===null||rs.current!==null||t.memoizedState!==null)&&(ii=e)}function B_(e){if(e.tag===22){if(fe(Le,Le.current),fe(zn,e),ii===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ii=e)}}else Ji()}function Ji(){fe(Le,Le.current),fe(zn,zn.current)}function Ri(e){Ge(zn),ii===e&&(ii=null),Ge(Le)}var Le=oi(0);function fc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var WS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},qS=Ne.unstable_scheduleCallback,YS=Ne.unstable_NormalPriority,Ue={$$typeof:Ti,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dd(){return{controller:new WS,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&qS(YS,function(){e.controller.abort()})}var $s=null,Of=0,ss=0,Zr=null;function jS(e,t){if($s===null){var n=$s=[];Of=0,ss=zd(),Zr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Of++,t.then(kp,kp),t}function kp(){if(--Of===0&&$s!==null){Zr!==null&&(Zr.status="fulfilled");var e=$s;$s=null,ss=0,Zr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ZS(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Xp=Lt.S;Lt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&jS(e,t),Xp!==null&&Xp(e,t)};var Xa=oi(null);function pd(){var e=Xa.current;return e!==null?e:oe.pooledCache}function Gl(e,t){t===null?fe(Xa,Xa.current):fe(Xa,t.pool)}function I_(){var e=pd();return e===null?null:{parent:Ue._currentValue,pool:e}}var ma=0,It=null,ae=null,Ce=null,hc=!1,Kr=!1,Qa=!1,dc=0,vo=0,Qr=null,KS=0;function ye(){throw Error(q(321))}function md(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yn(e[n],t[n]))return!1;return!0}function gd(e,t,n,i,a,r){return ma=r,It=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lt.H=e===null||e.memoizedState===null?rr:Sa,Qa=!1,r=n(i,a),Qa=!1,Kr&&(r=H_(t,n,i,a)),F_(e),r}function F_(e){Lt.H=ri;var t=ae!==null&&ae.next!==null;if(ma=0,Ce=ae=It=null,hc=!1,vo=0,Qr=null,t)throw Error(q(300));e===null||He||(e=e.dependencies,e!==null&&gc(e)&&(He=!0))}function H_(e,t,n,i){It=e;var a=0;do{if(Kr&&(Qr=null),vo=0,Kr=!1,25<=a)throw Error(q(301));if(a+=1,Ce=ae=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Lt.H=sr,r=t(n,i)}while(Kr);return r}function QS(){var e=Lt.H,t=e.useState()[0];return t=typeof t.then=="function"?No(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(It.flags|=1024),t}function _d(){var e=dc!==0;return dc=0,e}function vd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xd(e){if(hc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hc=!1}ma=0,Ce=ae=It=null,Kr=!1,vo=dc=0,Qr=null}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?It.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function we(){if(ae===null){var e=It.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=Ce===null?It.memoizedState:Ce.next;if(t!==null)Ce=t,ae=e;else{if(e===null)throw It.alternate===null?Error(q(467)):Error(q(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},Ce===null?It.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}var Wc;Wc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function No(e){var t=vo;return vo+=1,Qr===null&&(Qr=[]),e=O_(Qr,e,t),t=It,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,Lt.H=t===null||t.memoizedState===null?rr:Sa),e}function qc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===Ti)return Ke(e)}throw Error(q(438,String(e)))}function Sd(e){var t=null,n=It.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=It.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Wc(),It.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Nx;return t.index++,n}function Ni(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=we();return yd(t,ae,e)}function yd(e,t,n){var i=e.queue;if(i===null)throw Error(q(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Wt&d)===d:(ma&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===ss&&(h=!0);else if((ma&f)===f){c=c.next,f===ss&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,It.lanes|=f,_a|=f;d=c.action,Qa&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,It.lanes|=d,_a|=d;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!yn(r,e.memoizedState)&&(He=!0,h&&(n=Zr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Su(e){var t=we(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);yn(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function G_(e,t,n){var i=It,a=we(),r=jt;if(r){if(n===void 0)throw Error(q(407));n=n()}else n=t();var s=!yn((ae||a).memoizedState,n);if(s&&(a.memoizedState=n,He=!0),a=a.queue,Md(X_.bind(null,i,a,e),[e]),a.getSnapshot!==t||s||Ce!==null&&Ce.memoizedState.tag&1){if(i.flags|=2048,os(9,k_.bind(null,i,a,n,t),{destroy:void 0},null),oe===null)throw Error(q(349));r||ma&60||V_(i,t,n)}return n}function V_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=It.updateQueue,t===null?(t=Wc(),It.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function k_(e,t,n,i){t.value=n,t.getSnapshot=i,W_(t)&&q_(e)}function X_(e,t,n){return n(function(){W_(t)&&q_(e)})}function W_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yn(e,n)}catch{return!0}}function q_(e){var t=pa(e,2);t!==null&&tn(t,e,2)}function Pf(e){var t=an();if(typeof e=="function"){var n=e;if(e=n(),Qa){na(!0);try{n()}finally{na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},t}function Y_(e,t,n,i){return e.baseState=n,yd(e,ae,typeof i=="function"?i:Ni)}function JS(e,t,n,i,a){if(jc(e))throw Error(q(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Lt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,j_(t,r)):(r.next=n.next,t.pending=n.next=r)}}function j_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Lt.T,s={};Lt.T=s;try{var o=n(a,i),l=Lt.S;l!==null&&l(s,o),Wp(e,t,o)}catch(c){zf(e,t,c)}finally{Lt.T=r}}else try{r=n(a,i),Wp(e,t,r)}catch(c){zf(e,t,c)}}function Wp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){qp(e,t,i)},function(i){return zf(e,t,i)}):qp(e,t,n)}function qp(e,t,n){t.status="fulfilled",t.value=n,Z_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,j_(e,n)))}function zf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Z_(t),t=t.next;while(t!==i)}e.action=null}function Z_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function K_(e,t){return t}function Q_(e,t){if(jt){var n=oe.formState;if(n!==null){t:{var i=It;if(jt){if(We){e:{for(var a=We,r=Jn;a.nodeType!==8;){if(!r){a=null;break e}if(a=Yn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){We=Yn(a.nextSibling),i=a.data==="F!";break t}}Za(i)}i=!1}i&&(t=n[0])}}return n=an(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:K_,lastRenderedState:t},n.queue=i,n=p0.bind(null,It,i),i.dispatch=n,i=Pf(!1),r=Ad.bind(null,It,!1,i.queue),i=an(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=JS.bind(null,It,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function J_(e){var t=we();return $_(t,ae,e)}function $_(e,t,n){t=yd(e,t,K_)[0],e=Vl(Ni)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?No(t):t;var i=we(),a=i.queue,r=a.dispatch;return n!==i.memoizedState&&(It.flags|=2048,os(9,$S.bind(null,a,n),{destroy:void 0},null)),[t,r,e]}function $S(e,t){e.action=t}function t0(e){var t=we(),n=ae;if(n!==null)return $_(t,n,e);we(),t=t.memoizedState,n=we();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function os(e,t,n,i){return e={tag:e,create:t,inst:n,deps:i,next:null},t=It.updateQueue,t===null&&(t=Wc(),It.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function e0(){return we().memoizedState}function kl(e,t,n,i){var a=an();It.flags|=e,a.memoizedState=os(1|t,n,{destroy:void 0},i===void 0?null:i)}function Yc(e,t,n,i){var a=we();i=i===void 0?null:i;var r=a.memoizedState.inst;ae!==null&&i!==null&&md(i,ae.memoizedState.deps)?a.memoizedState=os(t,n,r,i):(It.flags|=e,a.memoizedState=os(1|t,n,r,i))}function Yp(e,t){kl(8390656,8,e,t)}function Md(e,t){Yc(2048,8,e,t)}function n0(e,t){return Yc(4,2,e,t)}function i0(e,t){return Yc(4,4,e,t)}function a0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function r0(e,t,n){n=n!=null?n.concat([e]):null,Yc(4,4,a0.bind(null,t,e),n)}function Ed(){}function s0(e,t){var n=we();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&md(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function o0(e,t){var n=we();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&md(t,i[1]))return i[0];if(i=e(),Qa){na(!0);try{e()}finally{na(!1)}}return n.memoizedState=[i,t],i}function Td(e,t,n){return n===void 0||ma&1073741824?e.memoizedState=t:(e.memoizedState=n,e=Z0(),It.lanes|=e,_a|=e,n)}function l0(e,t,n,i){return yn(n,t)?n:rs.current!==null?(e=Td(e,n,i),yn(e,t)||(He=!0),e):ma&42?(e=Z0(),It.lanes|=e,_a|=e,t):(He=!0,e.memoizedState=n)}function c0(e,t,n,i,a){var r=ce.p;ce.p=r!==0&&8>r?r:8;var s=Lt.T,o={};Lt.T=o,Ad(e,!1,t,n);try{var l=a(),c=Lt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=ZS(l,i);to(e,t,h,Sn(e))}else to(e,t,i,Sn(e))}catch(d){to(e,t,{then:function(){},status:"rejected",reason:d},Sn())}finally{ce.p=r,Lt.T=s}}function ty(){}function Bf(e,t,n,i){if(e.tag!==5)throw Error(q(476));var a=u0(e).queue;c0(e,a,t,Va,n===null?ty:function(){return f0(e),n(i)})}function u0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Va,baseState:Va,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:Va},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function f0(e){var t=u0(e).next.queue;to(e,t,{},Sn())}function bd(){return Ke(Mo)}function h0(){return we().memoizedState}function d0(){return we().memoizedState}function ey(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Sn();e=ra(n);var i=sa(t,e,n);i!==null&&(tn(i,t,n),no(i,t,n)),t={cache:dd()},e.payload=t;return}t=t.return}}function ny(e,t,n){var i=Sn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},jc(e)?m0(t,n):(n=cd(e,t,n,i),n!==null&&(tn(n,e,i),g0(n,t,i)))}function p0(e,t,n){var i=Sn();to(e,t,n,i)}function to(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(jc(e))m0(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,yn(o,s))return Xc(e,t,a,0),oe===null&&kc(),!1}catch{}finally{}if(n=cd(e,t,a,i),n!==null)return tn(n,e,i),g0(n,t,i),!0}return!1}function Ad(e,t,n,i){if(i={lane:2,revertLane:zd(),action:i,hasEagerState:!1,eagerState:null,next:null},jc(e)){if(t)throw Error(q(479))}else t=cd(e,n,i,2),t!==null&&tn(t,e,2)}function jc(e){var t=e.alternate;return e===It||t!==null&&t===It}function m0(e,t){Kr=hc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function g0(e,t,n){if(n&4194176){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,a_(e,n)}}var ri={readContext:Ke,use:qc,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye};ri.useCacheRefresh=ye;ri.useMemoCache=ye;ri.useHostTransitionStatus=ye;ri.useFormState=ye;ri.useActionState=ye;ri.useOptimistic=ye;var rr={readContext:Ke,use:qc,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Yp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,kl(4194308,4,a0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kl(4194308,4,e,t)},useInsertionEffect:function(e,t){kl(4,2,e,t)},useMemo:function(e,t){var n=an();t=t===void 0?null:t;var i=e();if(Qa){na(!0);try{e()}finally{na(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=an();if(n!==void 0){var a=n(t);if(Qa){na(!0);try{n(t)}finally{na(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=ny.bind(null,It,e),[i.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:function(e){e=Pf(e);var t=e.queue,n=p0.bind(null,It,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ed,useDeferredValue:function(e,t){var n=an();return Td(n,e,t)},useTransition:function(){var e=Pf(!1);return e=c0.bind(null,It,e.queue,!0,!1),an().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=It,a=an();if(jt){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),oe===null)throw Error(q(349));Wt&60||V_(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Yp(X_.bind(null,i,r,e),[e]),i.flags|=2048,os(9,k_.bind(null,i,r,n,t),{destroy:void 0},null),n},useId:function(){var e=an(),t=oe.identifierPrefix;if(jt){var n=Ai,i=bi;n=(i&~(1<<32-xn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=dc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=KS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return an().memoizedState=ey.bind(null,It)}};rr.useMemoCache=Sd;rr.useHostTransitionStatus=bd;rr.useFormState=Q_;rr.useActionState=Q_;rr.useOptimistic=function(e){var t=an();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ad.bind(null,It,!0,n),n.dispatch=t,[e,t]};var Sa={readContext:Ke,use:qc,useCallback:s0,useContext:Ke,useEffect:Md,useImperativeHandle:r0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:o0,useReducer:Vl,useRef:e0,useState:function(){return Vl(Ni)},useDebugValue:Ed,useDeferredValue:function(e,t){var n=we();return l0(n,ae.memoizedState,e,t)},useTransition:function(){var e=Vl(Ni)[0],t=we().memoizedState;return[typeof e=="boolean"?e:No(e),t]},useSyncExternalStore:G_,useId:h0};Sa.useCacheRefresh=d0;Sa.useMemoCache=Sd;Sa.useHostTransitionStatus=bd;Sa.useFormState=J_;Sa.useActionState=J_;Sa.useOptimistic=function(e,t){var n=we();return Y_(n,ae,e,t)};var sr={readContext:Ke,use:qc,useCallback:s0,useContext:Ke,useEffect:Md,useImperativeHandle:r0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:o0,useReducer:Su,useRef:e0,useState:function(){return Su(Ni)},useDebugValue:Ed,useDeferredValue:function(e,t){var n=we();return ae===null?Td(n,e,t):l0(n,ae.memoizedState,e,t)},useTransition:function(){var e=Su(Ni)[0],t=we().memoizedState;return[typeof e=="boolean"?e:No(e),t]},useSyncExternalStore:G_,useId:h0};sr.useCacheRefresh=d0;sr.useMemoCache=Sd;sr.useHostTransitionStatus=bd;sr.useFormState=t0;sr.useActionState=t0;sr.useOptimistic=function(e,t){var n=we();return ae!==null?Y_(n,ae,e,t):(n.baseState=e,[e,n.queue.dispatch])};function yu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var If={isMounted:function(e){return(e=e._reactInternals)?_s(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Sn(),a=ra(i);a.payload=t,n!=null&&(a.callback=n),t=sa(e,a,i),t!==null&&(tn(t,e,i),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Sn(),a=ra(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=sa(e,a,i),t!==null&&(tn(t,e,i),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Sn(),i=ra(n);i.tag=2,t!=null&&(i.callback=t),t=sa(e,i,n),t!==null&&(tn(t,e,n),no(t,e,n))}};function jp(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!mo(n,i)||!mo(a,r):!0}function Zp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&If.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ue({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var pc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function _0(e){pc(e)}function v0(e){console.error(e)}function x0(e){pc(e)}function mc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Kp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Ff(e,t,n){return n=ra(n),n.tag=3,n.payload={element:null},n.callback=function(){mc(e,t)},n}function S0(e){return e=ra(e),e.tag=3,e}function y0(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){Kp(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Kp(t,n,i),typeof a!="function"&&(la===null?la=new Set([this]):la.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function iy(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Oo(t,n,a,!0),n=zn.current,n!==null){switch(n.tag){case 13:return ii===null?th():n.alternate===null&&Se===0&&(Se=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Lf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ou(e,i,a)),!1;case 22:return n.flags|=65536,i===Lf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ou(e,i,a)),!1}throw Error(q(435,n.tag))}return Ou(e,i,a),th(),!1}if(jt)return t=zn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Uf&&(e=Error(q(422),{cause:i}),go(Ln(e,n)))):(i!==Uf&&(t=Error(q(423),{cause:i}),go(Ln(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Ln(i,n),a=Ff(e.stateNode,i,a),Ru(e,a),Se!==4&&(Se=2)),!1;var r=Error(q(520),{cause:i});if(r=Ln(r,n),so===null?so=[r]:so.push(r),Se!==4&&(Se=2),t===null)return!0;i=Ln(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ff(n.stateNode,i,e),Ru(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(la===null||!la.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=S0(a),y0(a,e,n,i),Ru(n,a),!1}n=n.return}while(n!==null);return!1}var M0=Error(q(461)),He=!1;function Xe(e,t,n,i){t.child=e===null?z_(t,null,n,i):Ka(t,e.child,n,i)}function Qp(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return $a(t),i=gd(e,t,n,s,r,a),o=_d(),e!==null&&!He?(vd(e,t,a),Oi(e,t,a)):(jt&&o&&ud(t),t.flags|=1,Xe(e,t,i,a),t.child)}function Jp(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!Ud(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,E0(e,t,r,i,a)):(e=Wl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Rd(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(s,i)&&e.ref===t.ref)return Oi(e,t,a)}return t.flags|=1,e=oa(r,i),e.ref=t.ref,e.return=t,t.child=e}function E0(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(mo(r,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=r,Rd(e,a))e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Oi(e,t,a)}return Hf(e,t,n,i,a)}function T0(e,t,n){var i=t.pendingProps,a=i.children,r=(t.stateNode._pendingVisibility&2)!==0,s=e!==null?e.memoizedState:null;if(eo(e,t),i.mode==="hidden"||r){if(t.flags&128){if(i=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return $p(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gl(t,s!==null?s.cachePool:null),s!==null?Vp(t,s):Nf(),B_(t);else return t.lanes=t.childLanes=536870912,$p(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(Gl(t,s.cachePool),Vp(t,s),Ji(),t.memoizedState=null):(e!==null&&Gl(t,null),Nf(),Ji());return Xe(e,t,a,n),t.child}function $p(e,t,n,i){var a=pd();return a=a===null?null:{parent:Ue._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Gl(t,null),Nf(),B_(t),e!==null&&Oo(e,t,i,!0),null}function eo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(q(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Hf(e,t,n,i,a){return $a(t),n=gd(e,t,n,i,void 0,a),i=_d(),e!==null&&!He?(vd(e,t,a),Oi(e,t,a)):(jt&&i&&ud(t),t.flags|=1,Xe(e,t,n,a),t.child)}function tm(e,t,n,i,a,r){return $a(t),t.updateQueue=null,n=H_(t,i,n,a),F_(e),i=_d(),e!==null&&!He?(vd(e,t,r),Oi(e,t,r)):(jt&&i&&ud(t),t.flags|=1,Xe(e,t,n,r),t.child)}function em(e,t,n,i,a){if($a(t),t.stateNode===null){var r=Hr,s=n.contextType;typeof s=="object"&&s!==null&&(r=Ke(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=If,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},Cd(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?Ke(s):Hr,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(yu(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&If.enqueueReplaceState(r,r.state,null),ao(t,i,r,a),io(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=Ja(n,o);r.props=l;var c=r.context,h=n.contextType;s=Hr,typeof h=="object"&&h!==null&&(s=Ke(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&Zp(t,r,i,s),Ki=!1;var f=t.memoizedState;r.state=f,ao(t,i,r,a),io(),c=t.memoizedState,o||f!==c||Ki?(typeof d=="function"&&(yu(t,n,d,i),c=t.memoizedState),(l=Ki||jp(t,n,l,i,f,c,s))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,qf(e,t),s=t.memoizedProps,h=Ja(n,s),r.props=h,d=t.pendingProps,f=r.context,c=n.contextType,l=Hr,typeof c=="object"&&c!==null&&(l=Ke(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Zp(t,r,i,l),Ki=!1,f=t.memoizedState,r.state=f,ao(t,i,r,a),io();var p=t.memoizedState;s!==d||f!==p||Ki||e!==null&&e.dependencies!==null&&gc(e.dependencies)?(typeof o=="function"&&(yu(t,n,o,i),p=t.memoizedState),(h=Ki||jp(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&gc(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,eo(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=Ka(t,e.child,null,a),t.child=Ka(t,null,n,a)):Xe(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Oi(e,t,a),e}function nm(e,t,n,i){return Uo(),t.flags|=256,Xe(e,t,n,i),t.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Eu(e){return{baseLanes:e,cachePool:I_()}}function Tu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=On),e}function b0(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(a?Qi(t):Ji(),jt){var o=We,l;if(l=o){t:{for(l=o,o=Jn;l.nodeType!==8;){if(!o){o=null;break t}if(l=Yn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:ka!==null?{id:bi,overflow:Ai}:null,retryLane:536870912},l=Nn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,Je=t,We=null,l=!0):l=!1}l||Za(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return o.data==="$!"?t.lanes=16:t.lanes=536870912,null;Ri(t)}return o=i.children,i=i.fallback,a?(Ji(),a=t.mode,o=Vf({mode:"hidden",children:o},a),i=Wa(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=Eu(n),a.childLanes=Tu(e,s,n),t.memoizedState=Mu,i):(Qi(t),Gf(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Qi(t),t.flags&=-257,t=bu(e,t,n)):t.memoizedState!==null?(Ji(),t.child=e.child,t.flags|=128,t=null):(Ji(),a=i.fallback,o=t.mode,i=Vf({mode:"visible",children:i.children},o),a=Wa(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,Ka(t,e.child,null,n),i=t.child,i.memoizedState=Eu(n),i.childLanes=Tu(e,s,n),t.memoizedState=Mu,t=a);else if(Qi(t),o.data==="$!"){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(q(419)),i.stack="",i.digest=s,go({value:i,source:null,stack:null}),t=bu(e,t,n)}else if(He||Oo(e,t,n,!1),s=(n&e.childLanes)!==0,He||s){if(s=oe,s!==null){if(i=n&-n,i&42)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane)throw l.retryLane=i,pa(e,i),tn(s,e,i),M0}o.data==="$?"||th(),t=bu(e,t,n)}else o.data==="$?"?(t.flags|=128,t.child=e.child,t=vy.bind(null,e),o._reactRetry=t,t=null):(e=l.treeContext,We=Yn(o.nextSibling),Je=t,jt=!0,kn=null,Jn=!1,e!==null&&(Cn[wn++]=bi,Cn[wn++]=Ai,Cn[wn++]=ka,bi=e.id,Ai=e.overflow,ka=t),t=Gf(t,i.children),t.flags|=4096);return t}return a?(Ji(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=oa(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&31457280,c!==null?a=oa(c,a):(a=Wa(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=Eu(n):(l=o.cachePool,l!==null?(c=Ue._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=I_(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=Tu(e,s,n),t.memoizedState=Mu,i):(Qi(t),n=e.child,e=n.sibling,n=oa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Gf(e,t){return t=Vf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Vf(e,t){return Y0(e,t,0,null)}function bu(e,t,n){return Ka(t,e.child,null,n),e=Gf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Xf(e.return,t,n)}function Au(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function A0(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(Xe(e,t,i.children,n),i=Le.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&im(e,n,t);else if(e.tag===19)im(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(fe(Le,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&fc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Au(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&fc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Au(t,!0,n,null,r);break;case"together":Au(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_a|=t.lanes,!(n&t.childLanes))if(e!==null){if(Oo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=oa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=oa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rd(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&gc(e)))}function ay(e,t,n){switch(t.tag){case 3:nc(t,t.stateNode.containerInfo),$i(t,Ue,e.memoizedState.cache),Uo();break;case 27:case 5:Mf(t);break;case 4:nc(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Qi(t),t.flags|=128,null):n&t.child.childLanes?b0(e,t,n):(Qi(t),e=Oi(e,t,n),e!==null?e.sibling:null);Qi(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Oo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return A0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),fe(Le,Le.current),i)break;return null;case 22:case 23:return t.lanes=0,T0(e,t,n);case 24:$i(t,Ue,e.memoizedState.cache)}return Oi(e,t,n)}function R0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Rd(e,n)&&!(t.flags&128))return He=!1,ay(e,t,n);He=!!(e.flags&131072)}else He=!1,jt&&t.flags&1048576&&L_(t,cc,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")Ud(i)?(e=Ja(i,e),t.tag=1,t=em(null,t,i,e,n)):(t.tag=0,t=Hf(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===Jh){t.tag=11,t=Qp(null,t,i,e,n);break t}else if(a===$h){t.tag=14,t=Jp(null,t,i,e,n);break t}}throw t=Sf(i)||i,Error(q(306,t,""))}}return t;case 0:return Hf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ja(i,t.pendingProps),em(e,t,i,a,n);case 3:t:{if(nc(t,t.stateNode.containerInfo),e===null)throw Error(q(387));var r=t.pendingProps;a=t.memoizedState,i=a.element,qf(e,t),ao(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,Ue,r),r!==a.cache&&Wf(t,[Ue],n,!0),io(),r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=nm(e,t,r,n);break t}else if(r!==i){i=Ln(Error(q(424)),t),go(i),t=nm(e,t,r,n);break t}else for(We=Yn(t.stateNode.containerInfo.firstChild),Je=t,jt=!0,kn=null,Jn=!0,n=z_(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),r===i){t=Oi(e,t,n);break t}Xe(e,t,r,n)}t=t.child}return t;case 26:return eo(e,t),e===null?(n=ym(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(n=t.type,e=t.pendingProps,i=Ec(aa.current).createElement(n),i[Ze]=t,i[cn]=e,qe(i,n,e),Ie(i),t.stateNode=i):t.memoizedState=ym(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mf(t),e===null&&jt&&(i=t.stateNode=fv(t.type,t.pendingProps,aa.current),Je=t,Jn=!0,We=Yn(i.firstChild)),i=t.pendingProps.children,e!==null||jt?Xe(e,t,i,n):t.child=Ka(t,null,i,n),eo(e,t),t.child;case 5:return e===null&&jt&&((a=i=We)&&(i=Oy(i,t.type,t.pendingProps,Jn),i!==null?(t.stateNode=i,Je=t,We=Yn(i.firstChild),Jn=!1,a=!0):a=!1),a||Za(t)),Mf(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,rh(a,r)?i=null:s!==null&&rh(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=gd(e,t,QS,null,null,n),Mo._currentValue=a),eo(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=We)&&(n=Py(n,t.pendingProps,Jn),n!==null?(t.stateNode=n,Je=t,We=null,e=!0):e=!1),e||Za(t)),null;case 13:return b0(e,t,n);case 4:return nc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ka(t,null,i,n):Xe(e,t,i,n),t.child;case 11:return Qp(e,t,t.type,t.pendingProps,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,$i(t,t.type,i.value),Xe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,$a(t),a=Ke(a),i=i(a),t.flags|=1,Xe(e,t,i,n),t.child;case 14:return Jp(e,t,t.type,t.pendingProps,n);case 15:return E0(e,t,t.type,t.pendingProps,n);case 19:return A0(e,t,n);case 22:return T0(e,t,n);case 24:return $a(t),i=Ke(Ue),e===null?(a=pd(),a===null&&(a=oe,r=dd(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},Cd(t),$i(t,Ue,a)):(e.lanes&n&&(qf(e,t),ao(t,null,null,n),io()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,Ue,i)):(i=r.cache,$i(t,Ue,i),i!==a.cache&&Wf(t,[Ue],n,!0))),Xe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(q(156,t.tag))}var kf=oi(null),or=null,Ci=null;function $i(e,t,n){fe(kf,t._currentValue),t._currentValue=n}function Ui(e){e._currentValue=kf.current,Ge(kf)}function Xf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Wf(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Xf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(q(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Xf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Oo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(q(387));if(s=s.memoizedProps,s!==null){var o=a.type;yn(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===ec.current){if(s=a.alternate,s===null)throw Error(q(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}a=a.return}e!==null&&Wf(t,e,n,i),t.flags|=262144}function gc(e){for(e=e.firstContext;e!==null;){if(!yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){or=e,Ci=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return C0(or,e)}function nl(e,t){return or===null&&$a(e),C0(e,t)}function C0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ci===null){if(e===null)throw Error(q(308));Ci=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ci=Ci.next=t;return n}var Ki=!1;function Cd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,me&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=oc(e),U_(e,null,n),t}return Xc(e,i,t,n),oc(e)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,a_(e,n)}}function Ru(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Yf=!1;function io(){if(Yf){var e=Zr;if(e!==null)throw e}}function ao(e,t,n,i){Yf=!1;var a=e.updateQueue;Ki=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,h=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Wt&f)===f:(i&f)===f){f!==0&&f===ss&&(Yf=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,f);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break t;d=ue({},d,f);break t;case 2:Ki=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,r===null&&(a.shared.lanes=0),_a|=s,e.lanes=s,e.memoizedState=d}}function w0(e,t){if(typeof e!="function")throw Error(q(191,e));e.call(t)}function D0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)w0(n[e],t)}function Po(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){re(t,t.return,o)}}function ga(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n;try{o()}catch(c){re(a,l,c)}}}i=i.next}while(i!==r)}}catch(c){re(t,t.return,c)}}function U0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{D0(t,n)}catch(i){re(e,e.return,i)}}}function L0(e,t,n){n.props=Ja(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){re(e,t,i)}}function Fa(e,t){try{var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 26:case 27:case 5:var a=i;break;default:a=i}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){re(e,t,r)}}function _n(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){re(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){re(e,t,a)}else n.current=null}function N0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){re(e,e.return,a)}}function am(e,t,n){try{var i=e.stateNode;wy(i,e.type,n,t),i[cn]=t}catch(a){re(e,e.return,a)}}function O0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Cu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qc));else if(i!==4&&i!==27&&(e=e.child,e!==null))for(jf(e,t,n),e=e.sibling;e!==null;)jf(e,t,n),e=e.sibling}function _c(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&i!==27&&(e=e.child,e!==null))for(_c(e,t,n),e=e.sibling;e!==null;)_c(e,t,n),e=e.sibling}var Si=!1,xe=!1,wu=!1,rm=typeof WeakSet=="function"?WeakSet:Set,Be=null,sm=!1;function ry(e,t){if(e=e.containerInfo,ih=Rc,e=T_(e),od(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===a&&(o=s),f===r&&++h===i&&(l=s),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:e,selectionRange:n},Rc=!1,Be=t;Be!==null;)if(t=Be,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Be=e;else for(;Be!==null;){switch(t=Be,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var v=Ja(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(v,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){re(n,n.return,x)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)sh(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(q(163))}if(e=t.sibling,e!==null){e.return=t.return,Be=e;break}Be=t.return}return v=sm,sm=!1,v}function P0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:hi(e,n),i&4&&Po(5,n);break;case 1:if(hi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){re(n,n.return,o)}else{var a=Ja(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){re(n,n.return,o)}}i&64&&U0(n),i&512&&Fa(n,n.return);break;case 3:if(hi(e,n),i&64&&(i=n.updateQueue,i!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{D0(i,e)}catch(o){re(n,n.return,o)}}break;case 26:hi(e,n),i&512&&Fa(n,n.return);break;case 27:case 5:hi(e,n),t===null&&i&4&&N0(n),i&512&&Fa(n,n.return);break;case 12:hi(e,n);break;case 13:hi(e,n),i&4&&I0(e,n);break;case 22:if(a=n.memoizedState!==null||Si,!a){t=t!==null&&t.memoizedState!==null||xe;var r=Si,s=xe;Si=a,(xe=t)&&!s?ji(e,n,(n.subtreeFlags&8772)!==0):hi(e,n),Si=r,xe=s}i&512&&(n.memoizedProps.mode==="manual"?Fa(n,n.return):_n(n,n.return));break;default:hi(e,n)}}function z0(e){var t=e.alternate;t!==null&&(e.alternate=null,z0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ed(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,mn=!1;function fi(e,t,n){for(n=n.child;n!==null;)B0(e,t,n),n=n.sibling}function B0(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Ro,n)}catch{}switch(n.tag){case 26:xe||_n(n,t),fi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xe||_n(n,t);var i=Re,a=mn;for(Re=n.stateNode,fi(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);ed(n),Re=i,mn=a;break;case 5:xe||_n(n,t);case 6:a=Re;var r=mn;if(Re=null,fi(e,t,n),Re=a,mn=r,Re!==null)if(mn)try{e=Re,i=n.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)}catch(s){re(n,t,s)}else try{Re.removeChild(n.stateNode)}catch(s){re(n,t,s)}break;case 18:Re!==null&&(mn?(t=Re,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),bo(t)):Gu(Re,n.stateNode));break;case 4:i=Re,a=mn,Re=n.stateNode.containerInfo,mn=!0,fi(e,t,n),Re=i,mn=a;break;case 0:case 11:case 14:case 15:xe||ga(2,n,t),xe||ga(4,n,t),fi(e,t,n);break;case 1:xe||(_n(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&L0(n,t,i)),fi(e,t,n);break;case 21:fi(e,t,n);break;case 22:xe||_n(n,t),xe=(i=xe)||n.memoizedState!==null,fi(e,t,n),xe=i;break;default:fi(e,t,n)}}function I0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{bo(e)}catch(n){re(t,t.return,n)}}function sy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rm),t;default:throw Error(q(435,e.tag))}}function Du(e,t){var n=sy(e);t.forEach(function(i){var a=xy.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function En(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:case 5:Re=o.stateNode,mn=!1;break t;case 3:Re=o.stateNode.containerInfo,mn=!0;break t;case 4:Re=o.stateNode.containerInfo,mn=!0;break t}o=o.return}if(Re===null)throw Error(q(160));B0(r,s,a),Re=null,mn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)F0(t,e),t=t.sibling}var Vn=null;function F0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:En(t,e),Tn(e),i&4&&(ga(3,e,e.return),Po(3,e),ga(5,e,e.return));break;case 1:En(t,e),Tn(e),i&512&&(xe||n===null||_n(n,n.return)),i&64&&Si&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Vn;if(En(t,e),Tn(e),i&512&&(xe||n===null||_n(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[fo]||r[Ze]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),qe(r,i,n),r[Ze]=e,Ie(r),i=r;break t;case"link":var s=Em("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),qe(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Em("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),qe(r,i,n),a.head.appendChild(r);break;default:throw Error(q(468,i))}r[Ze]=e,Ie(r),i=r}e.stateNode=i}else Tm(a,e.type,e.stateNode);else e.stateNode=Mm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Tm(a,e.type,e.stateNode):Mm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&am(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(i&4&&e.alternate===null){a=e.stateNode,r=e.memoizedProps;try{for(var l=a.firstChild;l;){var c=l.nextSibling,h=l.nodeName;l[fo]||h==="HEAD"||h==="BODY"||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=c}for(var d=e.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);qe(a,d,r),a[Ze]=e,a[cn]=r}catch(v){re(e,e.return,v)}}case 5:if(En(t,e),Tn(e),i&512&&(xe||n===null||_n(n,n.return)),e.flags&32){a=e.stateNode;try{as(a,"")}catch(v){re(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,am(e,a,n!==null?n.memoizedProps:a)),i&1024&&(wu=!0);break;case 6:if(En(t,e),Tn(e),i&4){if(e.stateNode===null)throw Error(q(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){re(e,e.return,v)}}break;case 3:if(Yl=null,a=Vn,Vn=Tc(t.containerInfo),En(t,e),Vn=a,Tn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(v){re(e,e.return,v)}wu&&(wu=!1,H0(e));break;case 4:i=Vn,Vn=Tc(e.stateNode.containerInfo),En(t,e),Tn(e),Vn=i;break;case 12:En(t,e),Tn(e);break;case 13:En(t,e),Tn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Od=ni()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Du(e,i)));break;case 22:if(i&512&&(xe||n===null||_n(n,n.return)),l=e.memoizedState!==null,c=n!==null&&n.memoizedState!==null,h=Si,d=xe,Si=h||l,xe=d||c,En(t,e),xe=d,Si=h,Tn(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,i&8192&&(t._visibility=l?t._visibility&-2:t._visibility|1,l&&(t=Si||xe,n===null||c||t||Dr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){c=n=t;try{if(a=c.stateNode,l)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=c.stateNode,o=c.memoizedProps.style;var p=o!=null&&o.hasOwnProperty("display")?o.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(v){re(c,c.return,v)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(v){re(c,c.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Du(e,n))));break;case 19:En(t,e),Tn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Du(e,i)));break;case 21:break;default:En(t,e),Tn(e)}}function Tn(e){var t=e.flags;if(t&2){try{if(e.tag!==27){t:{for(var n=e.return;n!==null;){if(O0(n)){var i=n;break t}n=n.return}throw Error(q(160))}switch(i.tag){case 27:var a=i.stateNode,r=Cu(e);_c(e,r,a);break;case 5:var s=i.stateNode;i.flags&32&&(as(s,""),i.flags&=-33);var o=Cu(e);_c(e,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,c=Cu(e);jf(e,c,l);break;default:throw Error(q(161))}}}catch(h){re(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function H0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;H0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function hi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)P0(e,t.alternate,t),t=t.sibling}function Dr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Dr(t);break;case 1:_n(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&L0(t,t.return,n),Dr(t);break;case 26:case 27:case 5:_n(t,t.return),Dr(t);break;case 22:_n(t,t.return),t.memoizedState===null&&Dr(t);break;default:Dr(t)}e=e.sibling}}function ji(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:ji(a,r,n),Po(4,r);break;case 1:if(ji(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){re(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)w0(l[a],o)}catch(c){re(i,i.return,c)}}n&&s&64&&U0(r),Fa(r,r.return);break;case 26:case 27:case 5:ji(a,r,n),n&&i===null&&s&4&&N0(r),Fa(r,r.return);break;case 12:ji(a,r,n);break;case 13:ji(a,r,n),n&&s&4&&I0(a,r);break;case 22:r.memoizedState===null&&ji(a,r,n),Fa(r,r.return);break;default:ji(a,r,n)}t=t.sibling}}function wd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lo(n))}function Dd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lo(e))}function Gi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)G0(e,t,n,i),t=t.sibling}function G0(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Gi(e,t,n,i),a&2048&&Po(9,t);break;case 3:Gi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lo(e)));break;case 12:if(a&2048){Gi(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){re(t,t.return,l)}}else Gi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,t.memoizedState!==null?r._visibility&4?Gi(e,t,n,i):ro(e,t):r._visibility&4?Gi(e,t,n,i):(r._visibility|=4,Ur(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&wd(t.alternate,t);break;case 24:Gi(e,t,n,i),a&2048&&Dd(t.alternate,t);break;default:Gi(e,t,n,i)}}function Ur(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Ur(r,s,o,l,a),Po(8,s);break;case 23:break;case 22:var h=s.stateNode;s.memoizedState!==null?h._visibility&4?Ur(r,s,o,l,a):ro(r,s):(h._visibility|=4,Ur(r,s,o,l,a)),a&&c&2048&&wd(s.alternate,s);break;case 24:Ur(r,s,o,l,a),a&&c&2048&&Dd(s.alternate,s);break;default:Ur(r,s,o,l,a)}t=t.sibling}}function ro(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:ro(n,i),a&2048&&wd(i.alternate,i);break;case 24:ro(n,i),a&2048&&Dd(i.alternate,i);break;default:ro(n,i)}t=t.sibling}}var Ws=8192;function cr(e){if(e.subtreeFlags&Ws)for(e=e.child;e!==null;)V0(e),e=e.sibling}function V0(e){switch(e.tag){case 26:cr(e),e.flags&Ws&&e.memoizedState!==null&&jy(Vn,e.memoizedState,e.memoizedProps);break;case 5:cr(e);break;case 3:case 4:var t=Vn;Vn=Tc(e.stateNode.containerInfo),cr(e),Vn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ws,Ws=16777216,cr(e),Ws=t):cr(e));break;default:cr(e)}}function k0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ls(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Be=i,W0(i,e)}k0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)X0(e),e=e.sibling}function X0(e){switch(e.tag){case 0:case 11:case 15:Ls(e),e.flags&2048&&ga(9,e,e.return);break;case 3:Ls(e);break;case 12:Ls(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Xl(e)):Ls(e);break;default:Ls(e)}}function Xl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Be=i,W0(i,e)}k0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),Xl(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,Xl(t));break;default:Xl(t)}e=e.sibling}}function W0(e,t){for(;Be!==null;){var n=Be;switch(n.tag){case 0:case 11:case 15:ga(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Lo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Be=i;else t:for(n=e;Be!==null;){i=Be;var a=i.sibling,r=i.return;if(z0(i),i===n){Be=null;break t}if(a!==null){a.return=r,Be=a;break t}Be=r}}}function oy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,t,n,i){return new oy(e,t,n,i)}function Ud(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,t){var n=e.alternate;return n===null?(n=Nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function q0(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wl(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")Ud(e)&&(s=1);else if(typeof e=="string")s=qy(e,n,ei.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Nr:return Wa(n.children,a,r,t);case Yg:s=8,a|=24;break;case _f:return e=Nn(12,n,t,a|2),e.elementType=_f,e.lanes=r,e;case vf:return e=Nn(13,n,t,a),e.elementType=vf,e.lanes=r,e;case xf:return e=Nn(19,n,t,a),e.elementType=xf,e.lanes=r,e;case Zg:return Y0(n,a,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lx:case Ti:s=10;break t;case jg:s=9;break t;case Jh:s=11;break t;case $h:s=14;break t;case Zi:s=16,i=null;break t}s=29,n=Error(q(130,e===null?"null":typeof e,"")),i=null}return t=Nn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Wa(e,t,n,i){return e=Nn(7,e,i,t),e.lanes=n,e}function Y0(e,t,n,i){e=Nn(22,e,i,t),e.elementType=Zg,e.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=a._current;if(r===null)throw Error(q(456));if(!(a._pendingVisibility&2)){var s=pa(r,2);s!==null&&(a._pendingVisibility|=2,tn(s,r,2))}},attach:function(){var r=a._current;if(r===null)throw Error(q(456));if(a._pendingVisibility&2){var s=pa(r,2);s!==null&&(a._pendingVisibility&=-3,tn(s,r,2))}}};return e.stateNode=a,e}function Uu(e,t,n){return e=Nn(6,e,null,t),e.lanes=n,e}function Lu(e,t,n){return t=Nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function di(e){e.flags|=4}function om(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!pv(t)){if(t=zn.current,t!==null&&((Wt&4194176)===Wt?ii!==null:(Wt&62914560)!==Wt&&!(Wt&536870912)||t!==ii))throw Js=Lf,N_;e.flags|=8192}}function il(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?n_():536870912,e.lanes|=t,ls|=t)}function Ns(e,t){if(!jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&31457280,i|=a.flags&31457280,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ly(e,t,n){var i=t.pendingProps;switch(fd(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return de(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ui(Ue),ns(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ds(t)?di(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kn!==null&&($f(kn),kn=null))),de(t),null;case 26:return n=t.memoizedState,e===null?(di(t),n!==null?(de(t),om(t,n)):(de(t),t.flags&=-16777217)):n?n!==e.memoizedState?(di(t),de(t),om(t,n)):(de(t),t.flags&=-16777217):(e.memoizedProps!==i&&di(t),de(t),t.flags&=-16777217),null;case 27:ic(t),n=aa.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&di(t);else{if(!i){if(t.stateNode===null)throw Error(q(166));return de(t),null}e=ei.current,Ds(t)?Bp(t):(e=fv(a,i,n),t.stateNode=e,di(t))}return de(t),null;case 5:if(ic(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&di(t);else{if(!i){if(t.stateNode===null)throw Error(q(166));return de(t),null}if(e=ei.current,Ds(t))Bp(t);else{switch(a=Ec(aa.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[Ze]=t,e[cn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(qe(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&di(t)}}return de(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&di(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(q(166));if(e=aa.current,Ds(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=Je,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||lv(e.nodeValue,n)),e||Za(t)}else e=Ec(e).createTextNode(i),e[Ze]=t,t.stateNode=e}return de(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ds(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(q(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(q(317));a[Ze]=t}else Uo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),a=!1}else kn!==null&&($f(kn),kn=null),a=!0;if(!a)return t.flags&256?(Ri(t),t):(Ri(t),null)}if(Ri(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),il(t,t.updateQueue),de(t),null;case 4:return ns(),e===null&&Bd(t.stateNode.containerInfo),de(t),null;case 10:return Ui(t.type),de(t),null;case 19:if(Ge(Le),a=t.memoizedState,a===null)return de(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Ns(a,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=fc(e),r!==null){for(t.flags|=128,Ns(a,!1),e=r.updateQueue,t.updateQueue=e,il(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)q0(n,e),n=n.sibling;return fe(Le,Le.current&1|2),t.child}e=e.sibling}a.tail!==null&&ni()>vc&&(t.flags|=128,i=!0,Ns(a,!1),t.lanes=4194304)}else{if(!i)if(e=fc(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,il(t,e),Ns(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!jt)return de(t),null}else 2*ni()-a.renderingStartTime>vc&&n!==536870912&&(t.flags|=128,i=!0,Ns(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ni(),t.sibling=null,e=Le.current,fe(Le,i?e&1|2:e&1),t):(de(t),null);case 22:case 23:return Ri(t),hd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),n=t.updateQueue,n!==null&&il(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ge(Xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ui(Ue),de(t),null;case 25:return null}throw Error(q(156,t.tag))}function cy(e,t){switch(fd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(Ue),ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ic(t),null;case 13:if(Ri(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));Uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ge(Le),null;case 4:return ns(),null;case 10:return Ui(t.type),null;case 22:case 23:return Ri(t),hd(),e!==null&&Ge(Xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ui(Ue),null;case 25:return null;default:return null}}function j0(e,t){switch(fd(t),t.tag){case 3:Ui(Ue),ns();break;case 26:case 27:case 5:ic(t);break;case 4:ns();break;case 13:Ri(t);break;case 19:Ge(Le);break;case 10:Ui(t.type);break;case 22:case 23:Ri(t),hd(),e!==null&&Ge(Xa);break;case 24:Ui(Ue)}}var uy={getCacheForType:function(e){var t=Ke(Ue),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},fy=typeof WeakMap=="function"?WeakMap:Map,me=0,oe=null,Ht=null,Wt=0,se=0,gn=null,yi=!1,Ss=!1,Ld=!1,Pi=0,Se=0,_a=0,qa=0,Nd=0,On=0,ls=0,so=null,$n=null,Zf=!1,Od=0,vc=1/0,xc=null,la=null,al=!1,Pa=null,oo=0,Kf=0,Qf=null,lo=0,Jf=null;function Sn(){if(me&2&&Wt!==0)return Wt&-Wt;if(Lt.T!==null){var e=ss;return e!==0?e:zd()}return s_()}function Z0(){On===0&&(On=!(Wt&536870912)||jt?e_():536870912);var e=zn.current;return e!==null&&(e.flags|=32),On}function tn(e,t,n){(e===oe&&se===2||e.cancelPendingCommit!==null)&&(cs(e,0),Mi(e,Wt,On,!1)),wo(e,n),(!(me&2)||e!==oe)&&(e===oe&&(!(me&2)&&(qa|=n),Se===4&&Mi(e,Wt,On,!1)),li(e))}function K0(e,t,n){if(me&6)throw Error(q(327));var i=!n&&(t&60)===0&&(t&e.expiredLanes)===0||Co(e,t),a=i?py(e,t):Nu(e,t,!0),r=i;do{if(a===0){Ss&&!i&&Mi(e,t,0,!1);break}else if(a===6)Mi(e,t,0,!yi);else{if(n=e.current.alternate,r&&!hy(n)){a=Nu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=so;var l=o.current.memoizedState.isDehydrated;if(l&&(cs(o,s).flags|=256),s=Nu(o,s,!1),s!==2){if(Ld&&!l){o.errorRecoveryDisabledLanes|=r,qa|=r,a=4;break t}r=$n,$n=a,r!==null&&$f(r)}a=s}if(r=!1,a!==2)continue}}if(a===1){cs(e,0),Mi(e,t,0,!0);break}t:{switch(i=e,a){case 0:case 1:throw Error(q(345));case 4:if((t&4194176)===t){Mi(i,t,On,!yi);break t}break;case 2:$n=null;break;case 3:case 5:break;default:throw Error(q(329))}if(i.finishedWork=n,i.finishedLanes=t,(t&62914560)===t&&(r=Od+300-ni(),10<r)){if(Mi(i,t,On,!yi),Fc(i,0)!==0)break t;i.timeoutHandle=uv(lm.bind(null,i,n,$n,xc,Zf,t,On,qa,ls,yi,2,-0,0),r);break t}lm(i,n,$n,xc,Zf,t,On,qa,ls,yi,0,-0,0)}}break}while(!0);li(e)}function $f(e){$n===null?$n=e:$n.push.apply($n,e)}function lm(e,t,n,i,a,r,s,o,l,c,h,d,f){var p=t.subtreeFlags;if((p&8192||(p&16785408)===16785408)&&(yo={stylesheets:null,count:0,unsuspend:Yy},V0(t),t=Zy(),t!==null)){e.cancelPendingCommit=t(um.bind(null,e,n,i,a,s,o,l,1,d,f)),Mi(e,r,s,!c);return}um(e,n,i,a,s,o,l,h,d,f)}function hy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!yn(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mi(e,t,n,i){t&=~Nd,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-xn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&i_(e,n,t)}function Zc(){return me&6?!0:(zo(0),!1)}function Pd(){if(Ht!==null){if(se===0)var e=Ht.return;else e=Ht,Ci=or=null,xd(e),jr=null,_o=0,e=Ht;for(;e!==null;)j0(e.alternate,e),e=e.return;Ht=null}}function cs(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Uy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Pd(),oe=e,Ht=n=oa(e.current,null),Wt=t,se=0,gn=null,yi=!1,Ss=Co(e,t),Ld=!1,ls=On=Nd=qa=_a=Se=0,$n=so=null,Zf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-xn(i),r=1<<a;t|=e[a],i&=~r}return Pi=t,kc(),n}function Q0(e,t){It=null,Lt.H=ri,t===Qs?(t=Hp(),se=3):t===N_?(t=Hp(),se=4):se=t===M0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gn=t,Ht===null&&(Se=1,mc(e,Ln(t,e.current)))}function J0(){var e=Lt.H;return Lt.H=ri,e===null?ri:e}function $0(){var e=Lt.A;return Lt.A=uy,e}function th(){Se=4,yi||(Wt&4194176)!==Wt&&zn.current!==null||(Ss=!0),!(_a&134217727)&&!(qa&134217727)||oe===null||Mi(oe,Wt,On,!1)}function Nu(e,t,n){var i=me;me|=2;var a=J0(),r=$0();(oe!==e||Wt!==t)&&(xc=null,cs(e,t)),t=!1;var s=Se;t:do try{if(se!==0&&Ht!==null){var o=Ht,l=gn;switch(se){case 8:Pd(),s=6;break t;case 3:case 2:case 6:zn.current===null&&(t=!0);var c=se;if(se=0,gn=null,kr(e,o,l,c),n&&Ss){s=0;break t}break;default:c=se,se=0,gn=null,kr(e,o,l,c)}}dy(),s=Se;break}catch(h){Q0(e,h)}while(!0);return t&&e.shellSuspendCounter++,Ci=or=null,me=i,Lt.H=a,Lt.A=r,Ht===null&&(oe=null,Wt=0,kc()),s}function dy(){for(;Ht!==null;)tv(Ht)}function py(e,t){var n=me;me|=2;var i=J0(),a=$0();oe!==e||Wt!==t?(xc=null,vc=ni()+500,cs(e,t)):Ss=Co(e,t);t:do try{if(se!==0&&Ht!==null){t=Ht;var r=gn;e:switch(se){case 1:se=0,gn=null,kr(e,t,r,1);break;case 2:if(Fp(r)){se=0,gn=null,cm(t);break}t=function(){se===2&&oe===e&&(se=7),li(e)},r.then(t,t);break t;case 3:se=7;break t;case 4:se=5;break t;case 7:Fp(r)?(se=0,gn=null,cm(t)):(se=0,gn=null,kr(e,t,r,7));break;case 5:var s=null;switch(Ht.tag){case 26:s=Ht.memoizedState;case 5:case 27:var o=Ht;if(!s||pv(s)){se=0,gn=null;var l=o.sibling;if(l!==null)Ht=l;else{var c=o.return;c!==null?(Ht=c,Kc(c)):Ht=null}break e}}se=0,gn=null,kr(e,t,r,5);break;case 6:se=0,gn=null,kr(e,t,r,6);break;case 8:Pd(),Se=6;break t;default:throw Error(q(462))}}my();break}catch(h){Q0(e,h)}while(!0);return Ci=or=null,Lt.H=i,Lt.A=a,me=n,Ht!==null?0:(oe=null,Wt=0,kc(),Se)}function my(){for(;Ht!==null&&!Bx();)tv(Ht)}function tv(e){var t=R0(e.alternate,e,Pi);e.memoizedProps=e.pendingProps,t===null?Kc(e):Ht=t}function cm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=tm(n,t,t.pendingProps,t.type,void 0,Wt);break;case 11:t=tm(n,t,t.pendingProps,t.type.render,t.ref,Wt);break;case 5:xd(t);default:j0(n,t),t=Ht=q0(t,Pi),t=R0(n,t,Pi)}e.memoizedProps=e.pendingProps,t===null?Kc(e):Ht=t}function kr(e,t,n,i){Ci=or=null,xd(t),jr=null,_o=0;var a=t.return;try{if(iy(e,a,t,n,Wt)){Se=1,mc(e,Ln(n,e.current)),Ht=null;return}}catch(r){if(a!==null)throw Ht=a,r;Se=1,mc(e,Ln(n,e.current)),Ht=null;return}t.flags&32768?(jt||i===1?e=!0:Ss||Wt&536870912?e=!1:(yi=e=!0,(i===2||i===3||i===6)&&(i=zn.current,i!==null&&i.tag===13&&(i.flags|=16384))),ev(t,e)):Kc(t)}function Kc(e){var t=e;do{if(t.flags&32768){ev(t,yi);return}e=t.return;var n=ly(t.alternate,t,Pi);if(n!==null){Ht=n;return}if(t=t.sibling,t!==null){Ht=t;return}Ht=t=e}while(t!==null);Se===0&&(Se=5)}function ev(e,t){do{var n=cy(e.alternate,e);if(n!==null){n.flags&=32767,Ht=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ht=e;return}Ht=e=n}while(e!==null);Se=6,Ht=null}function um(e,t,n,i,a,r,s,o,l,c){var h=Lt.T,d=ce.p;try{ce.p=2,Lt.T=null,gy(e,t,n,i,d,a,r,s,o,l,c)}finally{Lt.T=h,ce.p=d}}function gy(e,t,n,i,a,r,s,o){do Jr();while(Pa!==null);if(me&6)throw Error(q(327));var l=e.finishedWork;if(i=e.finishedLanes,l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=l.lanes|l.childLanes;if(c|=ld,jx(e,i,c,r,s,o),e===oe&&(Ht=oe=null,Wt=0),!(l.subtreeFlags&10256)&&!(l.flags&10256)||al||(al=!0,Kf=c,Qf=n,Sy(ac,function(){return Jr(),null})),n=(l.flags&15990)!==0,l.subtreeFlags&15990||n?(n=Lt.T,Lt.T=null,r=ce.p,ce.p=2,s=me,me|=4,ry(e,l),F0(l,e),HS(ah,e.containerInfo),Rc=!!ih,ah=ih=null,e.current=l,P0(e,l.alternate,l),Ix(),me=s,ce.p=r,Lt.T=n):e.current=l,al?(al=!1,Pa=e,oo=i):nv(e,c),c=e.pendingLanes,c===0&&(la=null),kx(l.stateNode),li(e),t!==null)for(a=e.onRecoverableError,l=0;l<t.length;l++)c=t[l],a(c.value,{componentStack:c.stack});return oo&3&&Jr(),c=e.pendingLanes,i&4194218&&c&42?e===Jf?lo++:(lo=0,Jf=e):lo=0,zo(0),null}function nv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lo(t)))}function Jr(){if(Pa!==null){var e=Pa,t=Kf;Kf=0;var n=r_(oo),i=Lt.T,a=ce.p;try{if(ce.p=32>n?32:n,Lt.T=null,Pa===null)var r=!1;else{n=Qf,Qf=null;var s=Pa,o=oo;if(Pa=null,oo=0,me&6)throw Error(q(331));var l=me;if(me|=4,X0(s.current),G0(s,s.current,o,n),me=l,zo(0,!1),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Ro,s)}catch{}r=!0}return r}finally{ce.p=a,Lt.T=i,nv(e,t)}}return!1}function fm(e,t,n){t=Ln(n,t),t=Ff(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(wo(e,2),li(e))}function re(e,t,n){if(e.tag===3)fm(e,e,n);else for(;t!==null;){if(t.tag===3){fm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(la===null||!la.has(i))){e=Ln(n,e),n=S0(2),i=sa(t,n,2),i!==null&&(y0(n,i,t,e),wo(i,2),li(i));break}}t=t.return}}function Ou(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new fy;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Ld=!0,a.add(n),e=_y.bind(null,e,t,n),t.then(e,e))}function _y(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,oe===e&&(Wt&n)===n&&(Se===4||Se===3&&(Wt&62914560)===Wt&&300>ni()-Od?!(me&2)&&cs(e,0):Nd|=n,ls===Wt&&(ls=0)),li(e)}function iv(e,t){t===0&&(t=n_()),e=pa(e,t),e!==null&&(wo(e,t),li(e))}function vy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),iv(e,n)}function xy(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(q(314))}i!==null&&i.delete(t),iv(e,n)}function Sy(e,t){return td(e,t)}var Sc=null,Lr=null,eh=!1,yc=!1,Pu=!1,Ya=0;function li(e){e!==Lr&&e.next===null&&(Lr===null?Sc=Lr=e:Lr=Lr.next=e),yc=!0,eh||(eh=!0,My(yy))}function zo(e,t){if(!Pu&&yc){Pu=!0;do for(var n=!1,i=Sc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-xn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326677?r&201326677|1:r?r|2:0}r!==0&&(n=!0,hm(i,r))}else r=Wt,r=Fc(i,i===oe?r:0),!(r&3)||Co(i,r)||(n=!0,hm(i,r));i=i.next}while(n);Pu=!1}}function yy(){yc=eh=!1;var e=0;Ya!==0&&(Dy()&&(e=Ya),Ya=0);for(var t=ni(),n=null,i=Sc;i!==null;){var a=i.next,r=av(i,t);r===0?(i.next=null,n===null?Sc=a:n.next=a,a===null&&(Lr=n)):(n=i,(e!==0||r&3)&&(yc=!0)),i=a}zo(e)}function av(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-xn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=Yx(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=oe,n=Wt,n=Fc(e,e===t?n:0),i=e.callbackNode,n===0||e===t&&se===2||e.cancelPendingCommit!==null)return i!==null&&i!==null&&fu(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Co(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&fu(i),r_(n)){case 2:case 8:n=$g;break;case 32:n=ac;break;case 268435456:n=t_;break;default:n=ac}return i=rv.bind(null,e),n=td(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&fu(i),e.callbackPriority=2,e.callbackNode=null,2}function rv(e,t){var n=e.callbackNode;if(Jr()&&e.callbackNode!==n)return null;var i=Wt;return i=Fc(e,e===oe?i:0),i===0?null:(K0(e,i,t),av(e,ni()),e.callbackNode!=null&&e.callbackNode===n?rv.bind(null,e):null)}function hm(e,t){if(Jr())return null;K0(e,t,!0)}function My(e){Ly(function(){me&6?td(Jg,e):e()})}function zd(){return Ya===0&&(Ya=e_()),Ya}function dm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function pm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Ey(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=dm((a[cn]||null).action),s=i.submitter;s&&(t=(t=s[cn]||null)?dm(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Hc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ya!==0){var l=s?pm(a,s):new FormData(a);Bf(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?pm(a,s):new FormData(a),Bf(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var zu=0;zu<Pp.length;zu++){var Bu=Pp[zu],Ty=Bu.toLowerCase(),by=Bu[0].toUpperCase()+Bu.slice(1);jn(Ty,"on"+by)}jn(A_,"onAnimationEnd");jn(R_,"onAnimationIteration");jn(C_,"onAnimationStart");jn("dblclick","onDoubleClick");jn("focusin","onFocus");jn("focusout","onBlur");jn(VS,"onTransitionRun");jn(kS,"onTransitionStart");jn(XS,"onTransitionCancel");jn(w_,"onTransitionEnd");is("onMouseEnter",["mouseout","mouseover"]);is("onMouseLeave",["mouseout","mouseover"]);is("onPointerEnter",["pointerout","pointerover"]);is("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function sv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){pc(h)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(h){pc(h)}a.currentTarget=null,r=l}}}}function Vt(e,t){var n=t[Tf];n===void 0&&(n=t[Tf]=new Set);var i=e+"__bubble";n.has(i)||(ov(t,e,2,!1),n.add(i))}function Iu(e,t,n){var i=0;t&&(i|=4),ov(n,e,i,t)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Bd(e){if(!e[rl]){e[rl]=!0,o_.forEach(function(n){n!=="selectionchange"&&(Ay.has(n)||Iu(n,!1,e),Iu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rl]||(t[rl]=!0,Iu("selectionchange",!1,t))}}function ov(e,t,n,i){switch(xv(t)){case 2:var a=Jy;break;case 8:a=$y;break;default:a=Gd}n=a.bind(null,t,n,e),a=void 0,!Cf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Fu(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;s=s.return}for(;o!==null;){if(s=Ia(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}m_(function(){var c=r,h=id(n),d=[];t:{var f=D_.get(e);if(f!==void 0){var p=Hc,v=e;switch(e){case"keypress":if(Hl(n)===0)break t;case"keydown":case"keyup":p=xS;break;case"focusin":v="focus",p=gu;break;case"focusout":v="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=MS;break;case A_:case R_:case C_:p=uS;break;case w_:p=TS;break;case"scroll":case"scrollend":p=rS;break;case"wheel":p=AS;break;case"copy":case"cut":case"paste":p=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bp;break;case"toggle":case"beforetoggle":p=CS}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,g;_!==null;){var y=_;if(g=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||g===null||u===null||(y=ho(_,u),y!=null&&x.push(So(_,y,g))),m)break;_=_.return}0<x.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:x}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Rf&&(v=n.relatedTarget||n.fromElement)&&(Ia(v)||v[vs]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Ia(v):null,v!==null&&(m=_s(v),x=v.tag,v!==m||x!==5&&x!==27&&x!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Ep,y="onMouseLeave",u="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(x=bp,y="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?f:Xs(p),g=v==null?f:Xs(v),f=new x(y,_+"leave",p,n,h),f.target=m,f.relatedTarget=g,y=null,Ia(h)===c&&(x=new x(u,_+"enter",v,n,h),x.target=g,x.relatedTarget=m,y=x),m=y,p&&v)e:{for(x=p,u=v,_=0,g=x;g;g=ur(g))_++;for(g=0,y=u;y;y=ur(y))g++;for(;0<_-g;)x=ur(x),_--;for(;0<g-_;)u=ur(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break e;x=ur(x),u=ur(u)}x=null}else x=null;p!==null&&mm(d,f,p,x,!1),v!==null&&m!==null&&mm(d,m,v,x,!0)}}t:{if(f=c?Xs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=wp;else if(Cp(f))if(y_)C=IS;else{C=zS;var A=PS}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&nd(c.elementType)&&(C=wp):C=BS;if(C&&(C=C(e,c))){S_(d,C,n,h);break t}A&&A(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Af(f,"number",f.value)}switch(A=c?Xs(c):window,e){case"focusin":(Cp(A)||A.contentEditable==="true")&&(Br=A,wf=c,Ks=null);break;case"focusout":Ks=wf=Br=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,Op(d,n,h);break;case"selectionchange":if(GS)break;case"keydown":case"keyup":Op(d,n,h)}var b;if(sd)t:{switch(e){case"compositionstart":var U="onCompositionStart";break t;case"compositionend":U="onCompositionEnd";break t;case"compositionupdate":U="onCompositionUpdate";break t}U=void 0}else zr?v_(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(__&&n.locale!=="ko"&&(zr||U!=="onCompositionStart"?U==="onCompositionEnd"&&zr&&(b=g_()):(ia=h,ad="value"in ia?ia.value:ia.textContent,zr=!0)),A=Mc(c,U),0<A.length&&(U=new Tp(U,e,null,n,h),d.push({event:U,listeners:A}),b?U.data=b:(b=x_(n),b!==null&&(U.data=b)))),(b=DS?US(e,n):LS(e,n))&&(U=Mc(c,"onBeforeInput"),0<U.length&&(A=new Tp("onBeforeInput","beforeinput",null,n,h),d.push({event:A,listeners:U}),A.data=b)),Ey(d,e,c,n,h)}sv(d,t)})}function So(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ho(e,n),a!=null&&i.unshift(So(e,a,r)),a=ho(e,t),a!=null&&i.push(So(e,a,r))),e=e.return}return i}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mm(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=ho(n,r),c!=null&&s.unshift(So(n,c,l))):a||(c=ho(n,r),c!=null&&s.push(So(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ry=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function gm(e){return(typeof e=="string"?e:""+e).replace(Ry,`
`).replace(Cy,"")}function lv(e,t){return t=gm(t),gm(e)===t}function Qc(){}function ie(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||as(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&as(e,""+i);break;case"className":Qo(e,"class",i);break;case"tabIndex":Qo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qo(e,n,i);break;case"style":p_(e,i,r);break;case"data":if(t!=="object"){Qo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Il(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&ie(e,t,"name",a.name,a,null),ie(e,t,"formEncType",a.formEncType,a,null),ie(e,t,"formMethod",a.formMethod,a,null),ie(e,t,"formTarget",a.formTarget,a,null)):(ie(e,t,"encType",a.encType,a,null),ie(e,t,"method",a.method,a,null),ie(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Il(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Qc);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(q(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(q(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Il(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),Bl(e,"popover",i);break;case"xlinkActuate":ui(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ui(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ui(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ui(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ui(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ui(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ui(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ui(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ui(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Bl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=iS.get(n)||n,Bl(e,n,i))}}function nh(e,t,n,i,a,r){switch(n){case"style":p_(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(q(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(q(60));e.innerHTML=n}}break;case"children":typeof i=="string"?as(e,i):(typeof i=="number"||typeof i=="bigint")&&as(e,""+i);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Qc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!l_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[cn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Bl(e,n,i)}}}function qe(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:ie(e,t,r,s,n,null)}}a&&ie(e,t,"srcSet",n.srcSet,n,null),i&&ie(e,t,"src",n.src,n,null);return;case"input":Vt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":s=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(q(137,t));break;default:ie(e,t,i,h,n,null)}}f_(e,r,o,l,c,s,a,!1),rc(e);return;case"select":Vt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:ie(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?qr(e,!!i,t,!1):n!=null&&qr(e,!!i,n,!0);return;case"textarea":Vt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(q(91));break;default:ie(e,t,s,o,n,null)}d_(e,i,a,r),rc(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ie(e,t,l,i,n,null)}return;case"dialog":Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(i=0;i<xo.length;i++)Vt(xo[i],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:ie(e,t,c,i,n,null)}return;default:if(nd(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&nh(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ie(e,t,o,i,n,null))}function wy(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ie(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(q(137,t));break;default:p!==d&&ie(e,t,f,p,i,d)}}bf(e,s,o,l,c,h,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ie(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&ie(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?qr(e,!!n,f,!1):!!i!=!!n&&(t!=null?qr(e,!!n,t,!0):qr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ie(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(q(91));break;default:a!==r&&ie(e,t,s,a,i,r)}h_(e,f,p);return;case"option":for(var v in n)if(f=n[v],n.hasOwnProperty(v)&&f!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:ie(e,t,v,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:ie(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&ie(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(q(137,t));break;default:ie(e,t,c,f,i,p)}return;default:if(nd(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&nh(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||nh(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&ie(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||ie(e,t,d,f,i,p)}var ih=null,ah=null;function Ec(e){return e.nodeType===9?e:e.ownerDocument}function _m(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hu=null;function Dy(){var e=window.event;return e&&e.type==="popstate"?e===Hu?!1:(Hu=e,!0):(Hu=null,!1)}var uv=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(e){return vm.resolve(null).then(e).catch(Ny)}:uv;function Ny(e){setTimeout(function(){throw e})}function Gu(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){e.removeChild(a),bo(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);bo(t)}function sh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sh(n),ed(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Oy(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[fo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function Py(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Yn(e.nextSibling),e===null))return null;return e}function Yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function xm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function fv(e,t,n){switch(t=Ec(n),e){case"html":if(e=t.documentElement,!e)throw Error(q(452));return e;case"head":if(e=t.head,!e)throw Error(q(453));return e;case"body":if(e=t.body,!e)throw Error(q(454));return e;default:throw Error(q(451))}}var Bn=new Map,Sm=new Set;function Tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Ii=ce.d;ce.d={f:zy,r:By,D:Iy,C:Fy,L:Hy,m:Gy,X:ky,S:Vy,M:Xy};function zy(){var e=Ii.f(),t=Zc();return e||t}function By(e){var t=xs(e);t!==null&&t.tag===5&&t.type==="form"?f0(t):Ii.r(e)}var ys=typeof document>"u"?null:document;function hv(e,t,n){var i=ys;if(i&&typeof t=="string"&&t){var a=Un(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Sm.has(a)||(Sm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),qe(t,"link",e),Ie(t),i.head.appendChild(t)))}}function Iy(e){Ii.D(e),hv("dns-prefetch",e,null)}function Fy(e,t){Ii.C(e,t),hv("preconnect",e,t)}function Hy(e,t,n){Ii.L(e,t,n);var i=ys;if(i&&e&&t){var a='link[rel="preload"][as="'+Un(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Un(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Un(n.imageSizes)+'"]')):a+='[href="'+Un(e)+'"]';var r=a;switch(t){case"style":r=us(e);break;case"script":r=Ms(e)}Bn.has(r)||(e=ue({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Bn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Bo(r))||t==="script"&&i.querySelector(Io(r))||(t=i.createElement("link"),qe(t,"link",e),Ie(t),i.head.appendChild(t)))}}function Gy(e,t){Ii.m(e,t);var n=ys;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Un(i)+'"][href="'+Un(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ms(e)}if(!Bn.has(r)&&(e=ue({rel:"modulepreload",href:e},t),Bn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Io(r)))return}i=n.createElement("link"),qe(i,"link",e),Ie(i),n.head.appendChild(i)}}}function Vy(e,t,n){Ii.S(e,t,n);var i=ys;if(i&&e){var a=Wr(i).hoistableStyles,r=us(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Bo(r)))o.loading=5;else{e=ue({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bn.get(r))&&Id(e,n);var l=s=i.createElement("link");Ie(l),qe(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ql(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function ky(e,t){Ii.X(e,t);var n=ys;if(n&&e){var i=Wr(n).hoistableScripts,a=Ms(e),r=i.get(a);r||(r=n.querySelector(Io(a)),r||(e=ue({src:e,async:!0},t),(t=Bn.get(a))&&Fd(e,t),r=n.createElement("script"),Ie(r),qe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Xy(e,t){Ii.M(e,t);var n=ys;if(n&&e){var i=Wr(n).hoistableScripts,a=Ms(e),r=i.get(a);r||(r=n.querySelector(Io(a)),r||(e=ue({src:e,async:!0,type:"module"},t),(t=Bn.get(a))&&Fd(e,t),r=n.createElement("script"),Ie(r),qe(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function ym(e,t,n,i){var a=(a=aa.current)?Tc(a):null;if(!a)throw Error(q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=us(n.href),n=Wr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=us(n.href);var r=Wr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Bo(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Bn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bn.set(e,n),r||Wy(a,e,n,s.state))),t&&i===null)throw Error(q(528,""));return s}if(t&&i!==null)throw Error(q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ms(n),n=Wr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(q(444,e))}}function us(e){return'href="'+Un(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function dv(e){return ue({},e,{"data-precedence":e.precedence,precedence:null})}function Wy(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),qe(t,"link",n),Ie(t),e.head.appendChild(t))}function Ms(e){return'[src="'+Un(e)+'"]'}function Io(e){return"script[async]"+e}function Mm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Un(n.href)+'"]');if(i)return t.instance=i,Ie(i),i;var a=ue({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ie(i),qe(i,"style",a),ql(i,n.precedence,e),t.instance=i;case"stylesheet":a=us(n.href);var r=e.querySelector(Bo(a));if(r)return t.state.loading|=4,t.instance=r,Ie(r),r;i=dv(n),(a=Bn.get(a))&&Id(i,a),r=(e.ownerDocument||e).createElement("link"),Ie(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),qe(r,"link",i),t.state.loading|=4,ql(r,n.precedence,e),t.instance=r;case"script":return r=Ms(n.src),(a=e.querySelector(Io(r)))?(t.instance=a,Ie(a),a):(i=n,(a=Bn.get(r))&&(i=ue({},n),Fd(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ie(a),qe(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(q(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,ql(i,n.precedence,e));return t.instance}function ql(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Id(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yl=null;function Em(e,t,n){if(Yl===null){var i=new Map,a=Yl=new Map;a.set(n,i)}else a=Yl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[fo]||r[Ze]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Tm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function qy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pv(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var yo=null;function Yy(){}function jy(e,t,n){if(yo===null)throw Error(q(475));var i=yo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=us(n.href),r=e.querySelector(Bo(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=bc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,Ie(r);return}r=e.ownerDocument||e,n=dv(n),(a=Bn.get(a))&&Id(n,a),r=r.createElement("link"),Ie(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),qe(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=bc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function Zy(){if(yo===null)throw Error(q(475));var e=yo;return e.stylesheets&&e.count===0&&oh(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function bc(){if(this.count--,this.count===0){if(this.stylesheets)oh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ac=null;function oh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ac=new Map,t.forEach(Ky,e),Ac=null,bc.call(e))}function Ky(e,t){if(!(t.state.loading&4)){var n=Ac.get(e);if(n)var i=n.get(null);else{n=new Map,Ac.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=bc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Mo={$$typeof:Ti,Provider:null,Consumer:null,_currentValue:Va,_currentValue2:Va,_threadCount:0};function Qy(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.hiddenUpdates=hu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function mv(e,t,n,i,a,r,s,o,l,c,h,d){return e=new Qy(e,t,n,s,o,l,c,d),t=1,r===!0&&(t|=24),r=Nn(3,null,null,t),e.current=r,r.stateNode=e,t=dd(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},Cd(r),e}function gv(e){return e?(e=Hr,e):Hr}function _v(e,t,n,i,a,r){a=gv(a),i.context===null?i.context=a:i.pendingContext=a,i=ra(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=sa(e,i,t),n!==null&&(tn(n,e,t),no(n,e,t))}function bm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hd(e,t){bm(e,t),(e=e.alternate)&&bm(e,t)}function vv(e){if(e.tag===13){var t=pa(e,67108864);t!==null&&tn(t,e,67108864),Hd(e,67108864)}}var Rc=!0;function Jy(e,t,n,i){var a=Lt.T;Lt.T=null;var r=ce.p;try{ce.p=2,Gd(e,t,n,i)}finally{ce.p=r,Lt.T=a}}function $y(e,t,n,i){var a=Lt.T;Lt.T=null;var r=ce.p;try{ce.p=8,Gd(e,t,n,i)}finally{ce.p=r,Lt.T=a}}function Gd(e,t,n,i){if(Rc){var a=lh(i);if(a===null)Fu(e,t,i,Cc,n),Am(e,i);else if(eM(a,e,t,n,i))i.stopPropagation();else if(Am(e,i),t&4&&-1<tM.indexOf(e)){for(;a!==null;){var r=xs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ua(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-xn(s);o.entanglements[1]|=l,s&=~l}li(r),!(me&6)&&(vc=ni()+500,zo(0))}}break;case 13:o=pa(r,2),o!==null&&tn(o,r,2),Zc(),Hd(r,2)}if(r=lh(i),r===null&&Fu(e,t,i,Cc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Fu(e,t,i,null,n)}}function lh(e){return e=id(e),Vd(e)}var Cc=null;function Vd(e){if(Cc=null,e=Ia(e),e!==null){var t=_s(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Kg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cc=e,null}function xv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fx()){case Jg:return 2;case $g:return 8;case ac:case Hx:return 32;case t_:return 268435456;default:return 32}default:return 32}}var ch=!1,ca=null,ua=null,fa=null,Eo=new Map,To=new Map,ta=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Am(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(t.pointerId)}}function Os(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=xs(t),t!==null&&vv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function eM(e,t,n,i,a){switch(t){case"focusin":return ca=Os(ca,e,t,n,i,a),!0;case"dragenter":return ua=Os(ua,e,t,n,i,a),!0;case"mouseover":return fa=Os(fa,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Eo.set(r,Os(Eo.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,To.set(r,Os(To.get(r)||null,e,t,n,i,a)),!0}return!1}function Sv(e){var t=Ia(e.target);if(t!==null){var n=_s(t);if(n!==null){if(t=n.tag,t===13){if(t=Kg(n),t!==null){e.blockedOn=t,Zx(e.priority,function(){if(n.tag===13){var i=Sn(),a=pa(n,i);a!==null&&tn(a,n,i),Hd(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Rf=i,n.target.dispatchEvent(i),Rf=null}else return t=xs(n),t!==null&&vv(t),e.blockedOn=n,!1;t.shift()}return!0}function Rm(e,t,n){jl(e)&&n.delete(t)}function nM(){ch=!1,ca!==null&&jl(ca)&&(ca=null),ua!==null&&jl(ua)&&(ua=null),fa!==null&&jl(fa)&&(fa=null),Eo.forEach(Rm),To.forEach(Rm)}function sl(e,t){e.blockedOn===t&&(e.blockedOn=null,ch||(ch=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,nM)))}var ol=null;function Cm(e){ol!==e&&(ol=e,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,function(){ol===e&&(ol=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Vd(i||n)===null)continue;break}var r=xs(n);r!==null&&(e.splice(t,3),t-=3,Bf(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function bo(e){function t(l){return sl(l,e)}ca!==null&&sl(ca,e),ua!==null&&sl(ua,e),fa!==null&&sl(fa,e),Eo.forEach(t),To.forEach(t);for(var n=0;n<ta.length;n++){var i=ta[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ta.length&&(n=ta[0],n.blockedOn===null);)Sv(n),n.blockedOn===null&&ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[cn]||null;if(typeof r=="function")s||Cm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[cn]||null)o=s.formAction;else if(Vd(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Cm(n)}}}function kd(e){this._internalRoot=e}Jc.prototype.render=kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));var n=t.current,i=Sn();_v(n,i,e,t,null,null)};Jc.prototype.unmount=kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&Jr(),_v(e.current,2,null,e,null,null),Zc(),t[vs]=null}};function Jc(e){this._internalRoot=e}Jc.prototype.unstable_scheduleHydration=function(e){if(e){var t=s_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ta.length&&t!==0&&t<ta[n].priority;n++);ta.splice(n,0,e),n===0&&Sv(e)}};var wm=Wg.version;if(wm!=="19.0.0")throw Error(q(527,wm,"19.0.0"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=zx(t),e=e!==null?Qg(e):null,e=e===null?null:e.stateNode,e};var iM={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Lt,findFiberByHostInstance:Ia,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Ro=ll.inject(iM),vn=ll}catch{}}Bc.createRoot=function(e,t){if(!qg(e))throw Error(q(299));var n=!1,i="",a=_0,r=v0,s=x0,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=mv(e,1,!1,null,null,n,i,a,r,s,o,null),e[vs]=t.current,Bd(e.nodeType===8?e.parentNode:e),new kd(t)};Bc.hydrateRoot=function(e,t,n){if(!qg(e))throw Error(q(299));var i=!1,a="",r=_0,s=v0,o=x0,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=mv(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=gv(null),n=t.current,i=Sn(),a=ra(i),a.callback=null,sa(n,a,i),t.current.lanes=i,wo(t,i),li(t),e[vs]=t.current,Bd(e),new Jc(t)};Bc.version="19.0.0";function yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yv)}catch(e){console.error(e)}}yv(),Fg.exports=Bc;var aM=Fg.exports;const rM=wg(aM);var uh=new Map,cl=new WeakMap,Dm=0,sM=void 0;function oM(e){return e?(cl.has(e)||(Dm+=1,cl.set(e,Dm.toString())),cl.get(e)):"0"}function lM(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?oM(e.root):e[t]}`).toString()}function cM(e){const t=lM(e);let n=uh.get(t);if(!n){const i=new Map;let a;const r=new IntersectionObserver(s=>{s.forEach(o=>{var l;const c=o.isIntersecting&&a.some(h=>o.intersectionRatio>=h);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=i.get(o.target))==null||l.forEach(h=>{h(c,o)})})},e);a=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:r,elements:i},uh.set(t,n)}return n}function uM(e,t,n={},i=sM){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:r,elements:s}=cM(n),o=s.get(e)||[];return s.has(e)||s.set(e,o),o.push(t),r.observe(e),function(){o.splice(o.indexOf(t),1),o.length===0&&(s.delete(e),r.unobserve(e)),s.size===0&&(r.disconnect(),uh.delete(a))}}function Mv({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:r,skip:s,initialInView:o,fallbackInView:l,onChange:c}={}){var h;const[d,f]=kt.useState(null),p=kt.useRef(c),[v,x]=kt.useState({inView:!!o,entry:void 0});p.current=c,kt.useEffect(()=>{if(s||!d)return;let g;return g=uM(d,(y,C)=>{x({inView:y,entry:C}),p.current&&p.current(y,C),C.isIntersecting&&r&&g&&(g(),g=void 0)},{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{g&&g()}},[Array.isArray(e)?e.toString():e,d,a,i,r,s,n,l,t]);const m=(h=v.entry)==null?void 0:h.target,u=kt.useRef(void 0);!d&&m&&!r&&!s&&u.current!==m&&(u.current=m,x({inView:!!o,entry:void 0}));const _=[f,v.inView,v.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}const fr=({height:e,title:t,darkMode:n,children:i,style:a,id:r})=>{const{ref:s,inView:o}=Mv({root:null,rootMargin:"-20% 0px",triggerOnce:!0});return P.jsx("section",{ref:s,id:r,style:{minHeight:e,...a},className:`section ${o?"section-visible":"section-hidden"} ${n?"dark-mode":"light-mode"}`,children:P.jsx("div",{className:"section-content",children:i})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="168",fM=0,Um=1,hM=2,Ev=1,dM=2,xi=3,va=0,sn=1,Ei=2,ha=0,$r=1,Lm=2,Nm=3,Om=4,pM=5,za=100,mM=101,gM=102,_M=103,vM=104,xM=200,SM=201,yM=202,MM=203,fh=204,hh=205,EM=206,TM=207,bM=208,AM=209,RM=210,CM=211,wM=212,DM=213,UM=214,LM=0,NM=1,OM=2,wc=3,PM=4,zM=5,BM=6,IM=7,Tv=0,FM=1,HM=2,da=0,GM=1,VM=2,kM=3,XM=4,WM=5,qM=6,YM=7,bv=300,fs=301,hs=302,dh=303,ph=304,$c=306,mh=1e3,Ha=1001,gh=1002,Pn=1003,jM=1004,ul=1005,Xn=1006,Vu=1007,Ga=1008,zi=1009,Av=1010,Rv=1011,Ao=1012,Wd=1013,tr=1014,wi=1015,Fo=1016,qd=1017,Yd=1018,ds=1020,Cv=35902,wv=1021,Dv=1022,Wn=1023,Uv=1024,Lv=1025,ts=1026,ps=1027,Nv=1028,jd=1029,Ov=1030,Zd=1031,Kd=1033,Zl=33776,Kl=33777,Ql=33778,Jl=33779,_h=35840,vh=35841,xh=35842,Sh=35843,yh=36196,Mh=37492,Eh=37496,Th=37808,bh=37809,Ah=37810,Rh=37811,Ch=37812,wh=37813,Dh=37814,Uh=37815,Lh=37816,Nh=37817,Oh=37818,Ph=37819,zh=37820,Bh=37821,$l=36492,Ih=36494,Fh=36495,Pv=36283,Hh=36284,Gh=36285,Vh=36286,ZM=3200,KM=3201,QM=0,JM=1,ea="",Kn="srgb",ya="srgb-linear",Qd="display-p3",tu="display-p3-linear",Dc="linear",le="srgb",Uc="rec709",Lc="p3",hr=7680,Pm=519,$M=512,tE=513,eE=514,zv=515,nE=516,iE=517,aE=518,rE=519,zm=35044,Bm="300 es",Di=2e3,Nc=2001;class Es{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=Math.PI/180,kh=180/Math.PI;function Ho(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[e&255]+Ye[e>>8&255]+Ye[e>>16&255]+Ye[e>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[n&63|128]+Ye[n>>8&255]+"-"+Ye[n>>16&255]+Ye[n>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function rn(e,t,n){return Math.max(t,Math.min(n,e))}function sE(e,t){return(e%t+t)%t}function Xu(e,t,n){return(1-n)*e+n*t}function Ps(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function nn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,n=0){te.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,n,i,a,r,s,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],v=i[8],x=a[0],m=a[3],u=a[6],_=a[1],g=a[4],y=a[7],C=a[2],A=a[5],b=a[8];return r[0]=s*x+o*_+l*C,r[3]=s*m+o*g+l*A,r[6]=s*u+o*y+l*b,r[1]=c*x+h*_+d*C,r[4]=c*m+h*g+d*A,r[7]=c*u+h*y+d*b,r[2]=f*x+p*_+v*C,r[5]=f*m+p*g+v*A,r[8]=f*u+p*y+v*b,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*s*h-n*o*c-i*r*h+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,f=o*l-h*r,p=c*r-s*l,v=n*d+i*f+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=d*x,t[1]=(a*c-h*i)*x,t[2]=(o*i-a*s)*x,t[3]=f*x,t[4]=(h*n-a*l)*x,t[5]=(a*r-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(s*n-i*r)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Wu.makeScale(t,n)),this}rotate(t){return this.premultiply(Wu.makeRotation(-t)),this}translate(t,n){return this.premultiply(Wu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new Pt;function Bv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Oc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function oE(){const e=Oc("canvas");return e.style.display="block",e}const Im={};function co(e){e in Im||(Im[e]=!0,console.warn(e))}function lE(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Fm=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hm=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[ya]:{transfer:Dc,primaries:Uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Kn]:{transfer:le,primaries:Uc,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[tu]:{transfer:Dc,primaries:Lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(Hm),fromReference:e=>e.applyMatrix3(Fm)},[Qd]:{transfer:le,primaries:Lc,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(Hm),fromReference:e=>e.applyMatrix3(Fm).convertLinearToSRGB()}},cE=new Set([ya,tu]),$t={enabled:!0,_workingColorSpace:ya,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!cE.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=zs[t].toReference,a=zs[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return zs[e].primaries},getTransfer:function(e){return e===ea?Dc:zs[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(zs[t].luminanceCoefficients)}};function es(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qu(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let dr;class uE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{dr===void 0&&(dr=Oc("canvas")),dr.width=t.width,dr.height=t.height;const i=dr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Oc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=es(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(es(n[i]/255)*255):n[i]=es(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fE=0;class Iv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Ho(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Yu(a[s].image)):r.push(Yu(a[s]))}else r=Yu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Yu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?uE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hE=0;class on extends Es{constructor(t=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Ha,a=Ha,r=Xn,s=Ga,o=Wn,l=zi,c=on.DEFAULT_ANISOTROPY,h=ea){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Ho(),this.name="",this.source=new Iv(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mh:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mh:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=bv;on.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,n=0,i=0,a=1){Fe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(p+1)/2,C=(u+1)/2,A=(h+f)/4,b=(d+x)/4,U=(v+m)/4;return g>y&&g>C?g<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(g),a=A/i,r=b/i):y>C?y<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(y),i=A/a,r=U/a):C<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(C),i=b/r,a=U/r),this.set(i,a,r,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dE extends Es{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Fe(0,0,t,n),this.scissorTest=!1,this.viewport=new Fe(0,0,t,n);const a={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new on(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Iv(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends dE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Fv extends on{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pE extends on{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3];const f=r[s+0],p=r[s+1],v=r[s+2],x=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=v,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==v){let m=1-o;const u=l*f+c*p+h*v+d*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,u*_);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const y=o*_;if(l=l*m+f*y,c=c*m+p*y,h=h*m+v*y,d=d*m+x*y,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=r[s],f=r[s+1],p=r[s+2],v=r[s+3];return t[n]=o*v+h*d+l*p-c*f,t[n+1]=l*v+h*f+c*d-o*p,t[n+2]=c*v+h*p+o*f-l*d,t[n+3]=h*v-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(r/2),f=l(i/2),p=l(a/2),v=l(r/2);switch(s){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+a*c-r*l,this._y=a*h+s*l+r*o-i*c,this._z=r*h+s*c+i*l-a*o,this._w=s*h-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,n=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Gm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Gm.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),h=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*c+s*d-o*h,this.y=i+l*h+o*c-r*d,this.z=a+l*d+r*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ju.copy(this).projectOnVector(t),this.sub(ju)}reflect(t){return this.sub(ju.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(rn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new H,Gm=new Go;class Vo{constructor(t=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Fn):Fn.fromBufferAttribute(r,s),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(t.matrixWorld),this.union(fl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),hl.subVectors(this.max,Bs),pr.subVectors(t.a,Bs),mr.subVectors(t.b,Bs),gr.subVectors(t.c,Bs),Vi.subVectors(mr,pr),ki.subVectors(gr,mr),ba.subVectors(pr,gr);let n=[0,-Vi.z,Vi.y,0,-ki.z,ki.y,0,-ba.z,ba.y,Vi.z,0,-Vi.x,ki.z,0,-ki.x,ba.z,0,-ba.x,-Vi.y,Vi.x,0,-ki.y,ki.x,0,-ba.y,ba.x,0];return!Zu(n,pr,mr,gr,hl)||(n=[1,0,0,0,1,0,0,0,1],!Zu(n,pr,mr,gr,hl))?!1:(dl.crossVectors(Vi,ki),n=[dl.x,dl.y,dl.z],Zu(n,pr,mr,gr,hl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pi=[new H,new H,new H,new H,new H,new H,new H,new H],Fn=new H,fl=new Vo,pr=new H,mr=new H,gr=new H,Vi=new H,ki=new H,ba=new H,Bs=new H,hl=new H,dl=new H,Aa=new H;function Zu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Aa.fromArray(e,r);const o=a.x*Math.abs(Aa.x)+a.y*Math.abs(Aa.y)+a.z*Math.abs(Aa.z),l=t.dot(Aa),c=n.dot(Aa),h=i.dot(Aa);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mE=new Vo,Is=new H,Ku=new H;class eu{constructor(t=new H,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):mE.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Is,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ku.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Ku)),this.expandByPoint(Is.copy(t.center).sub(Ku))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new H,Qu=new H,pl=new H,Xi=new H,Ju=new H,ml=new H,$u=new H;class Hv{constructor(t=new H,n=new H(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=mi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Qu.copy(t).add(n).multiplyScalar(.5),pl.copy(n).sub(t).normalize(),Xi.copy(this.origin).sub(Qu);const r=t.distanceTo(n)*.5,s=-this.direction.dot(pl),o=Xi.dot(this.direction),l=-Xi.dot(pl),c=Xi.lengthSq(),h=Math.abs(1-s*s);let d,f,p,v;if(h>0)if(d=s*l-o,f=s*o-l,v=r*h,d>=0)if(f>=-v)if(f<=v){const x=1/h;d*=x,f*=x,p=d*(d+s*f+2*o)+f*(s*d+f+2*l)+c}else f=r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Qu).addScaledVector(pl,f),p}intersectSphere(t,n){mi.subVectors(t.center,this.origin);const i=mi.dot(this.direction),a=mi.dot(mi)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,s=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,s=(t.min.y-f.y)*h),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,n,i,a,r){Ju.subVectors(n,t),ml.subVectors(i,t),$u.crossVectors(Ju,ml);let s=this.direction.dot($u),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Xi.subVectors(this.origin,t);const l=o*this.direction.dot(ml.crossVectors(Xi,ml));if(l<0)return null;const c=o*this.direction.dot(Ju.cross(Xi));if(c<0||l+c>s)return null;const h=-o*Xi.dot($u);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,n,i,a,r,s,o,l,c,h,d,f,p,v,x,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,h,d,f,p,v,x,m)}set(t,n,i,a,r,s,o,l,c,h,d,f,p,v,x,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/_r.setFromMatrixColumn(t,0).length(),r=1/_r.setFromMatrixColumn(t,1).length(),s=1/_r.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=s*h,p=s*d,v=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=v+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f+x*o,n[4]=v*o-p,n[8]=s*c,n[1]=s*d,n[5]=s*h,n[9]=-o,n[2]=p*o-v,n[6]=x+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,v=c*h,x=c*d;n[0]=f-x*o,n[4]=-s*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=s*h,n[9]=x-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*h,p=s*d,v=o*h,x=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,v=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=v*d+p,n[1]=d,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=f-x*d}else if(t.order==="XZY"){const f=s*l,p=s*c,v=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=s*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gE,t,_E)}lookAt(t,n,i){const a=this.elements;return dn.subVectors(t,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Wi.crossVectors(i,dn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Wi.crossVectors(i,dn)),Wi.normalize(),gl.crossVectors(dn,Wi),a[0]=Wi.x,a[4]=gl.x,a[8]=dn.x,a[1]=Wi.y,a[5]=gl.y,a[9]=dn.y,a[2]=Wi.z,a[6]=gl.z,a[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],_=i[3],g=i[7],y=i[11],C=i[15],A=a[0],b=a[4],U=a[8],T=a[12],M=a[1],D=a[5],W=a[9],k=a[13],Z=a[2],j=a[6],N=a[10],G=a[14],B=a[3],et=a[7],rt=a[11],pt=a[15];return r[0]=s*A+o*M+l*Z+c*B,r[4]=s*b+o*D+l*j+c*et,r[8]=s*U+o*W+l*N+c*rt,r[12]=s*T+o*k+l*G+c*pt,r[1]=h*A+d*M+f*Z+p*B,r[5]=h*b+d*D+f*j+p*et,r[9]=h*U+d*W+f*N+p*rt,r[13]=h*T+d*k+f*G+p*pt,r[2]=v*A+x*M+m*Z+u*B,r[6]=v*b+x*D+m*j+u*et,r[10]=v*U+x*W+m*N+u*rt,r[14]=v*T+x*k+m*G+u*pt,r[3]=_*A+g*M+y*Z+C*B,r[7]=_*b+g*D+y*j+C*et,r[11]=_*U+g*W+y*N+C*rt,r[15]=_*T+g*k+y*G+C*pt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],v=t[3],x=t[7],m=t[11],u=t[15];return v*(+r*l*d-a*c*d-r*o*f+i*c*f+a*o*p-i*l*p)+x*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*h-r*l*h)+m*(+n*c*d-n*o*p-r*s*d+i*s*p+r*o*h-i*c*h)+u*(-a*o*h-n*l*d+n*o*f+a*s*d-i*s*f+i*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],v=t[12],x=t[13],m=t[14],u=t[15],_=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,g=v*f*c-h*m*c-v*l*p+s*m*p+h*l*u-s*f*u,y=h*x*c-v*d*c+v*o*p-s*x*p-h*o*u+s*d*u,C=v*d*l-h*x*l-v*o*f+s*x*f+h*o*m-s*d*m,A=n*_+i*g+a*y+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=_*b,t[1]=(x*f*r-d*m*r-x*a*p+i*m*p+d*a*u-i*f*u)*b,t[2]=(o*m*r-x*l*r+x*a*c-i*m*c-o*a*u+i*l*u)*b,t[3]=(d*l*r-o*f*r-d*a*c+i*f*c+o*a*p-i*l*p)*b,t[4]=g*b,t[5]=(h*m*r-v*f*r+v*a*p-n*m*p-h*a*u+n*f*u)*b,t[6]=(v*l*r-s*m*r-v*a*c+n*m*c+s*a*u-n*l*u)*b,t[7]=(s*f*r-h*l*r+h*a*c-n*f*c-s*a*p+n*l*p)*b,t[8]=y*b,t[9]=(v*d*r-h*x*r-v*i*p+n*x*p+h*i*u-n*d*u)*b,t[10]=(s*x*r-v*o*r+v*i*c-n*x*c-s*i*u+n*o*u)*b,t[11]=(h*o*r-s*d*r-h*i*c+n*d*c+s*i*p-n*o*p)*b,t[12]=C*b,t[13]=(h*x*a-v*d*a+v*i*f-n*x*f-h*i*m+n*d*m)*b,t[14]=(v*o*a-s*x*a-v*i*l+n*x*l+s*i*m-n*o*m)*b,t[15]=(s*d*a-h*o*a+h*i*l-n*d*l-s*i*f+n*o*f)*b,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,h=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*s,0,c*l-a*o,h*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,h=s+s,d=o+o,f=r*c,p=r*h,v=r*d,x=s*h,m=s*d,u=o*d,_=l*c,g=l*h,y=l*d,C=i.x,A=i.y,b=i.z;return a[0]=(1-(x+u))*C,a[1]=(p+y)*C,a[2]=(v-g)*C,a[3]=0,a[4]=(p-y)*A,a[5]=(1-(f+u))*A,a[6]=(m+_)*A,a[7]=0,a[8]=(v+g)*b,a[9]=(m-_)*b,a[10]=(1-(f+x))*b,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=_r.set(a[0],a[1],a[2]).length();const s=_r.set(a[4],a[5],a[6]).length(),o=_r.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Hn.copy(this);const c=1/r,h=1/s,d=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,n.setFromRotationMatrix(Hn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=Di){const l=this.elements,c=2*r/(n-t),h=2*r/(i-a),d=(n+t)/(n-t),f=(i+a)/(i-a);let p,v;if(o===Di)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Nc)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=Di){const l=this.elements,c=1/(n-t),h=1/(i-a),d=1/(s-r),f=(n+t)*c,p=(i+a)*h;let v,x;if(o===Di)v=(s+r)*d,x=-2*d;else if(o===Nc)v=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const _r=new H,Hn=new De,gE=new H(0,0,0),_E=new H(1,1,1),Wi=new H,gl=new H,dn=new H,Vm=new De,km=new Go;class Bi{constructor(t=0,n=0,i=0,a=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Vm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return km.setFromEuler(this),this.setFromQuaternion(km,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vE=0;const Xm=new H,vr=new Go,gi=new De,_l=new H,Fs=new H,xE=new H,SE=new Go,Wm=new H(1,0,0),qm=new H(0,1,0),Ym=new H(0,0,1),jm={type:"added"},yE={type:"removed"},xr={type:"childadded",child:null},tf={type:"childremoved",child:null};class ln extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new H,n=new Bi,i=new Go,a=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new De},normalMatrix:{value:new Pt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return vr.setFromAxisAngle(t,n),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,n){return vr.setFromAxisAngle(t,n),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(Wm,t)}rotateY(t){return this.rotateOnAxis(qm,t)}rotateZ(t){return this.rotateOnAxis(Ym,t)}translateOnAxis(t,n){return Xm.copy(t).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Wm,t)}translateY(t){return this.translateOnAxis(qm,t)}translateZ(t){return this.translateOnAxis(Ym,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?_l.copy(t):_l.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Fs,_l,this.up):gi.lookAt(_l,Fs,this.up),this.quaternion.setFromRotationMatrix(gi),a&&(gi.extractRotation(a.matrixWorld),vr.setFromRotationMatrix(gi),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jm),xr.child=t,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(yE),tf.child=t,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jm),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,xE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,SE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),f=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}ln.DEFAULT_UP=new H(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new H,_i=new H,ef=new H,vi=new H,Sr=new H,yr=new H,Zm=new H,nf=new H,af=new H,rf=new H;class ti{constructor(t=new H,n=new H,i=new H){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Gn.subVectors(t,n),a.cross(Gn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Gn.subVectors(a,n),_i.subVectors(i,n),ef.subVectors(t,n);const s=Gn.dot(Gn),o=Gn.dot(_i),l=Gn.dot(ef),c=_i.dot(_i),h=_i.dot(ef),d=s*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,v=(s*h-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(s,vi.y),l.addScaledVector(o,vi.z),l)}static isFrontFacing(t,n,i,a){return Gn.subVectors(i,n),_i.subVectors(t,n),Gn.cross(_i).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Gn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ti.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return ti.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;Sr.subVectors(a,i),yr.subVectors(r,i),nf.subVectors(t,i);const l=Sr.dot(nf),c=yr.dot(nf);if(l<=0&&c<=0)return n.copy(i);af.subVectors(t,a);const h=Sr.dot(af),d=yr.dot(af);if(h>=0&&d<=h)return n.copy(a);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(Sr,s);rf.subVectors(t,r);const p=Sr.dot(rf),v=yr.dot(rf);if(v>=0&&p<=v)return n.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(yr,o);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Zm.subVectors(r,a),o=(d-h)/(d-h+(p-v)),n.copy(a).addScaledVector(Zm,o);const u=1/(m+x+f);return s=x*u,o=f*u,n.copy(i).addScaledVector(Sr,s).addScaledVector(yr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},vl={h:0,s:0,l:0};function sf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Ut{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=$t.workingColorSpace){return this.r=t,this.g=n,this.b=i,$t.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=$t.workingColorSpace){if(t=sE(t,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=sf(s,r,t+1/3),this.g=sf(s,r,t),this.b=sf(s,r,t-1/3)}return $t.toWorkingColorSpace(this,a),this}setStyle(t,n=Kn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Kn){const i=Vv[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=qu(t.r),this.g=qu(t.g),this.b=qu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return $t.fromWorkingColorSpace(je.copy(this),t),Math.round(rn(je.r*255,0,255))*65536+Math.round(rn(je.g*255,0,255))*256+Math.round(rn(je.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=$t.workingColorSpace){$t.fromWorkingColorSpace(je.copy(this),n);const i=je.r,a=je.g,r=je.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=$t.workingColorSpace){return $t.fromWorkingColorSpace(je.copy(this),n),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Kn){$t.fromWorkingColorSpace(je.copy(this),t);const n=je.r,i=je.g,a=je.b;return t!==Kn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+n,qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(qi),t.getHSL(vl);const i=Xu(qi.h,vl.h,n),a=Xu(qi.s,vl.s,n),r=Xu(qi.l,vl.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Ut;Ut.NAMES=Vv;let ME=0;class ko extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=$r,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=hh,this.blendEquation=za,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==va&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fh&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==za&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jd extends ko{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new H,xl=new te;class ai{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=zm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return co("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(t),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ae.fromBufferAttribute(this,n),Ae.applyMatrix3(t),this.setXYZ(n,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ae.fromBufferAttribute(this,n),Ae.applyMatrix4(t),this.setXYZ(n,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ae.fromBufferAttribute(this,n),Ae.applyNormalMatrix(t),this.setXYZ(n,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ae.fromBufferAttribute(this,n),Ae.transformDirection(t),this.setXYZ(n,Ae.x,Ae.y,Ae.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ps(n,this.array)),n}setX(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ps(n,this.array)),n}setY(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ps(n,this.array)),n}setZ(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ps(n,this.array)),n}setW(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),a=nn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),a=nn(a,this.array),r=nn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zm&&(t.usage=this.usage),t}}class kv extends ai{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Xv extends ai{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class ja extends ai{constructor(t,n,i){super(new Float32Array(t),n,i)}}let EE=0;const bn=new De,of=new ln,Mr=new H,pn=new Vo,Hs=new Vo,ze=new H;class Ma extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bv(t)?Xv:kv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Pt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,n,i){return bn.makeTranslation(t,n,i),this.applyMatrix4(bn),this}scale(t,n,i){return bn.makeScale(t,n,i),this.applyMatrix4(bn),this}lookAt(t){return of.lookAt(t),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ja(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(pn.min,Hs.min),pn.expandByPoint(ze),ze.addVectors(pn.max,Hs.max),pn.expandByPoint(ze)):(pn.expandByPoint(Hs.min),pn.expandByPoint(Hs.max))}pn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)ze.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(ze));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(t,c),ze.add(Mr)),a=Math.max(a,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new H,l[U]=new H;const c=new H,h=new H,d=new H,f=new te,p=new te,v=new te,x=new H,m=new H;function u(U,T,M){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),v.sub(f);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(D),o[U].add(x),o[T].add(x),o[M].add(x),l[U].add(m),l[T].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let U=0,T=_.length;U<T;++U){const M=_[U],D=M.start,W=M.count;for(let k=D,Z=D+W;k<Z;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const g=new H,y=new H,C=new H,A=new H;function b(U){C.fromBufferAttribute(a,U),A.copy(C);const T=o[U];g.copy(T),g.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(A,T);const D=y.dot(l[U])<0?-1:1;s.setXYZW(U,g.x,g.y,g.z,D)}for(let U=0,T=_.length;U<T;++U){const M=_[U],D=M.start,W=M.count;for(let k=D,Z=D+W;k<Z;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new H,r=new H,s=new H,o=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,v),r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),h.subVectors(s,r),d.subVectors(a,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)ze.fromBufferAttribute(t,n),ze.normalize(),t.setXYZ(n,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new ai(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ma,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Km=new De,Ra=new Hv,Sl=new eu,Qm=new H,Er=new H,Tr=new H,br=new H,lf=new H,yl=new H,Ml=new te,El=new te,Tl=new te,Jm=new H,$m=new H,tg=new H,bl=new H,Al=new H;class qn extends ln{constructor(t=new Ma,n=new Jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(lf.fromBufferAttribute(d,t),s?yl.addScaledVector(lf,h):yl.addScaledVector(lf.sub(n),h))}n.add(yl)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(r),Ra.copy(t.ray).recast(t.near),!(Sl.containsPoint(Ra.origin)===!1&&(Ra.intersectSphere(Sl,Qm)===null||Ra.origin.distanceToSquared(Qm)>(t.far-t.near)**2))&&(Km.copy(r).invert(),Ra.copy(t.ray).applyMatrix4(Km),!(i.boundingBox!==null&&Ra.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ra)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,x=f.length;v<x;v++){const m=f[v],u=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=g;y<C;y+=3){const A=o.getX(y),b=o.getX(y+1),U=o.getX(y+2);a=Rl(this,u,t,i,c,h,d,A,b,U),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=o.getX(m),g=o.getX(m+1),y=o.getX(m+2);a=Rl(this,s,t,i,c,h,d,_,g,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,x=f.length;v<x;v++){const m=f[v],u=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=g;y<C;y+=3){const A=y,b=y+1,U=y+2;a=Rl(this,u,t,i,c,h,d,A,b,U),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=m,g=m+1,y=m+2;a=Rl(this,s,t,i,c,h,d,_,g,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function TE(e,t,n,i,a,r,s,o){let l;if(t.side===sn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===va,o),l===null)return null;Al.copy(o),Al.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:e}}function Rl(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,Er),e.getVertexPosition(l,Tr),e.getVertexPosition(c,br);const h=TE(e,t,n,i,Er,Tr,br,bl);if(h){a&&(Ml.fromBufferAttribute(a,o),El.fromBufferAttribute(a,l),Tl.fromBufferAttribute(a,c),h.uv=ti.getInterpolation(bl,Er,Tr,br,Ml,El,Tl,new te)),r&&(Ml.fromBufferAttribute(r,o),El.fromBufferAttribute(r,l),Tl.fromBufferAttribute(r,c),h.uv1=ti.getInterpolation(bl,Er,Tr,br,Ml,El,Tl,new te)),s&&(Jm.fromBufferAttribute(s,o),$m.fromBufferAttribute(s,l),tg.fromBufferAttribute(s,c),h.normal=ti.getInterpolation(bl,Er,Tr,br,Jm,$m,tg,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};ti.getNormal(Er,Tr,br,d.normal),h.face=d}return h}class Ts extends Ma{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,t,s,r,0),v("z","y","x",1,-1,i,n,-t,s,r,1),v("x","z","y",1,1,t,i,n,a,s,2),v("x","z","y",1,-1,t,i,-n,a,s,3),v("x","y","z",1,-1,t,n,i,a,r,4),v("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new ja(c,3)),this.setAttribute("normal",new ja(h,3)),this.setAttribute("uv",new ja(d,2));function v(x,m,u,_,g,y,C,A,b,U,T){const M=y/b,D=C/U,W=y/2,k=C/2,Z=A/2,j=b+1,N=U+1;let G=0,B=0;const et=new H;for(let rt=0;rt<N;rt++){const pt=rt*D-k;for(let Bt=0;Bt<j;Bt++){const Yt=Bt*M-W;et[x]=Yt*_,et[m]=pt*g,et[u]=Z,c.push(et.x,et.y,et.z),et[x]=0,et[m]=0,et[u]=A>0?1:-1,h.push(et.x,et.y,et.z),d.push(Bt/b),d.push(1-rt/U),G+=1}}for(let rt=0;rt<U;rt++)for(let pt=0;pt<b;pt++){const Bt=f+pt+j*rt,Yt=f+pt+j*(rt+1),X=f+(pt+1)+j*(rt+1),tt=f+(pt+1)+j*rt;l.push(Bt,Yt,tt),l.push(Yt,X,tt),B+=6}o.addGroup(p,B,T),p+=B,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function Qe(e){const t={};for(let n=0;n<e.length;n++){const i=ms(e[n]);for(const a in i)t[a]=i[a]}return t}function bE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Wv(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const AE={clone:ms,merge:Qe};var RE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends ko{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RE,this.fragmentShader=CE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=bE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class qv extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Di}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new H,eg=new te,ng=new te;class Dn extends qv{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=kh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ku*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,n){return this.getViewBounds(t,eg,ng),n.subVectors(ng,eg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ku*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ar=-90,Rr=1;class wE extends ln{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Dn(Ar,Rr,t,n);a.layers=this.layers,this.add(a);const r=new Dn(Ar,Rr,t,n);r.layers=this.layers,this.add(r);const s=new Dn(Ar,Rr,t,n);s.layers=this.layers,this.add(s);const o=new Dn(Ar,Rr,t,n);o.layers=this.layers,this.add(o);const l=new Dn(Ar,Rr,t,n);l.layers=this.layers,this.add(l);const c=new Dn(Ar,Rr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,a),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Yv extends on{constructor(t,n,i,a,r,s,o,l,c,h){t=t!==void 0?t:[],n=n!==void 0?n:fs,super(t,n,i,a,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class DE extends er{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Yv(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ts(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ha});r.uniforms.tEquirect.value=n;const s=new qn(a,r),o=n.minFilter;return n.minFilter===Ga&&(n.minFilter=Xn),new wE(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n,i,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}const cf=new H,UE=new H,LE=new Pt;class Na{constructor(t=new H(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=cf.subVectors(i,n).cross(UE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(cf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||LE.getNormalMatrix(t),a=this.coplanarPoint(cf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ca=new eu,Cl=new H;class jv{constructor(t=new Na,n=new Na,i=new Na,a=new Na,r=new Na,s=new Na){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Di){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],f=a[7],p=a[8],v=a[9],x=a[10],m=a[11],u=a[12],_=a[13],g=a[14],y=a[15];if(i[0].setComponents(l-r,f-c,m-p,y-u).normalize(),i[1].setComponents(l+r,f+c,m+p,y+u).normalize(),i[2].setComponents(l+s,f+h,m+v,y+_).normalize(),i[3].setComponents(l-s,f-h,m-v,y-_).normalize(),i[4].setComponents(l-o,f-d,m-x,y-g).normalize(),n===Di)i[5].setComponents(l+o,f+d,m+x,y+g).normalize();else if(n===Nc)i[5].setComponents(o,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ca.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ca)}intersectsSprite(t){return Ca.center.set(0,0,0),Ca.radius=.7071067811865476,Ca.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ca)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Cl.x=a.normal.x>0?t.max.x:t.min.x,Cl.y=a.normal.y>0?t.max.y:t.min.y,Cl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function NE(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l._updateRange,f=l.updateRanges;if(e.bindBuffer(c,o),d.count===-1&&f.length===0&&e.bufferSubData(c,0,h),f.length!==0){for(let p=0,v=f.length;p<v;p++){const x=f[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(e.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}class Xo extends Ma{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,f=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<h;u++){const _=u*f-s;for(let g=0;g<c;g++){const y=g*d-r;v.push(y,-_,0),x.push(0,0,1),m.push(g/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const g=_+c*u,y=_+c*(u+1),C=_+1+c*(u+1),A=_+1+c*u;p.push(g,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new ja(v,3)),this.setAttribute("normal",new ja(x,3)),this.setAttribute("uv",new ja(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.widthSegments,t.heightSegments)}}var OE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PE=`#ifdef USE_ALPHAHASH
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
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
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
#endif`,GE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VE=`#ifdef USE_BATCHING
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
#endif`,kE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YE=`#ifdef USE_IRIDESCENCE
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
#endif`,jE=`#ifdef USE_BUMPMAP
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
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,iT=`#define PI 3.141592653589793
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
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rT=`vec3 transformedNormal = objectNormal;
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
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uT="gl_FragColor = linearToOutputTexel( gl_FragColor );",fT=`
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
}`,hT=`#ifdef USE_ENVMAP
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
#endif`,dT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pT=`#ifdef USE_ENVMAP
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
#endif`,mT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ST=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yT=`#ifdef USE_GRADIENTMAP
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
}`,MT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ET=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bT=`uniform bool receiveShadow;
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
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,RT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
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
#endif`,LT=`struct PhysicalMaterial {
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
}`,NT=`
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
#endif`,OT=`#if defined( RE_IndirectDiffuse )
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
#endif`,PT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kT=`#if defined( USE_POINTS_UV )
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
#endif`,XT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`#ifdef USE_MORPHTARGETS
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
#endif`,KT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
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
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v1=`float getShadowMask() {
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
}`,x1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
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
#endif`,y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M1=`#ifdef USE_SKINNING
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
#endif`,E1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#ifdef USE_TRANSMISSION
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O1=`uniform sampler2D t2D;
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`#include <common>
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
}`,H1=`#if DEPTH_PACKING == 3200
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
}`,G1=`#define DISTANCE
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
}`,V1=`#define DISTANCE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
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
}`,q1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,j1=`uniform vec3 diffuse;
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
}`,Z1=`#define LAMBERT
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
}`,K1=`#define LAMBERT
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
}`,Q1=`#define MATCAP
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
}`,J1=`#define MATCAP
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
}`,$1=`#define NORMAL
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
}`,tb=`#define NORMAL
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
}`,eb=`#define PHONG
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
}`,nb=`#define PHONG
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
}`,ib=`#define STANDARD
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
}`,ab=`#define STANDARD
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
}`,rb=`#define TOON
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
}`,sb=`#define TOON
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
}`,ob=`uniform float size;
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,ub=`uniform vec3 color;
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
}`,fb=`uniform float rotation;
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
}`,hb=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:OE,alphahash_pars_fragment:PE,alphamap_fragment:zE,alphamap_pars_fragment:BE,alphatest_fragment:IE,alphatest_pars_fragment:FE,aomap_fragment:HE,aomap_pars_fragment:GE,batching_pars_vertex:VE,batching_vertex:kE,begin_vertex:XE,beginnormal_vertex:WE,bsdfs:qE,iridescence_fragment:YE,bumpmap_pars_fragment:jE,clipping_planes_fragment:ZE,clipping_planes_pars_fragment:KE,clipping_planes_pars_vertex:QE,clipping_planes_vertex:JE,color_fragment:$E,color_pars_fragment:tT,color_pars_vertex:eT,color_vertex:nT,common:iT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:rT,displacementmap_pars_vertex:sT,displacementmap_vertex:oT,emissivemap_fragment:lT,emissivemap_pars_fragment:cT,colorspace_fragment:uT,colorspace_pars_fragment:fT,envmap_fragment:hT,envmap_common_pars_fragment:dT,envmap_pars_fragment:pT,envmap_pars_vertex:mT,envmap_physical_pars_fragment:AT,envmap_vertex:gT,fog_vertex:_T,fog_pars_vertex:vT,fog_fragment:xT,fog_pars_fragment:ST,gradientmap_pars_fragment:yT,lightmap_pars_fragment:MT,lights_lambert_fragment:ET,lights_lambert_pars_fragment:TT,lights_pars_begin:bT,lights_toon_fragment:RT,lights_toon_pars_fragment:CT,lights_phong_fragment:wT,lights_phong_pars_fragment:DT,lights_physical_fragment:UT,lights_physical_pars_fragment:LT,lights_fragment_begin:NT,lights_fragment_maps:OT,lights_fragment_end:PT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:BT,logdepthbuf_pars_vertex:IT,logdepthbuf_vertex:FT,map_fragment:HT,map_pars_fragment:GT,map_particle_fragment:VT,map_particle_pars_fragment:kT,metalnessmap_fragment:XT,metalnessmap_pars_fragment:WT,morphinstance_vertex:qT,morphcolor_vertex:YT,morphnormal_vertex:jT,morphtarget_pars_vertex:ZT,morphtarget_vertex:KT,normal_fragment_begin:QT,normal_fragment_maps:JT,normal_pars_fragment:$T,normal_pars_vertex:t1,normal_vertex:e1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:a1,clearcoat_pars_fragment:r1,iridescence_pars_fragment:s1,opaque_fragment:o1,packing:l1,premultiplied_alpha_fragment:c1,project_vertex:u1,dithering_fragment:f1,dithering_pars_fragment:h1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:_1,shadowmask_pars_fragment:v1,skinbase_vertex:x1,skinning_pars_vertex:S1,skinning_vertex:y1,skinnormal_vertex:M1,specularmap_fragment:E1,specularmap_pars_fragment:T1,tonemapping_fragment:b1,tonemapping_pars_fragment:A1,transmission_fragment:R1,transmission_pars_fragment:C1,uv_pars_fragment:w1,uv_pars_vertex:D1,uv_vertex:U1,worldpos_vertex:L1,background_vert:N1,background_frag:O1,backgroundCube_vert:P1,backgroundCube_frag:z1,cube_vert:B1,cube_frag:I1,depth_vert:F1,depth_frag:H1,distanceRGBA_vert:G1,distanceRGBA_frag:V1,equirect_vert:k1,equirect_frag:X1,linedashed_vert:W1,linedashed_frag:q1,meshbasic_vert:Y1,meshbasic_frag:j1,meshlambert_vert:Z1,meshlambert_frag:K1,meshmatcap_vert:Q1,meshmatcap_frag:J1,meshnormal_vert:$1,meshnormal_frag:tb,meshphong_vert:eb,meshphong_frag:nb,meshphysical_vert:ib,meshphysical_frag:ab,meshtoon_vert:rb,meshtoon_frag:sb,points_vert:ob,points_frag:lb,shadow_vert:cb,shadow_frag:ub,sprite_vert:fb,sprite_frag:hb},ot={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Qn={basic:{uniforms:Qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Qe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Qe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Qe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Qe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Qe([ot.points,ot.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Qe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Qe([ot.common,ot.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Qe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Qe([ot.sprite,ot.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Qe([ot.common,ot.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Qe([ot.lights,ot.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Qn.physical={uniforms:Qe([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const wl={r:0,b:0,g:0},wa=new Bi,db=new De;function pb(e,t,n,i,a,r,s){const o=new Ut(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:t).get(g)),g}function x(_){let g=!1;const y=v(_);y===null?u(o,l):y&&y.isColor&&(u(y,1),g=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,g){const y=v(g);y&&(y.isCubeTexture||y.mapping===$c)?(h===void 0&&(h=new qn(new Ts(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:ms(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),wa.copy(g.backgroundRotation),wa.x*=-1,wa.y*=-1,wa.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wa.y*=-1,wa.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(db.makeRotationFromEuler(wa)),h.material.toneMapped=$t.getTransfer(y.colorSpace)!==le,(d!==y||f!==y.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new qn(new Xo(2,2),new si({name:"BackgroundMaterial",uniforms:ms(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=$t.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(wl,Wv(e)),i.buffers.color.setClear(wl.r,wl.g,wl.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(_,g=1){o.set(_),l=g,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:x,addToRenderList:m}}function mb(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(M,D,W,k,Z){let j=!1;const N=d(k,W,D);r!==N&&(r=N,c(r.object)),j=p(M,k,W,Z),j&&v(M,k,W,Z),Z!==null&&t.update(Z,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,y(M,D,W,k),Z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function d(M,D,W){const k=W.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let j=Z[D.id];j===void 0&&(j={},Z[D.id]=j);let N=j[k];return N===void 0&&(N=f(l()),j[k]=N),N}function f(M){const D=[],W=[],k=[];for(let Z=0;Z<n;Z++)D[Z]=0,W[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,D,W,k){const Z=r.attributes,j=D.attributes;let N=0;const G=W.getAttributes();for(const B in G)if(G[B].location>=0){const rt=Z[B];let pt=j[B];if(pt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;N++}return r.attributesNum!==N||r.index!==k}function v(M,D,W,k){const Z={},j=D.attributes;let N=0;const G=W.getAttributes();for(const B in G)if(G[B].location>=0){let rt=j[B];rt===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),Z[B]=pt,N++}r.attributes=Z,r.attributesNum=N,r.index=k}function x(){const M=r.newAttributes;for(let D=0,W=M.length;D<W;D++)M[D]=0}function m(M){u(M,0)}function u(M,D){const W=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;W[M]=1,k[M]===0&&(e.enableVertexAttribArray(M),k[M]=1),Z[M]!==D&&(e.vertexAttribDivisor(M,D),Z[M]=D)}function _(){const M=r.newAttributes,D=r.enabledAttributes;for(let W=0,k=D.length;W<k;W++)D[W]!==M[W]&&(e.disableVertexAttribArray(W),D[W]=0)}function g(M,D,W,k,Z,j,N){N===!0?e.vertexAttribIPointer(M,D,W,Z,j):e.vertexAttribPointer(M,D,W,k,Z,j)}function y(M,D,W,k){x();const Z=k.attributes,j=W.getAttributes(),N=D.defaultAttributeValues;for(const G in j){const B=j[G];if(B.location>=0){let et=Z[G];if(et===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){const rt=et.normalized,pt=et.itemSize,Bt=t.get(et);if(Bt===void 0)continue;const Yt=Bt.buffer,X=Bt.type,tt=Bt.bytesPerElement,_t=X===e.INT||X===e.UNSIGNED_INT||et.gpuType===Wd;if(et.isInterleavedBufferAttribute){const ft=et.data,Tt=ft.stride,wt=et.offset;if(ft.isInstancedInterleavedBuffer){for(let Gt=0;Gt<B.locationSize;Gt++)u(B.location+Gt,ft.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Gt=0;Gt<B.locationSize;Gt++)m(B.location+Gt);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let Gt=0;Gt<B.locationSize;Gt++)g(B.location+Gt,pt/B.locationSize,X,rt,Tt*tt,(wt+pt/B.locationSize*Gt)*tt,_t)}else{if(et.isInstancedBufferAttribute){for(let ft=0;ft<B.locationSize;ft++)u(B.location+ft,et.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<B.locationSize;ft++)m(B.location+ft);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let ft=0;ft<B.locationSize;ft++)g(B.location+ft,pt/B.locationSize,X,rt,pt*tt,pt/B.locationSize*ft*tt,_t)}}else if(N!==void 0){const rt=N[G];if(rt!==void 0)switch(rt.length){case 2:e.vertexAttrib2fv(B.location,rt);break;case 3:e.vertexAttrib3fv(B.location,rt);break;case 4:e.vertexAttrib4fv(B.location,rt);break;default:e.vertexAttrib1fv(B.location,rt)}}}}_()}function C(){U();for(const M in i){const D=i[M];for(const W in D){const k=D[W];for(const Z in k)h(k[Z].object),delete k[Z];delete D[W]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const W in D){const k=D[W];for(const Z in k)h(k[Z].object),delete k[Z];delete D[W]}delete i[M.id]}function b(M){for(const D in i){const W=i[D];if(W[M.id]===void 0)continue;const k=W[M.id];for(const Z in k)h(k[Z].object),delete k[Z];delete W[M.id]}}function U(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:U,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function gb(e,t,n){let i;function a(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function s(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)s(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x];for(let x=0;x<f.length;x++)n.update(v,i,f[x])}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _b(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==Wn&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wi&&!b)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),x=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),u=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:y,maxSamples:C}}function vb(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Na,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!a||v===null||v.length===0||r&&!m)r?h(null):c();else{const _=r?0:i,g=_*4;let y=u.clippingState||null;l.value=y,y=h(v,f,g,p);for(let C=0;C!==g;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,y=p;g!==x;++g,y+=4)s.copy(d[g]).applyMatrix4(_,o),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function xb(e){let t=new WeakMap;function n(s,o){return o===dh?s.mapping=fs:o===ph&&(s.mapping=hs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===dh||o===ph)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new DE(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Sb extends qv{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xr=4,ig=[.125,.215,.35,.446,.526,.582],Ba=20,uf=new Sb,ag=new Ut;let ff=null,hf=0,df=0,pf=!1;const Oa=(1+Math.sqrt(5))/2,Cr=1/Oa,rg=[new H(-Oa,Cr,0),new H(Oa,Cr,0),new H(-Cr,0,Oa),new H(Cr,0,Oa),new H(0,Oa,-Cr),new H(0,Oa,Cr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class sg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){ff=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,a,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ff,hf,df),this._renderer.xr.enabled=pf,t.scissorTest=!1,Dl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===fs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ff=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Fo,format:Wn,colorSpace:ya,depthBuffer:!1},a=og(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yb(r)),this._blurMaterial=Mb(r,t,n)}return a}_compileMaterial(t){const n=new qn(this._lodPlanes[0],t);this._renderer.compile(n,uf)}_sceneToCubeUV(t,n,i,a){const o=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ag),h.toneMapping=da,h.autoClear=!1;const p=new Jd({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new qn(new Ts,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(ag),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):_===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;Dl(a,_*g,u>2?g:0,g,g),h.setRenderTarget(a),x&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===fs||t.mapping===hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new qn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Dl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,uf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rg[(a-r-1)%rg.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new qn(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ba-1),x=r/v,m=isFinite(r)?1+Math.floor(h*x):Ba;m>Ba&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ba}`);const u=[];let _=0;for(let b=0;b<Ba;++b){const U=b/x,T=Math.exp(-U*U/2);u.push(T),b===0?_+=T:b<m&&(_+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const y=this._sizeLods[a],C=3*y*(a>g-Xr?a-g+Xr:0),A=4*(this._cubeSize-y);Dl(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(d,uf)}}function yb(e){const t=[],n=[],i=[];let a=e;const r=e-Xr+1+ig.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Xr?l=ig[s-e+Xr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,x=3,m=2,u=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),y=new Float32Array(u*v*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,U=A>2?0:-1,T=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];_.set(T,x*v*A),g.set(f,m*v*A);const M=[A,A,A,A,A,A];y.set(M,u*v*A)}const C=new Ma;C.setAttribute("position",new ai(_,x)),C.setAttribute("uv",new ai(g,m)),C.setAttribute("faceIndex",new ai(y,u)),t.push(C),a>Xr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function og(e,t,n){const i=new er(e,t,n);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function Mb(e,t,n){const i=new Float32Array(Ba),a=new H(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Ba,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$d(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function lg(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function cg(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function Eb(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===dh||l===ph,h=l===fs||l===hs;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new sg(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&a(p)?(n===null&&(n=new sg(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Tb(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&co("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function bb(e,t,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)t.remove(x[m])}f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],e.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)t.update(x[m],e.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const C=_[g+0],A=_[g+1],b=_[g+2];f.push(C,A,A,b,b,C)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const C=g+0,A=g+1,b=g+2;f.push(C,A,A,b,b,C)}}else return;const m=new(Bv(f)?Xv:kv)(f,1);m.version=x;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ab(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,v){v!==0&&(e.drawElementsInstanced(i,p,r,f*s,v),n.update(p,i,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function d(f,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,v);let u=0;for(let _=0;_<v;_++)u+=p[_];for(let _=0;_<x.length;_++)n.update(u,i,x[_])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Rb(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function Cb(e,t,n){const i=new WeakMap,a=new Fe;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let M=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let C=o.attributes.position.count*y,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*A*4*d),U=new Fv(b,C,A,d);U.type=wi,U.needsUpdate=!0;const T=y*4;for(let D=0;D<d;D++){const W=u[D],k=_[D],Z=g[D],j=C*A*4*D;for(let N=0;N<W.count;N++){const G=N*T;v===!0&&(a.fromBufferAttribute(W,N),b[j+G+0]=a.x,b[j+G+1]=a.y,b[j+G+2]=a.z,b[j+G+3]=0),x===!0&&(a.fromBufferAttribute(k,N),b[j+G+4]=a.x,b[j+G+5]=a.y,b[j+G+6]=a.z,b[j+G+7]=0),m===!0&&(a.fromBufferAttribute(Z,N),b[j+G+8]=a.x,b[j+G+9]=a.y,b[j+G+10]=a.z,b[j+G+11]=Z.itemSize===4?a.w:1)}}f={count:d,texture:U,size:new te(C,A)},i.set(o,f),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function wb(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(a.get(d)!==c&&(t.update(d),a.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return d}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}class Kv extends on{constructor(t,n,i,a,r,s,o,l,c,h=ts){if(h!==ts&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ts&&(i=tr),i===void 0&&h===ps&&(i=ds),super(null,a,r,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Qv=new on,ug=new Kv(1,1),Jv=new Fv,$v=new pE,tx=new Yv,fg=[],hg=[],dg=new Float32Array(16),pg=new Float32Array(9),mg=new Float32Array(4);function bs(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=fg[a];if(r===void 0&&(r=new Float32Array(a),fg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Oe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Pe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function nu(e,t){let n=hg[t];n===void 0&&(n=new Int32Array(t),hg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Db(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ub(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2fv(this.addr,t),Pe(n,t)}}function Lb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Oe(n,t))return;e.uniform3fv(this.addr,t),Pe(n,t)}}function Nb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4fv(this.addr,t),Pe(n,t)}}function Ob(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Pe(n,t)}else{if(Oe(n,i))return;mg.set(i),e.uniformMatrix2fv(this.addr,!1,mg),Pe(n,i)}}function Pb(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Pe(n,t)}else{if(Oe(n,i))return;pg.set(i),e.uniformMatrix3fv(this.addr,!1,pg),Pe(n,i)}}function zb(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Pe(n,t)}else{if(Oe(n,i))return;dg.set(i),e.uniformMatrix4fv(this.addr,!1,dg),Pe(n,i)}}function Bb(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ib(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2iv(this.addr,t),Pe(n,t)}}function Fb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oe(n,t))return;e.uniform3iv(this.addr,t),Pe(n,t)}}function Hb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4iv(this.addr,t),Pe(n,t)}}function Gb(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Vb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2uiv(this.addr,t),Pe(n,t)}}function kb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oe(n,t))return;e.uniform3uiv(this.addr,t),Pe(n,t)}}function Xb(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4uiv(this.addr,t),Pe(n,t)}}function Wb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(ug.compareFunction=zv,r=ug):r=Qv,n.setTexture2D(t||r,a)}function qb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||$v,a)}function Yb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||tx,a)}function jb(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||Jv,a)}function Zb(e){switch(e){case 5126:return Db;case 35664:return Ub;case 35665:return Lb;case 35666:return Nb;case 35674:return Ob;case 35675:return Pb;case 35676:return zb;case 5124:case 35670:return Bb;case 35667:case 35671:return Ib;case 35668:case 35672:return Fb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Vb;case 36295:return kb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return jb}}function Kb(e,t){e.uniform1fv(this.addr,t)}function Qb(e,t){const n=bs(t,this.size,2);e.uniform2fv(this.addr,n)}function Jb(e,t){const n=bs(t,this.size,3);e.uniform3fv(this.addr,n)}function $b(e,t){const n=bs(t,this.size,4);e.uniform4fv(this.addr,n)}function tA(e,t){const n=bs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function eA(e,t){const n=bs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function nA(e,t){const n=bs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function iA(e,t){e.uniform1iv(this.addr,t)}function aA(e,t){e.uniform2iv(this.addr,t)}function rA(e,t){e.uniform3iv(this.addr,t)}function sA(e,t){e.uniform4iv(this.addr,t)}function oA(e,t){e.uniform1uiv(this.addr,t)}function lA(e,t){e.uniform2uiv(this.addr,t)}function cA(e,t){e.uniform3uiv(this.addr,t)}function uA(e,t){e.uniform4uiv(this.addr,t)}function fA(e,t,n){const i=this.cache,a=t.length,r=nu(n,a);Oe(i,r)||(e.uniform1iv(this.addr,r),Pe(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||Qv,r[s])}function hA(e,t,n){const i=this.cache,a=t.length,r=nu(n,a);Oe(i,r)||(e.uniform1iv(this.addr,r),Pe(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||$v,r[s])}function dA(e,t,n){const i=this.cache,a=t.length,r=nu(n,a);Oe(i,r)||(e.uniform1iv(this.addr,r),Pe(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||tx,r[s])}function pA(e,t,n){const i=this.cache,a=t.length,r=nu(n,a);Oe(i,r)||(e.uniform1iv(this.addr,r),Pe(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||Jv,r[s])}function mA(e){switch(e){case 5126:return Kb;case 35664:return Qb;case 35665:return Jb;case 35666:return $b;case 35674:return tA;case 35675:return eA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return rA;case 35669:case 35673:return sA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return pA}}class gA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Zb(n.type)}}class _A{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mA(n.type)}}class vA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const mf=/(\w+)(\])?(\[|\.)?/g;function gg(e,t){e.seq.push(t),e.map[t.id]=t}function xA(e,t,n){const i=e.name,a=i.length;for(mf.lastIndex=0;;){const r=mf.exec(i),s=mf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){gg(n,c===void 0?new gA(o,e,t):new _A(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new vA(o),gg(n,d)),n=d}}}class tc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);xA(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function _g(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const SA=37297;let yA=0;function MA(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function EA(e){const t=$t.getPrimaries($t.workingColorSpace),n=$t.getPrimaries(e);let i;switch(t===n?i="":t===Lc&&n===Uc?i="LinearDisplayP3ToLinearSRGB":t===Uc&&n===Lc&&(i="LinearSRGBToLinearDisplayP3"),e){case ya:case tu:return[i,"LinearTransferOETF"];case Kn:case Qd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function vg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+MA(e.getShaderSource(t),s)}else return a}function TA(e,t){const n=EA(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function bA(e,t){let n;switch(t){case GM:n="Linear";break;case VM:n="Reinhard";break;case kM:n="Cineon";break;case XM:n="ACESFilmic";break;case qM:n="AgX";break;case YM:n="Neutral";break;case WM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new H;function AA(){$t.getLuminanceCoefficients(Ul);const e=Ul.x.toFixed(4),t=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RA(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function CA(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function wA(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function qs(e){return e!==""}function xg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(e){return e.replace(DA,LA)}const UA=new Map;function LA(e,t){let n=Ot[t];if(n===void 0){const i=UA.get(t);if(i!==void 0)n=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xh(n)}const NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(e){return e.replace(NA,OA)}function OA(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Mg(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function PA(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ev?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===dM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function zA(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case fs:case hs:t="ENVMAP_TYPE_CUBE";break;case $c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function BA(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function IA(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Tv:t="ENVMAP_BLENDING_MULTIPLY";break;case FM:t="ENVMAP_BLENDING_MIX";break;case HM:t="ENVMAP_BLENDING_ADD";break}return t}function FA(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function HA(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=PA(n),c=zA(n),h=BA(n),d=IA(n),f=FA(n),p=RA(n),v=CA(r),x=a.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(qs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(qs).join(`
`),u.length>0&&(u+=`
`)):(m=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),u=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==da?"#define TONE_MAPPING":"",n.toneMapping!==da?Ot.tonemapping_pars_fragment:"",n.toneMapping!==da?bA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,TA("linearToOutputTexel",n.outputColorSpace),AA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qs).join(`
`)),s=Xh(s),s=xg(s,n),s=Sg(s,n),o=Xh(o),o=xg(o,n),o=Sg(o,n),s=yg(s),o=yg(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+m+s,y=_+u+o,C=_g(a,a.VERTEX_SHADER,g),A=_g(a,a.FRAGMENT_SHADER,y);a.attachShader(x,C),a.attachShader(x,A),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function b(D){if(e.debug.checkShaderErrors){const W=a.getProgramInfoLog(x).trim(),k=a.getShaderInfoLog(C).trim(),Z=a.getShaderInfoLog(A).trim();let j=!0,N=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,C,A);else{const G=vg(a,C,"vertex"),B=vg(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+G+`
`+B)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||Z==="")&&(N=!1);N&&(D.diagnostics={runnable:j,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:u}})}a.deleteShader(C),a.deleteShader(A),U=new tc(a,x),T=wA(a,x)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(x,SA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yA++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let GA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new kA(t),n.set(t,i)),i}}class kA{constructor(t){this.id=GA++,this.code=t,this.usedTimes=0}}function XA(e,t,n,i,a,r,s){const o=new Gv,l=new VA,c=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,D,W,k){const Z=W.fog,j=k.geometry,N=T.isMeshStandardMaterial?W.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),B=G&&G.mapping===$c?G.image.height:null,et=v[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pt=rt!==void 0?rt.length:0;let Bt=0;j.morphAttributes.position!==void 0&&(Bt=1),j.morphAttributes.normal!==void 0&&(Bt=2),j.morphAttributes.color!==void 0&&(Bt=3);let Yt,X,tt,_t;if(et){const Zt=Qn[et];Yt=Zt.vertexShader,X=Zt.fragmentShader}else Yt=T.vertexShader,X=T.fragmentShader,l.update(T),tt=l.getVertexShaderID(T),_t=l.getFragmentShaderID(T);const ft=e.getRenderTarget(),Tt=k.isInstancedMesh===!0,wt=k.isBatchedMesh===!0,Gt=!!T.map,ge=!!T.matcap,w=!!G,Me=!!T.aoMap,ee=!!T.lightMap,ne=!!T.bumpMap,St=!!T.normalMap,Ee=!!T.displacementMap,Rt=!!T.emissiveMap,Dt=!!T.metalnessMap,R=!!T.roughnessMap,S=T.anisotropy>0,V=T.clearcoat>0,Q=T.dispersion>0,$=T.iridescence>0,J=T.sheen>0,yt=T.transmission>0,lt=S&&!!T.anisotropyMap,ht=V&&!!T.clearcoatMap,Nt=V&&!!T.clearcoatNormalMap,nt=V&&!!T.clearcoatRoughnessMap,ut=$&&!!T.iridescenceMap,Xt=$&&!!T.iridescenceThicknessMap,At=J&&!!T.sheenColorMap,dt=J&&!!T.sheenRoughnessMap,Ct=!!T.specularMap,Ft=!!T.specularColorMap,he=!!T.specularIntensityMap,L=yt&&!!T.transmissionMap,it=yt&&!!T.thicknessMap,Y=!!T.gradientMap,K=!!T.alphaMap,st=T.alphaTest>0,Mt=!!T.alphaHash,qt=!!T.extensions;let Te=da;T.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Te=e.toneMapping);const Ve={shaderID:et,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:X,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:wt,batchingColor:wt&&k._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&k.instanceColor!==null,instancingMorph:Tt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?e.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ya,alphaToCoverage:!!T.alphaToCoverage,map:Gt,matcap:ge,envMap:w,envMapMode:w&&G.mapping,envMapCubeUVHeight:B,aoMap:Me,lightMap:ee,bumpMap:ne,normalMap:St,displacementMap:f&&Ee,emissiveMap:Rt,normalMapObjectSpace:St&&T.normalMapType===JM,normalMapTangentSpace:St&&T.normalMapType===QM,metalnessMap:Dt,roughnessMap:R,anisotropy:S,anisotropyMap:lt,clearcoat:V,clearcoatMap:ht,clearcoatNormalMap:Nt,clearcoatRoughnessMap:nt,dispersion:Q,iridescence:$,iridescenceMap:ut,iridescenceThicknessMap:Xt,sheen:J,sheenColorMap:At,sheenRoughnessMap:dt,specularMap:Ct,specularColorMap:Ft,specularIntensityMap:he,transmission:yt,transmissionMap:L,thicknessMap:it,gradientMap:Y,opaque:T.transparent===!1&&T.blending===$r&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:st,alphaHash:Mt,combine:T.combine,mapUv:Gt&&x(T.map.channel),aoMapUv:Me&&x(T.aoMap.channel),lightMapUv:ee&&x(T.lightMap.channel),bumpMapUv:ne&&x(T.bumpMap.channel),normalMapUv:St&&x(T.normalMap.channel),displacementMapUv:Ee&&x(T.displacementMap.channel),emissiveMapUv:Rt&&x(T.emissiveMap.channel),metalnessMapUv:Dt&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:lt&&x(T.anisotropyMap.channel),clearcoatMapUv:ht&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:At&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(T.sheenRoughnessMap.channel),specularMapUv:Ct&&x(T.specularMap.channel),specularColorMapUv:Ft&&x(T.specularColorMap.channel),specularIntensityMapUv:he&&x(T.specularIntensityMap.channel),transmissionMapUv:L&&x(T.transmissionMap.channel),thicknessMapUv:it&&x(T.thicknessMap.channel),alphaMapUv:K&&x(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(St||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(Gt||K),fog:!!Z,useFog:T.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:Gt&&T.map.isVideoTexture===!0&&$t.getTransfer(T.map.colorSpace)===le,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ei,flipSided:T.side===sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&T.extensions.multiDraw===!0||wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function u(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(_(M,T),g(M,T),M.push(e.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function g(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),T.push(o.mask)}function y(T){const M=v[T.type];let D;if(M){const W=Qn[M];D=AE.clone(W.uniforms)}else D=T.uniforms;return D}function C(T,M){let D;for(let W=0,k=h.length;W<k;W++){const Z=h[W];if(Z.cacheKey===M){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new HA(e,M,T,r),h.push(D)),D}function A(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:U}}function WA(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function qA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Eg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Tg(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(d,f,p,v,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,v,x,m){const u=s(d,f,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(d,f,p,v,x,m){const u=s(d,f,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||qA),i.length>1&&i.sort(f||Eg),a.length>1&&a.sort(f||Eg)}function h(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:h,sort:c}}function YA(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new Tg,e.set(i,[s])):a>=r.length?(s=new Tg,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function jA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new H,color:new Ut};break;case"SpotLight":n={position:new H,direction:new H,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":n={color:new Ut,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=n,n}}}function ZA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let KA=0;function QA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function JA(e){const t=new jA,n=ZA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const a=new H,r=new De,s=new De;function o(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,x=0,m=0,u=0,_=0,g=0,y=0,C=0,A=0,b=0;c.sort(QA);for(let T=0,M=c.length;T<M;T++){const D=c[T],W=D.color,k=D.intensity,Z=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=W.r*k,d+=W.g*k,f+=W.b*k;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],k);b++}else if(D.isDirectionalLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,B=n.get(D);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=N,p++}else if(D.isSpotLight){const N=t.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(W).multiplyScalar(k),N.distance=Z,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[x]=N;const G=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,G.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=G.matrix,D.castShadow){const B=n.get(D);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=j,y++}x++}else if(D.isRectAreaLight){const N=t.get(D);N.color.copy(W).multiplyScalar(k),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=N,m++}else if(D.isPointLight){const N=t.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const G=D.shadow,B=n.get(D);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,i.pointShadow[v]=B,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=D.shadow.matrix,g++}i.point[v]=N,v++}else if(D.isHemisphereLight){const N=t.get(D);N.skyColor.copy(D.color).multiplyScalar(k),N.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[u]=N,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==v||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==_||U.numPointShadows!==g||U.numSpotShadows!==y||U.numSpotMaps!==C||U.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,U.directionalLength=p,U.pointLength=v,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=_,U.numPointShadows=g,U.numSpotShadows=y,U.numSpotMaps=C,U.numLightProbes=b,i.version=KA++)}function l(c,h){let d=0,f=0,p=0,v=0,x=0;const m=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),d++}else if(g.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),s.identity(),r.copy(g.matrixWorld),r.premultiply(m),s.extractRotation(r),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(g.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function bg(e){const t=new JA(e),n=[],i=[];function a(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function s(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function $A(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new bg(e),t.set(a,[o])):r>=s.length?(o=new bg(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class tR extends ko{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eR extends ko{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iR=`uniform sampler2D shadow_pass;
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
}`;function aR(e,t,n){let i=new jv;const a=new te,r=new te,s=new Fe,o=new tR({depthPacking:KM}),l=new eR,c={},h=n.maxTextureSize,d={[va]:sn,[sn]:va,[Ei]:Ei},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:nR,fragmentShader:iR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ma;v.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ev;let u=this.type;this.render=function(A,b,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=e.getRenderTarget(),M=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),W=e.state;W.setBlending(ha),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const k=u!==xi&&this.type===xi,Z=u===xi&&this.type!==xi;for(let j=0,N=A.length;j<N;j++){const G=A[j],B=G.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const et=B.getFrameExtents();if(a.multiply(et),r.copy(B.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/et.x),a.x=r.x*et.x,B.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/et.y),a.y=r.y*et.y,B.mapSize.y=r.y)),B.map===null||k===!0||Z===!0){const pt=this.type!==xi?{minFilter:Pn,magFilter:Pn}:{};B.map!==null&&B.map.dispose(),B.map=new er(a.x,a.y,pt),B.map.texture.name=G.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const rt=B.getViewportCount();for(let pt=0;pt<rt;pt++){const Bt=B.getViewport(pt);s.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),W.viewport(s),B.updateMatrices(G,pt),i=B.getFrustum(),y(b,U,B.camera,G,this.type)}B.isPointLightShadow!==!0&&this.type===xi&&_(B,U),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,M,D)};function _(A,b){const U=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new er(a.x,a.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(b,null,U,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(b,null,U,p,x,null)}function g(A,b,U,T){let M=null;const D=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=M.uuid,k=b.uuid;let Z=c[W];Z===void 0&&(Z={},c[W]=Z);let j=Z[k];j===void 0&&(j=M.clone(),Z[k]=j,b.addEventListener("dispose",C)),M=j}if(M.visible=b.visible,M.wireframe=b.wireframe,T===xi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:d[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=e.properties.get(M);W.light=U}return M}function y(A,b,U,T,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===xi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const k=t.update(A),Z=A.material;if(Array.isArray(Z)){const j=k.groups;for(let N=0,G=j.length;N<G;N++){const B=j[N],et=Z[B.materialIndex];if(et&&et.visible){const rt=g(A,et,T,M);A.onBeforeShadow(e,A,b,U,k,rt,B),e.renderBufferDirect(U,null,k,rt,A,B),A.onAfterShadow(e,A,b,U,k,rt,B)}}}else if(Z.visible){const j=g(A,Z,T,M);A.onBeforeShadow(e,A,b,U,k,j,null),e.renderBufferDirect(U,null,k,j,A,null),A.onAfterShadow(e,A,b,U,k,j,null)}}const W=A.children;for(let k=0,Z=W.length;k<Z;k++)y(W[k],b,U,T,M)}function C(A){A.target.removeEventListener("dispose",C);for(const U in c){const T=c[U],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function rR(e){function t(){let L=!1;const it=new Fe;let Y=null;const K=new Fe(0,0,0,0);return{setMask:function(st){Y!==st&&!L&&(e.colorMask(st,st,st,st),Y=st)},setLocked:function(st){L=st},setClear:function(st,Mt,qt,Te,Ve){Ve===!0&&(st*=Te,Mt*=Te,qt*=Te),it.set(st,Mt,qt,Te),K.equals(it)===!1&&(e.clearColor(st,Mt,qt,Te),K.copy(it))},reset:function(){L=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let L=!1,it=null,Y=null,K=null;return{setTest:function(st){st?_t(e.DEPTH_TEST):ft(e.DEPTH_TEST)},setMask:function(st){it!==st&&!L&&(e.depthMask(st),it=st)},setFunc:function(st){if(Y!==st){switch(st){case LM:e.depthFunc(e.NEVER);break;case NM:e.depthFunc(e.ALWAYS);break;case OM:e.depthFunc(e.LESS);break;case wc:e.depthFunc(e.LEQUAL);break;case PM:e.depthFunc(e.EQUAL);break;case zM:e.depthFunc(e.GEQUAL);break;case BM:e.depthFunc(e.GREATER);break;case IM:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Y=st}},setLocked:function(st){L=st},setClear:function(st){K!==st&&(e.clearDepth(st),K=st)},reset:function(){L=!1,it=null,Y=null,K=null}}}function i(){let L=!1,it=null,Y=null,K=null,st=null,Mt=null,qt=null,Te=null,Ve=null;return{setTest:function(Zt){L||(Zt?_t(e.STENCIL_TEST):ft(e.STENCIL_TEST))},setMask:function(Zt){it!==Zt&&!L&&(e.stencilMask(Zt),it=Zt)},setFunc:function(Zt,ci,Zn){(Y!==Zt||K!==ci||st!==Zn)&&(e.stencilFunc(Zt,ci,Zn),Y=Zt,K=ci,st=Zn)},setOp:function(Zt,ci,Zn){(Mt!==Zt||qt!==ci||Te!==Zn)&&(e.stencilOp(Zt,ci,Zn),Mt=Zt,qt=ci,Te=Zn)},setLocked:function(Zt){L=Zt},setClear:function(Zt){Ve!==Zt&&(e.clearStencil(Zt),Ve=Zt)},reset:function(){L=!1,it=null,Y=null,K=null,st=null,Mt=null,qt=null,Te=null,Ve=null}}}const a=new t,r=new n,s=new i,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,y=null,C=null,A=new Ut(0,0,0),b=0,U=!1,T=null,M=null,D=null,W=null,k=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,N=0;const G=e.getParameter(e.VERSION);G.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=N>=1):G.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=N>=2);let B=null,et={};const rt=e.getParameter(e.SCISSOR_BOX),pt=e.getParameter(e.VIEWPORT),Bt=new Fe().fromArray(rt),Yt=new Fe().fromArray(pt);function X(L,it,Y,K){const st=new Uint8Array(4),Mt=e.createTexture();e.bindTexture(L,Mt),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let qt=0;qt<Y;qt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(it,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,st):e.texImage2D(it+qt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,st);return Mt}const tt={};tt[e.TEXTURE_2D]=X(e.TEXTURE_2D,e.TEXTURE_2D,1),tt[e.TEXTURE_CUBE_MAP]=X(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[e.TEXTURE_2D_ARRAY]=X(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),tt[e.TEXTURE_3D]=X(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),s.setClear(0),_t(e.DEPTH_TEST),r.setFunc(wc),ne(!1),St(Um),_t(e.CULL_FACE),Me(ha);function _t(L){c[L]!==!0&&(e.enable(L),c[L]=!0)}function ft(L){c[L]!==!1&&(e.disable(L),c[L]=!1)}function Tt(L,it){return h[L]!==it?(e.bindFramebuffer(L,it),h[L]=it,L===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=it),L===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=it),!0):!1}function wt(L,it){let Y=f,K=!1;if(L){Y=d.get(it),Y===void 0&&(Y=[],d.set(it,Y));const st=L.textures;if(Y.length!==st.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let Mt=0,qt=st.length;Mt<qt;Mt++)Y[Mt]=e.COLOR_ATTACHMENT0+Mt;Y.length=st.length,K=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,K=!0);K&&e.drawBuffers(Y)}function Gt(L){return p!==L?(e.useProgram(L),p=L,!0):!1}const ge={[za]:e.FUNC_ADD,[mM]:e.FUNC_SUBTRACT,[gM]:e.FUNC_REVERSE_SUBTRACT};ge[_M]=e.MIN,ge[vM]=e.MAX;const w={[xM]:e.ZERO,[SM]:e.ONE,[yM]:e.SRC_COLOR,[fh]:e.SRC_ALPHA,[RM]:e.SRC_ALPHA_SATURATE,[bM]:e.DST_COLOR,[EM]:e.DST_ALPHA,[MM]:e.ONE_MINUS_SRC_COLOR,[hh]:e.ONE_MINUS_SRC_ALPHA,[AM]:e.ONE_MINUS_DST_COLOR,[TM]:e.ONE_MINUS_DST_ALPHA,[CM]:e.CONSTANT_COLOR,[wM]:e.ONE_MINUS_CONSTANT_COLOR,[DM]:e.CONSTANT_ALPHA,[UM]:e.ONE_MINUS_CONSTANT_ALPHA};function Me(L,it,Y,K,st,Mt,qt,Te,Ve,Zt){if(L===ha){v===!0&&(ft(e.BLEND),v=!1);return}if(v===!1&&(_t(e.BLEND),v=!0),L!==pM){if(L!==x||Zt!==U){if((m!==za||g!==za)&&(e.blendEquation(e.FUNC_ADD),m=za,g=za),Zt)switch(L){case $r:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Lm:e.blendFunc(e.ONE,e.ONE);break;case Nm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Om:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $r:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Lm:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Nm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Om:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}u=null,_=null,y=null,C=null,A.set(0,0,0),b=0,x=L,U=Zt}return}st=st||it,Mt=Mt||Y,qt=qt||K,(it!==m||st!==g)&&(e.blendEquationSeparate(ge[it],ge[st]),m=it,g=st),(Y!==u||K!==_||Mt!==y||qt!==C)&&(e.blendFuncSeparate(w[Y],w[K],w[Mt],w[qt]),u=Y,_=K,y=Mt,C=qt),(Te.equals(A)===!1||Ve!==b)&&(e.blendColor(Te.r,Te.g,Te.b,Ve),A.copy(Te),b=Ve),x=L,U=!1}function ee(L,it){L.side===Ei?ft(e.CULL_FACE):_t(e.CULL_FACE);let Y=L.side===sn;it&&(Y=!Y),ne(Y),L.blending===$r&&L.transparent===!1?Me(ha):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);const K=L.stencilWrite;s.setTest(K),K&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_t(e.SAMPLE_ALPHA_TO_COVERAGE):ft(e.SAMPLE_ALPHA_TO_COVERAGE)}function ne(L){T!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),T=L)}function St(L){L!==fM?(_t(e.CULL_FACE),L!==M&&(L===Um?e.cullFace(e.BACK):L===hM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ft(e.CULL_FACE),M=L}function Ee(L){L!==D&&(j&&e.lineWidth(L),D=L)}function Rt(L,it,Y){L?(_t(e.POLYGON_OFFSET_FILL),(W!==it||k!==Y)&&(e.polygonOffset(it,Y),W=it,k=Y)):ft(e.POLYGON_OFFSET_FILL)}function Dt(L){L?_t(e.SCISSOR_TEST):ft(e.SCISSOR_TEST)}function R(L){L===void 0&&(L=e.TEXTURE0+Z-1),B!==L&&(e.activeTexture(L),B=L)}function S(L,it,Y){Y===void 0&&(B===null?Y=e.TEXTURE0+Z-1:Y=B);let K=et[Y];K===void 0&&(K={type:void 0,texture:void 0},et[Y]=K),(K.type!==L||K.texture!==it)&&(B!==Y&&(e.activeTexture(Y),B=Y),e.bindTexture(L,it||tt[L]),K.type=L,K.texture=it)}function V(){const L=et[B];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{e.compressedTexImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.texSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{e.texSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{e.texStorage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{e.texStorage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{e.texImage2D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{e.texImage3D.apply(e,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(L){Bt.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),Bt.copy(L))}function dt(L){Yt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Yt.copy(L))}function Ct(L,it){let Y=l.get(it);Y===void 0&&(Y=new WeakMap,l.set(it,Y));let K=Y.get(L);K===void 0&&(K=e.getUniformBlockIndex(it,L.name),Y.set(L,K))}function Ft(L,it){const K=l.get(it).get(L);o.get(it)!==K&&(e.uniformBlockBinding(it,K,L.__bindingPointIndex),o.set(it,K))}function he(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},B=null,et={},h={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,y=null,C=null,A=new Ut(0,0,0),b=0,U=!1,T=null,M=null,D=null,W=null,k=null,Bt.set(0,0,e.canvas.width,e.canvas.height),Yt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),s.reset()}return{buffers:{color:a,depth:r,stencil:s},enable:_t,disable:ft,bindFramebuffer:Tt,drawBuffers:wt,useProgram:Gt,setBlending:Me,setMaterial:ee,setFlipSided:ne,setCullFace:St,setLineWidth:Ee,setPolygonOffset:Rt,setScissorTest:Dt,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:$,texImage2D:ut,texImage3D:Xt,updateUBOMapping:Ct,uniformBlockBinding:Ft,texStorage2D:Nt,texStorage3D:nt,texSubImage2D:J,texSubImage3D:yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:ht,scissor:At,viewport:dt,reset:he}}function Ag(e,t,n,i){const a=sR(i);switch(n){case wv:return e*t;case Uv:return e*t;case Lv:return e*t*2;case Nv:return e*t/a.components*a.byteLength;case jd:return e*t/a.components*a.byteLength;case Ov:return e*t*2/a.components*a.byteLength;case Zd:return e*t*2/a.components*a.byteLength;case Dv:return e*t*3/a.components*a.byteLength;case Wn:return e*t*4/a.components*a.byteLength;case Kd:return e*t*4/a.components*a.byteLength;case Zl:case Kl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ql:case Jl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vh:case Sh:return Math.max(e,16)*Math.max(t,8)/4;case _h:case xh:return Math.max(e,8)*Math.max(t,8)/2;case yh:case Mh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Eh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case wh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ph:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case zh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case $l:case Ih:case Fh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Pv:case Hh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Gh:case Vh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sR(e){switch(e){case zi:case Av:return{byteLength:1,components:1};case Ao:case Rv:case Fo:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case tr:case Wd:case wi:return{byteLength:4,components:1};case Cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function oR(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return p?new OffscreenCanvas(R,S):Oc("canvas")}function x(R,S,V){let Q=1;const $=Dt(R);if(($.width>V||$.height>V)&&(Q=V/Math.max($.width,$.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*$.width),yt=Math.floor(Q*$.height);d===void 0&&(d=v(J,yt));const lt=S?v(J,yt):d;return lt.width=J,lt.height=yt,lt.getContext("2d").drawImage(R,0,0,J,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+J+"x"+yt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Pn&&R.minFilter!==Xn}function u(R){e.generateMipmap(R)}function _(R,S,V,Q,$=!1){if(R!==null){if(e[R]!==void 0)return e[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=S;if(S===e.RED&&(V===e.FLOAT&&(J=e.R32F),V===e.HALF_FLOAT&&(J=e.R16F),V===e.UNSIGNED_BYTE&&(J=e.R8)),S===e.RED_INTEGER&&(V===e.UNSIGNED_BYTE&&(J=e.R8UI),V===e.UNSIGNED_SHORT&&(J=e.R16UI),V===e.UNSIGNED_INT&&(J=e.R32UI),V===e.BYTE&&(J=e.R8I),V===e.SHORT&&(J=e.R16I),V===e.INT&&(J=e.R32I)),S===e.RG&&(V===e.FLOAT&&(J=e.RG32F),V===e.HALF_FLOAT&&(J=e.RG16F),V===e.UNSIGNED_BYTE&&(J=e.RG8)),S===e.RG_INTEGER&&(V===e.UNSIGNED_BYTE&&(J=e.RG8UI),V===e.UNSIGNED_SHORT&&(J=e.RG16UI),V===e.UNSIGNED_INT&&(J=e.RG32UI),V===e.BYTE&&(J=e.RG8I),V===e.SHORT&&(J=e.RG16I),V===e.INT&&(J=e.RG32I)),S===e.RGB&&V===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),S===e.RGBA){const yt=$?Dc:$t.getTransfer(Q);V===e.FLOAT&&(J=e.RGBA32F),V===e.HALF_FLOAT&&(J=e.RGBA16F),V===e.UNSIGNED_BYTE&&(J=yt===le?e.SRGB8_ALPHA8:e.RGBA8),V===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),V===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function g(R,S){let V;return R?S===null||S===tr||S===ds?V=e.DEPTH24_STENCIL8:S===wi?V=e.DEPTH32F_STENCIL8:S===Ao&&(V=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===tr||S===ds?V=e.DEPTH_COMPONENT24:S===wi?V=e.DEPTH_COMPONENT32F:S===Ao&&(V=e.DEPTH_COMPONENT16),V}function y(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pn&&R.minFilter!==Xn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),b(S),S.isVideoTexture&&h.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),T(S)}function b(R){const S=i.get(R);if(S.__webglInit===void 0)return;const V=R.source,Q=f.get(V);if(Q){const $=Q[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&U(R),Object.keys(Q).length===0&&f.delete(V)}i.remove(R)}function U(R){const S=i.get(R);e.deleteTexture(S.__webglTexture);const V=R.source,Q=f.get(V);delete Q[S.__cacheKey],s.memory.textures--}function T(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let $=0;$<S.__webglFramebuffer[Q].length;$++)e.deleteFramebuffer(S.__webglFramebuffer[Q][$]);else e.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)e.deleteFramebuffer(S.__webglFramebuffer[Q]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let Q=0,$=V.length;Q<$;Q++){const J=i.get(V[Q]);J.__webglTexture&&(e.deleteTexture(J.__webglTexture),s.memory.textures--),i.remove(V[Q])}i.remove(R)}let M=0;function D(){M=0}function W(){const R=M;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),M+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Z(R,S){const V=i.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(V,R,S);return}}n.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+S)}function j(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Yt(V,R,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+S)}function N(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Yt(V,R,S);return}n.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+S)}function G(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){X(V,R,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+S)}const B={[mh]:e.REPEAT,[Ha]:e.CLAMP_TO_EDGE,[gh]:e.MIRRORED_REPEAT},et={[Pn]:e.NEAREST,[jM]:e.NEAREST_MIPMAP_NEAREST,[ul]:e.NEAREST_MIPMAP_LINEAR,[Xn]:e.LINEAR,[Vu]:e.LINEAR_MIPMAP_NEAREST,[Ga]:e.LINEAR_MIPMAP_LINEAR},rt={[$M]:e.NEVER,[rE]:e.ALWAYS,[tE]:e.LESS,[zv]:e.LEQUAL,[eE]:e.EQUAL,[aE]:e.GEQUAL,[nE]:e.GREATER,[iE]:e.NOTEQUAL};function pt(R,S){if(S.type===wi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Xn||S.magFilter===Vu||S.magFilter===ul||S.magFilter===Ga||S.minFilter===Xn||S.minFilter===Vu||S.minFilter===ul||S.minFilter===Ga)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,B[S.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,B[S.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,B[S.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,et[S.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,et[S.minFilter]),S.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pn||S.minFilter!==ul&&S.minFilter!==Ga||S.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Bt(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const Q=S.source;let $=f.get(Q);$===void 0&&($={},f.set(Q,$));const J=k(S);if(J!==R.__cacheKey){$[J]===void 0&&($[J]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,V=!0),$[J].usedTimes++;const yt=$[R.__cacheKey];yt!==void 0&&($[R.__cacheKey].usedTimes--,yt.usedTimes===0&&U(S)),R.__cacheKey=J,R.__webglTexture=$[J].texture}return V}function Yt(R,S,V){let Q=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=e.TEXTURE_3D);const $=Bt(R,S),J=S.source;n.bindTexture(Q,R.__webglTexture,e.TEXTURE0+V);const yt=i.get(J);if(J.version!==yt.__version||$===!0){n.activeTexture(e.TEXTURE0+V);const lt=$t.getPrimaries($t.workingColorSpace),ht=S.colorSpace===ea?null:$t.getPrimaries(S.colorSpace),Nt=S.colorSpace===ea||lt===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let nt=x(S.image,!1,a.maxTextureSize);nt=Rt(S,nt);const ut=r.convert(S.format,S.colorSpace),Xt=r.convert(S.type);let At=_(S.internalFormat,ut,Xt,S.colorSpace,S.isVideoTexture);pt(Q,S);let dt;const Ct=S.mipmaps,Ft=S.isVideoTexture!==!0,he=yt.__version===void 0||$===!0,L=J.dataReady,it=y(S,nt);if(S.isDepthTexture)At=g(S.format===ps,S.type),he&&(Ft?n.texStorage2D(e.TEXTURE_2D,1,At,nt.width,nt.height):n.texImage2D(e.TEXTURE_2D,0,At,nt.width,nt.height,0,ut,Xt,null));else if(S.isDataTexture)if(Ct.length>0){Ft&&he&&n.texStorage2D(e.TEXTURE_2D,it,At,Ct[0].width,Ct[0].height);for(let Y=0,K=Ct.length;Y<K;Y++)dt=Ct[Y],Ft?L&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,dt.width,dt.height,ut,Xt,dt.data):n.texImage2D(e.TEXTURE_2D,Y,At,dt.width,dt.height,0,ut,Xt,dt.data);S.generateMipmaps=!1}else Ft?(he&&n.texStorage2D(e.TEXTURE_2D,it,At,nt.width,nt.height),L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,nt.width,nt.height,ut,Xt,nt.data)):n.texImage2D(e.TEXTURE_2D,0,At,nt.width,nt.height,0,ut,Xt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&he&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,At,Ct[0].width,Ct[0].height,nt.depth);for(let Y=0,K=Ct.length;Y<K;Y++)if(dt=Ct[Y],S.format!==Wn)if(ut!==null)if(Ft){if(L)if(S.layerUpdates.size>0){const st=Ag(dt.width,dt.height,S.format,S.type);for(const Mt of S.layerUpdates){const qt=dt.data.subarray(Mt*st/dt.data.BYTES_PER_ELEMENT,(Mt+1)*st/dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,Mt,dt.width,dt.height,1,ut,qt,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,dt.width,dt.height,nt.depth,ut,dt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,At,dt.width,dt.height,nt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,dt.width,dt.height,nt.depth,ut,Xt,dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Y,At,dt.width,dt.height,nt.depth,0,ut,Xt,dt.data)}else{Ft&&he&&n.texStorage2D(e.TEXTURE_2D,it,At,Ct[0].width,Ct[0].height);for(let Y=0,K=Ct.length;Y<K;Y++)dt=Ct[Y],S.format!==Wn?ut!==null?Ft?L&&n.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,dt.width,dt.height,ut,dt.data):n.compressedTexImage2D(e.TEXTURE_2D,Y,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,dt.width,dt.height,ut,Xt,dt.data):n.texImage2D(e.TEXTURE_2D,Y,At,dt.width,dt.height,0,ut,Xt,dt.data)}else if(S.isDataArrayTexture)if(Ft){if(he&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,At,nt.width,nt.height,nt.depth),L)if(S.layerUpdates.size>0){const Y=Ag(nt.width,nt.height,S.format,S.type);for(const K of S.layerUpdates){const st=nt.data.subarray(K*Y/nt.data.BYTES_PER_ELEMENT,(K+1)*Y/nt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,ut,Xt,st)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Xt,nt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,ut,Xt,nt.data);else if(S.isData3DTexture)Ft?(he&&n.texStorage3D(e.TEXTURE_3D,it,At,nt.width,nt.height,nt.depth),L&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Xt,nt.data)):n.texImage3D(e.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,ut,Xt,nt.data);else if(S.isFramebufferTexture){if(he)if(Ft)n.texStorage2D(e.TEXTURE_2D,it,At,nt.width,nt.height);else{let Y=nt.width,K=nt.height;for(let st=0;st<it;st++)n.texImage2D(e.TEXTURE_2D,st,At,Y,K,0,ut,Xt,null),Y>>=1,K>>=1}}else if(Ct.length>0){if(Ft&&he){const Y=Dt(Ct[0]);n.texStorage2D(e.TEXTURE_2D,it,At,Y.width,Y.height)}for(let Y=0,K=Ct.length;Y<K;Y++)dt=Ct[Y],Ft?L&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,ut,Xt,dt):n.texImage2D(e.TEXTURE_2D,Y,At,ut,Xt,dt);S.generateMipmaps=!1}else if(Ft){if(he){const Y=Dt(nt);n.texStorage2D(e.TEXTURE_2D,it,At,Y.width,Y.height)}L&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Xt,nt)}else n.texImage2D(e.TEXTURE_2D,0,At,ut,Xt,nt);m(S)&&u(Q),yt.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function X(R,S,V){if(S.image.length!==6)return;const Q=Bt(R,S),$=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+V);const J=i.get($);if($.version!==J.__version||Q===!0){n.activeTexture(e.TEXTURE0+V);const yt=$t.getPrimaries($t.workingColorSpace),lt=S.colorSpace===ea?null:$t.getPrimaries(S.colorSpace),ht=S.colorSpace===ea||yt===lt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Nt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!Nt&&!nt?ut[K]=x(S.image[K],!0,a.maxCubemapSize):ut[K]=nt?S.image[K].image:S.image[K],ut[K]=Rt(S,ut[K]);const Xt=ut[0],At=r.convert(S.format,S.colorSpace),dt=r.convert(S.type),Ct=_(S.internalFormat,At,dt,S.colorSpace),Ft=S.isVideoTexture!==!0,he=J.__version===void 0||Q===!0,L=$.dataReady;let it=y(S,Xt);pt(e.TEXTURE_CUBE_MAP,S);let Y;if(Nt){Ft&&he&&n.texStorage2D(e.TEXTURE_CUBE_MAP,it,Ct,Xt.width,Xt.height);for(let K=0;K<6;K++){Y=ut[K].mipmaps;for(let st=0;st<Y.length;st++){const Mt=Y[st];S.format!==Wn?At!==null?Ft?L&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,Mt.width,Mt.height,At,Mt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,Ct,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,0,0,Mt.width,Mt.height,At,dt,Mt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,st,Ct,Mt.width,Mt.height,0,At,dt,Mt.data)}}}else{if(Y=S.mipmaps,Ft&&he){Y.length>0&&it++;const K=Dt(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,it,Ct,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ft?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,At,dt,ut[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ct,ut[K].width,ut[K].height,0,At,dt,ut[K].data);for(let st=0;st<Y.length;st++){const qt=Y[st].image[K].image;Ft?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,qt.width,qt.height,At,dt,qt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,Ct,qt.width,qt.height,0,At,dt,qt.data)}}else{Ft?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,At,dt,ut[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ct,At,dt,ut[K]);for(let st=0;st<Y.length;st++){const Mt=Y[st];Ft?L&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,0,0,At,dt,Mt.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,st+1,Ct,At,dt,Mt.image[K])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),J.__version=$.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function tt(R,S,V,Q,$,J){const yt=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),ht=_(V.internalFormat,yt,lt,V.colorSpace);if(!i.get(S).__hasExternalTextures){const nt=Math.max(1,S.width>>J),ut=Math.max(1,S.height>>J);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,J,ht,nt,ut,S.depth,0,yt,lt,null):n.texImage2D($,J,ht,nt,ut,0,yt,lt,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,$,i.get(V).__webglTexture,0,ne(S)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Q,$,i.get(V).__webglTexture,J),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _t(R,S,V){if(e.bindRenderbuffer(e.RENDERBUFFER,R),S.depthBuffer){const Q=S.depthTexture,$=Q&&Q.isDepthTexture?Q.type:null,J=g(S.stencilBuffer,$),yt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=ne(S);St(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,lt,J,S.width,S.height):V?e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,J,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,J,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,yt,e.RENDERBUFFER,R)}else{const Q=S.textures;for(let $=0;$<Q.length;$++){const J=Q[$],yt=r.convert(J.format,J.colorSpace),lt=r.convert(J.type),ht=_(J.internalFormat,yt,lt,J.colorSpace),Nt=ne(S);V&&St(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Nt,ht,S.width,S.height):St(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Nt,ht,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,ht,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ft(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,$=ne(S);if(S.depthTexture.format===ts)St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(S.depthTexture.format===ps)St(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Tt(R){const S=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",$)};Q.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=Q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ft(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=e.createRenderbuffer(),_t(S.__webglDepthbuffer[Q],R,!1);else{const $=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Q];e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,J)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),_t(S.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,$)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function wt(R,S,V){const Q=i.get(R);S!==void 0&&tt(Q.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),V!==void 0&&Tt(R)}function Gt(R){const S=R.texture,V=i.get(R),Q=i.get(S);R.addEventListener("dispose",A);const $=R.textures,J=R.isWebGLCubeRenderTarget===!0,yt=$.length>1;if(yt||(Q.__webglTexture===void 0&&(Q.__webglTexture=e.createTexture()),Q.__version=S.version,s.memory.textures++),J){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let ht=0;ht<S.mipmaps.length;ht++)V.__webglFramebuffer[lt][ht]=e.createFramebuffer()}else V.__webglFramebuffer[lt]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)V.__webglFramebuffer[lt]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(yt)for(let lt=0,ht=$.length;lt<ht;lt++){const Nt=i.get($[lt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&St(R)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<$.length;lt++){const ht=$[lt];V.__webglColorRenderbuffer[lt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);const Nt=r.convert(ht.format,ht.colorSpace),nt=r.convert(ht.type),ut=_(ht.internalFormat,Nt,nt,ht.colorSpace,R.isXRRenderTarget===!0),Xt=ne(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Xt,ut,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=e.createRenderbuffer(),_t(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(J){n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),pt(e.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)tt(V.__webglFramebuffer[lt][ht],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ht);else tt(V.__webglFramebuffer[lt],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(yt){for(let lt=0,ht=$.length;lt<ht;lt++){const Nt=$[lt],nt=i.get(Nt);n.bindTexture(e.TEXTURE_2D,nt.__webglTexture),pt(e.TEXTURE_2D,Nt),tt(V.__webglFramebuffer,R,Nt,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,0),m(Nt)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let lt=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(lt,Q.__webglTexture),pt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)tt(V.__webglFramebuffer[ht],R,S,e.COLOR_ATTACHMENT0,lt,ht);else tt(V.__webglFramebuffer,R,S,e.COLOR_ATTACHMENT0,lt,0);m(S)&&u(lt),n.unbindTexture()}R.depthBuffer&&Tt(R)}function ge(R){const S=R.textures;for(let V=0,Q=S.length;V<Q;V++){const $=S[V];if(m($)){const J=R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,yt=i.get($).__webglTexture;n.bindTexture(J,yt),u(J),n.unbindTexture()}}}const w=[],Me=[];function ee(R){if(R.samples>0){if(St(R)===!1){const S=R.textures,V=R.width,Q=R.height;let $=e.COLOR_BUFFER_BIT;const J=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,yt=i.get(R),lt=S.length>1;if(lt)for(let ht=0;ht<S.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),lt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);const Nt=i.get(S[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Nt,0)}e.blitFramebuffer(0,0,V,Q,0,0,V,Q,$,e.NEAREST),l===!0&&(w.length=0,Me.length=0,w.push(e.COLOR_ATTACHMENT0+ht),R.depthBuffer&&R.resolveDepthBuffer===!1&&(w.push(J),Me.push(J),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,w))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),lt)for(let ht=0;ht<S.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,yt.__webglColorRenderbuffer[ht]);const Nt=i.get(S[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,Nt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ne(R){return Math.min(a.maxSamples,R.samples)}function St(R){const S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(R){const S=s.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Rt(R,S){const V=R.colorSpace,Q=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==ya&&V!==ea&&($t.getTransfer(V)===le?(Q!==Wn||$!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=N,this.setTextureCube=G,this.rebindTextures=wt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=St}function lR(e,t){function n(i,a=ea){let r;const s=$t.getTransfer(a);if(i===zi)return e.UNSIGNED_BYTE;if(i===qd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Yd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Cv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Av)return e.BYTE;if(i===Rv)return e.SHORT;if(i===Ao)return e.UNSIGNED_SHORT;if(i===Wd)return e.INT;if(i===tr)return e.UNSIGNED_INT;if(i===wi)return e.FLOAT;if(i===Fo)return e.HALF_FLOAT;if(i===wv)return e.ALPHA;if(i===Dv)return e.RGB;if(i===Wn)return e.RGBA;if(i===Uv)return e.LUMINANCE;if(i===Lv)return e.LUMINANCE_ALPHA;if(i===ts)return e.DEPTH_COMPONENT;if(i===ps)return e.DEPTH_STENCIL;if(i===Nv)return e.RED;if(i===jd)return e.RED_INTEGER;if(i===Ov)return e.RG;if(i===Zd)return e.RG_INTEGER;if(i===Kd)return e.RGBA_INTEGER;if(i===Zl||i===Kl||i===Ql||i===Jl)if(s===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ql)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_h||i===vh||i===xh||i===Sh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_h)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yh||i===Mh||i===Eh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yh||i===Mh)return s===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Eh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Th||i===bh||i===Ah||i===Rh||i===Ch||i===wh||i===Dh||i===Uh||i===Lh||i===Nh||i===Oh||i===Ph||i===zh||i===Bh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Th)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ah)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bh)return s===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===Ih||i===Fh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===$l)return s===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pv||i===Hh||i===Gh||i===Vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class cR extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ll extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uR={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const x of t.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uR)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Ll;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const fR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
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

}`;class dR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new on,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new si({vertexShader:fR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pR extends Es{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const x=new dR,m=n.getContextAttributes();let u=null,_=null;const g=[],y=[],C=new te;let A=null;const b=new Dn;b.layers.enable(1),b.viewport=new Fe;const U=new Dn;U.layers.enable(2),U.viewport=new Fe;const T=[b,U],M=new cR;M.layers.enable(1),M.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=g[X];return tt===void 0&&(tt=new gf,g[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=g[X];return tt===void 0&&(tt=new gf,g[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=g[X];return tt===void 0&&(tt=new gf,g[X]=tt),tt.getHandSpace()};function k(X){const tt=y.indexOf(X.inputSource);if(tt===-1)return;const _t=g[tt];_t!==void 0&&(_t.update(X.inputSource,X.frame,c||s),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){a.removeEventListener("select",k),a.removeEventListener("selectstart",k),a.removeEventListener("selectend",k),a.removeEventListener("squeeze",k),a.removeEventListener("squeezestart",k),a.removeEventListener("squeezeend",k),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",j);for(let X=0;X<g.length;X++){const tt=y[X];tt!==null&&(y[X]=null,g[X].disconnect(tt))}D=null,W=null,x.reset(),t.setRenderTarget(u),p=null,f=null,d=null,a=null,_=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(u=t.getRenderTarget(),a.addEventListener("select",k),a.addEventListener("selectstart",k),a.addEventListener("selectend",k),a.addEventListener("squeeze",k),a.addEventListener("squeezestart",k),a.addEventListener("squeezeend",k),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),a.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,tt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new er(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,ft=null;m.depth&&(ft=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=m.stencil?ps:ts,_t=m.stencil?ds:tr);const Tt={colorFormat:n.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(a,n),f=d.createProjectionLayer(Tt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new er(f.textureWidth,f.textureHeight,{format:Wn,type:zi,depthTexture:new Kv(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Yt.setContext(a),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(X){for(let tt=0;tt<X.removed.length;tt++){const _t=X.removed[tt],ft=y.indexOf(_t);ft>=0&&(y[ft]=null,g[ft].disconnect(_t))}for(let tt=0;tt<X.added.length;tt++){const _t=X.added[tt];let ft=y.indexOf(_t);if(ft===-1){for(let wt=0;wt<g.length;wt++)if(wt>=y.length){y.push(_t),ft=wt;break}else if(y[wt]===null){y[wt]=_t,ft=wt;break}if(ft===-1)break}const Tt=g[ft];Tt&&Tt.connect(_t)}}const N=new H,G=new H;function B(X,tt,_t){N.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(_t.matrixWorld);const ft=N.distanceTo(G),Tt=tt.projectionMatrix.elements,wt=_t.projectionMatrix.elements,Gt=Tt[14]/(Tt[10]-1),ge=Tt[14]/(Tt[10]+1),w=(Tt[9]+1)/Tt[5],Me=(Tt[9]-1)/Tt[5],ee=(Tt[8]-1)/Tt[0],ne=(wt[8]+1)/wt[0],St=Gt*ee,Ee=Gt*ne,Rt=ft/(-ee+ne),Dt=Rt*-ee;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Dt),X.translateZ(Rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const R=Gt+Rt,S=ge+Rt,V=St-Dt,Q=Ee+(ft-Dt),$=w*ge/S*R,J=Me*ge/S*R;X.projectionMatrix.makePerspective(V,Q,$,J,R,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function et(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let tt=X.near,_t=X.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),M.near=U.near=b.near=tt,M.far=U.far=b.far=_t,(D!==M.near||W!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,W=M.far);const ft=X.parent,Tt=M.cameras;et(M,ft);for(let wt=0;wt<Tt.length;wt++)et(Tt[wt],ft);Tt.length===2?B(M,b,U):M.projectionMatrix.copy(b.projectionMatrix),rt(X,M,ft)};function rt(X,tt,_t){_t===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=kh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let pt=null;function Bt(X,tt){if(h=tt.getViewerPose(c||s),v=tt,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let ft=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let wt=0;wt<_t.length;wt++){const Gt=_t[wt];let ge=null;if(p!==null)ge=p.getViewport(Gt);else{const Me=d.getViewSubImage(f,Gt);ge=Me.viewport,wt===0&&(t.setRenderTargetTextures(_,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(_))}let w=T[wt];w===void 0&&(w=new Dn,w.layers.enable(wt),w.viewport=new Fe,T[wt]=w),w.matrix.fromArray(Gt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Gt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(ge.x,ge.y,ge.width,ge.height),wt===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(w)}const Tt=a.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const wt=d.getDepthInformation(_t[0]);wt&&wt.isValid&&wt.texture&&x.init(t,wt,a.renderState)}}for(let _t=0;_t<g.length;_t++){const ft=y[_t],Tt=g[_t];ft!==null&&Tt!==void 0&&Tt.update(ft,tt,c||s)}pt&&pt(X,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}const Yt=new Zv;Yt.setAnimationLoop(Bt),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}}const Da=new Bi,mR=new De;function gR(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Wv(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,_,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),v(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=t.get(u),g=_.envMap,y=_.envMapRotation;g&&(m.envMap.value=g,Da.copy(y),Da.x*=-1,Da.y*=-1,Da.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Da.y*=-1,Da.z*=-1),m.envMapRotation.value.setFromMatrix4(mR.makeRotationFromEuler(Da)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function _R(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function c(_,g){let y=a[_.id];y===void 0&&(v(_),y=h(_),a[_.id]=y,_.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(_,C);const A=t.render.frame;r[_.id]!==A&&(f(_),r[_.id]=A)}function h(_){const g=d();_.__bindingPointIndex=g;const y=e.createBuffer(),C=_.__size,A=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,C,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,y),y}function d(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=a[_.id],y=_.uniforms,C=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let A=0,b=y.length;A<b;A++){const U=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,M=U.length;T<M;T++){const D=U[T];if(p(D,A,T,C)===!0){const W=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let j=0;j<k.length;j++){const N=k[j],G=x(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,W+Z,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,Z),Z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,W,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,g,y,C){const A=_.value,b=g+"_"+y;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const U=C[b];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[b]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function v(_){const g=_.uniforms;let y=0;const C=16;for(let b=0,U=g.length;b<U;b++){const T=Array.isArray(g[b])?g[b]:[g[b]];for(let M=0,D=T.length;M<D;M++){const W=T[M],k=Array.isArray(W.value)?W.value:[W.value];for(let Z=0,j=k.length;Z<j;Z++){const N=k[Z],G=x(N),B=y%C,et=B%G.boundary,rt=B+et;y+=et,rt!==0&&C-rt<G.storage&&(y+=C-rt),W.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=G.storage}}}const A=y%C;return A>0&&(y+=C-A),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=s.indexOf(g.__bindingPointIndex);s.splice(y,1),e.deleteBuffer(a[g.id]),delete a[g.id],delete r[g.id]}function u(){for(const _ in a)e.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class vR{constructor(t={}){const{canvas:n=oE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=da,this.toneMappingExposure=1;const g=this;let y=!1,C=0,A=0,b=null,U=-1,T=null;const M=new Fe,D=new Fe;let W=null;const k=new Ut(0);let Z=0,j=n.width,N=n.height,G=1,B=null,et=null;const rt=new Fe(0,0,j,N),pt=new Fe(0,0,j,N);let Bt=!1;const Yt=new jv;let X=!1,tt=!1;const _t=new De,ft=new H,Tt=new Fe,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ge(){return b===null?G:1}let w=i;function Me(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xd}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",st,!1),w===null){const O="webgl2";if(w=Me(O,E),w===null)throw Me(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,ne,St,Ee,Rt,Dt,R,S,V,Q,$,J,yt,lt,ht,Nt,nt,ut,Xt,At,dt,Ct,Ft,he;function L(){ee=new Tb(w),ee.init(),Ct=new lR(w,ee),ne=new _b(w,ee,t,Ct),St=new rR(w),Ee=new Rb(w),Rt=new WA,Dt=new oR(w,ee,St,Rt,ne,Ct,Ee),R=new xb(g),S=new Eb(g),V=new NE(w),Ft=new mb(w,V),Q=new bb(w,V,Ee,Ft),$=new wb(w,Q,V,Ee),Xt=new Cb(w,ne,Dt),Nt=new vb(Rt),J=new XA(g,R,S,ee,ne,Ft,Nt),yt=new gR(g,Rt),lt=new YA,ht=new $A(ee),ut=new pb(g,R,S,St,$,f,l),nt=new aR(g,$,ne),he=new _R(w,Ee,ne,St),At=new gb(w,ee,Ee),dt=new Ab(w,ee,Ee),Ee.programs=J.programs,g.capabilities=ne,g.extensions=ee,g.properties=Rt,g.renderLists=lt,g.shadowMap=nt,g.state=St,g.info=Ee}L();const it=new pR(g,w);this.xr=it,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(j,N,!1))},this.getSize=function(E){return E.set(j,N)},this.setSize=function(E,O,I=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,N=O,n.width=Math.floor(E*G),n.height=Math.floor(O*G),I===!0&&(n.style.width=E+"px",n.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(j*G,N*G).floor()},this.setDrawingBufferSize=function(E,O,I){j=E,N=O,G=I,n.width=Math.floor(E*I),n.height=Math.floor(O*I),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(rt)},this.setViewport=function(E,O,I,F){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,O,I,F),St.viewport(M.copy(rt).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(pt)},this.setScissor=function(E,O,I,F){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,O,I,F),St.scissor(D.copy(pt).multiplyScalar(G).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(E){St.setScissorTest(Bt=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(E=!0,O=!0,I=!0){let F=0;if(E){let z=!1;if(b!==null){const at=b.texture.format;z=at===Kd||at===Zd||at===jd}if(z){const at=b.texture.type,ct=at===zi||at===tr||at===Ao||at===ds||at===qd||at===Yd,mt=ut.getClearColor(),gt=ut.getClearAlpha(),Et=mt.r,bt=mt.g,vt=mt.b;ct?(p[0]=Et,p[1]=bt,p[2]=vt,p[3]=gt,w.clearBufferuiv(w.COLOR,0,p)):(v[0]=Et,v[1]=bt,v[2]=vt,v[3]=gt,w.clearBufferiv(w.COLOR,0,v))}else F|=w.COLOR_BUFFER_BIT}O&&(F|=w.DEPTH_BUFFER_BIT),I&&(F|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",st,!1),lt.dispose(),ht.dispose(),Rt.dispose(),R.dispose(),S.dispose(),$.dispose(),Ft.dispose(),he.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",Zn),it.removeEventListener("sessionend",ep),Ea.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Ee.autoReset,O=nt.enabled,I=nt.autoUpdate,F=nt.needsUpdate,z=nt.type;L(),Ee.autoReset=E,nt.enabled=O,nt.autoUpdate=I,nt.needsUpdate=F,nt.type=z}function st(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Mt(E){const O=E.target;O.removeEventListener("dispose",Mt),qt(O)}function qt(E){Te(E),Rt.remove(E)}function Te(E){const O=Rt.get(E).programs;O!==void 0&&(O.forEach(function(I){J.releaseProgram(I)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,I,F,z,at){O===null&&(O=wt);const ct=z.isMesh&&z.matrixWorld.determinant()<0,mt=nx(E,O,I,F,z);St.setMaterial(F,ct);let gt=I.index,Et=1;if(F.wireframe===!0){if(gt=Q.getWireframeAttribute(I),gt===void 0)return;Et=2}const bt=I.drawRange,vt=I.attributes.position;let Kt=bt.start*Et,_e=(bt.start+bt.count)*Et;at!==null&&(Kt=Math.max(Kt,at.start*Et),_e=Math.min(_e,(at.start+at.count)*Et)),gt!==null?(Kt=Math.max(Kt,0),_e=Math.min(_e,gt.count)):vt!=null&&(Kt=Math.max(Kt,0),_e=Math.min(_e,vt.count));const ve=_e-Kt;if(ve<0||ve===1/0)return;Ft.setup(z,F,mt,I,gt);let fn,Qt=At;if(gt!==null&&(fn=V.get(gt),Qt=dt,Qt.setIndex(fn)),z.isMesh)F.wireframe===!0?(St.setLineWidth(F.wireframeLinewidth*ge()),Qt.setMode(w.LINES)):Qt.setMode(w.TRIANGLES);else if(z.isLine){let xt=F.linewidth;xt===void 0&&(xt=1),St.setLineWidth(xt*ge()),z.isLineSegments?Qt.setMode(w.LINES):z.isLineLoop?Qt.setMode(w.LINE_LOOP):Qt.setMode(w.LINE_STRIP)}else z.isPoints?Qt.setMode(w.POINTS):z.isSprite&&Qt.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const xt=z._multiDrawStarts,ke=z._multiDrawCounts,Jt=z._multiDrawCount,In=gt?V.get(gt).bytesPerElement:1,lr=Rt.get(F).currentProgram.getUniforms();for(let hn=0;hn<Jt;hn++)lr.setValue(w,"_gl_DrawID",hn),Qt.render(xt[hn]/In,ke[hn])}else if(z.isInstancedMesh)Qt.renderInstances(Kt,ve,z.count);else if(I.isInstancedBufferGeometry){const xt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,ke=Math.min(I.instanceCount,xt);Qt.renderInstances(Kt,ve,ke)}else Qt.render(Kt,ve)};function Ve(E,O,I){E.transparent===!0&&E.side===Ei&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,qo(E,O,I),E.side=va,E.needsUpdate=!0,qo(E,O,I),E.side=Ei):qo(E,O,I)}this.compile=function(E,O,I=null){I===null&&(I=E),m=ht.get(I),m.init(O),_.push(m),I.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==I&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const F=new Set;return E.traverse(function(z){const at=z.material;if(at)if(Array.isArray(at))for(let ct=0;ct<at.length;ct++){const mt=at[ct];Ve(mt,I,z),F.add(mt)}else Ve(at,I,z),F.add(at)}),_.pop(),m=null,F},this.compileAsync=function(E,O,I=null){const F=this.compile(E,O,I);return new Promise(z=>{function at(){if(F.forEach(function(ct){Rt.get(ct).currentProgram.isReady()&&F.delete(ct)}),F.size===0){z(E);return}setTimeout(at,10)}ee.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Zt=null;function ci(E){Zt&&Zt(E)}function Zn(){Ea.stop()}function ep(){Ea.start()}const Ea=new Zv;Ea.setAnimationLoop(ci),typeof self<"u"&&Ea.setContext(self),this.setAnimationLoop=function(E){Zt=E,it.setAnimationLoop(E),E===null?Ea.stop():Ea.start()},it.addEventListener("sessionstart",Zn),it.addEventListener("sessionend",ep),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(O),O=it.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,O,b),m=ht.get(E,_.length),m.init(O),_.push(m),_t.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Yt.setFromProjectionMatrix(_t),tt=this.localClippingEnabled,X=Nt.init(this.clippingPlanes,tt),x=lt.get(E,u.length),x.init(),u.push(x),it.enabled===!0&&it.isPresenting===!0){const at=g.xr.getDepthSensingMesh();at!==null&&iu(at,O,-1/0,g.sortObjects)}iu(E,O,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(B,et),Gt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Gt&&ut.addToRenderList(x,E),this.info.render.frame++,X===!0&&Nt.beginShadows();const I=m.state.shadowsArray;nt.render(I,E,O),X===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=x.opaque,z=x.transmissive;if(m.setupLights(),O.isArrayCamera){const at=O.cameras;if(z.length>0)for(let ct=0,mt=at.length;ct<mt;ct++){const gt=at[ct];ip(F,z,E,gt)}Gt&&ut.render(E);for(let ct=0,mt=at.length;ct<mt;ct++){const gt=at[ct];np(x,E,gt,gt.viewport)}}else z.length>0&&ip(F,z,E,O),Gt&&ut.render(E),np(x,E,O);b!==null&&(Dt.updateMultisampleRenderTarget(b),Dt.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(g,E,O),Ft.resetDefaultState(),U=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],X===!0&&Nt.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function iu(E,O,I,F){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)I=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Yt.intersectsSprite(E)){F&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const ct=$.update(E),mt=E.material;mt.visible&&x.push(E,ct,mt,I,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Yt.intersectsObject(E))){const ct=$.update(E),mt=E.material;if(F&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Tt.copy(ct.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(mt)){const gt=ct.groups;for(let Et=0,bt=gt.length;Et<bt;Et++){const vt=gt[Et],Kt=mt[vt.materialIndex];Kt&&Kt.visible&&x.push(E,ct,Kt,I,Tt.z,vt)}}else mt.visible&&x.push(E,ct,mt,I,Tt.z,null)}}const at=E.children;for(let ct=0,mt=at.length;ct<mt;ct++)iu(at[ct],O,I,F)}function np(E,O,I,F){const z=E.opaque,at=E.transmissive,ct=E.transparent;m.setupLightsView(I),X===!0&&Nt.setGlobalState(g.clippingPlanes,I),F&&St.viewport(M.copy(F)),z.length>0&&Wo(z,O,I),at.length>0&&Wo(at,O,I),ct.length>0&&Wo(ct,O,I),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ip(E,O,I,F){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[F.id]===void 0&&(m.state.transmissionRenderTarget[F.id]=new er(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Fo:zi,minFilter:Ga,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const at=m.state.transmissionRenderTarget[F.id],ct=F.viewport||M;at.setSize(ct.z,ct.w);const mt=g.getRenderTarget();g.setRenderTarget(at),g.getClearColor(k),Z=g.getClearAlpha(),Z<1&&g.setClearColor(16777215,.5),g.clear(),Gt&&ut.render(I);const gt=g.toneMapping;g.toneMapping=da;const Et=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),m.setupLightsView(F),X===!0&&Nt.setGlobalState(g.clippingPlanes,F),Wo(E,I,F),Dt.updateMultisampleRenderTarget(at),Dt.updateRenderTargetMipmap(at),ee.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let vt=0,Kt=O.length;vt<Kt;vt++){const _e=O[vt],ve=_e.object,fn=_e.geometry,Qt=_e.material,xt=_e.group;if(Qt.side===Ei&&ve.layers.test(F.layers)){const ke=Qt.side;Qt.side=sn,Qt.needsUpdate=!0,ap(ve,I,F,fn,Qt,xt),Qt.side=ke,Qt.needsUpdate=!0,bt=!0}}bt===!0&&(Dt.updateMultisampleRenderTarget(at),Dt.updateRenderTargetMipmap(at))}g.setRenderTarget(mt),g.setClearColor(k,Z),Et!==void 0&&(F.viewport=Et),g.toneMapping=gt}function Wo(E,O,I){const F=O.isScene===!0?O.overrideMaterial:null;for(let z=0,at=E.length;z<at;z++){const ct=E[z],mt=ct.object,gt=ct.geometry,Et=F===null?ct.material:F,bt=ct.group;mt.layers.test(I.layers)&&ap(mt,O,I,gt,Et,bt)}}function ap(E,O,I,F,z,at){E.onBeforeRender(g,O,I,F,z,at),E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(g,O,I,F,E,at),z.transparent===!0&&z.side===Ei&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,g.renderBufferDirect(I,O,F,z,E,at),z.side=va,z.needsUpdate=!0,g.renderBufferDirect(I,O,F,z,E,at),z.side=Ei):g.renderBufferDirect(I,O,F,z,E,at),E.onAfterRender(g,O,I,F,z,at)}function qo(E,O,I){O.isScene!==!0&&(O=wt);const F=Rt.get(E),z=m.state.lights,at=m.state.shadowsArray,ct=z.state.version,mt=J.getParameters(E,z.state,at,O,I),gt=J.getProgramCacheKey(mt);let Et=F.programs;F.environment=E.isMeshStandardMaterial?O.environment:null,F.fog=O.fog,F.envMap=(E.isMeshStandardMaterial?S:R).get(E.envMap||F.environment),F.envMapRotation=F.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",Mt),Et=new Map,F.programs=Et);let bt=Et.get(gt);if(bt!==void 0){if(F.currentProgram===bt&&F.lightsStateVersion===ct)return sp(E,mt),bt}else mt.uniforms=J.getUniforms(E),E.onBeforeCompile(mt,g),bt=J.acquireProgram(mt,gt),Et.set(gt,bt),F.uniforms=mt.uniforms;const vt=F.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(vt.clippingPlanes=Nt.uniform),sp(E,mt),F.needsLights=ax(E),F.lightsStateVersion=ct,F.needsLights&&(vt.ambientLightColor.value=z.state.ambient,vt.lightProbe.value=z.state.probe,vt.directionalLights.value=z.state.directional,vt.directionalLightShadows.value=z.state.directionalShadow,vt.spotLights.value=z.state.spot,vt.spotLightShadows.value=z.state.spotShadow,vt.rectAreaLights.value=z.state.rectArea,vt.ltc_1.value=z.state.rectAreaLTC1,vt.ltc_2.value=z.state.rectAreaLTC2,vt.pointLights.value=z.state.point,vt.pointLightShadows.value=z.state.pointShadow,vt.hemisphereLights.value=z.state.hemi,vt.directionalShadowMap.value=z.state.directionalShadowMap,vt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,vt.spotShadowMap.value=z.state.spotShadowMap,vt.spotLightMatrix.value=z.state.spotLightMatrix,vt.spotLightMap.value=z.state.spotLightMap,vt.pointShadowMap.value=z.state.pointShadowMap,vt.pointShadowMatrix.value=z.state.pointShadowMatrix),F.currentProgram=bt,F.uniformsList=null,bt}function rp(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=tc.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function sp(E,O){const I=Rt.get(E);I.outputColorSpace=O.outputColorSpace,I.batching=O.batching,I.batchingColor=O.batchingColor,I.instancing=O.instancing,I.instancingColor=O.instancingColor,I.instancingMorph=O.instancingMorph,I.skinning=O.skinning,I.morphTargets=O.morphTargets,I.morphNormals=O.morphNormals,I.morphColors=O.morphColors,I.morphTargetsCount=O.morphTargetsCount,I.numClippingPlanes=O.numClippingPlanes,I.numIntersection=O.numClipIntersection,I.vertexAlphas=O.vertexAlphas,I.vertexTangents=O.vertexTangents,I.toneMapping=O.toneMapping}function nx(E,O,I,F,z){O.isScene!==!0&&(O=wt),Dt.resetTextureUnits();const at=O.fog,ct=F.isMeshStandardMaterial?O.environment:null,mt=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ya,gt=(F.isMeshStandardMaterial?S:R).get(F.envMap||ct),Et=F.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,bt=!!I.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),vt=!!I.morphAttributes.position,Kt=!!I.morphAttributes.normal,_e=!!I.morphAttributes.color;let ve=da;F.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ve=g.toneMapping);const fn=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Qt=fn!==void 0?fn.length:0,xt=Rt.get(F),ke=m.state.lights;if(X===!0&&(tt===!0||E!==T)){const Mn=E===T&&F.id===U;Nt.setState(F,E,Mn)}let Jt=!1;F.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==ke.state.version||xt.outputColorSpace!==mt||z.isBatchedMesh&&xt.batching===!1||!z.isBatchedMesh&&xt.batching===!0||z.isBatchedMesh&&xt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&xt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&xt.instancing===!1||!z.isInstancedMesh&&xt.instancing===!0||z.isSkinnedMesh&&xt.skinning===!1||!z.isSkinnedMesh&&xt.skinning===!0||z.isInstancedMesh&&xt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&xt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&xt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&xt.instancingMorph===!1&&z.morphTexture!==null||xt.envMap!==gt||F.fog===!0&&xt.fog!==at||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Nt.numPlanes||xt.numIntersection!==Nt.numIntersection)||xt.vertexAlphas!==Et||xt.vertexTangents!==bt||xt.morphTargets!==vt||xt.morphNormals!==Kt||xt.morphColors!==_e||xt.toneMapping!==ve||xt.morphTargetsCount!==Qt)&&(Jt=!0):(Jt=!0,xt.__version=F.version);let In=xt.currentProgram;Jt===!0&&(In=qo(F,O,z));let lr=!1,hn=!1,au=!1;const be=In.getUniforms(),Fi=xt.uniforms;if(St.useProgram(In.program)&&(lr=!0,hn=!0,au=!0),F.id!==U&&(U=F.id,hn=!0),lr||T!==E){be.setValue(w,"projectionMatrix",E.projectionMatrix),be.setValue(w,"viewMatrix",E.matrixWorldInverse);const Mn=be.map.cameraPosition;Mn!==void 0&&Mn.setValue(w,ft.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&be.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&be.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,hn=!0,au=!0)}if(z.isSkinnedMesh){be.setOptional(w,z,"bindMatrix"),be.setOptional(w,z,"bindMatrixInverse");const Mn=z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),be.setValue(w,"boneTexture",Mn.boneTexture,Dt))}z.isBatchedMesh&&(be.setOptional(w,z,"batchingTexture"),be.setValue(w,"batchingTexture",z._matricesTexture,Dt),be.setOptional(w,z,"batchingIdTexture"),be.setValue(w,"batchingIdTexture",z._indirectTexture,Dt),be.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&be.setValue(w,"batchingColorTexture",z._colorsTexture,Dt));const ru=I.morphAttributes;if((ru.position!==void 0||ru.normal!==void 0||ru.color!==void 0)&&Xt.update(z,I,In),(hn||xt.receiveShadow!==z.receiveShadow)&&(xt.receiveShadow=z.receiveShadow,be.setValue(w,"receiveShadow",z.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Fi.envMap.value=gt,Fi.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&O.environment!==null&&(Fi.envMapIntensity.value=O.environmentIntensity),hn&&(be.setValue(w,"toneMappingExposure",g.toneMappingExposure),xt.needsLights&&ix(Fi,au),at&&F.fog===!0&&yt.refreshFogUniforms(Fi,at),yt.refreshMaterialUniforms(Fi,F,G,N,m.state.transmissionRenderTarget[E.id]),tc.upload(w,rp(xt),Fi,Dt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(tc.upload(w,rp(xt),Fi,Dt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&be.setValue(w,"center",z.center),be.setValue(w,"modelViewMatrix",z.modelViewMatrix),be.setValue(w,"normalMatrix",z.normalMatrix),be.setValue(w,"modelMatrix",z.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Mn=F.uniformsGroups;for(let su=0,rx=Mn.length;su<rx;su++){const op=Mn[su];he.update(op,In),he.bind(op,In)}}return In}function ix(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function ax(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,O,I){Rt.get(E.texture).__webglTexture=O,Rt.get(E.depthTexture).__webglTexture=I;const F=Rt.get(E);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=I===void 0,F.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const I=Rt.get(E);I.__webglFramebuffer=O,I.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,I=0){b=E,C=O,A=I;let F=!0,z=null,at=!1,ct=!1;if(E){const gt=Rt.get(E);if(gt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(w.FRAMEBUFFER,null),F=!1;else if(gt.__webglFramebuffer===void 0)Dt.setupRenderTarget(E);else if(gt.__hasExternalTextures)Dt.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const vt=E.depthTexture;if(gt.__boundDepthTexture!==vt){if(vt!==null&&Rt.has(vt)&&(E.width!==vt.image.width||E.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ct=!0);const bt=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(bt[O])?z=bt[O][I]:z=bt[O],at=!0):E.samples>0&&Dt.useMultisampledRTT(E)===!1?z=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(bt)?z=bt[I]:z=bt,M.copy(E.viewport),D.copy(E.scissor),W=E.scissorTest}else M.copy(rt).multiplyScalar(G).floor(),D.copy(pt).multiplyScalar(G).floor(),W=Bt;if(St.bindFramebuffer(w.FRAMEBUFFER,z)&&F&&St.drawBuffers(E,z),St.viewport(M),St.scissor(D),St.setScissorTest(W),at){const gt=Rt.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,gt.__webglTexture,I)}else if(ct){const gt=Rt.get(E.texture),Et=O||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,gt.__webglTexture,I||0,Et)}U=-1},this.readRenderTargetPixels=function(E,O,I,F,z,at,ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){St.bindFramebuffer(w.FRAMEBUFFER,mt);try{const gt=E.texture,Et=gt.format,bt=gt.type;if(!ne.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-F&&I>=0&&I<=E.height-z&&w.readPixels(O,I,F,z,Ct.convert(Et),Ct.convert(bt),at)}finally{const gt=b!==null?Rt.get(b).__webglFramebuffer:null;St.bindFramebuffer(w.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(E,O,I,F,z,at,ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){St.bindFramebuffer(w.FRAMEBUFFER,mt);try{const gt=E.texture,Et=gt.format,bt=gt.type;if(!ne.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-F&&I>=0&&I<=E.height-z){const vt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,vt),w.bufferData(w.PIXEL_PACK_BUFFER,at.byteLength,w.STREAM_READ),w.readPixels(O,I,F,z,Ct.convert(Et),Ct.convert(bt),0),w.flush();const Kt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await lE(w,Kt,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,vt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,at)}finally{w.deleteBuffer(vt),w.deleteSync(Kt)}return at}}finally{const gt=b!==null?Rt.get(b).__webglFramebuffer:null;St.bindFramebuffer(w.FRAMEBUFFER,gt)}}},this.copyFramebufferToTexture=function(E,O=null,I=0){E.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const F=Math.pow(2,-I),z=Math.floor(E.image.width*F),at=Math.floor(E.image.height*F),ct=O!==null?O.x:0,mt=O!==null?O.y:0;Dt.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,I,0,0,ct,mt,z,at),St.unbindTexture()},this.copyTextureToTexture=function(E,O,I=null,F=null,z=0){E.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1],O=arguments[2],z=arguments[3]||0,I=null);let at,ct,mt,gt,Et,bt;I!==null?(at=I.max.x-I.min.x,ct=I.max.y-I.min.y,mt=I.min.x,gt=I.min.y):(at=E.image.width,ct=E.image.height,mt=0,gt=0),F!==null?(Et=F.x,bt=F.y):(Et=0,bt=0);const vt=Ct.convert(O.format),Kt=Ct.convert(O.type);Dt.setTexture2D(O,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const _e=w.getParameter(w.UNPACK_ROW_LENGTH),ve=w.getParameter(w.UNPACK_IMAGE_HEIGHT),fn=w.getParameter(w.UNPACK_SKIP_PIXELS),Qt=w.getParameter(w.UNPACK_SKIP_ROWS),xt=w.getParameter(w.UNPACK_SKIP_IMAGES),ke=E.isCompressedTexture?E.mipmaps[z]:E.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,ke.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,mt),w.pixelStorei(w.UNPACK_SKIP_ROWS,gt),E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,z,Et,bt,at,ct,vt,Kt,ke.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,z,Et,bt,ke.width,ke.height,vt,ke.data):w.texSubImage2D(w.TEXTURE_2D,z,Et,bt,at,ct,vt,Kt,ke),w.pixelStorei(w.UNPACK_ROW_LENGTH,_e),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ve),w.pixelStorei(w.UNPACK_SKIP_PIXELS,fn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Qt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,xt),z===0&&O.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(E,O,I=null,F=null,z=0){E.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,F=arguments[1]||null,E=arguments[2],O=arguments[3],z=arguments[4]||0);let at,ct,mt,gt,Et,bt,vt,Kt,_e;const ve=E.isCompressedTexture?E.mipmaps[z]:E.image;I!==null?(at=I.max.x-I.min.x,ct=I.max.y-I.min.y,mt=I.max.z-I.min.z,gt=I.min.x,Et=I.min.y,bt=I.min.z):(at=ve.width,ct=ve.height,mt=ve.depth,gt=0,Et=0,bt=0),F!==null?(vt=F.x,Kt=F.y,_e=F.z):(vt=0,Kt=0,_e=0);const fn=Ct.convert(O.format),Qt=Ct.convert(O.type);let xt;if(O.isData3DTexture)Dt.setTexture3D(O,0),xt=w.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Dt.setTexture2DArray(O,0),xt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const ke=w.getParameter(w.UNPACK_ROW_LENGTH),Jt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),In=w.getParameter(w.UNPACK_SKIP_PIXELS),lr=w.getParameter(w.UNPACK_SKIP_ROWS),hn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ve.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ve.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,gt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Et),w.pixelStorei(w.UNPACK_SKIP_IMAGES,bt),E.isDataTexture||E.isData3DTexture?w.texSubImage3D(xt,z,vt,Kt,_e,at,ct,mt,fn,Qt,ve.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(xt,z,vt,Kt,_e,at,ct,mt,fn,ve.data):w.texSubImage3D(xt,z,vt,Kt,_e,at,ct,mt,fn,Qt,ve),w.pixelStorei(w.UNPACK_ROW_LENGTH,ke),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Jt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,In),w.pixelStorei(w.UNPACK_SKIP_ROWS,lr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,hn),z===0&&O.generateMipmaps&&w.generateMipmap(xt),St.unbindTexture()},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&Dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Dt.setTextureCube(E,0):E.isData3DTexture?Dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Dt.setTexture2DArray(E,0):Dt.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,St.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===Qd?"display-p3":"srgb",n.unpackColorSpace=$t.workingColorSpace===tu?"display-p3":"srgb"}}class xR extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}let SR=class extends ko{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};const Rg=new De,Wh=new Hv,Nl=new eu,Ol=new H;class yR extends ln{constructor(t=new Ma,n=new SR){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,r=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(a),Nl.radius+=r,t.ray.intersectsSphere(Nl)===!1)return;Rg.copy(a).invert(),Wh.copy(t.ray).applyMatrix4(Rg);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let v=f,x=p;v<x;v++){const m=c.getX(v);Ol.fromBufferAttribute(d,m),Cg(Ol,m,l,a,t,n,this)}}else{const f=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let v=f,x=p;v<x;v++)Ol.fromBufferAttribute(d,v),Cg(Ol,v,l,a,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cg(e,t,n,i,a,r,s){const o=Wh.distanceSqToPoint(e);if(o<n){const l=new H;Wh.closestPointToPoint(e,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:s})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);const Pl={uniforms:{time:{value:0},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new H(0,0,0)},color:{value:new Ut(16777215)},bgColor:{value:new Ut(0)}},vertexShader:`
    uniform float time;
    uniform float noiseScale;
    uniform float noiseStrength;
    uniform float noiseFrequency;
    uniform float noiseSpeed;
    uniform vec3 noiseOffset;
    varying vec3 vNormal;

    out vec3 vPos;

    // Simple pseudo-random 3D noise function
    float rand(vec3 coord) {
        return fract(sin(dot(coord.xyz, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    }

    float noise(vec3 coord) {
        vec3 i = floor(coord);
        vec3 f = fract(coord);
        float a = rand(i);
        float b = rand(i + vec3(1.0, 0.0, 0.0));
        float c = rand(i + vec3(0.0, 1.0, 0.0));
        float d = rand(i + vec3(1.0, 1.0, 0.0));
        float e = rand(i + vec3(0.0, 0.0, 1.0));
        float f1 = rand(i + vec3(1.0, 0.0, 1.0));
        float g = rand(i + vec3(0.0, 1.0, 1.0));
        float h = rand(i + vec3(1.0, 1.0, 1.0));
        
        vec3 fade = f * f * (3.0 - 2.0 * f);
        return mix(
            mix(mix(a, b, fade.x), mix(c, d, fade.x), fade.y),
            mix(mix(e, f1, fade.x), mix(g, h, fade.x), fade.y),
            fade.z
        );
    }

    void main() {
        vNormal = normal;
        vec3 noiseCoord = noiseScale * position + noiseOffset + time * noiseSpeed;
        float offset = noiseStrength * noise(noiseCoord * noiseFrequency);
        vec3 newPosition = position + normal * offset;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        vPos = gl_Position.xyz;
    }
  `,fragmentShader:`
    uniform vec3 color;
    uniform vec3 bgColor;
    varying vec3 vNormal;

    in vec3 vPos;

    float fog(float dist, float fogStart, float fogEnd, float power, float intensity, float maxVal, float minVal) {


        dist = pow(dist, power) * intensity;
        float fog = clamp((dist - fogStart) / (fogEnd - fogStart), maxVal, minVal);
        
        float alpha = 1.0 - fog;
        return alpha;
    }

    void main() {
        vec3 light = normalize(vec3(0.5, 0.2, 1.0));
        float dProd = max(dot(vNormal, light), 0.0);

        vec3 foreColor = dProd * color;

        float distFog = fog(vPos.z, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0);
        float heightFog = fog(-vPos.y, -0.1, 0.2, 1.0, 1.5, 0.0, 0.98);
        
        float fog = min(distFog, heightFog);

        vec3 finalColor = mix(foreColor, bgColor, fog);


        gl_FragColor = vec4(foreColor, fog);
    }
  `},zl={uniforms:{time:{value:0},pointSize:{value:20},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new H(0,0,0)},color:{value:new Ut(16777215)},bgColor:{value:new Ut(0)}},vertexShader:`
    uniform float time;
    uniform float noiseScale;
    uniform float noiseStrength;
    uniform float noiseFrequency;
    uniform float noiseSpeed;
    uniform vec3 noiseOffset;
    uniform float pointSize;
    varying vec3 vNormal;

    out vec3 vPos;

    // Simple pseudo-random 3D noise function
    float rand(vec3 coord) {
        return fract(sin(dot(coord.xyz, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    }

    float noise(vec3 coord) {
        vec3 i = floor(coord);
        vec3 f = fract(coord);
        float a = rand(i);
        float b = rand(i + vec3(1.0, 0.0, 0.0));
        float c = rand(i + vec3(0.0, 1.0, 0.0));
        float d = rand(i + vec3(1.0, 1.0, 0.0));
        float e = rand(i + vec3(0.0, 0.0, 1.0));
        float f1 = rand(i + vec3(1.0, 0.0, 1.0));
        float g = rand(i + vec3(0.0, 1.0, 1.0));
        float h = rand(i + vec3(1.0, 1.0, 1.0));
        
        vec3 fade = f * f * (3.0 - 2.0 * f);
        return mix(
            mix(mix(a, b, fade.x), mix(c, d, fade.x), fade.y),
            mix(mix(e, f1, fade.x), mix(g, h, fade.x), fade.y),
            fade.z
        );
    }

    void main() {
        vNormal = normal;
        vec3 noiseCoord = noiseScale * position + noiseOffset + time * noiseSpeed;
        float offset = noiseStrength * noise(noiseCoord * noiseFrequency);
        vec3 newPosition = position + normal * offset;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        vPos = gl_Position.xyz;
        gl_PointSize = pointSize;
    }
  `,fragmentShader:`
        uniform vec3 color;
        uniform vec3 bgColor;
        varying vec3 vNormal;

        in vec3 vPos;

        float fog(float dist, float fogStart, float fogEnd, float power, float intensity) {


            dist = pow(dist, power) * intensity;
            float fog = clamp((dist - fogStart) / (fogEnd - fogStart), 0.7, 1.0);
            
            float alpha = 1.0 - fog;
            return alpha;
        }

        void main() {
            // Calculate the distance from the center of the point
            vec2 coord = gl_PointCoord - vec2(0.5);
            float dist = length(coord);

            // color as midpoint between color and background color
            vec3 midCol = mix(color, bgColor, 0.5);

            float distPos = vPos.z;

            float distFog = fog(vPos.z, 0.0, 0.4, 1.0, 1.0);
            float heightFog = fog(-vPos.y, 0.0, 0.1, 1.0, 1.0);

            float finalFog = min(distFog, heightFog);

            // Make it a circle by discarding pixels outside the radius
            if (dist > 0.5) discard;

            gl_FragColor = vec4(color, finalFog);
        }
    `};function MR(e,t){let n=e.current;if(!n)return;const i=new vR({antialias:!0});console.log(n.offsetWidth,", ",n.offsetHeight);const a=window.devicePixelRatio||1;i.setSize(n.offsetWidth,n.offsetHeight),i.setPixelRatio(a),n.appendChild(i.domElement);const r=window.getComputedStyle(t).backgroundColor,s=new xR;console.log(r),s.background=new Ut(r);const o=new Dn(40,n.offsetWidth/n.offsetHeight,.1,1e3);o.position.z=5;const l=new Ts,c=new Jd({color:65280}),h=new qn(l,c),d=new Xo(10,10,100,100);let f=0,p=new si(Pl);p.uniforms=Pl.uniforms,p.transparent=!0,p.vertexShader=Pl.vertexShader,p.fragmentShader=Pl.fragmentShader,p.uniforms.bgColor.value=new Ut(r),p.wireframe=!0;let v=new si(zl);v.uniforms=zl.uniforms,v.transparent=!0,v.vertexShader=zl.vertexShader,v.fragmentShader=zl.fragmentShader;const x=new qn(d,p);x.position.set(0,-.2,5.1),x.rotation.x=-Math.PI/2,s.add(x);const m=new yR(d,v);m.position.set(0,-.2,5.1),m.rotation.x=-Math.PI/2,s.add(m);const u=C=>{i.setSize(n.offsetWidth,n.offsetHeight),o.aspect=n.offsetWidth/n.offsetHeight,o.updateProjectionMatrix()};window.addEventListener("resize",u);let _=!1;const g=()=>{f+=.001,p.uniforms.time.value=f,v.uniforms.time.value=f,_||(u(),_=!0),requestAnimationFrame(g),h.rotation.x+=.01,h.rotation.y+=.01,i.render(s,o)};return g(),{handleResize:u,handleDarkModeChange:()=>{console.log("Dark Mode Changed");const C=window.getComputedStyle(t).backgroundColor;new Ut(C);const A=C.match(/\d+/g).map(Number),b=new Ut(1-A[0]/255,1-A[1]/255,1-A[2]/255);console.log("BackgroundColor: ",C),s.background=new Ut(C),p.uniforms.bgColor.value=new Ut(C),p.uniforms.color.value=new Ut(b),console.log("ForegroundColor: ",b),v.uniforms.color.value=new Ut(b),p.uniforms.color.value=new Ut(b)},scene:s,cleanup:()=>{window.removeEventListener("resize",u),i.dispose(),n.removeChild(i.domElement)}}}const ER=({darkMode:e})=>{const t=kt.useRef(null);let n=kt.useRef(null),i=kt.useRef(null);return kt.useEffect(()=>{var s;for(n=(s=t.current)==null?void 0:s.parentElement;n&&n.tagName!=="SECTION";)n=n.parentElement;console.log("Parent Element: ",n),i=MR(t,n),(()=>{i!=null&&i.handleDarkModeChange&&i.handleDarkModeChange(e)})();const r=setTimeout(()=>{console.log("ThreeJS Instance: ",i),i!=null&&i.handleResize&&i.handleResize(t)},1e3);return()=>{clearTimeout(r),i!=null&&i.cleanup&&i.cleanup()}},[e]),P.jsx("div",{ref:t,style:{minWidth:"250px",minHeight:"250px",width:"auto",height:"auto"}})},tp=({children:e,className:t,style:n,childStyle:i})=>{const{ref:a,inView:r}=Mv({root:null,rootMargin:"-50% 0px",triggerOnce:!0});return P.jsx("div",{ref:a,className:`flex-reveal ${t} ${r?"flex-reveal-visible":"flex-reveal-hidden"}`,style:{display:"flex",width:"100%",...n},children:zc.Children.map(e,(s,o)=>P.jsx("div",{className:"flex-child",style:{transitionDelay:`${o*.5}s`,flex:"1",flexWrap:"wrap",...i},children:s}))})},qh=({darkMode:e,text:t,style:n,onClick:i})=>(kt.useState(!1),kt.useState(!1),P.jsx("button",{onClick:i,className:`minimal-button ${e?"dark-mode":"light-mode"}`,style:{padding:"10px 20px",cursor:"pointer",...n},children:t})),TR=({darkMode:e,isOpen:t,content:n,style:i,onClose:a})=>{if(!t)return null;console.log("LightboxModal darkMode:",e);const r=kt.isValidElement(n)?kt.cloneElement(n,{darkMode:e}):n;return P.jsx("div",{className:"lightbox-overlay",onClick:a,children:P.jsxs("div",{className:`lightbox-content ${e?"dark-mode":"light-mode"}`,onClick:s=>s.stopPropagation(),style:i,children:[P.jsx("button",{className:`close-button ${e?"dark-mode":"light-mode"}`,onClick:a,children:"X"}),P.jsx("div",{children:r})]})})};class HR extends zc.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,n){console.error("Error caught in ErrorBoundary:",t,n)}render(){return this.state.hasError?P.jsx("h2",{children:"Something went wrong. Please try again later."}):this.props.children}}const bR=({darkMode:e,toggleDarkMode:t})=>(kt.useState({x:0,y:0}),P.jsxs("div",{className:"settings",children:[P.jsx("button",{className:"settings-icon",children:P.jsx("img",{src:`assets/Images/settings_gear_icon_${e?"White.png":"Black.png"}`,alt:"Settings",width:"25px",size:"25px"})}),P.jsxs("div",{className:`settings-menu-wrapper ${e?"dark-mode":"light-mode"}`,children:[" ",P.jsx("div",{className:`settings-menu ${e?"dark-mode":"light-mode"}`,children:P.jsxs("button",{onClick:t,className:"settingsMenuButton",children:[P.jsx("img",{className:"clickableImage",src:`assets/Images/${e?"DarkMode.png":"LightMode.png"}`,alt:e?"Dark Mode":"Light Mode",style:{width:"25px",height:"25px",marginRight:"0.5rem"}}),e?"Switch to Light Mode":"Switch to Dark Mode"]})})]})]}));function AR({...e}){const t=kt.useRef(null),n=i=>{const a=t.current;a.style.height="auto",a.style.height=`${a.scrollHeight}px`,e.onChange&&e.onChange(i)};return P.jsx("textarea",{...e,ref:t,onInput:n,style:{width:"100%",minHeight:"40px",maxHeight:"300px",resize:"none",borderRadius:"4px",...e.style}})}const RR=({darkMode:e})=>{const[t,n]=kt.useState({name:"",email:"",phone:"",message:""}),[i,a]=kt.useState({name:"",email:"",phone:"",message:""}),r=l=>{const{id:c,value:h}=l.target;n({...t,[c]:h})},s=()=>{const l={},c=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,h=/(^04\d{8}$)|(^\+?[1-9]\d{1,14}$)/;return t.name||(l.name="Name is required"),t.email?c.test(t.email)||(l.email="Please enter a valid email address"):l.email="Email is required",t.phone&&!h.test(t.phone)&&(l.phone="Please enter a valid phone number in international format"),t.message||(l.message="Message is required"),a(l),Object.keys(l).length===0},o=l=>{if(l.preventDefault(),s()){const c=document.getElementById("contactForm"),h=new FormData(c);fetch("https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",{method:"POST",body:h,mode:"no-cors"}).then(d=>{alert("Form submitted successfully!")}).catch(d=>{console.error("Error submitting form:",d),alert("There was an error submitting the form.")})}};return P.jsxs("div",{className:`form-container ${e?"dark-mode":"light-mode"}`,children:[P.jsx("h2",{children:"Say Hi!"}),P.jsx("iframe",{name:"iframe",title:"Hidden iframe for form submission",style:{display:"none"}}),P.jsx("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",method:"POST",id:"contactForm",target:"iframe",children:P.jsxs("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[P.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"},children:[P.jsxs("div",{className:`input-group ${e?"dark-mode":"light-mode"}`,style:{flexGrow:"2"},children:[P.jsx("input",{type:"text",className:t.name?"not-empty":"",id:"name",name:"entry.1954550861",placeholder:"",value:t.name,onChange:r,required:!0}),P.jsx("label",{htmlFor:"name",children:"Name"}),i.name&&P.jsx("span",{className:"error",children:i.name})]}),P.jsxs("div",{className:`input-group ${e?"dark-mode":"light-mode"}`,style:{flexGrow:"1"},children:[P.jsx("input",{type:"tel",id:"phone",name:"entry.561916195",className:t.phone?"not-empty":"",value:t.phone,onChange:r,pattern:"(^04\\d{8}$)|(^\\+?[1-9]\\d{1,14}$)",title:`Phone number must be in the format: 
                       - Local (Australian): 04xxxxxxxx 
                       - International: +1234567890`,placeholder:"Enter your phone number"}),P.jsx("label",{htmlFor:"phone",children:"Phone Number (Optional)"}),i.phone&&P.jsx("span",{className:"error",children:i.phone})]})]}),P.jsxs("div",{className:`input-group ${e?"dark-mode":"light-mode"}`,children:[P.jsx("input",{type:"email",id:"email",name:"entry.1965469943",className:t.email?"not-empty":"",value:t.email,onChange:r,required:!0}),P.jsx("label",{htmlFor:"email",children:"Email"}),i.email&&P.jsx("span",{className:"error",children:i.email})]}),P.jsxs("div",{className:`input-group ${e?"dark-mode":"light-mode"}`,children:[P.jsx(AR,{id:"message",name:"entry.1168516071",value:t.message,onChange:r,required:!0}),P.jsx("label",{htmlFor:"message",children:"Message"}),i.message&&P.jsx("span",{className:"error",children:i.message})]}),P.jsx("button",{type:"submit",onClick:o,children:"Submit"})]})})]})},ex=({darkMode:e,scrollToSection:t})=>{const[n,i]=kt.useState(!1);kt.useState(!1),kt.useState(!1);const[a,r]=kt.useState(!1);return kt.useEffect(()=>{r(!!n)},[n]),P.jsx("div",{children:P.jsxs(tp,{style:{justifyContent:"center",alignItems:"center",marginTop:"2rem",gap:"2rem"},children:[P.jsxs("div",{className:"buttons",style:{display:"flex",gap:"1rem"},children:[P.jsx(qh,{darkMode:e,text:"Résumé",onClick:()=>window.open("assets/Files/Resume.pdf","_blank")}),P.jsx(qh,{darkMode:e,onClick:t,text:"Contact"})]}),P.jsxs("div",{className:"images",style:{display:"flex",gap:"1rem"},children:[P.jsx("div",{className:"img",style:{flex:"0"},children:P.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",target:"_blank",rel:"noreferer",children:P.jsx("img",{className:"clickableImage",src:"assets/Images/linkedIn_logo.png",alt:"LinkedIn",style:{width:"100px",height:"100px",marginRight:"8px"}})})}),P.jsx("div",{className:"img",style:{flex:"0"},children:P.jsx("a",{href:"https://github.com/Peregrine777",target:"_blank",rel:"noreferer",children:P.jsx("img",{className:"clickableImage",src:`assets/Images/github-logo_${e?"dark.png":"light.png"}`,alt:"GitHub",style:{width:"100px",height:"100px",marginRight:"8px"}})})})]})]})})},CR=({darkMode:e,src:t,alt:n,style:i})=>{class a extends zc.Component{constructor(){super(...arguments);As(this,"state",{noVariant:!1,hasError:!1,isLoading:!0});As(this,"handleError",()=>{const{noVariant:o}=this.state;if(!o){this.setState({noVariant:!0});return}this.setState({hasError:!0})});As(this,"handleLoad",()=>{this.setState({isLoading:!1})});As(this,"getImagePath",o=>{if(!o)return null;const[l,c]=o.split(/(?=\.[^.]+$)/);return e?`${l}_White${c}`:`${l}_Black${c}`})}render(){const{hasError:o,noVariant:l,isLoading:c}=this.state,{src:h,alt:d,style:f}=this.props,p=this.getImagePath(h),v={width:f.width||"80px",height:f.height||"80px",backgroundColor:"#f0f0f0",display:c?"block":"none"};return l?P.jsxs("div",{children:[P.jsx("div",{style:v}),P.jsx("img",{src:h,onError:this.handleError,onLoad:this.handleLoad,alt:d,style:{...f,display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]}):o?P.jsxs("div",{children:[P.jsx("div",{style:v}),P.jsx("img",{src:"assets/Images/404.png",alt:d,style:f})]}):P.jsxs("div",{children:[P.jsx("div",{style:v}),P.jsx("img",{src:p,onError:this.handleError,onLoad:this.handleLoad,alt:d,style:{...f,display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]})}}return P.jsx(a,{src:t,alt:n,style:i})},wR=({darkMode:e})=>{const[t,n]=kt.useState([]),[i,a]=kt.useState(!1);if(kt.useEffect(()=>{fetch("assets/Data/skills.json").then(s=>s.json()).then(s=>{console.log("Categories and Skill Counts:",s.map(o=>({category:o.title,skillCount:o.skills.length}))),n(s),a(!0)}).catch(s=>console.error("Error loading skills:",s))},[]),!i)return P.jsx("p",{children:"Loading skills..."});const r=s=>{if(!s)return null;const[o,l]=s.split(/(?=\.[^.]+$)/);return e?`${o}_White${l}`:`${o}_Black${l}`};return P.jsx("div",{children:t.map(s=>P.jsxs("div",{children:[P.jsx("h2",{style:{textAlign:"center",margin:"0.2rem"},children:s.title}),P.jsx("div",{className:"partial-divider"}),P.jsx(tp,{style:{justifyContent:"center",paddingTop:"1rem",paddingBottom:"1rem"},childStyle:{flexGrow:"0",minWidth:"150px"},children:s.skills.map(o=>(r(o.image),P.jsxs("div",{className:"skillItem",style:{},children:[P.jsx(CR,{darkMode:e,src:`assets/Images/Skills/${o.image}`,alt:o.name,style:{maxWidth:"100%",width:"80px",objectFit:"contain",alignSelf:"normal",height:"auto"}}),P.jsx("p",{style:{marginTop:"0.1rem",fontFamily:"Montserrat, sans-serif",fontWeight:"400"},children:o.name})]},o.name)))})]},s.title))})},DR=({darkMode:e,toggleDarkMode:t})=>P.jsxs("header",{className:`header ${e?"dark-mode":"light-mode"}`,children:[P.jsxs("div",{children:[P.jsx("img",{src:`assets/Images/Peregrine_${e?"dark.png":"light.png"}`,alt:"Logo",className:"logo",style:{marginBottom:"1rem",verticalAlign:"middle",objectFit:"contain",width:"50px",height:"50px"}}),P.jsx("h1",{style:{display:"inline-block",paddingLeft:"10px"},children:"Samuel Mckenzie-Sell"})]}),P.jsx(bR,{darkMode:e,toggleDarkMode:t})]}),UR=({darkMode:e})=>P.jsxs("div",{className:"container",style:{justifyContent:"center",alignItems:"center",flex:"0 1 auto",margin:"auto"},children:[P.jsx("div",{className:"column",style:{flexBasis:"10%",flex:"0 0 auto"},children:P.jsx("img",{src:`assets/Images/Peregrine_${e?"dark.png":"light.png"}`,style:{height:"100px",verticalAlign:"middle"}})}),P.jsxs("div",{className:"column",style:{flexBasis:"45%",flex:"0 0 auto",textAlign:"left"},children:[P.jsx("h2",{style:{textAlign:"left"},children:" Links "}),P.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",children:"LinkedIn"}),P.jsx("br",{}),P.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",children:"GitHub"}),P.jsx("p",{style:{textAlign:"left",fontSize:"24px"},children:" "}),P.jsx(ex,{darkMode:e})]}),P.jsxs("div",{className:"column",style:{flex:"0",alignSelf:"start",textAlign:"left"},children:[P.jsx("h2",{style:{textAlign:"left"},children:" Contact "}),P.jsx("p",{children:" samuelmckenziesell@gmail.com "}),P.jsx("p",{children:" +61 0401 384 885 "})]})]}),LR=({darkMode:e})=>P.jsxs("div",{style:{textAlign:"center"},children:[P.jsx("h2",{children:"Game Development"}),P.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[P.jsxs("div",{style:{flex:"1",padding:"1rem"},children:[P.jsx("h3",{children:"Games"}),P.jsx("p",{children:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"}),P.jsx("img",{src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada"}),P.jsx("iframe",{src:"https://itch.io/embed-upload/10600258?color=0484d1",width:"100%",height:"60%",title:"Gloria Armada",children:P.jsx("a",{href:"https://chanel-parfait.itch.io/gloria-armada",children:"Play Gloria Armada on itch.io"})})]}),P.jsxs("div",{style:{flex:"1",padding:"1rem"},children:[P.jsx("h3",{children:"Game Engines"}),P.jsx("p",{children:"s"})]})]})]}),NR=({darkMode:e})=>{const t=e?"white":"#333";return P.jsxs("section",{className:"analytics-overview",children:[P.jsxs("div",{className:"section-header",children:[P.jsx("h2",{style:{color:t},children:"Data Analytics Expertise"}),P.jsx("p",{children:"Leveraging data to uncover insights and drive business decisions. Although I work on sensitive projects, I can offer a range of services in statistical analysis, predictive modeling, and data visualization."})]}),P.jsxs("div",{className:"skills-and-tools",children:[P.jsx("h3",{children:"Tools & Techniques"}),P.jsxs("ul",{children:[P.jsx("li",{children:"Statistical Analysis: Python (pandas, numpy, scipy)"}),P.jsx("li",{children:"Data Visualization: Tableau, Power BI, Plotly"}),P.jsx("li",{children:"Database Management: SQL, PostgreSQL, NoSQL"}),P.jsx("li",{children:"Machine Learning: Scikit-learn, TensorFlow, Keras"}),P.jsx("li",{children:"Data Processing: ETL, web scraping, APIs"})]})]}),P.jsxs("div",{className:"impact",children:[P.jsx("h3",{children:"Impact"}),P.jsx("p",{children:"In my past work, I've helped businesses improve decision-making with data-driven insights, built predictive models for revenue forecasting, and developed interactive dashboards to monitor key performance metrics. My work directly contributes to operational efficiency and informed strategic decisions."})]}),P.jsx("div",{className:"visuals",children:P.jsx("div",{className:"sample-graph",children:P.jsx("img",{src:"/path-to-placeholder-image.png",alt:"Data analytics placeholder"})})})]})},OR=({darkMode:e})=>P.jsxs("div",{style:{textAlign:"center"},children:[P.jsx("h2",{children:"Interactive Media"}),P.jsx("p",{children:"Placeholder text"})]}),PR=({darkMode:e,handleOpenLightbox:t})=>{const n=e?"white":"#333";return P.jsxs(tp,{style:{justifyContent:"center",gap:"2rem"},childStyle:{minWidth:"400px"},children:[P.jsxs("div",{className:`portfolioCard ${e?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(P.jsx(LR,{}),{height:"80vh"}),children:[P.jsx("h2",{style:{color:n},children:"GameDev"}),P.jsx("h3",{children:"Games, game engines, physics and rendering"}),P.jsx("a",{href:"https://chanel-parfait.itch.io/gloria-armada",target:"_blank",rel:"noreferer",children:P.jsx("img",{src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})})]}),P.jsxs("div",{className:`portfolioCard ${e?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(P.jsx(NR,{darkMode:e}),{height:"80vh"}),children:[P.jsx("h2",{style:{color:n},children:"Data Analysis"}),P.jsx("p",{children:"Using data to uncover insights, drive business decisions, and create actionable solutions, with expertise in statistical analysis, machine learning, and visualization."}),P.jsx("img",{src:"assets/Images/tableau.webp",alt:"tableau",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})]}),P.jsxs("div",{className:`portfolioCard ${e?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(P.jsx(OR,{darkMode:e}),{height:"80vh"}),children:[P.jsx("h2",{style:{textAlign:"center"},children:"Interactive Media"}),P.jsx("p",{children:"Interactive visualizations, simulations, and animations using react, three.js"}),P.jsx("div",{className:"column-content",id:"threejsContainer",children:P.jsx(ER,{darkMode:e,containerID:"threejsContainer"})})]})]})},zR=({darkMode:e,handleOpenLightbox:t,scrollToSection:n})=>P.jsxs("div",{className:"container",children:[P.jsxs("div",{className:"column",style:{flexGrow:"0"},children:[P.jsxs("div",{style:{flex:"1",flexDirection:"vertical"},children:[P.jsx("div",{style:{justifyContent:"center",padding:"2rem"},children:P.jsx("h2",{style:{textAlign:"left",fontSize:"36",textWrap:"wrap",paddingLeft:"0rem"},children:"Let's make something amazing together!"})}),P.jsxs("p",{children:[" ","I am a software engineer with a passion for creating innovative solutions."," "]}),P.jsxs("p",{children:[" ","I have experience in various programming languages and frameworks."," "]}),P.jsxs("p",{children:[" ","I enjoy collaborating with teams and solving complex problems."," "]})]}),P.jsx(ex,{darkMode:e,scrollToSection:n})]}),P.jsx("div",{className:"column",margin:"4rem",padding:"4rem",style:{flexShrink:"3"},children:P.jsx("img",{src:"assets/Images/Profile.png",alt:"Profile",style:{maxWidth:"300px",verticalAlign:"middle",height:"auto"}})})]}),BR=()=>{const[e,t]=kt.useState(!0),[n,i]=kt.useState(!1),[a,r]=kt.useState("Test"),[s,o]=kt.useState(null);kt.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0)},5)},[]);const[l,c]=kt.useState(!1);kt.useEffect(()=>{const v=()=>{c(!0),window.removeEventListener("scroll",v)};return window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]);const h=()=>{const v=document.getElementById("contactMe");v!=null?v.scrollIntoView({behavior:"smooth",block:"start"}):console.error("Target section not found")},d=(v,x)=>{r(v),o(x),i(!0)},f=()=>{i(!1)},p=()=>{t(v=>{const x=!v;return document.body.className=x?"dark-mode":"light-mode",x})};return P.jsxs("div",{className:"app",children:[P.jsx(TR,{darkMode:e,isOpen:n,content:a,style:s,onClose:f}),P.jsx(DR,{darkMode:e,toggleDarkMode:p}),P.jsxs("main",{className:`main ${e?"dark-mode":"light-mode"}`,children:[P.jsx(fr,{title:"Greetings",darkMode:e,style:{paddingTop:"1rem"},children:P.jsx(zR,{darkMode:e,scrollToSection:h})}),P.jsx(fr,{title:"Overview",darkMode:e,children:P.jsx(PR,{darkMode:e,handleOpenLightbox:d})}),P.jsx(fr,{title:"Skills",darkMode:e,children:P.jsx(wR,{darkMode:e,children:" "})}),P.jsxs(fr,{title:"ContactMe",id:"contactMe",darkMode:e,style:{backgroundColor:"#0061aa",paddingBottom:"1rem",paddingTop:"1rem"},children:[P.jsx("h2",{style:{textAlign:"center",color:"white",marginTop:"0px"},children:"Get In Touch!"}),P.jsx(qh,{darkMode:e,text:"Contact",style:{color:"white",borderColor:"white",borderRadius:"5px"},onClick:()=>d(P.jsx(RR,{darkMode:e}),{height:"unset"})})]}),P.jsx(fr,{title:"Portfolio",darkMode:e,style:{padding:"0px"}}),P.jsx(fr,{title:"Footer",darkMode:e,children:P.jsx(UR,{darkMode:e})})]})]})};rM.createRoot(document.getElementById("root")).render(P.jsx(zc.StrictMode,{children:P.jsx(BR,{})}));
