var RS=Object.defineProperty;var DS=(e,t,n)=>t in e?RS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var fo=(e,t,n)=>DS(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function R0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D0={exports:{}},Bu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LS=Symbol.for("react.transitional.element"),US=Symbol.for("react.fragment");function L0(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:LS,type:e,key:i,ref:t!==void 0?t:null,props:n}}Bu.Fragment=US;Bu.jsx=L0;Bu.jsxs=L0;D0.exports=Bu;var P=D0.exports,U0={exports:{}},Xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=Symbol.for("react.transitional.element"),PS=Symbol.for("react.portal"),NS=Symbol.for("react.fragment"),OS=Symbol.for("react.strict_mode"),zS=Symbol.for("react.profiler"),IS=Symbol.for("react.consumer"),FS=Symbol.for("react.context"),BS=Symbol.for("react.forward_ref"),HS=Symbol.for("react.suspense"),VS=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),Im=Symbol.iterator;function GS(e){return e===null||typeof e!="object"?null:(e=Im&&e[Im]||e["@@iterator"],typeof e=="function"?e:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O0=Object.assign,z0={};function eo(e,t,n){this.props=e,this.context=t,this.refs=z0,this.updater=n||N0}eo.prototype.isReactComponent={};eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I0(){}I0.prototype=eo.prototype;function fp(e,t,n){this.props=e,this.context=t,this.refs=z0,this.updater=n||N0}var hp=fp.prototype=new I0;hp.constructor=fp;O0(hp,eo.prototype);hp.isPureReactComponent=!0;var Fm=Array.isArray,Me={H:null,A:null,T:null,S:null},F0=Object.prototype.hasOwnProperty;function dp(e,t,n,i,a,s){return n=s.ref,{$$typeof:up,type:e,key:t,ref:n!==void 0?n:null,props:s}}function kS(e,t){return dp(e.type,t,void 0,void 0,void 0,e.props)}function pp(e){return typeof e=="object"&&e!==null&&e.$$typeof===up}function XS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bm=/\/+/g;function pf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?XS(""+e.key):t.toString(36)}function Hm(){}function WS(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Hm,Hm):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function or(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case up:case PS:r=!0;break;case P0:return r=e._init,or(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+pf(e,0):i,Fm(a)?(n="",r!=null&&(n=r.replace(Bm,"$&/")+"/"),or(a,t,n,"",function(c){return c})):a!=null&&(pp(a)&&(a=kS(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Bm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Fm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+pf(i,l),r+=or(i,t,n,s,a);else if(l=GS(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+pf(i,l++),r+=or(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return or(WS(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Il(e,t,n){if(e==null)return e;var i=[],a=0;return or(e,i,"","",function(s){return t.call(n,s,a++)}),i}function jS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vm=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qS(){}Xt.Children={map:Il,forEach:function(e,t,n){Il(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Il(e,function(){t++}),t},toArray:function(e){return Il(e,function(t){return t})||[]},only:function(e){if(!pp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Xt.Component=eo;Xt.Fragment=NS;Xt.Profiler=zS;Xt.PureComponent=fp;Xt.StrictMode=OS;Xt.Suspense=HS;Xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Me;Xt.act=function(){throw Error("act(...) is not supported in production builds of React.")};Xt.cache=function(e){return function(){return e.apply(null,arguments)}};Xt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=O0({},e.props),a=e.key,s=void 0;if(t!=null)for(r in t.ref!==void 0&&(s=void 0),t.key!==void 0&&(a=""+t.key),t)!F0.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}return dp(e.type,a,void 0,void 0,s,i)};Xt.createContext=function(e){return e={$$typeof:FS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:IS,_context:e},e};Xt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)F0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return dp(e,s,void 0,void 0,null,a)};Xt.createRef=function(){return{current:null}};Xt.forwardRef=function(e){return{$$typeof:BS,render:e}};Xt.isValidElement=pp;Xt.lazy=function(e){return{$$typeof:P0,_payload:{_status:-1,_result:e},_init:jS}};Xt.memo=function(e,t){return{$$typeof:VS,type:e,compare:t===void 0?null:t}};Xt.startTransition=function(e){var t=Me.T,n={};Me.T=n;try{var i=e(),a=Me.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(qS,Vm)}catch(s){Vm(s)}finally{Me.T=t}};Xt.unstable_useCacheRefresh=function(){return Me.H.useCacheRefresh()};Xt.use=function(e){return Me.H.use(e)};Xt.useActionState=function(e,t,n){return Me.H.useActionState(e,t,n)};Xt.useCallback=function(e,t){return Me.H.useCallback(e,t)};Xt.useContext=function(e){return Me.H.useContext(e)};Xt.useDebugValue=function(){};Xt.useDeferredValue=function(e,t){return Me.H.useDeferredValue(e,t)};Xt.useEffect=function(e,t){return Me.H.useEffect(e,t)};Xt.useId=function(){return Me.H.useId()};Xt.useImperativeHandle=function(e,t,n){return Me.H.useImperativeHandle(e,t,n)};Xt.useInsertionEffect=function(e,t){return Me.H.useInsertionEffect(e,t)};Xt.useLayoutEffect=function(e,t){return Me.H.useLayoutEffect(e,t)};Xt.useMemo=function(e,t){return Me.H.useMemo(e,t)};Xt.useOptimistic=function(e,t){return Me.H.useOptimistic(e,t)};Xt.useReducer=function(e,t,n){return Me.H.useReducer(e,t,n)};Xt.useRef=function(e){return Me.H.useRef(e)};Xt.useState=function(e){return Me.H.useState(e)};Xt.useSyncExternalStore=function(e,t,n){return Me.H.useSyncExternalStore(e,t,n)};Xt.useTransition=function(){return Me.H.useTransition()};Xt.version="19.0.0";U0.exports=Xt;var kt=U0.exports;const Hu=R0(kt);var B0={exports:{}},Vu={},H0={exports:{}},V0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,W){var I=N.length;N.push(W);t:for(;0<I;){var Q=I-1>>>1,at=N[Q];if(0<a(at,W))N[Q]=W,N[I]=at,I=Q;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var W=N[0],I=N.pop();if(I!==W){N[0]=I;t:for(var Q=0,at=N.length,ht=at>>>1;Q<ht;){var wt=2*(Q+1)-1,Ft=N[wt],j=wt+1,it=N[j];if(0>a(Ft,I))j<at&&0>a(it,Ft)?(N[Q]=it,N[j]=I,Q=j):(N[Q]=Ft,N[wt]=I,Q=wt);else if(j<at&&0>a(it,I))N[Q]=it,N[j]=I,Q=j;else break t}}return W}function a(N,W){var I=N.sortIndex-W.sortIndex;return I!==0?I:N.id-W.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],f=1,h=null,d=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function g(N){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=N)i(c),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(c)}}function y(N){if(x=!1,g(N),!v)if(n(l)!==null)v=!0,q();else{var W=n(c);W!==null&&$(y,W.startTime-N)}}var w=!1,A=-1,T=5,L=-1;function E(){return!(e.unstable_now()-L<T)}function S(){if(w){var N=e.unstable_now();L=N;var W=!0;try{t:{v=!1,x&&(x=!1,u(A),A=-1),p=!0;var I=d;try{e:{for(g(N),h=n(l);h!==null&&!(h.expirationTime>N&&E());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,d=h.priorityLevel;var at=Q(h.expirationTime<=N);if(N=e.unstable_now(),typeof at=="function"){h.callback=at,g(N),W=!0;break e}h===n(l)&&i(l),g(N)}else i(l);h=n(l)}if(h!==null)W=!0;else{var ht=n(c);ht!==null&&$(y,ht.startTime-N),W=!1}}break t}finally{h=null,d=I,p=!1}W=void 0}}finally{W?R():w=!1}}}var R;if(typeof _=="function")R=function(){_(S)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,B=X.port2;X.port1.onmessage=S,R=function(){B.postMessage(null)}}else R=function(){m(S,0)};function q(){w||(w=!0,R())}function $(N,W){A=m(function(){N(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||p||(v=!0,q())},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var I=d;d=W;try{return N()}finally{d=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=d;d=N;try{return W()}finally{d=I}},e.unstable_scheduleCallback=function(N,W,I){var Q=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Q+I:Q):I=Q,N){case 1:var at=-1;break;case 2:at=250;break;case 5:at=1073741823;break;case 4:at=1e4;break;default:at=5e3}return at=I+at,N={id:f++,callback:W,priorityLevel:N,startTime:I,expirationTime:at,sortIndex:-1},I>Q?(N.sortIndex=I,t(c,N),n(l)===null&&N===n(c)&&(x?(u(A),A=-1):x=!0,$(y,I-Q))):(N.sortIndex=at,t(l,N),v||p||(v=!0,q())),N},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(N){var W=d;return function(){var I=d;d=W;try{return N.apply(this,arguments)}finally{d=I}}}})(V0);H0.exports=V0;var YS=H0.exports,G0={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZS=kt;function k0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ca(){}var pn={d:{f:ca,r:function(){throw Error(k0(522))},D:ca,C:ca,L:ca,m:ca,X:ca,S:ca,M:ca},p:0,findDOMNode:null},KS=Symbol.for("react.portal");function QS(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:KS,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var zo=ZS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Gu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}_n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn;_n.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(k0(299));return QS(e,t,null,n)};_n.flushSync=function(e){var t=zo.T,n=pn.p;try{if(zo.T=null,pn.p=2,e)return e()}finally{zo.T=t,pn.p=n,pn.d.f()}};_n.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,pn.d.C(e,t))};_n.prefetchDNS=function(e){typeof e=="string"&&pn.d.D(e)};_n.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Gu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?pn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&pn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};_n.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Gu(t.as,t.crossOrigin);pn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&pn.d.M(e)};_n.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Gu(n,t.crossOrigin);pn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};_n.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Gu(t.as,t.crossOrigin);pn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else pn.d.m(e)};_n.requestFormReset=function(e){pn.d.r(e)};_n.unstable_batchedUpdates=function(e,t){return e(t)};_n.useFormState=function(e,t,n){return zo.H.useFormState(e,t,n)};_n.useFormStatus=function(){return zo.H.useHostTransitionStatus()};_n.version="19.0.0";function X0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X0)}catch(e){console.error(e)}}X0(),G0.exports=_n;var $S=G0.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=YS,W0=kt,JS=$S;function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var tM=Symbol.for("react.element"),Fl=Symbol.for("react.transitional.element"),Ro=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),q0=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),eM=Symbol.for("react.provider"),Y0=Symbol.for("react.consumer"),qi=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),Ch=Symbol.for("react.suspense"),Rh=Symbol.for("react.suspense_list"),gp=Symbol.for("react.memo"),xa=Symbol.for("react.lazy"),Z0=Symbol.for("react.offscreen"),nM=Symbol.for("react.memo_cache_sentinel"),Gm=Symbol.iterator;function ho(e){return e===null||typeof e!="object"?null:(e=Gm&&e[Gm]||e["@@iterator"],typeof e=="function"?e:null)}var iM=Symbol.for("react.client.reference");function Dh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===iM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case Ro:return"Portal";case wh:return"Profiler";case q0:return"StrictMode";case Ch:return"Suspense";case Rh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qi:return(e.displayName||"Context")+".Provider";case Y0:return(e._context.displayName||"Context")+".Consumer";case mp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gp:return t=e.displayName||null,t!==null?t:Dh(e.type)||"Memo";case xa:t=e._payload,e=e._init;try{return Dh(e(t))}catch{}}return null}var Bt=W0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e=Object.assign,mf,km;function Do(e){if(mf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mf=t&&t[1]||"",km=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mf+e+km}var gf=!1;function _f(e,t){if(!e||gf)return"";gf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var d=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){d=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){d=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=a);break}}}finally{gf=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Do(n):""}function aM(e){switch(e.tag){case 26:case 27:case 5:return Do(e.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 15:return e=_f(e.type,!1),e;case 11:return e=_f(e.type.render,!1),e;case 1:return e=_f(e.type,!0),e;default:return""}}function Xm(e){try{var t="";do t+=aM(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function no(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function K0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wm(e){if(no(e)!==e)throw Error(K(188))}function sM(e){var t=e.alternate;if(!t){if(t=no(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Wm(a),e;if(s===i)return Wm(a),t;s=s.sibling}throw Error(K(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function Q0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Q0(e),t!==null)return t;e=e.sibling}return null}var Lo=Array.isArray,ge=JS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,gs={pending:!1,data:null,method:null,action:null},Lh=[],mr=-1;function Di(e){return{current:e}}function Ye(e){0>mr||(e.current=Lh[mr],Lh[mr]=null,mr--)}function ye(e,t){mr++,Lh[mr]=e.current,e.current=t}var bi=Di(null),al=Di(null),Da=Di(null),Jc=Di(null);function tu(e,t){switch(ye(Da,t),ye(al,e),ye(bi,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?jg(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=jg(e),t=cy(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ye(bi),ye(bi,t)}function Vr(){Ye(bi),Ye(al),Ye(Da)}function Uh(e){e.memoizedState!==null&&ye(Jc,e);var t=bi.current,n=cy(t,e.type);t!==n&&(ye(al,e),ye(bi,n))}function eu(e){al.current===e&&(Ye(bi),Ye(al)),Jc.current===e&&(Ye(Jc),ml._currentValue=gs)}var Ph=Object.prototype.hasOwnProperty,_p=Ve.unstable_scheduleCallback,vf=Ve.unstable_cancelCallback,rM=Ve.unstable_shouldYield,oM=Ve.unstable_requestPaint,Ei=Ve.unstable_now,lM=Ve.unstable_getCurrentPriorityLevel,$0=Ve.unstable_ImmediatePriority,J0=Ve.unstable_UserBlockingPriority,nu=Ve.unstable_NormalPriority,cM=Ve.unstable_LowPriority,tv=Ve.unstable_IdlePriority,uM=Ve.log,fM=Ve.unstable_setDisableYieldValue,Ml=null,Un=null;function hM(e){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}function Ca(e){if(typeof uM=="function"&&fM(e),Un&&typeof Un.setStrictMode=="function")try{Un.setStrictMode(Ml,e)}catch{}}var Pn=Math.clz32?Math.clz32:mM,dM=Math.log,pM=Math.LN2;function mM(e){return e>>>=0,e===0?32:31-(dM(e)/pM|0)|0}var Bl=128,Hl=4194304;function rs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ku(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,a=e.suspendedLanes,s=e.pingedLanes,r=e.warmLanes;e=e.finishedLanes!==0;var o=n&134217727;return o!==0?(n=o&~a,n!==0?i=rs(n):(s&=o,s!==0?i=rs(s):e||(r=o&~r,r!==0&&(i=rs(r))))):(o=n&~a,o!==0?i=rs(o):s!==0?i=rs(s):e||(r=n&~r,r!==0&&(i=rs(r)))),i===0?0:t!==0&&t!==i&&!(t&a)&&(a=i&-i,r=t&-t,a>=r||a===32&&(r&4194176)!==0)?t:i}function bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gM(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(){var e=Bl;return Bl<<=1,!(Bl&4194176)&&(Bl=128),e}function nv(){var e=Hl;return Hl<<=1,!(Hl&62914560)&&(Hl=4194304),e}function xf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function El(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _M(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Pn(n),h=1<<f;o[f]=0,l[f]=-1;var d=c[f];if(d!==null)for(c[f]=null,f=0;f<d.length;f++){var p=d[f];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&iv(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function iv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Pn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194218}function av(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Pn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function sv(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function rv(){var e=ge.p;return e!==0?e:(e=window.event,e===void 0?32:xy(e.type))}function vM(e,t){var n=ge.p;try{return ge.p=e,t()}finally{ge.p=n}}var Wa=Math.random().toString(36).slice(2),rn="__reactFiber$"+Wa,bn="__reactProps$"+Wa,io="__reactContainer$"+Wa,Nh="__reactEvents$"+Wa,xM="__reactListeners$"+Wa,yM="__reactHandles$"+Wa,jm="__reactResources$"+Wa,sl="__reactMarker$"+Wa;function vp(e){delete e[rn],delete e[bn],delete e[Nh],delete e[xM],delete e[yM]}function fs(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[io]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yg(e);e!==null;){if(n=e[rn])return n;e=Yg(e)}return t}e=n,n=e.parentNode}return null}function ao(e){if(e=e[rn]||e[io]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Uo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function Rr(e){var t=e[jm];return t||(t=e[jm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[sl]=!0}var ov=new Set,lv={};function Ds(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(lv[e]=t,e=0;e<t.length;e++)ov.add(t[e])}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),SM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qm={},Ym={};function MM(e){return Ph.call(Ym,e)?!0:Ph.call(qm,e)?!1:SM.test(e)?Ym[e]=!0:(qm[e]=!0,!1)}function Oc(e,t,n){if(MM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Vl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Pi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bM(e){var t=cv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){i=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function iu(e){e._valueTracker||(e._valueTracker=bM(e))}function uv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=cv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function au(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var EM=/[\n"\\]/g;function jn(e){return e.replace(EM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Oh(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kn(t)):e.value!==""+kn(t)&&(e.value=""+kn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?zh(e,r,kn(t)):n!=null?zh(e,r,kn(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+kn(o):e.removeAttribute("name")}function fv(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;n=n!=null?""+kn(n):"",t=t!=null?""+kn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r)}function zh(e,t,n){t==="number"&&au(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Dr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function hv(e,t,n){if(t!=null&&(t=""+kn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+kn(n):""}function dv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(Lo(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=kn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var TM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||TM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function pv(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Zm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Zm(e,s,t[s])}function xp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var AM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zc(e){return wM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ih=null;function yp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gr=null,Lr=null;function Km(e){var t=ao(e);if(t&&(e=t.stateNode)){var n=e[bn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Oh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+jn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[bn]||null;if(!a)throw Error(K(90));Oh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&uv(i)}break t;case"textarea":hv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Dr(e,!!n.multiple,t,!1)}}}var yf=!1;function mv(e,t,n){if(yf)return e(t,n);yf=!0;try{var i=e(t);return i}finally{if(yf=!1,(gr!==null||Lr!==null)&&(Ju(),gr&&(t=gr,e=Lr,Lr=gr=null,Km(t),e)))for(t=0;t<e.length;t++)Km(e[t])}}function rl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[bn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var Fh=!1;if(ea)try{var po={};Object.defineProperty(po,"passive",{get:function(){Fh=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Fh=!1}var Ra=null,Sp=null,Ic=null;function gv(){if(Ic)return Ic;var e,t=Sp,n=t.length,i,a="value"in Ra?Ra.value:Ra.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Ic=a.slice(e,1<i?1-i:void 0)}function Fc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gl(){return!0}function Qm(){return!1}function En(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gl:Qm,this.isPropagationStopped=Qm,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),t}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xu=En(Ls),Tl=_e({},Ls,{view:0,detail:0}),CM=En(Tl),Sf,Mf,mo,Wu=_e({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(Sf=e.screenX-mo.screenX,Mf=e.screenY-mo.screenY):Mf=Sf=0,mo=e),Sf)},movementY:function(e){return"movementY"in e?e.movementY:Mf}}),$m=En(Wu),RM=_e({},Wu,{dataTransfer:0}),DM=En(RM),LM=_e({},Tl,{relatedTarget:0}),bf=En(LM),UM=_e({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),PM=En(UM),NM=_e({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),OM=En(NM),zM=_e({},Ls,{data:0}),Jm=En(zM),IM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=BM[e])?!!t[e]:!1}function Mp(){return HM}var VM=_e({},Tl,{key:function(e){if(e.key){var t=IM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?FM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mp,charCode:function(e){return e.type==="keypress"?Fc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GM=En(VM),kM=_e({},Wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tg=En(kM),XM=_e({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mp}),WM=En(XM),jM=_e({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),qM=En(jM),YM=_e({},Wu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ZM=En(YM),KM=_e({},Ls,{newState:0,oldState:0}),QM=En(KM),$M=[9,13,27,32],bp=ea&&"CompositionEvent"in window,Io=null;ea&&"documentMode"in document&&(Io=document.documentMode);var JM=ea&&"TextEvent"in window&&!Io,_v=ea&&(!bp||Io&&8<Io&&11>=Io),eg=" ",ng=!1;function vv(e,t){switch(e){case"keyup":return $M.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _r=!1;function t1(e,t){switch(e){case"compositionend":return xv(t);case"keypress":return t.which!==32?null:(ng=!0,eg);case"textInput":return e=t.data,e===eg&&ng?null:e;default:return null}}function e1(e,t){if(_r)return e==="compositionend"||!bp&&vv(e,t)?(e=gv(),Ic=Sp=Ra=null,_r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _v&&t.locale!=="ko"?null:t.data;default:return null}}var n1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!n1[e.type]:t==="textarea"}function yv(e,t,n,i){gr?Lr?Lr.push(i):Lr=[i]:gr=i,t=yu(t,"onChange"),0<t.length&&(n=new Xu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Fo=null,ol=null;function i1(e){ry(e,0)}function ju(e){var t=Uo(e);if(uv(t))return e}function ag(e,t){if(e==="change")return t}var Sv=!1;if(ea){var Ef;if(ea){var Tf="oninput"in document;if(!Tf){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),Tf=typeof sg.oninput=="function"}Ef=Tf}else Ef=!1;Sv=Ef&&(!document.documentMode||9<document.documentMode)}function rg(){Fo&&(Fo.detachEvent("onpropertychange",Mv),ol=Fo=null)}function Mv(e){if(e.propertyName==="value"&&ju(ol)){var t=[];yv(t,ol,e,yp(e)),mv(i1,t)}}function a1(e,t,n){e==="focusin"?(rg(),Fo=t,ol=n,Fo.attachEvent("onpropertychange",Mv)):e==="focusout"&&rg()}function s1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ju(ol)}function r1(e,t){if(e==="click")return ju(t)}function o1(e,t){if(e==="input"||e==="change")return ju(t)}function l1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var In=typeof Object.is=="function"?Object.is:l1;function ll(e,t){if(In(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Ph.call(t,a)||!In(e[a],t[a]))return!1}return!0}function og(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lg(e,t){var n=og(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=og(n)}}function bv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ev(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=au(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=au(e.document)}return t}function Ep(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function c1(e,t){var n=Ev(t);t=e.focusedElem;var i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&bv(t.ownerDocument.documentElement,t)){if(i!==null&&Ep(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=t.textContent.length,s=Math.min(i.start,a);i=i.end===void 0?s:Math.min(i.end,a),!n.extend&&s>i&&(a=i,i=s,s=a),a=lg(t,s);var r=lg(t,i);a&&r&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==r.node||n.focusOffset!==r.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(r.node,r.offset)):(e.setEnd(r.node,r.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var u1=ea&&"documentMode"in document&&11>=document.documentMode,vr=null,Bh=null,Bo=null,Hh=!1;function cg(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hh||vr==null||vr!==au(i)||(i=vr,"selectionStart"in i&&Ep(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&ll(Bo,i)||(Bo=i,i=yu(Bh,"onSelect"),0<i.length&&(t=new Xu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=vr)))}function $a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Af={},Tv={};ea&&(Tv=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Us(e){if(Af[e])return Af[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tv)return Af[e]=t[n];return e}var Av=Us("animationend"),wv=Us("animationiteration"),Cv=Us("animationstart"),f1=Us("transitionrun"),h1=Us("transitionstart"),d1=Us("transitioncancel"),Rv=Us("transitionend"),Dv=new Map,ug="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function fi(e,t){Dv.set(e,t),Ds(t,[e])}var Gn=[],yr=0,Tp=0;function qu(){for(var e=yr,t=Tp=yr=0;t<e;){var n=Gn[t];Gn[t++]=null;var i=Gn[t];Gn[t++]=null;var a=Gn[t];Gn[t++]=null;var s=Gn[t];if(Gn[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&Lv(n,a,s)}}function Yu(e,t,n,i){Gn[yr++]=e,Gn[yr++]=t,Gn[yr++]=n,Gn[yr++]=i,Tp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ap(e,t,n,i){return Yu(e,t,n,i),su(e)}function Ba(e,t){return Yu(e,null,null,t),su(e)}function Lv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;a&&t!==null&&e.tag===3&&(s=e.stateNode,a=31-Pn(n),s=s.hiddenUpdates,e=s[a],e===null?s[a]=[t]:e.push(t),t.lane=n|536870912)}function su(e){if(50<Qo)throw Qo=0,ld=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sr={},fg=new WeakMap;function qn(e,t){if(typeof e=="object"&&e!==null){var n=fg.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Xm(t)},fg.set(e,t),t)}return{value:e,source:t,stack:Xm(t)}}var Mr=[],br=0,ru=null,ou=0,Xn=[],Wn=0,_s=null,Yi=1,Zi="";function os(e,t){Mr[br++]=ou,Mr[br++]=ru,ru=e,ou=t}function Uv(e,t,n){Xn[Wn++]=Yi,Xn[Wn++]=Zi,Xn[Wn++]=_s,_s=e;var i=Yi;e=Zi;var a=32-Pn(i)-1;i&=~(1<<a),n+=1;var s=32-Pn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Yi=1<<32-Pn(t)+a|n<<a|i,Zi=s+e}else Yi=1<<s|n<<a|i,Zi=e}function wp(e){e.return!==null&&(os(e,1),Uv(e,1,0))}function Cp(e){for(;e===ru;)ru=Mr[--br],Mr[br]=null,ou=Mr[--br],Mr[br]=null;for(;e===_s;)_s=Xn[--Wn],Xn[Wn]=null,Zi=Xn[--Wn],Xn[Wn]=null,Yi=Xn[--Wn],Xn[Wn]=null}var dn=null,Je=null,Jt=!1,ri=null,vi=!1,Vh=Error(K(519));function Ms(e){var t=Error(K(418,""));throw cl(qn(t,e)),Vh}function hg(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rn]=e,t[bn]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<hl.length;n++)Yt(hl[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),fv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),iu(t);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),dv(t,i.value,i.defaultValue,i.children),iu(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||ly(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=ef),t=!0):t=!1,t||Ms(e)}function dg(e){for(dn=e.return;dn;)switch(dn.tag){case 3:case 27:vi=!0;return;case 5:case 13:vi=!1;return;default:dn=dn.return}}function go(e){if(e!==dn)return!1;if(!Jt)return dg(e),Jt=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||md(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&Je&&Ms(e),dg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Je=ci(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Je=null}}else Je=dn?ci(e.stateNode.nextSibling):null;return!0}function Al(){Je=dn=null,Jt=!1}function cl(e){ri===null?ri=[e]:ri.push(e)}var Ho=Error(K(460)),Pv=Error(K(474)),Gh={then:function(){}};function pg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kl(){}function Nv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(kl,kl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ho?Error(K(483)):e;default:if(typeof t.status=="string")t.then(kl,kl);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Ho?Error(K(483)):e}throw Vo=t,Ho}}var Vo=null;function mg(){if(Vo===null)throw Error(K(459));var e=Vo;return Vo=null,e}var Ur=null,ul=0;function Xl(e){var t=ul;return ul+=1,Ur===null&&(Ur=[]),Nv(Ur,e,t)}function _o(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wl(e,t){throw t.$$typeof===tM?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function gg(e){var t=e._init;return t(e._payload)}function Ov(e){function t(u,_){if(e){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!e)return null;for(;_!==null;)t(u,_),_=_.sibling;return null}function i(u){for(var _=new Map;u!==null;)u.key!==null?_.set(u.key,u):_.set(u.index,u),u=u.sibling;return _}function a(u,_){return u=Pa(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,e?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=33554434,_):g):(u.flags|=33554434,_)):(u.flags|=1048576,_)}function r(u){return e&&u.alternate===null&&(u.flags|=33554434),u}function o(u,_,g,y){return _===null||_.tag!==6?(_=Ff(g,u.mode,y),_.return=u,_):(_=a(_,g),_.return=u,_)}function l(u,_,g,y){var w=g.type;return w===pr?f(u,_,g.props.children,y,g.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===xa&&gg(w)===_.type)?(_=a(_,g.props),_o(_,g),_.return=u,_):(_=kc(g.type,g.key,g.props,null,u.mode,y),_o(_,g),_.return=u,_)}function c(u,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Bf(g,u.mode,y),_.return=u,_):(_=a(_,g.children||[]),_.return=u,_)}function f(u,_,g,y,w){return _===null||_.tag!==7?(_=xs(g,u.mode,y,w),_.return=u,_):(_=a(_,g),_.return=u,_)}function h(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Ff(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fl:return g=kc(_.type,_.key,_.props,null,u.mode,g),_o(g,_),g.return=u,g;case Ro:return _=Bf(_,u.mode,g),_.return=u,_;case xa:var y=_._init;return _=y(_._payload),h(u,_,g)}if(Lo(_)||ho(_))return _=xs(_,u.mode,g,null),_.return=u,_;if(typeof _.then=="function")return h(u,Xl(_),g);if(_.$$typeof===qi)return h(u,jl(u,_),g);Wl(u,_)}return null}function d(u,_,g,y){var w=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return w!==null?null:o(u,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fl:return g.key===w?l(u,_,g,y):null;case Ro:return g.key===w?c(u,_,g,y):null;case xa:return w=g._init,g=w(g._payload),d(u,_,g,y)}if(Lo(g)||ho(g))return w!==null?null:f(u,_,g,y,null);if(typeof g.then=="function")return d(u,_,Xl(g),y);if(g.$$typeof===qi)return d(u,_,jl(u,g),y);Wl(u,g)}return null}function p(u,_,g,y,w){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(g)||null,o(_,u,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fl:return u=u.get(y.key===null?g:y.key)||null,l(_,u,y,w);case Ro:return u=u.get(y.key===null?g:y.key)||null,c(_,u,y,w);case xa:var A=y._init;return y=A(y._payload),p(u,_,g,y,w)}if(Lo(y)||ho(y))return u=u.get(g)||null,f(_,u,y,w,null);if(typeof y.then=="function")return p(u,_,g,Xl(y),w);if(y.$$typeof===qi)return p(u,_,g,jl(_,y),w);Wl(_,y)}return null}function v(u,_,g,y){for(var w=null,A=null,T=_,L=_=0,E=null;T!==null&&L<g.length;L++){T.index>L?(E=T,T=null):E=T.sibling;var S=d(u,T,g[L],y);if(S===null){T===null&&(T=E);break}e&&T&&S.alternate===null&&t(u,T),_=s(S,_,L),A===null?w=S:A.sibling=S,A=S,T=E}if(L===g.length)return n(u,T),Jt&&os(u,L),w;if(T===null){for(;L<g.length;L++)T=h(u,g[L],y),T!==null&&(_=s(T,_,L),A===null?w=T:A.sibling=T,A=T);return Jt&&os(u,L),w}for(T=i(T);L<g.length;L++)E=p(T,u,L,g[L],y),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?L:E.key),_=s(E,_,L),A===null?w=E:A.sibling=E,A=E);return e&&T.forEach(function(R){return t(u,R)}),Jt&&os(u,L),w}function x(u,_,g,y){if(g==null)throw Error(K(151));for(var w=null,A=null,T=_,L=_=0,E=null,S=g.next();T!==null&&!S.done;L++,S=g.next()){T.index>L?(E=T,T=null):E=T.sibling;var R=d(u,T,S.value,y);if(R===null){T===null&&(T=E);break}e&&T&&R.alternate===null&&t(u,T),_=s(R,_,L),A===null?w=R:A.sibling=R,A=R,T=E}if(S.done)return n(u,T),Jt&&os(u,L),w;if(T===null){for(;!S.done;L++,S=g.next())S=h(u,S.value,y),S!==null&&(_=s(S,_,L),A===null?w=S:A.sibling=S,A=S);return Jt&&os(u,L),w}for(T=i(T);!S.done;L++,S=g.next())S=p(T,u,L,S.value,y),S!==null&&(e&&S.alternate!==null&&T.delete(S.key===null?L:S.key),_=s(S,_,L),A===null?w=S:A.sibling=S,A=S);return e&&T.forEach(function(X){return t(u,X)}),Jt&&os(u,L),w}function m(u,_,g,y){if(typeof g=="object"&&g!==null&&g.type===pr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fl:t:{for(var w=g.key;_!==null;){if(_.key===w){if(w=g.type,w===pr){if(_.tag===7){n(u,_.sibling),y=a(_,g.props.children),y.return=u,u=y;break t}}else if(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===xa&&gg(w)===_.type){n(u,_.sibling),y=a(_,g.props),_o(y,g),y.return=u,u=y;break t}n(u,_);break}else t(u,_);_=_.sibling}g.type===pr?(y=xs(g.props.children,u.mode,y,g.key),y.return=u,u=y):(y=kc(g.type,g.key,g.props,null,u.mode,y),_o(y,g),y.return=u,u=y)}return r(u);case Ro:t:{for(w=g.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),y=a(_,g.children||[]),y.return=u,u=y;break t}else{n(u,_);break}else t(u,_);_=_.sibling}y=Bf(g,u.mode,y),y.return=u,u=y}return r(u);case xa:return w=g._init,g=w(g._payload),m(u,_,g,y)}if(Lo(g))return v(u,_,g,y);if(ho(g)){if(w=ho(g),typeof w!="function")throw Error(K(150));return g=w.call(g),x(u,_,g,y)}if(typeof g.then=="function")return m(u,_,Xl(g),y);if(g.$$typeof===qi)return m(u,_,jl(u,g),y);Wl(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),y=a(_,g),y.return=u,u=y):(n(u,_),y=Ff(g,u.mode,y),y.return=u,u=y),r(u)):n(u,_)}return function(u,_,g,y){try{ul=0;var w=m(u,_,g,y);return Ur=null,w}catch(T){if(T===Ho)throw T;var A=Yn(29,T,null,u.mode);return A.lanes=y,A.return=u,A}finally{}}}var bs=Ov(!0),zv=Ov(!1),Xr=Di(null),lu=Di(0);function _g(e,t){e=aa,ye(lu,e),ye(Xr,t),aa=e|t.baseLanes}function kh(){ye(lu,aa),ye(Xr,Xr.current)}function Rp(){aa=lu.current,Ye(Xr),Ye(lu)}var Qn=Di(null),Ti=null;function Ma(e){var t=e.alternate;ye(Fe,Fe.current&1),ye(Qn,e),Ti===null&&(t===null||Xr.current!==null||t.memoizedState!==null)&&(Ti=e)}function Iv(e){if(e.tag===22){if(ye(Fe,Fe.current),ye(Qn,e),Ti===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ti=e)}}else ba()}function ba(){ye(Fe,Fe.current),ye(Qn,Qn.current)}function Ki(e){Ye(Qn),Ti===e&&(Ti=null),Ye(Fe)}var Fe=Di(0);function cu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var p1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},m1=Ve.unstable_scheduleCallback,g1=Ve.unstable_NormalPriority,Ie={$$typeof:qi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dp(){return{controller:new p1,data:new Map,refCount:0}}function wl(e){e.refCount--,e.refCount===0&&m1(g1,function(){e.controller.abort()})}var Go=null,Xh=0,Wr=0,Pr=null;function _1(e,t){if(Go===null){var n=Go=[];Xh=0,Wr=Jp(),Pr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Xh++,t.then(vg,vg),t}function vg(){if(--Xh===0&&Go!==null){Pr!==null&&(Pr.status="fulfilled");var e=Go;Go=null,Wr=0,Pr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function v1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var xg=Bt.S;Bt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&_1(e,t),xg!==null&&xg(e,t)};var vs=Di(null);function Lp(){var e=vs.current;return e!==null?e:pe.pooledCache}function Bc(e,t){t===null?ye(vs,vs.current):ye(vs,t.pool)}function Fv(){var e=Lp();return e===null?null:{parent:Ie._currentValue,pool:e}}var Ha=0,Wt=null,le=null,Ne=null,uu=!1,Nr=!1,Es=!1,fu=0,fl=0,Or=null,x1=0;function Re(){throw Error(K(321))}function Up(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!In(e[n],t[n]))return!1;return!0}function Pp(e,t,n,i,a,s){return Ha=s,Wt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bt.H=e===null||e.memoizedState===null?Ps:ja,Es=!1,s=n(i,a),Es=!1,Nr&&(s=Hv(t,n,i,a)),Bv(e),s}function Bv(e){Bt.H=wi;var t=le!==null&&le.next!==null;if(Ha=0,Ne=le=Wt=null,uu=!1,fl=0,Or=null,t)throw Error(K(300));e===null||qe||(e=e.dependencies,e!==null&&pu(e)&&(qe=!0))}function Hv(e,t,n,i){Wt=e;var a=0;do{if(Nr&&(Or=null),fl=0,Nr=!1,25<=a)throw Error(K(301));if(a+=1,Ne=le=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Bt.H=Ns,s=t(n,i)}while(Nr);return s}function y1(){var e=Bt.H,t=e.useState()[0];return t=typeof t.then=="function"?Cl(t):t,e=e.useState()[0],(le!==null?le.memoizedState:null)!==e&&(Wt.flags|=1024),t}function Np(){var e=fu!==0;return fu=0,e}function Op(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zp(e){if(uu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uu=!1}Ha=0,Ne=le=Wt=null,Nr=!1,fl=fu=0,Or=null}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?Wt.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Oe(){if(le===null){var e=Wt.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=Ne===null?Wt.memoizedState:Ne.next;if(t!==null)Ne=t,le=e;else{if(e===null)throw Wt.alternate===null?Error(K(467)):Error(K(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},Ne===null?Wt.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}var Zu;Zu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Cl(e){var t=fl;return fl+=1,Or===null&&(Or=[]),e=Nv(Or,e,t),t=Wt,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,Bt.H=t===null||t.memoizedState===null?Ps:ja),e}function Ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cl(e);if(e.$$typeof===qi)return on(e)}throw Error(K(438,String(e)))}function Ip(e){var t=null,n=Wt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Wt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zu(),Wt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=nM;return t.index++,n}function na(e,t){return typeof t=="function"?t(e):t}function Hc(e){var t=Oe();return Fp(t,le,e)}function Fp(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,f=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Zt&h)===h:(Ha&h)===h){var d=c.revertLane;if(d===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Wr&&(f=!0);else if((Ha&d)===d){c=c.next,d===Wr&&(f=!0);continue}else h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Wt.lanes|=d,Ga|=d;h=c.action,Es&&n(s,h),s=c.hasEagerState?c.eagerState:n(s,h)}else d={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Wt.lanes|=h,Ga|=h;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!In(s,e.memoizedState)&&(qe=!0,f&&(n=Pr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function wf(e){var t=Oe(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);In(s,t.memoizedState)||(qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Vv(e,t,n){var i=Wt,a=Oe(),s=Jt;if(s){if(n===void 0)throw Error(K(407));n=n()}else n=t();var r=!In((le||a).memoizedState,n);if(r&&(a.memoizedState=n,qe=!0),a=a.queue,Bp(Xv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ne!==null&&Ne.memoizedState.tag&1){if(i.flags|=2048,jr(9,kv.bind(null,i,a,n,t),{destroy:void 0},null),pe===null)throw Error(K(349));s||Ha&60||Gv(i,t,n)}return n}function Gv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Wt.updateQueue,t===null?(t=Zu(),Wt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kv(e,t,n,i){t.value=n,t.getSnapshot=i,Wv(t)&&jv(e)}function Xv(e,t,n){return n(function(){Wv(t)&&jv(e)})}function Wv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!In(e,n)}catch{return!0}}function jv(e){var t=Ba(e,2);t!==null&&mn(t,e,2)}function Wh(e){var t=xn();if(typeof e=="function"){var n=e;if(e=n(),Es){Ca(!0);try{n()}finally{Ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t}function qv(e,t,n,i){return e.baseState=n,Fp(e,le,typeof i=="function"?i:na)}function S1(e,t,n,i,a){if($u(e))throw Error(K(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Bt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Yv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Yv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Bt.T,r={};Bt.T=r;try{var o=n(a,i),l=Bt.S;l!==null&&l(r,o),yg(e,t,o)}catch(c){jh(e,t,c)}finally{Bt.T=s}}else try{s=n(a,i),yg(e,t,s)}catch(c){jh(e,t,c)}}function yg(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Sg(e,t,i)},function(i){return jh(e,t,i)}):Sg(e,t,n)}function Sg(e,t,n){t.status="fulfilled",t.value=n,Zv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yv(e,n)))}function jh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Zv(t),t=t.next;while(t!==i)}e.action=null}function Zv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kv(e,t){return t}function Qv(e,t){if(Jt){var n=pe.formState;if(n!==null){t:{var i=Wt;if(Jt){if(Je){e:{for(var a=Je,s=vi;a.nodeType!==8;){if(!s){a=null;break e}if(a=ci(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Je=ci(a.nextSibling),i=a.data==="F!";break t}}Ms(i)}i=!1}i&&(t=n[0])}}return n=xn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kv,lastRenderedState:t},n.queue=i,n=px.bind(null,Wt,i),i.dispatch=n,i=Wh(!1),s=kp.bind(null,Wt,!1,i.queue),i=xn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=S1.bind(null,Wt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function $v(e){var t=Oe();return Jv(t,le,e)}function Jv(e,t,n){t=Fp(e,t,Kv)[0],e=Hc(na)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?Cl(t):t;var i=Oe(),a=i.queue,s=a.dispatch;return n!==i.memoizedState&&(Wt.flags|=2048,jr(9,M1.bind(null,a,n),{destroy:void 0},null)),[t,s,e]}function M1(e,t){e.action=t}function tx(e){var t=Oe(),n=le;if(n!==null)return Jv(t,n,e);Oe(),t=t.memoizedState,n=Oe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function jr(e,t,n,i){return e={tag:e,create:t,inst:n,deps:i,next:null},t=Wt.updateQueue,t===null&&(t=Zu(),Wt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function ex(){return Oe().memoizedState}function Vc(e,t,n,i){var a=xn();Wt.flags|=e,a.memoizedState=jr(1|t,n,{destroy:void 0},i===void 0?null:i)}function Qu(e,t,n,i){var a=Oe();i=i===void 0?null:i;var s=a.memoizedState.inst;le!==null&&i!==null&&Up(i,le.memoizedState.deps)?a.memoizedState=jr(t,n,s,i):(Wt.flags|=e,a.memoizedState=jr(1|t,n,s,i))}function Mg(e,t){Vc(8390656,8,e,t)}function Bp(e,t){Qu(2048,8,e,t)}function nx(e,t){return Qu(4,2,e,t)}function ix(e,t){return Qu(4,4,e,t)}function ax(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sx(e,t,n){n=n!=null?n.concat([e]):null,Qu(4,4,ax.bind(null,t,e),n)}function Hp(){}function rx(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Up(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function ox(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Up(t,i[1]))return i[0];if(i=e(),Es){Ca(!0);try{e()}finally{Ca(!1)}}return n.memoizedState=[i,t],i}function Vp(e,t,n){return n===void 0||Ha&1073741824?e.memoizedState=t:(e.memoizedState=n,e=Zx(),Wt.lanes|=e,Ga|=e,n)}function lx(e,t,n,i){return In(n,t)?n:Xr.current!==null?(e=Vp(e,n,i),In(e,t)||(qe=!0),e):Ha&42?(e=Zx(),Wt.lanes|=e,Ga|=e,t):(qe=!0,e.memoizedState=n)}function cx(e,t,n,i,a){var s=ge.p;ge.p=s!==0&&8>s?s:8;var r=Bt.T,o={};Bt.T=o,kp(e,!1,t,n);try{var l=a(),c=Bt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=v1(l,i);ko(e,t,f,Nn(e))}else ko(e,t,i,Nn(e))}catch(h){ko(e,t,{then:function(){},status:"rejected",reason:h},Nn())}finally{ge.p=s,Bt.T=r}}function b1(){}function qh(e,t,n,i){if(e.tag!==5)throw Error(K(476));var a=ux(e).queue;cx(e,a,t,gs,n===null?b1:function(){return fx(e),n(i)})}function ux(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:gs,baseState:gs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:gs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fx(e){var t=ux(e).next.queue;ko(e,t,{},Nn())}function Gp(){return on(ml)}function hx(){return Oe().memoizedState}function dx(){return Oe().memoizedState}function E1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nn();e=La(n);var i=Ua(t,e,n);i!==null&&(mn(i,t,n),Wo(i,t,n)),t={cache:Dp()},e.payload=t;return}t=t.return}}function T1(e,t,n){var i=Nn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},$u(e)?mx(t,n):(n=Ap(e,t,n,i),n!==null&&(mn(n,e,i),gx(n,t,i)))}function px(e,t,n){var i=Nn();ko(e,t,n,i)}function ko(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if($u(e))mx(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,In(o,r))return Yu(e,t,a,0),pe===null&&qu(),!1}catch{}finally{}if(n=Ap(e,t,a,i),n!==null)return mn(n,e,i),gx(n,t,i),!0}return!1}function kp(e,t,n,i){if(i={lane:2,revertLane:Jp(),action:i,hasEagerState:!1,eagerState:null,next:null},$u(e)){if(t)throw Error(K(479))}else t=Ap(e,n,i,2),t!==null&&mn(t,e,2)}function $u(e){var t=e.alternate;return e===Wt||t!==null&&t===Wt}function mx(e,t){Nr=uu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gx(e,t,n){if(n&4194176){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,av(e,n)}}var wi={readContext:on,use:Ku,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re};wi.useCacheRefresh=Re;wi.useMemoCache=Re;wi.useHostTransitionStatus=Re;wi.useFormState=Re;wi.useActionState=Re;wi.useOptimistic=Re;var Ps={readContext:on,use:Ku,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:Mg,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Vc(4194308,4,ax.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vc(4194308,4,e,t)},useInsertionEffect:function(e,t){Vc(4,2,e,t)},useMemo:function(e,t){var n=xn();t=t===void 0?null:t;var i=e();if(Es){Ca(!0);try{e()}finally{Ca(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=xn();if(n!==void 0){var a=n(t);if(Es){Ca(!0);try{n(t)}finally{Ca(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=T1.bind(null,Wt,e),[i.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:function(e){e=Wh(e);var t=e.queue,n=px.bind(null,Wt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hp,useDeferredValue:function(e,t){var n=xn();return Vp(n,e,t)},useTransition:function(){var e=Wh(!1);return e=cx.bind(null,Wt,e.queue,!0,!1),xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Wt,a=xn();if(Jt){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),pe===null)throw Error(K(349));Zt&60||Gv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Mg(Xv.bind(null,i,s,e),[e]),i.flags|=2048,jr(9,kv.bind(null,i,s,n,t),{destroy:void 0},null),n},useId:function(){var e=xn(),t=pe.identifierPrefix;if(Jt){var n=Zi,i=Yi;n=(i&~(1<<32-Pn(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=fu++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=x1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return xn().memoizedState=E1.bind(null,Wt)}};Ps.useMemoCache=Ip;Ps.useHostTransitionStatus=Gp;Ps.useFormState=Qv;Ps.useActionState=Qv;Ps.useOptimistic=function(e){var t=xn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=kp.bind(null,Wt,!0,n),n.dispatch=t,[e,t]};var ja={readContext:on,use:Ku,useCallback:rx,useContext:on,useEffect:Bp,useImperativeHandle:sx,useInsertionEffect:nx,useLayoutEffect:ix,useMemo:ox,useReducer:Hc,useRef:ex,useState:function(){return Hc(na)},useDebugValue:Hp,useDeferredValue:function(e,t){var n=Oe();return lx(n,le.memoizedState,e,t)},useTransition:function(){var e=Hc(na)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:Vv,useId:hx};ja.useCacheRefresh=dx;ja.useMemoCache=Ip;ja.useHostTransitionStatus=Gp;ja.useFormState=$v;ja.useActionState=$v;ja.useOptimistic=function(e,t){var n=Oe();return qv(n,le,e,t)};var Ns={readContext:on,use:Ku,useCallback:rx,useContext:on,useEffect:Bp,useImperativeHandle:sx,useInsertionEffect:nx,useLayoutEffect:ix,useMemo:ox,useReducer:wf,useRef:ex,useState:function(){return wf(na)},useDebugValue:Hp,useDeferredValue:function(e,t){var n=Oe();return le===null?Vp(n,e,t):lx(n,le.memoizedState,e,t)},useTransition:function(){var e=wf(na)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:Vv,useId:hx};Ns.useCacheRefresh=dx;Ns.useMemoCache=Ip;Ns.useHostTransitionStatus=Gp;Ns.useFormState=tx;Ns.useActionState=tx;Ns.useOptimistic=function(e,t){var n=Oe();return le!==null?qv(n,le,e,t):(n.baseState=e,[e,n.queue.dispatch])};function Cf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yh={isMounted:function(e){return(e=e._reactInternals)?no(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Nn(),a=La(i);a.payload=t,n!=null&&(a.callback=n),t=Ua(e,a,i),t!==null&&(mn(t,e,i),Wo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Nn(),a=La(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ua(e,a,i),t!==null&&(mn(t,e,i),Wo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nn(),i=La(n);i.tag=2,t!=null&&(i.callback=t),t=Ua(e,i,n),t!==null&&(mn(t,e,n),Wo(t,e,n))}};function bg(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!ll(n,i)||!ll(a,s):!0}function Eg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Yh.enqueueReplaceState(t,t.state,null)}function Ts(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=_e({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var hu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function _x(e){hu(e)}function vx(e){console.error(e)}function xx(e){hu(e)}function du(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Tg(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Zh(e,t,n){return n=La(n),n.tag=3,n.payload={element:null},n.callback=function(){du(e,t)},n}function yx(e){return e=La(e),e.tag=3,e}function Sx(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Tg(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Tg(t,n,i),typeof a!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function A1(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Rl(t,n,a,!0),n=Qn.current,n!==null){switch(n.tag){case 13:return Ti===null?ud():n.alternate===null&&we===0&&(we=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Gh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Vf(e,i,a)),!1;case 22:return n.flags|=65536,i===Gh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Vf(e,i,a)),!1}throw Error(K(435,n.tag))}return Vf(e,i,a),ud(),!1}if(Jt)return t=Qn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Vh&&(e=Error(K(422),{cause:i}),cl(qn(e,n)))):(i!==Vh&&(t=Error(K(423),{cause:i}),cl(qn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=qn(i,n),a=Zh(e.stateNode,i,a),Nf(e,a),we!==4&&(we=2)),!1;var s=Error(K(520),{cause:i});if(s=qn(s,n),Zo===null?Zo=[s]:Zo.push(s),we!==4&&(we=2),t===null)return!0;i=qn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zh(n.stateNode,i,e),Nf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Na===null||!Na.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=yx(a),Sx(a,e,n,i),Nf(n,a),!1}n=n.return}while(n!==null);return!1}var Mx=Error(K(461)),qe=!1;function $e(e,t,n,i){t.child=e===null?zv(t,null,n,i):bs(t,e.child,n,i)}function Ag(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return As(t),i=Pp(e,t,n,r,s,a),o=Np(),e!==null&&!qe?(Op(e,t,a),ia(e,t,a)):(Jt&&o&&wp(t),t.flags|=1,$e(e,t,i,a),t.child)}function wg(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Yp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,bx(e,t,s,i,a)):(e=kc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Xp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(r,i)&&e.ref===t.ref)return ia(e,t,a)}return t.flags|=1,e=Pa(s,i),e.ref=t.ref,e.return=t,t.child=e}function bx(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(ll(s,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=s,Xp(e,a))e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,ia(e,t,a)}return Kh(e,t,n,i,a)}function Ex(e,t,n){var i=t.pendingProps,a=i.children,s=(t.stateNode._pendingVisibility&2)!==0,r=e!==null?e.memoizedState:null;if(Xo(e,t),i.mode==="hidden"||s){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;t.childLanes=s&~i}else t.childLanes=0,t.child=null;return Cg(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bc(t,r!==null?r.cachePool:null),r!==null?_g(t,r):kh(),Iv(t);else return t.lanes=t.childLanes=536870912,Cg(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Bc(t,r.cachePool),_g(t,r),ba(),t.memoizedState=null):(e!==null&&Bc(t,null),kh(),ba());return $e(e,t,a,n),t.child}function Cg(e,t,n,i){var a=Lp();return a=a===null?null:{parent:Ie._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Bc(t,null),kh(),Iv(t),e!==null&&Rl(e,t,i,!0),null}function Xo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Kh(e,t,n,i,a){return As(t),n=Pp(e,t,n,i,void 0,a),i=Np(),e!==null&&!qe?(Op(e,t,a),ia(e,t,a)):(Jt&&i&&wp(t),t.flags|=1,$e(e,t,n,a),t.child)}function Rg(e,t,n,i,a,s){return As(t),t.updateQueue=null,n=Hv(t,i,n,a),Bv(e),i=Np(),e!==null&&!qe?(Op(e,t,s),ia(e,t,s)):(Jt&&i&&wp(t),t.flags|=1,$e(e,t,n,s),t.child)}function Dg(e,t,n,i,a){if(As(t),t.stateNode===null){var s=Sr,r=n.contextType;typeof r=="object"&&r!==null&&(s=on(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Yh,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Wp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?on(r):Sr,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Cf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Yh.enqueueReplaceState(s,s.state,null),qo(t,i,s,a),jo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Ts(n,o);s.props=l;var c=s.context,f=n.contextType;r=Sr,typeof f=="object"&&f!==null&&(r=on(f));var h=n.getDerivedStateFromProps;f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Eg(t,s,i,r),ya=!1;var d=t.memoizedState;s.state=d,qo(t,i,s,a),jo(),c=t.memoizedState,o||d!==c||ya?(typeof h=="function"&&(Cf(t,n,h,i),c=t.memoizedState),(l=ya||bg(t,n,l,i,d,c,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,nd(e,t),r=t.memoizedProps,f=Ts(n,r),s.props=f,h=t.pendingProps,d=s.context,c=n.contextType,l=Sr,typeof c=="object"&&c!==null&&(l=on(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==h||d!==l)&&Eg(t,s,i,l),ya=!1,d=t.memoizedState,s.state=d,qo(t,i,s,a),jo();var p=t.memoizedState;r!==h||d!==p||ya||e!==null&&e.dependencies!==null&&pu(e.dependencies)?(typeof o=="function"&&(Cf(t,n,o,i),p=t.memoizedState),(f=ya||bg(t,n,f,i,d,p,l)||e!==null&&e.dependencies!==null&&pu(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=f):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Xo(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=bs(t,e.child,null,a),t.child=bs(t,null,n,a)):$e(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ia(e,t,a),e}function Lg(e,t,n,i){return Al(),t.flags|=256,$e(e,t,n,i),t.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function Df(e){return{baseLanes:e,cachePool:Fv()}}function Lf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zn),e}function Tx(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Jt){if(a?Ma(t):ba(),Jt){var o=Je,l;if(l=o){t:{for(l=o,o=vi;l.nodeType!==8;){if(!o){o=null;break t}if(l=ci(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:_s!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912},l=Yn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,dn=t,Je=null,l=!0):l=!1}l||Ms(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return o.data==="$!"?t.lanes=16:t.lanes=536870912,null;Ki(t)}return o=i.children,i=i.fallback,a?(ba(),a=t.mode,o=$h({mode:"hidden",children:o},a),i=xs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=Df(n),a.childLanes=Lf(e,r,n),t.memoizedState=Rf,i):(Ma(t),Qh(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Ma(t),t.flags&=-257,t=Uf(e,t,n)):t.memoizedState!==null?(ba(),t.child=e.child,t.flags|=128,t=null):(ba(),a=i.fallback,o=t.mode,i=$h({mode:"visible",children:i.children},o),a=xs(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,bs(t,e.child,null,n),i=t.child,i.memoizedState=Df(n),i.childLanes=Lf(e,r,n),t.memoizedState=Rf,t=a);else if(Ma(t),o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(K(419)),i.stack="",i.digest=r,cl({value:i,source:null,stack:null}),t=Uf(e,t,n)}else if(qe||Rl(e,t,n,!1),r=(n&e.childLanes)!==0,qe||r){if(r=pe,r!==null){if(i=n&-n,i&42)i=1;else switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=64;break;case 268435456:i=134217728;break;default:i=0}if(i=i&(r.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane)throw l.retryLane=i,Ba(e,i),mn(r,e,i),Mx}o.data==="$?"||ud(),t=Uf(e,t,n)}else o.data==="$?"?(t.flags|=128,t.child=e.child,t=V1.bind(null,e),o._reactRetry=t,t=null):(e=l.treeContext,Je=ci(o.nextSibling),dn=t,Jt=!0,ri=null,vi=!1,e!==null&&(Xn[Wn++]=Yi,Xn[Wn++]=Zi,Xn[Wn++]=_s,Yi=e.id,Zi=e.overflow,_s=t),t=Qh(t,i.children),t.flags|=4096);return t}return a?(ba(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Pa(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&31457280,c!==null?a=Pa(c,a):(a=xs(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=Df(n):(l=o.cachePool,l!==null?(c=Ie._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Fv(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=Lf(e,r,n),t.memoizedState=Rf,i):(Ma(t),n=e.child,e=n.sibling,n=Pa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Qh(e,t){return t=$h({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $h(e,t){return qx(e,t,0,null)}function Uf(e,t,n){return bs(t,e.child,null,n),e=Qh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ug(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),td(e.return,t,n)}function Pf(e,t,n,i,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a)}function Ax(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;if($e(e,t,i.children,n),i=Fe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ug(e,n,t);else if(e.tag===19)Ug(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(ye(Fe,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&cu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Pf(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&cu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Pf(t,!0,n,null,s);break;case"together":Pf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ga|=t.lanes,!(n&t.childLanes))if(e!==null){if(Rl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Pa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&pu(e)))}function w1(e,t,n){switch(t.tag){case 3:tu(t,t.stateNode.containerInfo),Ea(t,Ie,e.memoizedState.cache),Al();break;case 27:case 5:Uh(t);break;case 4:tu(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ma(t),t.flags|=128,null):n&t.child.childLanes?Tx(e,t,n):(Ma(t),e=ia(e,t,n),e!==null?e.sibling:null);Ma(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Rl(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Ax(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(Fe,Fe.current),i)break;return null;case 22:case 23:return t.lanes=0,Ex(e,t,n);case 24:Ea(t,Ie,e.memoizedState.cache)}return ia(e,t,n)}function wx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Xp(e,n)&&!(t.flags&128))return qe=!1,w1(e,t,n);qe=!!(e.flags&131072)}else qe=!1,Jt&&t.flags&1048576&&Uv(t,ou,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")Yp(i)?(e=Ts(i,e),t.tag=1,t=Dg(null,t,i,e,n)):(t.tag=0,t=Kh(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===mp){t.tag=11,t=Ag(null,t,i,e,n);break t}else if(a===gp){t.tag=14,t=wg(null,t,i,e,n);break t}}throw t=Dh(i)||i,Error(K(306,t,""))}}return t;case 0:return Kh(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ts(i,t.pendingProps),Dg(e,t,i,a,n);case 3:t:{if(tu(t,t.stateNode.containerInfo),e===null)throw Error(K(387));var s=t.pendingProps;a=t.memoizedState,i=a.element,nd(e,t),qo(t,s,null,n);var r=t.memoizedState;if(s=r.cache,Ea(t,Ie,s),s!==a.cache&&ed(t,[Ie],n,!0),jo(),s=r.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Lg(e,t,s,n);break t}else if(s!==i){i=qn(Error(K(424)),t),cl(i),t=Lg(e,t,s,n);break t}else for(Je=ci(t.stateNode.containerInfo.firstChild),dn=t,Jt=!0,ri=null,vi=!0,n=zv(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Al(),s===i){t=ia(e,t,n);break t}$e(e,t,s,n)}t=t.child}return t;case 26:return Xo(e,t),e===null?(n=Kg(t.type,null,t.pendingProps,null))?t.memoizedState=n:Jt||(n=t.type,e=t.pendingProps,i=Su(Da.current).createElement(n),i[rn]=t,i[bn]=e,en(i,n,e),je(i),t.stateNode=i):t.memoizedState=Kg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Uh(t),e===null&&Jt&&(i=t.stateNode=fy(t.type,t.pendingProps,Da.current),dn=t,vi=!0,Je=ci(i.firstChild)),i=t.pendingProps.children,e!==null||Jt?$e(e,t,i,n):t.child=bs(t,null,i,n),Xo(e,t),t.child;case 5:return e===null&&Jt&&((a=i=Je)&&(i=ib(i,t.type,t.pendingProps,vi),i!==null?(t.stateNode=i,dn=t,Je=ci(i.firstChild),vi=!1,a=!0):a=!1),a||Ms(t)),Uh(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,md(a,s)?i=null:r!==null&&md(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Pp(e,t,y1,null,null,n),ml._currentValue=a),Xo(e,t),$e(e,t,i,n),t.child;case 6:return e===null&&Jt&&((e=n=Je)&&(n=ab(n,t.pendingProps,vi),n!==null?(t.stateNode=n,dn=t,Je=null,e=!0):e=!1),e||Ms(t)),null;case 13:return Tx(e,t,n);case 4:return tu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=bs(t,null,i,n):$e(e,t,i,n),t.child;case 11:return Ag(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ea(t,t.type,i.value),$e(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,As(t),a=on(a),i=i(a),t.flags|=1,$e(e,t,i,n),t.child;case 14:return wg(e,t,t.type,t.pendingProps,n);case 15:return bx(e,t,t.type,t.pendingProps,n);case 19:return Ax(e,t,n);case 22:return Ex(e,t,n);case 24:return As(t),i=on(Ie),e===null?(a=Lp(),a===null&&(a=pe,s=Dp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},Wp(t),Ea(t,Ie,a)):(e.lanes&n&&(nd(e,t),qo(t,null,null,n),jo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ea(t,Ie,i)):(i=s.cache,Ea(t,Ie,i),i!==a.cache&&ed(t,[Ie],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}var Jh=Di(null),Os=null,Qi=null;function Ea(e,t,n){ye(Jh,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Jh.current,Ye(Jh)}function td(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ed(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),td(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(K(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),td(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Rl(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(K(387));if(r=r.memoizedProps,r!==null){var o=a.type;In(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Jc.current){if(r=a.alternate,r===null)throw Error(K(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ml):e=[ml])}a=a.return}e!==null&&ed(t,e,n,i),t.flags|=262144}function pu(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Os=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function on(e){return Cx(Os,e)}function jl(e,t){return Os===null&&As(e),Cx(e,t)}function Cx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(K(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var ya=!1;function Wp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,be&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=su(e),Lv(e,null,n),t}return Yu(e,i,t,n),su(e)}function Wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,av(e,n)}}function Nf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var id=!1;function jo(){if(id){var e=Pr;if(e!==null)throw e}}function qo(e,t,n,i){id=!1;var a=e.updateQueue;ya=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=a.baseState;r=0,f=c=l=null,o=s;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(Zt&d)===d:(i&d)===d){d!==0&&d===Wr&&(id=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,x=o;d=t;var m=n;switch(x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(m,h,d);break t}h=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break t;h=_e({},h,d);break t;case 2:ya=!0}}d=o.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,r|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);f===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=f,s===null&&(a.shared.lanes=0),Ga|=r,e.lanes=r,e.memoizedState=h}}function Rx(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function Dx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rx(n[e],t)}function Dl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ue(t,t.return,o)}}function Va(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n;try{o()}catch(c){ue(a,l,c)}}}i=i.next}while(i!==s)}}catch(c){ue(t,t.return,c)}}function Lx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Dx(t,n)}catch(i){ue(e,e.return,i)}}}function Ux(e,t,n){n.props=Ts(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function hs(e,t){try{var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 26:case 27:case 5:var a=i;break;default:a=i}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(s){ue(e,t,s)}}function Ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ue(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ue(e,t,a)}else n.current=null}function Px(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ue(e,e.return,a)}}function Pg(e,t,n){try{var i=e.stateNode;$1(i,e.type,n,t),i[bn]=t}catch(a){ue(e,e.return,a)}}function Nx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Nx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ef));else if(i!==4&&i!==27&&(e=e.child,e!==null))for(ad(e,t,n),e=e.sibling;e!==null;)ad(e,t,n),e=e.sibling}function mu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&i!==27&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}var ki=!1,Ae=!1,zf=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,We=null,Og=!1;function C1(e,t){if(e=e.containerInfo,dd=Tu,e=Ev(e),Ep(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,h=e,d=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==s||i!==0&&h.nodeType!==3||(l=r+i),h.nodeType===3&&(r+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===e)break e;if(d===n&&++c===a&&(o=r),d===s&&++f===i&&(l=r),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pd={focusedElem:e,selectionRange:n},Tu=!1,We=t;We!==null;)if(t=We,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,We=e;else for(;We!==null;){switch(t=We,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=Ts(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){ue(n,n.return,x)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)gd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(K(163))}if(e=t.sibling,e!==null){e.return=t.return,We=e;break}We=t.return}return v=Og,Og=!1,v}function Ox(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n),i&4&&Dl(5,n);break;case 1:if(Oi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ue(n,n.return,o)}else{var a=Ts(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ue(n,n.return,o)}}i&64&&Lx(n),i&512&&hs(n,n.return);break;case 3:if(Oi(e,n),i&64&&(i=n.updateQueue,i!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Dx(i,e)}catch(o){ue(n,n.return,o)}}break;case 26:Oi(e,n),i&512&&hs(n,n.return);break;case 27:case 5:Oi(e,n),t===null&&i&4&&Px(n),i&512&&hs(n,n.return);break;case 12:Oi(e,n);break;case 13:Oi(e,n),i&4&&Fx(e,n);break;case 22:if(a=n.memoizedState!==null||ki,!a){t=t!==null&&t.memoizedState!==null||Ae;var s=ki,r=Ae;ki=a,(Ae=t)&&!r?va(e,n,(n.subtreeFlags&8772)!==0):Oi(e,n),ki=s,Ae=r}i&512&&(n.memoizedProps.mode==="manual"?hs(n,n.return):Ln(n,n.return));break;default:Oi(e,n)}}function zx(e){var t=e.alternate;t!==null&&(e.alternate=null,zx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&vp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Rn=!1;function Ni(e,t,n){for(n=n.child;n!==null;)Ix(e,t,n),n=n.sibling}function Ix(e,t,n){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 26:Ae||Ln(n,t),Ni(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ae||Ln(n,t);var i=Pe,a=Rn;for(Pe=n.stateNode,Ni(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);vp(n),Pe=i,Rn=a;break;case 5:Ae||Ln(n,t);case 6:a=Pe;var s=Rn;if(Pe=null,Ni(e,t,n),Pe=a,Rn=s,Pe!==null)if(Rn)try{e=Pe,i=n.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)}catch(r){ue(n,t,r)}else try{Pe.removeChild(n.stateNode)}catch(r){ue(n,t,r)}break;case 18:Pe!==null&&(Rn?(t=Pe,n=n.stateNode,t.nodeType===8?Yf(t.parentNode,n):t.nodeType===1&&Yf(t,n),vl(t)):Yf(Pe,n.stateNode));break;case 4:i=Pe,a=Rn,Pe=n.stateNode.containerInfo,Rn=!0,Ni(e,t,n),Pe=i,Rn=a;break;case 0:case 11:case 14:case 15:Ae||Va(2,n,t),Ae||Va(4,n,t),Ni(e,t,n);break;case 1:Ae||(Ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ux(n,t,i)),Ni(e,t,n);break;case 21:Ni(e,t,n);break;case 22:Ae||Ln(n,t),Ae=(i=Ae)||n.memoizedState!==null,Ni(e,t,n),Ae=i;break;default:Ni(e,t,n)}}function Fx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vl(e)}catch(n){ue(t,t.return,n)}}function R1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ng),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ng),t;default:throw Error(K(435,e.tag))}}function If(e,t){var n=R1(e);t.forEach(function(i){var a=G1.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function Bn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:case 5:Pe=o.stateNode,Rn=!1;break t;case 3:Pe=o.stateNode.containerInfo,Rn=!0;break t;case 4:Pe=o.stateNode.containerInfo,Rn=!0;break t}o=o.return}if(Pe===null)throw Error(K(160));Ix(s,r,a),Pe=null,Rn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Bx(t,e),t=t.sibling}var ai=null;function Bx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(t,e),Hn(e),i&4&&(Va(3,e,e.return),Dl(3,e),Va(5,e,e.return));break;case 1:Bn(t,e),Hn(e),i&512&&(Ae||n===null||Ln(n,n.return)),i&64&&ki&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ai;if(Bn(t,e),Hn(e),i&512&&(Ae||n===null||Ln(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[sl]||s[rn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),en(s,i,n),s[rn]=e,je(s),i=s;break t;case"link":var r=$g("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),en(s,i,n),a.head.appendChild(s);break;case"meta":if(r=$g("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),en(s,i,n),a.head.appendChild(s);break;default:throw Error(K(468,i))}s[rn]=e,je(s),i=s}e.stateNode=i}else Jg(a,e.type,e.stateNode);else e.stateNode=Qg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Jg(a,e.type,e.stateNode):Qg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Pg(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(i&4&&e.alternate===null){a=e.stateNode,s=e.memoizedProps;try{for(var l=a.firstChild;l;){var c=l.nextSibling,f=l.nodeName;l[sl]||f==="HEAD"||f==="BODY"||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=c}for(var h=e.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);en(a,h,s),a[rn]=e,a[bn]=s}catch(v){ue(e,e.return,v)}}case 5:if(Bn(t,e),Hn(e),i&512&&(Ae||n===null||Ln(n,n.return)),e.flags&32){a=e.stateNode;try{kr(a,"")}catch(v){ue(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Pg(e,a,n!==null?n.memoizedProps:a)),i&1024&&(zf=!0);break;case 6:if(Bn(t,e),Hn(e),i&4){if(e.stateNode===null)throw Error(K(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){ue(e,e.return,v)}}break;case 3:if(Wc=null,a=ai,ai=Mu(t.containerInfo),Bn(t,e),ai=a,Hn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vl(t.containerInfo)}catch(v){ue(e,e.return,v)}zf&&(zf=!1,Hx(e));break;case 4:i=ai,ai=Mu(e.stateNode.containerInfo),Bn(t,e),Hn(e),ai=i;break;case 12:Bn(t,e),Hn(e);break;case 13:Bn(t,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Qp=Ei()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,If(e,i)));break;case 22:if(i&512&&(Ae||n===null||Ln(n,n.return)),l=e.memoizedState!==null,c=n!==null&&n.memoizedState!==null,f=ki,h=Ae,ki=f||l,Ae=h||c,Bn(t,e),Ae=h,ki=f,Hn(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,i&8192&&(t._visibility=l?t._visibility&-2:t._visibility|1,l&&(t=ki||Ae,n===null||c||t||lr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){c=n=t;try{if(a=c.stateNode,l)s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{r=c.stateNode,o=c.memoizedProps.style;var p=o!=null&&o.hasOwnProperty("display")?o.display:null;r.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(v){ue(c,c.return,v)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(v){ue(c,c.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,If(e,n))));break;case 19:Bn(t,e),Hn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,If(e,i)));break;case 21:break;default:Bn(t,e),Hn(e)}}function Hn(e){var t=e.flags;if(t&2){try{if(e.tag!==27){t:{for(var n=e.return;n!==null;){if(Nx(n)){var i=n;break t}n=n.return}throw Error(K(160))}switch(i.tag){case 27:var a=i.stateNode,s=Of(e);mu(e,s,a);break;case 5:var r=i.stateNode;i.flags&32&&(kr(r,""),i.flags&=-33);var o=Of(e);mu(e,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,c=Of(e);ad(e,c,l);break;default:throw Error(K(161))}}}catch(f){ue(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Oi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ox(e,t.alternate,t),t=t.sibling}function lr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Va(4,t,t.return),lr(t);break;case 1:Ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ux(t,t.return,n),lr(t);break;case 26:case 27:case 5:Ln(t,t.return),lr(t);break;case 22:Ln(t,t.return),t.memoizedState===null&&lr(t);break;default:lr(t)}e=e.sibling}}function va(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:va(a,s,n),Dl(4,s);break;case 1:if(va(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ue(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Rx(l[a],o)}catch(c){ue(i,i.return,c)}}n&&r&64&&Lx(s),hs(s,s.return);break;case 26:case 27:case 5:va(a,s,n),n&&i===null&&r&4&&Px(s),hs(s,s.return);break;case 12:va(a,s,n);break;case 13:va(a,s,n),n&&r&4&&Fx(a,s);break;case 22:s.memoizedState===null&&va(a,s,n),hs(s,s.return);break;default:va(a,s,n)}t=t.sibling}}function jp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wl(n))}function qp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e))}function ua(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vx(e,t,n,i),t=t.sibling}function Vx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ua(e,t,n,i),a&2048&&Dl(9,t);break;case 3:ua(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e)));break;case 12:if(a&2048){ua(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ue(t,t.return,l)}}else ua(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,t.memoizedState!==null?s._visibility&4?ua(e,t,n,i):Yo(e,t):s._visibility&4?ua(e,t,n,i):(s._visibility|=4,cr(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&jp(t.alternate,t);break;case 24:ua(e,t,n,i),a&2048&&qp(t.alternate,t);break;default:ua(e,t,n,i)}}function cr(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:cr(s,r,o,l,a),Dl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&4?cr(s,r,o,l,a):Yo(s,r):(f._visibility|=4,cr(s,r,o,l,a)),a&&c&2048&&jp(r.alternate,r);break;case 24:cr(s,r,o,l,a),a&&c&2048&&qp(r.alternate,r);break;default:cr(s,r,o,l,a)}t=t.sibling}}function Yo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Yo(n,i),a&2048&&jp(i.alternate,i);break;case 24:Yo(n,i),a&2048&&qp(i.alternate,i);break;default:Yo(n,i)}t=t.sibling}}var Po=8192;function Vs(e){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)Gx(e),e=e.sibling}function Gx(e){switch(e.tag){case 26:Vs(e),e.flags&Po&&e.memoizedState!==null&&_b(ai,e.memoizedState,e.memoizedProps);break;case 5:Vs(e);break;case 3:case 4:var t=ai;ai=Mu(e.stateNode.containerInfo),Vs(e),ai=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Po,Po=16777216,Vs(e),Po=t):Vs(e));break;default:Vs(e)}}function kx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vo(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,Wx(i,e)}kx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xx(e),e=e.sibling}function Xx(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Va(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,Gc(e)):vo(e);break;default:vo(e)}}function Gc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];We=i,Wx(i,e)}kx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Va(8,t,t.return),Gc(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,Gc(t));break;default:Gc(t)}e=e.sibling}}function Wx(e,t){for(;We!==null;){var n=We;switch(n.tag){case 0:case 11:case 15:Va(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:wl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,We=i;else t:for(n=e;We!==null;){i=We;var a=i.sibling,s=i.return;if(zx(i),i===n){We=null;break t}if(a!==null){a.return=s,We=a;break t}We=s}}}function D1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,t,n,i){return new D1(e,t,n,i)}function Yp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pa(e,t){var n=e.alternate;return n===null?(n=Yn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function jx(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")Yp(e)&&(r=1);else if(typeof e=="string")r=mb(e,n,bi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case pr:return xs(n.children,a,s,t);case q0:r=8,a|=24;break;case wh:return e=Yn(12,n,t,a|2),e.elementType=wh,e.lanes=s,e;case Ch:return e=Yn(13,n,t,a),e.elementType=Ch,e.lanes=s,e;case Rh:return e=Yn(19,n,t,a),e.elementType=Rh,e.lanes=s,e;case Z0:return qx(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eM:case qi:r=10;break t;case Y0:r=9;break t;case mp:r=11;break t;case gp:r=14;break t;case xa:r=16,i=null;break t}r=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=Yn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function xs(e,t,n,i){return e=Yn(7,e,i,t),e.lanes=n,e}function qx(e,t,n,i){e=Yn(22,e,i,t),e.elementType=Z0,e.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var s=a._current;if(s===null)throw Error(K(456));if(!(a._pendingVisibility&2)){var r=Ba(s,2);r!==null&&(a._pendingVisibility|=2,mn(r,s,2))}},attach:function(){var s=a._current;if(s===null)throw Error(K(456));if(a._pendingVisibility&2){var r=Ba(s,2);r!==null&&(a._pendingVisibility&=-3,mn(r,s,2))}}};return e.stateNode=a,e}function Ff(e,t,n){return e=Yn(6,e,null,t),e.lanes=n,e}function Bf(e,t,n){return t=Yn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zi(e){e.flags|=4}function zg(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!py(t)){if(t=Qn.current,t!==null&&((Zt&4194176)===Zt?Ti!==null:(Zt&62914560)!==Zt&&!(Zt&536870912)||t!==Ti))throw Vo=Gh,Pv;e.flags|=8192}}function ql(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?nv():536870912,e.lanes|=t,qr|=t)}function xo(e,t){if(!Jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&31457280,i|=a.flags&31457280,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function L1(e,t,n){var i=t.pendingProps;switch(Cp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ta(Ie),Vr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(go(t)?zi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ri!==null&&(cd(ri),ri=null))),Se(t),null;case 26:return n=t.memoizedState,e===null?(zi(t),n!==null?(Se(t),zg(t,n)):(Se(t),t.flags&=-16777217)):n?n!==e.memoizedState?(zi(t),Se(t),zg(t,n)):(Se(t),t.flags&=-16777217):(e.memoizedProps!==i&&zi(t),Se(t),t.flags&=-16777217),null;case 27:eu(t),n=Da.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Se(t),null}e=bi.current,go(t)?hg(t):(e=fy(a,i,n),t.stateNode=e,zi(t))}return Se(t),null;case 5:if(eu(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return Se(t),null}if(e=bi.current,go(t))hg(t);else{switch(a=Su(Da.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[rn]=t,e[bn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(en(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&zi(t)}}return Se(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&zi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=Da.current,go(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=dn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[rn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ly(e.nodeValue,n)),e||Ms(t)}else e=Su(e).createTextNode(i),e[rn]=t,t.stateNode=e}return Se(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=go(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(K(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[rn]=t}else Al(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else ri!==null&&(cd(ri),ri=null),a=!0;if(!a)return t.flags&256?(Ki(t),t):(Ki(t),null)}if(Ki(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ql(t,t.updateQueue),Se(t),null;case 4:return Vr(),e===null&&tm(t.stateNode.containerInfo),Se(t),null;case 10:return ta(t.type),Se(t),null;case 19:if(Ye(Fe),a=t.memoizedState,a===null)return Se(t),null;if(i=(t.flags&128)!==0,s=a.rendering,s===null)if(i)xo(a,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=cu(e),s!==null){for(t.flags|=128,xo(a,!1),e=s.updateQueue,t.updateQueue=e,ql(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)jx(n,e),n=n.sibling;return ye(Fe,Fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ei()>gu&&(t.flags|=128,i=!0,xo(a,!1),t.lanes=4194304)}else{if(!i)if(e=cu(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ql(t,e),xo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Jt)return Se(t),null}else 2*Ei()-a.renderingStartTime>gu&&n!==536870912&&(t.flags|=128,i=!0,xo(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ei(),t.sibling=null,e=Fe.current,ye(Fe,i?e&1|2:e&1),t):(Se(t),null);case 22:case 23:return Ki(t),Rp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),n=t.updateQueue,n!==null&&ql(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ye(vs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(Ie),Se(t),null;case 25:return null}throw Error(K(156,t.tag))}function U1(e,t){switch(Cp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(Ie),Vr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return eu(t),null;case 13:if(Ki(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));Al()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(Fe),null;case 4:return Vr(),null;case 10:return ta(t.type),null;case 22:case 23:return Ki(t),Rp(),e!==null&&Ye(vs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(Ie),null;case 25:return null;default:return null}}function Yx(e,t){switch(Cp(t),t.tag){case 3:ta(Ie),Vr();break;case 26:case 27:case 5:eu(t);break;case 4:Vr();break;case 13:Ki(t);break;case 19:Ye(Fe);break;case 10:ta(t.type);break;case 22:case 23:Ki(t),Rp(),e!==null&&Ye(vs);break;case 24:ta(Ie)}}var P1={getCacheForType:function(e){var t=on(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},N1=typeof WeakMap=="function"?WeakMap:Map,be=0,pe=null,jt=null,Zt=0,he=0,Dn=null,Xi=!1,so=!1,Zp=!1,aa=0,we=0,Ga=0,ys=0,Kp=0,Zn=0,qr=0,Zo=null,xi=null,sd=!1,Qp=0,gu=1/0,_u=null,Na=null,Yl=!1,cs=null,Ko=0,rd=0,od=null,Qo=0,ld=null;function Nn(){if(be&2&&Zt!==0)return Zt&-Zt;if(Bt.T!==null){var e=Wr;return e!==0?e:Jp()}return rv()}function Zx(){Zn===0&&(Zn=!(Zt&536870912)||Jt?ev():536870912);var e=Qn.current;return e!==null&&(e.flags|=32),Zn}function mn(e,t,n){(e===pe&&he===2||e.cancelPendingCommit!==null)&&(Yr(e,0),Wi(e,Zt,Zn,!1)),El(e,n),(!(be&2)||e!==pe)&&(e===pe&&(!(be&2)&&(ys|=n),we===4&&Wi(e,Zt,Zn,!1)),Li(e))}function Kx(e,t,n){if(be&6)throw Error(K(327));var i=!n&&(t&60)===0&&(t&e.expiredLanes)===0||bl(e,t),a=i?I1(e,t):Hf(e,t,!0),s=i;do{if(a===0){so&&!i&&Wi(e,t,0,!1);break}else if(a===6)Wi(e,t,0,!Xi);else{if(n=e.current.alternate,s&&!O1(n)){a=Hf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=Zo;var l=o.current.memoizedState.isDehydrated;if(l&&(Yr(o,r).flags|=256),r=Hf(o,r,!1),r!==2){if(Zp&&!l){o.errorRecoveryDisabledLanes|=s,ys|=s,a=4;break t}s=xi,xi=a,s!==null&&cd(s)}a=r}if(s=!1,a!==2)continue}}if(a===1){Yr(e,0),Wi(e,t,0,!0);break}t:{switch(i=e,a){case 0:case 1:throw Error(K(345));case 4:if((t&4194176)===t){Wi(i,t,Zn,!Xi);break t}break;case 2:xi=null;break;case 3:case 5:break;default:throw Error(K(329))}if(i.finishedWork=n,i.finishedLanes=t,(t&62914560)===t&&(s=Qp+300-Ei(),10<s)){if(Wi(i,t,Zn,!Xi),ku(i,0)!==0)break t;i.timeoutHandle=uy(Ig.bind(null,i,n,xi,_u,sd,t,Zn,ys,qr,Xi,2,-0,0),s);break t}Ig(i,n,xi,_u,sd,t,Zn,ys,qr,Xi,0,-0,0)}}break}while(!0);Li(e)}function cd(e){xi===null?xi=e:xi.push.apply(xi,e)}function Ig(e,t,n,i,a,s,r,o,l,c,f,h,d){var p=t.subtreeFlags;if((p&8192||(p&16785408)===16785408)&&(pl={stylesheets:null,count:0,unsuspend:gb},Gx(t),t=vb(),t!==null)){e.cancelPendingCommit=t(Bg.bind(null,e,n,i,a,r,o,l,1,h,d)),Wi(e,s,r,!c);return}Bg(e,n,i,a,r,o,l,f,h,d)}function O1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!In(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wi(e,t,n,i){t&=~Kp,t&=~ys,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Pn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&iv(e,n,t)}function Ju(){return be&6?!0:(Ll(0),!1)}function $p(){if(jt!==null){if(he===0)var e=jt.return;else e=jt,Qi=Os=null,zp(e),Ur=null,ul=0,e=jt;for(;e!==null;)Yx(e.alternate,e),e=e.return;jt=null}}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,tb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),$p(),pe=e,jt=n=Pa(e.current,null),Zt=t,he=0,Dn=null,Xi=!1,so=bl(e,t),Zp=!1,qr=Zn=Kp=ys=Ga=we=0,xi=Zo=null,sd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Pn(i),s=1<<a;t|=e[a],i&=~s}return aa=t,qu(),n}function Qx(e,t){Wt=null,Bt.H=wi,t===Ho?(t=mg(),he=3):t===Pv?(t=mg(),he=4):he=t===Mx?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dn=t,jt===null&&(we=1,du(e,qn(t,e.current)))}function $x(){var e=Bt.H;return Bt.H=wi,e===null?wi:e}function Jx(){var e=Bt.A;return Bt.A=P1,e}function ud(){we=4,Xi||(Zt&4194176)!==Zt&&Qn.current!==null||(so=!0),!(Ga&134217727)&&!(ys&134217727)||pe===null||Wi(pe,Zt,Zn,!1)}function Hf(e,t,n){var i=be;be|=2;var a=$x(),s=Jx();(pe!==e||Zt!==t)&&(_u=null,Yr(e,t)),t=!1;var r=we;t:do try{if(he!==0&&jt!==null){var o=jt,l=Dn;switch(he){case 8:$p(),r=6;break t;case 3:case 2:case 6:Qn.current===null&&(t=!0);var c=he;if(he=0,Dn=null,Er(e,o,l,c),n&&so){r=0;break t}break;default:c=he,he=0,Dn=null,Er(e,o,l,c)}}z1(),r=we;break}catch(f){Qx(e,f)}while(!0);return t&&e.shellSuspendCounter++,Qi=Os=null,be=i,Bt.H=a,Bt.A=s,jt===null&&(pe=null,Zt=0,qu()),r}function z1(){for(;jt!==null;)ty(jt)}function I1(e,t){var n=be;be|=2;var i=$x(),a=Jx();pe!==e||Zt!==t?(_u=null,gu=Ei()+500,Yr(e,t)):so=bl(e,t);t:do try{if(he!==0&&jt!==null){t=jt;var s=Dn;e:switch(he){case 1:he=0,Dn=null,Er(e,t,s,1);break;case 2:if(pg(s)){he=0,Dn=null,Fg(t);break}t=function(){he===2&&pe===e&&(he=7),Li(e)},s.then(t,t);break t;case 3:he=7;break t;case 4:he=5;break t;case 7:pg(s)?(he=0,Dn=null,Fg(t)):(he=0,Dn=null,Er(e,t,s,7));break;case 5:var r=null;switch(jt.tag){case 26:r=jt.memoizedState;case 5:case 27:var o=jt;if(!r||py(r)){he=0,Dn=null;var l=o.sibling;if(l!==null)jt=l;else{var c=o.return;c!==null?(jt=c,tf(c)):jt=null}break e}}he=0,Dn=null,Er(e,t,s,5);break;case 6:he=0,Dn=null,Er(e,t,s,6);break;case 8:$p(),we=6;break t;default:throw Error(K(462))}}F1();break}catch(f){Qx(e,f)}while(!0);return Qi=Os=null,Bt.H=i,Bt.A=a,be=n,jt!==null?0:(pe=null,Zt=0,qu(),we)}function F1(){for(;jt!==null&&!rM();)ty(jt)}function ty(e){var t=wx(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?tf(e):jt=t}function Fg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rg(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=Rg(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:zp(t);default:Yx(n,t),t=jt=jx(t,aa),t=wx(n,t,aa)}e.memoizedProps=e.pendingProps,t===null?tf(e):jt=t}function Er(e,t,n,i){Qi=Os=null,zp(t),Ur=null,ul=0;var a=t.return;try{if(A1(e,a,t,n,Zt)){we=1,du(e,qn(n,e.current)),jt=null;return}}catch(s){if(a!==null)throw jt=a,s;we=1,du(e,qn(n,e.current)),jt=null;return}t.flags&32768?(Jt||i===1?e=!0:so||Zt&536870912?e=!1:(Xi=e=!0,(i===2||i===3||i===6)&&(i=Qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),ey(t,e)):tf(t)}function tf(e){var t=e;do{if(t.flags&32768){ey(t,Xi);return}e=t.return;var n=L1(t.alternate,t,aa);if(n!==null){jt=n;return}if(t=t.sibling,t!==null){jt=t;return}jt=t=e}while(t!==null);we===0&&(we=5)}function ey(e,t){do{var n=U1(e.alternate,e);if(n!==null){n.flags&=32767,jt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){jt=e;return}jt=e=n}while(e!==null);we=6,jt=null}function Bg(e,t,n,i,a,s,r,o,l,c){var f=Bt.T,h=ge.p;try{ge.p=2,Bt.T=null,B1(e,t,n,i,h,a,s,r,o,l,c)}finally{Bt.T=f,ge.p=h}}function B1(e,t,n,i,a,s,r,o){do zr();while(cs!==null);if(be&6)throw Error(K(327));var l=e.finishedWork;if(i=e.finishedLanes,l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=l.lanes|l.childLanes;if(c|=Tp,_M(e,i,c,s,r,o),e===pe&&(jt=pe=null,Zt=0),!(l.subtreeFlags&10256)&&!(l.flags&10256)||Yl||(Yl=!0,rd=c,od=n,k1(nu,function(){return zr(),null})),n=(l.flags&15990)!==0,l.subtreeFlags&15990||n?(n=Bt.T,Bt.T=null,s=ge.p,ge.p=2,r=be,be|=4,C1(e,l),Bx(l,e),c1(pd,e.containerInfo),Tu=!!dd,pd=dd=null,e.current=l,Ox(e,l.alternate,l),oM(),be=r,ge.p=s,Bt.T=n):e.current=l,Yl?(Yl=!1,cs=e,Ko=i):ny(e,c),c=e.pendingLanes,c===0&&(Na=null),hM(l.stateNode),Li(e),t!==null)for(a=e.onRecoverableError,l=0;l<t.length;l++)c=t[l],a(c.value,{componentStack:c.stack});return Ko&3&&zr(),c=e.pendingLanes,i&4194218&&c&42?e===ld?Qo++:(Qo=0,ld=e):Qo=0,Ll(0),null}function ny(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wl(t)))}function zr(){if(cs!==null){var e=cs,t=rd;rd=0;var n=sv(Ko),i=Bt.T,a=ge.p;try{if(ge.p=32>n?32:n,Bt.T=null,cs===null)var s=!1;else{n=od,od=null;var r=cs,o=Ko;if(cs=null,Ko=0,be&6)throw Error(K(331));var l=be;if(be|=4,Xx(r.current),Vx(r,r.current,o,n),be=l,Ll(0,!1),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Ml,r)}catch{}s=!0}return s}finally{ge.p=a,Bt.T=i,ny(e,t)}}return!1}function Hg(e,t,n){t=qn(n,t),t=Zh(e.stateNode,t,2),e=Ua(e,t,2),e!==null&&(El(e,2),Li(e))}function ue(e,t,n){if(e.tag===3)Hg(e,e,n);else for(;t!==null;){if(t.tag===3){Hg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Na===null||!Na.has(i))){e=qn(n,e),n=yx(2),i=Ua(t,n,2),i!==null&&(Sx(n,i,t,e),El(i,2),Li(i));break}}t=t.return}}function Vf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new N1;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Zp=!0,a.add(n),e=H1.bind(null,e,t,n),t.then(e,e))}function H1(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(Zt&n)===n&&(we===4||we===3&&(Zt&62914560)===Zt&&300>Ei()-Qp?!(be&2)&&Yr(e,0):Kp|=n,qr===Zt&&(qr=0)),Li(e)}function iy(e,t){t===0&&(t=nv()),e=Ba(e,t),e!==null&&(El(e,t),Li(e))}function V1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),iy(e,n)}function G1(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),iy(e,n)}function k1(e,t){return _p(e,t)}var vu=null,ur=null,fd=!1,xu=!1,Gf=!1,Ss=0;function Li(e){e!==ur&&e.next===null&&(ur===null?vu=ur=e:ur=ur.next=e),xu=!0,fd||(fd=!0,W1(X1))}function Ll(e,t){if(!Gf&&xu){Gf=!0;do for(var n=!1,i=vu;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Pn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326677?s&201326677|1:s?s|2:0}s!==0&&(n=!0,Vg(i,s))}else s=Zt,s=ku(i,i===pe?s:0),!(s&3)||bl(i,s)||(n=!0,Vg(i,s));i=i.next}while(n);Gf=!1}}function X1(){xu=fd=!1;var e=0;Ss!==0&&(J1()&&(e=Ss),Ss=0);for(var t=Ei(),n=null,i=vu;i!==null;){var a=i.next,s=ay(i,t);s===0?(i.next=null,n===null?vu=a:n.next=a,a===null&&(ur=n)):(n=i,(e!==0||s&3)&&(xu=!0)),i=a}Ll(e)}function ay(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Pn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=gM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=pe,n=Zt,n=ku(e,e===t?n:0),i=e.callbackNode,n===0||e===t&&he===2||e.cancelPendingCommit!==null)return i!==null&&i!==null&&vf(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&vf(i),sv(n)){case 2:case 8:n=J0;break;case 32:n=nu;break;case 268435456:n=tv;break;default:n=nu}return i=sy.bind(null,e),n=_p(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&vf(i),e.callbackPriority=2,e.callbackNode=null,2}function sy(e,t){var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var i=Zt;return i=ku(e,e===pe?i:0),i===0?null:(Kx(e,i,t),ay(e,Ei()),e.callbackNode!=null&&e.callbackNode===n?sy.bind(null,e):null)}function Vg(e,t){if(zr())return null;Kx(e,t,!0)}function W1(e){eb(function(){be&6?_p($0,e):e()})}function Jp(){return Ss===0&&(Ss=ev()),Ss}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zc(""+e)}function kg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function j1(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Gg((a[bn]||null).action),r=i.submitter;r&&(t=(t=r[bn]||null)?Gg(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Xu("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ss!==0){var l=r?kg(a,r):new FormData(a);qh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?kg(a,r):new FormData(a),qh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var kf=0;kf<ug.length;kf++){var Xf=ug[kf],q1=Xf.toLowerCase(),Y1=Xf[0].toUpperCase()+Xf.slice(1);fi(q1,"on"+Y1)}fi(Av,"onAnimationEnd");fi(wv,"onAnimationIteration");fi(Cv,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(f1,"onTransitionRun");fi(h1,"onTransitionStart");fi(d1,"onTransitionCancel");fi(Rv,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);Ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function ry(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){hu(f)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(f){hu(f)}a.currentTarget=null,s=l}}}}function Yt(e,t){var n=t[Nh];n===void 0&&(n=t[Nh]=new Set);var i=e+"__bubble";n.has(i)||(oy(t,e,2,!1),n.add(i))}function Wf(e,t,n){var i=0;t&&(i|=4),oy(n,e,i,t)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function tm(e){if(!e[Zl]){e[Zl]=!0,ov.forEach(function(n){n!=="selectionchange"&&(Z1.has(n)||Wf(n,!1,e),Wf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zl]||(t[Zl]=!0,Wf("selectionchange",!1,t))}}function oy(e,t,n,i){switch(xy(t)){case 2:var a=Sb;break;case 8:a=Mb;break;default:a=am}n=a.bind(null,t,n,e),a=void 0,!Fh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function jf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&(l=r.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;r=r.return}for(;o!==null;){if(r=fs(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}mv(function(){var c=s,f=yp(n),h=[];t:{var d=Dv.get(e);if(d!==void 0){var p=Xu,v=e;switch(e){case"keypress":if(Fc(n)===0)break t;case"keydown":case"keyup":p=GM;break;case"focusin":v="focus",p=bf;break;case"focusout":v="blur",p=bf;break;case"beforeblur":case"afterblur":p=bf;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=DM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=WM;break;case Av:case wv:case Cv:p=PM;break;case Rv:p=qM;break;case"scroll":case"scrollend":p=CM;break;case"wheel":p=ZM;break;case"copy":case"cut":case"paste":p=OM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tg;break;case"toggle":case"beforetoggle":p=QM}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?d!==null?d+"Capture":null:d;x=[];for(var _=c,g;_!==null;){var y=_;if(g=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||g===null||u===null||(y=rl(_,u),y!=null&&x.push(dl(_,y,g))),m)break;_=_.return}0<x.length&&(d=new p(d,v,null,n,f),h.push({event:d,listeners:x}))}}if(!(t&7)){t:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==Ih&&(v=n.relatedTarget||n.fromElement)&&(fs(v)||v[io]))break t;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?fs(v):null,v!==null&&(m=no(v),x=v.tag,v!==m||x!==5&&x!==27&&x!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=$m,y="onMouseLeave",u="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(x=tg,y="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?d:Uo(p),g=v==null?d:Uo(v),d=new x(y,_+"leave",p,n,f),d.target=m,d.relatedTarget=g,y=null,fs(f)===c&&(x=new x(u,_+"enter",v,n,f),x.target=g,x.relatedTarget=m,y=x),m=y,p&&v)e:{for(x=p,u=v,_=0,g=x;g;g=Gs(g))_++;for(g=0,y=u;y;y=Gs(y))g++;for(;0<_-g;)x=Gs(x),_--;for(;0<g-_;)u=Gs(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break e;x=Gs(x),u=Gs(u)}x=null}else x=null;p!==null&&Xg(h,d,p,x,!1),v!==null&&m!==null&&Xg(h,m,v,x,!0)}}t:{if(d=c?Uo(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=ag;else if(ig(d))if(Sv)w=o1;else{w=s1;var A=a1}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?c&&xp(c.elementType)&&(w=ag):w=r1;if(w&&(w=w(e,c))){yv(h,w,n,f);break t}A&&A(e,d,c),e==="focusout"&&c&&d.type==="number"&&c.memoizedProps.value!=null&&zh(d,"number",d.value)}switch(A=c?Uo(c):window,e){case"focusin":(ig(A)||A.contentEditable==="true")&&(vr=A,Bh=c,Bo=null);break;case"focusout":Bo=Bh=vr=null;break;case"mousedown":Hh=!0;break;case"contextmenu":case"mouseup":case"dragend":Hh=!1,cg(h,n,f);break;case"selectionchange":if(u1)break;case"keydown":case"keyup":cg(h,n,f)}var T;if(bp)t:{switch(e){case"compositionstart":var L="onCompositionStart";break t;case"compositionend":L="onCompositionEnd";break t;case"compositionupdate":L="onCompositionUpdate";break t}L=void 0}else _r?vv(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(_v&&n.locale!=="ko"&&(_r||L!=="onCompositionStart"?L==="onCompositionEnd"&&_r&&(T=gv()):(Ra=f,Sp="value"in Ra?Ra.value:Ra.textContent,_r=!0)),A=yu(c,L),0<A.length&&(L=new Jm(L,e,null,n,f),h.push({event:L,listeners:A}),T?L.data=T:(T=xv(n),T!==null&&(L.data=T)))),(T=JM?t1(e,n):e1(e,n))&&(L=yu(c,"onBeforeInput"),0<L.length&&(A=new Jm("onBeforeInput","beforeinput",null,n,f),h.push({event:A,listeners:L}),A.data=T)),j1(h,e,c,n,f)}ry(h,t)})}function dl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=rl(e,n),a!=null&&i.unshift(dl(e,a,s)),a=rl(e,t),a!=null&&i.push(dl(e,a,s))),e=e.return}return i}function Gs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=rl(n,s),c!=null&&r.unshift(dl(n,c,l))):a||(c=rl(n,s),c!=null&&r.push(dl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var K1=/\r\n?/g,Q1=/\u0000|\uFFFD/g;function Wg(e){return(typeof e=="string"?e:""+e).replace(K1,`
`).replace(Q1,"")}function ly(e,t){return t=Wg(t),Wg(e)===t}function ef(){}function oe(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||kr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&kr(e,""+i);break;case"className":Vl(e,"class",i);break;case"tabIndex":Vl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Vl(e,n,i);break;case"style":pv(e,i,s);break;case"data":if(t!=="object"){Vl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=zc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&oe(e,t,"name",a.name,a,null),oe(e,t,"formEncType",a.formEncType,a,null),oe(e,t,"formMethod",a.formMethod,a,null),oe(e,t,"formTarget",a.formTarget,a,null)):(oe(e,t,"encType",a.encType,a,null),oe(e,t,"method",a.method,a,null),oe(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=zc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ef);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=zc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),Oc(e,"popover",i);break;case"xlinkActuate":Pi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Pi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Pi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Pi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Pi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Pi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Pi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Pi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Pi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Oc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=AM.get(n)||n,Oc(e,n,i))}}function hd(e,t,n,i,a,s){switch(n){case"style":pv(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"children":typeof i=="string"?kr(e,i):(typeof i=="number"||typeof i=="bigint")&&kr(e,""+i);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ef);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[bn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Oc(e,n,i)}}}function en(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:oe(e,t,s,r,n,null)}}a&&oe(e,t,"srcSet",n.srcSet,n,null),i&&oe(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":a=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(K(137,t));break;default:oe(e,t,i,f,n,null)}}fv(e,s,o,l,c,r,a,!1),iu(e);return;case"select":Yt("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:oe(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Dr(e,!!i,t,!1):n!=null&&Dr(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:oe(e,t,r,o,n,null)}dv(e,i,a,s),iu(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:oe(e,t,l,i,n,null)}return;case"dialog":Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<hl.length;i++)Yt(hl[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:oe(e,t,c,i,n,null)}return;default:if(xp(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&hd(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&oe(e,t,o,i,n,null))}function $1(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||oe(e,t,p,null,i,h)}}for(var d in i){var p=i[d];if(h=n[d],i.hasOwnProperty(d)&&(p!=null||h!=null))switch(d){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":f=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,t));break;default:p!==h&&oe(e,t,d,p,i,h)}}Oh(e,r,o,l,c,f,s,a);return;case"select":p=r=o=d=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||oe(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":d=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&oe(e,t,a,s,i,l)}t=o,n=r,i=p,d!=null?Dr(e,!!n,d,!1):!!i!=!!n&&(t!=null?Dr(e,!!n,t,!0):Dr(e,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:oe(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":d=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(K(91));break;default:a!==s&&oe(e,t,r,a,i,s)}hv(e,d,p);return;case"option":for(var v in n)if(d=n[v],n.hasOwnProperty(v)&&d!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:oe(e,t,v,null,i,d)}for(l in i)if(d=i[l],p=n[l],i.hasOwnProperty(l)&&d!==p&&(d!=null||p!=null))switch(l){case"selected":e.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:oe(e,t,l,d,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)d=n[x],n.hasOwnProperty(x)&&d!=null&&!i.hasOwnProperty(x)&&oe(e,t,x,null,i,d);for(c in i)if(d=i[c],p=n[c],i.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(K(137,t));break;default:oe(e,t,c,d,i,p)}return;default:if(xp(t)){for(var m in n)d=n[m],n.hasOwnProperty(m)&&d!==void 0&&!i.hasOwnProperty(m)&&hd(e,t,m,void 0,i,d);for(f in i)d=i[f],p=n[f],!i.hasOwnProperty(f)||d===p||d===void 0&&p===void 0||hd(e,t,f,d,i,p);return}}for(var u in n)d=n[u],n.hasOwnProperty(u)&&d!=null&&!i.hasOwnProperty(u)&&oe(e,t,u,null,i,d);for(h in i)d=i[h],p=n[h],!i.hasOwnProperty(h)||d===p||d==null&&p==null||oe(e,t,h,d,i,p)}var dd=null,pd=null;function Su(e){return e.nodeType===9?e:e.ownerDocument}function jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cy(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function md(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qf=null;function J1(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var uy=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(e){return qg.resolve(null).then(e).catch(nb)}:uy;function nb(e){setTimeout(function(){throw e})}function Yf(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){e.removeChild(a),vl(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);vl(t)}function gd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gd(n),vp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ib(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[sl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function ab(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function ci(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function Yg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function fy(e,t,n){switch(t=Su(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}var $n=new Map,Zg=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var oa=ge.d;ge.d={f:sb,r:rb,D:ob,C:lb,L:cb,m:ub,X:hb,S:fb,M:db};function sb(){var e=oa.f(),t=Ju();return e||t}function rb(e){var t=ao(e);t!==null&&t.tag===5&&t.type==="form"?fx(t):oa.r(e)}var ro=typeof document>"u"?null:document;function hy(e,t,n){var i=ro;if(i&&typeof t=="string"&&t){var a=jn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Zg.has(a)||(Zg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),en(t,"link",e),je(t),i.head.appendChild(t)))}}function ob(e){oa.D(e),hy("dns-prefetch",e,null)}function lb(e,t){oa.C(e,t),hy("preconnect",e,t)}function cb(e,t,n){oa.L(e,t,n);var i=ro;if(i&&e&&t){var a='link[rel="preload"][as="'+jn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+jn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+jn(n.imageSizes)+'"]')):a+='[href="'+jn(e)+'"]';var s=a;switch(t){case"style":s=Zr(e);break;case"script":s=oo(e)}$n.has(s)||(e=_e({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$n.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ul(s))||t==="script"&&i.querySelector(Pl(s))||(t=i.createElement("link"),en(t,"link",e),je(t),i.head.appendChild(t)))}}function ub(e,t){oa.m(e,t);var n=ro;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+jn(i)+'"][href="'+jn(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=oo(e)}if(!$n.has(s)&&(e=_e({rel:"modulepreload",href:e},t),$n.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pl(s)))return}i=n.createElement("link"),en(i,"link",e),je(i),n.head.appendChild(i)}}}function fb(e,t,n){oa.S(e,t,n);var i=ro;if(i&&e){var a=Rr(i).hoistableStyles,s=Zr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ul(s)))o.loading=5;else{e=_e({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$n.get(s))&&em(e,n);var l=r=i.createElement("link");je(l),en(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function hb(e,t){oa.X(e,t);var n=ro;if(n&&e){var i=Rr(n).hoistableScripts,a=oo(e),s=i.get(a);s||(s=n.querySelector(Pl(a)),s||(e=_e({src:e,async:!0},t),(t=$n.get(a))&&nm(e,t),s=n.createElement("script"),je(s),en(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function db(e,t){oa.M(e,t);var n=ro;if(n&&e){var i=Rr(n).hoistableScripts,a=oo(e),s=i.get(a);s||(s=n.querySelector(Pl(a)),s||(e=_e({src:e,async:!0,type:"module"},t),(t=$n.get(a))&&nm(e,t),s=n.createElement("script"),je(s),en(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Kg(e,t,n,i){var a=(a=Da.current)?Mu(a):null;if(!a)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Zr(n.href),n=Rr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Zr(n.href);var s=Rr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Ul(e)))&&!s._p&&(r.instance=s,r.state.loading=5),$n.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$n.set(e,n),s||pb(a,e,n,r.state))),t&&i===null)throw Error(K(528,""));return r}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=oo(n),n=Rr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function Zr(e){return'href="'+jn(e)+'"'}function Ul(e){return'link[rel="stylesheet"]['+e+"]"}function dy(e){return _e({},e,{"data-precedence":e.precedence,precedence:null})}function pb(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),en(t,"link",n),je(t),e.head.appendChild(t))}function oo(e){return'[src="'+jn(e)+'"]'}function Pl(e){return"script[async]"+e}function Qg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+jn(n.href)+'"]');if(i)return t.instance=i,je(i),i;var a=_e({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),en(i,"style",a),Xc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Zr(n.href);var s=e.querySelector(Ul(a));if(s)return t.state.loading|=4,t.instance=s,je(s),s;i=dy(n),(a=$n.get(a))&&em(i,a),s=(e.ownerDocument||e).createElement("link"),je(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),en(s,"link",i),t.state.loading|=4,Xc(s,n.precedence,e),t.instance=s;case"script":return s=oo(n.src),(a=e.querySelector(Pl(s)))?(t.instance=a,je(a),a):(i=n,(a=$n.get(s))&&(i=_e({},n),nm(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),je(a),en(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Xc(i,n.precedence,e));return t.instance}function Xc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function em(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function nm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wc=null;function $g(e,t,n){if(Wc===null){var i=new Map,a=Wc=new Map;a.set(n,i)}else a=Wc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[sl]||s[rn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Jg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function mb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function py(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var pl=null;function gb(){}function _b(e,t,n){if(pl===null)throw Error(K(475));var i=pl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=Zr(n.href),s=e.querySelector(Ul(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=bu.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=s,je(s);return}s=e.ownerDocument||e,n=dy(n),(a=$n.get(a))&&em(n,a),s=s.createElement("link"),je(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),en(s,"link",n),t.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=bu.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function vb(){if(pl===null)throw Error(K(475));var e=pl;return e.stylesheets&&e.count===0&&_d(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&_d(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function bu(){if(this.count--,this.count===0){if(this.stylesheets)_d(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Eu=null;function _d(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Eu=new Map,t.forEach(xb,e),Eu=null,bu.call(e))}function xb(e,t){if(!(t.state.loading&4)){var n=Eu.get(e);if(n)var i=n.get(null);else{n=new Map,Eu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=bu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ml={$$typeof:qi,Provider:null,Consumer:null,_currentValue:gs,_currentValue2:gs,_threadCount:0};function yb(e,t,n,i,a,s,r,o){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xf(0),this.hiddenUpdates=xf(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function my(e,t,n,i,a,s,r,o,l,c,f,h){return e=new yb(e,t,n,r,o,l,c,h),t=1,s===!0&&(t|=24),s=Yn(3,null,null,t),e.current=s,s.stateNode=e,t=Dp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Wp(s),e}function gy(e){return e?(e=Sr,e):Sr}function _y(e,t,n,i,a,s){a=gy(a),i.context===null?i.context=a:i.pendingContext=a,i=La(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ua(e,i,t),n!==null&&(mn(n,e,t),Wo(n,e,t))}function t_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function im(e,t){t_(e,t),(e=e.alternate)&&t_(e,t)}function vy(e){if(e.tag===13){var t=Ba(e,67108864);t!==null&&mn(t,e,67108864),im(e,67108864)}}var Tu=!0;function Sb(e,t,n,i){var a=Bt.T;Bt.T=null;var s=ge.p;try{ge.p=2,am(e,t,n,i)}finally{ge.p=s,Bt.T=a}}function Mb(e,t,n,i){var a=Bt.T;Bt.T=null;var s=ge.p;try{ge.p=8,am(e,t,n,i)}finally{ge.p=s,Bt.T=a}}function am(e,t,n,i){if(Tu){var a=vd(i);if(a===null)jf(e,t,i,Au,n),e_(e,i);else if(Eb(a,e,t,n,i))i.stopPropagation();else if(e_(e,i),t&4&&-1<bb.indexOf(e)){for(;a!==null;){var s=ao(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=rs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Pn(r);o.entanglements[1]|=l,r&=~l}Li(s),!(be&6)&&(gu=Ei()+500,Ll(0))}}break;case 13:o=Ba(s,2),o!==null&&mn(o,s,2),Ju(),im(s,2)}if(s=vd(i),s===null&&jf(e,t,i,Au,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else jf(e,t,i,null,n)}}function vd(e){return e=yp(e),sm(e)}var Au=null;function sm(e){if(Au=null,e=fs(e),e!==null){var t=no(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=K0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Au=e,null}function xy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lM()){case $0:return 2;case J0:return 8;case nu:case cM:return 32;case tv:return 268435456;default:return 32}default:return 32}}var xd=!1,Oa=null,za=null,Ia=null,gl=new Map,_l=new Map,Ta=[],bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(e,t){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(t.pointerId)}}function yo(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=ao(t),t!==null&&vy(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Eb(e,t,n,i,a){switch(t){case"focusin":return Oa=yo(Oa,e,t,n,i,a),!0;case"dragenter":return za=yo(za,e,t,n,i,a),!0;case"mouseover":return Ia=yo(Ia,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return gl.set(s,yo(gl.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,_l.set(s,yo(_l.get(s)||null,e,t,n,i,a)),!0}return!1}function yy(e){var t=fs(e.target);if(t!==null){var n=no(t);if(n!==null){if(t=n.tag,t===13){if(t=K0(n),t!==null){e.blockedOn=t,vM(e.priority,function(){if(n.tag===13){var i=Nn(),a=Ba(n,i);a!==null&&mn(a,n,i),im(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ih=i,n.target.dispatchEvent(i),Ih=null}else return t=ao(n),t!==null&&vy(t),e.blockedOn=n,!1;t.shift()}return!0}function n_(e,t,n){jc(e)&&n.delete(t)}function Tb(){xd=!1,Oa!==null&&jc(Oa)&&(Oa=null),za!==null&&jc(za)&&(za=null),Ia!==null&&jc(Ia)&&(Ia=null),gl.forEach(n_),_l.forEach(n_)}function Kl(e,t){e.blockedOn===t&&(e.blockedOn=null,xd||(xd=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Tb)))}var Ql=null;function i_(e){Ql!==e&&(Ql=e,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(sm(i||n)===null)continue;break}var s=ao(n);s!==null&&(e.splice(t,3),t-=3,qh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function vl(e){function t(l){return Kl(l,e)}Oa!==null&&Kl(Oa,e),za!==null&&Kl(za,e),Ia!==null&&Kl(Ia,e),gl.forEach(t),_l.forEach(t);for(var n=0;n<Ta.length;n++){var i=Ta[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ta.length&&(n=Ta[0],n.blockedOn===null);)yy(n),n.blockedOn===null&&Ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[bn]||null;if(typeof s=="function")r||i_(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[bn]||null)o=r.formAction;else if(sm(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),i_(n)}}}function rm(e){this._internalRoot=e}nf.prototype.render=rm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=Nn();_y(n,i,e,t,null,null)};nf.prototype.unmount=rm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&zr(),_y(e.current,2,null,e,null,null),Ju(),t[io]=null}};function nf(e){this._internalRoot=e}nf.prototype.unstable_scheduleHydration=function(e){if(e){var t=rv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ta.length&&t!==0&&t<Ta[n].priority;n++);Ta.splice(n,0,e),n===0&&yy(e)}};var a_=W0.version;if(a_!=="19.0.0")throw Error(K(527,a_,"19.0.0"));ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=sM(t),e=e!==null?Q0(e):null,e=e===null?null:e.stateNode,e};var Ab={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Bt,findFiberByHostInstance:fs,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Ml=$l.inject(Ab),Un=$l}catch{}}Vu.createRoot=function(e,t){if(!j0(e))throw Error(K(299));var n=!1,i="",a=_x,s=vx,r=xx,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=my(e,1,!1,null,null,n,i,a,s,r,o,null),e[io]=t.current,tm(e.nodeType===8?e.parentNode:e),new rm(t)};Vu.hydrateRoot=function(e,t,n){if(!j0(e))throw Error(K(299));var i=!1,a="",s=_x,r=vx,o=xx,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=my(e,1,!0,t,n??null,i,a,s,r,o,l,c),t.context=gy(null),n=t.current,i=Nn(),a=La(i),a.callback=null,Ua(n,a,i),t.current.lanes=i,El(t,i),Li(t),e[io]=t.current,tm(e),new nf(t)};Vu.version="19.0.0";function Sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sy)}catch(e){console.error(e)}}Sy(),B0.exports=Vu;var wb=B0.exports;const Cb=R0(wb);var yd=new Map,Jl=new WeakMap,s_=0,Rb=void 0;function Db(e){return e?(Jl.has(e)||(s_+=1,Jl.set(e,s_.toString())),Jl.get(e)):"0"}function Lb(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Db(e.root):e[t]}`).toString()}function Ub(e){const t=Lb(e);let n=yd.get(t);if(!n){const i=new Map;let a;const s=new IntersectionObserver(r=>{r.forEach(o=>{var l;const c=o.isIntersecting&&a.some(f=>o.intersectionRatio>=f);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=c),(l=i.get(o.target))==null||l.forEach(f=>{f(c,o)})})},e);a=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},yd.set(t,n)}return n}function Pb(e,t,n={},i=Rb){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:s,elements:r}=Ub(n),o=r.get(e)||[];return r.has(e)||r.set(e,o),o.push(t),s.observe(e),function(){o.splice(o.indexOf(t),1),o.length===0&&(r.delete(e),s.unobserve(e)),r.size===0&&(s.disconnect(),yd.delete(a))}}function My({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:a,triggerOnce:s,skip:r,initialInView:o,fallbackInView:l,onChange:c}={}){var f;const[h,d]=kt.useState(null),p=kt.useRef(c),[v,x]=kt.useState({inView:!!o,entry:void 0});p.current=c,kt.useEffect(()=>{if(r||!h)return;let g;return g=Pb(h,(y,w)=>{x({inView:y,entry:w}),p.current&&p.current(y,w),w.isIntersecting&&s&&g&&(g(),g=void 0)},{root:a,rootMargin:i,threshold:e,trackVisibility:n,delay:t},l),()=>{g&&g()}},[Array.isArray(e)?e.toString():e,h,a,i,s,r,n,l,t]);const m=(f=v.entry)==null?void 0:f.target,u=kt.useRef(void 0);!h&&m&&!s&&!r&&u.current!==m&&(u.current=m,x({inView:!!o,entry:void 0}));const _=[d,v.inView,v.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}const ks=e=>{const{children:t,id:n,height:i,style:a,darkMode:s,revealPercent:r}=e,o=r||"-35% 0px",{ref:l,inView:c}=My({root:null,rootMargin:o,triggerOnce:!0});return P.jsx("section",{ref:l,id:n,style:{minHeight:i,...a},className:`section ${c?"section-visible":"section-hidden"} ${s?"dark-mode":"light-mode"}`,children:P.jsx("div",{className:"section-content",children:t})})},by=({darkMode:e,threeJSEntry:t})=>{const n=kt.useRef(null),i=kt.useRef(null),a=kt.useRef(null);return kt.useEffect(()=>{var l;if(typeof t!="function"){console.error("Invalid threeJSEntry function provided.");return}let s=(l=n.current)==null?void 0:l.parentElement;for(;s&&s.tagName!=="SECTION";)s=s.parentElement;i.current=s,console.log("Parent Element:",s),a.current=t(n,s),(()=>{var c;(c=a.current)!=null&&c.handleDarkModeChange&&a.current.handleDarkModeChange(e)})();const o=setTimeout(()=>{var c;(c=a.current)!=null&&c.handleResize&&a.current.handleResize(n)},1e3);return()=>{var c;clearTimeout(o),(c=a.current)!=null&&c.cleanup&&a.current.cleanup()}},[e,t]),P.jsx("div",{ref:n,style:{minWidth:"250px",minHeight:"250px",width:"auto",height:"auto"}})},om=({children:e,className:t,style:n,childStyle:i,revealMode:a,revealPercent:s})=>{const r=a||"rootMargin",{ref:o,inView:l}=My(r==="rootMargin"?{root:null,rootMargin:s,triggerOnce:!0}:{threshold:s,triggerOnce:!0});return P.jsx("div",{ref:o,className:`flex-reveal ${t} ${l?"flex-reveal-visible":"flex-reveal-hidden"}`,style:{display:"flex",width:"100%",...n},children:Hu.Children.map(e,(c,f)=>P.jsx("div",{className:"flex-child",style:{transitionDelay:`${f*.5}s`,flex:"1",flexWrap:"wrap",...i},children:c}))})},wu=({darkMode:e,text:t,style:n,onClick:i})=>(kt.useState(!1),kt.useState(!1),P.jsx("button",{onClick:i,className:`minimal-button ${e?"dark-mode":"light-mode"}`,style:{padding:"10px 20px",cursor:"pointer",...n},children:t})),Nb=({darkMode:e,isOpen:t,content:n,style:i,onClose:a})=>{if(!t)return null;console.log("LightboxModal darkMode:",e);const s=kt.isValidElement(n)?kt.cloneElement(n,{darkMode:e}):n;return P.jsx("div",{className:"lightbox-overlay",onClick:a,children:P.jsxs("div",{className:`lightbox-content ${e?"dark-mode":"light-mode"}`,onClick:r=>r.stopPropagation(),style:i,children:[P.jsx(wu,{darkMode:e,className:`close-button ${e?"dark-mode":"light-mode"}`,onClick:a,text:"X",style:{position:"absolute",top:"10px",right:"10px",fontWeight:"bold"}}),P.jsx("div",{children:s})]})})};class N3 extends Hu.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0}}componentDidCatch(t,n){console.error("Error caught in ErrorBoundary:",t,n)}render(){return this.state.hasError?P.jsx("h2",{children:"Something went wrong. Please try again later."}):this.props.children}}const Ob=({darkMode:e,toggleDarkMode:t})=>(kt.useState({x:0,y:0}),P.jsxs("div",{className:"settings",children:[P.jsx("button",{className:"settings-icon",children:P.jsx("img",{src:`assets/Images/settings_gear_icon_${e?"White.png":"Black.png"}`,alt:"Settings",width:"25px",size:"25px"})}),P.jsxs("div",{className:`settings-menu-wrapper ${e?"dark-mode":"light-mode"}`,children:[" ",P.jsx("div",{className:`settings-menu ${e?"dark-mode":"light-mode"}`,children:P.jsxs("button",{onClick:t,className:"settingsMenuButton",children:[P.jsx("img",{className:"clickableImage",src:`assets/Images/${e?"DarkMode.png":"LightMode.png"}`,alt:e?"Dark Mode":"Light Mode",style:{width:"25px",height:"25px",marginRight:"0.5rem"}}),e?"Switch to Light Mode":"Switch to Dark Mode"]})})]})]}));function zb({...e}){const t=kt.useRef(null),n=i=>{const a=t.current;a.style.height="auto",a.style.height=`${a.scrollHeight}px`,e.onChange&&e.onChange(i)};return P.jsx("textarea",{...e,ref:t,onInput:n,style:{width:"100%",minHeight:"40px",maxHeight:"300px",resize:"none",borderRadius:"4px",...e.style}})}const Ib=({darkMode:e})=>{const[t,n]=kt.useState({name:"",email:"",phone:"",message:""}),[i,a]=kt.useState({name:"",email:"",phone:"",message:""}),s=l=>{const{id:c,value:f}=l.target;n({...t,[c]:f})},r=()=>{const l={},c=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,f=/(^04\d{8}$)|(^\+?[1-9]\d{1,14}$)/;return t.name||(l.name="Name is required"),t.email?c.test(t.email)||(l.email="Please enter a valid email address"):l.email="Email is required",t.phone&&!f.test(t.phone)&&(l.phone="Please enter a valid phone number in international format"),t.message||(l.message="Message is required"),a(l),Object.keys(l).length===0},o=l=>{if(l.preventDefault(),r()){const c=document.getElementById("contactForm"),f=new FormData(c);fetch("https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",{method:"POST",body:f,mode:"no-cors"}).then(h=>{alert("Form submitted successfully!")}).catch(h=>{console.error("Error submitting form:",h),alert("There was an error submitting the form.")})}};return P.jsxs("div",{className:`form-container ${e?"dark-mode":"light-mode"}`,children:[P.jsx("h2",{children:"Say Hi!"}),P.jsx("iframe",{name:"iframe",title:"Hidden iframe for form submission",style:{display:"none"}}),P.jsx("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLScNGQC5-w_fprc2Z_2FFcXwGAzxM232baBeIb7xvufomN-eaA/formResponse",method:"POST",id:"contactForm",target:"iframe",children:P.jsxs("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[P.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center"},children:[P.jsxs("div",{className:`input-group ${e?"dark-mode":"light-mode"}`,style:{flexGrow:"2"},children:[P.jsx("input",{type:"text",className:t.name?"not-empty":"",id:"name",name:"entry.1954550861",placeholder:"",value:t.name,onChange:s,required:!0}),P.jsx("label",{htmlFor:"name",children:"Name"}),i.name&&P.jsx("span",{className:"error",children:i.name})]}),P.jsxs("div",{className:`input-group ${e?"dark-mode":"light-mode"}`,style:{flexGrow:"1"},children:[P.jsx("input",{type:"tel",id:"phone",name:"entry.561916195",className:t.phone?"not-empty":"",value:t.phone,onChange:s,pattern:"(^04\\d{8}$)|(^\\+?[1-9]\\d{1,14}$)",title:`Phone number must be in the format: 
                       - Local (Australian): 04xxxxxxxx 
                       - International: +1234567890`,placeholder:"Enter your phone number"}),P.jsx("label",{htmlFor:"phone",children:"Phone Number (Optional)"}),i.phone&&P.jsx("span",{className:"error",children:i.phone})]})]}),P.jsxs("div",{className:`input-group ${e?"dark-mode":"light-mode"}`,children:[P.jsx("input",{type:"email",id:"email",name:"entry.1965469943",className:t.email?"not-empty":"",value:t.email,onChange:s,required:!0}),P.jsx("label",{htmlFor:"email",children:"Email"}),i.email&&P.jsx("span",{className:"error",children:i.email})]}),P.jsxs("div",{className:`input-group ${e?"dark-mode":"light-mode"}`,children:[P.jsx(zb,{id:"message",name:"entry.1168516071",value:t.message,onChange:s,required:!0}),P.jsx("label",{htmlFor:"message",children:"Message"}),i.message&&P.jsx("span",{className:"error",children:i.message})]}),P.jsx("button",{type:"submit",onClick:o,children:"Submit"})]})})]})},Ey=({darkMode:e,scrollToSection:t})=>{const[n,i]=kt.useState(!1);kt.useState(!1),kt.useState(!1);const[a,s]=kt.useState(!1);return kt.useEffect(()=>{s(!!n)},[n]),P.jsx("div",{children:P.jsxs(om,{revealMode:"threshold",style:{justifyContent:"center",alignItems:"center",marginTop:"2rem",gap:"2rem"},children:[P.jsxs("div",{className:"buttons",style:{display:"flex",gap:"1rem"},children:[P.jsx(wu,{darkMode:e,text:"Résumé",onClick:()=>window.open("assets/Files/Resume.pdf","_blank")}),P.jsx(wu,{darkMode:e,onClick:t,text:"Contact"})]}),P.jsxs("div",{className:"images",style:{display:"flex",gap:"1rem"},children:[P.jsx("div",{className:"img",style:{flex:"0"},children:P.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",target:"_blank",rel:"noreferer",children:P.jsx("img",{className:"clickableImage",src:"assets/Images/linkedIn_logo.png",alt:"LinkedIn",style:{width:"100px",height:"100px",marginRight:"8px"}})})}),P.jsx("div",{className:"img",style:{flex:"0"},children:P.jsx("a",{href:"https://github.com/Peregrine777",target:"_blank",rel:"noreferer",children:P.jsx("img",{className:"clickableImage",src:`assets/Images/github-logo_${e?"dark.png":"light.png"}`,alt:"GitHub",style:{width:"100px",height:"100px",marginRight:"8px"}})})})]})]})})},Fb=({content:e,darkMode:t,contentRenderer:n})=>{const[i,a]=kt.useState(null),[s,r]=kt.useState(null),[o,l]=kt.useState(!1),[c,f]=kt.useState([]),[h,d]=kt.useState(!1),p=x=>{i===x?(a(null),r(null),l(!1),d(!1)):(d(!1),setTimeout(()=>{var m;a(x),r(null),(m=e[x])!=null&&m.subOptions?(f(e[x].subOptions),l(!0)):l(!1),d(!0)},300))},v=x=>{s===x?(r(null),d(!1)):(d(!1),setTimeout(()=>{r(x),d(!0)},300))};return P.jsxs("div",{className:`menu-bar ${t?"dark-mode":""}`,children:[P.jsx("div",{className:"menu-items",children:Object.keys(e).map(x=>P.jsx("div",{className:`menu-item ${i===x?"active":""}`,onClick:()=>p(x),children:x},x))}),o&&P.jsx("div",{className:"sub-menu",children:c.map(x=>P.jsx("div",{className:`sub-menu-item ${s===x?"active":""}`,onClick:()=>v(x),children:x},x))}),P.jsx("div",{className:`content ${h?"fade-in":"fade-out"}`,children:n?n(i,s):s?`Content for ${s}`:i?`Content for ${i}`:"Select a section or sub-option"})]})},Bb=({darkMode:e,src:t,alt:n,style:i})=>{class a extends Hu.Component{constructor(){super(...arguments);fo(this,"state",{noVariant:!1,hasError:!1,isLoading:!0});fo(this,"handleError",()=>{const{noVariant:o}=this.state;if(!o){this.setState({noVariant:!0});return}this.setState({hasError:!0})});fo(this,"handleLoad",()=>{this.setState({isLoading:!1})});fo(this,"getImagePath",o=>{if(!o)return null;const[l,c]=o.split(/(?=\.[^.]+$)/);return e?`${l}_White${c}`:`${l}_Black${c}`})}render(){const{hasError:o,noVariant:l,isLoading:c}=this.state,{src:f,alt:h,style:d}=this.props,p=this.getImagePath(f),v={width:d.width||"40px",height:d.height||"40px",backgroundColor:"#f0f0f0",display:c?"block":"none"};return l?P.jsxs("div",{children:[P.jsx("div",{style:v}),P.jsx("img",{src:f,onError:this.handleError,onLoad:this.handleLoad,alt:h,style:{...d,display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]}):o?P.jsxs("div",{children:[P.jsx("div",{style:v}),P.jsx("img",{src:"assets/Images/404.png",alt:h,style:d})]}):P.jsxs("div",{children:[P.jsx("div",{style:v}),P.jsx("img",{src:p,onError:this.handleError,onLoad:this.handleLoad,alt:h,style:{...d,width:"40px",display:c?"none":"unset",opacity:c?0:1,transition:"opacity 0.3s ease-in-out"}})]})}}return P.jsx(a,{src:t,alt:n,style:i})},Hb=({darkMode:e})=>{const[t,n]=kt.useState([]),[i,a]=kt.useState(!1);if(kt.useEffect(()=>{fetch("assets/Data/skills.json").then(r=>r.json()).then(r=>{console.log("Categories and Skill Counts:",r.map(o=>({category:o.title,skillCount:o.skills.length}))),n(r),a(!0)}).catch(r=>console.error("Error loading skills:",r))},[]),!i)return P.jsx("p",{children:"Loading skills..."});const s=r=>{if(!r)return null;const[o,l]=r.split(/(?=\.[^.]+$)/);return e?`${o}_White${l}`:`${o}_Black${l}`};return P.jsx("div",{children:t.map(r=>P.jsxs("div",{children:[P.jsx("h2",{style:{textAlign:"center",margin:"0.2rem"},children:r.title}),P.jsx("div",{className:"partial-divider"}),P.jsx(om,{style:{justifyContent:"center",paddingTop:"1rem",paddingBottom:"1rem"},childStyle:{flexGrow:"0",minWidth:"150px"},children:r.skills.map(o=>(s(o.image),P.jsxs("div",{className:"skillItem",style:{},children:[P.jsx(Bb,{darkMode:e,src:`assets/Images/Skills/${o.image}`,alt:o.name,style:{maxWidth:"100%",width:"50px",objectFit:"contain",alignSelf:"normal",height:"auto"}}),P.jsx("p",{style:{marginTop:"0.1rem",fontFamily:"Montserrat, sans-serif",fontWeight:"400"},children:o.name})]},o.name)))})]},r.title))})},Vb=({darkMode:e,toggleDarkMode:t})=>P.jsxs("header",{className:`header ${e?"dark-mode":"light-mode"}`,children:[P.jsxs("div",{children:[P.jsx("img",{src:`assets/Images/Peregrine_${e?"dark.png":"light.png"}`,alt:"Logo",className:"logo",style:{marginBottom:"1rem",verticalAlign:"middle",objectFit:"contain",width:"50px",height:"50px"}}),P.jsx("h1",{style:{display:"inline-block",paddingLeft:"10px"},children:"Samuel Mckenzie-Sell"})]}),P.jsx(Ob,{darkMode:e,toggleDarkMode:t})]}),Gb=({darkMode:e})=>P.jsxs("div",{className:"container",style:{justifyContent:"center",alignItems:"center",flex:"0 1 auto",margin:"auto"},children:[P.jsx("div",{className:"column",style:{flexBasis:"10%",flex:"0 0 auto"},children:P.jsx("img",{src:`assets/Images/Peregrine_${e?"dark.png":"light.png"}`,style:{height:"100px",verticalAlign:"middle"}})}),P.jsxs("div",{className:"column",style:{flexBasis:"45%",flex:"0 0 auto",alignItems:"left",textAlign:"left"},children:[P.jsx("h2",{style:{textAlign:"left"},children:" Links "}),P.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",children:"LinkedIn"}),P.jsx("br",{}),P.jsx("a",{href:"https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b",children:"GitHub"}),P.jsx("p",{style:{textAlign:"left",fontSize:"24px"},children:" "}),P.jsx(Ey,{darkMode:e})]}),P.jsxs("div",{className:"column",style:{flex:"0",alignSelf:"start",textAlign:"left"},children:[P.jsx("h2",{style:{textAlign:"left"},children:" Contact "}),P.jsx("p",{children:" samuelmckenziesell@gmail.com "}),P.jsx("p",{children:" +61 0401 384 885 "})]})]}),kb=({darkMode:e})=>{const t={"Game Engines":{subOptions:["OpenGL engine","Physics"]},Games:{subOptions:[]},C:{subOptions:[]}},n=(i,a)=>a?P.jsxs("div",{children:[P.jsx("h2",{children:a}),P.jsxs("p",{children:["This is the content for ",a,"."]})]}):i?i==="Games"?P.jsxs("div",{children:[P.jsx("h2",{children:"Games"}),P.jsx("p",{children:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"}),P.jsx("img",{src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada"}),P.jsx("a",{href:"https://chanel-parfait.itch.io/gloria-armada",children:"Play Gloria Armada on itch.io"})]}):P.jsxs("div",{children:[P.jsx("h2",{children:i}),P.jsxs("p",{children:["This is the content for ",i,"."]})]}):P.jsx("p",{children:"Please select a section or sub-option."});return P.jsxs("div",{style:{textAlign:"center"},children:[P.jsx("h2",{children:"Game Development"}),P.jsx("div",{children:P.jsx(Fb,{content:t,darkMode:!0,contentRenderer:n})}),P.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[P.jsxs("div",{style:{flex:"1",padding:"1rem"},children:[P.jsx("h3",{children:"Games"}),P.jsx("p",{children:"Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"}),P.jsx("img",{src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada"})]}),P.jsxs("div",{style:{flex:"1",padding:"1rem"},children:[P.jsx("h3",{children:"Game Engines"}),P.jsx("p",{children:"s"})]})]})]})},Xb=({darkMode:e})=>{const t=e?"white":"#333";return P.jsxs("section",{className:"analytics-overview",children:[P.jsxs("div",{className:"section-header",children:[P.jsx("h2",{style:{color:t},children:"Data Analytics Expertise"}),P.jsx("p",{children:"Leveraging data to uncover insights and drive business decisions. Although I work on sensitive projects, I can offer a range of services in statistical analysis, predictive modeling, and data visualization."})]}),P.jsxs("div",{className:"skills-and-tools",children:[P.jsx("h3",{children:"Tools & Techniques"}),P.jsxs("ul",{children:[P.jsx("li",{children:"Statistical Analysis: Python (pandas, numpy, scipy)"}),P.jsx("li",{children:"Data Visualization: Tableau, Power BI, Plotly"}),P.jsx("li",{children:"Database Management: SQL, PostgreSQL, NoSQL"}),P.jsx("li",{children:"Machine Learning: Scikit-learn, TensorFlow, Keras"}),P.jsx("li",{children:"Data Processing: ETL, web scraping, APIs"})]})]}),P.jsxs("div",{className:"impact",children:[P.jsx("h3",{children:"Impact"}),P.jsx("p",{children:"In my past work, I've helped businesses improve decision-making with data-driven insights, built predictive models for revenue forecasting, and developed interactive dashboards to monitor key performance metrics. My work directly contributes to operational efficiency and informed strategic decisions."})]}),P.jsx("div",{className:"visuals",children:P.jsx("div",{className:"sample-graph",children:P.jsx("img",{src:"/path-to-placeholder-image.png"})})})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lm="168",Ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wb=0,r_=1,jb=2,Ty=1,qb=2,Gi=3,ka=0,Mn=1,oi=2,fn=0,Fr=1,Sd=2,o_=3,l_=4,Ay=5,ji=100,Yb=101,Zb=102,Kb=103,Qb=104,Md=200,$b=201,Jb=202,tE=203,bd=204,Ed=205,wy=206,eE=207,Cy=208,nE=209,iE=210,aE=211,sE=212,rE=213,oE=214,lE=0,cE=1,uE=2,Cu=3,fE=4,hE=5,dE=6,pE=7,Ry=0,mE=1,gE=2,Fa=0,Dy=1,Ly=2,Uy=3,Py=4,_E=5,cm=6,Ny=7,Oy=300,Kr=301,Qr=302,Td=303,Ad=304,af=306,xl=1e3,ds=1001,wd=1002,ln=1003,vE=1004,tc=1005,li=1006,Zf=1007,ps=1008,sa=1009,zy=1010,Iy=1011,yl=1012,um=1013,ws=1014,Mi=1015,ui=1016,fm=1017,hm=1018,Cs=1020,Fy=35902,By=1021,Hy=1022,Kn=1023,Vy=1024,Gy=1025,Br=1026,Rs=1027,dm=1028,pm=1029,ky=1030,mm=1031,gm=1033,qc=33776,Yc=33777,Zc=33778,Kc=33779,Cd=35840,Rd=35841,Dd=35842,Ld=35843,Ud=36196,Pd=37492,Nd=37496,Od=37808,zd=37809,Id=37810,Fd=37811,Bd=37812,Hd=37813,Vd=37814,Gd=37815,kd=37816,Xd=37817,Wd=37818,jd=37819,qd=37820,Yd=37821,Qc=36492,Zd=36494,Kd=36495,Xy=36283,Qd=36284,$d=36285,Jd=36286,xE=3200,yE=3201,_m=0,SE=1,Aa="",si="srgb",qa="srgb-linear",vm="display-p3",sf="display-p3-linear",Ru="linear",fe="srgb",Du="rec709",Lu="p3",Xs=7680,c_=519,ME=512,bE=513,EE=514,Wy=515,TE=516,AE=517,wE=518,CE=519,u_=35044,f_="300 es",$i=2e3,Uu=2001;class zs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let h_=1234567;const $o=Math.PI/180,$r=180/Math.PI;function lo(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[e&255]+nn[e>>8&255]+nn[e>>16&255]+nn[e>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function tn(e,t,n){return Math.max(t,Math.min(n,e))}function xm(e,t){return(e%t+t)%t}function RE(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function DE(e,t,n){return e!==t?(n-e)/(t-e):0}function Jo(e,t,n){return(1-n)*e+n*t}function LE(e,t,n,i){return Jo(e,t,1-Math.exp(-n*i))}function UE(e,t=1){return t-Math.abs(xm(e,t*2)-t)}function PE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function NE(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function OE(e,t){return e+Math.floor(Math.random()*(t-e+1))}function zE(e,t){return e+Math.random()*(t-e)}function IE(e){return e*(.5-Math.random())}function FE(e){e!==void 0&&(h_=e);let t=h_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function BE(e){return e*$o}function HE(e){return e*$r}function VE(e){return(e&e-1)===0&&e!==0}function GE(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function kE(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function XE(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),f=r((t+i)/2),h=s((t-i)/2),d=r((t-i)/2),p=s((i-t)/2),v=r((i-t)/2);switch(a){case"XYX":e.set(o*f,l*h,l*d,o*c);break;case"YZY":e.set(l*d,o*f,l*h,o*c);break;case"ZXZ":e.set(l*h,l*d,o*f,o*c);break;case"XZX":e.set(o*f,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*f,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function fr(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function cn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const jy={DEG2RAD:$o,RAD2DEG:$r,generateUUID:lo,clamp:tn,euclideanModulo:xm,mapLinear:RE,inverseLerp:DE,lerp:Jo,damp:LE,pingpong:UE,smoothstep:PE,smootherstep:NE,randInt:OE,randFloat:zE,randFloatSpread:IE,seededRandom:FE,degToRad:BE,radToDeg:HE,isPowerOfTwo:VE,ceilPowerOfTwo:GE,floorPowerOfTwo:kE,setQuaternionFromProperEuler:XE,normalize:cn,denormalize:fr};class St{constructor(t=0,n=0){St.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,n,i,a,s,r,o,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const f=this.elements;return f[0]=t,f[1]=a,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=a[0],m=a[3],u=a[6],_=a[1],g=a[4],y=a[7],w=a[2],A=a[5],T=a[8];return s[0]=r*x+o*_+l*w,s[3]=r*m+o*g+l*A,s[6]=r*u+o*y+l*T,s[1]=c*x+f*_+h*w,s[4]=c*m+f*g+h*A,s[7]=c*u+f*y+h*T,s[2]=d*x+p*_+v*w,s[5]=d*m+p*g+v*A,s[8]=d*u+p*y+v*T,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*s*f+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=f*r-o*c,d=o*l-f*s,p=c*s-r*l,v=n*h+i*d+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=h*x,t[1]=(a*c-f*i)*x,t[2]=(o*i-a*r)*x,t[3]=d*x,t[4]=(f*n-a*l)*x,t[5]=(a*s-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*s)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Kf.makeScale(t,n)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Kf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new Gt;function qy(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Pu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function WE(){const e=Pu("canvas");return e.style.display="block",e}const d_={};function tl(e){e in d_||(d_[e]=!0,console.warn(e))}function jE(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const p_=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),m_=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),So={[qa]:{transfer:Ru,primaries:Du,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[si]:{transfer:fe,primaries:Du,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[sf]:{transfer:Ru,primaries:Lu,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(m_),fromReference:e=>e.applyMatrix3(p_)},[vm]:{transfer:fe,primaries:Lu,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(m_),fromReference:e=>e.applyMatrix3(p_).convertLinearToSRGB()}},qE=new Set([qa,sf]),te={enabled:!0,_workingColorSpace:qa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!qE.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=So[t].toReference,a=So[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return So[e].primaries},getTransfer:function(e){return e===Aa?Ru:So[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(So[t].luminanceCoefficients)}};function Hr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Qf(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ws;class YE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ws===void 0&&(Ws=Pu("canvas")),Ws.width=t.width,Ws.height=t.height;const i=Ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Pu("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Hr(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hr(n[i]/255)*255):n[i]=Hr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ZE=0;class Yy{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=lo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push($f(a[r].image)):s.push($f(a[r]))}else s=$f(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function $f(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?YE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KE=0;class gn extends zs{constructor(t=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=ds,a=ds,s=li,r=ps,o=Kn,l=sa,c=gn.DEFAULT_ANISOTROPY,f=Aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=lo(),this.name="",this.source=new Yy(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xl:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xl:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Oy;gn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,n=0,i=0,a=1){Be.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(p+1)/2,w=(u+1)/2,A=(f+d)/4,T=(h+x)/4,L=(v+m)/4;return g>y&&g>w?g<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(g),a=A/i,s=T/i):y>w?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=A/a,s=L/a):w<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),i=T/s,a=L/s),this.set(i,a,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-x)/_,this.z=(d-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QE extends zs{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Be(0,0,t,n),this.scissorTest=!1,this.viewport=new Be(0,0,t,n);const a={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new gn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Yy(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends QE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Zy extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ln,this.minFilter=ln,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $E extends gn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ln,this.minFilter=ln,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],f=i[a+2],h=i[a+3];const d=s[r+0],p=s[r+1],v=s[r+2],x=s[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=h;return}if(o===1){t[n+0]=d,t[n+1]=p,t[n+2]=v,t[n+3]=x;return}if(h!==x||l!==d||c!==p||f!==v){let m=1-o;const u=l*d+c*p+f*v+h*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const w=Math.sqrt(g),A=Math.atan2(w,u*_);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const y=o*_;if(l=l*m+d*y,c=c*m+p*y,f=f*m+v*y,h=h*m+x*y,m===1-o){const w=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=w,c*=w,f*=w,h*=w}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],f=i[a+3],h=s[r],d=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+f*h+l*p-c*d,t[n+1]=l*v+f*d+c*h-o*p,t[n+2]=c*v+f*p+o*d-l*h,t[n+3]=f*v-o*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(a/2),h=o(s/2),d=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=d*f*h+c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h-d*p*v;break;case"YXZ":this._x=d*f*h+c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h+d*p*v;break;case"ZXY":this._x=d*f*h-c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h-d*p*v;break;case"ZYX":this._x=d*f*h-c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h+d*p*v;break;case"YZX":this._x=d*f*h+c*p*v,this._y=c*p*h+d*f*v,this._z=c*f*v-d*p*h,this._w=c*f*h-d*p*v;break;case"XZY":this._x=d*f*h-c*p*v,this._y=c*p*h-d*f*v,this._z=c*f*v+d*p*h,this._w=c*f*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+a*c-s*l,this._y=a*f+r*l+s*o-i*c,this._z=s*f+r*c+i*l-a*o,this._w=r*f-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*t._w+i*t._x+a*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=r*h+this._w*d,this._x=i*h+this._x*d,this._y=a*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,n=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(g_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(g_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),f=2*(o*n-s*a),h=2*(s*i-r*n);return this.x=n+l*c+r*h-o*f,this.y=i+l*f+o*c-s*h,this.z=a+l*h+s*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jf.copy(this).projectOnVector(t),this.sub(Jf)}reflect(t){return this.sub(Jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new D,g_=new ra;class yi{constructor(t=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ei.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ei):ei.fromBufferAttribute(s,r),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ec.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ec.copy(i.boundingBox)),ec.applyMatrix4(t.matrixWorld),this.union(ec)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),nc.subVectors(this.max,Mo),js.subVectors(t.a,Mo),qs.subVectors(t.b,Mo),Ys.subVectors(t.c,Mo),fa.subVectors(qs,js),ha.subVectors(Ys,qs),Ja.subVectors(js,Ys);let n=[0,-fa.z,fa.y,0,-ha.z,ha.y,0,-Ja.z,Ja.y,fa.z,0,-fa.x,ha.z,0,-ha.x,Ja.z,0,-Ja.x,-fa.y,fa.x,0,-ha.y,ha.x,0,-Ja.y,Ja.x,0];return!th(n,js,qs,Ys,nc)||(n=[1,0,0,0,1,0,0,0,1],!th(n,js,qs,Ys,nc))?!1:(ic.crossVectors(fa,ha),n=[ic.x,ic.y,ic.z],th(n,js,qs,Ys,nc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ii=[new D,new D,new D,new D,new D,new D,new D,new D],ei=new D,ec=new yi,js=new D,qs=new D,Ys=new D,fa=new D,ha=new D,Ja=new D,Mo=new D,nc=new D,ic=new D,ts=new D;function th(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){ts.fromArray(e,s);const o=a.x*Math.abs(ts.x)+a.y*Math.abs(ts.y)+a.z*Math.abs(ts.z),l=t.dot(ts),c=n.dot(ts),f=i.dot(ts);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const JE=new yi,bo=new D,eh=new D;class Nl{constructor(t=new D,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):JE.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(bo,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(eh)),this.expandByPoint(bo.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new D,nh=new D,ac=new D,da=new D,ih=new D,sc=new D,ah=new D;class rf{constructor(t=new D,n=new D(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Fi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){nh.copy(t).add(n).multiplyScalar(.5),ac.copy(n).sub(t).normalize(),da.copy(this.origin).sub(nh);const s=t.distanceTo(n)*.5,r=-this.direction.dot(ac),o=da.dot(this.direction),l=-da.dot(ac),c=da.lengthSq(),f=Math.abs(1-r*r);let h,d,p,v;if(f>0)if(h=r*l-o,d=r*o-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const x=1/f;h*=x,d*=x,p=h*(h+r*d+2*o)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-r*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(r*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(nh).addScaledVector(ac,d),p}intersectSphere(t,n){Fi.subVectors(t.center,this.origin);const i=Fi.dot(this.direction),a=Fi.dot(Fi)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,a=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,a=(t.min.x-d.x)*c),f>=0?(s=(t.min.y-d.y)*f,r=(t.max.y-d.y)*f):(s=(t.max.y-d.y)*f,r=(t.min.y-d.y)*f),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,n,i,a,s){ih.subVectors(n,t),sc.subVectors(i,t),ah.crossVectors(ih,sc);let r=this.direction.dot(ah),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;da.subVectors(this.origin,t);const l=o*this.direction.dot(sc.crossVectors(da,sc));if(l<0)return null;const c=o*this.direction.dot(ih.cross(da));if(c<0||l+c>r)return null;const f=-o*da.dot(ah);return f<0?null:this.at(f/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,n,i,a,s,r,o,l,c,f,h,d,p,v,x,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,f,h,d,p,v,x,m)}set(t,n,i,a,s,r,o,l,c,f,h,d,p,v,x,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/Zs.setFromMatrixColumn(t,0).length(),s=1/Zs.setFromMatrixColumn(t,1).length(),r=1/Zs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),f=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=r*f,p=r*h,v=o*f,x=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=d-x*c,n[9]=-o*l,n[2]=x-d*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){const d=l*f,p=l*h,v=c*f,x=c*h;n[0]=d+x*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*h,n[5]=r*f,n[9]=-o,n[2]=p*o-v,n[6]=x+d*o,n[10]=r*l}else if(t.order==="ZXY"){const d=l*f,p=l*h,v=c*f,x=c*h;n[0]=d-x*o,n[4]=-r*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*f,n[9]=x-d*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const d=r*f,p=r*h,v=o*f,x=o*h;n[0]=l*f,n[4]=v*c-p,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*f,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*h+v,n[10]=d-x*h}else if(t.order==="XZY"){const d=r*l,p=r*c,v=o*l,x=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+x,n[5]=r*f,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tT,t,eT)}lookAt(t,n,i){const a=this.elements;return wn.subVectors(t,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),pa.crossVectors(i,wn),pa.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),pa.crossVectors(i,wn)),pa.normalize(),rc.crossVectors(wn,pa),a[0]=pa.x,a[4]=rc.x,a[8]=wn.x,a[1]=pa.y,a[5]=rc.y,a[9]=wn.y,a[2]=pa.z,a[6]=rc.z,a[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],_=i[3],g=i[7],y=i[11],w=i[15],A=a[0],T=a[4],L=a[8],E=a[12],S=a[1],R=a[5],X=a[9],B=a[13],q=a[2],$=a[6],N=a[10],W=a[14],I=a[3],Q=a[7],at=a[11],ht=a[15];return s[0]=r*A+o*S+l*q+c*I,s[4]=r*T+o*R+l*$+c*Q,s[8]=r*L+o*X+l*N+c*at,s[12]=r*E+o*B+l*W+c*ht,s[1]=f*A+h*S+d*q+p*I,s[5]=f*T+h*R+d*$+p*Q,s[9]=f*L+h*X+d*N+p*at,s[13]=f*E+h*B+d*W+p*ht,s[2]=v*A+x*S+m*q+u*I,s[6]=v*T+x*R+m*$+u*Q,s[10]=v*L+x*X+m*N+u*at,s[14]=v*E+x*B+m*W+u*ht,s[3]=_*A+g*S+y*q+w*I,s[7]=_*T+g*R+y*$+w*Q,s[11]=_*L+g*X+y*N+w*at,s[15]=_*E+g*B+y*W+w*ht,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],h=t[6],d=t[10],p=t[14],v=t[3],x=t[7],m=t[11],u=t[15];return v*(+s*l*h-a*c*h-s*o*d+i*c*d+a*o*p-i*l*p)+x*(+n*l*p-n*c*d+s*r*d-a*r*p+a*c*f-s*l*f)+m*(+n*c*h-n*o*p-s*r*h+i*r*p+s*o*f-i*c*f)+u*(-a*o*f-n*l*h+n*o*d+a*r*h-i*r*d+i*l*f)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],h=t[9],d=t[10],p=t[11],v=t[12],x=t[13],m=t[14],u=t[15],_=h*m*c-x*d*c+x*l*p-o*m*p-h*l*u+o*d*u,g=v*d*c-f*m*c-v*l*p+r*m*p+f*l*u-r*d*u,y=f*x*c-v*h*c+v*o*p-r*x*p-f*o*u+r*h*u,w=v*h*l-f*x*l-v*o*d+r*x*d+f*o*m-r*h*m,A=n*_+i*g+a*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=_*T,t[1]=(x*d*s-h*m*s-x*a*p+i*m*p+h*a*u-i*d*u)*T,t[2]=(o*m*s-x*l*s+x*a*c-i*m*c-o*a*u+i*l*u)*T,t[3]=(h*l*s-o*d*s-h*a*c+i*d*c+o*a*p-i*l*p)*T,t[4]=g*T,t[5]=(f*m*s-v*d*s+v*a*p-n*m*p-f*a*u+n*d*u)*T,t[6]=(v*l*s-r*m*s-v*a*c+n*m*c+r*a*u-n*l*u)*T,t[7]=(r*d*s-f*l*s+f*a*c-n*d*c-r*a*p+n*l*p)*T,t[8]=y*T,t[9]=(v*h*s-f*x*s-v*i*p+n*x*p+f*i*u-n*h*u)*T,t[10]=(r*x*s-v*o*s+v*i*c-n*x*c-r*i*u+n*o*u)*T,t[11]=(f*o*s-r*h*s-f*i*c+n*h*c+r*i*p-n*o*p)*T,t[12]=w*T,t[13]=(f*x*a-v*h*a+v*i*d-n*x*d-f*i*m+n*h*m)*T,t[14]=(v*o*a-r*x*a-v*i*l+n*x*l+r*i*m-n*o*m)*T,t[15]=(r*h*a-f*o*a+f*i*l-n*h*l-r*i*d+n*o*d)*T,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,f=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,f*o+i,f*l-a*r,0,c*l-a*o,f*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,f=r+r,h=o+o,d=s*c,p=s*f,v=s*h,x=r*f,m=r*h,u=o*h,_=l*c,g=l*f,y=l*h,w=i.x,A=i.y,T=i.z;return a[0]=(1-(x+u))*w,a[1]=(p+y)*w,a[2]=(v-g)*w,a[3]=0,a[4]=(p-y)*A,a[5]=(1-(d+u))*A,a[6]=(m+_)*A,a[7]=0,a[8]=(v+g)*T,a[9]=(m-_)*T,a[10]=(1-(d+x))*T,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let s=Zs.set(a[0],a[1],a[2]).length();const r=Zs.set(a[4],a[5],a[6]).length(),o=Zs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),t.x=a[12],t.y=a[13],t.z=a[14],ni.copy(this);const c=1/s,f=1/r,h=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=f,ni.elements[5]*=f,ni.elements[6]*=f,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,n.setFromRotationMatrix(ni),i.x=s,i.y=r,i.z=o,this}makePerspective(t,n,i,a,s,r,o=$i){const l=this.elements,c=2*s/(n-t),f=2*s/(i-a),h=(n+t)/(n-t),d=(i+a)/(i-a);let p,v;if(o===$i)p=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(o===Uu)p=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=$i){const l=this.elements,c=1/(n-t),f=1/(i-a),h=1/(r-s),d=(n+t)*c,p=(i+a)*f;let v,x;if(o===$i)v=(r+s)*h,x=-2*h;else if(o===Uu)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Zs=new D,ni=new re,tT=new D(0,0,0),eT=new D(1,1,1),pa=new D,rc=new D,wn=new D,__=new re,v_=new ra;class Ci{constructor(t=0,n=0,i=0,a=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],f=a[9],h=a[2],d=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return __.makeRotationFromQuaternion(t),this.setFromRotationMatrix(__,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return v_.setFromEuler(this),this.setFromQuaternion(v_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Ky{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nT=0;const x_=new D,Ks=new ra,Bi=new re,oc=new D,Eo=new D,iT=new D,aT=new ra,y_=new D(1,0,0),S_=new D(0,1,0),M_=new D(0,0,1),b_={type:"added"},sT={type:"removed"},Qs={type:"childadded",child:null},sh={type:"childremoved",child:null};class He extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new D,n=new Ci,i=new ra,a=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new re},normalMatrix:{value:new Gt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ky,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ks.setFromAxisAngle(t,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,n){return Ks.setFromAxisAngle(t,n),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(S_,t)}rotateZ(t){return this.rotateOnAxis(M_,t)}translateOnAxis(t,n){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(S_,t)}translateZ(t){return this.translateOnAxis(M_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?oc.copy(t):oc.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Eo,oc,this.up):Bi.lookAt(oc,Eo,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),Ks.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(b_),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(sT),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(b_),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,iT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,aT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),h=r(t.shapes),d=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}He.DEFAULT_UP=new D(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new D,Hi=new D,rh=new D,Vi=new D,$s=new D,Js=new D,E_=new D,oh=new D,lh=new D,ch=new D;class Si{constructor(t=new D,n=new D,i=new D){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),ii.subVectors(t,n),a.cross(ii);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){ii.subVectors(a,n),Hi.subVectors(i,n),rh.subVectors(t,n);const r=ii.dot(ii),o=ii.dot(Hi),l=ii.dot(rh),c=Hi.dot(Hi),f=Hi.dot(rh),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,v=(r*f-o*l)*d;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(r,Vi.y),l.addScaledVector(o,Vi.z),l)}static isFrontFacing(t,n,i,a){return ii.subVectors(i,n),Hi.subVectors(t,n),ii.cross(Hi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ii.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Si.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return Si.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;$s.subVectors(a,i),Js.subVectors(s,i),oh.subVectors(t,i);const l=$s.dot(oh),c=Js.dot(oh);if(l<=0&&c<=0)return n.copy(i);lh.subVectors(t,a);const f=$s.dot(lh),h=Js.dot(lh);if(f>=0&&h<=f)return n.copy(a);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector($s,r);ch.subVectors(t,s);const p=$s.dot(ch),v=Js.dot(ch);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Js,o);const m=f*v-p*h;if(m<=0&&h-f>=0&&p-v>=0)return E_.subVectors(s,a),o=(h-f)/(h-f+(p-v)),n.copy(a).addScaledVector(E_,o);const u=1/(m+x+d);return r=x*u,o=d*u,n.copy(i).addScaledVector($s,r).addScaledVector(Js,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ma={h:0,s:0,l:0},lc={h:0,s:0,l:0};function uh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}let yt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=te.workingColorSpace){return this.r=t,this.g=n,this.b=i,te.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=te.workingColorSpace){if(t=xm(t,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=uh(r,s,t+1/3),this.g=uh(r,s,t),this.b=uh(r,s,t-1/3)}return te.toWorkingColorSpace(this,a),this}setStyle(t,n=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=si){const i=Qy[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}copyLinearToSRGB(t){return this.r=Qf(t.r),this.g=Qf(t.g),this.b=Qf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return te.fromWorkingColorSpace(an.copy(this),t),Math.round(tn(an.r*255,0,255))*65536+Math.round(tn(an.g*255,0,255))*256+Math.round(tn(an.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=te.workingColorSpace){te.fromWorkingColorSpace(an.copy(this),n);const i=an.r,a=an.g,s=an.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const f=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=f<=.5?h/(r+o):h/(2-r-o),r){case i:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-i)/h+2;break;case s:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=te.workingColorSpace){return te.fromWorkingColorSpace(an.copy(this),n),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=si){te.fromWorkingColorSpace(an.copy(this),t);const n=an.r,i=an.g,a=an.b;return t!==si?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(ma),this.setHSL(ma.h+t,ma.s+n,ma.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ma),t.getHSL(lc);const i=Jo(ma.h,lc.h,n),a=Jo(ma.s,lc.s,n),s=Jo(ma.l,lc.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const an=new yt;yt.NAMES=Qy;let rT=0;class Ya extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Fr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ed,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Cu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ed&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class of extends Ya{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Ry,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new D,cc=new St;class Ai{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=u_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return tl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cc.fromBufferAttribute(this,n),cc.applyMatrix3(t),this.setXY(n,cc.x,cc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.applyMatrix3(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.applyMatrix4(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.applyNormalMatrix(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.transformDirection(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=fr(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=fr(n,this.array)),n}setX(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=fr(n,this.array)),n}setY(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=fr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=fr(n,this.array)),n}setW(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),a=cn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),a=cn(a,this.array),s=cn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u_&&(t.usage=this.usage),t}}class $y extends Ai{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Jy extends Ai{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class zn extends Ai{constructor(t,n,i){super(new Float32Array(t),n,i)}}let oT=0;const Vn=new re,fh=new He,tr=new D,Cn=new yi,To=new yi,Xe=new D;class Jn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qy(t)?Jy:$y)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Gt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,n,i){return Vn.makeTranslation(t,n,i),this.applyMatrix4(Vn),this}scale(t,n,i){return Vn.makeScale(t,n,i),this.applyMatrix4(Vn),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];To.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(Cn.min,To.min),Cn.expandByPoint(Xe),Xe.addVectors(Cn.max,To.max),Cn.expandByPoint(Xe)):(Cn.expandByPoint(To.min),Cn.expandByPoint(To.max))}Cn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)Xe.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(Xe));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Xe.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(t,c),Xe.add(tr)),a=Math.max(a,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new D,l[L]=new D;const c=new D,f=new D,h=new D,d=new St,p=new St,v=new St,x=new D,m=new D;function u(L,E,S){c.fromBufferAttribute(i,L),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,S),f.sub(c),h.sub(c),p.sub(d),v.sub(d);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(R),o[L].add(x),o[E].add(x),o[S].add(x),l[L].add(m),l[E].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,E=_.length;L<E;++L){const S=_[L],R=S.start,X=S.count;for(let B=R,q=R+X;B<q;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const g=new D,y=new D,w=new D,A=new D;function T(L){w.fromBufferAttribute(a,L),A.copy(w);const E=o[L];g.copy(E),g.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(A,E);const R=y.dot(l[L])<0?-1:1;r.setXYZW(L,g.x,g.y,g.z,R)}for(let L=0,E=_.length;L<E;++L){const S=_[L],R=S.start,X=S.count;for(let B=R,q=R+X;B<q;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const a=new D,s=new D,r=new D,o=new D,l=new D,c=new D,f=new D,h=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),f.subVectors(r,s),h.subVectors(a,s),f.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)a.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),r.fromBufferAttribute(n,d+2),f.subVectors(r,s),h.subVectors(a,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Xe.fromBufferAttribute(t,n),Xe.normalize(),t.setXYZ(n,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let u=0;u<f;u++)d[v++]=c[p++]}return new Ai(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=t(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(a[l]=f,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(n))}const s=t.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,f=r.length;c<f;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new re,es=new rf,uc=new Nl,A_=new D,er=new D,nr=new D,ir=new D,hh=new D,fc=new D,hc=new St,dc=new St,pc=new St,w_=new D,C_=new D,R_=new D,mc=new D,gc=new D;class Sn extends He{constructor(t=new Jn,n=new of){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){fc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(hh.fromBufferAttribute(h,t),r?fc.addScaledVector(hh,f):fc.addScaledVector(hh.sub(n),f))}n.add(fc)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),es.copy(t.ray).recast(t.near),!(uc.containsPoint(es.origin)===!1&&(es.intersectSphere(uc,A_)===null||es.origin.distanceToSquared(A_)>(t.far-t.near)**2))&&(T_.copy(s).invert(),es.copy(t.ray).applyMatrix4(T_),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,es)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const m=d[v],u=r[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=g;y<w;y+=3){const A=o.getX(y),T=o.getX(y+1),L=o.getX(y+2);a=_c(this,u,t,i,c,f,h,A,T,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=o.getX(m),g=o.getX(m+1),y=o.getX(m+2);a=_c(this,r,t,i,c,f,h,_,g,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const m=d[v],u=r[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,w=g;y<w;y+=3){const A=y,T=y+1,L=y+2;a=_c(this,u,t,i,c,f,h,A,T,L),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=m,g=m+1,y=m+2;a=_c(this,r,t,i,c,f,h,_,g,y),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function lT(e,t,n,i,a,s,r,o){let l;if(t.side===Mn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===ka,o),l===null)return null;gc.copy(o),gc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(gc);return c<n.near||c>n.far?null:{distance:c,point:gc.clone(),object:e}}function _c(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,er),e.getVertexPosition(l,nr),e.getVertexPosition(c,ir);const f=lT(e,t,n,i,er,nr,ir,mc);if(f){a&&(hc.fromBufferAttribute(a,o),dc.fromBufferAttribute(a,l),pc.fromBufferAttribute(a,c),f.uv=Si.getInterpolation(mc,er,nr,ir,hc,dc,pc,new St)),s&&(hc.fromBufferAttribute(s,o),dc.fromBufferAttribute(s,l),pc.fromBufferAttribute(s,c),f.uv1=Si.getInterpolation(mc,er,nr,ir,hc,dc,pc,new St)),r&&(w_.fromBufferAttribute(r,o),C_.fromBufferAttribute(r,l),R_.fromBufferAttribute(r,c),f.normal=Si.getInterpolation(mc,er,nr,ir,w_,C_,R_,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};Si.getNormal(er,nr,ir,h.normal),f.face=h}return f}class co extends Jn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],f=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(f,3)),this.setAttribute("uv",new zn(h,2));function v(x,m,u,_,g,y,w,A,T,L,E){const S=y/T,R=w/L,X=y/2,B=w/2,q=A/2,$=T+1,N=L+1;let W=0,I=0;const Q=new D;for(let at=0;at<N;at++){const ht=at*R-B;for(let wt=0;wt<$;wt++){const Ft=wt*S-X;Q[x]=Ft*_,Q[m]=ht*g,Q[u]=q,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[u]=A>0?1:-1,f.push(Q.x,Q.y,Q.z),h.push(wt/T),h.push(1-at/L),W+=1}}for(let at=0;at<L;at++)for(let ht=0;ht<T;ht++){const wt=d+ht+$*at,Ft=d+ht+$*(at+1),j=d+(ht+1)+$*(at+1),it=d+(ht+1)+$*at;l.push(wt,Ft,it),l.push(Ft,j,it),I+=6}o.addGroup(p,I,E),p+=I,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function un(e){const t={};for(let n=0;n<e.length;n++){const i=Jr(e[n]);for(const a in i)t[a]=i[a]}return t}function cT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function tS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Ji={clone:Jr,merge:un};var uT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends Ya{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uT,this.fragmentShader=fT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=cT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class eS extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=$i}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ga=new D,D_=new St,L_=new St;class hn extends eS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-t/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ga.x,ga.y).multiplyScalar(-t/ga.z)}getViewSize(t,n){return this.getViewBounds(t,D_,L_),n.subVectors(L_,D_)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan($o*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ar=-90,sr=1;class hT extends He{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new hn(ar,sr,t,n);a.layers=this.layers,this.add(a);const s=new hn(ar,sr,t,n);s.layers=this.layers,this.add(s);const r=new hn(ar,sr,t,n);r.layers=this.layers,this.add(r);const o=new hn(ar,sr,t,n);o.layers=this.layers,this.add(o);const l=new hn(ar,sr,t,n);l.layers=this.layers,this.add(l);const c=new hn(ar,sr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===$i)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,f]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,s),t.setRenderTarget(i,1,a),t.render(n,r),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,a),t.render(n,f),t.setRenderTarget(h,d,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class nS extends gn{constructor(t,n,i,a,s,r,o,l,c,f){t=t!==void 0?t:[],n=n!==void 0?n:Kr,super(t,n,i,a,s,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dT extends On{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new nS(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:li}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new co(5,5,5),s=new Ce({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:fn});s.uniforms.tEquirect.value=n;const r=new Sn(a,s),o=n.minFilter;return n.minFilter===ps&&(n.minFilter=li),new hT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n,i,a){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}const dh=new D,pT=new D,mT=new Gt;class Sa{constructor(t=new D(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=dh.subVectors(i,n).cross(pT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(dh),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||mT.getNormalMatrix(t),a=this.coplanarPoint(dh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Nl,vc=new D;class ym{constructor(t=new Sa,n=new Sa,i=new Sa,a=new Sa,s=new Sa,r=new Sa){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=$i){const i=this.planes,a=t.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],f=a[5],h=a[6],d=a[7],p=a[8],v=a[9],x=a[10],m=a[11],u=a[12],_=a[13],g=a[14],y=a[15];if(i[0].setComponents(l-s,d-c,m-p,y-u).normalize(),i[1].setComponents(l+s,d+c,m+p,y+u).normalize(),i[2].setComponents(l+r,d+f,m+v,y+_).normalize(),i[3].setComponents(l-r,d-f,m-v,y-_).normalize(),i[4].setComponents(l-o,d-h,m-x,y-g).normalize(),n===$i)i[5].setComponents(l+o,d+h,m+x,y+g).normalize();else if(n===Uu)i[5].setComponents(o,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(vc.x=a.normal.x>0?t.max.x:t.min.x,vc.y=a.normal.y>0?t.max.y:t.min.y,vc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(vc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function gT(e){const t=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l._updateRange,d=l.updateRanges;if(e.bindBuffer(c,o),h.count===-1&&d.length===0&&e.bufferSubData(c,0,f),d.length!==0){for(let p=0,v=d.length;p<v;p++){const x=d[p];e.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(e.bufferSubData(c,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}class Is extends Jn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,f=l+1,h=t/o,d=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<f;u++){const _=u*d-r;for(let g=0;g<c;g++){const y=g*h-s;v.push(y,-_,0),x.push(0,0,1),m.push(g/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const g=_+c*u,y=_+c*(u+1),w=_+1+c*(u+1),A=_+1+c*u;p.push(g,y,A),p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new zn(v,3)),this.setAttribute("normal",new zn(x,3)),this.setAttribute("uv",new zn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}var _T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vT=`#ifdef USE_ALPHAHASH
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
#endif`,xT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bT=`#ifdef USE_AOMAP
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
#endif`,ET=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TT=`#ifdef USE_BATCHING
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
#endif`,AT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DT=`#ifdef USE_IRIDESCENCE
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
#endif`,LT=`#ifdef USE_BUMPMAP
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
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,HT=`#define PI 3.141592653589793
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
} // validated`,VT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GT=`vec3 transformedNormal = objectNormal;
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
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qT="gl_FragColor = linearToOutputTexel( gl_FragColor );",YT=`
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
}`,ZT=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QT=`#ifdef USE_ENVMAP
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
#endif`,$T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,tA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aA=`#ifdef USE_GRADIENTMAP
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
}`,sA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lA=`uniform bool receiveShadow;
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
#endif`,cA=`#ifdef USE_ENVMAP
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
#endif`,uA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pA=`PhysicalMaterial material;
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
#endif`,mA=`struct PhysicalMaterial {
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
}`,gA=`
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
#endif`,_A=`#if defined( RE_IndirectDiffuse )
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
#endif`,vA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AA=`#if defined( USE_POINTS_UV )
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
#endif`,wA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UA=`#ifdef USE_MORPHTARGETS
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
#endif`,PA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BA=`#ifdef USE_NORMALMAP
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
#endif`,HA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$A=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ew=`float getShadowMask() {
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
}`,nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iw=`#ifdef USE_SKINNING
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
#endif`,aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sw=`#ifdef USE_SKINNING
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
#endif`,rw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_w=`uniform sampler2D t2D;
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
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`#include <common>
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
}`,bw=`#if DEPTH_PACKING == 3200
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
}`,Ew=`#define DISTANCE
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
}`,Tw=`#define DISTANCE
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
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`uniform float scale;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Dw=`#include <common>
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Uw=`#define LAMBERT
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
}`,Pw=`#define LAMBERT
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
}`,Nw=`#define MATCAP
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
}`,Ow=`#define MATCAP
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
}`,zw=`#define NORMAL
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
}`,Iw=`#define NORMAL
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
}`,Fw=`#define PHONG
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
}`,Bw=`#define PHONG
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
}`,Hw=`#define STANDARD
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
}`,Vw=`#define STANDARD
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
}`,Gw=`#define TOON
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
}`,kw=`#define TOON
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
}`,Xw=`uniform float size;
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
}`,Ww=`uniform vec3 diffuse;
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
}`,jw=`#include <common>
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
}`,qw=`uniform vec3 color;
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
}`,Yw=`uniform float rotation;
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
}`,Zw=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:_T,alphahash_pars_fragment:vT,alphamap_fragment:xT,alphamap_pars_fragment:yT,alphatest_fragment:ST,alphatest_pars_fragment:MT,aomap_fragment:bT,aomap_pars_fragment:ET,batching_pars_vertex:TT,batching_vertex:AT,begin_vertex:wT,beginnormal_vertex:CT,bsdfs:RT,iridescence_fragment:DT,bumpmap_pars_fragment:LT,clipping_planes_fragment:UT,clipping_planes_pars_fragment:PT,clipping_planes_pars_vertex:NT,clipping_planes_vertex:OT,color_fragment:zT,color_pars_fragment:IT,color_pars_vertex:FT,color_vertex:BT,common:HT,cube_uv_reflection_fragment:VT,defaultnormal_vertex:GT,displacementmap_pars_vertex:kT,displacementmap_vertex:XT,emissivemap_fragment:WT,emissivemap_pars_fragment:jT,colorspace_fragment:qT,colorspace_pars_fragment:YT,envmap_fragment:ZT,envmap_common_pars_fragment:KT,envmap_pars_fragment:QT,envmap_pars_vertex:$T,envmap_physical_pars_fragment:cA,envmap_vertex:JT,fog_vertex:tA,fog_pars_vertex:eA,fog_fragment:nA,fog_pars_fragment:iA,gradientmap_pars_fragment:aA,lightmap_pars_fragment:sA,lights_lambert_fragment:rA,lights_lambert_pars_fragment:oA,lights_pars_begin:lA,lights_toon_fragment:uA,lights_toon_pars_fragment:fA,lights_phong_fragment:hA,lights_phong_pars_fragment:dA,lights_physical_fragment:pA,lights_physical_pars_fragment:mA,lights_fragment_begin:gA,lights_fragment_maps:_A,lights_fragment_end:vA,logdepthbuf_fragment:xA,logdepthbuf_pars_fragment:yA,logdepthbuf_pars_vertex:SA,logdepthbuf_vertex:MA,map_fragment:bA,map_pars_fragment:EA,map_particle_fragment:TA,map_particle_pars_fragment:AA,metalnessmap_fragment:wA,metalnessmap_pars_fragment:CA,morphinstance_vertex:RA,morphcolor_vertex:DA,morphnormal_vertex:LA,morphtarget_pars_vertex:UA,morphtarget_vertex:PA,normal_fragment_begin:NA,normal_fragment_maps:OA,normal_pars_fragment:zA,normal_pars_vertex:IA,normal_vertex:FA,normalmap_pars_fragment:BA,clearcoat_normal_fragment_begin:HA,clearcoat_normal_fragment_maps:VA,clearcoat_pars_fragment:GA,iridescence_pars_fragment:kA,opaque_fragment:XA,packing:WA,premultiplied_alpha_fragment:jA,project_vertex:qA,dithering_fragment:YA,dithering_pars_fragment:ZA,roughnessmap_fragment:KA,roughnessmap_pars_fragment:QA,shadowmap_pars_fragment:$A,shadowmap_pars_vertex:JA,shadowmap_vertex:tw,shadowmask_pars_fragment:ew,skinbase_vertex:nw,skinning_pars_vertex:iw,skinning_vertex:aw,skinnormal_vertex:sw,specularmap_fragment:rw,specularmap_pars_fragment:ow,tonemapping_fragment:lw,tonemapping_pars_fragment:cw,transmission_fragment:uw,transmission_pars_fragment:fw,uv_pars_fragment:hw,uv_pars_vertex:dw,uv_vertex:pw,worldpos_vertex:mw,background_vert:gw,background_frag:_w,backgroundCube_vert:vw,backgroundCube_frag:xw,cube_vert:yw,cube_frag:Sw,depth_vert:Mw,depth_frag:bw,distanceRGBA_vert:Ew,distanceRGBA_frag:Tw,equirect_vert:Aw,equirect_frag:ww,linedashed_vert:Cw,linedashed_frag:Rw,meshbasic_vert:Dw,meshbasic_frag:Lw,meshlambert_vert:Uw,meshlambert_frag:Pw,meshmatcap_vert:Nw,meshmatcap_frag:Ow,meshnormal_vert:zw,meshnormal_frag:Iw,meshphong_vert:Fw,meshphong_frag:Bw,meshphysical_vert:Hw,meshphysical_frag:Vw,meshtoon_vert:Gw,meshtoon_frag:kw,points_vert:Xw,points_frag:Ww,shadow_vert:jw,shadow_frag:qw,sprite_vert:Yw,sprite_frag:Zw},ft={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},_i={basic:{uniforms:un([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:un([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new yt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:un([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:un([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:un([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:un([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:un([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:un([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:un([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:un([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:un([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:un([ft.common,ft.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:un([ft.lights,ft.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};_i.physical={uniforms:un([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const xc={r:0,b:0,g:0},is=new Ci,Kw=new re;function Qw(e,t,n,i,a,s,r){const o=new yt(0);let l=s===!0?0:1,c,f,h=null,d=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:t).get(g)),g}function x(_){let g=!1;const y=v(_);y===null?u(o,l):y&&y.isColor&&(u(y,1),g=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,g){const y=v(g);y&&(y.isCubeTexture||y.mapping===af)?(f===void 0&&(f=new Sn(new co(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Jr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),is.copy(g.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Kw.makeRotationFromEuler(is)),f.material.toneMapped=te.getTransfer(y.colorSpace)!==fe,(h!==y||d!==y.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,h=y,d=y.version,p=e.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Sn(new Is(2,2),new Ce({name:"BackgroundMaterial",uniforms:Jr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(xc,tS(e)),i.buffers.color.setClear(xc.r,xc.g,xc.b,g,r)}return{getClearColor:function(){return o},setClearColor:function(_,g=1){o.set(_),l=g,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:x,addToRenderList:m}}function $w(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=d(null);let s=a,r=!1;function o(S,R,X,B,q){let $=!1;const N=h(B,X,R);s!==N&&(s=N,c(s.object)),$=p(S,B,X,q),$&&v(S,B,X,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,y(S,R,X,B),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function f(S){return e.deleteVertexArray(S)}function h(S,R,X){const B=X.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let $=q[R.id];$===void 0&&($={},q[R.id]=$);let N=$[B];return N===void 0&&(N=d(l()),$[B]=N),N}function d(S){const R=[],X=[],B=[];for(let q=0;q<n;q++)R[q]=0,X[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,R,X,B){const q=s.attributes,$=R.attributes;let N=0;const W=X.getAttributes();for(const I in W)if(W[I].location>=0){const at=q[I];let ht=$[I];if(ht===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),at===void 0||at.attribute!==ht||ht&&at.data!==ht.data)return!0;N++}return s.attributesNum!==N||s.index!==B}function v(S,R,X,B){const q={},$=R.attributes;let N=0;const W=X.getAttributes();for(const I in W)if(W[I].location>=0){let at=$[I];at===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const ht={};ht.attribute=at,at&&at.data&&(ht.data=at.data),q[I]=ht,N++}s.attributes=q,s.attributesNum=N,s.index=B}function x(){const S=s.newAttributes;for(let R=0,X=S.length;R<X;R++)S[R]=0}function m(S){u(S,0)}function u(S,R){const X=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;X[S]=1,B[S]===0&&(e.enableVertexAttribArray(S),B[S]=1),q[S]!==R&&(e.vertexAttribDivisor(S,R),q[S]=R)}function _(){const S=s.newAttributes,R=s.enabledAttributes;for(let X=0,B=R.length;X<B;X++)R[X]!==S[X]&&(e.disableVertexAttribArray(X),R[X]=0)}function g(S,R,X,B,q,$,N){N===!0?e.vertexAttribIPointer(S,R,X,q,$):e.vertexAttribPointer(S,R,X,B,q,$)}function y(S,R,X,B){x();const q=B.attributes,$=X.getAttributes(),N=R.defaultAttributeValues;for(const W in $){const I=$[W];if(I.location>=0){let Q=q[W];if(Q===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const at=Q.normalized,ht=Q.itemSize,wt=t.get(Q);if(wt===void 0)continue;const Ft=wt.buffer,j=wt.type,it=wt.bytesPerElement,gt=j===e.INT||j===e.UNSIGNED_INT||Q.gpuType===um;if(Q.isInterleavedBufferAttribute){const st=Q.data,Mt=st.stride,Ct=Q.offset;if(st.isInstancedInterleavedBuffer){for(let zt=0;zt<I.locationSize;zt++)u(I.location+zt,st.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let zt=0;zt<I.locationSize;zt++)m(I.location+zt);e.bindBuffer(e.ARRAY_BUFFER,Ft);for(let zt=0;zt<I.locationSize;zt++)g(I.location+zt,ht/I.locationSize,j,at,Mt*it,(Ct+ht/I.locationSize*zt)*it,gt)}else{if(Q.isInstancedBufferAttribute){for(let st=0;st<I.locationSize;st++)u(I.location+st,Q.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let st=0;st<I.locationSize;st++)m(I.location+st);e.bindBuffer(e.ARRAY_BUFFER,Ft);for(let st=0;st<I.locationSize;st++)g(I.location+st,ht/I.locationSize,j,at,ht*it,ht/I.locationSize*st*it,gt)}}else if(N!==void 0){const at=N[W];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(I.location,at);break;case 3:e.vertexAttrib3fv(I.location,at);break;case 4:e.vertexAttrib4fv(I.location,at);break;default:e.vertexAttrib1fv(I.location,at)}}}}_()}function w(){L();for(const S in i){const R=i[S];for(const X in R){const B=R[X];for(const q in B)f(B[q].object),delete B[q];delete R[X]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const X in R){const B=R[X];for(const q in B)f(B[q].object),delete B[q];delete R[X]}delete i[S.id]}function T(S){for(const R in i){const X=i[R];if(X[S.id]===void 0)continue;const B=X[S.id];for(const q in B)f(B[q].object),delete B[q];delete X[S.id]}}function L(){E(),r=!0,s!==a&&(s=a,c(s.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Jw(e,t,n){let i;function a(c){i=c}function s(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,h){h!==0&&(e.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=f[v];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)r(c[v],f[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];for(let x=0;x<d.length;x++)n.update(v,i,d[x])}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tC(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==Kn&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const T=A===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==sa&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mi&&!T)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),x=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),u=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:y,maxSamples:w}}function eC(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new Sa,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||a;return a=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=e.get(h);if(!a||v===null||v.length===0||s&&!m)s?f(null):c();else{const _=s?0:i,g=_*4;let y=u.clippingState||null;l.value=y,y=f(v,d,g,p);for(let w=0;w!==g;++w)y[w]=n[w];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,d,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,y=p;g!==x;++g,y+=4)r.copy(h[g]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function nC(e){let t=new WeakMap;function n(r,o){return o===Td?r.mapping=Kr:o===Ad&&(r.mapping=Qr),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Td||o===Ad)if(t.has(r)){const l=t.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new dT(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class aS extends eS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ar=4,U_=[.125,.215,.35,.446,.526,.582],us=20,ph=new aS,P_=new yt;let mh=null,gh=0,_h=0,vh=!1;const ls=(1+Math.sqrt(5))/2,rr=1/ls,N_=[new D(-ls,rr,0),new D(ls,rr,0),new D(-rr,0,ls),new D(rr,0,ls),new D(0,ls,-rr),new D(0,ls,rr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class O_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,a,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,t.scissorTest=!1,yc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Kr||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:ui,format:Kn,colorSpace:qa,depthBuffer:!1},a=z_(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iC(s)),this._blurMaterial=aC(s,t,n)}return a}_compileMaterial(t){const n=new Sn(this._lodPlanes[0],t);this._renderer.compile(n,ph)}_sceneToCubeUV(t,n,i,a){const o=new hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(P_),f.toneMapping=Fa,f.autoClear=!1;const p=new of({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),v=new Sn(new co,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(P_),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):_===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;yc(a,_*g,u>2?g:0,g,g),f.setRenderTarget(a),x&&f.render(v,o),f.render(t,o)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Kr||t.mapping===Qr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new Sn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;yc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,ph)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=N_[(a-s-1)%N_.length];this._blur(t,s-1,s,r,o)}n.autoClear=i}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Sn(this._lodPlanes[a],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*us-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):us;m>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const u=[];let _=0;for(let T=0;T<us;++T){const L=T/x,E=Math.exp(-L*L/2);u.push(E),T===0?_+=E:T<m&&(_+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const y=this._sizeLods[a],w=3*y*(a>g-Ar?a-g+Ar:0),A=4*(this._cubeSize-y);yc(n,w,A,3*y,2*y),l.setRenderTarget(n),l.render(h,ph)}}function iC(e){const t=[],n=[],i=[];let a=e;const s=e-Ar+1+U_.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);n.push(o);let l=1/o;r>e-Ar?l=U_[r-e+Ar-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,v=6,x=3,m=2,u=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),y=new Float32Array(u*v*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,L=A>2?0:-1,E=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];_.set(E,x*v*A),g.set(d,m*v*A);const S=[A,A,A,A,A,A];y.set(S,u*v*A)}const w=new Jn;w.setAttribute("position",new Ai(_,x)),w.setAttribute("uv",new Ai(g,m)),w.setAttribute("faceIndex",new Ai(y,u)),t.push(w),a>Ar&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function z_(e,t,n){const i=new On(e,t,n);return i.texture.mapping=af,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yc(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function aC(e,t,n){const i=new Float32Array(us),a=new D(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sm(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function I_(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sm(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function F_(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Sm(){return`

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
	`}function sC(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Td||l===Ad,f=l===Kr||l===Qr;if(c||f){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new O_(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||f&&p&&a(p)?(n===null&&(n=new O_(e)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function rC(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&tl("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function oC(e,t,n,i){const a={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)t.remove(x[m])}d.removeEventListener("dispose",r),delete a[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return a[d.id]===!0||(d.addEventListener("dispose",r),a[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)t.update(d[v],e.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)t.update(x[m],e.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,y=_.length;g<y;g+=3){const w=_[g+0],A=_[g+1],T=_[g+2];d.push(w,A,A,T,T,w)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const w=g+0,A=g+1,T=g+2;d.push(w,A,A,T,T,w)}}else return;const m=new(qy(d)?Jy:$y)(d,1);m.version=x;const u=s.get(h);u&&t.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function lC(e,t,n){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,p){e.drawElements(i,p,s,d*r),n.update(p,i,1)}function c(d,p,v){v!==0&&(e.drawElementsInstanced(i,p,s,d*r,v),n.update(p,i,v))}function f(d,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function h(d,p,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,v);let u=0;for(let _=0;_<v;_++)u+=p[_];for(let _=0;_<x.length;_++)n.update(u,i,x[_])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function cC(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function uC(e,t,n){const i=new WeakMap,a=new Be;function s(r,o,l){const c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let E=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let g=0;p===!0&&(g=1),v===!0&&(g=2),x===!0&&(g=3);let y=o.attributes.position.count*g,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*w*4*h),T=new Zy(A,y,w,h);T.type=Mi,T.needsUpdate=!0;const L=g*4;for(let S=0;S<h;S++){const R=m[S],X=u[S],B=_[S],q=y*w*4*S;for(let $=0;$<R.count;$++){const N=$*L;p===!0&&(a.fromBufferAttribute(R,$),A[q+N+0]=a.x,A[q+N+1]=a.y,A[q+N+2]=a.z,A[q+N+3]=0),v===!0&&(a.fromBufferAttribute(X,$),A[q+N+4]=a.x,A[q+N+5]=a.y,A[q+N+6]=a.z,A[q+N+7]=0),x===!0&&(a.fromBufferAttribute(B,$),A[q+N+8]=a.x,A[q+N+9]=a.y,A[q+N+10]=a.z,A[q+N+11]=B.itemSize===4?a.w:1)}}d={count:h,texture:T,size:new St(y,w)},i.set(o,d),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function fC(e,t,n,i){let a=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=t.get(l,f);if(a.get(h)!==c&&(t.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;a.get(d)!==c&&(d.update(),a.set(d,c))}return h}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}class Mm extends gn{constructor(t,n,i,a,s,r,o,l,c,f=Br){if(f!==Br&&f!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Br&&(i=ws),i===void 0&&f===Rs&&(i=Cs),super(null,a,s,r,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sS=new gn,B_=new Mm(1,1),rS=new Zy,oS=new $E,lS=new nS,H_=[],V_=[],G_=new Float32Array(16),k_=new Float32Array(9),X_=new Float32Array(4);function uo(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=H_[a];if(s===void 0&&(s=new Float32Array(a),H_[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Ge(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ke(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function lf(e,t){let n=V_[t];n===void 0&&(n=new Int32Array(t),V_[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function hC(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function dC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ge(n,t))return;e.uniform2fv(this.addr,t),ke(n,t)}}function pC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ge(n,t))return;e.uniform3fv(this.addr,t),ke(n,t)}}function mC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ge(n,t))return;e.uniform4fv(this.addr,t),ke(n,t)}}function gC(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ge(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ke(n,t)}else{if(Ge(n,i))return;X_.set(i),e.uniformMatrix2fv(this.addr,!1,X_),ke(n,i)}}function _C(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ge(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ke(n,t)}else{if(Ge(n,i))return;k_.set(i),e.uniformMatrix3fv(this.addr,!1,k_),ke(n,i)}}function vC(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ge(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ke(n,t)}else{if(Ge(n,i))return;G_.set(i),e.uniformMatrix4fv(this.addr,!1,G_),ke(n,i)}}function xC(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function yC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ge(n,t))return;e.uniform2iv(this.addr,t),ke(n,t)}}function SC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ge(n,t))return;e.uniform3iv(this.addr,t),ke(n,t)}}function MC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ge(n,t))return;e.uniform4iv(this.addr,t),ke(n,t)}}function bC(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function EC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ge(n,t))return;e.uniform2uiv(this.addr,t),ke(n,t)}}function TC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ge(n,t))return;e.uniform3uiv(this.addr,t),ke(n,t)}}function AC(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ge(n,t))return;e.uniform4uiv(this.addr,t),ke(n,t)}}function wC(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(B_.compareFunction=Wy,s=B_):s=sS,n.setTexture2D(t||s,a)}function CC(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||oS,a)}function RC(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||lS,a)}function DC(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||rS,a)}function LC(e){switch(e){case 5126:return hC;case 35664:return dC;case 35665:return pC;case 35666:return mC;case 35674:return gC;case 35675:return _C;case 35676:return vC;case 5124:case 35670:return xC;case 35667:case 35671:return yC;case 35668:case 35672:return SC;case 35669:case 35673:return MC;case 5125:return bC;case 36294:return EC;case 36295:return TC;case 36296:return AC;case 35678:case 36198:case 36298:case 36306:case 35682:return wC;case 35679:case 36299:case 36307:return CC;case 35680:case 36300:case 36308:case 36293:return RC;case 36289:case 36303:case 36311:case 36292:return DC}}function UC(e,t){e.uniform1fv(this.addr,t)}function PC(e,t){const n=uo(t,this.size,2);e.uniform2fv(this.addr,n)}function NC(e,t){const n=uo(t,this.size,3);e.uniform3fv(this.addr,n)}function OC(e,t){const n=uo(t,this.size,4);e.uniform4fv(this.addr,n)}function zC(e,t){const n=uo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function IC(e,t){const n=uo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function FC(e,t){const n=uo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function BC(e,t){e.uniform1iv(this.addr,t)}function HC(e,t){e.uniform2iv(this.addr,t)}function VC(e,t){e.uniform3iv(this.addr,t)}function GC(e,t){e.uniform4iv(this.addr,t)}function kC(e,t){e.uniform1uiv(this.addr,t)}function XC(e,t){e.uniform2uiv(this.addr,t)}function WC(e,t){e.uniform3uiv(this.addr,t)}function jC(e,t){e.uniform4uiv(this.addr,t)}function qC(e,t,n){const i=this.cache,a=t.length,s=lf(n,a);Ge(i,s)||(e.uniform1iv(this.addr,s),ke(i,s));for(let r=0;r!==a;++r)n.setTexture2D(t[r]||sS,s[r])}function YC(e,t,n){const i=this.cache,a=t.length,s=lf(n,a);Ge(i,s)||(e.uniform1iv(this.addr,s),ke(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||oS,s[r])}function ZC(e,t,n){const i=this.cache,a=t.length,s=lf(n,a);Ge(i,s)||(e.uniform1iv(this.addr,s),ke(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||lS,s[r])}function KC(e,t,n){const i=this.cache,a=t.length,s=lf(n,a);Ge(i,s)||(e.uniform1iv(this.addr,s),ke(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||rS,s[r])}function QC(e){switch(e){case 5126:return UC;case 35664:return PC;case 35665:return NC;case 35666:return OC;case 35674:return zC;case 35675:return IC;case 35676:return FC;case 5124:case 35670:return BC;case 35667:case 35671:return HC;case 35668:case 35672:return VC;case 35669:case 35673:return GC;case 5125:return kC;case 36294:return XC;case 36295:return WC;case 36296:return jC;case 35678:case 36198:case 36298:case 36306:case 35682:return qC;case 35679:case 36299:case 36307:return YC;case 35680:case 36300:case 36308:case 36293:return ZC;case 36289:case 36303:case 36311:case 36292:return KC}}class $C{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LC(n.type)}}class JC{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=QC(n.type)}}class t2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function W_(e,t){e.seq.push(t),e.map[t.id]=t}function e2(e,t,n){const i=e.name,a=i.length;for(xh.lastIndex=0;;){const s=xh.exec(i),r=xh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){W_(n,c===void 0?new $C(o,e,t):new JC(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new t2(o),W_(n,h)),n=h}}}class $c{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=t.getActiveUniform(n,a),r=t.getUniformLocation(n,s.name);e2(s,r,this)}}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function j_(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const n2=37297;let i2=0;function a2(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function s2(e){const t=te.getPrimaries(te.workingColorSpace),n=te.getPrimaries(e);let i;switch(t===n?i="":t===Lu&&n===Du?i="LinearDisplayP3ToLinearSRGB":t===Du&&n===Lu&&(i="LinearSRGBToLinearDisplayP3"),e){case qa:case sf:return[i,"LinearTransferOETF"];case si:case vm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function q_(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+a2(e.getShaderSource(t),r)}else return a}function r2(e,t){const n=s2(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function o2(e,t){let n;switch(t){case Dy:n="Linear";break;case Ly:n="Reinhard";break;case Uy:n="Cineon";break;case Py:n="ACESFilmic";break;case cm:n="AgX";break;case Ny:n="Neutral";break;case _E:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sc=new D;function l2(){te.getLuminanceCoefficients(Sc);const e=Sc.x.toFixed(4),t=Sc.y.toFixed(4),n=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function u2(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function f2(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function No(e){return e!==""}function Y_(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Z_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h2=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(e){return e.replace(h2,p2)}const d2=new Map;function p2(e,t){let n=Vt[t];if(n===void 0){const i=d2.get(t);if(i!==void 0)n=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return tp(n)}const m2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(e){return e.replace(m2,g2)}function g2(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Q_(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function _2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ty?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===qb?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function v2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Kr:case Qr:t="ENVMAP_TYPE_CUBE";break;case af:t="ENVMAP_TYPE_CUBE_UV";break}return t}function x2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Qr:t="ENVMAP_MODE_REFRACTION";break}return t}function y2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ry:t="ENVMAP_BLENDING_MULTIPLY";break;case mE:t="ENVMAP_BLENDING_MIX";break;case gE:t="ENVMAP_BLENDING_ADD";break}return t}function S2(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function M2(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=_2(n),c=v2(n),f=x2(n),h=y2(n),d=S2(n),p=c2(n),v=u2(s),x=a.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(No).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(No).join(`
`),u.length>0&&(u+=`
`)):(m=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),u=[Q_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fa?"#define TONE_MAPPING":"",n.toneMapping!==Fa?Vt.tonemapping_pars_fragment:"",n.toneMapping!==Fa?o2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,r2("linearToOutputTexel",n.outputColorSpace),l2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),r=tp(r),r=Y_(r,n),r=Z_(r,n),o=tp(o),o=Y_(o,n),o=Z_(o,n),r=K_(r),o=K_(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+m+r,y=_+u+o,w=j_(a,a.VERTEX_SHADER,g),A=j_(a,a.FRAGMENT_SHADER,y);a.attachShader(x,w),a.attachShader(x,A),n.index0AttributeName!==void 0?a.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function T(R){if(e.debug.checkShaderErrors){const X=a.getProgramInfoLog(x).trim(),B=a.getShaderInfoLog(w).trim(),q=a.getShaderInfoLog(A).trim();let $=!0,N=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,w,A);else{const W=q_(a,w,"vertex"),I=q_(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+W+`
`+I)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(B===""||q==="")&&(N=!1);N&&(R.diagnostics={runnable:$,programLog:X,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:u}})}a.deleteShader(w),a.deleteShader(A),L=new $c(a,x),E=f2(a,x)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(x,n2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=i2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let b2=0;class E2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new T2(t),n.set(t,i)),i}}class T2{constructor(t){this.id=b2++,this.code=t,this.usedTimes=0}}function A2(e,t,n,i,a,s,r){const o=new Ky,l=new E2,c=new Set,f=[],h=a.logarithmicDepthBuffer,d=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,R,X,B){const q=X.fog,$=B.geometry,N=E.isMeshStandardMaterial?X.environment:null,W=(E.isMeshStandardMaterial?n:t).get(E.envMap||N),I=W&&W.mapping===af?W.image.height:null,Q=v[E.type];E.precision!==null&&(p=a.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const at=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=at!==void 0?at.length:0;let wt=0;$.morphAttributes.position!==void 0&&(wt=1),$.morphAttributes.normal!==void 0&&(wt=2),$.morphAttributes.color!==void 0&&(wt=3);let Ft,j,it,gt;if(Q){const ee=_i[Q];Ft=ee.vertexShader,j=ee.fragmentShader}else Ft=E.vertexShader,j=E.fragmentShader,l.update(E),it=l.getVertexShaderID(E),gt=l.getFragmentShaderID(E);const st=e.getRenderTarget(),Mt=B.isInstancedMesh===!0,Ct=B.isBatchedMesh===!0,zt=!!E.map,me=!!E.matcap,U=!!W,ve=!!E.aoMap,Kt=!!E.lightMap,$t=!!E.bumpMap,bt=!!E.normalMap,xe=!!E.displacementMap,Rt=!!E.emissiveMap,Pt=!!E.metalnessMap,C=!!E.roughnessMap,M=E.anisotropy>0,k=E.clearcoat>0,tt=E.dispersion>0,nt=E.iridescence>0,et=E.sheen>0,At=E.transmission>0,ut=M&&!!E.anisotropyMap,pt=k&&!!E.clearcoatMap,Nt=k&&!!E.clearcoatNormalMap,rt=k&&!!E.clearcoatRoughnessMap,dt=nt&&!!E.iridescenceMap,qt=nt&&!!E.iridescenceThicknessMap,Dt=et&&!!E.sheenColorMap,_t=et&&!!E.sheenRoughnessMap,It=!!E.specularMap,Ht=!!E.specularColorMap,se=!!E.specularIntensityMap,O=At&&!!E.transmissionMap,ot=At&&!!E.thicknessMap,Y=!!E.gradientMap,Z=!!E.alphaMap,ct=E.alphaTest>0,Lt=!!E.alphaHash,Qt=!!E.extensions;let De=Fa;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(De=e.toneMapping);const Ke={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:Ft,fragmentShader:j,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&B._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&B.instanceColor!==null,instancingMorph:Mt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?e.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qa,alphaToCoverage:!!E.alphaToCoverage,map:zt,matcap:me,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:I,aoMap:ve,lightMap:Kt,bumpMap:$t,normalMap:bt,displacementMap:d&&xe,emissiveMap:Rt,normalMapObjectSpace:bt&&E.normalMapType===SE,normalMapTangentSpace:bt&&E.normalMapType===_m,metalnessMap:Pt,roughnessMap:C,anisotropy:M,anisotropyMap:ut,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:rt,dispersion:tt,iridescence:nt,iridescenceMap:dt,iridescenceThicknessMap:qt,sheen:et,sheenColorMap:Dt,sheenRoughnessMap:_t,specularMap:It,specularColorMap:Ht,specularIntensityMap:se,transmission:At,transmissionMap:O,thicknessMap:ot,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Fr&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ct,alphaHash:Lt,combine:E.combine,mapUv:zt&&x(E.map.channel),aoMapUv:ve&&x(E.aoMap.channel),lightMapUv:Kt&&x(E.lightMap.channel),bumpMapUv:$t&&x(E.bumpMap.channel),normalMapUv:bt&&x(E.normalMap.channel),displacementMapUv:xe&&x(E.displacementMap.channel),emissiveMapUv:Rt&&x(E.emissiveMap.channel),metalnessMapUv:Pt&&x(E.metalnessMap.channel),roughnessMapUv:C&&x(E.roughnessMap.channel),anisotropyMapUv:ut&&x(E.anisotropyMap.channel),clearcoatMapUv:pt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(E.sheenRoughnessMap.channel),specularMapUv:It&&x(E.specularMap.channel),specularColorMapUv:Ht&&x(E.specularColorMap.channel),specularIntensityMapUv:se&&x(E.specularIntensityMap.channel),transmissionMapUv:O&&x(E.transmissionMap.channel),thicknessMapUv:ot&&x(E.thicknessMap.channel),alphaMapUv:Z&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(bt||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(zt||Z),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:De,decodeVideoTexture:zt&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===fe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===oi,flipSided:E.side===Mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Qt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&E.extensions.multiDraw===!0||Ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)S.push(R),S.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(_(S,E),g(S,E),S.push(e.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function g(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),E.push(o.mask)}function y(E){const S=v[E.type];let R;if(S){const X=_i[S];R=Ji.clone(X.uniforms)}else R=E.uniforms;return R}function w(E,S){let R;for(let X=0,B=f.length;X<B;X++){const q=f[X];if(q.cacheKey===S){R=q,++R.usedTimes;break}}return R===void 0&&(R=new M2(e,S,E,s),f.push(R)),R}function A(E){if(--E.usedTimes===0){const S=f.indexOf(E);f[S]=f[f.length-1],f.pop(),E.destroy()}}function T(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:f,dispose:L}}function w2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function C2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function $_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function J_(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(h,d,p,v,x,m){let u=e[t];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},e[t]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=x,u.group=m),t++,u}function o(h,d,p,v,x,m){const u=r(h,d,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(h,d,p,v,x,m){const u=r(h,d,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||C2),i.length>1&&i.sort(d||$_),a.length>1&&a.sort(d||$_)}function f(){for(let h=t,d=e.length;h<d;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:f,sort:c}}function R2(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new J_,e.set(i,[r])):a>=s.length?(r=new J_,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function D2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new D,color:new yt};break;case"SpotLight":n={position:new D,direction:new D,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new D,halfWidth:new D,halfHeight:new D};break}return e[t.id]=n,n}}}function L2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let U2=0;function P2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function N2(e){const t=new D2,n=L2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const a=new D,s=new re,r=new re;function o(c){let f=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,x=0,m=0,u=0,_=0,g=0,y=0,w=0,A=0,T=0;c.sort(P2);for(let E=0,S=c.length;E<S;E++){const R=c[E],X=R.color,B=R.intensity,q=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=X.r*B,h+=X.g*B,d+=X.b*B;else if(R.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(R.sh.coefficients[N],B);T++}else if(R.isDirectionalLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,I=n.get(R);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=R.shadow.matrix,_++}i.directional[p]=N,p++}else if(R.isSpotLight){const N=t.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(X).multiplyScalar(B),N.distance=q,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,i.spot[x]=N;const W=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,W.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[x]=W.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=$,y++}x++}else if(R.isRectAreaLight){const N=t.get(R);N.color.copy(X).multiplyScalar(B),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=N,m++}else if(R.isPointLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const W=R.shadow,I=n.get(R);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,I.shadowCameraNear=W.camera.near,I.shadowCameraFar=W.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=R.shadow.matrix,g++}i.point[v]=N,v++}else if(R.isHemisphereLight){const N=t.get(R);N.skyColor.copy(R.color).multiplyScalar(B),N.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[u]=N,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==_||L.numPointShadows!==g||L.numSpotShadows!==y||L.numSpotMaps!==w||L.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,L.directionalLength=p,L.pointLength=v,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=_,L.numPointShadows=g,L.numSpotShadows=y,L.numSpotMaps=w,L.numLightProbes=T,i.version=U2++)}function l(c,f){let h=0,d=0,p=0,v=0,x=0;const m=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),h++}else if(g.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),r.identity(),s.copy(g.matrixWorld),s.premultiply(m),r.extractRotation(s),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),v++}else if(g.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function t0(e){const t=new N2(e),n=[],i=[];function a(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function O2(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new t0(e),t.set(a,[o])):s>=r.length?(o=new t0(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class z2 extends Ya{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class I2 extends Ya{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B2=`uniform sampler2D shadow_pass;
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
}`;function H2(e,t,n){let i=new ym;const a=new St,s=new St,r=new Be,o=new z2({depthPacking:yE}),l=new I2,c={},f=n.maxTextureSize,h={[ka]:Mn,[Mn]:ka,[oi]:oi},d=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:F2,fragmentShader:B2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Jn;v.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Sn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ty;let u=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=e.getRenderTarget(),S=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),X=e.state;X.setBlending(fn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const B=u!==Gi&&this.type===Gi,q=u===Gi&&this.type!==Gi;for(let $=0,N=A.length;$<N;$++){const W=A[$],I=W.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const Q=I.getFrameExtents();if(a.multiply(Q),s.copy(I.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/Q.x),a.x=s.x*Q.x,I.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/Q.y),a.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||B===!0||q===!0){const ht=this.type!==Gi?{minFilter:ln,magFilter:ln}:{};I.map!==null&&I.map.dispose(),I.map=new On(a.x,a.y,ht),I.map.texture.name=W.name+".shadowMap",I.camera.updateProjectionMatrix()}e.setRenderTarget(I.map),e.clear();const at=I.getViewportCount();for(let ht=0;ht<at;ht++){const wt=I.getViewport(ht);r.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),X.viewport(r),I.updateMatrices(W,ht),i=I.getFrustum(),y(T,L,I.camera,W,this.type)}I.isPointLightShadow!==!0&&this.type===Gi&&_(I,L),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,S,R)};function _(A,T){const L=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new On(a.x,a.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(T,null,L,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(T,null,L,p,x,null)}function g(A,T,L,E){let S=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=L.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=S.uuid,B=T.uuid;let q=c[X];q===void 0&&(q={},c[X]=q);let $=q[B];$===void 0&&($=S.clone(),q[B]=$,T.addEventListener("dispose",w)),S=$}if(S.visible=T.visible,S.wireframe=T.wireframe,E===Gi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=e.properties.get(S);X.light=L}return S}function y(A,T,L,E,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const B=t.update(A),q=A.material;if(Array.isArray(q)){const $=B.groups;for(let N=0,W=$.length;N<W;N++){const I=$[N],Q=q[I.materialIndex];if(Q&&Q.visible){const at=g(A,Q,E,S);A.onBeforeShadow(e,A,T,L,B,at,I),e.renderBufferDirect(L,null,B,at,A,I),A.onAfterShadow(e,A,T,L,B,at,I)}}}else if(q.visible){const $=g(A,q,E,S);A.onBeforeShadow(e,A,T,L,B,$,null),e.renderBufferDirect(L,null,B,$,A,null),A.onAfterShadow(e,A,T,L,B,$,null)}}const X=A.children;for(let B=0,q=X.length;B<q;B++)y(X[B],T,L,E,S)}function w(A){A.target.removeEventListener("dispose",w);for(const L in c){const E=c[L],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function V2(e){function t(){let O=!1;const ot=new Be;let Y=null;const Z=new Be(0,0,0,0);return{setMask:function(ct){Y!==ct&&!O&&(e.colorMask(ct,ct,ct,ct),Y=ct)},setLocked:function(ct){O=ct},setClear:function(ct,Lt,Qt,De,Ke){Ke===!0&&(ct*=De,Lt*=De,Qt*=De),ot.set(ct,Lt,Qt,De),Z.equals(ot)===!1&&(e.clearColor(ct,Lt,Qt,De),Z.copy(ot))},reset:function(){O=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let O=!1,ot=null,Y=null,Z=null;return{setTest:function(ct){ct?gt(e.DEPTH_TEST):st(e.DEPTH_TEST)},setMask:function(ct){ot!==ct&&!O&&(e.depthMask(ct),ot=ct)},setFunc:function(ct){if(Y!==ct){switch(ct){case lE:e.depthFunc(e.NEVER);break;case cE:e.depthFunc(e.ALWAYS);break;case uE:e.depthFunc(e.LESS);break;case Cu:e.depthFunc(e.LEQUAL);break;case fE:e.depthFunc(e.EQUAL);break;case hE:e.depthFunc(e.GEQUAL);break;case dE:e.depthFunc(e.GREATER);break;case pE:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Y=ct}},setLocked:function(ct){O=ct},setClear:function(ct){Z!==ct&&(e.clearDepth(ct),Z=ct)},reset:function(){O=!1,ot=null,Y=null,Z=null}}}function i(){let O=!1,ot=null,Y=null,Z=null,ct=null,Lt=null,Qt=null,De=null,Ke=null;return{setTest:function(ee){O||(ee?gt(e.STENCIL_TEST):st(e.STENCIL_TEST))},setMask:function(ee){ot!==ee&&!O&&(e.stencilMask(ee),ot=ee)},setFunc:function(ee,Ui,pi){(Y!==ee||Z!==Ui||ct!==pi)&&(e.stencilFunc(ee,Ui,pi),Y=ee,Z=Ui,ct=pi)},setOp:function(ee,Ui,pi){(Lt!==ee||Qt!==Ui||De!==pi)&&(e.stencilOp(ee,Ui,pi),Lt=ee,Qt=Ui,De=pi)},setLocked:function(ee){O=ee},setClear:function(ee){Ke!==ee&&(e.clearStencil(ee),Ke=ee)},reset:function(){O=!1,ot=null,Y=null,Z=null,ct=null,Lt=null,Qt=null,De=null,Ke=null}}}const a=new t,s=new n,r=new i,o=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,y=null,w=null,A=new yt(0,0,0),T=0,L=!1,E=null,S=null,R=null,X=null,B=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,N=0;const W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=N>=2);let I=null,Q={};const at=e.getParameter(e.SCISSOR_BOX),ht=e.getParameter(e.VIEWPORT),wt=new Be().fromArray(at),Ft=new Be().fromArray(ht);function j(O,ot,Y,Z){const ct=new Uint8Array(4),Lt=e.createTexture();e.bindTexture(O,Lt),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Qt=0;Qt<Y;Qt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(ot,0,e.RGBA,1,1,Z,0,e.RGBA,e.UNSIGNED_BYTE,ct):e.texImage2D(ot+Qt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ct);return Lt}const it={};it[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),it[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),it[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),r.setClear(0),gt(e.DEPTH_TEST),s.setFunc(Cu),$t(!1),bt(r_),gt(e.CULL_FACE),ve(fn);function gt(O){c[O]!==!0&&(e.enable(O),c[O]=!0)}function st(O){c[O]!==!1&&(e.disable(O),c[O]=!1)}function Mt(O,ot){return f[O]!==ot?(e.bindFramebuffer(O,ot),f[O]=ot,O===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=ot),O===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=ot),!0):!1}function Ct(O,ot){let Y=d,Z=!1;if(O){Y=h.get(ot),Y===void 0&&(Y=[],h.set(ot,Y));const ct=O.textures;if(Y.length!==ct.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let Lt=0,Qt=ct.length;Lt<Qt;Lt++)Y[Lt]=e.COLOR_ATTACHMENT0+Lt;Y.length=ct.length,Z=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,Z=!0);Z&&e.drawBuffers(Y)}function zt(O){return p!==O?(e.useProgram(O),p=O,!0):!1}const me={[ji]:e.FUNC_ADD,[Yb]:e.FUNC_SUBTRACT,[Zb]:e.FUNC_REVERSE_SUBTRACT};me[Kb]=e.MIN,me[Qb]=e.MAX;const U={[Md]:e.ZERO,[$b]:e.ONE,[Jb]:e.SRC_COLOR,[bd]:e.SRC_ALPHA,[iE]:e.SRC_ALPHA_SATURATE,[Cy]:e.DST_COLOR,[wy]:e.DST_ALPHA,[tE]:e.ONE_MINUS_SRC_COLOR,[Ed]:e.ONE_MINUS_SRC_ALPHA,[nE]:e.ONE_MINUS_DST_COLOR,[eE]:e.ONE_MINUS_DST_ALPHA,[aE]:e.CONSTANT_COLOR,[sE]:e.ONE_MINUS_CONSTANT_COLOR,[rE]:e.CONSTANT_ALPHA,[oE]:e.ONE_MINUS_CONSTANT_ALPHA};function ve(O,ot,Y,Z,ct,Lt,Qt,De,Ke,ee){if(O===fn){v===!0&&(st(e.BLEND),v=!1);return}if(v===!1&&(gt(e.BLEND),v=!0),O!==Ay){if(O!==x||ee!==L){if((m!==ji||g!==ji)&&(e.blendEquation(e.FUNC_ADD),m=ji,g=ji),ee)switch(O){case Fr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sd:e.blendFunc(e.ONE,e.ONE);break;case o_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case l_:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sd:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case o_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case l_:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}u=null,_=null,y=null,w=null,A.set(0,0,0),T=0,x=O,L=ee}return}ct=ct||ot,Lt=Lt||Y,Qt=Qt||Z,(ot!==m||ct!==g)&&(e.blendEquationSeparate(me[ot],me[ct]),m=ot,g=ct),(Y!==u||Z!==_||Lt!==y||Qt!==w)&&(e.blendFuncSeparate(U[Y],U[Z],U[Lt],U[Qt]),u=Y,_=Z,y=Lt,w=Qt),(De.equals(A)===!1||Ke!==T)&&(e.blendColor(De.r,De.g,De.b,Ke),A.copy(De),T=Ke),x=O,L=!1}function Kt(O,ot){O.side===oi?st(e.CULL_FACE):gt(e.CULL_FACE);let Y=O.side===Mn;ot&&(Y=!Y),$t(Y),O.blending===Fr&&O.transparent===!1?ve(fn):ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);const Z=O.stencilWrite;r.setTest(Z),Z&&(r.setMask(O.stencilWriteMask),r.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),r.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Rt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?gt(e.SAMPLE_ALPHA_TO_COVERAGE):st(e.SAMPLE_ALPHA_TO_COVERAGE)}function $t(O){E!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),E=O)}function bt(O){O!==Wb?(gt(e.CULL_FACE),O!==S&&(O===r_?e.cullFace(e.BACK):O===jb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):st(e.CULL_FACE),S=O}function xe(O){O!==R&&($&&e.lineWidth(O),R=O)}function Rt(O,ot,Y){O?(gt(e.POLYGON_OFFSET_FILL),(X!==ot||B!==Y)&&(e.polygonOffset(ot,Y),X=ot,B=Y)):st(e.POLYGON_OFFSET_FILL)}function Pt(O){O?gt(e.SCISSOR_TEST):st(e.SCISSOR_TEST)}function C(O){O===void 0&&(O=e.TEXTURE0+q-1),I!==O&&(e.activeTexture(O),I=O)}function M(O,ot,Y){Y===void 0&&(I===null?Y=e.TEXTURE0+q-1:Y=I);let Z=Q[Y];Z===void 0&&(Z={type:void 0,texture:void 0},Q[Y]=Z),(Z.type!==O||Z.texture!==ot)&&(I!==Y&&(e.activeTexture(Y),I=Y),e.bindTexture(O,ot||it[O]),Z.type=O,Z.texture=ot)}function k(){const O=Q[I];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function tt(){try{e.compressedTexImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{e.compressedTexImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{e.texSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{e.texSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{e.texStorage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{e.texStorage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{e.texImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qt(){try{e.texImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(O){wt.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),wt.copy(O))}function _t(O){Ft.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),Ft.copy(O))}function It(O,ot){let Y=l.get(ot);Y===void 0&&(Y=new WeakMap,l.set(ot,Y));let Z=Y.get(O);Z===void 0&&(Z=e.getUniformBlockIndex(ot,O.name),Y.set(O,Z))}function Ht(O,ot){const Z=l.get(ot).get(O);o.get(ot)!==Z&&(e.uniformBlockBinding(ot,Z,O.__bindingPointIndex),o.set(ot,Z))}function se(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},I=null,Q={},f={},h=new WeakMap,d=[],p=null,v=!1,x=null,m=null,u=null,_=null,g=null,y=null,w=null,A=new yt(0,0,0),T=0,L=!1,E=null,S=null,R=null,X=null,B=null,wt.set(0,0,e.canvas.width,e.canvas.height),Ft.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),r.reset()}return{buffers:{color:a,depth:s,stencil:r},enable:gt,disable:st,bindFramebuffer:Mt,drawBuffers:Ct,useProgram:zt,setBlending:ve,setMaterial:Kt,setFlipSided:$t,setCullFace:bt,setLineWidth:xe,setPolygonOffset:Rt,setScissorTest:Pt,activeTexture:C,bindTexture:M,unbindTexture:k,compressedTexImage2D:tt,compressedTexImage3D:nt,texImage2D:dt,texImage3D:qt,updateUBOMapping:It,uniformBlockBinding:Ht,texStorage2D:Nt,texStorage3D:rt,texSubImage2D:et,texSubImage3D:At,compressedTexSubImage2D:ut,compressedTexSubImage3D:pt,scissor:Dt,viewport:_t,reset:se}}function e0(e,t,n,i){const a=G2(i);switch(n){case By:return e*t;case Vy:return e*t;case Gy:return e*t*2;case dm:return e*t/a.components*a.byteLength;case pm:return e*t/a.components*a.byteLength;case ky:return e*t*2/a.components*a.byteLength;case mm:return e*t*2/a.components*a.byteLength;case Hy:return e*t*3/a.components*a.byteLength;case Kn:return e*t*4/a.components*a.byteLength;case gm:return e*t*4/a.components*a.byteLength;case qc:case Yc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rd:case Ld:return Math.max(e,16)*Math.max(t,8)/4;case Cd:case Dd:return Math.max(e,8)*Math.max(t,8)/2;case Ud:case Pd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Nd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Id:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case kd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case jd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case qd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Qc:case Zd:case Kd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Xy:case Qd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case $d:case Jd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function G2(e){switch(e){case sa:case zy:return{byteLength:1,components:1};case yl:case Iy:case ui:return{byteLength:2,components:1};case fm:case hm:return{byteLength:2,components:4};case ws:case um:case Mi:return{byteLength:4,components:1};case Fy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function k2(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return p?new OffscreenCanvas(C,M):Pu("canvas")}function x(C,M,k){let tt=1;const nt=Pt(C);if((nt.width>k||nt.height>k)&&(tt=k/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=Math.floor(tt*nt.width),At=Math.floor(tt*nt.height);h===void 0&&(h=v(et,At));const ut=M?v(et,At):h;return ut.width=et,ut.height=At,ut.getContext("2d").drawImage(C,0,0,et,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+et+"x"+At+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==ln&&C.minFilter!==li}function u(C){e.generateMipmap(C)}function _(C,M,k,tt,nt=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=M;if(M===e.RED&&(k===e.FLOAT&&(et=e.R32F),k===e.HALF_FLOAT&&(et=e.R16F),k===e.UNSIGNED_BYTE&&(et=e.R8)),M===e.RED_INTEGER&&(k===e.UNSIGNED_BYTE&&(et=e.R8UI),k===e.UNSIGNED_SHORT&&(et=e.R16UI),k===e.UNSIGNED_INT&&(et=e.R32UI),k===e.BYTE&&(et=e.R8I),k===e.SHORT&&(et=e.R16I),k===e.INT&&(et=e.R32I)),M===e.RG&&(k===e.FLOAT&&(et=e.RG32F),k===e.HALF_FLOAT&&(et=e.RG16F),k===e.UNSIGNED_BYTE&&(et=e.RG8)),M===e.RG_INTEGER&&(k===e.UNSIGNED_BYTE&&(et=e.RG8UI),k===e.UNSIGNED_SHORT&&(et=e.RG16UI),k===e.UNSIGNED_INT&&(et=e.RG32UI),k===e.BYTE&&(et=e.RG8I),k===e.SHORT&&(et=e.RG16I),k===e.INT&&(et=e.RG32I)),M===e.RGB&&k===e.UNSIGNED_INT_5_9_9_9_REV&&(et=e.RGB9_E5),M===e.RGBA){const At=nt?Ru:te.getTransfer(tt);k===e.FLOAT&&(et=e.RGBA32F),k===e.HALF_FLOAT&&(et=e.RGBA16F),k===e.UNSIGNED_BYTE&&(et=At===fe?e.SRGB8_ALPHA8:e.RGBA8),k===e.UNSIGNED_SHORT_4_4_4_4&&(et=e.RGBA4),k===e.UNSIGNED_SHORT_5_5_5_1&&(et=e.RGB5_A1)}return(et===e.R16F||et===e.R32F||et===e.RG16F||et===e.RG32F||et===e.RGBA16F||et===e.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function g(C,M){let k;return C?M===null||M===ws||M===Cs?k=e.DEPTH24_STENCIL8:M===Mi?k=e.DEPTH32F_STENCIL8:M===yl&&(k=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ws||M===Cs?k=e.DEPTH_COMPONENT24:M===Mi?k=e.DEPTH_COMPONENT32F:M===yl&&(k=e.DEPTH_COMPONENT16),k}function y(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==li?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function w(C){const M=C.target;M.removeEventListener("dispose",w),T(M),M.isVideoTexture&&f.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),E(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const k=C.source,tt=d.get(k);if(tt){const nt=tt[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&L(C),Object.keys(tt).length===0&&d.delete(k)}i.remove(C)}function L(C){const M=i.get(C);e.deleteTexture(M.__webglTexture);const k=C.source,tt=d.get(k);delete tt[M.__cacheKey],r.memory.textures--}function E(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let nt=0;nt<M.__webglFramebuffer[tt].length;nt++)e.deleteFramebuffer(M.__webglFramebuffer[tt][nt]);else e.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)e.deleteFramebuffer(M.__webglFramebuffer[tt]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=C.textures;for(let tt=0,nt=k.length;tt<nt;tt++){const et=i.get(k[tt]);et.__webglTexture&&(e.deleteTexture(et.__webglTexture),r.memory.textures--),i.remove(k[tt])}i.remove(C)}let S=0;function R(){S=0}function X(){const C=S;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),S+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const k=i.get(C);if(C.isVideoTexture&&xe(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const tt=C.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(k,C,M);return}}n.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+M)}function $(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Ft(k,C,M);return}n.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+M)}function N(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){Ft(k,C,M);return}n.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+M)}function W(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+M)}const I={[xl]:e.REPEAT,[ds]:e.CLAMP_TO_EDGE,[wd]:e.MIRRORED_REPEAT},Q={[ln]:e.NEAREST,[vE]:e.NEAREST_MIPMAP_NEAREST,[tc]:e.NEAREST_MIPMAP_LINEAR,[li]:e.LINEAR,[Zf]:e.LINEAR_MIPMAP_NEAREST,[ps]:e.LINEAR_MIPMAP_LINEAR},at={[ME]:e.NEVER,[CE]:e.ALWAYS,[bE]:e.LESS,[Wy]:e.LEQUAL,[EE]:e.EQUAL,[wE]:e.GEQUAL,[TE]:e.GREATER,[AE]:e.NOTEQUAL};function ht(C,M){if(M.type===Mi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===li||M.magFilter===Zf||M.magFilter===tc||M.magFilter===ps||M.minFilter===li||M.minFilter===Zf||M.minFilter===tc||M.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,I[M.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,I[M.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,I[M.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Q[M.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,at[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ln||M.minFilter!==tc&&M.minFilter!==ps||M.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function wt(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));const tt=M.source;let nt=d.get(tt);nt===void 0&&(nt={},d.set(tt,nt));const et=B(M);if(et!==C.__cacheKey){nt[et]===void 0&&(nt[et]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,k=!0),nt[et].usedTimes++;const At=nt[C.__cacheKey];At!==void 0&&(nt[C.__cacheKey].usedTimes--,At.usedTimes===0&&L(M)),C.__cacheKey=et,C.__webglTexture=nt[et].texture}return k}function Ft(C,M,k){let tt=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=e.TEXTURE_3D);const nt=wt(C,M),et=M.source;n.bindTexture(tt,C.__webglTexture,e.TEXTURE0+k);const At=i.get(et);if(et.version!==At.__version||nt===!0){n.activeTexture(e.TEXTURE0+k);const ut=te.getPrimaries(te.workingColorSpace),pt=M.colorSpace===Aa?null:te.getPrimaries(M.colorSpace),Nt=M.colorSpace===Aa||ut===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let rt=x(M.image,!1,a.maxTextureSize);rt=Rt(M,rt);const dt=s.convert(M.format,M.colorSpace),qt=s.convert(M.type);let Dt=_(M.internalFormat,dt,qt,M.colorSpace,M.isVideoTexture);ht(tt,M);let _t;const It=M.mipmaps,Ht=M.isVideoTexture!==!0,se=At.__version===void 0||nt===!0,O=et.dataReady,ot=y(M,rt);if(M.isDepthTexture)Dt=g(M.format===Rs,M.type),se&&(Ht?n.texStorage2D(e.TEXTURE_2D,1,Dt,rt.width,rt.height):n.texImage2D(e.TEXTURE_2D,0,Dt,rt.width,rt.height,0,dt,qt,null));else if(M.isDataTexture)if(It.length>0){Ht&&se&&n.texStorage2D(e.TEXTURE_2D,ot,Dt,It[0].width,It[0].height);for(let Y=0,Z=It.length;Y<Z;Y++)_t=It[Y],Ht?O&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,_t.width,_t.height,dt,qt,_t.data):n.texImage2D(e.TEXTURE_2D,Y,Dt,_t.width,_t.height,0,dt,qt,_t.data);M.generateMipmaps=!1}else Ht?(se&&n.texStorage2D(e.TEXTURE_2D,ot,Dt,rt.width,rt.height),O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,rt.width,rt.height,dt,qt,rt.data)):n.texImage2D(e.TEXTURE_2D,0,Dt,rt.width,rt.height,0,dt,qt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&se&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ot,Dt,It[0].width,It[0].height,rt.depth);for(let Y=0,Z=It.length;Y<Z;Y++)if(_t=It[Y],M.format!==Kn)if(dt!==null)if(Ht){if(O)if(M.layerUpdates.size>0){const ct=e0(_t.width,_t.height,M.format,M.type);for(const Lt of M.layerUpdates){const Qt=_t.data.subarray(Lt*ct/_t.data.BYTES_PER_ELEMENT,(Lt+1)*ct/_t.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,Lt,_t.width,_t.height,1,dt,Qt,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,rt.depth,dt,_t.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,Dt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,rt.depth,dt,qt,_t.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Y,Dt,_t.width,_t.height,rt.depth,0,dt,qt,_t.data)}else{Ht&&se&&n.texStorage2D(e.TEXTURE_2D,ot,Dt,It[0].width,It[0].height);for(let Y=0,Z=It.length;Y<Z;Y++)_t=It[Y],M.format!==Kn?dt!==null?Ht?O&&n.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,_t.width,_t.height,dt,_t.data):n.compressedTexImage2D(e.TEXTURE_2D,Y,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,_t.width,_t.height,dt,qt,_t.data):n.texImage2D(e.TEXTURE_2D,Y,Dt,_t.width,_t.height,0,dt,qt,_t.data)}else if(M.isDataArrayTexture)if(Ht){if(se&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ot,Dt,rt.width,rt.height,rt.depth),O)if(M.layerUpdates.size>0){const Y=e0(rt.width,rt.height,M.format,M.type);for(const Z of M.layerUpdates){const ct=rt.data.subarray(Z*Y/rt.data.BYTES_PER_ELEMENT,(Z+1)*Y/rt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,rt.width,rt.height,1,dt,qt,ct)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,dt,qt,rt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,dt,qt,rt.data);else if(M.isData3DTexture)Ht?(se&&n.texStorage3D(e.TEXTURE_3D,ot,Dt,rt.width,rt.height,rt.depth),O&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,dt,qt,rt.data)):n.texImage3D(e.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,dt,qt,rt.data);else if(M.isFramebufferTexture){if(se)if(Ht)n.texStorage2D(e.TEXTURE_2D,ot,Dt,rt.width,rt.height);else{let Y=rt.width,Z=rt.height;for(let ct=0;ct<ot;ct++)n.texImage2D(e.TEXTURE_2D,ct,Dt,Y,Z,0,dt,qt,null),Y>>=1,Z>>=1}}else if(It.length>0){if(Ht&&se){const Y=Pt(It[0]);n.texStorage2D(e.TEXTURE_2D,ot,Dt,Y.width,Y.height)}for(let Y=0,Z=It.length;Y<Z;Y++)_t=It[Y],Ht?O&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,dt,qt,_t):n.texImage2D(e.TEXTURE_2D,Y,Dt,dt,qt,_t);M.generateMipmaps=!1}else if(Ht){if(se){const Y=Pt(rt);n.texStorage2D(e.TEXTURE_2D,ot,Dt,Y.width,Y.height)}O&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,qt,rt)}else n.texImage2D(e.TEXTURE_2D,0,Dt,dt,qt,rt);m(M)&&u(tt),At.__version=et.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function j(C,M,k){if(M.image.length!==6)return;const tt=wt(C,M),nt=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+k);const et=i.get(nt);if(nt.version!==et.__version||tt===!0){n.activeTexture(e.TEXTURE0+k);const At=te.getPrimaries(te.workingColorSpace),ut=M.colorSpace===Aa?null:te.getPrimaries(M.colorSpace),pt=M.colorSpace===Aa||At===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,rt=M.image[0]&&M.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Nt&&!rt?dt[Z]=x(M.image[Z],!0,a.maxCubemapSize):dt[Z]=rt?M.image[Z].image:M.image[Z],dt[Z]=Rt(M,dt[Z]);const qt=dt[0],Dt=s.convert(M.format,M.colorSpace),_t=s.convert(M.type),It=_(M.internalFormat,Dt,_t,M.colorSpace),Ht=M.isVideoTexture!==!0,se=et.__version===void 0||tt===!0,O=nt.dataReady;let ot=y(M,qt);ht(e.TEXTURE_CUBE_MAP,M);let Y;if(Nt){Ht&&se&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ot,It,qt.width,qt.height);for(let Z=0;Z<6;Z++){Y=dt[Z].mipmaps;for(let ct=0;ct<Y.length;ct++){const Lt=Y[ct];M.format!==Kn?Dt!==null?Ht?O&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,Lt.width,Lt.height,Dt,Lt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,It,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,0,0,Lt.width,Lt.height,Dt,_t,Lt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct,It,Lt.width,Lt.height,0,Dt,_t,Lt.data)}}}else{if(Y=M.mipmaps,Ht&&se){Y.length>0&&ot++;const Z=Pt(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ot,It,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(rt){Ht?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,Dt,_t,dt[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,It,dt[Z].width,dt[Z].height,0,Dt,_t,dt[Z].data);for(let ct=0;ct<Y.length;ct++){const Qt=Y[ct].image[Z].image;Ht?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Qt.width,Qt.height,Dt,_t,Qt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,It,Qt.width,Qt.height,0,Dt,_t,Qt.data)}}else{Ht?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,_t,dt[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,It,Dt,_t,dt[Z]);for(let ct=0;ct<Y.length;ct++){const Lt=Y[ct];Ht?O&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,0,0,Dt,_t,Lt.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ct+1,It,Dt,_t,Lt.image[Z])}}}m(M)&&u(e.TEXTURE_CUBE_MAP),et.__version=nt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function it(C,M,k,tt,nt,et){const At=s.convert(k.format,k.colorSpace),ut=s.convert(k.type),pt=_(k.internalFormat,At,ut,k.colorSpace);if(!i.get(M).__hasExternalTextures){const rt=Math.max(1,M.width>>et),dt=Math.max(1,M.height>>et);nt===e.TEXTURE_3D||nt===e.TEXTURE_2D_ARRAY?n.texImage3D(nt,et,pt,rt,dt,M.depth,0,At,ut,null):n.texImage2D(nt,et,pt,rt,dt,0,At,ut,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),bt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,nt,i.get(k).__webglTexture,0,$t(M)):(nt===e.TEXTURE_2D||nt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,tt,nt,i.get(k).__webglTexture,et),n.bindFramebuffer(e.FRAMEBUFFER,null)}function gt(C,M,k){if(e.bindRenderbuffer(e.RENDERBUFFER,C),M.depthBuffer){const tt=M.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,et=g(M.stencilBuffer,nt),At=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=$t(M);bt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ut,et,M.width,M.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,ut,et,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,et,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,At,e.RENDERBUFFER,C)}else{const tt=M.textures;for(let nt=0;nt<tt.length;nt++){const et=tt[nt],At=s.convert(et.format,et.colorSpace),ut=s.convert(et.type),pt=_(et.internalFormat,At,ut,et.colorSpace),Nt=$t(M);k&&bt(M)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Nt,pt,M.width,M.height):bt(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Nt,pt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,pt,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function st(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const tt=i.get(M.depthTexture).__webglTexture,nt=$t(M);if(M.depthTexture.format===Br)bt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0,nt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,tt,0);else if(M.depthTexture.format===Rs)bt(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0,nt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Mt(C){const M=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const tt=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){const nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=tt}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");st(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=e.createRenderbuffer(),gt(M.__webglDepthbuffer[tt],C,!1);else{const nt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer[tt];e.bindRenderbuffer(e.RENDERBUFFER,et),e.framebufferRenderbuffer(e.FRAMEBUFFER,nt,e.RENDERBUFFER,et)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),gt(M.__webglDepthbuffer,C,!1);else{const tt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,nt),e.framebufferRenderbuffer(e.FRAMEBUFFER,tt,e.RENDERBUFFER,nt)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ct(C,M,k){const tt=i.get(C);M!==void 0&&it(tt.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),k!==void 0&&Mt(C)}function zt(C){const M=C.texture,k=i.get(C),tt=i.get(M);C.addEventListener("dispose",A);const nt=C.textures,et=C.isWebGLCubeRenderTarget===!0,At=nt.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=e.createTexture()),tt.__version=M.version,r.memory.textures++),et){k.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ut]=[];for(let pt=0;pt<M.mipmaps.length;pt++)k.__webglFramebuffer[ut][pt]=e.createFramebuffer()}else k.__webglFramebuffer[ut]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ut=0;ut<M.mipmaps.length;ut++)k.__webglFramebuffer[ut]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(At)for(let ut=0,pt=nt.length;ut<pt;ut++){const Nt=i.get(nt[ut]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&bt(C)===!1){k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const pt=nt[ut];k.__webglColorRenderbuffer[ut]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[ut]);const Nt=s.convert(pt.format,pt.colorSpace),rt=s.convert(pt.type),dt=_(pt.internalFormat,Nt,rt,pt.colorSpace,C.isXRRenderTarget===!0),qt=$t(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,qt,dt,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,k.__webglColorRenderbuffer[ut])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=e.createRenderbuffer(),gt(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(et){n.bindTexture(e.TEXTURE_CUBE_MAP,tt.__webglTexture),ht(e.TEXTURE_CUBE_MAP,M);for(let ut=0;ut<6;ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)it(k.__webglFramebuffer[ut][pt],C,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else it(k.__webglFramebuffer[ut],C,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(M)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(At){for(let ut=0,pt=nt.length;ut<pt;ut++){const Nt=nt[ut],rt=i.get(Nt);n.bindTexture(e.TEXTURE_2D,rt.__webglTexture),ht(e.TEXTURE_2D,Nt),it(k.__webglFramebuffer,C,Nt,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,0),m(Nt)&&u(e.TEXTURE_2D)}n.unbindTexture()}else{let ut=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,tt.__webglTexture),ht(ut,M),M.mipmaps&&M.mipmaps.length>0)for(let pt=0;pt<M.mipmaps.length;pt++)it(k.__webglFramebuffer[pt],C,M,e.COLOR_ATTACHMENT0,ut,pt);else it(k.__webglFramebuffer,C,M,e.COLOR_ATTACHMENT0,ut,0);m(M)&&u(ut),n.unbindTexture()}C.depthBuffer&&Mt(C)}function me(C){const M=C.textures;for(let k=0,tt=M.length;k<tt;k++){const nt=M[k];if(m(nt)){const et=C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,At=i.get(nt).__webglTexture;n.bindTexture(et,At),u(et),n.unbindTexture()}}}const U=[],ve=[];function Kt(C){if(C.samples>0){if(bt(C)===!1){const M=C.textures,k=C.width,tt=C.height;let nt=e.COLOR_BUFFER_BIT;const et=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,At=i.get(C),ut=M.length>1;if(ut)for(let pt=0;pt<M.length;pt++)n.bindFramebuffer(e.FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,At.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let pt=0;pt<M.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=e.STENCIL_BUFFER_BIT)),ut){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,At.__webglColorRenderbuffer[pt]);const Nt=i.get(M[pt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Nt,0)}e.blitFramebuffer(0,0,k,tt,0,0,k,tt,nt,e.NEAREST),l===!0&&(U.length=0,ve.length=0,U.push(e.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(U.push(et),ve.push(et),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ve)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,U))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ut)for(let pt=0;pt<M.length;pt++){n.bindFramebuffer(e.FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.RENDERBUFFER,At.__webglColorRenderbuffer[pt]);const Nt=i.get(M[pt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,At.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+pt,e.TEXTURE_2D,Nt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function $t(C){return Math.min(a.maxSamples,C.samples)}function bt(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xe(C){const M=r.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Rt(C,M){const k=C.colorSpace,tt=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==qa&&k!==Aa&&(te.getTransfer(k)===fe?(tt!==Kn||nt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=R,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=N,this.setTextureCube=W,this.rebindTextures=Ct,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=bt}function X2(e,t){function n(i,a=Aa){let s;const r=te.getTransfer(a);if(i===sa)return e.UNSIGNED_BYTE;if(i===fm)return e.UNSIGNED_SHORT_4_4_4_4;if(i===hm)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Fy)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===zy)return e.BYTE;if(i===Iy)return e.SHORT;if(i===yl)return e.UNSIGNED_SHORT;if(i===um)return e.INT;if(i===ws)return e.UNSIGNED_INT;if(i===Mi)return e.FLOAT;if(i===ui)return e.HALF_FLOAT;if(i===By)return e.ALPHA;if(i===Hy)return e.RGB;if(i===Kn)return e.RGBA;if(i===Vy)return e.LUMINANCE;if(i===Gy)return e.LUMINANCE_ALPHA;if(i===Br)return e.DEPTH_COMPONENT;if(i===Rs)return e.DEPTH_STENCIL;if(i===dm)return e.RED;if(i===pm)return e.RED_INTEGER;if(i===ky)return e.RG;if(i===mm)return e.RG_INTEGER;if(i===gm)return e.RGBA_INTEGER;if(i===qc||i===Yc||i===Zc||i===Kc)if(r===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cd||i===Rd||i===Dd||i===Ld)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ud||i===Pd||i===Nd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ud||i===Pd)return r===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Od||i===zd||i===Id||i===Fd||i===Bd||i===Hd||i===Vd||i===Gd||i===kd||i===Xd||i===Wd||i===jd||i===qd||i===Yd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Od)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Id)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yd)return r===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qc||i===Zd||i===Kd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Qc)return r===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xy||i===Qd||i===$d||i===Jd)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$d)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class W2 extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let Mc=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}};const j2={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j2)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Mc;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y2=`
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

}`;class Z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new gn,s=t.properties.get(a);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ce({vertexShader:q2,fragmentShader:Y2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new Is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K2 extends zs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,v=null;const x=new Z2,m=n.getContextAttributes();let u=null,_=null;const g=[],y=[],w=new St;let A=null;const T=new hn;T.layers.enable(1),T.viewport=new Be;const L=new hn;L.layers.enable(2),L.viewport=new Be;const E=[T,L],S=new W2;S.layers.enable(1),S.layers.enable(2);let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=g[j];return it===void 0&&(it=new yh,g[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=g[j];return it===void 0&&(it=new yh,g[j]=it),it.getGripSpace()},this.getHand=function(j){let it=g[j];return it===void 0&&(it=new yh,g[j]=it),it.getHandSpace()};function B(j){const it=y.indexOf(j.inputSource);if(it===-1)return;const gt=g[it];gt!==void 0&&(gt.update(j.inputSource,j.frame,c||r),gt.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",$);for(let j=0;j<g.length;j++){const it=y[j];it!==null&&(y[j]=null,g[j].disconnect(it))}R=null,X=null,x.reset(),t.setRenderTarget(u),p=null,d=null,h=null,a=null,_=null,Ft.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(u=t.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",q),a.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),a.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,it),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new On(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:sa,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,gt=null,st=null;m.depth&&(st=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,it=m.stencil?Rs:Br,gt=m.stencil?Cs:ws);const Mt={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:s};h=new XRWebGLBinding(a,n),d=h.createProjectionLayer(Mt),a.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new On(d.textureWidth,d.textureHeight,{format:Kn,type:sa,depthTexture:new Mm(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Ft.setContext(a),Ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(j){for(let it=0;it<j.removed.length;it++){const gt=j.removed[it],st=y.indexOf(gt);st>=0&&(y[st]=null,g[st].disconnect(gt))}for(let it=0;it<j.added.length;it++){const gt=j.added[it];let st=y.indexOf(gt);if(st===-1){for(let Ct=0;Ct<g.length;Ct++)if(Ct>=y.length){y.push(gt),st=Ct;break}else if(y[Ct]===null){y[Ct]=gt,st=Ct;break}if(st===-1)break}const Mt=g[st];Mt&&Mt.connect(gt)}}const N=new D,W=new D;function I(j,it,gt){N.setFromMatrixPosition(it.matrixWorld),W.setFromMatrixPosition(gt.matrixWorld);const st=N.distanceTo(W),Mt=it.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,zt=Mt[14]/(Mt[10]-1),me=Mt[14]/(Mt[10]+1),U=(Mt[9]+1)/Mt[5],ve=(Mt[9]-1)/Mt[5],Kt=(Mt[8]-1)/Mt[0],$t=(Ct[8]+1)/Ct[0],bt=zt*Kt,xe=zt*$t,Rt=st/(-Kt+$t),Pt=Rt*-Kt;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Pt),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Mt[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const C=zt+Rt,M=me+Rt,k=bt-Pt,tt=xe+(st-Pt),nt=U*me/M*C,et=ve*me/M*C;j.projectionMatrix.makePerspective(k,tt,nt,et,C,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Q(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let it=j.near,gt=j.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),S.near=L.near=T.near=it,S.far=L.far=T.far=gt,(R!==S.near||X!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,X=S.far);const st=j.parent,Mt=S.cameras;Q(S,st);for(let Ct=0;Ct<Mt.length;Ct++)Q(Mt[Ct],st);Mt.length===2?I(S,T,L):S.projectionMatrix.copy(T.projectionMatrix),at(j,S,st)};function at(j,it,gt){gt===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(gt.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=$r*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ht=null;function wt(j,it){if(f=it.getViewerPose(c||r),v=it,f!==null){const gt=f.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let st=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,st=!0);for(let Ct=0;Ct<gt.length;Ct++){const zt=gt[Ct];let me=null;if(p!==null)me=p.getViewport(zt);else{const ve=h.getViewSubImage(d,zt);me=ve.viewport,Ct===0&&(t.setRenderTargetTextures(_,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(_))}let U=E[Ct];U===void 0&&(U=new hn,U.layers.enable(Ct),U.viewport=new Be,E[Ct]=U),U.matrix.fromArray(zt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(zt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(me.x,me.y,me.width,me.height),Ct===0&&(S.matrix.copy(U.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),st===!0&&S.cameras.push(U)}const Mt=a.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Ct=h.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&x.init(t,Ct,a.renderState)}}for(let gt=0;gt<g.length;gt++){const st=y[gt],Mt=g[gt];st!==null&&Mt!==void 0&&Mt.update(st,it,c||r)}ht&&ht(j,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),v=null}const Ft=new iS;Ft.setAnimationLoop(wt),this.setAnimationLoop=function(j){ht=j},this.dispose=function(){}}}const as=new Ci,Q2=new re;function $2(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,tS(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,_,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=t.get(u),g=_.envMap,y=_.envMapRotation;g&&(m.envMap.value=g,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(Q2.makeRotationFromEuler(as)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function J2(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function c(_,g){let y=a[_.id];y===void 0&&(v(_),y=f(_),a[_.id]=y,_.addEventListener("dispose",m));const w=g.program;i.updateUBOMapping(_,w);const A=t.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function f(_){const g=h();_.__bindingPointIndex=g;const y=e.createBuffer(),w=_.__size,A=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,w,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,y),y}function h(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=a[_.id],y=_.uniforms,w=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let A=0,T=y.length;A<T;A++){const L=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,S=L.length;E<S;E++){const R=L[E];if(p(R,A,E,w)===!0){const X=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let $=0;$<B.length;$++){const N=B[$],W=x(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,X+q,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,X,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,g,y,w){const A=_.value,T=g+"_"+y;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const L=w[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return w[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function v(_){const g=_.uniforms;let y=0;const w=16;for(let T=0,L=g.length;T<L;T++){const E=Array.isArray(g[T])?g[T]:[g[T]];for(let S=0,R=E.length;S<R;S++){const X=E[S],B=Array.isArray(X.value)?X.value:[X.value];for(let q=0,$=B.length;q<$;q++){const N=B[q],W=x(N),I=y%w,Q=I%W.boundary,at=I+Q;y+=Q,at!==0&&w-at<W.storage&&(y+=w-at),X.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=W.storage}}}const A=y%w;return A>0&&(y+=w-A),_.__size=y,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=r.indexOf(g.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(a[g.id]),delete a[g.id],delete s[g.id]}function u(){for(const _ in a)e.deleteBuffer(a[_]);r=[],a={},s={}}return{bind:l,update:c,dispose:u}}class bm{constructor(t={}){const{canvas:n=WE(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=Fa,this.toneMappingExposure=1;const g=this;let y=!1,w=0,A=0,T=null,L=-1,E=null;const S=new Be,R=new Be;let X=null;const B=new yt(0);let q=0,$=n.width,N=n.height,W=1,I=null,Q=null;const at=new Be(0,0,$,N),ht=new Be(0,0,$,N);let wt=!1;const Ft=new ym;let j=!1,it=!1;const gt=new re,st=new D,Mt=new Be,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function me(){return T===null?W:1}let U=i;function ve(b,z){return n.getContext(b,z)}try{const b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lm}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",ct,!1),U===null){const z="webgl2";if(U=ve(z,b),U===null)throw ve(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Kt,$t,bt,xe,Rt,Pt,C,M,k,tt,nt,et,At,ut,pt,Nt,rt,dt,qt,Dt,_t,It,Ht,se;function O(){Kt=new rC(U),Kt.init(),It=new X2(U,Kt),$t=new tC(U,Kt,t,It),bt=new V2(U),xe=new cC(U),Rt=new w2,Pt=new k2(U,Kt,bt,Rt,$t,It,xe),C=new nC(g),M=new sC(g),k=new gT(U),Ht=new $w(U,k),tt=new oC(U,k,xe,Ht),nt=new fC(U,tt,k,xe),qt=new uC(U,$t,Pt),Nt=new eC(Rt),et=new A2(g,C,M,Kt,$t,Ht,Nt),At=new $2(g,Rt),ut=new R2,pt=new O2(Kt),dt=new Qw(g,C,M,bt,nt,d,l),rt=new H2(g,nt,$t),se=new J2(U,xe,$t,bt),Dt=new Jw(U,Kt,xe),_t=new lC(U,Kt,xe),xe.programs=et.programs,g.capabilities=$t,g.extensions=Kt,g.properties=Rt,g.renderLists=ut,g.shadowMap=rt,g.state=bt,g.info=xe}O();const ot=new K2(g,U);this.xr=ot,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize($,N,!1))},this.getSize=function(b){return b.set($,N)},this.setSize=function(b,z,H=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,N=z,n.width=Math.floor(b*W),n.height=Math.floor(z*W),H===!0&&(n.style.width=b+"px",n.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set($*W,N*W).floor()},this.setDrawingBufferSize=function(b,z,H){$=b,N=z,W=H,n.width=Math.floor(b*H),n.height=Math.floor(z*H),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(at)},this.setViewport=function(b,z,H,G){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,z,H,G),bt.viewport(S.copy(at).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(ht)},this.setScissor=function(b,z,H,G){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,z,H,G),bt.scissor(R.copy(ht).multiplyScalar(W).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(b){bt.setScissorTest(wt=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(b=!0,z=!0,H=!0){let G=0;if(b){let F=!1;if(T!==null){const lt=T.texture.format;F=lt===gm||lt===mm||lt===pm}if(F){const lt=T.texture.type,mt=lt===sa||lt===ws||lt===yl||lt===Cs||lt===fm||lt===hm,vt=dt.getClearColor(),xt=dt.getClearAlpha(),Ut=vt.r,Ot=vt.g,Et=vt.b;mt?(p[0]=Ut,p[1]=Ot,p[2]=Et,p[3]=xt,U.clearBufferuiv(U.COLOR,0,p)):(v[0]=Ut,v[1]=Ot,v[2]=Et,v[3]=xt,U.clearBufferiv(U.COLOR,0,v))}else G|=U.COLOR_BUFFER_BIT}z&&(G|=U.DEPTH_BUFFER_BIT),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),pt.dispose(),Rt.dispose(),C.dispose(),M.dispose(),nt.dispose(),Ht.dispose(),se.dispose(),et.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",pi),ot.removeEventListener("sessionend",Dm),Qa.stop()};function Y(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=xe.autoReset,z=rt.enabled,H=rt.autoUpdate,G=rt.needsUpdate,F=rt.type;O(),xe.autoReset=b,rt.enabled=z,rt.autoUpdate=H,rt.needsUpdate=G,rt.type=F}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Lt(b){const z=b.target;z.removeEventListener("dispose",Lt),Qt(z)}function Qt(b){De(b),Rt.remove(b)}function De(b){const z=Rt.get(b).programs;z!==void 0&&(z.forEach(function(H){et.releaseProgram(H)}),b.isShaderMaterial&&et.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,H,G,F,lt){z===null&&(z=Ct);const mt=F.isMesh&&F.matrixWorld.determinant()<0,vt=TS(b,z,H,G,F);bt.setMaterial(G,mt);let xt=H.index,Ut=1;if(G.wireframe===!0){if(xt=tt.getWireframeAttribute(H),xt===void 0)return;Ut=2}const Ot=H.drawRange,Et=H.attributes.position;let ne=Ot.start*Ut,Ee=(Ot.start+Ot.count)*Ut;lt!==null&&(ne=Math.max(ne,lt.start*Ut),Ee=Math.min(Ee,(lt.start+lt.count)*Ut)),xt!==null?(ne=Math.max(ne,0),Ee=Math.min(Ee,xt.count)):Et!=null&&(ne=Math.max(ne,0),Ee=Math.min(Ee,Et.count));const Te=Ee-ne;if(Te<0||Te===1/0)return;Ht.setup(F,G,vt,H,xt);let Tn,ie=Dt;if(xt!==null&&(Tn=k.get(xt),ie=_t,ie.setIndex(Tn)),F.isMesh)G.wireframe===!0?(bt.setLineWidth(G.wireframeLinewidth*me()),ie.setMode(U.LINES)):ie.setMode(U.TRIANGLES);else if(F.isLine){let Tt=G.linewidth;Tt===void 0&&(Tt=1),bt.setLineWidth(Tt*me()),F.isLineSegments?ie.setMode(U.LINES):F.isLineLoop?ie.setMode(U.LINE_LOOP):ie.setMode(U.LINE_STRIP)}else F.isPoints?ie.setMode(U.POINTS):F.isSprite&&ie.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ie.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Tt=F._multiDrawStarts,Qe=F._multiDrawCounts,ae=F._multiDrawCount,ti=xt?k.get(xt).bytesPerElement:1,Hs=Rt.get(G).currentProgram.getUniforms();for(let An=0;An<ae;An++)Hs.setValue(U,"_gl_DrawID",An),ie.render(Tt[An]/ti,Qe[An])}else if(F.isInstancedMesh)ie.renderInstances(ne,Te,F.count);else if(H.isInstancedBufferGeometry){const Tt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Qe=Math.min(H.instanceCount,Tt);ie.renderInstances(ne,Te,Qe)}else ie.render(ne,Te)};function Ke(b,z,H){b.transparent===!0&&b.side===oi&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,zl(b,z,H),b.side=ka,b.needsUpdate=!0,zl(b,z,H),b.side=oi):zl(b,z,H)}this.compile=function(b,z,H=null){H===null&&(H=b),m=pt.get(H),m.init(z),_.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==H&&b.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const G=new Set;return b.traverse(function(F){const lt=F.material;if(lt)if(Array.isArray(lt))for(let mt=0;mt<lt.length;mt++){const vt=lt[mt];Ke(vt,H,F),G.add(vt)}else Ke(lt,H,F),G.add(lt)}),_.pop(),m=null,G},this.compileAsync=function(b,z,H=null){const G=this.compile(b,z,H);return new Promise(F=>{function lt(){if(G.forEach(function(mt){Rt.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){F(b);return}setTimeout(lt,10)}Kt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ee=null;function Ui(b){ee&&ee(b)}function pi(){Qa.stop()}function Dm(){Qa.start()}const Qa=new iS;Qa.setAnimationLoop(Ui),typeof self<"u"&&Qa.setContext(self),this.setAnimationLoop=function(b){ee=b,ot.setAnimationLoop(b),b===null?Qa.stop():Qa.start()},ot.addEventListener("sessionstart",pi),ot.addEventListener("sessionend",Dm),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(z),z=ot.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,z,T),m=pt.get(b,_.length),m.init(z),_.push(m),gt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ft.setFromProjectionMatrix(gt),it=this.localClippingEnabled,j=Nt.init(this.clippingPlanes,it),x=ut.get(b,u.length),x.init(),u.push(x),ot.enabled===!0&&ot.isPresenting===!0){const lt=g.xr.getDepthSensingMesh();lt!==null&&uf(lt,z,-1/0,g.sortObjects)}uf(b,z,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,Q),zt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,zt&&dt.addToRenderList(x,b),this.info.render.frame++,j===!0&&Nt.beginShadows();const H=m.state.shadowsArray;rt.render(H,b,z),j===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=x.opaque,F=x.transmissive;if(m.setupLights(),z.isArrayCamera){const lt=z.cameras;if(F.length>0)for(let mt=0,vt=lt.length;mt<vt;mt++){const xt=lt[mt];Um(G,F,b,xt)}zt&&dt.render(b);for(let mt=0,vt=lt.length;mt<vt;mt++){const xt=lt[mt];Lm(x,b,xt,xt.viewport)}}else F.length>0&&Um(G,F,b,z),zt&&dt.render(b),Lm(x,b,z);T!==null&&(Pt.updateMultisampleRenderTarget(T),Pt.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(g,b,z),Ht.resetDefaultState(),L=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],j===!0&&Nt.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function uf(b,z,H,G){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ft.intersectsSprite(b)){G&&Mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const mt=nt.update(b),vt=b.material;vt.visible&&x.push(b,mt,vt,H,Mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ft.intersectsObject(b))){const mt=nt.update(b),vt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Mt.copy(b.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Mt.copy(mt.boundingSphere.center)),Mt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(vt)){const xt=mt.groups;for(let Ut=0,Ot=xt.length;Ut<Ot;Ut++){const Et=xt[Ut],ne=vt[Et.materialIndex];ne&&ne.visible&&x.push(b,mt,ne,H,Mt.z,Et)}}else vt.visible&&x.push(b,mt,vt,H,Mt.z,null)}}const lt=b.children;for(let mt=0,vt=lt.length;mt<vt;mt++)uf(lt[mt],z,H,G)}function Lm(b,z,H,G){const F=b.opaque,lt=b.transmissive,mt=b.transparent;m.setupLightsView(H),j===!0&&Nt.setGlobalState(g.clippingPlanes,H),G&&bt.viewport(S.copy(G)),F.length>0&&Ol(F,z,H),lt.length>0&&Ol(lt,z,H),mt.length>0&&Ol(mt,z,H),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Um(b,z,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new On(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?ui:sa,minFilter:ps,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const lt=m.state.transmissionRenderTarget[G.id],mt=G.viewport||S;lt.setSize(mt.z,mt.w);const vt=g.getRenderTarget();g.setRenderTarget(lt),g.getClearColor(B),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),g.clear(),zt&&dt.render(H);const xt=g.toneMapping;g.toneMapping=Fa;const Ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),j===!0&&Nt.setGlobalState(g.clippingPlanes,G),Ol(b,H,G),Pt.updateMultisampleRenderTarget(lt),Pt.updateRenderTargetMipmap(lt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Et=0,ne=z.length;Et<ne;Et++){const Ee=z[Et],Te=Ee.object,Tn=Ee.geometry,ie=Ee.material,Tt=Ee.group;if(ie.side===oi&&Te.layers.test(G.layers)){const Qe=ie.side;ie.side=Mn,ie.needsUpdate=!0,Pm(Te,H,G,Tn,ie,Tt),ie.side=Qe,ie.needsUpdate=!0,Ot=!0}}Ot===!0&&(Pt.updateMultisampleRenderTarget(lt),Pt.updateRenderTargetMipmap(lt))}g.setRenderTarget(vt),g.setClearColor(B,q),Ut!==void 0&&(G.viewport=Ut),g.toneMapping=xt}function Ol(b,z,H){const G=z.isScene===!0?z.overrideMaterial:null;for(let F=0,lt=b.length;F<lt;F++){const mt=b[F],vt=mt.object,xt=mt.geometry,Ut=G===null?mt.material:G,Ot=mt.group;vt.layers.test(H.layers)&&Pm(vt,z,H,xt,Ut,Ot)}}function Pm(b,z,H,G,F,lt){b.onBeforeRender(g,z,H,G,F,lt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(g,z,H,G,b,lt),F.transparent===!0&&F.side===oi&&F.forceSinglePass===!1?(F.side=Mn,F.needsUpdate=!0,g.renderBufferDirect(H,z,G,F,b,lt),F.side=ka,F.needsUpdate=!0,g.renderBufferDirect(H,z,G,F,b,lt),F.side=oi):g.renderBufferDirect(H,z,G,F,b,lt),b.onAfterRender(g,z,H,G,F,lt)}function zl(b,z,H){z.isScene!==!0&&(z=Ct);const G=Rt.get(b),F=m.state.lights,lt=m.state.shadowsArray,mt=F.state.version,vt=et.getParameters(b,F.state,lt,z,H),xt=et.getProgramCacheKey(vt);let Ut=G.programs;G.environment=b.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(b.isMeshStandardMaterial?M:C).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",Lt),Ut=new Map,G.programs=Ut);let Ot=Ut.get(xt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===mt)return Om(b,vt),Ot}else vt.uniforms=et.getUniforms(b),b.onBeforeCompile(vt,g),Ot=et.acquireProgram(vt,xt),Ut.set(xt,Ot),G.uniforms=vt.uniforms;const Et=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Et.clippingPlanes=Nt.uniform),Om(b,vt),G.needsLights=wS(b),G.lightsStateVersion=mt,G.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function Nm(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=$c.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Om(b,z){const H=Rt.get(b);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.batchingColor=z.batchingColor,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.instancingMorph=z.instancingMorph,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function TS(b,z,H,G,F){z.isScene!==!0&&(z=Ct),Pt.resetTextureUnits();const lt=z.fog,mt=G.isMeshStandardMaterial?z.environment:null,vt=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qa,xt=(G.isMeshStandardMaterial?M:C).get(G.envMap||mt),Ut=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!H.morphAttributes.position,ne=!!H.morphAttributes.normal,Ee=!!H.morphAttributes.color;let Te=Fa;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Te=g.toneMapping);const Tn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=Tn!==void 0?Tn.length:0,Tt=Rt.get(G),Qe=m.state.lights;if(j===!0&&(it===!0||b!==E)){const Fn=b===E&&G.id===L;Nt.setState(G,b,Fn)}let ae=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Qe.state.version||Tt.outputColorSpace!==vt||F.isBatchedMesh&&Tt.batching===!1||!F.isBatchedMesh&&Tt.batching===!0||F.isBatchedMesh&&Tt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Tt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Tt.instancing===!1||!F.isInstancedMesh&&Tt.instancing===!0||F.isSkinnedMesh&&Tt.skinning===!1||!F.isSkinnedMesh&&Tt.skinning===!0||F.isInstancedMesh&&Tt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Tt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Tt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Tt.instancingMorph===!1&&F.morphTexture!==null||Tt.envMap!==xt||G.fog===!0&&Tt.fog!==lt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Nt.numPlanes||Tt.numIntersection!==Nt.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Ot||Tt.morphTargets!==Et||Tt.morphNormals!==ne||Tt.morphColors!==Ee||Tt.toneMapping!==Te||Tt.morphTargetsCount!==ie)&&(ae=!0):(ae=!0,Tt.__version=G.version);let ti=Tt.currentProgram;ae===!0&&(ti=zl(G,z,F));let Hs=!1,An=!1,ff=!1;const Le=ti.getUniforms(),la=Tt.uniforms;if(bt.useProgram(ti.program)&&(Hs=!0,An=!0,ff=!0),G.id!==L&&(L=G.id,An=!0),Hs||E!==b){Le.setValue(U,"projectionMatrix",b.projectionMatrix),Le.setValue(U,"viewMatrix",b.matrixWorldInverse);const Fn=Le.map.cameraPosition;Fn!==void 0&&Fn.setValue(U,st.setFromMatrixPosition(b.matrixWorld)),$t.logarithmicDepthBuffer&&Le.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Le.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,An=!0,ff=!0)}if(F.isSkinnedMesh){Le.setOptional(U,F,"bindMatrix"),Le.setOptional(U,F,"bindMatrixInverse");const Fn=F.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Le.setValue(U,"boneTexture",Fn.boneTexture,Pt))}F.isBatchedMesh&&(Le.setOptional(U,F,"batchingTexture"),Le.setValue(U,"batchingTexture",F._matricesTexture,Pt),Le.setOptional(U,F,"batchingIdTexture"),Le.setValue(U,"batchingIdTexture",F._indirectTexture,Pt),Le.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&Le.setValue(U,"batchingColorTexture",F._colorsTexture,Pt));const hf=H.morphAttributes;if((hf.position!==void 0||hf.normal!==void 0||hf.color!==void 0)&&qt.update(F,H,ti),(An||Tt.receiveShadow!==F.receiveShadow)&&(Tt.receiveShadow=F.receiveShadow,Le.setValue(U,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(la.envMap.value=xt,la.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&z.environment!==null&&(la.envMapIntensity.value=z.environmentIntensity),An&&(Le.setValue(U,"toneMappingExposure",g.toneMappingExposure),Tt.needsLights&&AS(la,ff),lt&&G.fog===!0&&At.refreshFogUniforms(la,lt),At.refreshMaterialUniforms(la,G,W,N,m.state.transmissionRenderTarget[b.id]),$c.upload(U,Nm(Tt),la,Pt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&($c.upload(U,Nm(Tt),la,Pt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Le.setValue(U,"center",F.center),Le.setValue(U,"modelViewMatrix",F.modelViewMatrix),Le.setValue(U,"normalMatrix",F.normalMatrix),Le.setValue(U,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Fn=G.uniformsGroups;for(let df=0,CS=Fn.length;df<CS;df++){const zm=Fn[df];se.update(zm,ti),se.bind(zm,ti)}}return ti}function AS(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function wS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,z,H){Rt.get(b.texture).__webglTexture=z,Rt.get(b.depthTexture).__webglTexture=H;const G=Rt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const H=Rt.get(b);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,H=0){T=b,w=z,A=H;let G=!0,F=null,lt=!1,mt=!1;if(b){const xt=Rt.get(b);if(xt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(xt.__webglFramebuffer===void 0)Pt.setupRenderTarget(b);else if(xt.__hasExternalTextures)Pt.rebindTextures(b,Rt.get(b.texture).__webglTexture,Rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Et=b.depthTexture;if(xt.__boundDepthTexture!==Et){if(Et!==null&&Rt.has(Et)&&(b.width!==Et.image.width||b.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(b)}}const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(mt=!0);const Ot=Rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[z])?F=Ot[z][H]:F=Ot[z],lt=!0):b.samples>0&&Pt.useMultisampledRTT(b)===!1?F=Rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?F=Ot[H]:F=Ot,S.copy(b.viewport),R.copy(b.scissor),X=b.scissorTest}else S.copy(at).multiplyScalar(W).floor(),R.copy(ht).multiplyScalar(W).floor(),X=wt;if(bt.bindFramebuffer(U.FRAMEBUFFER,F)&&G&&bt.drawBuffers(b,F),bt.viewport(S),bt.scissor(R),bt.setScissorTest(X),lt){const xt=Rt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt.__webglTexture,H)}else if(mt){const xt=Rt.get(b.texture),Ut=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.__webglTexture,H||0,Ut)}L=-1},this.readRenderTargetPixels=function(b,z,H,G,F,lt,mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(vt=vt[mt]),vt){bt.bindFramebuffer(U.FRAMEBUFFER,vt);try{const xt=b.texture,Ut=xt.format,Ot=xt.type;if(!$t.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-G&&H>=0&&H<=b.height-F&&U.readPixels(z,H,G,F,It.convert(Ut),It.convert(Ot),lt)}finally{const xt=T!==null?Rt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(b,z,H,G,F,lt,mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&mt!==void 0&&(vt=vt[mt]),vt){bt.bindFramebuffer(U.FRAMEBUFFER,vt);try{const xt=b.texture,Ut=xt.format,Ot=xt.type;if(!$t.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-G&&H>=0&&H<=b.height-F){const Et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.bufferData(U.PIXEL_PACK_BUFFER,lt.byteLength,U.STREAM_READ),U.readPixels(z,H,G,F,It.convert(Ut),It.convert(Ot),0),U.flush();const ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await jE(U,ne,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,lt)}finally{U.deleteBuffer(Et),U.deleteSync(ne)}return lt}}finally{const xt=T!==null?Rt.get(T).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,xt)}}},this.copyFramebufferToTexture=function(b,z=null,H=0){b.isTexture!==!0&&(tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(b.image.width*G),lt=Math.floor(b.image.height*G),mt=z!==null?z.x:0,vt=z!==null?z.y:0;Pt.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,mt,vt,F,lt),bt.unbindTexture()},this.copyTextureToTexture=function(b,z,H=null,G=null,F=0){b.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],z=arguments[2],F=arguments[3]||0,H=null);let lt,mt,vt,xt,Ut,Ot;H!==null?(lt=H.max.x-H.min.x,mt=H.max.y-H.min.y,vt=H.min.x,xt=H.min.y):(lt=b.image.width,mt=b.image.height,vt=0,xt=0),G!==null?(Ut=G.x,Ot=G.y):(Ut=0,Ot=0);const Et=It.convert(z.format),ne=It.convert(z.type);Pt.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Ee=U.getParameter(U.UNPACK_ROW_LENGTH),Te=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Tn=U.getParameter(U.UNPACK_SKIP_PIXELS),ie=U.getParameter(U.UNPACK_SKIP_ROWS),Tt=U.getParameter(U.UNPACK_SKIP_IMAGES),Qe=b.isCompressedTexture?b.mipmaps[F]:b.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Qe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,xt),b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,Ut,Ot,lt,mt,Et,ne,Qe.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,Ut,Ot,Qe.width,Qe.height,Et,Qe.data):U.texSubImage2D(U.TEXTURE_2D,F,Ut,Ot,lt,mt,Et,ne,Qe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ee),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Te),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Tn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ie),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Tt),F===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(b,z,H=null,G=null,F=0){b.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],z=arguments[3],F=arguments[4]||0);let lt,mt,vt,xt,Ut,Ot,Et,ne,Ee;const Te=b.isCompressedTexture?b.mipmaps[F]:b.image;H!==null?(lt=H.max.x-H.min.x,mt=H.max.y-H.min.y,vt=H.max.z-H.min.z,xt=H.min.x,Ut=H.min.y,Ot=H.min.z):(lt=Te.width,mt=Te.height,vt=Te.depth,xt=0,Ut=0,Ot=0),G!==null?(Et=G.x,ne=G.y,Ee=G.z):(Et=0,ne=0,Ee=0);const Tn=It.convert(z.format),ie=It.convert(z.type);let Tt;if(z.isData3DTexture)Pt.setTexture3D(z,0),Tt=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Pt.setTexture2DArray(z,0),Tt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Qe=U.getParameter(U.UNPACK_ROW_LENGTH),ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ti=U.getParameter(U.UNPACK_SKIP_PIXELS),Hs=U.getParameter(U.UNPACK_SKIP_ROWS),An=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Te.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Te.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot),b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Tt,F,Et,ne,Ee,lt,mt,vt,Tn,ie,Te.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,F,Et,ne,Ee,lt,mt,vt,Tn,Te.data):U.texSubImage3D(Tt,F,Et,ne,Ee,lt,mt,vt,Tn,ie,Te),U.pixelStorei(U.UNPACK_ROW_LENGTH,Qe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ti),U.pixelStorei(U.UNPACK_SKIP_ROWS,Hs),U.pixelStorei(U.UNPACK_SKIP_IMAGES,An),F===0&&z.generateMipmaps&&U.generateMipmap(Tt),bt.unbindTexture()},this.initRenderTarget=function(b){Rt.get(b).__webglFramebuffer===void 0&&Pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Pt.setTextureCube(b,0):b.isData3DTexture?Pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Pt.setTexture2DArray(b,0):Pt.setTexture2D(b,0),bt.unbindTexture()},this.resetState=function(){w=0,A=0,T=null,bt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===vm?"display-p3":"srgb",n.unpackColorSpace=te.workingColorSpace===sf?"display-p3":"srgb"}}class Nu extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cS extends gn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=ln,f=ln,h,d){super(null,r,o,l,c,f,a,s,h,d),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Em extends Ya{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ou=new D,zu=new D,n0=new re,Ao=new rf,bc=new Nl,Sh=new D,i0=new D;class uS extends He{constructor(t=new Jn,n=new Em){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Ou.fromBufferAttribute(n,a-1),zu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Ou.distanceTo(zu);t.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(a),bc.radius+=s,t.ray.intersectsSphere(bc)===!1)return;n0.copy(a).invert(),Ao.copy(t.ray).applyMatrix4(n0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const p=Math.max(0,r.start),v=Math.min(f.count,r.start+r.count);for(let x=p,m=v-1;x<m;x+=c){const u=f.getX(x),_=f.getX(x+1),g=Ec(this,t,Ao,l,u,_);g&&n.push(g)}if(this.isLineLoop){const x=f.getX(v-1),m=f.getX(p),u=Ec(this,t,Ao,l,x,m);u&&n.push(u)}}else{const p=Math.max(0,r.start),v=Math.min(d.count,r.start+r.count);for(let x=p,m=v-1;x<m;x+=c){const u=Ec(this,t,Ao,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=Ec(this,t,Ao,l,v-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ec(e,t,n,i,a,s){const r=e.geometry.attributes.position;if(Ou.fromBufferAttribute(r,a),zu.fromBufferAttribute(r,s),n.distanceSqToSegment(Ou,zu,Sh,i0)>i)return;Sh.applyMatrix4(e.matrixWorld);const l=t.ray.origin.distanceTo(Sh);if(!(l<t.near||l>t.far))return{distance:l,point:i0.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,object:e}}const a0=new D,s0=new D;class tR extends uS{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)a0.fromBufferAttribute(n,a),s0.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+a0.distanceTo(s0);t.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}let eR=class extends Ya{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};const r0=new re,ep=new rf,Tc=new Nl,Ac=new D;class nR extends He{constructor(t=new Jn,n=new eR){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(a),Tc.radius+=s,t.ray.intersectsSphere(Tc)===!1)return;r0.copy(a).invert(),ep.copy(t.ray).applyMatrix4(r0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let v=d,x=p;v<x;v++){const m=c.getX(v);Ac.fromBufferAttribute(h,m),o0(Ac,m,l,a,t,n,this)}}else{const d=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let v=d,x=p;v<x;v++)Ac.fromBufferAttribute(h,v),o0(Ac,v,l,a,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function o0(e,t,n,i,a,s,r){const o=ep.distanceSqToPoint(e);if(o<n){const l=new D;ep.closestPointToPoint(e,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}class iR extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class aR extends Ya{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_m,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sR extends aR{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new St(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class rR extends Ya{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_m,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class fS extends He{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Mh=new re,l0=new D,c0=new D;class oR{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ym,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;l0.setFromMatrixPosition(t.matrixWorld),n.position.copy(l0),c0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(c0),n.updateMatrixWorld(),Mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lR extends oR{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const n=this.camera,i=$r*2*t.angle*this.focus,a=this.mapSize.width/this.mapSize.height,s=t.distance||n.far;(i!==n.fov||a!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=a,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class cR extends fS{constructor(t,n,i=0,a=Math.PI/3,s=0,r=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=i,this.angle=a,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new lR}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uR extends fS{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class hS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=u0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=u0();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function u0(){return(typeof performance>"u"?Date:performance).now()}class f0{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fR extends tR{constructor(t=1){const n=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Jn;a.setAttribute("position",new zn(n,3)),a.setAttribute("color",new zn(i,3));const s=new Em({vertexColors:!0,toneMapped:!1});super(a,s),this.type="AxesHelper"}setColors(t,n,i){const a=new yt,s=this.geometry.attributes.color.array;return a.set(t),a.toArray(s,0),a.toArray(s,3),a.set(n),a.toArray(s,6),a.toArray(s,9),a.set(i),a.toArray(s,12),a.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class hR extends zs{constructor(t,n){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lm);var yn=Object.freeze({Linear:Object.freeze({None:function(e){return e},In:function(e){return this.None(e)},Out:function(e){return this.None(e)},InOut:function(e){return this.None(e)}}),Quadratic:Object.freeze({In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}}),Cubic:Object.freeze({In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}}),Quartic:Object.freeze({In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}}),Quintic:Object.freeze({In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}}),Sinusoidal:Object.freeze({In:function(e){return 1-Math.sin((1-e)*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.sin(Math.PI*(.5-e)))}}),Exponential:Object.freeze({In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}}),Circular:Object.freeze({In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}}),Elastic:Object.freeze({In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(e){var t=1.70158;return e===1?1:e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return e===0?0:--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}}),Bounce:Object.freeze({In:function(e){return 1-yn.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?yn.Bounce.In(e*2)*.5:yn.Bounce.Out(e*2-1)*.5+.5}}),generatePow:function(e){return e===void 0&&(e=4),e=e<Number.EPSILON?Number.EPSILON:e,e=e>1e4?1e4:e,{In:function(t){return Math.pow(t,e)},Out:function(t){return 1-Math.pow(1-t,e)},InOut:function(t){return t<.5?Math.pow(t*2,e)/2:(1-Math.pow(2-t*2,e))/2+.5}}}}),wr=function(){return performance.now()},dS=function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(n){return t._tweens[n]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},e.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},e.prototype.update=function(t,n){t===void 0&&(t=wr()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var a=0;a<i.length;a++){var s=this._tweens[i[a]],r=!n;s&&s.update(t,r)===!1&&!n&&delete this._tweens[i[a]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},e}(),ms={Linear:function(e,t){var n=e.length-1,i=n*t,a=Math.floor(i),s=ms.Utils.Linear;return t<0?s(e[0],e[1],i):t>1?s(e[n],e[n-1],n-i):s(e[a],e[a+1>n?n:a+1],i-a)},Bezier:function(e,t){for(var n=0,i=e.length-1,a=Math.pow,s=ms.Utils.Bernstein,r=0;r<=i;r++)n+=a(1-t,i-r)*a(t,r)*e[r]*s(i,r);return n},CatmullRom:function(e,t){var n=e.length-1,i=n*t,a=Math.floor(i),s=ms.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(a=Math.floor(i=n*(1+t))),s(e[(a-1+n)%n],e[a],e[(a+1)%n],e[(a+2)%n],i-a)):t<0?e[0]-(s(e[0],e[0],e[1],e[1],-i)-e[0]):t>1?e[n]-(s(e[n],e[n],e[n-1],e[n-1],i-n)-e[n]):s(e[a?a-1:0],e[a],e[n<a+1?n:a+1],e[n<a+2?n:a+2],i-a)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=ms.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:function(){var e=[1];return function(t){var n=1;if(e[t])return e[t];for(var i=t;i>1;i--)n*=i;return e[t]=n,n}}(),CatmullRom:function(e,t,n,i,a){var s=(n-e)*.5,r=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+s+r)*l+(-3*t+3*n-2*s-r)*o+s*a+t}}},Tm=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),np=new dS,dR=function(){function e(t,n){n===void 0&&(n=np),this._object=t,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=yn.Linear.None,this._interpolationFunction=ms.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Tm.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.to=function(t,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=n,this},e.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t,this},e.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},e.prototype.start=function(t,n){if(t===void 0&&(t=wr()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var a={};for(var s in this._valuesEnd)a[s]=this._valuesEnd[s];this._valuesEnd=a}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},e.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},e.prototype._setupProperties=function(t,n,i,a,s){for(var r in i){var o=t[r],l=Array.isArray(o),c=l?"array":typeof o,f=!l&&Array.isArray(i[r]);if(!(c==="undefined"||c==="function")){if(f){var h=i[r];if(h.length===0)continue;for(var d=[o],p=0,v=h.length;p<v;p+=1){var x=this._handleRelativeValue(o,h[p]);if(isNaN(x)){f=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(x)}f&&(i[r]=d)}if((c==="object"||l)&&o&&!f){n[r]=l?[]:{};var m=o;for(var u in m)n[r][u]=m[u];a[r]=l?[]:{};var h=i[r];if(!this._isDynamic){var _={};for(var u in h)_[u]=h[u];i[r]=h=_}this._setupProperties(m,n[r],h,a[r],s)}else(typeof n[r]>"u"||s)&&(n[r]=o),l||(n[r]*=1),f?a[r]=i[r].slice().reverse():a[r]=n[r]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(t){return t===void 0&&(t=wr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},e.prototype.resume=function(t){return t===void 0&&(t=wr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop();return this},e.prototype.group=function(t){return t===void 0&&(t=np),this._group=t,this},e.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},e.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},e.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},e.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},e.prototype.easing=function(t){return t===void 0&&(t=yn.Linear.None),this._easingFunction=t,this},e.prototype.interpolation=function(t){return t===void 0&&(t=ms.Linear),this._interpolationFunction=t,this},e.prototype.chain=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this._chainedTweens=t,this},e.prototype.onStart=function(t){return this._onStartCallback=t,this},e.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},e.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},e.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},e.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},e.prototype.onStop=function(t){return this._onStopCallback=t,this},e.prototype.update=function(t,n){if(t===void 0&&(t=wr()),n===void 0&&(n=!0),this._isPaused)return!0;var i,a,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>s)return!1;n&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),a=(t-this._startTime)/this._duration,a=this._duration===0||a>1?1:a;var r=this._easingFunction(a);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,r),this._onUpdateCallback&&this._onUpdateCallback(this._object,a),a===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(t,n,i,a){for(var s in i)if(n[s]!==void 0){var r=n[s]||0,o=i[s],l=Array.isArray(t[s]),c=Array.isArray(o),f=!l&&c;f?t[s]=this._interpolationFunction(o,a):typeof o=="object"&&o?this._updateProperties(t[s],r,o,a):(o=this._handleRelativeValue(r,o),typeof o=="number"&&(t[s]=r+(o-r)*a))}},e.prototype._handleRelativeValue=function(t,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?t+parseFloat(n):parseFloat(n)},e.prototype._swapEndStartRepeatValues=function(t){var n=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=n},e}(),pR="20.0.3",mR=Tm.nextId,Ri=np,gR=Ri.getAll.bind(Ri),_R=Ri.removeAll.bind(Ri),vR=Ri.add.bind(Ri),xR=Ri.remove.bind(Ri),pS=Ri.update.bind(Ri),ip={Easing:yn,Group:dS,Interpolation:ms,now:wr,Sequence:Tm,nextId:mR,Tween:dR,VERSION:pR,getAll:gR,removeAll:_R,add:vR,remove:xR,update:pS};const h0=new D,yR=new ra,d0=new D;class SR extends He{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof Element&&n.element.parentNode!==null&&n.element.parentNode.removeChild(n.element)})})}copy(t,n){return super.copy(t,n),this.element=t.element.cloneNode(!0),this}}const mi=new re,MR=new re;class bR{constructor(t={}){const n=this;let i,a,s,r;const o={camera:{style:""},objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const f=document.createElement("div");f.style.transformStyle="preserve-3d",c.appendChild(f),this.getSize=function(){return{width:i,height:a}},this.render=function(m,u){const _=u.projectionMatrix.elements[5]*r;u.view&&u.view.enabled?(c.style.transform=`translate( ${-u.view.offsetX*(i/u.view.width)}px, ${-u.view.offsetY*(a/u.view.height)}px )`,c.style.transform+=`scale( ${u.view.fullWidth/u.view.width}, ${u.view.fullHeight/u.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),u.parent===null&&u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld();let g,y;u.isOrthographicCamera&&(g=-(u.right+u.left)/2,y=(u.top+u.bottom)/2);const w=u.view&&u.view.enabled?u.view.height/u.view.fullHeight:1,A=u.isOrthographicCamera?`scale( ${w} )scale(`+_+")translate("+h(g)+"px,"+h(y)+"px)"+d(u.matrixWorldInverse):`scale( ${w} )translateZ(`+_+"px)"+d(u.matrixWorldInverse),L=(u.isPerspectiveCamera?"perspective("+_+"px) ":"")+A+"translate("+s+"px,"+r+"px)";o.camera.style!==L&&(f.style.transform=L,o.camera.style=L),x(m,m,u)},this.setSize=function(m,u){i=m,a=u,s=i/2,r=a/2,l.style.width=m+"px",l.style.height=u+"px",c.style.width=m+"px",c.style.height=u+"px",f.style.width=m+"px",f.style.height=u+"px"};function h(m){return Math.abs(m)<1e-10?0:m}function d(m){const u=m.elements;return"matrix3d("+h(u[0])+","+h(-u[1])+","+h(u[2])+","+h(u[3])+","+h(u[4])+","+h(-u[5])+","+h(u[6])+","+h(u[7])+","+h(u[8])+","+h(-u[9])+","+h(u[10])+","+h(u[11])+","+h(u[12])+","+h(-u[13])+","+h(u[14])+","+h(u[15])+")"}function p(m){const u=m.elements;return"translate(-50%,-50%)"+("matrix3d("+h(u[0])+","+h(u[1])+","+h(u[2])+","+h(u[3])+","+h(-u[4])+","+h(-u[5])+","+h(-u[6])+","+h(-u[7])+","+h(u[8])+","+h(u[9])+","+h(u[10])+","+h(u[11])+","+h(u[12])+","+h(u[13])+","+h(u[14])+","+h(u[15])+")")}function v(m){m.isCSS3DObject&&(m.element.style.display="none");for(let u=0,_=m.children.length;u<_;u++)v(m.children[u])}function x(m,u,_,g){if(m.visible===!1){v(m);return}if(m.isCSS3DObject){const y=m.layers.test(_.layers)===!0,w=m.element;if(w.style.display=y===!0?"":"none",y===!0){m.onBeforeRender(n,u,_);let A;m.isCSS3DSprite?(mi.copy(_.matrixWorldInverse),mi.transpose(),m.rotation2D!==0&&mi.multiply(MR.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(h0,yR,d0),mi.setPosition(h0),mi.scale(d0),mi.elements[3]=0,mi.elements[7]=0,mi.elements[11]=0,mi.elements[15]=1,A=p(mi)):A=p(m.matrixWorld);const T=o.objects.get(m);if(T===void 0||T.style!==A){w.style.transform=A;const L={style:A};o.objects.set(m,L)}w.parentNode!==f&&f.appendChild(w),m.onAfterRender(n,u,_)}}for(let y=0,w=m.children.length;y<w;y++)x(m.children[y],u,_)}}}const p0={type:"change"},Am={type:"start"},mS={type:"end"},wc=new rf,m0=new Sa,ER=Math.cos(70*jy.DEG2RAD),ze=new D,vn=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6;class TR extends hR{constructor(t,n=null){super(t,n),this.state=ce.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ra,this._lastTargetPosition=new D,this._quat=new ra().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new f0,this._sphericalDelta=new f0,this._scale=1,this._panOffset=new D,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new D,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wR.bind(this),this._onPointerDown=AR.bind(this),this._onPointerUp=CR.bind(this),this._onContextMenu=OR.bind(this),this._onMouseWheel=LR.bind(this),this._onKeyDown=UR.bind(this),this._onTouchStart=PR.bind(this),this._onTouchMove=NR.bind(this),this._onMouseDown=RR.bind(this),this._onMouseMove=DR.bind(this),this._interceptControlDown=zR.bind(this),this._interceptControlUp=IR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(p0),this.update(),this.state=ce.NONE}update(t=null){const n=this.object.position;ze.copy(n).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),a<-Math.PI?a+=vn:a>Math.PI&&(a-=vn),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),n.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=ze.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<ER?this.object.lookAt(this.target):(m0.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(m0,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(p0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?vn/60*this.autoRotateSpeed*t:vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){ze.setFromMatrixColumn(n,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,n){this.screenSpacePanning===!0?ze.setFromMatrixColumn(n,1):(ze.setFromMatrixColumn(n,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;ze.copy(a).sub(this.target);let s=ze.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=t-i.left,s=n-i.top,r=i.width,o=i.height;this._mouse.x=a/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panStart.set(i,a)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,s=Math.sqrt(i*i+a*a);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),a=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(a,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/n.clientHeight),this._rotateUp(vn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,a=t.pageY-n.y,s=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new St,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function AR(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function wR(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function CR(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mS),this.state=ce.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function RR(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ce.DOLLY;break;case Ir.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ce.ROTATE}break;case Ir.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Am)}function DR(e){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function LR(e){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(e.preventDefault(),this.dispatchEvent(Am),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(mS))}function UR(e){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(e)}function PR(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ce.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ce.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(Am)}function NR(e){switch(this._trackPointer(e),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ce.NONE}}function OR(e){this.enabled!==!1&&e.preventDefault()}function zR(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IR(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const el={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FR=new aS(-1,1,1,-1,0,1);class BR extends Jn{constructor(){super(),this.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zn([0,2,0,0,2,0],2))}}const HR=new BR;class cf{constructor(t){this._mesh=new Sn(HR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,FR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class VR extends Fs{constructor(t,n){super(),this.textureID=n!==void 0?n:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ji.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new cf(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class g0 extends Fs{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){const a=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}}class GR extends Fs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class gS{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const i=t.getSize(new St);this._width=i.width,this._height=i.height,n=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new VR(el),this.copyPass.material.blending=fn,this.clock=new hS}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let a=0,s=this.passes.length;a<s;a++){const r=this.passes[a];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}g0!==void 0&&(r instanceof g0?i=!0:r instanceof GR&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new St);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kR extends Fs{constructor(t,n,i=null,a=null,s=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,n,i){const a=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=a}}const XR={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class to extends Fs{constructor(t,n,i,a){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=a,this.resolution=t!==void 0?new St(t.x,t.y):new St(256,256),this.clearColor=new yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new On(s,r,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new On(s,r,{type:ui});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new On(s,r,{type:ui});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),r=Math.round(r/2)}const o=XR;this.highPassUniforms=Ji.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new St(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=el;this.copyUniforms=Ji.clone(f.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Sd,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new yt,this.oldClearAlpha=1,this.basic=new of,this.fsQuad=new cf(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),a=Math.round(n/2);this.renderTargetBright.setSize(i,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,a),this.renderTargetsVertical[s].setSize(i,a),this.separableBlurMaterials[s].uniforms.invSize.value=new St(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(t,n,i,a,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=to.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=to.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const n=[];for(let i=0;i<t;i++)n.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new St(.5,.5)},direction:{value:new St(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}to.BlurDirectionX=new St(1,0);to.BlurDirectionY=new St(0,1);class WR{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let n=0;n<256;n++)this.p[n]=Math.floor(t.random()*256);this.perm=[];for(let n=0;n<512;n++)this.perm[n]=this.p[n&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,n,i){return t[0]*n+t[1]*i}dot3(t,n,i,a){return t[0]*n+t[1]*i+t[2]*a}dot4(t,n,i,a,s){return t[0]*n+t[1]*i+t[2]*a+t[3]*s}noise(t,n){let i,a,s;const r=.5*(Math.sqrt(3)-1),o=(t+n)*r,l=Math.floor(t+o),c=Math.floor(n+o),f=(3-Math.sqrt(3))/6,h=(l+c)*f,d=l-h,p=c-h,v=t-d,x=n-p;let m,u;v>x?(m=1,u=0):(m=0,u=1);const _=v-m+f,g=x-u+f,y=v-1+2*f,w=x-1+2*f,A=l&255,T=c&255,L=this.perm[A+this.perm[T]]%12,E=this.perm[A+m+this.perm[T+u]]%12,S=this.perm[A+1+this.perm[T+1]]%12;let R=.5-v*v-x*x;R<0?i=0:(R*=R,i=R*R*this.dot(this.grad3[L],v,x));let X=.5-_*_-g*g;X<0?a=0:(X*=X,a=X*X*this.dot(this.grad3[E],_,g));let B=.5-y*y-w*w;return B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[S],y,w)),70*(i+a+s)}noise3d(t,n,i){let a,s,r,o;const c=(t+n+i)*.3333333333333333,f=Math.floor(t+c),h=Math.floor(n+c),d=Math.floor(i+c),p=1/6,v=(f+h+d)*p,x=f-v,m=h-v,u=d-v,_=t-x,g=n-m,y=i-u;let w,A,T,L,E,S;_>=g?g>=y?(w=1,A=0,T=0,L=1,E=1,S=0):_>=y?(w=1,A=0,T=0,L=1,E=0,S=1):(w=0,A=0,T=1,L=1,E=0,S=1):g<y?(w=0,A=0,T=1,L=0,E=1,S=1):_<y?(w=0,A=1,T=0,L=0,E=1,S=1):(w=0,A=1,T=0,L=1,E=1,S=0);const R=_-w+p,X=g-A+p,B=y-T+p,q=_-L+2*p,$=g-E+2*p,N=y-S+2*p,W=_-1+3*p,I=g-1+3*p,Q=y-1+3*p,at=f&255,ht=h&255,wt=d&255,Ft=this.perm[at+this.perm[ht+this.perm[wt]]]%12,j=this.perm[at+w+this.perm[ht+A+this.perm[wt+T]]]%12,it=this.perm[at+L+this.perm[ht+E+this.perm[wt+S]]]%12,gt=this.perm[at+1+this.perm[ht+1+this.perm[wt+1]]]%12;let st=.6-_*_-g*g-y*y;st<0?a=0:(st*=st,a=st*st*this.dot3(this.grad3[Ft],_,g,y));let Mt=.6-R*R-X*X-B*B;Mt<0?s=0:(Mt*=Mt,s=Mt*Mt*this.dot3(this.grad3[j],R,X,B));let Ct=.6-q*q-$*$-N*N;Ct<0?r=0:(Ct*=Ct,r=Ct*Ct*this.dot3(this.grad3[it],q,$,N));let zt=.6-W*W-I*I-Q*Q;return zt<0?o=0:(zt*=zt,o=zt*zt*this.dot3(this.grad3[gt],W,I,Q)),32*(a+s+r+o)}noise4d(t,n,i,a){const s=this.grad4,r=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let f,h,d,p,v;const x=(t+n+i+a)*l,m=Math.floor(t+x),u=Math.floor(n+x),_=Math.floor(i+x),g=Math.floor(a+x),y=(m+u+_+g)*c,w=m-y,A=u-y,T=_-y,L=g-y,E=t-w,S=n-A,R=i-T,X=a-L,B=E>S?32:0,q=E>R?16:0,$=S>R?8:0,N=E>X?4:0,W=S>X?2:0,I=R>X?1:0,Q=B+q+$+N+W+I,at=r[Q][0]>=3?1:0,ht=r[Q][1]>=3?1:0,wt=r[Q][2]>=3?1:0,Ft=r[Q][3]>=3?1:0,j=r[Q][0]>=2?1:0,it=r[Q][1]>=2?1:0,gt=r[Q][2]>=2?1:0,st=r[Q][3]>=2?1:0,Mt=r[Q][0]>=1?1:0,Ct=r[Q][1]>=1?1:0,zt=r[Q][2]>=1?1:0,me=r[Q][3]>=1?1:0,U=E-at+c,ve=S-ht+c,Kt=R-wt+c,$t=X-Ft+c,bt=E-j+2*c,xe=S-it+2*c,Rt=R-gt+2*c,Pt=X-st+2*c,C=E-Mt+3*c,M=S-Ct+3*c,k=R-zt+3*c,tt=X-me+3*c,nt=E-1+4*c,et=S-1+4*c,At=R-1+4*c,ut=X-1+4*c,pt=m&255,Nt=u&255,rt=_&255,dt=g&255,qt=o[pt+o[Nt+o[rt+o[dt]]]]%32,Dt=o[pt+at+o[Nt+ht+o[rt+wt+o[dt+Ft]]]]%32,_t=o[pt+j+o[Nt+it+o[rt+gt+o[dt+st]]]]%32,It=o[pt+Mt+o[Nt+Ct+o[rt+zt+o[dt+me]]]]%32,Ht=o[pt+1+o[Nt+1+o[rt+1+o[dt+1]]]]%32;let se=.6-E*E-S*S-R*R-X*X;se<0?f=0:(se*=se,f=se*se*this.dot4(s[qt],E,S,R,X));let O=.6-U*U-ve*ve-Kt*Kt-$t*$t;O<0?h=0:(O*=O,h=O*O*this.dot4(s[Dt],U,ve,Kt,$t));let ot=.6-bt*bt-xe*xe-Rt*Rt-Pt*Pt;ot<0?d=0:(ot*=ot,d=ot*ot*this.dot4(s[_t],bt,xe,Rt,Pt));let Y=.6-C*C-M*M-k*k-tt*tt;Y<0?p=0:(Y*=Y,p=Y*Y*this.dot4(s[It],C,M,k,tt));let Z=.6-nt*nt-et*et-At*At-ut*ut;return Z<0?v=0:(Z*=Z,v=Z*Z*this.dot4(s[Ht],nt,et,At,ut)),27*(f+h+d+p+v)}}const Cc={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new St},cameraProjectionMatrix:{value:new re},cameraInverseProjectionMatrix:{value:new re},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Rc={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Dc={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new St}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class wa extends Fs{constructor(t,n,i,a,s=32){super(),this.width=i!==void 0?i:512,this.height=a!==void 0?a:512,this.clear=!0,this.needsSwap=!1,this.camera=n,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const r=new Mm;r.format=Rs,r.type=Cs,this.normalRenderTarget=new On(this.width,this.height,{minFilter:ln,magFilter:ln,type:ui,depthTexture:r}),this.ssaoRenderTarget=new On(this.width,this.height,{type:ui}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Ce({defines:Object.assign({},Cc.defines),uniforms:Ji.clone(Cc.uniforms),vertexShader:Cc.vertexShader,fragmentShader:Cc.fragmentShader,blending:fn}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new rR,this.normalMaterial.blending=fn,this.blurMaterial=new Ce({defines:Object.assign({},Dc.defines),uniforms:Ji.clone(Dc.uniforms),vertexShader:Dc.vertexShader,fragmentShader:Dc.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Ce({defines:Object.assign({},Rc.defines),uniforms:Ji.clone(Rc.uniforms),vertexShader:Rc.vertexShader,fragmentShader:Rc.fragmentShader,blending:fn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ce({uniforms:Ji.clone(el.uniforms),vertexShader:el.vertexShader,fragmentShader:el.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Cy,blendDst:Md,blendEquation:ji,blendSrcAlpha:wy,blendDstAlpha:Md,blendEquationAlpha:ji}),this.fsQuad=new cf(null),this.originalClearColor=new yt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,n,i){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case wa.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=fn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case wa.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=fn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case wa.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case wa.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=fn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case wa.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ay,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,n,i,a,s){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,a!=null&&(t.setClearColor(a),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=n,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}renderOverride(t,n,i,a,s){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,a=n.clearColor||a,s=n.clearAlpha||s,a!=null&&(t.setClearColor(a),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=n,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}setSize(t,n){this.width=t,this.height=n,this.ssaoRenderTarget.setSize(t,n),this.normalRenderTarget.setSize(t,n),this.blurRenderTarget.setSize(t,n),this.ssaoMaterial.uniforms.resolution.value.set(t,n),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,n)}generateSampleKernel(t){const n=this.kernel;for(let i=0;i<t;i++){const a=new D;a.x=Math.random()*2-1,a.y=Math.random()*2-1,a.z=Math.random(),a.normalize();let s=i/t;s=jy.lerp(.1,1,s*s),a.multiplyScalar(s),n.push(a)}}generateRandomKernelRotations(){const i=new WR,a=4*4,s=new Float32Array(a);for(let r=0;r<a;r++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;s[r]=i.noise3d(o,l,c)}this.noiseTexture=new cS(s,4,4,dm,Mi),this.noiseTexture.wrapS=xl,this.noiseTexture.wrapT=xl,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,n=this._visibilityCache;t.traverse(function(i){n.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const t=this.scene,n=this._visibilityCache;t.traverse(function(i){const a=n.get(i);i.visible=a}),n.clear()}}wa.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const jR={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qR extends Fs{constructor(){super();const t=jR;this.uniforms=Ji.clone(t.uniforms),this.material=new iR({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new cf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dy?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ly?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Py?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cm?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ny&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function YR(e){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}function Cr(e,t){var n=e.__state.conversionName.toString(),i=Math.round(e.r),a=Math.round(e.g),s=Math.round(e.b),r=e.a,o=Math.round(e.h),l=e.s.toFixed(1),c=e.v.toFixed(1);if(t||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var f=e.hex.toString(16);f.length<6;)f="0"+f;return"#"+f}else{if(n==="CSS_RGB")return"rgb("+i+","+a+","+s+")";if(n==="CSS_RGBA")return"rgba("+i+","+a+","+s+","+r+")";if(n==="HEX")return"0x"+e.hex.toString(16);if(n==="RGB_ARRAY")return"["+i+","+a+","+s+"]";if(n==="RGBA_ARRAY")return"["+i+","+a+","+s+","+r+"]";if(n==="RGB_OBJ")return"{r:"+i+",g:"+a+",b:"+s+"}";if(n==="RGBA_OBJ")return"{r:"+i+",g:"+a+",b:"+s+",a:"+r+"}";if(n==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(n==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+r+"}"}return"unknown format"}var _0=Array.prototype.forEach,wo=Array.prototype.slice,J={BREAK:{},extend:function(t){return this.each(wo.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(a){this.isUndefined(n[a])||(t[a]=n[a])}).bind(this))},this),t},defaults:function(t){return this.each(wo.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(a){this.isUndefined(t[a])&&(t[a]=n[a])}).bind(this))},this),t},compose:function(){var t=wo.call(arguments);return function(){for(var n=wo.call(arguments),i=t.length-1;i>=0;i--)n=[t[i].apply(this,n)];return n[0]}},each:function(t,n,i){if(t){if(_0&&t.forEach&&t.forEach===_0)t.forEach(n,i);else if(t.length===t.length+0){var a=void 0,s=void 0;for(a=0,s=t.length;a<s;a++)if(a in t&&n.call(i,t[a],a)===this.BREAK)return}else for(var r in t)if(n.call(i,t[r],r)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,n,i){var a=void 0;return function(){var s=this,r=arguments;function o(){a=null,i||t.apply(s,r)}var l=i||!a;clearTimeout(a),a=setTimeout(o,n),l&&t.apply(s,r)}},toArray:function(t){return t.toArray?t.toArray():wo.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(e){function t(n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},ZR=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var n=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:Cr},SIX_CHAR_HEX:{read:function(t){var n=t.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:Cr},CSS_RGB:{read:function(t){var n=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:Cr},CSS_RGBA:{read:function(t){var n=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:Cr}}},{litmus:J.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:function(t){return J.isNumber(t.r)&&J.isNumber(t.g)&&J.isNumber(t.b)&&J.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return J.isNumber(t.r)&&J.isNumber(t.g)&&J.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return J.isNumber(t.h)&&J.isNumber(t.s)&&J.isNumber(t.v)&&J.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return J.isNumber(t.h)&&J.isNumber(t.s)&&J.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],Co=void 0,Lc=void 0,ap=function(){Lc=!1;var t=arguments.length>1?J.toArray(arguments):arguments[0];return J.each(ZR,function(n){if(n.litmus(t))return J.each(n.conversions,function(i,a){if(Co=i.read(t),Lc===!1&&Co!==!1)return Lc=Co,Co.conversionName=a,Co.conversion=i,J.BREAK}),J.BREAK}),Lc},v0=void 0,Iu={hsv_to_rgb:function(t,n,i){var a=Math.floor(t/60)%6,s=t/60-Math.floor(t/60),r=i*(1-n),o=i*(1-s*n),l=i*(1-(1-s)*n),c=[[i,l,r],[o,i,r],[r,i,l],[r,o,i],[l,r,i],[i,r,o]][a];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(t,n,i){var a=Math.min(t,n,i),s=Math.max(t,n,i),r=s-a,o=void 0,l=void 0;if(s!==0)l=r/s;else return{h:NaN,s:0,v:0};return t===s?o=(n-i)/r:n===s?o=2+(i-t)/r:o=4+(t-n)/r,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(t,n,i){var a=this.hex_with_component(0,2,t);return a=this.hex_with_component(a,1,n),a=this.hex_with_component(a,0,i),a},component_from_hex:function(t,n){return t>>n*8&255},hex_with_component:function(t,n,i){return i<<(v0=n*8)|t&~(255<<v0)}},KR=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hi=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},di=function(){function e(t,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Xa=function e(t,n,i){t===null&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(a===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:e(s,n,i)}else{if("value"in a)return a.value;var r=a.get;return r===void 0?void 0:r.call(i)}},Za=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Ka=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Ze=function(){function e(){if(hi(this,e),this.__state=ap.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return di(e,[{key:"toString",value:function(){return Cr(this)}},{key:"toHexString",value:function(){return Cr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),e}();function wm(e,t,n){Object.defineProperty(e,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(Ze.recalculateRGB(this,t,n),this.__state[t])},set:function(a){this.__state.space!=="RGB"&&(Ze.recalculateRGB(this,t,n),this.__state.space="RGB"),this.__state[t]=a}})}function Cm(e,t){Object.defineProperty(e,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(Ze.recalculateHSV(this),this.__state[t])},set:function(i){this.__state.space!=="HSV"&&(Ze.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=i}})}Ze.recalculateRGB=function(e,t,n){if(e.__state.space==="HEX")e.__state[t]=Iu.component_from_hex(e.__state.hex,n);else if(e.__state.space==="HSV")J.extend(e.__state,Iu.hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v));else throw new Error("Corrupted color state")};Ze.recalculateHSV=function(e){var t=Iu.rgb_to_hsv(e.r,e.g,e.b);J.extend(e.__state,{s:t.s,v:t.v}),J.isNaN(t.h)?J.isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h};Ze.COMPONENTS=["r","g","b","h","s","v","hex","a"];wm(Ze.prototype,"r",2);wm(Ze.prototype,"g",1);wm(Ze.prototype,"b",0);Cm(Ze.prototype,"h");Cm(Ze.prototype,"s");Cm(Ze.prototype,"v");Object.defineProperty(Ze.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(Ze.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Iu.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var Bs=function(){function e(t,n){hi(this,e),this.initialValue=t[n],this.domElement=document.createElement("div"),this.object=t,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return di(e,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),e}(),QR={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},_S={};J.each(QR,function(e,t){J.each(e,function(n){_S[n]=t})});var $R=/(\d+(\.\d+)?)px/;function gi(e){if(e==="0"||J.isUndefined(e))return 0;var t=e.match($R);return J.isNull(t)?0:parseFloat(t[1])}var V={makeSelectable:function(t,n){t===void 0||t.style===void 0||(t.onselectstart=n?function(){return!1}:function(){},t.style.MozUserSelect=n?"auto":"none",t.style.KhtmlUserSelect=n?"auto":"none",t.unselectable=n?"on":"off")},makeFullscreen:function(t,n,i){var a=i,s=n;J.isUndefined(s)&&(s=!0),J.isUndefined(a)&&(a=!0),t.style.position="absolute",s&&(t.style.left=0,t.style.right=0),a&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,n,i,a){var s=i||{},r=_S[n];if(!r)throw new Error("Event type "+n+" not supported.");var o=document.createEvent(r);switch(r){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(n,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var f=o.initKeyboardEvent||o.initKeyEvent;J.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),f(n,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(n,s.bubbles||!1,s.cancelable||!0);break}}J.defaults(o,a),t.dispatchEvent(o)},bind:function(t,n,i,a){var s=a||!1;return t.addEventListener?t.addEventListener(n,i,s):t.attachEvent&&t.attachEvent("on"+n,i),V},unbind:function(t,n,i,a){var s=a||!1;return t.removeEventListener?t.removeEventListener(n,i,s):t.detachEvent&&t.detachEvent("on"+n,i),V},addClass:function(t,n){if(t.className===void 0)t.className=n;else if(t.className!==n){var i=t.className.split(/ +/);i.indexOf(n)===-1&&(i.push(n),t.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return V},removeClass:function(t,n){if(n)if(t.className===n)t.removeAttribute("class");else{var i=t.className.split(/ +/),a=i.indexOf(n);a!==-1&&(i.splice(a,1),t.className=i.join(" "))}else t.className=void 0;return V},hasClass:function(t,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var n=getComputedStyle(t);return gi(n["border-left-width"])+gi(n["border-right-width"])+gi(n["padding-left"])+gi(n["padding-right"])+gi(n.width)},getHeight:function(t){var n=getComputedStyle(t);return gi(n["border-top-width"])+gi(n["border-bottom-width"])+gi(n["padding-top"])+gi(n["padding-bottom"])+gi(n.height)},getOffset:function(t){var n=t,i={left:0,top:0};if(n.offsetParent)do i.left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;while(n);return i},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},vS=function(e){Za(t,e);function t(n,i){hi(this,t);var a=Ka(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i)),s=a;a.__prev=a.getValue(),a.__checkbox=document.createElement("input"),a.__checkbox.setAttribute("type","checkbox");function r(){s.setValue(!s.__prev)}return V.bind(a.__checkbox,"change",r,!1),a.domElement.appendChild(a.__checkbox),a.updateDisplay(),a}return di(t,[{key:"setValue",value:function(i){var a=Xa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),a}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Xa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Bs),JR=function(e){Za(t,e);function t(n,i,a){hi(this,t);var s=Ka(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i)),r=a,o=s;if(s.__select=document.createElement("select"),J.isArray(r)){var l={};J.each(r,function(c){l[c]=c}),r=l}return J.each(r,function(c,f){var h=document.createElement("option");h.innerHTML=f,h.setAttribute("value",c),o.__select.appendChild(h)}),s.updateDisplay(),V.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return di(t,[{key:"setValue",value:function(i){var a=Xa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),a}},{key:"updateDisplay",value:function(){return V.isActive(this.__select)?this:(this.__select.value=this.getValue(),Xa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(Bs),t3=function(e){Za(t,e);function t(n,i){hi(this,t);var a=Ka(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i)),s=a;function r(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),V.bind(a.__input,"keyup",r),V.bind(a.__input,"change",r),V.bind(a.__input,"blur",o),V.bind(a.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return di(t,[{key:"updateDisplay",value:function(){return V.isActive(this.__input)||(this.__input.value=this.getValue()),Xa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Bs);function x0(e){var t=e.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var xS=function(e){Za(t,e);function t(n,i,a){hi(this,t);var s=Ka(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i)),r=a||{};return s.__min=r.min,s.__max=r.max,s.__step=r.step,J.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=x0(s.__impliedStep),s}return di(t,[{key:"setValue",value:function(i){var a=i;return this.__min!==void 0&&a<this.__min?a=this.__min:this.__max!==void 0&&a>this.__max&&(a=this.__max),this.__step!==void 0&&a%this.__step!==0&&(a=Math.round(a/this.__step)*this.__step),Xa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,a)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=x0(i),this}}]),t}(Bs);function e3(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}var Fu=function(e){Za(t,e);function t(n,i,a){hi(this,t);var s=Ka(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i,a));s.__truncationSuspended=!1;var r=s,o=void 0;function l(){var v=parseFloat(r.__input.value);J.isNaN(v)||r.setValue(v)}function c(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}function f(){c()}function h(v){var x=o-v.clientY;r.setValue(r.getValue()+x*r.__impliedStep),o=v.clientY}function d(){V.unbind(window,"mousemove",h),V.unbind(window,"mouseup",d),c()}function p(v){V.bind(window,"mousemove",h),V.bind(window,"mouseup",d),o=v.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),V.bind(s.__input,"change",l),V.bind(s.__input,"blur",f),V.bind(s.__input,"mousedown",p),V.bind(s.__input,"keydown",function(v){v.keyCode===13&&(r.__truncationSuspended=!0,this.blur(),r.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return di(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():e3(this.getValue(),this.__precision),Xa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(xS);function y0(e,t,n,i,a){return i+(a-i)*((e-t)/(n-t))}var sp=function(e){Za(t,e);function t(n,i,a,s,r){hi(this,t);var o=Ka(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i,{min:a,max:s,step:r})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),V.bind(o.__background,"mousedown",c),V.bind(o.__background,"touchstart",d),V.addClass(o.__background,"slider"),V.addClass(o.__foreground,"slider-fg");function c(x){document.activeElement.blur(),V.bind(window,"mousemove",f),V.bind(window,"mouseup",h),f(x)}function f(x){x.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(y0(x.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){V.unbind(window,"mousemove",f),V.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(x){x.touches.length===1&&(V.bind(window,"touchmove",p),V.bind(window,"touchend",v),p(x))}function p(x){var m=x.touches[0].clientX,u=l.__background.getBoundingClientRect();l.setValue(y0(m,u.left,u.right,l.__min,l.__max))}function v(){V.unbind(window,"touchmove",p),V.unbind(window,"touchend",v),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return di(t,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Xa(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(xS),yS=function(e){Za(t,e);function t(n,i,a){hi(this,t);var s=Ka(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i)),r=s;return s.__button=document.createElement("div"),s.__button.innerHTML=a===void 0?"Fire":a,V.bind(s.__button,"click",function(o){return o.preventDefault(),r.fire(),!1}),V.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return di(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(Bs),rp=function(e){Za(t,e);function t(n,i){hi(this,t);var a=Ka(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i));a.__color=new Ze(a.getValue()),a.__temp=new Ze(0);var s=a;a.domElement=document.createElement("div"),V.makeSelectable(a.domElement,!1),a.__selector=document.createElement("div"),a.__selector.className="selector",a.__saturation_field=document.createElement("div"),a.__saturation_field.className="saturation-field",a.__field_knob=document.createElement("div"),a.__field_knob.className="field-knob",a.__field_knob_border="2px solid ",a.__hue_knob=document.createElement("div"),a.__hue_knob.className="hue-knob",a.__hue_field=document.createElement("div"),a.__hue_field.className="hue-field",a.__input=document.createElement("input"),a.__input.type="text",a.__input_textShadow="0 1px 1px ",V.bind(a.__input,"keydown",function(x){x.keyCode===13&&h.call(this)}),V.bind(a.__input,"blur",h),V.bind(a.__selector,"mousedown",function(){V.addClass(this,"drag").bind(window,"mouseup",function(){V.removeClass(s.__selector,"drag")})}),V.bind(a.__selector,"touchstart",function(){V.addClass(this,"drag").bind(window,"touchend",function(){V.removeClass(s.__selector,"drag")})});var r=document.createElement("div");J.extend(a.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(a.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:a.__field_knob_border+(a.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(a.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(a.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(r.style,{width:"100%",height:"100%",background:"none"}),S0(r,"top","rgba(0,0,0,0)","#000"),J.extend(a.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),i3(a.__hue_field),J.extend(a.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:a.__input_textShadow+"rgba(0,0,0,0.7)"}),V.bind(a.__saturation_field,"mousedown",o),V.bind(a.__saturation_field,"touchstart",o),V.bind(a.__field_knob,"mousedown",o),V.bind(a.__field_knob,"touchstart",o),V.bind(a.__hue_field,"mousedown",l),V.bind(a.__hue_field,"touchstart",l);function o(x){p(x),V.bind(window,"mousemove",p),V.bind(window,"touchmove",p),V.bind(window,"mouseup",c),V.bind(window,"touchend",c)}function l(x){v(x),V.bind(window,"mousemove",v),V.bind(window,"touchmove",v),V.bind(window,"mouseup",f),V.bind(window,"touchend",f)}function c(){V.unbind(window,"mousemove",p),V.unbind(window,"touchmove",p),V.unbind(window,"mouseup",c),V.unbind(window,"touchend",c),d()}function f(){V.unbind(window,"mousemove",v),V.unbind(window,"touchmove",v),V.unbind(window,"mouseup",f),V.unbind(window,"touchend",f),d()}function h(){var x=ap(this.value);x!==!1?(s.__color.__state=x,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}a.__saturation_field.appendChild(r),a.__selector.appendChild(a.__field_knob),a.__selector.appendChild(a.__saturation_field),a.__selector.appendChild(a.__hue_field),a.__hue_field.appendChild(a.__hue_knob),a.domElement.appendChild(a.__input),a.domElement.appendChild(a.__selector),a.updateDisplay();function p(x){x.type.indexOf("touch")===-1&&x.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),u=x.touches&&x.touches[0]||x,_=u.clientX,g=u.clientY,y=(_-m.left)/(m.right-m.left),w=1-(g-m.top)/(m.bottom-m.top);return w>1?w=1:w<0&&(w=0),y>1?y=1:y<0&&(y=0),s.__color.v=w,s.__color.s=y,s.setValue(s.__color.toOriginal()),!1}function v(x){x.type.indexOf("touch")===-1&&x.preventDefault();var m=s.__hue_field.getBoundingClientRect(),u=x.touches&&x.touches[0]||x,_=u.clientY,g=1-(_-m.top)/(m.bottom-m.top);return g>1?g=1:g<0&&(g=0),s.__color.h=g*360,s.setValue(s.__color.toOriginal()),!1}return a}return di(t,[{key:"updateDisplay",value:function(){var i=ap(this.getValue());if(i!==!1){var a=!1;J.each(Ze.COMPONENTS,function(o){if(!J.isUndefined(i[o])&&!J.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return a=!0,{}},this),a&&J.extend(this.__color.__state,i)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,r=255-s;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,S0(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+r+","+r+","+r+",.7)"})}}]),t}(Bs),n3=["-moz-","-o-","-webkit-","-ms-",""];function S0(e,t,n,i){e.style.background="",J.each(n3,function(a){e.style.cssText+="background: "+a+"linear-gradient("+t+", "+n+" 0%, "+i+" 100%); "})}function i3(e){e.style.background="",e.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",e.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",e.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var a3={load:function(t,n){var i=n||document,a=i.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=t,i.getElementsByTagName("head")[0].appendChild(a)},inject:function(t,n){var i=n||document,a=document.createElement("style");a.type="text/css",a.innerHTML=t;var s=i.getElementsByTagName("head")[0];try{s.appendChild(a)}catch{}}},s3=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,r3=function(t,n){var i=t[n];return J.isArray(arguments[2])||J.isObject(arguments[2])?new JR(t,n,arguments[2]):J.isNumber(i)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new sp(t,n,arguments[2],arguments[3],arguments[4]):new sp(t,n,arguments[2],arguments[3]):J.isNumber(arguments[4])?new Fu(t,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Fu(t,n,{min:arguments[2],max:arguments[3]}):J.isString(i)?new t3(t,n):J.isFunction(i)?new yS(t,n,""):J.isBoolean(i)?new vS(t,n):null};function o3(e){setTimeout(e,1e3/60)}var l3=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||o3,c3=function(){function e(){hi(this,e),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),V.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;V.bind(this.backgroundElement,"click",function(){t.hide()})}return di(e,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,i=function a(){n.domElement.style.display="none",n.backgroundElement.style.display="none",V.unbind(n.domElement,"webkitTransitionEnd",a),V.unbind(n.domElement,"transitionend",a),V.unbind(n.domElement,"oTransitionEnd",a)};V.bind(this.domElement,"webkitTransitionEnd",i),V.bind(this.domElement,"transitionend",i),V.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-V.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-V.getHeight(this.domElement)/2+"px"}}]),e}(),u3=YR(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);a3.inject(u3);var M0="dg",b0=72,E0=20,Sl="Default",Oo=function(){try{return!!window.localStorage}catch{return!1}}(),nl=void 0,T0=!0,hr=void 0,Eh=!1,SS=[],de=function e(t){var n=this,i=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),V.addClass(this.domElement,M0),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=J.defaults(i,{closeOnTop:!1,autoPlace:!0,width:e.DEFAULT_WIDTH}),i=J.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),J.isUndefined(i.load)?i.load={preset:Sl}:i.preset&&(i.load.preset=i.preset),J.isUndefined(i.parent)&&i.hideable&&SS.push(this),i.resizable=J.isUndefined(i.parent)&&i.resizable,i.autoPlace&&J.isUndefined(i.scrollable)&&(i.scrollable=!0);var a=Oo&&localStorage.getItem(dr(this,"isLocal"))==="true",s=void 0,r=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(d){n.parent?n.getRoot().preset=d:i.load.preset=d,p3(this),n.revert()}},width:{get:function(){return i.width},set:function(d){i.width=d,cp(n,d)}},name:{get:function(){return i.name},set:function(d){i.name=d,r&&(r.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(d){i.closed=d,i.closed?V.addClass(n.__ul,e.CLASS_CLOSED):V.removeClass(n.__ul,e.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=d?e.TEXT_OPEN:e.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return a},set:function(d){Oo&&(a=d,d?V.bind(window,"unload",s):V.unbind(window,"unload",s),localStorage.setItem(dr(n,"isLocal"),d))}}}),J.isUndefined(i.parent)){if(this.closed=i.closed||!1,V.addClass(this.domElement,e.CLASS_MAIN),V.makeSelectable(this.domElement,!1),Oo&&a){n.useLocalStorage=!0;var o=localStorage.getItem(dr(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=e.TEXT_CLOSED,V.addClass(this.__closeButton,e.CLASS_CLOSE_BUTTON),i.closeOnTop?(V.addClass(this.__closeButton,e.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(V.addClass(this.__closeButton,e.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),V.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);V.addClass(l,"controller-name"),r=Rm(n,l);var c=function(d){return d.preventDefault(),n.closed=!n.closed,!1};V.addClass(this.__ul,e.CLASS_CLOSED),V.addClass(r,"title"),V.bind(r,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(J.isUndefined(i.parent)&&(T0&&(hr=document.createElement("div"),V.addClass(hr,M0),V.addClass(hr,e.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(hr),T0=!1),hr.appendChild(this.domElement),V.addClass(this.domElement,e.CLASS_AUTO_PLACE)),this.parent||cp(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},V.bind(window,"resize",this.__resizeHandler),V.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),V.bind(this.__ul,"transitionend",this.__resizeHandler),V.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&d3(this),s=function(){Oo&&localStorage.getItem(dr(n,"isLocal"))==="true"&&localStorage.setItem(dr(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function f(){var h=n.getRoot();h.width+=1,J.defer(function(){h.width-=1})}i.parent||f()};de.toggleHide=function(){Eh=!Eh,J.each(SS,function(e){e.domElement.style.display=Eh?"none":""})};de.CLASS_AUTO_PLACE="a";de.CLASS_AUTO_PLACE_CONTAINER="ac";de.CLASS_MAIN="main";de.CLASS_CONTROLLER_ROW="cr";de.CLASS_TOO_TALL="taller-than-window";de.CLASS_CLOSED="closed";de.CLASS_CLOSE_BUTTON="close-button";de.CLASS_CLOSE_TOP="close-top";de.CLASS_CLOSE_BOTTOM="close-bottom";de.CLASS_DRAG="drag";de.DEFAULT_WIDTH=245;de.TEXT_CLOSED="Close Controls";de.TEXT_OPEN="Open Controls";de._keydownHandler=function(e){document.activeElement.type!=="text"&&(e.which===b0||e.keyCode===b0)&&de.toggleHide()};V.bind(window,"keydown",de._keydownHandler,!1);J.extend(de.prototype,{add:function(t,n){return il(this,t,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,n){return il(this,t,n,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var n=this;J.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&hr.removeChild(this.domElement);var t=this;J.each(this.__folders,function(n){t.removeFolder(n)}),V.unbind(window,"keydown",de._keydownHandler,!1),A0(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var n={name:t,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(n.closed=this.load.folders[t].closed,n.load=this.load.folders[t]);var i=new de(n);this.__folders[t]=i;var a=Rm(this,i.domElement);return V.addClass(a,"folder"),i},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],A0(t);var n=this;J.each(t.__folders,function(i){t.removeFolder(i)}),J.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var n=V.getOffset(t.__ul).top,i=0;J.each(t.__ul.childNodes,function(a){t.autoPlace&&a===t.__save_row||(i+=V.getHeight(a))}),window.innerHeight-n-E0<i?(V.addClass(t.domElement,de.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-n-E0+"px"):(V.removeClass(t.domElement,de.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&J.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:function(){if(J.isUndefined(nl)&&(nl=new c3,nl.domElement.innerHTML=s3),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;J.each(Array.prototype.slice.call(arguments),function(n){t.__rememberedObjects.length===0&&h3(t),t.__rememberedObjects.indexOf(n)===-1&&t.__rememberedObjects.push(n)}),this.autoPlace&&cp(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=Uc(this)),t.folders={},J.each(this.__folders,function(n,i){t.folders[i]=n.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Uc(this),op(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[Sl]=Uc(this,!0)),this.load.remembered[t]=Uc(this),this.preset=t,lp(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){J.each(this.__controllers,function(n){this.getRoot().load.remembered?MS(t||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),J.each(this.__folders,function(n){n.revert(n)}),t||op(this.getRoot(),!1)},listen:function(t){var n=this.__listening.length===0;this.__listening.push(t),n&&bS(this.__listening)},updateDisplay:function(){J.each(this.__controllers,function(t){t.updateDisplay()}),J.each(this.__folders,function(t){t.updateDisplay()})}});function Rm(e,t,n){var i=document.createElement("li");return t&&i.appendChild(t),n?e.__ul.insertBefore(i,n):e.__ul.appendChild(i),e.onResize(),i}function A0(e){V.unbind(window,"resize",e.__resizeHandler),e.saveToLocalStorageIfPossible&&V.unbind(window,"unload",e.saveToLocalStorageIfPossible)}function op(e,t){var n=e.__preset_select[e.__preset_select.selectedIndex];t?n.innerHTML=n.value+"*":n.innerHTML=n.value}function f3(e,t,n){if(n.__li=t,n.__gui=e,J.extend(n,{options:function(r){if(arguments.length>1){var o=n.__li.nextElementSibling;return n.remove(),il(e,n.object,n.property,{before:o,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(r)||J.isObject(r)){var l=n.__li.nextElementSibling;return n.remove(),il(e,n.object,n.property,{before:l,factoryArgs:[r]})}},name:function(r){return n.__li.firstElementChild.firstElementChild.innerHTML=r,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof sp){var i=new Fu(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var r=n[s],o=i[s];n[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),r.apply(n,l)}}),V.addClass(t,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof Fu){var a=function(r){if(J.isNumber(n.__min)&&J.isNumber(n.__max)){var o=n.__li.firstElementChild.firstElementChild.innerHTML,l=n.__gui.__listening.indexOf(n)>-1;n.remove();var c=il(e,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return c.name(o),l&&c.listen(),c}return r};n.min=J.compose(a,n.min),n.max=J.compose(a,n.max)}else n instanceof vS?(V.bind(t,"click",function(){V.fakeEvent(n.__checkbox,"click")}),V.bind(n.__checkbox,"click",function(s){s.stopPropagation()})):n instanceof yS?(V.bind(t,"click",function(){V.fakeEvent(n.__button,"click")}),V.bind(t,"mouseover",function(){V.addClass(n.__button,"hover")}),V.bind(t,"mouseout",function(){V.removeClass(n.__button,"hover")})):n instanceof rp&&(V.addClass(t,"color"),n.updateDisplay=J.compose(function(s){return t.style.borderLeftColor=n.__color.toString(),s},n.updateDisplay),n.updateDisplay());n.setValue=J.compose(function(s){return e.getRoot().__preset_select&&n.isModified()&&op(e.getRoot(),!0),s},n.setValue)}function MS(e,t){var n=e.getRoot(),i=n.__rememberedObjects.indexOf(t.object);if(i!==-1){var a=n.__rememberedObjectIndecesToControllers[i];if(a===void 0&&(a={},n.__rememberedObjectIndecesToControllers[i]=a),a[t.property]=t,n.load&&n.load.remembered){var s=n.load.remembered,r=void 0;if(s[e.preset])r=s[e.preset];else if(s[Sl])r=s[Sl];else return;if(r[i]&&r[i][t.property]!==void 0){var o=r[i][t.property];t.initialValue=o,t.setValue(o)}}}}function il(e,t,n,i){if(t[n]===void 0)throw new Error('Object "'+t+'" has no property "'+n+'"');var a=void 0;if(i.color)a=new rp(t,n);else{var s=[t,n].concat(i.factoryArgs);a=r3.apply(e,s)}i.before instanceof Bs&&(i.before=i.before.__li),MS(e,a),V.addClass(a.domElement,"c");var r=document.createElement("span");V.addClass(r,"property-name"),r.innerHTML=a.property;var o=document.createElement("div");o.appendChild(r),o.appendChild(a.domElement);var l=Rm(e,o,i.before);return V.addClass(l,de.CLASS_CONTROLLER_ROW),a instanceof rp?V.addClass(l,"color"):V.addClass(l,KR(a.getValue())),f3(e,l,a),e.__controllers.push(a),a}function dr(e,t){return document.location.href+"."+t}function lp(e,t,n){var i=document.createElement("option");i.innerHTML=t,i.value=t,e.__preset_select.appendChild(i),n&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function w0(e,t){t.style.display=e.useLocalStorage?"block":"none"}function h3(e){var t=e.__save_row=document.createElement("li");V.addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),V.addClass(t,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",V.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",V.addClass(i,"button"),V.addClass(i,"save");var a=document.createElement("span");a.innerHTML="New",V.addClass(a,"button"),V.addClass(a,"save-as");var s=document.createElement("span");s.innerHTML="Revert",V.addClass(s,"button"),V.addClass(s,"revert");var r=e.__preset_select=document.createElement("select");if(e.load&&e.load.remembered?J.each(e.load.remembered,function(h,d){lp(e,d,d===e.preset)}):lp(e,Sl,!1),V.bind(r,"change",function(){for(var h=0;h<e.__preset_select.length;h++)e.__preset_select[h].innerHTML=e.__preset_select[h].value;e.preset=this.value}),t.appendChild(r),t.appendChild(n),t.appendChild(i),t.appendChild(a),t.appendChild(s),Oo){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(dr(e,"isLocal"))==="true"&&l.setAttribute("checked","checked"),w0(e,o),V.bind(l,"change",function(){e.useLocalStorage=!e.useLocalStorage,w0(e,o)})}var f=document.getElementById("dg-new-constructor");V.bind(f,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&nl.hide()}),V.bind(n,"click",function(){f.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),nl.show(),f.focus(),f.select()}),V.bind(i,"click",function(){e.save()}),V.bind(a,"click",function(){var h=prompt("Enter a new preset name.");h&&e.saveAs(h)}),V.bind(s,"click",function(){e.revert()})}function d3(e){var t=void 0;e.__resize_handle=document.createElement("div"),J.extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(s){return s.preventDefault(),e.width+=t-s.clientX,e.onResize(),t=s.clientX,!1}function i(){V.removeClass(e.__closeButton,de.CLASS_DRAG),V.unbind(window,"mousemove",n),V.unbind(window,"mouseup",i)}function a(s){return s.preventDefault(),t=s.clientX,V.addClass(e.__closeButton,de.CLASS_DRAG),V.bind(window,"mousemove",n),V.bind(window,"mouseup",i),!1}V.bind(e.__resize_handle,"mousedown",a),V.bind(e.__closeButton,"mousedown",a),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}function cp(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function Uc(e,t){var n={};return J.each(e.__rememberedObjects,function(i,a){var s={},r=e.__rememberedObjectIndecesToControllers[a];J.each(r,function(o,l){s[l]=t?o.initialValue:o.getValue()}),n[a]=s}),n}function p3(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}function bS(e){e.length!==0&&l3.call(window,function(){bS(e)}),J.each(e,function(t){t.updateDisplay()})}var m3=de;const g3=function(){class e{constructor(n){this._points=[],this._lerp=n}AddPoint(n,i,a,s){this._points.push({time:n,data:i,posEasing:a,rotEasing:s})}Get(n){let i=0;for(let d=0;d<this._points.length&&!(this._points[d].time>=n);d++)i=d;const a=Math.max(0,i-1),s=Math.min(this._points.length-1,i+1),r=Math.min(this._points.length-1,i+2);if(i===s)return this._points[i].data;const o=this._points[i].time,l=this._points[s].time,c=(n-o)/(l-o),f=this._points[i].posEasing,h=this._points[i].rotEasing;return this._lerp(c,this._points[a].data,this._points[i].data,this._points[s].data,this._points[r].data,f,h)}}return{CubicHermiteSpline:e}}();class ES{constructor(t){this.points=t,this.times=t.map(n=>n.time),this.smoothedPath=this.createSmoothedPath(this.points),this.arcLengths=this.computeArcLengths(this.smoothedPath)}getDivisions(t){return dividePathEvenly(this.smoothedPath,this.arcLengths,t)}getLineGeometry(t=new yt(255)){return this.createLineGeometry(this.smoothedPath,t)}createSmoothedPath(t){const n=[],i=[];for(let a=0;a<t.length;a++){let s;a===0?s=new D().subVectors(t[a+1].data.pos,t[a].data.pos):a===t.length-1?s=new D().subVectors(t[a].data.pos,t[a-1].data.pos):s=new D().subVectors(t[a+1].data.pos,t[a-1].data.pos).multiplyScalar(.5),n.push(s)}for(let a=0;a<t.length-1;a++){const s=t[a].data.pos,r=t[a+1].data.pos,o=n[a],l=n[a+1],c=[],f=20;for(let h=0;h<=f;h++){const d=h/f,p=new D().copy(s).multiplyScalar(2*d**3-3*d**2+1).add(new D().copy(r).multiplyScalar(-2*d**3+3*d**2)).add(new D().copy(o).multiplyScalar(d**3-2*d**2+d)).add(new D().copy(l).multiplyScalar(d**3-d**2));c.push(p)}i.push(...c)}return i}computeArcLengths(t){const n=[0];for(let i=1;i<t.length;i++){const a=t[i].distanceTo(t[i-1]);n.push(n[i-1]+a)}return n}dividePathEvenly(t,n,i){const a=n[n.length-1],s=[];for(let r=0;r<=i;r++){const o=r/i*a;let l=0;for(;n[l]<o&&l<n.length-1;)l++;const c=t[l-1],f=t[l],h=n[l]-n[l-1],d=(o-n[l-1])/h,p=new D().lerpVectors(c,f,d);s.push(p)}return s}Get(t,n=ip.Easing.Linear.None){const i=n(t),a=this.arcLengths[this.arcLengths.length-1],s=i*a;let r=1;for(;this.arcLengths[r]<s&&r<this.arcLengths.length-1;)r++;const o=this.smoothedPath[r-1],l=this.smoothedPath[r],c=this.arcLengths[r]-this.arcLengths[r-1],f=(s-this.arcLengths[r-1])/c;return new D().lerpVectors(o,l,f)}createLineGeometry(t,n){const i=new Jn().setFromPoints(t),a=new Em({color:n});return new uS(i,a)}}const _3=function(){class e{constructor(n){this._params=n,this._currentTime=0,this._totalTime=n.points[n.points.length-1].time;const i=(a,s,r,o,l,c,f)=>{const h=c(a),d=new D().lerpVectors(r.pos,o.pos,h),p=f(a),v=r.rot.clone().slerp(o.rot,p);return{pos:d,rot:v}};this._spline=new g3.CubicHermiteSpline(i),this._smoothPath=new ES(n.points);for(let a of n.points)this._spline.AddPoint(a.time,a.data,a.posEasing||ip.Easing.Linear.None,a.rotEasing||ip.Easing.Quadratic.InOut)}Update(n){if(this._currentTime+=n,this._t=this._currentTime/this._totalTime,this._t>1)return;const i=this._spline.Get(this._currentTime),a=this._smoothPath.Get(this._t);this._params.camera.position.copy(a),this._params.camera.quaternion.copy(i.rot)}}return{CameraTrack:e}}(),sn=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let e=0;e<256;e++)sn[256+e]=sn[e];function Th(e){return e*e*e*(e*(e*6-15)+10)}function ss(e,t,n){return t+e*(n-t)}function _a(e,t,n,i){const a=e&15,s=a<8?t:n,r=a<4?n:a==12||a==14?t:i;return(a&1?-s:s)+(a&2?-r:r)}class v3{noise(t,n,i){const a=Math.floor(t),s=Math.floor(n),r=Math.floor(i),o=a&255,l=s&255,c=r&255;t-=a,n-=s,i-=r;const f=t-1,h=n-1,d=i-1,p=Th(t),v=Th(n),x=Th(i),m=sn[o]+l,u=sn[m]+c,_=sn[m+1]+c,g=sn[o+1]+l,y=sn[g]+c,w=sn[g+1]+c;return ss(x,ss(v,ss(p,_a(sn[u],t,n,i),_a(sn[y],f,n,i)),ss(p,_a(sn[_],t,h,i),_a(sn[w],f,h,i))),ss(v,ss(p,_a(sn[u+1],t,n,d),_a(sn[y+1],f,n,d)),ss(p,_a(sn[_+1],t,h,d),_a(sn[w+1],f,h,d))))}}function x3(e,t){return e+Math.random()*(t-e)}class y3{constructor(t){this.scene=t.scene||new Nu,this.camera=t.camera||new hn(75,window.innerWidth/window.innerHeight,.1,1e3),this.gui=t.gui||new GUI,this.renderer=t.renderer||new bm,this.composer=t.composer||new gS(this.renderer)}update(t){}getScene(){return this.scene}getCamera(){return this.camera}}const C0=function(){class e{constructor(i){this._params=i,this._quadtree=new t({size:i.size,min_node_size:i.min_node_size,cell_resolution:i.cell_resolution,localToWorld:new re})}GetChildren(){return this._quadtree.GetChildren()}Insert(i){this._quadtree.Insert(i)}}class t{constructor(i){const a=i.size,s=new yi(new D(-a/2,0,-a/2),new D(a/2,0,a/2));this._root={bounds:s,children:[],center:s.getCenter(new D),size:s.getSize(new D),depth:0,root:!0},this._params=i}GetChildren(){const i=[];return this._GetChildren(this._root,i),i}_GetChildren(i,a){if(i.children.length===0){a.push(i);return}for(let s of i.children)this._GetChildren(s,a)}Insert(i){this._Insert(this._root,i)}_Insert(i,a){if(this._DistanceToChild(i,a)<i.size.x*1&&i.size.x>this._params.min_node_size){i.children=this._CreateChildren(i,i.depth+1);for(let r of i.children)this._Insert(r,a)}}_DistanceToChild(i,a){return i.center.distanceTo(new D(a.x,a.y,a.z))}_CreateChildren(i,a){const s=i.bounds.getCenter(new D),r=new yi(new D(i.bounds.min.x,0,i.bounds.min.z),new D(s.x,0,s.z)),o=new yi(new D(s.x,0,i.bounds.min.z),new D(i.bounds.max.x,0,s.z)),l=new yi(new D(i.bounds.min.x,0,s.z),new D(s.x,0,i.bounds.max.z)),c=new yi(new D(s.x,0,s.z),new D(i.bounds.max.x,0,i.bounds.max.z));return[r,o,l,c].map(f=>({bounds:f,children:[],center:f.getCenter(new D),size:f.getSize(new D),depth:a}))}}return{FlatQuadTree:e,QuadTree:t}}(),Ah={uniforms:{lightDirection:{value:new D(1,1,1)},lightColor:{value:new D(.9,.76,.5)},size:{value:20},enableFog:{value:!0},isWireframe:{value:!1},showNormals:{value:!0},wireframeWidth:{value:1}},vertexShader:`
    uniform vec3 lightDirection;

    out vec3 vNormal;
    out vec3 vPosition;
    out vec2 vUV;
    out vec3 lightVec;
    out vec3 upVec;
    out vec3 vViewDirection;
    out vec3 vViewNormal;
    out vec3 vWorldNormal;
    out vec3 vReflect;
    out vec3 viewZ;


    void main() {
        vec4 view_position = modelViewMatrix * vec4(position, 1.0);
        vec4 viewLightPos = viewMatrix * vec4(lightDirection, 1.0);
        lightVec = normalize(viewMatrix * vec4(lightDirection, 0.0)).xyz;
        upVec    = normalize(viewMatrix * vec4(0., 1., 0.0, 0.0)).xyz;
        gl_Position = projectionMatrix * view_position;

        viewZ = gl_Position.xyz;

        vNormal = normalize(normalMatrix * normal);
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        vec3 view = viewMatrix[3].xyz;
        vViewDirection = normalize(-(modelViewMatrix * vec4(position, 1.0))).xyz;

        vUV = uv;
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vec3 I = worldPosition.xyz - cameraPosition;
        vReflect = reflect( I, vNormal );
        vPosition = (worldPosition).xyz;     
    }
    
    
    `,fragmentShader:`
    #define PI 3.14159265358979323846
    uniform vec3 lightColor;
    uniform vec3 lightDirection;
    uniform bool enableFog;

    uniform bool isWireframe;
    uniform bool showNormals;
    uniform float wireframeWidth;

    in vec3 vNormal;
    in vec3 vPosition;
    in vec3 lightVec;
    in vec3 vViewNormal;
    in vec3 vViewDirection;
    in vec3 vWorldNormal;
    in vec3 upVec;
    in vec2 vUV;
    in vec3 vReflect;
    in vec3 viewZ;
    
    float rand (vec2 st) {
        return fract(sin(dot(st.xy,
                                vec2(12.9898,78.233)))
                    * 4.5453123);
    }

    float random (vec2 st) {
        return fract(sin(dot(st.xy,
                             vec2(12.9898,78.233)))*
            43758.5453123);
    }

    float noise(vec2 p, float freq ){
        float unit = 1080.0/freq;
        vec2 ij = floor(p/unit);
        vec2 xy = mod(p,unit)/unit;
        //xy = 3.*xy*xy-2.*xy*xy*xy;
        xy = .5*(1.-cos(PI*xy));
        float a = rand((ij+vec2(0.,0.)));
        float b = rand((ij+vec2(1.,0.)));
        float c = rand((ij+vec2(0.,1.)));
        float d = rand((ij+vec2(1.,1.)));
        float x1 = mix(a, b, xy.x);
        float x2 = mix(c, d, xy.x);
        return mix(x1, x2, xy.y);
    }

    //wireframe shader - returns color only if isWireframe is true
    vec4 wireframeShader(vec3 color){
        float dist = 0.0;
        if (vUV.x < wireframeWidth || vUV.x > 1.0 - wireframeWidth || vUV.y < wireframeWidth || vUV.y > 1.0 - wireframeWidth) {
            dist = 1.0;
        }
        return vec4(color, dist);
    }

    void main() {

        if (showNormals){
            gl_FragColor = vec4(vWorldNormal, 1.0);      
            return;
        }

        vec3 skyColor = vec3(0.6, 0.62, 0.85);
        vec3 fogColor = vec3(0.6, 0.62, 0.85);

        vec3 landColor = vec3(0.1, 0.4, 0.1);

        //Ambient Lighting
        vec3 ambientColor = vec3(0.35, 0.35, 0.34) * 0.4;
        vec3 ambientStrength = ambientColor * landColor;

        //Diffuse Lighting
            //direct
            float dProd = dot( vNormal, lightVec );
            dProd=clamp(dProd,0.,1.0);
  

            //sky
            float aLight = dot( vNormal, upVec );
            aLight=clamp(aLight,0.,1.0);

        //vec3 envColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) ).rgb;

        //final lights
        vec3 directLightColor = lightColor * dProd;
        vec3 skyLightColor = skyColor * aLight;

        //pseudo fresnel
        float fresnel =  dot(vNormal, vViewDirection);
        fresnel = clamp(pow(1.0 - fresnel, 7.), 0.0, 1.0);
        vec3 fresnelLight = fresnel * skyLightColor;

        //final colour
        vec3 directLight = landColor * directLightColor;
        vec3 directFresnel = mix(directLight, fresnelLight, fresnel);

        vec3 skyLight = landColor * skyLightColor;
        vec3 ambient = landColor* 0.1;

        vec3 finalLighting = mix(directFresnel, skyLight, 0.1);

        if (isWireframe){
            gl_FragColor = wireframeShader(finalLighting);
            return;
        }

        float fog = viewZ.z/3000.;
        float altitude = vPosition.y;

        float fogDensity = smoothstep(0.0, 100.0, altitude); 

        float mist = viewZ.z/1000.;
        float misDensity = smoothstep(0.0, 30.0, altitude);

        float fogAmount = abs(fog * (1.0-fogDensity));
        float mistAmount = abs(mist * (1.0-misDensity));
        float totalFog = clamp(fogAmount + mistAmount, 0., 1.);
        
        vec3 c = mix(finalLighting, ambientColor, ambientStrength);

        vec3 finalFog = c;
        if (enableFog){
            finalFog = mix(c, fogColor, totalFog);
        }



        gl_FragColor = vec4(finalFog, 1.0 );
    }
    `},S3=23;let M3=0;class b3{constructor(t){this._worker=new Worker(t,{type:"module"}),this._worker.onmessage=n=>{this._OnMessage(n)},this._resolve=null,this._id=M3++}_OnMessage(t){const n=this._resolve;this._resolve=null,n(t.data)}get id(){return this._id}postMessage(t,n,i=[]){this._resolve=n,console.log("Sending message to worker:",t),this._worker.postMessage(t,i)}}class E3{constructor(t,n){this._workers=[...Array(t)].map(i=>new b3(n)),this._free=[...this._workers],this._busy={},this._queue=[],this._queueMaxLength=this._workers.length*4}get length(){return this._workers.length}get Busy(){return this._queue.length>0||Object.keys(this._busy).length>0}_CullQueue(){this._queue.pop()}Enqueue(t,n){this._queue.push([t,n]),this._PumpQueue(),this._queue.length>this._queueMaxLength}_PumpQueue(){for(;this._free.length>0&&this._queue.length>0;){const t=this._free.pop();this._busy[t.id]=t;const[n,i]=this._queue.shift();t.postMessage(n,a=>{delete this._busy[t.id],this._free.push(t),i(a),this._PumpQueue()})}}}class T3{constructor(t){this.camera=t.camera,this.scene=t.scene,this.gui=t.gui,this.wireframe=!1,this.updateTerrain=!0;const n=new URL("/Github-Page/assets/TerrainBuilder_threaded_worker-DLoY4s_u.js",import.meta.url);this._workerPool=new E3(S3,n),this.updateInProgress=!1,this.FLAT_PLANE_SIZE=t.flat_plane_size||1e4,this.MIN_CELL_SIZE=t.min_cell_size||16,this.CELL_RESOLUTION=t.cell_resolution||256,this.noise=new v3,this.noiseZ=x3(0,1e3),this.noiseParams={amplitude:10,octaves:16,frequency:1,persistence:.5,lacunarity:2,exponentiation:2,noiseZ:this.noiseZ},this.quadTree=new C0.FlatQuadTree({size:this.FLAT_PLANE_SIZE,min_node_size:this.MIN_CELL_SIZE,cell_resolution:this.CELL_RESOLUTION}),this.terrainChunks={},this.updateQuadtreeTiles(),this._initGUI()}_initGUI(){let t=this.gui.addFolder("Terrain");t.add(this,"updateTerrain").name("Update Terrain"),t.add(this,"wireframe").onChange(()=>{this.updateTerrainMesh()}),t.add(this,"FLAT_PLANE_SIZE").name("Terrain Size").min(100).max(1e4).step(100).onChange(()=>{this.updateTerrainParams({flat_plane_size:this.FLAT_PLANE_SIZE})}),t.add(this,"MIN_CELL_SIZE").name("Min Cell Size").min(1).max(512).step(32).onChange(()=>{this.updateTerrainParams({min_cell_size:this.MIN_CELL_SIZE})}),t.add(this,"CELL_RESOLUTION").name("Cell Resolution").min(16).max(512).step(16).onChange(()=>{this.updateTerrainParams({cell_resolution:this.CELL_RESOLUTION})});let n=t.addFolder("NoiseParams");n.add(this.noiseParams,"octaves").min(1).max(16).step(1).name("Octaves").onChange(()=>{console.log("Octaves changed:",this.noiseParams.octaves),this.updateTerrainParams({octaves:this.noiseParams.octaves}),n.updateDisplay()}),n.add(this.noiseParams,"frequency").min(.1).max(2).step(.1).name("Frequency").onChange(()=>{this.updateTerrainParams({frequency:this.noiseParams.frequency})}),n.add(this.noiseParams,"amplitude").min(.1).max(10).step(.1).name("Amplitude").onChange(()=>{this.updateTerrainParams({amplitude:this.noiseParams.amplitude})}),n.add(this.noiseParams,"persistence").min(.1).max(2).step(.1).name("Persistence").onChange(()=>{this.updateTerrainParams({persistence:this.noiseParams.persistence})}),n.add(this.noiseParams,"lacunarity").min(1).max(4).step(.1).name("Lacunarity").onChange(()=>{this.updateTerrainParams({lacunarity:this.noiseParams.lacunarity})}),n.add(this.noiseParams,"exponentiation").min(1).max(10).step(.1).name("Exponentiation").onChange(()=>{this.updateTerrainParams({exponentiation:this.noiseParams.exponentiation})})}updateTerrainMesh(){for(let t in this.terrainChunks)this.terrainChunks[t].material.wireframe=this.wireframe}updateTerrainParams(t){this.FLAT_PLANE_SIZE=t.flat_plane_size||this.FLAT_PLANE_SIZE,this.MIN_CELL_SIZE=t.min_cell_size||this.MIN_CELL_SIZE,this.CELL_RESOLUTION=t.cell_resolution||this.CELL_RESOLUTION,this.noiseParams.octaves=t.octaves||this.noiseParams.octaves,this.noiseParams.frequency=t.frequency||this.noiseParams.frequency,this.noiseParams.amplitude=t.amplitude||this.noiseParams.amplitude,this.noiseParams.persistence=t.persistence||this.noiseParams.persistence,this.noiseParams.lacunarity=t.lacunarity||this.noiseParams.lacunarity,this.noiseParams.exponentiation=t.exponentiation||this.noiseParams.exponentiation,this.quadTree=new C0.FlatQuadTree({size:this.FLAT_PLANE_SIZE,min_node_size:this.MIN_CELL_SIZE,cell_resolution:this.CELL_RESOLUTION}),this.updateQuadtreeTiles()}async updateQuadtreeTiles(){if(this.updateInProgress)return;this.updateInProgress=!0,this.quadTree.Insert(this.camera.position);const t=this.quadTree.GetChildren(),n={},i=new D,a=new D,s=[];for(let r of t){const o=r.bounds.getCenter(i);r.bounds.getSize(a);const l=a.x;new yt(10066329);const c=this.quadTree._params.cell_resolution,f=`${o.x}_${o.z}_${r.depth}`;this.terrainChunks[f]?(n[f]=this.terrainChunks[f],delete this.terrainChunks[f]):s.push(this.generateTile(i,l,c).then(h=>{n[f]=h}).catch(h=>{console.error(h)}))}try{await Promise.all(s);for(const r in this.terrainChunks)this.scene.remove(this.terrainChunks[r]);this.terrainChunks=n}finally{this.updateInProgress=!1}}generateTile(t,n,i){const a={center:{x:t.x,y:t.y,z:t.z},size:n,planeSize:this.FLAT_PLANE_SIZE,resolution:i,noiseParams:this.noiseParams,noiseZ:this.noiseZ};return new Promise(s=>{this._workerPool.Enqueue({subject:"generate_tile",params:a},r=>{const o=new Is(n,n,i,i);let l=new Ce({side:oi});l.uniforms=Ah.uniforms,l.vertexShader=Ah.vertexShader,l.fragmentShader=Ah.fragmentShader,l.uniforms.size.value=this.FLAT_PLANE_SIZE,l.uniforms.enableFog.value=!0,l.uniforms.showNormals.value=!1,l.wireframe=this.wireframe;const c=new Sn(o,l);c.position.set(a.center.x,a.center.y,a.center.z),c.rotation.x=-Math.PI/2;let f=c.geometry.attributes.position;for(let h=0;h<f.count;h++){let d=r.data.positions[h];f.setZ(h,d)}f.needsUpdate=!0,this.scene.add(c),s(c)})})}update(){if(this.updateTerrain){const t=this.camera.position;this.needsUpdate(t)&&this.updateQuadtreeTiles()}}needsUpdate(t){return this.lastCameraPosition?this.lastCameraPosition.distanceTo(t)>1?(this.lastCameraPosition.copy(t),!0):!1:(this.lastCameraPosition=new D().copy(t),!0)}}class A3 extends y3{constructor(t){super(t),this.terrain=new T3(this,this.params)}update(t){super.update(t),this.terrain.update()}}new D(1,1,1),new D(.8,.76,.5),new St(-.5,-.5),new St(4,4),new cS(new Uint8Array(1),1,1,Kn);new D(1,1,1),new D(.8,.76,.5),new D(.5,.5,.5),new D(.5,.5,.5);function w3(e,t){let n=e.current;if(!n)return;let i=new Nu,a=null,s=i,r=new bm({antialias:!0});const o=window.devicePixelRatio||1;r.setSize(n.offsetWidth,n.offsetHeight),r.setPixelRatio(o),n.appendChild(r.domElement);let l={FOV:55};const c=new hn(l.FOV,n.offsetWidth/n.offsetHeight,.1,1e3);c.position.set(-20,5,-20),r.setSize(window.innerWidth,window.innerHeight),r.outputColorSpace=si;let f=new gS(r);const h=new kR(s,c);f.addPass(h);const d=new wa(s,c,0,0);f.addPass(d),f.addPass(new to({x:screen.width,y:screen.height},.7,0,.85));const p=new qR;f.addPass(p),r.toneMapping=cm,r.toneMappingExposure=1;function v(st){h.scene=st,d.scene=st}let x=W();function m(){let st=new A3({camera:c,renderer:r,gui:x});a=st,s=st.getScene(),v(s)}const u=new Is(1e3,1e3,100,100),_=new sR({color:new yt(.4,.7,.4),side:oi,roughness:1,wireframe:!0,clearcoat:.05}),g=new Sn(u,_);g.rotation.x=-Math.PI/2,g.castShadow=!0,g.receiveShadow=!0;const y=new fR(5);i.add(y),i.add(g);let w=new yt(.5,.72,1);const A=new uR(w,.5);i.add(A);let T=new yt(1,.98,.8);const L=new cR(T,1);L.castShadow=!0,L.position.set(30,15,30),L.lookAt(0,0,1),i.add(L);let E=new TR(c,r.domElement),S=new re;const R=[{pos:new D(-10,0,-20),lookAt:new D(0,0,100)},{pos:new D(-10,0,-18),lookAt:new D(0,0,100)},{pos:new D(-8,10,-5),lookAt:new D(0,0,100)},{pos:new D(0,10,10),lookAt:new D(0,0,100)}];function X(st,Mt){return S.lookAt(st,Mt,new D(0,1,0)),new ra().setFromRotationMatrix(S)}const B=[{time:0,data:{pos:R[0].pos,rot:X(R[0].pos,R[0].lookAt)},posEasing:yn.Quadratic.In,rotEasing:yn.Quadratic.In},{time:4,data:{pos:R[1].pos,rot:X(R[1].pos,R[1].lookAt)},posEasing:yn.Linear.None,rotEasing:yn.Quadratic.InOut},{time:8,data:{pos:R[2].pos,rot:X(R[2].pos,R[2].lookAt)},posEasing:yn.Linear.None,rotEasing:yn.Quadratic.InOut},{time:12,data:{pos:R[3].pos,rot:X(R[3].pos,R[3].lookAt)},posEasing:yn.Quadratic.Out,rotEasing:yn.Quadratic.Out}],q=new ES(B),$=q.getLineGeometry(),N=q.createLineGeometry(B.map(st=>st.data.pos),new yt(16711680));i.add($),i.add(N),new _3.CameraTrack({camera:c,points:B,duration:10});function W(){let st=new m3;return st.addFolder("General"),st.close(),st}const I=document.createElement("div");I.className="element",I.textContent="Reclaimer Demo",I.addEventListener("pointerdown",()=>{m()});const Q=new SR(I);Q.position.set(0,0,500),Q.scale.set(.1,.1,.1),Q.rotation.set(0,Math.PI,0);const at=new Nu;at.add(Q);let ht=new bR;ht.setSize(n.offsetWidth,n.offsetHeight);const wt=document.createElement("canvas");wt.width=n.offsetWidth,wt.height=n.offsetHeight,wt.getContext("2d");const Ft=st=>{r.setSize(n.offsetWidth,n.offsetHeight),ht.setSize(n.offsetWidth,n.offsetHeight),wt.width=n.offsetWidth,wt.height=n.offsetHeight,c.aspect=n.offsetWidth/n.offsetHeight,c.updateProjectionMatrix()};window.addEventListener("resize",Ft);let j=!1;m();const it=new hS;let gt=st=>{E.update(),pS(st);const Mt=it.getDelta();f.render(),ht.render(at,c),j||(Ft(),j=!0),a&&a.update(Mt),requestAnimationFrame(gt)};return requestAnimationFrame(gt),{handleResize:Ft,scene:i,cleanup:()=>{window.removeEventListener("resize",Ft),r.dispose(),n.removeChild(r.domElement)}}}const C3=({darkMode:e})=>P.jsxs("div",{style:{textAlign:"center"},children:[P.jsx("h2",{children:"Interactive Media"}),P.jsx("div",{className:"column-content",id:"pf3js",children:P.jsx(by,{darkMode:e,containerID:"pf3js",threeJSEntry:w3})})]}),Pc={uniforms:{time:{value:0},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new D(0,0,0)},color:{value:new yt(16777215)},bgColor:{value:new yt(0)}},vertexShader:`
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
  `},Nc={uniforms:{time:{value:0},pointSize:{value:20},noiseScale:{value:1},noiseStrength:{value:.2},noiseFrequency:{value:5},noiseSpeed:{value:.1},noiseOffset:{value:new D(0,0,0)},color:{value:new yt(16777215)},bgColor:{value:new yt(0)}},vertexShader:`
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
    `};function R3(e,t){let n=e.current;if(!n)return;const i=new bm({antialias:!0});console.log(n.offsetWidth,", ",n.offsetHeight);const a=window.devicePixelRatio||1;i.setSize(n.offsetWidth,n.offsetHeight),i.setPixelRatio(a),n.appendChild(i.domElement);const s=window.getComputedStyle(t).backgroundColor,r=new Nu;console.log(s),r.background=new yt(s);const o=new hn(40,n.offsetWidth/n.offsetHeight,.1,1e3);o.position.z=5;const l=new co,c=new of({color:65280}),f=new Sn(l,c),h=new Is(10,10,100,100);let d=0,p=new Ce(Pc);p.uniforms=Pc.uniforms,p.transparent=!0,p.vertexShader=Pc.vertexShader,p.fragmentShader=Pc.fragmentShader,p.uniforms.bgColor.value=new yt(s),p.wireframe=!0;let v=new Ce(Nc);v.uniforms=Nc.uniforms,v.transparent=!0,v.vertexShader=Nc.vertexShader,v.fragmentShader=Nc.fragmentShader;const x=new Sn(h,p);x.position.set(0,-.2,5.1),x.rotation.x=-Math.PI/2,r.add(x);const m=new nR(h,v);m.position.set(0,-.2,5.1),m.rotation.x=-Math.PI/2,r.add(m);const u=w=>{i.setSize(n.offsetWidth,n.offsetHeight),o.aspect=n.offsetWidth/n.offsetHeight,o.updateProjectionMatrix()};window.addEventListener("resize",u);let _=!1;const g=()=>{d+=.001,p.uniforms.time.value=d,v.uniforms.time.value=d,_||(u(),_=!0),requestAnimationFrame(g),f.rotation.x+=.01,f.rotation.y+=.01,i.render(r,o)};return g(),{handleResize:u,handleDarkModeChange:()=>{console.log("Dark Mode Changed");const w=window.getComputedStyle(t).backgroundColor;new yt(w);const A=w.match(/\d+/g).map(Number),T=new yt(1-A[0]/255,1-A[1]/255,1-A[2]/255);console.log("BackgroundColor: ",w),r.background=new yt(w),p.uniforms.bgColor.value=new yt(w),p.uniforms.color.value=new yt(T),console.log("ForegroundColor: ",T),v.uniforms.color.value=new yt(T),p.uniforms.color.value=new yt(T)},scene:r,cleanup:()=>{window.removeEventListener("resize",u),i.dispose(),n.removeChild(i.domElement)}}}const D3=({darkMode:e,handleOpenLightbox:t})=>{const n=e?"white":"#333";return P.jsxs(om,{style:{justifyContent:"center",gap:"2rem"},childStyle:{minWidth:"400px"},children:[P.jsxs("div",{className:`portfolioCard ${e?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(P.jsx(kb,{}),{height:"80vh"}),children:[P.jsx("h2",{style:{color:n},children:"GameDev"}),P.jsx("h3",{children:"Games, game engines, physics and rendering"}),P.jsx("a",{href:"https://chanel-parfait.itch.io/gloria-armada",target:"_blank",rel:"noreferer",children:P.jsx("img",{src:"assets/Images/Gloria_Armada.png",alt:"Gloria Armada",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})})]}),P.jsxs("div",{className:`portfolioCard ${e?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(P.jsx(Xb,{darkMode:e}),{height:"80vh"}),children:[P.jsx("h2",{style:{color:n},children:"Data Analysis"}),P.jsx("p",{children:"Using data to uncover insights, drive business decisions, and create actionable solutions, with expertise in statistical analysis, machine learning, and visualization."}),P.jsx("img",{src:"assets/Images/tableau.webp",alt:"tableau",style:{maxWidth:"100%",objectFit:"contain",alignSelf:"normal",height:"auto"}})]}),P.jsxs("div",{className:`portfolioCard ${e?"dark-mode":"light-mode"}`,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:()=>t(P.jsx(C3,{darkMode:e}),{height:"80vh"}),children:[P.jsx("h2",{style:{textAlign:"center"},children:"Interactive Media"}),P.jsx("p",{children:"Interactive visualizations, simulations, and animations using react, three.js"}),P.jsx("div",{className:"column-content",id:"threejsContainer",children:P.jsx(by,{darkMode:e,containerID:"threejsContainer",threeJSEntry:R3})})]})]})},L3=({darkMode:e,handleOpenLightbox:t,scrollToSection:n})=>P.jsxs("div",{className:"container",children:[P.jsxs("div",{className:"column",style:{flexGrow:"0"},children:[P.jsxs("div",{style:{flex:"1",flexDirection:"vertical"},children:[P.jsx("div",{style:{justifyContent:"center",padding:"2rem"},children:P.jsx("h2",{style:{textAlign:"left",fontSize:"36",textWrap:"wrap",paddingLeft:"0rem"},children:"Let's make something amazing together!"})}),P.jsxs("p",{children:[" ","I am a software engineer with a passion for creating innovative solutions."," "]}),P.jsxs("p",{children:[" ","I have experience in various programming languages and frameworks."," "]}),P.jsxs("p",{children:[" ","I enjoy collaborating with teams and solving complex problems."," "]})]}),P.jsx(Ey,{darkMode:e,scrollToSection:n})]}),P.jsx("div",{className:"column",margin:"4rem",padding:"4rem",style:{flexShrink:"3"},children:P.jsx("img",{src:"assets/Images/Profile.png",alt:"Profile",style:{maxWidth:"300px",verticalAlign:"middle",height:"auto"}})})]}),U3=()=>{const[e,t]=kt.useState(!0),[n,i]=kt.useState(!1),[a,s]=kt.useState("Test"),[r,o]=kt.useState(null);kt.useEffect(()=>{setTimeout(()=>{window.scrollTo(0,0)},5)},[]);const[l,c]=kt.useState(!1);kt.useEffect(()=>{const v=()=>{c(!0),window.removeEventListener("scroll",v)};return window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]);const f=()=>{const v=document.getElementById("contactMe");v!=null?v.scrollIntoView({behavior:"smooth",block:"start"}):console.error("Target section not found")},h=(v,x)=>{s(v),o(x),i(!0)},d=()=>{i(!1)},p=()=>{t(v=>{const x=!v;return document.body.className=x?"dark-mode":"light-mode",x})};return P.jsxs("div",{className:"app",children:[P.jsx(Nb,{darkMode:e,isOpen:n,content:a,style:r,onClose:d}),P.jsx(Vb,{darkMode:e,toggleDarkMode:p}),P.jsxs("main",{className:`main ${e?"dark-mode":"light-mode"}`,children:[P.jsx(ks,{title:"Greetings",darkMode:e,style:{paddingTop:"1rem"},revealPercent:"-50% 0px",children:P.jsx(L3,{darkMode:e,scrollToSection:f})}),P.jsx(ks,{title:"Overview",darkMode:e,children:P.jsx(D3,{darkMode:e,handleOpenLightbox:h})}),P.jsx(ks,{title:"Skills",darkMode:e,children:P.jsx(Hb,{darkMode:e,children:" "})}),P.jsxs(ks,{title:"ContactMe",id:"contactMe",darkMode:e,revealPercent:"50px 0px",style:{backgroundColor:"#0061aa",paddingBottom:"1rem",paddingTop:"1rem"},children:[P.jsx("h2",{style:{textAlign:"center",color:"white",marginTop:"0px"},children:"Get In Touch!"}),P.jsx(wu,{darkMode:e,text:"Contact",style:{color:"white",borderColor:"white",borderRadius:"5px"},onClick:()=>h(P.jsx(Ib,{darkMode:e}),{height:"unset"})})]}),P.jsx(ks,{title:"Portfolio",darkMode:e,style:{padding:"0px"}}),P.jsx(ks,{title:"Footer",darkMode:e,revealPercent:"50px 0px",children:P.jsx(Gb,{darkMode:e})})]})]})};Cb.createRoot(document.getElementById("root")).render(P.jsx(Hu.StrictMode,{children:P.jsx(U3,{})}));
